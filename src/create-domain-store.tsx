// src/create-domain-store.tsx — factory for small, per-domain external stores.
// Each domain (nav, known-words, ...) gets its own listener set/snapshot, so a
// mutation in one domain never re-renders components subscribed to another
// (unlike the single global `version` counter in src/store.ts). `dispatch`/
// `getSnapshot`/`subscribe` are also exported as plain module-scope functions
// so vanilla non-component code (e.g. js/app.ts's pre-mount seeding, or a
// useEffect that wants a side effect on change rather than a re-render) can
// read/write/react-to the store without needing to be inside the React tree.
import { createContext, useContext, useRef, useSyncExternalStore, type ReactNode } from 'react';

export interface DomainStore<S, A> {
  getSnapshot: () => S;
  dispatch: (action: A) => void;
  subscribe: (listener: () => void) => () => void;
}

function shallowEqual<T>(a: T, b: T): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
  const keysA = Object.keys(a as Record<string, unknown>);
  const keysB = Object.keys(b as Record<string, unknown>);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.is((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) {
      return false;
    }
  }
  return true;
}

interface DevtoolsConnection {
  init(state: unknown): void;
  send(action: unknown, state: unknown): void;
}

// Dev-only bridge to the browser's Redux DevTools extension, if installed —
// gives every domain store time-travel/action-log for free, no runtime
// dependency (the extension itself provides window.__REDUX_DEVTOOLS_EXTENSION__).
// `name` is what labels this store's instance in the extension's store picker;
// stores that don't pass one just don't show up (harmless, not an error).
// Wrapped defensively (try/catch) because devtools connectivity must never be
// able to break the app — the extension isn't installed for most users, and
// even when it is, a store's state may contain values (e.g. known-words-store's
// Set<string>) the extension's serializer wasn't built to expect.
function connectDevtools(name: string | undefined, initial: unknown): DevtoolsConnection | null {
  if (!name || !import.meta.env.DEV || typeof window === 'undefined') return null;
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__ as
    | { connect(options: { name: string }): DevtoolsConnection }
    | undefined;
  if (!ext) return null;
  try {
    const connection = ext.connect({ name });
    connection.init(initial);
    return connection;
  } catch {
    return null;
  }
}

export function createDomainStore<S, A>(
  reducer: (state: S, action: A) => S,
  initial: S,
  name?: string,
) {
  let snapshot = initial;
  const listeners = new Set<() => void>();
  const devtools = connectDevtools(name, initial);

  function dispatch(action: A): void {
    snapshot = reducer(snapshot, action);
    try {
      devtools?.send(action, snapshot);
    } catch {
      // devtools-side serialization issue — never let it affect the app.
    }
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

  // Fine-grained subscription for domains with a large state shape (e.g.
  // duelRoom's 25 fields, kept as one store to avoid cross-store tearing —
  // see src/duel-room-store.ts): re-renders only when the *selected* slice
  // changes, not on every dispatch to the domain. Same store, same
  // synchronous snapshot as useStore() — this only narrows the re-render
  // trigger, it doesn't add a second source of truth. `selector` may ignore
  // its argument and read module-scope snapshot getters instead (the common
  // shape for this codebase's existing `_getXxxData()` helpers); it's called
  // on every dispatch regardless, so keep it cheap and pure.
  // Caches only the *last* {input, output} pair per hook call-site — enough
  // for React's one-snapshot-per-render usage below, but not a general
  // memoization cache (no TTL, no multi-entry LRU, no cross-component
  // sharing like reselect). Don't lean on this for anything beyond "don't
  // recompute if the store didn't change since my last render."
  function useSelector<T>(selector: (state: S) => T, isEqual: (a: T, b: T) => boolean = shallowEqual): T {
    const ctx = useContext(StoreContext);
    const cache = useRef<{ input: S; output: T } | null>(null);
    function getSelection(): T {
      const state = ctx.getSnapshot();
      if (cache.current && cache.current.input === state) {
        return cache.current.output;
      }
      const next = selector(state);
      const output =
        cache.current && isEqual(cache.current.output, next) ? cache.current.output : next;
      cache.current = { input: state, output };
      return output;
    }
    return useSyncExternalStore(ctx.subscribe, getSelection);
  }

  return { Provider, useStore, useSelector, dispatch, getSnapshot, subscribe };
}
