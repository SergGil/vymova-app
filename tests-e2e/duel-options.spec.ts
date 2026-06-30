import { test, expect } from '@playwright/test';
import { openApp } from './helpers.ts';

test.describe('Duel lobby options', () => {
  test('category select persists across reopen', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');

    const select = page.locator('#duel-cat-picker select');
    await select.selectOption({ index: 1 });
    const chosen = await select.inputValue();
    expect(chosen).not.toBe('');

    // Close and reopen the lobby
    await page.click('#sb-duel');
    await page.click('#sb-duel');

    await expect(page.locator('#duel-cat-picker select')).toHaveValue(chosen);
  });

  test('best-of, hints and power-ups persist across reopen', async ({ page }) => {
    await openApp(page);
    await page.click('#sb-duel');

    const bestOf = page.locator('#duel-options-row select').first();
    const hints = page.locator('#duel-options-row select').nth(1);
    const powerups = page.locator('#duel-options-row input[type="checkbox"]');

    await bestOf.selectOption('3');
    await hints.selectOption('1');
    const powerupsBefore = await powerups.isChecked();
    await powerups.click();

    await page.click('#sb-duel');
    await page.click('#sb-duel');

    await expect(page.locator('#duel-options-row select').first()).toHaveValue('3');
    await expect(page.locator('#duel-options-row select').nth(1)).toHaveValue('1');
    await expect(page.locator('#duel-options-row input[type="checkbox"]')).toBeChecked({
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
    await expect(page.locator('#duel-overlay')).toHaveClass(/open/);

    await page.click('#duel-page-close');

    await expect(page.locator('#duel-overlay')).not.toHaveClass(/open/);
  });
});
