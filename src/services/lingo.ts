/**
 * Lingo.dev translation service
 * 
 * Implements the LingoDotDevEngine SDK for AI-powered translation.
 * See admin/Lingo.md for full documentation.
 */

import { LingoDotDevEngine } from 'lingo.dev/sdk';
import { TranslationService } from '../types/index.js';
import { DEFAULT_CONFIG } from '../config/defaults.js';
import { DEFAULT_LANGUAGE } from '../config/constants.js';

export interface LingoServiceConfig {
  apiKey?: string;
  apiUrl?: string;
  batchSize?: number;
  idealBatchItemSize?: number;
}

export class LingoTranslationService implements TranslationService {
  private engine: LingoDotDevEngine | null = null;
  private initialized = false;

  constructor(config?: LingoServiceConfig) {
    const apiKey = config?.apiKey || process.env.LINGODOTDEV_API_KEY;
    
    if (apiKey) {
      this.engine = new LingoDotDevEngine({
        apiKey,
        apiUrl: config?.apiUrl,
        batchSize: config?.batchSize,
        idealBatchItemSize: config?.idealBatchItemSize,
      });
    }
  }

  async initialize(): Promise<boolean> {
    if (this.initialized) return this.isAvailable();

    if (!this.engine) {
      return false;
    }

    try {
      await this.engine.whoami();
      this.initialized = true;
      return true;
    } catch {
      return false;
    }
  }

  isAvailable(): boolean {
    return this.initialized && this.engine !== null;
  }

  async detectLanguage(text: string): Promise<string> {
    if (!this.isAvailable()) {
      return DEFAULT_LANGUAGE;
    }

    try {
      const detected = await this.engine!.recognizeLocale(text);
      return detected || DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  }

  async translateText(
    text: string,
    sourceLang: string,
    targetLang: string
  ): Promise<string> {
    if (!this.isAvailable()) {
      return text;
    }

    if (sourceLang === targetLang) {
      return text;
    }

    if (!text || text.trim().length === 0) {
      return text;
    }

    try {
      const translated = await this.engine!.localizeText(text, {
        sourceLocale: sourceLang,
        targetLocale: targetLang,
        fast: true,
      });
      return translated || text;
    } catch {
      return text;
    }
  }

  async translateQueryToLanguages(
    query: string,
    targetLangs: string[] = [...DEFAULT_CONFIG.queryTranslationLanguages]
  ): Promise<string[]> {
    if (!this.isAvailable()) {
      return [query];
    }

    const queries: string[] = [query];
    const sourceLang = await this.detectLanguage(query);

    try {
      const languagesToTranslate = targetLangs.filter(l => l !== sourceLang);
      
      if (languagesToTranslate.length === 0) {
        return queries;
      }

      const translations = await this.engine!.batchLocalizeText(query, {
        sourceLocale: sourceLang,
        targetLocales: languagesToTranslate,
        fast: true,
      });

      if (translations && translations.length > 0) {
        queries.push(...translations);
      }
    } catch {
      // Return original query only
    }

    return [...new Set(queries)];
  }
}

