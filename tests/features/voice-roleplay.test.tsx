import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { splitFeedback } from '../../js/features/voice-roleplay.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const configMock = vi.hoisted(() => ({
  AI_PROXY_URL: 'https://proxy.example.test',
  AI_TUTOR_ENABLED: true,
}));
vi.mock('../../js/config.ts', () => configMock);

vi.mock('../../js/features/speech.ts', () => ({ _speakWithLang: vi.fn() }));

async function flush(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

describe('splitFeedback()', () => {
  it('splits the reply from the FEEDBACK: suffix', () => {
    expect(splitFeedback('¡Hola! ¿Qué tal?\nFEEDBACK: Great, no mistakes.')).toEqual({
      reply: '¡Hola! ¿Qué tal?',
      feedback: 'Great, no mistakes.',
    });
  });

  it('returns null feedback when no marker is present', () => {
    expect(splitFeedback('Just a reply')).toEqual({ reply: 'Just a reply', feedback: null });
  });
});

describe('voice-roleplay.tsx VoiceRoleplayPage', () => {
  let root: Root;

  beforeEach(() => {
    document.body.innerHTML = '<div id="voice-roleplay-content"></div>';
    configMock.AI_TUTOR_ENABLED = true;
    vi.stubGlobal('fetch', vi.fn());
    // No SpeechRecognition in happy-dom by default → text-input fallback path.
    delete (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition;
    delete (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  async function mount(): Promise<HTMLElement> {
    const { VoiceRoleplayPage } = await import('../../js/features/voice-roleplay.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<VoiceRoleplayPage />);
    });
    return container;
  }

  it('shows the disabled message when the proxy URL is not configured', async () => {
    configMock.AI_TUTOR_ENABLED = false;
    await mount();
    const target = document.getElementById('voice-roleplay-content')!;
    expect(target.querySelectorAll('.roleplay-scenario-row').length).toBe(0);
    expect(target.textContent?.length).toBeGreaterThan(0);
  });

  it('shows a scenario picker first', async () => {
    await mount();
    const target = document.getElementById('voice-roleplay-content')!;
    expect(target.querySelectorAll('.roleplay-scenario-row').length).toBe(100);
  });

  it('falls back to a text input when SpeechRecognition is unsupported, and sends + shows feedback', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ text: 'Good morning!\nFEEDBACK: Use "a coffee", not "one coffee".' }),
    });
    await mount();
    const target = document.getElementById('voice-roleplay-content')!;
    const firstCard = target.querySelectorAll('.roleplay-scenario-row')[1] as HTMLButtonElement; // ordering-coffee
    act(() => {
      firstCard.click();
    });

    const input = target.querySelector('.ai-tutor-input') as HTMLInputElement;
    expect(input).not.toBeNull();
    const setter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      setter.call(input, 'One coffee please');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    const form = target.querySelector('.ai-tutor-form') as HTMLFormElement;
    await act(async () => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    await flush();

    const body = JSON.parse((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body.mode).toBe('roleplay');
    expect(body.scenario).toBe('ordering-coffee');
    expect(target.textContent).toContain('Good morning!');
    expect(target.textContent).toContain('Use "a coffee"');
  });
});
