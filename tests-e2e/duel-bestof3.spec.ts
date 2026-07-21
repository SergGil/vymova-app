import { test, expect } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// bestOf-3 series continuation: after each round's result screen, both sides
// click "next round" (duel-result.tsx's #duel-next-round-btn), which goes
// through duel.ts's _doRematch() — for the room's creator that cancels the
// old Firebase room and creates a brand-new one (new code), which the other
// side then has to rejoin. Whether the series' accumulated win tally
// actually survives that real create/join round-trip is exactly the kind of
// thing a mocked-fetch unit test can't check: duel-result.test.tsx's own
// "round result" test injects a `series` fixture directly and mocks
// _onResultRematch entirely, so it never exercises a real second room.
const MAX_ROUNDS = 4; // bestOf=3 must decide within 3 real rounds

test.describe('Duel best-of-3 series continuation (RTDB emulator)', () => {
  test('the series eventually reaches a decisive final result', async ({ browser }) => {
    test.setTimeout(240_000);
    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const page1 = await ctx1.newPage();
    const page2 = await ctx2.newPage();

    try {
      await openEmuApp(page1);
      await page1.click('#sb-duel');
      await page1.locator('#duel-options-row select').first().selectOption('3');
      await page1.click('#duel-create-btn');
      await expect(page1.locator('#duel-waiting')).toBeVisible();
      let roomCode = (await page1.locator('#duel-room-code').textContent())!.trim();

      await openEmuApp(page2);
      await page2.click('#sb-duel');
      await page2.fill('#duel-join-input', roomCode);
      await page2.click('#duel-join-btn');

      await expect(page1.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await expect(page2.locator('#duel-game')).toBeVisible({ timeout: 15_000 });

      let reachedFinal = false;
      for (let round = 1; round <= MAX_ROUNDS; round++) {
        await Promise.all([answerAllQuestions(page1), answerAllQuestions(page2)]);

        await expect(page1.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
        await expect(page2.locator('#duel-result')).toBeVisible({ timeout: 15_000 });

        if (await page1.locator('#duel-rematch-btn').isVisible()) {
          reachedFinal = true;
          break;
        }

        await expect(page1.locator('#duel-next-round-btn')).toBeVisible();
        await page1.click('#duel-next-round-btn');
        await page2.click('#duel-next-round-btn');

        await expect(page1.locator('#duel-waiting')).toBeVisible({ timeout: 15_000 });
        roomCode = (await page1.locator('#duel-room-code').textContent())!.trim();

        await page2.fill('#duel-join-input', roomCode);
        await page2.click('#duel-join-btn');

        await expect(page1.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
        await expect(page2.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      }

      // If this fails, the series never converged within its own bestOf=3 /
      // 3-round cap — i.e. "next round" isn't actually carrying the win
      // tally across the new room it creates.
      expect(reachedFinal).toBe(true);
    } finally {
      await ctx1.close();
      await ctx2.close();
    }
  });
});
