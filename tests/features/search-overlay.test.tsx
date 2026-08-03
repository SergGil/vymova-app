import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { SearchOverlay } from '../../js/features/search/search-overlay.tsx';
import { ensureLangTableLoaded } from '../../js/features/mode/mode-utils.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { render, setIdx, openWordDetail } = vi.hoisted(() => ({
  render: vi.fn(),
  setIdx: vi.fn(),
  openWordDetail: vi.fn(),
}));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setIdx }));
vi.mock('../../js/features/word-data/word-detail-trigger.ts', () => ({ openWordDetail }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SearchOverlay />);
  });
  return { container, root };
}

async function wait(ms = 150): Promise<void> {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms));
  });
}

describe('search-overlay.tsx SearchOverlay', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<button id="btn-search"></button><select id="sel-range"><option value="0">All</option><option value="srs">SRS</option></select>';
    setDeckState([]);
    render.mockClear();
    setIdx.mockClear();
    openWordDetail.mockClear();
  });

  it('renders nothing by default', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('opens when #btn-search is clicked', () => {
    mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.querySelector('input')).not.toBeNull();
  });

  it('opens on Ctrl+F when not focused in an input', () => {
    mount();
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'f', ctrlKey: true, bubbles: true, cancelable: true }),
      );
    });
    expect(document.querySelector('input')).not.toBeNull();
  });

  it('closes on Escape', () => {
    const { container } = mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.querySelector('input')).not.toBeNull();

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
      );
    });
    expect(container.innerHTML).toBe('');
  });

  it('shows search results matching the query after debounce', async () => {
    const target = (W as unknown as WordEntry[])[0];
    mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const input = document.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, target[0].slice(0, 4));
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    await wait();
    expect(document.querySelectorAll('.search-row').length).toBeGreaterThan(0);
  });

  it('shows "no results" for an unmatched query', async () => {
    mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const input = document.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'zzzzzzzzzznotfound');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    await wait();
    expect(document.body.textContent).toContain('Нічого не знайдено');
  });

  it('opens the word detail when a result row is clicked', async () => {
    const target = (W as unknown as WordEntry[])[0];
    const { container } = mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const input = document.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, target[0]);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await wait();

    const row = document.querySelector('.search-row') as HTMLElement;
    act(() => {
      row.click();
    });

    expect(openWordDetail).toHaveBeenCalled();
    expect(container.innerHTML).toBe('');
  });

  it('navigates to the card when the "in deck" badge is clicked for a word already in the deck', async () => {
    const target = (W as unknown as WordEntry[])[0];
    setDeckState([target]);
    const { container } = mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const input = document.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, target[0]);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await wait();

    const badge = document.querySelector('.sr-goto-badge') as HTMLElement;
    expect(badge.textContent).toContain('у колоді');
    act(() => {
      badge.click();
    });

    expect(setIdx).toHaveBeenCalledWith(0);
    expect(render).toHaveBeenCalled();
    expect(container.innerHTML).toBe('');
  });

  it('searches and displays results in the current learn language, not just EN/UA', async () => {
    localStorage.setItem('ew_learn_lang', 'es');
    await ensureLangTableLoaded('es');
    mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const input = document.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'abandonar');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    await wait();
    const row = document.querySelector('.search-row') as HTMLElement;
    expect(row).not.toBeNull();
    expect(row.textContent).toContain('abandonar');
    localStorage.removeItem('ew_learn_lang');
  });

  it('closes when clicking the backdrop', () => {
    const { container } = mount();
    act(() => {
      document
        .getElementById('btn-search')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const backdrop = document.getElementById('search-overlay-backdrop') as HTMLElement;
    act(() => {
      backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.innerHTML).toBe('');
  });
});
