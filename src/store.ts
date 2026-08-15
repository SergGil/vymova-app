// src/store.ts — narrow, per-concern re-render channels built on
// useSyncExternalStore.
//
// This file used to also export a single global "notify everything" bus
// (notifyStateChange/useStateVersion/useAppState over a shared, mutable
// `state` object). Every notify() call — a card render's updateRing(), a
// combo tick, a duel poll, a search keystroke's result count — woke all
// ~25 of its subscribers regardless of what actually changed (the
// keyboard-shortcuts overlay re-rendering its whole static panel on every
// flashcard advance, the game bar re-rendering on every unrelated
// keystroke elsewhere). That bus has been fully migrated away: every
// consumer now subscribes to one of the channels below, or to a proper
// per-domain Zustand store (state-management migration, 2026-08-15 — see
// known-words-store.ts/srs-store.ts/deck-store.ts/nav-store.tsx; the
// homegrown createDomainStore() factory these used to be built on is gone,
// see docs/state-stores-overview.md for the migration record).
//
// DO NOT resurrect a global "notify everything" channel here. New state
// belongs in its own Zustand store (`create<State>()(...)`, see any file
// above for the pattern); a new narrow channel below is for the specific
// case of "some widget's t()-translated labels (or similarly non-reactive
// display data) need to refresh on a specific, infrequent event" — not a
// catch-all.
import { useSyncExternalStore } from 'react';

type Listener = () => void;

function createVersionChannel(): { notify: () => void; useVersion: () => number } {
  const listeners = new Set<Listener>();
  let v = 0;
  return {
    notify(): void {
      v++;
      listeners.forEach((l) => l());
    },
    useVersion(): number {
      return useSyncExternalStore(
        (listener) => {
          listeners.add(listener);
          return () => {
            listeners.delete(listener);
          };
        },
        () => v,
      );
    },
  };
}

// UI display-language switches (i18n.ts) and learn/know-language-pair
// switches (lang-pair-select.tsx) — both comparatively rare. For consumers
// whose only reason to re-render is "so my t() calls / language-pair-
// derived data stay fresh."
const langChannel = createVersionChannel();
export const notifyLangChange = langChannel.notify;
export const useLangVersion = langChannel.useVersion;

// Game-bar data (streak/goal/combo/level) — fired by the game bar's own
// refreshGameBar*() functions and combo.ts, i.e. exactly the events the
// game bar (and other game-data-derived displays, e.g. profile-page.tsx)
// care about.
const gameBarChannel = createVersionChannel();
export const notifyGameBarChange = gameBarChannel.notify;
export const useGameBarVersion = gameBarChannel.useVersion;

// Achievements page — achievement/level unlock data isn't itself a
// reactive store (plain _jsonLoad/_jsonSave-backed GameData, like game.ts's
// other fields), so refreshAchievementsPage() (sidebar.tsx, on opening the
// achievements page; stats-page.tsx, after a progress-bumping action)
// fires this explicitly instead.
const achievementsChannel = createVersionChannel();
export const notifyAchievementsChange = achievementsChannel.notify;
export const useAchievementsVersion = achievementsChannel.useVersion;

// Settings-page misc widgets (currently just the image-prefetch/Pixabay-key
// panel) — fired when the settings page opens (sidebar.tsx) and after
// saving a Pixabay key (image-prefetch.tsx).
const settingsChannel = createVersionChannel();
export const notifySettingsChange = settingsChannel.notify;
export const useSettingsVersion = settingsChannel.useVersion;
