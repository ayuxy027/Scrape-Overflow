import { PlaywrightCrawler } from 'crawlee';
import { Actor } from 'apify';
import { ScrapedResult, ActorInput } from '../types/index.js';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { getLanguageFlag } from '../config/constants.js';
import { cleanUrl, shouldFilterUrl } from '../utils/url.js';
import { ensureNonEmpty } from '../utils/validation.js';
import { getLinkText } from './base.js';

export interface DuckDuckGoScraperConfig {
  queries: string[];
  maxResults: number;
  targetLang: string;
  translationService: TranslationService;
  proxyConfiguration?: ActorInput['proxyConfiguration'];
  existingResultsCount: number;
}

export async function scrapeDuckDuckGo(
  config: DuckDuckGoScraperConfig
): Promise<ScrapedResult[]> {
  const {
    queries,
    maxResults,
    targetLang,
    translationService,
    proxyConfiguration,
    existingResultsCount,
  } = config;

  if (maxResults <= 0) {
    return [];
  }

  const results: ScrapedResult[] = [];
  const foundUrls = new Set<string>();

  console.log(`\n🦆 Searching DuckDuckGo for ${maxResults} results...`);

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: Math.min(queries.length * 2, DEFAULT_CONFIG.maxRequestsPerCrawl),
    requestHandlerTimeoutSecs: DEFAULT_CONFIG.requestTimeoutSecs,
    proxyConfiguration: proxyConfiguration?.useApifyProxy
      ? await Actor.createProxyConfiguration()
      : undefined,

    async requestHandler({ page, request }) {
      console.log(`  📄 Processing: ${request.url.slice(0, 80)}...`);

      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2000);

      try {
        let searchLinks: any[] = [];
        
        const selectors = [
          'a[data-testid="result-title-a"]',
          'a.result__a',
          'a[class*="result"]',
          'h2 a',
          'a[href^="http"]:not([href*="duckduckgo.com"])',
        ];

        for (const selector of selectors) {
          try {
            const links = await page.locator(selector).all();
            if (links.length > 5) {
              searchLinks = links;
              console.log(`  📊 Found ${searchLinks.length} result links using: ${selector}`);
              break;
            }
          } catch (e) {
            continue;
          }
        }

        if (searchLinks.length === 0) {
          const allLinks = await page.locator('a[href^="http"]').all();
          console.log(`  📊 Found ${allLinks.length} total HTTP links, filtering...`);
          
          for (const link of allLinks) {
            const href = await link.getAttribute('href');
            if (href && !href.includes('duckduckgo.com') && !href.includes('google.com')) {
              const linkText = await link.textContent();
              if (linkText && linkText.trim().length > 5) {
                searchLinks.push(link);
                if (searchLinks.length >= 30) break;
              }
            }
          }
          console.log(`  📊 Filtered to ${searchLinks.length} valid links`);
        }

        console.log(`  🔍 Processing ${searchLinks.length} links...`);
        
        for (let i = 0; i < searchLinks.length; i++) {
          if (results.length >= (existingResultsCount + maxResults)) break;

          const link = searchLinks[i];
          
          try {
            const href = await link.getAttribute('href');
            if (!href) {
              console.log(`  ⚠️ Link ${i+1} has no href, skipping`);
              continue;
            }

            let cleanedUrl = cleanUrl(href);
            if (!cleanedUrl) {
              cleanedUrl = href.startsWith('http') ? href : `https://${href}`;
            }
            
            if (!cleanedUrl || foundUrls.has(cleanedUrl)) {
              console.log(`  ⚠️ Link ${i+1} duplicate or invalid: ${cleanedUrl?.slice(0, 50)}`);
              continue;
            }

            if (shouldFilterUrl(cleanedUrl, false)) {
              console.log(`  ⚠️ Link ${i+1} filtered: ${cleanedUrl?.slice(0, 50)}`);
              continue;
            }

            foundUrls.add(cleanedUrl);

            const titleText = await getLinkText(link, 'Search Result');
            
            let snippetText = '';
            try {
              const parent = link.locator('xpath=ancestor::div[contains(@class, "result")][1]').first();
              snippetText = await parent.textContent().catch(() => '');
              if (snippetText) {
                snippetText = snippetText.replace(titleText, '').trim();
                snippetText = snippetText.slice(0, DEFAULT_CONFIG.maxSnippetLength);
              }
            } catch {
              snippetText = '';
            }
            
            if (!snippetText) {
              try {
                const nextSibling = link.locator('xpath=following-sibling::*[1]').first();
                snippetText = await nextSibling.textContent().catch(() => '') || '';
                snippetText = snippetText.slice(0, DEFAULT_CONFIG.maxSnippetLength);
              } catch {
                snippetText = titleText;
              }
            }

            const finalTitle = ensureNonEmpty(titleText, 'Search Result');
            const finalSnippet = ensureNonEmpty(snippetText, finalTitle);

            const detectedLang = await translationService.detectLanguage(finalTitle);
            const translatedTitle = await translationService.translateText(finalTitle, detectedLang, targetLang);
            const translatedSummary = await translationService.translateText(finalSnippet, detectedLang, targetLang);

            const result: ScrapedResult = {
              source: 'google',
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

            console.log(`  ✓ [${results.length}] ${getLanguageFlag(detectedLang)} ${finalTitle.slice(0, 50)}...`);
          } catch (linkError) {
            console.log(`  ⚠️ Error processing link ${i+1}: ${linkError}`);
            continue;
          }
        }
        
        console.log(`  ✅ Successfully extracted ${results.length} results from DuckDuckGo`);
      } catch (e) {
        console.log(`  ⚠️ Error processing DuckDuckGo: ${e}`);
      }
    },
  });

  const searchUrls = queries.slice(0, 2).map(
    q => `https://html.duckduckgo.com/html/?q=${encodeURIComponent(q)}`
  );

  await crawler.run(searchUrls);

  return results;
}

