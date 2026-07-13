import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { _fbGet, _fbPatch, _fbSet } from '../../js/features/duel/duel-firebase.ts';

// _fbGet/_fbPatch/_fbSet used to resolve successfully even when the
// underlying fetch failed (no r.ok check) or threw (no catch/retry) — see
// duel.ts's _pushScore()/_finishMyGame(), which treated a failed write as a
// success and left both players desynced forever. This suite pins the fix:
// transient failures (network throw, 5xx) get retried with backoff; a 4xx
// (bad request, or a database.rules.json .validate rejection) is never
// retried since retrying the same malformed/disallowed write can't help.
function mockFetch(responses: (() => Promise<Response> | Response)[]): ReturnType<typeof vi.fn> {
  let i = 0;
  return vi.fn(async () => {
    const r = responses[Math.min(i, responses.length - 1)];
    i++;
    return r();
  });
}
function okRes(body: unknown = {}): Response {
  return { ok: true, status: 200, json: async () => body } as unknown as Response;
}
function errRes(status: number): Response {
  return { ok: false, status, json: async () => null } as unknown as Response;
}

describe('duel-firebase retry/error-surfacing', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('_fbGet resolves on the first try when fetch succeeds immediately', async () => {
    const fetchMock = mockFetch([() => okRes({ hello: 'world' })]);
    vi.stubGlobal('fetch', fetchMock);
    await expect(_fbGet('/x')).resolves.toEqual({ hello: 'world' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('_fbPatch retries a thrown network error and succeeds on the 2nd attempt', async () => {
    const fetchMock = mockFetch([
      () => {
        throw new Error('network down');
      },
      () => okRes(),
    ]);
    vi.stubGlobal('fetch', fetchMock);
    const p = _fbPatch('/x', { a: 1 });
    await vi.runAllTimersAsync();
    await expect(p).resolves.toBeUndefined();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('_fbSet retries a 500 and succeeds on the 3rd (last) attempt', async () => {
    const fetchMock = mockFetch([() => errRes(500), () => errRes(503), () => okRes()]);
    vi.stubGlobal('fetch', fetchMock);
    const p = _fbSet('/x', { a: 1 });
    await vi.runAllTimersAsync();
    await expect(p).resolves.toBeUndefined();
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('_fbPatch gives up and throws after exhausting retries on a persistent 500', async () => {
    const fetchMock = mockFetch([() => errRes(500)]);
    vi.stubGlobal('fetch', fetchMock);
    const p = _fbPatch('/x', { a: 1 });
    // Attach the rejection handler before advancing timers so the eventual
    // rejection is never briefly unhandled.
    const assertion = expect(p).rejects.toThrow('HTTP 500');
    await vi.runAllTimersAsync();
    await assertion;
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('_fbPatch does NOT retry a 400 (e.g. a rules .validate rejection) — fails fast', async () => {
    const fetchMock = mockFetch([() => errRes(400)]);
    vi.stubGlobal('fetch', fetchMock);
    await expect(_fbPatch('/x', { score: 999 })).rejects.toThrow('HTTP 400');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('_fbPatch does NOT retry a 412 (lost a conditional-write race) — fails fast', async () => {
    const fetchMock = mockFetch([() => errRes(412)]);
    vi.stubGlobal('fetch', fetchMock);
    await expect(_fbPatch('/x', { score: 1 })).rejects.toThrow('HTTP 412');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
