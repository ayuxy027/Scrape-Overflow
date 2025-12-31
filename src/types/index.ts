export interface ActorInput {
  searchQuery?: string;
  targetLang?: string;
  stackOverflowLinks?: number;
  googleLinks?: number;
  translateQuery?: boolean;
  includeAnswerBody?: boolean;
  lingoApiKey?: string;
  proxyConfiguration?: {
    useApifyProxy?: boolean;
    proxyUrls?: string[];
  };
}

export interface ScrapedResult {
  source: 'stackoverflow' | 'google';
  url: string;
  title: string;
  titleOriginal: string;
  summary: string;
  summaryOriginal: string;
  answerBody?: string;
  langDetected: string;
  langTarget: string;
  langFlag: string;
}

export interface TranslationService {
  detectLanguage(text: string): Promise<string>;
  translateText(text: string, sourceLang: string, targetLang: string): Promise<string>;
  translateQueryToLanguages(query: string, targetLangs: string[]): Promise<string[]>;
  isAvailable(): boolean;
}
