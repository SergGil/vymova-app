import { test, expect } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// Spectator mode: a third client watches a live duel between two other real
// clients via its own read-only poll (_startSpectatorView in
// duel-spectator-logic.ts), and must notice when the room finishes and
// return itself to the lobby — a real three-client Firebase round-trip a
// mocked-fetch unit test can't exercise (duel-spectator.test.tsx drives the
// component off a fixture room snapshot, never a real poll against a room
// two other clients are actually playing).
test.describe('Duel spectator mode (RTDB emulator)', () => {
  test('a spectator watches a live match and returns to the lobby once it finishes', async ({
    browser,
  }) => {
    test.setTimeout(120_000);
    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const ctx3 = await browser.newContext();
    const page1 = await ctx1.newPage();
    const page2 = await ctx2.newPage();
    const spectator = await ctx3.newPage();

    try {
      await openEmuApp(page1);
      await page1.click('#sb-duel');
      await page1.click('#duel-create-btn');
      await expect(page1.locator('#duel-waiting')).toBeVisible();
      const roomCode = (await page1.locator('#duel-room-code').textContent())!.trim();

      await openEmuApp(page2);
      await page2.click('#sb-duel');
      await page2.fill('#duel-join-input', roomCode);
      await page2.click('#duel-join-btn');

      await expect(page1.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await expect(page2.locator('#duel-game')).toBeVisible({ timeout: 15_000 });

      await openEmuApp(spectator);
      await spectator.click('#sb-duel');
      await spectator.click('#duel-spectate-btn');
      await spectator.fill('#code-input-field', roomCode);
      await spectator.click('#code-input-ok');

      await expect(spectator.locator('#duel-spectator-view')).toBeVisible({ timeout: 15_000 });

      await Promise.all([answerAllQuestions(page1), answerAllQuestions(page2)]);

      await expect(page1.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
      await expect(page2.locator('#duel-result')).toBeVisible({ timeout: 15_000 });

      // _startSpectatorView's poll notices room.finished and, after showing
      // the final state for 3s, sends the spectator back to the lobby.
      await expect(spectator.locator('#duel-spectator-view')).toBeHidden({ timeout: 15_000 });
      await expect(spectator.locator('#duel-lobby')).toBeVisible({ timeout: 10_000 });
    } finally {
      await Promise.all([ctx1.close(), ctx2.close(), ctx3.close()]);
    }
  });
});
