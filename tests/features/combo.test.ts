import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getComboMult, addCombo, breakCombo, awardXP } from '../../js/features/combo.ts';

// combo.ts uses document.getElementById (safely — returns early if null)
// and window.getGameData / window.saveGameData / window.checkAchievements (all optional-chained)
// → safe to import in jsdom

beforeEach(() => {
  // Reset sessionCombo to 0 before each test
  breakCombo(); // breakCombo() sets sessionCombo=0
  // Silence window.playSound / window.checkAchievements / window.getGameData
  vi.stubGlobal('playSound', undefined);
  vi.stubGlobal('checkAchievements', undefined);
  vi.stubGlobal('getGameData', undefined);
  vi.stubGlobal('saveGameData', undefined);
});

// ── getComboMult() ────────────────────────────────────────────
describe('getComboMult()', () => {
  it('returns 1 at sessionCombo = 0', () => {
    expect(getComboMult()).toBe(1);
  });

  it('returns 1 at sessionCombo = 1', () => {
    addCombo();
    expect(getComboMult()).toBe(1);
  });

  it('returns 1 at sessionCombo = 4', () => {
    for (let i = 0; i < 4; i++) addCombo();
    expect(getComboMult()).toBe(1);
  });

  it('returns 2 at sessionCombo = 5', () => {
    for (let i = 0; i < 5; i++) addCombo();
    expect(getComboMult()).toBe(2);
  });

  it('returns 2 at sessionCombo = 9', () => {
    for (let i = 0; i < 9; i++) addCombo();
    expect(getComboMult()).toBe(2);
  });

  it('returns 3 at sessionCombo = 10', () => {
    for (let i = 0; i < 10; i++) addCombo();
    expect(getComboMult()).toBe(3);
  });

  it('returns 3 at sessionCombo = 25', () => {
    for (let i = 0; i < 25; i++) addCombo();
    expect(getComboMult()).toBe(3);
  });
});

// ── addCombo() / breakCombo() ─────────────────────────────────
describe('addCombo() + breakCombo()', () => {
  it('addCombo increments counter (mult changes at threshold)', () => {
    expect(getComboMult()).toBe(1);
    for (let i = 0; i < 5; i++) addCombo();
    expect(getComboMult()).toBe(2);
  });

  it('breakCombo resets mult back to 1', () => {
    for (let i = 0; i < 10; i++) addCombo();
    expect(getComboMult()).toBe(3);
    breakCombo();
    expect(getComboMult()).toBe(1);
  });

  it('breakCombo on zero combo does not throw', () => {
    expect(() => breakCombo()).not.toThrow();
    expect(getComboMult()).toBe(1);
  });

  it('calling breakCombo twice is safe', () => {
    for (let i = 0; i < 5; i++) addCombo();
    breakCombo();
    breakCombo();
    expect(getComboMult()).toBe(1);
  });

  it('full cycle: 10 adds → mult=3 → break → mult=1 → 5 adds → mult=2', () => {
    for (let i = 0; i < 10; i++) addCombo();
    expect(getComboMult()).toBe(3);
    breakCombo();
    expect(getComboMult()).toBe(1);
    for (let i = 0; i < 5; i++) addCombo();
    expect(getComboMult()).toBe(2);
  });

  it('mult stays 3 beyond 10 (does not overflow)', () => {
    for (let i = 0; i < 30; i++) addCombo();
    expect(getComboMult()).toBe(3);
  });
});

// ── Multiplier thresholds are strict ─────────────────────────
describe('getComboMult() — boundary precision', () => {
  it('exactly 4 combos → mult 1, exactly 5 → mult 2', () => {
    for (let i = 0; i < 4; i++) addCombo();
    expect(getComboMult()).toBe(1);
    addCombo(); // 5th
    expect(getComboMult()).toBe(2);
  });

  it('exactly 9 combos → mult 2, exactly 10 → mult 3', () => {
    for (let i = 0; i < 9; i++) addCombo();
    expect(getComboMult()).toBe(2);
    addCombo(); // 10th
    expect(getComboMult()).toBe(3);
  });
});

// ── awardXP() ──────────────────────────────────────────────────
describe('awardXP()', () => {
  it('awards base XP unmultiplied with no combo streak', () => {
    expect(awardXP(5)).toBe(5);
  });

  it('applies the current combo multiplier', () => {
    for (let i = 0; i < 5; i++) addCombo(); // mult = 2
    expect(awardXP(5)).toBe(10);
  });

  it('persists the awarded XP into game data', () => {
    const before = JSON.parse(localStorage.getItem('ew_game') ?? '{}').xp ?? 0;
    awardXP(7);
    const after = JSON.parse(localStorage.getItem('ew_game') ?? '{}').xp;
    expect(after).toBe(before + 7);
  });
});
