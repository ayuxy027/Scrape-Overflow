import { Actor } from 'apify';
import { PlaywrightCrawler } from 'crawlee';

interface Input {
  searchQuery?: string;
  stackOverflowLinks?: number;
  googleLinks?: number;
  proxyConfiguration?: {
    useApifyProxy?: boolean;
    proxyUrls?: string[];
  };
}

await Actor.init();

const input = (await Actor.getInput<Input>()) ?? {};

// Apply defaults
const searchQuery = input.searchQuery || 'crawlee timeout error';
const stackOverflowLinks = input.stackOverflowLinks ?? 5;
const googleLinks = input.googleLinks ?? 5;

// Input validation
if (!searchQuery) {
  throw new Error('You must provide a searchQuery');
}

console.log('Starting scraper with:', { 
  searchQuery, 
  stackOverflowLinks, 
  googleLinks 
});

// Track found links to avoid duplicates
const foundLinks = new Set<string>();

// Track processed items for monetization
let processedItemsCount = 0;

// 1. Stack Overflow links (via Google with Playwright - real browser)
if (searchQuery && stackOverflowLinks > 0) {
  console.log(`\n🔍 Searching for ${stackOverflowLinks} Stack Overflow links...`);
  
  const soCrawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: 5,
    proxyConfiguration: input.proxyConfiguration?.useApifyProxy 
      ? await Actor.createProxyConfiguration()
      : undefined,
    async requestHandler({ request, page }) {
      console.log('Processing Stack Overflow search:', request.url);
      
      // Wait for page to load
      await page.waitForLoadState('domcontentloaded');
      
      const pageTitle = await page.title();
      console.log('Page title:', pageTitle);
      
      // Check for CAPTCHA
      const bodyText = await page.locator('body').textContent();
      if (bodyText?.toLowerCase().includes('unusual traffic') || bodyText?.toLowerCase().includes('captcha')) {
        console.log('⚠️ CAPTCHA detected!');
        return;
      }
      
      // Wait a bit for dynamic content
      await page.waitForTimeout(2000);
      
      // Get all Stack Overflow links
      const soLinks = await page.locator('a[href*="stackoverflow.com/questions"]').all();
      console.log(`Found ${soLinks.length} Stack Overflow links on page`);
      
      let resultCount = 0;
      for (const link of soLinks) {
        if (foundLinks.size >= stackOverflowLinks) break;
        
        const href = await link.getAttribute('href');
        if (!href) continue;
        
        // Clean URL
        const cleanUrl = href.includes('url?q=') 
          ? new URL(href).searchParams.get('q') || href 
          : href;
        
        if (!foundLinks.has(cleanUrl)) {
          foundLinks.add(cleanUrl);
          resultCount++;
          
          const title = (await link.textContent())?.trim() || 'Stack Overflow Question';
          
          // Try to get snippet
          const parent = link.locator('xpath=ancestor::div[contains(@class, "g") or @data-hveid][1]');
          const snippetText = await parent.textContent().catch(() => '');
          const snippet = snippetText?.slice(0, 200) || title;
          
          console.log(`✓ SO #${resultCount}: ${title.slice(0, 60)}...`);
          
          await Actor.pushData({
            source: 'stackoverflow',
            url: cleanUrl,
            title,
            summary: snippet,
          });
          processedItemsCount++;
        }
      }
      
      console.log(`Found ${foundLinks.size} Stack Overflow links total`);
    },
  });

  // Google search: site:stackoverflow.com + query
  const soSearchUrl = `https://www.google.com/search?q=site:stackoverflow.com+${encodeURIComponent(searchQuery)}&num=50`;
  console.log('Fetching:', soSearchUrl);
  await soCrawler.run([soSearchUrl]);
}

// 2. General Google search links
if (searchQuery && googleLinks > 0) {
  console.log(`\n🌐 Searching for ${googleLinks} general Google links...`);
  
  const googleCrawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: 5,
    proxyConfiguration: input.proxyConfiguration?.useApifyProxy 
      ? await Actor.createProxyConfiguration()
      : undefined,
    async requestHandler({ request, page }) {
      console.log('Processing Google search:', request.url);
      
      // Wait for page to load
      await page.waitForLoadState('domcontentloaded');
      
      const pageTitle = await page.title();
      console.log('Page title:', pageTitle);
      
      // Check for CAPTCHA
      const bodyText = await page.locator('body').textContent();
      if (bodyText?.toLowerCase().includes('unusual traffic') || bodyText?.toLowerCase().includes('captcha')) {
        console.log('⚠️ CAPTCHA detected!');
        return;
      }
      
      // Wait a bit for dynamic content
      await page.waitForTimeout(2000);
      
      // Get all result links
      const searchLinks = await page.locator('#search a[href^="http"]').all();
      console.log(`Found ${searchLinks.length} potential result links`);
      
      let resultCount = 0;
      for (const link of searchLinks) {
        if (foundLinks.size >= (stackOverflowLinks + googleLinks)) break;
        
        const href = await link.getAttribute('href');
        if (!href || href.includes('google.com') || href.includes('gstatic.com')) continue;
        
        if (!foundLinks.has(href)) {
          foundLinks.add(href);
          resultCount++;
          
          const title = (await link.textContent())?.trim() || 'Search Result';
          
          // Try to get snippet from parent
          const parent = link.locator('xpath=ancestor::div[contains(@class, "g") or @data-hveid][1]');
          const snippetText = await parent.textContent().catch(() => '');
          const snippet = snippetText?.slice(0, 200) || title;
          
          console.log(`✓ Google #${resultCount}: ${title.slice(0, 60)}...`);
          
          await Actor.pushData({
            source: 'google',
            url: href,
            title,
            summary: snippet,
          });
          processedItemsCount++;
        }
      }
      
      console.log(`Found ${foundLinks.size} total links (SO + Google)`);
    },
  });

  // Regular Google search (no site: filter)
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&num=50`;
  console.log('Fetching:', googleSearchUrl);
  await googleCrawler.run([googleSearchUrl]);
}

console.log('\n✅ Scraping complete!');
console.log(`Total unique links found: ${foundLinks.size}`);

// Charge for processed items
if (processedItemsCount > 0) {
  try {
    await Actor.charge({
      eventName: 'result',
      count: processedItemsCount,
    });
    console.log(`💰 Charged for ${processedItemsCount} result items`);
  } catch (err) {
    console.log(`📊 Processed ${processedItemsCount} result items (monetization not configured yet)`);
  }
}

await Actor.exit();
