// Vymova — js/features/page-overlay-visibility.tsx
// Slice of sidebar.tsx's openPage()/closePage() dispatcher
// (legacy-modernization-roadmap.md item 3g). getActivePage()/
// useActivePage() (src/nav-store.tsx) is already real React state — the
// only imperative-DOM part left for a page overlay whose content is
// already lazy-loaded via <LazyPage/> (src/lazy-page.tsx) is toggling its
// own "open" class (plus, for `modes`, a second "as-page" class it shares
// no logic with beyond the classList itself), and — for a few pages — an
// extra fire-and-forget refresh call each time it becomes active (e.g.
// grammar/idioms re-render their content on every navigation, not just the
// first). This component lets the overlay self-subscribe instead of
// openPage/closePage reaching in via getElementById for it, one page at a
// time.
//
// stats-overlay stays in the dispatcher — it's touched by 7 different
// files including its own dedicated stats-trigger.ts (lazy-load gate,
// slide-up animation, a closeStats() branch keyed on the "as-page" class
// itself) — genuinely more entangled than a class toggle can capture.
import { useEffect, type ReactElement } from 'react';
import { useActivePage } from '../../src/nav-store.tsx';

export function PageOverlayVisibility({
  page,
  overlayId,
  extraClass,
  onActivate,
}: {
  page: string;
  overlayId: string;
  /** A second class to toggle alongside "open" (only `modes` needs this
   * today, for its "as-page" class). */
  extraClass?: string;
  /** Fire-and-forget side effect run every time this page becomes active
   * (e.g. a dynamic-import + refresh call) — mirrors what openPage()'s
   * dispatcher used to do inline for this page's branch. */
  onActivate?: () => void;
}): ReactElement | null {
  const activePage = useActivePage();
  useEffect(() => {
    const isActive = activePage === page;
    const el = document.getElementById(overlayId);
    el?.classList.toggle('open', isActive);
    if (extraClass) el?.classList.toggle(extraClass, isActive);
    if (isActive) onActivate?.();
    // onActivate intentionally excluded from deps — callers typically pass
    // a fresh inline closure each render; keying off it would re-fire the
    // activation side effect on every unrelated parent re-render instead
    // of only on genuine activePage transitions.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onActivate excluded on purpose, see comment above
  }, [activePage, page, overlayId, extraClass]);
  return null;
}
