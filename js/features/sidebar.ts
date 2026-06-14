// English Words App — js/features/sidebar.ts
// Sidebar wiring, page-view system, theme toggles, img-clear confirm
import { refreshAchievementsPage } from './achievements-page.tsx';
import { renderDuel } from './duel.ts';
import { openGrammarContent } from './grammar-page.tsx';
import { openIdiomsContent } from './idioms-page.tsx';
import { state } from '../../src/state.ts';
import { notifyStateChange } from '../../src/store.ts';
import { _renderVoices } from './voice.ts';
import { _updateUI as _refreshNotifUI } from './notifications.ts';
import { _refreshCloudSyncUI } from './cloud-sync.ts';

// ── Image cache clear confirm ──────────────────────────────────
let _imgClearCb: (() => void) | null = null;
const _imgClearOvl = document.getElementById('img-clear-overlay');

export function showImgClearConfirm(cb: () => void): void {
  _imgClearCb = cb;
  _imgClearOvl?.classList.add('open');
}

document.getElementById('img-clear-cancel')?.addEventListener('click', () => {
  _imgClearOvl?.classList.remove('open'); _imgClearCb = null;
});
document.getElementById('img-clear-confirm')?.addEventListener('click', () => {
  _imgClearOvl?.classList.remove('open'); _imgClearCb?.(); _imgClearCb = null;
});
_imgClearOvl?.addEventListener('click', (e: MouseEvent) => {
  if (e.target === _imgClearOvl) { _imgClearOvl.classList.remove('open'); _imgClearCb = null; }
});

// ── Sidebar wiring ─────────────────────────────────────────────
const _ham     = document.getElementById('hamburger');
const _sidebar = document.getElementById('sidebar')!;
const _sbOvl   = document.getElementById('sidebar-overlay')!;

function closeSidebar(): void {
  _sidebar.classList.remove('open');
  _sbOvl.classList.remove('open');
}
_ham?.addEventListener('click', () => {
  const open = _sidebar.classList.toggle('open');
  _sbOvl.classList.toggle('open', open);
});
_sbOvl.addEventListener('click', closeSidebar);

// ── Page view system ──────────────────────────────────────────
const ACTIVE_PAGE_KEY = 'ew_active_page';

const PAGE_TO_SIDEBAR: Record<string, string> = {
  stats: 'sb-stats', ach: 'sb-achievements',
  modes: 'sb-modes', settings: 'sb-settings',
  duel: 'sb-duel',   grammar: 'sb-grammar',
  idioms: 'sb-idioms',
  'learning-path': 'sb-learning-path',
};

function _setSidebarActive(page: string | null): void {
  ['sb-cards','sb-stats','sb-achievements','sb-modes','sb-settings','sb-duel','sb-grammar','sb-idioms','sb-learning-path'].forEach(id => {
    document.getElementById(id)?.classList.remove('sb-active');
  });
  const activeId = page ? (PAGE_TO_SIDEBAR[page] ?? 'sb-cards') : 'sb-cards';
  document.getElementById(activeId)?.classList.add('sb-active');
}

export function openPage(page: string): void {
  closePage();
  state.activePage = page;
  notifyStateChange();
  try { localStorage.setItem(ACTIVE_PAGE_KEY, page); } catch(e){}
  _setSidebarActive(page);
  // Prevent body scroll when a page overlay is open
  document.body.style.overflow = 'hidden';
  if (page === 'stats') {
    const so = document.getElementById('stats-overlay');
    if (so) { so.classList.add('as-page'); so.style.display = 'flex'; }
    document.getElementById('btn-stats')?.dispatchEvent(new Event('click'));
  } else if (page === 'ach') {
    document.getElementById('ach-overlay')?.classList.add('open');
    refreshAchievementsPage();
  } else if (page === 'modes') {
    const mo = document.getElementById('modes-overlay');
    mo?.classList.add('as-page', 'open');
  } else if (page === 'settings') {
    document.getElementById('settings-overlay')?.classList.add('open');
    _renderVoices();
    _refreshNotifUI();
    notifyStateChange();
    _refreshCloudSyncUI();
  } else if (page === 'duel') {
    document.getElementById('duel-overlay')?.classList.add('open');
    renderDuel();
  } else if (page === 'grammar') {
    document.getElementById('grammar-overlay')?.classList.add('open');
    openGrammarContent();
  } else if (page === 'idioms') {
    document.getElementById('idioms-overlay')?.classList.add('open');
    openIdiomsContent();
  } else if (page === 'learning-path') {
    document.getElementById('lp-overlay')?.classList.add('open');
    import('./learning-path.ts').then(({ openLearningPath }) => openLearningPath()).catch(() => {});
  }
  if (window.innerWidth <= 900) closeSidebar();
}

// Mode-game overlays (quiz, write, story, etc.) sit far above the page
// overlays (z-index 9100+) and are toggled via style.display rather than
// classes — close them too so they don't bleed through when switching pages.
const MODE_OVERLAY_IDS = [
  'bee-overlay', 'scr-overlay', 'wl-overlay', 'story-mode-overlay', 'ctx-overlay',
  'fib-overlay', 'listen-overlay', 'catpairs-overlay', 'lesson-overlay',
  'write-overlay', 'pairs-overlay', 'tempo-overlay',
];

export function closePage(): void {
  if (state.activePage !== null) { state.activePage = null; notifyStateChange(); }
  try { localStorage.removeItem(ACTIVE_PAGE_KEY); } catch(e){}
  _setSidebarActive(null);
  // Restore body scroll when page is closed
  document.body.style.overflow = '';
  const so = document.getElementById('stats-overlay');
  if (so) { so.classList.remove('as-page'); so.style.display = 'none'; }
  document.getElementById('ach-overlay')?.classList.remove('open');
  const mo = document.getElementById('modes-overlay');
  mo?.classList.remove('as-page', 'open');
  document.getElementById('settings-overlay')?.classList.remove('open');
  document.getElementById('duel-overlay')?.classList.remove('open');
  document.getElementById('grammar-overlay')?.classList.remove('open');
  document.getElementById('idioms-overlay')?.classList.remove('open');
  document.getElementById('lp-overlay')?.classList.remove('open');
  for (const id of MODE_OVERLAY_IDS) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

document.querySelectorAll('[data-close-page]').forEach(btn => btn.addEventListener('click', closePage));
document.getElementById('stats-close')?.addEventListener('click', closePage);
document.getElementById('modes-close')?.addEventListener('click', closePage);

// ── Sidebar nav ────────────────────────────────────────────────
document.getElementById('sb-cards')?.addEventListener('click', () => { closePage(); if (window.innerWidth <= 900) closeSidebar(); });
document.getElementById('sb-stats')?.addEventListener('click', () => openPage('stats'));
document.getElementById('sb-achievements')?.addEventListener('click', () => openPage('ach'));
document.getElementById('sb-modes')?.addEventListener('click', () => openPage('modes'));
document.getElementById('sb-settings')?.addEventListener('click', () => openPage('settings'));
document.getElementById('sb-duel')?.addEventListener('click', () => openPage('duel'));
document.getElementById('sb-grammar')?.addEventListener('click', () => openPage('grammar'));
document.getElementById('sb-idioms')?.addEventListener('click', () => openPage('idioms'));
document.getElementById('sb-learning-path')?.addEventListener('click', () => openPage('learning-path'));
document.getElementById('sb-home')?.addEventListener('click', () => { closePage(); if (window.innerWidth <= 900) closeSidebar(); });

// ── Theme toggles (in Settings page + quick toggle near the title) ──
function _updateTogglePills(): void {
  // Dark theme pill reflects user preference (ew_theme), not SW-induced body.dark
  const isDark = localStorage.getItem('ew_theme') === 'dark';
  const isSW   = document.body.classList.contains('sw');
  document.getElementById('set-theme-pill')?.classList.toggle('on', isDark);
  document.getElementById('set-sw-pill')?.classList.toggle('on', isSW);
}
document.getElementById('set-theme')?.addEventListener('click', () => {
  document.getElementById('btn-theme')?.click();
  setTimeout(_updateTogglePills, 50);
});
document.getElementById('set-sw')?.addEventListener('click', () => {
  document.getElementById('btn-sw')?.click();
  setTimeout(_updateTogglePills, 50);
});
document.getElementById('title-sw-toggle')?.addEventListener('click', () => {
  document.getElementById('btn-sw')?.click();
  setTimeout(_updateTogglePills, 50);
});
_updateTogglePills();
new MutationObserver(_updateTogglePills).observe(document.body, { attributes: true, attributeFilter: ['class'] });

// ── Restore last open page after a reload ───────────────────────
// Deferred via setTimeout: at module-eval time some page renderers
// (learning-path, duel, etc.) depend on app state/data that other
// modules finish wiring up only after the whole import chain settles.
// Calling openPage() synchronously here can throw mid-render, leaving
// the overlay open but its content area empty.
// A second restore pass shortly after the first works around a race where
// the first openPage() call's render hooks run before some module-level
// state (e.g. profile data) has settled, leaving the overlay open but its
// dynamic content empty. The render hooks are idempotent, so re-running
// them is harmless.
try {
  const savedPage = localStorage.getItem(ACTIVE_PAGE_KEY);
  if (savedPage) {
    setTimeout(() => {
      try { openPage(savedPage); } catch(e){ console.error('[sidebar] failed to restore page', savedPage, e); }
    }, 0);
    setTimeout(() => {
      try { openPage(savedPage); } catch(e){ console.error('[sidebar] failed to restore page (retry)', savedPage, e); }
    }, 250);
  }
} catch(e){}
