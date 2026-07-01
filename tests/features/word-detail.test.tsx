import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setModeState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';
import { WordDetailPage, openWordDetail } from '../../js/features/word-detail.tsx';
import { ensureLangTableLoaded } from '../../js/features/mode-utils.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { speakForCode } = vi.hoisted(() => ({ speakForCode: vi.fn() }));
vi.mock('../../js/features/speak-lang.ts', () => ({ speakForCode }));

const abandon: WordEntry = [
  'abandon',
  'покидати, залишати',
  'They had to abandon the car when the road flooded.',
  'Їм довелося залишити машину, коли дорога затопилась.',
  '/əˈbændən/',
  'v',
];

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<WordDetailPage />);
  });
  return { container, root };
}

describe('word-detail.tsx WordDetailPage', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setModeState('en');
    speakForCode.mockClear();
  });

  it('shows the English headword and Ukrainian translation for the default en/ua pair', () => {
    const { container } = mount();
    act(() => {
      openWordDetail(abandon);
    });
    expect(container.querySelector('#wd-word')!.textContent).toBe('abandon');
    expect(container.querySelector('#wd-transl')!.textContent).toBe('покидати, залишати');
  });

  it('shows the target-language headword and its own transcription/example for a non-EN/UA pair', async () => {
    await ensureLangTableLoaded('es');
    setModeState('es-ua');
    const { container } = mount();
    act(() => {
      openWordDetail(abandon);
    });

    // Front (learn language) is Spanish, not the raw English master headword.
    expect(container.querySelector('#wd-word')!.textContent).toBe('abandonar');
    // Back (know language) is Ukrainian.
    expect(container.querySelector('#wd-transl')!.textContent).toBe('покидати, залишати');
    // Transcription is the Spanish entry's own IPA, not English's.
    expect(container.querySelector('#wd-ipa')!.textContent).toBe('[aβandoˈnar]');
    // Example sentence is the Spanish one, not the English master example.
    expect(container.querySelector('#wd-ex-en')!.textContent).toContain(
      'Tuvieron que abandonar el coche cuando la carretera se inundó.',
    );
  });

  it('speaks the headword using the front language code, not a hardcoded English locale', async () => {
    await ensureLangTableLoaded('es');
    setModeState('es-ua');
    const { container } = mount();
    act(() => {
      openWordDetail(abandon);
    });

    const speakBtn = container.querySelector('#wd-word')!.parentElement!.querySelector('button')!;
    act(() => {
      speakBtn.click();
    });
    expect(speakForCode).toHaveBeenCalledWith('es', 'abandonar', 'abandon', expect.anything());
  });
});
