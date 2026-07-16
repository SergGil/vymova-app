// Vymova — js/core/today.ts
// Current date as YYYY-MM-DD, computed fresh on every call (replaces
// state.TODAY, which was a snapshot field that only refreshed wherever a
// caller happened to reassign it).
//
// Uses the LOCAL calendar day, not UTC. `d.toISOString()` is always UTC, so
// slicing it directly rolls the "day" over at UTC midnight — for any
// timezone east of UTC (e.g. Kyiv, UTC+2/+3) that's 2-3 AM local time,
// meaning a late-night study session could silently get attributed to
// "yesterday". Shifting by the timezone offset before formatting fixes that
// while keeping the same YYYY-MM-DD string shape everywhere else relies on.
export function localDateStr(d: Date): string {
  const tzOffsetMs = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tzOffsetMs).toISOString().slice(0, 10);
}

export function today(): string {
  return localDateStr(new Date());
}

// Calendar-day subtraction, not `Date.now() - 86_400_000` — on a DST
// transition day the real elapsed time between "now" and "the same local
// clock time yesterday" isn't exactly 24h (23h on spring-forward, 25h on
// fall-back), so a flat ms subtraction can land on the wrong calendar day
// right around local midnight. The Date constructor's day-rollover already
// handles this correctly (same trick as msUntilNextLocalMidnight below).
export function yesterday(): string {
  const now = new Date();
  return localDateStr(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1));
}

/** Milliseconds from now until the next local midnight (00:00) — used for
 * "resets tomorrow" countdowns (e.g. the once-per-day mission). */
export function msUntilNextLocalMidnight(): number {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return next.getTime() - now.getTime();
}
