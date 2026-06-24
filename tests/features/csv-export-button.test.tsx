import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { CsvExportButton } from '../../js/features/csv-export-button.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<CsvExportButton />); });
  return { container, root };
}

describe('csv-export-button.tsx CsvExportButton', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setKnownWords('en', new Set());
    state.deck = (W as unknown as WordEntry[]).slice(0, 5);
  });

  it('renders the export button with the translated label', () => {
    const { container } = mount();
    const btn = container.querySelector('#btn-csv-export') as HTMLButtonElement;
    expect(btn).not.toBeNull();
    expect(btn.textContent).toBe('📊 Google Sheets CSV');
  });

  it('triggers a CSV download when clicked', () => {
    let capturedBlob: Blob | null = null;
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockImplementation((b: Blob | MediaSource) => { capturedBlob = b as Blob; return 'blob:fake-url'; });
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    const { container } = mount();
    const btn = container.querySelector('#btn-csv-export') as HTMLButtonElement;
    act(() => { btn.click(); });

    expect(createObjectURL).toHaveBeenCalled();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:fake-url');
    expect(capturedBlob).not.toBeNull();
    expect(capturedBlob!.type).toBe('text/csv;charset=utf-8');

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('includes known/unknown status rows derived from state.known', async () => {
    setKnownWords('en', new Set([W[0][0]]));
    let capturedBlob: Blob | null = null;
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockImplementation((b: Blob | MediaSource) => { capturedBlob = b as Blob; return 'blob:fake-url'; });
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    const { container } = mount();
    const btn = container.querySelector('#btn-csv-export') as HTMLButtonElement;
    act(() => { btn.click(); });

    const text = await capturedBlob!.text();
    expect(text).toContain('Знаю');
    expect(text).toContain(W[0][0]);

    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });
});
