// Written with @testing-library/react (legacy-modernization-roadmap.md item
// 3/4) — these components are the first slice of settings.tsx's imperative
// DOM converted to real React state, so their own tests get the modern
// pattern from the start.
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  SrsPriorityToggle,
  HapticToggle,
  ReducedMotionToggle,
  HighContrastToggle,
} from '../../js/features/settings-toggles.tsx';

beforeEach(() => {
  localStorage.clear();
  document.body.classList.remove('reduced-motion', 'high-contrast');
});

describe('<SrsPriorityToggle/>', () => {
  it('defaults to checked (on) when localStorage is unset', () => {
    render(<SrsPriorityToggle />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('reads an explicit "off" from localStorage on mount', () => {
    localStorage.setItem('ew_srs_priority', '0');
    render(<SrsPriorityToggle />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('persists the choice to localStorage when toggled', async () => {
    render(<SrsPriorityToggle />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(localStorage.getItem('ew_srs_priority')).toBe('0');
    await userEvent.click(screen.getByRole('checkbox'));
    expect(localStorage.getItem('ew_srs_priority')).toBe('1');
  });
});

describe('<HapticToggle/>', () => {
  it('defaults to checked (on) when localStorage is unset', () => {
    render(<HapticToggle />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('reads an explicit "off" from localStorage on mount', () => {
    localStorage.setItem('ew_haptic', '0');
    render(<HapticToggle />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('persists the choice to localStorage when toggled', async () => {
    render(<HapticToggle />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(localStorage.getItem('ew_haptic')).toBe('0');
  });
});

describe('<ReducedMotionToggle/>', () => {
  it('defaults to off and does not apply the body class when unset', () => {
    render(<ReducedMotionToggle />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(document.body.classList.contains('reduced-motion')).toBe(false);
  });

  it('restores an explicit "on" from localStorage and applies the body class on mount', () => {
    localStorage.setItem('ew_reduced_motion', '1');
    render(<ReducedMotionToggle />);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(document.body.classList.contains('reduced-motion')).toBe(true);
  });

  it('toggling persists to localStorage and flips the body class both ways', async () => {
    render(<ReducedMotionToggle />);
    const toggle = screen.getByRole('checkbox');

    await userEvent.click(toggle);
    expect(localStorage.getItem('ew_reduced_motion')).toBe('1');
    expect(document.body.classList.contains('reduced-motion')).toBe(true);

    await userEvent.click(toggle);
    expect(localStorage.getItem('ew_reduced_motion')).toBe('0');
    expect(document.body.classList.contains('reduced-motion')).toBe(false);
  });
});

describe('<HighContrastToggle/>', () => {
  it('defaults to off and does not apply the body class when unset', () => {
    render(<HighContrastToggle />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(document.body.classList.contains('high-contrast')).toBe(false);
  });

  it('restores "on" from localStorage and applies the body class on mount', () => {
    localStorage.setItem('ew_high_contrast', '1');
    render(<HighContrastToggle />);
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(document.body.classList.contains('high-contrast')).toBe(true);
  });

  it('toggling persists to localStorage and flips the body class both ways', async () => {
    render(<HighContrastToggle />);
    const toggle = screen.getByRole('checkbox');

    await userEvent.click(toggle);
    expect(localStorage.getItem('ew_high_contrast')).toBe('1');
    expect(document.body.classList.contains('high-contrast')).toBe(true);

    await userEvent.click(toggle);
    expect(localStorage.getItem('ew_high_contrast')).toBe('0');
    expect(document.body.classList.contains('high-contrast')).toBe(false);
  });
});
