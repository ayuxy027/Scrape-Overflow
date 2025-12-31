import { GOOGLE_DOMAINS, STACKOVERFLOW_DOMAIN } from '../config/constants.js';

export function cleanUrl(href: string): string | null {
  if (!href) return null;

  let cleanUrl = href;

  try {
    if (href.includes('url?q=')) {
      const urlObj = new URL(href, 'https://google.com');
      cleanUrl = urlObj.searchParams.get('q') || href;
    }

    if (cleanUrl.includes('&')) {
      cleanUrl = cleanUrl.split('&')[0];
    }

    if (cleanUrl.includes('#')) {
      cleanUrl = cleanUrl.split('#')[0];
    }

    if (!cleanUrl.startsWith('http')) {
      return null;
    }

    return cleanUrl;
  } catch {
    return null;
  }
}

export function shouldFilterUrl(url: string, excludeStackOverflow = false): boolean {
  if (!url) return true;

  if (GOOGLE_DOMAINS.some(domain => url.includes(domain))) {
    return true;
  }

  if (excludeStackOverflow && url.includes(STACKOVERFLOW_DOMAIN)) {
    return true;
  }

  return false;
}
