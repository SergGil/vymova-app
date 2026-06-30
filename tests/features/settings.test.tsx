import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SettingsInit } from '../../js/features/settings.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { updateSrsUI, loadWikiImage, openPage, refreshGameBarLevel } = vi.hoisted(() => ({
  updateSrsUI: vi.fn(),
  loadWikiImage: vi.fn(),
  openPage: vi.fn(),
  refreshGameBarLevel: vi.fn(),
}));
vi.mock('../../js/core/srs.ts', () => ({ updateSrsUI }));
vi.mock('../../js/core/images.ts', () => ({ _imgCache: {}, loadWikiImage }));
vi.mock('../../js/features/sidebar.tsx', () => ({ openPage }));
vi.mock('../../js/features/game-bar-level.tsx', () => ({ refreshGameBarLevel }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SettingsInit />);
  });
  return { container, root };
}

describe('settings.tsx SettingsInit', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="btn-know"></button>
      <button id="btn-next"></button>
      <button id="btn-sw" title="off"></button>
      <button id="btn-modes-open"></button>
      <div id="modes-overlay" class="modes-overlay"></div>
      <button id="modes-close"></button>
      <button id="btn-achievements"></button>
      <div id="wword">word</div>
    `;
    document.body.classList.remove('dark', 'sw');
    localStorage.clear();
    updateSrsUI.mockClear();
    loadWikiImage.mockClear();
    openPage.mockClear();
    refreshGameBarLevel.mockClear();
    (navigator as unknown as { vibrate: ReturnType<typeof vi.fn> }).vibrate = vi.fn();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('triggers initial renders on mount', () => {
    mount();
    expect(refreshGameBarLevel).toHaveBeenCalled();
    expect(updateSrsUI).toHaveBeenCalled();
  });

  it('vibrates on know/next button clicks (haptic feedback)', () => {
    mount();
    const vibrate = navigator.vibrate as ReturnType<typeof vi.fn>;
    act(() => {
      document
        .getElementById('btn-know')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).toHaveBeenCalledWith(50);

    act(() => {
      document
        .getElementById('btn-next')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).toHaveBeenCalledWith([80, 40, 80]);
  });

  it('toggles Star Wars mode and persists the choice', () => {
    mount();
    const btnSW = document.getElementById('btn-sw') as HTMLButtonElement;
    act(() => {
      btnSW.click();
    });
    expect(document.body.classList.contains('sw')).toBe(true);
    expect(localStorage.getItem('ew_sw')).toBe('1');

    act(() => {
      btnSW.click();
    });
    expect(document.body.classList.contains('sw')).toBe(false);
    expect(localStorage.getItem('ew_sw')).toBe('0');
  });

  it('restores Star Wars mode from localStorage on mount', () => {
    localStorage.setItem('ew_sw', '1');
    mount();
    expect(document.body.classList.contains('sw')).toBe(true);
  });

  it('opens and closes the modes modal', () => {
    mount();
    const openBtn = document.getElementById('btn-modes-open') as HTMLButtonElement;
    const overlay = document.getElementById('modes-overlay') as HTMLElement;
    act(() => {
      openBtn.click();
    });
    expect(overlay.className).toBe('modes-overlay open');

    const closeBtn = document.getElementById('modes-close') as HTMLButtonElement;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.className).toBe('modes-overlay');
  });

  it('opens the achievements page when the achievements button is clicked', () => {
    mount();
    act(() => {
      document
        .getElementById('btn-achievements')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(openPage).toHaveBeenCalledWith('ach');
  });

  it('removes listeners on unmount', () => {
    const { root } = mount();
    act(() => {
      root.unmount();
    });

    const vibrate = navigator.vibrate as ReturnType<typeof vi.fn>;
    vibrate.mockClear();
    act(() => {
      document
        .getElementById('btn-know')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).not.toHaveBeenCalled();
  });
});
