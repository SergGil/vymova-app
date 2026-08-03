// Vymova — js/features/tag-filter-select.tsx
// Topic/category filter dropdown (#sel-tag). Controlled shadcn Select backed
// by src/deck-filter-store.ts's activeTagValue — deck-filter.tsx can reset
// the visible selection (setActiveTagValue('')) from outside this
// component's tree, since there's no real <select> DOM node to write
// .value = '' on anymore.
import { type ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { setActiveTagSet, setActiveTagValue, useActiveTagValue } from '../../src/deck-filter-store.ts';
import { getWordIndex } from '../core/word-index.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { categoryName, t } from './i18n.ts';
import { getRawMode } from './mode/mode-utils.ts';
import { _rebuildEsDeck, _isSpecialMode } from './deck/deck-mode.tsx';
import { rebuildDeckForCurrentRange } from './deck/deck-filter.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/components/ui/select.tsx';

function applyTagFilter(tag: string): void {
  if (!tag) {
    setActiveTagSet(null);
  } else {
    const wordIdx = getWordIndex();
    const words = (WORD_CATEGORIES[tag] ?? [])
      .map((w) => w.toLowerCase())
      .filter((w) => (wordIdx ? wordIdx.has(w) : true));
    setActiveTagSet(new Set(words));
  }
  if (_isSpecialMode(getRawMode())) {
    _rebuildEsDeck();
  } else {
    rebuildDeckForCurrentRange();
  }
}

export function TagFilterSelect(): ReactElement {
  useLangVersion();
  const value = useActiveTagValue();

  const onValueChange = (tag: string): void => {
    setActiveTagValue(tag);
    applyTagFilter(tag);
  };

  return (
    <Select value={value} onValueChange={(v) => onValueChange(v as string)}>
      <SelectTrigger
        id="sel-tag"
        title={t('cards.tagFilterTitle')}
        data-i18n-title="cards.tagFilterTitle"
      >
        <SelectValue>{(v: string) => (v ? categoryName(v) : t('cards.allTopics'))}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">{t('cards.allTopics')}</SelectItem>
        {CATEGORY_LIST.map((cat) => (
          <SelectItem key={cat} value={cat}>
            {categoryName(cat)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
