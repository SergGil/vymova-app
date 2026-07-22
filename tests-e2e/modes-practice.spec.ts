import { test, expect } from '@playwright/test';
import { captureErrors, openApp, playOptionModeToCompletion } from './helpers.ts';

// Deeper gameplay coverage for the "Practice" mode group (see
// js/features/mode-card-grid.tsx). Tier 1 smoke coverage (open/close, no
// errors) already exists in tests-e2e/modes-smoke.spec.ts.
//
// context and adaptive-quiz reuse the Cards batch's .quiz-option helper —
// same shape as quiz.tsx (js/modes/context.tsx, js/modes/adaptive-quiz.tsx
// both render the same quiz-option/ModeFinalScreen pair). lesson.tsx mixes
// three different mechanics in one session and its final screen has no
// common.tryAgain button, so it's driven manually. daily-challenge.tsx
// auto-advances after each answer (like duel, not the other Cards modes) so
// it needs its own loop too. reading and story are browse-and-read modes
// with no scoring/completion concept — they only get an interaction check
// (open a passage/story, click a highlighted word, see the translation
// popup) — and story's test picks a builtin (offline, no-network) story
// deliberately, skipping the AI-generation button so this doesn't depend on
// a deployed AI proxy Worker or make a real network call.
test.describe('Practice modes gameplay', () => {
  test('context: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-context');

    const overlay = page.locator('#ctx-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('adaptive-quiz: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-adaptive-quiz');

    const overlay = page.locator('#aq-overlay');
    await expect(overlay).toBeVisible();

    await playOptionModeToCompletion(overlay);

    await expect(overlay.locator('[data-i18n="common.tryAgain"]')).toBeVisible();
    await overlay.locator('[data-i18n="common.close"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('lesson: all three phases reach the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-lesson');

    const overlay = page.locator('#lesson-overlay');
    await expect(overlay).toBeVisible();

    // lesson.tsx's own Next button (phases 2/3, {nextLabel}) is styled via
    // className="btn btn-know" rather than the inline `background:
    // var(--accent)` every other mode's Next/Finish button uses (that's what
    // helpers.ts's primaryButton() matches on) — and it has no data-i18n
    // either, since its label legitimately varies (write.next vs
    // quiz.finish). ".btn-know" alone isn't unique though: phase 1's own
    // "know" button shares the class — but that one always carries
    // data-i18n="lesson.knowBtn", so excluding data-i18n singles this one
    // out.
    const lessonNextBtn = overlay.locator('button.btn-know:not([data-i18n])');

    // Phase 1/3: flashcards — reveal then "know" always advances.
    for (let i = 0; i < 5; i++) {
      await overlay.locator('[data-i18n="lesson.revealBtn"]').click();
      await overlay.locator('[data-i18n="lesson.knowBtn"]').click();
    }

    // Phase 2/3: multiple choice.
    for (let i = 0; i < 5; i++) {
      const option = overlay.locator('.quiz-option').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      await lessonNextBtn.click();
    }

    // Phase 3/3: typed answer — right or wrong both advance.
    for (let i = 0; i < 5; i++) {
      const input = overlay.locator('input[type="text"]');
      await input.waitFor({ state: 'visible' });
      await input.fill('zzznotaword');
      await overlay.locator('[data-i18n="write.checkBtn"]').click();
      await lessonNextBtn.click();
    }

    await expect(overlay.locator('[data-i18n="lesson.doneBtn"]')).toBeVisible();
    await overlay.locator('[data-i18n="lesson.doneBtn"]').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('daily-challenge: full session reaches the final screen', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-daily-challenge');

    const overlay = page.locator('#dc-overlay');
    await expect(overlay).toBeVisible();

    // Auto-advances ~900ms after each click (js/modes/daily-challenge.tsx's
    // _renderQ), no explicit Next button — same shape as duel's quiz.
    for (let i = 0; i < 10; i++) {
      const option = overlay.locator('.dc-opt').first();
      await option.waitFor({ state: 'visible' });
      await option.click();
      await page.waitForTimeout(1000);
    }

    const final = overlay.locator('#dc-final');
    await expect(final).toBeVisible();
    await overlay.locator('#dc-close').click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('reading: selecting a passage opens a word translation popup', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-reading');

    const overlay = page.locator('#reading-overlay');
    await expect(overlay).toBeVisible();

    // Picker items carry no data-i18n/aria-label/backup-btn class, unlike
    // every other button in this view (epub import, close, prev/next/back).
    const firstPassage = overlay.locator('button:not(.backup-btn):not([aria-label])').first();
    await firstPassage.waitFor({ state: 'visible' });
    await firstPassage.click();

    const word = overlay.locator('.rd-word').first();
    await word.waitFor({ state: 'visible' });
    await word.click();

    await expect(overlay.locator('.rd-word-popup')).toBeVisible();

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('story: a builtin story opens a word translation popup', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-modes');
    await page.click('#btn-story');

    const overlay = page.locator('#story-mode-overlay');
    await expect(overlay).toBeVisible();

    // "A Busy Morning" (js/modes/story.tsx's STORIES) is a builtin, offline,
    // always-English story — no AI-generation network call involved.
    await overlay.locator('button', { hasText: 'A Busy Morning' }).click();

    const word = overlay.locator('.sm-word').first();
    await word.waitFor({ state: 'visible' });
    await word.click();

    await expect(overlay.locator('#sm-popup-speak')).toBeVisible();

    await overlay.getByText('✕', { exact: true }).click();
    await expect(overlay).toBeHidden();

    expect(errors).toEqual([]);
  });
});
