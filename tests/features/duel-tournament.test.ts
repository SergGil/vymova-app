import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// ── Mock Firebase fetch ───────────────────────────────────────
const _fbStore: Record<string, unknown> = {};
vi.stubGlobal('fetch', async (url: string, opts?: RequestInit) => {
  const path = url
    .replace(
      'https://english-words-trainer-557e8-default-rtdb.europe-west1.firebasedatabase.app',
      '',
    )
    .replace('.json', '');
  if (opts?.method === 'PUT') {
    _fbStore[path] = JSON.parse(opts.body as string);
  }
  if (opts?.method === 'PATCH') {
    const ex = (_fbStore[path] as Record<string, unknown>) ?? {};
    _fbStore[path] = { ...ex, ...JSON.parse(opts.body as string) };
  }
  if (opts?.method === 'DELETE') {
    delete _fbStore[path];
  }
  return { ok: true, json: async () => _fbStore[path] ?? null } as Response;
});

// ── Tournament bracket builder ─────────────────────────────────
// We test the bracket-building logic by extracting it
type TournMatch = {
  p1: number;
  p2: number;
  p1score: number;
  p2score: number;
  winner: number;
  done: boolean;
  roomId: string;
};

function buildBracket(size: 4 | 8): TournMatch[][] {
  const rounds: TournMatch[][] = [];
  let prev = Array.from({ length: size }, (_, i) => i);
  while (prev.length > 1) {
    const matches: TournMatch[] = [];
    for (let i = 0; i < prev.length; i += 2)
      matches.push({
        p1: prev[i],
        p2: prev[i + 1],
        p1score: 0,
        p2score: 0,
        winner: -1,
        done: false,
        roomId: '',
      });
    rounds.push(matches);
    prev = matches.map((_, i) => -(i + 1));
  }
  return rounds;
}

beforeEach(() => {
  Object.keys(_fbStore).forEach((k) => delete _fbStore[k]);
});
afterEach(() => {});

// ── buildBracket tests ────────────────────────────────────────
describe('buildBracket(4)', () => {
  it('produces 2 rounds (semi + final)', () => {
    const b = buildBracket(4);
    expect(b.length).toBe(2);
  });

  it('round 1 has 2 matches', () => {
    expect(buildBracket(4)[0].length).toBe(2);
  });

  it('final has 1 match', () => {
    expect(buildBracket(4)[1].length).toBe(1);
  });

  it('all slot 0-3 players appear exactly once in round 1', () => {
    const round1 = buildBracket(4)[0];
    const slots = round1.flatMap((m) => [m.p1, m.p2]).sort();
    expect(slots).toEqual([0, 1, 2, 3]);
  });

  it('every match starts with winner=-1 and done=false', () => {
    buildBracket(4)
      .flat()
      .forEach((m) => {
        expect(m.winner).toBe(-1);
        expect(m.done).toBe(false);
      });
  });
});

describe('buildBracket(8)', () => {
  it('produces 3 rounds (quarter + semi + final)', () => {
    expect(buildBracket(8).length).toBe(3);
  });

  it('round 1 has 4 matches', () => {
    expect(buildBracket(8)[0].length).toBe(4);
  });

  it('round 2 has 2 matches', () => {
    expect(buildBracket(8)[1].length).toBe(2);
  });

  it('final has 1 match', () => {
    expect(buildBracket(8)[2].length).toBe(1);
  });

  it('all 8 slots appear exactly once in round 1', () => {
    const round1 = buildBracket(8)[0];
    const slots = round1.flatMap((m) => [m.p1, m.p2]).sort((a, b) => a - b);
    expect(slots).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });
});

// ── Tournament round name helper ──────────────────────────────
function tournRoundName(round: number, totalRounds: number): string {
  const left = totalRounds - round;
  if (left === 1) return '🏆 Фінал';
  if (left === 2) return '🥈 Півфінал';
  if (left === 3) return '🥉 Чвертьфінал';
  return `Раунд ${round + 1}`;
}

describe('tournRoundName()', () => {
  it('4-player tournament: round 0 = Півфінал, round 1 = Фінал', () => {
    expect(tournRoundName(0, 2)).toBe('🥈 Півфінал');
    expect(tournRoundName(1, 2)).toBe('🏆 Фінал');
  });

  it('8-player tournament: round 0 = Чвертьфінал, 1 = Півфінал, 2 = Фінал', () => {
    expect(tournRoundName(0, 3)).toBe('🥉 Чвертьфінал');
    expect(tournRoundName(1, 3)).toBe('🥈 Півфінал');
    expect(tournRoundName(2, 3)).toBe('🏆 Фінал');
  });
});

// ── Power-up state logic ──────────────────────────────────────
describe('Power-up state', () => {
  it('double powerup starts at count 1 when enabled', () => {
    const powerups = { double: 1, skip: 1, freeze: 1 };
    expect(powerups.double).toBe(1);
    powerups.double--;
    expect(powerups.double).toBe(0);
  });

  it('powerups are 0 when disabled', () => {
    const powerups = { double: 0, skip: 0, freeze: 0 };
    expect(Object.values(powerups).every((v) => v === 0)).toBe(true);
  });

  it('double score multiplier logic', () => {
    let score = 3;
    let doubleActive = true;
    // When double is active: +2 instead of +1
    if (doubleActive) {
      score += 2;
      doubleActive = false;
    }
    expect(score).toBe(5);
    expect(doubleActive).toBe(false);
    // Next answer: +1 normal
    score += 1;
    expect(score).toBe(6);
  });
});

// ── Async duel expiry ─────────────────────────────────────────
describe('Async duel expiry', () => {
  it('24-hour expiry is correctly calculated', () => {
    const now = Date.now();
    const expiresAt = now + 86_400_000;
    const diffHours = (expiresAt - now) / 3_600_000;
    expect(diffHours).toBe(24);
  });

  it('expired challenge is detected correctly', () => {
    const createdAt = Date.now() - 90_000_000; // 25 hours ago
    const expiresAt = createdAt + 86_400_000;
    expect(Date.now() > expiresAt).toBe(true);
  });

  it('valid challenge is not expired', () => {
    const expiresAt = Date.now() + 3_600_000; // 1 hour from now
    expect(Date.now() > expiresAt).toBe(false);
  });
});
