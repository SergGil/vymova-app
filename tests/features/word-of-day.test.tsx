import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.ts';
import { WordOfDay } from '../../js/features/word-of-day.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { closePage, render, setIdx, loadWikiImage } = vi.hoisted(() => ({
  closePage: vi.fn(),
  render: vi.fn(),
  setIdx: vi.fn(),
  loadWikiImage: vi.fn((_word: string, cb: (w: string, url: string | null) => void) => cb(_word, null)),
}));
vi.mock('../../js/features/sidebar.tsx', () => ({ closePage }));
vi.mock('../../js/core/card-engine.ts', () => ({ render, setIdx }));
vi.mock('../../js/core/images.ts', () => ({ loadWikiImage }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<WordOfDay />); });
  return { container, root };
}

describe('word-of-day.tsx WordOfDay', () => {
  beforeEach(() => {
    document.body.innerHTML = '<select id="sel-mode"><option value="en" selected>en</option></select>';
    state._mode = 'en';
    state.deck = [];
    closePage.mockClear();
    render.mockClear();
    setIdx.mockClear();
    loadWikiImage.mockClear();
    loadWikiImage.mockImplementation((_word: string, cb: (w: string, url: string | null) => void) => cb(_word, null));
  });

  it('renders a word-of-the-day box with a label and a word', () => {
    const { container } = mount();
    expect(container.querySelector('.wotd-lbl')!.textContent).toBe('📖 Слово дня');
    expect(container.querySelector('.wotd-word')!.textContent).toBeTruthy();
    expect(container.querySelector('.wotd-box')!.getAttribute('title')).toBe('Слово дня — натисни щоб перейти');
  });

  it('shows a placeholder (no-img class) when the image fails to load', () => {
    const { container } = mount();
    expect(container.querySelector('.wotd-img-wrap')!.className).toContain('wotd-no-img');
    expect(container.querySelector('img')).toBeNull();
  });

  it('shows an image when loadWikiImage resolves a URL', () => {
    loadWikiImage.mockImplementation((word: string, cb: (w: string, url: string | null) => void) => cb(word, 'https://example.com/img.jpg'));
    const { container } = mount();
    const img = container.querySelector('img') as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.src).toBe('https://example.com/img.jpg');
    expect(container.querySelector('.wotd-img-wrap')!.className).not.toContain('wotd-no-img');
  });

  it('falls back to the no-img placeholder if the image element errors', () => {
    loadWikiImage.mockImplementation((word: string, cb: (w: string, url: string | null) => void) => cb(word, 'https://example.com/broken.jpg'));
    const { container } = mount();
    const img = container.querySelector('img') as HTMLImageElement;
    act(() => { img.dispatchEvent(new Event('error')); });
    expect(container.querySelector('.wotd-img-wrap')!.className).toContain('wotd-no-img');
  });

  it('navigates to the word, closes the sidebar and re-renders when clicked', () => {
    const { container } = mount();
    const box = container.querySelector('.wotd-box') as HTMLElement;
    act(() => { box.click(); });

    expect(state.deck.length).toBe(1);
    expect(setIdx).toHaveBeenCalledWith(0);
    expect(closePage).toHaveBeenCalled();
    expect(render).toHaveBeenCalled();
  });

  it('jumps to the existing deck position instead of duplicating an already-present word', () => {
    const { container } = mount();
    const word = container.querySelector('.wotd-word')!.textContent!;
    const box = container.querySelector('.wotd-box') as HTMLElement;
    act(() => { box.click(); });
    const lenAfterFirst = state.deck.length;

    act(() => { box.click(); });
    expect(state.deck.length).toBe(lenAfterFirst);
    void word;
  });

  it('updates the displayed word when the mode select changes', () => {
    const { container } = mount();
    const sel = document.getElementById('sel-mode') as HTMLSelectElement;
    sel.innerHTML += '<option value="ua">ua</option>';
    sel.value = 'ua';
    act(() => { sel.dispatchEvent(new Event('change')); });
    expect(container.querySelector('.wotd-word')!.textContent).toBeTruthy();
  });
});
