// Vymova — js/features/lang-pair-select.tsx
// "Я знаю" / "Хочу вчити" / "Напрямок" language pair picker (first React component).
// Drives the legacy #sel-mode <select> so all existing listeners
// (deck-mode, tag-filter, word-detail, mode-utils, ...) keep working untouched.
import { useState, type ReactElement } from 'react';
import { t, getLang } from './i18n.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';

export type LangCode = 'ua' | 'en' | 'es' | 'fr' | 'it' | 'pt' | 'de' | 'he' | 'ar' | 'pl' | 'zh' | 'el' | 'ja' | 'tr' | 'nl';
type Direction = 'fwd' | 'rev' | 'mix';

const ALL_LANGS: LangCode[] = ['ua', 'en', 'es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl'];

// Every language can pair with every other — all `data/words_XX.js` files
// share the same English-headword keys (the 13 target-language files share
// an identical 2000-word key set; ES additionally covers the full 10002),
// so any pair yields a real, non-empty deck.
const LEARN_OPTIONS: Record<LangCode, LangCode[]> = Object.fromEntries(
  ALL_LANGS.map(l => [l, ALL_LANGS.filter(x => x !== l)])
) as Record<LangCode, LangCode[]>;

// (front, back) -> #sel-mode value. Mechanical: `${front}-${back}`, except
// the EN↔UA pair which keeps its historical bare 'en'/'ua' mode strings.
function modeForPair(front: LangCode, back: LangCode): string {
  if (front === 'en' && back === 'ua') return 'en';
  if (front === 'ua' && back === 'en') return 'ua';
  return `${front}-${back}`;
}

// #sel-mode value -> (learnLang, knowLang) i.e. (front, back) — inverse of modeForPair.
function pairForMode(mode: string): [LangCode, LangCode] {
  if (mode === 'en') return ['en', 'ua'];
  if (mode === 'ua') return ['ua', 'en'];
  const i = mode.indexOf('-');
  if (i > 0) {
    const f = mode.slice(0, i), b = mode.slice(i + 1);
    if (isLangCode(f) && isLangCode(b)) return [f, b];
  }
  return ['en', 'ua'];
}

const KNOW_KEY = 'ew_know_lang';
const LEARN_KEY = 'ew_learn_lang';
const DIR_KEY = 'ew_direction';

// Accusative form of the language name (e.g. "Українську" instead of
// "Українська"), used after "Я знаю" / "Хочу вчити" — only meaningful when
// the UI itself is in Ukrainian; lang.acc.* only has Ukrainian translations,
// so other UI languages would otherwise fall back to it via fallbackLng.
function langAcc(l: LangCode): string {
  if (getLang() !== 'ua') return t(`lang.${l}`);
  const key = `lang.acc.${l}`;
  const val = t(key);
  return val === key ? t(`lang.${l}`) : val;
}

function isLangCode(v: string | null): v is LangCode {
  return v === 'ua' || v === 'en' || v === 'es' || v === 'fr' || v === 'it' || v === 'pt' || v === 'de' || v === 'he' || v === 'ar' ||
    v === 'pl' || v === 'zh' || v === 'el' || v === 'ja' || v === 'tr' || v === 'nl';
}

/** The language the user is currently learning (e.g. for language-specific content like grammar). */
export function getLearnLang(): LangCode {
  const stored = localStorage.getItem(LEARN_KEY);
  return isLangCode(stored) ? stored : 'en';
}

/** The language the user already knows (e.g. for language-specific content like idioms). */
export function getKnowLang(): LangCode {
  const stored = localStorage.getItem(KNOW_KEY);
  return isLangCode(stored) ? stored : 'ua';
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
  const [learnLang, knowLang] = pairForMode(current);
  return { learnLang, knowLang, direction: 'fwd' };
}

// Applies the chosen pair + direction to the legacy #sel-mode select.
function applyMode(learn: LangCode, know: LangCode, direction: Direction): void {
  const fwdMode = modeForPair(learn, know);
  const revMode = modeForPair(know, learn);
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

export function LangPairSelect(): ReactElement {
  useStateVersion();
  const [{ learnLang, knowLang, direction }, setState] = useState(initialState);

  function persist(next: { learnLang: LangCode; knowLang: LangCode; direction: Direction }): void {
    const prevLearn = localStorage.getItem(LEARN_KEY);
    localStorage.setItem(KNOW_KEY, next.knowLang);
    localStorage.setItem(LEARN_KEY, next.learnLang);
    localStorage.setItem(DIR_KEY, next.direction);
    if (prevLearn !== next.learnLang) {
      window.dispatchEvent(new CustomEvent('ew-learn-lang-changed', { detail: next.learnLang }));
    }
    setState(next);
    applyMode(next.learnLang, next.knowLang, next.direction);
    notifyStateChange();
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
    <div className="lang-pair-row" style={{ display: 'flex', gap: '8px', marginRight: '4px' }}>
      <select aria-label={t('langpair.know')} value={knowLang} onChange={e => onKnowChange(e.target.value as LangCode)}>
        {ALL_LANGS.map(l => <option key={l} value={l}>{t('langpair.know')}: {langAcc(l)}</option>)}
      </select>
      <select aria-label={t('langpair.learn')} value={learnLang} onChange={e => onLearnChange(e.target.value as LangCode)}>
        {LEARN_OPTIONS[knowLang].map(l => <option key={l} value={l}>{t('langpair.learn')}: {langAcc(l)}</option>)}
      </select>
      <select aria-label={t('langpair.direction')} value={direction} onChange={e => onDirectionChange(e.target.value as Direction)}>
        <option value="fwd">{fwdLabel}</option>
        <option value="rev">{revLabel}</option>
        <option value="mix">{t('mode.mixed')}</option>
      </select>
    </div>
  );
}

// Apply the restored state to #sel-mode on load (in case it differs from the default).
{
  const { learnLang, knowLang, direction } = initialState();
  applyMode(learnLang, knowLang, direction);
}

