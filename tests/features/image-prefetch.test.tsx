import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ImagePrefetchSettings } from '../../js/features/image-prefetch.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { loadWikiImage, imgCache, getPixabayKey, resetImgCache, showImgClearConfirm } = vi.hoisted(() => ({
  loadWikiImage: vi.fn((_word: string, cb: () => void) => cb()),
  imgCache: {} as Record<string, string | null>,
  getPixabayKey: vi.fn(() => ''),
  resetImgCache: vi.fn(),
  showImgClearConfirm: vi.fn((cb: () => void) => cb()),
}));
vi.mock('../../js/core/images.ts', () => ({
  loadWikiImage,
  _imgCache: imgCache,
  _getPixabayKey: getPixabayKey,
  resetImgCache,
}));
vi.mock('../../js/features/sidebar.tsx', () => ({ showImgClearConfirm }));

let roots: Root[] = [];

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ImagePrefetchSettings />); });
  roots.push(root);
  return { container, root };
}

describe('image-prefetch.tsx ImagePrefetchSettings', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    for (const k of Object.keys(imgCache)) delete imgCache[k];
    loadWikiImage.mockClear();
    getPixabayKey.mockClear().mockReturnValue('');
    resetImgCache.mockClear();
    showImgClearConfirm.mockClear();
  });

  // 'starts prefetching' leaves a recursive setTimeout(fetchNext, ...) chain
  // running via the mocked loadWikiImage's immediate callback — without
  // unmounting (which clears timerRef via the component's cleanup), it keeps
  // firing in the background for the rest of the test run.
  afterEach(() => {
    roots.forEach(r => act(() => { r.unmount(); }));
    roots = [];
  });

  it('shows the "ready to start" status when the cache is empty', () => {
    const { container } = mount();
    expect(container.textContent).toContain('Готово до завантаження');
    expect(container.querySelector('#pixabay-key-input')).not.toBeNull();
  });

  it('shows the pixabay "no key" status by default', () => {
    const { container } = mount();
    expect(container.textContent).toContain('Ключ не вказано');
  });

  it('shows the pixabay "key saved" status when a key is configured', () => {
    getPixabayKey.mockReturnValue('abc123');
    const { container } = mount();
    expect(container.textContent).toContain('Ключ збережено');
  });

  it('starts prefetching when the start button is clicked', () => {
    const { container } = mount();
    const startBtn = Array.from(container.querySelectorAll('button')).find(b => b.textContent?.includes('Завантажити')) as HTMLButtonElement;
    expect(startBtn).toBeTruthy();
    act(() => { startBtn.click(); });
    expect(loadWikiImage).toHaveBeenCalled();
  });

  it('saves a valid pixabay key and resets the image cache', () => {
    const { container } = mount();
    const input = container.querySelector('#pixabay-key-input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
    act(() => {
      nativeValueSetter.call(input, 'my-new-key');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    const saveBtn = Array.from(container.querySelectorAll('button')).find(b => b.textContent === 'Зберегти') as HTMLButtonElement;
    act(() => { saveBtn.click(); });

    expect(localStorage.getItem('ew_pixabay_key')).toBe('my-new-key');
    expect(resetImgCache).toHaveBeenCalled();
  });

  it('clears the cache via the clear button after confirmation', () => {
    imgCache['abandon'] = 'http://example.com/img.jpg';
    const { container } = mount();
    const clearBtn = Array.from(container.querySelectorAll('button')).find(b => b.textContent?.includes('Очистити')) as HTMLButtonElement;
    act(() => { clearBtn.click(); });

    expect(showImgClearConfirm).toHaveBeenCalled();
    expect(resetImgCache).toHaveBeenCalled();
  });
});
