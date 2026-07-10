// Vymova — js/features/word-detail-trigger.ts
// Tiny always-eager trigger for the Word Detail bottom-sheet modal, split
// out of word-detail.tsx so callers scattered across the app
// (word-context.tsx, similar-words.tsx, search-overlay.tsx — all eager
// themselves) can open the modal without pulling in its full JSX/UI.
// word-detail.tsx's WordDetailPage component is lazy-loaded (src/app-root.tsx,
// via src/lazy-page.tsx) once this store's target actually becomes non-null —
// before this split, importing openWordDetail from word-detail.tsx directly
// dragged the whole (much heavier) component along regardless of any dynamic
// import elsewhere, the same "Rollup keeps a module eager if ANY eager entry
// point reaches it" lesson from js/modes/reading-lookup.ts.
import { useSyncExternalStore } from 'react';
import type { WordEntry } from '../../src/types.js';

let _current: WordEntry | null = null;
const _listeners = new Set<() => void>();

function _notify(): void {
  _listeners.forEach((l) => l());
}

export function openWordDetail(w: WordEntry): void {
  _current = w;
  _notify();
}

export function closeWordDetail(): void {
  _current = null;
  _notify();
}

function _subscribe(listener: () => void): () => void {
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}

function _getSnapshot(): WordEntry | null {
  return _current;
}

export function useWordDetailTarget(): WordEntry | null {
  return useSyncExternalStore(_subscribe, _getSnapshot);
}
