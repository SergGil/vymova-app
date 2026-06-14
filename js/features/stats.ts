// English Words App — js/features/stats.ts
// Stats overlay open/close wiring. The forgetting-curve tooltip moved to
// SrsBadge (card-front-text.tsx). The stats overlay itself lives in
// stats-page.tsx (React).
import { openStats, closeStats } from './stats-page.tsx';

// ── Stats open/close buttons ──────────────────────────────────
document.getElementById('btn-stats')?.addEventListener('click', function(e) {
  e.stopPropagation();
  openStats();
});
document.getElementById('stats-overlay')?.addEventListener('click', function(e) {
  if (e.target === this) closeStats();
});

export {};
