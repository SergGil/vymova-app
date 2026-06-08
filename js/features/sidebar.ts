// English Words App — js/features/sidebar.ts
// Sidebar wiring, page-view system, theme toggles, img-clear confirm

// ── Image cache clear confirm ──────────────────────────────────
let _imgClearCb: (() => void) | null = null;
const _imgClearOvl = document.getElementById('img-clear-overlay');

export function showImgClearConfirm(cb: () => void): void {
  _imgClearCb = cb;
  _imgClearOvl?.classList.add('open');
}
window._showImgClearConfirm = showImgClearConfirm;

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
let _activePage: string | null = null;

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
  _activePage = page;
  _setSidebarActive(page);
  // Prevent body scroll when a page overlay is open
  document.body.style.overflow = 'hidden';
  if (page === 'stats') {
    const so = document.getElementById('stats-overlay');
    if (so) { so.classList.add('as-page'); so.style.display = 'flex'; }
    document.getElementById('btn-stats')?.dispatchEvent(new Event('click'));
  } else if (page === 'ach') {
    document.getElementById('ach-overlay')?.classList.add('open');
    (window.renderAchievements as (() => void) | undefined)?.();
    (window.renderLevelsRoadmap as (() => void) | undefined)?.();
  } else if (page === 'modes') {
    const mo = document.getElementById('modes-overlay');
    mo?.classList.add('as-page', 'open');
  } else if (page === 'settings') {
    document.getElementById('settings-overlay')?.classList.add('open');
    (window._renderVoices as (() => void) | undefined)?.();
    (window._refreshNotifUI as (() => void) | undefined)?.();
    (window._refreshPrefetchUI as (() => void) | undefined)?.();
    (window._refreshPixabayStatus as (() => void) | undefined)?.();
    (window._refreshCloudSyncUI as (() => void) | undefined)?.();
  } else if (page === 'duel') {
    document.getElementById('duel-overlay')?.classList.add('open');
    (window.renderDuel as (() => void) | undefined)?.();
  } else if (page === 'grammar') {
    document.getElementById('grammar-overlay')?.classList.add('open');
    (window.openGrammarContent as (() => void) | undefined)?.();
  } else if (page === 'idioms') {
    document.getElementById('idioms-overlay')?.classList.add('open');
    (window.openIdiomsContent as (() => void) | undefined)?.();
  } else if (page === 'learning-path') {
    document.getElementById('lp-overlay')?.classList.add('open');
    (window.openLearningPath as (() => void) | undefined)?.();
  }
  if (window.innerWidth <= 900) closeSidebar();
}
window.openPage = openPage;

export function closePage(): void {
  _activePage = null;
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
}
window.closePage = closePage;

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
