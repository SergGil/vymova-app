// Vymova — js/features/range-select.tsx
// Study-range filter dropdown (#sel-range). Controlled shadcn Select backed
// by src/range-store.ts — range-store.ts's own header comment explains why
// the value and the "srs" option's live due-count label live in two
// independent stores.
import { type ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { W } from '../../data/words-data/words.js';
import { getWordsForPair } from './mode/mode-utils.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { useRange, setRange, useSrsLabel } from '../../src/range-store.ts';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../src/components/ui/select.tsx';

export function RangeSelect(): ReactElement {
  useLangVersion();

  const total = getWordsForPair(W as unknown as WordEntry[]).length;
  const range = useRange();
  const srsLabel = useSrsLabel();

  const labels: Record<string, string> = {
    '0': `${t('cards.allWords')} (${total})`,
    unlearned: t('range.unlearned'),
    srs: srsLabel ?? t('range.srs'),
    bookmarks: t('range.bookmarks'),
    weak: t('range.weak'),
    hard: t('range.hard'),
    leech: t('range.leech'),
    'cefr-A1': t('range.cefrA1'),
    'cefr-A2': t('range.cefrA2'),
    'cefr-B1': t('range.cefrB1'),
    'cefr-B2': t('range.cefrB2'),
    'cefr-C1': t('range.cefrC1'),
    'cefr-C2': t('range.cefrC2'),
    'pos-n': t('range.posNoun'),
    'pos-v': t('range.posVerb'),
    'pos-adj': t('range.posAdj'),
    'pos-adv': t('range.posAdv'),
    'pos-phrase': t('range.posPhrase'),
    'pos-other': t('range.posOther'),
    stale7: t('range.stale7'),
    stale30: t('range.stale30'),
  };

  return (
    <Select value={range} onValueChange={(v) => setRange(v as string)}>
      <SelectTrigger id="sel-range">
        <SelectValue>{(v: string) => labels[v] ?? v}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">
          {t('cards.allWords')} ({total})
        </SelectItem>
        <SelectItem value="unlearned">{t('range.unlearned')}</SelectItem>
        <SelectItem value="srs">{srsLabel ?? t('range.srs')}</SelectItem>
        <SelectItem value="bookmarks">{t('range.bookmarks')}</SelectItem>
        <SelectItem value="weak">{t('range.weak')}</SelectItem>
        <SelectItem value="hard">{t('range.hard')}</SelectItem>
        <SelectItem value="leech">{t('range.leech')}</SelectItem>
        <SelectGroup>
          <SelectLabel>{t('range.cefrGroup')}</SelectLabel>
          <SelectItem value="cefr-A1">{t('range.cefrA1')}</SelectItem>
          <SelectItem value="cefr-A2">{t('range.cefrA2')}</SelectItem>
          <SelectItem value="cefr-B1">{t('range.cefrB1')}</SelectItem>
          <SelectItem value="cefr-B2">{t('range.cefrB2')}</SelectItem>
          <SelectItem value="cefr-C1">{t('range.cefrC1')}</SelectItem>
          <SelectItem value="cefr-C2">{t('range.cefrC2')}</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>{t('range.posGroup')}</SelectLabel>
          <SelectItem value="pos-n">{t('range.posNoun')}</SelectItem>
          <SelectItem value="pos-v">{t('range.posVerb')}</SelectItem>
          <SelectItem value="pos-adj">{t('range.posAdj')}</SelectItem>
          <SelectItem value="pos-adv">{t('range.posAdv')}</SelectItem>
          <SelectItem value="pos-phrase">{t('range.posPhrase')}</SelectItem>
          <SelectItem value="pos-other">{t('range.posOther')}</SelectItem>
        </SelectGroup>
        <SelectItem value="stale7">{t('range.stale7')}</SelectItem>
        <SelectItem value="stale30">{t('range.stale30')}</SelectItem>
      </SelectContent>
    </Select>
  );
}
