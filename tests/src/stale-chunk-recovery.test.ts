import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isStaleChunkError, initStaleChunkRecovery } from '../../src/stale-chunk-recovery.ts';

describe('isStaleChunkError', () => {
  it('matches the Vite dynamic-import-404 error message', () => {
    expect(isStaleChunkError('Failed to fetch dynamically imported module: https://x/y.js')).toBe(
      true,
    );
  });

  it('matches the Firefox-flavored variant', () => {
    expect(isStaleChunkError('error loading dynamically imported module: https://x/y.js')).toBe(
      true,
    );
  });

  it('does not match an unrelated error', () => {
    expect(isStaleChunkError('TypeError: cannot read property of undefined')).toBe(false);
  });
});

describe('initStaleChunkRecovery', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('reloads once when vite:preloadError fires', () => {
    const reload = vi.fn();
    const win = new EventTarget() as unknown as Window;
    initStaleChunkRecovery(win, reload);
    win.dispatchEvent(new Event('vite:preloadError'));
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('reloads once when an unhandledrejection matches the stale-chunk message', () => {
    const reload = vi.fn();
    const win = new EventTarget() as unknown as Window;
    initStaleChunkRecovery(win, reload);
    const event = new Event('unhandledrejection') as unknown as {
      reason: { message: string };
    };
    (event as unknown as Event & { reason: unknown }).reason = {
      message: 'Failed to fetch dynamically imported module: https://x/y.js',
    };
    win.dispatchEvent(event as unknown as Event);
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it('ignores an unrelated unhandledrejection', () => {
    const reload = vi.fn();
    const win = new EventTarget() as unknown as Window;
    initStaleChunkRecovery(win, reload);
    const event = new Event('unhandledrejection') as unknown as Event & {
      reason: unknown;
    };
    event.reason = { message: 'some other failure' };
    win.dispatchEvent(event);
    expect(reload).not.toHaveBeenCalled();
  });

  it('only reloads once per session even if the error fires again', () => {
    const reload = vi.fn();
    const win = new EventTarget() as unknown as Window;
    initStaleChunkRecovery(win, reload);
    win.dispatchEvent(new Event('vite:preloadError'));
    win.dispatchEvent(new Event('vite:preloadError'));
    expect(reload).toHaveBeenCalledTimes(1);
  });
});
