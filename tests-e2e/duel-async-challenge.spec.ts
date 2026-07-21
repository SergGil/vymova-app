import { test, expect } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// 24h async challenge: the challenger plays their 10 questions immediately
// at creation time (createAsyncChallenge()'s own 2s auto-start), long before
// anyone replies — unlike a live duel, there's no second player sitting in
// the room yet when the first score gets written. The opponent might reply
// minutes or 23 hours later, from a totally separate session, and their own
// _finishMyGame() has to find the challenger's already-recorded score (a
// bare _fbPatch to /duel_rooms/{code}/p1 — the room document is never
// _fbSet with the usual full structure the synchronous flow uses, see
// duel-async-challenge.ts's own comments) and correctly detect the match as
// complete instead of getting stuck waiting on someone who already left.
test.describe('Duel async challenge (RTDB emulator)', () => {
  test('opponent replying later still detects the already-played challenger and finishes the match', async ({
    browser,
  }) => {
    test.setTimeout(120_000);
    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const page1 = await ctx1.newPage();
    const page2 = await ctx2.newPage();

    try {
      await openEmuApp(page1);
      await page1.click('#sb-duel');
      await page1.click('#duel-async-send-btn');
      await expect(page1.locator('#duel-waiting')).toBeVisible();
      const code = (await page1.locator('#duel-room-code').textContent())!.trim();

      // createAsyncChallenge() auto-starts the challenger's own game 2s
      // after creating the challenge — no opponent needed yet.
      await expect(page1.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await answerAllQuestions(page1);
      // No opponent has replied yet, so page1 sits on the "waiting for
      // opponent" sub-screen (still inside #duel-game) rather than a result.
      await expect(page1.locator('#duel-game')).toBeVisible();

      // Opponent replies from a separate session/context, well after the
      // challenger already finished.
      await openEmuApp(page2);
      await page2.click('#sb-duel');
      await page2.click('#duel-async-reply-btn');
      await page2.fill('#code-input-field', code);
      await page2.click('#code-input-ok');

      // joinAsyncChallenge() auto-starts the opponent's own game 1.8s later.
      await expect(page2.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await answerAllQuestions(page2);

      // The opponent's own finish should immediately detect the
      // challenger's already-recorded score and complete the match.
      await expect(page2.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
      // page1's tab is still open and still polling — it should pick up the
      // now-finished room on its own next poll tick (~1.5s) too.
      await expect(page1.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
    } finally {
      await Promise.all([ctx1.close(), ctx2.close()]);
    }
  });
});
