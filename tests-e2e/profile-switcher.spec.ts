import { test, expect } from '@playwright/test';
import { captureErrors, openApp } from './helpers.ts';

// Coverage for js/features/profile-switcher.tsx — previously untested despite
// being used every session (the "🧑 Гравець ▾" button + "+" in the sidebar).
//
// switchProfile()/confirmAdd() both call window.location.reload()
// unconditionally on success; confirmDelete() only reloads
// `if (wasActive && next.length > 0)` — deleting a non-active profile just
// updates React state in place. Kept to a single reload across this whole
// file by creating a profile (which becomes active) and then deleting the
// now-non-active original, instead of switching back and forth.

test.describe('Profile switcher', () => {
  test('the delete icon is hidden when there is only one profile', async ({ page }) => {
    const errors = captureErrors(page);
    await openApp(page);

    await page.click('#sb-profile-btn');
    const dropdown = page.locator('#sb-dropdown');
    await expect(dropdown).toBeVisible();

    const rows = dropdown.locator('.sb-dd-row');
    await expect(rows).toHaveCount(1);
    await expect(rows.first().locator('.sb-dd-item')).toHaveClass(/sb-dd-active/);
    await expect(rows.first().locator('.prf-dd-del')).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test('creating a profile reloads into it, and deleting the original removes it without another reload', async ({
    page,
  }) => {
    const errors = captureErrors(page);
    await openApp(page);

    await page.click('#sb-profile-btn');
    await page.click('#sb-add-btn');
    const addForm = page.locator('#sb-add-form');
    await expect(addForm).toBeVisible();

    await addForm.locator('#sb-new-name').fill('TestProfile2');
    // confirmAdd() calls window.location.reload() on success — a real
    // navigation, not an SPA state change. helpers.ts's openApp() installs
    // its onboarding-overlay-suppressing MutationObserver via addInitScript,
    // which (unlike a one-shot page.evaluate) persists across this reload
    // too — relevant here since confirmAdd() also sets
    // ew_onboarding_needed='1' for the new profile.
    await Promise.all([page.waitForLoadState('load'), addForm.locator('#sb-new-confirm').click()]);

    await expect(page.locator('#sb-profile-name')).toHaveText('TestProfile2');

    await page.click('#sb-profile-btn');
    const dropdown = page.locator('#sb-dropdown');
    await expect(dropdown).toBeVisible();
    const rows = dropdown.locator('.sb-dd-row');
    await expect(rows).toHaveCount(2);

    // New profile was appended (and is now active) — the original is row 0,
    // targeted by position rather than its default localized name.
    await rows.nth(0).locator('.prf-dd-del').click();
    const deletePanel = page.locator('.prf-delete-panel');
    await expect(deletePanel).toBeVisible();
    await deletePanel.locator('.prf-delete-btn-confirm').click();
    await expect(deletePanel).toBeHidden();

    await expect(dropdown.locator('.sb-dd-row')).toHaveCount(1);
    await expect(page.locator('#sb-profile-name')).toHaveText('TestProfile2');

    expect(errors).toEqual([]);
  });
});
