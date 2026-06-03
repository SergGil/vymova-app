// English Words App — js/features/duel.ts
// ⚔️ Duel: profile leaderboard + live Firebase multiplayer quiz

import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import LZString from '../../lib/lzstring.js';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import type { WordEntry } from '../../src/types.js';

// ── Firebase ──────────────────────────────────────────────────
const DB_URL    = 'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app';
const CHARS     = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const ROOM_SIZE = 10, NUM_OPTS = 4;

// ── Duel modes ────────────────────────────────────────────────
type DuelMode = 'quiz' | 'reverse' | 'write' | 'tempo';

const DUEL_MODES: { id: DuelMode; icon: string; label: string; desc: string }[] = [
  { id:'quiz',    icon:'🧠', label:'Тест',     desc:'4 варіанти · EN → UA' },
  { id:'reverse', icon:'🔄', label:'Навпаки',  desc:'4 варіанти · UA → EN' },
  { id:'write',   icon:'✍️', label:'Письмо',   desc:'Введи переклад' },
  { id:'tempo',   icon:'⚡', label:'Темп',     desc:'4 варіанти · 4 сек/питання' },
];

// ── Profile leaderboard ───────────────────────────────────────
const LIST_KEY   = 'ew_profiles';
const ACTIVE_KEY = 'ew_active_profile';
const SNAP_KEYS  = ['ew_known','ew_known_lz','ew_game','ew_daily','ew_ach'];

function _getProfiles() { try { return JSON.parse(localStorage.getItem(LIST_KEY) || '[]'); } catch(e){ return []; } }
function _getActiveId() { return localStorage.getItem(ACTIVE_KEY) || ''; }
function _readSnap(id: string): Record<string,string> {
  const d: Record<string,string> = {};
  SNAP_KEYS.forEach(k => { const v = localStorage.getItem(`ew_p_${id}__${k}`); if (v !== null) d[k] = v; });
  return d;
}
function _currentSnap(): Record<string,string> {
  const d: Record<string,string> = {};
  SNAP_KEYS.forEach(k => { const v = localStorage.getItem(k); if (v !== null) d[k] = v; });
  return d;
}
function _parseKnown(snap: Record<string,string>): string[] {
  const raw = snap['ew_known']; if (!raw) return [];
  try { if (snap['ew_known_lz'] === '1') { const d = LZString.decompress(raw); if (d) return JSON.parse(d); } return JSON.parse(raw); } catch(e){ return []; }
}
function _parseGame(snap: Record<string,string>) { try { return JSON.parse(snap['ew_game'] || '{}'); } catch(e){ return {}; } }
function _weekWords(snap: Record<string,string>): number {
  try { const d = JSON.parse(snap['ew_daily'] || '{}'); const t = new Date(); let c = 0; for (let i=0;i<7;i++){const dt=new Date(t);dt.setDate(dt.getDate()-i);c+=(d[dt.toISOString().slice(0,10)]||0);} return c; } catch(e){ return 0; }
}

function renderLeaderboard(): void {
  const container = document.getElementById('duel-leaderboard');
  if (!container) return;
  const profiles = _getProfiles();
  if (!profiles.length) { container.innerHTML = '<div style="text-align:center;color:var(--text3);padding:12px;">Немає профілів.</div>'; return; }
  const activeId = _getActiveId();
  const stats = profiles.map((p: Record<string,unknown>) => {
    const snap = p.id === activeId ? _currentSnap() : _readSnap(p.id as string);
    const known = _parseKnown(snap); const game = _parseGame(snap);
    return { name:p.name, avatar:p.avatar, known:known.length, streak:game.streak||0, weekWords:_weekWords(snap), xp:(game.xp||0)+known.length*5, isActive:p.id===activeId };
  }).sort((a: any,b: any) => b.xp-a.xp||b.known-a.known);
  let html = '';
  stats.forEach((s: any,i: number) => {
    const rank = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}.`;
    html += `<div class="duel-card${s.isActive?' duel-card-active':''}">` +
      `<div class="duel-card-header"><span class="duel-rank">${rank}</span><span class="duel-av">${s.avatar}</span><span class="duel-name">${s.name}${s.isActive?' (ти)':''}</span></div>` +
      `<div class="duel-stats">` +
        `<div class="duel-stat"><div class="duel-sv">${s.known}</div><div class="duel-sl">Слів</div></div>` +
        `<div class="duel-stat"><div class="duel-sv">${s.xp}</div><div class="duel-sl">XP</div></div>` +
        `<div class="duel-stat"><div class="duel-sv">🔥${s.streak}</div><div class="duel-sl">Серія</div></div>` +
        `<div class="duel-stat"><div class="duel-sv">${s.weekWords}</div><div class="duel-sl">За тиждень</div></div>` +
      `</div></div>`;
  });
  container.innerHTML = html;
}

// ── Firebase helpers ──────────────────────────────────────────
async function _fbGet(path: string): Promise<unknown> {
  const r = await fetch(`${DB_URL}${path}.json`);
  if (!r.ok) throw new Error('HTTP '+r.status);
  return r.json();
}
async function _fbPatch(path: string, data: unknown): Promise<void> {
  await fetch(`${DB_URL}${path}.json`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
}
async function _fbSet(path: string, data: unknown): Promise<void> {
  await fetch(`${DB_URL}${path}.json`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
}

// ── Room state ────────────────────────────────────────────────
interface PlayerData { name:string; avatar:string; score:number; idx:number; done:boolean; }
interface RoomData   { seed:number; mode:DuelMode; p1:PlayerData; p2:PlayerData|null; started:boolean; finished:boolean; createdAt:number; }

let _roomId   = '';
let _mySlot: 'p1'|'p2' = 'p1';
let _pollTimer: ReturnType<typeof setInterval> | null = null;
let _quizDeck: WordEntry[] = [];
let _quizIdx  = 0;
let _myScore  = 0;
let _answered = false;
let _mode: DuelMode = 'quiz';
let _tempoTimer: ReturnType<typeof setInterval> | null = null;
let _tempoLeft = 4;

function _rng(seed: number): () => number {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0x7FFFFFFF; return s / 0x7FFFFFFF; };
}
function _buildDeck(seed: number): WordEntry[] {
  const rnd = _rng(seed);
  return Array.from({ length: W.length }, (_, i) => i)
    .sort(() => rnd() - 0.5)
    .slice(0, ROOM_SIZE)
    .map(i => W[i] as unknown as WordEntry);
}
function _genCode(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(6)), v => CHARS[v % CHARS.length]).join('');
}
function _fmtCode(c: string): string { return c.slice(0,3)+'-'+c.slice(3); }

function _getMyName(): string { try { const prfs=_getProfiles(); const id=_getActiveId(); return prfs.find((x:any)=>x.id===id)?.name||'Гравець'; } catch(e){ return 'Гравець'; } }
function _getMyAvatar(): string { try { const prfs=_getProfiles(); const id=_getActiveId(); return prfs.find((x:any)=>x.id===id)?.avatar||'🧑'; } catch(e){ return '🧑'; } }

// ── UI refs ───────────────────────────────────────────────────
const elLobby    = () => document.getElementById('duel-lobby')!    as HTMLElement;
const elGame     = () => document.getElementById('duel-game')!     as HTMLElement;
const elResult   = () => document.getElementById('duel-result')!   as HTMLElement;
const elMsg      = () => document.getElementById('duel-msg')!;
const elMyScore  = () => document.getElementById('dm-my-score')!;
const elOppScore = () => document.getElementById('dm-opp-score')!;
const elOppName  = () => document.getElementById('dm-opp-name')!;
const elOppAv    = () => document.getElementById('dm-opp-av')!;
const elModeBadge= () => document.getElementById('dm-mode-badge')!;
const elQuestion = () => document.getElementById('dm-question')!;
const elProgress = () => document.getElementById('dm-progress')!;
const elOpts     = () => document.getElementById('dm-options')!   as HTMLElement;
const elInput    = () => document.getElementById('dm-input')!     as HTMLInputElement;
const elFeedback = () => document.getElementById('dm-feedback')!;
const elTimerBar = () => document.getElementById('dm-timer-bar')! as HTMLElement;
const elTimerNum = () => document.getElementById('dm-timer-num')!;

function _showLobby() { elLobby().style.display=''; elGame().style.display='none'; elResult().style.display='none'; }
function _showGame()  { elLobby().style.display='none'; elGame().style.display=''; elResult().style.display='none'; }
function _showResult(){ elLobby().style.display='none'; elGame().style.display='none'; elResult().style.display=''; }

// ── Mode picker in lobby ──────────────────────────────────────
let _selectedMode: DuelMode = 'quiz';

function _renderModePicker(): void {
  const container = document.getElementById('duel-mode-picker');
  if (!container) return;
  container.innerHTML = DUEL_MODES.map(m =>
    `<button class="duel-mode-btn${m.id===_selectedMode?' duel-mode-sel':''}" data-mode="${m.id}" style="flex:1;min-width:100px;padding:10px 8px;border-radius:12px;border:2px solid ${m.id===_selectedMode?'var(--accent)':'var(--border)'};background:${m.id===_selectedMode?'rgba(0,200,100,.08)':'var(--card)'};cursor:pointer;font-family:inherit;text-align:center;transition:all .15s;">
      <div style="font-size:1.3rem;">${m.icon}</div>
      <div style="font-size:.8rem;font-weight:700;color:var(--text);margin-top:3px;">${m.label}</div>
      <div style="font-size:.68rem;color:var(--text3);margin-top:2px;">${m.desc}</div>
    </button>`
  ).join('');
  container.querySelectorAll<HTMLButtonElement>('.duel-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _selectedMode = btn.dataset.mode as DuelMode;
      _renderModePicker();
    });
  });
}

// ── Create / Join ─────────────────────────────────────────────
async function createRoom(): Promise<void> {
  const btn = document.getElementById('duel-create-btn') as HTMLButtonElement;
  btn.disabled = true; btn.textContent = 'Створення...';
  try {
    _roomId = _genCode(); _mySlot = 'p1'; _mode = _selectedMode;
    const seed = Date.now();
    const room: RoomData = {
      seed, mode:_mode, createdAt:Date.now(), started:false, finished:false,
      p1:{ name:_getMyName(), avatar:_getMyAvatar(), score:0, idx:0, done:false },
      p2:null,
    };
    await _fbSet(`/duel_rooms/${_roomId}`, room);
    _quizDeck = _buildDeck(seed);
    const mInfo = DUEL_MODES.find(m=>m.id===_mode)!;
    const codeEl = document.getElementById('duel-room-code');
    if (codeEl) codeEl.textContent = _fmtCode(_roomId);
    const modeLabel = document.getElementById('duel-waiting-mode');
    if (modeLabel) modeLabel.textContent = `${mInfo.icon} ${mInfo.label} · ${mInfo.desc}`;
    elMsg().style.display = 'none';
    document.getElementById('duel-waiting')!.style.display = 'block';
    document.getElementById('duel-join-row')!.style.display = 'none';
    _startWaitPoll();
  } catch(e) {
    btn.disabled=false; btn.textContent='⚔️ Створити кімнату';
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

async function joinRoom(): Promise<void> {
  const inp = document.getElementById('duel-join-input') as HTMLInputElement;
  const btn = document.getElementById('duel-join-btn') as HTMLButtonElement;
  const code = inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if (code.length < 6) { elMsg().textContent='❌ Введіть код кімнати'; elMsg().style.display='block'; return; }
  btn.disabled=true; btn.textContent='Підключення...';
  try {
    const room = await _fbGet(`/duel_rooms/${code}`) as RoomData|null;
    if (!room?.seed) throw new Error('Кімнату не знайдено');
    if (room.p2)      throw new Error('Кімната вже зайнята');
    if (room.finished) throw new Error('Дуель вже завершена');
    _roomId=code; _mySlot='p2'; _mode=room.mode||'quiz'; _quizDeck=_buildDeck(room.seed);
    await _fbPatch(`/duel_rooms/${_roomId}`, {
      p2:{ name:_getMyName(), avatar:_getMyAvatar(), score:0, idx:0, done:false },
      started:true,
    });
    _startGame(room.p1.name, room.p1.avatar, room.mode||'quiz');
  } catch(e) {
    btn.disabled=false; btn.textContent='→ Приєднатись';
    elMsg().textContent='❌ '+(e as Error).message; elMsg().style.display='block';
  }
}

function _startWaitPoll(): void {
  _pollTimer = setInterval(async () => {
    try {
      const room = await _fbGet(`/duel_rooms/${_roomId}`) as RoomData|null;
      if (!room) return;
      if (room.started && room.p2) {
        clearInterval(_pollTimer!); _pollTimer=null;
        _startGame(room.p2.name, room.p2.avatar, room.mode||'quiz');
      }
    } catch(e){}
  }, 2000);
}

function _startGame(oppName: string, oppAvatar: string, mode: DuelMode): void {
  _mode=mode; _quizIdx=0; _myScore=0; _answered=false;
  elOppName().textContent=oppName; elOppAv().textContent=oppAvatar;
  elMyScore().textContent='0'; elOppScore().textContent='0';
  const mInfo = DUEL_MODES.find(m=>m.id===mode)||DUEL_MODES[0];
  elModeBadge().textContent = `${mInfo.icon} ${mInfo.label}`;
  // Show/hide write input vs options
  elOpts().style.display   = mode==='write' ? 'none' : '';
  const inputRow = document.getElementById('dm-input-row') as HTMLElement|null;
  if (inputRow) inputRow.style.display = mode==='write' ? '' : 'none';
  // Show/hide timer bar for tempo
  const timerRow = document.getElementById('dm-timer-row') as HTMLElement|null;
  if (timerRow) timerRow.style.display = mode==='tempo' ? '' : 'none';
  _showGame();
  _renderQuestion();
  _startOpponentPoll();
}

function _startOpponentPoll(): void {
  _pollTimer = setInterval(async () => {
    try {
      const room = await _fbGet(`/duel_rooms/${_roomId}`) as RoomData|null;
      if (!room) return;
      const opp = _mySlot==='p1' ? room.p2 : room.p1;
      if (opp) elOppScore().textContent = String(opp.score);
      if (room.finished) { clearInterval(_pollTimer!); _pollTimer=null; _showFinish(room); }
    } catch(e){}
  }, 1500);
}

// ── Question rendering ────────────────────────────────────────
function _renderQuestion(): void {
  if (_quizIdx >= _quizDeck.length) { _finishMyGame(); return; }
  const w = _quizDeck[_quizIdx];
  _answered = false;
  elProgress().textContent = `${_quizIdx+1} / ${ROOM_SIZE}`;
  elFeedback().textContent = '';
  if (_tempoTimer) { clearInterval(_tempoTimer); _tempoTimer=null; }

  if (_mode === 'write') {
    _renderWriteQuestion(w);
  } else {
    _renderChoiceQuestion(w);
  }

  if (_mode === 'tempo') _startTempoTimer(w);
}

function _renderChoiceQuestion(w: WordEntry): void {
  const isReverse = _mode === 'reverse';
  const question  = isReverse ? w[1] : w[0];
  const answer    = isReverse ? w[0] : w[1];

  elQuestion().innerHTML = `<div style="font-size:1.3rem;font-weight:700;color:var(--text);text-align:center;">${question}</div>`;
  elOpts().innerHTML = '';

  const wrongs: string[] = [];
  const used = new Set([w[0].toLowerCase()]);
  const pool = _shuf(W.slice() as unknown as WordEntry[]);
  for (const pw of pool) {
    if (wrongs.length >= NUM_OPTS-1) break;
    if (used.has(pw[0].toLowerCase())) continue;
    used.add(pw[0].toLowerCase());
    wrongs.push(isReverse ? pw[0] : pw[1]);
  }
  _shuf([answer, ...wrongs]).forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className='quiz-option';
    btn.innerHTML=`<span class="opt-num">${i+1}</span> ${opt}`;
    btn.addEventListener('click', () => _answerChoice(btn, opt, answer, w));
    elOpts().appendChild(btn);
  });
}

function _renderWriteQuestion(w: WordEntry): void {
  elQuestion().innerHTML = `<div style="font-size:1.3rem;font-weight:700;color:var(--text);text-align:center;">${w[1]}</div><div style="font-size:.8rem;color:var(--text3);margin-top:4px;text-align:center;">Введи слово англійською</div>`;
  const inp = elInput();
  inp.value=''; inp.style.borderColor=''; inp.disabled=false;
  setTimeout(()=>{ try{inp.focus();}catch(e){} }, 60);
}

function _startTempoTimer(w: WordEntry): void {
  _tempoLeft = 4;
  const bar = elTimerBar(); const num = elTimerNum();
  if (bar) { bar.style.transition='none'; bar.style.width='100%'; }
  if (num) num.textContent = '4';
  setTimeout(()=>{
    if (bar) { bar.style.transition='width 4s linear'; bar.style.width='0%'; }
  }, 50);
  _tempoTimer = setInterval(()=>{
    _tempoLeft--;
    if (num) num.textContent = String(_tempoLeft);
    if (_tempoLeft <= 0) {
      clearInterval(_tempoTimer!); _tempoTimer=null;
      if (!_answered) {
        // Time's up — auto wrong
        _answered=true;
        elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>b.disabled=true);
        elFeedback().innerHTML='<span style="color:#e74c3c">⏰ Час вийшов!</span>';
        _quizIdx++;
        _pushScore();
        setTimeout(()=>_renderQuestion(), 1000);
      }
    }
  }, 1000);
}

// ── Answer handlers ───────────────────────────────────────────
async function _answerChoice(btn: HTMLButtonElement, chosen: string, correct: string, _w: WordEntry): Promise<void> {
  if (_answered) return;
  _answered=true;
  if (_tempoTimer) { clearInterval(_tempoTimer); _tempoTimer=null; }
  elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>b.disabled=true);
  const ok = chosen===correct;
  btn.classList.add(ok?'correct':'wrong');
  if (!ok) elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(b=>{ if(b.textContent?.includes(correct)) b.classList.add('reveal'); });
  if (ok) _myScore++;
  elMyScore().textContent=String(_myScore);
  elFeedback().innerHTML = ok ? '<span style="color:#27ae60">✓ Правильно!</span>' : `<span style="color:#e74c3c">✗ ${correct}</span>`;
  _quizIdx++;
  await _pushScore();
  setTimeout(()=>{ if(_quizIdx<ROOM_SIZE) _renderQuestion(); else _finishMyGame(); }, ok?600:1200);
}

function _submitWrite(): void {
  if (_answered) return;
  const w = _quizDeck[_quizIdx];
  const inp = elInput();
  const val = inp.value.trim().toLowerCase();
  const ans = w[0].toLowerCase();
  const ok  = val===ans || (ans.length>3 && lev(val,ans)<=1);
  _answered=true; inp.disabled=true;
  inp.style.borderColor = ok?'#27ae60':'#e74c3c';
  if (ok) _myScore++;
  elMyScore().textContent=String(_myScore);
  elFeedback().innerHTML = ok ? '<span style="color:#27ae60">✓ Правильно!</span>' : `<span style="color:#e74c3c">✗ ${w[0]}</span>`;
  _quizIdx++;
  _pushScore();
  const nextBtn = document.getElementById('dm-next-btn') as HTMLButtonElement|null;
  if (nextBtn) { nextBtn.style.display='inline-block'; nextBtn.focus(); }
}

async function _pushScore(): Promise<void> {
  try { await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`, { score:_myScore, idx:_quizIdx }); } catch(e){}
}

async function _finishMyGame(): Promise<void> {
  try {
    await _fbPatch(`/duel_rooms/${_roomId}/${_mySlot}`, { score:_myScore, idx:ROOM_SIZE, done:true });
    const room = await _fbGet(`/duel_rooms/${_roomId}`) as RoomData;
    const opp = _mySlot==='p1' ? room.p2 : room.p1;
    if (opp?.done) {
      await _fbPatch(`/duel_rooms/${_roomId}`, { finished:true });
      clearInterval(_pollTimer!); _pollTimer=null;
      _showFinish({ ...room, [_mySlot]:{ ...room[_mySlot], score:_myScore, done:true } } as RoomData);
    } else {
      elFeedback().textContent='⏳ Чекаємо суперника…';
      elOpts().innerHTML=''; elOpts().style.display='none';
      const ir = document.getElementById('dm-input-row'); if(ir) ir.style.display='none';
    }
  } catch(e){ console.warn('[duel]',e); }
}

function _showFinish(room: RoomData): void {
  _showResult();
  const me  = room[_mySlot] as PlayerData;
  const opp = (_mySlot==='p1' ? room.p2 : room.p1) as PlayerData;
  const won = me.score>(opp?.score??0), tie=me.score===(opp?.score??0);
  const mInfo = DUEL_MODES.find(m=>m.id===room.mode)||DUEL_MODES[0];
  document.getElementById('duel-result-inner')!.innerHTML =
    `<div style="font-size:.75rem;color:var(--text3);margin-bottom:8px;">${mInfo.icon} ${mInfo.label}</div>` +
    `<div style="font-size:3rem;margin-bottom:10px;">${won?'🏆':tie?'🤝':'😔'}</div>` +
    `<div style="font-size:1.3rem;font-weight:700;color:var(--text);margin-bottom:6px;">${won?'Ти переміг!':tie?'Нічия!':'Суперник переміг'}</div>` +
    `<div style="display:flex;gap:20px;justify-content:center;margin:16px 0;">` +
      `<div style="text-align:center;"><div style="font-size:2rem;">${me.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${won||tie?'#27ae60':'#e74c3c'}">${me.score}/${ROOM_SIZE}</div><div style="font-size:.75rem;color:var(--text3);">Ти</div></div>` +
      `<div style="font-size:1.5rem;align-self:center;color:var(--text3);">VS</div>` +
      `<div style="text-align:center;"><div style="font-size:2rem;">${opp?.avatar||'🧑'}</div><div style="font-weight:700;font-size:1.2rem;color:${!won&&!tie?'#27ae60':'#e74c3c'}">${opp?.score??0}/${ROOM_SIZE}</div><div style="font-size:.75rem;color:var(--text3);">${opp?.name||'Суперник'}</div></div>` +
    `</div>`;
}

function _cancelRoom(): void {
  if (_pollTimer)   { clearInterval(_pollTimer); _pollTimer=null; }
  if (_tempoTimer)  { clearInterval(_tempoTimer); _tempoTimer=null; }
  if (_roomId) { fetch(`${DB_URL}/duel_rooms/${_roomId}.json`,{method:'DELETE'}).catch(()=>{}); _roomId=''; }
  document.getElementById('duel-waiting')!.style.display='none';
  document.getElementById('duel-join-row')!.style.display='block';
  const btn = document.getElementById('duel-create-btn') as HTMLButtonElement;
  btn.disabled=false; btn.textContent='⚔️ Створити кімнату';
  elMsg().style.display='none';
}

// ── renderDuel ────────────────────────────────────────────────
export function renderDuel(): void {
  renderLeaderboard();
  _renderModePicker();
}
window.renderDuel = renderDuel;

// ── Event bindings ────────────────────────────────────────────
document.getElementById('duel-create-btn')?.addEventListener('click', createRoom);
document.getElementById('duel-join-btn')?.addEventListener('click', joinRoom);
document.getElementById('duel-cancel-btn')?.addEventListener('click', _cancelRoom);
document.getElementById('duel-again-btn')?.addEventListener('click', () => { _cancelRoom(); _showLobby(); renderDuel(); });

document.getElementById('duel-join-input')?.addEventListener('keydown', (e: KeyboardEvent) => {
  const inp = e.target as HTMLInputElement;
  let v = inp.value.replace(/[^A-Z0-9]/gi,'').toUpperCase();
  if (v.length>3) v=v.slice(0,3)+'-'+v.slice(3);
  inp.value=v.slice(0,7);
  if (e.key==='Enter') joinRoom();
});

// Write mode: submit on Enter or button
document.getElementById('dm-input')?.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key==='Enter' && !_answered) _submitWrite();
});
document.getElementById('dm-submit-btn')?.addEventListener('click', () => { if (!_answered) _submitWrite(); });
document.getElementById('dm-next-btn')?.addEventListener('click', () => {
  const nextBtn = document.getElementById('dm-next-btn') as HTMLButtonElement|null;
  if (nextBtn) nextBtn.style.display='none';
  if (_quizIdx<ROOM_SIZE) _renderQuestion(); else _finishMyGame();
});

document.addEventListener('keydown', (e: KeyboardEvent) => {
  const game = document.getElementById('duel-game');
  if (!game||game.style.display==='none') return;
  if (_mode!=='write' && ['1','2','3','4'].includes(e.key)) {
    e.preventDefault();
    elOpts().querySelectorAll<HTMLButtonElement>('.quiz-option:not(:disabled)')[parseInt(e.key)-1]?.click();
  }
});

document.getElementById('sb-duel')?.addEventListener('click', () => {
  (window.openPage as ((p:string)=>void)|undefined)?.('duel');
  renderDuel();
});
