import { test, expect, type Page } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Coverage for the flashcard home screen's deck-filtering controls, above
// the search bar: the "Я знаю"/"Хочу вчити"/"Напрямок" language-pair+
// direction picker (js/features/lang-pair-select.tsx, js/core/flag-dropdown.tsx)
// and the topic/range <select>s (tag-filter-select.tsx, range-select.tsx).
// None of these had e2e coverage before — every other spec assumes the
// default en/ua, fwd, all-topics, all-words state and never touches them.
//
// The two language dropdowns aren't locale-text-selectable (their aria-label
// is a translated string, same reason helpers.ts avoids matching UI text
// elsewhere) — selected structurally instead: js/features/lang-pair-select.tsx
// renders exactly 3 `.flagdd` dropdowns inside `.lang-pair-row`, in this
// order: know, learn, direction.

function langPairDropdown(page: Page, index: 0 | 1 | 2) {
  return page.locator('.lang-pair-row > .flagdd').nth(index);
}

async function pickFlagOption(page: Page, index: 0 | 1 | 2, value: string): Promise<void> {
  const dd = langPairDropdown(page, index);
  await dd.locator('.flagdd-btn').click();
  await dd.locator(`.flagdd-item[data-value="${value}"]`).click();
}

// #cidx renders "<pos>/<deckLen>" (card-progress.tsx's CardIdx).
async function deckTotal(page: Page): Promise<number> {
  const text = (await page.locator('#cidx').innerText()).trim();
  const match = /^\d+\/(\d+)$/.exec(text);
  if (!match) throw new Error(`Unexpected #cidx text: "${text}"`);
  return Number(match[1]);
}

test.describe('Card filters — language pair & direction', () => {
  test('switching the learn language changes the front word', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const wword = page.locator('#wword');
    const before = await wword.innerText();

    // Learn language: index 1. Spanish ('es') is never the default, so this
    // is guaranteed to be an actual change regardless of starting state.
    await pickFlagOption(page, 1, 'es');

    await expect(langPairDropdown(page, 1).locator('.flagdd-btn')).toHaveAttribute(
      'data-value',
      'es',
    );
    // Switching language can dynamic-import that language's word table
    // (lang-pair-select.tsx's ensureLangTableLoaded) before the card
    // re-renders — rely on expect's own retry instead of a fixed wait.
    await expect(wword).not.toHaveText(before, { timeout: 10_000 });

    expect(errors).toEqual([]);
  });

  test('choosing a "know" language removes it from the "learn" options', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    // Know language: index 0.
    await pickFlagOption(page, 0, 'es');
    await expect(langPairDropdown(page, 0).locator('.flagdd-btn')).toHaveAttribute(
      'data-value',
      'es',
    );

    const learnDd = langPairDropdown(page, 1);
    await learnDd.locator('.flagdd-btn').click();
    await expect(learnDd.locator('.flagdd-item[data-value="es"]')).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test('direction toggle swaps which language is on the front of the card', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const wword = page.locator('#wword');
    const dirBtn = langPairDropdown(page, 2).locator('.flagdd-btn');
    await expect(dirBtn).toHaveAttribute('data-value', 'fwd');

    const fwdWord = await wword.innerText();
    await pickFlagOption(page, 2, 'rev');
    await expect(dirBtn).toHaveAttribute('data-value', 'rev');
    await expect(wword).not.toHaveText(fwdWord);

    await pickFlagOption(page, 2, 'mix');
    await expect(dirBtn).toHaveAttribute('data-value', 'mix');

    expect(errors).toEqual([]);
  });
});

test.describe('Card filters — topic & range', () => {
  test('picking a topic narrows the deck, and "All topics" restores it', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const total = await deckTotal(page);

    // index 0 is "All topics" (value="") — index 1 is the first real
    // category, always a proper subset of the full dictionary.
    await page.locator('#sel-tag').selectOption({ index: 1 });
    await expect(page.locator('#cidx')).not.toHaveText(`1/${total}`);
    const narrowed = await deckTotal(page);
    expect(narrowed).toBeLessThan(total);
    expect(narrowed).toBeGreaterThan(0);

    await page.locator('#sel-tag').selectOption({ value: '' });
    expect(await deckTotal(page)).toBe(total);

    expect(errors).toEqual([]);
  });

  test('picking a CEFR level narrows the deck, and "All words" restores it', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    const total = await deckTotal(page);

    // CEFR tagging is static per-word metadata, unlike "unlearned"/"srs"
    // (which fall back to the full pool on a fresh profile with nothing
    // learned/due yet) — a reliable, profile-independent narrowing.
    await page.locator('#sel-range').selectOption('cefr-A1');
    await expect(page.locator('#cidx')).not.toHaveText(`1/${total}`);
    const narrowed = await deckTotal(page);
    expect(narrowed).toBeLessThan(total);
    expect(narrowed).toBeGreaterThan(0);

    await page.locator('#sel-range').selectOption('0');
    expect(await deckTotal(page)).toBe(total);

    expect(errors).toEqual([]);
  });
});
