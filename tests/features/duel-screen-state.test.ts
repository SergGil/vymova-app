import { describe, it, expect } from 'vitest';
import { _getDuelScreen } from '../../js/features/duel.ts';
import { getDuelScreenSnapshot } from '../../src/duel-room-store.ts';

describe('duel screen state (Фаза 7.4-B / 9, state.duelScreen)', () => {
  it('_getDuelScreen() reflects state.duelScreen default', () => {
    expect(_getDuelScreen()).toBe(getDuelScreenSnapshot());
    expect(_getDuelScreen()).toBe('lobby');
  });
});
