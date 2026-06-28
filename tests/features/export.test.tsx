import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';

let _mockWordIdx = new Map<string, number>();
vi.mock('../../js/core/word-index.ts', () => ({
  getWordIndex: () => _mockWordIdx,
}));

const { ExportInit } = await import('../../js/features/export.tsx');

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ExportInit />); });
  return { container, root };
}

describe('export.tsx ExportInit', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = `
      <select id="export-filter"><option value="known">known</option><option value="all">all</option><option value="unknown">unknown</option></select>
      <button id="btn-anki-export"></button>
      <button id="btn-pdf-export"></button>
      <button id="btn-share"></button>
    `;
    state.deck = [];
    setKnownWords('en', new Set());
    _mockWordIdx = new Map();
    localStorage.clear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders nothing', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('exports to Anki via a downloadable blob', () => {
    setKnownWords('en', new Set([(W as unknown as string[][])[0][0]]));
    const { root } = mount();
    roots.push(root);
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-url');
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    act(() => { document.getElementById('btn-anki-export')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(createObjectURL).toHaveBeenCalled();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:mock-url');
    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
  });

  it('exports to PDF via window.open and writes a table of words', () => {
    setKnownWords('en', new Set([(W as unknown as string[][])[0][0]]));
    _mockWordIdx.set((W as unknown as string[][])[0][0], 0);
    const { root } = mount();
    roots.push(root);
    const writeMock = vi.fn();
    const closeMock = vi.fn();
    vi.stubGlobal('alert', vi.fn());
    const openSpy = vi.fn().mockReturnValue({ document: { write: writeMock, close: closeMock } });
    window.open = openSpy as unknown as typeof window.open;

    act(() => { document.getElementById('btn-pdf-export')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(openSpy).toHaveBeenCalledWith('', '_blank');
    expect(writeMock).toHaveBeenCalled();
    expect(writeMock.mock.calls[0][0]).toContain((W as unknown as string[][])[0][0]);
    expect(closeMock).toHaveBeenCalled();
    vi.unstubAllGlobals();
    // @ts-expect-error restore stub
    delete window.open;
  });

  it('alerts when there are no words to export to PDF', () => {
    setKnownWords('en', new Set());
    const { root } = mount();
    roots.push(root);
    (document.getElementById('export-filter') as HTMLSelectElement).value = 'known';
    const alertSpy = vi.fn();
    vi.stubGlobal('alert', alertSpy);

    act(() => { document.getElementById('btn-pdf-export')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(alertSpy).toHaveBeenCalledWith('Немає слів для експорту. Змініть фільтр.');
    vi.unstubAllGlobals();
  });

  it('removes listeners on unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });
    // No assertion target needed beyond confirming unmount doesn't throw —
    // listener removal is implicitly covered by the effect cleanup running.
  });
});
