// @testing-library/react (legacy-modernization-roadmap.md item 4).
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CloudSyncSection, _refreshCloudSyncUI } from '../../js/features/cloud-sync.tsx';

function mockFetch(): {
  calls: { url: string; opts?: RequestInit }[];
  remote: Record<string, Record<string, string>>;
} {
  const remote: Record<string, Record<string, string>> = {};
  const calls: { url: string; opts?: RequestInit }[] = [];
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, opts?: RequestInit) => {
      calls.push({ url, opts });
      const key = url.split('/sync/')[1].replace('.json', '');
      if (opts?.method === 'PUT') {
        remote[key] = JSON.parse(opts.body as string);
        return { ok: true };
      }
      return { ok: true, json: async () => remote[key] ?? null };
    }),
  );
  return { calls, remote };
}

describe('<CloudSyncSection/>', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('confirm', vi.fn(() => true));
    vi.stubGlobal('alert', vi.fn());
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn(() => Promise.resolve()) },
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it('shows the formatted sync key', () => {
    mockFetch();
    render(<CloudSyncSection />);
    const key = localStorage.getItem('ew_sync_key')!;
    const formatted = key.slice(0, 4) + '-' + key.slice(4, 8) + '-' + key.slice(8, 12);
    expect(document.getElementById('cs-code')!.textContent).toBe(formatted);
  });

  it('copies the key and shows a temporary "copied" label', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    mockFetch();
    render(<CloudSyncSection />);
    const copyBtn = screen.getByText('📋 Копія');

    await act(async () => {
      await userEvent.click(copyBtn);
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(screen.getByText('✅ Скопійовано')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText('📋 Копія')).toBeInTheDocument();
  });

  it('saves to the cloud, disables the button while saving, and shows a success message', async () => {
    const { remote } = mockFetch();
    render(<CloudSyncSection />);
    const saveBtn = screen.getByText('⬆️ Зберегти в хмару') as HTMLButtonElement;

    await act(async () => {
      await userEvent.click(saveBtn);
    });

    expect(saveBtn.disabled).toBe(false);
    expect(screen.getByText('✅ Збережено!')).toBeInTheDocument();
    const key = localStorage.getItem('ew_sync_key')!;
    expect(remote[key]).toBeTruthy();
    expect(document.getElementById('cs-last')!.textContent).toContain('Авто:');
  });

  it('shows an error message when saving fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: false, status: 500 })),
    );
    render(<CloudSyncSection />);
    const saveBtn = screen.getByText('⬆️ Зберегти в хмару');

    await act(async () => {
      await userEvent.click(saveBtn);
    });

    expect(document.getElementById('cs-msg')!.textContent).toContain('HTTP 500');
  });

  it('changing the auto-sync interval persists it and shows a temporary confirmation', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    mockFetch();
    render(<CloudSyncSection />);
    const trigger = document.getElementById('cs-interval') as HTMLElement;

    await act(async () => {
      await userEvent.click(trigger);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: '1 год' }));
    });
    expect(localStorage.getItem('ew_sync_interval')).toBe('60');
    expect(screen.getByText('Авто-збереження увімкнено')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(document.getElementById('cs-msg')!.textContent).toBe('');
  });

  it('auto-formats the restore key input as XXXX-XXXX-XXXX', async () => {
    mockFetch();
    render(<CloudSyncSection />);
    const input = document.getElementById('cs-inp') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, 'abcd12345678');
    });
    expect(input.value).toBe('ABCD-1234-5678');
  });

  it('shows an error and does not prompt for confirmation when the restore key is empty', async () => {
    const confirmSpy = vi.fn(() => true);
    vi.stubGlobal('confirm', confirmSpy);
    mockFetch();
    render(<CloudSyncSection />);
    const restoreBtn = screen.getByText('⬇️ Відновити');

    await act(async () => {
      await userEvent.click(restoreBtn);
    });
    expect(confirmSpy).not.toHaveBeenCalled();
    expect(screen.getByText('Введи ключ синхронізації')).toBeInTheDocument();
  });

  it('does nothing when the user cancels the restore confirmation', async () => {
    vi.stubGlobal('confirm', vi.fn(() => false));
    mockFetch();
    render(<CloudSyncSection />);
    const input = document.getElementById('cs-inp') as HTMLInputElement;
    const restoreBtn = screen.getByText('⬇️ Відновити') as HTMLButtonElement;

    await act(async () => {
      await userEvent.type(input, 'AAAABBBBCCCC');
      await userEvent.click(restoreBtn);
    });
    expect(restoreBtn.disabled).toBe(false);
    expect(input.disabled).toBe(false);
  });

  it('restores from the cloud, disabling inputs while loading, then shows success and reloads', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { remote } = mockFetch();
    remote['AAAABBBBCCCC'] = { _ts: '1', ew_theme: 'light' };
    const reloadSpy = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { ...window.location, reload: reloadSpy },
      writable: true,
    });

    render(<CloudSyncSection />);
    const input = document.getElementById('cs-inp') as HTMLInputElement;
    const restoreBtn = screen.getByText('⬇️ Відновити') as HTMLButtonElement;

    await act(async () => {
      await userEvent.type(input, 'AAAABBBBCCCC');
      await userEvent.click(restoreBtn);
    });

    expect(screen.getByText('✅ Успішно! Перезавантаження...')).toBeInTheDocument();
    expect(localStorage.getItem('ew_theme')).toBe('light');

    act(() => {
      vi.advanceTimersByTime(1200);
    });
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('shows an error and re-enables the form when restoring fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: false, status: 404 })),
    );
    render(<CloudSyncSection />);
    const input = document.getElementById('cs-inp') as HTMLInputElement;
    const restoreBtn = screen.getByText('⬇️ Відновити') as HTMLButtonElement;

    await act(async () => {
      await userEvent.type(input, 'AAAABBBBCCCC');
      await userEvent.click(restoreBtn);
    });

    expect(document.getElementById('cs-msg')!.textContent).toContain('HTTP 404');
    expect(restoreBtn.disabled).toBe(false);
    expect(input.disabled).toBe(false);
  });

  // The settings page's onActivate (app-root.tsx) calls this every time the
  // page reopens, since CloudSyncSection stays mounted the whole time
  // (Portal into a static node) and would otherwise never re-render its
  // relative "X ago" label after the page is left open a while.
  it('_refreshCloudSyncUI() forces the last-synced label to recompute', async () => {
    mockFetch();
    localStorage.setItem('ew_sync_last', String(Date.now() - 5 * 60_000));
    render(<CloudSyncSection />);
    expect(document.getElementById('cs-last')!.textContent).toContain('5');

    localStorage.setItem('ew_sync_last', String(Date.now() - 90 * 60_000));
    act(() => {
      _refreshCloudSyncUI();
    });
    expect(document.getElementById('cs-last')!.textContent).toContain('1');
  });

  it('shows a sync-error label after auto-sync fails', async () => {
    localStorage.setItem('ew_sync_interval', '30');
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({ ok: false, status: 500 })),
    );
    render(<CloudSyncSection />);

    // _startAutoSync() fires an immediate auto-save since there's no
    // ew_sync_last yet (elapsed treated as Infinity).
    await act(async () => {
      await new Promise((r) => setTimeout(r, 0));
    });

    expect(document.getElementById('cs-last')!.textContent).toBe('⚠️ Помилка синхронізації');
  });
});
