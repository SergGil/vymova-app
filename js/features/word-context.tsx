// English Words App — js/features/word-context.tsx
// Word families + collocations shown on card back
import type { ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { useStateVersion } from '../../src/store.ts';
import { searchCollocations } from '../../data/collocations.ts';
import { WORD_FAMILIES, WORD_FAMILY_REVERSE } from '../../data/word-families.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { openWordDetail } from './word-detail.tsx';

export function CollocationsSection(): ReactElement | null {
  useStateVersion();
  const cw = state.cw as WordEntry | null;
  if (!cw || !state.flipped) return null;

  const colls = searchCollocations(cw[0]);
  if (!colls.length) return null;

  const wordLow = cw[0].toLowerCase();
  const re = new RegExp('\\b(' + wordLow + '\\w*)\\b', 'i');

  return (
    <div className="similar-section" id="cb-collocations" style={{ margin: '8px 0 0' }}>
      <div className="similar-title" data-i18n="cards.collocationsTitle">🔗 Сталі словосполучення</div>
      <div id="cb-collocation-list" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {colls.slice(0, 6).map((c, i) => {
          const parts = c.phrase.split(re);
          return (
            <span className="colloc-pill" key={i}>
              {parts.map((part, j) => re.test(part) && j % 2 === 1 ? <b key={j}>{part}</b> : part)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function WordFamiliesChips(): ReactElement | null {
  useStateVersion();
  const cw = state.cw as WordEntry | null;
  if (!cw || !state.flipped) return null;

  const word = cw[0].toLowerCase();
  let family: string[] | undefined = WORD_FAMILIES[word];
  if (!family) {
    const base = WORD_FAMILY_REVERSE.get(word);
    if (base) family = [base, ...WORD_FAMILIES[base].filter(m => m !== word)];
  }
  if (!family || family.length === 0) return null;

  const wordIdx = state._wordIdx;

  return (
    <div className="similar-section" id="cb-families" style={{ margin: '14px 0 0' }}>
      <div className="similar-title" data-i18n="cards.familyTitle">🌱 Сімейство слів</div>
      <div className="similar-chips" id="cb-family-chips">
        {family.slice(0, 6).map(w => {
          const wi = wordIdx?.get(w);
          const entry = wi !== undefined ? W[wi] : null;
          const transl = entry ? (entry as unknown as WordEntry)[1] : '';
          const isKnown = state.known.has(w);
          return (
            <div key={w} className={'sim-chip family-chip' + (isKnown ? ' known-chip' : '')}
              onClick={(e) => {
                e.stopPropagation();
                const wi2 = wordIdx?.get(w);
                if (wi2 === undefined) return;
                openWordDetail(W[wi2] as unknown as WordEntry);
              }}
            >
              <span className="sc-word">{w}</span>
              {transl ? <span className="sc-transl">{transl}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
