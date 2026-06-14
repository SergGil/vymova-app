// English Words App — js/features/stats.ts
// Stats overlay open/close wiring. The forgetting-curve tooltip moved to
// SrsBadge (card-front-text.tsx). The stats overlay itself lives in
// stats-page.tsx (React).
import { useEffect, type ReactElement } from 'react';
import { openStats, closeStats } from './stats-page.tsx';

// ── Stats open/close buttons ──────────────────────────────────
export function StatsInit(): ReactElement | null {
  useEffect(() => {
    const statsBtn = document.getElementById('btn-stats');
    const onStatsBtnClick = (e: MouseEvent) => {
      e.stopPropagation();
      openStats();
    };
    statsBtn?.addEventListener('click', onStatsBtnClick);

    const statsOverlay = document.getElementById('stats-overlay');
    const onOverlayClick = (e: MouseEvent) => {
      if (e.target === statsOverlay) closeStats();
    };
    statsOverlay?.addEventListener('click', onOverlayClick);

    return () => {
      statsBtn?.removeEventListener('click', onStatsBtnClick);
      statsOverlay?.removeEventListener('click', onOverlayClick);
    };
  }, []);

  return null;
}
