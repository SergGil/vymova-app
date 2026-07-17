import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { setModeState, setDeckState, setIdxState } from '../../src/deck-store.ts';
import { setKnownWords } from '../../src/known-words-store.ts';
import type { WordEntry } from '../../src/types.ts';
import { HeaderLeft } from '../../js/features/header-left.tsx';

describe('<HeaderLeft/>', () => {
  beforeEach(() => {
    setModeState('en');
    setDeckState([['a'], ['b'], ['c']] as unknown as WordEntry[]);
    setIdxState(1);
    setKnownWords('en', new Set(['a', 'b']));
    setKnownWords('es', new Set());
    setKnownWords('fr', new Set());
    setKnownWords('it', new Set());
    setKnownWords('pt', new Set());
    setKnownWords('de', new Set());
  });

  it('renders the title row with both quick-theme toggle buttons', () => {
    const { container } = render(<HeaderLeft />);
    expect(container.querySelector('.title')!.textContent).toBe('Vymova');
    expect(document.getElementById('title-sw-toggle')).not.toBeNull();
    expect(document.getElementById('title-hp-toggle')).not.toBeNull();
  });

  it('renders CardIdx/CardKnownCount directly, reflecting the current deck/known state', () => {
    render(<HeaderLeft />);
    expect(document.getElementById('cidx')!.textContent).toBe('2/3');
    expect(document.getElementById('cknown')!.textContent).toBe('2');
  });

  it('renders the legacy hidden profile button', () => {
    render(<HeaderLeft />);
    const btn = document.getElementById('profile-btn')!;
    expect(btn.style.display).toBe('none');
    expect(btn.textContent).toContain('Гравець 1');
  });
});
