// English Words App — js/features/idioms.ts
// Idioms reference page: English idioms ↔ Ukrainian idioms with their English equivalents
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS } from '../../data/idioms.ts';
import type { Idiom } from '../../data/idioms.ts';

const overlay  = document.getElementById('idioms-overlay')! as HTMLElement;
const listEl   = document.getElementById('idioms-list')!    as HTMLElement;
const searchEl = document.getElementById('idioms-search')!  as HTMLInputElement;
const tabEn    = document.getElementById('idioms-tab-en')!  as HTMLButtonElement;
const tabUa    = document.getElementById('idioms-tab-ua')!  as HTMLButtonElement;

let _tab: 'en' | 'ua' = 'en';
let _query = '';

function _meaningLabel(): string {
  return _tab === 'en' ? '🇺🇦 значення' : '🇬🇧 англійський відповідник';
}

function _renderCard(idiom: Idiom): string {
  return `
    <div class="idiom-card">
      <div class="idiom-head">
        <span class="idiom-phrase">${idiom.emoji ?? ''} ${idiom.phrase}</span>
        <span class="idiom-meaning">— ${_meaningLabel()}: ${idiom.meaning}</span>
      </div>
      <div class="idiom-example">
        ${idiom.exampleSrc}<br>
        <span class="idiom-ex-tr">${idiom.exampleTr}</span>
      </div>
    </div>
  `;
}

function _render(): void {
  const source = _tab === 'en' ? ENGLISH_IDIOMS : UKRAINIAN_IDIOMS;
  const q = _query.trim().toLowerCase();
  const filtered = q
    ? source.filter(i =>
        i.phrase.toLowerCase().includes(q) ||
        i.meaning.toLowerCase().includes(q))
    : source;

  if (!filtered.length) {
    listEl.innerHTML = '<div class="idioms-empty">Нічого не знайдено 🤷</div>';
    return;
  }
  listEl.innerHTML = filtered.map(_renderCard).join('');
}

function _setTab(tab: 'en' | 'ua'): void {
  _tab = tab;
  tabEn.classList.toggle('idioms-tab-active', tab === 'en');
  tabUa.classList.toggle('idioms-tab-active', tab === 'ua');
  _render();
}

tabEn.addEventListener('click', () => _setTab('en'));
tabUa.addEventListener('click', () => _setTab('ua'));
searchEl.addEventListener('input', () => { _query = searchEl.value; _render(); });

/** Called by sidebar openPage('idioms') to initialize content */
export function openIdiomsContent(): void {
  _render();
}
window.openIdiomsContent = openIdiomsContent;

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
