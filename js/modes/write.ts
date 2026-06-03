// English Words App — js/modes/write.ts
// ✍️ WRITE MODE
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
let wDeck: WordEntry[] = [], wIdx = 0, wOk = 0, wFail = 0, wAnswered = false;
let wWrong: WordEntry[] = [];

const oOverlay = document.getElementById('write-overlay')!;
const elSub    = document.getElementById('write-subtitle')!;
const elPbar   = document.getElementById('write-pbar')!    as HTMLElement;
const elOk     = document.getElementById('write-correct')!;
const elFail   = document.getElementById('write-wrong')!;
const elDir    = document.getElementById('write-dir')!;
const elWord   = document.getElementById('write-word')!;
const elIpa    = document.getElementById('write-ipa')!;
const elInput  = document.getElementById('write-input')!  as HTMLInputElement;
const elHint   = document.getElementById('write-hint')!;
const elResult = document.getElementById('write-result')!;
const elSubmit = document.getElementById('write-submit')! as HTMLElement;
const elNext   = document.getElementById('write-next')!   as HTMLElement;
const elFinal  = document.getElementById('write-final')!  as HTMLElement;
const elScRow  = document.getElementById('write-score-row')! as HTMLElement;

type PlaySound = (s: string) => void;


function isCorrect(inp: string, raw: string): boolean {
  const a = inp.trim().toLowerCase();
  if (!a) return false;
  const variants = raw.split(/[;,\/]/).map(s => s.trim().toLowerCase()).filter(Boolean);
  return variants.some(v => a === v || (v.length > 3 && lev(a, v) <= 1));
}

function build(src?: WordEntry[] | null): void {
  const pool = _shuf(
    (src?.length ? src : (state.deck.length ? state.deck.slice() : W.slice())) as unknown as WordEntry[]
  );
  wDeck = pool.slice(0, Math.min(SIZE, pool.length));
  wIdx = wOk = wFail = 0; wWrong = []; wAnswered = false;
}

function open(src?: WordEntry[] | null): void {
  build(src);
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  oOverlay.style.display = 'flex';
  renderQ();
}
function closeWrite(): void { acHide(); oOverlay.style.display = 'none'; }

function renderQ(): void {
  if (wIdx >= wDeck.length) { showFinal(); return; }
  const w = wDeck[wIdx];
  wAnswered = false;
  elInput.value = ''; elInput.className = ''; elInput.style.borderColor = '';
  elResult.textContent = ''; elHint.textContent = '';
  elSubmit.style.display = 'inline-block'; elNext.style.display = 'none';
  elSub.textContent = `Питання ${wIdx + 1} з ${wDeck.length}`;
  elPbar.style.width = (wIdx / wDeck.length * 100) + '%';
  elOk.textContent = String(wOk); elFail.textContent = String(wFail);
  elDir.textContent = 'Українська → Англійська';
  elWord.textContent = w[1]; elIpa.textContent = '';
  // No speak button for UA word (user request)
  elInput.placeholder = 'Enter English translation...';
  setTimeout(() => { try { elInput.focus(); } catch (e) {} }, 60);
}

function submit(): void {
  if (wAnswered) return;
  acHide();
  const w = wDeck[wIdx];
  const ans = w[0];
  const ok = isCorrect(elInput.value, ans);
  wAnswered = true; wIdx++;
  if (ok) {
    wOk++;
    elInput.style.borderColor = '#27ae60';
    elResult.innerHTML = '<span style="color:#27ae60;font-size:1.05rem;">✓ Правильно!</span>';
    try { (window.playSound as PlaySound | undefined)?.('know'); addCombo(); } catch (e) {}
    recordModeAnswer('write', true);
  } else {
    wFail++; wWrong.push(w);
    elInput.style.borderColor = '#e74c3c';
    const shown = ans.split(/[;,\/]/)[0].trim();
    elResult.innerHTML = `<span style="color:#e74c3c;">✗ Правильно: <b>${shown}</b></span>`;
    try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
    recordMistake(ans);
    recordModeAnswer('write', false);
  }
  elOk.textContent = String(wOk); elFail.textContent = String(wFail);
  elSubmit.style.display = 'none'; elNext.style.display = 'inline-block';
  elNext.focus();
}

function showFinal(): void {
  elScRow.style.display = 'none'; elFinal.style.display = 'block';
  recordModeComplete('write');
  const pct = Math.round(wOk / wDeck.length * 100);
  const em = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  const ti = pct===100?'Ідеально!':pct>=80?'Чудово!':pct>=60?'Непогано!':'Продовжуй вчити!';
  document.getElementById('wf-emoji')!.textContent = em;
  document.getElementById('wf-title')!.textContent = ti;
  document.getElementById('wf-desc')!.textContent  = `${wOk} з ${wDeck.length} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = 'Завершено';
  const wr = document.getElementById('write-restart-wrong')! as HTMLElement;
  wr.style.display = wWrong.length ? 'inline-block' : 'none';
  if (wWrong.length) wr.textContent = `✗ Помилки (${wWrong.length})`;
}

// ── Autocomplete ──────────────────────────────────────────────
const acEl = document.getElementById('write-ac') as HTMLElement | null;
let acItems: WordEntry[] = [], acIdx = -1;

function acHide(): void { if (acEl) acEl.style.display = 'none'; acIdx = -1; acItems = []; }
function acShow(hits: WordEntry[]): void {
  if (!acEl || !hits.length) { acHide(); return; }
  acItems = hits; acIdx = -1;
  acEl.innerHTML = hits.map((w, i) =>
    `<div class="wac-item" data-i="${i}"><span class="wac-word">${w[0]}</span><span class="wac-ua">${w[1]}</span><span class="wac-n">${i+1}</span></div>`
  ).join('');
  acEl.style.display = 'block';
}

let _acTimer: ReturnType<typeof setTimeout> | null = null;
elInput.addEventListener('input', () => {
  if (_acTimer) clearTimeout(_acTimer);
  const q = elInput.value.trim().toLowerCase();
  if (!q || q.length < 2 || wAnswered) { acHide(); return; }
  _acTimer = setTimeout(() => {
    acShow((W as unknown as WordEntry[]).filter(w => w[0].toLowerCase().startsWith(q)).slice(0, 6));
  }, 120);
});

acEl?.addEventListener('click', (e: MouseEvent) => {
  const item = (e.target as HTMLElement).closest<HTMLElement>('.wac-item');
  if (item) { elInput.value = acItems[parseInt(item.dataset.i ?? '0')][0]; acHide(); elInput.focus(); }
});

elInput.addEventListener('keydown', (e: KeyboardEvent) => {
  const items = acEl?.style.display !== 'none'
    ? acEl!.querySelectorAll<HTMLElement>('.wac-item')
    : ([] as HTMLElement[]);
  if (items.length && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    acIdx = e.key === 'ArrowDown' ? Math.min(acIdx + 1, items.length - 1) : Math.max(acIdx - 1, -1);
    items.forEach((el, i) => el.classList.toggle('wac-sel', i === acIdx));
    if (acIdx >= 0) elInput.value = acItems[acIdx][0];
  } else if (e.key === 'Escape') {
    acHide();
  } else if (e.key === 'Enter') {
    if (acIdx >= 0 && acItems[acIdx]) { elInput.value = acItems[acIdx][0]; acHide(); }
    else if (!wAnswered) { acHide(); submit(); }
    else { acHide(); elFinal.style.display = 'none'; elScRow.style.display = 'flex'; renderQ(); }
  }
});

const advanceQ = (): void => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; renderQ(); };
document.getElementById('btn-write')?.addEventListener('click', () => open(null));
document.getElementById('write-close')?.addEventListener('click', closeWrite);
document.getElementById('write-exit')?.addEventListener('click', closeWrite);
oOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === oOverlay) closeWrite(); });
elSubmit.addEventListener('click', submit);
elNext.addEventListener('click', advanceQ);
document.getElementById('write-restart')?.addEventListener('click', () => { build(null); advanceQ(); });
document.getElementById('write-restart-wrong')?.addEventListener('click', () => { const w = wWrong.slice(); elFinal.style.display = 'none'; elScRow.style.display = 'flex'; build(w); renderQ(); });
document.getElementById('write-hint-btn')?.addEventListener('click', () => {
  if (!wAnswered && wDeck[wIdx]) {
    const first = wDeck[wIdx][0];
    elHint.textContent = '💡 ' + first.slice(0, Math.ceil(first.length / 3)) + '...';
  }
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (oOverlay.style.display !== 'flex') return;
  if (e.key === 'Escape' && acEl?.style.display !== 'none') { acHide(); return; }
  if (e.key === 'Escape') closeWrite();
  if ((e.key === 'ArrowRight' || e.key === ' ') && wAnswered && document.activeElement !== elInput) {
    e.preventDefault(); advanceQ();
  }
});

// ── Voice input ────────────────────────────────────────────────
const micBtn = document.getElementById('write-mic') as HTMLButtonElement | null;
type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;
interface SpeechRecognitionInstance extends EventTarget {
  lang: string; continuous: boolean; interimResults: boolean;
  start(): void; stop(): void; abort(): void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}
interface SpeechRecognitionEvent extends Event {
  results: { [i: number]: { [i: number]: { transcript: string } }; length: number };
}

const SpeechRec: SpeechRecognitionCtor | undefined =
  ((window as Window & { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor })
    .SpeechRecognition ?? (window as Window & { webkitSpeechRecognition?: SpeechRecognitionCtor }).webkitSpeechRecognition);

let _recog: SpeechRecognitionInstance | null = null;
let _micActive = false;

if (!SpeechRec && micBtn) micBtn.style.display = 'none';

micBtn?.addEventListener('click', () => {
  if (!SpeechRec || wAnswered) return;
  if (_micActive) { _recog?.stop(); return; }
  _recog = new SpeechRec();
  _recog.lang = 'en-US'; _recog.continuous = false; _recog.interimResults = false;
  _micActive = true;
  micBtn.textContent = '🔴'; micBtn.style.color = '#e74c3c'; micBtn.style.borderColor = '#e74c3c';
  _recog.onresult = (e: SpeechRecognitionEvent) => {
    const text = e.results[0][0].transcript.trim().toLowerCase().replace(/[.,!?]/g, '');
    elInput.value = text;
    elInput.dispatchEvent(new Event('input'));
  };
  _recog.onerror = () => { _micActive = false; micBtn.textContent = '🎤'; micBtn.style.color = ''; micBtn.style.borderColor = ''; };
  _recog.onend = () => {
    _micActive = false; micBtn.textContent = '🎤'; micBtn.style.color = ''; micBtn.style.borderColor = '';
    if (elInput.value.trim()) submit();
  };
  _recog.start();
});
