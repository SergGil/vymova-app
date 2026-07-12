import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ComparePage, openCompare } from '../../js/modes/compare.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function flush(ms = 200): Promise<void> {
  await act(async () => {
    await wait(ms);
  });
}

// React tracks an input's "last known value" on the DOM node itself to tell
// programmatic sets apart from real user input; writing through the plain
// `.value` property updates that tracker too, so the subsequent dispatched
// 'input' event looks like a no-op change and onChange never fires. Going
// through the native prototype setter bypasses React's tracker instead.
const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value',
)!.set!;

function typeInto(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

/** The 15 default language tables load via real dynamic import()s the first
 * time compare.tsx runs in this test file, which can take a while under the
 * test transform — poll instead of assuming a fixed delay is enough. */
async function waitForTablesReady(container: HTMLElement): Promise<HTMLInputElement> {
  const deadline = Date.now() + 15000;
  for (;;) {
    const input = container.querySelector('input') as HTMLInputElement | null;
    if (input && !input.disabled) return input;
    if (Date.now() > deadline) throw new Error('timed out waiting for language tables to load');
    await flush(100);
  }
}

async function selectApple(container: HTMLElement, input: HTMLInputElement): Promise<void> {
  act(() => {
    typeInto(input, 'apple');
  });
  await flush(250);
  // Match the suggestion row itself (exactly two <span> children: headword,
  // translation) rather than the dropdown wrapper, whose aggregated
  // textContent would also happen to contain both strings.
  const suggestion = Array.from(container.querySelectorAll('div')).find(
    (d) =>
      d.children.length === 2 &&
      d.children[0].tagName === 'SPAN' &&
      d.children[0].textContent === 'apple' &&
      d.children[1].textContent === 'яблуко',
  ) as HTMLElement;
  expect(suggestion).toBeTruthy();
  act(() => {
    suggestion.click();
  });
}

describe('compare.tsx (ComparePage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'cmp-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<ComparePage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening shows the overlay and enables the search input once language tables load', async () => {
    act(() => {
      openCompare();
    });
    expect(overlay.style.display).toBe('flex');
    const input = await waitForTablesReady(container);
    expect(input).not.toBeNull();
    expect(input.disabled).toBe(false);
  });

  it('typing a word shows matching suggestions, and picking one shows the comparison rows', async () => {
    act(() => {
      openCompare();
    });
    const input = await waitForTablesReady(container);
    await selectApple(container, input);

    // Selected-word chip replaces the input; comparison rows now show the
    // headword plus its Ukrainian translation for every displayed language.
    expect(container.querySelector('input')).toBeNull();
    expect(container.textContent).toContain('apple');
    expect(container.textContent).toContain('яблуко');
  });

  it('clearing the selection goes back to the search box', async () => {
    act(() => {
      openCompare();
    });
    const input = await waitForTablesReady(container);
    await selectApple(container, input);

    const clearBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent === '✕' && !b.getAttribute('aria-label'),
    )!;
    act(() => {
      clearBtn.click();
    });
    expect(container.querySelector('input')).not.toBeNull();
  });

  it('the "+ add language" picker lets you add a language, which can then be removed', async () => {
    act(() => {
      openCompare();
    });
    const input = await waitForTablesReady(container);
    await selectApple(container, input);

    const addBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('+'),
    )!;
    const buttonCountBefore = container.querySelectorAll('button').length;
    act(() => {
      addBtn.click();
    });

    // The picker opens with its own search input and a list of clickable
    // language rows (styled with cursor:pointer), none of which duplicate
    // the first 15 defaults already shown.
    expect(container.querySelectorAll('input').length).toBeGreaterThanOrEqual(1);
    const pickerRows = Array.from(container.querySelectorAll('div')).filter(
      (d) => (d.style as CSSStyleDeclaration).cursor === 'pointer' && d.querySelector('span'),
    );
    expect(pickerRows.length).toBeGreaterThan(0);

    act(() => {
      (pickerRows[0] as HTMLElement).click();
    });

    // Adding a language renders one more row with its own remove ("✕")
    // button, in addition to the close and clear-selection ones.
    expect(container.querySelectorAll('button').length).toBeGreaterThan(buttonCountBefore);
    const removeButtons = Array.from(container.querySelectorAll('button')).filter(
      (b) => b.textContent === '✕' && !b.getAttribute('aria-label'),
    );
    expect(removeButtons.length).toBeGreaterThanOrEqual(2);

    const beforeRemoveCount = container.querySelectorAll('button').length;
    act(() => {
      removeButtons[removeButtons.length - 1].click();
    });
    expect(container.querySelectorAll('button').length).toBeLessThan(beforeRemoveCount);
  });

  it('closing via the close button hides the overlay and unmounts the page content', async () => {
    act(() => {
      openCompare();
    });
    await flush();
    const closeBtn = container.querySelector('button[aria-label]') as HTMLButtonElement;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
    expect(container.innerHTML).toBe('');
  });

  it('Escape closes the compare page', async () => {
    act(() => {
      openCompare();
    });
    await flush();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });
});
