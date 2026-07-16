// @testing-library/react (legacy-modernization-roadmap.md item 3/4).
import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ImgClearConfirmDialog,
  showImgClearConfirm,
} from '../../js/features/img-clear-confirm.tsx';

function showImgClearConfirmSync(cb: () => void): void {
  act(() => {
    showImgClearConfirm(cb);
  });
}

describe('<ImgClearConfirmDialog/>', () => {
  it('renders nothing until showImgClearConfirm() is called', () => {
    const { container } = render(<ImgClearConfirmDialog />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows the dialog once showImgClearConfirm() is called', () => {
    render(<ImgClearConfirmDialog />);
    showImgClearConfirmSync(vi.fn());
    expect(screen.getByText('Очистити кеш зображень?')).toBeInTheDocument();
  });

  it('clicking confirm calls the callback and closes the dialog', async () => {
    render(<ImgClearConfirmDialog />);
    const cb = vi.fn();
    showImgClearConfirmSync(cb);

    await userEvent.click(screen.getByText('Очистити'));
    expect(cb).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Очистити кеш зображень?')).not.toBeInTheDocument();
  });

  it('clicking cancel closes the dialog without calling the callback', async () => {
    render(<ImgClearConfirmDialog />);
    const cb = vi.fn();
    showImgClearConfirmSync(cb);

    await userEvent.click(screen.getByText('Скасувати'));
    expect(cb).not.toHaveBeenCalled();
    expect(screen.queryByText('Очистити кеш зображень?')).not.toBeInTheDocument();
  });

  it('clicking the overlay backdrop closes it without calling the callback', async () => {
    const { container } = render(<ImgClearConfirmDialog />);
    const cb = vi.fn();
    showImgClearConfirmSync(cb);

    await userEvent.click(container.querySelector('#img-clear-overlay')!);
    expect(cb).not.toHaveBeenCalled();
    expect(screen.queryByText('Очистити кеш зображень?')).not.toBeInTheDocument();
  });

  it('clicking inside the panel (not the backdrop) does not close it', async () => {
    render(<ImgClearConfirmDialog />);
    showImgClearConfirmSync(vi.fn());

    await userEvent.click(screen.getByText('Очистити кеш зображень?'));
    expect(screen.getByText('Очистити кеш зображень?')).toBeInTheDocument();
  });

  it('a second showImgClearConfirm() call while one is open replaces the pending callback', async () => {
    render(<ImgClearConfirmDialog />);
    const first = vi.fn();
    const second = vi.fn();
    showImgClearConfirmSync(first);
    showImgClearConfirmSync(second);

    await userEvent.click(screen.getByText('Очистити'));
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });
});
