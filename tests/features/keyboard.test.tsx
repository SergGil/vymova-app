import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act, Profiler, type ReactElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { KeysOverlay } from '../../js/features/keyboard.tsx';
import { notifyStateChange, notifyLangChange } from '../../src/store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<KeysOverlay />);
  });
  return { container, root };
}

function press(key: string, opts: Partial<KeyboardEventInit> = {}): void {
  document.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, ...opts }));
}

describe('keyboard.tsx KeysOverlay', () => {
  beforeEach(() => {
    document.body.innerHTML = '<button id="btn-keys"></button><input id="search-input" />';
  });

  it('renders closed by default', () => {
    const { container } = mount();
    expect(container.querySelector('#keys-overlay')!.className).toBe('');
  });

  it('opens when #btn-keys is clicked', () => {
    const { container } = mount();
    const btn = document.getElementById('btn-keys')!;
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('#keys-overlay')!.className).toBe('open');
  });

  it('opens with "?" and closes with Escape', () => {
    const { container } = mount();
    act(() => {
      press('?');
    });
    expect(container.querySelector('#keys-overlay')!.className).toBe('open');

    act(() => {
      press('Escape');
    });
    expect(container.querySelector('#keys-overlay')!.className).toBe('');
  });

  it('does not open with "?" when focus is in an input or textarea', () => {
    const input = document.getElementById('search-input') as HTMLInputElement;
    input.focus();
    const { container } = mount();
    act(() => {
      press('?');
    });
    expect(container.querySelector('#keys-overlay')!.className).toBe('');
  });

  it('closes when clicking the close button', () => {
    const { container } = mount();
    act(() => {
      press('?');
    });
    const closeBtn = container.querySelector('#keys-close') as HTMLButtonElement;
    act(() => {
      closeBtn.click();
    });
    expect(container.querySelector('#keys-overlay')!.className).toBe('');
  });

  it('closes when clicking directly on the overlay backdrop', () => {
    const { container } = mount();
    act(() => {
      press('?');
    });
    const overlay = container.querySelector('#keys-overlay') as HTMLElement;
    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(overlay.className).toBe('');
  });

  it('focuses #search-input on Ctrl+K', () => {
    mount();
    const input = document.getElementById('search-input') as HTMLInputElement;
    act(() => {
      press('k', { ctrlKey: true });
    });
    expect(document.activeElement).toBe(input);
  });

  // This overlay used to subscribe to the global useStateVersion() bus
  // purely so its t() calls stayed fresh on a UI-language switch — which
  // also meant it re-rendered its whole (usually-closed, static) shortcuts
  // panel on every unrelated app-wide change: a flashcard advance, a combo
  // tick, a duel poll, anything. It now subscribes to the narrower
  // useLangVersion() channel instead. Profiler's onRender only fires on an
  // actual re-render, so this is a direct measurement, not an inference.
  it('does not re-render on an unrelated notifyStateChange(), but does on notifyLangChange()', () => {
    const onRender = vi.fn();
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(
        (
          <Profiler id="keys" onRender={onRender}>
            <KeysOverlay />
          </Profiler>
        ) as ReactElement,
      );
    });
    const rendersAfterMount = onRender.mock.calls.length;

    act(() => {
      notifyStateChange();
    });
    expect(onRender.mock.calls.length).toBe(rendersAfterMount);

    act(() => {
      notifyLangChange();
    });
    expect(onRender.mock.calls.length).toBeGreaterThan(rendersAfterMount);

    act(() => {
      root.unmount();
    });
  });
});
