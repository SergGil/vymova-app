// src/range-store.ts — the study-range filter's current value (replaces the
// legacy #sel-range <select>'s .value as the source of truth once
// range-select.tsx became a controlled shadcn Select instead of a real
// native <select>). Deliberately two INDEPENDENT createDomainStore
// instances, not one combined state shape: js/core/srs.ts recomputes the
// "srs" option's due-count label on nearly every grading action, and if
// that lived in the same store as the range value, deck-filter.tsx's
// subscribeRange() listener (which rebuilds the whole deck) would fire on
// every SRS label tick too, not just on an actual range change.
import { createDomainStore } from './create-domain-store.tsx';

export type RangeValue = string;

interface RangeState {
  value: RangeValue;
}
type RangeAction = { type: 'SET_RANGE'; value: RangeValue };

function rangeReducer(_state: RangeState, action: RangeAction): RangeState {
  switch (action.type) {
    case 'SET_RANGE':
      return { value: action.value };
  }
}

const rangeStore = createDomainStore<RangeState, RangeAction>(rangeReducer, { value: '0' }, 'range');

export const RangeProvider = rangeStore.Provider;

export function getRangeSnapshot(): RangeValue {
  return rangeStore.getSnapshot().value;
}

export function setRange(value: RangeValue): void {
  rangeStore.dispatch({ type: 'SET_RANGE', value });
}

// For deck-filter.tsx's imperative (non-component) subscription — mirrors
// the plain-function subscribe pattern create-domain-store.tsx's own header
// comment describes for exactly this "vanilla code reacting to a store"
// case.
export function subscribeRange(listener: () => void): () => void {
  return rangeStore.subscribe(listener);
}

export function useRange(): RangeValue {
  return rangeStore.useStore().value;
}

// search-inline.tsx's "jump to a found word not in the current deck" flow
// needs #sel-range's visible selection to end up on "all words" (so the
// Select UI reflects it) without deck-filter.tsx's usual reactive rebuild
// running — that flow builds its own deck deliberately unfiltered by the
// active lang-pair/tag-set restriction (so a search hit outside those
// filters can still be jumped to), and a second automatic rebuild right
// after would both discard that deck and re-shuffle it, invalidating the
// index it just computed. Mirrors the old "set .value without dispatching
// 'change'" trick the native <select> allowed for free.
let _suppressDeckRebuild = false;

export function setRangeWithoutRebuild(value: RangeValue): void {
  _suppressDeckRebuild = true;
  try {
    setRange(value);
  } finally {
    _suppressDeckRebuild = false;
  }
}

export function isDeckRebuildSuppressed(): boolean {
  return _suppressDeckRebuild;
}

// ── SRS option label ─────────────────────────────────────────────
// Was js/core/srs.ts directly caching and mutating #sel-range's
// option[value="srs"] DOM node's textContent. A custom Select's items only
// exist in the DOM while the dropdown is open (not kept-mounted), so a
// cached node reference like the old _srsLabelOpt would go stale the first
// time the dropdown closed — this makes the label reactive state instead.
interface SrsLabelState {
  label: string | null;
}
type SrsLabelAction = { type: 'SET_SRS_LABEL'; label: string | null };

function srsLabelReducer(_state: SrsLabelState, action: SrsLabelAction): SrsLabelState {
  switch (action.type) {
    case 'SET_SRS_LABEL':
      return { label: action.label };
  }
}

const srsLabelStore = createDomainStore<SrsLabelState, SrsLabelAction>(
  srsLabelReducer,
  { label: null },
  'range-srs-label',
);

export function setSrsLabel(label: string | null): void {
  srsLabelStore.dispatch({ type: 'SET_SRS_LABEL', label });
}

export function useSrsLabel(): string | null {
  return srsLabelStore.useStore().label;
}
