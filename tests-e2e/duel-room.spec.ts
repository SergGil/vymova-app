import { test, expect } from '@playwright/test';
import { openApp } from './helpers.ts';

test.describe('Duel room creation', () => {
  test('creating a room shows the waiting screen with a room code, no crash', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await openApp(page);
    await page.click('#sb-duel');

    await page.click('#duel-create-btn');

    await expect(page.locator('#duel-waiting')).toBeVisible();
    await expect(page.locator('#duel-room-code')).not.toHaveText('');
    expect(errors).toEqual([]);

    // Cancel back to the lobby so we don't leave the room "waiting" forever.
    await page.click('#duel-page-close');
  });

  test('cancelling a created room returns to the join/create lobby state', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await openApp(page);
    await page.click('#sb-duel');

    await page.click('#duel-create-btn');
    await expect(page.locator('#duel-waiting')).toBeVisible();

    await page.click('#duel-cancel-btn');

    await expect(page.locator('#duel-waiting')).toBeHidden();
    await expect(page.locator('#duel-join-btn')).toBeVisible();
    await expect(page.locator('#duel-create-btn')).toBeEnabled();
    expect(errors).toEqual([]);
  });
});
