// Global test setup ─────────────────────────────────────────────
// jest-dom matchers (toBeInTheDocument(), toHaveTextContent(), ...) for
// @testing-library/react-based tests (legacy-modernization-roadmap.md item
// 4 — new tests only; the existing react-dom/client+querySelector suites
// are untouched and don't need this).
import '@testing-library/jest-dom/vitest';
import { act } from 'react';
import { afterAll, vi } from 'vitest';
import type * as ReactDOMClient from 'react-dom/client';

// Systemic guard for the class of bug that broke the "Deploy to GitHub
// Pages" CI job twice (2026-08-15, tests/features/profile-page.test.tsx):
// a raw react-dom/client createRoot() left un-unmounted keeps its
// effects/listeners alive, and a stray callback firing later during
// vitest-worker teardown crashes the run with EnvironmentTeardownError
// even though every test passed. ~105 files in this suite call
// createRoot() directly (not through a shared helper), and as of this
// fix roughly 40% of them didn't call root.unmount() anywhere — a
// per-file convention with no enforcement, easy to forget in a new test
// file. Rather than editing every call site, this wraps react-dom/
// client's own createRoot so every root gets tracked centrally and
// force-unmounted once the whole file's tests finish, regardless of
// whether the file remembered to do it itself.
//
// afterAll, not afterEach: some files (e.g. card-actions.test.ts)
// deliberately mount ONE long-lived root in beforeAll — wiring up
// listeners on static DOM fixtures — meant to survive across every test
// in that file, not be torn down between them. Unmounting per-test broke
// that pattern outright (a first-run local test confirmed this — 34
// failures in card-actions.test.ts from listeners disappearing after
// test 1). afterAll still guarantees no root survives past the point
// where the original bug fired (vitest-worker teardown, which begins
// only after a file's last test completes), so it closes the same gap
// without assuming which of the two established mount patterns a file
// uses. Calling unmount() on a root a test already unmounted itself is a
// safe no-op, so files with their own afterEach are unaffected.
const activeRoots = new Set<ReturnType<typeof ReactDOMClient.createRoot>>();

vi.mock('react-dom/client', async (importOriginal) => {
  const actual = await importOriginal<typeof ReactDOMClient>();
  return {
    ...actual,
    createRoot: (...args: Parameters<typeof actual.createRoot>) => {
      const root = actual.createRoot(...args);
      activeRoots.add(root);
      return root;
    },
  };
});

afterAll(() => {
  for (const root of activeRoots) {
    try {
      act(() => {
        root.unmount();
      });
    } catch {
      // Best-effort cleanup of whatever is still alive, not a hard
      // assertion — a root the file already unmounted itself throws here.
    }
  }
  activeRoots.clear();
});

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
