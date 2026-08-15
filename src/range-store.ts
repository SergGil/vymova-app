// src/range-store.ts — the study-range filter's current value (replaces the
// legacy #sel-range <select>'s .value as the source of truth once
// range-select.tsx became a controlled shadcn Select instead of a real
// native <select>). Deliberately two INDEPENDENT stores, not one combined
// state shape: js/core/srs.ts recomputes the "srs" option's due-count label
// on nearly every grading action, and if that lived in the same store as
// the range value, deck-filter.tsx's subscribeRange() listener (which
// rebuilds the whole deck) would fire on every SRS label tick too, not just
// on an actual range change.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed for range-srs-label (it never had one);
// RangeProvider below is a no-op kept only for API compatibility.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';

export type RangeValue = string;

interface RangeState {
  value: RangeValue;
}

const useRangeStore = create<RangeState>()(
  devtools(() => ({ value: '0' }), { name: 'range', enabled: import.meta.env.DEV }),
);

export function RangeProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function getRangeSnapshot(): RangeValue {
  return useRangeStore.getState().value;
}

export function setRange(value: RangeValue): void {
  useRangeStore.setState({ value });
}

// For deck-filter.tsx's imperative (non-component) subscription — mirrors
// Zustand's own subscribe(listener), the equivalent of create-domain-
// store.tsx's plain-function subscribe pattern for "vanilla code reacting
// to a store" (Zustand's listener signature also passes (state, prevState),
// ignored here since callers only care that *something* changed).
export function subscribeRange(listener: () => void): () => void {
  return useRangeStore.subscribe(listener);
}

export function useRange(): RangeValue {
  return useRangeStore((s) => s.value);
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

const useSrsLabelStore = create<SrsLabelState>()(
  devtools(() => ({ label: null }), { name: 'range-srs-label', enabled: import.meta.env.DEV }),
);

export function setSrsLabel(label: string | null): void {
  useSrsLabelStore.setState({ label });
}

export function useSrsLabel(): string | null {
  return useSrsLabelStore((s) => s.label);
}
