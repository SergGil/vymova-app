// src/store.ts — useSyncExternalStore-обгортка над мутабельним `state`.
// Легасі-код продовжує мутувати `state` напряму і викликає notifyStateChange(),
// щоб React-компоненти (Фаза 4+) могли підписатись і перерендеритись.
import { useSyncExternalStore } from 'react';
import { state } from './state.ts';
import type { AppState } from './types.js';

type Listener = () => void;
const listeners = new Set<Listener>();
let version = 0;

export function notifyStateChange(): void {
  version++;
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getVersion(): number {
  return version;
}

export function useStateVersion(): number {
  return useSyncExternalStore(subscribe, getVersion);
}

export function useAppState(): AppState {
  useStateVersion();
  return state;
}
