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

// ── Narrower channels ────────────────────────────────────────────
// useStateVersion() above is a single global bus: every notifyStateChange()
// call — a card render's updateRing(), a combo tick, a duel poll, a search
// keystroke's result count — wakes up all ~25 of its subscribers, including
// ones with nothing to do with what actually changed (the keyboard-shortcuts
// overlay re-rendering its whole static panel on every flashcard advance,
// the game bar re-rendering on every unrelated keystroke elsewhere). These
// two channels are purely additive escape hatches for the specific
// consumers where that was measurably wasteful — existing notifyStateChange()
// call sites are untouched, callers that also matter to one of these
// channels just gained one more (cheap) notify() alongside it.
function createVersionChannel(): { notify: () => void; useVersion: () => number } {
  const chListeners = new Set<Listener>();
  let v = 0;
  return {
    notify(): void {
      v++;
      chListeners.forEach((l) => l());
    },
    useVersion(): number {
      return useSyncExternalStore(
        (listener) => {
          chListeners.add(listener);
          return () => {
            chListeners.delete(listener);
          };
        },
        () => v,
      );
    },
  };
}

// UI display-language switches (i18n.ts) and learn/know-language-pair
// switches (lang-pair-select.tsx) — both comparatively rare, unlike the
// global bus's per-card/per-keystroke churn. For consumers whose only
// reason to subscribe to the global bus was "so my t() calls / active-known
// lookups stay fresh," e.g. the keyboard-shortcuts overlay and the inline
// search box.
const langChannel = createVersionChannel();
export const notifyLangChange = langChannel.notify;
export const useLangVersion = langChannel.useVersion;

// Game-bar data (streak/goal/combo/level) — fired by the game bar's own
// refreshGameBar*() functions and combo.ts, i.e. exactly the events the game
// bar components care about, without the keyboard-overlay/search-box/duel
// churn the global bus also carries.
const gameBarChannel = createVersionChannel();
export const notifyGameBarChange = gameBarChannel.notify;
export const useGameBarVersion = gameBarChannel.useVersion;
