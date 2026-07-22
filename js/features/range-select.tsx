// Vymova — js/features/range-select.tsx
// Study-range filter dropdown (#sel-range). Renders the <select> itself
// (docs/card-shell-migration-roadmap.md Phase 3 — previously portaled
// <option>/<optgroup>s into a pre-existing static <select>, same pattern as
// tag-filter-select.tsx's TagFilterSelect). Selection handling stays
// imperative (deck-filter.tsx/deck-mode.tsx read/write #sel-range directly).
//
// The "srs" option's live due-count label is NOT owned here — js/core/srs.ts's
// _renderSrsUI() rewrites it directly and caches the DOM node once
// (_srsLabelOpt). That option keeps a stable `key="srs"` below so React never
// recreates the node across re-renders (it would otherwise silently strand
// srs.ts's cached reference).
import { type ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { W } from '../../data/words.js';
import { getWordsForPair } from './mode-utils.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

export function RangeSelect(): ReactElement {
  useLangVersion();

  const total = getWordsForPair(W as unknown as WordEntry[]).length;

  return (
    <select id="sel-range">
      <option value="0">
        {t('cards.allWords')} ({total})
      </option>
      <option value="unlearned">{t('range.unlearned')}</option>
      <option key="srs" value="srs">
        {t('range.srs')}
      </option>
      <option value="bookmarks">{t('range.bookmarks')}</option>
      <option value="weak">{t('range.weak')}</option>
      <option value="hard">{t('range.hard')}</option>
      <option value="leech">{t('range.leech')}</option>
      <optgroup label={t('range.cefrGroup')}>
        <option value="cefr-A1">{t('range.cefrA1')}</option>
        <option value="cefr-A2">{t('range.cefrA2')}</option>
        <option value="cefr-B1">{t('range.cefrB1')}</option>
        <option value="cefr-B2">{t('range.cefrB2')}</option>
        <option value="cefr-C1">{t('range.cefrC1')}</option>
        <option value="cefr-C2">{t('range.cefrC2')}</option>
      </optgroup>
      <optgroup label={t('range.posGroup')}>
        <option value="pos-n">{t('range.posNoun')}</option>
        <option value="pos-v">{t('range.posVerb')}</option>
        <option value="pos-adj">{t('range.posAdj')}</option>
        <option value="pos-adv">{t('range.posAdv')}</option>
        <option value="pos-phrase">{t('range.posPhrase')}</option>
        <option value="pos-other">{t('range.posOther')}</option>
      </optgroup>
      <option value="stale7">{t('range.stale7')}</option>
      <option value="stale30">{t('range.stale30')}</option>
    </select>
  );
}
