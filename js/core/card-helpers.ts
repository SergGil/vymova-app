// Vymova — js/core/card-helpers.ts
// Pure helpers extracted from app.ts so they can be unit-tested without DOM.
import type { WordEntry } from '../../src/types.js';
import { t, pluralLabel, getLang } from '../features/i18n.ts';

// ── Error-safe wrapper ─────────────────────────────────────────
export function safe(fn: () => void): void {
  try {
    fn();
  } catch (e) {
    console.warn('[safe]', (e as Error).message ?? e);
  }
}

// ── Bold helpers ───────────────────────────────────────────────
// Each wraps the first matching occurrence of a word in <b>…</b>.
// Returns src unchanged if src already contains <b>.

/**
 * Pull alternate word forms out of a headword's parenthetical, e.g.
 * "spend (spent, spent)" -> ["spent", "spent"]. Irregular verbs list their
 * past/participle forms this way, and example sentences often use those
 * forms instead of the base headword — a plain "spend\w*" suffix match
 * can never catch "spent". Segments that aren't a single bare word (notes
 * like "мн.ч: deer" get their prefix stripped; multi-word notes like
 * "про манеру" are dropped entirely) are filtered out.
 */
function altFormsOf(raw: string): string[] {
  const m = raw.match(/\(([^)]*)\)/);
  if (!m) return [];
  return m[1]
    .split(',')
    .map((seg) => {
      const idx = seg.lastIndexOf(':');
      return (idx === -1 ? seg : seg.slice(idx + 1)).trim();
    })
    .filter((s) => /^[A-Za-zА-Яа-яІіЇїЄєҐґ'-]+$/.test(s));
}

/** Builds a case-insensitive "<b>" wrapper that matches `phrase` (with a
 * trailing \w* per word, so plurals/conjugations still highlight) inside
 * `src`, or returns null if `phrase` doesn't occur in `src` at all. */
function tryBold(src: string, phrase: string): string | null {
  const parts = phrase
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*');
  if (!parts.length) return null;
  const re = new RegExp('(' + parts.join('\\s+') + ')', 'i');
  return re.test(src) ? src.replace(re, '<b>$1</b>') : null;
}

/** Bold the English headword (w[0]) inside an example sentence. Falls back
 * to any alternate forms in the headword's parenthetical (irregular verb
 * forms) if the base word itself doesn't appear in the sentence. */
export function boldEn(src: string, w: WordEntry): string {
  if (!src) return '';
  if (src.indexOf('<b>') !== -1) return src;
  const raw = w[0] as string;
  const bw = raw.replace(/\s*\([^)]*\)/g, '').trim();
  const base = tryBold(src, bw);
  if (base) return base;
  for (const alt of altFormsOf(raw)) {
    const result = tryBold(src, alt);
    if (result) return result;
  }
  return src;
}

/** Bold the Ukrainian translation (w[1], first segment) inside a UA sentence. */
export function boldUa(src: string, w: WordEntry): string {
  if (!src) return src;
  const uw = (w[1] as string)
    .split(/[;,/]/)[0]
    .replace(/\s*\([^)]*\)/g, '')
    .trim()
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return src.replace(new RegExp('(' + uw + '\\w*)', 'i'), '<b>$1</b>');
}

/** Bold an arbitrary headword string (first segment before ; , /) inside src.
 * Falls back to alternate forms in the word's parenthetical, same as
 * `boldEn`, if the base word doesn't appear in the sentence. */
export function boldHead(src: string, word: string): string {
  if (!src) return '';
  if (!word || src.indexOf('<b>') !== -1) return src;
  const hw = word
    .replace(/\s*\([^)]*\)/g, '')
    .split(/[;,/]/)[0]
    .trim();
  if (!hw) return src;
  const base = tryBold(src, hw);
  if (base) return base;
  for (const alt of altFormsOf(word)) {
    const result = tryBold(src, alt);
    if (result) return result;
  }
  return src;
}

// ── SRS badge logic ────────────────────────────────────────────

export interface SrsEntry {
  ef?: number;
  reps?: number;
  due?: string;
  interval?: number;
}

interface SrsBadgeInfo {
  text: string;
  className: string; // e.g. 'srs-next new'
  show: boolean;
}

/**
 * Pure function: given an SRS record, today's ISO date string, and the
 * current range selector value, returns the badge display info.
 * Returns null when the badge should be hidden.
 */
export function srsStatusInfo(
  sd: SrsEntry | undefined,
  today: string,
  rangeVal: string,
): SrsBadgeInfo | null {
  if (!sd || !sd.due) {
    if (rangeVal === 'srs' || rangeVal === 'weak') {
      return { text: t('srs.badgeNew'), className: 'srs-next new', show: true };
    }
    return null;
  }
  const diffDays = Math.round(
    (new Date(sd.due).getTime() - new Date(today).getTime()) / 86_400_000,
  );
  if (diffDays < 0) {
    const over = Math.abs(diffDays);
    return {
      text: t('srs.badgeOverdue', { n: over, unit: pluralLabel('common_day', over) }),
      className: 'srs-next over',
      show: true,
    };
  }
  if (diffDays === 0) {
    return { text: t('srs.badgeToday'), className: 'srs-next today', show: true };
  }
  if (diffDays <= 3) {
    return {
      text: t('srs.badgeSoon', { n: diffDays, unit: pluralLabel('common_day', diffDays) }),
      className: 'srs-next soon',
      show: true,
    };
  }
  return {
    text: t('srs.badgeFuture', { n: diffDays, unit: pluralLabel('common_day', diffDays) }),
    className: 'srs-next ok',
    show: true,
  };
}

/** Forgetting-curve tooltip text shown on the SRS badge: next 5 review intervals. */
export function forgettingCurveTooltip(sd: SrsEntry | undefined): string {
  if (!sd?.due || !sd.ef) return '';
  const ef = sd.ef;
  let interval = sd.interval ?? 1;
  const future = [interval];
  for (let i = 0; i < 4; i++) {
    interval = Math.round(interval * ef);
    future.push(interval);
  }
  const dayUnit = getLang() === 'ua' ? 'д' : 'd';
  return t('stats.intervals') + ': ' + future.map((v) => v + dayUnit).join(' → ');
}
