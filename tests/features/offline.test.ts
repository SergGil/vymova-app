import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createElement, act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

function setOnline(value: boolean): void {
  Object.defineProperty(navigator, 'onLine', { value, configurable: true });
}

describe('offline.ts', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    vi.resetModules();
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => { root?.unmount(); });
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  async function mount() {
    const mod = await import('../../js/features/offline.ts');
    // Let i18n.ts's module-level dynamic import of card-engine settle before
    // continuing, so vi.resetModules() in the next test doesn't tear down a
    // module mid-load (which manifests as TDZ errors on later imports).
    await vi.waitFor(() => {});
    root = createRoot(container);
    act(() => { root.render(createElement(mod.OfflineInit)); });
    return mod;
  }

  it('_isOnlineCheck reflects navigator.onLine at load time', async () => {
    setOnline(true);
    const { _isOnlineCheck } = await import('../../js/features/offline.ts');
    expect(_isOnlineCheck()).toBe(true);
  });

  it('_offlineSvg returns an SVG string with offline labels', async () => {
    const { _offlineSvg } = await import('../../js/features/offline.ts');
    const svg = _offlineSvg('anything');
    expect(svg).toContain('<svg');
    expect(svg).toContain('📡');
  });

  it('OfflineInit renders nothing', async () => {
    setOnline(true);
    const mod = await mount();
    expect(mod.OfflineInit).toBeTypeOf('function');
    expect(container.innerHTML).toBe('');
  });

  it('shows a red offline banner when the "offline" event fires', async () => {
    setOnline(true);
    await mount();

    act(() => { window.dispatchEvent(new Event('offline')); });

    const banner = document.getElementById('offline-banner');
    expect(banner).not.toBeNull();
    expect(banner!.style.background).toBe('#c0392b');
  });

  it('shows a green "restored" banner that auto-hides when the "online" event fires', async () => {
    setOnline(true);
    await mount();
    act(() => { window.dispatchEvent(new Event('offline')); });

    act(() => { window.dispatchEvent(new Event('online')); });

    const banner = document.getElementById('offline-banner');
    expect(banner!.style.background).toBe('#27ae60');
    expect(banner!.innerHTML).toContain('Підключення відновлено');

    act(() => { vi.advanceTimersByTime(2500); });
    expect(banner!.style.transform).toBe('translateY(-100%)');
    expect(banner!.style.opacity).toBe('0');
  });

  it('ignores repeated "offline" events while already offline', async () => {
    setOnline(true);
    const { _isOnlineCheck } = await mount();
    act(() => { window.dispatchEvent(new Event('offline')); });
    expect(_isOnlineCheck()).toBe(false);

    const banner = document.getElementById('offline-banner')!;
    banner.style.opacity = '0.5';
    act(() => { window.dispatchEvent(new Event('offline')); });
    expect(banner.style.opacity).toBe('0.5');
  });

  it('shows the offline banner on initial load if already offline', async () => {
    setOnline(false);
    await mount();

    expect(document.getElementById('offline-banner')).toBeNull();
    act(() => { vi.advanceTimersByTime(1000); });
    act(() => { vi.advanceTimersByTime(0); });

    const banner = document.getElementById('offline-banner');
    expect(banner).not.toBeNull();
    expect(banner!.style.background).toBe('#c0392b');
  });
});
