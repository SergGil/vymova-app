// Vymova — js/features/duel/duel.ts
// ⚔️ Full-featured Duel: leaderboard + live multiplayer quiz

import { useEffect, type ReactElement } from 'react';
import { W } from '../../../data/words-data/words.js';
import {
  CHARS,
  ROOM_SIZE,
  TEMPO_SEC,
  REACTIONS,
  POWERUPS,
  DUEL_MODES,
  DIFFICULTIES,
} from './duel-types.ts';
import type {
  DuelMode,
  Difficulty,
  BestOf,
  PowerupType,
  PlayerData,
  SeriesData,
  RoomData,
  DuelResultData,
  DuelResultOutcome,
  ResumeSessionVM,
} from './duel-types.ts';
import { _shuf } from '../../core/srs.ts';
import type { WordEntry } from '../../../src/types.js';
import { t } from '../i18n.ts';
import { recordDuelResult } from './duel-rating.ts';
import { _addHistory } from './duel-history-log.ts';
import {
  _loadSessions,
  _saveSession,
  _clearSession,
  type DuelSession,
} from './duel-session-store.ts';
import { _getDuelScreen, _showLobby, _showCountdown, _showResult } from './duel-screen.ts';
import { DB_URL, _fbGet, _fbPatch, _fbSet } from './duel-firebase.ts';
import { _getMyName, _getMyAvatar } from './duel-profile-snap.ts';
import { _letterCounts, _canForm, _shuffleLetters, _checkWriteAnswer } from './duel-word-check.ts';
import { _wordInLang, _dateLocale, _secUnit, _buildDeck, _SCRAMBLE_POOL } from './duel-deck.ts';
import {
  getDuelQuestionSnapshot,
  setDuelQuestionFields,
  setDuelChosenOption,
  setDuelHintNote,
  setDuelWriteInput,
  setDuelShowNextBtn,
} from '../../../src/duel-question-store.ts';
import {
  getDuelLobbyUISnapshot,
  setLobbyMsg,
  setLobbyWaiting,
  setLobbyJoinRowVisible,
  setLobbyBtn,
} from '../../../src/duel-lobby-store.ts';
import {
  getDuelScreenSnapshot,
  setDuelScreen,
  setDuelCountdownNum,
  getDuelCountdownNumSnapshot,
  getDuelRoomSnapshot,
  setDuelRoom,
  getDuelTempoSnapshot,
  setDuelTempo,
} from '../../../src/duel-room-store.ts';
import {
  setDuelChat,
  getDuelChatSnapshot,
  appendDuelChat,
  setDuelResult,
  getDuelResultSnapshot,
  setDuelResumeSessions,
  getDuelResumeSessionsSnapshot,
} from '../../../src/duel-async-store.ts';

// Re-exported so existing `import { X } from './duel.ts'` call sites
// (duel-async-challenge.ts, duel-deck.ts, duel-powerups.tsx, duel-spectator-
// logic.ts, duel-tournament-logic.ts) keep working unchanged — the actual
// declarations now live in duel-types.ts, a leaf module with no imports of
// its own (see that file's header comment for why).
export type {
  DuelMode,
  Difficulty,
  BestOf,
  PowerupType,
  PlayerData,
  SeriesData,
  RoomData,
  DuelResultData,
  ResumeSessionVM,
};
export { CHARS, ROOM_SIZE, TEMPO_SEC, REACTIONS, POWERUPS, DUEL_MODES, DIFFICULTIES };
// Same reasoning: _askCode's declaration now lives in duel-dialogs.ts, but
// duel-async-challenge.ts/duel-spectator-logic.ts/duel-tournament-logic.ts
// keep importing it from here.
export { _askCode } from './duel-dialogs.tsx';
// Same reasoning: _getHistory/_getRating's declarations now live in
// duel-history-log.ts, but duel-history.tsx/duel-leaderboard.tsx keep
// importing them from here.
export { _getHistory, _getRating } from './duel-history-log.ts';
// Same reasoning: _getDuelScreen/_showLobby's declarations now live in
// duel-screen.ts, but duel-overlay.tsx/duel-spectator*.ts(x)/
// duel-tournament*.ts(x) keep importing them from here.
export { _getDuelScreen, _showLobby } from './duel-screen.ts';

// Динамічний імпорт: sidebar.tsx має DOM-side-effects на рівні модуля,
// а sidebar.tsx сам статично імпортує цей файл (renderDuel) — статичний
// імпорт тут створив би цикл і тягнув би sidebar.tsx у кожен тест, що
// імпортує duel.ts.
async function _openPage(page: string): Promise<void> {
  (await import('../sidebar/sidebar.tsx')).openPage(page);
}
async function _closePage(): Promise<void> {
  (await import('../sidebar/sidebar.tsx')).closePage();
}

// Динамічний імпорт (той самий прийом, що й для sidebar.tsx вище): duel-
// tournament-logic.ts статично імпортує багато чого з duel.ts, тож
// статичний імпорт тут у зворотному напрямку відтворив би TDZ-цикл —
// _registerMatchFinishHook() виконався б раніше, ніж _matchFinishHook
// (оголошений нижче в цьому файлі) встигне ініціалізуватись.
async function _cancelTournament(): Promise<void> {
  (await import('./duel-tournament-logic.ts'))._cancelTournament();
}
async function _clearTournamentState(): Promise<void> {
  (await import('./duel-tournament-logic.ts'))._clearTournamentState();
}

// Registration-hook indirection (mirrors _registerMatchFinishHook below):
// duel-async-challenge.ts and duel-spectator-logic.ts are each reachable
// from *two* separate entry points (statically from duel-lobby.tsx/
// duel-spectator.tsx, and would-be statically from here), which makes
// rollup carve each into its own chunk — a static import back here would
// then report as a real duel <-> duel-*-logic chunk cycle. Since both
// already import plenty from duel.ts, they register their own cleanup
// callbacks at module load instead of duel.ts importing them.
let _asyncStartCancelHook: (() => void) | null = null;
export function _registerAsyncStartCancelHook(fn: (() => void) | null): void {
  _asyncStartCancelHook = fn;
}
let _specCancelHook: ((roomId: string) => void) | null = null;
export function _registerSpecCancelHook(fn: ((roomId: string) => void) | null): void {
  _specCancelHook = fn;
}
let _specLeaveHook: (() => void) | null = null;
export function _registerSpecLeaveHook(fn: (() => void) | null): void {
  _specLeaveHook = fn;
}

// ── Constants ─────────────────────────────────────────────────
// CHARS/ROOM_SIZE/TEMPO_SEC/REACTIONS/POWERUPS/DUEL_MODES/DIFFICULTIES now
// live in duel-types.ts (re-exported above) — see that file's header
// comment for why (circular-chunk fix). NUM_OPTS stays local: it's only
// used by _renderChoiceQ() below and nothing outside this file reads it.
const NUM_OPTS = 4;

// How long oppDisconnected must stay true before the "waiting" screen
// offers a forfeit-win button — on top of the 8s staleness threshold that
// sets oppDisconnected itself, so ~20s of real silence total before a live
// player can end the match unilaterally. Long enough that a brief
// backgrounded-tab/network blip won't falsely offer it.
const FORFEIT_DELAY_MS = 12_000;

// ── Room state ────────────────────────────────────────────────
let _pollTimer: ReturnType<typeof setInterval> | null = null;
let _resultPollTimer: ReturnType<typeof setInterval> | null = null;
let _tempoTimer: ReturnType<typeof setInterval> | null = null;
let _advanceTimer: ReturnType<typeof setTimeout> | null = null;
let _tempoLeft = TEMPO_SEC;
// Freeze timer
let _freezeTimer: ReturnType<typeof setTimeout> | null = null;

// Stops every background Firebase-polling timer this module owns. The
// in-duel close button already did this (see onCloseClick below) but
// browser back/forward navigation and other sidebar-page switches go
// through sidebar.tsx's generic closePage() instead, which never reached
// this module — so leaving a duel via back-navigation left `_pollTimer`
// (1.5s interval) hitting Firebase forever in the background until a full
// page reload. Exported so closePage() can call it whenever the page being
// left is 'duel', without needing to know these variables exist.
export function stopDuelPolling(): void {
  if (_pollTimer) {
    clearInterval(_pollTimer);
    _pollTimer = null;
  }
  if (_resultPollTimer) {
    clearInterval(_resultPollTimer);
    _resultPollTimer = null;
  }
  if (_tempoTimer) {
    clearInterval(_tempoTimer);
    _tempoTimer = null;
  }
  if (_advanceTimer) {
    clearTimeout(_advanceTimer);
    _advanceTimer = null;
  }
  if (_freezeTimer) {
    clearTimeout(_freezeTimer);
    _freezeTimer = null;
  }
}
// Feedback / speed indicator under the question (item 32, Фаза 5)
export function _getFeedbackData(): { html: string; speed: string } {
  const q = getDuelQuestionSnapshot();
  return { html: q.feedbackHtml, speed: q.speedText };
}
// Room/deck params kept for session persistence & resume (esp. async duels,
// whose /duel_rooms/ doc may only contain partial data pushed by _pushScore)

export function _getChatHistory(): { text: string; isMe: boolean }[] {
  return getDuelChatSnapshot();
}

// Append one extra word to the deck when Skip is used, so skipping doesn't shorten the round
function _extendDeckOnSkip(): void {
  const room = getDuelRoomSnapshot();
  const scramble = room.mode === 'anagram' || room.mode === 'letters';
  const pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
  const used = new Set(room.quizDeck.map((w) => w[0].toLowerCase()));
  const candidates = pool.filter((w) => !used.has(w[0].toLowerCase()));
  const src = candidates.length ? candidates : pool;
  setDuelRoom({ quizDeck: [...room.quizDeck, src[Math.floor(Math.random() * src.length)]] });
}

// Знімок даних для duel-game-header.tsx (item 32, Фаза 5): React читає
// поточний стан гри, polling/state-machine логіка лишається тут.
interface GameHeaderData {
  myAvatar: string;
  myScore: number;
  myIdx: number;
  myTotal: number;
  myFlags: (boolean | 'skip' | 'double')[];
  oppAvatar: string;
  oppName: string;
  oppScore: number;
  oppIdx: number;
  oppFlags: (boolean | 'skip' | 'double')[];
  oppTotal: number;
  mode: DuelMode;
  progressText: string;
  bestOf: BestOf;
  seriesMe: number;
  seriesOpp: number;
  roomCode: string | null;
}
export function _getGameHeaderData(): GameHeaderData {
  const room = getDuelRoomSnapshot();
  return {
    myAvatar: _getMyAvatar(),
    myScore: room.myScore,
    myIdx: room.quizIdx,
    myTotal: room.quizDeck.length,
    myFlags: room.myFlags,
    oppAvatar: room.oppAvatar || '🧑',
    oppName: room.oppName || t('duel.opp'),
    oppScore: room.oppScore,
    oppIdx: room.oppIdx,
    oppFlags: room.oppFlags,
    oppTotal: ROOM_SIZE,
    mode: room.mode,
    progressText: `${room.quizIdx + 1} / ${room.quizDeck.length}`,
    bestOf: room.bestOf,
    seriesMe: room.mySlot === 'p1' ? room.series.p1wins : room.series.p2wins,
    seriesOpp: room.mySlot === 'p1' ? room.series.p2wins : room.series.p1wins,
    roomCode: room.roomId && room.mySlot === 'p1' ? room.roomId : null,
  };
}

// ── UI refs ───────────────────────────────────────────────────
function _showGame(clearChat = true) {
  setDuelScreen('game');
  if (clearChat) {
    setDuelChat([]);
    _lastReactionTs = 0;
  }
}

// Lobby pickers, _showInfoTooltip, countdown/tempo/lobby-UI getters,
// _getMyName/_getMyAvatar, and createRoom/joinRoom now live in
// duel-lobby-logic.ts (that file imports _startWaitPoll/_initGame below
// directly; the reverse dependency for rematch goes through
// _registerCreateRoomHook further down).
export function _startWaitPoll(): void {
  _pollTimer = setInterval(async () => {
    try {
      const room = (await _fbGet(`/duel_rooms/${getDuelRoomSnapshot().roomId}`)) as RoomData | null;
      if (!room) return;
      if (room.started && room.p2) {
        clearInterval(_pollTimer!);
        _pollTimer = null;
        setDuelRoom({ oppName: room.p2.name, oppAvatar: room.p2.avatar });
        _initGame(room.mode, room.maxHints, room.bestOf, room.series, room.powerupsEnabled);
      }
    } catch (e) {}
  }, 2000);
}

function _runCountdown(cb: () => void): void {
  _showCountdown();
  setDuelCountdownNum(3);
  const _timer = setInterval(() => {
    setDuelCountdownNum(getDuelCountdownNumSnapshot() - 1);
    if (getDuelCountdownNumSnapshot() < 0) {
      clearInterval(_timer);
      cb();
    }
  }, 1000);
}

export function _initGame(
  mode: DuelMode,
  maxHints: number,
  bestOf: BestOf,
  series: SeriesData,
  powerupsEnabled = false,
): void {
  if (_advanceTimer) {
    clearTimeout(_advanceTimer);
    _advanceTimer = null;
  }
  setDuelRoom({
    mode,
    bestOf,
    series: { ...series },
    quizIdx: 0,
    myScore: 0,
    myCorrect: 0,
    myWrong: 0,
    myFlags: [],
    answered: false,
    finished: false,
    myDone: false,
    hintsLeft: maxHints === 0 ? 999 : maxHints,
    powerupsEnabled,
    myPowerups: powerupsEnabled
      ? { double: 1, skip: 1, freeze: 1 }
      : { double: 0, skip: 0, freeze: 0 },
    doubleActive: false,
  });
  setDuelChat([]);
  _runCountdown(() => _startGameUI());
}

function _setupGameUI(): void {
  _stopResultPoll();
  if (_pollTimer) {
    clearInterval(_pollTimer);
    _pollTimer = null;
  }
  if (_tempoTimer) {
    clearInterval(_tempoTimer);
    _tempoTimer = null;
  }
  setDuelTempo({ ...getDuelTempoSnapshot(), visible: getDuelRoomSnapshot().mode === 'tempo' });
}

function _startGameUI(): void {
  setDuelRoom({ oppScore: 0, oppIdx: 0, oppFlags: [] });
  _setupGameUI();
  _showGame();
  _renderQuestion();
  _startOpponentPoll();
}

// Знімок даних для duel-powerups.tsx (item 32, Фаза 5).
interface PowerupsData {
  enabled: boolean;
  mode: DuelMode;
  myPowerups: Record<PowerupType, number>;
  answered: boolean;
}
export function _getPowerupsData(): PowerupsData {
  const room = getDuelRoomSnapshot();
  return {
    enabled: room.powerupsEnabled,
    mode: room.mode,
    myPowerups: { ...room.myPowerups },
    answered: room.answered,
  };
}

// Клік по паверапу з duel-powerups.tsx — той самий guard, що раніше був
// у addEventListener (запобігає freeze поза tempo-режимом).
export function _onPowerupClick(type: PowerupType): void {
  if (type === 'freeze' && getDuelRoomSnapshot().mode !== 'tempo') {
    _showMiniToast(t('duel.pu.freeze.unavail'));
    return;
  }
  _usePowerup(type);
}

async function _usePowerup(type: PowerupType): Promise<void> {
  let room = getDuelRoomSnapshot();
  if (room.myPowerups[type] <= 0 || room.answered) return;
  setDuelRoom({ myPowerups: { ...room.myPowerups, [type]: room.myPowerups[type] - 1 } });
  if (type === 'double') {
    setDuelRoom({ doubleActive: true });
    _showMiniToast(t('duel.toast.double'));
  } else if (type === 'skip') {
    // Skip current question without penalty
    setDuelRoom({ answered: true });
    if (_tempoTimer) {
      clearInterval(_tempoTimer);
      _tempoTimer = null;
    }
    setDuelQuestionFields({
      feedbackHtml: `<span style="color:var(--accent)">${t('duel.toast.skip')}</span>`,
    });
    _extendDeckOnSkip();
    room = getDuelRoomSnapshot();
    setDuelRoom({ myFlags: [...room.myFlags, 'skip'], quizIdx: room.quizIdx + 1 });
    await _pushScore();
    if (_advanceTimer) clearTimeout(_advanceTimer);
    _advanceTimer = setTimeout(() => {
      _advanceTimer = null;
      const r = getDuelRoomSnapshot();
      if (r.quizIdx < r.quizDeck.length) _renderQuestion();
      else _finishMyGame();
    }, 700);
  } else if (type === 'freeze') {
    // Send freeze signal to opponent via Firebase
    const r = getDuelRoomSnapshot();
    try {
      await _fbPatch(`/duel_rooms/${r.roomId}`, {
        [`${r.mySlot === 'p1' ? 'p2' : 'p1'}_freeze`]: Date.now() + 5000,
      });
    } catch (e) {}
    _showMiniToast(t('duel.toast.freeze'));
  }
  // Persist powerup state
  const r2 = getDuelRoomSnapshot();
  try {
    await _fbPatch(`/duel_rooms/${r2.roomId}/${r2.mySlot}`, { powerups: r2.myPowerups });
  } catch (e) {}
}

function _showMiniToast(msg: string): void {
  const t = document.createElement('div');
  t.style.cssText =
    'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:8px 16px;border-radius:20px;font-size:.82rem;font-weight:600;z-index:99999;pointer-events:none;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

// ── Animated dot progress bar (mine + opponent's) — rendered by
// duel-game-header.tsx off the duel-room-store ─────────────────
function _renderOppProgressBar(idx: number, flags?: (boolean | 'skip' | 'double')[]): void {
  setDuelRoom({ oppIdx: idx, oppFlags: flags || [] });
}

function _startOpponentPoll(): void {
  _pollTimer = setInterval(async () => {
    try {
      const room0 = getDuelRoomSnapshot();
      // Heartbeat: lets the opponent's own poll tick (below) know this tab
      // is still alive. Fire-and-forget — a dropped write just means their
      // staleness check runs one extra tick before flagging us, no need to
      // block this tick on it.
      _fbPatch(`/duel_rooms/${room0.roomId}/${room0.mySlot}`, { lastSeen: Date.now() }).catch(
        () => {},
      );
      const room = (await _fbGet(`/duel_rooms/${room0.roomId}`)) as
        (RoomData & Record<string, unknown>) | null;
      if (!room) return;
      const opp = room0.mySlot === 'p1' ? room.p2 : room.p1;
      if (opp) {
        setDuelRoom({ oppScore: opp.score });
        _renderOppProgressBar(opp.idx, opp.flags);
        if (opp.reaction) _showReactionReceived(opp.reaction, opp.reactionTs);
        // Presence: there's no Firebase SDK / onDisconnect() here (raw REST
        // polling only), so a heartbeat gone stale for several missed ticks
        // (generous vs. this loop's 1.5s cadence, to absorb normal network
        // jitter) is the only signal available that the opponent left.
        const nowDisconnected = opp.lastSeen != null && Date.now() - opp.lastSeen > 8000;
        const wasDisconnected = getDuelRoomSnapshot().oppDisconnected;
        setDuelRoom({
          oppDisconnected: nowDisconnected,
          // Stamp the first tick this flips true, not every tick it stays
          // true — this is what FORFEIT_DELAY_MS (_getQuestionData below)
          // measures from. Cleared the moment a heartbeat comes back, so a
          // reconnect-then-disconnect-again starts the delay over.
          oppDisconnectedSince: nowDisconnected
            ? (wasDisconnected ? getDuelRoomSnapshot().oppDisconnectedSince : Date.now())
            : null,
        });
      }
      // Check if I'm frozen (opponent used freeze on me)
      const myFreezeKey = `${room0.mySlot}_freeze`;
      const freezeUntil = room[myFreezeKey] as number | undefined;
      const roomNow = getDuelRoomSnapshot();
      if (
        freezeUntil &&
        freezeUntil > Date.now() &&
        !roomNow.answered &&
        roomNow.mode === 'tempo'
      ) {
        if (!_freezeTimer) {
          const remaining = Math.ceil((freezeUntil - Date.now()) / 1000);
          setDuelQuestionFields({
            feedbackHtml: `<span style="color:var(--accent)">${t('duel.frozen')} ${remaining}${_secUnit()}!</span>`,
          });
          if (_tempoTimer) {
            clearInterval(_tempoTimer);
            _tempoTimer = null;
          }
          _freezeTimer = setTimeout(() => {
            _freezeTimer = null;
            setDuelQuestionFields({ feedbackHtml: '' });
            const r = getDuelRoomSnapshot();
            _startTempoTimer(r.quizDeck[r.quizIdx]);
          }, freezeUntil - Date.now());
        }
      }
      if (room.finished) {
        clearInterval(_pollTimer!);
        _pollTimer = null;
        _showFinish(room as RoomData);
      } else if (roomNow.myDone && opp?.done) {
        // Both players finished but a race left `finished` unset — settle it here.
        await _fbPatch(`/duel_rooms/${roomNow.roomId}`, { finished: true });
        clearInterval(_pollTimer!);
        _pollTimer = null;
        _showFinish({ ...room, finished: true } as RoomData);
      } else if (
        !roomNow.myDone &&
        roomNow.quizDeck.length > 0 &&
        roomNow.quizIdx >= roomNow.quizDeck.length
      ) {
        // I finished my last question but _finishMyGame()'s write never
        // landed (network blip), so `myDone` is still false — retry it here.
        // Idempotent: same score/idx every time, so a redundant retry once
        // the original attempt actually did land is harmless.
        _finishMyGame();
      }
    } catch (e) {}
  }, 1500);
}

// ── Reactions / chat ──────────────────────────────────────────
let _lastReactionTs = 0;
function _appendChatMsg(text: string, isMe: boolean, record = true): void {
  if (record) {
    appendDuelChat({ text, isMe });
    _saveSession();
  }
}
function _showReactionReceived(text: string, ts?: number): void {
  if (ts !== undefined) {
    if (ts <= _lastReactionTs) return;
    _lastReactionTs = ts;
  }
  _appendChatMsg(text, false);
}

function _stopResultPoll(): void {
  if (_resultPollTimer) {
    clearInterval(_resultPollTimer);
    _resultPollTimer = null;
  }
}
function _startResultPoll(): void {
  _stopResultPoll();
  _resultPollTimer = setInterval(async () => {
    try {
      const room = (await _fbGet(`/duel_rooms/${getDuelRoomSnapshot().roomId}`)) as RoomData | null;
      if (!room) return;
      const opp = getDuelRoomSnapshot().mySlot === 'p1' ? room.p2 : room.p1;
      if (opp?.reaction) _showReactionReceived(opp.reaction, opp.reactionTs);
    } catch (e) {}
  }, 1500);
}

export async function _sendChatMsg(text: string): Promise<void> {
  if (!text.trim()) return;
  const ts = Date.now();
  const room = getDuelRoomSnapshot();
  try {
    await _fbPatch(`/duel_rooms/${room.roomId}/${room.mySlot}`, { reaction: text, reactionTs: ts });
  } catch (e) {}
  _lastReactionTs = ts;
  _appendChatMsg(text, true);
}

// ── Questions ─────────────────────────────────────────────────
function _renderQuestion(): void {
  const room = getDuelRoomSnapshot();
  if (room.quizIdx >= room.quizDeck.length) {
    _finishMyGame();
    return;
  }
  const w = room.quizDeck[room.quizIdx];
  setDuelRoom({ answered: false, answerStartMs: Date.now() });
  setDuelQuestionFields({ feedbackHtml: '', speedText: '' });
  if (_tempoTimer) {
    clearInterval(_tempoTimer);
    _tempoTimer = null;
  }
  setDuelQuestionFields({
    chosenOption: null,
    hintNote: null,
    writeInputValue: '',
    inputBorderColor: '',
    showNextBtn: false,
    waitingFinish: false,
  });
  if (room.mode === 'write') _renderWriteQ(w);
  else if (room.mode === 'anagram') _renderAnagramQ(w);
  else if (room.mode === 'letters') _renderLettersQ(w);
  else _renderChoiceQ(w);
  if (room.mode === 'tempo') _startTempoTimer(w);
}

function _renderChoiceQ(w: WordEntry): void {
  const room = getDuelRoomSnapshot();
  const lang = room.roomLang || 'ua';
  const knowLang = room.roomKnowLang || 'en';
  const isRev = room.mode === 'reverse';
  const q = isRev ? _wordInLang(w, lang) : _wordInLang(w, knowLang);
  const ans = isRev ? _wordInLang(w, knowLang) : _wordInLang(w, lang);
  setDuelQuestionFields({ qPrimary: q, qSecondary: '', qTertiary: '' });
  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS - 1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const distractor = isRev ? _wordInLang(pw, knowLang) : _wordInLang(pw, lang);
    if (distractor) wrongs.push(distractor);
  }
  setDuelQuestionFields({ choiceOptions: _shuf([ans, ...wrongs]), choiceAnswer: ans });
}

function _renderWriteQ(w: WordEntry): void {
  const room = getDuelRoomSnapshot();
  const lang = room.roomLang || 'ua';
  const knowLang = room.roomKnowLang || 'en';
  setDuelQuestionFields({
    qPrimary: _wordInLang(w, lang),
    qSecondary: t('duel.writeHint'),
    qTertiary: '',
    choiceOptions: [],
    choiceAnswer: _wordInLang(w, knowLang),
  });
}

// Anagram always scrambles the English spelling — translations can be multi-word
// phrases or contain diacritics, which would break letter-scrambling/matching.
function _renderAnagramQ(w: WordEntry): void {
  const lang = getDuelRoomSnapshot().roomLang || 'ua';
  setDuelQuestionFields({
    qPrimary: _shuffleLetters(w[0]),
    qSecondary: _wordInLang(w, lang),
    qTertiary: t('duel.anagramHint'),
    choiceOptions: [],
    choiceAnswer: w[0],
  });
}

function _renderLettersQ(w: WordEntry): void {
  setDuelQuestionFields({
    qPrimary: _shuffleLetters(w[0]),
    qSecondary: t('duel.lettersHint'),
    qTertiary: '',
    choiceOptions: [],
    choiceAnswer: w[0],
  });
}

function _startTempoTimer(_w: WordEntry): void {
  _tempoLeft = TEMPO_SEC;
  setDuelTempo({ ...getDuelTempoSnapshot(), num: TEMPO_SEC });
  _tempoTimer = setInterval(() => {
    _tempoLeft--;
    setDuelTempo({ ...getDuelTempoSnapshot(), num: _tempoLeft });
    if (_tempoLeft <= 0) {
      clearInterval(_tempoTimer!);
      _tempoTimer = null;
      const room = getDuelRoomSnapshot();
      if (!room.answered) {
        setDuelQuestionFields({
          feedbackHtml: `<span style="color:var(--danger)">${t('duel.timeout')}</span>`,
        });
        setDuelRoom({
          answered: true,
          myWrong: room.myWrong + 1,
          myFlags: [...room.myFlags, false],
          quizIdx: room.quizIdx + 1,
        });
        _pushScore();
        if (_advanceTimer) clearTimeout(_advanceTimer);
        _advanceTimer = setTimeout(() => {
          _advanceTimer = null;
          _renderQuestion();
        }, 1000);
      }
    }
  }, 1000);
}

// ── Answers ───────────────────────────────────────────────────
export async function _onOptionClick(chosen: string): Promise<void> {
  let room = getDuelRoomSnapshot();
  if (room.answered) return;
  setDuelRoom({ answered: true });
  setDuelChosenOption(chosen);
  if (_tempoTimer) {
    clearInterval(_tempoTimer);
    _tempoTimer = null;
  }
  const ms = Date.now() - room.answerStartMs;
  const correct = getDuelQuestionSnapshot().choiceAnswer;
  const ok = chosen === correct;
  let feedbackHtml: string;
  if (ok) {
    const wasDouble = room.doubleActive;
    const pts = wasDouble ? 2 : 1;
    setDuelRoom({
      myScore: room.myScore + pts,
      myCorrect: room.myCorrect + 1,
      myFlags: [...room.myFlags, wasDouble ? 'double' : true],
      doubleActive: wasDouble ? false : room.doubleActive,
    });
    if (wasDouble) {
      feedbackHtml = `<span style="color:var(--accent2)">${t('duel.doublePts')}</span>`;
    } else {
      feedbackHtml = `<span style="color:var(--success)">${t('duel.correct')}</span>`;
    }
  } else {
    setDuelRoom({ myWrong: room.myWrong + 1, myFlags: [...room.myFlags, false] });
    feedbackHtml = `<span style="color:var(--danger)">✗ ${correct}</span>`;
  }
  setDuelQuestionFields({
    feedbackHtml,
    speedText: ok ? `⚡ ${(ms / 1000).toFixed(1)}${_secUnit()}` : '',
  });
  room = getDuelRoomSnapshot();
  setDuelRoom({ quizIdx: room.quizIdx + 1 });
  await _pushScore();
  if (_advanceTimer) clearTimeout(_advanceTimer);
  _advanceTimer = setTimeout(
    () => {
      _advanceTimer = null;
      const r = getDuelRoomSnapshot();
      if (r.quizIdx < r.quizDeck.length) _renderQuestion();
      else _finishMyGame();
    },
    ok ? 600 : 1200,
  );
}

export function _onInputChange(val: string): void {
  setDuelWriteInput(val);
}

export function _submitWrite(): void {
  let room = getDuelRoomSnapshot();
  if (room.answered) return;
  const w = room.quizDeck[room.quizIdx];
  const knowLang = room.roomKnowLang || 'en';
  const val = getDuelQuestionSnapshot().writeInputValue.trim().toLowerCase();
  const isEnglishOnly = room.mode === 'letters' || room.mode === 'anagram';
  const ans = (isEnglishOnly ? w[0] : _wordInLang(w, knowLang)).toLowerCase();
  const ok = _checkWriteAnswer(room.mode, val, ans);
  const ms = Date.now() - room.answerStartMs;
  setDuelRoom({ answered: true });
  setDuelQuestionFields({ inputBorderColor: ok ? 'var(--success)' : 'var(--danger)' });
  let feedbackHtml: string;
  if (ok) {
    const wasDouble = room.doubleActive;
    setDuelRoom({
      myScore: room.myScore + (wasDouble ? 2 : 1),
      myCorrect: room.myCorrect + 1,
      myFlags: [...room.myFlags, wasDouble ? 'double' : true],
      doubleActive: wasDouble ? false : room.doubleActive,
    });
    if (wasDouble) {
      feedbackHtml = `<span style="color:var(--accent2)">${t('duel.doublePts')}</span>`;
    } else feedbackHtml = `<span style="color:var(--success)">${t('duel.correct')}</span>`;
  } else {
    setDuelRoom({ myWrong: room.myWrong + 1, myFlags: [...room.myFlags, false] });
    const correctDisplay = isEnglishOnly ? w[0] : _wordInLang(w, knowLang);
    feedbackHtml = `<span style="color:var(--danger)">✗ ${correctDisplay}</span>`;
  }
  setDuelQuestionFields({
    feedbackHtml,
    speedText: ok ? `⚡ ${(ms / 1000).toFixed(1)}${_secUnit()}` : '',
    showNextBtn: true,
  });
  room = getDuelRoomSnapshot();
  setDuelRoom({ quizIdx: room.quizIdx + 1 });
  _pushScore();
}

export function _onNextClick(): void {
  setDuelShowNextBtn(false);
  const room = getDuelRoomSnapshot();
  if (room.quizIdx < room.quizDeck.length) _renderQuestion();
  else _finishMyGame();
}

export function _useHint(): void {
  const room = getDuelRoomSnapshot();
  if (room.hintsLeft <= 0 || room.answered) return; // only before answering
  const w = room.quizDeck[room.quizIdx];
  if (!w) return;
  if (room.hintsLeft < 999) setDuelRoom({ hintsLeft: room.hintsLeft - 1 });
  const h = getDuelQuestionSnapshot().choiceAnswer || w[0];
  setDuelHintNote(`💡 ${h.slice(0, Math.ceil(h.length / 3))}...`);
}

// Знімок даних для duel-question.tsx (item 32, Фаза 5).
interface QuestionOptionVM {
  text: string;
  num: number;
  cls: string;
}
interface QuestionData {
  mode: DuelMode;
  quizIdx: number;
  waiting: boolean;
  oppDisconnected: boolean;
  canForfeit: boolean;
  myCorrect: number;
  myWrong: number;
  qPrimary: string;
  qSecondary: string;
  qTertiary: string;
  hintNote: string | null;
  options: QuestionOptionVM[];
  answered: boolean;
  showOptions: boolean;
  showInputRow: boolean;
  inputBorderColor: string;
  showHintBtn: boolean;
  hintBtnText: string;
  hintBtnDisabled: boolean;
  showNextBtn: boolean;
}
export function _getQuestionData(): QuestionData {
  const room = getDuelRoomSnapshot();
  const isInput = room.mode === 'write' || room.mode === 'anagram' || room.mode === 'letters';
  const q = getDuelQuestionSnapshot();
  return {
    mode: room.mode,
    quizIdx: room.quizIdx,
    waiting: q.waitingFinish,
    oppDisconnected: room.oppDisconnected,
    // Only offered once actually waiting on the opponent (mirrors the
    // disconnect message itself, duel-question.tsx) — someone still mid-
    // question of their own isn't blocked on the opponent yet, so there's
    // nothing to forfeit out of.
    canForfeit:
      q.waitingFinish &&
      room.oppDisconnectedSince != null &&
      Date.now() - room.oppDisconnectedSince > FORFEIT_DELAY_MS,
    myCorrect: room.myCorrect,
    myWrong: room.myWrong,
    qPrimary: q.qPrimary,
    qSecondary: q.qSecondary,
    qTertiary: q.qTertiary,
    hintNote: q.hintNote,
    options: q.choiceOptions.map((opt, i) => {
      let cls =
        "quiz-option relative w-full cursor-pointer rounded-[11px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-left font-['DM_Sans',sans-serif] text-[.88rem] leading-[1.3] text-[var(--text)] transition-[border-color,background,transform] duration-150 not-disabled:hover:border-[var(--quiz-option-hover-border)] not-disabled:hover:bg-[var(--quiz-option-hover-bg)] disabled:cursor-default";
      if (room.answered) {
        if (opt === q.chosenOption)
          cls += q.chosenOption === q.choiceAnswer ? ' correct !border-[var(--quiz-correct-border)] !bg-[var(--quiz-correct-bg)] !text-[var(--quiz-correct-color)] font-semibold' : ' wrong !border-[var(--quiz-wrong-border)] !bg-[var(--quiz-wrong-bg)] !text-[var(--quiz-wrong-color)]';
        else if (q.chosenOption !== q.choiceAnswer && opt === q.choiceAnswer) cls += ' reveal !border-[var(--quiz-reveal-border)] !bg-[var(--quiz-reveal-bg)] !text-[var(--quiz-reveal-color)] opacity-70';
      }
      return { text: opt, num: i + 1, cls };
    }),
    answered: room.answered,
    showOptions: !isInput && !q.waitingFinish,
    showInputRow: isInput && !q.waitingFinish,
    inputBorderColor: q.inputBorderColor,
    showHintBtn: room.mode === 'write',
    hintBtnText: room.hintsLeft >= 999 ? t('duel.hint.btn') : `💡 ×${room.hintsLeft}`,
    hintBtnDisabled: room.hintsLeft <= 0,
    showNextBtn: q.showNextBtn,
  };
}

async function _pushScore(): Promise<void> {
  _saveSession();
  const room = getDuelRoomSnapshot();
  try {
    await _fbPatch(`/duel_rooms/${room.roomId}/${room.mySlot}`, {
      score: room.myScore,
      idx: room.quizIdx,
      flags: room.myFlags,
    });
  } catch (e) {
    // Not fatal here — the next question's _pushScore() resends the (by then
    // higher) score/idx anyway. _startOpponentPoll() below covers the one
    // case this doesn't self-heal: this being the *last* question.
    console.warn('[duel]', e);
  }
}

async function _finishMyGame(): Promise<void> {
  const room = getDuelRoomSnapshot();
  try {
    await _fbPatch(`/duel_rooms/${room.roomId}/${room.mySlot}`, {
      score: room.myScore,
      idx: room.quizDeck.length,
      flags: room.myFlags,
      done: true,
    });
  } catch (e) {
    // Used to fail silently here and leave both players stuck forever: this
    // client never sets myDone, so it never re-shows "waiting", and the
    // opponent's poll never sees `done`. _startOpponentPoll()'s "not done
    // and out of questions" branch retries this same call on its next tick,
    // and the write is idempotent (same score/idx every retry), so this just
    // needs to not look like a dead screen while that happens.
    console.warn('[duel]', e);
    _showMiniToast(t('duel.err.sync'));
    setDuelQuestionFields({ waitingFinish: true, feedbackHtml: t('duel.waiting') });
    return;
  }
  setDuelRoom({ myDone: true });
  try {
    const roomData = (await _fbGet(`/duel_rooms/${room.roomId}`)) as RoomData;
    const opp = room.mySlot === 'p1' ? roomData.p2 : roomData.p1;
    if (opp?.done) {
      await _fbPatch(`/duel_rooms/${room.roomId}`, { finished: true });
      clearInterval(_pollTimer!);
      _pollTimer = null;
      _showFinish({
        ...roomData,
        [room.mySlot]: { ...roomData[room.mySlot], score: room.myScore, done: true },
      } as RoomData);
    } else {
      setDuelQuestionFields({ waitingFinish: true, feedbackHtml: t('duel.waiting') });
    }
  } catch (e) {
    // myDone is already true at this point, so _startOpponentPoll()'s
    // existing "both done but finished unset" branch settles this — just
    // don't leave the screen looking frozen while it does.
    console.warn('[duel]', e);
    _showMiniToast(t('duel.err.sync'));
    setDuelQuestionFields({ waitingFinish: true, feedbackHtml: t('duel.waiting') });
  }
}

// Знімок даних для duel-result.tsx (Фаза 9/2).
export function _getResultData(): DuelResultData {
  return getDuelResultSnapshot();
}

// Registration-hook indirection so this core module doesn't statically
// depend on tournament-only state: duel-tournament-logic.ts registers its
// own hook at module load (mirrors game.ts's registerCheckAchievements
// pattern) and returns true when it handled routing back to the bracket.
let _matchFinishHook: ((roomData: RoomData) => boolean) | null = null;
export function _registerMatchFinishHook(fn: ((roomData: RoomData) => boolean) | null): void {
  _matchFinishHook = fn;
}

// Same indirection for the reverse edge into duel-lobby-logic.ts: that file
// already imports _startWaitPoll/_initGame from here, so a static import
// back for createRoom() (needed only by the rematch flow below) would close
// a duel <-> duel-lobby-logic chunk cycle. duel-lobby-logic.ts registers
// itself via this hook at module load instead.
let _createRoomHook: ((carriedSeries?: SeriesData) => Promise<void>) | null = null;
export function _registerCreateRoomHook(
  fn: ((carriedSeries?: SeriesData) => Promise<void>) | null,
): void {
  _createRoomHook = fn;
}

// Records history + rating for a match that finished while this client
// wasn't around to see it end (see _tryResumeSession's `room.finished`
// branch below) — deliberately NOT the full _showFinish flow, which also
// drives interactive UI (result screen, best-of-3 round continuation) that
// assumes the user is actively sitting on the duel screen right now, not
// just reopening the app hours later to find an async challenge resolved.
function _recordUnseenFinish(
  roomData: RoomData,
  mySlot: 'p1' | 'p2',
  fallbackOppName: string,
): void {
  const me = roomData[mySlot] as PlayerData;
  const opp = (mySlot === 'p1' ? roomData.p2 : roomData.p1) as PlayerData;
  const won = me.score > (opp?.score ?? 0),
    tie = me.score === (opp?.score ?? 0);
  _addHistory({
    date: `${new Date().toLocaleDateString(_dateLocale())} ${new Date().toLocaleTimeString(_dateLocale(), { hour: '2-digit', minute: '2-digit' })}`,
    mode: roomData.mode,
    myScore: me.score,
    oppScore: opp?.score ?? 0,
    oppName: opp?.name || fallbackOppName,
    won,
    category: roomData.category,
    lang: roomData.lang || 'ua',
    knowLang: roomData.knowLang || 'en',
  });
  recordDuelResult(won, tie);
}

// forceWin: set by _claimForfeitWin() when the opponent disconnected and
// the live player chose to end the match — a forfeit is a win regardless
// of the score at the moment of disconnect (that's the point of a
// forfeit), not just "whoever happened to be ahead". Also skips best-of-3
// continuation below: there's no one left to play a next round against.
function _showFinish(roomData: RoomData, forceWin = false): void {
  const room = getDuelRoomSnapshot();
  if (room.finished) return;
  setDuelRoom({ finished: true });
  if (_matchFinishHook?.(roomData)) return;
  const me = roomData[room.mySlot] as PlayerData;
  const opp = (room.mySlot === 'p1' ? roomData.p2 : roomData.p1) as PlayerData;
  const won = forceWin || me.score > (opp?.score ?? 0),
    tie = !forceWin && me.score === (opp?.score ?? 0);
  const mInfo = DUEL_MODES.find((m) => m.id === roomData.mode) || DUEL_MODES[0];

  // Save history + rating
  _addHistory({
    date: `${new Date().toLocaleDateString(_dateLocale())} ${new Date().toLocaleTimeString(_dateLocale(), { hour: '2-digit', minute: '2-digit' })}`,
    mode: roomData.mode,
    myScore: me.score,
    oppScore: opp?.score ?? 0,
    oppName: opp?.name || room.oppName || t('duel.opp'),
    won,
    category: roomData.category,
    lang: room.roomLang,
    knowLang: room.roomKnowLang,
  });
  recordDuelResult(won, tie);
  _clearSession();

  // Best of 3 logic — skipped entirely on a forfeit (forceWin): the
  // opponent is gone, so "show next round" would just strand the live
  // player on a screen with no one to play against.
  if (roomData.bestOf === 3 && !forceWin) {
    const newSeries = { ...roomData.series };
    if (won) {
      if (room.mySlot === 'p1') newSeries.p1wins++;
      else newSeries.p2wins++;
    } else if (!tie) {
      if (room.mySlot === 'p1') newSeries.p2wins++;
      else newSeries.p1wins++;
    }
    newSeries.round++;
    const myW = room.mySlot === 'p1' ? newSeries.p1wins : newSeries.p2wins;
    const oppW = room.mySlot === 'p1' ? newSeries.p2wins : newSeries.p1wins;
    setDuelRoom({ series: newSeries });
    if (myW < 2 && oppW < 2 && newSeries.round <= 3) {
      // Series not decided — show next round
      const outcome: DuelResultOutcome = won ? 'win' : tie ? 'tie' : 'loss';
      setDuelResult({
        kind: 'round',
        outcome,
        round: newSeries.round - 1,
        myWins: myW,
        oppWins: oppW,
        myName: _getMyName(),
        oppName: opp?.name || t('duel.opp'),
      });
      _showResult();
      return;
    }
  }

  const catLabel = roomData.category ? ` · ${roomData.category.split(' ')[0]}` : '';
  const outcome: DuelResultOutcome = won ? 'win' : tie ? 'tie' : 'loss';
  setDuelResult({
    kind: 'final',
    outcome,
    modeIcon: mInfo.icon,
    modeLabel: t('duel.mode.' + mInfo.id),
    catLabel,
    myAvatar: me.avatar || '🧑',
    myScore: me.score,
    oppAvatar: opp?.avatar || '🧑',
    oppScore: opp?.score ?? 0,
    oppName: opp?.name || t('duel.opp'),
    roomSize: ROOM_SIZE,
    historyText: `${mInfo.icon} ${t('duel.mode.' + mInfo.id)}${catLabel} · ${new Date().toLocaleDateString(_dateLocale())}`,
  });
  _showResult();
  _startResultPoll();
}

// Triggered by the "Завершити перемогою" button (duel-question.tsx,
// gated on _getQuestionData()'s canForfeit) once the opponent has been
// disconnected long enough. Marks the room finished so the opponent's own
// poll (if they ever reconnect) also sees the match as over rather than
// resuming into a room the other side already left, then shows the result
// screen with a forced win — see _showFinish()'s forceWin param.
export async function _claimForfeitWin(): Promise<void> {
  const room = getDuelRoomSnapshot();
  try {
    await _fbPatch(`/duel_rooms/${room.roomId}`, { finished: true });
    const roomData = (await _fbGet(`/duel_rooms/${room.roomId}`)) as RoomData;
    if (_pollTimer) {
      clearInterval(_pollTimer);
      _pollTimer = null;
    }
    _showFinish(roomData, true);
  } catch (e) {
    _showMiniToast(t('duel.err.sync'));
  }
}

// ── Result screen actions (duel-result.tsx, Фаза 9/2) ──────────
export function _onResultRematch(): void {
  _doRematch();
}
export function _onResultNewDuel(): void {
  _cancelRoom();
  _showLobby();
  renderDuel();
}
export function _onResultReaction(emoji: string): void {
  _sendChatMsg(emoji);
}

export function _cancelRoom(): void {
  _clearSession();
  _stopResultPoll();
  if (_pollTimer) {
    clearInterval(_pollTimer);
    _pollTimer = null;
  }
  if (_tempoTimer) {
    clearInterval(_tempoTimer);
    _tempoTimer = null;
  }
  if (_freezeTimer) {
    clearTimeout(_freezeTimer);
    _freezeTimer = null;
  }
  _asyncStartCancelHook?.();
  const room = getDuelRoomSnapshot();
  if (room.roomId) {
    if (room.isAsyncChallenge) {
      fetch(`${DB_URL}/duel_async/${room.roomId}.json`, { method: 'DELETE' }).catch(() => {});
    } else if (room.mySlot === 'p1') {
      fetch(`${DB_URL}/duel_rooms/${room.roomId}.json`, { method: 'DELETE' }).catch(() => {});
    }
    // Remove spectator entry if spectator
    _specCancelHook?.(room.roomId);
    setDuelRoom({ roomId: '' });
  }
  setDuelRoom({ isAsyncChallenge: false });
  setLobbyWaiting({ ...getDuelLobbyUISnapshot().waiting, visible: false });
  setLobbyJoinRowVisible(true);
  setLobbyBtn('createBtn', false);
  setLobbyBtn('asyncBtn', false);
  setLobbyMsg({ visible: false, text: getDuelLobbyUISnapshot().msg.text, challenge: null });
}

function _doRematch(): void {
  // "Next round" (kind 'round', mid-series) and "rematch" (kind 'final', a
  // fresh best-of-N) both land here via the same button/handler — only the
  // former should carry the series' win tally into the new room; a rematch
  // after a *decided* series starts a genuinely new one at 0-0/round 1.
  const carriedSeries =
    getDuelResultSnapshot()?.kind === 'round' ? getDuelRoomSnapshot().series : undefined;
  if (getDuelRoomSnapshot().mySlot === 'p1') {
    // p1 creates a new room — show waiting screen
    _showLobby();
    renderDuel();
    _cancelRoom();
    _createRoomHook?.(carriedSeries);
  } else {
    // p2 gets new code to join
    _showLobby();
    renderDuel();
    setLobbyMsg({ visible: true, text: t('duel.rematch.ask'), challenge: null });
  }
}

// ── Session resume ────────────────────────────────────────────
// Знімок даних для duel-resume.tsx (item 33, Фаза 5).
let _resumeValid: { sess: DuelSession; room: RoomData }[] = [];
export function _getResumeSessions(): ResumeSessionVM[] {
  return getDuelResumeSessionsSnapshot();
}

export async function _tryResumeSession(): Promise<void> {
  const sessions = _loadSessions();
  if (!sessions.length) {
    _resumeValid = [];
    setDuelResumeSessions([]);
    return;
  }

  const valid: { sess: DuelSession; room: RoomData }[] = [];
  for (const sess of sessions) {
    try {
      const room = (await _fbGet(`/duel_rooms/${sess.roomId}`)) as RoomData | null;
      if (!room) {
        _clearSession(sess.roomId);
        continue;
      }
      if (room.finished) {
        // The other side finished after we last checked (typical for an
        // async challenge answered while our tab was closed) — used to
        // just delete the local session here, so our own history/rating
        // never recorded a match that genuinely concluded. Same bug class
        // as the tournament "only the room creator's client finishes the
        // match" bug already fixed in duel-tournament-logic.ts.
        _recordUnseenFinish(room, sess.slot, sess.oppName || t('duel.opp'));
        _clearSession(sess.roomId);
        continue;
      }
      const expiresAt = (sess.createdAt || room.createdAt || Date.now()) + 86_400_000;
      if (Date.now() >= expiresAt) {
        _clearSession(sess.roomId);
        continue;
      }
      valid.push({ sess, room });
    } catch (e) {
      _clearSession(sess.roomId);
    }
  }
  if (!valid.length) {
    _resumeValid = [];
    setDuelResumeSessions([]);
    return;
  }

  // Show the duel with the least time left to finish first.
  valid.sort((a, b) => {
    const expA = (a.sess.createdAt || a.room.createdAt || Date.now()) + 86_400_000;
    const expB = (b.sess.createdAt || b.room.createdAt || Date.now()) + 86_400_000;
    return expA - expB;
  });

  _resumeValid = valid;
  setDuelResumeSessions(
    valid.map(({ sess, room }) => {
      const opp = sess.slot === 'p1' ? room.p2 : room.p1;
      const oppName = opp?.name || sess.oppName;
      const oppAvatar = opp?.avatar || sess.oppAvatar || '';
      const mInfo = DUEL_MODES.find((m) => m.id === sess.mode) || DUEL_MODES[0];
      const expiresAt = (sess.createdAt || room.createdAt || Date.now()) + 86_400_000;
      return {
        roomId: sess.roomId,
        modeIcon: mInfo.icon,
        modeLabel: t('duel.mode.' + mInfo.id),
        score: sess.score,
        roomSize: ROOM_SIZE,
        oppText: oppName ? `${t('duel.resume.opp')} ${oppAvatar} ${oppName}` : null,
        expiresAt,
      };
    }),
  );
}

export function _onResumeContinue(roomId: string): void {
  const found = _resumeValid.find((v) => v.sess.roomId === roomId);
  if (!found) return;
  const { sess, room } = found;
  _resumeValid = [];
  setDuelResumeSessions([]);
  const seed = sess.seed ?? room.seed,
    category = sess.category ?? room.category,
    difficulty = sess.difficulty ?? room.difficulty;
  const maxHints = sess.maxHints ?? room.maxHints,
    bestOf = sess.bestOf ?? room.bestOf;
  const oppRoom = room[sess.slot === 'p1' ? 'p2' : 'p1'];
  setDuelRoom({
    roomId: sess.roomId,
    mySlot: sess.slot,
    mode: sess.mode,
    roomCreatedAt: sess.createdAt || room.createdAt || Date.now(),
    roomSeed: seed,
    roomCategory: category,
    roomDifficulty: difficulty,
    roomMaxHints: maxHints,
    roomLang: room.lang || 'ua',
    roomKnowLang: room.knowLang || 'en',
    quizDeck: _buildDeck(seed, category, difficulty, sess.mode, room.lang, room.knowLang),
    oppName: oppRoom?.name || sess.oppName || t('duel.opp'),
    oppAvatar: oppRoom?.avatar || sess.oppAvatar || '🧑',
  });
  const savedIdx = sess.idx,
    savedScore = sess.score;
  // Restore saved state directly, bypassing _initGame's reset+countdown
  // (which would re-zero score/progress and wipe chat a few seconds later).
  const series = room.series || { p1wins: 0, p2wins: 0, round: 1 };
  if (_advanceTimer) {
    clearTimeout(_advanceTimer);
    _advanceTimer = null;
  }
  setDuelChat(sess.chat ?? []);
  const powerupsEnabled = sess.powerupsEnabled ?? !!room.powerupsEnabled;
  const savedPowerups = sess.myPowerups ?? room[sess.slot]?.powerups;
  setDuelRoom({
    bestOf: bestOf || 1,
    series: { ...series },
    quizIdx: savedIdx,
    myScore: savedScore,
    myCorrect: sess.correct ?? 0,
    myWrong: sess.wrong ?? 0,
    myFlags: sess.flags ?? [],
    answered: false,
    finished: false,
    hintsLeft: maxHints === 0 ? 999 : maxHints,
    powerupsEnabled,
    myPowerups: savedPowerups
      ? { ...savedPowerups }
      : powerupsEnabled
        ? { double: 1, skip: 1, freeze: 1 }
        : { double: 0, skip: 0, freeze: 0 },
    doubleActive: false,
  });
  const savedDeckLen = sess.deckLen ?? ROOM_SIZE;
  while (getDuelRoomSnapshot().quizDeck.length < savedDeckLen) _extendDeckOnSkip();
  _setupGameUI();
  _showGame(false);
  _renderQuestion();
  _startOpponentPoll();
}

export function _onResumeDiscard(roomId: string): void {
  _clearSession(roomId);
  _tryResumeSession();
}

// ── renderDuel (full page) ────────────────────────────────────
export function renderDuel(): void {
  _tryResumeSession();
}

// ── Module-level side effects (keyboard shortcuts, sidebar nav,
// smart close button) — wired up via useEffect in app-root.tsx ──
export function DuelInit(): ReactElement | null {
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (getDuelScreenSnapshot() !== 'game') return;
      const room = getDuelRoomSnapshot();
      if (room.mode !== 'write' && !room.answered && ['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const opt = getDuelQuestionSnapshot().choiceOptions[parseInt(e.key) - 1];
        if (opt) _onOptionClick(opt);
      }
    };
    document.addEventListener('keydown', onKeydown);

    const sbDuel = document.getElementById('sb-duel');
    const onSbDuelClick = () => {
      _openPage('duel');
      renderDuel();
    };
    sbDuel?.addEventListener('click', onSbDuelClick);

    // ── Smart duel close button ────────────────────────────────
    // If game/tournament/spectator is active → return to lobby; else → close page
    const closeBtn = document.getElementById('duel-page-close');
    const onCloseClick = async () => {
      const screen = getDuelScreenSnapshot();
      const gameVisible = screen === 'game';
      const tournVisible = screen === 'tournament';
      const spectVisible = screen === 'spectate';
      const countdownVisible = screen === 'countdown';
      const waitingVisible = getDuelLobbyUISnapshot().waiting.visible;

      // 24h async duel: leaving mid-question (or during the pre-game countdown)
      // never forfeits — the room stays alive, the session is saved, and the
      // player can resume the same question later from the lobby's resume banner.
      if ((gameVisible && !getDuelRoomSnapshot().finished) || countdownVisible) {
        stopDuelPolling();
        _saveSession();
        _showLobby();
        renderDuel();
        _tryResumeSession();
      } else if (waitingVisible) {
        // Waiting for opponent — cancel room, reset lobby state, then close
        _cancelRoom();
        _showLobby();
        _closePage();
      } else if (tournVisible) {
        _cancelTournament();
      } else if (spectVisible) {
        _specLeaveHook?.();
      } else {
        // Result screen or plain lobby → reset state, then close
        _showLobby();
        _closePage();
      }
    };
    closeBtn?.addEventListener('click', onCloseClick);

    return () => {
      document.removeEventListener('keydown', onKeydown);
      sbDuel?.removeEventListener('click', onSbDuelClick);
      closeBtn?.removeEventListener('click', onCloseClick);
    };
  }, []);

  return null;
}
