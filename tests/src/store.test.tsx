import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  notifyLangChange,
  useLangVersion,
  notifyGameBarChange,
  useGameBarVersion,
  notifyAchievementsChange,
  useAchievementsVersion,
  notifySettingsChange,
  useSettingsVersion,
} from '../../src/store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(el: React.ReactElement): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(el);
  });
  return { container, root };
}

// Each channel below exists specifically so a consumer only re-renders on
// the one event it actually cares about, instead of a single global bus
// waking every subscriber on every unrelated change (a card render's
// updateRing(), a combo tick, a duel poll, a search keystroke's result
// count, ...). The isolation these tests pin — re-renders on its own
// notify(), stays silent on every other channel's notify() — is the actual
// bug fix: without it, these channels would be no different from one shared
// global bus.
const CHANNELS = [
  { name: 'lang', notify: notifyLangChange, useVersion: useLangVersion },
  { name: 'gameBar', notify: notifyGameBarChange, useVersion: useGameBarVersion },
  { name: 'achievements', notify: notifyAchievementsChange, useVersion: useAchievementsVersion },
  { name: 'settings', notify: notifySettingsChange, useVersion: useSettingsVersion },
];

describe('store.ts — narrow re-render channels', () => {
  for (const { name, notify, useVersion } of CHANNELS) {
    describe(`${name} channel`, () => {
      it('re-renders subscribers when its own notify() fires', () => {
        const renders = vi.fn();
        function Probe() {
          const v = useVersion();
          renders(v);
          return null;
        }
        const { root } = mount(<Probe />);
        const callsBefore = renders.mock.calls.length;
        const versionBefore = renders.mock.calls[callsBefore - 1][0];

        act(() => {
          notify();
        });

        expect(renders.mock.calls.length).toBeGreaterThan(callsBefore);
        const versionAfter = renders.mock.calls[renders.mock.calls.length - 1][0];
        expect(versionAfter).toBe(versionBefore + 1);

        act(() => {
          root.unmount();
        });
      });

      it('does NOT re-render on another channel\'s notify()', () => {
        const other = CHANNELS.find((c) => c.name !== name)!;
        const renders = vi.fn();
        function Probe() {
          useVersion();
          renders();
          return null;
        }
        const { root } = mount(<Probe />);
        const before = renders.mock.calls.length;
        act(() => {
          other.notify();
        });
        expect(renders.mock.calls.length).toBe(before);
        act(() => {
          root.unmount();
        });
      });

      it('unsubscribes on unmount so further notifications do not call stale listeners', () => {
        const renders = vi.fn();
        function Probe() {
          useVersion();
          renders();
          return null;
        }
        const { root } = mount(<Probe />);
        const callsAtUnmount = renders.mock.calls.length;
        act(() => {
          root.unmount();
        });
        act(() => {
          notify();
        });
        expect(renders.mock.calls.length).toBe(callsAtUnmount);
      });
    });
  }
});
