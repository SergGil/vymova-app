import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { openResetConfirm, ResetConfirmDialog } from '../../js/features/reset-confirm-dialog.tsx';

describe('<ResetConfirmDialog/>', () => {
  it('renders nothing until openResetConfirm() is called', () => {
    const { container } = render(<ResetConfirmDialog />);
    expect(container).toBeEmptyDOMElement();
    expect(document.getElementById('modal-overlay')).toBeNull();
  });

  it('renders the modal (keeping id="modal-overlay" for keyboard.tsx\'s closest() guard) once opened', () => {
    render(<ResetConfirmDialog />);
    act(() => {
      openResetConfirm(vi.fn());
    });
    expect(document.getElementById('modal-overlay')).not.toBeNull();
    expect(document.getElementById('modal-cancel')).not.toBeNull();
    expect(document.getElementById('modal-confirm')).not.toBeNull();
  });

  it('cancel closes the dialog without invoking the callback', () => {
    render(<ResetConfirmDialog />);
    const cb = vi.fn();
    act(() => {
      openResetConfirm(cb);
    });
    act(() => {
      document.getElementById('modal-cancel')!.click();
    });
    expect(cb).not.toHaveBeenCalled();
    expect(document.getElementById('modal-overlay')).toBeNull();
  });

  it('confirm invokes the callback and closes the dialog', () => {
    render(<ResetConfirmDialog />);
    const cb = vi.fn();
    act(() => {
      openResetConfirm(cb);
    });
    act(() => {
      document.getElementById('modal-confirm')!.click();
    });
    expect(cb).toHaveBeenCalledTimes(1);
    expect(document.getElementById('modal-overlay')).toBeNull();
  });

  it('re-entrancy: opening a second time before confirming uses the latest callback', () => {
    render(<ResetConfirmDialog />);
    const cb1 = vi.fn();
    const cb2 = vi.fn();
    act(() => {
      openResetConfirm(cb1);
    });
    act(() => {
      openResetConfirm(cb2);
    });
    act(() => {
      document.getElementById('modal-confirm')!.click();
    });
    expect(cb1).not.toHaveBeenCalled();
    expect(cb2).toHaveBeenCalledTimes(1);
  });

  it('does nothing when unmounted (no dangling _open reference)', () => {
    const { unmount } = render(<ResetConfirmDialog />);
    act(() => {
      unmount();
    });
    expect(() => openResetConfirm(vi.fn())).not.toThrow();
    expect(document.getElementById('modal-overlay')).toBeNull();
  });
});
