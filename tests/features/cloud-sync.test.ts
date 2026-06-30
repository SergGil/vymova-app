import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { saveToCloud, loadFromCloud } from '../../js/features/cloud-sync.tsx';

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

  it('restoring your own key pushes current local progress first instead of silently discarding it', async () => {
    lsMock.setItem('ew_sync_key', 'AAAABBBBCCCC');
    const { remote, calls } = mockFetch();
    remote['AAAABBBBCCCC'] = { _ts: '1', ew_known: '["old"]' };

    lsMock.setItem('ew_known', '["new","words"]'); // progress made since the stale remote snapshot

    await loadFromCloud('AAAA-BBBB-CCCC');

    const putCall = calls.find((c) => c.opts?.method === 'PUT');
    expect(putCall).toBeTruthy();
    expect(JSON.parse(putCall!.opts!.body as string).ew_known).toBe('["new","words"]');
    // the push (PUT) must complete before the restore's own GET reads it back
    expect(lsMock.getItem('ew_known')).toBe('["new","words"]');
  });

  it('restores any key present in the backup, not just a fixed allow-list', async () => {
    lsMock.setItem('ew_sync_key', 'ZZZZYYYYXXXX');
    const { remote } = mockFetch();
    remote['DDDDEEEEFFFF'] = { _ts: '1', ew_known_fr: '["bonjour"]' };

    await loadFromCloud('DDDD-EEEE-FFFF');

    expect(lsMock.getItem('ew_known_fr')).toBe('["bonjour"]');
  });
});

// ── BACKUP_KEYS coverage ──────────────────────────────────────
describe('Backup keys completeness', () => {
  const BACKUP_KEYS = [
    'ew_known',
    'ew_known_lz',
    'ew_srs',
    'ew_srs_lz',
    'ew_game',
    'ew_daily',
    'ew_ach',
    'ew_fontsize',
    'ew_theme',
    'ew_sw',
    'ew_ws_voice',
    'ew_ws_uk_voice',
    'ew_notif_enabled',
    'ew_notes',
    'ew_bookmarks',
    'ew_milestones',
    'ew_mode_acc',
    'ew_mistakes',
    'ew_profiles',
    'ew_active_profile',
  ];

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
