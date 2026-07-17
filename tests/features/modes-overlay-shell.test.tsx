import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { dispatchClosePage, dispatchOpenPage, getActivePage } from '../../src/nav-store.tsx';
import { ModesOverlayShell } from '../../js/features/modes-overlay-shell.tsx';

describe('<ModesOverlayShell/>', () => {
  beforeEach(() => {
    dispatchClosePage();
  });

  afterEach(() => {
    dispatchClosePage();
  });

  it('renders the overlay/panel/header structure with the modes-grid inlined', () => {
    render(<ModesOverlayShell />);
    const overlay = document.getElementById('modes-overlay')!;
    expect(overlay.className).toBe('modes-overlay');
    expect(overlay.querySelector('.modes-panel')).not.toBeNull();
    expect(overlay.querySelector('.modes-panel-handle')).not.toBeNull();
    expect(overlay.querySelector('.modes-header')).not.toBeNull();
    expect(overlay.querySelectorAll('.modes-grid .mode-card')).toHaveLength(27);
  });

  it('clicking the close button calls closePage() (nav-store clears)', () => {
    render(<ModesOverlayShell />);
    act(() => {
      dispatchOpenPage('modes');
    });
    expect(getActivePage()).toBe('modes');
    act(() => {
      document.getElementById('modes-close')!.click();
    });
    expect(getActivePage()).toBeNull();
  });

  it('clicking the backdrop (not the panel) closes the page', () => {
    render(<ModesOverlayShell />);
    act(() => {
      dispatchOpenPage('modes');
    });
    expect(getActivePage()).toBe('modes');
    act(() => {
      document
        .getElementById('modes-overlay')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActivePage()).toBeNull();
  });

  it('clicking inside the panel (not the backdrop) does not close the page', () => {
    render(<ModesOverlayShell />);
    act(() => {
      dispatchOpenPage('modes');
    });
    act(() => {
      document
        .querySelector('.modes-panel')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(getActivePage()).toBe('modes');
  });
});
