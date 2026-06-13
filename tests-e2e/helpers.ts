import type { Page } from '@playwright/test';

/** Open the app and dismiss the first-run onboarding overlay. */
export async function openApp(page: Page): Promise<void> {
  await page.goto('/flashcard_trainer_starwars.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => { document.getElementById('ob-overlay')?.remove(); });
}
