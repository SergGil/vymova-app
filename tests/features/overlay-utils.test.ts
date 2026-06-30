import { describe, it, expect, vi, beforeEach } from 'vitest';

const closePage = vi.fn();
vi.mock('../../js/features/sidebar.tsx', () => ({
  closePage: (...a: unknown[]) => closePage(...a),
}));

import {
  bindOverlayOpenClose,
  bindModalDismiss,
  bindOverlayDismiss,
} from '../../js/features/overlay-utils.ts';

describe('overlay-utils.ts', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    closePage.mockReset();
  });

  describe('bindOverlayOpenClose', () => {
    it('calls open() when the trigger button is clicked', () => {
      document.body.innerHTML = `<button id="btn"></button><div id="ov"><div id="inner"></div></div>`;
      const open = vi.fn();
      const close = vi.fn();
      bindOverlayOpenClose('btn', 'ov', open, close);
      document.getElementById('btn')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(open).toHaveBeenCalled();
      expect(close).not.toHaveBeenCalled();
    });

    it('calls close() when clicking the overlay background but not its children', () => {
      document.body.innerHTML = `<button id="btn"></button><div id="ov"><div id="inner"></div></div>`;
      const open = vi.fn();
      const close = vi.fn();
      bindOverlayOpenClose('btn', 'ov', open, close);

      document.getElementById('inner')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(close).not.toHaveBeenCalled();

      document.getElementById('ov')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(close).toHaveBeenCalledTimes(1);
    });

    it('does nothing when ids are missing', () => {
      expect(() =>
        bindOverlayOpenClose('missing-btn', 'missing-ov', vi.fn(), vi.fn()),
      ).not.toThrow();
    });
  });

  describe('bindModalDismiss', () => {
    it('calls close() on close-button click, overlay background click, and Escape when open', () => {
      document.body.innerHTML = `<div id="ov" class="open"><button id="close"></button><div id="inner"></div></div>`;
      const close = vi.fn();
      bindModalDismiss('ov', 'close', close);

      document.getElementById('close')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(close).toHaveBeenCalledTimes(1);

      document.getElementById('inner')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(close).toHaveBeenCalledTimes(1);

      document.getElementById('ov')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(close).toHaveBeenCalledTimes(2);

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(close).toHaveBeenCalledTimes(3);
    });

    it('does not call close() on Escape when the overlay is not open', () => {
      document.body.innerHTML = `<div id="ov"></div>`;
      const close = vi.fn();
      bindModalDismiss('ov', undefined, close);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(close).not.toHaveBeenCalled();
    });

    it('does nothing when the overlay is missing', () => {
      expect(() => bindModalDismiss('missing-ov', 'close', vi.fn())).not.toThrow();
    });
  });

  describe('bindOverlayDismiss', () => {
    it('calls closePage() via dynamic import on close-button click', async () => {
      document.body.innerHTML = `<div id="ov" class="open"><button id="close"></button></div>`;
      bindOverlayDismiss('ov', 'close');
      document.getElementById('close')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await new Promise((r) => setTimeout(r, 0));
      expect(closePage).toHaveBeenCalledTimes(1);
    });

    it('calls closePage() on overlay background click and Escape when open', async () => {
      document.body.innerHTML = `<div id="ov" class="open"><div id="inner"></div></div>`;
      bindOverlayDismiss('ov');

      document.getElementById('ov')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await new Promise((r) => setTimeout(r, 0));
      expect(closePage).toHaveBeenCalledTimes(1);

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await new Promise((r) => setTimeout(r, 0));
      expect(closePage).toHaveBeenCalledTimes(2);
    });

    it('does nothing when the overlay is missing', () => {
      expect(() => bindOverlayDismiss('missing-ov', 'close')).not.toThrow();
    });
  });
});
