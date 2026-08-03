import { test, expect } from '@playwright/test';
import { openApp } from './helpers.ts';

test.describe('Duel lobby options', () => {
  test('category select persists across reopen', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');

    const trigger = page.locator('#duel-cat-picker [role="combobox"]');
    const before = (await trigger.textContent())!.trim();
    await trigger.click();
    // Option 0 is "all words" (the trigger's initial/default state) — pick
    // the first real category right after it, always a different label.
    const option = page.getByRole('option').nth(1);
    const chosen = (await option.textContent())!.trim();
    await option.click();
    await expect(trigger).toContainText(chosen);
    expect(chosen).not.toBe(before);

    // Close and reopen the lobby
    await page.click('#sb-duel');
    await page.click('#sb-duel');

    await expect(page.locator('#duel-cat-picker [role="combobox"]')).toContainText(chosen);
  });

  test('best-of, hints and power-ups persist across reopen', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');

    const bestOfTrigger = page.locator('#duel-options-row [role="combobox"]').first();
    const hintsTrigger = page.locator('#duel-options-row [role="combobox"]').nth(1);
    const powerups = page.locator('#duel-options-row [role="switch"]');

    // duel-lobby-options.tsx's <SelectContent> order: best-of is
    // [oneRound, bestOf3] — index 1 picks "best of 3" (not the default).
    await bestOfTrigger.click();
    const bestOfOption = page.getByRole('option').nth(1);
    const bestOfLabel = (await bestOfOption.textContent())!.trim();
    await bestOfOption.click();
    await expect(bestOfTrigger).toContainText(bestOfLabel);

    // Hints order: [unlimited, 3, 1] — index 2 picks "1 hint" (not the default).
    await hintsTrigger.click();
    const hintsOption = page.getByRole('option').nth(2);
    const hintsLabel = (await hintsOption.textContent())!.trim();
    await hintsOption.click();
    await expect(hintsTrigger).toContainText(hintsLabel);

    const powerupsBefore = await powerups.isChecked();
    await powerups.click();

    await page.click('#sb-duel');
    await page.click('#sb-duel');

    await expect(page.locator('#duel-options-row [role="combobox"]').first()).toContainText(
      bestOfLabel,
    );
    await expect(page.locator('#duel-options-row [role="combobox"]').nth(1)).toContainText(
      hintsLabel,
    );
    await expect(page.locator('#duel-options-row [role="switch"]')).toBeChecked({
      checked: !powerupsBefore,
    });
  });
});

test.describe('Duel join room', () => {
  test('joining with an empty code shows an inline error, no crash', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await openApp(page);
    await page.click('#sb-duel');

    await page.click('#duel-join-btn');

    await expect(page.locator('#duel-msg')).toBeVisible();
    await expect(page.locator('#duel-msg')).toContainText('Введіть код кімнати');
    expect(errors).toEqual([]);
  });
});

test.describe('Duel page navigation', () => {
  test('close button exits the duel page', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');
    // Can't match on /open/ via toHaveClass: #duel-overlay's static Tailwind
    // classes include the arbitrary variant "[&.open]:block", which contains
    // the literal substring "open" whether or not the .open state class is
    // actually toggled on. A class-token CSS selector avoids that collision.
    await expect(page.locator('#duel-overlay.open')).toHaveCount(1);

    await page.click('#duel-page-close');

    await expect(page.locator('#duel-overlay.open')).toHaveCount(0);
  });
});
