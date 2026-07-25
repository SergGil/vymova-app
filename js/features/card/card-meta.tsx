// Vymova — js/features/card/card-meta.tsx
// Бейджі картки: #wnum, known-badge/#btn-unmark, #wcefr, #wcategory, #wlang.
// Частина item 28a (Фаза 4) — заміна статичного блоку .card-meta з render().
import { useEffect, useState } from 'react';
import { useDeckState } from '../../../src/deck-store.ts';
import { getWordIndex } from '../../core/word-index.ts';
import { getCefrLevel } from '../../../data/cefr.ts';
import { getCategoriesForWord } from '../../../data/categories.js';
import { categoryName } from '../i18n.ts';
import {
  getFrontLang,
  getResolvedMode,
  getMode,
  getActiveTargetLang,
  langConfig,
  parsePair,
  headwordFor,
} from '../mode/mode-utils.ts';
import { saveKnown } from '../../core/storage.ts';
import { unmarkKnown, getKnownSnapshot, type KnownLang } from '../../../src/known-words-store.ts';
import { render } from '../../core/card-engine.ts';
import { t } from '../i18n.ts';
import { flagUrl } from '../../core/flags.ts';
import { FLAG_CODE, type LangCode } from '../lang-pair-select.tsx';
import type { CefrLevel } from '../../../data/cefr.ts';
import { ensureSensesLoaded, getSensesForLang, findSenses } from '../word-data/senses-loader.ts';

const CEFR_ORDER: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Level color/border-color never change with theme — only the background
// alpha does (dark/sw/hp get a stronger tint), which is why background alone
// reads a CSS custom property (see the css/styles.css comment above the
// matching :root block) instead of a literal value here.
const CEFR_STYLES: Record<CefrLevel, string> = {
  A1: 'bg-[var(--cefr-a1-bg)] text-[#27ae60] border-[rgba(39,174,96,.3)]',
  A2: 'bg-[var(--cefr-a2-bg)] text-[#2ecc71] border-[rgba(46,204,113,.3)]',
  B1: 'bg-[var(--cefr-b1-bg)] text-[#d4ac0d] border-[rgba(241,196,15,.3)]',
  B2: 'bg-[var(--cefr-b2-bg)] text-[#e67e22] border-[rgba(230,126,34,.3)]',
  C1: 'bg-[var(--cefr-c1-bg)] text-[#e74c3c] border-[rgba(231,76,60,.3)]',
  C2: 'bg-[var(--cefr-c2-bg)] text-[#8e44ad] border-[rgba(142,68,173,.3)]',
};

function _flagCode(v: string): LangCode | null {
  const l = v.toLowerCase();
  return l in FLAG_CODE ? (l as LangCode) : null;
}

function _unmarkActiveKnownAndSave(word: string): void {
  const lang: KnownLang = getActiveTargetLang(getMode()) ?? 'en';
  unmarkKnown(lang, word);
  if (lang === 'en') saveKnown(getKnownSnapshot('en'));
  else langConfig(lang).saveKnown(getKnownSnapshot(lang));
}

export function CardMeta() {
  const { deck, idx, cw } = useDeckState();
  const wordIdx = getWordIndex();
  const { front } = parsePair(getResolvedMode());
  // Same lazy per-language sense data OtherMeanings uses (card-front-text.tsx)
  // — loading is triggered here too (senses-loader.ts's cache dedupes
  // concurrent calls) so the badge row below can show one badge per distinct
  // sense level as soon as that data lands, not just cefr.ts's single
  // word-level badge.
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureSensesLoaded(front).then(() => {
      if (!cancelled) forceUpdate((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);

  if (!cw) return null;

  const realIdx = wordIdx?.has(cw[0]) ? wordIdx.get(cw[0])! : -1;
  const num = realIdx >= 0 ? realIdx + 1 : deck.length ? (idx % deck.length) + 1 : 1;
  const frontLang = getFrontLang(getResolvedMode());
  const frontFlagUrl = (() => {
    const code = _flagCode(frontLang);
    return code ? flagUrl(FLAG_CODE[code]) : null;
  })();
  const level = getCefrLevel(cw[0]);
  const frontWord = headwordFor(front, cw);
  const dict = getSensesForLang(front);
  const senses = frontWord && dict ? findSenses(dict, frontWord) : undefined;
  const senseLevels = senses
    ? [...new Set(senses.map((s) => s.level).filter((l): l is CefrLevel => !!l))]
    : [];
  // Falls back to the single word-level badge whenever a word has no
  // multi-sense entry, or its senses don't carry a per-sense level yet
  // (level/gloss are backfilled for only a couple of demo words so far —
  // see data/senses.ts).
  const displayLevels = senseLevels.length
    ? senseLevels.sort((a, b) => CEFR_ORDER.indexOf(a) - CEFR_ORDER.indexOf(b))
    : [level];
  const cats = getCategoriesForWord(cw[0]);

  return (
    <div className="card-meta">
      <span className="card-num" id="wnum">
        {'#' + num}
      </span>
      <span className="known-badge">
        <span>{t('cards.know')}</span>{' '}
        <button
          className="unmark-btn"
          id="btn-unmark"
          title={t('cards.removeKnown')}
          aria-label={t('cards.removeKnown')}
          onClick={(e) => {
            e.stopPropagation();
            _unmarkActiveKnownAndSave(cw[0]);
            render();
          }}
        >
          ✕
        </button>
      </span>
      {displayLevels.map((lvl, i) => (
        <span
          key={lvl}
          className={
            'cefr-badge inline-flex shrink-0 items-center rounded-sm border-[1.5px] px-[7px] py-0.5 text-[.68rem] font-extrabold tracking-[0.04em] max-[480px]:px-[5px] max-[480px]:py-px max-[480px]:text-[.62rem] cefr-' +
            lvl +
            ' ' +
            CEFR_STYLES[lvl]
          }
          id={i === 0 ? 'wcefr' : undefined}
        >
          {lvl}
        </span>
      ))}
      {cats.map((cat, i) => (
        <span
          className="category-badge inline-flex shrink-0 items-center whitespace-nowrap rounded-sm border-[1.5px] border-[var(--border,rgba(127,127,127,.3))] bg-[rgba(127,127,127,.1)] px-2 py-0.5 text-[.68rem] font-bold text-[var(--text2,inherit)] max-[480px]:max-w-full max-[480px]:overflow-hidden max-[480px]:px-[5px] max-[480px]:py-px max-[480px]:text-[.62rem] max-[480px]:text-ellipsis"
          id={i === 0 ? 'wcategory' : undefined}
          key={cat}
          title={categoryName(cat)}
        >
          {categoryName(cat)}
        </span>
      ))}
      <span className="card-tag" id="wlang">
        {frontFlagUrl ? (
          <img src={frontFlagUrl} alt={frontLang} width={14} height={14} />
        ) : (
          frontLang
        )}
      </span>
      <button className="card-legend-btn" id="btn-card-legend" title={t('cardLegend.btnTitle')}>
        ?
      </button>
    </div>
  );
}
