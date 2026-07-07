import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { saveToCloud, loadFromCloud, BACKUP_KEYS } from '../../js/features/cloud-sync.tsx';
import { _lzLoad } from '../../js/core/storage.ts';

// ── localStorage mock with all keys ──────────────────────────
const _store: Record<string, string> = {};
const lsMock = {
  getItem: (k: string) => _store[k] ?? null,
  setItem: (k: string, v: string) => {
    _store[k] = v;
  },
  removeItem: (k: string) => {
    delete _store[k];
  },
  clear: () => {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
  get length() {
    return Object.keys(_store).length;
  },
  key: (i: number) => Object.keys(_store)[i] ?? null,
};

beforeEach(() => {
  lsMock.clear();
  vi.stubGlobal('localStorage', lsMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

// ── _profileSnapKeys logic ────────────────────────────────────
// Test the pattern _profileSnapKeys uses (iterated separately since function not exported)
describe('Profile snapshot key pattern', () => {
  it('ew_p_ prefix pattern matches profile keys correctly', () => {
    lsMock.setItem('ew_known', '["apple"]');
    lsMock.setItem('ew_p_abc123__ew_known', '["banana"]');
    lsMock.setItem('ew_p_xyz789__ew_game', '{}');
    lsMock.setItem('ew_theme', 'dark');

    const profileKeys: string[] = [];
    for (let i = 0; i < lsMock.length; i++) {
      const k = lsMock.key(i);
      if (k && k.startsWith('ew_p_')) profileKeys.push(k);
    }

    expect(profileKeys).toContain('ew_p_abc123__ew_known');
    expect(profileKeys).toContain('ew_p_xyz789__ew_game');
    expect(profileKeys).not.toContain('ew_known');
    expect(profileKeys).not.toContain('ew_theme');
  });

  it('profile snapshot keys include both profile IDs', () => {
    lsMock.setItem('ew_p_profile1__ew_known', '[]');
    lsMock.setItem('ew_p_profile1__ew_srs', '{}');
    lsMock.setItem('ew_p_profile2__ew_known', '["word"]');
    lsMock.setItem('ew_game', '{}');

    const keys: string[] = [];
    for (let i = 0; i < lsMock.length; i++) {
      const k = lsMock.key(i);
      if (k?.startsWith('ew_p_')) keys.push(k);
    }
    expect(keys.length).toBe(3);
    expect(keys.filter((k) => k.includes('profile1')).length).toBe(2);
    expect(keys.filter((k) => k.includes('profile2')).length).toBe(1);
  });
});

// ── saveToCloud / loadFromCloud ────────────────────────────────
describe('saveToCloud / loadFromCloud', () => {
  function mockFetch(): {
    calls: { url: string; opts?: RequestInit }[];
    remote: Record<string, Record<string, string>>;
  } {
    const remote: Record<string, Record<string, string>> = {};
    const calls: { url: string; opts?: RequestInit }[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string, opts?: RequestInit) => {
        calls.push({ url, opts });
        const key = url.split('/sync/')[1].replace('.json', '');
        if (opts?.method === 'PUT') {
          remote[key] = JSON.parse(opts.body as string);
          return { ok: true };
        }
        return { ok: true, json: async () => remote[key] ?? null };
      }),
    );
    return { calls, remote };
  }

  it('saves per-target-language progress keys, not just the fixed list', async () => {
    lsMock.setItem('ew_known', '["abandon"]');
    lsMock.setItem('ew_known_es', '["hola"]');
    lsMock.setItem('ew_srs_fr', '{}');
    const { remote } = mockFetch();

    await saveToCloud();

    const key = lsMock.getItem('ew_sync_key')!;
    expect(remote[key].ew_known_es).toBe('["hola"]');
    expect(remote[key].ew_srs_fr).toBe('{}');
  });

  it('restoring the same key merges local progress with the remote snapshot instead of discarding it', async () => {
    lsMock.setItem('ew_sync_key', 'AAAABBBBCCCC');
    const { remote, calls } = mockFetch();
    remote['AAAABBBBCCCC'] = { _ts: '1', ew_known: '["old"]' };

    lsMock.setItem('ew_known', JSON.stringify(['new', 'words'])); // progress made since the stale remote snapshot

    await loadFromCloud('AAAA-BBBB-CCCC');

    const putCall = calls.find((c) => c.opts?.method === 'PUT');
    expect(putCall).toBeTruthy(); // the merged result gets pushed back so it propagates to other devices
    // The merged (union) result must actually be written to local storage —
    // ew_known is lz-compressed, so read it back the same way the app does.
    expect(new Set(_lzLoad<string[]>('ew_known', []))).toEqual(new Set(['new', 'words', 'old']));
  });

  it('restores any key present in the backup, not just a fixed allow-list', async () => {
    lsMock.setItem('ew_sync_key', 'ZZZZYYYYXXXX');
    const { remote } = mockFetch();
    // ew_mistakes_fr is a dynamic, per-language key (DYNAMIC_KEY_PREFIXES),
    // not one of the fixed BACKUP_KEYS entries, and not a merge-kind key
    // either — a plain string-equality check for it, so this exercises the
    // "any key present in the backup" fallback distinctly from the
    // known/srs/ach/daily merge tests below.
    remote['DDDDEEEEFFFF'] = { _ts: '1', ew_mistakes_fr: '{"bonjour":1}' };

    await loadFromCloud('DDDD-EEEE-FFFF');

    expect(lsMock.getItem('ew_mistakes_fr')).toBe('{"bonjour":1}');
  });
});

// ── Progress merge (known words / SRS / achievements / daily) ─────
describe('Cloud sync — progress merge instead of overwrite', () => {
  function mockFetch(): {
    calls: { url: string; opts?: RequestInit }[];
    remote: Record<string, Record<string, string>>;
  } {
    const remote: Record<string, Record<string, string>> = {};
    const calls: { url: string; opts?: RequestInit }[] = [];
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string, opts?: RequestInit) => {
        calls.push({ url, opts });
        const key = url.split('/sync/')[1].replace('.json', '');
        if (opts?.method === 'PUT') {
          remote[key] = JSON.parse(opts.body as string);
          return { ok: true };
        }
        return { ok: true, json: async () => remote[key] ?? null };
      }),
    );
    return { calls, remote };
  }

  it('known words merge as a union on restore, not a wholesale overwrite', async () => {
    lsMock.setItem('ew_sync_key', 'KNOWN1KNOWN1');
    const { remote } = mockFetch();
    remote['KNOWN1KNOWN1'] = { _ts: '1', ew_known_es: JSON.stringify(['hola', 'adios']) };
    lsMock.setItem('ew_known_es', JSON.stringify(['gracias']));

    await loadFromCloud('KNOW-N1KN-OWN1');

    expect(new Set(_lzLoad<string[]>('ew_known_es', []))).toEqual(
      new Set(['hola', 'adios', 'gracias']),
    );
  });

  it('SRS entries keep whichever side has more repetitions per word, not whichever synced last', async () => {
    lsMock.setItem('ew_sync_key', 'SRSKEY1SRSK1');
    const { remote } = mockFetch();
    // Remote is ahead on "run" (3 reps), behind on "walk" (0 reps, never studied there).
    remote['SRSKEY1SRSK1'] = {
      _ts: '1',
      ew_srs: JSON.stringify({
        run: { ef: 2.5, reps: 3, interval: 15, due: '2026-08-01' },
      }),
    };
    // Local is behind on "run" (1 rep, just started), ahead on "walk" (2 reps).
    lsMock.setItem(
      'ew_srs',
      JSON.stringify({
        run: { ef: 2.3, reps: 1, interval: 1, due: '2026-07-08' },
        walk: { ef: 2.6, reps: 2, interval: 6, due: '2026-07-14' },
      }),
    );

    await loadFromCloud('SRSK-EY1S-RSK1');

    const merged = _lzLoad<Record<string, { reps: number; interval: number }>>('ew_srs', {});
    expect(merged.run.reps).toBe(3); // remote's more-advanced entry wins
    expect(merged.walk.reps).toBe(2); // local's entry survives — remote never had this word
  });

  it('achievements merge as a union', async () => {
    lsMock.setItem('ew_sync_key', 'ACHKEY1ACHK1');
    const { remote } = mockFetch();
    remote['ACHKEY1ACHK1'] = { _ts: '1', ew_ach: JSON.stringify(['first_word', 'streak_7']) };
    lsMock.setItem('ew_ach', JSON.stringify(['streak_7', 'night_owl']));

    await loadFromCloud('ACHK-EY1A-CHK1');

    const merged = JSON.parse(lsMock.getItem('ew_ach')!);
    expect(new Set(merged)).toEqual(new Set(['first_word', 'streak_7', 'night_owl']));
  });

  it('daily activity merges per-date as the max of both sides, not a sum or an overwrite', async () => {
    lsMock.setItem('ew_sync_key', 'DAILYKEYDAI1');
    const { remote } = mockFetch();
    remote['DAILYKEYDAI1'] = {
      _ts: '1',
      ew_daily: JSON.stringify({ '2026-07-01': 5, '2026-07-02': 1 }),
    };
    lsMock.setItem('ew_daily', JSON.stringify({ '2026-07-01': 2, '2026-07-03': 4 }));

    await loadFromCloud('DAIL-YKEY-DAI1');

    const merged = JSON.parse(lsMock.getItem('ew_daily')!);
    expect(merged).toEqual({ '2026-07-01': 5, '2026-07-02': 1, '2026-07-03': 4 });
  });

  it('non-progress keys (settings, game stats, ...) still overwrite wholesale on restore', async () => {
    lsMock.setItem('ew_sync_key', 'PLAINKEY1PL1');
    const { remote } = mockFetch();
    remote['PLAINKEY1PL1'] = { _ts: '1', ew_theme: 'light', ew_game: '{"xp":999}' };
    lsMock.setItem('ew_theme', 'dark');
    lsMock.setItem('ew_game', '{"xp":1}');

    await loadFromCloud('PLAI-NKEY-1PL1');

    expect(lsMock.getItem('ew_theme')).toBe('light'); // remote replaced local, no merge attempted
    expect(lsMock.getItem('ew_game')).toBe('{"xp":999}');
  });

  it('saveToCloud (push, incl. auto-sync) also merges against the remote instead of blindly overwriting it', async () => {
    lsMock.setItem('ew_sync_key', 'PUSHKEY1PUS1');
    const { remote } = mockFetch();
    // A second device already pushed "banana" under this key.
    remote['PUSHKEY1PUS1'] = { _ts: '1', ew_known: JSON.stringify(['banana']) };
    // This device only knows "apple" locally and has never pulled "banana" in.
    lsMock.setItem('ew_known', JSON.stringify(['apple']));

    await saveToCloud();

    // The merge happens locally first (so the push payload is built from
    // already-merged local storage) — verify via the same read path the
    // app uses, since the value is written lz-compressed.
    expect(new Set(_lzLoad<string[]>('ew_known', []))).toEqual(new Set(['apple', 'banana']));
    expect(remote['PUSHKEY1PUS1']._ts).toBeTruthy(); // confirms a PUT actually happened
  });
});

// ── BACKUP_KEYS coverage ──────────────────────────────────────
// Uses the real exported BACKUP_KEYS (not a hand-copied list) so this test
// can't silently drift out of sync with cloud-sync.tsx the way it used to.
describe('Backup keys completeness', () => {
  it('backup includes profile metadata keys', () => {
    expect(BACKUP_KEYS).toContain('ew_profiles');
    expect(BACKUP_KEYS).toContain('ew_active_profile');
  });

  it('backup includes all game-critical keys', () => {
    expect(BACKUP_KEYS).toContain('ew_known');
    expect(BACKUP_KEYS).toContain('ew_srs');
    expect(BACKUP_KEYS).toContain('ew_game');
    expect(BACKUP_KEYS).toContain('ew_ach');
  });

  it('backup includes new feature keys', () => {
    expect(BACKUP_KEYS).toContain('ew_mode_acc');
    expect(BACKUP_KEYS).toContain('ew_mistakes');
  });

  it('backup includes settings tied to the learn/know pair and identity', () => {
    expect(BACKUP_KEYS).toContain('ew_lang');
    expect(BACKUP_KEYS).toContain('ew_direction');
    expect(BACKUP_KEYS).toContain('ew_haptic');
    expect(BACKUP_KEYS).toContain('ew_lb_registered');
    expect(BACKUP_KEYS).toContain('ew_yt_history');
  });

  it('all keys are unique', () => {
    expect(new Set(BACKUP_KEYS).size).toBe(BACKUP_KEYS.length);
  });
});

// ── Async duel expiry math ────────────────────────────────────
describe('Async duel — time validation', () => {
  it('24h = 86_400_000 ms exactly', () => {
    expect(86_400_000).toBe(24 * 60 * 60 * 1000);
  });

  it('fresh challenge is not expired', () => {
    const expiresAt = Date.now() + 86_400_000;
    expect(Date.now() > expiresAt).toBe(false);
  });

  it('challenge from 25 hours ago is expired', () => {
    const createdAt = Date.now() - 25 * 60 * 60 * 1000;
    const expiresAt = createdAt + 86_400_000;
    expect(Date.now() > expiresAt).toBe(true);
  });

  it('challenge with 1 hour remaining is not expired', () => {
    const expiresAt = Date.now() + 3_600_000;
    expect(Date.now() > expiresAt).toBe(false);
  });
});
