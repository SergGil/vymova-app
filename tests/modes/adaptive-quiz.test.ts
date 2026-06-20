import { describe, it, expect } from 'vitest';
import { numOptionsFor, timeLimitFor } from '../../js/modes/adaptive-quiz.tsx';

describe('adaptive-quiz.tsx difficulty mapping', () => {
  it('numOptionsFor() increases option count as difficulty rises', () => {
    expect(numOptionsFor(1)).toBe(3);
    expect(numOptionsFor(2)).toBe(4);
    expect(numOptionsFor(5)).toBe(6);
  });

  it('numOptionsFor() caps at 6 options', () => {
    expect(numOptionsFor(10)).toBe(6);
  });

  it('timeLimitFor() decreases the timer as difficulty rises', () => {
    expect(timeLimitFor(1)).toBe(11);
    expect(timeLimitFor(2)).toBe(9);
    expect(timeLimitFor(5)).toBe(4);
  });

  it('timeLimitFor() floors at 4 seconds', () => {
    expect(timeLimitFor(10)).toBe(4);
  });

  it('harder difficulty always yields a shorter-or-equal timer than easier difficulty', () => {
    for (let d = 1; d < 5; d++) {
      expect(timeLimitFor(d + 1)).toBeLessThanOrEqual(timeLimitFor(d));
    }
  });
});
