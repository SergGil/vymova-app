// English Words App — js/features/idioms.ts
// Idioms reference page: English, Ukrainian, and Spanish idioms
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS, SPANISH_IDIOMS } from '../../data/idioms.ts';
import type { Idiom } from '../../data/idioms.ts';
import { t } from './i18n.ts';

const overlay  = document.getElementById('idioms-overlay')! as HTMLElement;
const listEl   = document.getElementById('idioms-list')!    as HTMLElement;
const searchEl = document.getElementById('idioms-search')!  as HTMLInputElement;
const tabEn    = document.getElementById('idioms-tab-en')!  as HTMLButtonElement;
const tabUa    = document.getElementById('idioms-tab-ua')!  as HTMLButtonElement;
const tabEs    = document.getElementById('idioms-tab-es')!  as HTMLButtonElement;

let _tab: 'en' | 'ua' | 'es' = 'en';
let _query = '';

type SpeakFn = (text: string, lang: string, btn: HTMLElement | null) => void;
function _speak(text: string, lang: string, btn: HTMLElement | null): void {
  (window as Window & { _speakWithLang?: SpeakFn })._speakWithLang?.(text, lang, btn);
}

function _esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function _speakBtn(text: string, lang: string): string {
  return `<button class="speak-btn idiom-speak" data-text="${_esc(text)}" data-lang="${lang}" title="🔊">🔊</button>`;
}

// ── Card render ───────────────────────────────────────────────
function _renderCard(idiom: Idiom, num: number): string {
  const phraseLang = _tab === 'ua' ? 'uk-UA' : _tab === 'es' ? 'es-ES' : 'en-US';
  const trLang     = _tab === 'ua' ? 'en-US' : 'uk-UA';

  const meaningLine = idiom.meaningEn
    ? `<span class="idiom-meaning">— ${idiom.meaning}</span><span class="idiom-meaning-en"> / ${idiom.meaningEn}</span>`
    : `<span class="idiom-meaning">— ${idiom.meaning}</span>`;

  return `
    <div class="idiom-card">
      <div class="idiom-head">
        <span class="idiom-num">${num}</span>
        <span class="idiom-phrase">${idiom.emoji ?? ''} ${idiom.phrase}</span>
        ${_speakBtn(idiom.phrase, phraseLang)}
        ${meaningLine}
      </div>
      <div class="idiom-example">
        ${idiom.exampleSrc} ${_speakBtn(idiom.exampleSrc, phraseLang)}<br>
        <span class="idiom-ex-tr">${idiom.exampleTr} ${_speakBtn(idiom.exampleTr, trLang)}</span>
      </div>
    </div>
  `;
}

function _render(): void {
  const source = _tab === 'en' ? ENGLISH_IDIOMS : _tab === 'ua' ? UKRAINIAN_IDIOMS : SPANISH_IDIOMS;
  const q = _query.trim().toLowerCase();
  const filtered = q
    ? source.filter(i =>
        i.phrase.toLowerCase().includes(q) ||
        i.meaning.toLowerCase().includes(q) ||
        (i.meaningEn?.toLowerCase().includes(q) ?? false))
    : source;

  if (!filtered.length) {
    listEl.innerHTML = `<div class="idioms-empty">${t('idioms.empty')}</div>`;
    return;
  }
  listEl.innerHTML = filtered.map((idiom, i) => _renderCard(idiom, i + 1)).join('');
}

function _setTab(tab: 'en' | 'ua' | 'es'): void {
  _tab = tab;
  tabEn.classList.toggle('idioms-tab-active', tab === 'en');
  tabUa.classList.toggle('idioms-tab-active', tab === 'ua');
  tabEs.classList.toggle('idioms-tab-active', tab === 'es');
  _render();
}

// ── Event delegation for speak buttons ───────────────────────
listEl.addEventListener('click', (e: MouseEvent) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.idiom-speak');
  if (!btn) return;
  const text = btn.dataset.text ?? '';
  const lang = btn.dataset.lang ?? 'en-US';
  _speak(text, lang, btn);
});

tabEn.addEventListener('click', () => _setTab('en'));
tabUa.addEventListener('click', () => _setTab('ua'));
tabEs.addEventListener('click', () => _setTab('es'));
searchEl.addEventListener('input', () => { _query = searchEl.value; _render(); });

/** Called by sidebar openPage('idioms') to initialize content */
export function openIdiomsContent(): void {
  _render();
}
window.openIdiomsContent = openIdiomsContent;
window._refreshIdiomsUI = _render;

export function openIdioms(): void {
  (window.openPage as ((p: string) => void) | undefined)?.('idioms');
}

function closeIdioms(): void {
  (window.closePage as (() => void) | undefined)?.();
}

document.getElementById('idioms-close')?.addEventListener('click', closeIdioms);
overlay.addEventListener('click', (e: MouseEvent) => {
  if (e.target === overlay) closeIdioms();
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeIdioms();
});
