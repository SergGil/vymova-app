import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { renderCardState, setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';
import { CardImage } from '../../js/features/card-image.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getIllus } = vi.hoisted(() => ({ getIllus: vi.fn(() => '') }));
vi.mock('../../data/illustrations.js', () => ({ getIllus }));

const { loadWikiImage, _imgCache } = vi.hoisted(() => ({
  loadWikiImage: vi.fn(),
  _imgCache: {} as Record<string, string | null>,
}));
vi.mock('../../js/core/images.ts', () => ({ loadWikiImage, _imgCache, _idb: null }));

const { isOnlineCheck, offlineSvg } = vi.hoisted(() => ({
  isOnlineCheck: vi.fn(() => true),
  offlineSvg: vi.fn(() => ''),
}));
vi.mock('../../js/features/offline.ts', () => ({
  _isOnlineCheck: isOnlineCheck,
  _offlineSvg: offlineSvg,
}));

const word: WordEntry = ['hello', 'привіт', '', '', '', ''] as unknown as WordEntry;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<CardImage />);
  });
  return { container, root };
}

describe('CardImage', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    for (const k of Object.keys(_imgCache)) delete _imgCache[k];
    isOnlineCheck.mockReturnValue(true);
    setDeckState([word]);
    renderCardState(word, 'en');
  });

  it('shows the local illustration fallback when no cached image exists', () => {
    getIllus.mockReturnValue('<svg>icon</svg>');
    const { container } = mount();
    const illus = container.querySelector('#illus') as HTMLElement;
    expect(illus.innerHTML).toBe('<svg>icon</svg>');
    expect(illus.style.display).toBe('');
  });

  it('shows the offline placeholder when offline and no illustration exists', () => {
    getIllus.mockReturnValue('');
    isOnlineCheck.mockReturnValue(false);
    offlineSvg.mockReturnValue('<svg>offline</svg>');
    const { container } = mount();
    const illus = container.querySelector('#illus') as HTMLElement;
    expect(illus.innerHTML).toBe('<svg>offline</svg>');
  });

  it('renders the cached image when present', () => {
    _imgCache[word[0]] = 'https://example.com/img.jpg';
    const { container } = mount();
    const illus = container.querySelector('#illus') as HTMLElement;
    expect(illus.querySelector('img')?.src).toBe('https://example.com/img.jpg');
  });

  it('requests a fresh image when nothing is cached or local', () => {
    getIllus.mockReturnValue('');
    mount();
    expect(loadWikiImage).toHaveBeenCalledWith(word[0], expect.any(Function));
  });

  it('does not request a fresh image when the cache already holds a negative (previously-not-found) result', () => {
    getIllus.mockReturnValue('');
    _imgCache[word[0]] = null;
    mount();
    expect(loadWikiImage).not.toHaveBeenCalled();
  });

  // A broken/placeholder cached image (Pixabay serves HTTP 200 with a tiny
  // dark placeholder once its URL has expired) clears the cache entry and
  // re-fetches via loadWikiImage — the "retry" validation path.
  it('clears the cache and re-fetches when the cached image is too small on load', () => {
    _imgCache[word[0]] = 'https://example.com/stale.jpg';
    getIllus.mockReturnValue('<svg>local</svg>');
    const { container } = mount();
    const img = container.querySelector('img') as HTMLImageElement;
    Object.defineProperty(img, 'naturalWidth', { value: 2, configurable: true });
    Object.defineProperty(img, 'naturalHeight', { value: 2, configurable: true });

    act(() => {
      img.dispatchEvent(new Event('load'));
    });

    expect(_imgCache[word[0]]).toBeUndefined();
    const illus = container.querySelector('#illus') as HTMLElement;
    expect(illus.innerHTML).toBe('<svg>local</svg>');
    expect(loadWikiImage).toHaveBeenCalledWith(word[0], expect.any(Function));
  });

  it('clears the cache and re-fetches when the cached image errors', () => {
    _imgCache[word[0]] = 'https://example.com/broken.jpg';
    getIllus.mockReturnValue('');
    const { container } = mount();
    const img = container.querySelector('img') as HTMLImageElement;

    act(() => {
      img.dispatchEvent(new Event('error'));
    });

    expect(_imgCache[word[0]]).toBeUndefined();
    const illus = container.querySelector('#illus') as HTMLElement;
    expect(illus.style.display).toBe('none');
    expect(loadWikiImage).toHaveBeenCalledWith(word[0], expect.any(Function));
  });

  it('shows the re-fetched image after a retry, and hides (without looping) if that one also fails', () => {
    _imgCache[word[0]] = 'https://example.com/broken.jpg';
    getIllus.mockReturnValue('');
    loadWikiImage.mockImplementation((w: string, cb: (w: string, u: string | null) => void) => {
      cb(w, 'https://example.com/fresh.jpg');
    });
    const { container } = mount();
    const firstImg = container.querySelector('img') as HTMLImageElement;
    act(() => {
      firstImg.dispatchEvent(new Event('error'));
    });

    const retriedImg = container.querySelector('img') as HTMLImageElement;
    expect(retriedImg.src).toBe('https://example.com/fresh.jpg');

    loadWikiImage.mockClear();
    act(() => {
      retriedImg.dispatchEvent(new Event('error'));
    });

    // hide-only: hides on failure, but does NOT trigger another retry loop.
    expect(container.querySelector('img')).toBeNull();
    expect(container.querySelector('#illus')!.style.display).toBe('none');
    expect(loadWikiImage).not.toHaveBeenCalled();
  });

  it('ignores a stale loadWikiImage callback for a word the user has already navigated away from', () => {
    getIllus.mockReturnValue('');
    let capturedCallback: ((w: string, u: string | null) => void) | undefined;
    loadWikiImage.mockImplementation((w: string, cb: (w: string, u: string | null) => void) => {
      capturedCallback = cb;
    });
    const { container } = mount();

    const otherWord: WordEntry = ['bye', 'бувай', '', '', '', ''] as unknown as WordEntry;
    act(() => {
      setDeckState([otherWord]);
      renderCardState(otherWord, 'en');
    });

    act(() => {
      capturedCallback?.(word[0], 'https://example.com/late.jpg');
    });

    expect(container.querySelector('img')).toBeNull();
  });
});
