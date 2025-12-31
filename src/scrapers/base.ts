import { Page } from 'playwright';
import { SELECTORS } from '../config/constants.js';
import { ensureNonEmpty } from '../utils/validation.js';

export async function detectCaptcha(page: Page): Promise<boolean> {
  try {
    const bodyText = await page.locator('body').textContent();
    const lowerText = bodyText?.toLowerCase() || '';
    
    const captchaIndicators = [
      'unusual traffic from your computer network',
      'our systems have detected unusual traffic',
      'sorry, we have detected unusual traffic',
      'captcha',
      'verify you\'re not a robot',
      'verify you are not a robot'
    ];
    
    const hasCaptcha = captchaIndicators.some(indicator => lowerText.includes(indicator));
    
    if (hasCaptcha) {
      const title = await page.title();
      const titleLower = title.toLowerCase();
      if (titleLower.includes('captcha') || titleLower.includes('verify')) {
        return true;
      }
    }
    
    return false;
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
