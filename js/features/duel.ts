// English Words App — js/features/duel.ts
// ⚔️ Full-featured Duel: leaderboard + live multiplayer quiz

import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import LZString from '../../lib/lzstring.js';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import type { WordEntry } from '../../src/types.js';

// ── Constants ─────────────────────────────────────────────────
const DB_URL    = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const CHARS     = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const ROOM_SIZE = 10, NUM_OPTS = 4;
const TEMPO_SEC = 4;
const REACTIONS = ['👍','😅','🔥','😂','🤯','😤','🎉','👏'];

// ── Types ─────────────────────────────────────────────────────
type DuelMode       = 'quiz' | 'reverse' | 'write' | 'tempo';
type Difficulty     = 'easy' | 'normal' | 'hard';
type BestOf         = 1 | 3;
type PowerupType    = 'double' | 'skip' | 'freeze';

const POWERUPS: { id:PowerupType; icon:string; label:string; desc:string }[] = [
  { id:'double', icon:'🎯', label:'×2',      desc:'Наступна правильна = 2 очки' },
  { id:'skip',   icon:'⏩', label:'Скіп',    desc:'Пропустити питання' },
  { id:'freeze', icon:'🧊', label:'Мороз',   desc:'Заморозити суперника на 5с' },
];

const DUEL_MODES: { id:DuelMode; icon:string; label:string; desc:string }[] = [
  { id:'quiz',    icon:'🧠', label:'Тест',    desc:'4 варіанти · EN→UA' },
  { id:'reverse', icon:'🔄', label:'Навпаки', desc:'4 варіанти · UA→EN' },
  { id:'write',   icon:'✍️', label:'Письмо',  desc:'Введи переклад' },
  { id:'tempo',   icon:'⚡', label:'Темп',    desc:`4 варіанти · ${TEMPO_SEC}с/питання` },
];
const DIFFICULTIES: { id:Difficulty; label:string; desc:string }[] = [
  { id:'easy',   label:'Легкий',   desc:'Перші 1000 слів' },
  { id:'normal', label:'Середній', desc:'Перші 3000 слів' },
  { id:'hard',   label:'Важкий',   desc:'Всі 5598 слів' },
];

interface PlayerData {
  name:string; avatar:string; score:number; idx:number; done:boolean;
  reaction?:string; hintsLeft:number;
  powerups:Record<PowerupType,number>; frozenUntil?:number;
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
  challenger:{ name:string; avatar:string; score:number; done:boolean };
  opponent?:{ name:string; avatar:string; score:number; done:boolean };
  finished:boolean;
}

// ── History & Rating (localStorage) ──────────────────────────
const HIST_KEY   = 'ew_duel_history';
const RATING_KEY = 'ew_duel_rating';

interface HistEntry { date:string; mode:DuelMode; myScore:number; oppScore:number; oppName:string; won:boolean; category:string; }
interface Rating    { wins:number; losses:number; ties:number; }

function _getHistory(): HistEntry[] { try { return JSON.parse(localStorage.getItem(HIST_KEY)||'[]'); } catch(e){ return []; } }
function _addHistory(e: HistEntry): void {
  const h = _getHistory(); h.unshift(e); if (h.length>20) h.length=20;
  try { localStorage.setItem(HIST_KEY, JSON.stringify(h)); } catch(e){}
}
function _getRating(): Rating { try { return JSON.parse(localStorage.getItem(RATING_KEY)||'{"wins":0,"losses":0,"ties":0}'); } catch(e){ return {wins:0,losses:0,ties:0}; } }
function _updateRating(won:boolean, tie:boolean): void {
  const r = _getRating();
  if (tie) r.ties++; else if (won) r.wins++; else r.losses++;
  try { localStorage.setItem(RATING_KEY, JSON.stringify(r)); } catch(e){}
}

// ── Profile leaderboard ───────────────────────────────────────
const LIST_KEY='ew_profiles', ACTIVE_KEY='ew_active_profile';
const SNAP_KEYS=['ew_known','ew_known_lz','ew_game','ew_daily','ew_ach'];
function _getProfiles() { try { return JSON.parse(localStorage.getItem(LIST_KEY)||'[]'); } catch(e){ return []; } }
function _getActiveId() { return localStorage.getItem(ACTIVE_KEY)||''; }
function _readSnap(id:string):Record<string,string>{ const d:Record<string,string>={}; SNAP_KEYS.forEach(k=>{const v=localStorage.getItem(`ew_p_${id}__${k}`);if(v!==null)d[k]=v;}); return d; }
function _currentSnap():Record<string,string>{ const d:Record<string,string>={}; SNAP_KEYS.forEach(k=>{const v=localStorage.getItem(k);if(v!==null)d[k]=v;}); return d; }
function _parseKnown(s:Record<string,string>):string[]{const r=s['ew_known'];if(!r)return[];try{if(s['ew_known_lz']==='1'){const d=LZString.decompress(r);if(d)return JSON.parse(d);}return JSON.parse(r);}catch(e){return[];}}
function _parseGame(s:Record<string,string>){try{return JSON.parse(s['ew_game']||'{}');}catch(e){return{};}}
function _weekWords(s:Record<string,string>):number{try{const d=JSON.parse(s['ew_daily']||'{}');const t=new Date();let c=0;for(let i=0;i<7;i++){const dt=new Date(t);dt.setDate(dt.getDate()-i);c+=(d[dt.toISOString().slice(0,10)]||0);}return c;}catch(e){return 0;}}

function _renderLeaderboard(): void {
  const el = document.getElementById('duel-leaderboard'); if(!el) return;
  const profiles = _getProfiles();
  if(!profiles.length){el.innerHTML='<div style="text-align:center;color:var(--text3);padding:12px;">Немає профілів.</div>';return;}
  const aid = _getActiveId();
  const stats = profiles.map((p:Record<string,unknown>)=>{
    const snap=p.id===aid?_currentSnap():_readSnap(p.id as string);
    const known=_parseKnown(snap),game=_parseGame(snap);
    return{name:p.name,avatar:p.avatar,known:known.length,streak:game.streak||0,weekWords:_weekWords(snap),xp:(game.xp||0)+known.length*5,isActive:p.id===aid};
  }).sort((a:any,b:any)=>b.xp-a.xp||b.known-a.known);
  const r=_getRating();
  const rEl=document.getElementById('duel-rating-row');
  if(rEl) rEl.innerHTML=`🏆 ${r.wins} перемог · 💀 ${r.losses} поразок · 🤝 ${r.ties} нічия`;
  el.innerHTML=stats.map((s:any,i:number)=>{
    const rank=i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}.`;
    return`<div class="duel-card${s.isActive?' duel-card-active':''}"><div class="duel-card-header"><span class="duel-rank">${rank}</span><span class="duel-av">${s.avatar}</span><span class="duel-name">${s.name}${s.isActive?' (ти)':''}</span></div><div class="duel-stats"><div class="duel-stat"><div class="duel-sv">${s.known}</div><div class="duel-sl">Слів</div></div><div class="duel-stat"><div class="duel-sv">${s.xp}</div><div class="duel-sl">XP</div></div><div class="duel-stat"><div class="duel-sv">🔥${s.streak}</div><div class="duel-sl">Серія</div></div><div class="duel-stat"><div class="duel-sv">${s.weekWords}</div><div class="duel-sl">Тиждень</div></div></div></div>`;
  }).join('');
}

function _renderHistory(): void {
  const el = document.getElementById('duel-history-list'); if(!el) return;
  const h = _getHistory();
  if(!h.length){ el.innerHTML='<div style="color:var(--text3);font-size:.8rem;text-align:center;padding:8px;">Ще немає зіграних дуелей</div>'; return; }
  el.innerHTML = h.slice(0,5).map(e=>{
    const icon = e.won?'🏆':e.myScore===e.oppScore?'🤝':'💀';
    const cat  = e.category ? ` · ${e.category.split(' ')[0]}` : '';
    return `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);font-size:.78rem;">
      <span style="color:var(--text2);">${icon} vs <b>${e.oppName}</b>${cat}</span>
      <span style="font-weight:700;color:${e.won?'#27ae60':e.myScore===e.oppScore?'var(--text3)':'#e74c3c'}">${e.myScore}:${e.oppScore}</span>
    </div>`;
  }).join('');
}

// ── Firebase ──────────────────────────────────────────────────
async function _fbGet(p:string):Promise<unknown>{ const r=await fetch(`${DB_URL}${p}.json`);if(!r.ok)throw new Error('HTTP '+r.status);return r.json(); }
async function _fbPatch(p:string,d:unknown):Promise<void>{ await fetch(`${DB_URL}${p}.json`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}); }
async function _fbSet(p:string,d:unknown):Promise<void>{ await fetch(`${DB_URL}${p}.json`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}); }

// ── Room state ────────────────────────────────────────────────
let _roomId    = '';
let _mySlot:   'p1'|'p2' = 'p1';
let _pollTimer: ReturnType<typeof setInterval> | null = null;
let _quizDeck: WordEntry[] = [];
let _quizIdx   = 0;
let _myScore   = 0;
let _answered  = false;
let _mode:     DuelMode   = 'quiz';
let _tempoTimer: ReturnType<typeof setInterval> | null = null;
let _tempoLeft = TEMPO_SEC;
let _finished  = false;
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
// Freeze timer
let _freezeTimer: ReturnType<typeof setTimeout> | null = null;
let _oppName   = '';
let _oppAvatar = '';

// ── Session persistence ───────────────────────────────────────
const SESSION_KEY = 'ew_duel_session';
function _saveSession(): void {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify({roomId:_roomId,slot:_mySlot,mode:_mode,idx:_quizIdx,score:_myScore})); } catch(e){}
}
function _clearSession(): void { try { localStorage.removeItem(SESSION_KEY); } catch(e){} }
function _loadSession():{roomId:string;slot:'p1'|'p2';mode:DuelMode;idx:number;score:number}|null {
  try { const r=localStorage.getItem(SESSION_KEY); return r?JSON.parse(r):null; } catch(e){ return null; }
}

// ── Deck building ─────────────────────────────────────────────
function _genCode(): string { return Array.from(crypto.getRandomValues(new Uint8Array(6)),v=>CHARS[v%CHARS.length]).join(''); }
function _fmtCode(c:string): string { return c.slice(0,3)+'-'+c.slice(3); }
function _rng(seed:number):()=>number{ let s=seed; return()=>{s=(s*1664525+1013904223)&0x7FFFFFFF;return s/0x7FFFFFFF;}; }

function _buildDeck(seed:number, category:string, difficulty:Difficulty): WordEntry[] {
  const rnd = _rng(seed);
  let pool = W as unknown as WordEntry[];
  // Category filter
  if (category) {
    const allowed = new Set((WORD_CATEGORIES[category]??[]).map((w:string)=>w.toLowerCase()));
    pool = pool.filter(w => allowed.has(w[0].toLowerCase()));
  }
  // Difficulty filter
  if (difficulty === 'easy')   pool = pool.slice(0, Math.min(1000, pool.length));
  if (difficulty === 'normal') pool = pool.slice(0, Math.min(3000, pool.length));
  if (pool.length < ROOM_SIZE) pool = W as unknown as WordEntry[]; // fallback
  return Array.from({length:pool.length},(_,i)=>i).sort(()=>rnd()-0.5).slice(0,ROOM_SIZE).map(i=>pool[i]);
}

function _getMyName():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.name||'Гравець';}catch(e){return 'Гравець';} }
function _getMyAvatar():string{ try{const prfs=_getProfiles();const id=_getActiveId();return prfs.find((x:any)=>x.id===id)?.avatar||'🧑';}catch(e){return '🧑';} }

// ── UI refs ───────────────────────────────────────────────────
const $ = (id:string) => document.getElementById(id)!;
const elLobby     = () => $('duel-lobby')     as HTMLElement;
const elCountdown = () => $('duel-countdown') as HTMLElement;
const elGame      = () => $('duel-game')      as HTMLElement;
const elResult    = () => $('duel-result')    as HTMLElement;
const elMsg       = () => $('duel-msg');
const elMyScore   = () => $('dm-my-score');
const elOppScore  = () => $('dm-opp-score');
const elOppName   = () => $('dm-opp-name');
const elOppAv     = () => $('dm-opp-av');
const elOppProg   = () => $('dm-opp-progress');
const elModeBadge = () => $('dm-mode-badge');
const elQuestion  = () => $('dm-question');
const elProgress  = () => $('dm-progress');
const elOpts      = () => $('dm-options')  as HTMLElement;
const elInput     = () => $('dm-input')    as HTMLInputElement;
const elFeedback  = () => $('dm-feedback');
const elSpeed     = () => $('dm-speed');
const elTimerBar  = () => $('dm-timer-bar') as HTMLElement;
const elTimerNum  = () => $('dm-timer-num');

function _showLobby()    { elLobby().style.display=''; elCountdown().style.display='none'; elGame().style.display='none'; elResult().style.display='none'; }
function _showCountdown(){ elLobby().style.display='none'; elCountdown().style.display=''; elGame().style.display='none'; elResult().style.display='none'; }
function _showGame()     { elLobby().style.display='none'; elCountdown().style.display='none'; elGame().style.display=''; elResult().style.display='none'; }
function _showResult()   { elLobby().style.display='none'; elCountdown().style.display='none'; elGame().style.display='none'; elResult().style.display=''; }

// ── Lobby pickers ─────────────────────────────────────────────
let _selMode:       DuelMode   = 'quiz';
let _selCategory:   string     = '';
let _selDifficulty: Difficulty = 'normal';
let _selBestOf:      BestOf     = 1;
let _selMaxHints:    number     = 3;
let _selPowerups:    boolean    = true;

function _renderModePicker(): void {
  const el = $('duel-mode-picker'); if(!el) return;
  el.innerHTML = DUEL_MODES.map(m=>
    `<button class="duel-mode-btn${m.id===_selMode?' duel-mode-sel':''}" data-mode="${m.id}" style="flex:1;min-width:90px;padding:9px 6px;border-radius:11px;border:2px solid ${m.id===_selMode?'var(--accent)':'var(--border)'};background:${m.id===_selMode?'rgba(0,200,100,.08)':'var(--card)'};cursor:pointer;font-family:inherit;text-align:center;">
      <div style="font-size:1.2rem;">${m.icon}</div>
      <div style="font-size:.75rem;font-weight:700;color:var(--text);margin-top:2px;">${m.label}</div>
      <div style="font-size:.62rem;color:var(--text3);">${m.desc}</div>
    </button>`).join('');
  el.querySelectorAll<HTMLButtonElement>('.duel-mode-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{ _selMode=btn.dataset.mode as DuelMode; _renderModePicker(); });
  });
}

function _renderCategoryPicker(): void {
  const el = $('duel-cat-picker'); if(!el) return;
  const cats = ['', ...CATEGORY_LIST];
  el.innerHTML = `<select style="width:100%;padding:8px 12px;border:1.5px solid var(--border);border-radius:10px;background:var(--bg);color:var(--text);font-family:inherit;font-size:.83rem;outline:none;">
    ${cats.map(c=>`<option value="${c}"${c===_selCategory?' selected':''}>${c||'🌐 Всі слова'}</option>`).join('')}
  </select>`;
  el.querySelector('select')?.addEventListener('change',e=>{ _selCategory=(e.target as HTMLSelectElement).value; });
}

function _renderOptionsRow(): void {
  const el = $('duel-options-row'); if(!el) return;
  el.innerHTML = `
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;font-size:.8rem;color:var(--text2);">
      <label style="display:flex;align-items:center;gap:5px;">
        Складність:
        <select id="duel-diff-sel" style="padding:4px 8px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);font-size:.8rem;font-family:inherit;outline:none;">
          ${DIFFICULTIES.map(d=>`<option value="${d.id}"${d.id===_selDifficulty?' selected':''}>${d.label}</option>`).join('')}
        </select>
      </label>
      <label style="display:flex;align-items:center;gap:5px;">
        Формат:
        <select id="duel-bestof-sel" style="padding:4px 8px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);font-size:.8rem;font-family:inherit;outline:none;">
          <option value="1"${_selBestOf===1?' selected':''}>Один раунд</option>
          <option value="3"${_selBestOf===3?' selected':''}>Best of 3</option>
        </select>
      </label>
      <label style="display:flex;align-items:center;gap:5px;">
        Підказок:
        <select id="duel-hints-sel" style="padding:4px 8px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);font-size:.8rem;font-family:inherit;outline:none;">
          <option value="0"${_selMaxHints===0?' selected':''}>Без обмежень</option>
          <option value="3"${_selMaxHints===3?' selected':''}>3 підказки</option>
          <option value="1"${_selMaxHints===1?' selected':''}>1 підказка</option>
        </select>
      </label>
      <label style="display:flex;align-items:center;gap:5px;cursor:pointer;">
        <input type="checkbox" id="duel-powerups-chk"${_selPowerups?' checked':''} style="cursor:pointer;">
        <span>🎯 Power-ups</span>
      </label>
    </div>`;
  $('duel-diff-sel')?.addEventListener('change', e=>{ _selDifficulty=(e.target as HTMLSelectElement).value as Difficulty; });
  $('duel-bestof-sel')?.addEventListener('change', e=>{ _selBestOf=parseInt((e.target as HTMLSelectElement).value) as BestOf; });
  $('duel-hints-sel')?.addEventListener('change', e=>{ _selMaxHints=parseInt((e.target as HTMLSelectElement).value); });
  ($('duel-powerups-chk') as HTMLInputElement)?.addEventListener('change', e=>{ _selPowerups=(e.target as HTMLInputElement).checked; });
}

// ── Countdown ─────────────────────────────────────────────────
function _runCountdown(cb: ()=>void): void {
  _showCountdown();
  const numEl = $('dc-number');
  const oppEl = $('dc-opp-row');
  if (oppEl) oppEl.textContent = `${_oppAvatar} ${_oppName} vs ${_getMyAvatar()} ${_getMyName()}`;
  let n = 3;
  numEl.textContent = '3';
  const t = setInterval(()=>{
    n--;
    if (n > 0) {
      numEl.textContent = String(n);
      numEl.style.transform = 'scale(1.4)';
      setTimeout(()=>{ numEl.style.transform=''; }, 150);
    } else if (n === 0) {
      numEl.textContent = '⚡';
    } else {
      clearInterval(t); cb();
    }
  }, 1000);
}

// ── Create / Join ─────────────────────────────────────────────
async function createRoom(): Promise<void> {
  const btn = $('duel-create-btn') as HTMLButtonElement;
  btn.disabled=true; btn.textContent='Створення...';
  try {
    _roomId=_genCode(); _mySlot='p1';
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
    _quizDeck=_buildDeck(seed,_selCategory,_selDifficulty);
    const codeEl=$('duel-room-code'); if(codeEl) codeEl.textContent=_fmtCode(_roomId);
    const modeEl=$('duel-waiting-mode');
    const mInfo=DUEL_MODES.find(m=>m.id===_selMode)!;
    const catLabel=_selCategory?` · ${_selCategory.split(' ')[0]}`:'';
    const diffLabel=DIFFICULTIES.find(d=>d.id===_selDifficulty)?.label||'';
    if(modeEl) modeEl.textContent=`${mInfo.icon} ${mInfo.label}${catLabel} · ${diffLabel}${_selBestOf===3?' · Best of 3':''}`;
    elMsg().style.display='none';
    $('duel-waiting').style.display='block';
    $('duel-join-row').style.display='none';
    _startWaitPoll();
  } catch(e){
    btn.disabled=false; btn.textContent='⚔️ Створити кімнату';
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinRoom(): Promise<void> {
  const inp=$('duel-join-input') as HTMLInputElement;
  const btn=$('duel-join-btn') as HTMLButtonElement;
  const code=inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(code.length<6){elMsg().textContent='❌ Введіть код кімнати';elMsg().style.display='block';return;}
  btn.disabled=true; btn.textContent='Підключення...';
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error('Кімнату не знайдено');
    if(room.p2)      throw new Error('Кімната вже зайнята');
    if(room.finished) throw new Error('Дуель вже завершена');
    _roomId=code; _mySlot='p2';
    _quizDeck=_buildDeck(room.seed,room.category,room.difficulty);
    _bestOf=room.bestOf||1; _series={...room.series};
    await _fbPatch(`/duel_rooms/${_roomId}`,{
      p2:{name:_getMyName(),avatar:_getMyAvatar(),score:0,idx:0,done:false,hintsLeft:room.maxHints,powerups:{double:room.powerupsEnabled?1:0,skip:room.powerupsEnabled?1:0,freeze:room.powerupsEnabled?1:0}},
      started:true,
    });
    _oppName=room.p1.name; _oppAvatar=room.p1.avatar;
    _initGame(room.mode,room.maxHints,room.bestOf,room.series,room.powerupsEnabled);
  } catch(e){
    btn.disabled=false; btn.textContent='→ Приєднатись';
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
  _quizIdx=0; _myScore=0; _answered=false; _finished=false;
  _hintsLeft = maxHints === 0 ? 999 : maxHints;
  _powerupsEnabled = powerupsEnabled;
  _myPowerups = powerupsEnabled ? {double:1,skip:1,freeze:1} : {double:0,skip:0,freeze:0};
  _doubleActive = false;
  _runCountdown(()=>_startGameUI());
}

function _startGameUI(): void {
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  elOppName().textContent=_oppName; elOppAv().textContent=_oppAvatar;
  elMyScore().textContent='0'; elOppScore().textContent='0';
  elOppProg().textContent='0/10';
  const mInfo=DUEL_MODES.find(m=>m.id===_mode)||DUEL_MODES[0];
  elModeBadge().textContent=`${mInfo.icon} ${mInfo.label}`;
  elOpts().style.display=_mode==='write'?'none':'';
  const ir=$('dm-input-row') as HTMLElement|null; if(ir) ir.style.display=_mode==='write'?'':'none';
  const tr=$('dm-timer-row') as HTMLElement|null; if(tr) tr.style.display=_mode==='tempo'?'':'none';
  // Hint button
  _updateHintUI();
  // Power-ups
  _renderPowerups();
  // Series indicator
  _updateSeriesUI();
  _showGame();
  _renderQuestion();
  _startOpponentPoll();
}

function _updateHintUI(): void {
  const hb=$('dm-hint-btn') as HTMLButtonElement|null;
  if(!hb) return;
  if(_mode!=='write'){ hb.style.display='none'; return; }
  hb.style.display='';
  hb.textContent=_hintsLeft>=999?'💡 Підказка':`💡 ×${_hintsLeft}`;
  hb.disabled = _hintsLeft<=0;
}

function _renderPowerups(): void {
  const el=$('dm-powerups') as HTMLElement|null; if(!el) return;
  if(!_powerupsEnabled){ el.style.display='none'; return; }
  el.style.display='flex';
  el.innerHTML = POWERUPS.map(p=>{
    const left = _myPowerups[p.id];
    const disabled = left<=0 || _answered ? 'disabled' : '';
    return `<button class="dm-pu-btn" data-pu="${p.id}" ${disabled}
      title="${p.desc}"
      style="padding:5px 8px;border-radius:9px;border:1.5px solid ${left>0?'var(--accent)':'var(--border)'};background:${left>0?'rgba(0,200,100,.08)':'var(--bg2)'};cursor:${left>0&&!_answered?'pointer':'default'};font-size:.78rem;color:${left>0?'var(--accent)':'var(--text3)'};">
      ${p.icon} ${p.label}${left>0?` ×${left}`:''}
    </button>`;
  }).join('');
  el.querySelectorAll<HTMLButtonElement>('.dm-pu-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{ if(!btn.disabled) _usePowerup(btn.dataset.pu as PowerupType); });
  });
}

async function _usePowerup(type: PowerupType): Promise<void> {
  if(_myPowerups[type]<=0 || _answered) return;
  _myPowerups[type]--;
  _renderPowerups();
  const w = _quizDeck[_quizIdx];
  if(type==='double'){
    _doubleActive = true;
    _showMiniToast('🎯 Подвійні очки активовано!');
  } else if(type==='skip'){
    // Skip current question without penalty
    _answered = true;
    if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
    elFeedback().innerHTML='<span style="color:var(--accent)">⏩ Питання пропущено</span>';
    _quizIdx++;
    await _pushScore();
    setTimeout(()=>{ if(_quizIdx<ROOM_SIZE) _renderQuestion(); else _finishMyGame(); }, 700);
  } else if(type==='freeze'){
    // Send freeze signal to opponent via Firebase
    try{ await _fbPatch(`/duel_rooms/${_roomId}`,{[`${_mySlot==='p1'?'p2':'p1'}_freeze`]:Date.now()+5000}); }catch(e){}
    _showMiniToast('🧊 Суперника заморожено на 5с!');
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

// ── Animated opponent progress bar ──────────────────────────
function _renderOppProgressBar(idx:number): void {
  const el=$('dm-opp-progress-bar') as HTMLElement|null; if(!el) return;
  el.innerHTML = Array.from({length:ROOM_SIZE},(_,i)=>
    `<span style="width:10px;height:10px;border-radius:50%;display:inline-block;background:${i<idx?'var(--accent2)':'var(--border)'};margin:1px;transition:background .3s;"></span>`
  ).join('');
}

function _updateSeriesUI(): void {
  const el=$('dm-series-row') as HTMLElement|null; if(!el) return;
  if(_bestOf===1){ el.style.display='none'; return; }
  el.style.display='flex';
  $('dm-series-me').textContent=String(_mySlot==='p1'?_series.p1wins:_series.p2wins);
  $('dm-series-opp').textContent=String(_mySlot==='p1'?_series.p2wins:_series.p1wins);
}

function _startOpponentPoll(): void {
  _pollTimer=setInterval(async()=>{
    try {
      const room=await _fbGet(`/duel_rooms/${_roomId}`) as (RoomData & Record<string,unknown>)|null;
      if(!room) return;
      const opp=_mySlot==='p1'?room.p2:room.p1;
      if(opp){
        elOppScore().textContent=String(opp.score);
        elOppProg().textContent=`${opp.idx}/${ROOM_SIZE}`;
        _renderOppProgressBar(opp.idx);
        if(opp.reaction) _showReactionReceived(opp.reaction);
      }
      // Check if I'm frozen (opponent used freeze on me)
      const myFreezeKey = `${_mySlot}_freeze`;
      const freezeUntil = room[myFreezeKey] as number|undefined;
      if(freezeUntil && freezeUntil > Date.now() && !_answered && _mode==='tempo'){
        if(!_freezeTimer){
          const remaining = Math.ceil((freezeUntil-Date.now())/1000);
          elFeedback().innerHTML=`<span style="color:#5dade2">🧊 Заморожено на ${remaining}с!</span>`;
          if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
          _freezeTimer=setTimeout(()=>{
            _freezeTimer=null; elFeedback().textContent='';
            _startTempoTimer(_quizDeck[_quizIdx]);
          },freezeUntil-Date.now());
        }
      }
      if(room.finished){ clearInterval(_pollTimer!); _pollTimer=null; _showFinish(room as RoomData); }
    } catch(e){}
  },1500);
}

// ── Reactions ─────────────────────────────────────────────────
let _lastReaction = '';
function _showReactionReceived(emoji:string): void {
  if(emoji===_lastReaction) return;
  _lastReaction=emoji;
  const el=$('dm-reaction-received') as HTMLElement|null; if(!el) return;
  el.textContent=emoji; el.style.display='block';
  setTimeout(()=>{ el.style.display='none'; _lastReaction=''; }, 2000);
}

async function _sendReaction(emoji:string): Promise<void> {
  try { await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{reaction:emoji}); } catch(e){}
  // Show briefly on own screen too
  const el=$('dm-reaction-received') as HTMLElement|null; if(!el) return;
  el.textContent='✅ Надіслано'; el.style.display='block';
  setTimeout(()=>{ el.style.display='none'; },1000);
}

// ── Questions ─────────────────────────────────────────────────
function _renderQuestion(): void {
  if(_quizIdx>=_quizDeck.length){_finishMyGame();return;}
  const w=_quizDeck[_quizIdx];
  _answered=false; _answerStartMs=Date.now();
  elProgress().textContent=`${_quizIdx+1} / ${ROOM_SIZE}`;
  elFeedback().textContent=''; elSpeed().textContent='';
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  const nb=$('dm-next-btn') as HTMLButtonElement|null; if(nb) nb.style.display='none';
  if(_mode==='write') _renderWriteQ(w); else _renderChoiceQ(w);
  if(_mode==='tempo') _startTempoTimer(w);
}

function _renderChoiceQ(w:WordEntry): void {
  const isRev=_mode==='reverse';
  const q=isRev?w[1]:w[0], ans=isRev?w[0]:w[1];
  elQuestion().innerHTML=`<div style="font-size:1.25rem;font-weight:700;color:var(--text);text-align:center;">${q}</div>`;
  elOpts().innerHTML='';
  const wrongs:string[]=[]; const used=new Set([w[0].toLowerCase()]);
  const pool=_shuf(W.slice() as unknown as WordEntry[]);
  for(const pw of pool){if(wrongs.length>=NUM_OPTS-1)break;if(used.has(pw[0].toLowerCase()))continue;used.add(pw[0].toLowerCase());wrongs.push(isRev?pw[0]:pw[1]);}
  _shuf([ans,...wrongs]).forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='quiz-option';
    btn.innerHTML=`<span class="opt-num">${i+1}</span> ${opt}`;
    btn.addEventListener('click',()=>_answerChoice(btn,opt,ans,w));
    elOpts().appendChild(btn);
  });
}

function _renderWriteQ(w:WordEntry): void {
  elQuestion().innerHTML=`<div style="font-size:1.25rem;font-weight:700;color:var(--text);text-align:center;">${w[1]}</div><div style="font-size:.78rem;color:var(--text3);margin-top:4px;text-align:center;">Введи англійською</div>`;
  const inp=elInput(); inp.value=''; inp.style.borderColor=''; inp.disabled=false;
  _updateHintUI(); _renderPowerups();
  setTimeout(()=>{try{inp.focus();}catch(e){}},60);
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
        elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>b.disabled=true);
        elFeedback().innerHTML='<span style="color:#e74c3c">⏰ Час вийшов!</span>';
        _quizIdx++; _pushScore();
        setTimeout(()=>_renderQuestion(),1000);
      }
    }
  },1000);
}

// ── Answers ───────────────────────────────────────────────────
async function _answerChoice(btn:HTMLButtonElement,chosen:string,correct:string,_w:WordEntry):Promise<void>{
  if(_answered) return;
  _answered=true;
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  const ms=Date.now()-_answerStartMs;
  elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>b.disabled=true);
  const ok=chosen===correct;
  btn.classList.add(ok?'correct':'wrong');
  if(!ok) elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>{if(b.textContent?.includes(correct)) b.classList.add('reveal');});
  let feedbackHtml = '';
  if(ok){
    const wasDouble = _doubleActive;
    const pts = wasDouble ? 2 : 1;
    _myScore += pts;
    if(wasDouble){ _doubleActive=false; feedbackHtml=`<span style="color:#f39c12">🎯 +2 очки!</span>`; }
    else { feedbackHtml='<span style="color:#27ae60">✓ Правильно!</span>'; }
  } else {
    feedbackHtml=`<span style="color:#e74c3c">✗ ${correct}</span>`;
  }
  elMyScore().textContent=String(_myScore);
  elFeedback().innerHTML=feedbackHtml;
  elSpeed().textContent=ok?`⚡ ${(ms/1000).toFixed(1)}с`:'';
  _renderPowerups();
  _quizIdx++; await _pushScore();
  setTimeout(()=>{if(_quizIdx<ROOM_SIZE)_renderQuestion();else _finishMyGame();},ok?600:1200);
}

function _submitWrite(): void {
  if(_answered) return;
  const w=_quizDeck[_quizIdx], inp=elInput();
  const val=inp.value.trim().toLowerCase(), ans=w[0].toLowerCase();
  const ok=val===ans||(ans.length>3&&lev(val,ans)<=1);
  const ms=Date.now()-_answerStartMs;
  _answered=true; inp.disabled=true;
  inp.style.borderColor=ok?'#27ae60':'#e74c3c';
  if(ok) _myScore++;
  elMyScore().textContent=String(_myScore);
  elFeedback().innerHTML=ok?'<span style="color:#27ae60">✓ Правильно!</span>':`<span style="color:#e74c3c">✗ ${w[0]}</span>`;
  elSpeed().textContent=ok?`⚡ ${(ms/1000).toFixed(1)}с`:'';
  _quizIdx++; _pushScore();
  const nb=$('dm-next-btn') as HTMLButtonElement|null;
  if(nb){nb.style.display='inline-block';nb.focus();}
}

function _useHint(): void {
  if(_hintsLeft<=0||!_answered===false) return; // only before answering
  const w=_quizDeck[_quizIdx]; if(!w) return;
  if(_hintsLeft<999) _hintsLeft--;
  _updateHintUI();
  const h=w[0]; const hEl=elQuestion().querySelector('.dm-hint-text') as HTMLElement|null;
  const hint=`💡 ${h.slice(0,Math.ceil(h.length/3))}...`;
  if(hEl){ hEl.textContent=hint; }
  else {
    const d=document.createElement('div');
    d.className='dm-hint-text';
    d.style.cssText='font-size:.78rem;color:var(--accent);margin-top:6px;text-align:center;';
    d.textContent=hint;
    elQuestion().appendChild(d);
  }
}

async function _pushScore():Promise<void>{
  _saveSession();
  try{await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{score:_myScore,idx:_quizIdx});}catch(e){}
}

async function _finishMyGame():Promise<void>{
  try{
    await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`,{score:_myScore,idx:ROOM_SIZE,done:true});
    const room=await _fbGet(`/duel_rooms/${_roomId}`) as RoomData;
    const opp=_mySlot==='p1'?room.p2:room.p1;
    if(opp?.done){
      await _fbPatch(`/duel_rooms/${_roomId}`,{finished:true});
      clearInterval(_pollTimer!); _pollTimer=null;
      _showFinish({...room,[_mySlot]:{...room[_mySlot],score:_myScore,done:true}} as RoomData);
    } else {
      elFeedback().textContent='⏳ Чекаємо суперника…';
      elOpts().innerHTML=''; elOpts().style.display='none';
      const ir=$('dm-input-row') as HTMLElement|null; if(ir) ir.style.display='none';
    }
  }catch(e){console.warn('[duel]',e);}
}

function _showFinish(room:RoomData):void{
  if(_finished) return;
  _finished=true;
  // Tournament hook: if we're in a tournament match, report result and return to bracket
  const hook=(window as Window&{_tournFinishHook?:(r:RoomData)=>void})._tournFinishHook;
  if(hook&&_tournId){
    (window as Window&{_tournFinishHook?:(r:RoomData)=>void})._tournFinishHook=undefined;
    hook(room);
    setTimeout(()=>{ _showTournament(); const t=_tournData; if(t) _renderTournBracket(t); },800);
    return;
  }
  const me=room[_mySlot] as PlayerData;
  const opp=(_mySlot==='p1'?room.p2:room.p1) as PlayerData;
  const won=me.score>(opp?.score??0), tie=me.score===(opp?.score??0);
  const mInfo=DUEL_MODES.find(m=>m.id===room.mode)||DUEL_MODES[0];

  // Save history + rating
  _addHistory({date:new Date().toLocaleDateString('uk'),mode:room.mode,myScore:me.score,oppScore:opp?.score??0,oppName:opp?.name||'Суперник',won,category:room.category});
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
        `<div style="font-weight:700;font-size:1.1rem;color:var(--text);">Раунд ${newSeries.round-1}: ${won?'твоя перемога':tie?'нічия':'перемога суперника'}</div>`+
        `<div style="font-size:.85rem;color:var(--text2);margin:8px 0;">Серія: ${_getMyName()} ${myW} — ${oppW} ${opp?.name||'Суперник'}</div>`;
      const nb=$('duel-rematch-btn') as HTMLButtonElement; if(nb){ nb.style.display='inline-block'; nb.textContent='▶ Наступний раунд'; }
      _showResult(); return;
    }
  }

  const catLabel=room.category?` · ${room.category.split(' ')[0]}`:'';
  const histEl=$('duel-history-entry'); if(histEl) histEl.textContent=`${mInfo.icon} ${mInfo.label}${catLabel} · ${new Date().toLocaleDateString('uk')}`;

  $('duel-result-inner').innerHTML=
    `<div style="font-size:.72rem;color:var(--text3);margin-bottom:6px;">${mInfo.icon} ${mInfo.label}${catLabel}</div>`+
    `<div style="font-size:3rem;margin-bottom:8px;">${won?'🏆':tie?'🤝':'😔'}</div>`+
    `<div style="font-size:1.2rem;font-weight:700;color:var(--text);margin-bottom:6px;">${won?'Ти переміг!':tie?'Нічия!':'Суперник переміг'}</div>`+
    `<div style="display:flex;gap:20px;justify-content:center;margin:14px 0;">`+
      `<div style="text-align:center;"><div style="font-size:2rem;">${me.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${won||tie?'#27ae60':'#e74c3c'}">${me.score}/${ROOM_SIZE}</div><div style="font-size:.72rem;color:var(--text3);">Ти</div></div>`+
      `<div style="font-size:1.5rem;align-self:center;color:var(--text3);">VS</div>`+
      `<div style="text-align:center;"><div style="font-size:2rem;">${opp?.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${!won&&!tie?'#27ae60':'#e74c3c'}">${opp?.score??0}/${ROOM_SIZE}</div><div style="font-size:.72rem;color:var(--text3);">${opp?.name||'Суперник'}</div></div>`+
    `</div>`;

  // Show rematch + reactions
  const rb=$('duel-rematch-btn') as HTMLButtonElement; if(rb){ rb.style.display='inline-block'; rb.textContent='⚔️ Реванш'; }
  const reactEl=$('duel-reactions'); if(reactEl){
    reactEl.innerHTML=REACTIONS.map(e=>`<button class="duel-react-end-btn" data-emoji="${e}" style="font-size:1.5rem;background:none;border:none;cursor:pointer;padding:4px;">${e}</button>`).join('');
    reactEl.querySelectorAll<HTMLButtonElement>('.duel-react-end-btn').forEach(b=>{
      b.addEventListener('click',()=>_sendReaction(b.dataset.emoji!));
    });
  }
  _showResult();
}

function _cancelRoom():void{
  _clearSession();
  if(_pollTimer){clearInterval(_pollTimer);_pollTimer=null;}
  if(_tempoTimer){clearInterval(_tempoTimer);_tempoTimer=null;}
  if(_freezeTimer){clearTimeout(_freezeTimer);_freezeTimer=null;}
  if(_roomId){
    if(_mySlot==='p1') fetch(`${DB_URL}/duel_rooms/${_roomId}.json`,{method:'DELETE'}).catch(()=>{});
    // Remove spectator entry if spectator
    if(_isSpectator&&_specId) fetch(`${DB_URL}/duel_rooms/${_roomId}/spectators/${_specId}.json`,{method:'DELETE'}).catch(()=>{});
    _roomId='';
  }
  _isSpectator=false;
  $('duel-waiting').style.display='none'; $('duel-join-row').style.display='block';
  const btn=$('duel-create-btn') as HTMLButtonElement; btn.disabled=false; btn.textContent='⚔️ Створити кімнату';
  elMsg().style.display='none';
}

// ── Spectator mode ────────────────────────────────────────────
async function joinAsSpectator(): Promise<void> {
  const inp=$('duel-join-input') as HTMLInputElement;
  const code=inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(code.length<6){elMsg().textContent='❌ Введіть код кімнати';elMsg().style.display='block';return;}
  try {
    const room=await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if(!room?.seed) throw new Error('Кімнату не знайдено');
    _isSpectator=true; _specId=_genCode(); _roomId=code;
    // Register spectator
    await _fbPatch(`/duel_rooms/${code}/spectators/${_specId}`,{name:_getMyName(),avatar:_getMyAvatar()});
    // Show spectator view
    _startSpectatorView(room);
  } catch(e){
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _startSpectatorView(room:RoomData): void {
  const el=$('duel-spectate') as HTMLElement|null; if(!el) return;
  elLobby().style.display='none'; el.style.display='';
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
  const el=$('duel-spectate') as HTMLElement|null; if(!el) return;
  const p1=room.p1, p2=room.p2;
  const mInfo=DUEL_MODES.find(m=>m.id===room.mode)||DUEL_MODES[0];
  const specCount=Object.keys(room.spectators||{}).length;
  el.innerHTML=`
    <div style="text-align:center;padding:20px 10px;">
      <div style="font-size:.72rem;color:var(--accent);margin-bottom:6px;">👀 Режим спостерігача${specCount>0?` · ${specCount} гляд.`:''}</div>
      <div style="font-size:.82rem;font-weight:700;color:var(--text);margin-bottom:16px;">${mInfo.icon} ${mInfo.label}</div>
      <div style="display:flex;gap:20px;justify-content:center;align-items:center;">
        <div style="text-align:center;">
          <div style="font-size:1.8rem;">${p1.avatar}</div>
          <div style="font-weight:700;font-size:.9rem;color:var(--text);">${p1.name}</div>
          <div style="font-size:1.8rem;font-weight:900;color:var(--accent);margin:4px 0;">${p1.score}</div>
          <div style="font-size:.7rem;color:var(--text3);">${p1.idx}/${ROOM_SIZE}</div>
          <div>${Array.from({length:ROOM_SIZE},(_,i)=>`<span style="width:8px;height:8px;border-radius:50%;display:inline-block;background:${i<p1.idx?'var(--accent)':'var(--border)'};margin:1px;"></span>`).join('')}</div>
        </div>
        <div style="font-size:1.2rem;color:var(--text3);">⚔️</div>
        <div style="text-align:center;">
          ${p2?`
            <div style="font-size:1.8rem;">${p2.avatar}</div>
            <div style="font-weight:700;font-size:.9rem;color:var(--text);">${p2.name}</div>
            <div style="font-size:1.8rem;font-weight:900;color:var(--accent2);margin:4px 0;">${p2.score}</div>
            <div style="font-size:.7rem;color:var(--text3);">${p2.idx}/${ROOM_SIZE}</div>
            <div>${Array.from({length:ROOM_SIZE},(_,i)=>`<span style="width:8px;height:8px;border-radius:50%;display:inline-block;background:${i<p2.idx?'var(--accent2)':'var(--border)'};margin:1px;"></span>`).join('')}</div>
          `:'<div style="color:var(--text3);font-size:.82rem;">Очікуємо P2…</div>'}
        </div>
      </div>
      <button id="duel-spec-leave" style="margin-top:20px;padding:8px 18px;border-radius:10px;border:1.5px solid var(--border);background:none;color:var(--text2);cursor:pointer;font-family:inherit;font-size:.82rem;">✕ Вийти</button>
    </div>`;
  $('duel-spec-leave')?.addEventListener('click',()=>{ _cancelRoom(); el.style.display='none'; _showLobby(); renderDuel(); });
}

// ── Async duel (challenge) ────────────────────────────────────
async function createAsyncChallenge(): Promise<void> {
  const btn=$('duel-async-btn') as HTMLButtonElement;
  btn.disabled=true; btn.textContent='Створення...';
  try {
    // Clear any stale tournament state so _showFinish doesn't route to tournament path
    _tournId=''; _tournData=null;
    (window as Window & {_tournFinishHook?:unknown})._tournFinishHook=undefined;
    const code=_genCode();
    const seed=Date.now();
    const challenge: AsyncDuel = {
      seed, mode:_selMode, category:_selCategory, difficulty:_selDifficulty,
      createdAt:Date.now(), expiresAt:Date.now()+86_400_000, // 24 hours
      challenger:{ name:_getMyName(), avatar:_getMyAvatar(), score:0, done:false },
      finished:false,
    };
    await _fbSet(`/duel_async/${code}`, challenge);
    // Play immediately as challenger
    _roomId=code; _mySlot='p1'; _quizDeck=_buildDeck(seed,_selCategory,_selDifficulty);
    // Show code to share
    const codeEl=$('duel-room-code'); if(codeEl) codeEl.textContent=_fmtCode(code);
    const modeEl=$('duel-waiting-mode');
    if(modeEl) modeEl.textContent=`📬 Виклик · ігровий режим: ${DUEL_MODES.find(m=>m.id===_selMode)?.label} · 24г на відповідь`;
    $('duel-waiting').style.display='block';
    $('duel-join-row').style.display='none';
    // Start playing immediately
    setTimeout(()=>{
      $('duel-waiting').style.display='none';
      _initGame(_selMode, _selMaxHints, 1, {p1wins:0,p2wins:0,round:1}, _selPowerups);
    }, 2000);
  } catch(e){
    btn.disabled=false; btn.textContent='📬 Надіслати виклик';
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinAsyncChallenge(): Promise<void> {
  const inp=$('duel-join-input') as HTMLInputElement;
  const code=inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if(code.length<6){elMsg().textContent='❌ Введіть код виклику';elMsg().style.display='block';return;}
  try {
    const challenge=await _fbGet(`/duel_async/${code}`) as AsyncDuel|null;
    if(!challenge) throw new Error('Виклик не знайдено');
    if(challenge.finished) throw new Error('Виклик вже завершено');
    if(Date.now()>challenge.expiresAt) throw new Error('Виклик прострочений (24 год)');
    if(challenge.opponent) throw new Error('Хтось вже відповів на цей виклик');
    _roomId=code; _mySlot='p2'; _quizDeck=_buildDeck(challenge.seed,challenge.category,challenge.difficulty);
    _oppName=challenge.challenger.name; _oppAvatar=challenge.challenger.avatar;
    const msg=`📬 Виклик від ${challenge.challenger.avatar} ${challenge.challenger.name} · ${DUEL_MODES.find(m=>m.id===challenge.mode)?.label}`;
    elMsg().textContent=msg; elMsg().style.display='block';
    setTimeout(()=>{ elMsg().style.display='none'; _initGame(challenge.mode,3,1,{p1wins:0,p2wins:0,round:1}); }, 1500);
  } catch(e){
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _doRematch():void{
  if(_mySlot==='p1'){
    // p1 creates a new room — show waiting screen
    _cancelRoom(); createRoom();
  } else {
    // p2 gets new code to join
    _showLobby(); renderDuel();
    elMsg().textContent='🔄 Попроси суперника створити нову кімнату'; elMsg().style.display='block';
  }
}

// ── Session resume ────────────────────────────────────────────
async function _tryResumeSession():Promise<void>{
  const sess=_loadSession(); if(!sess?.roomId) return;
  try{
    const room=await _fbGet(`/duel_rooms/${sess.roomId}`) as RoomData|null;
    if(!room||room.finished){_clearSession();return;}
    const resumeEl=$('duel-resume') as HTMLElement|null; if(!resumeEl) return;
    const opp=sess.slot==='p1'?room.p2:room.p1;
    const mInfo=DUEL_MODES.find(m=>m.id===sess.mode)||DUEL_MODES[0];
    resumeEl.innerHTML=`<div style="background:rgba(0,200,100,.1);border:1.5px solid var(--accent);border-radius:14px;padding:12px 16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;">`+
      `<div><div style="font-size:.82rem;font-weight:700;color:var(--accent);">🔄 Незавершена дуель</div>`+
      `<div style="font-size:.75rem;color:var(--text3);margin-top:2px;">${mInfo.icon} ${mInfo.label} · ${sess.score}/${ROOM_SIZE} очок${opp?` · суперник: ${opp.name}`:''}</div></div>`+
      `<div style="display:flex;gap:6px;">`+
        `<button id="duel-resume-btn" style="padding:7px 14px;border-radius:9px;border:none;background:var(--accent);color:#fff;font-weight:600;cursor:pointer;font-family:inherit;font-size:.82rem;">Продовжити</button>`+
        `<button id="duel-resume-discard" style="padding:7px 12px;border-radius:9px;border:1.5px solid var(--border);background:none;color:var(--text3);cursor:pointer;font-family:inherit;font-size:.78rem;">✕</button>`+
      `</div></div>`;
    resumeEl.style.display='block';
    $('duel-resume-btn')?.addEventListener('click',()=>{
      resumeEl.style.display='none';
      _roomId=sess.roomId; _mySlot=sess.slot; _mode=sess.mode;
      _quizDeck=_buildDeck(room.seed,room.category,room.difficulty);
      _oppName=room[sess.slot==='p1'?'p2':'p1']?.name||'Суперник';
      _oppAvatar=room[sess.slot==='p1'?'p2':'p1']?.avatar||'🧑';
      const savedIdx=sess.idx,savedScore=sess.score;
      _initGame(sess.mode,room.maxHints,room.bestOf||1,room.series||{p1wins:0,p2wins:0,round:1});
      _quizIdx=savedIdx; _myScore=savedScore;
      elMyScore().textContent=String(savedScore);
      _renderQuestion();
    });
    $('duel-resume-discard')?.addEventListener('click',()=>{_clearSession();resumeEl.style.display='none';});
  }catch(e){_clearSession();}
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

function _showTournament() { elLobby().style.display='none'; ($('duel-tournament') as HTMLElement).style.display=''; }
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
  if(left===1) return '🏆 Фінал';
  if(left===2) return '🥈 Півфінал';
  if(left===3) return '🥉 Чвертьфінал';
  return `Раунд ${round+1}`;
}

async function createTournament(size:4|8): Promise<void> {
  const btn=$(`tourn-create-${size}`) as HTMLButtonElement;
  btn.disabled=true; btn.textContent='Створення...';
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
    btn.disabled=false; btn.textContent=size===4?'🏟️ Турнір ×4':'🏆 Турнір ×8';
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinTournament(): Promise<void> {
  const code = prompt('Введи код турніру:')?.replace(/[-\s]/g,'').toUpperCase();
  if(!code||code.length<6) return;
  try {
    const tourn=await _fbGet(`/tournaments/${code}`) as Tournament|null;
    if(!tourn) throw new Error('Турнір не знайдено');
    if(tourn.started) throw new Error('Турнір вже почався');
    if(tourn.finished) throw new Error('Турнір завершено');
    const slots=Object.keys(tourn.players).map(Number);
    if(slots.length>=tourn.size) throw new Error(`Всі ${tourn.size} місць зайняті`);
    // Find first free slot
    const mySlot=Array.from({length:tourn.size},(_,i)=>i).find(i=>!tourn.players[i]);
    if(mySlot===undefined) throw new Error('Немає вільних місць');
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

function _renderTournWaiting(t:Tournament): void {
  const wEl=$('tourn-waiting') as HTMLElement;
  const bEl=$('tourn-bracket') as HTMLElement;
  wEl.style.display=''; bEl.style.display='none';
  ($('tourn-code') as HTMLElement).textContent=_fmtCode(_tournId);
  const mInfo=DUEL_MODES.find(m=>m.id===t.mode)||DUEL_MODES[0];
  ($('tourn-mode-label') as HTMLElement).textContent=`${mInfo.icon} ${mInfo.label} · ${t.size} гравців`;
  const slotsEl=$('tourn-slots') as HTMLElement;
  slotsEl.innerHTML=Array.from({length:t.size},(_,i)=>{
    const p=t.players[i];
    return `<div style="padding:8px 10px;border-radius:10px;border:1.5px solid ${p?'var(--accent)':'var(--border)'};background:${p?'rgba(0,200,100,.06)':'var(--bg)'};text-align:center;">
      ${p?`<span style="font-size:1.2rem;">${p.avatar}</span> <span style="font-size:.8rem;font-weight:600;color:var(--text);">${p.name}</span>`
         :`<span style="color:var(--text3);font-size:.78rem;">Слот ${i+1}</span>`}
    </div>`;
  }).join('');
  const joined=Object.keys(t.players).length;
  const startBtn=$('tourn-start-btn') as HTMLButtonElement;
  startBtn.style.display=(_tournSlot===0&&joined===t.size)?'':'none';
  startBtn.textContent=`⚔️ Почати турнір (${joined}/${t.size})`;
}

function _startTournWaitPoll(): void {
  _tournPoll=setInterval(async()=>{
    try{
      const t=await _fbGet(`/tournaments/${_tournId}`) as Tournament|null;
      if(!t) return;
      _tournData=t;
      if(!t.started) { _renderTournWaiting(t); return; }
      clearInterval(_tournPoll!); _tournPoll=null;
      _renderTournBracket(t);
      _startTournMatchPoll();
    }catch(e){}
  },2000);
}

function _startTournMatchPoll(): void {
  _tournPoll=setInterval(async()=>{
    try{
      const t=await _fbGet(`/tournaments/${_tournId}`) as Tournament|null;
      if(!t) return;
      _tournData=t;
      _renderTournBracket(t);
      if(t.finished){ clearInterval(_tournPoll!); _tournPoll=null; }
    }catch(e){}
  },2000);
}

async function startTournament(): Promise<void> {
  if(_tournSlot!==0||!_tournData) return;
  await _fbPatch(`/tournaments/${_tournId}`,{started:true});
  _renderTournBracket(_tournData);
}

function _renderTournBracket(t:Tournament): void {
  const wEl=$('tourn-waiting') as HTMLElement;
  const bEl=$('tourn-bracket') as HTMLElement;
  wEl.style.display='none'; bEl.style.display='';
  const totalRounds=t.bracket.length;
  const statusEl=$('tourn-status-label') as HTMLElement;
  if(t.finished){
    statusEl.innerHTML=`🏆 Переможець турніру: ${t.champion}!`;
    statusEl.style.color='#f39c12';
  } else {
    statusEl.textContent=`${_tournRoundName(t.currentRound,totalRounds)} · Матч ${t.currentMatch+1}`;
    statusEl.style.color='var(--text3)';
  }
  // Bracket visual
  const visEl=$('tourn-bracket-visual') as HTMLElement;
  visEl.innerHTML=t.bracket.map((round,ri)=>{
    const rName=_tournRoundName(ri,totalRounds);
    return `<div style="margin-bottom:10px;">
      <div style="font-size:.68rem;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;">${rName}</div>
      ${round.map((m,mi)=>{
        const p1=t.players[m.p1]??{name:'?',avatar:'?'};
        const p2=t.players[m.p2]??{name:'?',avatar:'?'};
        const active=ri===t.currentRound&&mi===t.currentMatch&&!m.done;
        const done=m.done;
        return `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:9px;border:1.5px solid ${active?'var(--accent)':done?'var(--border)':'var(--border)'};background:${active?'rgba(0,200,100,.06)':'transparent'};margin-bottom:4px;">
          <span style="${m.winner===m.p1?'font-weight:700;color:var(--accent)':'color:var(--text2)'}">${p1.avatar} ${p1.name}</span>
          ${done?`<span style="font-size:.75rem;font-weight:700;color:var(--text3);">${m.p1score}:${m.p2score}</span>`:'<span style="color:var(--text3);font-size:.72rem;">vs</span>'}
          <span style="${m.winner===m.p2?'font-weight:700;color:var(--accent)':'color:var(--text2)'}">${p2.avatar} ${p2.name}</span>
          ${active?'<span style="font-size:.65rem;color:var(--accent);margin-left:auto;">▶ Зараз</span>':''}
        </div>`;
      }).join('')}
    </div>`;
  }).join('');
  // Match area — show play button if it's my turn
  const matchEl=$('tourn-match-area') as HTMLElement;
  if(t.finished){
    matchEl.innerHTML=`<div style="text-align:center;padding:16px;"><div style="font-size:3rem;">🏆</div><div style="font-weight:700;font-size:1.1rem;color:#f39c12;margin-top:8px;">${t.champion} — чемпіон!</div><button id="tourn-leave-btn" style="margin-top:14px;padding:8px 20px;border-radius:10px;border:1.5px solid var(--border);background:none;color:var(--text2);cursor:pointer;font-family:inherit;font-size:.82rem;">← Вийти</button></div>`;
    $('tourn-leave-btn')?.addEventListener('click',()=>{ _cancelTournament(); });
    return;
  }
  const curMatch=t.bracket[t.currentRound]?.[t.currentMatch];
  if(!curMatch||curMatch.done){ matchEl.innerHTML=''; return; }
  const myTurn=curMatch.p1===_tournSlot||curMatch.p2===_tournSlot;
  if(myTurn&&!curMatch.roomId){
    matchEl.innerHTML=`<button id="tourn-play-btn" style="width:100%;padding:12px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;">⚔️ Грати зараз!</button>`;
    $('tourn-play-btn')?.addEventListener('click',()=>_startTournMatch(t,t.currentRound,t.currentMatch));
  } else if(myTurn&&curMatch.roomId){
    matchEl.innerHTML=`<button id="tourn-rejoin-btn" style="width:100%;padding:12px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;">▶ Продовжити матч</button>`;
    $('tourn-rejoin-btn')?.addEventListener('click',()=>_joinTournMatch(curMatch.roomId));
  } else {
    const opp=curMatch.p1===_tournSlot?t.players[curMatch.p2]:t.players[curMatch.p1];
    matchEl.innerHTML=`<div style="text-align:center;padding:12px;color:var(--text3);font-size:.82rem;">⏳ Ідуть матч: ${opp?.name||'?'} vs …<br>Твій черга пізніше</div>`;
  }
}

async function _startTournMatch(t:Tournament, round:number, matchIdx:number): Promise<void> {
  const match=t.bracket[round][matchIdx];
  // Create a duel room for this match
  _roomId=_genCode(); _mySlot=match.p1===_tournSlot?'p1':'p2';
  const seed=Date.now();
  const room:RoomData={
    seed, mode:t.mode, category:t.category, difficulty:t.difficulty,
    bestOf:1, maxHints:3, powerupsEnabled:false,
    createdAt:Date.now(), started:false, finished:false,
    series:{p1wins:0,p2wins:0,round:1},
    p1:{name:t.players[match.p1].name,avatar:t.players[match.p1].avatar,score:0,idx:0,done:false,hintsLeft:3,powerups:{double:0,skip:0,freeze:0}},
    p2:null,
  };
  await _fbSet(`/duel_rooms/${_roomId}`,room);
  // Save room ID to tournament match
  const matchPath=`/tournaments/${_tournId}/bracket/${round}/${matchIdx}`;
  await _fbPatch(matchPath,{roomId:_roomId});
  _oppName=t.players[match.p1===_tournSlot?match.p2:match.p1].name;
  _oppAvatar=t.players[match.p1===_tournSlot?match.p2:match.p1].avatar;
  _quizDeck=_buildDeck(seed,t.category,t.difficulty);
  _hideTournament();
  _initGame(t.mode,3,1,{p1wins:0,p2wins:0,round:1},false);
  // After game finishes, save result to tournament
  const origFinish=_showFinish.bind(null);
  (window as Window & {_tournFinishHook?:(r:RoomData)=>void})._tournFinishHook=async(roomData:RoomData)=>{
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
    _quizDeck=_buildDeck(room.seed,room.category,room.difficulty);
    _oppName=room.p1.name; _oppAvatar=room.p1.avatar;
    _hideTournament();
    _initGame(room.mode,3,1,{p1wins:0,p2wins:0,round:1},false);
  }catch(e){}
}

// Guard: prevents both p1 and p2 from calling _advanceTournament simultaneously
let _advanceLock = false;

async function _advanceTournament(): Promise<void> {
  if(_advanceLock) return;
  _advanceLock = true;
  try {
    const t=await _fbGet(`/tournaments/${_tournId}`) as Tournament;
    const {currentRound,currentMatch,bracket,players} = t;
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
  _renderLeaderboard(); _renderModePicker(); _renderCategoryPicker(); _renderOptionsRow();
  _renderHistory(); _tryResumeSession();
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

$('dm-input')?.addEventListener('keydown',(e:KeyboardEvent)=>{if(e.key==='Enter'&&!_answered)_submitWrite();});
$('dm-submit-btn')?.addEventListener('click',()=>{if(!_answered)_submitWrite();});
$('dm-next-btn')?.addEventListener('click',()=>{const nb=$('dm-next-btn') as HTMLButtonElement|null;if(nb)nb.style.display='none';if(_quizIdx<ROOM_SIZE)_renderQuestion();else _finishMyGame();});
$('dm-hint-btn')?.addEventListener('click',_useHint);

// In-game reactions
$('dm-react-row')?.querySelectorAll<HTMLButtonElement>('.dm-react-btn').forEach(b=>{
  b.addEventListener('click',()=>_sendReaction(b.dataset.emoji!));
});

document.addEventListener('keydown',(e:KeyboardEvent)=>{
  const game=$('duel-game'); if(!game||game.style.display==='none') return;
  if(_mode!=='write'&&['1','2','3','4'].includes(e.key)){
    e.preventDefault();
    elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option:not(:disabled)')[parseInt(e.key)-1]?.click();
  }
});

$('sb-duel')?.addEventListener('click',()=>{
  (window.openPage as ((p:string)=>void)|undefined)?.('duel');
  renderDuel();
});

// ── Smart duel close button ────────────────────────────────────
// If game/tournament/spectator is active → return to lobby; else → close page
$('duel-page-close')?.addEventListener('click', () => {
  const gameVisible    = elGame().style.display !== 'none';
  const tournVisible   = ($('duel-tournament') as HTMLElement|null)?.style.display !== 'none';
  const spectVisible   = ($('duel-spectate') as HTMLElement|null)?.style.display !== 'none';
  const countdownVisible = elCountdown().style.display !== 'none';

  if (gameVisible || countdownVisible) {
    // Game in progress: confirm before leaving
    if (!confirm('Покинути поточну дуель? Це зарахується як поразка.')) return;
    _cancelRoom();
    _showLobby();
    renderDuel();
  } else if (tournVisible) {
    _cancelTournament();
  } else if (spectVisible) {
    _cancelRoom();
    ($('duel-spectate') as HTMLElement).style.display = 'none';
    _showLobby();
    renderDuel();
  } else {
    // In lobby → close page entirely
    (window.closePage as (() => void) | undefined)?.();
  }
});
