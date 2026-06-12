// English Words App — js/features/mode-utils.ts
// Shared ES mode detection + helpers used by app.ts and similar-words.ts
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';

export const ES_MODES = new Set(['en-es', 'es-en', 'es-ua', 'ua-es', 'es-fr', 'fr-es']);
export const FR_MODES = new Set(['en-fr', 'fr-en', 'fr-ua', 'ua-fr', 'es-fr', 'fr-es']);

export function getMode(): string {
  const sel = document.getElementById('sel-mode') as HTMLSelectElement | null;
  const m = sel?.value ?? 'en';
  if (m === 'mix') {
    const a = sel?.dataset.mixA || 'en';
    const b = sel?.dataset.mixB || 'ua';
    return Math.random() > 0.5 ? a : b;
  }
  return m || 'en';
}

export function esEntry(word: string): readonly [string, string] | null {
  return (W_ES as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}

export function frEntry(word: string): readonly [string, string] | null {
  return (W_FR as unknown as Record<string, readonly [string, string]>)[word] ?? null;
}
