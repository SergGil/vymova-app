// settings-page.tsx consolidates the Settings overlay's section skeleton
// (titles/descriptions/layout, previously ~200 lines of static data-i18n
// markup in index.html) plus every already-React widget it hosts into one
// component (legacy-modernization-roadmap.md item 3 follow-up). This test
// doesn't re-verify each widget's own behavior (that's each widget's own
// test file's job) — it guards the composition: everything mounts together
// without throwing, and the handful of ids other modules reach into by
// getElementById (sidebar.tsx's dark-theme pill, card-actions.ts's reset
// button, voice.tsx's imperative voice-picker target) still exist with the
// same ids in the same DOM shape.
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SettingsPage } from '../../js/features/settings/settings-page.tsx';
import { getActiveFandomTheme, toggleFandomTheme } from '../../src/fandom-theme-store.ts';

afterEach(() => {
  cleanup();
  const active = getActiveFandomTheme();
  if (active) toggleFandomTheme(active);
  document.body.className = '';
  localStorage.clear();
});

describe('<SettingsPage/>', () => {
  it('renders every section title', () => {
    render(<SettingsPage />);
    expect(screen.getByText('🎨 Теми')).toBeInTheDocument();
    expect(screen.getByText('🔁 Пріоритет повторення')).toBeInTheDocument();
    expect(screen.getByText('🆕 Нових карток на день')).toBeInTheDocument();
    expect(screen.getByText('🖼️ Зображення на картках')).toBeInTheDocument();
    expect(screen.getByText('💾 Збереження прогресу')).toBeInTheDocument();
    expect(screen.getByText('🔔 Сповіщення')).toBeInTheDocument();
    expect(screen.getByText('📳 Вібрація')).toBeInTheDocument();
    expect(screen.getByText('🌀 Зменшена анімація')).toBeInTheDocument();
    expect(screen.getByText('🔲 Високий контраст')).toBeInTheDocument();
    expect(screen.getByText('📱 Встановити застосунок')).toBeInTheDocument();
    expect(screen.getByText('☁️ Хмарний бекап')).toBeInTheDocument();
    expect(screen.getByText('🐛 Повідомити про помилку')).toBeInTheDocument();
    expect(screen.getByText('⚠️ Небезпечна зона')).toBeInTheDocument();
  });

  it('preserves the ids external modules reach into by getElementById', () => {
    const { container } = render(<SettingsPage />);
    expect(container.querySelector('#set-theme')).toBeTruthy();
    expect(container.querySelector('#set-theme-pill')).toBeTruthy();
    expect(container.querySelector('#fy-voices-list')).toBeTruthy();
    expect(container.querySelector('#btn-reset')).toBeTruthy();
    expect(container.querySelector('#haptic-ios-note')).toBeTruthy();
  });

  it('renders the fandom theme rows inline (no separate mount point needed anymore)', () => {
    const { container } = render(<SettingsPage />);
    expect(container.querySelector('#set-sw')).toBeTruthy();
  });

  it('high-contrast toggle (rendered inline, no Portal) still applies its body class on click', async () => {
    render(<SettingsPage />);
    const toggle = document.getElementById('high-contrast-toggle') as HTMLInputElement;
    expect(toggle).toBeTruthy();
    expect(document.body.classList.contains('high-contrast')).toBe(false);
    await userEvent.click(toggle);
    expect(document.body.classList.contains('high-contrast')).toBe(true);
  });

  it('renders the footer with the privacy policy link', () => {
    render(<SettingsPage />);
    const link = screen.getByRole('link', { name: 'Privacy Policy' });
    expect(link).toHaveAttribute('href', './privacy.html');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
