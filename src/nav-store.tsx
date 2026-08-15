// src/nav-store.tsx — sidebar page-navigation domain (replaces state.activePage).
// Pilot migration off the homegrown createDomainStore() onto Zustand
// (architecture-assessment.md p.2's one accepted "no ecosystem" gap) — chosen
// as the pilot because it's the smallest domain store (single-field state,
// 6 consumer files) with the lowest blast radius of the 16. Public API
// (NavProvider/useActivePage/getActivePage/dispatchOpenPage/dispatchClosePage)
// is unchanged on purpose: none of the 6 consumers needed to change.
import { Fragment, type ReactElement, type ReactNode } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface NavState {
  activePage: string | null;
}

// Zustand stores are module-level and don't need a Context/Provider to be
// read from — unlike createDomainStore(), which uses React Context so a
// store's identity is scoped to wherever its <Provider> renders. Same
// tradeoff every other Zustand app makes; irrelevant here since this app
// only ever mounts one instance of each domain store for its lifetime.
const useNavStore = create<NavState>()(
  // Same purpose as createDomainStore()'s connectDevtools(): Redux DevTools
  // time-travel/action-log in dev, no-op (and no runtime dependency) when
  // the browser extension isn't installed. `name` labels this store's
  // instance in the extension's store picker, matching the 'nav' name the
  // createDomainStore() version passed.
  devtools(() => ({ activePage: null }), { name: 'nav', enabled: import.meta.env.DEV }),
);

// No-op passthrough, kept only so app-root.tsx's existing <NavProvider>
// wrapper didn't need to change — Zustand's store needs no Provider.
export function NavProvider({ children }: { children: ReactNode }): ReactElement {
  return <Fragment>{children}</Fragment>;
}

export function useActivePage(): string | null {
  return useNavStore((s) => s.activePage);
}

export function getActivePage(): string | null {
  return useNavStore.getState().activePage;
}

export function dispatchOpenPage(page: string): void {
  useNavStore.setState({ activePage: page });
}

export function dispatchClosePage(): void {
  useNavStore.setState({ activePage: null });
}
