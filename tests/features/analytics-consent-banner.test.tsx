// Vymova — tests/features/analytics-consent-banner.test.tsx
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { hasAnalyticsConfig, getConsent, setConsent } = vi.hoisted(() => ({
  hasAnalyticsConfig: vi.fn(() => false),
  getConsent: vi.fn<() => boolean | null>(() => null),
  setConsent: vi.fn(),
}));
vi.mock('../../js/core/analytics.ts', () => ({ hasAnalyticsConfig, getConsent, setConsent }));

import { AnalyticsConsentBanner } from '../../js/features/analytics-consent-banner.tsx';

describe('AnalyticsConsentBanner', () => {
  beforeEach(() => {
    hasAnalyticsConfig.mockReset().mockReturnValue(false);
    getConsent.mockReset().mockReturnValue(null);
    setConsent.mockReset();
  });

  it('renders nothing when analytics is not configured for this deployment', () => {
    render(<AnalyticsConsentBanner />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders nothing when a consent decision was already made', () => {
    hasAnalyticsConfig.mockReturnValue(true);
    getConsent.mockReturnValue(true);
    render(<AnalyticsConsentBanner />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows the prompt when configured and no decision has been made yet', () => {
    hasAnalyticsConfig.mockReturnValue(true);
    getConsent.mockReturnValue(null);
    render(<AnalyticsConsentBanner />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('Accept calls setConsent(true) and hides the prompt', async () => {
    hasAnalyticsConfig.mockReturnValue(true);
    getConsent.mockReturnValue(null);
    render(<AnalyticsConsentBanner />);
    const user = userEvent.setup();
    await user.click(screen.getByText(/accept|прийн|acepta|accett|akzept|aceit/i));
    expect(setConsent).toHaveBeenCalledWith(true);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Decline calls setConsent(false) and hides the prompt', async () => {
    hasAnalyticsConfig.mockReturnValue(true);
    getConsent.mockReturnValue(null);
    render(<AnalyticsConsentBanner />);
    const user = userEvent.setup();
    await user.click(screen.getByText(/decline|reject|refus|відхил|rechaz|rifiut|ablehn|recus/i));
    expect(setConsent).toHaveBeenCalledWith(false);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
