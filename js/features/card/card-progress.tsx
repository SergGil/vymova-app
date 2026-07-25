// Vymova — js/features/card/card-progress.tsx
// #cidx/#cknown (підзаголовок) і #pbar (progress bar) — частина item 28e (Фаза 4).
import { W } from '../../../data/words-data/words.js';
import { getActiveKnown } from '../mode/mode-utils.ts';
import { useKnownWords } from '../../../src/known-words-store.ts';
import { useDeckState } from '../../../src/deck-store.ts';
import type { WordEntry } from '../../../src/types.js';

export function CardIdx() {
  const { deck, idx } = useDeckState();
  if (!deck.length) return <span id="cidx">0/0</span>;
  return (
    <span id="cidx">
      {(idx % deck.length) + 1}/{deck.length}
    </span>
  );
}

export function CardKnownCount() {
  const known = useKnownWords('en');
  return <span id="cknown">{getActiveKnown(known).size}</span>;
}

export function ProgressBar() {
  const known = useKnownWords('en');
  const pct = (getActiveKnown(known).size / (W as unknown as WordEntry[]).length) * 100;
  return <div className="progress-fill" id="pbar" style={{ width: pct + '%' }} />;
}
