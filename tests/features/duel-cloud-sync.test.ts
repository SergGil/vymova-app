import { describe, it, expect, beforeEach, vi } from 'vitest';

// ── Mock Firebase fetch (records every request so we can assert on
// method/path/body, not just the resulting KV state) ──────────────
// Modeled as a real nested tree (not a flat path→value map) — Firebase RTDB
// is a tree, so a write to a child path (e.g. /duel_rooms/X/p2) must be
// visible to a GET of its parent (/duel_rooms/X), which duel.ts's polling
// and joinRoom()'s atomic p2 claim both rely on. Also models Firebase's
// conditional-request support (X-Firebase-ETag / if-match) with a per-path
// version counter, so _fbClaim()'s compare-and-swap can be tested for real.
const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const _fbRoot: Record<string, unknown> = {};
const _fbVersion: Record<string, number> = {};
const _calls: { method: string; path: string; body?: unknown }[] = [];

function _fbSplit(path: string): string[] {
  return path.split('/').filter(Boolean);
}
function _fbGetAt(path: string): unknown {
  let node: unknown = _fbRoot;
  for (const part of _fbSplit(path)) {
    if (node === null || typeof node !== 'object') return null;
    node = (node as Record<string, unknown>)[part];
  }
  return node === undefined ? null : node;
}
function _fbSetAt(path: string, value: unknown): void {
  const parts = _fbSplit(path);
  let node = _fbRoot;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (typeof node[part] !== 'object' || node[part] === null) node[part] = {};
    node = node[part] as Record<string, unknown>;
  }
  node[parts[parts.length - 1]] = value;
}
function _fbDeleteAt(path: string): void {
  const parts = _fbSplit(path);
  let node = _fbRoot;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (typeof node[part] !== 'object' || node[part] === null) return;
    node = node[part] as Record<string, unknown>;
  }
  delete node[parts[parts.length - 1]];
}
function _fbEtag(path: string): string {
  return 'v' + (_fbVersion[path] ?? 0);
}

vi.stubGlobal(
  'fetch',
  vi.fn(async (url: string, opts?: RequestInit) => {
    const path = url.replace(DB_URL, '').replace('.json', '');
    const method = opts?.method ?? 'GET';
    const body = opts?.body ? JSON.parse(opts.body as string) : undefined;
    const reqHeaders = (opts?.headers as Record<string, string>) ?? {};
    _calls.push({ method, path, body });
    if (method === 'PUT') {
      const ifMatch = reqHeaders['if-match'];
      if (ifMatch !== undefined && ifMatch !== _fbEtag(path)) {
        return {
          ok: false,
          status: 412,
          json: async () => null,
          headers: { get: () => null },
        } as unknown as Response;
      }
      _fbSetAt(path, body);
      _fbVersion[path] = (_fbVersion[path] ?? 0) + 1;
    }
    if (method === 'PATCH') {
      const ex = (_fbGetAt(path) as Record<string, unknown>) ?? {};
      _fbSetAt(path, { ...ex, ...(body as Record<string, unknown>) });
      _fbVersion[path] = (_fbVersion[path] ?? 0) + 1;
    }
    if (method === 'DELETE') {
      _fbDeleteAt(path);
      _fbVersion[path] = (_fbVersion[path] ?? 0) + 1;
    }
    // Snapshot the ETag now, at response-construction time — a real HTTP
    // response's headers are fixed the moment the server builds it. If this
    // read the live `_fbVersion` lazily inside `.get()` instead, a racer
    // whose GET landed before a concurrent write would still observe the
    // *post-write* ETag once it got around to calling `.get()`, defeating
    // the whole point of testing the if-match race.
    const etagSnapshot = _fbEtag(path);
    return {
      ok: true,
      status: 200,
      json: async () => _fbGetAt(path),
      headers: { get: (name: string) => (name.toLowerCase() === 'etag' ? etagSnapshot : null) },
    } as unknown as Response;
  }),
);

vi.stubGlobal('alert', vi.fn());
vi.stubGlobal('crypto', {
  getRandomValues: (arr: Uint8Array) => {
    for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
    return arr;
  },
});

// _askCode() drives a real DOM prompt (#code-input-*) rather than a plain
// promise, so functions that use it (joinAsSpectator here) need those
// elements present; this drives them for real instead of mocking duel.ts's
// module (which — now that duel.ts statically imports from duel-spectator-
// logic.ts — makes vi.mock's importOriginal() resolve _askCode ambiguously
// across the two module instances).
function _mountCodeInputDom(): void {
  document.body.innerHTML += `
    <div id="code-input-overlay" style="display:none">
      <span id="code-input-title"></span>
      <span id="code-input-desc"></span>
      <input id="code-input-field" />
      <button id="code-input-ok"></button>
      <button id="code-input-cancel"></button>
    </div>`;
}
async function _answerCodePrompt(code: string): Promise<void> {
  await new Promise((r) => setTimeout(r, 0)); // let _askCode() render into the overlay
  (document.getElementById('code-input-field') as HTMLInputElement).value = code;
  document
    .getElementById('code-input-ok')!
    .dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

import { _cancelRoom } from '../../js/features/duel/duel.ts';
import { createRoom, joinRoom } from '../../js/features/duel/duel-lobby-logic.ts';
import { createAsyncChallenge, _cancelAsyncStart } from '../../js/features/duel/duel-async-challenge.ts';
import { createTournament, _cancelTournament } from '../../js/features/duel/duel-tournament-logic.ts';
import { joinAsSpectator } from '../../js/features/duel/duel-spectator-logic.ts';
import { getDuelRoomSnapshot } from '../../src/duel-room-store.ts';
import { getDuelLobbyUISnapshot } from '../../src/duel-lobby-store.ts';

// This suite exercises the *real* Firebase-facing functions (not mocks of
// them) end to end, specifically to verify that the duel.ts split into
// duel-firebase.ts / duel-tournament-logic.ts / duel-async-challenge.ts /
// duel-spectator-logic.ts didn't drop or misroute any cloud read/write, and
// that the cleanup wiring in duel.ts's _cancelRoom() (which now calls into
// the three extracted modules instead of touching their state directly)
// actually fires.
describe('duel cloud sync — real Firebase-facing functions after the module split', () => {
  beforeEach(() => {
    Object.keys(_fbRoot).forEach((k) => delete _fbRoot[k]);
    Object.keys(_fbVersion).forEach((k) => delete _fbVersion[k]);
    _calls.length = 0;
    document.body.innerHTML = '';
  });

  it('createRoom() PUTs a full room doc, then _cancelRoom() DELETEs it (p1 owns cleanup)', async () => {
    await createRoom();
    const put = _calls.find((c) => c.method === 'PUT' && c.path.startsWith('/duel_rooms/'));
    expect(put).toBeTruthy();
    const roomId = getDuelRoomSnapshot().roomId;
    expect(put!.path).toBe(`/duel_rooms/${roomId}`);
    expect((put!.body as any).p1).toBeTruthy();
    expect((put!.body as any).p2).toBeNull();

    _cancelRoom();
    const del = _calls.find((c) => c.method === 'DELETE' && c.path === `/duel_rooms/${roomId}`);
    expect(del).toBeTruthy();
  });

  it('joinRoom() claims p2 via a conditional PUT, then PATCHes started:true', async () => {
    _fbSetAt('/duel_rooms/JOINME', {
      seed: 1,
      mode: 'quiz',
      category: '',
      difficulty: 'mixed',
      bestOf: 1,
      maxHints: 3,
      powerupsEnabled: false,
      p1: { name: 'Host', avatar: '🧑', score: 0, idx: 0, done: false, hintsLeft: 3, powerups: {} },
      p2: null,
      started: false,
      finished: false,
      createdAt: Date.now(),
      series: { p1wins: 0, p2wins: 0, round: 1 },
    });
    await joinRoom('JOINME');
    const claim = _calls.find((c) => c.method === 'PUT' && c.path === '/duel_rooms/JOINME/p2');
    expect(claim).toBeTruthy();
    expect((claim!.body as any).name).toBeTruthy();
    const patch = _calls.find((c) => c.method === 'PATCH' && c.path === '/duel_rooms/JOINME');
    expect(patch).toBeTruthy();
    expect((patch!.body as any).started).toBe(true);
    // The full room doc (a real Firebase tree, not a flat KV store) must
    // reflect the child write — duel.ts's game/opponent polling reads the
    // parent path and expects p2 to already be there.
    expect((_fbGetAt('/duel_rooms/JOINME') as any).p2.name).toBeTruthy();
    _cancelRoom();
  });

  it('joinRoom() race: only one of two concurrent joiners claims p2, the other sees duel.err.taken', async () => {
    _fbSetAt('/duel_rooms/RACEME', {
      seed: 1,
      mode: 'quiz',
      category: '',
      difficulty: 'mixed',
      bestOf: 1,
      maxHints: 3,
      powerupsEnabled: false,
      p1: { name: 'Host', avatar: '🧑', score: 0, idx: 0, done: false, hintsLeft: 3, powerups: {} },
      p2: null,
      started: false,
      finished: false,
      createdAt: Date.now(),
      series: { p1wins: 0, p2wins: 0, round: 1 },
    });
    // Both "players" read the room (p2 still null for both) and race to
    // claim the slot — this is the exact window the bug report describes.
    await Promise.all([joinRoom('RACEME'), joinRoom('RACEME')]);
    const claimPuts = _calls.filter((c) => c.method === 'PUT' && c.path === '/duel_rooms/RACEME/p2');
    // Both racers attempt the conditional claim...
    expect(claimPuts.length).toBe(2);
    // ...but the if-match check only lets one of them actually persist —
    // the loser's PUT is rejected with 412, so the path's version (and thus
    // its stored value) only advances once, not clobbered by a second write.
    expect(_fbVersion['/duel_rooms/RACEME/p2']).toBe(1);
    // Only the winner proceeds past the claim to mark the room started —
    // the loser throws duel.err.taken before ever reaching that PATCH.
    const startedPatches = _calls.filter(
      (c) =>
        c.method === 'PATCH' && c.path === '/duel_rooms/RACEME' && (c.body as any).started === true,
    );
    expect(startedPatches.length).toBe(1);
    _cancelRoom();
  });

  it('createAsyncChallenge() PUTs to /duel_async/, and _cancelRoom() DELETEs from /duel_async/ (not /duel_rooms/)', async () => {
    await createAsyncChallenge();
    const roomId = getDuelRoomSnapshot().roomId;
    expect(getDuelRoomSnapshot().isAsyncChallenge).toBe(true);
    const put = _calls.find((c) => c.method === 'PUT' && c.path === `/duel_async/${roomId}`);
    expect(put).toBeTruthy();

    _cancelRoom();
    const del = _calls.find((c) => c.method === 'DELETE');
    expect(del?.path).toBe(`/duel_async/${roomId}`);
    // No stray /duel_rooms/ delete for an async challenge room.
    expect(
      _calls.find((c) => c.method === 'DELETE' && c.path.startsWith('/duel_rooms/')),
    ).toBeFalsy();
    _cancelAsyncStart();
  });

  it('createTournament() PUTs a bracket doc, then _cancelTournament() DELETEs it (creator owns cleanup)', async () => {
    await createTournament(4);
    const put = _calls.find((c) => c.method === 'PUT' && c.path.startsWith('/tournaments/'));
    expect(put).toBeTruthy();
    expect((put!.body as any).bracket.length).toBe(2); // semi + final for a 4-player bracket
    const tournId = put!.path.replace('/tournaments/', '');

    _cancelTournament();
    const del = _calls.find((c) => c.method === 'DELETE' && c.path === `/tournaments/${tournId}`);
    expect(del).toBeTruthy();
  });

  it('joinAsSpectator() PATCHes a spectator entry, and _cancelRoom() DELETEs it via the cross-module cleanup hook', async () => {
    _fbSetAt('/duel_rooms/SPECROOM', {
      seed: 1,
      mode: 'quiz',
      category: '',
      difficulty: 'mixed',
      p1: { name: 'Host', avatar: '🧑', score: 0, idx: 0, done: false },
      p2: { name: 'Guest', avatar: '🧑', score: 0, idx: 0, done: false },
      started: true,
      finished: false,
      createdAt: Date.now(),
      series: { p1wins: 0, p2wins: 0, round: 1 },
    });
    _mountCodeInputDom();
    const joined = joinAsSpectator();
    await _answerCodePrompt('SPECROOM');
    await joined;
    const patch = _calls.find(
      (c) => c.method === 'PATCH' && c.path.startsWith('/duel_rooms/SPECROOM/spectators/'),
    );
    expect(patch).toBeTruthy();
    const specPath = patch!.path;

    // This is the key regression check: _cancelRoom() lives in duel.ts and no
    // longer touches spectator state directly — it reaches into
    // duel-spectator-logic.ts's _cancelSpectating(). If that wiring broke
    // during the split, this DELETE would never fire and the spectator
    // entry would leak in Firebase forever.
    _cancelRoom();
    const del = _calls.find((c) => c.method === 'DELETE' && c.path === specPath);
    expect(del).toBeTruthy();

    // Regression check: leaving a spectated room must NOT delete the room
    // itself — it belongs to the players, not the spectator. (Found via
    // this suite: joinAsSpectator() never set mySlot, so it stayed 'p1'
    // from a prior game, and _cancelRoom()'s "I'm p1, delete the room"
    // branch fired for spectators too.)
    const roomDel = _calls.find((c) => c.method === 'DELETE' && c.path === '/duel_rooms/SPECROOM');
    expect(roomDel).toBeFalsy();
  });

  it('lobby buttons/messages reset correctly after _cancelRoom(), regardless of which flow created the room', async () => {
    await createRoom();
    _cancelRoom();
    const ui = getDuelLobbyUISnapshot();
    expect(ui.waiting.visible).toBe(false);
    expect(ui.joinRowVisible).toBe(true);
  });
});
