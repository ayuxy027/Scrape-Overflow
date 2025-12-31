import { Page } from 'playwright';
import { SELECTORS } from '../config/constants.js';
import { ensureNonEmpty } from '../utils/validation.js';

export async function detectCaptcha(page: Page): Promise<boolean> {
  try {
    const bodyText = await page.locator('body').textContent();
    const lowerText = bodyText?.toLowerCase() || '';
    return lowerText.includes('unusual traffic') || lowerText.includes('captcha');
  } catch {
    return false;
  }
}

export async function extractSnippet(
  link: any,
  maxLength: number
): Promise<string> {
  try {
    const parent = link.locator(SELECTORS.googleResultParent);
    const parentText = await parent.textContent();
    if (parentText) {
      return parentText.slice(0, maxLength).trim();
    }
  } catch {
    // Fallback handled below
  }
  return '';
}

export async function getLinkText(
  link: any,
  fallback: string
): Promise<string> {
  const text = await link.textContent();
  return ensureNonEmpty(text, fallback);
}
