import { test, expect } from '@playwright/test';
import { openApp } from './helpers.ts';

test.describe('Duel lobby', () => {
  test('opens without errors and shows mode/difficulty pickers', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await openApp(page);
    await page.click('#sb-duel');

    await expect(page.locator('#duel-lobby')).toBeVisible();
    const modeButtons = page.locator('#duel-mode-picker button');
    await expect(modeButtons).toHaveCount(6);

    expect(errors).toEqual([]);
  });

  test('selecting a mode and difficulty persists across reopen', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');

    // Select the 2nd mode (reverse) and a CEFR difficulty (A1, 2nd button)
    await page.click('#duel-mode-picker button:nth-child(2)');
    await page.click('#duel-options-row .duel-cefr-btn:nth-child(2)');

    await expect(page.locator('#duel-mode-picker button:nth-child(2)')).toHaveClass(
      /duel-mode-sel/,
    );
    await expect(page.locator('#duel-options-row .duel-cefr-active')).toHaveCount(1);

    // Close and reopen the lobby
    await page.click('#sb-duel');
    await page.click('#sb-duel');

    await expect(page.locator('#duel-mode-picker button:nth-child(2)')).toHaveClass(
      /duel-mode-sel/,
    );
    await expect(page.locator('#duel-options-row .duel-cefr-active')).toHaveCount(1);
  });

  test('resume-session check on lobby open does not throw with no saved sessions', async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await openApp(page);
    await page.click('#sb-duel');
    await page.waitForTimeout(1000); // allow _tryResumeSession() round-trip

    await expect(page.locator('#duel-resume-mount')).toBeEmpty();
    expect(errors).toEqual([]);
  });
});
