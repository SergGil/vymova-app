import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ModesModalController, openModesModal } from '../../js/features/modes-modal.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: Root;

function mount(): void {
  const container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(<ModesModalController />);
  });
}

describe('modes-modal.tsx (ModesModalController)', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="btn-modes-open"></button>
      <div id="modes-overlay" class="modes-overlay">
        <button class="mode-card" id="btn-quiz"></button>
        <button class="mode-card" id="btn-tempo"></button>
        <button id="modes-close"></button>
      </div>
      <select id="sel-mode"><option value="tempo" selected>tempo</option></select>
    `;
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    document.body.innerHTML = '';
  });

  it('opens the modal (adds the "open" class) when the open button is clicked', () => {
    mount();
    const overlay = document.getElementById('modes-overlay') as HTMLElement;
    act(() => {
      document.getElementById('btn-modes-open')!.click();
    });
    expect(overlay.className).toBe('modes-overlay open');
  });

  it('highlights the mode-card matching the current #sel-mode value on open', () => {
    mount();
    act(() => {
      document.getElementById('btn-modes-open')!.click();
    });
    expect(document.getElementById('btn-tempo')!.className).toContain('mode-card--active');
    expect(document.getElementById('btn-quiz')!.className).not.toContain('mode-card--active');
  });

  it('closes on close-button click and reflects it via the "modes-overlay" class', () => {
    mount();
    act(() => {
      document.getElementById('btn-modes-open')!.click();
    });
    act(() => {
      document.getElementById('modes-close')!.click();
    });
    expect(document.getElementById('modes-overlay')!.className).toBe('modes-overlay');
  });

  it('closes on Escape while open', () => {
    mount();
    act(() => {
      document.getElementById('btn-modes-open')!.click();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(document.getElementById('modes-overlay')!.className).toBe('modes-overlay');
  });

  it('openModesModal() (the exported imperative trigger) opens it too', () => {
    mount();
    act(() => {
      openModesModal();
    });
    expect(document.getElementById('modes-overlay')!.className).toBe('modes-overlay open');
  });

  it('openModesModal() before mount / after unmount is a silent no-op', () => {
    expect(() => openModesModal()).not.toThrow();
    mount();
    act(() => {
      root.unmount();
    });
    expect(() => openModesModal()).not.toThrow();
  });
});
