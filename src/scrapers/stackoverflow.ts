/**
 * Stack Overflow scraper
 */

import { PlaywrightCrawler } from 'crawlee';
import { Actor } from 'apify';
import { ScrapedResult, ActorInput } from '../types/index.js';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { SELECTORS, getLanguageFlag, GOOGLE_SEARCH_BASE } from '../config/constants.js';
import { cleanUrl } from '../utils/url.js';
import { ensureNonEmpty } from '../utils/validation.js';
import { detectCaptcha, extractSnippet, getLinkText } from './base.js';

export interface StackOverflowScraperConfig {
  queries: string[];
  maxResults: number;
  targetLang: string;
  translationService: TranslationService;
  proxyConfiguration?: ActorInput['proxyConfiguration'];
}

export async function scrapeStackOverflow(
  config: StackOverflowScraperConfig
): Promise<ScrapedResult[]> {
  const { queries, maxResults, targetLang, translationService, proxyConfiguration } = config;

  if (maxResults <= 0) {
    return [];
  }

  const results: ScrapedResult[] = [];
  const foundUrls = new Set<string>();

  console.log(`\n🟠 Searching Stack Overflow for ${maxResults} results...`);

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: Math.min(queries.length * 2, DEFAULT_CONFIG.maxRequestsPerCrawl),
    requestHandlerTimeoutSecs: DEFAULT_CONFIG.requestTimeoutSecs,
    proxyConfiguration: proxyConfiguration?.useApifyProxy
      ? await Actor.createProxyConfiguration()
      : undefined,

    async requestHandler({ page, request }) {
      console.log(`  📄 Processing: ${request.url.slice(0, 80)}...`);

      await page.waitForLoadState('domcontentloaded');

      if (await detectCaptcha(page)) {
        console.log('  ⚠️ CAPTCHA detected, skipping...');
        return;
      }

      await page.waitForTimeout(1500);

      const soLinks = await page.locator(SELECTORS.stackOverflowLinks).all();
      console.log(`  📊 Found ${soLinks.length} Stack Overflow links`);

      for (const link of soLinks) {
        if (foundUrls.size >= maxResults) break;

        const href = await link.getAttribute('href');
        if (!href) continue;

        const cleanedUrl = cleanUrl(href);
        if (!cleanedUrl || foundUrls.has(cleanedUrl)) continue;

        foundUrls.add(cleanedUrl);

        const titleText = await getLinkText(link, 'Stack Overflow Question');
        const snippetText = (await extractSnippet(link, DEFAULT_CONFIG.maxSnippetLength)) || titleText;

        const finalTitle = ensureNonEmpty(titleText, 'Stack Overflow Question');
        const finalSnippet = ensureNonEmpty(snippetText, finalTitle);

        const detectedLang = await translationService.detectLanguage(finalTitle);
        const translatedTitle = await translationService.translateText(finalTitle, detectedLang, targetLang);
        const translatedSummary = await translationService.translateText(finalSnippet, detectedLang, targetLang);

        const result: ScrapedResult = {
          source: 'stackoverflow',
          url: cleanedUrl,
          title: translatedTitle,
          titleOriginal: finalTitle,
          summary: translatedSummary,
          summaryOriginal: finalSnippet,
          langDetected: detectedLang || 'en',
          langTarget: targetLang,
          langFlag: getLanguageFlag(detectedLang || 'en'),
        };

        results.push(result);
        await Actor.pushData(result);

        console.log(`  ✓ ${getLanguageFlag(detectedLang)} ${finalTitle.slice(0, 50)}...`);
      }
    },
  });

  const searchUrls = queries.slice(0, 3).map(
    q => `${GOOGLE_SEARCH_BASE}?q=site:stackoverflow.com+${encodeURIComponent(q)}&num=30`
  );

  await crawler.run(searchUrls);

  return results;
}

