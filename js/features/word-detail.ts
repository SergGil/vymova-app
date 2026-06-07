// English Words App — js/features/word-detail.ts
// Word Detail bottom-sheet modal: full word profile
import { state } from '../../src/state.ts';
import { decodeIpa, speakBtn, type SpeakFn } from '../core/ui-helpers.ts';
import { getSimilarWords } from './similar-words.ts';
import { W } from '../../data/words.js';
import { isBookmarked, toggleBookmark } from './bookmarks.ts';
import type { WordEntry } from '../../src/types.js';

const overlay  = document.getElementById('wd-overlay')!   as HTMLElement;
const panel    = document.getElementById('wd-panel')!      as HTMLElement;
const elWord   = document.getElementById('wd-word')!;
const elIpa    = document.getElementById('wd-ipa')!;
const elSpeak  = document.getElementById('wd-speak')!      as HTMLButtonElement;
const elTransl = document.getElementById('wd-transl')!;
const elExBox  = document.getElementById('wd-examples')!   as HTMLElement;
const elExEn   = document.getElementById('wd-ex-en')!      as HTMLElement;
const elExUa   = document.getElementById('wd-ex-ua')!;
const elSrs    = document.getElementById('wd-srs')!        as HTMLElement;
const elSimWrap= document.getElementById('wd-similar-wrap')! as HTMLElement;
const elSimChips=document.getElementById('wd-similar-chips')!;
const elBtnKnow   = document.getElementById('wd-btn-know')!   as HTMLButtonElement;
const elBtnForget = document.getElementById('wd-btn-forget')! as HTMLButtonElement;
const elBtnBm     = document.getElementById('wd-btn-bm')!     as HTMLButtonElement;
const elBtnGoto   = document.getElementById('wd-btn-goto')!   as HTMLButtonElement;

let _current: WordEntry | null = null;

export function openWordDetail(w: WordEntry): void {
  _current = w;
  const ipa  = decodeIpa(w[4] ?? '');
  const enEx = w[2] ?? '';
  const uaEx = w[3] ?? '';

  // Word + IPA
  elWord.textContent = w[0];
  elIpa.textContent  = ipa;

  // Speak button
  elSpeak.onclick = (e: MouseEvent) => {
    e.stopPropagation();
    (window.speak as SpeakFn | undefined)?.(w[0], elSpeak);
  };

  // Translation
  elTransl.textContent = w[1];

  // Examples
  if (enEx) {
    elExBox.style.display = 'block';
    // Bold the target word in example
    const esc = w[0].replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
    elExEn.innerHTML = enEx.replace(new RegExp(`(${esc}\\w*)`, 'gi'), '<b>$1</b>');
    // Add speak button for EN example
    const existingSpeak = elExEn.querySelector('.mode-speak');
    if (existingSpeak) existingSpeak.remove();
    elExEn.appendChild(speakBtn(enEx.replace(/<[^>]*>/g, ''), 'en-US'));
    elExUa.textContent = uaEx;
  } else {
    elExBox.style.display = 'none';
  }

  // SRS status
  const srsEntry = (state.srsData as Record<string, { due?: string; ef?: number; reps?: number }>)[w[0]];
  const isKnown  = state.known.has(w[0]);
  const chips: string[] = [];
  if (isKnown) chips.push(`<span style="color:#27ae60;font-weight:600;">✓ Вивчено</span>`);
  if (srsEntry?.due) {
    const daysUntil = Math.ceil((new Date(srsEntry.due).getTime() - Date.now()) / 86_400_000);
    const label = daysUntil <= 0 ? 'Повторити зараз' : daysUntil === 1 ? 'Завтра' : `Через ${daysUntil} дн.`;
    const color = daysUntil <= 0 ? '#e74c3c' : daysUntil <= 3 ? '#f39c12' : 'var(--text3)';
    chips.push(`<span style="color:${color};">🔁 ${label}</span>`);
  }
  if (srsEntry?.reps) chips.push(`<span>📝 ${srsEntry.reps} повторень</span>`);
  elSrs.innerHTML = chips.join('');

  // Action buttons state
  elBtnKnow.style.display   = isKnown ? 'none' : '';
  elBtnForget.style.display = isKnown ? '' : 'none';
  _updateBm(w[0]);

  // Similar words
  const similar = getSimilarWords(w[0], w[1], 5);
  if (similar.length) {
    elSimWrap.style.display = 'block';
    elSimChips.innerHTML = similar.map(s =>
      `<div class="wd-chip" data-word="${s[0]}" style="cursor:pointer;padding:5px 10px;border-radius:20px;border:1.5px solid var(--border);font-size:.78rem;background:var(--bg);">` +
        `<span style="font-weight:600;color:var(--text);">${s[0]}</span>` +
        `<span style="color:var(--text3);margin-left:5px;">${s[1]}</span>` +
      `</div>`
    ).join('');
    elSimChips.querySelectorAll<HTMLElement>('.wd-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const found = (W as unknown as WordEntry[]).find(x => x[0] === chip.dataset.word);
        if (found) openWordDetail(found);
      });
    });
  } else {
    elSimWrap.style.display = 'none';
  }

  // Show overlay (slide up from bottom)
  overlay.style.display = 'flex';
  panel.scrollTop = 0;
  requestAnimationFrame(() => { overlay.style.opacity = '1'; });
}

function _updateBm(word: string): void {
  const bm = isBookmarked(word);
  elBtnBm.textContent = bm ? '⭐' : '☆';
  elBtnBm.style.color = bm ? '#f39c12' : 'var(--text2)';
}

function _close(): void {
  overlay.style.display = 'none';
  _current = null;
}

// Action handlers
elBtnKnow.addEventListener('click', () => {
  if (!_current) return;
  (window.onWordLearned as ((w: WordEntry) => void) | undefined)?.(_current);
  state.known.add(_current[0]);
  elBtnKnow.style.display   = 'none';
  elBtnForget.style.display = '';
  elSrs.innerHTML = `<span style="color:#27ae60;font-weight:600;">✓ Вивчено</span>`;
});

elBtnForget.addEventListener('click', () => {
  if (!_current) return;
  state.known.delete(_current[0]);
  delete (state.srsData as Record<string, unknown>)[_current[0]];
  try {
    const { saveKnown, saveSRS } = window as Window & { saveKnown?: (s: Set<string>) => void; saveSRS?: (d: unknown) => void };
    saveKnown?.(state.known); saveSRS?.(state.srsData);
  } catch (e) {}
  elBtnKnow.style.display   = '';
  elBtnForget.style.display = 'none';
  elSrs.innerHTML = '';
});

elBtnBm.addEventListener('click', () => {
  if (!_current) return;
  toggleBookmark(_current[0]);
  _updateBm(_current[0]);
});

elBtnGoto.addEventListener('click', () => {
  if (!_current) return;
  // Capture before _close() nulls _current
  const word = _current[0];
  _close();
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  const di = state.deck.findIndex(d => d[0] === word);
  if (di !== -1) {
    (window.setIdx as ((i: number) => void) | undefined)?.(di);
    (window.render as (() => void) | undefined)?.();
  } else if (sel && sel.value !== '0') {
    sel.value = '0';
    sel.dispatchEvent(new Event('change'));
    setTimeout(() => {
      const di2 = state.deck.findIndex(d => d[0] === word);
      if (di2 !== -1) { (window.setIdx as ((i: number) => void) | undefined)?.(di2); (window.render as (() => void) | undefined)?.(); }
    }, 100);
  }
});

document.getElementById('wd-close')?.addEventListener('click', _close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) _close(); });
document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape' && overlay.style.display === 'flex') _close(); });

// Export for other modules
export { openWordDetail as default };
