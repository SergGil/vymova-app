// Vymova — js/features/sidebar.tsx
// Sidebar wiring, page-view system, theme toggles, img-clear confirm
import { useEffect, type ReactElement } from 'react';
import { refreshAchievementsPage } from './achievements-page.tsx';
import { renderDuel } from './duel.ts';
import { openGrammarContent } from './grammar-page.tsx';
import { openIdiomsContent } from './idioms-page.tsx';
import { AI_TUTOR_ENABLED } from '../config.ts';
import { notifyStateChange } from '../../src/store.ts';
import {
  getActivePage,
  dispatchOpenPage,
  dispatchClosePage,
  useActivePage,
} from '../../src/nav-store.tsx';
import { getKnowLang, getLearnLang } from './lang-pair-select.tsx';
import { _renderVoices } from './voice.tsx';
import { _updateUI as _refreshNotifUI } from './notifications.tsx';
import { _refreshCloudSyncUI } from './cloud-sync.tsx';
import { t } from './i18n.ts';

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
  stats: 'sb-stats',
  ach: 'sb-achievements',
  modes: 'sb-modes',
  settings: 'sb-settings',
  duel: 'sb-duel',
  grammar: 'sb-grammar',
  idioms: 'sb-idioms',
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
  if (getActivePage() !== null) dispatchClosePage();
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

const FANDOM_THEME_KEYS = [
  'sw',
  'hp',
  'cp',
  'lotr',
  'mcu',
  'witcher',
  'mc',
  'dc',
  'got',
  'dw',
  'dune',
  'hg',
  'avt',
  'dt',
];

function _updateTogglePills(): void {
  // Dark theme pill reflects user preference (ew_theme), not a fandom-induced body.dark
  const isDark = localStorage.getItem('ew_theme') === 'dark';
  document.getElementById('set-theme-pill')?.classList.toggle('on', isDark);
  for (const key of FANDOM_THEME_KEYS) {
    document
      .getElementById(`set-${key}-pill`)
      ?.classList.toggle('on', document.body.classList.contains(key));
  }
}

export function SidebarInit(): ReactElement | null {
  const activePage = useActivePage();
  useEffect(() => {
    if (activePage === 'modes') updateModesPageDesc();
  }, [activePage]);

  useEffect(() => {
    const imgClearOvl = document.getElementById('img-clear-overlay');
    const imgClearCancel = document.getElementById('img-clear-cancel');
    const imgClearConfirm = document.getElementById('img-clear-confirm');
    const onImgClearCancel = () => {
      imgClearOvl?.classList.remove('open');
      _imgClearCb = null;
    };
    const onImgClearConfirm = () => {
      imgClearOvl?.classList.remove('open');
      _imgClearCb?.();
      _imgClearCb = null;
    };
    const onImgClearOvlClick = (e: MouseEvent) => {
      if (e.target === imgClearOvl) {
        imgClearOvl?.classList.remove('open');
        _imgClearCb = null;
      }
    };
    imgClearCancel?.addEventListener('click', onImgClearCancel);
    imgClearConfirm?.addEventListener('click', onImgClearConfirm);
    imgClearOvl?.addEventListener('click', onImgClearOvlClick);

    // AI nav group is hidden by default (no backend configured) —
    // reveal it once the build-time proxy URL is set.
    if (AI_TUTOR_ENABLED) {
      const aiGroup = document.getElementById('sb-group-ai') as HTMLElement | null;
      if (aiGroup) aiGroup.style.display = '';
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

    // ── Nav groups (hover flyout submenus) ───────────────────────
    const groupCleanups: Array<() => void> = [];
    const allFlyoutGroups: Array<{ group: HTMLElement; flyout: HTMLElement }> = [];
    const closeOtherFlyouts = (except: HTMLElement) => {
      allFlyoutGroups.forEach(({ group: g, flyout: f }) => {
        if (f !== except) {
          f.classList.remove('open');
          g.classList.remove('open');
        }
      });
    };
    document.querySelectorAll<HTMLElement>('.sb-group').forEach((group) => {
      const trigger = group.querySelector<HTMLElement>('.sb-group-trigger');
      const flyout = group.querySelector<HTMLElement>('.sb-flyout');
      if (!trigger || !flyout) return;
      // .sidebar has its own z-index, which makes it a stacking context —
      // any z-index on a fixed-position descendant only ranks against that
      // context's siblings, so the flyout would stay pinned behind page
      // overlays no matter how high its z-index goes. Move it to <body> so
      // it competes in the top-level stacking order instead.
      const flyoutPlaceholder = document.createComment('sb-flyout-slot');
      flyout.before(flyoutPlaceholder);
      document.body.appendChild(flyout);
      let closeTimer: ReturnType<typeof setTimeout> | null = null;
      const isMobile = () => window.innerWidth <= 900;
      const positionFlyout = () => {
        const r = trigger.getBoundingClientRect();
        if (isMobile()) {
          flyout.style.left = `${r.left}px`;
          flyout.style.top = `${r.bottom + 2}px`;
          flyout.style.width = `${r.width}px`;
        } else {
          flyout.style.left = `${r.right + 4}px`;
          flyout.style.top = `${r.top}px`;
          flyout.style.width = '';
        }
      };
      const openFlyout = () => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        if (isMobile()) return;
        closeOtherFlyouts(flyout);
        positionFlyout();
        flyout.classList.add('open');
      };
      const scheduleClose = () => {
        closeTimer = setTimeout(() => flyout.classList.remove('open'), 150);
      };
      const onTriggerEnter = () => openFlyout();
      const onTriggerLeave = () => {
        if (!isMobile()) scheduleClose();
      };
      const onFlyoutEnter = () => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      };
      const onFlyoutLeave = () => scheduleClose();
      const onTriggerClick = (e: MouseEvent) => {
        e.preventDefault();
        const willOpen = !flyout.classList.contains('open');
        if (willOpen) {
          closeOtherFlyouts(flyout);
          positionFlyout();
        }
        flyout.classList.toggle('open', willOpen);
        group.classList.toggle('open', willOpen);
      };
      const onFlyoutItemClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a.sb-btn')) {
          flyout.classList.remove('open');
          group.classList.remove('open');
        }
      };
      trigger.addEventListener('mouseenter', onTriggerEnter);
      trigger.addEventListener('mouseleave', onTriggerLeave);
      flyout.addEventListener('mouseenter', onFlyoutEnter);
      flyout.addEventListener('mouseleave', onFlyoutLeave);
      trigger.addEventListener('click', onTriggerClick);
      flyout.addEventListener('click', onFlyoutItemClick);
      allFlyoutGroups.push({ group, flyout });
      groupCleanups.push(() => {
        trigger.removeEventListener('mouseenter', onTriggerEnter);
        trigger.removeEventListener('mouseleave', onTriggerLeave);
        flyout.removeEventListener('mouseenter', onFlyoutEnter);
        flyout.removeEventListener('mouseleave', onFlyoutLeave);
        trigger.removeEventListener('click', onTriggerClick);
        flyout.removeEventListener('click', onFlyoutItemClick);
        if (closeTimer) clearTimeout(closeTimer);
        const idx = allFlyoutGroups.findIndex((x) => x.flyout === flyout);
        if (idx !== -1) allFlyoutGroups.splice(idx, 1);
        flyoutPlaceholder.replaceWith(flyout);
      });
    });
    const onDocClickCloseGroups = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.sb-group').forEach((group) => {
        // The flyout itself lives under <body> now (see the reparenting
        // above), so it's no longer a descendant of .sb-group — look it up
        // by id instead of group.querySelector.
        const flyoutEl = document.getElementById(`${group.id}-flyout`);
        const target = e.target as Node;
        if (!group.contains(target) && !flyoutEl?.contains(target)) {
          group.classList.remove('open');
          flyoutEl?.classList.remove('open');
        }
      });
    };
    document.addEventListener('click', onDocClickCloseGroups);

    // ── Theme toggles ──────────────────────────────────────────
    const setTheme = document.getElementById('set-theme');
    const onSetThemeClick = () => {
      document.getElementById('btn-theme')?.click();
      setTimeout(_updateTogglePills, 50);
    };
    setTheme?.addEventListener('click', onSetThemeClick);
    const themeRowCleanups: Array<() => void> = [];
    for (const key of FANDOM_THEME_KEYS) {
      const setRow = document.getElementById(`set-${key}`);
      const titleToggle = document.getElementById(`title-${key}-toggle`);
      const onClick = () => {
        document.getElementById(`btn-${key}`)?.click();
        setTimeout(_updateTogglePills, 50);
      };
      setRow?.addEventListener('click', onClick);
      titleToggle?.addEventListener('click', onClick);
      themeRowCleanups.push(() => {
        setRow?.removeEventListener('click', onClick);
        titleToggle?.removeEventListener('click', onClick);
      });
    }
    _updateTogglePills();
    const mo = new MutationObserver(_updateTogglePills);
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // ── Show more/less fandom themes ─────────────────────────────
    // Only the base 3 (dark/SW/HP) show by default; the rest sit behind a
    // "show more" toggle so the Settings page doesn't open to a wall of
    // rows — unless one of them is already the active theme, in which case
    // start expanded so the user can see what's currently selected.
    const EXTRA_THEME_KEYS = [
      'cp',
      'lotr',
      'mcu',
      'witcher',
      'mc',
      'dc',
      'got',
      'dw',
      'dune',
      'hg',
      'avt',
      'dt',
    ];
    const extraRows = document.getElementById('theme-rows-extra');
    const toggleRowsBtn = document.getElementById('theme-rows-toggle');
    const setThemeRowsExpanded = (expanded: boolean) => {
      if (extraRows) extraRows.style.display = expanded ? 'flex' : 'none';
      if (toggleRowsBtn)
        toggleRowsBtn.textContent = t(
          expanded ? 'settings.showLessThemes' : 'settings.showMoreThemes',
        );
    };
    setThemeRowsExpanded(EXTRA_THEME_KEYS.some((k) => document.body.classList.contains(k)));
    const onToggleRowsClick = () => setThemeRowsExpanded(extraRows?.style.display === 'none');
    toggleRowsBtn?.addEventListener('click', onToggleRowsClick);

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
      imgClearCancel?.removeEventListener('click', onImgClearCancel);
      imgClearConfirm?.removeEventListener('click', onImgClearConfirm);
      imgClearOvl?.removeEventListener('click', onImgClearOvlClick);
      ham?.removeEventListener('click', onHamClick);
      sbOvl?.removeEventListener('click', closeSidebar);
      closePageBtns.forEach((btn) => btn.removeEventListener('click', closePage));
      statsClose?.removeEventListener('click', closePage);
      modesClose?.removeEventListener('click', closePage);
      sbCards?.removeEventListener('click', onCardsClick);
      for (const [el, evt, fn] of _navListeners) el.removeEventListener(evt, fn);
      groupCleanups.forEach((fn) => fn());
      document.removeEventListener('click', onDocClickCloseGroups);
      setTheme?.removeEventListener('click', onSetThemeClick);
      themeRowCleanups.forEach((fn) => fn());
      toggleRowsBtn?.removeEventListener('click', onToggleRowsClick);
      mo.disconnect();
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return null;
}
