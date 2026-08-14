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
import { CEFR_ORDER, CefrBadge } from './cefr-badge.tsx';
import { useIsCardKnown } from './card-known-visuals.tsx';
import { Badge } from '../../../src/components/ui/badge.tsx';

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
  const isKnown = useIsCardKnown();
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
    <div className="flex flex-wrap justify-between items-center gap-y-1 mb-3.5">
      <span
        className={
          'text-[11px] text-[var(--text3)] tracking-[0.05em]' +
          (isKnown ? ' !text-[var(--known-c3)]' : '')
        }
        id="wnum"
      >
        {'#' + num}
      </span>
      {isKnown && (
        <span className="known-badge ml-1.5 text-[11px] font-semibold tracking-[0.03em] text-[var(--known-c4)]">
          <span>{t('cards.know')}</span>{' '}
          <button
            className="bg-transparent border-0 cursor-pointer text-[0.72rem] text-[var(--text3)] px-1 py-px rounded leading-none align-middle hover:text-[#e74c3c] hover:bg-[rgba(231,76,60,0.1)]"
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
      )}
      {displayLevels.map((lvl, i) => (
        <CefrBadge key={lvl} level={lvl} id={i === 0 ? 'wcefr' : undefined} />
      ))}
      {cats.map((cat, i) => (
        <Badge
          className="category-badge h-auto w-auto whitespace-nowrap rounded-sm border-[1.5px] border-[var(--border,rgba(127,127,127,.3))] bg-[rgba(127,127,127,.1)] px-2 py-0.5 text-[.68rem] font-bold text-[var(--text2,inherit)] max-[480px]:max-w-full max-[480px]:overflow-hidden max-[480px]:px-[5px] max-[480px]:py-px max-[480px]:text-[.62rem] max-[480px]:text-ellipsis"
          id={i === 0 ? 'wcategory' : undefined}
          key={cat}
          title={categoryName(cat)}
        >
          {categoryName(cat)}
        </Badge>
      ))}
      <span
        className={
          'card-tag [border:var(--card-tag-border)] ' +
          (isKnown ? 'bg-[#27ae60] text-white' : 'bg-[var(--card-tag-bg)] text-[var(--accent)]')
        }
        id="wlang"
      >
        {frontFlagUrl ? (
          <img src={frontFlagUrl} alt={frontLang} width={14} height={14} />
        ) : (
          frontLang
        )}
      </span>
      <button
        className="w-[18px] h-[18px] shrink-0 rounded-full border-[1.5px] border-[var(--border)] bg-transparent text-[var(--text3)] text-[10px] font-bold leading-none cursor-pointer inline-flex items-center justify-center transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        id="btn-card-legend"
        title={t('cardLegend.btnTitle')}
      >
        ?
      </button>
    </div>
  );
}
