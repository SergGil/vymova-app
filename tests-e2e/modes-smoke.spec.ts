import { test, expect } from '@playwright/test';
import { openApp } from './helpers.ts';

// btnId/overlayId pairs for every `.mode-card` in js/features/mode-card-grid.tsx
// (verified against each mode file's `bindOverlayOpenClose('btn-X', 'X-overlay', ...)`
// call, or pairs.tsx/daily-challenge.tsx's equivalent hand-rolled wiring).
// Duel is covered separately by tests-e2e/duel-*.spec.ts.
const MODES = [
  { id: 'quiz', overlayId: 'quiz-overlay' },
  { id: 'write', overlayId: 'write-overlay' },
  { id: 'listen', overlayId: 'listen-overlay' },
  { id: 'fib', overlayId: 'fib-overlay' },
  { id: 'tempo', overlayId: 'tempo-overlay' },
  { id: 'pairs', overlayId: 'pairs-overlay' },
  { id: 'catpairs', overlayId: 'catpairs-overlay' },
  { id: 'scramble', overlayId: 'scr-overlay' },
  { id: 'letters', overlayId: 'wl-overlay' },
  { id: 'spelling-bee', overlayId: 'bee-overlay' },
  { id: 'lesson', overlayId: 'lesson-overlay' },
  { id: 'reading', overlayId: 'reading-overlay' },
  { id: 'story', overlayId: 'story-mode-overlay' },
  { id: 'context', overlayId: 'ctx-overlay' },
  { id: 'daily-challenge', overlayId: 'dc-overlay' },
  { id: 'adaptive-quiz', overlayId: 'aq-overlay' },
  { id: 'oddone', overlayId: 'oo-overlay' },
  { id: 'sentbuild', overlayId: 'sb-overlay' },
  { id: 'error-hunt', overlayId: 'eh-overlay' },
  { id: 'assoc', overlayId: 'assoc-overlay' },
  { id: 'wordhint', overlayId: 'hint-overlay' },
  { id: 'shadow', overlayId: 'shadow-overlay' },
  { id: 'ghost', overlayId: 'ghost-overlay' },
  { id: 'dictation', overlayId: 'dict-overlay' },
  { id: 'idiom-quiz', overlayId: 'idq-overlay' },
  { id: 'grammar-quiz', overlayId: 'grq-overlay' },
  { id: 'compare', overlayId: 'cmp-overlay' },
];

test.describe('Solo mode smoke test', () => {
  for (const { id, overlayId } of MODES) {
    test(`${id} opens and closes without errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (msg) => {
        // "Failed to load resource" is the browser's own network-log line for
        // any non-2xx response, not a thrown app error — several modes call
        // js/core/images.ts's loadWikiImage() to decorate word cards with a
        // Wikipedia thumbnail, and that public API 429s under this test
        // file's own concurrency (already handled gracefully: url falls back
        // to null). Real app errors still surface via pageerror above or any
        // other console.error text.
        if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) {
          errors.push(msg.text());
        }
      });

      await openApp(page);
      await page.click('#sb-modes');
      await page.click(`#btn-${id}`);

      const overlay = page.locator(`#${overlayId}`);
      await expect(overlay).toBeVisible();

      // Most mode overlays have a header "✕" close button (aria-label is
      // translated, so match on the literal glyph instead — see quiz.tsx).
      // A few (e.g. tempo's start screen) only expose a text close button
      // instead, tagged data-i18n="common.close" — match either.
      const closeBtn = overlay
        .locator('[data-i18n="common.close"]')
        .or(overlay.getByText('✕', { exact: true }))
        .first();
      await closeBtn.click();
      await expect(overlay).toBeHidden();

      expect(errors).toEqual([]);
    });
  }
});
