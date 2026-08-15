// Vymova — js/features/sidebar/sidebar.tsx
// Sidebar wiring (hamburger, escape-closes-page, theme-pill sync, page
// restore-on-reload), page-view system. Nav-group hover flyouts, fandom-theme
// rows, the image-cache-clear confirm dialog, and (full-react-migration-
// roadmap.md Phase 1) the nav-link list/logo/language-switcher markup itself
// have moved to their own files — see sidebar-nav-flyout.tsx,
// fandom-theme-rows.tsx, img-clear-confirm.tsx, sidebar-nav.tsx.
import { useEffect, type ReactElement } from 'react';
import {
  getActivePage,
  dispatchOpenPage,
  dispatchClosePage,
  useActivePage,
} from '../../../src/nav-store.tsx';
import { getKnowLang, getLearnLang } from '../lang-pair-select.tsx';

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

import { routerNavigate, PAGE_TO_ROUTE } from '../../../src/router.ts';

// ── Page view system ──────────────────────────────────────────
const ACTIVE_PAGE_KEY = 'ew_active_page';

// Sidebar active-link highlighting used to be driven imperatively from here
// (_setSidebarActive's classList loop) — sidebar-nav.tsx's <NavLink/> now
// derives its own active state reactively from useActivePage() instead, so
// this file no longer needs to know the page→sidebar-id mapping at all.

export function closeSidebar(): void {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('open');
}

export function openPage(page: string): void {
  // Passing the target route lets _closePage() skip its own routerNavigate('/')
  // when we're switching directly from one page to another — otherwise
  // switching e.g. stats -> modes bounces the hash through '/' before landing
  // on '/modes', a transient no-page state that RouterSync's location effect
  // can observe independently of this call and race against.
  _closePage(PAGE_TO_ROUTE[page]);
  dispatchOpenPage(page);
  try {
    localStorage.setItem(ACTIVE_PAGE_KEY, page);
  } catch (e) {}
  // Sync URL — skip if already at this route (e.g. called from RouterSync)
  const route = PAGE_TO_ROUTE[page];
  if (route && !_currentHashRoute().endsWith(route)) routerNavigate(route);
  // Prevent body scroll when a page overlay is open
  document.body.style.overflow = 'hidden';
  // 'stats' (as-page) and every other page's overlay class-toggle (and,
  // where needed, an onActivate content-refresh call) are self-managed by
  // <PageOverlayVisibility/> (page-overlay-visibility.tsx, mounted in
  // app-root.tsx) off useActivePage() instead of being driven from here.
  // ('modes' page's updateModesPageDesc() call already lived in its own
  // reactive useActivePage()-driven effect below, independent of this
  // dispatcher, so dropping the direct call here isn't a behavior change.)
  // Stats specifically still dispatches a synthetic #btn-stats click from
  // its onActivate (rather than calling openStats() directly) because that
  // click is also listened to independently by CatPairsWiringInit
  // (js/modes/catpairs.tsx) to refresh the weak-words widget — calling
  // openStats() directly would silently drop that second listener's effect.
  if (window.innerWidth <= 900) closeSidebar();
}

// Mode-game overlays (quiz, write, story, etc.) sit far above the page
// overlays (z-index 9100+) — close them too so they don't bleed through when
// switching pages. Most still toggle via style.display (no CSS fallback for
// their closed state), but story-mode-overlay/tempo-overlay now show/hide via
// a CSS `.open` class instead (matching quiz/aq-overlay — see
// use-mode-session.ts's showOverlay/hideOverlay override in story.tsx/
// tempo.tsx), so they're closed via CLASS_TOGGLED_MODE_OVERLAY_IDS below
// instead: an inline style.display set here would permanently pin them
// closed, since nothing in useModeSession ever clears an inline style once
// one wins over the .open class's CSS rule.
const MODE_OVERLAY_IDS = [
  'bee-overlay',
  'scr-overlay',
  'wl-overlay',
  'ctx-overlay',
  'fib-overlay',
  'listen-overlay',
  'catpairs-overlay',
  'lesson-overlay',
  'write-overlay',
  'pairs-overlay',
];
const CLASS_TOGGLED_MODE_OVERLAY_IDS = ['story-mode-overlay', 'tempo-overlay'];

// Public no-arg signature is kept so closePage can still be passed directly
// as an event listener / onClick callback (addEventListener("click",
// closePage), onClick={closePage}) without TS treating the click event as
// an attempted `nextRoute` argument — openPage() calls the real,
// route-aware implementation below directly instead.
export function closePage(): void {
  _closePage();
}

function _closePage(nextRoute?: string): void {
  const wasPage = getActivePage();
  if (wasPage !== null) dispatchClosePage();
  if (wasPage === 'duel') {
    // Only reached (loading duel.ts is a no-op cache hit) when the duel page
    // was actually open — stops the 1.5s Firebase polling that would
    // otherwise keep running in the background forever, since this generic
    // close path (used by browser back/forward via RouterSync, and by
    // switching straight to another sidebar page) bypasses duel.ts's own
    // close-button handler entirely.
    import('../duel/duel.ts')
      .then((m) => m.stopDuelPolling())
      .catch(() => {});
  }
  try {
    localStorage.removeItem(ACTIVE_PAGE_KEY);
  } catch (e) {}
  // Navigate to root only if we're currently on a page route, and only when
  // the caller isn't about to navigate straight to a different page route
  // itself (openPage() passes its own target route so this can skip the
  // transient '/' hop entirely and go directly from e.g. '/stats' to
  // '/modes' in one navigation).
  if (!nextRoute && _currentHashRoute() !== '/') routerNavigate('/');
  // Restore body scroll when page is closed
  document.body.style.overflow = '';
  // Deliberately unconditional (runs on every closePage(), not just when
  // 'stats' was the active page): stats can also be open as a floating
  // quick-view modal (no "as-page" class, opened by clicking #btn-stats
  // directly, entirely outside nav-store) which must still be force-closed
  // when navigating to/closing any other page, or it'd visually stay on
  // top (it sits above page overlays at z-index 8000). A purely
  // useActivePage()-reactive <PageOverlayVisibility/> can't express that —
  // it only reacts to 'stats' itself becoming/leaving the active page — so
  // this stays here rather than moving out like the other overlays below.
  const so = document.getElementById('stats-overlay');
  if (so) {
    so.classList.remove('as-page');
    so.style.display = 'none';
  }
  // 'modes-overlay'/'ach-overlay'/'settings-overlay'/'duel-overlay'/
  // 'lp-overlay'/'translate-overlay'/'lang-history-overlay'/
  // 'profile-overlay'/'grammar-overlay'/'idioms-overlay'/
  // 'ai-tutor-overlay'/'voice-roleplay-overlay'/'youtube-player-overlay'/
  // 'video-player-overlay' self-manage via <PageOverlayVisibility/> — see
  // the matching note in openPage() above.
  for (const id of MODE_OVERLAY_IDS) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
  for (const id of CLASS_TOGGLED_MODE_OVERLAY_IDS) {
    document.getElementById(id)?.classList.remove('open');
  }
}

export function SidebarInit(): ReactElement | null {
  const activePage = useActivePage();
  useEffect(() => {
    if (activePage === 'modes') updateModesPageDesc();
  }, [activePage]);

  useEffect(() => {
    // AI nav group / translate link visibility is now a conditional render
    // in <SidebarNav/> (AI_TUTOR_ENABLED, a build-time constant) — no runtime
    // reveal-effect needed here anymore.

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

    // The settings/ach/profile/lp close buttons used to share a
    // `[data-close-page]` querySelectorAll loop here — full-react-migration-
    // roadmap.md Phase 4 moved them to <PageHeader/> (page-header.tsx),
    // which now wires each one directly via onClick={closePage}. Phase 5b
    // did the same for modes-close — see modes-overlay-shell.tsx.
    const statsClose = document.getElementById('stats-close');
    statsClose?.addEventListener('click', closePage);

    // Escape closes whichever page is currently open (stats, achievements,
    // duel, learning path, profile, settings, ...) — a few pages used to
    // rely on their own individual Escape binding via bindOverlayDismiss()
    // (grammar/idioms/ai-tutor/voice-roleplay/video-player), which left the
    // rest without one. One listener here covers all of them uniformly.
    const onEscapeClosePage = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && getActivePage() !== null) closePage();
    };
    document.addEventListener('keydown', onEscapeClosePage);

    // Sidebar nav-link href/onClick wiring (sb-cards/sb-home + the 15
    // NAV_LINKS pages) moved to <SidebarNav/> (sidebar-nav.tsx) — it renders
    // the links itself now, so there's no static markup left to reach into.

    // Nav-group hover flyouts are Menu (base-ui), owned directly by
    // <SidebarNav/>'s NavGroup (sidebar-nav.tsx) — no separate controller.

    // Dark-mode toggle and fandom-theme rows are both fully React-owned now
    // (js/core/theme.tsx's <ThemeToggle/>, fandom-theme-rows.tsx's
    // <FandomThemeRowsController/>) — no more imperative DOM wiring here.

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
      statsClose?.removeEventListener('click', closePage);
      document.removeEventListener('keydown', onEscapeClosePage);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  return null;
}
