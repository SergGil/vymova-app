import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { SwUpdateBanner } from '../../js/core/sw-update.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<SwUpdateBanner />);
  });
  return { container, root };
}

describe('sw-update.tsx SwUpdateBanner', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    delete (window as { __swUpdateAvailable?: boolean }).__swUpdateAvailable;
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
    delete (window as { __swUpdateAvailable?: boolean }).__swUpdateAvailable;
    vi.unstubAllGlobals();
  });

  it('renders nothing when no update has been signalled', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#sw-update-banner')).toBeNull();
  });

  it('shows the banner once ew-sw-update-available fires', () => {
    const { container, root } = mount();
    roots.push(root);

    act(() => {
      window.dispatchEvent(new Event('ew-sw-update-available'));
    });

    expect(container.querySelector('#sw-update-banner')).not.toBeNull();
    expect(container.querySelector('strong')!.textContent).toBe('Доступна нова версія');
  });

  it('shows immediately if window.__swUpdateAvailable was already set before mount', () => {
    (window as { __swUpdateAvailable?: boolean }).__swUpdateAvailable = true;
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#sw-update-banner')).not.toBeNull();
  });

  it('clicking the close button hides the banner', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      window.dispatchEvent(new Event('ew-sw-update-available'));
    });

    const closeBtn = container.querySelector('.sw-update-close') as HTMLButtonElement;
    act(() => {
      closeBtn.click();
    });
    expect(container.querySelector('#sw-update-banner')).toBeNull();
  });

  it('clicking reload posts SKIP_WAITING to the waiting worker and reloads on controllerchange', async () => {
    const postMessage = vi.fn();
    const controllerChangeListeners: Array<() => void> = [];
    const reload = vi.fn();

    vi.stubGlobal('navigator', {
      ...navigator,
      serviceWorker: {
        getRegistration: vi.fn().mockResolvedValue({ waiting: { postMessage } }),
        addEventListener: (event: string, cb: () => void) => {
          if (event === 'controllerchange') controllerChangeListeners.push(cb);
        },
      },
    });
    vi.stubGlobal('location', { ...window.location, reload });

    const { container, root } = mount();
    roots.push(root);
    act(() => {
      window.dispatchEvent(new Event('ew-sw-update-available'));
    });

    const reloadBtn = container.querySelector('.sw-update-btn') as HTMLButtonElement;
    await act(async () => {
      reloadBtn.click();
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(postMessage).toHaveBeenCalledWith({ type: 'SKIP_WAITING' });
    expect(reload).not.toHaveBeenCalled();

    controllerChangeListeners.forEach((cb) => cb());
    expect(reload).toHaveBeenCalledTimes(1);

    // A second controllerchange must not trigger a second reload.
    controllerChangeListeners.forEach((cb) => cb());
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('falls back to a plain reload when there is no waiting worker', async () => {
    const reload = vi.fn();
    vi.stubGlobal('navigator', {
      ...navigator,
      serviceWorker: {
        getRegistration: vi.fn().mockResolvedValue({ waiting: null }),
        addEventListener: vi.fn(),
      },
    });
    vi.stubGlobal('location', { ...window.location, reload });

    const { container, root } = mount();
    roots.push(root);
    act(() => {
      window.dispatchEvent(new Event('ew-sw-update-available'));
    });

    const reloadBtn = container.querySelector('.sw-update-btn') as HTMLButtonElement;
    await act(async () => {
      reloadBtn.click();
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(reload).toHaveBeenCalledTimes(1);
  });
});
