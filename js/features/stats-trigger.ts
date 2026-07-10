// Vymova — js/features/stats-trigger.ts
// Tiny always-eager trigger for the Stats overlay, split out of
// stats-page.tsx so callers (js/features/stats.ts's #btn-stats click
// handler, progress-io.tsx after an import) can open/close/refresh it
// without pulling in the full heavy StatsPage component — same
// "whole module dragged in regardless of a dynamic import elsewhere"
// lesson as reading-lookup.ts/word-detail-trigger.ts.
//
// Stats has two real entry points that both end up here: the sidebar's
// nav-store-driven "stats" page (js/features/sidebar.tsx simulates a click
// on #btn-stats rather than calling openStats() itself) and a direct
// #btn-stats click elsewhere in the header. Either way it's this module's
// openStats() that actually runs, so — unlike the other lazy pages, which
// gate purely on nav-store's activePage — StatsPage's lazy-load gate is a
// small dedicated boolean store instead, flipped true here.
import { useSyncExternalStore } from 'react';
import { closePage } from './sidebar.tsx';

let _bumpTick: (() => void) | null = null;

export function setStatsBumpTick(fn: (() => void) | null): void {
  _bumpTick = fn;
}

export function refreshStatsPage(): void {
  _bumpTick?.();
}

let _shouldLoad = false;
const _listeners = new Set<() => void>();

function _notify(): void {
  _listeners.forEach((l) => l());
}
function _subscribe(listener: () => void): () => void {
  _listeners.add(listener);
  return () => _listeners.delete(listener);
}
function _getSnapshot(): boolean {
  return _shouldLoad;
}

/** Once true, stays true — matches every other lazy mode/page in this app
 * (load once, then internal show/hide state manages visibility). */
export function useStatsShouldLoad(): boolean {
  return useSyncExternalStore(_subscribe, _getSnapshot);
}

export function openStats(): void {
  if (!_shouldLoad) {
    _shouldLoad = true;
    _notify();
  }
  refreshStatsPage();
  const overlay = document.getElementById('stats-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    const panel = overlay.querySelector<HTMLElement>('.stats-panel');
    if (panel) {
      panel.classList.remove('slide-up');
      void panel.offsetWidth;
      panel.classList.add('slide-up');
    }
  }
}

export function closeStats(): void {
  const overlay = document.getElementById('stats-overlay');
  if (overlay && overlay.classList.contains('as-page')) {
    closePage();
    return;
  }
  if (overlay) overlay.style.display = 'none';
}
