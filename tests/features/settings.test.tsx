import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SettingsInit } from '../../js/features/settings/settings.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { updateSrsUI, loadWikiImage, openPage, refreshGameBarLevel } = vi.hoisted(() => ({
  updateSrsUI: vi.fn(),
  loadWikiImage: vi.fn(),
  openPage: vi.fn(),
  refreshGameBarLevel: vi.fn(),
}));
vi.mock('../../js/core/srs.ts', () => ({ updateSrsUI }));
vi.mock('../../js/core/images.ts', () => ({ _imgCache: {}, loadWikiImage }));
vi.mock('../../js/features/sidebar/sidebar.tsx', () => ({ openPage }));
vi.mock('../../js/features/game/game-bar-level.tsx', () => ({ refreshGameBarLevel }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SettingsInit />);
  });
  return { container, root };
}

// The checked-state/status-label/localStorage-persistence behavior of the
// haptic/SRS-priority/reduced-motion/high-contrast toggles has moved to
// dedicated React components (settings-toggles.tsx, see
// tests/features/settings-toggles.test.tsx) — SettingsInit itself only
// keeps the haptic section's touch-device visibility logic (which needs a
// #haptic-toggle element present to find its containing .settings-section,
// regardless of what renders that element in the real app).
describe('settings.tsx SettingsInit', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="btn-know"></button>
      <button id="btn-next"></button>
      <button id="btn-dontknow"></button>
      <button id="btn-achievements"></button>
      <div id="wword">word</div>
      <div class="settings-section">
        <input type="checkbox" id="haptic-toggle" />
        <p id="haptic-ios-note" style="display:none"></p>
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

  it('suppresses vibration once ew_haptic is turned off in localStorage', () => {
    mount();
    const vibrate = navigator.vibrate as ReturnType<typeof vi.fn>;
    localStorage.setItem('ew_haptic', '0');
    act(() => {
      document
        .getElementById('btn-know')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(vibrate).not.toHaveBeenCalled();
  });

  it('disables the haptic checkbox and shows the iOS note on a touch device without the Vibration API', () => {
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 1, configurable: true });
    const originalVibrate = Object.getOwnPropertyDescriptor(navigator, 'vibrate');
    // 'vibrate' in navigator must read false — deleting the property (rather
    // than setting it to undefined, which would still make `in` true) is
    // what the section-visibility branch actually checks for.
    // @ts-expect-error -- test-only removal to simulate iOS's missing API
    delete navigator.vibrate;

    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    const section = toggle.closest('.settings-section') as HTMLElement;
    const iosNote = document.getElementById('haptic-ios-note') as HTMLElement;
    expect(toggle.disabled).toBe(true);
    expect(section.style.display).not.toBe('none');
    expect(iosNote.style.display).toBe('');

    if (originalVibrate) Object.defineProperty(navigator, 'vibrate', originalVibrate);
  });

  it('hides the whole haptic section on a non-touch device', () => {
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 0, configurable: true });
    mount();
    const toggle = document.getElementById('haptic-toggle') as HTMLInputElement;
    const section = toggle.closest('.settings-section') as HTMLElement;
    expect(section.style.display).toBe('none');
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
