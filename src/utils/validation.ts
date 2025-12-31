import { ActorInput } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';

export function validateInput(input: ActorInput): {
  searchQuery: string;
  targetLang: string;
  stackOverflowLinks: number;
  googleLinks: number;
  translateQuery: boolean;
  includeAnswerBody: boolean;
  lingoApiKey: string | undefined;
} {
  const searchQuery = input.searchQuery?.trim();

  if (!searchQuery || searchQuery.length === 0) {
    throw new Error('❌ You must provide a searchQuery');
  }

  if (searchQuery.length > 200) {
    throw new Error('❌ searchQuery must be 200 characters or less');
  }

  const stackOverflowLinks = Math.max(
    0,
    Math.min(50, input.stackOverflowLinks ?? DEFAULT_CONFIG.stackOverflowLinks)
  );

  const googleLinks = Math.max(
    0,
    Math.min(50, input.googleLinks ?? DEFAULT_CONFIG.googleLinks)
  );

  return {
    searchQuery,
    targetLang: input.targetLang || DEFAULT_CONFIG.targetLang,
    stackOverflowLinks,
    googleLinks,
    translateQuery: input.translateQuery ?? DEFAULT_CONFIG.translateQuery,
    includeAnswerBody: input.includeAnswerBody ?? DEFAULT_CONFIG.includeAnswerBody,
    lingoApiKey: input.lingoApiKey || process.env.LINGODOTDEV_API_KEY,
  };
}

export function ensureNonEmpty(text: string | null | undefined, fallback: string): string {
  if (!text || text.trim().length === 0) {
    return fallback;
  }
  return text.trim();
}
