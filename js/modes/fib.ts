// English Words App — js/modes/fib.ts
// ✏️ FILL IN BLANK MODE
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { addCombo, breakCombo } from '../features/combo.ts';
import { recordModeComplete, recordMistake, recordModeAnswer } from '../features/game.ts';
import { speakBtn } from '../core/ui-helpers.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
type BlankItem = { sentence: string; answer: string; base: string };
type FibEntry  = { w: WordEntry; blank: BlankItem };

let fbDeck: FibEntry[] = [], fbIdx = 0, fbOk = 0, fbFail = 0;
let fbAnswered = false, fbCurrent: FibEntry | null = null;

const oOverlay  = document.getElementById('fib-overlay')!;
const elSub     = document.getElementById('fib-subtitle')!;
const elPbar    = document.getElementById('fib-pbar')!    as HTMLElement;
const elOk      = document.getElementById('fib-ok')!;
const elFail    = document.getElementById('fib-fail')!;
const elSent    = document.getElementById('fib-sentence')! as HTMLElement;
const elHint    = document.getElementById('fib-word-hint')! as HTMLElement;
const elInput   = document.getElementById('fib-input')!    as HTMLInputElement;
const elResult  = document.getElementById('fib-result')!   as HTMLElement;
const elSubmit  = document.getElementById('fib-submit')!   as HTMLElement;
const elNext    = document.getElementById('fib-next')!     as HTMLElement;
const elFinal   = document.getElementById('fib-final')!    as HTMLElement;
const elScRow   = document.getElementById('fib-score-row')! as HTMLElement;

type PlaySound = (s: string) => void;


function makeBlank(w: WordEntry): BlankItem | null {
  let sentence = w[2] ?? '';
  if (!sentence || sentence.length < 5) return null;
  if (!sentence.includes('<b>')) {
    const esc = w[0].replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
    sentence = sentence.replace(new RegExp('(' + esc + ')', 'i'), '<b>$1</b>');
  }
  const m = sentence.match(/<b>(.*?)<\/b>/i);
  if (!m) return null;
  return {
    sentence: sentence.replace(/<b>.*?<\/b>/i, '<span class="fib-blank">___</span>'),
    answer: m[1], base: w[0],
  };
}

function build(): void {
  const pool = _shuf((state.deck.length ? state.deck.slice() : W.slice()) as unknown as WordEntry[]);
  fbDeck = [];
  for (let i = 0; i < pool.length && fbDeck.length < SIZE; i++) {
    const b = makeBlank(pool[i]);
    if (b) fbDeck.push({ w: pool[i], blank: b });
  }
  fbIdx = fbOk = fbFail = 0; fbAnswered = false;
}

function open(): void {
  build();
  if (!fbDeck.length) {
    elSent.innerHTML = `<span style="color:#e74c3c;font-size:.9rem;">${t('fib.noSentences')}</span>`;
    elScRow.style.display = 'none'; elFinal.style.display = 'none';
    elSubmit.style.display = 'none'; elNext.style.display = 'none';
    oOverlay.style.display = 'flex'; return;
  }
  elFinal.style.display = 'none'; elScRow.style.display = 'flex';
  oOverlay.style.display = 'flex'; renderQ();
}
function close(): void { oOverlay.style.display = 'none'; }

function renderQ(): void {
  if (fbIdx >= fbDeck.length) { showFinal(); return; }
  const item = fbDeck[fbIdx]; fbCurrent = item; fbAnswered = false;
  elInput.value = ''; elInput.style.borderColor = ''; elInput.style.display = 'block';
  elResult.textContent = ''; elResult.style.display = 'block';
  elHint.textContent = ''; elHint.style.display = 'block';
  elSent.style.display = 'block';
  document.getElementById('fib-hint')!.style.display = 'inline-block';
  elSubmit.style.display = 'inline-block'; elNext.style.display = 'none';
  elSub.textContent = `${t('fib.sentence')} ${fbIdx + 1} ${t('common.of')} ${fbDeck.length}`;
  elPbar.style.width = (fbIdx / fbDeck.length * 100) + '%';
  elOk.textContent = String(fbOk); elFail.textContent = String(fbFail);
  elSent.innerHTML = item.blank.sentence;
  setTimeout(() => { try { elInput.focus(); } catch (e) {} }, 60);
}

function submit(): void {
  if (fbAnswered || !fbCurrent) return;
  const inp = elInput.value.trim().toLowerCase();
  const ans  = fbCurrent.blank.answer.toLowerCase();
  const base = fbCurrent.blank.base.toLowerCase();
  const ok = inp === ans || inp === base || (ans.length > 3 && lev(inp, ans) <= 1) || (base.length > 3 && lev(inp, base) <= 1);
  fbAnswered = true; fbIdx++;
  const correctWord = fbCurrent.blank.answer;
  const hlStyle = ok ? 'background:rgba(39,174,96,.15);border-color:#27ae60;color:#27ae60' : 'background:rgba(231,76,60,.12);border-color:#e74c3c;color:#e74c3c';
  if (ok) {
    fbOk++; elInput.style.borderColor = '#27ae60';
    elResult.innerHTML = `<span style="color:#27ae60">${t('quiz.correctMsg')}</span>`;
    try { addCombo(); (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
    recordModeAnswer('fib', true);
  } else {
    fbFail++; elInput.style.borderColor = '#e74c3c';
    elResult.innerHTML = `<span style="color:#e74c3c">${t('quiz.incorrectMsg')}</span>`;
    try { breakCombo(); (window.playSound as PlaySound | undefined)?.('next'); } catch (e) {}
    recordMistake(fbCurrent.blank.base);
    recordModeAnswer('fib', false);
  }
  elSent.innerHTML = elSent.innerHTML.replace(
    /<span class="fib-blank">.*?<\/span>/,
    `<span class="fib-blank" style="${hlStyle};border-radius:4px;padding:0 4px;">${correctWord}</span>`
  );
  elOk.textContent = String(fbOk); elFail.textContent = String(fbFail);
  // Speak button for the correct word after answering
  elResult.parentElement?.querySelector('.mode-speak')?.remove();
  elResult.insertAdjacentElement('afterend', speakBtn(correctWord));
  elNext.textContent = (fbIdx >= fbDeck.length) ? t('quiz.finish') : t('quiz.next');
  elSubmit.style.display = 'none'; elNext.style.display = 'inline-block'; elNext.focus();
}

function showFinal(): void {
  [elScRow,elSent,elInput,elResult,elHint,elSubmit,elNext].forEach(el => el.style.display = 'none');
  document.getElementById('fib-hint')!.style.display = 'none';
  elFinal.style.display = 'block';
  const pct = fbDeck.length > 0 ? Math.round(fbOk / fbDeck.length * 100) : 0;
  document.getElementById('fib-final-emoji')!.textContent = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
  document.getElementById('fib-final-title')!.textContent = pct===100?t('quiz.perfectTitle'):pct>=80?t('quiz.greatTitle'):pct>=60?t('quiz.goodTitle'):t('listen.keepGoingTitle');
  document.getElementById('fib-final-desc')!.textContent  = `${fbOk} ${t('common.of')} ${fbDeck.length} (${pct}%)`;
  elPbar.style.width = '100%'; elSub.textContent = t('write.completed');
  recordModeComplete('fib');
}

const advanceQ = (): void => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; renderQ(); };
document.getElementById('btn-fib')?.addEventListener('click', open);
document.getElementById('fib-close')?.addEventListener('click', close);
document.getElementById('fib-exit')?.addEventListener('click', close);
oOverlay.addEventListener('click', (e: MouseEvent) => { if (e.target === oOverlay) close(); });
elSubmit.addEventListener('click', submit);
elNext.addEventListener('click', advanceQ);
document.getElementById('fib-restart')?.addEventListener('click', () => { elFinal.style.display = 'none'; elScRow.style.display = 'flex'; build(); renderQ(); });
document.getElementById('fib-hint')?.addEventListener('click', () => {
  if (!fbAnswered && fbCurrent) {
    const a = fbCurrent.blank.answer;
    elHint.textContent = '💡 ' + a.slice(0, Math.ceil(a.length / 2)) + '...';
  }
});
elInput.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter') { if (!fbAnswered) submit(); else advanceQ(); }
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (oOverlay.style.display !== 'flex') return;
  if (e.key === 'Escape') close();
  if ((e.key === 'ArrowRight' || e.key === ' ') && fbAnswered && document.activeElement !== elInput) {
    e.preventDefault(); advanceQ();
  }
});
