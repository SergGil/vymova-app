import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { PwaBanner } from '../../js/core/pwa.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<PwaBanner />); });
  return { container, root };
}

describe('pwa.tsx PwaBanner', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('is hidden initially', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#pwa-banner')!.className).toBe('');
  });

  it('shows the install banner after beforeinstallprompt fires (and not dismissed)', () => {
    const { container, root } = mount();
    roots.push(root);

    const evt = Object.assign(new Event('beforeinstallprompt'), {
      preventDefault: vi.fn(),
      prompt: vi.fn(),
      userChoice: Promise.resolve({ outcome: 'accepted' }),
    });
    act(() => { window.dispatchEvent(evt); });
    act(() => { vi.advanceTimersByTime(2000); });

    expect(container.querySelector('#pwa-banner')!.className).toBe('show');
    expect(container.querySelector('strong')!.textContent).toBe('Встанови як додаток');
  });

  it('does not show the banner if previously dismissed', () => {
    localStorage.setItem('ew_pwa_dismissed', '1');
    const { container, root } = mount();
    roots.push(root);

    const evt = Object.assign(new Event('beforeinstallprompt'), {
      preventDefault: vi.fn(),
      prompt: vi.fn(),
      userChoice: Promise.resolve({ outcome: 'accepted' }),
    });
    act(() => { window.dispatchEvent(evt); });
    act(() => { vi.advanceTimersByTime(2000); });

    expect(container.querySelector('#pwa-banner')!.className).toBe('');
  });

  it('clicking the install button calls prompt() and hides the banner', () => {
    const { container, root } = mount();
    roots.push(root);

    const userChoice = Promise.resolve({ outcome: 'accepted' });
    const evt = Object.assign(new Event('beforeinstallprompt'), {
      preventDefault: vi.fn(),
      prompt: vi.fn(),
      userChoice,
    });
    act(() => { window.dispatchEvent(evt); });
    act(() => { vi.advanceTimersByTime(2000); });

    const installBtn = container.querySelector('#pwa-install') as HTMLButtonElement;
    act(() => { installBtn.click(); });
    expect(container.querySelector('#pwa-banner')!.className).toBe('');
    expect(evt.prompt).toHaveBeenCalled();
  });

  it('clicking the close button hides and marks as dismissed', () => {
    const { container, root } = mount();
    roots.push(root);

    const evt = Object.assign(new Event('beforeinstallprompt'), {
      preventDefault: vi.fn(),
      prompt: vi.fn(),
      userChoice: Promise.resolve({ outcome: 'accepted' }),
    });
    act(() => { window.dispatchEvent(evt); });
    act(() => { vi.advanceTimersByTime(2000); });

    const closeBtn = container.querySelector('#pwa-close') as HTMLButtonElement;
    act(() => { closeBtn.click(); });
    expect(container.querySelector('#pwa-banner')!.className).toBe('');
    expect(localStorage.getItem('ew_pwa_dismissed')).toBe('1');
  });

  it('shows the iOS install hint on iOS devices', () => {
    vi.stubGlobal('navigator', {
      ...navigator,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
      standalone: false,
    });

    const { container, root } = mount();
    roots.push(root);
    act(() => { vi.advanceTimersByTime(2000); });

    expect(container.querySelector('#pwa-banner')!.className).toBe('show');
    expect(container.querySelector('.pwa-text')!.innerHTML).toContain('Додай на головний екран');
    expect(container.querySelector('#pwa-install')).toBeNull();
  });
});
