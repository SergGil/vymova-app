// src/fandom-theme-store.ts — single source of truth for the "fandom skin"
// (Star Wars, Harry Potter, ...) body[data-theme] theme, replacing a 3-layer
// system (legacy-modernization-roadmap.md item 4d): settings.tsx held
// hidden `btn-<key>` buttons with the real toggle logic; sidebar.tsx's
// visible `set-<key>` rows only proxy-clicked those hidden buttons; and a
// MutationObserver on document.body watched for class changes to keep the
// visible pills in sync. Both files also independently duplicated the list
// of 14 keys. Callers now just call toggleFandomTheme(key) directly and/or
// subscribe via useFandomTheme() — no hidden buttons, no observer.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so FandomThemeProvider below is a no-op
// kept only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';

export const FANDOM_THEME_KEYS = [
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
] as const;
export type FandomThemeKey = (typeof FANDOM_THEME_KEYS)[number];

function isFandomThemeKey(v: string): v is FandomThemeKey {
  return (FANDOM_THEME_KEYS as readonly string[]).includes(v);
}

interface FandomThemeState {
  active: FandomThemeKey | null;
}

// Fandom theme CSS is split out of the styles.css monolith into per-theme
// files (css/themes/<key>.css — legacy-modernization-roadmap.md item 2),
// loaded only for the theme actually in use instead of shipped to every
// visitor. import.meta.glob picks up whichever theme files exist at build
// time, so extracting another theme later needs no change here — a key
// with no extracted file yet just falls through to the (still present)
// rules in styles.css.
const _themeCssModules = import.meta.glob<void>('../css/themes/*.css');
const _loadedThemeCss = new Set<string>();
function _loadThemeCss(key: string): void {
  if (_loadedThemeCss.has(key)) return;
  const loader = _themeCssModules[`../css/themes/${key}.css`];
  if (!loader) return;
  _loadedThemeCss.add(key);
  void loader();
}

// Self-heal stale state from before mutual exclusivity was enforced (or any
// other way two `ew_<key>` flags ended up '1' at once) — apply only the
// first one found and clear the rest, so at most one skin is active. Also
// applies body[data-theme] + lazy-loads that theme's CSS for whichever key
// wins, mirroring what settings.tsx used to do on mount.
function initAndSelfHeal(): FandomThemeKey | null {
  let found: FandomThemeKey | null = null;
  for (const key of FANDOM_THEME_KEYS) {
    if (localStorage.getItem(`ew_${key}`) === '1') {
      if (found) {
        localStorage.setItem(`ew_${key}`, '0');
      } else {
        found = key;
      }
    }
  }
  if (found) {
    document.body.dataset.theme = found;
    _loadThemeCss(found);
  }
  return found;
}

const useFandomThemeStore = create<FandomThemeState>()(
  devtools(() => ({ active: initAndSelfHeal() }), {
    name: 'fandom-theme',
    enabled: import.meta.env.DEV,
  }),
);

export function FandomThemeProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export const useFandomTheme = useFandomThemeStore;

export function getActiveFandomTheme(): FandomThemeKey | null {
  return useFandomThemeStore.getState().active;
}

/** Turn a fandom theme on (clearing whichever other one was active) or, if
 * it's already the active one, off. The single place body[data-theme],
 * localStorage, CSS lazy-loading, and the shared store all update
 * together — every caller (settings page, sidebar quick rows, header
 * quick-toggle buttons) stays in sync automatically. */
export function toggleFandomTheme(key: string): void {
  if (!isFandomThemeKey(key)) return;
  const current = getActiveFandomTheme();
  const turningOn = current !== key;
  if (current) {
    delete document.body.dataset.theme;
    localStorage.setItem(`ew_${current}`, '0');
  }
  if (turningOn) {
    document.body.dataset.theme = key;
    localStorage.setItem(`ew_${key}`, '1');
    _loadThemeCss(key);
  }
  useFandomThemeStore.setState({ active: turningOn ? key : null });
}
