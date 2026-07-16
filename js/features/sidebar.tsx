// Vymova — js/features/sidebar.tsx
// Sidebar wiring, page-view system, dark-mode pill sync. Nav-group hover
// flyouts, fandom-theme rows, and the image-cache-clear confirm dialog have
// moved to their own files — see sidebar-nav-flyout.tsx,
// fandom-theme-rows.tsx, img-clear-confirm.tsx.
import { useEffect, type ReactElement } from 'react';
import { AI_TUTOR_ENABLED } from '../config.ts';
import { notifySettingsChange } from '../../src/store.ts';
import {
  getActivePage,
  dispatchOpenPage,
  dispatchClosePage,
  useActivePage,
} from '../../src/nav-store.tsx';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { _renderVoices } from './voice/voice.tsx';
import { _updateUI as _refreshNotifUI } from './notifications.tsx';
import { _refreshCloudSyncUI } from './cloud-sync.tsx';

// The app uses HashRouter (see src/app-root.tsx) — the route lives in
// location.hash, not window.location.pathname, which always reflects the
// real served path (e.g. '/' or '/vymova-app/') regardless of in-app route.
function _currentHashRoute(): string {
  return window.location.hash.replace(/^#/, '') || '/';
}

// ── Modes page dynamic descriptions ───────────────────────────
export function updateModesPageDesc(): void {
  const el = document.getElementById('write-mode-desc');
  if (!el) return;
  const know = getKnowLang().toUpperCase();
  const learn = getLearnLang().toUpperCase();
  el.textContent = `${know} → ${learn}`;
}

// Image-cache-clear confirm moved to <ImgClearConfirmDialog/>
// (img-clear-confirm.tsx, mounted via Portal in app-root.tsx);
// image-prefetch.tsx now imports showImgClearConfirm from there directly.

import { routerNavigate, PAGE_TO_ROUTE } from '../../src/router.ts';

// ── Page view system ──────────────────────────────────────────
const ACTIVE_PAGE_KEY = 'ew_active_page';

const PAGE_TO_SIDEBAR: Record<string, string> = {
  stats: 'sb-stats',
  ach: 'sb-achievements',
  modes: 'sb-modes',
  settings: 'sb-settings',
  duel: 'sb-duel',
  grammar: 'sb-grammar',
  idioms: 'sb-idioms',
  translate: 'sb-translate',
  'lang-history': 'sb-lang-history',
  'learning-path': 'sb-learning-path',
  profile: 'sb-profile',
  'ai-tutor': 'sb-ai-tutor',
  'voice-roleplay': 'sb-voice-roleplay',
  'youtube-player': 'sb-youtube-player',
  'video-player': 'sb-video-player',
};

function _setSidebarActive(page: string | null): void {
  [
    'sb-cards',
    'sb-stats',
    'sb-achievements',
    'sb-modes',
    'sb-settings',
    'sb-duel',
    'sb-grammar',
    'sb-idioms',
    'sb-translate',
    'sb-lang-history',
    'sb-learning-path',
    'sb-profile',
    'sb-ai-tutor',
    'sb-voice-roleplay',
    'sb-youtube-player',
    'sb-video-player',
  ].forEach((id) => {
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
  dispatchOpenPage(page);
  try {
    localStorage.setItem(ACTIVE_PAGE_KEY, page);
  } catch (e) {}
  _setSidebarActive(page);
  // Sync URL — skip if already at this route (e.g. called from RouterSync)
  const route = PAGE_TO_ROUTE[page];
  if (route && !_currentHashRoute().endsWith(route)) routerNavigate(route);
  // Prevent body scroll when a page overlay is open
  document.body.style.overflow = 'hidden';
  if (page === 'stats') {
    const so = document.getElementById('stats-overlay');
    if (so) {
      so.classList.add('as-page');
      so.style.display = 'flex';
    }
    document.getElementById('btn-stats')?.dispatchEvent(new Event('click'));
  } else if (page === 'ach') {
    document.getElementById('ach-overlay')?.classList.add('open');
    import('./achievements-page.tsx')
      .then(({ refreshAchievementsPage }) => refreshAchievementsPage())
      .catch(() => {});
  } else if (page === 'modes') {
    const mo = document.getElementById('modes-overlay');
    mo?.classList.add('as-page', 'open');
    updateModesPageDesc();
  } else if (page === 'settings') {
    document.getElementById('settings-overlay')?.classList.add('open');
    _renderVoices();
    _refreshNotifUI();
    notifySettingsChange();
    _refreshCloudSyncUI();
  } else if (page === 'duel') {
    document.getElementById('duel-overlay')?.classList.add('open');
    import('./duel/duel.ts')
      .then(({ renderDuel }) => renderDuel())
      .catch(() => {});
  } else if (page === 'grammar') {
    document.getElementById('grammar-overlay')?.classList.add('open');
    import('./grammar-page.tsx')
      .then(({ openGrammarContent }) => openGrammarContent())
      .catch(() => {});
  } else if (page === 'idioms') {
    document.getElementById('idioms-overlay')?.classList.add('open');
    import('./idioms-page.tsx')
      .then(({ openIdiomsContent }) => openIdiomsContent())
      .catch(() => {});
  } else if (page === 'learning-path') {
    document.getElementById('lp-overlay')?.classList.add('open');
    import('./learning-path.ts').then(({ openLearningPath }) => openLearningPath()).catch(() => {});
  } else if (page === 'profile') {
    document.getElementById('profile-overlay')?.classList.add('open');
  } else if (page === 'translate') {
    document.getElementById('translate-overlay')?.classList.add('open');
  } else if (page === 'lang-history') {
    document.getElementById('lang-history-overlay')?.classList.add('open');
  } else if (page === 'ai-tutor') {
    document.getElementById('ai-tutor-overlay')?.classList.add('open');
  } else if (page === 'voice-roleplay') {
    document.getElementById('voice-roleplay-overlay')?.classList.add('open');
  } else if (page === 'youtube-player') {
    document.getElementById('youtube-player-overlay')?.classList.add('open');
  } else if (page === 'video-player') {
    document.getElementById('video-player-overlay')?.classList.add('open');
  }
  if (window.innerWidth <= 900) closeSidebar();
}

// Mode-game overlays (quiz, write, story, etc.) sit far above the page
// overlays (z-index 9100+) and are toggled via style.display rather than
// classes — close them too so they don't bleed through when switching pages.
const MODE_OVERLAY_IDS = [
  'bee-overlay',
  'scr-overlay',
  'wl-overlay',
  'story-mode-overlay',
  'ctx-overlay',
  'fib-overlay',
  'listen-overlay',
  'catpairs-overlay',
  'lesson-overlay',
  'write-overlay',
  'pairs-overlay',
  'tempo-overlay',
];

export function closePage(): void {
  const wasPage = getActivePage();
  if (wasPage !== null) dispatchClosePage();
  if (wasPage === 'duel') {
    // Only reached (loading duel.ts is a no-op cache hit) when the duel page
    // was actually open — stops the 1.5s Firebase polling that would
    // otherwise keep running in the background forever, since this generic
    // close path (used by browser back/forward via RouterSync, and by
    // switching straight to another sidebar page) bypasses duel.ts's own
    // close-button handler entirely.
    import('./duel/duel.ts')
      .then((m) => m.stopDuelPolling())
      .catch(() => {});
  }
  try {
    localStorage.removeItem(ACTIVE_PAGE_KEY);
  } catch (e) {}
  // Navigate to root only if we're currently on a page route
  if (_currentHashRoute() !== '/') routerNavigate('/');
  _setSidebarActive(null);
  // Restore body scroll when page is closed
  document.body.style.overflow = '';
  const so = document.getElementById('stats-overlay');
  if (so) {
    so.classList.remove('as-page');
    so.style.display = 'none';
  }
  document.getElementById('ach-overlay')?.classList.remove('open');
  const mo = document.getElementById('modes-overlay');
  mo?.classList.remove('as-page', 'open');
  document.getElementById('settings-overlay')?.classList.remove('open');
  document.getElementById('duel-overlay')?.classList.remove('open');
  document.getElementById('grammar-overlay')?.classList.remove('open');
  document.getElementById('idioms-overlay')?.classList.remove('open');
  document.getElementById('translate-overlay')?.classList.remove('open');
  document.getElementById('lang-history-overlay')?.classList.remove('open');
  document.getElementById('lp-overlay')?.classList.remove('open');
  document.getElementById('profile-overlay')?.classList.remove('open');
  document.getElementById('ai-tutor-overlay')?.classList.remove('open');
  document.getElementById('voice-roleplay-overlay')?.classList.remove('open');
  document.getElementById('youtube-player-overlay')?.classList.remove('open');
  document.getElementById('video-player-overlay')?.classList.remove('open');
  for (const id of MODE_OVERLAY_IDS) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

// Fandom-theme rows (set-<key>/set-<key>-pill for the 14 skins) are wired by
// <FandomThemeRowsController/> (fandom-theme-rows.tsx) against the shared
// fandom-theme-store.ts — this function only handles the dark-mode pill,
// which is a separate, independent toggle (js/core/theme.tsx's ThemeToggle).
function _updateDarkPill(): void {
  // Dark theme pill reflects user preference (ew_theme), not a fandom-induced
  // body.dark — but when there's no explicit preference yet, settings.tsx's
  // system-color-scheme auto-detection may already have applied body.dark,
  // and the pill should show that actual state rather than defaulting to
  // "off" and contradicting what the user is currently looking at.
  const savedTheme = localStorage.getItem('ew_theme');
  const isDark = savedTheme ? savedTheme === 'dark' : document.body.classList.contains('dark');
  document.getElementById('set-theme-pill')?.classList.toggle('on', isDark);
}

export function SidebarInit(): ReactElement | null {
  const activePage = useActivePage();
  useEffect(() => {
    if (activePage === 'modes') updateModesPageDesc();
  }, [activePage]);

  useEffect(() => {
    // AI nav group is hidden by default (no backend configured) —
    // reveal it once the build-time proxy URL is set.
    if (AI_TUTOR_ENABLED) {
      const aiGroup = document.getElementById('sb-group-ai') as HTMLElement | null;
      if (aiGroup) aiGroup.style.display = '';
      const translateBtn = document.getElementById('sb-translate') as HTMLElement | null;
      if (translateBtn) translateBtn.style.display = '';
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
    closePageBtns.forEach((btn) => btn.addEventListener('click', closePage));
    const statsClose = document.getElementById('stats-close');
    const modesClose = document.getElementById('modes-close');
    statsClose?.addEventListener('click', closePage);
    modesClose?.addEventListener('click', closePage);

    // Escape closes whichever page is currently open (stats, achievements,
    // duel, learning path, profile, settings, ...) — a few pages used to
    // rely on their own individual Escape binding via bindOverlayDismiss()
    // (grammar/idioms/ai-tutor/voice-roleplay/video-player), which left the
    // rest without one. One listener here covers all of them uniformly.
    const onEscapeClosePage = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && getActivePage() !== null) closePage();
    };
    document.addEventListener('keydown', onEscapeClosePage);

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
    const sbHome = document.getElementById('sb-home');
    if (sbCards) sbCards.href = base + '/';
    const onCardsClick = _navHandler(() => {
      closePage();
      if (window.innerWidth <= 900) closeSidebar();
    });
    sbCards?.addEventListener('click', onCardsClick);
    sbHome?.addEventListener('click', () => {
      closePage();
      if (window.innerWidth <= 900) closeSidebar();
    });

    const NAV_LINKS: [string, string, string][] = [
      ['sb-stats', '/stats', 'stats'],
      ['sb-achievements', '/achievements', 'ach'],
      ['sb-modes', '/modes', 'modes'],
      ['sb-settings', '/settings', 'settings'],
      ['sb-duel', '/duel', 'duel'],
      ['sb-grammar', '/grammar', 'grammar'],
      ['sb-idioms', '/idioms', 'idioms'],
      ['sb-translate', '/translate', 'translate'],
      ['sb-lang-history', '/lang-history', 'lang-history'],
      ['sb-learning-path', '/learning-path', 'learning-path'],
      ['sb-profile', '/profile', 'profile'],
      ['sb-ai-tutor', '/ai-tutor', 'ai-tutor'],
      ['sb-voice-roleplay', '/voice-roleplay', 'voice-roleplay'],
      ['sb-youtube-player', '/youtube', 'youtube-player'],
      ['sb-video-player', '/video-player', 'video-player'],
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

    // Nav-group hover flyouts moved to <NavFlyoutController/>
    // (sidebar-nav-flyout.tsx, mounted directly in app-root.tsx).

    // ── Dark-mode pill (fandom-theme rows/pills are now
    // <FandomThemeRowsController/>, see fandom-theme-rows.tsx) ─────
    const setTheme = document.getElementById('set-theme');
    const onSetThemeClick = () => {
      document.getElementById('btn-theme')?.click();
      setTimeout(_updateDarkPill, 50);
    };
    setTheme?.addEventListener('click', onSetThemeClick);
    _updateDarkPill();
    const mo = new MutationObserver(_updateDarkPill);
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
          try {
            openPage(savedPage);
          } catch (e) {
            console.error('[sidebar] failed to restore page', savedPage, e);
          }
        }, 0);
        t2 = setTimeout(() => {
          try {
            openPage(savedPage);
          } catch (e) {
            console.error('[sidebar] failed to restore page (retry)', savedPage, e);
          }
        }, 250);
      }
    } catch (e) {}

    return () => {
      ham?.removeEventListener('click', onHamClick);
      sbOvl?.removeEventListener('click', closeSidebar);
      closePageBtns.forEach((btn) => btn.removeEventListener('click', closePage));
      statsClose?.removeEventListener('click', closePage);
      modesClose?.removeEventListener('click', closePage);
      document.removeEventListener('keydown', onEscapeClosePage);
      sbCards?.removeEventListener('click', onCardsClick);
      for (const [el, evt, fn] of _navListeners) el.removeEventListener(evt, fn);
      setTheme?.removeEventListener('click', onSetThemeClick);
      mo.disconnect();
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return null;
}
