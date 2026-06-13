// English Words App — js/features/word-context.ts
// updateCollocations + updateWordFamilies shown on card back
import { state } from '../../src/state.ts';
import { searchCollocations } from '../../data/collocations.ts';
import { WORD_FAMILIES, WORD_FAMILY_REVERSE } from '../../data/word-families.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { openWordDetail } from './word-detail.tsx';

export function updateCollocations(): void {
  const cw = state.cw as WordEntry | null;
  if (!cw) return;
  const section = document.getElementById('cb-collocations');
  const list    = document.getElementById('cb-collocation-list');
  if (!section || !list) return;

  const colls = searchCollocations(cw[0]);
  if (!colls.length) { section.style.display = 'none'; return; }

  section.style.display = 'block';
  list.innerHTML = colls.slice(0, 6).map(function(c) {
    const wordLow = cw![0].toLowerCase();
    const highlighted = c.phrase.replace(
      new RegExp('\\b(' + wordLow + '\\w*)\\b', 'i'),
      '<b>$1</b>'
    );
    return '<span class="colloc-pill">' + highlighted + '</span>';
  }).join('');
}

export function updateWordFamilies(): void {
  const cw = state.cw as WordEntry | null;
  if (!cw) return;
  const section = document.getElementById('cb-families');
  const chips   = document.getElementById('cb-family-chips');
  if (!section || !chips) return;

  const word = cw[0].toLowerCase();
  let family: string[] | undefined = WORD_FAMILIES[word];
  if (!family) {
    const base = WORD_FAMILY_REVERSE.get(word);
    if (base) family = [base, ...WORD_FAMILIES[base].filter(m => m !== word)];
  }

  if (!family || family.length === 0) { section.style.display = 'none'; return; }

  const wordIdx = (window as any)._wordIdx as Map<string, number> | undefined;
  section.style.display = 'block';
  chips.innerHTML = family.slice(0, 6).map(function(w) {
    const wi = wordIdx?.get(w);
    const entry = wi !== undefined ? W[wi] : null;
    const transl = entry ? (entry as string[])[1] : '';
    const isKnown = state.known.has(w);
    return '<div class="sim-chip family-chip' + (isKnown ? ' known-chip' : '') + '" data-word="' + w + '">' +
      '<span class="sc-word">' + w + '</span>' +
      (transl ? '<span class="sc-transl">' + transl + '</span>' : '') +
    '</div>';
  }).join('');

  chips.querySelectorAll('.family-chip').forEach(function(chip) {
    chip.addEventListener('click', function(this: HTMLElement, e: Event) {
      e.stopPropagation();
      const targetWord = this.dataset.word ?? '';
      const wi2 = wordIdx?.has(targetWord) ? wordIdx.get(targetWord) : -1;
      if (wi2 === undefined || wi2 === -1) return;
      openWordDetail(W[wi2 as number] as unknown as WordEntry);
    });
  });
}
