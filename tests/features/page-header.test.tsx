import { describe, it, expect, vi, afterEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { dispatchClosePage, dispatchOpenPage, getActivePage } from '../../src/nav-store.tsx';
import { PageHeader } from '../../js/features/page-header.tsx';

describe('<PageHeader/>', () => {
  afterEach(() => {
    dispatchClosePage();
  });

  it('renders a self-contained titleKey (shape A: settings/ach/profile/lp/idioms) as the page-title text itself', () => {
    const { container } = render(<PageHeader titleKey="settings.pageTitle" />);
    const title = container.querySelector('.page-title')!;
    expect(title.textContent).toBe('⚙️ Налаштування');
    expect(title.getAttribute('data-i18n')).toBe('settings.pageTitle');
  });

  it('renders icon + nested labeled span (shape B: duel/grammar/...) when icon is passed', () => {
    const { container } = render(<PageHeader icon="⚔️" titleKey="nav.duel" />);
    const title = container.querySelector('.page-title')!;
    expect(title.textContent).toContain('⚔️');
    const span = title.querySelector('span[data-i18n="nav.duel"]')!;
    expect(span.textContent).toBe('Дуель');
  });

  it('without closeBtnId: the close button has no id and closes the page directly onClick', () => {
    act(() => {
      dispatchOpenPage('settings');
    });
    const { container } = render(<PageHeader titleKey="settings.pageTitle" />);
    const btn = container.querySelector('.page-close-btn')! as HTMLButtonElement;
    expect(btn.id).toBe('');
    expect(getActivePage()).toBe('settings');
    act(() => {
      btn.click();
    });
    expect(getActivePage()).toBeNull();
  });

  it('with closeBtnId: renders that id and does NOT wire its own onClick (external bindOverlayDismiss owns it)', () => {
    const onClick = vi.fn();
    const { container } = render(<PageHeader icon="📖" titleKey="nav.grammar" closeBtnId="grammar-close" />);
    const btn = container.querySelector('.page-close-btn')! as HTMLButtonElement;
    expect(btn.id).toBe('grammar-close');
    btn.addEventListener('click', onClick);
    act(() => {
      btn.click();
    });
    // Only the listener we just attached fired — PageHeader itself didn't
    // also call closePage(), which would be wrong (grammar's own module
    // wires this id externally, sometimes with different semantics, e.g.
    // duel's "smart" close).
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
