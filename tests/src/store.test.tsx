import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { notifyStateChange, useStateVersion, useAppState } from '../../src/store.ts';
import { state } from '../../src/state.ts';

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

describe('store.ts', () => {
  it('useStateVersion re-renders subscribers when notifyStateChange fires', () => {
    const renders = vi.fn();
    function Probe() {
      const v = useStateVersion();
      renders(v);
      return null;
    }
    const { root } = mount(<Probe />);
    const callsBefore = renders.mock.calls.length;
    const versionBefore = renders.mock.calls[callsBefore - 1][0];

    act(() => {
      notifyStateChange();
    });

    expect(renders.mock.calls.length).toBeGreaterThan(callsBefore);
    const versionAfter = renders.mock.calls[renders.mock.calls.length - 1][0];
    expect(versionAfter).toBe(versionBefore + 1);

    act(() => {
      root.unmount();
    });
  });

  it('useAppState returns the shared mutable state object and stays reactive', () => {
    function Probe({ onRender }: { onRender: (s: typeof state) => void }) {
      const s = useAppState();
      onRender(s);
      return null;
    }
    const seen: (typeof state)[] = [];
    const { root } = mount(<Probe onRender={(s) => seen.push(s)} />);
    expect(seen[0]).toBe(state);

    act(() => {
      notifyStateChange();
    });
    expect(seen.length).toBeGreaterThan(1);
    expect(seen[seen.length - 1]).toBe(state);

    act(() => {
      root.unmount();
    });
  });

  it('unsubscribes on unmount so further notifications do not call stale listeners', () => {
    const renders = vi.fn();
    function Probe() {
      useStateVersion();
      renders();
      return null;
    }
    const { root } = mount(<Probe />);
    const callsAtUnmount = renders.mock.calls.length;
    act(() => {
      root.unmount();
    });
    act(() => {
      notifyStateChange();
    });
    expect(renders.mock.calls.length).toBe(callsAtUnmount);
  });
});
