import { test, expect } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// Covers the forfeit-win path (duel.ts's _startOpponentPoll disconnect
// detection + _claimForfeitWin), one of the bugs from the self-audit
// referenced in 71f6ffb ("forfeit-win on disconnect") — pure real-time
// Firebase state (opponent's lastSeen heartbeat going stale), which a mocked
// fetch can assert the math of but can't exercise end-to-end. Runs against
// the RTDB emulator, same as duel-realtime.spec.ts.
//
// Timing: duel.ts flags the opponent disconnected once their lastSeen
// heartbeat is >8s stale, then offers the forfeit button once that's been
// true for a further 12s (FORFEIT_DELAY_MS) — so ~20s of real wait is
// unavoidable here; this isn't a flake-prone race, it's the actual feature
// being tested.
test.describe('Duel forfeit-win on disconnect (RTDB emulator)', () => {
  test('claiming forfeit after the opponent vanishes mid-match ends in a forced win', async ({
    browser,
  }) => {
    test.setTimeout(120_000);
    const errors1: string[] = [];

    const ctx1 = await browser.newContext();
    const ctx2 = await browser.newContext();
    const page1 = await ctx1.newPage();
    const page2 = await ctx2.newPage();
    page1.on('pageerror', (e) => errors1.push(e.message));

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

      // Let page2 send at least one heartbeat (_startOpponentPoll's first
      // tick, 1.5s after game start) before it "vanishes" — otherwise
      // opp.lastSeen stays null forever and duel.ts never flags a
      // disconnect at all (see its `opp.lastSeen != null` guard).
      await page2.waitForTimeout(2500);
      await ctx2.close();

      // Finish all 10 questions on page1 — the forfeit button only ever
      // renders on the post-game "waiting for opponent" screen (duel-
      // question.tsx's `d.waiting` branch), not mid-question.
      await answerAllQuestions(page1);

      const forfeitBtn = page1.locator('#duel-forfeit-btn');
      await expect(forfeitBtn).toBeVisible({ timeout: 30_000 });
      await forfeitBtn.click();

      await expect(page1.locator('#duel-result')).toBeVisible({ timeout: 15_000 });
      // _claimForfeitWin() always forces a win (see duel.ts's _showFinish
      // forceWin param) regardless of either side's actual score.
      await expect(page1.locator('#duel-result')).toContainText('🏆');

      expect(errors1).toEqual([]);
    } finally {
      await ctx1.close();
      // Already closed on the success path (that's the disconnect being
      // simulated) — only matters here as cleanup if an earlier step threw
      // before that happened.
      await ctx2.close().catch(() => {});
    }
  });
});
