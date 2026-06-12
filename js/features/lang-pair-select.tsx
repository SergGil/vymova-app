// English Words App — js/features/lang-pair-select.tsx
// "Я знаю" / "Хочу вчити" / "Напрямок" language pair picker (first React component).
// Drives the legacy #sel-mode <select> so all existing listeners
// (deck-mode, tag-filter, word-detail, mode-utils, ...) keep working untouched.
import { createRoot, type Root } from 'react-dom/client';
import { useState, type ReactElement } from 'react';
import { t } from './i18n.ts';

export type LangCode = 'ua' | 'en' | 'es' | 'fr';
export type Direction = 'fwd' | 'rev' | 'mix';

const ALL_LANGS: LangCode[] = ['ua', 'en', 'es', 'fr'];

// Which "learn" languages are available for a given "know" language —
// limited by the EN/UA/ES/FR word-pair data we actually have.
const LEARN_OPTIONS: Record<LangCode, LangCode[]> = {
  ua: ['en', 'es', 'fr'],
  en: ['ua', 'es', 'fr'],
  es: ['en', 'ua', 'fr'],
  fr: ['en', 'ua', 'es'],
};

// (frontLang, backLang) -> #sel-mode value
const MODE_MAP: Record<string, string> = {
  'en|ua': 'en',
  'ua|en': 'ua',
  'es|en': 'es-en',
  'en|es': 'en-es',
  'es|ua': 'es-ua',
  'ua|es': 'ua-es',
  'fr|en': 'fr-en',
  'en|fr': 'en-fr',
  'fr|ua': 'fr-ua',
  'ua|fr': 'ua-fr',
  'es|fr': 'es-fr',
  'fr|es': 'fr-es',
};

// #sel-mode value -> (learnLang, knowLang) — i.e. (front, back) — for restoring state on load
const MODE_TO_PAIR: Record<string, [LangCode, LangCode]> = {
  en: ['en', 'ua'],
  ua: ['ua', 'en'],
  'en-es': ['en', 'es'],
  'es-en': ['es', 'en'],
  'es-ua': ['es', 'ua'],
  'ua-es': ['ua', 'es'],
  'en-fr': ['en', 'fr'],
  'fr-en': ['fr', 'en'],
  'fr-ua': ['fr', 'ua'],
  'ua-fr': ['ua', 'fr'],
  'es-fr': ['es', 'fr'],
  'fr-es': ['fr', 'es'],
};

const KNOW_KEY = 'ew_know_lang';
const LEARN_KEY = 'ew_learn_lang';
const DIR_KEY = 'ew_direction';

function isLangCode(v: string | null): v is LangCode {
  return v === 'ua' || v === 'en' || v === 'es' || v === 'fr';
}

function isDirection(v: string | null): v is Direction {
  return v === 'fwd' || v === 'rev' || v === 'mix';
}

function initialState(): { learnLang: LangCode; knowLang: LangCode; direction: Direction } {
  const storedKnow = localStorage.getItem(KNOW_KEY);
  const storedLearn = localStorage.getItem(LEARN_KEY);
  const storedDir = localStorage.getItem(DIR_KEY);
  if (isLangCode(storedKnow) && isLangCode(storedLearn) && LEARN_OPTIONS[storedKnow].includes(storedLearn)) {
    return { learnLang: storedLearn, knowLang: storedKnow, direction: isDirection(storedDir) ? storedDir : 'fwd' };
  }
  const current = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? 'en';
  const [learnLang, knowLang] = MODE_TO_PAIR[current] ?? ['en', 'ua'];
  return { learnLang, knowLang, direction: 'fwd' };
}

// Applies the chosen pair + direction to the legacy #sel-mode select.
function applyMode(learn: LangCode, know: LangCode, direction: Direction): void {
  const fwdMode = MODE_MAP[`${learn}|${know}`];
  const revMode = MODE_MAP[`${know}|${learn}`];
  const sel = document.getElementById('sel-mode') as HTMLSelectElement | null;
  if (!sel) return;
  let mode: string;
  if (direction === 'rev' && revMode) mode = revMode;
  else if (direction === 'mix' && fwdMode && revMode) mode = 'mix';
  else mode = fwdMode || revMode || sel.value;
  if (direction === 'mix' && fwdMode && revMode) {
    sel.dataset.mixA = fwdMode;
    sel.dataset.mixB = revMode;
  } else {
    delete sel.dataset.mixA;
    delete sel.dataset.mixB;
  }
  if (sel.value === mode) return;
  sel.value = mode;
  sel.dispatchEvent(new Event('change'));
}

function LangPairSelect(): ReactElement {
  const [{ learnLang, knowLang, direction }, setState] = useState(initialState);

  function persist(next: { learnLang: LangCode; knowLang: LangCode; direction: Direction }): void {
    localStorage.setItem(KNOW_KEY, next.knowLang);
    localStorage.setItem(LEARN_KEY, next.learnLang);
    localStorage.setItem(DIR_KEY, next.direction);
    setState(next);
    applyMode(next.learnLang, next.knowLang, next.direction);
  }

  function onKnowChange(next: LangCode): void {
    const options = LEARN_OPTIONS[next];
    const nextLearn = options.includes(learnLang) ? learnLang : options[0];
    persist({ learnLang: nextLearn, knowLang: next, direction });
  }

  function onLearnChange(next: LangCode): void {
    persist({ learnLang: next, knowLang, direction });
  }

  function onDirectionChange(next: Direction): void {
    persist({ learnLang, knowLang, direction: next });
  }

  const fwdLabel = `${learnLang.toUpperCase()} → ${knowLang.toUpperCase()}`;
  const revLabel = `${knowLang.toUpperCase()} → ${learnLang.toUpperCase()}`;

  return (
    <div style={{ display: 'flex', gap: '8px', marginRight: '4px' }}>
      <select aria-label={t('langpair.know')} value={knowLang} onChange={e => onKnowChange(e.target.value as LangCode)}>
        {ALL_LANGS.map(l => <option key={l} value={l}>{t('langpair.know')}: {t(`lang.${l}`)}</option>)}
      </select>
      <select aria-label={t('langpair.learn')} value={learnLang} onChange={e => onLearnChange(e.target.value as LangCode)}>
        {LEARN_OPTIONS[knowLang].map(l => <option key={l} value={l}>{t('langpair.learn')}: {t(`lang.${l}`)}</option>)}
      </select>
      <select aria-label={t('langpair.direction')} value={direction} onChange={e => onDirectionChange(e.target.value as Direction)}>
        <option value="fwd">{fwdLabel}</option>
        <option value="rev">{revLabel}</option>
        <option value="mix">{t('mode.mixed')}</option>
      </select>
    </div>
  );
}

let _root: Root | null = null;

export function mountLangPairSelect(): void {
  const el = document.getElementById('lang-pair-select');
  if (!el) return;
  _root = createRoot(el);
  _root.render(<LangPairSelect />);
  // Apply the restored state to #sel-mode on load (in case it differs from the default).
  const { learnLang, knowLang, direction } = initialState();
  applyMode(learnLang, knowLang, direction);
}

export function refreshLangPairSelect(): void {
  if (!_root) return;
  _root.render(<LangPairSelect />);
}

(window as unknown as { _refreshLangPairSelect?: () => void })._refreshLangPairSelect = refreshLangPairSelect;
