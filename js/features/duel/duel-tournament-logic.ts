// Vymova — js/features/duel-tournament-logic.ts
// Tournament state/logic, extracted out of duel.ts (a ~2950-line file) so
// that file only carries the solo/spectator/async duel core. Registers a
// match-finish hook into duel.ts (mirrors game.ts's registerCheckAchievements
// pattern) instead of duel.ts reaching into tournament-private state directly.
import { t } from '../i18n.ts';
import { getDuelSelSnapshot, setLobbyTournBtn } from '../../../src/duel-lobby-store.ts';
import { setDuelScreen, setDuelRoom } from '../../../src/duel-room-store.ts';
import { setDuelTournView, getDuelTournViewSnapshot } from '../../../src/duel-async-store.ts';
import type {
  DuelMode,
  Difficulty,
  RoomData,
  PlayerData,
  TournSlotVM,
  TournMatchVM,
  TournRoundVM,
  TournMatchArea,
  TournamentData,
} from './duel-types.ts';
export type { TournMatchVM, TournRoundVM, TournamentData };
import { DB_URL, _fbGet, _fbPatch, _fbSet } from './duel-firebase.ts';
import { _genCode, _fmtCode, _buildDeck } from './duel-deck.ts';
import { _getMyName, _getMyAvatar } from './duel-profile-snap.ts';
import {
  _showLobby,
  _initGame,
  _askCode,
  _registerMatchFinishHook,
  renderDuel,
  DUEL_MODES,
} from './duel.ts';

interface TournMatch {
  p1: number;
  p2: number;
  p1score: number;
  p2score: number;
  winner: number;
  done: boolean;
  roomId: string;
}
interface Tournament {
  code: string;
  size: 4 | 8;
  mode: DuelMode;
  category: string;
  difficulty: Difficulty;
  lang?: string;
  knowLang?: string;
  players: Record<string, { name: string; avatar: string }>; // slot→player
  bracket: TournMatch[][]; // rounds[matches]
  currentRound: number;
  currentMatch: number;
  started: boolean;
  finished: boolean;
  champion: string;
  createdAt: number;
}

let _tournId = '';
let _tournSlot = -1;
let _tournData: Tournament | null = null;
let _tournPoll: ReturnType<typeof setInterval> | null = null;
let _tournFinishHook: ((r: RoomData) => void) | null = null;

function _showTournament() {
  setDuelScreen('tournament');
}

let _tournPlayCtx: { tourn: Tournament; round: number; matchIdx: number } | null = null;
let _tournRejoinRoomId: string | null = null;
export function _getTournamentData(): TournamentData | null {
  return getDuelTournViewSnapshot();
}
export function _onTournStart(): void {
  startTournament();
}
export function _onTournCancel(): void {
  _cancelTournament();
}
export function _onTournPlay(): void {
  if (_tournPlayCtx)
    _startTournMatch(_tournPlayCtx.tourn, _tournPlayCtx.round, _tournPlayCtx.matchIdx);
}
export function _onTournRejoin(): void {
  if (_tournRejoinRoomId) _joinTournMatch(_tournRejoinRoomId);
}

function _buildBracket(size: 4 | 8): TournMatch[][] {
  // Single-elimination bracket
  // Round 1: size/2 matches, then halve each round
  const rounds: TournMatch[][] = [];
  let prev = Array.from({ length: size }, (_, i) => i); // slot indices
  while (prev.length > 1) {
    const matches: TournMatch[] = [];
    for (let i = 0; i < prev.length; i += 2)
      matches.push({
        p1: prev[i],
        p2: prev[i + 1],
        p1score: 0,
        p2score: 0,
        winner: -1,
        done: false,
        roomId: '',
      });
    rounds.push(matches);
    prev = matches.map((_, i) => -(i + 1)); // placeholder winners
  }
  return rounds;
}

function _tournRoundName(round: number, totalRounds: number): string {
  const left = totalRounds - round;
  if (left === 1) return t('duel.round.final');
  if (left === 2) return t('duel.round.semi');
  if (left === 3) return t('duel.round.quarter');
  return `${t('duel.round.n')} ${round + 1}`;
}

export async function createTournament(size: 4 | 8): Promise<void> {
  const tournBtnKey = size === 4 ? 'tournBtn4' : 'tournBtn8';
  setLobbyTournBtn(tournBtnKey, true, null);
  try {
    _tournId = _genCode();
    const sel = getDuelSelSnapshot();
    const tourn: Tournament = {
      code: _tournId,
      size,
      mode: sel.mode,
      category: sel.category,
      difficulty: sel.difficulty,
      lang: sel.lang,
      knowLang: sel.knowLang,
      players: { 0: { name: _getMyName(), avatar: _getMyAvatar() } },
      bracket: _buildBracket(size),
      currentRound: 0,
      currentMatch: 0,
      started: false,
      finished: false,
      champion: '',
      createdAt: Date.now(),
    };
    await _fbSet(`/tournaments/${_tournId}`, tourn);
    _tournSlot = 0;
    _tournData = tourn;
    _showTournament();
    _renderTournWaiting(tourn);
    _startTournWaitPoll();
  } catch (e) {
    setLobbyTournBtn(tournBtnKey, false, '❌ ' + (e as Error).message);
  }
}

export async function joinTournament(): Promise<void> {
  const code = await _askCode(t('duel.tourn.join.title'), t('duel.tourn.join.desc'));
  if (!code) return;
  try {
    const tourn = (await _fbGet(`/tournaments/${code}`)) as Tournament | null;
    if (!tourn) throw new Error(t('duel.tourn.err.notFound'));
    if (tourn.started) throw new Error(t('duel.tourn.err.started'));
    if (tourn.finished) throw new Error(t('duel.tourn.err.finished'));
    const slots = Object.keys(tourn.players).map(Number);
    if (slots.length >= tourn.size) throw new Error(t('duel.tourn.err.noSlot'));
    // Find first free slot
    const mySlot = Array.from({ length: tourn.size }, (_, i) => i).find((i) => !tourn.players[i]);
    if (mySlot === undefined) throw new Error(t('duel.tourn.err.noSlot'));
    // Re-check the slot is still free right before claiming it, to narrow the race
    // window where two players pick the same slot at nearly the same time.
    const fresh = await _fbGet(`/tournaments/${code}/players/${mySlot}`);
    if (fresh) throw new Error(t('duel.tourn.err.noSlot'));
    await _fbPatch(`/tournaments/${code}/players/${mySlot}`, {
      name: _getMyName(),
      avatar: _getMyAvatar(),
    });
    _tournId = code;
    _tournSlot = mySlot;
    _tournData = tourn;
    _showTournament();
    // Reload updated tourn
    const updated = (await _fbGet(`/tournaments/${code}`)) as Tournament;
    _tournData = updated;
    _renderTournWaiting(updated);
    _startTournWaitPoll();
  } catch (e) {
    alert('❌ ' + (e as Error).message);
  }
}

function _renderTournWaiting(tourn: Tournament): void {
  const mInfo = DUEL_MODES.find((m) => m.id === tourn.mode) || DUEL_MODES[0];
  const slots: TournSlotVM[] = Array.from({ length: tourn.size }, (_, i) => {
    const p = tourn.players[i];
    return p
      ? { filled: true, avatar: p.avatar, name: p.name, label: '' }
      : { filled: false, avatar: '', name: '', label: `${t('duel.tourn.slot')} ${i + 1}` };
  });
  const joined = Object.keys(tourn.players).length;
  setDuelTournView({
    phase: 'waiting',
    code: _fmtCode(_tournId),
    modeLabel: `${mInfo.icon} ${t('duel.mode.' + tourn.mode)} · ${tourn.size} ${t('duel.tourn.players')}`,
    slots,
    joined,
    size: tourn.size,
    showStartBtn: _tournSlot === 0 && joined === tourn.size,
    startBtnLabel: `${t('duel.tourn.start')} (${joined}/${tourn.size})`,
    finished: false,
    champion: '',
    statusLabel: '',
    statusColor: '',
    rounds: [],
    matchArea: { kind: 'none' },
  });
}

function _startTournWaitPoll(): void {
  _tournPoll = setInterval(async () => {
    try {
      const tourn = (await _fbGet(`/tournaments/${_tournId}`)) as Tournament | null;
      if (!tourn) return;
      _tournData = tourn;
      if (!tourn.started) {
        _renderTournWaiting(tourn);
        return;
      }
      clearInterval(_tournPoll!);
      _tournPoll = null;
      _renderTournBracket(tourn);
      _startTournMatchPoll();
    } catch (e) {}
  }, 2000);
}

function _startTournMatchPoll(): void {
  _tournPoll = setInterval(async () => {
    try {
      const tourn = (await _fbGet(`/tournaments/${_tournId}`)) as Tournament | null;
      if (!tourn) return;
      _tournData = tourn;
      _renderTournBracket(tourn);
      if (tourn.finished) {
        clearInterval(_tournPoll!);
        _tournPoll = null;
      }
    } catch (e) {}
  }, 2000);
}

async function startTournament(): Promise<void> {
  if (_tournSlot !== 0 || !_tournData) return;
  await _fbPatch(`/tournaments/${_tournId}`, { started: true });
  _renderTournBracket(_tournData);
}

function _renderTournBracket(tourn: Tournament): void {
  const totalRounds = tourn.bracket.length;
  let statusLabel: string, statusColor: string;
  if (tourn.finished) {
    statusLabel = `🏆 ${t('duel.tourn.champion')} ${tourn.champion}!`;
    statusColor = 'var(--accent2)';
  } else {
    statusLabel = `${_tournRoundName(tourn.currentRound, totalRounds)} · ${t('duel.tourn.match')} ${tourn.currentMatch + 1}`;
    statusColor = 'var(--text3)';
  }
  const rounds: TournRoundVM[] = tourn.bracket.map((round, ri) => ({
    name: _tournRoundName(ri, totalRounds),
    matches: round.map((m, mi) => {
      const p1 = tourn.players[m.p1] ?? { name: '?', avatar: '?' };
      const p2 = tourn.players[m.p2] ?? { name: '?', avatar: '?' };
      return {
        p1: { name: p1.name, avatar: p1.avatar, won: m.winner === m.p1 },
        p2: { name: p2.name, avatar: p2.avatar, won: m.winner === m.p2 },
        done: m.done,
        active: ri === tourn.currentRound && mi === tourn.currentMatch && !m.done,
        scoreText: m.done ? `${m.p1score}:${m.p2score}` : null,
      };
    }),
  }));
  // Match area — show play button if it's my turn
  let matchArea: TournMatchArea;
  _tournPlayCtx = null;
  _tournRejoinRoomId = null;
  if (tourn.finished) {
    matchArea = { kind: 'champion' };
  } else {
    const curMatch = tourn.bracket[tourn.currentRound]?.[tourn.currentMatch];
    if (!curMatch || curMatch.done) {
      matchArea = { kind: 'none' };
    } else {
      const myTurn = curMatch.p1 === _tournSlot || curMatch.p2 === _tournSlot;
      if (myTurn && !curMatch.roomId) {
        matchArea = { kind: 'play' };
        _tournPlayCtx = { tourn, round: tourn.currentRound, matchIdx: tourn.currentMatch };
      } else if (myTurn && curMatch.roomId) {
        matchArea = { kind: 'rejoin' };
        _tournRejoinRoomId = curMatch.roomId;
      } else {
        const opp =
          curMatch.p1 === _tournSlot ? tourn.players[curMatch.p2] : tourn.players[curMatch.p1];
        matchArea = { kind: 'waiting', oppName: opp?.name || '?' };
      }
    }
  }
  setDuelTournView({
    phase: 'bracket',
    code: '',
    modeLabel: '',
    slots: [],
    joined: 0,
    size: tourn.size,
    showStartBtn: false,
    startBtnLabel: '',
    finished: tourn.finished,
    champion: tourn.champion,
    statusLabel,
    statusColor,
    rounds,
    matchArea,
  });
}

async function _startTournMatch(tourn: Tournament, round: number, matchIdx: number): Promise<void> {
  const match = tourn.bracket[round][matchIdx];
  // Create a duel room for this match
  const roomId = _genCode();
  const mySlot: 'p1' | 'p2' = match.p1 === _tournSlot ? 'p1' : 'p2';
  setDuelRoom({ roomId, mySlot });
  const seed = Date.now();
  const room: RoomData = {
    seed,
    mode: tourn.mode,
    category: tourn.category,
    difficulty: tourn.difficulty,
    bestOf: 1,
    maxHints: 3,
    powerupsEnabled: false,
    lang: tourn.lang,
    knowLang: tourn.knowLang,
    createdAt: Date.now(),
    started: false,
    finished: false,
    series: { p1wins: 0, p2wins: 0, round: 1 },
    p1: {
      name: tourn.players[match.p1].name,
      avatar: tourn.players[match.p1].avatar,
      score: 0,
      idx: 0,
      done: false,
      hintsLeft: 3,
      powerups: { double: 0, skip: 0, freeze: 0 },
    },
    p2: null,
  };
  await _fbSet(`/duel_rooms/${roomId}`, room);
  // Save room ID to tournament match
  const matchPath = `/tournaments/${_tournId}/bracket/${round}/${matchIdx}`;
  await _fbPatch(matchPath, { roomId });
  setDuelRoom({
    oppName: tourn.players[match.p1 === _tournSlot ? match.p2 : match.p1].name,
    oppAvatar: tourn.players[match.p1 === _tournSlot ? match.p2 : match.p1].avatar,
    roomLang: tourn.lang || 'ua',
    roomKnowLang: tourn.knowLang || 'en',
    quizDeck: _buildDeck(
      seed,
      tourn.category,
      tourn.difficulty,
      tourn.mode,
      tourn.lang,
      tourn.knowLang,
    ),
  });
  _initGame(tourn.mode, 3, 1, { p1wins: 0, p2wins: 0, round: 1 }, false);
  // After game finishes, save result to tournament
  _tournFinishHook = async (roomData: RoomData) => {
    const me = roomData[mySlot] as PlayerData;
    const opp = roomData[mySlot === 'p1' ? 'p2' : 'p1'] as PlayerData;
    const myScore = me.score,
      oppScore = opp?.score ?? 0;
    const winner =
      myScore > oppScore
        ? match.p1 === _tournSlot
          ? match.p1
          : match.p2
        : match.p1 === _tournSlot
          ? match.p2
          : match.p1;
    await _fbPatch(`/tournaments/${_tournId}/bracket/${round}/${matchIdx}`, {
      p1score: match.p1 === _tournSlot ? myScore : oppScore,
      p2score: match.p1 === _tournSlot ? oppScore : myScore,
      winner,
      done: true,
    });
    // Advance tournament
    await _advanceTournament();
  };
}

async function _joinTournMatch(roomId: string): Promise<void> {
  try {
    const room = (await _fbGet(`/duel_rooms/${roomId}`)) as RoomData | null;
    if (!room) return;
    setDuelRoom({ roomId, mySlot: 'p2' });
    await _fbPatch(`/duel_rooms/${roomId}`, {
      p2: {
        name: _getMyName(),
        avatar: _getMyAvatar(),
        score: 0,
        idx: 0,
        done: false,
        hintsLeft: 3,
        powerups: { double: 0, skip: 0, freeze: 0 },
      },
      started: true,
    });
    setDuelRoom({
      roomLang: room.lang || 'ua',
      roomKnowLang: room.knowLang || 'en',
      quizDeck: _buildDeck(
        room.seed,
        room.category,
        room.difficulty,
        room.mode,
        room.lang,
        room.knowLang,
      ),
      oppName: room.p1.name,
      oppAvatar: room.p1.avatar,
    });
    _initGame(room.mode, 3, 1, { p1wins: 0, p2wins: 0, round: 1 }, false);
  } catch (e) {}
}

// Guard: prevents this client from calling _advanceTournament concurrently with itself.
// Both players' clients may still call this independently, but they compute the same
// deterministic bracket update from the same room data, so duplicate writes are harmless.
let _advanceLock = false;

async function _advanceTournament(): Promise<void> {
  if (_advanceLock) return;
  _advanceLock = true;
  try {
    const tourn = (await _fbGet(`/tournaments/${_tournId}`)) as Tournament;
    const { currentRound, currentMatch, bracket, players } = tourn;
    const round = bracket[currentRound];
    const allDone = round.every((m) => m.done);
    if (!allDone) {
      await _fbPatch(`/tournaments/${_tournId}`, { currentMatch: currentMatch + 1 });
      return;
    }
    const nextRound = bracket[currentRound + 1];
    if (!nextRound) {
      const finalMatch = round[0];
      const champ = players[finalMatch.winner];
      await _fbPatch(`/tournaments/${_tournId}`, {
        finished: true,
        champion: `${champ.avatar} ${champ.name}`,
      });
      return;
    }
    // Fill next round — use direct path so Firebase applies nested update correctly
    const winners = round.map((m) => m.winner);
    const updatedNext = nextRound.map((m, i) => ({
      ...m,
      p1: winners[i * 2] ?? m.p1,
      p2: winners[i * 2 + 1] ?? m.p2,
    }));
    // Use separate PATCH calls: one for metadata, one for the specific bracket round via URL path
    await _fbPatch(`/tournaments/${_tournId}`, { currentRound: currentRound + 1, currentMatch: 0 });
    await _fbSet(`/tournaments/${_tournId}/bracket/${currentRound + 1}`, updatedNext);
  } finally {
    _advanceLock = false;
  }
}

export function _cancelTournament(): void {
  if (_tournPoll) {
    clearInterval(_tournPoll);
    _tournPoll = null;
  }
  if (_tournId && _tournSlot === 0)
    fetch(`${DB_URL}/tournaments/${_tournId}.json`, { method: 'DELETE' }).catch(() => {});
  _tournId = '';
  _tournData = null;
  _tournSlot = -1;
  _showLobby();
  renderDuel();
}

// Clears local tournament state without deleting the remote tournament —
// used by createAsyncChallenge() so a stale _tournFinishHook doesn't
// hijack _showFinish() for an unrelated async duel.
export function _clearTournamentState(): void {
  _tournId = '';
  _tournData = null;
  _tournFinishHook = null;
}

// Registered once at module load — duel.ts's _showFinish() calls this via
// _matchFinishHook without knowing tournament internals exist.
_registerMatchFinishHook((roomData: RoomData): boolean => {
  const hook = _tournFinishHook;
  if (!hook || !_tournId) return false;
  _tournFinishHook = null;
  hook(roomData);
  setTimeout(() => {
    _showTournament();
    const t = _tournData;
    if (t) _renderTournBracket(t);
  }, 800);
  return true;
});
