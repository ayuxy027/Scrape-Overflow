/**
 * URL cleaning and validation utilities
 */

import { GOOGLE_DOMAINS, STACKOVERFLOW_DOMAIN } from '../config/constants.js';

/**
 * Cleans a URL by removing Google redirects and tracking parameters
 */
export function cleanUrl(href: string): string | null {
  if (!href) return null;

  let cleanUrl = href;

  try {
    // Handle Google redirect URLs (url?q=...)
    if (href.includes('url?q=')) {
      const urlObj = new URL(href, 'https://google.com');
      cleanUrl = urlObj.searchParams.get('q') || href;
    }

    // Remove tracking parameters
    if (cleanUrl.includes('&')) {
      cleanUrl = cleanUrl.split('&')[0];
    }

    // Remove fragments
    if (cleanUrl.includes('#')) {
      cleanUrl = cleanUrl.split('#')[0];
    }

    // Validate URL format
    if (!cleanUrl.startsWith('http')) {
      return null;
    }

    return cleanUrl;
  } catch {
    return null;
  }
}

/**
 * Checks if a URL should be filtered out
 */
export function shouldFilterUrl(url: string, excludeStackOverflow = false): boolean {
  if (!url) return true;

  // Filter out Google domains
  if (GOOGLE_DOMAINS.some(domain => url.includes(domain))) {
    return true;
  }

  // Optionally exclude Stack Overflow (if already scraped separately)
  if (excludeStackOverflow && url.includes(STACKOVERFLOW_DOMAIN)) {
    return true;
  }

  return false;
}

