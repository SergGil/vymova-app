// @testing-library/react (legacy-modernization-roadmap.md item 4).
// Uses fireEvent (synchronous), not userEvent — userEvent's internal delay
// scheduling doesn't play well with the fake timers this file needs for the
// component's various setTimeout-based reveals (100ms auto-copy, 2000ms/
// 3000ms label reverts).
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
import { render as renderCard } from '../../js/core/card-engine.ts';
import { updateSrsUI } from '../../js/core/srs.ts';

function getExportTextarea(): HTMLTextAreaElement {
  return document.getElementById('export-textarea') as HTMLTextAreaElement;
}
function getImportTextarea(): HTMLTextAreaElement {
  return document.getElementById('import-textarea') as HTMLTextAreaElement;
}
function getImportError(): HTMLElement {
  return document.getElementById('import-error') as HTMLElement;
}
function setTextareaValue(ta: HTMLTextAreaElement, value: string): void {
  const nativeValueSetter = Object.getOwnPropertyDescriptor(
    HTMLTextAreaElement.prototype,
    'value',
  )!.set!;
  nativeValueSetter.call(ta, value);
  fireEvent.input(ta);
}

describe('progress-io.tsx ProgressIO', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('navigator', {
      ...navigator,
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
    // onImportConfirm gates the (destructive, no-merge) import behind a
    // confirm() dialog — default the mock to "OK" so existing import tests
    // keep exercising the actual import path.
    vi.stubGlobal('confirm', vi.fn(() => true));

    setKnownWords('en', new Set(['abandon']));
    clearSrsData();
    localStorage.clear();

    render(<ProgressIO />);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('exports progress as base64 into the textarea and opens the modal', async () => {
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    expect(closeStats).toHaveBeenCalled();

    const ta = getExportTextarea();
    expect(ta.value.length).toBeGreaterThan(0);
    const decoded = JSON.parse(decodeURIComponent(escape(atob(ta.value))));
    expect(decoded.v).toBe(4);
    expect(JSON.parse(decoded.known.en)).toEqual(['abandon']);

    await act(async () => {
      vi.advanceTimersByTime(100);
      await Promise.resolve();
    });
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(ta.value);
    // The auto-copy-on-open path never schedules a revert (unlike the
    // manual select-all click below) — this is the original's asymmetry,
    // preserved rather than "fixed".
    expect(screen.getByText('✓ Скопійовано!')).toBeInTheDocument();
  });

  it('manually clicking select-all copies and reverts the label after 2s', async () => {
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    await act(async () => {
      vi.advanceTimersByTime(100);
      await Promise.resolve();
    });

    await act(async () => {
      fireEvent.click(screen.getByText('✓ Скопійовано!'));
      await Promise.resolve();
    });
    expect(screen.getByText('✓ Скопійовано!')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText('Виділити все')).toBeInTheDocument();
  });

  it('opens the import modal and clears previous state', async () => {
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    await act(async () => {
      vi.advanceTimersByTime(100);
      await Promise.resolve();
    });
    act(() => {
      fireEvent.click(screen.getByText('Готово'));
    });

    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });

    expect(closeStats).toHaveBeenCalled();
    expect(getImportTextarea().value).toBe('');
    expect(getImportError().textContent).toBe('');
  });

  it('shows an error when confirming an empty import code', () => {
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    act(() => {
      fireEvent.click(screen.getByText('Імпортувати'));
    });
    expect(getImportError().textContent).toBe('Встав код прогресу');
  });

  it('shows an error when confirming an invalid import code', () => {
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    act(() => {
      setTextareaValue(getImportTextarea(), 'not-valid-base64!!');
    });
    act(() => {
      fireEvent.click(screen.getByText('Імпортувати'));
    });
    expect(getImportError().textContent).toBe('❌ Невірний код — перевір чи повністю скопіював');
  });

  it('round-trips export → import, restoring known words and refreshing the UI', () => {
    setKnownWords('en', new Set(['abandon', 'idiom']));
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    const code = getExportTextarea().value;

    setKnownWords('en', new Set());

    act(() => {
      fireEvent.click(screen.getByText('Готово'));
    });
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    act(() => {
      setTextareaValue(getImportTextarea(), code);
    });
    act(() => {
      fireEvent.click(screen.getByText('Імпортувати'));
    });

    expect(getKnownSnapshot('en')).toEqual(new Set(['abandon', 'idiom']));
    expect(renderGameBar).toHaveBeenCalled();
    expect(refreshGameBarLevel).toHaveBeenCalled();
    expect(openStats).toHaveBeenCalled();
    expect(renderCard).toHaveBeenCalled();
    expect(updateSrsUI).toHaveBeenCalled();

    expect(screen.getByText('✓ Імпортовано!')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByText('📥 Імпорт')).toBeInTheDocument();
  });

  it('round-trips known words for a non-English learn language too (regression: v3 export/import only ever touched the English bucket)', () => {
    setKnownWords('es', new Set(['hola', 'gato']));
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    const code = getExportTextarea().value;

    setKnownWords('es', new Set());

    act(() => {
      fireEvent.click(screen.getByText('Готово'));
    });
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    act(() => {
      setTextareaValue(getImportTextarea(), code);
    });
    act(() => {
      fireEvent.click(screen.getByText('Імпортувати'));
    });

    expect(getKnownSnapshot('es')).toEqual(new Set(['hola', 'gato']));
  });

  it('does not import when the user cancels the confirm() dialog', () => {
    setKnownWords('en', new Set(['abandon', 'idiom']));
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    const code = getExportTextarea().value;

    setKnownWords('en', new Set());
    vi.stubGlobal('confirm', vi.fn(() => false));

    act(() => {
      fireEvent.click(screen.getByText('Готово'));
    });
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    act(() => {
      setTextareaValue(getImportTextarea(), code);
    });
    act(() => {
      fireEvent.click(screen.getByText('Імпортувати'));
    });

    // Import modal stays open and nothing was restored — cancelling the
    // confirm() must leave current progress untouched.
    expect(screen.getByText('Імпортувати')).toBeInTheDocument();
    expect(getKnownSnapshot('en')).toEqual(new Set());
  });

  it('closing the export modal (via the done button) resets the select-all label', async () => {
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    await act(async () => {
      vi.advanceTimersByTime(100);
      await Promise.resolve();
    });
    expect(screen.getByText('✓ Скопійовано!')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText('Готово'));
    });
    expect(screen.queryByText('✓ Скопійовано!')).not.toBeInTheDocument();
    expect(document.getElementById('export-textarea')).toBeNull(); // modal unmounted

    // Reopening starts the label fresh, not still showing the previous
    // export's "copied" state.
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    expect(screen.getByText('Виділити все')).toBeInTheDocument();
  });

  it('closing the export modal via a backdrop click behaves the same as the done button', async () => {
    act(() => {
      fireEvent.click(screen.getByText('📤 Експорт'));
    });
    await act(async () => {
      vi.advanceTimersByTime(100);
      await Promise.resolve();
    });

    const backdrop = getExportTextarea().closest('.import-panel')!.parentElement!;
    act(() => {
      fireEvent.click(backdrop);
    });
    expect(document.getElementById('export-textarea')).toBeNull();
  });

  it('cancelling the import modal closes it without importing', () => {
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    expect(screen.getByText('Відміна')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText('Відміна'));
    });
    expect(screen.queryByText('Відміна')).not.toBeInTheDocument();
  });

  it('clicking the import backdrop closes it without importing', () => {
    act(() => {
      fireEvent.click(screen.getByText('📥 Імпорт'));
    });
    const backdrop = getImportTextarea().closest('.import-panel')!.parentElement!;
    act(() => {
      fireEvent.click(backdrop);
    });
    expect(screen.queryByText('Відміна')).not.toBeInTheDocument();
  });
});
