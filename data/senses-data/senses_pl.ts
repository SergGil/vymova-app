// Vymova — data/senses-data/senses_pl.ts
// Auto-split from the former data/senses.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { SenseEntry } from '../senses.ts';

export const SENSES_PL: Record<string, SenseEntry[]> = {
  "koło": [
    {
      "pos": "noun",
      "level": "A1",
      "gloss": "figura geometryczna złożona z punktów w jednakowej odległości od środka",
      "translation": "коло (геометрична фігура)",
      "exTarget": "Dzieci usiadły w kole na podłodze klasy.",
      "exKnow": "Діти сіли колом на підлозі класу."
    },
    {
      "pos": "prep",
      "level": "A2",
      "gloss": "blisko czegoś lub kogoś",
      "translation": "біля, поруч",
      "exTarget": "Siedziała spokojnie koło niego przez całą długą podróż.",
      "exKnow": "Вона спокійно сиділа біля нього протягом усієї довгої подорожі."
    }
  ]
};
