import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const configMock = vi.hoisted(() => ({
  AI_PROXY_URL: 'https://proxy.example.test',
  AI_TUTOR_ENABLED: true,
}));
vi.mock('../../js/config.ts', () => configMock);

describe('sendStoryRequest()', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it('posts mode:"story" with lang and level, and returns {text, title}', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ text: 'Once upon a time...', title: 'A Tale' }),
    });
    const { sendStoryRequest } = await import('../../js/modes/story.tsx');
    const result = await sendStoryRequest('es', 'ua', 'A2');

    expect(fetch).toHaveBeenCalledWith(
      'https://proxy.example.test/chat',
      expect.objectContaining({ method: 'POST' }),
    );
    const body = JSON.parse((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body.mode).toBe('story');
    expect(body.lang).toEqual({ know: 'ua', learn: 'es' });
    expect(body.level).toBe('A2');
    expect(result).toEqual({ text: 'Once upon a time...', title: 'A Tale' });
  });

  it('throws when the proxy responds with a non-ok status', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: false, status: 500 });
    const { sendStoryRequest } = await import('../../js/modes/story.tsx');
    await expect(sendStoryRequest('es', 'ua', 'A2')).rejects.toThrow('AI proxy responded 500');
  });

  it('throws when the proxy returns no text', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({}),
    });
    const { sendStoryRequest } = await import('../../js/modes/story.tsx');
    await expect(sendStoryRequest('es', 'ua', 'A2')).rejects.toThrow('AI proxy returned no text');
  });
});
