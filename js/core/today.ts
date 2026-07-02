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
