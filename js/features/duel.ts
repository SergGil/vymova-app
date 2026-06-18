// English Words App — js/features/duel.ts
// ⚔️ Full-featured Duel: leaderboard + live multiplayer quiz

import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { WORD_CATEGORIES } from '../../data/categories.js';
import { getCefrLevel, CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import * as LZString from 'lz-string';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import type { WordEntry, DuelScreen, DuelLobbyUIState } from '../../src/types.js';
import { t, getLang } from './i18n.ts';
import { esEntry, frEntry, itEntry, ptEntry, deEntry } from './mode-utils.ts';
import { notifyStateChange } from '../../src/store.ts';
import { DICT } from '../modes/word-letters.tsx';

// Динамічний імпорт: sidebar.tsx має DOM-side-effects на рівні модуля,
// а sidebar.tsx сам статично імпортує цей файл (renderDuel) — статичний
// імпорт тут створив би цикл і тягнув би sidebar.tsx у кожен тест, що
// імпортує duel.ts.
async function _openPage(page: string): Promise<void> {
  (await import('./sidebar.tsx')).openPage(page);
}
async function _closePage(): Promise<void> {
  (await import('./sidebar.tsx')).closePage();
}
import { refreshDuelGameHeader } from './duel-game-header.tsx';
import { refreshDuelSpectator } from './duel-spectator.tsx';
import { refreshDuelPowerups } from './duel-powerups.tsx';
import { refreshDuelFeedback } from './duel-feedback.tsx';
import { refreshDuelChatLog } from './duel-chat-log.tsx';
import { refreshDuelQuestion } from './duel-question.tsx';
import { refreshDuelResume } from './duel-resume.tsx';
import { refreshDuelTournament } from './duel-tournament.tsx';

// Лінива ініціалізація: уникає TDZ-помилки у production-збірці, де
// duel.ts і duel-tournament.tsx опиняються в циклічно залежних чанках
// (rollup "Circular chunk" warning) — обчислення на рівні модуля може
// виконатись раніше за визначення DICT у чанку duel-tournament.
let _dictSet: Set<string> | null = null;
function _getDictSet(): Set<string> {
  if (!_dictSet) _dictSet = new Set(DICT);
  return _dictSet;
}

export function _letterCounts(word: string): Record<string, number> {
  const c: Record<string, number> = {};
  for (const ch of word) c[ch] = (c[ch] ?? 0) + 1;
  return c;
}

export function _canForm(word: string, base: Record<string, number>): boolean {
  const c: Record<string, number> = {};
  for (const ch of word) {
    c[ch] = (c[ch] ?? 0) + 1;
    if (c[ch] > (base[ch] ?? 0)) return false;
  }
  return true;
}

export function _shuffleLetters(word: string): string {
  const orig = word.toUpperCase().split('');
  let shuffled = orig;
  let tries = 0;
  do { shuffled = _shuf(orig.slice()); tries++; } while (shuffled.join('') === orig.join('') && orig.length > 1 && tries < 10);
  return shuffled.join(' ');
}

// Pure answer-check for write/anagram/letters modes (item 32 prep, Фаза 5).
// `val`/`ans` мають бути вже trim()+toLowerCase().
export function _checkWriteAnswer(mode: DuelMode, val: string, ans: string): boolean {
  if (mode === 'letters') return val.length >= 3 && _canForm(val, _letterCounts(ans)) && _getDictSet().has(val);
  return val === ans || (ans.length > 3 && lev(val, ans) <= 1);
}

// ── Constants ─────────────────────────────────────────────────
const DB_URL    = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
export const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const ROOM_SIZE = 10;
const NUM_OPTS = 4;
export const TEMPO_SEC = 4;
const REACTIONS = ['👍','😅','🔥','😂','🤯','😤','🎉','👏'];

// ── Types ─────────────────────────────────────────────────────
export type DuelMode = 'quiz' | 'reverse' | 'write' | 'tempo' | 'anagram' | 'letters';
export type Difficulty = CefrLevel | 'mixed'; // CEFR-based difficulty
export type BestOf   = 1 | 3;
export type PowerupType    = 'double' | 'skip' | 'freeze';

export const POWERUPS: { id:PowerupType; icon:string }[] = [
  { id:'double', icon:'🎯' },
  { id:'skip',   icon:'⏩' },
  { id:'freeze', icon:'🧊' },
];

export const DUEL_MODES: { id:DuelMode; icon:string }[] = [
  { id:'quiz',    icon:'🧠' },
  { id:'reverse', icon:'🔄' },
  { id:'write',   icon:'✍️' },
  { id:'tempo',   icon:'⚡' },
  { id:'anagram', icon:'🔀' },
  { id:'letters', icon:'🔤' },
];
export const DIFFICULTIES: { id:Difficulty; label:string; color:string }[] = [
  { id:'mixed', label:'Мікс',    color:'var(--text3)' },
  { id:'A1',    label:'A1',      color:'#27ae60' },
  { id:'A2',    label:'A2',      color:'#2ecc71' },
  { id:'B1',    label:'B1',      color:'#d4ac0d' },
  { id:'B2',    label:'B2',      color:'#e67e22' },
  { id:'C1',    label:'C1',      color:'#e74c3c' },
  { id:'C2',    label:'C2',      color:'#8e44ad' },
];

interface PlayerData {
  name:string; avatar:string; score:number; idx:number; done:boolean;
  reaction?:string; reactionTs?:number; hintsLeft:number;
  powerups:Record<PowerupType,number>; frozenUntil?:number;
  flags?:(boolean|'skip'|'double')[];
}
interface SeriesData { p1wins:number; p2wins:number; round:number; }
interface SpectatorData { name:string; avatar:string; }
interface RoomData {
  seed:number; mode:DuelMode; category:string; difficulty:Difficulty;
  bestOf:BestOf; maxHints:number; powerupsEnabled:boolean;
  lang?:string; knowLang?:string;
  p1:PlayerData; p2:PlayerData|null;
  started:boolean; finished:boolean; createdAt:number;
  series:SeriesData;
  spectators?:Record<string, SpectatorData>;
}
// Async duel (challenge)
interface AsyncDuel {
  seed:number; mode:DuelMode; category:string; difficulty:Difficulty;
  createdAt:number; expiresAt:number;
  powerupsEnabled?:boolean; maxHints?:number; bestOf?:BestOf;
  lang?:string; knowLang?:string;
  challenger:{ name:string; avatar:string; score:number; done:boolean };
  opponent?:{ name:string; avatar:string; score:number; done:boolean };
  finished:boolean;
}

// ── History & Rating (localStorage) ──────────────────────────
const HIST_KEY   = 'ew_duel_history';
const RATING_KEY = 'ew_duel_rating';

interface HistEntry { date:string; mode:DuelMode; myScore:number; oppScore:number; oppName:string; won:boolean; category:string; }
interface Rating    { wins:number; losses:number; ties:number; }

export function _getHistory(): HistEntry[] { try { return JSON.parse(localStorage.getItem(HIST_KEY)||'[]'); } catch(e){ return []; } }
function _addHistory(e: HistEntry): void {
  const h = _getHistory(); h.unshift(e); if (h.length>100) h.length=100;
  try { localStorage.setItem(HIST_KEY, JSON.stringify(h)); } catch(e){}
}
export function _getRating(): Rating { try { return JSON.parse(localStorage.getItem(RATING_KEY)||'{"wins":0,"losses":0,"ties":0}'); } catch(e){ return {wins:0,losses:0,ties:0}; } }
function _updateRating(won:boolean, tie:boolean): void {
  const r = _getRating();
  if (tie) r.ties++; else if (won) r.wins++; else r.losses++;
  try { localStorage.setItem(RATING_KEY, JSON.stringify(r)); } catch(e){}
}

// ── Profile leaderboard ───────────────────────────────────────
const LIST_KEY='ew_profiles', ACTIVE_KEY='ew_active_profile';
const SNAP_KEYS=['ew_known','ew_known_lz','ew_game','ew_daily','ew_ach'];
export function _getProfiles() { try { return JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); } catch(e){ return []; } }
export function _getActiveId() { return localStorage.getItem(ACTIVE_KEY)||''; }
export function _readSnap(id:string):Record<string,string>{ const d:Record<string,string>={}; SNAP_KEYS.forEach(k=>{const v=localStorage.getItem(`ew_p_${id}__${k}`);if(v!==null)d[k]=v;}); return d; }
export function _currentSnap():Record<string,string>{ const d:Record<string,string>={}; SNAP_KEYS.forEach(k=>{const v=localStorage.getItem(k);if(v!==null)d[k]=v;}); return d; }
export function _parseKnown(s:Record<string,string>):string[]{const r=s['ew_known'];if(!r)return[];try{if(s['ew_known_lz']==='1'){const d=LZString.decompress(r);if(d)return JSON.parse(d);}return JSON.parse(r);}catch(e){return[];}}
export function _parseGame(s:Record<string,string>){try{return JSON.parse(s['ew_game']||'{}');}catch(e){return{};}}
export function _weekWords(s:Record<string,string>):number{try{const d=JSON.parse(s['ew_daily']||'{}');const t=new Date();let c=0;for(let i=0;i<7;i++){const dt=new Date(t);dt.setDate(dt.getDate()-i);c+=(d[dt.toISOString().slice(0,10)]||0);}return c;}catch(e){return 0;}}

// ── Firebase ──────────────────────────────────────────────────
async function _fbGet(p:string):Promise<unknown>{ const r=await fetch(`${DB_URL}${p}.json`);if(!r.ok)throw new Error('HTTP '+r.status);return r.json(); }
async function _fbPatch(p:string,d:unknown):Promise<void>{ await fetch(`${DB_URL}${p}.json`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}); }
async function _fbSet(p:string,d:unknown):Promise<void>{ await fetch(`${DB_URL}${p}.json`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}); }

// ── Room state ────────────────────────────────────────────────
let _pollTimer: ReturnType<typeof setInterval> | null = null;
let _resultPollTimer: ReturnType<typeof setInterval> | null = null;
let _tempoTimer: ReturnType<typeof setInterval> | null = null;
let _advanceTimer: ReturnType<typeof setTimeout> | null = null;
let _tempoLeft = TEMPO_SEC;
// Spectator
let _isSpectator = false;
let _specId = '';
export function _getSpecRoom(): RoomData|null { return state.duelSpecRoom; }
// Async challenge (24h)
let _asyncStartTimer: ReturnType<typeof setTimeout> | null = null;
// Freeze timer
let _freezeTimer: ReturnType<typeof setTimeout> | null = null;
// Feedback / speed indicator under the question (item 32, Фаза 5)
export function _getFeedbackData(): { html:string; speed:string } { return { html:state.duelQuestion.feedbackHtml, speed:state.duelQuestion.speedText }; }
// Room/deck params kept for session persistence & resume (esp. async duels,
// whose /duel_rooms/ doc may only contain partial data pushed by _pushScore)

// ── Session persistence ───────────────────────────────────────
const SESSION_KEY = 'ew_duel_sessions';
const SESSION_KEY_OLD = 'ew_duel_session';
export function _getChatHistory(): {text:string;isMe:boolean}[] { return state.duelChatHistory; }
interface DuelSession {roomId:string;slot:'p1'|'p2';mode:DuelMode;idx:number;score:number;correct?:number;wrong?:number;flags?:(boolean|'skip'|'double')[];chat?:{text:string;isMe:boolean}[];deckLen?:number;createdAt?:number;
  seed?:number;category?:string;difficulty?:Difficulty;maxHints?:number;bestOf?:BestOf;
  powerupsEnabled?:boolean;myPowerups?:Record<PowerupType,number>;oppName?:string;oppAvatar?:string;}
function _loadSessions(): DuelSession[] {
  try {
    const r=localStorage.getItem(SESSION_KEY);
    if(r){ const arr=JSON.parse(r); return Array.isArray(arr)?arr:[]; }
    // Migrate from the old single-session format
    const old=localStorage.getItem(SESSION_KEY_OLD);
    if(old){
      const sess=JSON.parse(old);
      localStorage.removeItem(SESSION_KEY_OLD);
      if(sess?.roomId){ const list=[sess]; _saveSessions(list); return list; }
    }
    return [];
  } catch(e){ return []; }
}
function _saveSessions(list: DuelSession[]): void {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(list)); } catch(e){}
}
function _saveSession(): void {
  if(!state.duelRoom.roomId) return;
  const list=_loadSessions().filter(s=>s.roomId!==state.duelRoom.roomId);
  list.push({roomId:state.duelRoom.roomId,slot:state.duelRoom.mySlot,mode:state.duelRoom.mode,idx:state.duelRoom.quizIdx,score:state.duelRoom.myScore,correct:state.duelRoom.myCorrect,wrong:state.duelRoom.myWrong,flags:state.duelRoom.myFlags,chat:state.duelChatHistory,deckLen:state.duelRoom.quizDeck.length,createdAt:state.duelRoom.roomCreatedAt,
    seed:state.duelRoom.roomSeed,category:state.duelRoom.roomCategory,difficulty:state.duelRoom.roomDifficulty,maxHints:state.duelRoom.roomMaxHints,bestOf:state.duelRoom.bestOf,
    powerupsEnabled:state.duelRoom.powerupsEnabled,myPowerups:{...state.duelRoom.myPowerups},oppName:state.duelRoom.oppName,oppAvatar:state.duelRoom.oppAvatar});
  _saveSessions(list);
}
function _clearSession(roomId?: string): void {
  const id=roomId||state.duelRoom.roomId; if(!id) return;
  _saveSessions(_loadSessions().filter(s=>s.roomId!==id));
}

// ── Language helpers ──────────────────────────────────────────
export const DUEL_LANG_CODES = ['en', 'ua', 'es', 'fr', 'it', 'pt', 'de'];

function _wordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'en': return w[0];
    case 'es': return esEntry(w[0])?.[0] ?? w[1];
    case 'fr': return frEntry(w[0])?.[0] ?? w[1];
    case 'it': return itEntry(w[0])?.[0] ?? w[1];
    case 'pt': return ptEntry(w[0])?.[0] ?? w[1];
    case 'de': return deEntry(w[0])?.[0] ?? w[1];
    default:   return w[1]; // 'ua'
  }
}

// Whether `w` has a usable translation for `lang` (en/ua are always present).
function _hasLangWord(w: WordEntry, lang: string): boolean {
  switch (lang) {
    case 'en': case 'ua': return true;
    case 'es': return esEntry(w[0]) !== null;
    case 'fr': return frEntry(w[0]) !== null;
    case 'it': return itEntry(w[0]) !== null;
    case 'pt': return ptEntry(w[0]) !== null;
    case 'de': return deEntry(w[0]) !== null;
    default:   return true;
  }
}

// ── Deck building ─────────────────────────────────────────────
function _dateLocale(): string { return getLang()==='en'?'en':getLang()==='es'?'es':'uk'; }
function _secUnit(): string { return getLang()==='ua'?'с':'s'; }
export function _genCode(): string { return Array.from(crypto.getRandomValues(new Uint8Array(6)),v=>CHARS[v%CHARS.length]).join(''); }
export function _fmtCode(c:string): string { return c.slice(0,3)+'-'+c.slice(3); }
export function _rng(seed:number):()=>number{ let s=seed; return()=>{s=(s*1664525+1013904223)&0x7FFFFFFF;return s/0x7FFFFFFF;}; }

// Words usable as a letter source for anagram/letters modes: plain a-z, 4-9 letters
const _SCRAMBLE_POOL: WordEntry[] = (W as unknown as WordEntry[])
  .filter(w => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4 && w[0].length <= 9);

export function _buildDeck(seed:number, category:string, difficulty:Difficulty, mode?:DuelMode, lang?:string, knowLang?:string): WordEntry[] {
  const rnd = _rng(seed);
  const scramble = mode==='anagram'||mode==='letters';
  let pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
  // Language filter: keep only words that have translations in both selected languages
  if (!scramble) {
    const langPool = pool.filter(w => _hasLangWord(w, lang||'en') && _hasLangWord(w, knowLang||'ua'));
    if (langPool.length >= ROOM_SIZE) pool = langPool;
  }
  // Category filter
  if (category) {
    const allowed = new Set((WORD_CATEGORIES[category]??[]).map((w:string)=>w.toLowerCase()));
    pool = pool.filter(w => allowed.has(w[0].toLowerCase()));
  }
  // CEFR-based difficulty filter
  if (difficulty !== 'mixed') {
    const cefrPool = pool.filter(w => getCefrLevel(w[0]) === difficulty);
    if (cefrPool.length >= ROOM_SIZE) pool = cefrPool;
    // fallback: include adjacent levels if not enough words
    else if (cefrPool.length > 0) pool = cefrPool;
  }
  if (pool.length < ROOM_SIZE) pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]); // final fallback
  return Array.from({length:pool.length},(_,i)=>i).sort(()=>rnd()-0.5).slice(0,ROOM_SIZE).map(i=>pool[i]);
}

// Append one extra word to the deck when Skip is used, so skipping doesn't shorten the round
function _extendDeckOnSkip(): void {
  const scramble = state.duelRoom.mode==='anagram'||state.duelRoom.mode==='letters';
  const pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
  const used = new Set(state.duelRoom.quizDeck.map(w=>w[0].toLowerCase()));
  const candidates = pool.filter(w=>!used.has(w[0].toLowerCase()));
  const src = candidates.length ? candidates : pool;
  state.duelRoom.quizDeck.push(src[Math.floor(Math.random()*src.length)]);
  notifyStateChange();
}

function _getMyName():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.name||t('duel.player');}catch(e){return t('duel.player');} }
function _getMyAvatar():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.avatar||'🧑';}catch(e){return '🧑';} }

// Знімок даних для duel-game-header.tsx (item 32, Фаза 5): React читає
// поточний стан гри, polling/state-machine логіка лишається тут.
interface GameHeaderData {
  myAvatar:string; myScore:number; myIdx:number; myTotal:number; myFlags:(boolean|'skip'|'double')[];
  oppAvatar:string; oppName:string; oppScore:number; oppIdx:number; oppFlags:(boolean|'skip'|'double')[]; oppTotal:number;
  mode:DuelMode; progressText:string;
  bestOf:BestOf; seriesMe:number; seriesOpp:number;
  roomCode:string|null;
}
export function _getGameHeaderData(): GameHeaderData {
  return {
    myAvatar: _getMyAvatar(),
    myScore: state.duelRoom.myScore,
    myIdx: state.duelRoom.quizIdx,
    myTotal: state.duelRoom.quizDeck.length,
    myFlags: state.duelRoom.myFlags,
    oppAvatar: state.duelRoom.oppAvatar||'🧑',
    oppName: state.duelRoom.oppName||t('duel.opp'),
    oppScore: state.duelRoom.oppScore,
    oppIdx: state.duelRoom.oppIdx,
    oppFlags: state.duelRoom.oppFlags,
    oppTotal: ROOM_SIZE,
    mode: state.duelRoom.mode,
    progressText: `${state.duelRoom.quizIdx+1} / ${state.duelRoom.quizDeck.length}`,
    bestOf: state.duelRoom.bestOf,
    seriesMe: state.duelRoom.mySlot==='p1'?state.duelRoom.series.p1wins:state.duelRoom.series.p2wins,
    seriesOpp: state.duelRoom.mySlot==='p1'?state.duelRoom.series.p2wins:state.duelRoom.series.p1wins,
    roomCode: (state.duelRoom.roomId && state.duelRoom.mySlot==='p1') ? state.duelRoom.roomId : null,
  };
}

// Який екран дуелі активний (item 36, Фаза 7.4-B, під-фаза 9) — дзеркалить
// `_showLobby`/`_showCountdown`/`_showGame`/`_showResult`/`_showTournament`/
// spectator-view.
export function _getDuelScreen(): DuelScreen {
  return state.duelScreen;
}

// ── UI refs ───────────────────────────────────────────────────
function _showLobby()    {
  // Always reset waiting state so the create button is never stuck
  state.duelLobbyUI.waiting.visible=false;
  state.duelLobbyUI.joinRowVisible=true;
  state.duelLobbyUI.createBtn.disabled=false;
  state.duelLobbyUI.joinBtn.disabled=false;
  state.duelLobbyUI.asyncBtn.disabled=false;
  state.duelLobbyUI.tournBtn4={disabled:false,errorLabel:null};
  state.duelLobbyUI.tournBtn8={disabled:false,errorLabel:null};
  state.duelScreen='lobby'; notifyStateChange();
}
function _showCountdown(){ state.duelScreen='countdown'; notifyStateChange(); }
function _showGame(clearChat=true) { state.duelScreen='game'; if(clearChat){ state.duelChatHistory=[]; refreshDuelChatLog(); _lastReactionTs=0; } notifyStateChange(); }
// Keep the chat panel visible/usable on the finish screen so players can keep chatting.
function _showResult()   { state.duelScreen='result'; notifyStateChange(); }

// ── Lobby pickers ─────────────────────────────────────────────
// Geттери/сеттери для React-пікерів (item 29, Фаза 5) — createRoom/joinRoom/
// тощо й далі читають ці значення напряму через `state.duelSel` (item 36,
// Фаза 7.4-B/1), React-компоненти синхронізують свій локальний useState
// через ці функції.
export function _getSelMode(): DuelMode { return state.duelSel.mode; }
export function _setSelMode(m: DuelMode): void { state.duelSel.mode = m; notifyStateChange(); }
export function _getSelCategory(): string { return state.duelSel.category; }
export function _setSelCategory(c: string): void { state.duelSel.category = c; notifyStateChange(); }
export function _getSelDifficulty(): Difficulty { return state.duelSel.difficulty; }
export function _setSelDifficulty(d: Difficulty): void { state.duelSel.difficulty = d; notifyStateChange(); }
export function _getSelBestOf(): BestOf { return state.duelSel.bestOf; }
export function _setSelBestOf(b: BestOf): void { state.duelSel.bestOf = b; notifyStateChange(); }
export function _getSelMaxHints(): number { return state.duelSel.maxHints; }
export function _setSelMaxHints(h: number): void { state.duelSel.maxHints = h; notifyStateChange(); }
export function _getSelPowerups(): boolean { return state.duelSel.powerupsEnabled; }
export function _setSelPowerups(p: boolean): void { state.duelSel.powerupsEnabled = p; notifyStateChange(); }
export function _getSelLang(): string { return state.duelSel.lang; }
export function _setSelLang(l: string): void {
  state.duelSel.lang = l;
  if (state.duelSel.knowLang === l) {
    state.duelSel.knowLang = DUEL_LANG_CODES.find(x => x !== l) ?? 'ua';
  }
  notifyStateChange();
}
export function _getSelKnowLang(): string { return state.duelSel.knowLang; }
export function _setSelKnowLang(l: string): void {
  state.duelSel.knowLang = l;
  if (state.duelSel.lang === l) {
    state.duelSel.lang = DUEL_LANG_CODES.find(x => x !== l) ?? 'en';
  }
  notifyStateChange();
}

export function _showInfoTooltip(anchor: HTMLElement, type: 'hints' | 'powerups'): void {
  const existing = document.getElementById('duel-tooltip');
  if (existing) { existing.remove(); return; }

  const content = type === 'hints'
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
  tip.style.cssText = 'position:fixed;z-index:99999;background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:14px 16px;max-width:280px;box-shadow:0 8px 32px rgba(0,0,0,.25);font-size:.82rem;color:var(--text);line-height:1.45;';
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
    if (!tip.contains(e.target as Node)) { tip.remove(); document.removeEventListener('click', close); }
  };
  setTimeout(() => document.addEventListener('click', close), 10);
}

// ── Countdown ─────────────────────────────────────────────────
// Знімок даних для duel-countdown.tsx (Фаза 9/1).
interface CountdownData {
  oppAvatar:string; oppName:string; myAvatar:string; myName:string;
  roomCode:string|null; num:number;
}
export function _getCountdownData(): CountdownData {
  return {
    oppAvatar: state.duelRoom.oppAvatar,
    oppName:   state.duelRoom.oppName,
    myAvatar:  _getMyAvatar(),
    myName:    _getMyName(),
    // Show room code so p1 still has time to share it during countdown
    roomCode:  (state.duelRoom.roomId && state.duelRoom.mySlot === 'p1') ? state.duelRoom.roomId : null,
    num:       state.duelCountdownNum,
  };
}

export function _getTempoData(): { visible: boolean; num: number } {
  return state.duelTempo;
}

// Знімок lobby UI (Фаза 9/6), читає duel-lobby.tsx.
export function _getLobbyUIData(): DuelLobbyUIState {
  return state.duelLobbyUI;
}

function _runCountdown(cb: ()=>void): void {
  _showCountdown();
  state.duelCountdownNum = 3;
  notifyStateChange();
  const _timer = setInterval(()=>{
    state.duelCountdownNum--;
    notifyStateChange();
    if (state.duelCountdownNum < 0) { clearInterval(_timer); cb(); }
  }, 1000);
}

// ── Create / Join ─────────────────────────────────────────────
export async function createRoom(): Promise<void> {
  state.duelLobbyUI.createBtn.disabled=true; notifyStateChange();
  try {
    state.duelRoom.roomId=_genCode(); state.duelRoom.mySlot='p1'; state.duelRoom.isAsyncChallenge=false;
    const seed=Date.now();
    const room: RoomData = {
      seed, mode:state.duelSel.mode, category:state.duelSel.category, difficulty:state.duelSel.difficulty,
      bestOf:state.duelSel.bestOf, maxHints:state.duelSel.maxHints, powerupsEnabled:state.duelSel.powerupsEnabled,
      lang:state.duelSel.lang, knowLang:state.duelSel.knowLang,
      createdAt:Date.now(), started:false, finished:false,
      series:{p1wins:0,p2wins:0,round:1},
      p1:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:state.duelSel.maxHints,powerups:{double:state.duelSel.powerupsEnabled?1:0,skip:state.duelSel.powerupsEnabled?1:0,freeze:state.duelSel.powerupsEnabled?1:0}},
      p2:null,
    };
    await _fbSet(`/duel_rooms/${state.duelRoom.roomId}`,room);
    state.duelRoom.roomCreatedAt=room.createdAt;
    state.duelRoom.roomSeed=seed; state.duelRoom.roomCategory=state.duelSel.category; state.duelRoom.roomDifficulty=state.duelSel.difficulty; state.duelRoom.roomMaxHints=state.duelSel.maxHints;
    state.duelRoom.roomLang=state.duelSel.lang; state.duelRoom.roomKnowLang=state.duelSel.knowLang;
    state.duelRoom.quizDeck=_buildDeck(seed,state.duelSel.category,state.duelSel.difficulty,state.duelSel.mode,state.duelSel.lang,state.duelSel.knowLang);
    notifyStateChange();
    const mInfo=DUEL_MODES.find(m=>m.id===state.duelSel.mode)!;
    const catLabel=state.duelSel.category?` · ${state.duelSel.category.split(' ')[0]}`:'';
    const diff=DIFFICULTIES.find(d=>d.id===state.duelSel.difficulty); const diffLabel=diff?(diff.id==='mixed'?t('duel.diff.mixed'):diff.label):'';
    const modeLabel=`${mInfo.icon} ${t('duel.mode.'+mInfo.id)}${catLabel} · ${diffLabel}${state.duelSel.bestOf===3?' · '+t('duel.bestOf3'):''}`;
    state.duelLobbyUI.msg.visible=false; state.duelLobbyUI.msg.challenge=null;
    state.duelLobbyUI.waiting={visible:true,roomCode:_fmtCode(state.duelRoom.roomId),modeLabel};
    state.duelLobbyUI.joinRowVisible=false;
    notifyStateChange();
    _startWaitPoll();
  } catch(e){
    state.duelLobbyUI.createBtn.disabled=false;
    state.duelLobbyUI.msg={visible:true,text:'❌ '+(e as Error).message,challenge:null};
    notifyStateChange();
  }
}

export async function joinRoom(rawCode: string): Promise<void> {
  const code=rawCode.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(code.length<6){state.duelLobbyUI.msg={visible:true,text:t('duel.enterCode'),challenge:null};notifyStateChange();return;}
  state.duelLobbyUI.joinBtn.disabled=true; notifyStateChange();
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error(t('duel.err.notFound'));
    if(room.p2)      throw new Error(t('duel.err.taken'));
    if(room.finished) throw new Error(t('duel.err.finished'));
    state.duelRoom.roomId=code; state.duelRoom.mySlot='p2'; state.duelRoom.isAsyncChallenge=false;
    state.duelRoom.roomCreatedAt=room.createdAt||Date.now();
    state.duelRoom.roomSeed=room.seed; state.duelRoom.roomCategory=room.category; state.duelRoom.roomDifficulty=room.difficulty; state.duelRoom.roomMaxHints=room.maxHints;
    state.duelRoom.roomLang=room.lang||'ua'; state.duelRoom.roomKnowLang=room.knowLang||'en';
    state.duelRoom.quizDeck=_buildDeck(room.seed,room.category,room.difficulty,room.mode,room.lang,room.knowLang);
    state.duelRoom.bestOf=room.bestOf||1; state.duelRoom.series={...room.series};
    await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}`,{
      p2:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:room.maxHints,powerups:{double:room.powerupsEnabled?1:0,skip:room.powerupsEnabled?1:0,freeze:room.powerupsEnabled?1:0}},
      started:true,
    });
    state.duelRoom.oppName=room.p1.name; state.duelRoom.oppAvatar=room.p1.avatar;
    notifyStateChange();
    _initGame(room.mode,room.maxHints,room.bestOf,room.series,room.powerupsEnabled);
  } catch(e){
    state.duelLobbyUI.joinBtn.disabled=false;
    state.duelLobbyUI.msg={visible:true,text:'❌ '+(e as Error).message,challenge:null};
    notifyStateChange();
  }
}

function _startWaitPoll(): void {
  _pollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${state.duelRoom.roomId}`) as RoomData|null;
      if(!room) return;
      if(room.started&&room.p2){
        clearInterval(_pollTimer!); _pollTimer=null;
        state.duelRoom.oppName=room.p2.name; state.duelRoom.oppAvatar=room.p2.avatar;
        notifyStateChange();
        _initGame(room.mode,room.maxHints,room.bestOf,room.series,room.powerupsEnabled);
      }
    } catch(e){}
  },2000);
}

function _initGame(mode:DuelMode,maxHints:number,bestOf:BestOf,series:SeriesData,powerupsEnabled=false): void {
  state.duelRoom.mode=mode; state.duelRoom.bestOf=bestOf; state.duelRoom.series={...series};
  if(_advanceTimer){clearTimeout(_advanceTimer);_advanceTimer=null;}
  state.duelRoom.quizIdx=0; state.duelRoom.myScore=0; state.duelRoom.myCorrect=0; state.duelRoom.myWrong=0; state.duelRoom.myFlags=[]; state.duelChatHistory=[]; state.duelRoom.answered=false; state.duelRoom.finished=false; state.duelRoom.myDone=false;
  state.duelRoom.hintsLeft = maxHints === 0 ? 999 : maxHints;
  state.duelRoom.powerupsEnabled = powerupsEnabled;
  state.duelRoom.myPowerups = powerupsEnabled ? {double:1,skip:1,freeze:1} : {double:0,skip:0,freeze:0};
  state.duelRoom.doubleActive = false;
  notifyStateChange();
  _runCountdown(()=>_startGameUI());
}

function _setupGameUI(): void {
  _stopResultPoll();
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  refreshDuelGameHeader();
  state.duelTempo.visible=state.duelRoom.mode==='tempo';
  notifyStateChange();
  // Power-ups
  _renderPowerups();
}

function _startGameUI(): void {
  state.duelRoom.oppScore=0; state.duelRoom.oppIdx=0; state.duelRoom.oppFlags=[];
  notifyStateChange();
  _setupGameUI();
  _showGame();
  _renderQuestion();
  _startOpponentPoll();
}

// Знімок даних для duel-powerups.tsx (item 32, Фаза 5).
interface PowerupsData {
  enabled:boolean; mode:DuelMode; myPowerups:Record<PowerupType,number>; answered:boolean;
}
export function _getPowerupsData(): PowerupsData {
  return { enabled:state.duelRoom.powerupsEnabled, mode:state.duelRoom.mode, myPowerups:{...state.duelRoom.myPowerups}, answered:state.duelRoom.answered };
}

// Клік по паверапу з duel-powerups.tsx — той самий guard, що раніше був
// у addEventListener (запобігає freeze поза tempo-режимом).
export function _onPowerupClick(type:PowerupType): void {
  if(type==='freeze' && state.duelRoom.mode!=='tempo'){
    _showMiniToast(t('duel.pu.freeze.unavail'));
    return;
  }
  _usePowerup(type);
}

function _renderPowerups(): void {
  refreshDuelPowerups();
}

async function _usePowerup(type: PowerupType): Promise<void> {
  if(state.duelRoom.myPowerups[type]<=0 || state.duelRoom.answered) return;
  state.duelRoom.myPowerups[type]--;
  notifyStateChange();
  _renderPowerups();
  const w = state.duelRoom.quizDeck[state.duelRoom.quizIdx];
  if(type==='double'){
    state.duelRoom.doubleActive = true;
    notifyStateChange();
    _showMiniToast(t('duel.toast.double'));
  } else if(type==='skip'){
    // Skip current question without penalty
    state.duelRoom.answered = true;
    if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
    state.duelQuestion.feedbackHtml=`<span style="color:var(--accent)">${t('duel.toast.skip')}</span>`;
    notifyStateChange();
    refreshDuelFeedback();
    _extendDeckOnSkip();
    state.duelRoom.myFlags.push('skip');
    state.duelRoom.quizIdx++;
    notifyStateChange();
    _renderMyProgressBar();
    await _pushScore();
    if(_advanceTimer) clearTimeout(_advanceTimer);
    _advanceTimer=setTimeout(()=>{ _advanceTimer=null; if(state.duelRoom.quizIdx<state.duelRoom.quizDeck.length) _renderQuestion(); else _finishMyGame(); }, 700);
  } else if(type==='freeze'){
    // Send freeze signal to opponent via Firebase
    try{ await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}`,{[`${state.duelRoom.mySlot==='p1'?'p2':'p1'}_freeze`]:Date.now()+5000}); }catch(e){}
    _showMiniToast(t('duel.toast.freeze'));
  }
  // Persist powerup state
  try{ await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}/${state.duelRoom.mySlot}`,{powerups:state.duelRoom.myPowerups}); }catch(e){}
}

function _showMiniToast(msg:string): void {
  const t = document.createElement('div');
  t.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:8px 16px;border-radius:20px;font-size:.82rem;font-weight:600;z-index:99999;pointer-events:none;';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2200);
}

// ── Animated dot progress bar (mine + opponent's) — rendered by
// duel-game-header.tsx via refreshDuelGameHeader() ────────────────
function _renderOppProgressBar(idx:number, flags?:(boolean|'skip'|'double')[]): void {
  state.duelRoom.oppIdx=idx; state.duelRoom.oppFlags=flags||[];
  notifyStateChange();
  refreshDuelGameHeader();
}
function _renderMyProgressBar(): void { refreshDuelGameHeader(); }

function _startOpponentPoll(): void {
  _pollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${state.duelRoom.roomId}`) as (RoomData & Record<string,unknown>)|null;
      if(!room) return;
      const opp=state.duelRoom.mySlot==='p1'?room.p2:room.p1;
      if(opp){
        state.duelRoom.oppScore=opp.score;
        notifyStateChange();
        _renderOppProgressBar(opp.idx, opp.flags);
        if(opp.reaction) _showReactionReceived(opp.reaction,opp.reactionTs);
      }
      // Check if I'm frozen (opponent used freeze on me)
      const myFreezeKey = `${state.duelRoom.mySlot}_freeze`;
      const freezeUntil = room[myFreezeKey] as number|undefined;
      if(freezeUntil && freezeUntil > Date.now() && !state.duelRoom.answered && state.duelRoom.mode==='tempo'){
        if(!_freezeTimer){
          const remaining = Math.ceil((freezeUntil-Date.now())/1000);
          state.duelQuestion.feedbackHtml=`<span style="color:#5dade2">${t('duel.frozen')} ${remaining}${_secUnit()}!</span>`; notifyStateChange(); refreshDuelFeedback();
          if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
          _freezeTimer=setTimeout(()=>{
            _freezeTimer=null; state.duelQuestion.feedbackHtml=''; notifyStateChange(); refreshDuelFeedback();
            _startTempoTimer(state.duelRoom.quizDeck[state.duelRoom.quizIdx]);
          },freezeUntil-Date.now());
        }
      }
      if(room.finished){ clearInterval(_pollTimer!); _pollTimer=null; _showFinish(room as RoomData); }
      else if(state.duelRoom.myDone && opp?.done){
        // Both players finished but a race left `finished` unset — settle it here.
        await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}`,{finished:true});
        clearInterval(_pollTimer!); _pollTimer=null;
        _showFinish({...room,finished:true} as RoomData);
      }
    } catch(e){}
  },1500);
}

// ── Reactions / chat ──────────────────────────────────────────
let _lastReactionTs = 0;
function _appendChatMsg(text:string, isMe:boolean, record=true): void {
  if(record){ state.duelChatHistory.push({text,isMe}); notifyStateChange(); _saveSession(); }
  refreshDuelChatLog();
}
function _showReactionReceived(text:string, ts?:number): void {
  if(ts!==undefined){
    if(ts<=_lastReactionTs) return;
    _lastReactionTs=ts;
  }
  _appendChatMsg(text,false);
}

function _stopResultPoll(): void {
  if(_resultPollTimer){clearInterval(_resultPollTimer);_resultPollTimer=null;}
}
function _startResultPoll(): void {
  _stopResultPoll();
  _resultPollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${state.duelRoom.roomId}`) as RoomData|null;
      if(!room) return;
      const opp=state.duelRoom.mySlot==='p1'?room.p2:room.p1;
      if(opp?.reaction) _showReactionReceived(opp.reaction,opp.reactionTs);
    } catch(e){}
  },1500);
}

export async function _sendChatMsg(text:string): Promise<void> {
  if(!text.trim()) return;
  const ts=Date.now();
  try { await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}/${state.duelRoom.mySlot}`,{reaction:text,reactionTs:ts}); } catch(e){}
  _lastReactionTs=ts;
  _appendChatMsg(text,true);
}

// ── Questions ─────────────────────────────────────────────────
function _renderQuestion(): void {
  if(state.duelRoom.quizIdx>=state.duelRoom.quizDeck.length){_finishMyGame();return;}
  const w=state.duelRoom.quizDeck[state.duelRoom.quizIdx];
  state.duelRoom.answered=false; state.duelRoom.answerStartMs=Date.now();
  state.duelQuestion.feedbackHtml=''; state.duelQuestion.speedText=''; notifyStateChange(); refreshDuelFeedback();
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  state.duelQuestion.chosenOption=null; state.duelQuestion.hintNote=null; state.duelQuestion.writeInputValue=''; state.duelQuestion.inputBorderColor=''; state.duelQuestion.showNextBtn=false; state.duelQuestion.waitingFinish=false;
  if(state.duelRoom.mode==='write') _renderWriteQ(w);
  else if(state.duelRoom.mode==='anagram') _renderAnagramQ(w);
  else if(state.duelRoom.mode==='letters') _renderLettersQ(w);
  else _renderChoiceQ(w);
  _renderPowerups();
  notifyStateChange();
  refreshDuelQuestion();
  if(state.duelRoom.mode==='tempo') _startTempoTimer(w);
}

function _renderChoiceQ(w:WordEntry): void {
  const lang = state.duelRoom.roomLang || 'ua';
  const knowLang = state.duelRoom.roomKnowLang || 'en';
  const isRev=state.duelRoom.mode==='reverse';
  const q=isRev?_wordInLang(w,lang):_wordInLang(w,knowLang);
  const ans=isRev?_wordInLang(w,knowLang):_wordInLang(w,lang);
  state.duelQuestion.qPrimary=q; state.duelQuestion.qSecondary=''; state.duelQuestion.qTertiary='';
  const wrongs:string[]=[]; const used=new Set([w[0].toLowerCase()]);
  const pool=_shuf(W.slice() as unknown as WordEntry[]);
  for(const pw of pool){
    if(wrongs.length>=NUM_OPTS-1) break;
    if(used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    const distractor = isRev ? _wordInLang(pw,knowLang) : _wordInLang(pw, lang);
    if (distractor) wrongs.push(distractor);
  }
  state.duelQuestion.choiceOptions=_shuf([ans,...wrongs]);
  state.duelQuestion.choiceAnswer=ans;
}

function _renderWriteQ(w:WordEntry): void {
  const lang = state.duelRoom.roomLang || 'ua';
  const knowLang = state.duelRoom.roomKnowLang || 'en';
  state.duelQuestion.qPrimary=_wordInLang(w,lang); state.duelQuestion.qSecondary=t('duel.writeHint'); state.duelQuestion.qTertiary='';
  state.duelQuestion.choiceOptions=[]; state.duelQuestion.choiceAnswer=_wordInLang(w,knowLang);
}

function _renderAnagramQ(w:WordEntry): void {
  const lang = state.duelRoom.roomLang || 'ua';
  const knowLang = state.duelRoom.roomKnowLang || 'en';
  const ans=_wordInLang(w,knowLang);
  state.duelQuestion.qPrimary=_shuffleLetters(ans); state.duelQuestion.qSecondary=_wordInLang(w,lang); state.duelQuestion.qTertiary=t('duel.anagramHint');
  state.duelQuestion.choiceOptions=[]; state.duelQuestion.choiceAnswer=ans;
}

function _renderLettersQ(w:WordEntry): void {
  state.duelQuestion.qPrimary=_shuffleLetters(w[0]); state.duelQuestion.qSecondary=t('duel.lettersHint'); state.duelQuestion.qTertiary='';
  state.duelQuestion.choiceOptions=[]; state.duelQuestion.choiceAnswer=w[0];
}

function _startTempoTimer(w:WordEntry): void {
  _tempoLeft=TEMPO_SEC;
  state.duelTempo.num=TEMPO_SEC;
  notifyStateChange();
  _tempoTimer=setInterval(()=>{
    _tempoLeft--;
    state.duelTempo.num=_tempoLeft;
    notifyStateChange();
    if(_tempoLeft<=0){
      clearInterval(_tempoTimer!); _tempoTimer=null;
      if(!state.duelRoom.answered){
        state.duelRoom.answered=true;
        state.duelQuestion.feedbackHtml=`<span style="color:#e74c3c">${t('duel.timeout')}</span>`;
        state.duelRoom.myWrong++; state.duelRoom.myFlags.push(false);
        state.duelRoom.quizIdx++;
        notifyStateChange();
        refreshDuelFeedback();
        _renderMyProgressBar(); _pushScore();
        refreshDuelQuestion();
        if(_advanceTimer) clearTimeout(_advanceTimer);
        _advanceTimer=setTimeout(()=>{ _advanceTimer=null; _renderQuestion(); },1000);
      }
    }
  },1000);
}

// ── Answers ───────────────────────────────────────────────────
export async function _onOptionClick(chosen:string):Promise<void>{
  if(state.duelRoom.answered) return;
  state.duelRoom.answered=true;
  state.duelQuestion.chosenOption=chosen;
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  const ms=Date.now()-state.duelRoom.answerStartMs;
  const correct=state.duelQuestion.choiceAnswer;
  const ok=chosen===correct;
  let feedbackHtml = '';
  if(ok){
    const wasDouble = state.duelRoom.doubleActive;
    const pts = wasDouble ? 2 : 1;
    state.duelRoom.myScore += pts; state.duelRoom.myCorrect++;
    state.duelRoom.myFlags.push(wasDouble?'double':true);
    if(wasDouble){ state.duelRoom.doubleActive=false; feedbackHtml=`<span style="color:#f39c12">${t('duel.doublePts')}</span>`; }
    else { feedbackHtml=`<span style="color:#27ae60">${t('duel.correct')}</span>`; }
  } else {
    state.duelRoom.myWrong++;
    state.duelRoom.myFlags.push(false);
    feedbackHtml=`<span style="color:#e74c3c">✗ ${correct}</span>`;
  }
  state.duelQuestion.feedbackHtml=feedbackHtml;
  state.duelQuestion.speedText=ok?`⚡ ${(ms/1000).toFixed(1)}${_secUnit()}`:'';
  notifyStateChange();
  refreshDuelFeedback();
  _renderPowerups();
  refreshDuelQuestion();
  state.duelRoom.quizIdx++; notifyStateChange();
  _renderMyProgressBar(); await _pushScore();
  if(_advanceTimer) clearTimeout(_advanceTimer);
  _advanceTimer=setTimeout(()=>{ _advanceTimer=null; if(state.duelRoom.quizIdx<state.duelRoom.quizDeck.length)_renderQuestion();else _finishMyGame();},ok?600:1200);
}

export function _onInputChange(val:string): void { state.duelQuestion.writeInputValue=val; notifyStateChange(); }

export function _submitWrite(): void {
  if(state.duelRoom.answered) return;
  const w=state.duelRoom.quizDeck[state.duelRoom.quizIdx];
  const knowLang = state.duelRoom.roomKnowLang || 'en';
  const val=state.duelQuestion.writeInputValue.trim().toLowerCase();
  const ans=(state.duelRoom.mode==='letters' ? w[0] : _wordInLang(w,knowLang)).toLowerCase();
  const ok = _checkWriteAnswer(state.duelRoom.mode, val, ans);
  const ms=Date.now()-state.duelRoom.answerStartMs;
  state.duelRoom.answered=true;
  state.duelQuestion.inputBorderColor=ok?'#27ae60':'#e74c3c';
  let feedbackHtml='';
  if(ok){
    const wasDouble=state.duelRoom.doubleActive;
    state.duelRoom.myScore += wasDouble?2:1; state.duelRoom.myCorrect++;
    state.duelRoom.myFlags.push(wasDouble?'double':true);
    if(wasDouble){ state.duelRoom.doubleActive=false; feedbackHtml=`<span style="color:#f39c12">${t('duel.doublePts')}</span>`; }
    else feedbackHtml=`<span style="color:#27ae60">${t('duel.correct')}</span>`;
  } else {
    state.duelRoom.myWrong++;
    state.duelRoom.myFlags.push(false);
    const correctDisplay = state.duelRoom.mode==='letters' ? w[0] : _wordInLang(w,knowLang);
    feedbackHtml=`<span style="color:#e74c3c">✗ ${correctDisplay}</span>`;
  }
  state.duelQuestion.feedbackHtml=feedbackHtml;
  state.duelQuestion.speedText=ok?`⚡ ${(ms/1000).toFixed(1)}${_secUnit()}`:'';
  state.duelQuestion.showNextBtn=true;
  notifyStateChange();
  refreshDuelFeedback();
  _renderPowerups();
  refreshDuelQuestion();
  state.duelRoom.quizIdx++; notifyStateChange();
  _renderMyProgressBar(); _pushScore();
}

export function _onNextClick(): void {
  state.duelQuestion.showNextBtn=false;
  notifyStateChange();
  if(state.duelRoom.quizIdx<state.duelRoom.quizDeck.length) _renderQuestion(); else _finishMyGame();
}

export function _useHint(): void {
  if(state.duelRoom.hintsLeft<=0||state.duelRoom.answered) return; // only before answering
  const w=state.duelRoom.quizDeck[state.duelRoom.quizIdx]; if(!w) return;
  if(state.duelRoom.hintsLeft<999) state.duelRoom.hintsLeft--;
  const h=state.duelQuestion.choiceAnswer || w[0];
  state.duelQuestion.hintNote=`💡 ${h.slice(0,Math.ceil(h.length/3))}...`;
  notifyStateChange();
  refreshDuelQuestion();
}

// Знімок даних для duel-question.tsx (item 32, Фаза 5).
interface QuestionOptionVM { text:string; num:number; cls:string; }
interface QuestionData {
  mode: DuelMode;
  quizIdx: number;
  waiting: boolean;
  myCorrect: number;
  myWrong: number;
  qPrimary: string;
  qSecondary: string;
  qTertiary: string;
  hintNote: string|null;
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
  const isInput=state.duelRoom.mode==='write'||state.duelRoom.mode==='anagram'||state.duelRoom.mode==='letters';
  return {
    mode:state.duelRoom.mode,
    quizIdx:state.duelRoom.quizIdx,
    waiting:state.duelQuestion.waitingFinish,
    myCorrect:state.duelRoom.myCorrect,
    myWrong:state.duelRoom.myWrong,
    qPrimary:state.duelQuestion.qPrimary,
    qSecondary:state.duelQuestion.qSecondary,
    qTertiary:state.duelQuestion.qTertiary,
    hintNote:state.duelQuestion.hintNote,
    options:state.duelQuestion.choiceOptions.map((opt,i)=>{
      let cls='quiz-option';
      if(state.duelRoom.answered){
        if(opt===state.duelQuestion.chosenOption) cls += (state.duelQuestion.chosenOption===state.duelQuestion.choiceAnswer?' correct':' wrong');
        else if(state.duelQuestion.chosenOption!==state.duelQuestion.choiceAnswer && opt===state.duelQuestion.choiceAnswer) cls+=' reveal';
      }
      return {text:opt,num:i+1,cls};
    }),
    answered:state.duelRoom.answered,
    showOptions: !isInput && !state.duelQuestion.waitingFinish,
    showInputRow: isInput && !state.duelQuestion.waitingFinish,
    inputBorderColor:state.duelQuestion.inputBorderColor,
    showHintBtn:state.duelRoom.mode==='write',
    hintBtnText:state.duelRoom.hintsLeft>=999?t('duel.hint.btn'):`💡 ×${state.duelRoom.hintsLeft}`,
    hintBtnDisabled:state.duelRoom.hintsLeft<=0,
    showNextBtn:state.duelQuestion.showNextBtn,
  };
}

async function _pushScore():Promise<void>{
  _saveSession();
  try{await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}/${state.duelRoom.mySlot}`,{score:state.duelRoom.myScore,idx:state.duelRoom.quizIdx,flags:state.duelRoom.myFlags});}catch(e){}
}

async function _finishMyGame():Promise<void>{
  try{
    await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}/${state.duelRoom.mySlot}`,{score:state.duelRoom.myScore,idx:state.duelRoom.quizDeck.length,flags:state.duelRoom.myFlags,done:true});
    state.duelRoom.myDone=true;
    notifyStateChange();
    const room=await _fbGet(`/duel_rooms/${state.duelRoom.roomId}`) as RoomData;
    const opp=state.duelRoom.mySlot==='p1'?room.p2:room.p1;
    if(opp?.done){
      await _fbPatch(`/duel_rooms/${state.duelRoom.roomId}`,{finished:true});
      clearInterval(_pollTimer!); _pollTimer=null;
      _showFinish({...room,[state.duelRoom.mySlot]:{...room[state.duelRoom.mySlot],score:state.duelRoom.myScore,done:true}} as RoomData);
    } else {
      state.duelQuestion.waitingFinish=true;
      state.duelQuestion.feedbackHtml=t('duel.waiting');
      notifyStateChange();
      refreshDuelFeedback();
      refreshDuelQuestion();
    }
  }catch(e){console.warn('[duel]',e);}
}

// Знімок даних для duel-result.tsx (Фаза 9/2).
type DuelResultOutcome = 'win' | 'tie' | 'loss';
type DuelResultData =
  | { kind: 'round'; outcome: DuelResultOutcome; round: number; myWins: number; oppWins: number; myName: string; oppName: string }
  | { kind: 'final'; outcome: DuelResultOutcome; modeIcon: string; modeLabel: string; catLabel: string;
      myAvatar: string; myScore: number; oppAvatar: string; oppScore: number; oppName: string;
      roomSize: number; historyText: string }
  | null;

export function _getResultData(): DuelResultData { return state.duelResult; }

function _showFinish(room:RoomData):void{
  if(state.duelRoom.finished) return;
  state.duelRoom.finished=true;
  notifyStateChange();
  // Tournament hook: if we're in a tournament match, report result and return to bracket
  const hook=_tournFinishHook;
  if(hook&&_tournId){
    _tournFinishHook=null;
    hook(room);
    setTimeout(()=>{ _showTournament(); const t=_tournData; if(t) _renderTournBracket(t); },800);
    return;
  }
  const me=room[state.duelRoom.mySlot] as PlayerData;
  const opp=(state.duelRoom.mySlot==='p1'?room.p2:room.p1) as PlayerData;
  const won=me.score>(opp?.score??0), tie=me.score===(opp?.score??0);
  const mInfo=DUEL_MODES.find(m=>m.id===room.mode)||DUEL_MODES[0];

  // Save history + rating
  _addHistory({date:`${new Date().toLocaleDateString(_dateLocale())} ${new Date().toLocaleTimeString(_dateLocale(),{hour:'2-digit',minute:'2-digit'})}`,mode:room.mode,myScore:me.score,oppScore:opp?.score??0,oppName:opp?.name||state.duelRoom.oppName||t('duel.opp'),won,category:room.category});
  _updateRating(won,tie);
  _clearSession();

  // Best of 3 logic
  if(room.bestOf===3){
    const newSeries={...room.series};
    if(won) { if(state.duelRoom.mySlot==='p1') newSeries.p1wins++; else newSeries.p2wins++; }
    else if(!tie) { if(state.duelRoom.mySlot==='p1') newSeries.p2wins++; else newSeries.p1wins++; }
    newSeries.round++;
    const myW=state.duelRoom.mySlot==='p1'?newSeries.p1wins:newSeries.p2wins;
    const oppW=state.duelRoom.mySlot==='p1'?newSeries.p2wins:newSeries.p1wins;
    state.duelRoom.series=newSeries;
    notifyStateChange();
    if(myW<2&&oppW<2&&newSeries.round<=3){
      // Series not decided — show next round
      const outcome:DuelResultOutcome = won?'win':tie?'tie':'loss';
      state.duelResult={kind:'round',outcome,round:newSeries.round-1,myWins:myW,oppWins:oppW,myName:_getMyName(),oppName:opp?.name||t('duel.opp')};
      _showResult(); return;
    }
  }

  const catLabel=room.category?` · ${room.category.split(' ')[0]}`:'';
  const outcome:DuelResultOutcome = won?'win':tie?'tie':'loss';
  state.duelResult={
    kind:'final', outcome,
    modeIcon:mInfo.icon, modeLabel:t('duel.mode.'+mInfo.id), catLabel,
    myAvatar:me.avatar||'🧑', myScore:me.score,
    oppAvatar:opp?.avatar||'🧑', oppScore:opp?.score??0, oppName:opp?.name||t('duel.opp'),
    roomSize:ROOM_SIZE,
    historyText:`${mInfo.icon} ${t('duel.mode.'+mInfo.id)}${catLabel} · ${new Date().toLocaleDateString(_dateLocale())}`,
  };
  _showResult();
  _startResultPoll();
}

// ── Result screen actions (duel-result.tsx, Фаза 9/2) ──────────
export function _onResultRematch(): void { _doRematch(); }
export function _onResultNewDuel(): void { _cancelRoom(); _showLobby(); renderDuel(); }
export function _onResultReaction(emoji:string): void { _sendChatMsg(emoji); }
export { REACTIONS };

export function _cancelRoom():void{
  _clearSession();
  _stopResultPoll();
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  if(_freezeTimer){clearTimeout(_freezeTimer);_freezeTimer=null;}
  if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
  if(state.duelRoom.roomId){
    if(state.duelRoom.isAsyncChallenge){
      fetch(`${DB_URL}/duel_async/${state.duelRoom.roomId}.json`,{method:'DELETE'}).catch(()=>{});
    } else if(state.duelRoom.mySlot==='p1') {
      fetch(`${DB_URL}/duel_rooms/${state.duelRoom.roomId}.json`,{method:'DELETE'}).catch(()=>{});
    }
    // Remove spectator entry if spectator
    if(_isSpectator&&_specId) fetch(`${DB_URL}/duel_rooms/${state.duelRoom.roomId}/spectators/${_specId}.json`,{method:'DELETE'}).catch(()=>{});
    state.duelRoom.roomId='';
  }
  _isSpectator=false;
  state.duelRoom.isAsyncChallenge=false;
  state.duelLobbyUI.waiting.visible=false;
  state.duelLobbyUI.joinRowVisible=true;
  state.duelLobbyUI.createBtn.disabled=false;
  state.duelLobbyUI.asyncBtn.disabled=false;
  state.duelLobbyUI.msg.visible=false; state.duelLobbyUI.msg.challenge=null;
  notifyStateChange();
}

// ── Reusable styled code input (replaces ugly browser prompt) ─
function _askCode(title: string, desc: string): Promise<string | null> {
  return new Promise(resolve => {
    const overlay = document.getElementById('code-input-overlay') as HTMLElement;
    const titleEl = document.getElementById('code-input-title')!;
    const descEl  = document.getElementById('code-input-desc')!;
    const inp     = document.getElementById('code-input-field') as HTMLInputElement;
    const okBtn   = document.getElementById('code-input-ok')!;
    const cancelBtn = document.getElementById('code-input-cancel')!;

    titleEl.textContent = title;
    descEl.textContent  = desc;
    inp.value = '';
    inp.placeholder = 'ABC-123';
    overlay.style.display = 'flex';
    setTimeout(() => inp.focus(), 80);

    function _close(val: string | null): void {
      overlay.style.display = 'none';
      okBtn.removeEventListener('click', _ok);
      cancelBtn.removeEventListener('click', _cancel);
      inp.removeEventListener('keydown', _key);
      resolve(val);
    }
    function _ok(): void {
      const v = inp.value.replace(/[-\s]/g, '').toUpperCase();
      if (v.length >= 6) _close(v); else inp.style.borderColor = '#e74c3c';
    }
    function _cancel(): void { _close(null); }
    function _key(e: KeyboardEvent): void {
      inp.style.borderColor = '';
      // Auto-format: insert dash after 3rd char
      let v = inp.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      if (v.length > 3) v = v.slice(0,3) + '-' + v.slice(3);
      inp.value = v.slice(0, 7);
      if (e.key === 'Enter') _ok();
      if (e.key === 'Escape') _cancel();
    }
    okBtn.addEventListener('click', _ok);
    cancelBtn.addEventListener('click', _cancel);
    inp.addEventListener('keydown', _key);
  });
}

// ── Spectator mode ────────────────────────────────────────────
export async function joinAsSpectator(): Promise<void> {
  const code = await _askCode(t('duel.spectate.title'), t('duel.spectate.desc'));
  if (!code) return;
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error(t('duel.err.notFound'));
    _isSpectator=true; _specId=_genCode(); state.duelRoom.roomId=code;
    notifyStateChange();
    await _fbPatch(`/duel_rooms/${code}/spectators/${_specId}`,{name:_getMyName(),avatar:_getMyAvatar()});
    _startSpectatorView(room);
  } catch(e){
    state.duelLobbyUI.msg={visible:true,text:'❌ '+(e as Error).message,challenge:null};
    notifyStateChange();
  }
}

function _startSpectatorView(room:RoomData): void {
  state.duelScreen='spectate'; notifyStateChange();
  _renderSpectatorView(room);
  _pollTimer=setInterval(async()=>{
    try{
      const r=await _fbGet(`/duel_rooms/${state.duelRoom.roomId}`) as RoomData|null;
      if(!r) return;
      _renderSpectatorView(r);
      if(r.finished){
        clearInterval(_pollTimer!); _pollTimer=null;
        // Clean up spectator entry in Firebase before leaving
        if(_specId) fetch(`${DB_URL}/duel_rooms/${state.duelRoom.roomId}/spectators/${_specId}.json`,{method:'DELETE'}).catch(()=>{});
        _specId=''; _isSpectator=false;
        setTimeout(()=>{ _showLobby(); renderDuel(); },3000);
      }
    }catch(e){}
  },1500);
}

function _renderSpectatorView(room:RoomData): void {
  state.duelSpecRoom = room;
  notifyStateChange();
  refreshDuelSpectator();
}

// Покинути спостереження (item 33, Фаза 5) — викликається з React-кнопки
// duel-spectator.tsx, а також зі smart close-кнопки нижче.
export function _leaveSpectator(): void {
  _cancelRoom();
  _showLobby();
  renderDuel();
}

// ── Async duel (challenge) ────────────────────────────────────
export async function createAsyncChallenge(): Promise<void> {
  state.duelLobbyUI.asyncBtn.disabled=true; notifyStateChange();
  try {
    // Clear any stale tournament state so _showFinish doesn't route to tournament path
    _tournId=''; _tournData=null;
    _tournFinishHook=null;
    const code=_genCode();
    const seed=Date.now();
    const challenge: AsyncDuel = {
      seed, mode:state.duelSel.mode, category:state.duelSel.category, difficulty:state.duelSel.difficulty,
      createdAt:Date.now(), expiresAt:Date.now()+86_400_000, // 24 hours
      powerupsEnabled:state.duelSel.powerupsEnabled, maxHints:state.duelSel.maxHints, bestOf:state.duelSel.bestOf,
      lang:state.duelSel.lang, knowLang:state.duelSel.knowLang,
      challenger:{ name:_getMyName(), avatar:_getMyAvatar(), score:0, done:false },
      finished:false,
    };
    await _fbSet(`/duel_async/${code}`, challenge);
    // Play immediately as challenger
    state.duelRoom.roomId=code; state.duelRoom.mySlot='p1'; state.duelRoom.isAsyncChallenge=true; state.duelRoom.roomCreatedAt=challenge.createdAt;
    state.duelRoom.roomSeed=seed; state.duelRoom.roomCategory=state.duelSel.category; state.duelRoom.roomDifficulty=state.duelSel.difficulty; state.duelRoom.roomMaxHints=state.duelSel.maxHints;
    state.duelRoom.roomLang=state.duelSel.lang; state.duelRoom.roomKnowLang=state.duelSel.knowLang;
    state.duelRoom.quizDeck=_buildDeck(seed,state.duelSel.category,state.duelSel.difficulty,state.duelSel.mode,state.duelSel.lang,state.duelSel.knowLang);
    // Show code to share
    state.duelLobbyUI.waiting={visible:true,roomCode:_fmtCode(code),modeLabel:`📬 ${t('duel.mode.'+state.duelSel.mode)} · ${t('duel.async.24h')}`};
    state.duelLobbyUI.joinRowVisible=false;
    notifyStateChange();
    // Start playing immediately
    if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
    _asyncStartTimer=setTimeout(()=>{
      _asyncStartTimer=null;
      state.duelLobbyUI.waiting.visible=false;
      notifyStateChange();
      _initGame(state.duelSel.mode, state.duelSel.maxHints, 1, {p1wins:0,p2wins:0,round:1}, state.duelSel.powerupsEnabled);
    }, 2000);
  } catch(e){
    state.duelLobbyUI.asyncBtn.disabled=false;
    state.duelLobbyUI.msg={visible:true,text:'❌ '+(e as Error).message,challenge:null};
    notifyStateChange();
  }
}

export async function joinAsyncChallenge(): Promise<void> {
  const code = await _askCode(t('duel.async.reply.title'), t('duel.async.reply.desc'));
  if (!code) return;
  try {
    const challenge=await _fbGet(`/duel_async/${code}`) as AsyncDuel|null;
    if(!challenge) throw new Error(t('duel.err.chal.notFound'));
    if(challenge.finished) throw new Error(t('duel.err.chal.finished'));
    if(Date.now()>challenge.expiresAt) throw new Error(t('duel.err.chal.expired'));
    if(challenge.opponent) throw new Error(t('duel.err.chal.taken'));
    state.duelRoom.roomId=code; state.duelRoom.mySlot='p2'; state.duelRoom.isAsyncChallenge=true; state.duelRoom.roomCreatedAt=challenge.createdAt||Date.now();
    state.duelRoom.roomSeed=challenge.seed; state.duelRoom.roomCategory=challenge.category; state.duelRoom.roomDifficulty=challenge.difficulty; state.duelRoom.roomMaxHints=challenge.maxHints??3;
    state.duelRoom.roomLang=challenge.lang||'ua'; state.duelRoom.roomKnowLang=challenge.knowLang||'en';
    state.duelRoom.quizDeck=_buildDeck(challenge.seed,challenge.category,challenge.difficulty,challenge.mode,challenge.lang,challenge.knowLang);
    state.duelRoom.oppName=challenge.challenger.name; state.duelRoom.oppAvatar=challenge.challenger.avatar;
    notifyStateChange();
    const mInfo=DUEL_MODES.find(m=>m.id===challenge.mode);
    state.duelLobbyUI.msg={visible:true,text:'',challenge:{avatar:challenge.challenger.avatar,name:challenge.challenger.name,modeIcon:mInfo?.icon??'',modeLabel:mInfo?t('duel.mode.'+mInfo.id):''}};
    notifyStateChange();
    // Let the challenger know who accepted, so resume cards can show "vs <opponent>"
    _fbPatch(`/duel_async/${code}`,{opponent:{name:_getMyName(),avatar:_getMyAvatar(),score:0,done:false}}).catch(()=>{});
    if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
    _asyncStartTimer=setTimeout(()=>{ _asyncStartTimer=null; state.duelLobbyUI.msg.visible=false; notifyStateChange(); _initGame(challenge.mode,state.duelRoom.roomMaxHints,challenge.bestOf??1,{p1wins:0,p2wins:0,round:1},challenge.powerupsEnabled??false); }, 1800);
  } catch(e){
    state.duelLobbyUI.msg={visible:true,text:'❌ '+(e as Error).message,challenge:null};
    notifyStateChange();
  }
}

function _doRematch():void{
  if(state.duelRoom.mySlot==='p1'){
    // p1 creates a new room — show waiting screen
    _showLobby(); renderDuel();
    _cancelRoom(); createRoom();
  } else {
    // p2 gets new code to join
    _showLobby(); renderDuel();
    state.duelLobbyUI.msg={visible:true,text:t('duel.rematch.ask'),challenge:null};
    notifyStateChange();
  }
}

// ── Session resume ────────────────────────────────────────────
// Знімок даних для duel-resume.tsx (item 33, Фаза 5).
export interface ResumeSessionVM {
  roomId: string;
  modeIcon: string;
  modeLabel: string;
  score: number;
  roomSize: number;
  oppText: string|null;
  expiresAt: number;
}
let _resumeValid: {sess:DuelSession; room:RoomData}[] = [];
export function _getResumeSessions(): ResumeSessionVM[] { return state.duelResumeSessions; }

async function _tryResumeSession():Promise<void>{
  const sessions=_loadSessions();
  if(!sessions.length){ _resumeValid=[]; state.duelResumeSessions=[]; notifyStateChange(); refreshDuelResume(); return; }

  const valid: {sess:DuelSession; room:RoomData}[] = [];
  for(const sess of sessions){
    try{
      const room=await _fbGet(`/duel_rooms/${sess.roomId}`) as RoomData|null;
      if(!room||room.finished){_clearSession(sess.roomId);continue;}
      const expiresAt=(sess.createdAt||room.createdAt||Date.now())+86_400_000;
      if(Date.now()>=expiresAt){_clearSession(sess.roomId);continue;}
      valid.push({sess,room});
    }catch(e){_clearSession(sess.roomId);}
  }
  if(!valid.length){ _resumeValid=[]; state.duelResumeSessions=[]; notifyStateChange(); refreshDuelResume(); return; }

  // Show the duel with the least time left to finish first.
  valid.sort((a,b)=>{
    const expA=(a.sess.createdAt||a.room.createdAt||Date.now())+86_400_000;
    const expB=(b.sess.createdAt||b.room.createdAt||Date.now())+86_400_000;
    return expA-expB;
  });

  _resumeValid=valid;
  state.duelResumeSessions=valid.map(({sess,room})=>{
    const opp=sess.slot==='p1'?room.p2:room.p1;
    const oppName=opp?.name||sess.oppName;
    const oppAvatar=opp?.avatar||sess.oppAvatar||'';
    const mInfo=DUEL_MODES.find(m=>m.id===sess.mode)||DUEL_MODES[0];
    const expiresAt=(sess.createdAt||room.createdAt||Date.now())+86_400_000;
    return {
      roomId:sess.roomId,
      modeIcon:mInfo.icon,
      modeLabel:t('duel.mode.'+mInfo.id),
      score:sess.score,
      roomSize:ROOM_SIZE,
      oppText: oppName ? `${t('duel.resume.opp')} ${oppAvatar} ${oppName}` : null,
      expiresAt,
    };
  });
  notifyStateChange();
  refreshDuelResume();
}

export function _onResumeContinue(roomId:string): void {
  const found=_resumeValid.find(v=>v.sess.roomId===roomId);
  if(!found) return;
  const {sess,room}=found;
  _resumeValid=[]; state.duelResumeSessions=[]; notifyStateChange(); refreshDuelResume();
  state.duelRoom.roomId=sess.roomId; state.duelRoom.mySlot=sess.slot; state.duelRoom.mode=sess.mode;
  state.duelRoom.roomCreatedAt=sess.createdAt||room.createdAt||Date.now();
  const seed=sess.seed??room.seed, category=sess.category??room.category, difficulty=sess.difficulty??room.difficulty;
  const maxHints=sess.maxHints??room.maxHints, bestOf=sess.bestOf??room.bestOf;
  state.duelRoom.roomSeed=seed; state.duelRoom.roomCategory=category; state.duelRoom.roomDifficulty=difficulty; state.duelRoom.roomMaxHints=maxHints;
  state.duelRoom.roomLang=room.lang||'ua'; state.duelRoom.roomKnowLang=room.knowLang||'en';
  state.duelRoom.quizDeck=_buildDeck(seed,category,difficulty,sess.mode,room.lang,room.knowLang);
  const oppRoom=room[sess.slot==='p1'?'p2':'p1'];
  state.duelRoom.oppName=oppRoom?.name||sess.oppName||t('duel.opp');
  state.duelRoom.oppAvatar=oppRoom?.avatar||sess.oppAvatar||'🧑';
  notifyStateChange();
  const savedIdx=sess.idx,savedScore=sess.score;
  // Restore saved state directly, bypassing _initGame's reset+countdown
  // (which would re-zero score/progress and wipe chat a few seconds later).
  const series=room.series||{p1wins:0,p2wins:0,round:1};
  state.duelRoom.bestOf=bestOf||1; state.duelRoom.series={...series};
  if(_advanceTimer){clearTimeout(_advanceTimer);_advanceTimer=null;}
  state.duelRoom.quizIdx=savedIdx; state.duelRoom.myScore=savedScore;
  state.duelRoom.myCorrect=sess.correct??0; state.duelRoom.myWrong=sess.wrong??0; state.duelRoom.myFlags=sess.flags??[];
  state.duelChatHistory=sess.chat??[]; notifyStateChange();
  state.duelRoom.answered=false; state.duelRoom.finished=false;
  state.duelRoom.hintsLeft = maxHints===0 ? 999 : maxHints;
  state.duelRoom.powerupsEnabled = sess.powerupsEnabled ?? !!room.powerupsEnabled;
  const savedPowerups = sess.myPowerups ?? room[sess.slot]?.powerups;
  state.duelRoom.myPowerups = savedPowerups ? {...savedPowerups} : (state.duelRoom.powerupsEnabled ? {double:1,skip:1,freeze:1} : {double:0,skip:0,freeze:0});
  state.duelRoom.doubleActive = false;
  const savedDeckLen=sess.deckLen??ROOM_SIZE;
  while(state.duelRoom.quizDeck.length<savedDeckLen) _extendDeckOnSkip();
  notifyStateChange();
  _setupGameUI();
  _renderMyProgressBar();
  _showGame(false);
  refreshDuelChatLog();
  _renderQuestion();
  _startOpponentPoll();
}

export function _onResumeDiscard(roomId:string): void {
  _clearSession(roomId);
  _tryResumeSession();
}

// ── Tournament ────────────────────────────────────────────────

interface TournMatch { p1:number; p2:number; p1score:number; p2score:number; winner:number; done:boolean; roomId:string; }
interface Tournament {
  code:string; size:4|8; mode:DuelMode; category:string; difficulty:Difficulty;
  lang?:string; knowLang?:string;
  players:Record<string,{name:string;avatar:string}>; // slot→player
  bracket:TournMatch[][]; // rounds[matches]
  currentRound:number; currentMatch:number;
  started:boolean; finished:boolean; champion:string;
  createdAt:number;
}

let _tournId    = '';
let _tournSlot  = -1;
let _tournData: Tournament | null = null;
let _tournPoll: ReturnType<typeof setInterval> | null = null;
let _tournFinishHook: ((r:RoomData)=>void) | null = null;

function _showTournament() { state.duelScreen='tournament'; notifyStateChange(); }

// Знімок даних для duel-tournament.tsx (item 33, Фаза 5).
interface TournSlotVM { filled:boolean; avatar:string; name:string; label:string; }
interface TournPlayerVM { name:string; avatar:string; won:boolean; }
export interface TournMatchVM { p1:TournPlayerVM; p2:TournPlayerVM; done:boolean; active:boolean; scoreText:string|null; }
export interface TournRoundVM { name:string; matches:TournMatchVM[]; }
type TournMatchArea =
  | { kind:'none' }
  | { kind:'champion' }
  | { kind:'play' }
  | { kind:'rejoin' }
  | { kind:'waiting'; oppName:string };
interface TournamentData {
  phase: 'waiting'|'bracket';
  code: string;
  modeLabel: string;
  slots: TournSlotVM[];
  joined: number;
  size: number;
  showStartBtn: boolean;
  startBtnLabel: string;
  finished: boolean;
  champion: string;
  statusLabel: string;
  statusColor: string;
  rounds: TournRoundVM[];
  matchArea: TournMatchArea;
}
let _tournPlayCtx: {tourn:Tournament; round:number; matchIdx:number} | null = null;
let _tournRejoinRoomId: string|null = null;
export function _getTournamentData(): TournamentData|null { return state.duelTournView; }
export function _onTournStart(): void { startTournament(); }
export function _onTournCancel(): void { _cancelTournament(); }
export function _onTournPlay(): void { if(_tournPlayCtx) _startTournMatch(_tournPlayCtx.tourn,_tournPlayCtx.round,_tournPlayCtx.matchIdx); }
export function _onTournRejoin(): void { if(_tournRejoinRoomId) _joinTournMatch(_tournRejoinRoomId); }

function _buildBracket(size:4|8): TournMatch[][] {
  // Single-elimination bracket
  // Round 1: size/2 matches, then halve each round
  const rounds: TournMatch[][] = [];
  let prev = Array.from({length:size},(_,i)=>i); // slot indices
  while(prev.length > 1) {
    const matches: TournMatch[] = [];
    for(let i=0;i<prev.length;i+=2)
      matches.push({p1:prev[i],p2:prev[i+1],p1score:0,p2score:0,winner:-1,done:false,roomId:''});
    rounds.push(matches);
    prev = matches.map((_,i)=>-(i+1)); // placeholder winners
  }
  return rounds;
}

function _tournRoundName(round:number, totalRounds:number): string {
  const left = totalRounds - round;
  if(left===1) return t('duel.round.final');
  if(left===2) return t('duel.round.semi');
  if(left===3) return t('duel.round.quarter');
  return `${t('duel.round.n')} ${round+1}`;
}

export async function createTournament(size:4|8): Promise<void> {
  const tournBtn = size===4 ? state.duelLobbyUI.tournBtn4 : state.duelLobbyUI.tournBtn8;
  tournBtn.disabled=true; notifyStateChange();
  try {
    _tournId=_genCode();
    const tourn: Tournament = {
      code:_tournId, size, mode:state.duelSel.mode, category:state.duelSel.category, difficulty:state.duelSel.difficulty,
      lang:state.duelSel.lang, knowLang:state.duelSel.knowLang,
      players:{0:{name:_getMyName(),avatar:_getMyAvatar()}},
      bracket:_buildBracket(size), currentRound:0, currentMatch:0,
      started:false, finished:false, champion:'', createdAt:Date.now(),
    };
    await _fbSet(`/tournaments/${_tournId}`, tourn);
    _tournSlot=0; _tournData=tourn;
    _showTournament();
    _renderTournWaiting(tourn);
    _startTournWaitPoll();
  } catch(e){
    tournBtn.disabled=false; tournBtn.errorLabel='❌ '+(e as Error).message;
    notifyStateChange();
  }
}

export async function joinTournament(): Promise<void> {
  const code = await _askCode(t('duel.tourn.join.title'), t('duel.tourn.join.desc'));
  if(!code) return;
  try {
    const tourn=await _fbGet(`/tournaments/${code}`) as Tournament|null;
    if(!tourn) throw new Error(t('duel.tourn.err.notFound'));
    if(tourn.started) throw new Error(t('duel.tourn.err.started'));
    if(tourn.finished) throw new Error(t('duel.tourn.err.finished'));
    const slots=Object.keys(tourn.players).map(Number);
    if(slots.length>=tourn.size) throw new Error(t('duel.tourn.err.noSlot'));
    // Find first free slot
    const mySlot=Array.from({length:tourn.size},(_,i)=>i).find(i=>!tourn.players[i]);
    if(mySlot===undefined) throw new Error(t('duel.tourn.err.noSlot'));
    // Re-check the slot is still free right before claiming it, to narrow the race
    // window where two players pick the same slot at nearly the same time.
    const fresh=await _fbGet(`/tournaments/${code}/players/${mySlot}`);
    if(fresh) throw new Error(t('duel.tourn.err.noSlot'));
    await _fbPatch(`/tournaments/${code}/players/${mySlot}`,{name:_getMyName(),avatar:_getMyAvatar()});
    _tournId=code; _tournSlot=mySlot; _tournData=tourn;
    _showTournament();
    // Reload updated tourn
    const updated=await _fbGet(`/tournaments/${code}`) as Tournament;
    _tournData=updated;
    _renderTournWaiting(updated);
    _startTournWaitPoll();
  } catch(e){
    alert('❌ '+(e as Error).message);
  }
}

function _renderTournWaiting(tourn:Tournament): void {
  const mInfo=DUEL_MODES.find(m=>m.id===tourn.mode)||DUEL_MODES[0];
  const slots:TournSlotVM[]=Array.from({length:tourn.size},(_,i)=>{
    const p=tourn.players[i];
    return p
      ? {filled:true, avatar:p.avatar, name:p.name, label:''}
      : {filled:false, avatar:'', name:'', label:`${t('duel.tourn.slot')} ${i+1}`};
  });
  const joined=Object.keys(tourn.players).length;
  state.duelTournView={
    phase:'waiting',
    code:_fmtCode(_tournId),
    modeLabel:`${mInfo.icon} ${t('duel.mode.'+tourn.mode)} · ${tourn.size} ${t('duel.tourn.players')}`,
    slots, joined, size:tourn.size,
    showStartBtn:_tournSlot===0&&joined===tourn.size,
    startBtnLabel:`${t('duel.tourn.start')} (${joined}/${tourn.size})`,
    finished:false, champion:'', statusLabel:'', statusColor:'',
    rounds:[], matchArea:{kind:'none'},
  };
  notifyStateChange();
  refreshDuelTournament();
}

function _startTournWaitPoll(): void {
  _tournPoll=setInterval(async()=>{
    try{
      const tourn=await _fbGet(`/tournaments/${_tournId}`) as Tournament|null;
      if(!tourn) return;
      _tournData=tourn;
      if(!tourn.started) { _renderTournWaiting(tourn); return; }
      clearInterval(_tournPoll!); _tournPoll=null;
      _renderTournBracket(tourn);
      _startTournMatchPoll();
    }catch(e){}
  },2000);
}

function _startTournMatchPoll(): void {
  _tournPoll=setInterval(async()=>{
    try{
      const tourn=await _fbGet(`/tournaments/${_tournId}`) as Tournament|null;
      if(!tourn) return;
      _tournData=tourn;
      _renderTournBracket(tourn);
      if(tourn.finished){ clearInterval(_tournPoll!); _tournPoll=null; }
    }catch(e){}
  },2000);
}

async function startTournament(): Promise<void> {
  if(_tournSlot!==0||!_tournData) return;
  await _fbPatch(`/tournaments/${_tournId}`,{started:true});
  _renderTournBracket(_tournData);
}

function _renderTournBracket(tourn:Tournament): void {
  const totalRounds=tourn.bracket.length;
  let statusLabel:string, statusColor:string;
  if(tourn.finished){
    statusLabel=`🏆 ${t('duel.tourn.champion')} ${tourn.champion}!`;
    statusColor='#f39c12';
  } else {
    statusLabel=`${_tournRoundName(tourn.currentRound,totalRounds)} · ${t('duel.tourn.match')} ${tourn.currentMatch+1}`;
    statusColor='var(--text3)';
  }
  const rounds:TournRoundVM[]=tourn.bracket.map((round,ri)=>({
    name:_tournRoundName(ri,totalRounds),
    matches:round.map((m,mi)=>{
      const p1=tourn.players[m.p1]??{name:'?',avatar:'?'};
      const p2=tourn.players[m.p2]??{name:'?',avatar:'?'};
      return {
        p1:{name:p1.name,avatar:p1.avatar,won:m.winner===m.p1},
        p2:{name:p2.name,avatar:p2.avatar,won:m.winner===m.p2},
        done:m.done,
        active:ri===tourn.currentRound&&mi===tourn.currentMatch&&!m.done,
        scoreText:m.done?`${m.p1score}:${m.p2score}`:null,
      };
    }),
  }));
  // Match area — show play button if it's my turn
  let matchArea:TournMatchArea;
  _tournPlayCtx=null; _tournRejoinRoomId=null;
  if(tourn.finished){
    matchArea={kind:'champion'};
  } else {
    const curMatch=tourn.bracket[tourn.currentRound]?.[tourn.currentMatch];
    if(!curMatch||curMatch.done){
      matchArea={kind:'none'};
    } else {
      const myTurn=curMatch.p1===_tournSlot||curMatch.p2===_tournSlot;
      if(myTurn&&!curMatch.roomId){
        matchArea={kind:'play'};
        _tournPlayCtx={tourn,round:tourn.currentRound,matchIdx:tourn.currentMatch};
      } else if(myTurn&&curMatch.roomId){
        matchArea={kind:'rejoin'};
        _tournRejoinRoomId=curMatch.roomId;
      } else {
        const opp=curMatch.p1===_tournSlot?tourn.players[curMatch.p2]:tourn.players[curMatch.p1];
        matchArea={kind:'waiting',oppName:opp?.name||'?'};
      }
    }
  }
  state.duelTournView={
    phase:'bracket', code:'', modeLabel:'', slots:[], joined:0, size:tourn.size,
    showStartBtn:false, startBtnLabel:'',
    finished:tourn.finished, champion:tourn.champion, statusLabel, statusColor, rounds, matchArea,
  };
  notifyStateChange();
  refreshDuelTournament();
}

async function _startTournMatch(tourn:Tournament, round:number, matchIdx:number): Promise<void> {
  const match=tourn.bracket[round][matchIdx];
  // Create a duel room for this match
  state.duelRoom.roomId=_genCode(); state.duelRoom.mySlot=match.p1===_tournSlot?'p1':'p2';
  const seed=Date.now();
  const room:RoomData={
    seed, mode:tourn.mode, category:tourn.category, difficulty:tourn.difficulty,
    bestOf:1, maxHints:3, powerupsEnabled:false,
    lang:tourn.lang, knowLang:tourn.knowLang,
    createdAt:Date.now(), started:false, finished:false,
    series:{p1wins:0,p2wins:0,round:1},
    p1:{name:tourn.players[match.p1].name,avatar:tourn.players[match.p1].avatar,score:0,idx:0,done:false,hintsLeft:3,powerups:{double:0,skip:0,freeze:0}},
    p2:null,
  };
  await _fbSet(`/duel_rooms/${state.duelRoom.roomId}`,room);
  // Save room ID to tournament match
  const matchPath=`/tournaments/${_tournId}/bracket/${round}/${matchIdx}`;
  await _fbPatch(matchPath,{roomId:state.duelRoom.roomId});
  state.duelRoom.oppName=tourn.players[match.p1===_tournSlot?match.p2:match.p1].name;
  state.duelRoom.oppAvatar=tourn.players[match.p1===_tournSlot?match.p2:match.p1].avatar;
  state.duelRoom.roomLang=tourn.lang||'ua'; state.duelRoom.roomKnowLang=tourn.knowLang||'en';
  state.duelRoom.quizDeck=_buildDeck(seed,tourn.category,tourn.difficulty,tourn.mode,tourn.lang,tourn.knowLang);
  notifyStateChange();
  _initGame(tourn.mode,3,1,{p1wins:0,p2wins:0,round:1},false);
  // After game finishes, save result to tournament
  _tournFinishHook=async(roomData:RoomData)=>{
    const me=roomData[state.duelRoom.mySlot] as PlayerData;
    const opp=(roomData[state.duelRoom.mySlot==='p1'?'p2':'p1']) as PlayerData;
    const myScore=me.score, oppScore=opp?.score??0;
    const winner=myScore>oppScore?match.p1===_tournSlot?match.p1:match.p2:match.p1===_tournSlot?match.p2:match.p1;
    await _fbPatch(`/tournaments/${_tournId}/bracket/${round}/${matchIdx}`,{
      p1score:match.p1===_tournSlot?myScore:oppScore,
      p2score:match.p1===_tournSlot?oppScore:myScore,
      winner, done:true,
    });
    // Advance tournament
    await _advanceTournament();
  };
}

async function _joinTournMatch(roomId:string): Promise<void> {
  try{
    const room=await _fbGet(`/duel_rooms/${roomId}`) as RoomData|null;
    if(!room) return;
    state.duelRoom.roomId=roomId; state.duelRoom.mySlot='p2';
    await _fbPatch(`/duel_rooms/${roomId}`,{
      p2:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:3,powerups:{double:0,skip:0,freeze:0}},
      started:true,
    });
    state.duelRoom.roomLang=room.lang||'ua'; state.duelRoom.roomKnowLang=room.knowLang||'en';
    state.duelRoom.quizDeck=_buildDeck(room.seed,room.category,room.difficulty,room.mode,room.lang,room.knowLang);
    state.duelRoom.oppName=room.p1.name; state.duelRoom.oppAvatar=room.p1.avatar;
    notifyStateChange();
    _initGame(room.mode,3,1,{p1wins:0,p2wins:0,round:1},false);
  }catch(e){}
}

// Guard: prevents this client from calling _advanceTournament concurrently with itself.
// Both players' clients may still call this independently, but they compute the same
// deterministic bracket update from the same room data, so duplicate writes are harmless.
let _advanceLock = false;

async function _advanceTournament(): Promise<void> {
  if(_advanceLock) return;
  _advanceLock = true;
  try {
    const tourn=await _fbGet(`/tournaments/${_tournId}`) as Tournament;
    const {currentRound,currentMatch,bracket,players} = tourn;
    const round=bracket[currentRound];
    const allDone=round.every(m=>m.done);
    if(!allDone){
      await _fbPatch(`/tournaments/${_tournId}`,{currentMatch:currentMatch+1});
      return;
    }
    const nextRound=bracket[currentRound+1];
    if(!nextRound){
      const finalMatch=round[0];
      const champ=players[finalMatch.winner];
      await _fbPatch(`/tournaments/${_tournId}`,{finished:true,champion:`${champ.avatar} ${champ.name}`});
      return;
    }
    // Fill next round — use direct path so Firebase applies nested update correctly
    const winners=round.map(m=>m.winner);
    const updatedNext=nextRound.map((m,i)=>({...m,p1:winners[i*2]??m.p1,p2:winners[i*2+1]??m.p2}));
    // Use separate PATCH calls: one for metadata, one for the specific bracket round via URL path
    await _fbPatch(`/tournaments/${_tournId}`,{currentRound:currentRound+1,currentMatch:0});
    await _fbSet(`/tournaments/${_tournId}/bracket/${currentRound+1}`,updatedNext);
  } finally {
    _advanceLock = false;
  }
}

function _cancelTournament(): void {
  if(_tournPoll){clearInterval(_tournPoll);_tournPoll=null;}
  if(_tournId&&_tournSlot===0) fetch(`${DB_URL}/tournaments/${_tournId}.json`,{method:'DELETE'}).catch(()=>{});
  _tournId=''; _tournData=null; _tournSlot=-1;
  _showLobby(); renderDuel();
}

// ── renderDuel (full page) ────────────────────────────────────
export function renderDuel():void{
  notifyStateChange();
  _tryResumeSession();
}

// ── Styled confirm dialog (replaces browser confirm()) ────────
function _showConfirm(title: string, message: string, okLabel: string): Promise<boolean> {
  return new Promise(resolve => {
    const overlay = document.getElementById('confirm-overlay') as HTMLElement|null;
    if (!overlay) { resolve(window.confirm(message)); return; }
    const titleEl   = document.getElementById('confirm-title');
    const msgEl     = document.getElementById('confirm-message');
    const okBtn     = document.getElementById('confirm-ok')    as HTMLButtonElement|null;
    const cancelBtn = document.getElementById('confirm-cancel') as HTMLButtonElement|null;
    if (!okBtn || !cancelBtn) { resolve(window.confirm(message)); return; }
    if (titleEl) titleEl.textContent  = title;
    if (msgEl)   msgEl.textContent    = message;
    okBtn.textContent    = okLabel;
    overlay.style.display = 'flex';
    const ovl = overlay!, ok = okBtn!, cancel = cancelBtn!;
    function _close(val: boolean): void {
      ovl.style.display = 'none';
      ok.removeEventListener('click', _ok);
      cancel.removeEventListener('click', _cancel);
      resolve(val);
    }
    function _ok():     void { _close(true); }
    function _cancel(): void { _close(false); }
    ok.addEventListener('click',     _ok);
    cancel.addEventListener('click', _cancel);
    // Escape = cancel
    const _key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { _cancel(); document.removeEventListener('keydown', _key); }
      if (e.key === 'Enter')  { _ok();    document.removeEventListener('keydown', _key); }
    };
    document.addEventListener('keydown', _key);
  });
}

// ── Module-level side effects (keyboard shortcuts, sidebar nav,
// smart close button) — wired up via useEffect in app-root.tsx ──
export function DuelInit(): ReactElement | null {
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if(state.duelScreen!=='game') return;
      if(state.duelRoom.mode!=='write'&&!state.duelRoom.answered&&['1','2','3','4'].includes(e.key)){
        e.preventDefault();
        const opt=state.duelQuestion.choiceOptions[parseInt(e.key)-1];
        if(opt) _onOptionClick(opt);
      }
    };
    document.addEventListener('keydown', onKeydown);

    const sbDuel = document.getElementById('sb-duel');
    const onSbDuelClick = () => { _openPage('duel'); renderDuel(); };
    sbDuel?.addEventListener('click', onSbDuelClick);

    // ── Smart duel close button ────────────────────────────────
    // If game/tournament/spectator is active → return to lobby; else → close page
    const closeBtn = document.getElementById('duel-page-close');
    const onCloseClick = async () => {
      const gameVisible      = state.duelScreen === 'game';
      const tournVisible     = state.duelScreen === 'tournament';
      const spectVisible     = state.duelScreen === 'spectate';
      const countdownVisible = state.duelScreen === 'countdown';
      const waitingVisible   = state.duelLobbyUI.waiting.visible;

      // 24h async duel: leaving mid-question (or during the pre-game countdown)
      // never forfeits — the room stays alive, the session is saved, and the
      // player can resume the same question later from the lobby's resume banner.
      if ((gameVisible && !state.duelRoom.finished) || countdownVisible) {
        if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
        if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
        if(_freezeTimer){clearTimeout(_freezeTimer);_freezeTimer=null;}
        if(_advanceTimer){clearTimeout(_advanceTimer);_advanceTimer=null;}
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
        _leaveSpectator();
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
