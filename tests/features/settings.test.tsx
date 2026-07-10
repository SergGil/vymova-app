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
      <button id="btn-dontknow"></button>
      <button id="btn-sw" title="off"></button>
      <button id="btn-modes-open"></button>
      <div id="modes-overlay" class="modes-overlay"></div>
      <button id="modes-close"></button>
      <button id="btn-achievements"></button>
      <div id="wword">word</div>
      <div>
        <label class="notif-toggle-wrap">
          <input type="checkbox" id="haptic-toggle" checked>
          <span class="notif-toggle-pill-ui"></span>
        </label>
        <span id="haptic-status">Увімкнено</span>
      </div>
      <div>
        <label class="notif-toggle-wrap">
          <input type="checkbox" id="reduced-motion-toggle">
          <span class="notif-toggle-pill-ui"></span>
        </label>
        <span id="reduced-motion-status">Вимкнено</span>
      </div>
      <div>
        <label class="notif-toggle-wrap">
          <input type="checkbox" id="high-contrast-toggle">
          <span class="notif-toggle-pill-ui"></span>
        </label>
        <span id="high-contrast-status">Вимкнено</span>
      </div>
    `;
    document.body.classList.remove('dark', 'sw', 'reduced-motion', 'high-contrast');
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

  it('vibrates on know/next/dontknow button clicks (haptic feedback)', () => {
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

    act(() => {
      document
        .getElementById('btn-dontknow')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).toHaveBeenCalledWith([40, 30, 40]);
  });

  it('haptic toggle checkbox reads initial state from localStorage', () => {
    localStorage.setItem('ew_haptic', '0');
    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
  });

  it('haptic toggle checkbox defaults to enabled when localStorage is unset', () => {
    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(true);
  });

  it('saving haptic toggle off persists to localStorage and suppresses vibration', () => {
    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    const vibrate = navigator.vibrate as ReturnType<typeof vi.fn>;
    act(() => {
      toggle.checked = false;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_haptic')).toBe('0');

    vibrate.mockClear();
    act(() => {
      document
        .getElementById('btn-know')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).not.toHaveBeenCalled();
  });

  it('turning haptic toggle back on re-enables vibration', () => {
    localStorage.setItem('ew_haptic', '0');
    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    const vibrate = navigator.vibrate as ReturnType<typeof vi.fn>;
    act(() => {
      toggle.checked = true;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_haptic')).toBe('1');

    act(() => {
      document
        .getElementById('btn-know')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).toHaveBeenCalledWith(50);
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

  it('reduced-motion toggle defaults to off and applies the body class when checked', () => {
    mount();
    const toggle = document.getElementById('reduced-motion-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
    expect(document.body.classList.contains('reduced-motion')).toBe(false);

    act(() => {
      toggle.checked = true;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_reduced_motion')).toBe('1');
    expect(document.body.classList.contains('reduced-motion')).toBe(true);

    act(() => {
      toggle.checked = false;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_reduced_motion')).toBe('0');
    expect(document.body.classList.contains('reduced-motion')).toBe(false);
  });

  it('reduced-motion toggle restores an explicit "on" from localStorage on mount', () => {
    localStorage.setItem('ew_reduced_motion', '1');
    mount();
    const toggle = document.getElementById('reduced-motion-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(true);
    expect(document.body.classList.contains('reduced-motion')).toBe(true);
  });

  it('high-contrast toggle defaults to off and applies the body class when checked', () => {
    mount();
    const toggle = document.getElementById('high-contrast-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(false);
    expect(document.body.classList.contains('high-contrast')).toBe(false);

    act(() => {
      toggle.checked = true;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_high_contrast')).toBe('1');
    expect(document.body.classList.contains('high-contrast')).toBe(true);

    act(() => {
      toggle.checked = false;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(localStorage.getItem('ew_high_contrast')).toBe('0');
    expect(document.body.classList.contains('high-contrast')).toBe(false);
  });

  it('high-contrast toggle restores "on" from localStorage on mount', () => {
    localStorage.setItem('ew_high_contrast', '1');
    mount();
    const toggle = document.getElementById('high-contrast-toggle') as HTMLInputElement;
    expect(toggle.checked).toBe(true);
    expect(document.body.classList.contains('high-contrast')).toBe(true);
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
