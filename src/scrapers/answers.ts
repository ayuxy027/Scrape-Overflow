/**
 * Stack Overflow answer body scraper
 */

import { PlaywrightCrawler } from 'crawlee';
import { Actor } from 'apify';
import { ScrapedResult, ActorInput } from '../types/index.js';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { SELECTORS } from '../config/constants.js';

export interface AnswerScraperConfig {
  results: ScrapedResult[];
  targetLang: string;
  translationService: TranslationService;
  proxyConfiguration?: ActorInput['proxyConfiguration'];
}

export async function scrapeAnswerBodies(
  config: AnswerScraperConfig
): Promise<void> {
  const { results, targetLang, translationService, proxyConfiguration } = config;

  const soResults = results.filter(r => r.source === 'stackoverflow');
  if (soResults.length === 0) {
    return;
  }

  console.log('\n📖 Fetching Stack Overflow answer bodies...');

  const soUrls = soResults
    .map(r => r.url)
    .slice(0, DEFAULT_CONFIG.maxAnswerUrls);

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: soUrls.length,
    requestHandlerTimeoutSecs: DEFAULT_CONFIG.answerRequestTimeoutSecs,
    proxyConfiguration: proxyConfiguration?.useApifyProxy
      ? await Actor.createProxyConfiguration()
      : undefined,

    async requestHandler({ page, request }) {
      const url = request.url;

      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(1000);

      let answerText = '';

      try {
        // Try accepted answer first
        const acceptedAnswer = page.locator(SELECTORS.stackOverflowAcceptedAnswer).first();
        if (await acceptedAnswer.count() > 0) {
          answerText = await acceptedAnswer.textContent() || '';
        }
      } catch {
        // No accepted answer
      }

      if (!answerText) {
        try {
          // Fall back to first answer
          const firstAnswer = page.locator(SELECTORS.stackOverflowFirstAnswer).first();
          if (await firstAnswer.count() > 0) {
            answerText = await firstAnswer.textContent() || '';
          }
        } catch {
          // No answer found
        }
      }

      if (answerText) {
        answerText = answerText.trim().slice(0, DEFAULT_CONFIG.maxAnswerLength);

        const resultIndex = results.findIndex(r => r.url === url);
        if (resultIndex !== -1) {
          const detectedLang = results[resultIndex].langDetected;
          const translatedAnswer = await translationService.translateText(
            answerText,
            detectedLang,
            targetLang
          );

          results[resultIndex].answerBody = translatedAnswer;

          // Push updated result to dataset
          await Actor.pushData(results[resultIndex]);

          console.log(`  ✓ Got answer for: ${url.slice(0, 50)}...`);
        }
      }
    },
  });

  await crawler.run(soUrls);
}

