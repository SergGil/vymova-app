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

// Which "learn" languages are available for a given "know" language —
// limited by the EN/UA/ES/FR/IT/PT/DE/HE/AR/PL/ZH/EL/JA/TR/NL word-pair data we actually have.
const LEARN_OPTIONS: Record<LangCode, LangCode[]> = {
  ua: ['en', 'es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl'],
  en: ['ua', 'es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl'],
  es: ['en', 'ua', 'fr'],
  fr: ['en', 'ua', 'es'],
  it: ['en', 'ua'],
  pt: ['en', 'ua'],
  de: ['en', 'ua'],
  he: ['en', 'ua'],
  ar: ['en', 'ua'],
  pl: ['en', 'ua'],
  zh: ['en', 'ua'],
  el: ['en', 'ua'],
  ja: ['en', 'ua'],
  tr: ['en', 'ua'],
  nl: ['en', 'ua'],
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
  'it|en': 'it-en',
  'en|it': 'en-it',
  'it|ua': 'it-ua',
  'ua|it': 'ua-it',
  'pt|en': 'pt-en',
  'en|pt': 'en-pt',
  'pt|ua': 'pt-ua',
  'ua|pt': 'ua-pt',
  'de|en': 'de-en',
  'en|de': 'en-de',
  'de|ua': 'de-ua',
  'ua|de': 'ua-de',
  'he|en': 'he-en',
  'en|he': 'en-he',
  'he|ua': 'he-ua',
  'ua|he': 'ua-he',
  'ar|en': 'ar-en',
  'en|ar': 'en-ar',
  'ar|ua': 'ar-ua',
  'ua|ar': 'ua-ar',
  'pl|en': 'pl-en',
  'en|pl': 'en-pl',
  'pl|ua': 'pl-ua',
  'ua|pl': 'ua-pl',
  'zh|en': 'zh-en',
  'en|zh': 'en-zh',
  'zh|ua': 'zh-ua',
  'ua|zh': 'ua-zh',
  'el|en': 'el-en',
  'en|el': 'en-el',
  'el|ua': 'el-ua',
  'ua|el': 'ua-el',
  'ja|en': 'ja-en',
  'en|ja': 'en-ja',
  'ja|ua': 'ja-ua',
  'ua|ja': 'ua-ja',
  'tr|en': 'tr-en',
  'en|tr': 'en-tr',
  'tr|ua': 'tr-ua',
  'ua|tr': 'ua-tr',
  'nl|en': 'nl-en',
  'en|nl': 'en-nl',
  'nl|ua': 'nl-ua',
  'ua|nl': 'ua-nl',
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
  'it-en': ['it', 'en'],
  'en-it': ['en', 'it'],
  'it-ua': ['it', 'ua'],
  'ua-it': ['ua', 'it'],
  'pt-en': ['pt', 'en'],
  'en-pt': ['en', 'pt'],
  'pt-ua': ['pt', 'ua'],
  'ua-pt': ['ua', 'pt'],
  'de-en': ['de', 'en'],
  'en-de': ['en', 'de'],
  'de-ua': ['de', 'ua'],
  'ua-de': ['ua', 'de'],
  'he-en': ['he', 'en'],
  'en-he': ['en', 'he'],
  'he-ua': ['he', 'ua'],
  'ua-he': ['ua', 'he'],
  'ar-en': ['ar', 'en'],
  'en-ar': ['en', 'ar'],
  'ar-ua': ['ar', 'ua'],
  'ua-ar': ['ua', 'ar'],
  'pl-en': ['pl', 'en'],
  'en-pl': ['en', 'pl'],
  'pl-ua': ['pl', 'ua'],
  'ua-pl': ['ua', 'pl'],
  'zh-en': ['zh', 'en'],
  'en-zh': ['en', 'zh'],
  'zh-ua': ['zh', 'ua'],
  'ua-zh': ['ua', 'zh'],
  'el-en': ['el', 'en'],
  'en-el': ['en', 'el'],
  'el-ua': ['el', 'ua'],
  'ua-el': ['ua', 'el'],
  'ja-en': ['ja', 'en'],
  'en-ja': ['en', 'ja'],
  'ja-ua': ['ja', 'ua'],
  'ua-ja': ['ua', 'ja'],
  'tr-en': ['tr', 'en'],
  'en-tr': ['en', 'tr'],
  'tr-ua': ['tr', 'ua'],
  'ua-tr': ['ua', 'tr'],
  'nl-en': ['nl', 'en'],
  'en-nl': ['en', 'nl'],
  'nl-ua': ['nl', 'ua'],
  'ua-nl': ['ua', 'nl'],
};

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

