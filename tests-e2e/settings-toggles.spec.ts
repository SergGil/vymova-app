import { test, expect } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Coverage for the Settings page's simple toggles (js/features/settings-page.tsx)
// and the "danger zone" reset-progress confirm dialog
// (js/features/reset-confirm-dialog.tsx, triggered by settings-page.tsx's own
// #btn-reset). None of this had e2e coverage before pages-smoke.spec.ts's
// dark-mode-only toggle test.
//
// haptic-toggle is deliberately excluded: settings.tsx hides its entire
// section (`hapticSection.style.display = 'none'`) whenever
// `navigator.maxTouchPoints === 0`, which is always true for headless
// Chromium (no touch device) — same "not reachable in this environment"
// reasoning as the mic/SpeechRecognition exclusions in
// modes-cards-edgecases.spec.ts.

test.describe('Settings — simple toggles', () => {
  // js/features/settings-toggles.tsx's checkboxes: id, and (for the two
  // that have one) the <body> class it's expected to drive.
  const TOGGLES = [
    { id: 'srs-priority-toggle', bodyClass: null },
    { id: 'reduced-motion-toggle', bodyClass: 'reduced-motion' },
    { id: 'high-contrast-toggle', bodyClass: 'high-contrast' },
  ];

  for (const { id, bodyClass } of TOGGLES) {
    test(`${id} flips its own state${bodyClass ? ' and body.' + bodyClass : ''}`, async ({
      page,
    }) => {
      const errors = captureErrors(page);
      await openApp(page);
      await page.click('#sb-settings');
      const overlay = page.locator('#settings-overlay');
      await expect(overlay).toBeVisible();

      const checkbox = overlay.locator(`#${id}`);
      // settings-toggles.tsx's SettingsToggle renders the real <input> inside
      // a <label class="notif-toggle-wrap"> with the CSS toggle-pill visual
      // (.notif-toggle-pill-ui) as its only visible content — the input
      // itself is visually hidden (standard styled-checkbox pattern), so
      // Playwright's actionability check on the input directly never
      // resolves. Click the label (which forwards to the input, same as a
      // real click on the visible pill) instead.
      const label = checkbox.locator('xpath=..');
      const body = page.locator('body');
      const wasChecked = await checkbox.isChecked();

      await label.click();
      expect(await checkbox.isChecked()).toBe(!wasChecked);
      if (bodyClass) {
        if (!wasChecked) await expect(body).toHaveClass(new RegExp(bodyClass));
        else await expect(body).not.toHaveClass(new RegExp(bodyClass));
      }

      await label.click();
      expect(await checkbox.isChecked()).toBe(wasChecked);
      if (bodyClass) {
        if (!wasChecked) await expect(body).not.toHaveClass(new RegExp(bodyClass));
        else await expect(body).toHaveClass(new RegExp(bodyClass));
      }

      expect(errors).toEqual([]);
    });
  }
});

test.describe('Settings — SRS new-cards-per-day control', () => {
  test('up/down buttons step by 5 and clamp at the floor', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-settings');
    const overlay = page.locator('#settings-overlay');
    await expect(overlay).toBeVisible();

    const value = overlay.locator('#srs-cap-value');
    const upBtn = overlay.locator('#btn-srs-cap-up');
    const downBtn = overlay.locator('#btn-srs-cap-down');
    const start = Number(await value.innerText());

    await upBtn.click();
    expect(Number(await value.innerText())).toBe(start + 5);

    await downBtn.click();
    await downBtn.click();
    expect(Number(await value.innerText())).toBe(start - 5);

    // MIN is 5 — walk all the way down and confirm the button disables
    // itself right at the floor instead of going negative.
    for (let i = 0; i < 10; i++) {
      if (await downBtn.isDisabled()) break;
      await downBtn.click();
    }
    await expect(downBtn).toBeDisabled();
    expect(Number(await value.innerText())).toBe(5);

    expect(errors).toEqual([]);
  });
});

test.describe('Settings — fandom theme rows', () => {
  test('expanding the list and picking a theme toggles its pill on, then off', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);
    await page.click('#sb-settings');
    const overlay = page.locator('#settings-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('#theme-rows-toggle').click();
    const lotrPill = overlay.locator('#set-lotr-pill');
    await expect(overlay.locator('#set-lotr')).toBeVisible();
    await expect(lotrPill).not.toHaveClass(/\bon\b/);

    await overlay.locator('#set-lotr').click();
    await expect(lotrPill).toHaveClass(/\bon\b/);

    await overlay.locator('#set-lotr').click();
    await expect(lotrPill).not.toHaveClass(/\bon\b/);

    expect(errors).toEqual([]);
  });
});

test.describe('Settings — reset progress', () => {
  test('cancel leaves progress untouched; confirm clears known state', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    // Mark the current card "known" so there's something to reset. #btn-easy
    // also advances to the next card (card-actions.ts's _afterGrade), so
    // #card's own is-known class reflects whatever word is showing *now* —
    // not the one just marked — #cknown's global count is the right thing
    // to assert on instead.
    await page.click('#btn-easy');
    const knownBefore = Number(await page.locator('#cknown').innerText());
    expect(knownBefore).toBeGreaterThan(0);

    // #btn-reset lives in settings-page.tsx's "danger zone" section, not on
    // the flashcard home screen itself.
    await page.click('#sb-settings');
    const overlay = page.locator('#settings-overlay');
    await expect(overlay).toBeVisible();

    await overlay.locator('#btn-reset').click();
    const modal = page.locator('#modal-overlay');
    await expect(modal).toBeVisible();

    await modal.locator('#modal-cancel').click();
    await expect(modal).toBeHidden();
    expect(Number(await page.locator('#cknown').innerText())).toBe(knownBefore);

    await overlay.locator('#btn-reset').click();
    await expect(modal).toBeVisible();
    await modal.locator('#modal-confirm').click();
    await expect(modal).toBeHidden();

    expect(Number(await page.locator('#cknown').innerText())).toBe(0);

    expect(errors).toEqual([]);
  });
});
