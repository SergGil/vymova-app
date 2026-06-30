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
});
