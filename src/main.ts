import { Actor } from 'apify';
import { ActorInput, ScrapedResult } from './types/index.js';
import { validateInput } from './utils/validation.js';
import { LingoTranslationService } from './services/lingo.js';
import { scrapeStackOverflow } from './scrapers/stackoverflow.js';
import { scrapeGoogle } from './scrapers/google.js';
import { scrapeDuckDuckGo } from './scrapers/duckduckgo.js';
import { scrapeBlogs } from './scrapers/blogs.js';
import { scrapeAnswerBodies } from './scrapers/answers.js';
import { getLanguageFlag } from './config/constants.js';
import { DEFAULT_CONFIG } from './config/defaults.js';

await Actor.init();

try {
  const rawInput = (await Actor.getInput<ActorInput>()) ?? {};
  const config = validateInput(rawInput);

  const {
  searchQuery, 
    targetLang,
  stackOverflowLinks, 
    googleLinks,
    translateQuery,
    includeAnswerBody,
    lingoApiKey,
  } = config;

  console.log('🚀 ScrapOverflow - Multilingual Developer Search');
  console.log('================================================');
  console.log(`📝 Query: "${searchQuery}"`);
  console.log(`🎯 Target language: ${getLanguageFlag(targetLang)} ${targetLang.toUpperCase()}`);
  console.log(`📊 SO links: ${stackOverflowLinks}, Google links: ${googleLinks}`);
  console.log(`🔄 Translate query: ${translateQuery}`);
  console.log(`📖 Include answers: ${includeAnswerBody}`);
  console.log('');

  const translationService = new LingoTranslationService({
    apiKey: lingoApiKey,
  });
  const translationAvailable = await translationService.initialize();

  if (!translationAvailable && lingoApiKey) {
    console.log('⚠️ Lingo.dev authentication failed, continuing without translation');
  } else if (!lingoApiKey) {
    console.log('⚠️ No Lingo.dev API key provided. Translation features disabled.');
    console.log('   Set lingoApiKey in input or LINGODOTDEV_API_KEY env var.');
  } else {
    console.log('✅ Lingo.dev translation service initialized');
  }

  const queryVariants = translateQuery
    ? await translationService.translateQueryToLanguages(searchQuery)
    : [searchQuery];

  console.log(`\n📋 Search queries (${queryVariants.length} variants):`);
  queryVariants.forEach((q, i) => console.log(`   ${i + 1}. ${q}`));

  const allResults: ScrapedResult[] = [];

  const soResults = await scrapeStackOverflow({
    queries: queryVariants,
    maxResults: stackOverflowLinks,
    targetLang,
    translationService,
    proxyConfiguration: rawInput.proxyConfiguration,
  });
  allResults.push(...soResults);

  let googleResults: ScrapedResult[] = [];
  
  try {
    googleResults = await scrapeGoogle({
      queries: queryVariants,
      maxResults: googleLinks,
      targetLang,
      translationService,
      proxyConfiguration: rawInput.proxyConfiguration,
      existingResultsCount: soResults.length,
    });
    allResults.push(...googleResults);
  } catch (error) {
    console.log(`  ⚠️ Google search failed: ${error}`);
  }

  if (googleResults.length === 0 && googleLinks > 0) {
    console.log('\n  🔄 Google returned 0 results, trying DuckDuckGo as fallback...');
    try {
      const duckDuckGoResults = await scrapeDuckDuckGo({
        queries: queryVariants,
        maxResults: googleLinks,
        targetLang,
        translationService,
        proxyConfiguration: rawInput.proxyConfiguration,
        existingResultsCount: soResults.length,
      });
      allResults.push(...duckDuckGoResults);
      googleResults = duckDuckGoResults;
      
      if (duckDuckGoResults.length === 0) {
        console.log('  🔄 DuckDuckGo also returned 0 results, trying blog search...');
        const blogResults = await scrapeBlogs({
          queries: queryVariants,
          maxResults: googleLinks,
          targetLang,
          translationService,
          proxyConfiguration: rawInput.proxyConfiguration,
          existingResultsCount: soResults.length,
        });
        allResults.push(...blogResults);
        googleResults = blogResults;
      }
    } catch (ddgError) {
      console.log(`  ⚠️ DuckDuckGo failed: ${ddgError}`);
      try {
        console.log('  🔄 Trying blog search as final fallback...');
        const blogResults = await scrapeBlogs({
          queries: queryVariants,
          maxResults: googleLinks,
          targetLang,
          translationService,
          proxyConfiguration: rawInput.proxyConfiguration,
          existingResultsCount: soResults.length,
        });
        allResults.push(...blogResults);
        googleResults = blogResults;
      } catch (blogError) {
        console.log(`  ❌ All search methods failed`);
      }
    }
  }

  if (includeAnswerBody) {
    await scrapeAnswerBodies({
      results: allResults,
      targetLang,
      translationService,
      proxyConfiguration: rawInput.proxyConfiguration,
    });
  }

  console.log('\n================================================');
  console.log('✅ ScrapOverflow Complete!');
  console.log(`📊 Total results: ${allResults.length}`);
  console.log(`   🟠 Stack Overflow: ${allResults.filter(r => r.source === 'stackoverflow').length}`);
  console.log(`   🔵 Google: ${allResults.filter(r => r.source === 'google').length}`);

  const langCounts = allResults.reduce((acc, r) => {
    acc[r.langDetected] = (acc[r.langDetected] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (Object.keys(langCounts).length > 0) {
    console.log('\n🌍 Languages found:');
    Object.entries(langCounts).forEach(([lang, count]) => {
      console.log(`   ${getLanguageFlag(lang)} ${lang.toUpperCase()}: ${count}`);
    });
  }

  const processedCount = allResults.length;
  if (processedCount > 0) {
  try {
    await Actor.charge({
      eventName: 'result',
        count: processedCount,
      });
      console.log(`\n💰 Charged for ${processedCount} results`);
    } catch {
      console.log(`\n📊 Processed ${processedCount} results`);
    }
  }
} catch (error) {
  console.error('❌ Fatal error:', error);
  throw error;
} finally {
  await Actor.exit();
}
