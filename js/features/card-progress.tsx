// Vymova — js/features/card-progress.tsx
// #cidx/#cknown (підзаголовок) і #pbar (progress bar) — частина item 28e (Фаза 4).
import { useAppState } from '../../src/store.ts';
import { W } from '../../data/words.js';
import { getActiveKnown } from './mode-utils.ts';
import type { WordEntry } from '../../src/types.js';

export function CardIdx() {
  const { deck, idx } = useAppState();
  if (!deck.length) return <span id="cidx">0/0</span>;
  return <span id="cidx">{(idx % deck.length) + 1}/{deck.length}</span>;
}

export function CardKnownCount() {
  const { known } = useAppState();
  return <span id="cknown">{getActiveKnown(known).size}</span>;
}

export function ProgressBar() {
  const { known } = useAppState();
  const pct = (getActiveKnown(known).size / (W as unknown as WordEntry[]).length) * 100;
  return <div className="progress-fill" id="pbar" style={{ width: pct + '%' }} />;
}

