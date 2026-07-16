import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  _tryResumeSession,
  _getResumeSessions,
  _getHistory,
  _getRating,
} from '../../js/features/duel/duel.ts';
import { _saveSessions, _loadSessions } from '../../js/features/duel/duel-session-store.ts';
import { DB_URL } from '../../js/features/duel/duel-firebase.ts';

// Regression test: _tryResumeSession() used to silently delete the local
// session for a match that finished while this client wasn't around (a
// typical async-challenge case — the opponent answers hours later, after
// this player already closed the tab) — meaning that player's own
// history/rating never recorded a match that genuinely concluded, even
// though the opponent's side did. Same bug class as "only the room creator
// finishes a tournament match," already fixed in duel-tournament-logic.ts.

vi.mock('../../js/features/i18n.ts', () => ({ t: (k: string) => k, getLang: () => 'ua' }));

function fbMock(rooms: Record<string, unknown>): void {
  vi.stubGlobal('fetch', async (url: string) => {
    const path = url.replace(DB_URL, '').replace('.json', '');
    const m = /^\/duel_rooms\/(.+)$/.exec(path);
    const value = m ? (rooms[m[1]] ?? null) : null;
    return { ok: true, status: 200, json: async () => value } as unknown as Response;
  });
}

beforeEach(() => {
  localStorage.clear();
  vi.unstubAllGlobals();
});

describe('_tryResumeSession — recording a match finished while we were away', () => {
  it('records history + rating for our side and clears the session, even though we never saw it end', async () => {
    fbMock({
      room1: {
        finished: true,
        mode: 'quiz',
        category: '',
        lang: 'ua',
        knowLang: 'en',
        p1: { name: 'Me', avatar: '🧑', score: 8 },
        p2: { name: 'Rival', avatar: '🦊', score: 5 },
      },
    });
    _saveSessions([{ roomId: 'room1', slot: 'p1', mode: 'quiz', idx: 10, score: 8 }]);

    await _tryResumeSession();

    const hist = _getHistory();
    expect(hist).toHaveLength(1);
    expect(hist[0]).toMatchObject({
      myScore: 8,
      oppScore: 5,
      oppName: 'Rival',
      won: true,
    });

    const rating = _getRating();
    expect(rating.wins).toBe(1);

    expect(_loadSessions()).toHaveLength(0);
    expect(_getResumeSessions()).toHaveLength(0);
  });

  it('records a loss correctly when the opponent (p2 slot, from our perspective p1) scored higher', async () => {
    fbMock({
      room2: {
        finished: true,
        mode: 'write',
        category: '',
        p1: { name: 'Me', avatar: '🧑', score: 2 },
        p2: { name: 'Rival', avatar: '🦊', score: 9 },
      },
    });
    _saveSessions([{ roomId: 'room2', slot: 'p1', mode: 'write', idx: 10, score: 2 }]);

    await _tryResumeSession();

    expect(_getHistory()[0]).toMatchObject({ won: false, myScore: 2, oppScore: 9 });
    expect(_getRating().losses).toBe(1);
  });

  it('records a tie correctly', async () => {
    fbMock({
      room3: {
        finished: true,
        mode: 'quiz',
        category: '',
        p1: { name: 'Me', avatar: '🧑', score: 4 },
        p2: { name: 'Rival', avatar: '🦊', score: 4 },
      },
    });
    _saveSessions([{ roomId: 'room3', slot: 'p1', mode: 'quiz', idx: 10, score: 4 }]);

    await _tryResumeSession();

    expect(_getHistory()[0]).toMatchObject({ won: false, myScore: 4, oppScore: 4 });
    expect(_getRating().ties).toBe(1);
  });

  it('works correctly when we are p2 (the joiner), not just p1', async () => {
    fbMock({
      room4: {
        finished: true,
        mode: 'quiz',
        category: '',
        p1: { name: 'Rival', avatar: '🦊', score: 3 },
        p2: { name: 'Me', avatar: '🧑', score: 6 },
      },
    });
    _saveSessions([{ roomId: 'room4', slot: 'p2', mode: 'quiz', idx: 10, score: 6 }]);

    await _tryResumeSession();

    expect(_getHistory()[0]).toMatchObject({ won: true, myScore: 6, oppScore: 3, oppName: 'Rival' });
  });

  it('does not touch history/rating for a room that is still in progress', async () => {
    fbMock({
      room5: {
        finished: false,
        mode: 'quiz',
        category: '',
        createdAt: Date.now(),
        p1: { name: 'Me', avatar: '🧑', score: 3 },
        p2: null,
      },
    });
    _saveSessions([
      { roomId: 'room5', slot: 'p1', mode: 'quiz', idx: 3, score: 3, createdAt: Date.now() },
    ]);

    await _tryResumeSession();

    expect(_getHistory()).toHaveLength(0);
    expect(_loadSessions()).toHaveLength(1);
    expect(_getResumeSessions()).toHaveLength(1);
  });

  it('records each of two unseen-finished sessions exactly once', async () => {
    fbMock({
      roomA: {
        finished: true,
        mode: 'quiz',
        category: '',
        p1: { name: 'Me', avatar: '🧑', score: 7 },
        p2: { name: 'Alice', avatar: '🐱', score: 1 },
      },
      roomB: {
        finished: true,
        mode: 'quiz',
        category: '',
        p1: { name: 'Me', avatar: '🧑', score: 1 },
        p2: { name: 'Bob', avatar: '🐢', score: 7 },
      },
    });
    _saveSessions([
      { roomId: 'roomA', slot: 'p1', mode: 'quiz', idx: 10, score: 7 },
      { roomId: 'roomB', slot: 'p1', mode: 'quiz', idx: 10, score: 1 },
    ]);

    await _tryResumeSession();

    expect(_getHistory()).toHaveLength(2);
    expect(_getRating().wins).toBe(1);
    expect(_getRating().losses).toBe(1);
    expect(_loadSessions()).toHaveLength(0);
  });
});
