// src/nav-store.tsx — sidebar page-navigation domain (replaces state.activePage).
// Migration of item 36's `state.activePage` field per the state-management plan:
// js/features/sidebar.tsx's openPage()/closePage() dispatch into this store
// instead of mutating `state.activePage` + calling notifyStateChange().
import { createDomainStore } from './create-domain-store.tsx';

interface NavState {
  activePage: string | null;
}

type NavAction = { type: 'OPEN_PAGE'; page: string } | { type: 'CLOSE_PAGE' };

function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case 'OPEN_PAGE':
      return { activePage: action.page };
    case 'CLOSE_PAGE':
      return { activePage: null };
  }
}

const navStore = createDomainStore<NavState, NavAction>(navReducer, { activePage: null });

export const NavProvider = navStore.Provider;

export function useActivePage(): string | null {
  return navStore.useStore().activePage;
}

export function getActivePage(): string | null {
  return navStore.getSnapshot().activePage;
}

export function dispatchOpenPage(page: string): void {
  navStore.dispatch({ type: 'OPEN_PAGE', page });
}

export function dispatchClosePage(): void {
  navStore.dispatch({ type: 'CLOSE_PAGE' });
}
