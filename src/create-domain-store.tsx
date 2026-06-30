// src/create-domain-store.tsx — factory for small, per-domain external stores.
// Each domain (nav, known-words, ...) gets its own listener set/snapshot, so a
// mutation in one domain never re-renders components subscribed to another
// (unlike the single global `version` counter in src/store.ts). `dispatch`/
// `getSnapshot` are also exported as plain module-scope functions so vanilla
// non-component code (e.g. js/app.ts's pre-mount seeding) can read/write the
// store without needing to be inside the React tree.
import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';

export interface DomainStore<S, A> {
  getSnapshot: () => S;
  dispatch: (action: A) => void;
  subscribe: (listener: () => void) => () => void;
}

export function createDomainStore<S, A>(reducer: (state: S, action: A) => S, initial: S) {
  let snapshot = initial;
  const listeners = new Set<() => void>();

  function dispatch(action: A): void {
    snapshot = reducer(snapshot, action);
    listeners.forEach((l) => l());
  }

  function subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }

  function getSnapshot(): S {
    return snapshot;
  }

  const store: DomainStore<S, A> = { getSnapshot, dispatch, subscribe };
  const StoreContext = createContext(store);

  function Provider({ children }: { children: ReactNode }) {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
  }

  function useStore(): S {
    const ctx = useContext(StoreContext);
    return useSyncExternalStore(ctx.subscribe, ctx.getSnapshot);
  }

  return { Provider, useStore, dispatch, getSnapshot };
}
