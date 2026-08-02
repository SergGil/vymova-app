// Vymova — js/features/duel/duel-session-persistence.ts
// Session persistence (localStorage) for resuming an in-progress duel —
// pure read/write over room/chat store snapshots, no dependency on the
// game-runtime logic in duel.ts (which imports these, not the other way
// around — keeps this a one-directional leaf like duel-history-log.ts).
// NOT a createDomainStore instance despite the neighboring *-store.ts names
// in this directory (duel-room-store.ts, duel-lobby-store.ts, ...) — no
// reactive subscription, just plain localStorage read/write functions.
import { getDuelRoomSnapshot } from '../../../src/duel-room-store.ts';
import { getDuelChatSnapshot } from '../../../src/duel-async-store.ts';
import type { DuelMode, Difficulty, BestOf, PowerupType } from './duel-types.ts';

const SESSION_KEY = 'ew_duel_sessions';
const SESSION_KEY_OLD = 'ew_duel_session';

export interface DuelSession {
  roomId: string;
  slot: 'p1' | 'p2';
  mode: DuelMode;
  idx: number;
  score: number;
  correct?: number;
  wrong?: number;
  flags?: (boolean | 'skip' | 'double')[];
  chat?: { text: string; isMe: boolean }[];
  deckLen?: number;
  createdAt?: number;
  seed?: number;
  category?: string;
  difficulty?: Difficulty;
  maxHints?: number;
  bestOf?: BestOf;
  powerupsEnabled?: boolean;
  myPowerups?: Record<PowerupType, number>;
  oppName?: string;
  oppAvatar?: string;
}

export function _loadSessions(): DuelSession[] {
  try {
    const r = localStorage.getItem(SESSION_KEY);
    if (r) {
      const arr = JSON.parse(r);
      return Array.isArray(arr) ? arr : [];
    }
    // Migrate from the old single-session format
    const old = localStorage.getItem(SESSION_KEY_OLD);
    if (old) {
      const sess = JSON.parse(old);
      localStorage.removeItem(SESSION_KEY_OLD);
      if (sess?.roomId) {
        const list = [sess];
        _saveSessions(list);
        return list;
      }
    }
    return [];
  } catch (e) {
    return [];
  }
}
export function _saveSessions(list: DuelSession[]): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(list));
  } catch (e) {}
}
export function _saveSession(): void {
  const room = getDuelRoomSnapshot();
  if (!room.roomId) return;
  const list = _loadSessions().filter((s) => s.roomId !== room.roomId);
  list.push({
    roomId: room.roomId,
    slot: room.mySlot,
    mode: room.mode,
    idx: room.quizIdx,
    score: room.myScore,
    correct: room.myCorrect,
    wrong: room.myWrong,
    flags: room.myFlags,
    chat: getDuelChatSnapshot(),
    deckLen: room.quizDeck.length,
    createdAt: room.roomCreatedAt,
    seed: room.roomSeed,
    category: room.roomCategory,
    difficulty: room.roomDifficulty,
    maxHints: room.roomMaxHints,
    bestOf: room.bestOf,
    powerupsEnabled: room.powerupsEnabled,
    myPowerups: { ...room.myPowerups },
    oppName: room.oppName,
    oppAvatar: room.oppAvatar,
  });
  _saveSessions(list);
}
export function _clearSession(roomId?: string): void {
  const id = roomId || getDuelRoomSnapshot().roomId;
  if (!id) return;
  _saveSessions(_loadSessions().filter((s) => s.roomId !== id));
}
