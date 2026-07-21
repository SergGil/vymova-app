// Vymova — tests/core/worker-client-id.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { getWorkerClientId } from '../../js/core/worker-client-id.ts';

describe('getWorkerClientId', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('generates a persisted id matching the Worker\'s _getClientId() format (8-64 alnum chars)', () => {
    const id = getWorkerClientId();
    expect(id).toMatch(/^[A-Za-z0-9]{8,64}$/);
  });

  it('returns the same id on repeated calls (persisted, not regenerated)', () => {
    const a = getWorkerClientId();
    const b = getWorkerClientId();
    expect(b).toBe(a);
  });

  it('persists to localStorage under ew_worker_client_id', () => {
    const id = getWorkerClientId();
    expect(localStorage.getItem('ew_worker_client_id')).toBe(id);
  });
});
