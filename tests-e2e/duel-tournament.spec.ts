import { test, expect, type Page } from '@playwright/test';
import { openEmuApp, answerAllQuestions } from './helpers.ts';

// 4-player single-elimination tournament: create, all 4 slots claimed
// concurrently (CAS via _fbClaim's PUT+if-match), gated start, and the
// bracket advance (_advanceTournament()) all the way to a champion — the
// two sequential matches-per-round mechanic (only one bracket slot is ever
// "active" at a time) means round 0's two matches play one after another,
// not concurrently, before the final.
//
// Writing this caught two real bugs no mocked-fetch unit test could reach:
//
// 1. _advanceTournament() used to guard its writes with an ETag-conditional
//    PATCH (if-match) — a real Firebase RTDB REST feature the *emulator*
//    flatly rejects (confirmed directly: PATCH+if-match 400s with "not
//    supported with GET, PATCH or POST requests", even though PUT+if-match
//    and production's PATCH+if-match both work). Reworked to derive every
//    write deterministically from already-agreed bracket data instead (see
//    its own header comment) — no CAS needed, works against both.
//
// 2. _startTournMatch() conflated bracket-seed p1/p2 (match.p1/match.p2,
//    tournament winner bookkeeping) with room-role p1/p2 (which of
//    room.p1/room.p2 this client's own gameplay writes to) — whenever the
//    room *creator* happened to be the higher-seeded bracket slot, the
//    room's own p1 field got populated with the *other* player's identity
//    and nobody ever wrote real gameplay data into it, so that match could
//    never detect either side as finished. Fixed in _startTournMatch (see
//    its own header comment) — room-role p1 is now always the creator,
//    independent of bracket seed.
test.describe('Duel 4-player tournament (RTDB emulator)', () => {
  test('all 4 players progress through the bracket to a champion', async ({ browser }) => {
    test.setTimeout(240_000);
    const ctxs = await Promise.all([1, 2, 3, 4].map(() => browser.newContext()));
    const pages = await Promise.all(ctxs.map((c) => c.newPage()));
    const [creator, ...joiners] = pages;

    try {
      await openEmuApp(creator);
      await creator.click('#sb-duel');
      await creator.click('#duel-tourn4-btn');
      await expect(creator.locator('#duel-tourn-code')).not.toHaveText('');
      const code = (await creator.locator('#duel-tourn-code').textContent())!.trim();

      // All 3 joiners claim a slot concurrently — exercises the same
      // compare-and-swap _fbClaim() race joinRoom()'s p2 slot uses, just
      // with 3 simultaneous claimants instead of 1.
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
      // joined === size, proving every claim actually landed distinctly.
      await expect(creator.locator('#duel-tourn-start-btn')).toBeVisible({ timeout: 15_000 });
      await creator.click('#duel-tourn-start-btn');

      // Single-elimination, size 4 → 3 total matches (2 semis played one at a
      // time, then the final) before a champion is decided.
      for (let match = 0; match < 3; match++) {
        await playNextActiveMatch(pages);
      }

      // Whoever's the champion, every client's bracket view must agree one
      // was decided — proving the idempotent advance converged consistently
      // across all 4 clients (some of which independently called
      // _advanceTournament() for the very same transitions), not just one.
      for (const p of pages) {
        await expect(p.locator('#duel-tourn-champion')).toBeVisible({ timeout: 30_000 });
      }
    } finally {
      await Promise.all(ctxs.map((c) => c.close()));
    }
  });
});

/** Finds whichever page currently shows the "play" button for the active
 * bracket match, has it create the room, waits for the other side of that
 * same match to see "rejoin", and plays the match out on both. Which two of
 * the four pages that is isn't known ahead of time — round outcomes are
 * decided by (essentially random) blind first-option answering. */
async function playNextActiveMatch(pages: Page[]): Promise<void> {
  const playPage = await findVisible(pages, '#duel-tourn-play-btn', 30_000);
  await playPage.click('#duel-tourn-play-btn');

  const rejoinPage = await findVisible(
    pages.filter((p) => p !== playPage),
    '#duel-tourn-rejoin-btn',
    15_000,
  );
  await rejoinPage.click('#duel-tourn-rejoin-btn');

  await expect(playPage.locator('#duel-game')).toBeVisible({ timeout: 15_000 });
  await expect(rejoinPage.locator('#duel-game')).toBeVisible({ timeout: 15_000 });

  await Promise.all([answerAllQuestions(playPage), answerAllQuestions(rejoinPage)]);

  // Both sides finishing their own 10 questions doesn't mean the match is
  // over yet — each still has to detect the other's completion via its own
  // ~1.5s opponent poll before _showFinish()/the tournament finish-hook (and
  // _advanceTournament(), safe to call redundantly — see its header comment)
  // actually fire. Wait for the room itself to go away instead of guessing a
  // fixed delay.
  await expect(playPage.locator('#duel-game')).toBeHidden({ timeout: 30_000 });
  await expect(rejoinPage.locator('#duel-game')).toBeHidden({ timeout: 30_000 });
}

/** Polls a set of pages until one of them has `selector` visible, and
 * returns it — used where which page reaches a given state first isn't
 * knowable ahead of a real concurrent race. */
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
