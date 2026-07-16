// @testing-library/react (legacy-modernization-roadmap.md item 3/4).
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const {
  isPwaInstalled,
  canTriggerPwaInstall,
  needsPwaIosHint,
  needsBrowserUiHint,
  triggerPwaInstall,
} = vi.hoisted(() => ({
  isPwaInstalled: vi.fn(() => false),
  canTriggerPwaInstall: vi.fn(() => false),
  needsPwaIosHint: vi.fn(() => false),
  needsBrowserUiHint: vi.fn(() => false),
  triggerPwaInstall: vi.fn(async () => true),
}));
vi.mock('../../js/core/pwa.tsx', () => ({
  isPwaInstalled,
  canTriggerPwaInstall,
  needsPwaIosHint,
  needsBrowserUiHint,
  triggerPwaInstall,
}));

import { PwaInstallSection } from '../../js/features/pwa-install-section.tsx';

beforeEach(() => {
  isPwaInstalled.mockReturnValue(false);
  canTriggerPwaInstall.mockReturnValue(false);
  needsPwaIosHint.mockReturnValue(false);
  needsBrowserUiHint.mockReturnValue(false);
  triggerPwaInstall.mockClear();
});

describe('<PwaInstallSection/>', () => {
  it('shows an "already installed" status when isPwaInstalled()', () => {
    isPwaInstalled.mockReturnValue(true);
    render(<PwaInstallSection />);
    expect(screen.getByText('✓ Уже встановлено')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows an install button when canTriggerPwaInstall(), and clicking it calls triggerPwaInstall()', async () => {
    canTriggerPwaInstall.mockReturnValue(true);
    render(<PwaInstallSection />);
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    expect(triggerPwaInstall).toHaveBeenCalledTimes(1);
  });

  it('shows the iOS hint (as HTML) when needsPwaIosHint()', () => {
    needsPwaIosHint.mockReturnValue(true);
    render(<PwaInstallSection />);
    expect(screen.getByText(/Додай на головний екран/)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows the browser-UI hint when needsBrowserUiHint()', () => {
    needsBrowserUiHint.mockReturnValue(true);
    render(<PwaInstallSection />);
    expect(
      screen.getByText('Скористайся іконкою встановлення (⊕) в адресному рядку браузера або меню ⋮ → «Встановити Vymova».'),
    ).toBeInTheDocument();
  });

  it('falls back to "unavailable" when none of the other states apply', () => {
    render(<PwaInstallSection />);
    expect(screen.getByText('Недоступно в цьому браузері')).toBeInTheDocument();
  });

  it('re-renders when beforeinstallprompt fires, picking up the newly-available install option', () => {
    render(<PwaInstallSection />);
    expect(screen.getByText('Недоступно в цьому браузері')).toBeInTheDocument();

    canTriggerPwaInstall.mockReturnValue(true);
    act(() => {
      window.dispatchEvent(new Event('beforeinstallprompt'));
    });

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('re-renders when appinstalled fires, picking up the "already installed" status', () => {
    canTriggerPwaInstall.mockReturnValue(true);
    render(<PwaInstallSection />);
    expect(screen.getByRole('button')).toBeInTheDocument();

    isPwaInstalled.mockReturnValue(true);
    canTriggerPwaInstall.mockReturnValue(false);
    act(() => {
      window.dispatchEvent(new Event('appinstalled'));
    });

    expect(screen.getByText('✓ Уже встановлено')).toBeInTheDocument();
  });
});
