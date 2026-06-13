// English Words App — js/features/duel.ts
// ⚔️ Full-featured Duel: leaderboard + live multiplayer quiz

import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { WORD_CATEGORIES } from '../../data/categories.js';
import { getCefrLevel, CEFR_META } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import LZString from '../../lib/lzstring.js';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import type { WordEntry } from '../../src/types.js';
import { t, getLang } from './i18n.ts';
import { notifyStateChange } from '../../src/store.ts';
import { DICT } from '../modes/word-letters.tsx';
import { refreshDuelGameHeader } from './duel-game-header.tsx';
import { refreshDuelSpectator } from './duel-spectator.tsx';
import { refreshDuelPowerups } from './duel-powerups.tsx';
import { refreshDuelFeedback } from './duel-feedback.tsx';
import { refreshDuelChatLog } from './duel-chat-log.tsx';
import { refreshDuelQuestion } from './duel-question.tsx';

const DICT_SET = new Set(DICT);

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
  if (mode === 'letters') return val.length >= 3 && _canForm(val, _letterCounts(ans)) && DICT_SET.has(val);
  return val === ans || (ans.length > 3 && lev(val, ans) <= 1);
}

// ── Constants ─────────────────────────────────────────────────
const DB_URL    = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
export const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const ROOM_SIZE = 10;
const NUM_OPTS = 4;
const TEMPO_SEC = 4;
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
let _roomId    = '';
let _mySlot:   'p1'|'p2' = 'p1';
let _pollTimer: ReturnType<typeof setInterval> | null = null;
let _resultPollTimer: ReturnType<typeof setInterval> | null = null;
let _quizDeck: WordEntry[] = [];
let _quizIdx   = 0;
let _myScore   = 0;
let _myCorrect = 0;
let _myWrong   = 0;
let _myFlags: (boolean|'skip'|'double')[] = [];
let _answered  = false;
let _mode:     DuelMode   = 'quiz';
let _tempoTimer: ReturnType<typeof setInterval> | null = null;
let _advanceTimer: ReturnType<typeof setTimeout> | null = null;
let _tempoLeft = TEMPO_SEC;
let _finished  = false;
let _myDone    = false;
let _hintsLeft = 3;
let _series:   SeriesData = { p1wins:0, p2wins:0, round:1 };
let _bestOf:   BestOf     = 1;
let _answerStartMs = 0;
// Power-ups
let _myPowerups: Record<PowerupType,number> = { double:1, skip:1, freeze:1 };
let _doubleActive = false;
let _powerupsEnabled = false;
// Spectator
let _isSpectator = false;
let _specId = '';
let _specRoom: RoomData|null = null;
export function _getSpecRoom(): RoomData|null { return _specRoom; }
// Async challenge (24h)
let _isAsyncChallenge = false;
let _asyncStartTimer: ReturnType<typeof setTimeout> | null = null;
// Freeze timer
let _freezeTimer: ReturnType<typeof setTimeout> | null = null;
const _resumeCountdownTimers = new Map<string, ReturnType<typeof setInterval>>();
let _oppName   = '';
let _oppAvatar = '';
let _oppScore  = 0;
let _oppIdx    = 0;
let _oppFlags: (boolean|'skip'|'double')[] = [];
// Feedback / speed indicator under the question (item 32, Фаза 5)
let _feedbackHtml = '';
let _speedText    = '';
export function _getFeedbackData(): { html:string; speed:string } { return { html:_feedbackHtml, speed:_speedText }; }
// Question/answer/timer core (item 32, Фаза 5) — стан для duel-question.tsx
let _qPrimary = '';
let _qSecondary = '';
let _qTertiary = '';
let _choiceOptions: string[] = [];
let _choiceAnswer = '';
let _chosenOption: string|null = null;
let _hintNote: string|null = null;
let _writeInputValue = '';
let _inputBorderColor = '';
let _waitingFinish = false;
let _showNextBtn = false;
let _roomCreatedAt = 0;
// Room/deck params kept for session persistence & resume (esp. async duels,
// whose /duel_rooms/ doc may only contain partial data pushed by _pushScore)
let _roomSeed = 0;
let _roomCategory = '';
let _roomDifficulty: Difficulty = 'mixed';
let _roomMaxHints = 3;

// ── Session persistence ───────────────────────────────────────
const SESSION_KEY = 'ew_duel_sessions';
const SESSION_KEY_OLD = 'ew_duel_session';
let _chatHistory: {text:string;isMe:boolean}[] = [];
export function _getChatHistory(): {text:string;isMe:boolean}[] { return _chatHistory; }
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
  if(!_roomId) return;
  const list=_loadSessions().filter(s=>s.roomId!==_roomId);
  list.push({roomId:_roomId,slot:_mySlot,mode:_mode,idx:_quizIdx,score:_myScore,correct:_myCorrect,wrong:_myWrong,flags:_myFlags,chat:_chatHistory,deckLen:_quizDeck.length,createdAt:_roomCreatedAt,
    seed:_roomSeed,category:_roomCategory,difficulty:_roomDifficulty,maxHints:_roomMaxHints,bestOf:_bestOf,
    powerupsEnabled:_powerupsEnabled,myPowerups:{..._myPowerups},oppName:_oppName,oppAvatar:_oppAvatar});
  _saveSessions(list);
}
function _clearSession(roomId?: string): void {
  const id=roomId||_roomId; if(!id) return;
  _saveSessions(_loadSessions().filter(s=>s.roomId!==id));
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

export function _buildDeck(seed:number, category:string, difficulty:Difficulty, mode?:DuelMode): WordEntry[] {
  const rnd = _rng(seed);
  const scramble = mode==='anagram'||mode==='letters';
  let pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
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
  const scramble = _mode==='anagram'||_mode==='letters';
  const pool = scramble ? _SCRAMBLE_POOL : (W as unknown as WordEntry[]);
  const used = new Set(_quizDeck.map(w=>w[0].toLowerCase()));
  const candidates = pool.filter(w=>!used.has(w[0].toLowerCase()));
  const src = candidates.length ? candidates : pool;
  _quizDeck.push(src[Math.floor(Math.random()*src.length)]);
}

function _getMyName():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.name||t('duel.player');}catch(e){return t('duel.player');} }
function _getMyAvatar():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.avatar||'🧑';}catch(e){return '🧑';} }

// Знімок даних для duel-game-header.tsx (item 32, Фаза 5): React читає
// поточний стан гри, polling/state-machine логіка лишається тут.
export interface GameHeaderData {
  myAvatar:string; myScore:number; myIdx:number; myTotal:number; myFlags:(boolean|'skip'|'double')[];
  oppAvatar:string; oppName:string; oppScore:number; oppIdx:number; oppFlags:(boolean|'skip'|'double')[]; oppTotal:number;
  mode:DuelMode; progressText:string;
  bestOf:BestOf; seriesMe:number; seriesOpp:number;
  roomCode:string|null;
}
export function _getGameHeaderData(): GameHeaderData {
  return {
    myAvatar: _getMyAvatar(),
    myScore: _myScore,
    myIdx: _quizIdx,
    myTotal: _quizDeck.length,
    myFlags: _myFlags,
    oppAvatar: _oppAvatar||'🧑',
    oppName: _oppName||t('duel.opp'),
    oppScore: _oppScore,
    oppIdx: _oppIdx,
    oppFlags: _oppFlags,
    oppTotal: ROOM_SIZE,
    mode: _mode,
    progressText: `${_quizIdx+1} / ${_quizDeck.length}`,
    bestOf: _bestOf,
    seriesMe: _mySlot==='p1'?_series.p1wins:_series.p2wins,
    seriesOpp: _mySlot==='p1'?_series.p2wins:_series.p1wins,
    roomCode: (_roomId && _mySlot==='p1') ? _roomId : null,
  };
}

// ── UI refs ───────────────────────────────────────────────────
const $ = (id:string) => document.getElementById(id)!;
const elLobby     = () => $('duel-lobby')     as HTMLElement;
const elCountdown = () => $('duel-countdown') as HTMLElement;
const elGame      = () => $('duel-game')      as HTMLElement;
const elResult    = () => $('duel-result')    as HTMLElement;
const elMsg       = () => $('duel-msg');
const elTimerBar  = () => $('dm-timer-bar') as HTMLElement;
const elTimerNum  = () => $('dm-timer-num');

const elChatPanel = () => $('duel-chat-panel') as HTMLElement;

function _showLobby()    {
  elLobby().style.display=''; elCountdown().style.display='none'; elGame().style.display='none'; elResult().style.display='none';
  elChatPanel().style.display='none';
  // Always reset waiting state so the create button is never stuck
  const waiting=$('duel-waiting') as HTMLElement|null; if(waiting) waiting.style.display='none';
  const joinRow=$('duel-join-row') as HTMLElement|null; if(joinRow) joinRow.style.display='';
  const btn=$('duel-create-btn') as HTMLButtonElement|null; if(btn){ btn.disabled=false; btn.textContent=t('duel.create'); }
  const asyncBtn=$('duel-async-btn') as HTMLButtonElement|null; if(asyncBtn){ asyncBtn.disabled=false; asyncBtn.textContent=t('duel.sendChallenge'); }
}
function _showCountdown(){ elLobby().style.display='none'; elCountdown().style.display=''; elGame().style.display='none'; elResult().style.display='none'; elChatPanel().style.display='none'; }
function _showGame(clearChat=true) { elLobby().style.display='none'; elCountdown().style.display='none'; elGame().style.display=''; elResult().style.display='none'; elChatPanel().style.display=''; if(clearChat){ _chatHistory=[]; refreshDuelChatLog(); _lastReactionTs=0; } }
// Keep the chat panel visible/usable on the finish screen so players can keep chatting.
function _showResult()   { elLobby().style.display='none'; elCountdown().style.display='none'; elGame().style.display='none'; elResult().style.display=''; elChatPanel().style.display=''; }

// ── Lobby pickers ─────────────────────────────────────────────
let _selMode:       DuelMode   = 'quiz';
let _selCategory:   string     = '';
let _selDifficulty: Difficulty = 'mixed'; // default: всі рівні
let _selBestOf:      BestOf     = 1;
let _selMaxHints:    number     = 3;
let _selPowerups:    boolean    = true;

// Геттери/сеттери для React-пікерів (item 29, Фаза 5) — createRoom/joinRoom/
// тощо й далі читають ці модульні змінні напряму, тому React-компоненти
// синхронізують свій локальний useState через ці функції.
export function _getSelMode(): DuelMode { return _selMode; }
export function _setSelMode(m: DuelMode): void { _selMode = m; }
export function _getSelCategory(): string { return _selCategory; }
export function _setSelCategory(c: string): void { _selCategory = c; }
export function _getSelDifficulty(): Difficulty { return _selDifficulty; }
export function _setSelDifficulty(d: Difficulty): void { _selDifficulty = d; }
export function _getSelBestOf(): BestOf { return _selBestOf; }
export function _setSelBestOf(b: BestOf): void { _selBestOf = b; }
export function _getSelMaxHints(): number { return _selMaxHints; }
export function _setSelMaxHints(h: number): void { _selMaxHints = h; }
export function _getSelPowerups(): boolean { return _selPowerups; }
export function _setSelPowerups(p: boolean): void { _selPowerups = p; }

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
function _runCountdown(cb: ()=>void): void {
  _showCountdown();
  const numEl = $('dc-number');
  const oppEl = $('dc-opp-row');
  if (oppEl) oppEl.textContent = `${_oppAvatar} ${_oppName} vs ${_getMyAvatar()} ${_getMyName()}`;
  // Show room code so p1 still has time to share it during countdown
  const codeHint = $('dc-room-code-hint') as HTMLElement|null;
  const codeVal  = $('dc-room-code-val')  as HTMLElement|null;
  if (codeHint && codeVal) {
    if (_roomId && _mySlot === 'p1') { codeVal.textContent = _roomId; codeHint.style.display = ''; }
    else { codeHint.style.display = 'none'; }
  }
  let n = 3;
  numEl.textContent = '3';
  const _timer = setInterval(()=>{
    n--;
    if (n > 0) {
      numEl.textContent = String(n);
      numEl.style.transform = 'scale(1.4)';
      setTimeout(()=>{ numEl.style.transform=''; }, 150);
    } else if (n === 0) {
      numEl.textContent = '⚡';
    } else {
      clearInterval(_timer); cb();
    }
  }, 1000);
}

// ── Create / Join ─────────────────────────────────────────────
async function createRoom(): Promise<void> {
  const btn = $('duel-create-btn') as HTMLButtonElement;
  btn.disabled=true; btn.textContent=t('duel.creating');
  try {
    _roomId=_genCode(); _mySlot='p1'; _isAsyncChallenge=false;
    const seed=Date.now();
    const room: RoomData = {
      seed, mode:_selMode, category:_selCategory, difficulty:_selDifficulty,
      bestOf:_selBestOf, maxHints:_selMaxHints, powerupsEnabled:_selPowerups,
      createdAt:Date.now(), started:false, finished:false,
      series:{p1wins:0,p2wins:0,round:1},
      p1:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:_selMaxHints,powerups:{double:_selPowerups?1:0,skip:_selPowerups?1:0,freeze:_selPowerups?1:0}},
      p2:null,
    };
    await _fbSet(`/duel_rooms/${_roomId}`,room);
    _roomCreatedAt=room.createdAt;
    _roomSeed=seed; _roomCategory=_selCategory; _roomDifficulty=_selDifficulty; _roomMaxHints=_selMaxHints;
    _quizDeck=_buildDeck(seed,_selCategory,_selDifficulty,_selMode);
    const codeEl=$('duel-room-code'); if(codeEl) codeEl.textContent=_fmtCode(_roomId);
    const modeEl=$('duel-waiting-mode');
    const mInfo=DUEL_MODES.find(m=>m.id===_selMode)!;
    const catLabel=_selCategory?` · ${_selCategory.split(' ')[0]}`:'';
    const diff=DIFFICULTIES.find(d=>d.id===_selDifficulty); const diffLabel=diff?(diff.id==='mixed'?t('duel.diff.mixed'):diff.label):'';
    if(modeEl) modeEl.textContent=`${mInfo.icon} ${t('duel.mode.'+mInfo.id)}${catLabel} · ${diffLabel}${_selBestOf===3?' · '+t('duel.bestOf3'):''}`;
    elMsg().style.display='none';
    $('duel-waiting').style.display='block';
    $('duel-join-row').style.display='none';
    _startWaitPoll();
  } catch(e){
    btn.disabled=false; btn.textContent=t('duel.create');
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinRoom(): Promise<void> {
  const inp=$('duel-join-input') as HTMLInputElement;
  const btn=$('duel-join-btn') as HTMLButtonElement;
  const code=inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(code.length<6){elMsg().textContent=t('duel.enterCode');elMsg().style.display='block';return;}
  btn.disabled=true; btn.textContent=t('duel.connecting');
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error(t('duel.err.notFound'));
    if(room.p2)      throw new Error(t('duel.err.taken'));
    if(room.finished) throw new Error(t('duel.err.finished'));
    _roomId=code; _mySlot='p2'; _isAsyncChallenge=false;
    _roomCreatedAt=room.createdAt||Date.now();
    _roomSeed=room.seed; _roomCategory=room.category; _roomDifficulty=room.difficulty; _roomMaxHints=room.maxHints;
    _quizDeck=_buildDeck(room.seed,room.category,room.difficulty,room.mode);
    _bestOf=room.bestOf||1; _series={...room.series};
    await _fbPatch(`/duel_rooms/${_roomId}`,{
      p2:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:room.maxHints,powerups:{double:room.powerupsEnabled?1:0,skip:room.powerupsEnabled?1:0,freeze:room.powerupsEnabled?1:0}},
      started:true,
    });
    _oppName=room.p1.name; _oppAvatar=room.p1.avatar;
    _initGame(room.mode,room.maxHints,room.bestOf,room.series,room.powerupsEnabled);
  } catch(e){
    btn.disabled=false; btn.textContent=t('duel.join');
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _startWaitPoll(): void {
  _pollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${_roomId}`) as RoomData|null;
      if(!room) return;
      if(room.started&&room.p2){
        clearInterval(_pollTimer!); _pollTimer=null;
        _oppName=room.p2.name; _oppAvatar=room.p2.avatar;
        _initGame(room.mode,room.maxHints,room.bestOf,room.series,room.powerupsEnabled);
      }
    } catch(e){}
  },2000);
}

function _initGame(mode:DuelMode,maxHints:number,bestOf:BestOf,series:SeriesData,powerupsEnabled=false): void {
  _mode=mode; _bestOf=bestOf; _series={...series};
  if(_advanceTimer){clearTimeout(_advanceTimer);_advanceTimer=null;}
  _quizIdx=0; _myScore=0; _myCorrect=0; _myWrong=0; _myFlags=[]; _chatHistory=[]; _answered=false; _finished=false; _myDone=false;
  _hintsLeft = maxHints === 0 ? 999 : maxHints;
  _powerupsEnabled = powerupsEnabled;
  _myPowerups = powerupsEnabled ? {double:1,skip:1,freeze:1} : {double:0,skip:0,freeze:0};
  _doubleActive = false;
  _runCountdown(()=>_startGameUI());
}

function _setupGameUI(): void {
  _stopResultPoll();
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  refreshDuelGameHeader();
  const tr=$('dm-timer-row') as HTMLElement|null; if(tr) tr.style.display=_mode==='tempo'?'':'none';
  // Power-ups
  _renderPowerups();
}

function _startGameUI(): void {
  _oppScore=0; _oppIdx=0; _oppFlags=[];
  _setupGameUI();
  _showGame();
  _renderQuestion();
  _startOpponentPoll();
}

// Знімок даних для duel-powerups.tsx (item 32, Фаза 5).
export interface PowerupsData {
  enabled:boolean; mode:DuelMode; myPowerups:Record<PowerupType,number>; answered:boolean;
}
export function _getPowerupsData(): PowerupsData {
  return { enabled:_powerupsEnabled, mode:_mode, myPowerups:{..._myPowerups}, answered:_answered };
}

// Клік по паверапу з duel-powerups.tsx — той самий guard, що раніше був
// у addEventListener (запобігає freeze поза tempo-режимом).
export function _onPowerupClick(type:PowerupType): void {
  if(type==='freeze' && _mode!=='tempo'){
    _showMiniToast(t('duel.pu.freeze.unavail'));
    return;
  }
  _usePowerup(type);
}

function _renderPowerups(): void {
  refreshDuelPowerups();
}

async function _usePowerup(type: PowerupType): Promise<void> {
  if(_myPowerups[type]<=0 || _answered) return;
  _myPowerups[type]--;
  _renderPowerups();
  const w = _quizDeck[_quizIdx];
  if(type==='double'){
    _doubleActive = true;
    _showMiniToast(t('duel.toast.double'));
  } else if(type==='skip'){
    // Skip current question without penalty
    _answered = true;
    if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
    _feedbackHtml=`<span style="color:var(--accent)">${t('duel.toast.skip')}</span>`; refreshDuelFeedback();
    _extendDeckOnSkip();
    _myFlags.push('skip');
    _quizIdx++;
    _renderMyProgressBar();
    await _pushScore();
    if(_advanceTimer) clearTimeout(_advanceTimer);
    _advanceTimer=setTimeout(()=>{ _advanceTimer=null; if(_quizIdx<_quizDeck.length) _renderQuestion(); else _finishMyGame(); }, 700);
  } else if(type==='freeze'){
    // Send freeze signal to opponent via Firebase
    try{ await _fbPatch(`/duel_rooms/${_roomId}`,{[`${_mySlot==='p1'?'p2':'p1'}_freeze`]:Date.now()+5000}); }catch(e){}
    _showMiniToast(t('duel.toast.freeze'));
  }
  // Persist powerup state
  try{ await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{powerups:_myPowerups}); }catch(e){}
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
  _oppIdx=idx; _oppFlags=flags||[];
  refreshDuelGameHeader();
}
function _renderMyProgressBar(): void { refreshDuelGameHeader(); }

function _startOpponentPoll(): void {
  _pollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${_roomId}`) as (RoomData & Record<string,unknown>)|null;
      if(!room) return;
      const opp=_mySlot==='p1'?room.p2:room.p1;
      if(opp){
        _oppScore=opp.score;
        _renderOppProgressBar(opp.idx, opp.flags);
        if(opp.reaction) _showReactionReceived(opp.reaction,opp.reactionTs);
      }
      // Check if I'm frozen (opponent used freeze on me)
      const myFreezeKey = `${_mySlot}_freeze`;
      const freezeUntil = room[myFreezeKey] as number|undefined;
      if(freezeUntil && freezeUntil > Date.now() && !_answered && _mode==='tempo'){
        if(!_freezeTimer){
          const remaining = Math.ceil((freezeUntil-Date.now())/1000);
          _feedbackHtml=`<span style="color:#5dade2">${t('duel.frozen')} ${remaining}${_secUnit()}!</span>`; refreshDuelFeedback();
          if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
          _freezeTimer=setTimeout(()=>{
            _freezeTimer=null; _feedbackHtml=''; refreshDuelFeedback();
            _startTempoTimer(_quizDeck[_quizIdx]);
          },freezeUntil-Date.now());
        }
      }
      if(room.finished){ clearInterval(_pollTimer!); _pollTimer=null; _showFinish(room as RoomData); }
      else if(_myDone && opp?.done){
        // Both players finished but a race left `finished` unset — settle it here.
        await _fbPatch(`/duel_rooms/${_roomId}`,{finished:true});
        clearInterval(_pollTimer!); _pollTimer=null;
        _showFinish({...room,finished:true} as RoomData);
      }
    } catch(e){}
  },1500);
}

// ── Reactions / chat ──────────────────────────────────────────
let _lastReactionTs = 0;
function _appendChatMsg(text:string, isMe:boolean, record=true): void {
  if(record){ _chatHistory.push({text,isMe}); _saveSession(); }
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
      const room=await _fbGet(`/duel_rooms/${_roomId}`) as RoomData|null;
      if(!room) return;
      const opp=_mySlot==='p1'?room.p2:room.p1;
      if(opp?.reaction) _showReactionReceived(opp.reaction,opp.reactionTs);
    } catch(e){}
  },1500);
}

async function _sendChatMsg(text:string): Promise<void> {
  if(!text.trim()) return;
  const ts=Date.now();
  try { await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{reaction:text,reactionTs:ts}); } catch(e){}
  _lastReactionTs=ts;
  _appendChatMsg(text,true);
}

// ── Questions ─────────────────────────────────────────────────
function _renderQuestion(): void {
  if(_quizIdx>=_quizDeck.length){_finishMyGame();return;}
  const w=_quizDeck[_quizIdx];
  _answered=false; _answerStartMs=Date.now();
  _feedbackHtml=''; _speedText=''; refreshDuelFeedback();
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  _chosenOption=null; _hintNote=null; _writeInputValue=''; _inputBorderColor=''; _showNextBtn=false; _waitingFinish=false;
  if(_mode==='write') _renderWriteQ(w);
  else if(_mode==='anagram') _renderAnagramQ(w);
  else if(_mode==='letters') _renderLettersQ(w);
  else _renderChoiceQ(w);
  _renderPowerups();
  refreshDuelQuestion();
  if(_mode==='tempo') _startTempoTimer(w);
}

function _renderChoiceQ(w:WordEntry): void {
  const isRev=_mode==='reverse';
  const q=isRev?w[1]:w[0], ans=isRev?w[0]:w[1];
  _qPrimary=q; _qSecondary=''; _qTertiary='';
  const wrongs:string[]=[]; const used=new Set([w[0].toLowerCase()]);
  const pool=_shuf(W.slice() as unknown as WordEntry[]);
  for(const pw of pool){if(wrongs.length>=NUM_OPTS-1)break;if(used.has(pw[0].toLowerCase()))continue;used.add(pw[0].toLowerCase());wrongs.push(isRev?pw[0]:pw[1]);}
  _choiceOptions=_shuf([ans,...wrongs]);
  _choiceAnswer=ans;
}

function _renderWriteQ(w:WordEntry): void {
  _qPrimary=w[1]; _qSecondary=t('duel.writeHint'); _qTertiary='';
  _choiceOptions=[]; _choiceAnswer='';
}

function _renderAnagramQ(w:WordEntry): void {
  _qPrimary=_shuffleLetters(w[0]); _qSecondary=w[1]; _qTertiary=t('duel.anagramHint');
  _choiceOptions=[]; _choiceAnswer='';
}

function _renderLettersQ(w:WordEntry): void {
  _qPrimary=_shuffleLetters(w[0]); _qSecondary=t('duel.lettersHint'); _qTertiary='';
  _choiceOptions=[]; _choiceAnswer='';
}

function _startTempoTimer(w:WordEntry): void {
  _tempoLeft=TEMPO_SEC;
  const bar=elTimerBar(),num=elTimerNum();
  if(bar){bar.style.transition='none';bar.style.width='100%';}
  if(num) num.textContent=String(TEMPO_SEC);
  setTimeout(()=>{if(bar){bar.style.transition=`width ${TEMPO_SEC}s linear`;bar.style.width='0%';}},50);
  _tempoTimer=setInterval(()=>{
    _tempoLeft--;
    if(num) num.textContent=String(_tempoLeft);
    if(_tempoLeft<=0){
      clearInterval(_tempoTimer!); _tempoTimer=null;
      if(!_answered){
        _answered=true;
        _feedbackHtml=`<span style="color:#e74c3c">${t('duel.timeout')}</span>`; refreshDuelFeedback();
        _myWrong++; _myFlags.push(false);
        _quizIdx++; _renderMyProgressBar(); _pushScore();
        refreshDuelQuestion();
        if(_advanceTimer) clearTimeout(_advanceTimer);
        _advanceTimer=setTimeout(()=>{ _advanceTimer=null; _renderQuestion(); },1000);
      }
    }
  },1000);
}

// ── Answers ───────────────────────────────────────────────────
export async function _onOptionClick(chosen:string):Promise<void>{
  if(_answered) return;
  _answered=true;
  _chosenOption=chosen;
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  const ms=Date.now()-_answerStartMs;
  const correct=_choiceAnswer;
  const ok=chosen===correct;
  let feedbackHtml = '';
  if(ok){
    const wasDouble = _doubleActive;
    const pts = wasDouble ? 2 : 1;
    _myScore += pts; _myCorrect++;
    _myFlags.push(wasDouble?'double':true);
    if(wasDouble){ _doubleActive=false; feedbackHtml=`<span style="color:#f39c12">${t('duel.doublePts')}</span>`; }
    else { feedbackHtml=`<span style="color:#27ae60">${t('duel.correct')}</span>`; }
  } else {
    _myWrong++;
    _myFlags.push(false);
    feedbackHtml=`<span style="color:#e74c3c">✗ ${correct}</span>`;
  }
  _feedbackHtml=feedbackHtml;
  _speedText=ok?`⚡ ${(ms/1000).toFixed(1)}${_secUnit()}`:'';
  refreshDuelFeedback();
  _renderPowerups();
  refreshDuelQuestion();
  _quizIdx++; _renderMyProgressBar(); await _pushScore();
  if(_advanceTimer) clearTimeout(_advanceTimer);
  _advanceTimer=setTimeout(()=>{ _advanceTimer=null; if(_quizIdx<_quizDeck.length)_renderQuestion();else _finishMyGame();},ok?600:1200);
}

export function _onInputChange(val:string): void { _writeInputValue=val; }

export function _submitWrite(): void {
  if(_answered) return;
  const w=_quizDeck[_quizIdx];
  const val=_writeInputValue.trim().toLowerCase(), ans=w[0].toLowerCase();
  const ok = _checkWriteAnswer(_mode, val, ans);
  const ms=Date.now()-_answerStartMs;
  _answered=true;
  _inputBorderColor=ok?'#27ae60':'#e74c3c';
  let feedbackHtml='';
  if(ok){
    const wasDouble=_doubleActive;
    _myScore += wasDouble?2:1; _myCorrect++;
    _myFlags.push(wasDouble?'double':true);
    if(wasDouble){ _doubleActive=false; feedbackHtml=`<span style="color:#f39c12">${t('duel.doublePts')}</span>`; }
    else feedbackHtml=`<span style="color:#27ae60">${t('duel.correct')}</span>`;
  } else {
    _myWrong++;
    _myFlags.push(false);
    feedbackHtml=`<span style="color:#e74c3c">✗ ${w[0]}</span>`;
  }
  _feedbackHtml=feedbackHtml;
  _speedText=ok?`⚡ ${(ms/1000).toFixed(1)}${_secUnit()}`:'';
  refreshDuelFeedback();
  _renderPowerups();
  _showNextBtn=true;
  refreshDuelQuestion();
  _quizIdx++; _renderMyProgressBar(); _pushScore();
}

export function _onNextClick(): void {
  _showNextBtn=false;
  if(_quizIdx<_quizDeck.length) _renderQuestion(); else _finishMyGame();
}

export function _useHint(): void {
  if(_hintsLeft<=0||_answered) return; // only before answering
  const w=_quizDeck[_quizIdx]; if(!w) return;
  if(_hintsLeft<999) _hintsLeft--;
  const h=w[0];
  _hintNote=`💡 ${h.slice(0,Math.ceil(h.length/3))}...`;
  refreshDuelQuestion();
}

// Знімок даних для duel-question.tsx (item 32, Фаза 5).
export interface QuestionOptionVM { text:string; num:number; cls:string; }
export interface QuestionData {
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
  const isInput=_mode==='write'||_mode==='anagram'||_mode==='letters';
  return {
    mode:_mode,
    quizIdx:_quizIdx,
    waiting:_waitingFinish,
    myCorrect:_myCorrect,
    myWrong:_myWrong,
    qPrimary:_qPrimary,
    qSecondary:_qSecondary,
    qTertiary:_qTertiary,
    hintNote:_hintNote,
    options:_choiceOptions.map((opt,i)=>{
      let cls='quiz-option';
      if(_answered){
        if(opt===_chosenOption) cls += (_chosenOption===_choiceAnswer?' correct':' wrong');
        else if(_chosenOption!==_choiceAnswer && opt===_choiceAnswer) cls+=' reveal';
      }
      return {text:opt,num:i+1,cls};
    }),
    answered:_answered,
    showOptions: !isInput && !_waitingFinish,
    showInputRow: isInput && !_waitingFinish,
    inputBorderColor:_inputBorderColor,
    showHintBtn:_mode==='write',
    hintBtnText:_hintsLeft>=999?t('duel.hint.btn'):`💡 ×${_hintsLeft}`,
    hintBtnDisabled:_hintsLeft<=0,
    showNextBtn:_showNextBtn,
  };
}

async function _pushScore():Promise<void>{
  _saveSession();
  try{await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{score:_myScore,idx:_quizIdx,flags:_myFlags});}catch(e){}
}

async function _finishMyGame():Promise<void>{
  try{
    await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{score:_myScore,idx:_quizDeck.length,flags:_myFlags,done:true});
    _myDone=true;
    const room=await _fbGet(`/duel_rooms/${_roomId}`) as RoomData;
    const opp=_mySlot==='p1'?room.p2:room.p1;
    if(opp?.done){
      await _fbPatch(`/duel_rooms/${_roomId}`,{finished:true});
      clearInterval(_pollTimer!); _pollTimer=null;
      _showFinish({...room,[_mySlot]:{...room[_mySlot],score:_myScore,done:true}} as RoomData);
    } else {
      _waitingFinish=true;
      _feedbackHtml=t('duel.waiting'); refreshDuelFeedback();
      refreshDuelQuestion();
    }
  }catch(e){console.warn('[duel]',e);}
}

function _showFinish(room:RoomData):void{
  if(_finished) return;
  _finished=true;
  // Tournament hook: if we're in a tournament match, report result and return to bracket
  const hook=_tournFinishHook;
  if(hook&&_tournId){
    _tournFinishHook=null;
    hook(room);
    setTimeout(()=>{ _showTournament(); const t=_tournData; if(t) _renderTournBracket(t); },800);
    return;
  }
  const me=room[_mySlot] as PlayerData;
  const opp=(_mySlot==='p1'?room.p2:room.p1) as PlayerData;
  const won=me.score>(opp?.score??0), tie=me.score===(opp?.score??0);
  const mInfo=DUEL_MODES.find(m=>m.id===room.mode)||DUEL_MODES[0];

  // Save history + rating
  _addHistory({date:`${new Date().toLocaleDateString(_dateLocale())} ${new Date().toLocaleTimeString(_dateLocale(),{hour:'2-digit',minute:'2-digit'})}`,mode:room.mode,myScore:me.score,oppScore:opp?.score??0,oppName:opp?.name||_oppName||t('duel.opp'),won,category:room.category});
  _updateRating(won,tie);
  _clearSession();

  // Best of 3 logic
  if(room.bestOf===3){
    const newSeries={...room.series};
    if(won) { if(_mySlot==='p1') newSeries.p1wins++; else newSeries.p2wins++; }
    else if(!tie) { if(_mySlot==='p1') newSeries.p2wins++; else newSeries.p1wins++; }
    newSeries.round++;
    const myW=_mySlot==='p1'?newSeries.p1wins:newSeries.p2wins;
    const oppW=_mySlot==='p1'?newSeries.p2wins:newSeries.p1wins;
    _series=newSeries;
    if(myW<2&&oppW<2&&newSeries.round<=3){
      // Series not decided — show next round
      $('duel-result-inner').innerHTML=
        `<div style="font-size:2rem;margin-bottom:6px;">${won?'🏆':tie?'🤝':'😔'}</div>`+
        `<div style="font-weight:700;font-size:1.1rem;color:var(--text);">${t('duel.round.n')} ${newSeries.round-1}: ${won?t('duel.series.win'):tie?t('duel.series.tie'):t('duel.series.loss')}</div>`+
        `<div style="font-size:.85rem;color:var(--text2);margin:8px 0;">${t('duel.series.label')} ${_getMyName()} ${myW} — ${oppW} ${opp?.name||t('duel.opp')}</div>`;
      const nb=$('duel-rematch-btn') as HTMLButtonElement; if(nb){ nb.style.display='inline-block'; nb.textContent=t('duel.nextRound'); }
      _showResult(); return;
    }
  }

  const catLabel=room.category?` · ${room.category.split(' ')[0]}`:'';
  const histEl=$('duel-history-entry'); if(histEl) histEl.textContent=`${mInfo.icon} ${t('duel.mode.'+mInfo.id)}${catLabel} · ${new Date().toLocaleDateString(_dateLocale())}`;

  $('duel-result-inner').innerHTML=
    `<div style="font-size:.72rem;color:var(--text3);margin-bottom:6px;">${mInfo.icon} ${t('duel.mode.'+mInfo.id)}${catLabel}</div>`+
    `<div style="font-size:3rem;margin-bottom:8px;">${won?'🏆':tie?'🤝':'😔'}</div>`+
    `<div style="font-size:1.2rem;font-weight:700;color:var(--text);margin-bottom:6px;">${won?t('duel.result.won'):tie?t('duel.result.tie'):t('duel.result.lost',{name:opp?.name||t('duel.opp')})}</div>`+
    `<div style="display:flex;gap:20px;justify-content:center;margin:14px 0;">`+
      `<div style="text-align:center;"><div style="font-size:2rem;">${me.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${won||tie?'#27ae60':'#e74c3c'}">${me.score}/${ROOM_SIZE}</div><div style="font-size:.72rem;color:var(--text3);">${t('duel.you')}</div></div>`+
      `<div style="font-size:1.5rem;align-self:center;color:var(--text3);">VS</div>`+
      `<div style="text-align:center;"><div style="font-size:2rem;">${opp?.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${!won&&!tie?'#27ae60':'#e74c3c'}">${opp?.score??0}/${ROOM_SIZE}</div><div style="font-size:.72rem;color:var(--text3);">${opp?.name||t('duel.opp')}</div></div>`+
    `</div>`;

  // Show rematch + reactions
  const rb=$('duel-rematch-btn') as HTMLButtonElement; if(rb){ rb.style.display='inline-block'; rb.textContent=t('duel.rematch'); }
  const reactEl=$('duel-reactions'); if(reactEl){
    reactEl.innerHTML=REACTIONS.map(e=>`<button class="duel-react-end-btn" data-emoji="${e}" style="font-size:1.5rem;background:none;border:none;cursor:pointer;padding:4px;">${e}</button>`).join('');
    reactEl.querySelectorAll<HTMLButtonElement>('.duel-react-end-btn').forEach(b=>{
      b.addEventListener('click',()=>_sendChatMsg(b.dataset.emoji!));
    });
  }
  _showResult();
  _startResultPoll();
}

function _cancelRoom():void{
  _clearSession();
  _stopResultPoll();
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  if(_freezeTimer){clearTimeout(_freezeTimer);_freezeTimer=null;}
  if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
  if(_roomId){
    if(_isAsyncChallenge){
      fetch(`${DB_URL}/duel_async/${_roomId}.json`,{method:'DELETE'}).catch(()=>{});
    } else if(_mySlot==='p1') {
      fetch(`${DB_URL}/duel_rooms/${_roomId}.json`,{method:'DELETE'}).catch(()=>{});
    }
    // Remove spectator entry if spectator
    if(_isSpectator&&_specId) fetch(`${DB_URL}/duel_rooms/${_roomId}/spectators/${_specId}.json`,{method:'DELETE'}).catch(()=>{});
    _roomId='';
  }
  _isSpectator=false;
  _isAsyncChallenge=false;
  $('duel-waiting').style.display='none'; $('duel-join-row').style.display='block';
  const btn=$('duel-create-btn') as HTMLButtonElement; btn.disabled=false; btn.textContent=t('duel.create');
  const asyncBtn=$('duel-async-btn') as HTMLButtonElement|null; if(asyncBtn){ asyncBtn.disabled=false; asyncBtn.textContent=t('duel.sendChallenge'); }
  elMsg().style.display='none';
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
async function joinAsSpectator(): Promise<void> {
  const code = await _askCode(t('duel.spectate.title'), t('duel.spectate.desc'));
  if (!code) return;
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error(t('duel.err.notFound'));
    _isSpectator=true; _specId=_genCode(); _roomId=code;
    await _fbPatch(`/duel_rooms/${code}/spectators/${_specId}`,{name:_getMyName(),avatar:_getMyAvatar()});
    _startSpectatorView(room);
  } catch(e){
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _startSpectatorView(room:RoomData): void {
  const el=$('duel-spectate') as HTMLElement|null; if(!el) return;
  elLobby().style.display='none'; el.style.display='';
  elChatPanel().style.display='none';
  _renderSpectatorView(room);
  _pollTimer=setInterval(async()=>{
    try{
      const r=await _fbGet(`/duel_rooms/${_roomId}`) as RoomData|null;
      if(!r) return;
      _renderSpectatorView(r);
      if(r.finished){
        clearInterval(_pollTimer!); _pollTimer=null;
        // Clean up spectator entry in Firebase before leaving
        if(_specId) fetch(`${DB_URL}/duel_rooms/${_roomId}/spectators/${_specId}.json`,{method:'DELETE'}).catch(()=>{});
        _specId=''; _isSpectator=false;
        setTimeout(()=>{ el.style.display='none'; _showLobby(); renderDuel(); },3000);
      }
    }catch(e){}
  },1500);
}

function _renderSpectatorView(room:RoomData): void {
  _specRoom = room;
  refreshDuelSpectator();
}

// Покинути спостереження (item 33, Фаза 5) — викликається з React-кнопки
// duel-spectator.tsx, а також зі smart close-кнопки нижче.
export function _leaveSpectator(): void {
  _cancelRoom();
  ($('duel-spectate') as HTMLElement).style.display='none';
  _showLobby();
  renderDuel();
}

// ── Async duel (challenge) ────────────────────────────────────
async function createAsyncChallenge(): Promise<void> {
  const btn=$('duel-async-btn') as HTMLButtonElement;
  btn.disabled=true; btn.textContent=t('duel.creating');
  try {
    // Clear any stale tournament state so _showFinish doesn't route to tournament path
    _tournId=''; _tournData=null;
    _tournFinishHook=null;
    const code=_genCode();
    const seed=Date.now();
    const challenge: AsyncDuel = {
      seed, mode:_selMode, category:_selCategory, difficulty:_selDifficulty,
      createdAt:Date.now(), expiresAt:Date.now()+86_400_000, // 24 hours
      powerupsEnabled:_selPowerups, maxHints:_selMaxHints, bestOf:_selBestOf,
      challenger:{ name:_getMyName(), avatar:_getMyAvatar(), score:0, done:false },
      finished:false,
    };
    await _fbSet(`/duel_async/${code}`, challenge);
    // Play immediately as challenger
    _roomId=code; _mySlot='p1'; _isAsyncChallenge=true; _roomCreatedAt=challenge.createdAt;
    _roomSeed=seed; _roomCategory=_selCategory; _roomDifficulty=_selDifficulty; _roomMaxHints=_selMaxHints;
    _quizDeck=_buildDeck(seed,_selCategory,_selDifficulty,_selMode);
    // Show code to share
    const codeEl=$('duel-room-code'); if(codeEl) codeEl.textContent=_fmtCode(code);
    const modeEl=$('duel-waiting-mode');
    if(modeEl) modeEl.textContent=`📬 ${t('duel.mode.'+_selMode)} · ${t('duel.async.24h')}`;
    $('duel-waiting').style.display='block';
    $('duel-join-row').style.display='none';
    // Start playing immediately
    if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
    _asyncStartTimer=setTimeout(()=>{
      _asyncStartTimer=null;
      $('duel-waiting').style.display='none';
      _initGame(_selMode, _selMaxHints, 1, {p1wins:0,p2wins:0,round:1}, _selPowerups);
    }, 2000);
  } catch(e){
    btn.disabled=false; btn.textContent=t('duel.async.send');
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinAsyncChallenge(): Promise<void> {
  const code = await _askCode(t('duel.async.reply.title'), t('duel.async.reply.desc'));
  if (!code) return;
  try {
    const challenge=await _fbGet(`/duel_async/${code}`) as AsyncDuel|null;
    if(!challenge) throw new Error(t('duel.err.chal.notFound'));
    if(challenge.finished) throw new Error(t('duel.err.chal.finished'));
    if(Date.now()>challenge.expiresAt) throw new Error(t('duel.err.chal.expired'));
    if(challenge.opponent) throw new Error(t('duel.err.chal.taken'));
    _roomId=code; _mySlot='p2'; _isAsyncChallenge=true; _roomCreatedAt=challenge.createdAt||Date.now();
    _roomSeed=challenge.seed; _roomCategory=challenge.category; _roomDifficulty=challenge.difficulty; _roomMaxHints=challenge.maxHints??3;
    _quizDeck=_buildDeck(challenge.seed,challenge.category,challenge.difficulty,challenge.mode);
    _oppName=challenge.challenger.name; _oppAvatar=challenge.challenger.avatar;
    const mInfo=DUEL_MODES.find(m=>m.id===challenge.mode);
    elMsg().innerHTML=`<span style="color:var(--accent)">📬 ${challenge.challenger.avatar} <b>${challenge.challenger.name}</b> · ${mInfo?.icon} ${mInfo?t('duel.mode.'+mInfo.id):''}</span>`;
    elMsg().style.display='block';
    // Let the challenger know who accepted, so resume cards can show "vs <opponent>"
    _fbPatch(`/duel_async/${code}`,{opponent:{name:_getMyName(),avatar:_getMyAvatar(),score:0,done:false}}).catch(()=>{});
    if(_asyncStartTimer){clearTimeout(_asyncStartTimer);_asyncStartTimer=null;}
    _asyncStartTimer=setTimeout(()=>{ _asyncStartTimer=null; elMsg().style.display='none'; _initGame(challenge.mode,_roomMaxHints,challenge.bestOf??1,{p1wins:0,p2wins:0,round:1},challenge.powerupsEnabled??false); }, 1800);
  } catch(e){
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _doRematch():void{
  if(_mySlot==='p1'){
    // p1 creates a new room — show waiting screen
    _showLobby(); renderDuel();
    _cancelRoom(); createRoom();
  } else {
    // p2 gets new code to join
    _showLobby(); renderDuel();
    elMsg().textContent=t('duel.rematch.ask'); elMsg().style.display='block';
  }
}

// ── Session resume ────────────────────────────────────────────
async function _tryResumeSession():Promise<void>{
  const resumeEl=$('duel-resume') as HTMLElement|null; if(!resumeEl) return;
  _resumeCountdownTimers.forEach(id=>clearInterval(id));
  _resumeCountdownTimers.clear();
  const sessions=_loadSessions();
  if(!sessions.length){ resumeEl.innerHTML=''; resumeEl.style.display='none'; return; }

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
  if(!valid.length){ resumeEl.innerHTML=''; resumeEl.style.display='none'; return; }

  // Show the duel with the least time left to finish first.
  valid.sort((a,b)=>{
    const expA=(a.sess.createdAt||a.room.createdAt||Date.now())+86_400_000;
    const expB=(b.sess.createdAt||b.room.createdAt||Date.now())+86_400_000;
    return expA-expB;
  });

  resumeEl.innerHTML=valid.map(({sess,room})=>{
    const opp=sess.slot==='p1'?room.p2:room.p1;
    const oppName=opp?.name||sess.oppName;
    const oppAvatar=opp?.avatar||sess.oppAvatar||'';
    const mInfo=DUEL_MODES.find(m=>m.id===sess.mode)||DUEL_MODES[0];
    return `<div style="background:rgba(0,200,100,.1);border:1.5px solid var(--accent);border-radius:14px;padding:12px 16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">`+
      `<div><div style="font-size:.82rem;font-weight:700;color:var(--accent);">${t('duel.resume.title')}</div>`+
      `<div style="font-size:.75rem;color:var(--text3);margin-top:2px;">${mInfo.icon} ${t('duel.mode.'+mInfo.id)} · ${sess.score}/${ROOM_SIZE} ${t('duel.resume.pts')}${oppName?` · ${t('duel.resume.opp')} ${oppAvatar} ${oppName}`:''}</div>`+
      `<div id="duel-resume-expiry-${sess.roomId}" style="font-size:.7rem;color:var(--text3);margin-top:4px;"></div></div>`+
      `<div style="display:flex;gap:6px;">`+
        `<button id="duel-resume-btn-${sess.roomId}" style="padding:7px 14px;border-radius:9px;border:none;background:var(--accent);color:#fff;font-weight:600;cursor:pointer;font-family:inherit;font-size:.82rem;">${t('duel.resume.continue')}</button>`+
        `<button id="duel-resume-discard-${sess.roomId}" style="padding:7px 12px;border-radius:9px;border:1.5px solid var(--border);background:none;color:var(--text3);cursor:pointer;font-family:inherit;font-size:.78rem;">✕</button>`+
      `</div></div>`;
  }).join('');
  resumeEl.style.display='block';

  valid.forEach(({sess,room})=>{
    // 24h-from-creation countdown until the room is considered expired
    const expiresAt=(sess.createdAt||room.createdAt||Date.now())+86_400_000;
    const updateExpiry=()=>{
      const expEl=$(`duel-resume-expiry-${sess.roomId}`) as HTMLElement|null;
      if(!expEl){ const tm=_resumeCountdownTimers.get(sess.roomId); if(tm){clearInterval(tm);_resumeCountdownTimers.delete(sess.roomId);} return; }
      const remaining=expiresAt-Date.now();
      if(remaining<=0){
        expEl.textContent=t('duel.resume.expired');
        const tm=_resumeCountdownTimers.get(sess.roomId); if(tm){clearInterval(tm);_resumeCountdownTimers.delete(sess.roomId);}
      } else {
        const h=Math.floor(remaining/3600000), m=Math.floor((remaining%3600000)/60000), s=Math.floor((remaining%60000)/1000);
        const time=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        expEl.textContent=t('duel.resume.expires',{time});
      }
    };
    updateExpiry();
    _resumeCountdownTimers.set(sess.roomId, setInterval(updateExpiry,1000));

    $(`duel-resume-btn-${sess.roomId}`)?.addEventListener('click',()=>{
      _resumeCountdownTimers.forEach(id=>clearInterval(id));
      _resumeCountdownTimers.clear();
      resumeEl.style.display='none'; resumeEl.innerHTML='';
      _roomId=sess.roomId; _mySlot=sess.slot; _mode=sess.mode;
      _roomCreatedAt=sess.createdAt||room.createdAt||Date.now();
      const seed=sess.seed??room.seed, category=sess.category??room.category, difficulty=sess.difficulty??room.difficulty;
      const maxHints=sess.maxHints??room.maxHints, bestOf=sess.bestOf??room.bestOf;
      _roomSeed=seed; _roomCategory=category; _roomDifficulty=difficulty; _roomMaxHints=maxHints;
      _quizDeck=_buildDeck(seed,category,difficulty,sess.mode);
      const oppRoom=room[sess.slot==='p1'?'p2':'p1'];
      _oppName=oppRoom?.name||sess.oppName||t('duel.opp');
      _oppAvatar=oppRoom?.avatar||sess.oppAvatar||'🧑';
      const savedIdx=sess.idx,savedScore=sess.score;
      // Restore saved state directly, bypassing _initGame's reset+countdown
      // (which would re-zero score/progress and wipe chat a few seconds later).
      const series=room.series||{p1wins:0,p2wins:0,round:1};
      _bestOf=bestOf||1; _series={...series};
      if(_advanceTimer){clearTimeout(_advanceTimer);_advanceTimer=null;}
      _quizIdx=savedIdx; _myScore=savedScore;
      _myCorrect=sess.correct??0; _myWrong=sess.wrong??0; _myFlags=sess.flags??[];
      _chatHistory=sess.chat??[];
      _answered=false; _finished=false;
      _hintsLeft = maxHints===0 ? 999 : maxHints;
      _powerupsEnabled = sess.powerupsEnabled ?? !!room.powerupsEnabled;
      const savedPowerups = sess.myPowerups ?? room[sess.slot]?.powerups;
      _myPowerups = savedPowerups ? {...savedPowerups} : (_powerupsEnabled ? {double:1,skip:1,freeze:1} : {double:0,skip:0,freeze:0});
      _doubleActive = false;
      const savedDeckLen=sess.deckLen??ROOM_SIZE;
      while(_quizDeck.length<savedDeckLen) _extendDeckOnSkip();
      _setupGameUI();
      _renderMyProgressBar();
      _showGame(false);
      refreshDuelChatLog();
      _renderQuestion();
      _startOpponentPoll();
    });
    $(`duel-resume-discard-${sess.roomId}`)?.addEventListener('click',()=>{
      _clearSession(sess.roomId);
      _tryResumeSession();
    });
  });
}

// ── Tournament ────────────────────────────────────────────────

interface TournMatch { p1:number; p2:number; p1score:number; p2score:number; winner:number; done:boolean; roomId:string; }
interface Tournament {
  code:string; size:4|8; mode:DuelMode; category:string; difficulty:Difficulty;
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

function _showTournament() { elLobby().style.display='none'; ($('duel-tournament') as HTMLElement).style.display=''; elChatPanel().style.display='none'; }
function _hideTournament() { ($('duel-tournament') as HTMLElement).style.display='none'; }

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

async function createTournament(size:4|8): Promise<void> {
  const btn=$(`tourn-create-${size}`) as HTMLButtonElement;
  btn.disabled=true; btn.textContent=t('duel.creating');
  try {
    _tournId=_genCode();
    const tourn: Tournament = {
      code:_tournId, size, mode:_selMode, category:_selCategory, difficulty:_selDifficulty,
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
    btn.disabled=false; btn.textContent=`${size===4?'🏟️':'🏆'} ${t('duel.tournament')} ×${size}`;
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinTournament(): Promise<void> {
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
  const wEl=$('tourn-waiting') as HTMLElement;
  const bEl=$('tourn-bracket') as HTMLElement;
  wEl.style.display=''; bEl.style.display='none';
  ($('tourn-code') as HTMLElement).textContent=_fmtCode(_tournId);
  const mInfo=DUEL_MODES.find(m=>m.id===tourn.mode)||DUEL_MODES[0];
  ($('tourn-mode-label') as HTMLElement).textContent=`${mInfo.icon} ${t('duel.mode.'+tourn.mode)} · ${tourn.size} ${t('duel.tourn.players')}`;
  const slotsEl=$('tourn-slots') as HTMLElement;
  slotsEl.innerHTML=Array.from({length:tourn.size},(_,i)=>{
    const p=tourn.players[i];
    return `<div style="padding:8px 10px;border-radius:10px;border:1.5px solid ${p?'var(--accent)':'var(--border)'};background:${p?'rgba(0,200,100,.06)':'var(--bg)'};text-align:center;">
      ${p?`<span style="font-size:1.2rem;">${p.avatar}</span> <span style="font-size:.8rem;font-weight:600;color:var(--text);">${p.name}</span>`
         :`<span style="color:var(--text3);font-size:.78rem;">${t('duel.tourn.slot')} ${i+1}</span>`}
    </div>`;
  }).join('');
  const joined=Object.keys(tourn.players).length;
  const startBtn=$('tourn-start-btn') as HTMLButtonElement;
  startBtn.style.display=(_tournSlot===0&&joined===tourn.size)?'':'none';
  startBtn.textContent=`${t('duel.tourn.start')} (${joined}/${tourn.size})`;
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
  const wEl=$('tourn-waiting') as HTMLElement;
  const bEl=$('tourn-bracket') as HTMLElement;
  wEl.style.display='none'; bEl.style.display='';
  const totalRounds=tourn.bracket.length;
  const statusEl=$('tourn-status-label') as HTMLElement;
  if(tourn.finished){
    statusEl.innerHTML=`🏆 ${t('duel.tourn.champion')} ${tourn.champion}!`;
    statusEl.style.color='#f39c12';
  } else {
    statusEl.textContent=`${_tournRoundName(tourn.currentRound,totalRounds)} · ${t('duel.tourn.match')} ${tourn.currentMatch+1}`;
    statusEl.style.color='var(--text3)';
  }
  // Bracket visual
  const visEl=$('tourn-bracket-visual') as HTMLElement;
  visEl.innerHTML=tourn.bracket.map((round,ri)=>{
    const rName=_tournRoundName(ri,totalRounds);
    return `<div style="margin-bottom:10px;">
      <div style="font-size:.68rem;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">${rName}</div>
      ${round.map((m,mi)=>{
        const p1=tourn.players[m.p1]??{name:'?',avatar:'?'};
        const p2=tourn.players[m.p2]??{name:'?',avatar:'?'};
        const active=ri===tourn.currentRound&&mi===tourn.currentMatch&&!m.done;
        const done=m.done;
        return `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:9px;border:1.5px solid ${active?'var(--accent)':done?'var(--border)':'var(--border)'};background:${active?'rgba(0,200,100,.06)':'transparent'};margin-bottom:4px;">
          <span style="${m.winner===m.p1?'font-weight:700;color:var(--accent)':'color:var(--text2)'}">${p1.avatar} ${p1.name}</span>
          ${done?`<span style="font-size:.75rem;font-weight:700;color:var(--text3);">${m.p1score}:${m.p2score}</span>`:'<span style="color:var(--text3);font-size:.72rem;">vs</span>'}
          <span style="${m.winner===m.p2?'font-weight:700;color:var(--accent)':'color:var(--text2)'}">${p2.avatar} ${p2.name}</span>
          ${active?`<span style="font-size:.65rem;color:var(--accent);margin-left:auto;">${t('duel.tourn.now')}</span>`:''}
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
  // Match area — show play button if it's my turn
  const matchEl=$('tourn-match-area') as HTMLElement;
  if(tourn.finished){
    matchEl.innerHTML=`<div style="text-align:center;padding:16px;"><div style="font-size:3rem;">🏆</div><div style="font-weight:700;font-size:1.1rem;color:#f39c12;margin-top:8px;">${tourn.champion} — ${t('duel.tourn.champ.excl')}</div><button id="tourn-leave-btn" style="margin-top:14px;padding:8px 20px;border-radius:10px;border:1.5px solid var(--border);background:none;color:var(--text2);cursor:pointer;font-family:inherit;font-size:.82rem;">${t('duel.tourn.leave')}</button></div>`;
    $('tourn-leave-btn')?.addEventListener('click',()=>{ _cancelTournament(); });
    return;
  }
  const curMatch=tourn.bracket[tourn.currentRound]?.[tourn.currentMatch];
  if(!curMatch||curMatch.done){ matchEl.innerHTML=''; return; }
  const myTurn=curMatch.p1===_tournSlot||curMatch.p2===_tournSlot;
  if(myTurn&&!curMatch.roomId){
    matchEl.innerHTML=`<button id="tourn-play-btn" style="width:100%;padding:12px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;">${t('duel.tourn.play')}</button>`;
    $('tourn-play-btn')?.addEventListener('click',()=>_startTournMatch(tourn,tourn.currentRound,tourn.currentMatch));
  } else if(myTurn&&curMatch.roomId){
    matchEl.innerHTML=`<button id="tourn-rejoin-btn" style="width:100%;padding:12px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;">${t('duel.tourn.rejoin')}</button>`;
    $('tourn-rejoin-btn')?.addEventListener('click',()=>_joinTournMatch(curMatch.roomId));
  } else {
    const opp=curMatch.p1===_tournSlot?tourn.players[curMatch.p2]:tourn.players[curMatch.p1];
    matchEl.innerHTML=`<div style="text-align:center;padding:12px;color:var(--text3);font-size:.82rem;">⏳ ${t('duel.tourn.waiting.match')}: ${opp?.name||'?'} vs …<br>${t('duel.tourn.turn.later')}</div>`;
  }
}

async function _startTournMatch(tourn:Tournament, round:number, matchIdx:number): Promise<void> {
  const match=tourn.bracket[round][matchIdx];
  // Create a duel room for this match
  _roomId=_genCode(); _mySlot=match.p1===_tournSlot?'p1':'p2';
  const seed=Date.now();
  const room:RoomData={
    seed, mode:tourn.mode, category:tourn.category, difficulty:tourn.difficulty,
    bestOf:1, maxHints:3, powerupsEnabled:false,
    createdAt:Date.now(), started:false, finished:false,
    series:{p1wins:0,p2wins:0,round:1},
    p1:{name:tourn.players[match.p1].name,avatar:tourn.players[match.p1].avatar,score:0,idx:0,done:false,hintsLeft:3,powerups:{double:0,skip:0,freeze:0}},
    p2:null,
  };
  await _fbSet(`/duel_rooms/${_roomId}`,room);
  // Save room ID to tournament match
  const matchPath=`/tournaments/${_tournId}/bracket/${round}/${matchIdx}`;
  await _fbPatch(matchPath,{roomId:_roomId});
  _oppName=tourn.players[match.p1===_tournSlot?match.p2:match.p1].name;
  _oppAvatar=tourn.players[match.p1===_tournSlot?match.p2:match.p1].avatar;
  _quizDeck=_buildDeck(seed,tourn.category,tourn.difficulty,tourn.mode);
  _hideTournament();
  _initGame(tourn.mode,3,1,{p1wins:0,p2wins:0,round:1},false);
  // After game finishes, save result to tournament
  _tournFinishHook=async(roomData:RoomData)=>{
    const me=roomData[_mySlot] as PlayerData;
    const opp=(roomData[_mySlot==='p1'?'p2':'p1']) as PlayerData;
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
    _roomId=roomId; _mySlot='p2';
    await _fbPatch(`/duel_rooms/${roomId}`,{
      p2:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:3,powerups:{double:0,skip:0,freeze:0}},
      started:true,
    });
    _quizDeck=_buildDeck(room.seed,room.category,room.difficulty,room.mode);
    _oppName=room.p1.name; _oppAvatar=room.p1.avatar;
    _hideTournament();
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
  _hideTournament(); _showLobby(); renderDuel();
}

// ── renderDuel (full page) ────────────────────────────────────
export function renderDuel():void{
  notifyStateChange();
  _tryResumeSession();
}
window.renderDuel=renderDuel;

// ── Event bindings ────────────────────────────────────────────
$('duel-create-btn')?.addEventListener('click',createRoom);
$('duel-join-btn')?.addEventListener('click',joinRoom);
$('duel-cancel-btn')?.addEventListener('click',_cancelRoom);
$('duel-again-btn')?.addEventListener('click',()=>{ _cancelRoom(); _showLobby(); renderDuel(); });
$('duel-rematch-btn')?.addEventListener('click',_doRematch);
$('duel-spectate-btn')?.addEventListener('click',joinAsSpectator);
$('duel-async-btn')?.addEventListener('click',createAsyncChallenge);
$('duel-async-join-btn')?.addEventListener('click',joinAsyncChallenge);
$('tourn-create-4')?.addEventListener('click',()=>createTournament(4));
$('tourn-create-8')?.addEventListener('click',()=>createTournament(8));
$('tourn-join-btn')?.addEventListener('click',joinTournament);
$('tourn-start-btn')?.addEventListener('click',startTournament);
$('tourn-cancel-btn')?.addEventListener('click',_cancelTournament);

$('duel-join-input')?.addEventListener('keydown',(e:KeyboardEvent)=>{
  const inp=e.target as HTMLInputElement;
  let v=inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(v.length>3) v=v.slice(0,3)+'-'+v.slice(3);
  inp.value=v.slice(0,7);
  if(e.key==='Enter') joinRoom();
});

// In-game reactions
$('dm-react-row')?.querySelectorAll<HTMLButtonElement>('.dm-react-btn').forEach(b=>{
  b.addEventListener('click',()=>_sendChatMsg(b.dataset.emoji!));
});

// Chat text input
const _chatInput=$('duel-chat-input') as HTMLInputElement|null;
const _chatSendBtn=$('duel-chat-send') as HTMLButtonElement|null;
function _sendChatInput(): void {
  if(!_chatInput) return;
  const text=_chatInput.value.trim();
  if(!text) return;
  _sendChatMsg(text);
  _chatInput.value='';
}
_chatSendBtn?.addEventListener('click',_sendChatInput);
_chatInput?.addEventListener('keydown',(e:KeyboardEvent)=>{ if(e.key==='Enter') _sendChatInput(); });

document.addEventListener('keydown',(e:KeyboardEvent)=>{
  const game=$('duel-game'); if(!game||game.style.display==='none') return;
  if(_mode!=='write'&&!_answered&&['1','2','3','4'].includes(e.key)){
    e.preventDefault();
    const opt=_choiceOptions[parseInt(e.key)-1];
    if(opt) _onOptionClick(opt);
  }
});

$('sb-duel')?.addEventListener('click',()=>{
  (window.openPage as ((p:string)=>void)|undefined)?.('duel');
  renderDuel();
});

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

// ── Smart duel close button ────────────────────────────────────
// If game/tournament/spectator is active → return to lobby; else → close page
$('duel-page-close')?.addEventListener('click', async () => {
  const gameVisible      = elGame().style.display !== 'none';
  const tournVisible     = ($('duel-tournament') as HTMLElement|null)?.style.display !== 'none';
  const spectVisible     = ($('duel-spectate') as HTMLElement|null)?.style.display !== 'none';
  const countdownVisible = elCountdown().style.display !== 'none';
  const waitingVisible   = ($('duel-waiting') as HTMLElement|null)?.style.display === 'block';

  // 24h async duel: leaving mid-question (or during the pre-game countdown)
  // never forfeits — the room stays alive, the session is saved, and the
  // player can resume the same question later from the lobby's resume banner.
  if ((gameVisible && !_finished) || countdownVisible) {
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
    (window.closePage as (() => void) | undefined)?.();
  } else if (tournVisible) {
    _cancelTournament();
  } else if (spectVisible) {
    _leaveSpectator();
  } else {
    // Result screen or plain lobby → reset state, then close
    _showLobby();
    (window.closePage as (() => void) | undefined)?.();
  }
});
