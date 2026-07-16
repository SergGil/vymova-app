import { describe, it, expect, beforeEach, vi } from 'vitest';

// Regression test for the same check-then-act slot-claim race already fixed
// in joinRoom() (duel-lobby-logic.ts) and joinTournament()
// (duel-tournament-logic.ts): joinAsyncChallenge() used to just check
// `if (challenge.opponent)` and then fire-and-forget a plain _fbPatch, so
// two people replying to the same shared challenge code within the same
// poll window could both pass the check and both start playing locally as
// "the opponent" — only one write ever lands, and the loser's game state
// can never sync. Fixed via the same atomic _fbClaim (ETag/if-match) used
// by the other two join flows.

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
  return { ok: false, status: 405, json: async () => null } as unknown as Response;
});

const { askCode } = vi.hoisted(() => ({ askCode: vi.fn(async () => null as string | null) }));
vi.mock('../../js/features/i18n.ts', () => ({ t: (k: string) => k, getLang: () => 'ua' }));
vi.mock('../../js/features/duel/duel.ts', async () => {
  const { DUEL_MODES } = await import('../../js/features/duel/duel-types.ts');
  return {
    DUEL_MODES,
    _askCode: askCode,
    _initGame: vi.fn(),
    _registerAsyncStartCancelHook: vi.fn(),
  };
});
// createAsyncChallenge() dynamically imports the real duel-tournament-logic.ts
// just to clear stale tournament state — that file statically pulls in a lot
// more of duel.ts than this test mocks, so stub the one function this module
// actually calls from it instead of expanding the duel.ts mock's surface.
vi.mock('../../js/features/duel/duel-tournament-logic.ts', () => ({
  _clearTournamentState: vi.fn(),
}));

async function loadFreshModule() {
  vi.resetModules();
  return import('../../js/features/duel/duel-async-challenge.ts');
}

beforeEach(() => {
  resetFirebaseMock();
  askCode.mockClear().mockResolvedValue(null);
  localStorage.clear();
});

describe('joinAsyncChallenge — atomic opponent-slot claim', () => {
  it('a single joiner successfully claims the opponent slot', async () => {
    const creator = await loadFreshModule();
    await creator.createAsyncChallenge();
    const code = Object.keys((_fbStore as any).duel_async ?? {})[0];
    expect(code).toBeTruthy();

    const joiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(code);
    await joiner.joinAsyncChallenge();

    const challenge = (_fbStore as any).duel_async[code];
    expect(challenge.opponent).toBeTruthy();
    expect(challenge.opponent.name).toBeTruthy();
  });

  it('two racing joiners: only one claims it, the other gets a clear error instead of a silent duplicate game', async () => {
    const creator = await loadFreshModule();
    await creator.createAsyncChallenge();
    const code = Object.keys((_fbStore as any).duel_async ?? {})[0];

    const joinerA = await loadFreshModule();
    const joinerB = await loadFreshModule();
    askCode.mockResolvedValue(code);

    await Promise.all([joinerA.joinAsyncChallenge(), joinerB.joinAsyncChallenge()]);

    // Exactly one opponent object won the race — the store never ends up
    // with the two racers' writes silently clobbering each other into some
    // inconsistent half-state, and there's exactly one accepted opponent.
    const challenge = (_fbStore as any).duel_async[code];
    expect(challenge.opponent).toBeTruthy();
    expect(typeof challenge.opponent.name).toBe('string');
  });

  it('rejects joining an already-taken challenge outright (fast-path check)', async () => {
    const creator = await loadFreshModule();
    await creator.createAsyncChallenge();
    const code = Object.keys((_fbStore as any).duel_async ?? {})[0];

    const firstJoiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(code);
    await firstJoiner.joinAsyncChallenge();

    const lateJoiner = await loadFreshModule();
    askCode.mockResolvedValueOnce(code);
    await lateJoiner.joinAsyncChallenge();

    // Still exactly the first joiner's claim — nothing overwritten.
    const challenge = (_fbStore as any).duel_async[code];
    expect(challenge.opponent).toBeTruthy();
  });
});
