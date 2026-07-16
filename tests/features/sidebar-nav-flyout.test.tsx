import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { NavFlyoutController } from '../../js/features/sidebar-nav-flyout.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root;

function mount(): void {
  const container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(<NavFlyoutController />);
  });
}

function setViewportWidth(w: number): void {
  Object.defineProperty(window, 'innerWidth', { value: w, configurable: true, writable: true });
}

describe('sidebar-nav-flyout.tsx (NavFlyoutController)', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="sidebar">
        <div class="sb-group" id="sb-group-ai">
          <button class="sb-btn sb-group-trigger" id="sb-group-ai-trigger">AI</button>
          <div class="sb-flyout" id="sb-group-ai-flyout">
            <a class="sb-btn" id="sb-ai-tutor" href="#">Tutor</a>
          </div>
        </div>
        <div class="sb-group" id="sb-group-video">
          <button class="sb-btn sb-group-trigger" id="sb-group-video-trigger">Video</button>
          <div class="sb-flyout" id="sb-group-video-flyout">
            <a class="sb-btn" id="sb-youtube-player" href="#">YouTube</a>
          </div>
        </div>
      </div>
    `;
    setViewportWidth(1280);
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    document.body.innerHTML = '';
    vi.useRealTimers();
  });

  it('reparents each flyout to <body>, leaving a placeholder comment behind', () => {
    mount();
    const group = document.getElementById('sb-group-ai')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    expect(flyout.parentElement).toBe(document.body);
    // A comment node now sits where the flyout used to be, inside the group.
    expect(Array.from(group.childNodes).some((n) => n.nodeType === Node.COMMENT_NODE)).toBe(true);
  });

  it('opens the flyout on trigger mouseenter (desktop) and positions it beside the trigger', () => {
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    trigger.getBoundingClientRect = () =>
      ({ left: 10, right: 60, top: 20, bottom: 40, width: 50 }) as DOMRect;

    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });

    expect(flyout.classList.contains('open')).toBe(true);
    expect(flyout.style.left).toBe('64px'); // right (60) + 4
    expect(flyout.style.top).toBe('20px');
  });

  it('does not open on hover on a mobile-width viewport', () => {
    setViewportWidth(600);
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(false);
  });

  it('closes after mouseleave, once the 150ms close timer elapses', () => {
    vi.useFakeTimers();
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(true);

    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(true); // still open, timer pending

    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(flyout.classList.contains('open')).toBe(false);
  });

  it('moving the mouse into the flyout itself cancels the pending close', () => {
    vi.useFakeTimers();
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      trigger.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      flyout.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    act(() => {
      vi.advanceTimersByTime(150);
    });
    expect(flyout.classList.contains('open')).toBe(true);
  });

  it('clicking the trigger toggles the flyout and the group\'s "open" class', () => {
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    const group = document.getElementById('sb-group-ai')!;

    act(() => {
      trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    expect(flyout.classList.contains('open')).toBe(true);
    expect(group.classList.contains('open')).toBe(true);

    act(() => {
      trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    expect(flyout.classList.contains('open')).toBe(false);
    expect(group.classList.contains('open')).toBe(false);
  });

  it('opening one flyout closes any other that was open', () => {
    mount();
    const aiTrigger = document.getElementById('sb-group-ai-trigger')!;
    const videoTrigger = document.getElementById('sb-group-video-trigger')!;
    const aiFlyout = document.getElementById('sb-group-ai-flyout')!;
    const videoFlyout = document.getElementById('sb-group-video-flyout')!;

    act(() => {
      aiTrigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(aiFlyout.classList.contains('open')).toBe(true);

    act(() => {
      videoTrigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(videoFlyout.classList.contains('open')).toBe(true);
    expect(aiFlyout.classList.contains('open')).toBe(false);
  });

  it('clicking a nav link inside the flyout closes it', () => {
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    const group = document.getElementById('sb-group-ai')!;
    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(true);

    act(() => {
      document
        .getElementById('sb-ai-tutor')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(false);
    expect(group.classList.contains('open')).toBe(false);
  });

  it('clicking outside any group closes all open flyouts', () => {
    mount();
    const trigger = document.getElementById('sb-group-ai-trigger')!;
    const flyout = document.getElementById('sb-group-ai-flyout')!;
    act(() => {
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(true);

    act(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(flyout.classList.contains('open')).toBe(false);
  });

  it('unmounting restores each flyout to its original position in the DOM', () => {
    mount();
    const group = document.getElementById('sb-group-ai')!;
    expect(document.getElementById('sb-group-ai-flyout')!.parentElement).toBe(document.body);

    act(() => {
      root.unmount();
    });
    expect(document.getElementById('sb-group-ai-flyout')!.parentElement).toBe(group);
  });
});
