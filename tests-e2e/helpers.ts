import type { Locator, Page } from '@playwright/test';

/** Collects thrown errors and console.error output for a page, filtering out
 * the browser's own "Failed to load resource" network-log lines — those fire
 * for any non-2xx response (e.g. js/core/images.ts's loadWikiImage() hitting
 * a rate-limited public API under test concurrency) and aren't a thrown app
 * error. Call `expect(errors).toEqual([])` at the end of a test. */
export function captureErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
      errors.push(msg.text());
    }
  });
  return errors;
}

/** Open the app and dismiss the first-run onboarding overlay. */
export async function openApp(page: Page): Promise<void> {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.getElementById('ob-overlay')?.remove();
  });
}

// Separate vite instance (playwright.config.ts's 5184 webServer) built with
// VITE_FIREBASE_DB_URL=/emu-db, so duel-firebase.ts's DB_URL points at the
// RTDB emulator instead of prod — see tests-e2e/duel-realtime.spec.ts and
// duel-forfeit.spec.ts, the only specs that need a real two-client Firebase
// round-trip.
export async function openEmuApp(page: Page): Promise<void> {
  await page.goto('http://localhost:5184/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.getElementById('ob-overlay')?.remove();
  });
}

// duel-types.ts's ROOM_SIZE (kept as a plain literal here rather than
// imported — these are Playwright specs, not part of the app bundle).
const ROOM_SIZE = 10;

/** Blindly answers every question in a live duel (mode default is multiple-
 * choice — see duel-lobby-store.ts's default sel.mode) — used where the e2e
 * only needs the match to actually finish, not who wins. */
export async function answerAllQuestions(page: Page): Promise<void> {
  for (let i = 0; i < ROOM_SIZE; i++) {
    const option = page.locator('.quiz-option').first();
    await option.waitFor({ state: 'visible', timeout: 15_000 });
    await option.click();
    // Advance timer is 600ms (correct) or 1200ms (wrong) before the next
    // question renders — pad past the slower case.
    await page.waitForTimeout(1400);
  }
}

// The primary-action button (submit/Next/Finish across quiz.tsx, fib.tsx,
// write.tsx, listening.tsx, ...) has no shared id, class, or data-i18n —
// several also carry decorative unlabelled buttons (a 🔊 speak button, a 💡
// hint button in fib/write) that any "first enabled button" heuristic would
// snag on instead. What IS shared is the inline `background: var(--accent)`
// fill style every mode uses only for its one primary CTA — the "✕" close
// button and hint button use a transparent/bordered style instead — so this
// is a reliable style-based selector, not a text match that would break
// per-locale. scramble.tsx/spelling-bee.tsx's big circular 🔊 speak button
// also happens to use an accent fill though, so it has to be excluded by
// content too (it's the one accent button that's always emoji-only).
// Exported (not just used internally by the two completion helpers below) —
// lesson.tsx mixes three different per-step mechanics in one session (a
// flash-card phase, a .quiz-option phase, a typed-answer phase) and its final
// screen only has a "done" button, not the shared common.tryAgain/close pair
// isFinalScreen() below checks for, so its test drives each phase manually
// with a fixed step count instead of going through playOptionModeToCompletion/
// playTypedModeToCompletion.
export function primaryButton(overlay: Locator): Locator {
  return overlay.locator('button:not([disabled])[style*="var(--accent)"]:not(:has-text("🔊"))');
}

// Upper bound on questions to drive through, not the expected deck size —
// several modes (fib.tsx in particular) build their deck from however many
// words happen to qualify (e.g. have a usable example sentence), which can
// land under the requested 10. Both loops below stop as soon as the shared
// ModeFinalScreen's [data-i18n="common.tryAgain"] button appears rather than
// counting a fixed number of questions.
const MAX_QUESTIONS = 15;

async function isFinalScreen(overlay: Locator): Promise<boolean> {
  return overlay.locator('[data-i18n="common.tryAgain"]').isVisible();
}

/** Drives a "click an answer, then click Next/Finish" solo mode — the ones
 * that render an explicit Next click, unlike duel's auto-advancing version —
 * to its final screen. Defaults to `.quiz-option` (quiz, listen, context,
 * oddone, idiom-quiz, grammar-quiz, ...); pass a different `answerSelector`
 * for modes whose "answer" isn't a multiple-choice option — error-hunt.tsx's
 * tap-the-wrong-token buttons have no shared class
 * (`'button:not([aria-label])'`), word-hint.tsx's "give up" link always ends
 * the round regardless of the guess (`'button[style*="underline"]'`). */
export async function playOptionModeToCompletion(
  overlay: Locator,
  answerSelector = '.quiz-option',
): Promise<void> {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    if (await isFinalScreen(overlay)) return;
    const option = overlay.locator(answerSelector).first();
    await option.waitFor({ state: 'visible' });
    await option.click();
    await primaryButton(overlay).click();
  }
}

/** Drives a typed-answer solo mode (fib, write, ...) — text input, submit,
 * then Next/Finish — to its final screen. Correctness doesn't matter: both
 * modes advance on any submitted answer, right or wrong. */
export async function playTypedModeToCompletion(overlay: Locator): Promise<void> {
  for (let i = 0; i < MAX_QUESTIONS; i++) {
    if (await isFinalScreen(overlay)) return;
    const input = overlay.locator('input[type="text"]');
    await input.waitFor({ state: 'visible' });
    // Not "test" — write.tsx's autocomplete dropdown (js/modes/write.tsx's
    // onInputChange) prefix-matches real dictionary words 120ms after typing
    // and can render on top of the submit button below, intercepting the
    // click. This prefix matches nothing in data/words.js.
    await input.fill('zzznotaword');
    await primaryButton(overlay).click(); // submit
    await primaryButton(overlay).click(); // Next/Finish
  }
}
