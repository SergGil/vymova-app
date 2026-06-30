import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const configMock = vi.hoisted(() => ({
  AI_PROXY_URL: 'https://proxy.example.test',
  AI_TUTOR_ENABLED: true,
}));
vi.mock('../../js/config.ts', () => configMock);

async function flush(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

// Setting input.value directly skips React's internal value tracker, so
// onChange never fires — go through the native setter like a real keystroke.
function typeInto(input: HTMLInputElement, value: string): void {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set!;
  act(() => {
    setter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

describe('ai-tutor.tsx AiTutorPage', () => {
  let root: Root;

  beforeEach(() => {
    document.body.innerHTML = '<div id="ai-tutor-content"></div>';
    configMock.AI_TUTOR_ENABLED = true;
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    act(() => {
      root?.unmount();
    });
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  async function mount(): Promise<HTMLElement> {
    const { AiTutorPage } = await import('../../js/features/ai-tutor.tsx');
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<AiTutorPage />);
    });
    return container;
  }

  it('shows the disabled message when the proxy URL is not configured', async () => {
    configMock.AI_TUTOR_ENABLED = false;
    await mount();
    const target = document.getElementById('ai-tutor-content')!;
    expect(target.querySelector('.ai-tutor-disabled')).not.toBeNull();
  });

  it('renders an empty-state hint and the chat form when enabled', async () => {
    await mount();
    const target = document.getElementById('ai-tutor-content')!;
    expect(target.querySelector('.ai-tutor-hint')).not.toBeNull();
    expect(target.querySelector('.ai-tutor-input')).not.toBeNull();
  });

  it('sends the typed message to the proxy and renders the reply', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ text: 'Hola! ¿Cómo estás?' }),
    });
    await mount();
    const target = document.getElementById('ai-tutor-content')!;
    const input = target.querySelector('.ai-tutor-input') as HTMLInputElement;
    const form = target.querySelector('.ai-tutor-form') as HTMLFormElement;

    typeInto(input, 'Hola');
    await act(async () => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    await flush();

    expect(fetch).toHaveBeenCalledWith(
      'https://proxy.example.test/chat',
      expect.objectContaining({ method: 'POST' }),
    );
    const body = JSON.parse((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body.mode).toBe('tutor');
    expect(body.messages[0]).toEqual({ role: 'user', text: 'Hola' });
    expect(target.textContent).toContain('Hola! ¿Cómo estás?');
  });

  it('shows an error message when the proxy call fails', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: false, status: 500 });
    await mount();
    const target = document.getElementById('ai-tutor-content')!;
    const input = target.querySelector('.ai-tutor-input') as HTMLInputElement;
    const form = target.querySelector('.ai-tutor-form') as HTMLFormElement;

    typeInto(input, 'Hi');
    await act(async () => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });
    await flush();

    expect(target.querySelector('.ai-tutor-error')).not.toBeNull();
  });
});
