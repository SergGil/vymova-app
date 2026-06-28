// Vymova — js/features/word-context.tsx
// Word families + collocations shown on card back
import type { ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { getCwSnapshot, getFlippedSnapshot } from '../../src/deck-store.ts';
import { getWordIndex } from '../core/word-index.ts';
import { searchCollocations } from '../../data/collocations.ts';
import { WORD_FAMILIES_BY_LANG, WORD_FAMILY_REVERSE_BY_LANG } from '../../data/word-families.ts';
import { SYNONYMS_BY_LANG, SYNONYM_REVERSE_BY_LANG } from '../../data/synonyms.ts';
import { getEtymologyFact } from '../../data/etymology.ts';
import { USAGE_NOTES_BY_LANG } from '../../data/usage-notes.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { openWordDetail } from './word-detail.tsx';
import { getMode, parsePair, headwordFor, isTargetLang, reverseHeadwordFor, type Code } from './mode-utils.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { getLang, t } from './i18n.ts';

// Collocations are English-specific idiomatic patterns (e.g. "make a
// decision" NOT "do a decision") — only meaningful when English is one of
// the two selected languages ("Я знаю" / "Хочу вчити"); irrelevant noise
// otherwise (e.g. a pure FR↔IT pair).
function _englishInPair(): boolean {
  const { front, back } = parsePair(getMode());
  return front === 'en' || back === 'en';
}

export function CollocationsSection(): ReactElement | null {
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw || !getFlippedSnapshot()) return null;
  if (!_englishInPair()) return null;

  const colls = searchCollocations(cw[0]);
  if (!colls.length) return null;

  const wordLow = cw[0].toLowerCase();
  const re = new RegExp('\\b(' + wordLow + '\\w*)\\b', 'i');

  return (
    <div className="similar-section" id="cb-collocations" style={{ margin: '8px 0 0' }}>
      <div className="similar-title">{t('cards.collocationsTitle')}</div>
      <div id="cb-collocation-list" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {colls.slice(0, 6).map((c, i) => {
          const parts = c.phrase.split(re);
          return (
            <span className="colloc-pill" key={i}>
              {parts.map((part, j) => re.test(part) && j % 2 === 1 ? <b key={j}>{part}</b> : part)}
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
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw || !getFlippedSnapshot()) return null;

  const { front, back } = parsePair(getMode());
  const dict = WORD_FAMILIES_BY_LANG[front];
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const word = frontWord.toLowerCase();

  let family: string[] | undefined = dict[word];
  let head = word;
  if (!family) {
    const base = WORD_FAMILY_REVERSE_BY_LANG[front]?.get(word);
    if (base) { family = dict[base]; head = base; }
  }
  if (!family || family.length === 0) return null;

  const chips = [head, ...family].filter(w => w !== word);
  if (!chips.length) return null;

  const wordIdx = getWordIndex();

  return (
    <div className="similar-section" id="cb-families" style={{ margin: '14px 0 0' }}>
      <div className="similar-title">{t('cards.familyTitle')}</div>
      <div className="similar-chips" id="cb-family-chips">
        {chips.slice(0, 6).map(w => {
          const headEn = _headEnFor(front, w);
          const wi = headEn !== undefined && headEn !== null ? wordIdx?.get(headEn) : undefined;
          const entry = wi !== undefined ? (W[wi] as unknown as WordEntry) : null;
          const clickable = !!entry;
          const transl = entry ? headwordFor(back, entry) : '';
          const isKnown = headEn ? getKnownSnapshot('en').has(headEn) : false;
          return (
            <div key={w} className={'sim-chip family-chip' + (isKnown ? ' known-chip' : '')}
              style={clickable ? undefined : { cursor: 'default' }}
              onClick={clickable ? (e) => {
                e.stopPropagation();
                if (entry) openWordDetail(entry);
              } : undefined}
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
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw || !getFlippedSnapshot()) return null;

  const { front, back } = parsePair(getMode());
  const dict = SYNONYMS_BY_LANG[front];
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const word = frontWord.toLowerCase();

  let members = dict[word];
  let head = word;
  if (!members) {
    const base = SYNONYM_REVERSE_BY_LANG[front]?.get(word);
    if (base) { members = dict[base]; head = base; }
  }
  if (!members) return null;

  const chips = [{ word: head, note: undefined as string | undefined }, ...members].filter(c => c.word !== word);
  if (!chips.length) return null;

  const wordIdx = getWordIndex();

  return (
    <div className="similar-section" id="cb-synonyms" style={{ margin: '14px 0 0' }}>
      <div className="similar-title">{t('cards.synonymsTitle')}</div>
      <div className="similar-chips" id="cb-synonym-chips">
        {chips.slice(0, 6).map(c => {
          const headEn = _headEnFor(front, c.word);
          const wi = headEn !== undefined && headEn !== null ? wordIdx?.get(headEn) : undefined;
          const entry = wi !== undefined ? (W[wi] as unknown as WordEntry) : null;
          const clickable = !!entry;
          const transl = entry ? headwordFor(back, entry) : '';
          const isKnown = headEn ? getKnownSnapshot('en').has(headEn) : false;
          return (
            <div key={c.word} className={'sim-chip syn-chip' + (isKnown ? ' known-chip' : '')}
              style={clickable ? undefined : { cursor: 'default' }}
              onClick={clickable ? (e) => {
                e.stopPropagation();
                if (entry) openWordDetail(entry);
              } : undefined}
            >
              <span className="sc-word">{c.word}</span>
              {c.note ? <span className="sc-transl">{c.note}</span> : transl ? <span className="sc-transl">{transl}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EtymologyNote(): ReactElement | null {
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw || !getFlippedSnapshot()) return null;

  const fact = getEtymologyFact(cw[0].toLowerCase(), getLang());
  if (!fact) return null;

  return (
    <div className="usage-note-box etymology-note" id="cb-etymology">
      <span className="usage-note-icon">📜</span>
      <span>{fact}</span>
    </div>
  );
}

export function UsageNoteBox(): ReactElement | null {
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw) return null;

  const { front } = parsePair(getMode());
  const dict = USAGE_NOTES_BY_LANG[front];
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const note = dict[frontWord.toLowerCase()];
  if (!note) return null;

  return (
    <div className="usage-note-box" id="cb-usage-note">
      <span className="usage-note-icon">⚠️</span>
      <span>{note}</span>
    </div>
  );
}
