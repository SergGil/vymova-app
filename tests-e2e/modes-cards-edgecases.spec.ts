import { test, expect, type Locator, type Page } from '@playwright/test';
import { captureErrors, openApp, primaryButton, expectConsistentFeedback } from './helpers.ts';

// Deeper-than-completion coverage for the "Cards" mode group (see
// tests-e2e/modes-cards.spec.ts for the happy-path full-session tests):
// wrong-answer feedback, hint buttons (fib.tsx/write.tsx's 💡), write.tsx's
// autocomplete dropdown, and quiz.tsx's "retry only the missed words" flow.
// Deliberately skips write.tsx's 🎤 mic button — it needs a live
// SpeechRecognition + microphone permission grant that isn't available
// headless, and card-actions.ts's #btn-mic (pronunciation check) is the same
// story on the flashcard home screen.

async function isFinalScreen(overlay: Locator): Promise<boolean> {
  return overlay.locator('[data-i18n="common.tryAgain"]').isVisible();
}

test.describe('Cards modes — answer feedback', () => {
  test('quiz: every answer gets self-consistent correct/wrong/reveal classes', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-quiz');
    const overlay = page.locator('#quiz-overlay');
    await expect(overlay).toBeVisible();

    for (let i = 0; i < 10; i++) {
      if (await isFinalScreen(overlay)) break;
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      await expectConsistentFeedback(overlay);
      await primaryButton(overlay).click();
    }

    expect(errors).toEqual([]);
  });

  test('listen: every answer gets self-consistent correct/wrong/reveal classes', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-listen');
    const overlay = page.locator('#listen-overlay');
    await expect(overlay).toBeVisible();

    for (let i = 0; i < 10; i++) {
      if (await isFinalScreen(overlay)) break;
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      await expectConsistentFeedback(overlay);
      await primaryButton(overlay).click();
    }

    expect(errors).toEqual([]);
  });

  test('quiz: retrying only the missed words replays exactly that many questions', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-quiz');
    const overlay = page.locator('#quiz-overlay');
    await expect(overlay).toBeVisible();

    let mistakes = 0;
    for (let i = 0; i < 10; i++) {
      if (await isFinalScreen(overlay)) break;
      // Always taking the first option is virtually certain to rack up at
      // least one wrong answer out of 4-option questions (chance of a clean
      // sweep is 0.25^10) — that's what feeds quiz.tsx's wrongWords list.
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      if (await overlay.locator('.quiz-option.wrong').count()) mistakes++;
      await primaryButton(overlay).click();
    }
    expect(mistakes).toBeGreaterThan(0);

    // The mistakes-retry button sits alongside common.tryAgain/common.close
    // in the same row, but (unlike those two) carries no data-i18n attribute
    // — scoping to tryAgain's parent avoids also matching the unrelated
    // always-present ✕ header-close button, which shares that same trait.
    const finalButtons = overlay.locator('button[data-i18n="common.tryAgain"]').locator('xpath=..');
    await expect(finalButtons.locator('button')).toHaveCount(3);
    await finalButtons.locator('button').nth(1).click();

    await expect(overlay.locator('.quiz-option').first()).toBeVisible();
    let replayed = 0;
    for (let i = 0; i < 10; i++) {
      if (await isFinalScreen(overlay)) break;
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      replayed++;
      await primaryButton(overlay).click();
    }
    expect(replayed).toBe(mistakes);

    expect(errors).toEqual([]);
  });

  test('fib: wrong answer highlights the blank in red and offers to hear it', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-fib');
    const overlay = page.locator('#fib-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('input[type="text"]').fill('zzznotaword');
    await primaryButton(overlay).click(); // submit

    await expect(overlay.locator('.fib-blank')).toHaveAttribute('style', /danger/);
    await expect(overlay.locator('button', { hasText: '🔊' })).toBeVisible();

    expect(errors).toEqual([]);
  });

  test('write: wrong answer shows the correct answer inline', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-write');
    const overlay = page.locator('#write-overlay');
    await expect(overlay).toBeVisible();

    const input = overlay.locator('input[type="text"]');
    await input.fill('zzznotaword');
    await primaryButton(overlay).click(); // submit

    await expect(input).toHaveAttribute('style', /danger/);
    await expect(overlay.locator('b')).toBeVisible();

    expect(errors).toEqual([]);
  });
});

test.describe('Cards modes — hint buttons', () => {
  for (const { id, overlayId, btnId } of [
    { id: 'fib', overlayId: 'fib-overlay', btnId: 'btn-fib' },
    { id: 'write', overlayId: 'write-overlay', btnId: 'btn-write' },
  ]) {
    test(`${id}: hint button reveals a partial answer before submitting`, async ({ page }) => {
      const errors = captureErrors(page);
      await openApp(page);
      await page.click('#sb-modes');
      await page.click(`#${btnId}`);
      const overlay = page.locator(`#${overlayId}`);
      await expect(overlay).toBeVisible();

      await overlay.getByRole('button', { name: '💡', exact: true }).click();
      await expect(overlay).toContainText(/💡 .+\.\.\./);

      expect(errors).toEqual([]);
    });

    test(`${id}: hint button is a no-op after the question is answered`, async ({ page }) => {
      const errors = captureErrors(page);
      await openApp(page);
      await page.click('#sb-modes');
      await page.click(`#${btnId}`);
      const overlay = page.locator(`#${overlayId}`);
      await expect(overlay).toBeVisible();

      await overlay.locator('input[type="text"]').fill('zzznotaword');
      await primaryButton(overlay).click(); // submit
      await overlay.getByRole('button', { name: '💡', exact: true }).click();
      const text = await overlay.innerText();
      expect(text).not.toMatch(/💡 .+\.\.\./);

      expect(errors).toEqual([]);
    });
  }
});

test.describe('Cards modes — write autocomplete', () => {
  async function openWrite(page: Page): Promise<Locator> {
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-write');
    const overlay = page.locator('#write-overlay');
    await expect(overlay).toBeVisible();
    return overlay;
  }

  // .wac-item/.write-ac are Portal'd to document.body by Combobox's own
  // popup mechanism (base-ui, same as this session's Select/Dialog/
  // search-inline conversions) — no longer inside #write-overlay, so these
  // are page-level locators, not overlay-scoped ones.
  test('suggests dictionary matches for the input prefix', async ({ page }) => {
    const errors = captureErrors(page);
    const overlay = await openWrite(page);

    await overlay.locator('input[type="text"]').fill('an');
    const items = page.locator('.wac-item');
    await expect(items.first()).toBeVisible();
    const word = (await items.first().locator('.wac-word').innerText()).toLowerCase();
    expect(word.startsWith('a')).toBe(true);

    expect(errors).toEqual([]);
  });

  test('Escape dismisses the suggestion dropdown', async ({ page }) => {
    const errors = captureErrors(page);
    const overlay = await openWrite(page);

    await overlay.locator('input[type="text"]').fill('an');
    await expect(page.locator('.wac-item').first()).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('.write-ac')).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('clicking a suggestion fills the input with it', async ({ page }) => {
    const errors = captureErrors(page);
    const overlay = await openWrite(page);

    const input = overlay.locator('input[type="text"]');
    await input.fill('an');
    const first = page.locator('.wac-item').first();
    await first.waitFor({ state: 'visible' });
    const word = await first.locator('.wac-word').innerText();

    await first.click();

    await expect(input).toHaveValue(word);
    await expect(page.locator('.write-ac')).toBeHidden();

    expect(errors).toEqual([]);
  });
});
