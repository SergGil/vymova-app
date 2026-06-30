import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setDeckState } from '../../src/deck-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { SearchInline } from '../../js/features/search-inline.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { render, setDeck, setIdx, stopAuto } = vi.hoisted(() => ({
  render: vi.fn(),
  setDeck: vi.fn(),
  setIdx: vi.fn(),
  stopAuto: vi.fn(),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setDeck, setIdx, stopAuto }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SearchInline />);
  });
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

describe('search-inline.tsx SearchInline', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<select id="sel-mode"><option value="en" selected>en</option></select><select id="sel-range"><option value="0">All</option></select>';
    setDeckState((W as unknown as WordEntry[]).slice(0, 5));
    setKnownWords('en', new Set());
    render.mockClear();
    setDeck.mockClear();
    setIdx.mockClear();
    stopAuto.mockClear();
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
    act(() => {
      setInputValue(input, target.slice(0, 3));
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    const results = container.querySelector('#search-results') as HTMLElement;
    expect(results.className).toContain('open');
    expect(results.querySelectorAll('.search-result-item').length).toBeGreaterThan(0);
  });

  it('shows a "no results" message for an unmatched query', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    act(() => {
      setInputValue(input, 'zzzzzzzzzzzz');
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    expect(container.querySelector('.search-no-results')).not.toBeNull();
    expect(container.querySelector('.search-no-results')!.textContent).toBe('Нічого не знайдено');
  });

  it('marks already-known words with the known badge', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setKnownWords('en', new Set([target[0]]));
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    act(() => {
      setInputValue(input, target[0]);
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    const item = container.querySelector('.search-result-item') as HTMLElement;
    expect(item.className).toContain('sr-known');
    expect(item.querySelector('.sr-known-badge')).not.toBeNull();
  });

  it('navigates to a word and resets the input when a result is clicked', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setDeckState([target]);
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    act(() => {
      setInputValue(input, target[0]);
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    const item = container.querySelector('.search-result-item') as HTMLElement;
    act(() => {
      item.click();
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
    act(() => {
      setInputValue(input, target[0]);
    });

    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }),
      );
    });
    const active = container.querySelector('.search-result-item.active');
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
    act(() => {
      setInputValue(input, target[0]);
    });
    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    expect((container.querySelector('#search-results') as HTMLElement).className).toContain('open');
    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
      );
    });
    expect((container.querySelector('#search-results') as HTMLElement).className).not.toContain(
      'open',
    );
  });

  it('closes the results dropdown when clicking outside', async () => {
    const { container } = mount();
    const input = container.querySelector('#search-input') as HTMLInputElement;
    const target = (W as unknown as WordEntry[])[0];
    act(() => {
      setInputValue(input, target[0]);
    });
    await act(async () => {
      await new Promise((r) => setTimeout(r, 220));
    });

    expect((container.querySelector('#search-results') as HTMLElement).className).toContain('open');
    act(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect((container.querySelector('#search-results') as HTMLElement).className).not.toContain(
      'open',
    );
  });
});
