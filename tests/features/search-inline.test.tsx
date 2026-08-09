import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setDeckState } from '../../src/deck-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { SearchInline } from '../../js/features/search/search-inline.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { render, setDeck, setIdx, stopAuto } = vi.hoisted(() => ({
  render: vi.fn(),
  setDeck: vi.fn(),
  setIdx: vi.fn(),
  stopAuto: vi.fn(),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setDeck, setIdx, stopAuto }));

let roots: Root[] = [];

// Combobox's results popup is Portal'd to document.body (base-ui's Portal/
// Positioner/Popup pattern, same as this session's Select/Dialog
// conversions) — it's no longer a plain sibling div inside `container`, so
// every query below is scoped to `document`, not `container`.
function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SearchInline />);
  });
  roots.push(root);
  return { container, root };
}

const nativeValueSetter = Object.getOwnPropertyDescriptor(
  HTMLInputElement.prototype,
  'value',
)!.set!;
function setInputValue(input: HTMLInputElement, value: string): void {
  nativeValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

async function typeAndWaitForResults(input: HTMLInputElement, value: string): Promise<void> {
  act(() => {
    setInputValue(input, value);
  });
  await act(async () => {
    await new Promise((r) => setTimeout(r, 220));
  });
}

describe('search-inline.tsx SearchInline', () => {
  beforeEach(() => {
    document.body.innerHTML = '<select id="sel-range"><option value="0">All</option></select>';
    setDeckState((W as unknown as WordEntry[]).slice(0, 5));
    setKnownWords('en', new Set());
    render.mockClear();
    setDeck.mockClear();
    setIdx.mockClear();
    stopAuto.mockClear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders an input with the search placeholder', () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.placeholder).toBe('Пошук слова...');
  });

  it('shows matching results after typing (debounced)', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    const target = (W as unknown as WordEntry[])[0][0];
    await typeAndWaitForResults(input, target.slice(0, 3));

    const results = document.getElementById('search-results');
    expect(results).not.toBeNull();
    expect(document.querySelectorAll('.search-result-item').length).toBeGreaterThan(0);
  });

  it('shows a "no results" message for an unmatched query', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    await typeAndWaitForResults(input, 'zzzzzzzzzzzz');

    expect(document.querySelector('.search-no-results')).not.toBeNull();
    // toContain, not toBe: base-ui's aria-live status region appends a
    // zero-width joiner to force screen readers to re-announce identical
    // text on repeat renders.
    expect(document.querySelector('.search-no-results')!.textContent).toContain(
      'Нічого не знайдено',
    );
  });

  it('marks already-known words with the known badge', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setKnownWords('en', new Set([target[0]]));
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    await typeAndWaitForResults(input, target[0]);

    const item = document.querySelector('.search-result-item') as HTMLElement;
    expect(item.className).toContain('sr-known');
    expect(item.querySelector('.sr-known-badge')).not.toBeNull();
  });

  it('navigates to a word and resets the input when a result is clicked', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setDeckState([target]);
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    await typeAndWaitForResults(input, target[0]);

    const item = document.querySelector('.search-result-item') as HTMLElement;
    act(() => {
      item.click();
    });
    // reset()'s query clear is deferred a tick past Combobox's own
    // post-selection input-sync effect (see search-inline.tsx's comment).
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(setIdx).toHaveBeenCalledWith(0);
    expect(stopAuto).toHaveBeenCalled();
    expect(render).toHaveBeenCalled();
    expect(input.value).toBe('');
  });

  it('navigates results with ArrowDown/ArrowUp and selects with Enter', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setDeckState([target]);
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    await typeAndWaitForResults(input, target[0]);

    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
      );
    });
    const active = document.querySelector('.search-result-item[data-highlighted]');
    expect(active).not.toBeNull();

    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }),
      );
    });
    expect(setIdx).toHaveBeenCalledWith(0);
  });

  it('closes the results dropdown on Escape', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    const target = (W as unknown as WordEntry[])[0];
    await typeAndWaitForResults(input, target[0]);

    expect(document.getElementById('search-results')).not.toBeNull();
    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
      );
    });
    expect(document.getElementById('search-results')).toBeNull();
  });

  it('closes the results dropdown when clicking outside', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    const target = (W as unknown as WordEntry[])[0];
    await typeAndWaitForResults(input, target[0]);

    expect(document.getElementById('search-results')).not.toBeNull();
    // Combobox dismisses on outside *pointerdown* (floating-ui's "sloppy"
    // mouse mode), not on 'click' — the original hand-rolled listener used
    // 'click', but that's no longer what's actually being listened for.
    act(() => {
      document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('search-results')).toBeNull();
  });
});
