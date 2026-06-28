// Vymova — js/core/today.ts
// Current date as YYYY-MM-DD, computed fresh on every call (replaces
// state.TODAY, which was a snapshot field that only refreshed wherever a
// caller happened to reassign it).
export function today(): string {
  return new Date().toISOString().slice(0, 10);
}
