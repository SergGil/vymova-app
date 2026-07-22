import { test, expect } from '@playwright/test';
import {
  captureErrors,
  openApp,
  playOptionModeToCompletion,
  playTypedModeToCompletion,
  primaryButton,
} from './helpers.ts';

// Deeper gameplay coverage for the "New" mode group (see
// js/features/mode-card-grid.tsx). Tier 1 smoke coverage (open/close, no
// errors) already exists in tests-e2e/modes-smoke.spec.ts.
//
// oddone, idiom-quiz, and grammar-quiz are plain .quiz-option/ModeFinalScreen
// modes — same shape as quiz.tsx, reuse the Cards batch's helper unchanged.
// error-hunt and word-hint also reuse it but with a different answerSelector
// (see helpers.ts's playOptionModeToCompletion doc comment): both advance on
// ANY tap/give-up regardless of correctness, so no dictionary knowledge is
// needed to drive them to completion. dictation reuses the typed-answer
// helper unchanged (right-or-wrong both advance, same as fib/write).
// sentbuild is scramble.tsx's sibling (tiles must reassemble the *exact*
// example sentence, which only the app's own dictionary data determines) so
// it only gets an interaction check, not full completion. assoc-chain ends
// the whole session on a single wrong pick — full completion would mean
// knowing every correct synonym/antonym in the loaded language's lexicon —
// so it only gets a one-question interaction check too, closing via the
// header "✕" that (unlike every other mode's final screen) stays mounted
// whether the round continues or the chain just ended. ghost-race has a
// "start race" screen followed by auto-advancing questions, driven manually
// below. shadowing also only gets an interaction check: Playwright's
// Chromium exposes a webkitSpeechRecognition constructor (so
// speechRecognitionSupported() reports true and it never falls back to a
// no-mic confirmation button), but rec.start() never actually resolves in
// this sandboxed environment — no real mic, no reachable speech service —
// so there's no UI path to a finished round here, only to starting and
// cancelling a recording. compare is a search/lookup tool with no scoring or
// completion concept, so it only gets an interaction check.
test.describe('New modes gameplay', () => {
  test('oddone: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-oddone');

    const overlay = page.locator('#oo-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('idiom-quiz: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-idiom-quiz');

    const overlay = page.locator('#idq-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('grammar-quiz: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-grammar-quiz');

    const overlay = page.locator('#grq-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('error-hunt: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-error-hunt');

    const overlay = page.locator('#eh-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay, 'button:not([aria-label])');

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('word-hint: giving up on every round reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-wordhint');

    const overlay = page.locator('#hint-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay, 'button[style*="underline"]');

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('dictation: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-dictation');

    const overlay = page.locator('#dict-overlay');
    await expect(overlay).toBeVisible();

    await playTypedModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('sentbuild: tile selection and shuffle interactions work', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-sentbuild');

    const overlay = page.locator('#sb-overlay');
    await expect(overlay).toBeVisible();

    // Tile-bank buttons are the only ones styled with `background:
    // var(--bg)` (js/modes/sentence-builder.tsx's tileBtnStyle()) — the
    // speak/placed/hint/shuffle/clear buttons all use a different fill.
    const firstTile = overlay.locator('button[style*="var(--bg)"]').first();
    await firstTile.waitFor({ state: 'visible' });
    await firstTile.click();

    await overlay.locator('[data-i18n="scramble.clearBtn"]').click();
    await overlay.locator('[data-i18n="scramble.shuffleBtn"]').click();

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('assoc-chain: answering one question keeps errors clean', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-assoc');

    const overlay = page.locator('#assoc-overlay');
    await expect(overlay).toBeVisible();

    // A wrong pick ends the whole chain immediately, and there's no way for
    // a black-box test to know the correct synonym/antonym — this only
    // exercises one pick. The header "✕" stays mounted whether the chain
    // continues or just ended, so it closes reliably either way.
    const option = overlay.locator('.quiz-option').first();
    await option.waitFor({ state: 'visible' });
    await option.click();
    await page.waitForTimeout(1000);

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('ghost-race: a full race reaches the result screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-ghost');

    const overlay = page.locator('#ghost-overlay');
    await expect(overlay).toBeVisible();

    await primaryButton(overlay).click(); // "start race"

    // Auto-advances ~350ms after each click, no explicit Next button.
    for (let i = 0; i < 10; i++) {
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      await page.waitForTimeout(500);
    }

    // The result screen's tryAgain/close buttons are plain text (no
    // data-i18n) — but the header "✕" is mounted on every screen.
    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('shadowing: recording starts and can be stopped', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-shadow');

    const overlay = page.locator('#shadow-overlay');
    await expect(overlay).toBeVisible();

    // Playwright's Chromium exposes a `webkitSpeechRecognition` constructor
    // (js/modes/shadowing.tsx's speechRecognitionSupported() sees it as
    // available), so this always takes the real record button branch, not
    // the no-mic "I said it" fallback — but rec.start() never actually
    // resolves in this sandboxed environment (no mic, no reachable speech
    // service), so a full session can't be driven to completion here. This
    // instead only verifies recording can be started and cancelled.
    await primaryButton(overlay).click(); // 🎤 record
    await expect(overlay.getByText('🔴', { exact: false })).toBeVisible();

    // The 'listening' phase still renders the (now-inert) 🔊 speak button
    // ahead of the stop button in DOM order, so it's the last non-header
    // button, not the first.
    await overlay.locator('button:not([aria-label])').last().click();
    await expect(primaryButton(overlay)).toBeVisible(); // back to the record button

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('compare: searching and picking a word shows its translations', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-compare');

    const overlay = page.locator('#cmp-overlay');
    await expect(overlay).toBeVisible();

    const input = overlay.locator('input[type="text"]');
    await input.fill('cat');

    const suggestion = overlay.locator('div[style*="cursor: pointer"]').first();
    await suggestion.waitFor({ state: 'visible' });
    await suggestion.click();

    // Picking a suggestion swaps the search input out for a "selected word"
    // chip (js/modes/compare.tsx's `{selected ? ... : <input/>}`).
    await expect(overlay.locator('input[type="text"]')).toHaveCount(0);

    await overlay.getByText('✕', { exact: true }).first().click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });
});
