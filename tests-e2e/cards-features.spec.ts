import { test, expect } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Coverage for three small, independent flashcard-attached features that
// had no e2e coverage before: the mnemonic note modal, the word-detail
// modal, and the achievement popup.

test.describe('Note modal', () => {
  test('saving a note shows it on the card and brightens the note button', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const noteBtn = page.locator('#btn-note');
    const noteDisplay = page.locator('#card-note-display');
    await expect(noteDisplay).toBeHidden();

    await noteBtn.click();
    const overlay = page.locator('#note-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('.note-textarea').fill('remember: sounds like "banana"');
    // Save/close — note-modal.tsx's close() always saves first, then
    // unmounts (word -> null), taking #note-overlay with it.
    await overlay.locator('#note-save-btn').click();
    await expect(overlay).toBeHidden();

    // save() -> refreshCard() dynamic-imports card-engine.ts before
    // re-rendering — an async gap, hence expect's own retry rather than
    // assuming an instant update.
    await expect(noteDisplay).toBeVisible();
    await expect(noteDisplay).toContainText('remember: sounds like "banana"');
    await expect(noteBtn).toHaveCSS('opacity', '1');

    expect(errors).toEqual([]);
  });
});

test.describe('Word detail modal', () => {
  test('search result opens the word-detail modal', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    // #btn-search opens the standalone search-overlay.tsx (distinct from
    // the always-visible inline header search already covered in
    // cards-home.spec.ts) — its results open word-detail.tsx on click.
    await page.click('#btn-search');
    const searchInput = page.locator('input[placeholder="Пошук по словнику..."]');
    await searchInput.fill('an');

    const firstResult = page.locator('.search-row').first();
    await firstResult.waitFor({ state: 'visible' });
    await firstResult.click();

    const wdOverlay = page.locator('#wd-overlay');
    await expect(wdOverlay).toBeVisible();
    await expect(wdOverlay.locator('#wd-word')).not.toHaveText('');

    await wdOverlay.locator('#wd-close').click();
    await expect(wdOverlay).toBeHidden();

    expect(errors).toEqual([]);
  });
});

test.describe('Achievement popup', () => {
  test('clicking an achievement card opens its popup, close dismisses it', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-achievements');
    const overlay = page.locator('#ach-overlay');
    await expect(overlay).toBeVisible();

    const firstCard = overlay.locator('.ach-card').first();
    await firstCard.waitFor({ state: 'visible' });
    await firstCard.click();

    // The popup is Dialog-based (base-ui) — Portal'd to document.body, no
    // longer a descendant of #ach-overlay, so it's a page-level locator
    // rather than overlay-scoped.
    const popup = page.locator('.ach-popup');
    await expect(popup).toBeVisible();
    await expect(popup.locator('.ach-popup-name')).not.toHaveText('');

    await popup.locator('.ach-popup-close').click();
    await expect(popup).toHaveCount(0);

    expect(errors).toEqual([]);
  });
});
