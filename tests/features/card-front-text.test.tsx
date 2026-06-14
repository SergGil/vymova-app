import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { notifyStateChange } from '../../src/store.ts';
import type { WordEntry } from '../../src/types.ts';
import {
  WordText, Transcription, PosTag, SrsBadge, Translation, ExEn, ExUa,
} from '../../js/features/card-front-text.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const cw: WordEntry = ['abandon', 'покинути', 'He will <b>abandon</b> it.', 'Він <b>покине</b> його.', 'ˈæ', 'v'];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

describe('card-front-text.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    state._mode = 'en';
    state.cw = cw;
    state.flipped = false;
    state.srsData = {};
    state.TODAY = '2026-01-01';
  });

  it('WordText renders nothing when there is no current word', () => {
    state.cw = null;
    const { container } = mount(WordText);
    expect(container.innerHTML).toBe('');
  });

  it('WordText renders the front word for the current mode', () => {
    const { container } = mount(WordText);
    expect(container.querySelector('#wword')!.textContent).toBe('abandon');
  });

  it('Transcription shows the decoded IPA for English-front modes', () => {
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    expect(el.style.display).toBe('block');
    expect(el.textContent).toBe('[ˈæ]');
  });

  it('Transcription hides itself for non-English-front modes', () => {
    state._mode = 'ua';
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('PosTag shows the translated part-of-speech for the front language', () => {
    const { container } = mount(PosTag);
    const el = container.querySelector('#wpos') as HTMLElement;
    expect(el.style.display).toBe('block');
    expect(el.textContent).toBe('verb');
  });

  it('PosTag hides itself when the word has no part-of-speech code', () => {
    state.cw = ['abandon', 'покинути', '', '', '', ''] as unknown as WordEntry;
    const { container } = mount(PosTag);
    const el = container.querySelector('#wpos') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('SrsBadge renders a hidden placeholder when there is nothing to show', () => {
    document.body.innerHTML = '<select id="sel-range"><option value="all" selected>all</option></select>';
    const { container } = mount(SrsBadge);
    const el = container.querySelector('#srs-next') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('SrsBadge shows a "new" badge when the SRS range is selected and the word is unscheduled', () => {
    document.body.innerHTML = '<select id="sel-range"><option value="srs" selected>srs</option></select>';
    (document.getElementById('sel-range') as HTMLSelectElement).value = 'srs';
    const { container } = mount(SrsBadge);
    const el = container.querySelector('#srs-next') as HTMLElement;
    expect(el.className).toBe('srs-next new');
    expect(el.textContent).toBe('🆕 Нове');
  });

  it('Translation toggles the "show" class based on flipped state', () => {
    const { container } = mount(Translation);
    const el = container.querySelector('#wtransl') as HTMLElement;
    expect(el.textContent).toBe('покинути');
    expect(el.className).toBe('transl');

    act(() => { state.flipped = true; notifyStateChange(); });
    expect(container.querySelector('#wtransl')!.className).toBe('transl show');
  });

  it('ExEn renders the bolded English example HTML', () => {
    const { container } = mount(ExEn);
    const el = container.querySelector('#exen') as HTMLElement;
    expect(el.innerHTML).toContain('<b>abandon</b>');
  });

  it('ExUa renders the bolded Ukrainian example and toggles "show" with flipped', () => {
    const { container } = mount(ExUa);
    const el = container.querySelector('#exua') as HTMLElement;
    expect(el.innerHTML).toContain('<b>покине</b>');
    expect(el.className).toBe('ex-ua');

    act(() => { state.flipped = true; notifyStateChange(); });
    expect(container.querySelector('#exua')!.className).toBe('ex-ua show');
  });
});
