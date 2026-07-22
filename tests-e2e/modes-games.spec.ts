import { test, expect } from '@playwright/test';
import { captureErrors, openApp, playTypedModeToCompletion } from './helpers.ts';

// Deeper gameplay coverage for the "Games" mode group (see
// js/features/mode-card-grid.tsx). Tier 1 smoke coverage (open/close, no
// errors) already exists in tests-e2e/modes-smoke.spec.ts.
//
// pairs and letters go to a full session: pairs.tsx exposes each tile's
// data-id in the DOM (js/modes/pairs.tsx's makeBtn), so the correct match can
// be found directly instead of guessed; letters.tsx's "done" button always
// advances the round regardless of whether any words were found. spelling-bee
// reuses the Cards group's typed-answer helper (right-or-wrong both advance,
// same as fib/write). catpairs and scramble only get an interaction check —
// neither exposes which tiles/letters are correct anywhere in the DOM
// (catpairs.tsx's pairing key is a React-only closure variable, and
// scramble.tsx's target word is only known by the app's dictionary), so
// actually solving them isn't something a black-box e2e test can do.
test.describe('Games modes gameplay', () => {
  test('pairs: full game reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-pairs');

    const overlay = page.locator('#pairs-overlay');
    await expect(overlay).toBeVisible();

    for (let i = 0; i < 6; i++) {
      const enTile = overlay.locator('#pairs-col-en .pair-btn:not(.matched)').first();
      await enTile.waitFor({ state: 'visible' });
      const id = await enTile.getAttribute('data-id');
      await enTile.click();
      await overlay.locator(`#pairs-col-ua .pair-btn[data-id="${id}"]`).click();
    }

    const final = overlay.locator('#pairs-final');
    await expect(final).toBeVisible();
    await overlay.locator('#pairs-exit').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('catpairs: selecting a category starts the matching grid', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-catpairs');

    const overlay = page.locator('#catpairs-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('.cat-select-btn:not([disabled])').first().click();

    const tile = overlay.locator('.pair-btn').first();
    await tile.waitFor({ state: 'visible' });
    await tile.click();
    await expect(tile).toHaveClass(/selected/);

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('scramble: tile selection and shuffle interactions work', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-scramble');

    const overlay = page.locator('#scr-overlay');
    await expect(overlay).toBeVisible();

    const tile = overlay.locator('button.scr-tile:not(.scr-tile-placed)').first();
    await tile.waitFor({ state: 'visible' });
    await tile.click();
    await expect(overlay.locator('.scr-tile-placed')).toHaveCount(1);

    await overlay.locator('[data-i18n="scramble.clearBtn"]').click();
    await expect(overlay.locator('.scr-tile-placed')).toHaveCount(0);

    // Just needs to not throw — shuffling doesn't change the placed count.
    await overlay.locator('[data-i18n="scramble.shuffleBtn"]').click();

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('letters: clicking through every round reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-letters');

    const overlay = page.locator('#wl-overlay');
    await expect(overlay).toBeVisible();

    for (let i = 0; i < 5; i++) {
      const doneBtn = overlay.locator('[data-i18n="letters.doneBtn"]');
      await doneBtn.waitFor({ state: 'visible' });
      await doneBtn.click();
    }

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('spelling-bee: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-spelling-bee');

    const overlay = page.locator('#bee-overlay');
    await expect(overlay).toBeVisible();

    await playTypedModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });
});
