import { test, expect, type Page } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// 4-player tournament: create, all 4 slots claimed concurrently (CAS via
// _fbClaim's PUT+if-match — the RTDB emulator does support that), gated
// start, and the first bracket match played to a real result.
//
// NOT covered here: advancing past match 1 into match 2 / the final. That
// goes through _advanceTournament()'s _fbPatchIfMatch (PATCH+if-match),
// which the RTDB emulator flatly rejects — confirmed directly against the
// emulator: PUT+if-match returns 200, but PATCH+if-match returns
// `400 "The 'if-match' header is not supported with GET, PATCH or POST
// requests"`. That's a real, documented Firebase RTDB REST feature
// (conditional PATCH) the *emulator* doesn't implement, not an app bug —
// production Firebase supports it, so _advanceTournament() should work
// there. There just isn't a local/offline way to exercise that specific
// path end-to-end the way duel-bestof3.spec.ts exercises the room-creation
// CAS-adjacent series-carry fix.
test.describe('Duel 4-player tournament (RTDB emulator)', () => {
  test('4 players join, start, and play the first bracket match', async ({ browser }) => {
    test.setTimeout(120_000);
    const ctxs = await Promise.all([1, 2, 3, 4].map(() => browser.newContext()));
    const pages = await Promise.all(ctxs.map((c) => c.newPage()));
    const [creator, ...joiners] = pages;
    const errors: string[][] = pages.map(() => []);
    pages.forEach((p, i) => p.on('pageerror', (e) => errors[i].push(e.message)));

    try {
      await openEmuApp(creator);
      await creator.click('#sb-duel');
      await creator.click('#duel-tourn4-btn');
      await expect(creator.locator('#duel-tourn-code')).not.toHaveText('');
      const code = (await creator.locator('#duel-tourn-code').textContent())!.trim();

      // All 3 joiners claim a slot concurrently — exercises the same
      // compare-and-swap _fbClaim() race joinRoom()'s p2 slot uses, just
      // with 3 simultaneous claimants instead of 1. Which joiner actually
      // wins slot 1 (the creator's match-0 opponent) isn't deterministic
      // from a concurrent race, so it's discovered below rather than assumed.
      await Promise.all(
        joiners.map(async (joiner) => {
          await openEmuApp(joiner);
          await joiner.click('#sb-duel');
          await joiner.click('#duel-tournjoin-btn');
          await joiner.fill('#code-input-field', code);
          await joiner.click('#code-input-ok');
        }),
      );

      // All 4 slots filled — creator's start button only appears once
      // joined === size, proving every claim actually landed distinctly
      // (a lost race / double-claimed slot would leave this permanently hidden).
      await expect(creator.locator('#duel-tourn-start-btn')).toBeVisible({ timeout: 15_000 });
      await creator.click('#duel-tourn-start-btn');

      // Match 0 (slot 0 vs slot 1) is the only active match at tournament
      // start — both its participants see "play" simultaneously (there's no
      // claim guard on who creates the match room, unlike joinRoom()), so
      // pick the lower-slot one (the creator) deterministically to avoid a
      // real race between the two clicking at once.
      await expect(creator.locator('#duel-tourn-play-btn')).toBeVisible({ timeout: 15_000 });
      await creator.click('#duel-tourn-play-btn');

      const opponent = await findVisible(joiners, '#duel-tourn-rejoin-btn', 15_000);
      await opponent.click('#duel-tourn-rejoin-btn');

      await expect(creator.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
      await expect(opponent.locator('#duel-game')).toBeVisible({ timeout: 15_000 });

      await Promise.all([answerAllQuestions(creator), answerAllQuestions(opponent)]);

      // Give both clients' independent _finishHookFor() writes a moment to
      // land, then confirm the match recorded a real score (":" joins
      // p1score/p2score in duel-tournament.tsx's TournRound).
      await creator.waitForTimeout(2000);
      await expect(creator.locator('#duel-overlay')).toContainText(/\d+:\d+/);

      // creator/opponent (match 0's participants) each hit the known
      // emulator-only "HTTP 400" from _advanceTournament()'s if-match PATCH
      // once their match finishes (see the header comment) — not asserted
      // here. The two players who never played anything should stay clean.
      for (let i = 0; i < pages.length; i++) {
        if (pages[i] === creator || pages[i] === opponent) continue;
        expect(errors[i]).toEqual([]);
      }
    } finally {
      await Promise.all(ctxs.map((c) => c.close()));
    }
  });
});

/** Polls a set of pages until one of them has `selector` visible, and
 * returns it — used where which page reaches a given state first isn't
 * knowable ahead of a real concurrent race (see the slot-claim comment above). */
async function findVisible(pages: Page[], selector: string, timeoutMs: number): Promise<Page> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    for (const p of pages) {
      if (await p.locator(selector).isVisible().catch(() => false)) return p;
    }
    await pages[0].waitForTimeout(500);
  }
  throw new Error(`No page matched "${selector}" within ${timeoutMs}ms`);
}
