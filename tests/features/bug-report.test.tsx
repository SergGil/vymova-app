import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { BugReportForm } from '../../js/features/bug-report.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<BugReportForm />);
  });
  return { container, root };
}

const nativeValueSetter = Object.getOwnPropertyDescriptor(
  HTMLTextAreaElement.prototype,
  'value',
)!.set!;
function setTextareaValue(el: HTMLTextAreaElement, value: string): void {
  nativeValueSetter.call(el, value);
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('bug-report.tsx BugReportForm', () => {
  let originalHref: string;

  beforeEach(() => {
    document.body.innerHTML = '';
    originalHref = window.location.href;
  });

  afterEach(() => {
    try {
      window.location.href = originalHref;
    } catch (e) {
      /* ignore navigation in happy-dom */
    }
  });

  it('renders the subject select, message textarea and send button', () => {
    const { container } = mount();
    expect(container.querySelector('#bug-subject')).not.toBeNull();
    expect(container.querySelector('#bug-message')).not.toBeNull();
    expect(container.querySelector('#bug-send-btn')!.textContent).toBe('📨 Надіслати');
    expect((container.querySelector('#bug-sent-note') as HTMLElement).style.display).toBe('none');
  });

  it('shows an error state when sending an empty message', () => {
    const { container } = mount();
    const sendBtn = container.querySelector('#bug-send-btn') as HTMLButtonElement;
    act(() => {
      sendBtn.click();
    });
    const textarea = container.querySelector('#bug-message') as HTMLTextAreaElement;
    expect(textarea.className).toContain('bug-error');
  });

  it('clears the error state once the user starts typing', () => {
    const { container } = mount();
    const sendBtn = container.querySelector('#bug-send-btn') as HTMLButtonElement;
    act(() => {
      sendBtn.click();
    });
    const textarea = container.querySelector('#bug-message') as HTMLTextAreaElement;
    expect(textarea.className).toContain('bug-error');

    act(() => {
      setTextareaValue(textarea, 'something broke');
    });
    expect(
      (container.querySelector('#bug-message') as HTMLTextAreaElement).className,
    ).not.toContain('bug-error');
  });

  it('opens a mailto: link and shows the sent note when a message is provided', async () => {
    let hrefSet = '';
    Object.defineProperty(window, 'location', {
      value: {
        ...window.location,
        set href(v: string) {
          hrefSet = v;
        },
        get href() {
          return hrefSet;
        },
      },
      configurable: true,
    });

    const { container } = mount();
    const textarea = container.querySelector('#bug-message') as HTMLTextAreaElement;
    act(() => {
      setTextareaValue(textarea, 'Found a bug in quiz mode');
    });

    const sendBtn = container.querySelector('#bug-send-btn') as HTMLButtonElement;
    act(() => {
      sendBtn.click();
    });

    expect(hrefSet).toContain('mailto:beizmans@gmail.com');
    expect(hrefSet).toContain(encodeURIComponent('Found a bug in quiz mode'));
    expect((container.querySelector('#bug-sent-note') as HTMLElement).style.display).toBe('inline');

    Object.defineProperty(window, 'location', { value: window.location, configurable: true });
  });

  it('resets the form 2000ms after a successful send', async () => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'location', {
      value: { ...window.location, href: '' },
      configurable: true,
      writable: true,
    });

    const { container } = mount();
    const textarea = container.querySelector('#bug-message') as HTMLTextAreaElement;
    act(() => {
      setTextareaValue(textarea, 'Found a bug');
    });
    const sendBtn = container.querySelector('#bug-send-btn') as HTMLButtonElement;
    act(() => {
      sendBtn.click();
    });
    expect((container.querySelector('#bug-sent-note') as HTMLElement).style.display).toBe('inline');

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect((container.querySelector('#bug-sent-note') as HTMLElement).style.display).toBe('none');
    expect((container.querySelector('#bug-message') as HTMLTextAreaElement).value).toBe('');

    vi.useRealTimers();
    Object.defineProperty(window, 'location', { value: window.location, configurable: true });
  });
});
