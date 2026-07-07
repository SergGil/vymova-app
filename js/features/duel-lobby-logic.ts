// Vymova — js/features/duel-lobby-logic.ts
// Lobby pickers, tooltip, countdown/tempo/lobby-UI view-model getters,
// profile display helpers, and room create/join. Imports _startWaitPoll/
// _initGame from duel.ts directly (this file already depends on duel.ts for
// those, same direction as every other duel-*.ts consumer). The one reverse
// dependency — duel.ts's rematch flow needing to call createRoom() again —
// goes through a registration hook instead of a static import back here
// (mirrors the existing _registerMatchFinishHook pattern in duel.ts), so
// this file and duel.ts don't close a circular chunk.
import type { DuelMode, Difficulty, BestOf, RoomData } from './duel-types.ts';
import { DUEL_MODES, DIFFICULTIES } from './duel-types.ts';
import type { DuelLobbyUIState } from '../../src/types.js';
import { t } from './i18n.ts';
import { notifyStateChange } from '../../src/store.ts';
import { _fbGet, _fbPatch, _fbSet } from './duel-firebase.ts';
import { _getMyName, _getMyAvatar } from './duel-profile-snap.ts';
import { DUEL_LANG_CODES, _genCode, _fmtCode, _buildDeck } from './duel-deck.ts';
import {
  getDuelSelSnapshot,
  getDuelLobbyUISnapshot,
  setSelField,
  setLobbyMsg,
  setLobbyWaiting,
  setLobbyJoinRowVisible,
  setLobbyBtn,
} from '../../src/duel-lobby-store.ts';
import {
  getDuelCountdownNumSnapshot,
  getDuelRoomSnapshot,
  setDuelRoom,
  getDuelTempoSnapshot,
} from '../../src/duel-room-store.ts';
import { _startWaitPoll, _initGame, _registerCreateRoomHook } from './duel.ts';

// Геттери/сеттери для React-пікерів (item 29, Фаза 5) — createRoom/joinRoom/
// тощо й далі читають ці значення напряму через `getDuelSelSnapshot()`
// (item 36, Фаза 7.4-B/1), React-компоненти синхронізують свій локальний
// useState через ці функції.
export function _getSelMode(): DuelMode {
  return getDuelSelSnapshot().mode;
}
export function _setSelMode(m: DuelMode): void {
  setSelField('mode', m);
  notifyStateChange();
}
export function _getSelCategory(): string {
  return getDuelSelSnapshot().category;
}
export function _setSelCategory(c: string): void {
  setSelField('category', c);
  notifyStateChange();
}
export function _getSelDifficulty(): Difficulty {
  return getDuelSelSnapshot().difficulty;
}
export function _setSelDifficulty(d: Difficulty): void {
  setSelField('difficulty', d);
  notifyStateChange();
}
export function _getSelBestOf(): BestOf {
  return getDuelSelSnapshot().bestOf;
}
export function _setSelBestOf(b: BestOf): void {
  setSelField('bestOf', b);
  notifyStateChange();
}
export function _getSelMaxHints(): number {
  return getDuelSelSnapshot().maxHints;
}
export function _setSelMaxHints(h: number): void {
  setSelField('maxHints', h);
  notifyStateChange();
}
export function _getSelPowerups(): boolean {
  return getDuelSelSnapshot().powerupsEnabled;
}
export function _setSelPowerups(p: boolean): void {
  setSelField('powerupsEnabled', p);
  notifyStateChange();
}
export function _getSelLang(): string {
  return getDuelSelSnapshot().lang;
}
export function _setSelLang(l: string): void {
  setSelField('lang', l);
  if (getDuelSelSnapshot().knowLang === l) {
    setSelField('knowLang', DUEL_LANG_CODES.find((x) => x !== l) ?? 'ua');
  }
  notifyStateChange();
}
export function _getSelKnowLang(): string {
  return getDuelSelSnapshot().knowLang;
}
export function _setSelKnowLang(l: string): void {
  setSelField('knowLang', l);
  if (getDuelSelSnapshot().lang === l) {
    setSelField('lang', DUEL_LANG_CODES.find((x) => x !== l) ?? 'en');
  }
  notifyStateChange();
}

export function _showInfoTooltip(anchor: HTMLElement, type: 'hints' | 'powerups'): void {
  const existing = document.getElementById('duel-tooltip');
  if (existing) {
    existing.remove();
    return;
  }

  const content =
    type === 'hints'
      ? `<div style="font-weight:700;margin-bottom:6px;">${t('duel.hint.info.title')}</div>
       <div>${t('duel.hint.info.p1')}</div>
       <ul style="margin:6px 0 0 14px;font-size:.78rem;color:var(--text3);">
         <li>${t('duel.hint.info.ul')}</li>
         <li>${t('duel.hint.info.3')}</li>
         <li>${t('duel.hint.info.1')}</li>
       </ul>`
      : `<div style="font-weight:700;margin-bottom:6px;">${t('duel.pu.info.title')}</div>
       <div style="font-size:.8rem;color:var(--text2);margin-bottom:8px;">${t('duel.pu.info.desc')}</div>
       <div style="display:flex;flex-direction:column;gap:8px;">
         <div style="padding:8px 10px;border-radius:9px;background:rgba(0,200,100,.08);border:1px solid rgba(0,200,100,.2);">
           🎯 <b>×2 Double</b><br>
           <span style="font-size:.76rem;color:var(--text2);">${t('duel.pu.double.info')}</span>
         </div>
         <div style="padding:8px 10px;border-radius:9px;background:rgba(52,152,219,.08);border:1px solid rgba(52,152,219,.2);">
           ⏩ <b>Skip</b><br>
           <span style="font-size:.76rem;color:var(--text2);">${t('duel.pu.skip.info')}</span>
         </div>
         <div style="padding:8px 10px;border-radius:9px;background:rgba(142,68,173,.08);border:1px solid rgba(142,68,173,.2);">
           🧊 <b>Freeze</b> <span style="font-size:.7rem;padding:1px 5px;border-radius:5px;background:rgba(230,126,34,.15);color:#e67e22;">${t('duel.pu.freeze.tag')}</span><br>
           <span style="font-size:.76rem;color:var(--text2);">${t('duel.pu.freeze.info')}</span>
         </div>
       </div>`;

  const tip = document.createElement('div');
  tip.id = 'duel-tooltip';
  tip.style.cssText =
    'position:fixed;z-index:99999;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;max-width:280px;box-shadow:0 8px 32px rgba(0,0,0,.25);font-size:.82rem;color:var(--text);line-height:1.45;';
  tip.innerHTML = content;

  // Position near anchor
  const rect = anchor.getBoundingClientRect();
  document.body.appendChild(tip);
  const tRect = tip.getBoundingClientRect();
  let top = rect.bottom + 8;
  let left = rect.left - tRect.width / 2 + rect.width / 2;
  if (left < 8) left = 8;
  if (left + tRect.width > window.innerWidth - 8) left = window.innerWidth - tRect.width - 8;
  if (top + tRect.height > window.innerHeight - 8) top = rect.top - tRect.height - 8;
  tip.style.top = top + 'px';
  tip.style.left = left + 'px';

  // Close on outside click
  const close = (e: MouseEvent) => {
    if (!tip.contains(e.target as Node)) {
      tip.remove();
      document.removeEventListener('click', close);
    }
  };
  setTimeout(() => document.addEventListener('click', close), 10);
}

// Знімок даних для duel-countdown.tsx (Фаза 9/1).
interface CountdownData {
  oppAvatar: string;
  oppName: string;
  myAvatar: string;
  myName: string;
  roomCode: string | null;
  num: number;
}
export function _getCountdownData(): CountdownData {
  const room = getDuelRoomSnapshot();
  return {
    oppAvatar: room.oppAvatar,
    oppName: room.oppName,
    myAvatar: _getMyAvatar(),
    myName: _getMyName(),
    // Show room code so p1 still has time to share it during countdown
    roomCode: room.roomId && room.mySlot === 'p1' ? room.roomId : null,
    num: getDuelCountdownNumSnapshot(),
  };
}

export function _getTempoData(): { visible: boolean; num: number } {
  return getDuelTempoSnapshot();
}

// Знімок lobby UI (Фаза 9/6), читає duel-lobby.tsx.
export function _getLobbyUIData(): DuelLobbyUIState {
  return getDuelLobbyUISnapshot();
}

// ── Create / Join ─────────────────────────────────────────────
export async function createRoom(): Promise<void> {
  setLobbyBtn('createBtn', true);
  notifyStateChange();
  try {
    const sel = getDuelSelSnapshot();
    const roomId = _genCode();
    setDuelRoom({ roomId, mySlot: 'p1', isAsyncChallenge: false });
    const seed = Date.now();
    const room: RoomData = {
      seed,
      mode: sel.mode,
      category: sel.category,
      difficulty: sel.difficulty,
      bestOf: sel.bestOf,
      maxHints: sel.maxHints,
      powerupsEnabled: sel.powerupsEnabled,
      lang: sel.lang,
      knowLang: sel.knowLang,
      createdAt: Date.now(),
      started: false,
      finished: false,
      series: { p1wins: 0, p2wins: 0, round: 1 },
      p1: {
        name: _getMyName(),
        avatar: _getMyAvatar(),
        score: 0,
        idx: 0,
        done: false,
        hintsLeft: sel.maxHints,
        powerups: {
          double: sel.powerupsEnabled ? 1 : 0,
          skip: sel.powerupsEnabled ? 1 : 0,
          freeze: sel.powerupsEnabled ? 1 : 0,
        },
      },
      p2: null,
    };
    await _fbSet(`/duel_rooms/${roomId}`, room);
    setDuelRoom({
      roomCreatedAt: room.createdAt,
      roomSeed: seed,
      roomCategory: sel.category,
      roomDifficulty: sel.difficulty,
      roomMaxHints: sel.maxHints,
      roomLang: sel.lang,
      roomKnowLang: sel.knowLang,
      quizDeck: _buildDeck(seed, sel.category, sel.difficulty, sel.mode, sel.lang, sel.knowLang),
    });
    notifyStateChange();
    const mInfo = DUEL_MODES.find((m) => m.id === sel.mode)!;
    const catLabel = sel.category ? ` · ${sel.category.split(' ')[0]}` : '';
    const diff = DIFFICULTIES.find((d) => d.id === sel.difficulty);
    const diffLabel = diff ? (diff.id === 'mixed' ? t('duel.diff.mixed') : diff.label) : '';
    const modeLabel = `${mInfo.icon} ${t('duel.mode.' + mInfo.id)}${catLabel} · ${diffLabel}${sel.bestOf === 3 ? ' · ' + t('duel.bestOf3') : ''}`;
    setLobbyMsg({ visible: false, text: getDuelLobbyUISnapshot().msg.text, challenge: null });
    setLobbyWaiting({ visible: true, roomCode: _fmtCode(roomId), modeLabel });
    setLobbyJoinRowVisible(false);
    notifyStateChange();
    _startWaitPoll();
  } catch (e) {
    setLobbyBtn('createBtn', false);
    setLobbyMsg({ visible: true, text: '❌ ' + (e as Error).message, challenge: null });
    notifyStateChange();
  }
}

export async function joinRoom(rawCode: string): Promise<void> {
  const code = rawCode.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  if (code.length < 6) {
    setLobbyMsg({ visible: true, text: t('duel.enterCode'), challenge: null });
    notifyStateChange();
    return;
  }
  setLobbyBtn('joinBtn', true);
  notifyStateChange();
  try {
    const room = (await _fbGet(`/duel_rooms/${code}`)) as RoomData | null;
    if (!room?.seed) throw new Error(t('duel.err.notFound'));
    if (room.p2) throw new Error(t('duel.err.taken'));
    if (room.finished) throw new Error(t('duel.err.finished'));
    setDuelRoom({
      roomId: code,
      mySlot: 'p2',
      isAsyncChallenge: false,
      roomCreatedAt: room.createdAt || Date.now(),
      roomSeed: room.seed,
      roomCategory: room.category,
      roomDifficulty: room.difficulty,
      roomMaxHints: room.maxHints,
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
      bestOf: room.bestOf || 1,
      series: { ...room.series },
    });
    await _fbPatch(`/duel_rooms/${code}`, {
      p2: {
        name: _getMyName(),
        avatar: _getMyAvatar(),
        score: 0,
        idx: 0,
        done: false,
        hintsLeft: room.maxHints,
        powerups: {
          double: room.powerupsEnabled ? 1 : 0,
          skip: room.powerupsEnabled ? 1 : 0,
          freeze: room.powerupsEnabled ? 1 : 0,
        },
      },
      started: true,
    });
    setDuelRoom({ oppName: room.p1.name, oppAvatar: room.p1.avatar });
    notifyStateChange();
    _initGame(room.mode, room.maxHints, room.bestOf, room.series, room.powerupsEnabled);
  } catch (e) {
    setLobbyBtn('joinBtn', false);
    setLobbyMsg({ visible: true, text: '❌ ' + (e as Error).message, challenge: null });
    notifyStateChange();
  }
}

// Registers createRoom() as the hook duel.ts's rematch flow calls — see the
// header comment above for why this is a registration instead of duel.ts
// statically importing this file.
_registerCreateRoomHook(createRoom);
