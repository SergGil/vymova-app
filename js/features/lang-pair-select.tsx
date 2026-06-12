// English Words App — js/features/lang-pair-select.tsx
// "Я знаю" / "Хочу вчити" language pair picker (first React component).
// Drives the legacy #sel-mode <select> so all existing listeners
// (deck-mode, tag-filter, word-detail, mode-utils, ...) keep working untouched.
import { createRoot, type Root } from 'react-dom/client';
import { useState, type ReactElement } from 'react';
import { t } from './i18n.ts';

export type LangCode = 'ua' | 'en' | 'es' | 'fr';

const ALL_LANGS: LangCode[] = ['ua', 'en', 'es', 'fr'];

// Which "learn" languages are available for a given "know" language —
// limited by the EN/UA/ES/FR word-pair data we actually have.
const LEARN_OPTIONS: Record<LangCode, LangCode[]> = {
  ua: ['en', 'es', 'fr'],
  en: ['ua', 'es', 'fr'],
  es: ['en', 'ua'],
  fr: ['en', 'ua'],
};

// (learnLang, knowLang) -> #sel-mode value
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
};

// #sel-mode value -> (learnLang, knowLang), for restoring state on load
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
};

const KNOW_KEY = 'ew_know_lang';
const LEARN_KEY = 'ew_learn_lang';

function isLangCode(v: string | null): v is LangCode {
  return v === 'ua' || v === 'en' || v === 'es' || v === 'fr';
}

function initialPair(): [LangCode, LangCode] {
  const storedKnow = localStorage.getItem(KNOW_KEY);
  const storedLearn = localStorage.getItem(LEARN_KEY);
  if (isLangCode(storedKnow) && isLangCode(storedLearn) && LEARN_OPTIONS[storedKnow].includes(storedLearn)) {
    return [storedLearn, storedKnow];
  }
  const current = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? 'en';
  return MODE_TO_PAIR[current] ?? ['en', 'ua'];
}

function applyMode(learn: LangCode, know: LangCode): void {
  const mode = MODE_MAP[`${learn}|${know}`];
  if (!mode) return;
  const sel = document.getElementById('sel-mode') as HTMLSelectElement | null;
  if (!sel || sel.value === mode) return;
  sel.value = mode;
  sel.dispatchEvent(new Event('change'));
}

function LangPairSelect(): ReactElement {
  const [[learnLang, knowLang], setPair] = useState<[LangCode, LangCode]>(initialPair);

  function onKnowChange(next: LangCode): void {
    const options = LEARN_OPTIONS[next];
    const nextLearn = options.includes(learnLang) ? learnLang : options[0];
    localStorage.setItem(KNOW_KEY, next);
    localStorage.setItem(LEARN_KEY, nextLearn);
    setPair([nextLearn, next]);
    applyMode(nextLearn, next);
  }

  function onLearnChange(next: LangCode): void {
    localStorage.setItem(LEARN_KEY, next);
    setPair([next, knowLang]);
    applyMode(next, knowLang);
  }

  return (
    <>
      <select aria-label={t('langpair.know')} value={knowLang} onChange={e => onKnowChange(e.target.value as LangCode)}>
        {ALL_LANGS.map(l => <option key={l} value={l}>{t('langpair.know')}: {t(`lang.${l}`)}</option>)}
      </select>
      <select aria-label={t('langpair.learn')} value={learnLang} onChange={e => onLearnChange(e.target.value as LangCode)}>
        {LEARN_OPTIONS[knowLang].map(l => <option key={l} value={l}>{t('langpair.learn')}: {t(`lang.${l}`)}</option>)}
      </select>
    </>
  );
}

let _root: Root | null = null;

export function mountLangPairSelect(): void {
  const el = document.getElementById('lang-pair-select');
  if (!el) return;
  _root = createRoot(el);
  _root.render(<LangPairSelect />);
  // Apply the restored pair to #sel-mode on load (in case it differs from the default).
  const [learn, know] = initialPair();
  applyMode(learn, know);
}

export function refreshLangPairSelect(): void {
  if (!_root) return;
  _root.render(<LangPairSelect />);
}

(window as unknown as { _refreshLangPairSelect?: () => void })._refreshLangPairSelect = refreshLangPairSelect;
