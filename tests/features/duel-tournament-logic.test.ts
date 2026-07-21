import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// ── Firebase REST mock ───────────────────────────────────────────
// Backs both plain _fbGet/_fbPatch/_fbSet AND the atomic ETag-based
// _fbClaim (X-Firebase-ETag / if-match) that joinTournament() relies on to
// avoid the check-then-set slot-claim race (see duel-tournament-logic.ts's
// own comment on joinTournament()). Shared across every "client" module
// instance in this file (see loadFreshModule() below) so two independently
// re-imported instances of duel-tournament-logic.ts race against the same
// backing data, exactly like two separate browser tabs would.
const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
let _fbStore: Record<string, unknown> = {};
let _etags: Record<string, number> = {};

function _pathParts(url: string): string[] {
  return url.replace(DB_URL, '').replace('.json', '').split('/').filter(Boolean);
}
function _getAtPath(parts: string[]): unknown {
  let cur: unknown = _fbStore;
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return null;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur ?? null;
}
function _setAtPath(parts: string[], value: unknown): void {
  if (parts.length === 0) {
    _fbStore = value as Record<string, unknown>;
    return;
  }
  let cur = _fbStore as Record<string, unknown>;
  for (let i = 0; i < parts.length - 1; i++) {
    if (typeof cur[parts[i]] !== 'object' || cur[parts[i]] === null) cur[parts[i]] = {};
    cur = cur[parts[i]] as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]] = value;
}
function _bumpEtag(path: string): string {
  _etags[path] = (_etags[path] ?? 0) + 1;
  return String(_etags[path]);
}

function resetFirebaseMock(): void {
  _fbStore = {};
  _etags = {};
}

vi.stubGlobal('fetch', async (url: string, opts?: RequestInit) => {
  const parts = _pathParts(url);
  const path = '/' + parts.join('/');
  const method = opts?.method ?? 'GET';

  if (method === 'GET') {
    const value = _getAtPath(parts);
    const etag = _etags[path] !== undefined ? String(_etags[path]) : _bumpEtag(path);
    return {
      ok: true,
      status: 200,
      json: async () => value,
      headers: { get: (name: string) => (name === 'ETag' ? etag : null) },
    } as unknown as Response;
  }
  if (method === 'PUT') {
    // if-match is only ever sent here by _fbClaim (joinTournament's slot
    // claim) — _advanceTournament() uses plain, unconditional PATCH/PUT (see
    // its own header comment on why that's safe without one).
    const ifMatch = (opts?.headers as Record<string, string> | undefined)?.['if-match'];
    if (ifMatch !== undefined) {
      const current = _etags[path] !== undefined ? String(_etags[path]) : _bumpEtag(path);
      if (ifMatch !== current) {
        return { ok: false, status: 412, json: async () => null } as unknown as Response;
      }
    }
    _setAtPath(parts, JSON.parse(opts!.body as string));
    _bumpEtag(path);
    return { ok: true, status: 200, json: async () => null } as unknown as Response;
  }
  if (method === 'PATCH') {
    const existing = (_getAtPath(parts) as Record<string, unknown>) ?? {};
    _setAtPath(parts, { ...existing, ...JSON.parse(opts!.body as string) });
    _bumpEtag(path);
    return { ok: true, status: 200, json: async () => null } as unknown as Response;
  }
  if (method === 'DELETE') {
    _setAtPath(parts, null);
    return { ok: true, status: 200, json: async () => null } as unknown as Response;
  }
  return { ok: false, status: 405, json: async () => null } as unknown as Response;
});

// ── duel.ts mock ──────────────────────────────────────────────────
// _registerMatchFinishHook is called once at module load by
// duel-tournament-logic.ts to register its wrapper into duel.ts's
// _matchFinishHook slot. Capturing it here — instead of just a no-op — lets
// tests simulate "the game screen just finished" the same way duel.ts's
// real _showFinish() would, exercising the exact code path that used to
// only work for the room creator (see the "both sides register a finish
// hook" tests below).
const { registerMatchFinishHook, getRegisteredHook, askCode } = vi.hoisted(() => {
  let lastHook: ((r: unknown) => boolean) | null = null;
  return {
    registerMatchFinishHook: vi.fn((fn: (r: unknown) => boolean) => {
      lastHook = fn;
    }),
    getRegisteredHook: () => lastHook,
    askCode: vi.fn(async () => null as string | null),
  };
});
vi.mock('../../js/features/duel/duel.ts', async () => {
  const { DUEL_MODES } = await import('../../js/features/duel/duel-types.ts');
  return {
    _showLobby: vi.fn(),
    _initGame: vi.fn(),
    _askCode: askCode,
    _registerMatchFinishHook: registerMatchFinishHook,
    renderDuel: vi.fn(),
    DUEL_MODES,
  };
});
vi.mock('../../js/features/i18n.ts', () => ({ t: (k: string) => k }));

// Each "client" (player) gets its OWN module instance — vi.resetModules()
// forces a fresh top-level module scope (fresh _tournId/_tournSlot/
// _tournFinishHook module-level variables), the same way two separate
// browser tabs each get their own JS heap. They still share the Firebase
// mock above, so races between them are real races, not isolated no-ops.
async function loadFreshModule() {
  vi.resetModules();
  return import('../../js/features/duel/duel-tournament-logic.ts');
}

function makeRoomData(overrides: Record<string, unknown> = {}): any {
  return {
    seed: 0,
    mode: 'quiz',
    category: '',
    difficulty: 'mixed',
    bestOf: 1,
    maxHints: 3,
    powerupsEnabled: false,
    createdAt: Date.now(),
    started: true,
    finished: false,
    series: { p1wins: 0, p2wins: 0, round: 1 },
    p1: { name: 'A', avatar: '🧑', score: 0, idx: 10, done: true, hintsLeft: 3, powerups: {} },
    p2: { name: 'B', avatar: '🐱', score: 0, idx: 10, done: true, hintsLeft: 3, powerups: {} },
    ...overrides,
  };
}

const alertSpy = vi.fn();

beforeEach(() => {
  resetFirebaseMock();
  registerMatchFinishHook.mockClear();
  askCode.mockClear().mockResolvedValue(null);
  alertSpy.mockClear();
  vi.stubGlobal('alert', alertSpy);
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllTimers();
});

describe('_buildBracket', () => {
  it('builds a 4-player bracket: 2 first-round matches, 1 final', async () => {
    const { _buildBracket } = await loadFreshModule();
    const bracket = _buildBracket(4);
    expect(bracket).toHaveLength(2);
    expect(bracket[0]).toHaveLength(2);
    expect(bracket[1]).toHaveLength(1);
    expect(bracket[0].map((m) => [m.p1, m.p2])).toEqual([
      [0, 1],
      [2, 3],
    ]);
  });

  it('builds an 8-player bracket: 4 → 2 → 1 matches across 3 rounds', async () => {
    const { _buildBracket } = await loadFreshModule();
    const bracket = _buildBracket(8);
    expect(bracket.map((r) => r.length)).toEqual([4, 2, 1]);
  });

  it('every match starts undone with no winner and no room', async () => {
    const { _buildBracket } = await loadFreshModule();
    const bracket = _buildBracket(4);
    for (const round of bracket) {
      for (const m of round) {
        expect(m.done).toBe(false);
        expect(m.winner).toBe(-1);
        expect(m.roomId).toBe('');
        expect(m.p1score).toBe(0);
        expect(m.p2score).toBe(0);
      }
    }
  });
});

describe('joinTournament — atomic slot claim', () => {
  it('claims the first free slot', async () => {
    const creator = await loadFreshModule();
    await creator.createTournament(4);
    // Recover the generated code from the store directly instead of parsing UI.
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];

    const joiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(tournId);
    await joiner.joinTournament();

    const tourn = (_fbStore as any).tournaments[tournId];
    expect(Object.keys(tourn.players)).toContain('1');
    expect(tourn.players['1'].name).toBeTruthy();
  });

  it('two racing joiners land on two different slots instead of one clobbering the other', async () => {
    const creator = await loadFreshModule();
    await creator.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];

    const joinerA = await loadFreshModule();
    const joinerB = await loadFreshModule();
    askCode.mockResolvedValue(tournId);

    // Fire both joins "at the same time" — this is exactly the race the
    // fix (_fbClaim instead of check-then-set) closes: both see slot 1 free
    // in their initial read, but only one may win the atomic write to it.
    await Promise.all([joinerA.joinTournament(), joinerB.joinTournament()]);

    const tourn = (_fbStore as any).tournaments[tournId];
    const filledSlots = Object.keys(tourn.players);
    // Slot 0 (creator) + two distinct slots for A and B, no slot silently
    // overwritten (which would leave only 2 total players instead of 3).
    expect(filledSlots).toHaveLength(3);
    expect(new Set(filledSlots).size).toBe(3);
  });

  it('rejects joining a full tournament', async () => {
    const creator = await loadFreshModule();
    await creator.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];

    for (let i = 0; i < 3; i++) {
      const j = await loadFreshModule();
      askCode.mockResolvedValueOnce(tournId);
      await j.joinTournament();
    }
    const lateJoiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(tournId);
    await lateJoiner.joinTournament();
    expect(alertSpy).toHaveBeenCalled();
    const tourn = (_fbStore as any).tournaments[tournId];
    expect(Object.keys(tourn.players)).toHaveLength(4);
  });
});

describe('_finishHookFor — winner/tiebreak determinism', () => {
  const match = { p1: 0, p2: 1, p1score: 0, p2score: 0, winner: -1, done: false, roomId: 'R1' };

  it('awards the win to whichever side actually scored higher', async () => {
    const mod = await loadFreshModule();
    // Seed module-private _tournId via createTournament so the PATCH path
    // in _finishHookFor resolves to a real bracket location.
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    (_fbStore as any).tournaments[tournId].bracket[0][0] = { ...match };

    const hook = mod._finishHookFor(match, 0, 0, 'p1');
    await hook(makeRoomData({ p1: { ...makeRoomData().p1, score: 5 }, p2: { ...makeRoomData().p2, score: 2 } }));

    const updated = (_fbStore as any).tournaments[tournId].bracket[0][0];
    expect(updated.winner).toBe(match.p1);
    expect(updated.done).toBe(true);
    expect(updated.p1score).toBe(5);
    expect(updated.p2score).toBe(2);
  });

  it('a tie is decided by roomData.seed parity, not silently given to the opponent', async () => {
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    (_fbStore as any).tournaments[tournId].bracket[0][0] = { ...match };

    const hook = mod._finishHookFor(match, 0, 0, 'p1');
    const tiedRoom = makeRoomData({
      seed: 4, // even → match.p1 wins per the documented tiebreak rule
      p1: { ...makeRoomData().p1, score: 3 },
      p2: { ...makeRoomData().p2, score: 3 },
    });
    await hook(tiedRoom);

    const updated = (_fbStore as any).tournaments[tournId].bracket[0][0];
    expect(updated.winner).toBe(match.p1);
    expect(updated.p1score).toBe(3);
    expect(updated.p2score).toBe(3);
  });

  it('both sides computing the tiebreak independently agree on the same winner', async () => {
    // The whole point of deriving the tiebreak from roomData.seed instead of
    // Math.random() is that two different clients, each running their own
    // _finishHookFor closure, land on the identical winner — otherwise their
    // two PATCHes would race each other with different results.
    const roomData = makeRoomData({ seed: 7, p1: { ...makeRoomData().p1, score: 1 }, p2: { ...makeRoomData().p2, score: 1 } });

    const modP1 = await loadFreshModule();
    await modP1.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    (_fbStore as any).tournaments[tournId].bracket[0][0] = { ...match };
    await modP1._finishHookFor(match, 0, 0, 'p1')(roomData);
    const winnerFromP1Perspective = (_fbStore as any).tournaments[tournId].bracket[0][0].winner;

    // Reset just this match and run the same finish from "p2's" perspective
    // — modP2 needs its own real _tournId too (a second actual tournament
    // participant), not just the bare function, since _finishHookFor's
    // returned hook reads the module-private _tournId when it PATCHes.
    (_fbStore as any).tournaments[tournId].bracket[0][0] = { ...match, done: false, winner: -1 };
    const modP2 = await loadFreshModule();
    askCode.mockResolvedValueOnce(tournId);
    await modP2.joinTournament();
    await modP2._finishHookFor(match, 0, 0, 'p2')(roomData);
    const winnerFromP2Perspective = (_fbStore as any).tournaments[tournId].bracket[0][0].winner;

    expect(winnerFromP1Perspective).toBe(winnerFromP2Perspective);
  });
});

describe('both room creator and joiner can finish a match (the tab-close fix)', () => {
  it('the joiner alone can complete the match and advance the tournament if the creator never reports back', async () => {
    const creator = await loadFreshModule();
    await creator.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];

    const joiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(tournId);
    await joiner.joinTournament();

    // Force the tournament into "started, round 1 match 0 has a room" state
    // (normally driven by the wait-poll + start button) so _joinTournMatch
    // has a real match/room to attach to.
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.started = true;
    const match = tourn.bracket[0][0];
    match.p1 = 0;
    match.p2 = 1;

    // Creator (slot 0) opens the match room.
    await creator._startTournMatch(tourn, 0, 0);
    const roomId = (_fbStore as any).tournaments[tournId].bracket[0][0].roomId;
    expect(roomId).toBeTruthy();

    // Only the CREATOR's registration happened so far — capture it, then
    // overwrite the shared "last registered hook" with the JOINER's own
    // registration next, simulating the creator's tab having already closed
    // (its hook reference is simply never invoked again).
    const creatorHookCall = registerMatchFinishHook.mock.calls.length;
    expect(creatorHookCall).toBeGreaterThan(0);

    await joiner._joinTournMatch(roomId, tourn, 0, 0);
    const joinerHook = getRegisteredHook()!;
    expect(joinerHook).toBeTruthy();

    // Simulate the joiner's own game screen finishing — this is the wrapper
    // registered by duel-tournament-logic.ts itself, so it internally
    // consults *this module instance's* _tournFinishHook/_tournId.
    const finishedRoom = makeRoomData({
      seed: 1,
      p1: { ...makeRoomData().p1, score: 3 },
      p2: { ...makeRoomData().p2, score: 7 },
    });
    const handled = joinerHook(finishedRoom);
    expect(handled).toBe(true);

    // Give the fire-and-forget hook's internal await chain a tick to settle.
    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    const updatedMatch = (_fbStore as any).tournaments[tournId].bracket[0][0];
    expect(updatedMatch.done).toBe(true);
    // Joiner is always room-slot 'p2' (see _joinTournMatch) — p2 scored 7 and won.
    expect(updatedMatch.winner).toBe(match.p2);
  });
});

describe('_startTournMatch — room-role p1/p2 vs bracket-seed p1/p2', () => {
  it('a room creator seeded as the higher bracket slot still gets its own identity in room.p1 and can win', async () => {
    const creator = await loadFreshModule();
    await creator.createTournament(4); // creator's own tournament slot is always 0
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.started = true;
    tourn.players[1] = { name: 'Rival', avatar: '🐱' };
    const match = tourn.bracket[0][0];
    // Creator (tournament slot 0) is bracket-seed match.p2 here, not
    // match.p1 — the exact scenario the old
    // `mySlot = match.p1 === _tournSlot ? 'p1' : 'p2'` computation got
    // backwards on: it made mySlot 'p2' while room.p1 (below) was always
    // populated with tourn.players[match.p1]'s identity — a different
    // person — so nobody ever wrote real gameplay data into room.p1 and the
    // match could never detect either side as finished.
    match.p1 = 1;
    match.p2 = 0;

    await creator._startTournMatch(tourn, 0, 0);
    const roomId = (_fbStore as any).tournaments[tournId].bracket[0][0].roomId;
    const room = (_fbStore as any).duel_rooms[roomId];

    // Room-role p1 is always the room *creator*, regardless of bracket
    // seed — must carry this client's own identity, not the other player's
    // (tourn.players[1], seeded at match.p1).
    expect(room.p1.name).toBeTruthy();
    expect(room.p1.name).not.toBe(tourn.players[1]?.name);

    // Simulate this client's own gameplay writing its score into room.p1
    // (what duel.ts's _pushScore()/_finishMyGame() do, keyed off
    // room.mySlot) and the opponent's score arriving on room.p2.
    room.p1 = { ...room.p1, score: 7, idx: 10, done: true };
    room.p2 = { ...room.p1, score: 2, name: 'Opp' };

    const hook = getRegisteredHook()!;
    const handled = hook(makeRoomData({ p1: room.p1, p2: room.p2 }));
    expect(handled).toBe(true);
    await new Promise((r) => setTimeout(r, 0));

    const updatedMatch = (_fbStore as any).tournaments[tournId].bracket[0][0];
    expect(updatedMatch.done).toBe(true);
    // This client is bracket-seed match.p2 (tournament slot 0) and scored
    // higher (7 > 2) — the bracket must record *that seed* as the winner,
    // not seed 1 (tourn.players[match.p1], a different player entirely).
    expect(updatedMatch.winner).toBe(match.p2);
    expect(updatedMatch.p2score).toBe(7);
    expect(updatedMatch.p1score).toBe(2);
  });
});

describe('_advanceTournament', () => {
  it('increments currentMatch when the round is not fully done yet', async () => {
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.bracket[0][0].done = true;
    tourn.bracket[0][0].winner = 0;
    // bracket[0][1] still not done

    await mod._advanceTournament();

    const updated = (_fbStore as any).tournaments[tournId];
    expect(updated.currentMatch).toBe(1);
    expect(updated.currentRound).toBe(0);
  });

  it('seeds the next round from this round\'s winners once every match is done', async () => {
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.bracket[0][0].done = true;
    tourn.bracket[0][0].winner = 0;
    tourn.bracket[0][1].done = true;
    tourn.bracket[0][1].winner = 3;

    await mod._advanceTournament();

    const updated = (_fbStore as any).tournaments[tournId];
    expect(updated.currentRound).toBe(1);
    expect(updated.currentMatch).toBe(0);
    expect(updated.bracket[1][0].p1).toBe(0);
    expect(updated.bracket[1][0].p2).toBe(3);
  });

  it('marks the tournament finished with a champion once the final match is done', async () => {
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.players['1'] = { name: 'Rival', avatar: '🐱' };
    tourn.players['2'] = { name: 'X', avatar: '🐸' };
    tourn.players['3'] = { name: 'Y', avatar: '🐢' };
    tourn.currentRound = 1;
    tourn.bracket[1][0].done = true;
    tourn.bracket[1][0].winner = 0;

    await mod._advanceTournament();

    const updated = (_fbStore as any).tournaments[tournId];
    expect(updated.finished).toBe(true);
    // Slot 0 is the tournament creator — champion is "<avatar> <name>" built
    // from that player's own profile snapshot (see duel-profile-snap.ts's
    // _getMyName()/_getMyAvatar() fallbacks with no profile configured).
    expect(updated.champion).toBe('🧑 duel.player');
  });

  it('calling it twice for the same just-finished match does not double-advance currentMatch', async () => {
    // The real trigger for this: both participants of a match independently
    // call _advanceTournament() once their own client sees the match done
    // (see _finishHookFor) — this simulates that without needing two actual
    // module instances, since both calls read the identical persisted state.
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.bracket[0][0].done = true;
    tourn.bracket[0][0].winner = 0;
    // bracket[0][1] still not done.

    await mod._advanceTournament();
    await mod._advanceTournament();

    // currentMatch must land on 1 exactly once, not 1-then-2 — nextIdx is
    // derived from bracket[0]'s own done flags, not incremented off the
    // previous call's result, so the second call is a no-op.
    const updated = (_fbStore as any).tournaments[tournId];
    expect(updated.currentMatch).toBe(1);
  });

  it('calling it twice for the round-complete transition writes the same next-round bracket, not a double-advance', async () => {
    const mod = await loadFreshModule();
    await mod.createTournament(4);
    const tournId = Object.keys((_fbStore as any).tournaments ?? {})[0];
    const tourn = (_fbStore as any).tournaments[tournId];
    tourn.bracket[0][0].done = true;
    tourn.bracket[0][0].winner = 0;
    tourn.bracket[0][1].done = true;
    tourn.bracket[0][1].winner = 3;

    // Both match-1 participants' clients call this once their own finish
    // hook lands — round 0 is already fully done by the time either runs.
    await mod._advanceTournament();
    await mod._advanceTournament();

    const updated = (_fbStore as any).tournaments[tournId];
    expect(updated.currentRound).toBe(1);
    expect(updated.currentMatch).toBe(0);
    expect(updated.bracket[1][0].p1).toBe(0);
    expect(updated.bracket[1][0].p2).toBe(3);
  });
});
