/**
 * ScrapOverflow - Main Actor Entry Point
 * 
 * Orchestrates multilingual Stack Overflow and Google search scraping
 * with AI-powered translation via Lingo.dev
 */

import { Actor } from 'apify';
import { ActorInput, ScrapedResult } from './types/index.js';
import { validateInput } from './utils/validation.js';
import { LingoTranslationService } from './services/lingo.js';
import { scrapeStackOverflow } from './scrapers/stackoverflow.js';
import { scrapeGoogle } from './scrapers/google.js';
import { scrapeAnswerBodies } from './scrapers/answers.js';
import { getLanguageFlag } from './config/constants.js';
import { DEFAULT_CONFIG } from './config/defaults.js';

await Actor.init();

try {
  // ============================================================================
  // INPUT VALIDATION & CONFIGURATION
  // ============================================================================

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

  // ============================================================================
  // INITIALIZATION LOG
  // ============================================================================

  console.log('🚀 ScrapOverflow - Multilingual Developer Search');
  console.log('================================================');
  console.log(`📝 Query: "${searchQuery}"`);
  console.log(`🎯 Target language: ${getLanguageFlag(targetLang)} ${targetLang.toUpperCase()}`);
  console.log(`📊 SO links: ${stackOverflowLinks}, Google links: ${googleLinks}`);
  console.log(`🔄 Translate query: ${translateQuery}`);
  console.log(`📖 Include answers: ${includeAnswerBody}`);
  console.log('');

  // ============================================================================
  // TRANSLATION SERVICE INITIALIZATION
  // ============================================================================

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

  // ============================================================================
  // QUERY TRANSLATION
  // ============================================================================

  const queryVariants = translateQuery
    ? await translationService.translateQueryToLanguages(searchQuery)
    : [searchQuery];

  console.log(`\n📋 Search queries (${queryVariants.length} variants):`);
  queryVariants.forEach((q, i) => console.log(`   ${i + 1}. ${q}`));

  // ============================================================================
  // SCRAPING EXECUTION
  // ============================================================================

  const allResults: ScrapedResult[] = [];

  // Scrape Stack Overflow
  const soResults = await scrapeStackOverflow({
    queries: queryVariants,
    maxResults: stackOverflowLinks,
    targetLang,
    translationService,
    proxyConfiguration: rawInput.proxyConfiguration,
  });
  allResults.push(...soResults);

  // Scrape Google
  const googleResults = await scrapeGoogle({
    queries: queryVariants,
    maxResults: googleLinks,
    targetLang,
    translationService,
    proxyConfiguration: rawInput.proxyConfiguration,
    existingResultsCount: soResults.length,
  });
  allResults.push(...googleResults);

  // Scrape answer bodies (optional)
  if (includeAnswerBody) {
    await scrapeAnswerBodies({
      results: allResults,
      targetLang,
      translationService,
      proxyConfiguration: rawInput.proxyConfiguration,
    });
  }

  // ============================================================================
  // RESULTS SUMMARY
  // ============================================================================

  console.log('\n================================================');
  console.log('✅ ScrapOverflow Complete!');
  console.log(`📊 Total results: ${allResults.length}`);
  console.log(`   🟠 Stack Overflow: ${allResults.filter(r => r.source === 'stackoverflow').length}`);
  console.log(`   🔵 Google: ${allResults.filter(r => r.source === 'google').length}`);

  // Language breakdown
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

  // ============================================================================
  // MONETIZATION
  // ============================================================================

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
