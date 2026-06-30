// Global test setup ─────────────────────────────────────────────
// Tests must not hit the real network (e.g. <img> flag/illustration
// requests, Firebase calls in duel/cloud-sync/leaderboard). Without
// this, pending requests get aborted on window teardown and crash the
// run with an unhandled AbortError, even though all tests pass.
const settings = (
  globalThis as unknown as {
    window?: { happyDOM?: { settings: { fetch: { interceptor: unknown } } } };
  }
).window?.happyDOM?.settings;
if (settings) {
  settings.fetch.interceptor = {
    beforeAsyncRequest: async ({ window }: { window: { Response: typeof Response } }) =>
      new window.Response('', { status: 200 }),
  };
}
