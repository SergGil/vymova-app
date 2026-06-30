// Vymova — js/features/lang-pair-select.tsx
// "Я знаю" / "Хочу вчити" / "Напрямок" language pair picker (first React component).
// Drives the legacy #sel-mode <select> so all existing listeners
// (deck-mode, tag-filter, word-detail, mode-utils, ...) keep working untouched.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { t, getLang } from './i18n.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';
import { flagUrl } from '../core/flags.ts';

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
  | 'nl';
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
];

// Flag shown for each language — picks the country most learners associate
// with it, not necessarily the only place it's spoken.
export const FLAG_CODE: Record<LangCode, string> = {
  ua: 'ua',
  en: 'gb',
  es: 'es',
  fr: 'fr',
  it: 'it',
  pt: 'pt',
  de: 'de',
  he: 'il',
  ar: 'sa',
  pl: 'pl',
  zh: 'cn',
  el: 'gr',
  ja: 'jp',
  tr: 'tr',
  nl: 'nl',
};

function LangFlag({ lang }: { lang: LangCode }): ReactElement {
  const url = flagUrl(FLAG_CODE[lang]);
  return url ? <img src={url} alt="" width={16} height={16} /> : <span>{lang.toUpperCase()}</span>;
}

// Every language can pair with every other — all `data/words_XX.js` files
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

// #sel-mode value -> (learnLang, knowLang) i.e. (front, back) — inverse of modeForPair.
function pairForMode(mode: string): [LangCode, LangCode] {
  if (mode === 'en') return ['en', 'ua'];
  if (mode === 'ua') return ['ua', 'en'];
  const i = mode.indexOf('-');
  if (i > 0) {
    const f = mode.slice(0, i),
      b = mode.slice(i + 1);
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
    v === 'nl'
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
  const current = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? 'en';
  const [learnLang, knowLang] = pairForMode(current);
  return { learnLang, knowLang, direction: 'fwd' };
}

// #sel-mode (index.html) only ships hardcoded <option>s for the historical
// EN/UA-hub pairs (~62 of the 210 possible). Setting .value to a mode string
// with no matching <option> silently resets it to '' (per the <select>
// spec), so any pair without a pre-existing <option> would otherwise revert
// to the 'en' fallback. Lazily create the missing ones — the element is
// display:none, used purely as shared state, so the generated label text
// is never seen.
let _optionsEnsured = false;
function _ensureModeOptions(sel: HTMLSelectElement): void {
  if (_optionsEnsured) return;
  _optionsEnsured = true;
  for (const front of ALL_LANGS) {
    for (const back of ALL_LANGS) {
      if (front === back) continue;
      const mode = modeForPair(front, back);
      if (sel.querySelector(`option[value="${mode}"]`)) continue;
      const opt = document.createElement('option');
      opt.value = mode;
      opt.textContent = `${front.toUpperCase()} → ${back.toUpperCase()}`;
      sel.appendChild(opt);
    }
  }
}

// Applies the chosen pair + direction to the legacy #sel-mode select.
function applyMode(learn: LangCode, know: LangCode, direction: Direction): void {
  const fwdMode = modeForPair(learn, know);
  const revMode = modeForPair(know, learn);
  const sel = document.getElementById('sel-mode') as HTMLSelectElement | null;
  if (!sel) return;
  _ensureModeOptions(sel);
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

// A flag-icon dropdown standing in for a native <select> — browsers don't
// render images inside <option>, so showing a flag per language/direction
// means rolling our own button + popover list instead.
function FlagDropdown<T extends string>({
  value,
  options,
  renderOption,
  onChange,
  ariaLabel,
  tag,
}: {
  value: T;
  options: T[];
  renderOption: (opt: T) => ReactElement;
  onChange: (opt: T) => void;
  ariaLabel: string;
  // Short caption (e.g. "Я знаю") shown on the closed button only, so the
  // two near-identical know/learn dropdowns stay distinguishable at a glance.
  tag?: string;
}): ReactElement {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className="flagdd" ref={rootRef}>
      <button
        type="button"
        className="flagdd-btn"
        data-value={value}
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {tag && <span className="flagdd-tag">{tag}</span>}
        {renderOption(value)}
        <span className="flagdd-arrow">{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className="flagdd-list" role="listbox" aria-label={ariaLabel}>
          {options.map((opt) => (
            <button
              type="button"
              key={opt}
              role="option"
              data-value={opt}
              aria-selected={opt === value}
              className={'flagdd-item' + (opt === value ? ' flagdd-active' : '')}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {renderOption(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
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

  function renderLangOption(l: LangCode): ReactElement {
    return (
      <span className="flagdd-content">
        <LangFlag lang={l} />
        <span className="flagdd-label">{langAcc(l)}</span>
      </span>
    );
  }

  function renderDirectionOption(d: Direction): ReactElement {
    if (d === 'mix') {
      return (
        <span className="flagdd-content">
          <LangFlag lang={learnLang} />
          <span className="flagdd-mix-icon">⇄</span>
          <LangFlag lang={knowLang} />
          <span className="flagdd-label">{t('mode.mixed')}</span>
        </span>
      );
    }
    const [from, to] = d === 'fwd' ? [learnLang, knowLang] : [knowLang, learnLang];
    return (
      <span className="flagdd-content">
        <LangFlag lang={from} />
        <span className="flagdd-arrow-icon">→</span>
        <LangFlag lang={to} />
      </span>
    );
  }

  return (
    <div className="lang-pair-row" style={{ display: 'flex', gap: '8px', marginRight: '4px' }}>
      <FlagDropdown
        value={knowLang}
        options={ALL_LANGS}
        renderOption={renderLangOption}
        onChange={onKnowChange}
        ariaLabel={t('langpair.know')}
        tag={t('langpair.know')}
      />
      <FlagDropdown
        value={learnLang}
        options={LEARN_OPTIONS[knowLang]}
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

// Apply the restored state to #sel-mode on load (in case it differs from the default).
{
  const { learnLang, knowLang, direction } = initialState();
  applyMode(learnLang, knowLang, direction);
}
