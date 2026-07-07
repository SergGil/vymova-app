import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DictationPage, openDictation } from '../../js/modes/dictation.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('DictationPage', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    document.body.innerHTML = '<div id="dict-overlay" style="display:none;"></div>';
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  it('opens with a round ready to type, and the overlay becomes visible', () => {
    act(() => {
      root.render(<DictationPage />);
    });
    act(() => {
      openDictation();
    });

    const overlay = document.getElementById('dict-overlay')!;
    expect(overlay.style.display).toBe('flex');

    const input = container.querySelector<HTMLInputElement>('[data-testid="dict-input"]');
    expect(input).toBeTruthy();
    expect(input!.value).toBe('');
  });

  it('disables the Check button until something is typed', () => {
    act(() => {
      root.render(<DictationPage />);
    });
    act(() => {
      openDictation();
    });

    const input = container.querySelector<HTMLInputElement>('[data-testid="dict-input"]')!;
    // Locate the Check button by its disabled state — more robust than
    // text content, which is translated per UI language.
    const checkButton = Array.from(container.querySelectorAll('button')).find((b) =>
      b.hasAttribute('disabled'),
    );
    expect(checkButton).toBeTruthy();
    expect(checkButton!.disabled).toBe(true);

    act(() => {
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )!.set!;
      setter.call(input, 'hello world');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(checkButton!.disabled).toBe(false);
  });

  it('typing an answer and submitting moves to the result phase with a score shown', () => {
    act(() => {
      root.render(<DictationPage />);
    });
    act(() => {
      openDictation();
    });

    const input = container.querySelector<HTMLInputElement>('[data-testid="dict-input"]')!;
    act(() => {
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value',
      )!.set!;
      setter.call(input, 'some typed answer');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    act(() => {
      input.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }),
      );
    });

    const score = container.querySelector('[data-testid="dict-score"]');
    expect(score).toBeTruthy();
    expect(container.textContent).toContain('some typed answer');
    // The input field itself is gone in the result phase (only the "next"
    // control remains), confirming the phase actually switched.
    expect(container.querySelector('[data-testid="dict-input"]')).toBeNull();
  });
});
