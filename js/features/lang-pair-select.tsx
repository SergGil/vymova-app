// Vymova — js/features/lang-pair-select.tsx
// "Я знаю" / "Хочу вчити" / "Напрямок" language pair picker (first React component).
// Drives the legacy #sel-mode <select> so all existing listeners
// (deck-mode, tag-filter, word-detail, mode-utils, ...) keep working untouched.
import { useState, type ReactElement } from 'react';
import { t, getLang } from './i18n.ts';
import { notifyLangChange, useLangVersion } from '../../src/store.ts';
import { flagUrl } from '../core/flags.ts';
import { FLAG_CODE } from '../core/flag-codes.ts';
import { FlagDropdown } from '../core/flag-dropdown.tsx';
import { ensureLangTableLoaded, areLangTablesReady } from './mode-utils.ts';
import { getModeStateSnapshot, setMode as dispatchMode } from '../../src/mode-store.ts';

export { FLAG_CODE };

export type LangCode =
  | 'ua'
  | 'en'
  | 'es'
  | 'fr'
  | 'it'
  | 'pt'
  | 'de'
  | 'he'
  | 'ar'
  | 'pl'
  | 'zh'
  | 'el'
  | 'ja'
  | 'tr'
  | 'nl'
  | 'vi'
  | 'hi'
  | 'bn'
  | 'id'
  | 'pcm'
  | 'ko'
  | 'fa'
  | 'sw'
  | 'ms'
  | 'th'
  | 'az'
  | 'ro'
  | 'hu'
  | 'cs'
  | 'kk'
  | 'sv'
  | 'ka'
  | 'hr'
  | 'sr'
  | 'bs'
  | 'bg'
  | 'sk'
  | 'hy'
  | 'da'
  | 'fi'
  | 'no'
  | 'la'
  | 'lt'
  | 'lv'
  | 'et'
  | 'sl'
  | 'mk'
  | 'sq'
  | 'is'
  | 'cy'
  | 'ga'
  | 'tl'
  | 'mn'
  | 'uz'
  | 'am'
  | 'eo'
  | 'ta'
  | 'pa'
  | 'zu'
  | 'af'
  | 'ky'
  | 'tg'
  | 'tk'
  | 'ug'
  | 'eu'
  | 'ca'
  | 'gl'
  | 'mt'
  | 'lb'
  | 'ht'
  | 'bo'
  | 'my'
  | 'km'
  | 'lo'
  | 'ne'
  | 'si'
  | 'ur'
  | 'te'
  | 'ml'
  | 'kn'
  | 'mr'
  | 'gu'
  | 'or'
  | 'as'
  | 'sd'
  | 'ps'
  | 'so'
  | 'ha'
  | 'yo'
  | 'ig'
  | 'ti'
  | 'wo'
  | 'mg'
  | 'xh'
  | 'sn'
  | 'ny'
  | 'fj'
  | 'sm'
  | 'to'
  | 'mi'
  | 'haw'
  | 'jv'
  | 'su'
  | 'gd'
  | 'br'
  | 'kw'
  | 'gv'
  | 'fo'
  | 'oc'
  | 'co'
  | 'sc'
  | 'fy'
  | 'yi'
  | 'lad'
  | 'qu'
  | 'gn'
  | 'ay'
  | 'dz'
  | 'dv'
  | 'tet'
  | 'be'
  | 'qya'
  | 'sjn'
  | 'ku'
  | 'om'
  | 'ln'
  | 'bho'
  | 'ceb'
  | 'rm'
  | 'ty'
  | 'ch'
  | 'mh'
  | 'pau'
  | 'nah'
  | 'nv'
  | 'tlh'
  | 'val'
  | 'dth';
type Direction = 'fwd' | 'rev' | 'mix';

const ALL_LANGS: LangCode[] = [
  'ua',
  'en',
  'es',
  'fr',
  'it',
  'pt',
  'de',
  'he',
  'ar',
  'pl',
  'zh',
  'el',
  'ja',
  'tr',
  'nl',
  'vi',
  'hi',
  'bn',
  'id',
  'pcm',
  'ko',
  'fa',
  'sw',
  'ms',
  'th',
  'az',
  'ro',
  'hu',
  'cs',
  'kk',
  'sv',
  'ka',
  'hr',
  'sr',
  'bs',
  'bg',
  'sk',
  'hy',
  'da',
  'fi',
  'no',
  'la',
  'lt',
  'lv',
  'et',
  'sl',
  'mk',
  'sq',
  'is',
  'cy',
  'ga',
  'tl',
  'mn',
  'uz',
  'am',
  'eo',
  'ta',
  'pa',
  'zu',
  'af',
  'ky',
  'tg',
  'tk',
  'ug',
  'eu',
  'ca',
  'gl',
  'mt',
  'lb',
  'ht',
  'bo',
  'my',
  'km',
  'lo',
  'ne',
  'si',
  'ur',
  'te',
  'ml',
  'kn',
  'mr',
  'gu',
  'or',
  'as',
  'sd',
  'ps',
  'so',
  'ha',
  'yo',
  'ig',
  'ti',
  'wo',
  'mg',
  'xh',
  'sn',
  'ny',
  'fj',
  'sm',
  'to',
  'mi',
  'haw',
  'jv',
  'su',
  'gd',
  'br',
  'kw',
  'gv',
  'fo',
  'oc',
  'co',
  'sc',
  'fy',
  'yi',
  'lad',
  'qu',
  'gn',
  'ay',
  'dz',
  'dv',
  'tet',
  'be',
  'qya',
  'sjn',
  'ku',
  'om',
  'ln',
  'bho',
  'ceb',
  'rm',
  'ty',
  'ch',
  'mh',
  'pau',
  'nah',
  'nv',
  'tlh',
  'val',
  'dth',
];

function LangFlag({ lang }: { lang: LangCode }): ReactElement {
  const url = flagUrl(FLAG_CODE[lang]);
  return url ? (
    <img src={url} alt="" width={16} height={16} className="h-4 w-4 shrink-0 rounded-full" />
  ) : (
    <span>{lang.toUpperCase()}</span>
  );
}

// Every language can pair with every other — all `data/words-data/words_XX.js` files
// share the same English-headword keys (the 13 target-language files share
// an identical 2000-word key set; ES additionally covers the full 10002),
// so any pair yields a real, non-empty deck.
const LEARN_OPTIONS: Record<LangCode, LangCode[]> = Object.fromEntries(
  ALL_LANGS.map((l) => [l, ALL_LANGS.filter((x) => x !== l)]),
) as Record<LangCode, LangCode[]>;

// (front, back) -> #sel-mode value. Mechanical: `${front}-${back}`, except
// the EN↔UA pair which keeps its historical bare 'en'/'ua' mode strings.
function modeForPair(front: LangCode, back: LangCode): string {
  if (front === 'en' && back === 'ua') return 'en';
  if (front === 'ua' && back === 'en') return 'ua';
  return `${front}-${back}`;
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
  return (
    v === 'ua' ||
    v === 'en' ||
    v === 'es' ||
    v === 'fr' ||
    v === 'it' ||
    v === 'pt' ||
    v === 'de' ||
    v === 'he' ||
    v === 'ar' ||
    v === 'pl' ||
    v === 'zh' ||
    v === 'el' ||
    v === 'ja' ||
    v === 'tr' ||
    v === 'nl' ||
    v === 'vi' ||
    v === 'hi' ||
    v === 'bn' ||
    v === 'id' ||
    v === 'pcm' ||
    v === 'ko' ||
    v === 'fa' ||
    v === 'sw' ||
    v === 'ms' ||
    v === 'th' ||
    v === 'az' ||
    v === 'ro' ||
    v === 'hu' ||
    v === 'cs' ||
    v === 'kk' ||
    v === 'sv' ||
    v === 'ka' ||
    v === 'hr' ||
    v === 'sr' ||
    v === 'bs' ||
    v === 'bg' ||
    v === 'sk' ||
    v === 'hy' ||
    v === 'da' ||
    v === 'fi' ||
    v === 'no' ||
    v === 'la' ||
    v === 'lt' ||
    v === 'lv' ||
    v === 'et' ||
    v === 'sl' ||
    v === 'mk' ||
    v === 'sq' ||
    v === 'is' ||
    v === 'cy' ||
    v === 'ga' ||
    v === 'tl' ||
    v === 'mn' ||
    v === 'uz' ||
    v === 'am' ||
    v === 'eo' ||
    v === 'ta' ||
    v === 'pa' ||
    v === 'zu' ||
    v === 'af' ||
    v === 'ky' ||
    v === 'tg' ||
    v === 'tk' ||
    v === 'ug' ||
    v === 'eu' ||
    v === 'ca' ||
    v === 'gl' ||
    v === 'mt' ||
    v === 'lb' ||
    v === 'ht' ||
    v === 'bo' ||
    v === 'my' ||
    v === 'km' ||
    v === 'lo' ||
    v === 'ne' ||
    v === 'si' ||
    v === 'ur' ||
    v === 'te' ||
    v === 'ml' ||
    v === 'kn' ||
    v === 'mr' ||
    v === 'gu' ||
    v === 'or' ||
    v === 'as' ||
    v === 'sd' ||
    v === 'ps' ||
    v === 'so' ||
    v === 'ha' ||
    v === 'yo' ||
    v === 'ig' ||
    v === 'ti' ||
    v === 'wo' ||
    v === 'mg' ||
    v === 'xh' ||
    v === 'sn' ||
    v === 'ny' ||
    v === 'fj' ||
    v === 'sm' ||
    v === 'to' ||
    v === 'mi' ||
    v === 'haw' ||
    v === 'jv' ||
    v === 'su' ||
    v === 'gd' ||
    v === 'br' ||
    v === 'kw' ||
    v === 'gv' ||
    v === 'fo' ||
    v === 'oc' ||
    v === 'co' ||
    v === 'sc' ||
    v === 'fy' ||
    v === 'yi' ||
    v === 'lad' ||
    v === 'qu' ||
    v === 'gn' ||
    v === 'ay' ||
    v === 'dz' ||
    v === 'dv' ||
    v === 'tet' ||
    v === 'be' ||
    v === 'qya' ||
    v === 'sjn' ||
    v === 'ku' ||
    v === 'om' ||
    v === 'ln' ||
    v === 'bho' ||
    v === 'ceb' ||
    v === 'rm' ||
    v === 'ty' ||
    v === 'ch' ||
    v === 'mh' ||
    v === 'pau' ||
    v === 'nah' ||
    v === 'nv' ||
    v === 'tlh' ||
    v === 'val' ||
    v === 'dth'
  );
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
  if (
    isLangCode(storedKnow) &&
    isLangCode(storedLearn) &&
    LEARN_OPTIONS[storedKnow].includes(storedLearn)
  ) {
    return {
      learnLang: storedLearn,
      knowLang: storedKnow,
      direction: isDirection(storedDir) ? storedDir : 'fwd',
    };
  }
  return { learnLang: 'en', knowLang: 'ua', direction: 'fwd' };
}

// Applies the chosen pair + direction to the shared mode store (src/mode-store.ts).
function applyMode(learn: LangCode, know: LangCode, direction: Direction): void {
  const fwdMode = modeForPair(learn, know);
  const revMode = modeForPair(know, learn);
  const current = getModeStateSnapshot();
  let mode: string;
  let mixA: string | null = null;
  let mixB: string | null = null;
  if (direction === 'rev' && revMode) mode = revMode;
  else if (direction === 'mix' && fwdMode && revMode) {
    mode = 'mix';
    mixA = fwdMode;
    mixB = revMode;
  } else mode = fwdMode || revMode || current.mode;
  if (current.mode === mode && current.mixA === mixA && current.mixB === mixB) return;
  dispatchMode(mode, mixA, mixB);
}

export function LangPairSelect(): ReactElement {
  useLangVersion();
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
    // If both tables are already in cache, apply mode synchronously (common path
    // after boot preload). Otherwise load in the background then re-apply so the
    // first render isn't blocked by a network fetch.
    if (areLangTablesReady(next.learnLang, next.knowLang)) {
      applyMode(next.learnLang, next.knowLang, next.direction);
      notifyLangChange();
    } else {
      void Promise.all([
        ensureLangTableLoaded(next.learnLang),
        ensureLangTableLoaded(next.knowLang),
      ]).then(() => {
        applyMode(next.learnLang, next.knowLang, next.direction);
        notifyLangChange();
      });
    }
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

  // Sorts dropdown entries by their displayed label (langAcc), not the fixed
  // ALL_LANGS/LEARN_OPTIONS declaration order, so the list reads alphabetically
  // in whatever language the UI itself is currently shown in.
  function sortByLabel(codes: LangCode[]): LangCode[] {
    return [...codes].sort((a, b) => langAcc(a).localeCompare(langAcc(b), getLang()));
  }

  function renderLangOption(l: LangCode): ReactElement {
    return (
      <span className="flagdd-content inline-flex items-center gap-1.5">
        <LangFlag lang={l} />
        <span className="flagdd-label">{langAcc(l)}</span>
      </span>
    );
  }

  function renderDirectionOption(d: Direction): ReactElement {
    if (d === 'mix') {
      return (
        <span className="flagdd-content inline-flex items-center gap-1.5">
          <LangFlag lang={learnLang} />
          <span className="flagdd-mix-icon text-[0.8rem] text-text3">⇄</span>
          <LangFlag lang={knowLang} />
          <span className="flagdd-label">{t('mode.mixed')}</span>
        </span>
      );
    }
    const [from, to] = d === 'fwd' ? [learnLang, knowLang] : [knowLang, learnLang];
    return (
      <span className="flagdd-content inline-flex items-center gap-1.5">
        <LangFlag lang={from} />
        <span className="flagdd-arrow-icon text-[0.8rem] text-text3">→</span>
        <LangFlag lang={to} />
      </span>
    );
  }

  return (
    <div className="lang-pair-row" style={{ display: 'flex', gap: '8px', marginRight: '4px' }}>
      <FlagDropdown
        value={knowLang}
        options={sortByLabel(ALL_LANGS)}
        renderOption={renderLangOption}
        onChange={onKnowChange}
        ariaLabel={t('langpair.know')}
        tag={t('langpair.know')}
      />
      <FlagDropdown
        value={learnLang}
        options={sortByLabel(LEARN_OPTIONS[knowLang])}
        renderOption={renderLangOption}
        onChange={onLearnChange}
        ariaLabel={t('langpair.learn')}
        tag={t('langpair.learn')}
      />
      <FlagDropdown
        value={direction}
        options={['fwd', 'rev', 'mix']}
        renderOption={renderDirectionOption}
        onChange={onDirectionChange}
        ariaLabel={t('langpair.direction')}
      />
    </div>
  );
}

// Preloads the active pair's word tables and applies the initial mode to
// the shared store, so entry lookups (deck filter, computeCardView) are
// synchronously available from the first render. Called explicitly from
// src/main.ts *before* mountAppRoot() — not a module-level top-level
// `await` (as this used to be): that ran during app-root.tsx's static
// import graph, which today would run before the JSX tree (and the store's
// Provider) even exists. See docs/full-react-migration-roadmap.md's
// "sel-mode" exception.
export async function preloadInitialMode(): Promise<void> {
  const { learnLang, knowLang, direction } = initialState();
  await Promise.all([ensureLangTableLoaded(learnLang), ensureLangTableLoaded(knowLang)]);
  applyMode(learnLang, knowLang, direction);
}
