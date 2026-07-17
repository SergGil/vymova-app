import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
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

  it('renders the toggle, status, permission button, and time-picker row with all expected ids', () => {
    render(<NotificationsSection />);
    expect(document.getElementById('notif-toggle')).not.toBeNull();
    expect(document.getElementById('notif-status')).not.toBeNull();
    expect(document.getElementById('notif-allow-btn')).not.toBeNull();
    expect(document.getElementById('notif-time-row')).not.toBeNull();
    expect(document.getElementById('notif-time-h')).not.toBeNull();
    expect(document.getElementById('notif-time-m')).not.toBeNull();
  });

  it('clicking the permission button actually requests permission now (previously a dead onclick)', () => {
    render(<NotificationsSection />);
    act(() => {
      document.getElementById('notif-allow-btn')!.click();
    });
    expect(FakeNotification.requestPermission).toHaveBeenCalledTimes(1);
  });
});
