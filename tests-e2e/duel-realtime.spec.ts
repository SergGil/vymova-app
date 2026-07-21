import { test, expect } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// Every other duel-*.spec.ts here drives a single tab (duel-room.spec.ts
// even hits the real prod Firebase project to do it — fine for "does the
// waiting screen render", not something to do 10x per question for two
// simultaneous players). This spec is the one place that actually plays a
// duel to completion across two independent tabs/contexts, against the RTDB
// emulator (playwright.config.ts's 9000/5184 webServers) so it can write and
// poll as much as a real match needs without touching prod data. It doesn't
// assert on scores (the scoring/state-machine math is already covered by
// tests/features/duel-logic.test.ts and friends against a mocked fetch) —
// what only a real two-client round-trip can catch is the sync itself:
// room-code join, both sides' countdown/game start, and both sides actually
// reaching the result screen instead of one getting stuck on "waiting".

test.describe('Duel realtime match (RTDB emulator)', () => {
  test('two tabs create/join a room and both reach the result screen', async ({ browser }) => {
    test.setTimeout(90_000);
    const errors1: string[] = [];
    const errors2: string[] = [];

    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const page1 = await ctx1.newPage();
    const page2 = await ctx2.newPage();
    page1.on('pageerror', (e) => errors1.push(e.message));
    page2.on('pageerror', (e) => errors2.push(e.message));

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

      // Countdown (~4s) then both sides land on the game screen.
      await expect(page1.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await expect(page2.locator('#duel-game')).toBeVisible({ timeout: 15_000 });

      await Promise.all([answerAllQuestions(page1), answerAllQuestions(page2)]);

      await expect(page1.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
      await expect(page2.locator('#duel-result')).toBeVisible({ timeout: 15_000 });

      expect(errors1).toEqual([]);
      expect(errors2).toEqual([]);
    } finally {
      await ctx1.close();
      await ctx2.close();
    }
  });
});
