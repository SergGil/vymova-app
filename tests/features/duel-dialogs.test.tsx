import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { _askCode, CodeInputDialog } from '../../js/features/duel/duel-dialogs.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root;
let container: HTMLElement;

// _askCode() synchronously triggers a setState in <CodeInputDialog/> (via
// the module-level `_open` ref set up in its mount effect), so the call
// itself — not just the events that follow — needs to be inside act() for
// the resulting re-render to be flushed before the test inspects the DOM.
function askCode(title: string, desc: string): Promise<string | null> {
  let p!: Promise<string | null>;
  act(() => {
    p = _askCode(title, desc);
  });
  return p;
}
function setInputValue(value: string): void {
  const inp = document.getElementById('code-input-field') as HTMLInputElement;
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
  act(() => {
    setter.call(inp, value);
    inp.dispatchEvent(new Event('input', { bubbles: true }));
  });
}
function clickOk(): void {
  act(() => {
    document
      .getElementById('code-input-ok')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}
function clickCancel(): void {
  act(() => {
    document
      .getElementById('code-input-cancel')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

describe('_askCode() / <CodeInputDialog/>', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<CodeInputDialog />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('renders nothing until a code is asked for', () => {
    expect(container.innerHTML).toBe('');
  });

  it('shows the title and description once _askCode() is called', () => {
    void askCode('the-title', 'the-desc');
    expect(container.textContent).toContain('the-title');
    expect(container.textContent).toContain('the-desc');
  });

  it('resolves null when cancel is clicked', async () => {
    const p = askCode('title', 'desc');
    clickCancel();
    expect(await p).toBeNull();
  });

  it('resolves the entered code, normalized (dashes stripped, uppercased) when OK is clicked', async () => {
    const p = askCode('title', 'desc');
    setInputValue('abc-123');
    clickOk();
    expect(await p).toBe('ABC123');
  });

  it('rejects a too-short code without closing the dialog', async () => {
    const p = askCode('title', 'desc');
    setInputValue('ab');
    clickOk();
    // Still open — the promise must not have resolved.
    expect(document.getElementById('code-input-field')).not.toBeNull();
    // Now finish it properly so the promise doesn't dangle past the test.
    clickCancel();
    expect(await p).toBeNull();
  });

  // Regression: the dialog reuses one shared React-owned modal. A second
  // _askCode() call fired while the first was still open (three different
  // call sites can trigger it: replying to an async challenge, joining a
  // tournament, joining as spectator) used to stack a second set of
  // OK/Cancel/keydown listeners on top of the first's when this was raw-DOM
  // driven — one click on OK then fired both closures, resolving the FIRST
  // caller's promise too even though its dialog's title/desc was never
  // actually shown (the second call's overwrote them). Fixed originally by
  // cancelling any still-open previous call; verified again here after the
  // React rewrite.
  it('a second call made while one is still open cancels the first instead of double-resolving', async () => {
    const first = askCode('first-title', 'first-desc');
    const second = askCode('second-title', 'second-desc');

    // The shared dialog now reflects only the second call.
    expect(container.textContent).toContain('second-title');
    expect(container.textContent).not.toContain('first-title');

    setInputValue('xyz-789');
    clickOk();

    expect(await first).toBeNull();
    expect(await second).toBe('XYZ789');
  });
});
