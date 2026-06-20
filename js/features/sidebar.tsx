// Vymova — js/features/sidebar.tsx
// Sidebar wiring, page-view system, theme toggles, img-clear confirm
import { useEffect, type ReactElement } from 'react';
import { refreshAchievementsPage } from './achievements-page.tsx';
import { renderDuel } from './duel.ts';
import { openGrammarContent } from './grammar-page.tsx';
import { openIdiomsContent } from './idioms-page.tsx';
import { AI_TUTOR_ENABLED } from '../config.ts';
import { state } from '../../src/state.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { _renderVoices } from './voice.tsx';
import { _updateUI as _refreshNotifUI } from './notifications.tsx';
import { _refreshCloudSyncUI } from './cloud-sync.tsx';

// ── Modes page dynamic descriptions ───────────────────────────
export function updateModesPageDesc(): void {
  const el = document.getElementById('write-mode-desc');
  if (!el) return;
  const know = getKnowLang().toUpperCase();
  const learn = getLearnLang().toUpperCase();
  el.textContent = `${know} → ${learn}`;
}

// ── Image cache clear confirm ──────────────────────────────────
let _imgClearCb: (() => void) | null = null;

export function showImgClearConfirm(cb: () => void): void {
  _imgClearCb = cb;
  document.getElementById('img-clear-overlay')?.classList.add('open');
}

import { routerNavigate, PAGE_TO_ROUTE } from '../../src/router.ts';

// ── Page view system ──────────────────────────────────────────
const ACTIVE_PAGE_KEY = 'ew_active_page';

const PAGE_TO_SIDEBAR: Record<string, string> = {
  stats: 'sb-stats', ach: 'sb-achievements',
  modes: 'sb-modes', settings: 'sb-settings',
  duel: 'sb-duel',   grammar: 'sb-grammar',
  idioms: 'sb-idioms',
  'learning-path': 'sb-learning-path',
  profile: 'sb-profile',
  'ai-tutor': 'sb-ai-tutor',
  'voice-roleplay': 'sb-voice-roleplay',
};

function _setSidebarActive(page: string | null): void {
  ['sb-cards','sb-stats','sb-achievements','sb-modes','sb-settings','sb-duel','sb-grammar','sb-idioms','sb-learning-path','sb-profile','sb-ai-tutor','sb-voice-roleplay'].forEach(id => {
    document.getElementById(id)?.classList.remove('sb-active');
  });
  const activeId = page ? (PAGE_TO_SIDEBAR[page] ?? 'sb-cards') : 'sb-cards';
  document.getElementById(activeId)?.classList.add('sb-active');
}

function closeSidebar(): void {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}

export function openPage(page: string): void {
  closePage();
  state.activePage = page;
  notifyStateChange();
  try { localStorage.setItem(ACTIVE_PAGE_KEY, page); } catch(e){}
  _setSidebarActive(page);
  // Sync URL — skip if already at this route (e.g. called from RouterSync)
  const route = PAGE_TO_ROUTE[page];
  if (route && !window.location.pathname.endsWith(route)) routerNavigate(route);
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
    updateModesPageDesc();
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
  } else if (page === 'profile') {
    document.getElementById('profile-overlay')?.classList.add('open');
  } else if (page === 'ai-tutor') {
    document.getElementById('ai-tutor-overlay')?.classList.add('open');
  } else if (page === 'voice-roleplay') {
    document.getElementById('voice-roleplay-overlay')?.classList.add('open');
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
  // Navigate to root only if we're currently on a page route
  if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/vymova-app/')) {
    routerNavigate('/');
  }
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
  document.getElementById('profile-overlay')?.classList.remove('open');
  document.getElementById('ai-tutor-overlay')?.classList.remove('open');
  document.getElementById('voice-roleplay-overlay')?.classList.remove('open');
  for (const id of MODE_OVERLAY_IDS) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

function _updateTogglePills(): void {
  // Dark theme pill reflects user preference (ew_theme), not SW-induced body.dark
  const isDark = localStorage.getItem('ew_theme') === 'dark';
  const isSW   = document.body.classList.contains('sw');
  document.getElementById('set-theme-pill')?.classList.toggle('on', isDark);
  document.getElementById('set-sw-pill')?.classList.toggle('on', isSW);
}

export function SidebarInit(): ReactElement | null {
  const stateVer = useStateVersion();
  useEffect(() => {
    if (state.activePage === 'modes') updateModesPageDesc();
  }, [stateVer]);

  useEffect(() => {
    const imgClearOvl = document.getElementById('img-clear-overlay');
    const imgClearCancel = document.getElementById('img-clear-cancel');
    const imgClearConfirm = document.getElementById('img-clear-confirm');
    const onImgClearCancel = () => { imgClearOvl?.classList.remove('open'); _imgClearCb = null; };
    const onImgClearConfirm = () => { imgClearOvl?.classList.remove('open'); _imgClearCb?.(); _imgClearCb = null; };
    const onImgClearOvlClick = (e: MouseEvent) => {
      if (e.target === imgClearOvl) { imgClearOvl?.classList.remove('open'); _imgClearCb = null; }
    };
    imgClearCancel?.addEventListener('click', onImgClearCancel);
    imgClearConfirm?.addEventListener('click', onImgClearConfirm);
    imgClearOvl?.addEventListener('click', onImgClearOvlClick);

    // AI tutor nav link is hidden by default (no backend configured) —
    // reveal it once the build-time proxy URL is set.
    if (AI_TUTOR_ENABLED) {
      const aiTutorLink = document.getElementById('sb-ai-tutor') as HTMLElement | null;
      if (aiTutorLink) aiTutorLink.style.display = '';
      const roleplayLink = document.getElementById('sb-voice-roleplay') as HTMLElement | null;
      if (roleplayLink) roleplayLink.style.display = '';
    }

    // ── Sidebar wiring ─────────────────────────────────────────
    const ham = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const sbOvl = document.getElementById('sidebar-overlay');
    const onHamClick = () => {
      const open = sidebar?.classList.toggle('open');
      sbOvl?.classList.toggle('open', !!open);
    };
    ham?.addEventListener('click', onHamClick);
    sbOvl?.addEventListener('click', closeSidebar);

    const closePageBtns = document.querySelectorAll<HTMLElement>('[data-close-page]');
    closePageBtns.forEach(btn => btn.addEventListener('click', closePage));
    const statsClose = document.getElementById('stats-close');
    const modesClose = document.getElementById('modes-close');
    statsClose?.addEventListener('click', closePage);
    modesClose?.addEventListener('click', closePage);

    // ── Sidebar nav ──────────────────────────────────────────────
    // Base path for hrefs ('' locally, '/vymova-app' on GitHub Pages).
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');

    // Returns a click handler that prevents default navigation for plain
    // left-clicks (React Router handles it) but allows Ctrl/Cmd/middle-click
    // so the user can open pages in a new tab.
    function _navHandler(action: () => void) {
      return (e: MouseEvent) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        action();
      };
    }

    const sbCards = document.getElementById('sb-cards') as HTMLAnchorElement | null;
    const sbHome  = document.getElementById('sb-home');
    if (sbCards) sbCards.href = base + '/';
    const onCardsClick = _navHandler(() => { closePage(); if (window.innerWidth <= 900) closeSidebar(); });
    sbCards?.addEventListener('click', onCardsClick);
    sbHome?.addEventListener('click', () => { closePage(); if (window.innerWidth <= 900) closeSidebar(); });

    const NAV_LINKS: [string, string, string][] = [
      ['sb-stats',         '/stats',          'stats'],
      ['sb-achievements',  '/achievements',   'ach'],
      ['sb-modes',         '/modes',          'modes'],
      ['sb-settings',      '/settings',       'settings'],
      ['sb-duel',          '/duel',           'duel'],
      ['sb-grammar',       '/grammar',        'grammar'],
      ['sb-idioms',        '/idioms',         'idioms'],
      ['sb-learning-path', '/learning-path',  'learning-path'],
      ['sb-profile',       '/profile',        'profile'],
      ['sb-ai-tutor',      '/ai-tutor',       'ai-tutor'],
      ['sb-voice-roleplay','/voice-roleplay', 'voice-roleplay'],
    ];
    const _navListeners: [HTMLElement, string, EventListener][] = [];
    for (const [id, route, page] of NAV_LINKS) {
      const el = document.getElementById(id) as HTMLAnchorElement | null;
      if (!el) continue;
      el.href = base + route;
      const handler = _navHandler(() => openPage(page)) as EventListener;
      el.addEventListener('click', handler);
      _navListeners.push([el, 'click', handler]);
    }

    // ── Theme toggles ──────────────────────────────────────────
    const setTheme = document.getElementById('set-theme');
    const setSw = document.getElementById('set-sw');
    const titleSwToggle = document.getElementById('title-sw-toggle');
    const onSetThemeClick = () => { document.getElementById('btn-theme')?.click(); setTimeout(_updateTogglePills, 50); };
    const onSetSwClick = () => { document.getElementById('btn-sw')?.click(); setTimeout(_updateTogglePills, 50); };
    const onTitleSwClick = () => { document.getElementById('btn-sw')?.click(); setTimeout(_updateTogglePills, 50); };
    setTheme?.addEventListener('click', onSetThemeClick);
    setSw?.addEventListener('click', onSetSwClick);
    titleSwToggle?.addEventListener('click', onTitleSwClick);
    _updateTogglePills();
    const mo = new MutationObserver(_updateTogglePills);
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // ── Restore last open page after a reload ───────────────────
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
    let t1: ReturnType<typeof setTimeout> | null = null;
    let t2: ReturnType<typeof setTimeout> | null = null;
    try {
      const savedPage = localStorage.getItem(ACTIVE_PAGE_KEY);
      if (savedPage) {
        t1 = setTimeout(() => {
          try { openPage(savedPage); } catch(e){ console.error('[sidebar] failed to restore page', savedPage, e); }
        }, 0);
        t2 = setTimeout(() => {
          try { openPage(savedPage); } catch(e){ console.error('[sidebar] failed to restore page (retry)', savedPage, e); }
        }, 250);
      }
    } catch(e){}

    return () => {
      imgClearCancel?.removeEventListener('click', onImgClearCancel);
      imgClearConfirm?.removeEventListener('click', onImgClearConfirm);
      imgClearOvl?.removeEventListener('click', onImgClearOvlClick);
      ham?.removeEventListener('click', onHamClick);
      sbOvl?.removeEventListener('click', closeSidebar);
      closePageBtns.forEach(btn => btn.removeEventListener('click', closePage));
      statsClose?.removeEventListener('click', closePage);
      modesClose?.removeEventListener('click', closePage);
      sbCards?.removeEventListener('click', onCardsClick);
      for (const [el, evt, fn] of _navListeners) el.removeEventListener(evt, fn);
      setTheme?.removeEventListener('click', onSetThemeClick);
      setSw?.removeEventListener('click', onSetSwClick);
      titleSwToggle?.removeEventListener('click', onTitleSwClick);
      mo.disconnect();
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return null;
}
