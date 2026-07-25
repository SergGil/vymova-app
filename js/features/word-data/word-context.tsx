// Vymova — js/features/word-data/word-context.tsx
// Word families + collocations shown on card back
import { useEffect, useState, type ReactElement } from 'react';
import { useDeckState } from '../../../src/deck-store.ts';
import { getWordIndex } from '../../core/word-index.ts';
import { ensureCollocationsLoaded, searchCollocations } from './collocations-loader.ts';
import {
  ensureWordFamiliesLoaded,
  getWordFamiliesForLang,
  getWordFamilyReverseForLang,
} from './word-families-loader.ts';
import {
  ensureSynonymsLoaded,
  getSynonymsForLang,
  getSynonymReverseForLang,
} from './synonyms-loader.ts';
import {
  ensureAntonymsLoaded,
  getAntonymsForLang,
  getAntonymReverseForLang,
} from './antonyms-loader.ts';
import { ensureEtymologyLoaded, getEtymologyFact } from './etymology-loader.ts';
import { ensureUsageNotesLoaded, getUsageNotesForLang } from './usage-notes-loader.ts';
import { W } from '../../../data/words-data/words.js';
import type { WordEntry } from '../../../src/types.js';
import { openWordDetail } from './word-detail-trigger.ts';
import {
  getMode,
  parsePair,
  headwordFor,
  isTargetLang,
  reverseHeadwordFor,
  type Code,
} from '../mode/mode-utils.ts';
import { getKnownSnapshot } from '../../../src/known-words-store.ts';
import { getLang, t } from '../i18n.ts';

// Collocations are idiomatic word combinations (e.g. "make a decision" NOT
// "do a decision") with dedicated data for EN/ES/FR only. When the front
// language is ES or FR, match against its own headword; otherwise fall
// back to English whenever it's one of the two selected languages ("Я
// знаю" / "Хочу вчити"), matched against the canonical English word
// (cw[0]) regardless of which side is displayed — irrelevant noise for
// pairs with neither (e.g. a pure DE↔IT pair).
function _collocationsLangAndWord(
  cw: WordEntry,
): { lang: 'en' | 'es' | 'fr'; word: string } | null {
  const { front, back } = parsePair(getMode());
  if (front === 'es' || front === 'fr') {
    const word = headwordFor(front, cw);
    return word ? { lang: front, word } : null;
  }
  if (front === 'en' || back === 'en') return { lang: 'en', word: cw[0] };
  return null;
}

export function CollocationsSection(): ReactElement | null {
  const { cw, flipped } = useDeckState();
  const target = cw ? _collocationsLangAndWord(cw) : null;
  const [, forceRender] = useState(0);
  useEffect(() => {
    if (!target) return;
    let cancelled = false;
    ensureCollocationsLoaded(target.lang).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
    // target is a fresh object every render (_collocationsLangAndWord isn't
    // memoized) — depend on its primitive fields instead of the object
    // itself, or this would re-run (and re-trigger the ensure-load promise
    // chain) on every render regardless of whether lang/word actually changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target?.lang, target?.word]);
  if (!cw || !flipped) return null;
  if (!target) return null;

  const colls = searchCollocations(target.word, target.lang);
  if (!colls.length) return null;

  const wordLow = target.word.toLowerCase();
  const re = new RegExp('\\b(' + wordLow + '\\w*)\\b', 'i');

  return (
    <div
      className="similar-section w-full text-left"
      id="cb-collocations"
      style={{ margin: '8px 0 0' }}
    >
      <div className="similar-title mb-1.5 flex items-center gap-[5px] text-[.6rem] font-extrabold tracking-[0.1em] text-[var(--text3)] uppercase max-[480px]:text-[.58rem]">
        {t('cards.collocationsTitle')}
      </div>
      <div
        id="cb-collocation-list"
        style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        {colls.slice(0, 10).map((c, i) => {
          const parts = c.phrase.split(re);
          return (
            <span
              className="colloc-pill inline-flex cursor-default items-center gap-1.5 rounded-[20px] border-[1.5px] border-[rgba(52,152,219,.25)] bg-[rgba(52,152,219,.08)] px-[11px] py-1 text-[.75rem] text-[var(--text2)] whitespace-nowrap transition-[background] duration-[120ms] max-[480px]:px-[9px] max-[480px]:py-[3px] max-[480px]:text-[.7rem]"
              key={i}
            >
              {parts.map((part, j) =>
                re.test(part) && j % 2 === 1 ? (
                  <b className="font-bold text-[#3498db]" key={j}>
                    {part}
                  </b>
                ) : (
                  part
                ),
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// Ukrainian word → English headword, built once from the full word list
// (every entry has a Ukrainian translation, so this has near-total coverage
// unlike the smaller per-target-language tables).
let _uaReverse: Map<string, string> | null = null;
function uaHeadwordFor(word: string): string | null {
  if (!_uaReverse) {
    _uaReverse = new Map();
    for (const w of W as unknown as WordEntry[]) {
      const ua = w[1];
      if (ua && !_uaReverse.has(ua.toLowerCase())) _uaReverse.set(ua.toLowerCase(), w[0]);
    }
  }
  return _uaReverse.get(word.toLowerCase()) ?? null;
}

// Best-effort: find the English headword a foreign-language synonym/family
// chip corresponds to (if any), so it can be clicked through to its real
// card — mirrors the lookup already used for the front word's own
// translation.
function _headEnFor(front: Code, word: string): string | null {
  if (front === 'en') return word;
  if (front === 'ua') return uaHeadwordFor(word);
  if (isTargetLang(front)) return reverseHeadwordFor(front, word);
  return null;
}

export function WordFamiliesChips(): ReactElement | null {
  const { cw, flipped } = useDeckState();
  const { front, back } = parsePair(getMode());
  const [, forceRender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureWordFamiliesLoaded(front).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);
  if (!cw || !flipped) return null;

  const dict = getWordFamiliesForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const word = frontWord.toLowerCase();

  let family: string[] | undefined = dict[word];
  let head = word;
  if (!family) {
    const base = getWordFamilyReverseForLang(front)?.get(word);
    if (base) {
      family = dict[base];
      head = base;
    }
  }
  if (!family || family.length === 0) return null;

  const chips = [head, ...family].filter((w) => w !== word);
  if (!chips.length) return null;

  const wordIdx = getWordIndex();

  return (
    <div
      className="similar-section w-full text-left"
      id="cb-families"
      style={{ margin: '14px 0 0' }}
    >
      <div className="similar-title mb-1.5 flex items-center gap-[5px] text-[.6rem] font-extrabold tracking-[0.1em] text-[var(--text3)] uppercase max-[480px]:text-[.58rem]">
        {t('cards.familyTitle')}
      </div>
      <div className="similar-chips flex flex-wrap gap-[5px]" id="cb-family-chips">
        {chips.slice(0, 10).map((w) => {
          const headEn = _headEnFor(front, w);
          const wi = headEn !== undefined && headEn !== null ? wordIdx?.get(headEn) : undefined;
          const entry = wi !== undefined ? (W[wi] as unknown as WordEntry) : null;
          const clickable = !!entry;
          const transl = entry ? headwordFor(back, entry) : '';
          const isKnown = headEn ? getKnownSnapshot('en').has(headEn) : false;
          return (
            <div
              key={w}
              className={
                'sim-chip family-chip flex min-w-14 flex-col items-center gap-px rounded-[12px] border-[1.5px] border-[rgba(var(--accent-rgb,45,90,61),.25)] bg-[rgba(var(--accent-rgb,45,90,61),.08)] px-2.5 py-1 text-[.75rem] transition-[background] duration-150 max-[480px]:min-w-12 max-[480px]:px-2 max-[480px]:py-[3px] max-[480px]:text-[.7rem]' +
                (clickable ? ' cursor-pointer' : ' cursor-default') +
                (isKnown ? ' known-chip' : '')
              }
              onClick={
                clickable
                  ? (e) => {
                      e.stopPropagation();
                      if (entry) openWordDetail(entry);
                    }
                  : undefined
              }
            >
              <span className="sc-word">{w}</span>
              {transl ? <span className="sc-transl">{transl}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SynonymsChips(): ReactElement | null {
  const { cw, flipped } = useDeckState();
  const { front, back } = parsePair(getMode());
  const [, forceRender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureSynonymsLoaded(front).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);
  if (!cw || !flipped) return null;

  const dict = getSynonymsForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const word = frontWord.toLowerCase();

  let members = dict[word];
  let head = word;
  if (!members) {
    const base = getSynonymReverseForLang(front)?.get(word);
    if (base) {
      members = dict[base];
      head = base;
    }
  }
  if (!members) return null;

  const chips = [{ word: head, note: undefined as string | undefined }, ...members].filter(
    (c) => c.word !== word,
  );
  if (!chips.length) return null;

  const wordIdx = getWordIndex();

  return (
    <div
      className="similar-section w-full text-left"
      id="cb-synonyms"
      style={{ margin: '14px 0 0' }}
    >
      <div className="similar-title mb-1.5 flex items-center gap-[5px] text-[.6rem] font-extrabold tracking-[0.1em] text-[var(--text3)] uppercase max-[480px]:text-[.58rem]">
        {t('cards.synonymsTitle')}
      </div>
      <div className="similar-chips flex flex-wrap gap-[5px]" id="cb-synonym-chips">
        {chips.map((c) => {
          const headEn = _headEnFor(front, c.word);
          const wi = headEn !== undefined && headEn !== null ? wordIdx?.get(headEn) : undefined;
          const entry = wi !== undefined ? (W[wi] as unknown as WordEntry) : null;
          const clickable = !!entry;
          const transl = entry ? headwordFor(back, entry) : '';
          const isKnown = headEn ? getKnownSnapshot('en').has(headEn) : false;
          return (
            <div
              key={c.word}
              className={
                'sim-chip syn-chip flex min-w-14 flex-col items-center gap-px rounded-[20px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-[.75rem] transition-[border-color,background] duration-150 max-[480px]:min-w-12 max-[480px]:px-2 max-[480px]:py-[3px] max-[480px]:text-[.7rem]' +
                (clickable ? ' cursor-pointer' : ' cursor-default') +
                (isKnown ? ' known-chip' : '')
              }
              onClick={
                clickable
                  ? (e) => {
                      e.stopPropagation();
                      if (entry) openWordDetail(entry);
                    }
                  : undefined
              }
            >
              <span className="sc-word">{c.word}</span>
              {c.note ? (
                <span className="sc-transl">{c.note}</span>
              ) : transl ? (
                <span className="sc-transl">{transl}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AntonymsChips(): ReactElement | null {
  const { cw, flipped } = useDeckState();
  const { front, back } = parsePair(getMode());
  const [, forceRender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureAntonymsLoaded(front).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);
  if (!cw || !flipped) return null;

  const dict = getAntonymsForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const word = frontWord.toLowerCase();

  let members = dict[word];
  let head = word;
  if (!members) {
    const base = getAntonymReverseForLang(front)?.get(word);
    if (base) {
      members = dict[base];
      head = base;
    }
  }
  if (!members) return null;

  const chips = [{ word: head, note: undefined as string | undefined }, ...members].filter(
    (c) => c.word !== word,
  );
  if (!chips.length) return null;

  const wordIdx = getWordIndex();

  return (
    <div
      className="similar-section w-full text-left"
      id="cb-antonyms"
      style={{ margin: '14px 0 0' }}
    >
      <div className="similar-title mb-1.5 flex items-center gap-[5px] text-[.6rem] font-extrabold tracking-[0.1em] text-[var(--text3)] uppercase max-[480px]:text-[.58rem]">
        {t('cards.antonymsTitle')}
      </div>
      <div className="similar-chips flex flex-wrap gap-[5px]" id="cb-antonym-chips">
        {chips.map((c) => {
          const headEn = _headEnFor(front, c.word);
          const wi = headEn !== undefined && headEn !== null ? wordIdx?.get(headEn) : undefined;
          const entry = wi !== undefined ? (W[wi] as unknown as WordEntry) : null;
          const clickable = !!entry;
          const transl = entry ? headwordFor(back, entry) : '';
          const isKnown = headEn ? getKnownSnapshot('en').has(headEn) : false;
          return (
            <div
              key={c.word}
              className={
                'sim-chip ant-chip flex min-w-14 flex-col items-center gap-px rounded-[20px] border-[1.5px] border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-[.75rem] transition-[border-color,background] duration-150 max-[480px]:min-w-12 max-[480px]:px-2 max-[480px]:py-[3px] max-[480px]:text-[.7rem]' +
                (clickable ? ' cursor-pointer' : ' cursor-default') +
                (isKnown ? ' known-chip' : '')
              }
              onClick={
                clickable
                  ? (e) => {
                      e.stopPropagation();
                      if (entry) openWordDetail(entry);
                    }
                  : undefined
              }
            >
              <span className="sc-word">{c.word}</span>
              {c.note ? (
                <span className="sc-transl">{c.note}</span>
              ) : transl ? (
                <span className="sc-transl">{transl}</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EtymologyNote(): ReactElement | null {
  const { cw, flipped } = useDeckState();
  const uiLang = getLang();
  const [, forceRender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureEtymologyLoaded(uiLang).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [uiLang]);
  if (!cw || !flipped) return null;

  const fact = getEtymologyFact(cw[0].toLowerCase(), uiLang);
  if (!fact) return null;

  return (
    <div
      className="usage-note-box etymology-note flex items-start gap-1.5 rounded-md border-l-[3px] border-l-[var(--accent)] bg-[var(--etymology-note-bg)] mt-3.5 px-[9px] py-[5px] text-[.75rem] leading-[1.4] break-words text-[var(--text2)]"
      id="cb-etymology"
    >
      <span className="usage-note-icon shrink-0">📜</span>
      <span>{fact}</span>
    </div>
  );
}

export function UsageNoteBox(): ReactElement | null {
  const { cw } = useDeckState();
  const { front } = parsePair(getMode());
  const [, forceRender] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureUsageNotesLoaded(front).then(() => {
      if (!cancelled) forceRender((n) => n + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);
  if (!cw) return null;

  const dict = getUsageNotesForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const note = dict[frontWord.toLowerCase()];
  if (!note) return null;

  return (
    <div
      className="usage-note-box flex items-start gap-1.5 rounded-md border-l-[3px] border-l-[#e67e22] bg-[rgba(230,126,34,.08)] px-[9px] py-[5px] text-[.75rem] leading-[1.4] break-words text-[var(--text2)]"
      id="cb-usage-note"
    >
      <span className="usage-note-icon shrink-0">⚠️</span>
      <span>{note}</span>
    </div>
  );
}
