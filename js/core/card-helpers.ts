// English Words App — js/core/card-helpers.ts
// Pure helpers extracted from app.ts so they can be unit-tested without DOM.
import type { WordEntry } from '../../src/types.js';
import { t, pluralLabel, getLang } from '../features/i18n.ts';

// ── Error-safe wrapper ─────────────────────────────────────────
export function safe(fn: () => void): void {
  try { fn(); } catch (e) { console.warn('[safe]', (e as Error).message ?? e); }
}

// ── Bold helpers ───────────────────────────────────────────────
// Each wraps the first matching occurrence of a word in <b>…</b>.
// Returns src unchanged if src already contains <b>.

/** Bold the English headword (w[0]) inside an example sentence. */
export function boldEn(src: string, w: WordEntry): string {
  if (!src) return '';
  if (src.indexOf('<b>') !== -1) return src;
  const bw = (w[0] as string).replace(/\s*\([^)]*\)/g, '').trim();
  const parts = bw.split(/\s+/).filter(Boolean)
    .map(p => p.replace(/[.*+?^${}()|\[\]\\]/g, '\\$&') + '\\w*');
  return src.replace(new RegExp('(' + parts.join('\\s+') + ')', 'i'), '<b>$1</b>');
}

/** Bold the Ukrainian translation (w[1], first segment) inside a UA sentence. */
export function boldUa(src: string, w: WordEntry): string {
  if (!src) return src;
  const uw = (w[1] as string).split(/[;,\/]/)[0].trim()
    .replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
  return src.replace(new RegExp('(' + uw + '\\w*)', 'i'), '<b>$1</b>');
}

/** Bold an arbitrary headword string (first segment before ; , /) inside src. */
export function boldHead(src: string, word: string): string {
  if (!src) return '';
  if (!word || src.indexOf('<b>') !== -1) return src;
  const hw = word.replace(/\s*\([^)]*\)/g, '').split(/[;,\/]/)[0].trim()
    .replace(/[.*+?^${}()|\[\]\\]/g, '\\$&');
  if (!hw) return src;
  return src.replace(new RegExp('(' + hw + '\\w*)', 'i'), '<b>$1</b>');
}

// ── SRS badge logic ────────────────────────────────────────────

export interface SrsEntry { ef?: number; reps?: number; due?: string; interval?: number; }

export interface SrsBadgeInfo {
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
    return { text: t('srs.badgeOverdue', { n: over, unit: pluralLabel('common_day', over) }), className: 'srs-next over', show: true };
  }
  if (diffDays === 0) {
    return { text: t('srs.badgeToday'), className: 'srs-next today', show: true };
  }
  if (diffDays <= 3) {
    return { text: t('srs.badgeSoon', { n: diffDays, unit: pluralLabel('common_day', diffDays) }), className: 'srs-next soon', show: true };
  }
  return { text: t('srs.badgeFuture', { n: diffDays, unit: pluralLabel('common_day', diffDays) }), className: 'srs-next ok', show: true };
}

/** Forgetting-curve tooltip text shown on the SRS badge: next 5 review intervals. */
export function forgettingCurveTooltip(sd: SrsEntry | undefined): string {
  if (!sd?.due || !sd.ef) return '';
  let ef = sd.ef, interval = sd.interval ?? 1;
  const future = [interval];
  for (let i = 0; i < 4; i++) { interval = Math.round(interval * ef); future.push(interval); }
  const dayUnit = getLang() === 'ua' ? 'д' : 'd';
  return t('stats.intervals') + ': ' + future.map(v => v + dayUnit).join(' → ');
}
