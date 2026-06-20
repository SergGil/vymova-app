// src/router.ts — React Router bridge for non-React code (openPage/closePage)
// useNavigate() can only be called inside components, so we store a reference
// here and expose routerNavigate() that sidebar.tsx can call directly.

type NavFn = (to: string, opts?: { replace?: boolean }) => void;

let _nav: NavFn = (to) => window.history.pushState({}, '', to);

export function setRouterNavigate(fn: NavFn): void {
  _nav = fn;
}

export function routerNavigate(to: string, replace = false): void {
  _nav(to, { replace });
}

// Page id (used in state.activePage) → URL path
export const PAGE_TO_ROUTE: Record<string, string> = {
  stats:            '/stats',
  ach:              '/achievements',
  modes:            '/modes',
  settings:         '/settings',
  duel:             '/duel',
  grammar:          '/grammar',
  idioms:           '/idioms',
  'ai-tutor':       '/ai-tutor',
  'voice-roleplay': '/voice-roleplay',
  'youtube-player': '/youtube',
  'learning-path':  '/learning-path',
  profile:          '/profile',
};

// URL path → page id
export const ROUTE_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_ROUTE).map(([k, v]) => [v, k])
);
