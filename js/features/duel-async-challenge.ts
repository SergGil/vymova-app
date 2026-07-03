// Vymova — js/features/duel-async-challenge.ts
// 24h async-challenge creation/join, extracted out of duel.ts. Owns its own
// "start playing" timer (_asyncStartTimer) instead of duel.ts's game-poll
// timer — same reasoning as duel-spectator-logic.ts's dedicated
// _specPollTimer: creating/joining a challenge and being mid-game are
// mutually exclusive, so a dedicated timer var here is behavior-preserving.
import { t } from './i18n.ts';
import { notifyStateChange } from '../../src/store.ts';
import { _fbGet, _fbSet, _fbPatch } from './duel-firebase.ts';
import {
  getDuelSelSnapshot,
  getDuelLobbyUISnapshot,
  setLobbyBtn,
  setLobbyMsg,
  setLobbyWaiting,
  setLobbyJoinRowVisible,
} from '../../src/duel-lobby-store.ts';
import { setDuelRoom, getDuelRoomSnapshot } from '../../src/duel-room-store.ts';
import type { DuelMode, Difficulty, BestOf } from './duel.ts';
import { _genCode, _fmtCode, _buildDeck } from './duel-deck.ts';
import { DUEL_MODES, _getMyName, _getMyAvatar, _askCode, _initGame } from './duel.ts';

// Dynamic import: duel-tournament-logic.ts statically imports duel-
// tournament.tsx (the whole tournament bracket UI), which is heavy and
// otherwise unrelated to creating an async challenge. A static import here
// would also make duel.ts's own dynamic import of *this* file (for
// _cancelAsyncStart, used by _cancelRoom()) pull in that entire tree just
// to clear a timer — slow enough in CI to occasionally lose the race
// against Vitest's per-file environment teardown.
async function _clearTournamentState(): Promise<void> {
  (await import('./duel-tournament-logic.ts'))._clearTournamentState();
}

interface AsyncDuel {
  seed: number;
  mode: DuelMode;
  category: string;
  difficulty: Difficulty;
  createdAt: number;
  expiresAt: number;
  powerupsEnabled?: boolean;
  maxHints?: number;
  bestOf?: BestOf;
  lang?: string;
  knowLang?: string;
  challenger: { name: string; avatar: string; score: number; done: boolean };
  opponent?: { name: string; avatar: string; score: number; done: boolean };
  finished: boolean;
}

let _asyncStartTimer: ReturnType<typeof setTimeout> | null = null;

// Called by duel.ts's _cancelRoom() (via dynamic import, mirrors the
// tournament/spectator cleanup pattern) so leaving/cancelling a room also
// stops the pending "start playing" timer.
export function _cancelAsyncStart(): void {
  if (_asyncStartTimer) {
    clearTimeout(_asyncStartTimer);
    _asyncStartTimer = null;
  }
}

export async function createAsyncChallenge(): Promise<void> {
  setLobbyBtn('asyncBtn', true);
  notifyStateChange();
  try {
    // Clear any stale tournament state so _showFinish doesn't route to tournament path
    await _clearTournamentState();
    const code = _genCode();
    const seed = Date.now();
    const sel = getDuelSelSnapshot();
    const challenge: AsyncDuel = {
      seed,
      mode: sel.mode,
      category: sel.category,
      difficulty: sel.difficulty,
      createdAt: Date.now(),
      expiresAt: Date.now() + 86_400_000, // 24 hours
      powerupsEnabled: sel.powerupsEnabled,
      maxHints: sel.maxHints,
      bestOf: sel.bestOf,
      lang: sel.lang,
      knowLang: sel.knowLang,
      challenger: { name: _getMyName(), avatar: _getMyAvatar(), score: 0, done: false },
      finished: false,
    };
    await _fbSet(`/duel_async/${code}`, challenge);
    // Play immediately as challenger
    setDuelRoom({
      roomId: code,
      mySlot: 'p1',
      isAsyncChallenge: true,
      roomCreatedAt: challenge.createdAt,
      roomSeed: seed,
      roomCategory: sel.category,
      roomDifficulty: sel.difficulty,
      roomMaxHints: sel.maxHints,
      roomLang: sel.lang,
      roomKnowLang: sel.knowLang,
      quizDeck: _buildDeck(seed, sel.category, sel.difficulty, sel.mode, sel.lang, sel.knowLang),
    });
    // Show code to share
    setLobbyWaiting({
      visible: true,
      roomCode: _fmtCode(code),
      modeLabel: `📬 ${t('duel.mode.' + sel.mode)} · ${t('duel.async.24h')}`,
    });
    setLobbyJoinRowVisible(false);
    notifyStateChange();
    // Start playing immediately
    _cancelAsyncStart();
    _asyncStartTimer = setTimeout(() => {
      _asyncStartTimer = null;
      setLobbyWaiting({ ...getDuelLobbyUISnapshot().waiting, visible: false });
      notifyStateChange();
      _initGame(sel.mode, sel.maxHints, 1, { p1wins: 0, p2wins: 0, round: 1 }, sel.powerupsEnabled);
    }, 2000);
  } catch (e) {
    setLobbyBtn('asyncBtn', false);
    setLobbyMsg({ visible: true, text: '❌ ' + (e as Error).message, challenge: null });
    notifyStateChange();
  }
}

export async function joinAsyncChallenge(): Promise<void> {
  const code = await _askCode(t('duel.async.reply.title'), t('duel.async.reply.desc'));
  if (!code) return;
  try {
    const challenge = (await _fbGet(`/duel_async/${code}`)) as AsyncDuel | null;
    if (!challenge) throw new Error(t('duel.err.chal.notFound'));
    if (challenge.finished) throw new Error(t('duel.err.chal.finished'));
    if (Date.now() > challenge.expiresAt) throw new Error(t('duel.err.chal.expired'));
    if (challenge.opponent) throw new Error(t('duel.err.chal.taken'));
    setDuelRoom({
      roomId: code,
      mySlot: 'p2',
      isAsyncChallenge: true,
      roomCreatedAt: challenge.createdAt || Date.now(),
      roomSeed: challenge.seed,
      roomCategory: challenge.category,
      roomDifficulty: challenge.difficulty,
      roomMaxHints: challenge.maxHints ?? 3,
      roomLang: challenge.lang || 'ua',
      roomKnowLang: challenge.knowLang || 'en',
      quizDeck: _buildDeck(
        challenge.seed,
        challenge.category,
        challenge.difficulty,
        challenge.mode,
        challenge.lang,
        challenge.knowLang,
      ),
      oppName: challenge.challenger.name,
      oppAvatar: challenge.challenger.avatar,
    });
    notifyStateChange();
    const mInfo = DUEL_MODES.find((m) => m.id === challenge.mode);
    setLobbyMsg({
      visible: true,
      text: '',
      challenge: {
        avatar: challenge.challenger.avatar,
        name: challenge.challenger.name,
        modeIcon: mInfo?.icon ?? '',
        modeLabel: mInfo ? t('duel.mode.' + mInfo.id) : '',
      },
    });
    notifyStateChange();
    // Let the challenger know who accepted, so resume cards can show "vs <opponent>"
    _fbPatch(`/duel_async/${code}`, {
      opponent: { name: _getMyName(), avatar: _getMyAvatar(), score: 0, done: false },
    }).catch(() => {});
    _cancelAsyncStart();
    _asyncStartTimer = setTimeout(() => {
      _asyncStartTimer = null;
      setLobbyMsg({ ...getDuelLobbyUISnapshot().msg, visible: false });
      notifyStateChange();
      _initGame(
        challenge.mode,
        getDuelRoomSnapshot().roomMaxHints,
        challenge.bestOf ?? 1,
        { p1wins: 0, p2wins: 0, round: 1 },
        challenge.powerupsEnabled ?? false,
      );
    }, 1800);
  } catch (e) {
    setLobbyMsg({ visible: true, text: '❌ ' + (e as Error).message, challenge: null });
    notifyStateChange();
  }
}
