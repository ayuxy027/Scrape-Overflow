import { PlaywrightCrawler } from 'crawlee';
import { Actor } from 'apify';
import { ScrapedResult, ActorInput } from '../types/index.js';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { getLanguageFlag } from '../config/constants.js';
import { ensureNonEmpty } from '../utils/validation.js';

export interface BlogScraperConfig {
  queries: string[];
  maxResults: number;
  targetLang: string;
  translationService: TranslationService;
  proxyConfiguration?: ActorInput['proxyConfiguration'];
  existingResultsCount: number;
}

const BLOG_DOMAINS = [
  'dev.to',
  'medium.com',
  'hashnode.com',
  'freecodecamp.org',
  'css-tricks.com',
  'smashingmagazine.com',
  'sitepoint.com',
  'tutorialspoint.com',
  'w3schools.com',
  'mdn.io',
  'developer.mozilla.org',
];

export async function scrapeBlogs(
  config: BlogScraperConfig
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

  console.log(`\n📝 Searching developer blogs for ${maxResults} results...`);

  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: Math.min(queries.length * 3, DEFAULT_CONFIG.maxRequestsPerCrawl),
    requestHandlerTimeoutSecs: DEFAULT_CONFIG.requestTimeoutSecs,
    proxyConfiguration: proxyConfiguration?.useApifyProxy
      ? await Actor.createProxyConfiguration()
      : undefined,

    async requestHandler({ page, request }) {
      console.log(`  📄 Processing: ${request.url.slice(0, 80)}...`);

      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(3000);

      try {
        const url = new URL(request.url);
        const domain = url.hostname;

        if (BLOG_DOMAINS.some(blogDomain => domain.includes(blogDomain))) {
          const title = await page.title().catch(() => 'Blog Post');
          const metaDescription = await page.locator('meta[name="description"]').getAttribute('content').catch(() => '');
          
          const articleContent = await page.locator('article, main, .post-content, .article-content, .content').first().textContent().catch(() => '');
          const snippet = metaDescription || articleContent?.slice(0, DEFAULT_CONFIG.maxSnippetLength) || title;

          const detectedLang = await translationService.detectLanguage(title);
          const translatedTitle = await translationService.translateText(title, detectedLang, targetLang);
          const translatedSummary = await translationService.translateText(snippet, detectedLang, targetLang);

          const result: ScrapedResult = {
            source: 'google',
            url: request.url,
            title: translatedTitle,
            titleOriginal: title,
            summary: translatedSummary,
            summaryOriginal: snippet,
            langDetected: detectedLang || 'en',
            langTarget: targetLang,
            langFlag: getLanguageFlag(detectedLang || 'en'),
          };

          if (!foundUrls.has(request.url) && results.length < (existingResultsCount + maxResults)) {
            foundUrls.add(request.url);
            results.push(result);
            await Actor.pushData(result);
            console.log(`  ✓ ${getLanguageFlag(detectedLang)} ${title.slice(0, 50)}...`);
          }
        }
      } catch (e) {
        console.log(`  ⚠️ Error processing blog: ${e}`);
      }
    },
  });

  const searchUrls: string[] = [];
  
  for (const query of queries.slice(0, 2)) {
    for (const domain of BLOG_DOMAINS.slice(0, 5)) {
      searchUrls.push(`https://html.duckduckgo.com/html/?q=site:${domain}+${encodeURIComponent(query)}`);
    }
  }

  await crawler.run(searchUrls);

  return results;
}

