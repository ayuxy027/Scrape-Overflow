/**
 * Application constants
 */

export const LANGUAGE_FLAGS: Record<string, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  ja: '🇯🇵',
  zh: '🇨🇳',
  hi: '🇮🇳',
  pt: '🇧🇷',
  ko: '🇰🇷',
  ar: '🇸🇦',
  ru: '🇷🇺',
  it: '🇮🇹',
  nl: '🇳🇱',
  pl: '🇵🇱',
  tr: '🇹🇷',
  vi: '🇻🇳',
  th: '🇹🇭',
  id: '🇮🇩',
  cs: '🇨🇿',
  uk: '🇺🇦',
};

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_FLAG = '🌐';

export const GOOGLE_SEARCH_BASE = 'https://www.google.com/search';
export const STACKOVERFLOW_DOMAIN = 'stackoverflow.com';
export const GOOGLE_DOMAINS = ['google.com', 'gstatic.com'];

export const SELECTORS = {
  stackOverflowLinks: 'a[href*="stackoverflow.com/questions"]',
  googleResultLinks: '#search a[href^="http"]',
  stackOverflowAcceptedAnswer: '.accepted-answer .answercell .s-prose',
  stackOverflowFirstAnswer: '.answer .answercell .s-prose',
  googleResultParent: 'xpath=ancestor::div[contains(@class, "g") or @data-hveid][1]',
} as const;

export function getLanguageFlag(lang: string): string {
  return LANGUAGE_FLAGS[lang] || DEFAULT_FLAG;
}

