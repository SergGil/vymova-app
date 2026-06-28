import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setActiveTagSet, getActiveTagSetSnapshot } from '../../src/deck-filter-store.ts';
import { CATEGORY_LIST, WORD_CATEGORIES } from '../../data/categories.js';
import { TagFilterSelect } from '../../js/features/tag-filter-select.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

let _mockWordIdx = new Map<string, number>();
vi.mock('../../js/core/word-index.ts', () => ({
  getWordIndex: () => _mockWordIdx,
}));

const { _rebuildEsDeck, _isSpecialMode } = vi.hoisted(() => ({
  _rebuildEsDeck: vi.fn(),
  _isSpecialMode: vi.fn(() => false),
}));
vi.mock('../../js/features/deck-mode.tsx', () => ({ _rebuildEsDeck, _isSpecialMode }));

function mount(): { selTag: HTMLSelectElement; root: Root } {
  document.body.innerHTML = '<select id="sel-tag"></select><select id="sel-mode"><option value="en">en</option></select><select id="sel-range"><option value="all">all</option></select>';
  const selTag = document.getElementById('sel-tag') as HTMLSelectElement;
  const root = createRoot(selTag);
  act(() => { root.render(<TagFilterSelect />); });
  return { selTag, root };
}

describe('tag-filter-select.tsx TagFilterSelect', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setActiveTagSet(null);
    _mockWordIdx = new Map();
    _rebuildEsDeck.mockClear();
    _isSpecialMode.mockClear();
    _isSpecialMode.mockReturnValue(false);
  });

  it('renders the "all topics" option plus one option per category', () => {
    const { selTag } = mount();
    const options = Array.from(selTag.options);
    expect(options[0].value).toBe('');
    expect(options.length).toBe(CATEGORY_LIST.length + 1);
    expect(options[1].value).toBe(CATEGORY_LIST[0]);
  });

  it('sets selTag width via fitSelTag on mount', () => {
    const { selTag } = mount();
    expect(selTag.style.width).not.toBe('');
  });

  it('selecting a category sets state._activeTagSet and dispatches change on #sel-range', () => {
    const { selTag } = mount();
    const cat = CATEGORY_LIST[0];
    const word = (WORD_CATEGORIES[cat] ?? [])[0];
    _mockWordIdx = new Map([[word.toLowerCase(), 0]]);

    selTag.value = cat;
    let changeFired = false;
    document.getElementById('sel-range')!.addEventListener('change', () => { changeFired = true; });

    act(() => { selTag.dispatchEvent(new Event('change')); });

    expect(getActiveTagSetSnapshot()).toEqual(new Set([word.toLowerCase()]));
    expect(changeFired).toBe(true);
    expect(_rebuildEsDeck).not.toHaveBeenCalled();
  });

  it('selecting the empty option clears state._activeTagSet', () => {
    const { selTag } = mount();
    setActiveTagSet(new Set(['abandon']));
    selTag.value = '';
    act(() => { selTag.dispatchEvent(new Event('change')); });
    expect(getActiveTagSetSnapshot()).toBeNull();
  });

  it('calls _rebuildEsDeck instead of dispatching change when in a special mode', () => {
    _isSpecialMode.mockReturnValue(true);
    const { selTag } = mount();
    const cat = CATEGORY_LIST[0];
    selTag.value = cat;

    let changeFired = false;
    document.getElementById('sel-range')!.addEventListener('change', () => { changeFired = true; });

    act(() => { selTag.dispatchEvent(new Event('change')); });

    expect(_rebuildEsDeck).toHaveBeenCalled();
    expect(changeFired).toBe(false);
  });
});
