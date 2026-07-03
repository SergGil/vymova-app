import { describe, it, expect, beforeEach, vi } from 'vitest';

// ── Mock Firebase fetch (records every request so we can assert on
// method/path/body, not just the resulting KV state) ──────────────
const DB_URL = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const _fbStore: Record<string, unknown> = {};
const _calls: { method: string; path: string; body?: unknown }[] = [];
vi.stubGlobal(
  'fetch',
  vi.fn(async (url: string, opts?: RequestInit) => {
    const path = url.replace(DB_URL, '').replace('.json', '');
    const method = opts?.method ?? 'GET';
    const body = opts?.body ? JSON.parse(opts.body as string) : undefined;
    _calls.push({ method, path, body });
    if (method === 'PUT') _fbStore[path] = body;
    if (method === 'PATCH') {
      const ex = (_fbStore[path] as Record<string, unknown>) ?? {};
      _fbStore[path] = { ...ex, ...(body as Record<string, unknown>) };
    }
    if (method === 'DELETE') delete _fbStore[path];
    return { ok: true, json: async () => _fbStore[path] ?? null } as Response;
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
  document.getElementById('code-input-ok')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

import { createRoom, joinRoom, _cancelRoom } from '../../js/features/duel.ts';
import { createAsyncChallenge, _cancelAsyncStart } from '../../js/features/duel-async-challenge.ts';
import { createTournament, _cancelTournament } from '../../js/features/duel-tournament-logic.ts';
import { joinAsSpectator } from '../../js/features/duel-spectator-logic.ts';
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
    Object.keys(_fbStore).forEach((k) => delete _fbStore[k]);
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

  it('joinRoom() GETs the room then PATCHes p2 + started:true', async () => {
    _fbStore['/duel_rooms/JOINME'] = {
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
    };
    await joinRoom('JOINME');
    const patch = _calls.find((c) => c.method === 'PATCH' && c.path === '/duel_rooms/JOINME');
    expect(patch).toBeTruthy();
    expect((patch!.body as any).started).toBe(true);
    expect((patch!.body as any).p2).toBeTruthy();
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
    expect(_calls.find((c) => c.method === 'DELETE' && c.path.startsWith('/duel_rooms/'))).toBeFalsy();
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
    _fbStore['/duel_rooms/SPECROOM'] = {
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
    };
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
