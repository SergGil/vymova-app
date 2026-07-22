import { test, expect } from '@playwright/test';
import { openApp, playOptionModeToCompletion, playTypedModeToCompletion } from './helpers.ts';

// Deeper gameplay-completion coverage for the "Cards" mode group (see
// js/features/mode-card-grid.tsx). Tier 1 smoke coverage (open/close, no
// errors) already exists in tests-e2e/modes-smoke.spec.ts — these drive each
// mode through a full session to its final screen instead.

function setupErrorCapture(page: import('@playwright/test').Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => {
    // See modes-smoke.spec.ts: browser network-log noise, not a thrown error.
    if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
      errors.push(msg.text());
    }
  });
  return errors;
}

test.describe('Cards modes gameplay', () => {
  test('quiz: full session reaches the final screen', async ({ page }) => {
    const errors = setupErrorCapture(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-quiz');

    const overlay = page.locator('#quiz-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('listen: full session reaches the final screen', async ({ page }) => {
    const errors = setupErrorCapture(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-listen');

    const overlay = page.locator('#listen-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('fib: full session reaches the final screen', async ({ page }) => {
    const errors = setupErrorCapture(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-fib');

    const overlay = page.locator('#fib-overlay');
    await expect(overlay).toBeVisible();

    await playTypedModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('write: full session reaches the final screen', async ({ page }) => {
    const errors = setupErrorCapture(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-write');

    const overlay = page.locator('#write-overlay');
    await expect(overlay).toBeVisible();

    await playTypedModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('tempo: answering a question registers and Escape closes mid-game', async ({ page }) => {
    const errors = setupErrorCapture(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-tempo');

    const overlay = page.locator('#tempo-overlay');
    await expect(overlay).toBeVisible();

    // Tempo is timed (js/modes/tempo.tsx's countdown), not a fixed 10-question
    // deck like the other Cards modes — a full-session test would mean a real
    // multi-second wait for the clock to run out, so this only exercises one
    // answer plus the Escape-to-close shortcut instead of full completion.
    await page.click('[data-i18n="tempo.start"]');

    const option = overlay.locator('.tempo-opt').first();
    await option.waitFor({ state: 'visible' });
    await option.click();
    await expect(option).toBeDisabled();

    await page.keyboard.press('Escape');
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });
});
