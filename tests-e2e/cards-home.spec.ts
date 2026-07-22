import { test, expect } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Coverage for the app's default/home screen — the single flashcard in
// js/features/card-shell.tsx (#card) plus its wiring in card-actions.ts and
// keyboard shortcuts in js/core/keyboard.tsx. Distinct from the "Cards"
// *mode group* (quiz/write/listen/fib/tempo overlays) already covered by
// tests-e2e/modes-cards.spec.ts — this is the flashcard deck itself, open by
// default with no overlay/page active (openApp() lands here directly).

// #cidx renders "<pos>/<deckLen>" (card-progress.tsx's CardIdx) — parsed out
// instead of asserting the full string so these tests don't hardcode the
// current dictionary size.
async function cardPos(page: import('@playwright/test').Page): Promise<number> {
  const text = (await page.locator('#cidx').innerText()).trim();
  const match = /^(\d+)\/\d+$/.exec(text);
  if (!match) throw new Error(`Unexpected #cidx text: "${text}"`);
  return Number(match[1]);
}

test.describe('Flashcard home (Картки)', () => {
  test('clicking the card reveals the translation and hides the hint', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const hint = page.locator('#card-hint-mount .hint');
    const translation = page.locator('#wtransl');
    await expect(hint).toBeVisible();
    await expect(translation).not.toHaveClass(/show/);

    await page.click('#card');

    await expect(translation).toHaveClass(/show/);
    await expect(hint).toBeHidden();

    // A second click while already flipped is a no-op (onCardClick only acts
    // when !flipped) — translation stays visible, no error either way.
    await page.click('#card');
    await expect(translation).toHaveClass(/show/);

    expect(errors).toEqual([]);
  });

  test('Next/Prev buttons move the card counter forward and back', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const start = await cardPos(page);

    await page.click('#btn-next');
    await expect(page.locator('#cidx')).toHaveText(`${start + 1}/${await deckLen(page)}`);

    await page.click('#btn-next');
    expect(await cardPos(page)).toBe(start + 2);

    await page.click('#btn-prev');
    expect(await cardPos(page)).toBe(start + 1);

    expect(errors).toEqual([]);
  });

  for (const btnId of ['btn-easy', 'btn-know', 'btn-hard', 'btn-dontknow']) {
    test(`${btnId} grades the card and advances to the next one`, async ({ page }) => {
      const errors = captureErrors(page);
      await openApp(page);

      const start = await cardPos(page);
      await page.click(`#${btnId}`);
      expect(await cardPos(page)).toBe(start + 1);

      // Grading a card always lands on a fresh, unflipped one.
      await expect(page.locator('#wtransl')).not.toHaveClass(/show/);

      expect(errors).toEqual([]);
    });
  }

  test('Shuffle jumps back to card 1', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    await page.click('#btn-next');
    await page.click('#btn-next');
    expect(await cardPos(page)).toBeGreaterThan(1);

    await page.click('#btn-shuf');
    expect(await cardPos(page)).toBe(1);

    expect(errors).toEqual([]);
  });

  test('search finds a word and jumps the card to it', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    await page.fill('#search-input', 'test');
    const firstResult = page.locator('.search-result-item').first();
    await firstResult.waitFor({ state: 'visible' });
    const word = (await firstResult.locator('.sr-word').innerText()).trim();

    await firstResult.click();

    await expect(page.locator('#search-results')).toBeHidden();
    await expect(page.locator('#wword')).toHaveText(word);

    expect(errors).toEqual([]);
  });

  test('keyboard shortcuts: Space flips then advances, arrows navigate, F flips', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const translation = page.locator('#wtransl');
    const start = await cardPos(page);

    // Space: first press flips (unflipped -> translation shown)...
    await page.keyboard.press('Space');
    await expect(translation).toHaveClass(/show/);
    expect(await cardPos(page)).toBe(start);

    // ...second press (now flipped) clicks #btn-next instead.
    await page.keyboard.press('Space');
    expect(await cardPos(page)).toBe(start + 1);
    await expect(translation).not.toHaveClass(/show/);

    await page.keyboard.press('ArrowRight');
    expect(await cardPos(page)).toBe(start + 2);

    await page.keyboard.press('ArrowLeft');
    expect(await cardPos(page)).toBe(start + 1);

    await page.keyboard.press('KeyF');
    await expect(translation).toHaveClass(/show/);
    expect(await cardPos(page)).toBe(start + 1);

    expect(errors).toEqual([]);
  });

  test('bookmark button toggles the star icon', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const bookmarkBtn = page.locator('#btn-bookmark');
    await expect(bookmarkBtn).toHaveText('☆');

    await bookmarkBtn.click();
    await expect(bookmarkBtn).toHaveText('★');

    await bookmarkBtn.click();
    await expect(bookmarkBtn).toHaveText('☆');

    expect(errors).toEqual([]);
  });
});

async function deckLen(page: import('@playwright/test').Page): Promise<string> {
  const text = (await page.locator('#cidx').innerText()).trim();
  const match = /^\d+\/(\d+)$/.exec(text);
  if (!match) throw new Error(`Unexpected #cidx text: "${text}"`);
  return match[1];
}
