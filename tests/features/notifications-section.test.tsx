import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationsSection } from '../../js/features/notifications.tsx';

// full-react-migration-roadmap.md Phase 6: the permission button used to be
// a static <button onclick="window.requestNotifPermission && ...">, but
// nothing in the codebase ever assigned window.requestNotifPermission —
// clicking it was a silent no-op. NotificationsSection now wires it with a
// real onClick calling the module's own requestNotifPermission() directly.
class FakeNotification {
  static permission: NotificationPermission = 'default';
  static requestPermission = vi.fn().mockResolvedValue('granted');
  constructor(
    public title: string,
    public opts: unknown,
  ) {}
}

describe('<NotificationsSection/>', () => {
  beforeEach(() => {
    localStorage.clear();
    FakeNotification.permission = 'default';
    FakeNotification.requestPermission = vi.fn().mockResolvedValue('granted');
    vi.stubGlobal('Notification', FakeNotification);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the toggle, status, and permission button, with the time-picker row hidden by default', () => {
    render(<NotificationsSection />);
    expect(document.getElementById('notif-toggle')).not.toBeNull();
    expect(document.getElementById('notif-status')).not.toBeNull();
    expect(document.getElementById('notif-allow-btn')).not.toBeNull();
    // Permission is 'default' and ew_notif_enabled is unset — the time row
    // (and its hour/minute Selects) only render once notifications are
    // actually on (enabled && granted).
    expect(document.getElementById('notif-time-row')).toBeNull();
  });

  it('shows the time-picker row (with hour/minute selects) once enabled and granted', () => {
    FakeNotification.permission = 'granted';
    localStorage.setItem('ew_notif_enabled', '1');
    render(<NotificationsSection />);
    expect(document.getElementById('notif-time-row')).not.toBeNull();
    expect(document.getElementById('notif-time-h')).not.toBeNull();
    expect(document.getElementById('notif-time-m')).not.toBeNull();
    // Granted — the "allow" button has nothing to do, so it's hidden.
    expect(document.getElementById('notif-allow-btn')).toBeNull();
  });

  it('shows a disabled, "blocked" permission button when permission is denied', () => {
    FakeNotification.permission = 'denied';
    render(<NotificationsSection />);
    const btn = document.getElementById('notif-allow-btn') as HTMLButtonElement;
    expect(btn).not.toBeNull();
    expect(btn.disabled).toBe(true);
  });

  it('clicking the permission button actually requests permission now (previously a dead onclick)', () => {
    render(<NotificationsSection />);
    act(() => {
      document.getElementById('notif-allow-btn')!.click();
    });
    expect(FakeNotification.requestPermission).toHaveBeenCalledTimes(1);
  });

  it('turning the switch on requests permission', async () => {
    render(<NotificationsSection />);
    await act(async () => {
      await userEvent.click(screen.getByRole('switch'));
    });
    expect(FakeNotification.requestPermission).toHaveBeenCalledTimes(1);
  });

  it('turning the switch off persists ew_notif_enabled=0', async () => {
    FakeNotification.permission = 'granted';
    localStorage.setItem('ew_notif_enabled', '1');
    render(<NotificationsSection />);
    await act(async () => {
      await userEvent.click(screen.getByRole('switch'));
    });
    expect(localStorage.getItem('ew_notif_enabled')).toBe('0');
  });

  it('changing the hour/minute selects persists the new reminder time', async () => {
    FakeNotification.permission = 'granted';
    localStorage.setItem('ew_notif_enabled', '1');
    render(<NotificationsSection />);

    await act(async () => {
      await userEvent.click(document.getElementById('notif-time-h')!);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: '07' }));
    });
    expect(localStorage.getItem('ew_notif_time')).toBe('07:00');

    await act(async () => {
      await userEvent.click(document.getElementById('notif-time-m')!);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: '30' }));
    });
    expect(localStorage.getItem('ew_notif_time')).toBe('07:30');
  });
});
