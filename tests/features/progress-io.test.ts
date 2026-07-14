import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createElement, act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setKnownWords, getKnownSnapshot } from '../../src/known-words-store.ts';
import { clearSrsData } from '../../src/srs-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));
vi.mock('../../js/core/srs.ts', () => ({ updateSrsUI: vi.fn() }));
vi.mock('../../js/features/render-game-bar.ts', () => ({ renderGameBar: vi.fn() }));
vi.mock('../../js/features/game-bar-level.tsx', () => ({ refreshGameBarLevel: vi.fn() }));
vi.mock('../../js/features/stats-trigger.ts', () => ({ openStats: vi.fn(), closeStats: vi.fn() }));

import { ProgressIO } from '../../js/features/progress-io.tsx';
import { closeStats, openStats } from '../../js/features/stats-trigger.ts';
import { renderGameBar } from '../../js/features/render-game-bar.ts';
import { refreshGameBarLevel } from '../../js/features/game-bar-level.tsx';
import { render } from '../../js/core/card-engine.ts';
import { updateSrsUI } from '../../js/core/srs.ts';

function setupDom(): void {
  document.body.innerHTML = `
    <button id="btn-export"></button>
    <textarea id="export-textarea"></textarea>
    <div id="export-modal"><span id="export-select-all"></span><button id="export-modal-close"></button></div>

    <button id="btn-import-open"></button>
    <div id="import-modal" class="">
      <textarea id="import-textarea"></textarea>
      <span id="import-error"></span>
      <button id="import-confirm"></button>
      <button id="import-cancel"></button>
    </div>
  `;
}

describe('progress-io.tsx ProgressIO', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    setupDom();
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.useFakeTimers();
    vi.stubGlobal('navigator', {
      ...navigator,
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
    // onImportConfirm now gates the (destructive, no-merge) import behind a
    // confirm() dialog — default the mock to "OK" so existing import tests
    // keep exercising the actual import path.
    vi.stubGlobal('confirm', vi.fn(() => true));

    setKnownWords('en', new Set(['abandon']));
    clearSrsData();
    localStorage.clear();

    root = createRoot(container);
    act(() => {
      root.render(createElement(ProgressIO));
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('exports progress as base64 into the textarea and opens the modal', async () => {
    act(() => {
      document
        .getElementById('btn-export')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(closeStats).toHaveBeenCalled();

    const ta = document.getElementById('export-textarea') as HTMLTextAreaElement;
    expect(ta.value.length).toBeGreaterThan(0);
    const decoded = JSON.parse(decodeURIComponent(escape(atob(ta.value))));
    expect(decoded.v).toBe(4);
    expect(JSON.parse(decoded.known.en)).toEqual(['abandon']);

    expect((document.getElementById('export-modal') as HTMLElement).style.display).toBe('flex');

    await act(async () => {
      vi.advanceTimersByTime(100);
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(ta.value);
    expect(document.getElementById('export-select-all')!.textContent).toBe('✓ Скопійовано!');
  });

  it('opens the import modal and clears previous state', () => {
    (document.getElementById('import-textarea') as HTMLTextAreaElement).value = 'old';
    document.getElementById('import-error')!.textContent = 'old error';

    act(() => {
      document
        .getElementById('btn-import-open')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(closeStats).toHaveBeenCalled();
    expect((document.getElementById('import-textarea') as HTMLTextAreaElement).value).toBe('');
    expect(document.getElementById('import-error')!.textContent).toBe('');
    expect(document.getElementById('import-modal')!.className).toBe('open');
  });

  it('shows an error when confirming an empty import code', () => {
    (document.getElementById('import-textarea') as HTMLTextAreaElement).value = '';
    act(() => {
      document
        .getElementById('import-confirm')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('import-error')!.textContent).toBe('Встав код прогресу');
  });

  it('shows an error when confirming an invalid import code', () => {
    (document.getElementById('import-textarea') as HTMLTextAreaElement).value =
      'not-valid-base64!!';
    act(() => {
      document
        .getElementById('import-confirm')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('import-error')!.textContent).toBe(
      '❌ Невірний код — перевір чи повністю скопіював',
    );
  });

  it('round-trips export → import, restoring known words and refreshing the UI', async () => {
    setKnownWords('en', new Set(['abandon', 'idiom']));
    act(() => {
      document
        .getElementById('btn-export')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const code = (document.getElementById('export-textarea') as HTMLTextAreaElement).value;

    setKnownWords('en', new Set());

    (document.getElementById('import-textarea') as HTMLTextAreaElement).value = code;
    act(() => {
      document
        .getElementById('import-confirm')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(document.getElementById('import-modal')!.className).toBe('');
    expect(getKnownSnapshot('en')).toEqual(new Set(['abandon', 'idiom']));
    expect(renderGameBar).toHaveBeenCalled();
    expect(refreshGameBarLevel).toHaveBeenCalled();
    expect(openStats).toHaveBeenCalled();
    expect(render).toHaveBeenCalled();
    expect(updateSrsUI).toHaveBeenCalled();

    const btn = document.getElementById('btn-import-open')!;
    expect(btn.textContent).toBe('✓ Імпортовано!');
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(btn.textContent).toBe('📥 Імпорт');
  });

  it('round-trips known words for a non-English learn language too (regression: v3 export/import only ever touched the English bucket)', () => {
    setKnownWords('es', new Set(['hola', 'gato']));
    act(() => {
      document
        .getElementById('btn-export')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const code = (document.getElementById('export-textarea') as HTMLTextAreaElement).value;

    setKnownWords('es', new Set());

    (document.getElementById('import-textarea') as HTMLTextAreaElement).value = code;
    act(() => {
      document
        .getElementById('import-confirm')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(getKnownSnapshot('es')).toEqual(new Set(['hola', 'gato']));
  });

  it('does not import when the user cancels the confirm() dialog', () => {
    setKnownWords('en', new Set(['abandon', 'idiom']));
    act(() => {
      document
        .getElementById('btn-export')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const code = (document.getElementById('export-textarea') as HTMLTextAreaElement).value;

    setKnownWords('en', new Set());
    vi.stubGlobal('confirm', vi.fn(() => false));

    act(() => {
      document
        .getElementById('btn-import-open')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    (document.getElementById('import-textarea') as HTMLTextAreaElement).value = code;
    act(() => {
      document
        .getElementById('import-confirm')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    // Import modal stays open and nothing was restored — cancelling the
    // confirm() must leave current progress untouched.
    expect(document.getElementById('import-modal')!.className).toBe('open');
    expect(getKnownSnapshot('en')).toEqual(new Set());
  });

  it('closing the export modal resets it and the select-all label', () => {
    document.getElementById('export-select-all')!.textContent = '✓ Скопійовано!';
    act(() => {
      document
        .getElementById('export-modal-close')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect((document.getElementById('export-modal') as HTMLElement).style.display).toBe('none');
    expect(document.getElementById('export-select-all')!.textContent).toBe('Виділити все');
  });

  it('cancelling the import modal clears its open state', () => {
    document.getElementById('import-modal')!.className = 'open';
    act(() => {
      document
        .getElementById('import-cancel')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('import-modal')!.className).toBe('');
  });
});
