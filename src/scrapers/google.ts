import { PlaywrightCrawler } from 'crawlee';
import { Actor } from 'apify';
import { ScrapedResult, ActorInput } from '../types/index.js';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { SELECTORS, getLanguageFlag, GOOGLE_SEARCH_BASE } from '../config/constants.js';
import { cleanUrl, shouldFilterUrl } from '../utils/url.js';
import { ensureNonEmpty } from '../utils/validation.js';
import { detectCaptcha, extractSnippet, getLinkText } from './base.js';

export interface GoogleScraperConfig {
  queries: string[];
  maxResults: number;
  targetLang: string;
  translationService: TranslationService;
  proxyConfiguration?: ActorInput['proxyConfiguration'];
  existingResultsCount: number;
}

export async function scrapeGoogle(
  config: GoogleScraperConfig
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

  console.log(`\n🔵 Searching Google for ${maxResults} general results...`);

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

      const hasCaptcha = await detectCaptcha(page);
      if (hasCaptcha) {
        console.log('  ⚠️ CAPTCHA detected, attempting to extract results anyway...');
      }

      let searchLinks: any[] = [];
      
      for (const selector of SELECTORS.googleResultLinks) {
        try {
          const links = await page.locator(selector).all();
          if (links.length > 0) {
            searchLinks = links;
            console.log(`  📊 Found ${searchLinks.length} result links using selector: ${selector.slice(0, 50)}...`);
            break;
          }
        } catch (e) {
          continue;
        }
      }

      if (searchLinks.length === 0) {
        console.log('  ⚠️ No results found with primary selectors, trying comprehensive fallback...');
        
        try {
          const allLinks = await page.locator('a[href^="http"]').all();
          console.log(`  📊 Found ${allLinks.length} total HTTP links on page`);
          
          const excludedDomains = ['google.com', 'gstatic.com', 'youtube.com', 'maps.google.com', 'accounts.google.com'];
          
          for (const link of allLinks) {
            const href = await link.getAttribute('href');
            if (!href) continue;
            
            const isExcluded = excludedDomains.some(domain => href.includes(domain));
            if (isExcluded) continue;
            
            const linkText = await link.textContent();
            if (linkText && linkText.trim().length > 5) {
              const cleaned = cleanUrl(href);
              if (cleaned && !foundUrls.has(cleaned)) {
                searchLinks.push(link);
                if (searchLinks.length >= 30) break;
              }
            }
          }
          
          console.log(`  📊 Filtered to ${searchLinks.length} valid result links`);
        } catch (e) {
          console.log(`  ⚠️ Fallback selector failed: ${e}`);
        }
      }

      if (searchLinks.length === 0) {
        const pageText = await page.locator('body').textContent();
        const pageTitle = await page.title();
        console.log(`  ⚠️ No results found. Page title: "${pageTitle}"`);
        console.log(`  📄 Page text length: ${pageText?.length || 0} chars`);
        
        if (hasCaptcha || pageTitle.toLowerCase().includes('captcha') || pageTitle.toLowerCase().includes('verify')) {
          console.log('  ❌ CAPTCHA confirmed, skipping page');
          return;
        }
        
        console.log('  ⚠️ Page loaded but no search results found');
        console.log('  💡 Tip: Try DuckDuckGo or blog-specific searches as fallback');
        return;
      }

      for (const link of searchLinks) {
        if (results.length >= (existingResultsCount + maxResults)) break;

        const href = await link.getAttribute('href');
        if (!href) continue;

        const cleanedUrl = cleanUrl(href);
        if (!cleanedUrl || foundUrls.has(cleanedUrl)) continue;

        if (shouldFilterUrl(cleanedUrl, true)) continue;

        foundUrls.add(cleanedUrl);

        const titleText = await getLinkText(link, 'Search Result');
        const snippetText = (await extractSnippet(link, DEFAULT_CONFIG.maxSnippetLength)) || titleText;

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

        console.log(`  ✓ ${getLanguageFlag(detectedLang)} ${finalTitle.slice(0, 50)}...`);
      }
    },
  });

  const searchUrls = queries.slice(0, 2).map(
    q => `${GOOGLE_SEARCH_BASE}?q=${encodeURIComponent(q)}&num=30`
  );

  await crawler.run(searchUrls);

  return results;
}
