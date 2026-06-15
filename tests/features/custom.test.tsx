import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { CustomWordsInit } from '../../js/features/custom.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { recordCustomWordAdded, invalidateSimilarCache, playSound, setDeck, invalidateReadingIndex, invalidateCatCache } = vi.hoisted(() => ({
  recordCustomWordAdded: vi.fn(),
  invalidateSimilarCache: vi.fn(),
  playSound: vi.fn(),
  setDeck: vi.fn(),
  invalidateReadingIndex: vi.fn(),
  invalidateCatCache: vi.fn(),
}));
vi.mock('../../js/features/game.ts', () => ({ recordCustomWordAdded }));
vi.mock('../../js/features/similar-words.tsx', () => ({ invalidateSimilarCache }));
vi.mock('../../js/core/audio.ts', () => ({ playSound }));
vi.mock('../../js/core/card-engine.ts', () => ({ setDeck }));
vi.mock('../../js/modes/reading.tsx', () => ({ invalidateReadingIndex }));
vi.mock('../../js/modes/catpairs.tsx', () => ({ invalidateCatCache }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<CustomWordsInit />); });
  return { container, root };
}

function setInputValue(el: HTMLInputElement, value: string): void {
  const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
  nativeValueSetter.call(el, value);
}

describe('custom.tsx CustomWordsInit', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="custom-modal"></div>
      <button id="custom-modal-close"></button>
      <input id="cw-en" />
      <input id="cw-ua" />
      <input id="cw-ex-en" />
      <input id="cw-ex-ua" />
      <div id="cw-error"></div>
      <div id="custom-words-list"></div>
      <button id="btn-add-word"></button>
      <button id="cw-save"></button>
      <select id="export-filter"><option value="known">known</option><option value="all">all</option><option value="custom">custom</option><option value="unknown">unknown</option></select>
      <button id="btn-anki-export"></button>
      <button id="btn-pdf-export"></button>
      <button id="btn-share"></button>
      <button id="btn-csv-import"></button>
      <input id="csv-import-file" type="file" />
      <div id="csv-import-hint" style="display:none"></div>
      <div id="milestone-toast" class="milestone-toast"></div>
    `;
    state.deck = [];
    state.known = new Set();
    state._customWords = [];
    state._wordIdx = new Map();
    localStorage.clear();
    roots = [];
    recordCustomWordAdded.mockClear();
    invalidateSimilarCache.mockClear();
    playSound.mockClear();
    setDeck.mockClear();
    invalidateReadingIndex.mockClear();
    invalidateCatCache.mockClear();
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders nothing', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('opens the modal and shows the empty-list message', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { document.getElementById('btn-add-word')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(document.getElementById('custom-modal')!.className).toBe('open');
    expect(document.getElementById('custom-words-list')!.textContent).toBe('Власних слів ще немає');
  });

  it('shows an error when fields are empty', () => {
    const { root } = mount();
    roots.push(root);
    act(() => { document.getElementById('cw-save')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(document.getElementById('cw-error')!.textContent).toBe('Введіть обидва поля');
  });

  it('shows an error for words that are too short', () => {
    const { root } = mount();
    roots.push(root);
    setInputValue(document.getElementById('cw-en') as HTMLInputElement, 'a');
    setInputValue(document.getElementById('cw-ua') as HTMLInputElement, 'а');
    act(() => { document.getElementById('cw-save')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(document.getElementById('cw-error')!.textContent).toBe('Слово занадто коротке');
  });

  it('shows a duplicate error for words already in the dictionary', () => {
    state._wordIdx.set('hello', 0);
    const { root } = mount();
    roots.push(root);
    setInputValue(document.getElementById('cw-en') as HTMLInputElement, 'hello');
    setInputValue(document.getElementById('cw-ua') as HTMLInputElement, 'привіт');
    act(() => { document.getElementById('cw-save')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(document.getElementById('cw-error')!.textContent).toContain('hello');
    expect(document.getElementById('cw-error')!.textContent).toContain('вже є у словнику');
  });

  it('adds a new custom word and updates the dictionary, deck and storage', () => {
    const { root } = mount();
    roots.push(root);
    const startLen = W.length;
    setInputValue(document.getElementById('cw-en') as HTMLInputElement, 'flibber');
    setInputValue(document.getElementById('cw-ua') as HTMLInputElement, 'флібер');
    act(() => { document.getElementById('cw-save')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(document.getElementById('cw-error')!.textContent).toBe('');
    expect(W.length).toBe(startLen + 1);
    expect((W as unknown as string[][])[startLen][0]).toBe('flibber');
    expect(state._wordIdx.get('flibber')).toBe(startLen);
    expect(state._customWords).toHaveLength(1);
    expect(state._customWords[0].en).toBe('flibber');
    expect(state.deck).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('ew_custom')!)).toHaveLength(1);
    expect(recordCustomWordAdded).toHaveBeenCalled();
    expect(invalidateReadingIndex).toHaveBeenCalled();
    expect(invalidateCatCache).toHaveBeenCalled();
    expect(invalidateSimilarCache).toHaveBeenCalled();
    expect(playSound).toHaveBeenCalledWith('know');
    expect((document.getElementById('cw-en') as HTMLInputElement).value).toBe('');
  });

  it('saves on Enter key press in an input field', () => {
    const { root } = mount();
    roots.push(root);
    const enInp = document.getElementById('cw-en') as HTMLInputElement;
    setInputValue(enInp, 'zorpix');
    setInputValue(document.getElementById('cw-ua') as HTMLInputElement, 'зорпікс');
    act(() => { enInp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); });
    expect(state._customWords).toHaveLength(1);
    expect(state._customWords[0].en).toBe('zorpix');
  });

  it('deletes a custom word from the list', () => {
    state._customWords = [{ en: 'gloop', ua: 'глуп' }];
    localStorage.setItem('ew_custom', JSON.stringify(state._customWords));
    const { root } = mount();
    roots.push(root);
    act(() => { document.getElementById('btn-add-word')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    const delBtn = document.querySelector('.custom-del') as HTMLButtonElement;
    expect(delBtn).not.toBeNull();
    act(() => { delBtn.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(state._customWords).toHaveLength(0);
    expect(JSON.parse(localStorage.getItem('ew_custom')!)).toHaveLength(0);
    expect(setDeck).toHaveBeenCalled();
  });

  it('exports to Anki via a downloadable blob', () => {
    state.known = new Set([(W as unknown as string[][])[0][0]]);
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
    state.known = new Set([(W as unknown as string[][])[0][0]]);
    state._wordIdx.set((W as unknown as string[][])[0][0], 0);
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
    state.known = new Set();
    const { root } = mount();
    roots.push(root);
    (document.getElementById('export-filter') as HTMLSelectElement).value = 'known';
    const alertSpy = vi.fn();
    vi.stubGlobal('alert', alertSpy);

    act(() => { document.getElementById('btn-pdf-export')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });

    expect(alertSpy).toHaveBeenCalledWith('Немає слів для експорту. Змініть фільтр.');
    vi.unstubAllGlobals();
  });

  it('imports words from a CSV file', async () => {
    const { root } = mount();
    roots.push(root);
    const csvText = 'newword1,новеслово1\nnewword2,новеслово2,Example sentence,Приклад речення';
    const file = new File([csvText], 'words.csv', { type: 'text/csv' });
    const fileInput = document.getElementById('csv-import-file') as HTMLInputElement;
    Object.defineProperty(fileInput, 'files', { value: [file], configurable: true });

    await act(async () => {
      fileInput.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise(r => setTimeout(r, 0));
    });

    expect(state._customWords).toHaveLength(2);
    expect(state._customWords.map(c => c.en)).toEqual(['newword1', 'newword2']);
    const toast = document.getElementById('milestone-toast')!;
    expect(toast.textContent).toContain('Імпортовано 2 слів');
    expect(toast.className).toContain('show');
  });

  it('removes listeners on unmount', () => {
    const { root } = mount();
    act(() => { root.unmount(); });

    setInputValue(document.getElementById('cw-en') as HTMLInputElement, 'unboundword');
    setInputValue(document.getElementById('cw-ua') as HTMLInputElement, 'словобезслухача');
    act(() => { document.getElementById('cw-save')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(state._customWords).toHaveLength(0);
  });
});
