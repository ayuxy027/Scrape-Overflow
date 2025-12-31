export const DEFAULT_CONFIG = {
  targetLang: 'en',
  stackOverflowLinks: 5,
  googleLinks: 5,
  translateQuery: true,
  includeAnswerBody: false,
  maxRequestsPerCrawl: 10,
  requestTimeoutSecs: 60,
  answerRequestTimeoutSecs: 30,
  maxAnswerLength: 2000,
  maxSnippetLength: 300,
  maxAnswerUrls: 10,
  queryTranslationLanguages: ['en', 'es', 'de', 'fr', 'ja', 'pt'],
} as const;
