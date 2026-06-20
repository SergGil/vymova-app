import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.ts';

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));
vi.mock('../../js/features/render-game-bar.ts', () => ({ renderGameBar: vi.fn() }));
vi.mock('../../js/core/audio.ts', () => ({ playSound: vi.fn() }));

const { CardMeta } = await import('../../js/features/card-meta.tsx');
const { CatPairsWiringInit } = await import('../../js/modes/catpairs.tsx');

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const cw: WordEntry = ['abandon', 'покинути', 'He will abandon it.', 'Він покине його.', 'ˈæ', 'v'];

describe('CatPairsWiringInit no longer steals the unmark-button click', () => {
  it('lets a real click on #btn-unmark reach card-meta.tsx and remove the word from the known set', () => {
    document.body.innerHTML = '';
    state._mode = 'en';
    state.deck = [cw, cw, cw];
    state.idx = 0;
    state.cw = cw;
    state._wordIdx = new Map();
    state.known = new Set(['abandon']);

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<><CardMeta /><CatPairsWiringInit /></>);
    });

    const btn = container.querySelector('#btn-unmark') as HTMLButtonElement;
    expect(btn).not.toBeNull();
    act(() => { btn.click(); });

    expect(state.known.has('abandon')).toBe(false);
  });
});
