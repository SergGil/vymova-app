// Vymova — data/grammar-data/grammar_dz.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DZ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "གང་ཟག་གི་མིང་ཚབ་ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дзонгха використовує те саме письмо, що й тибетська, і, подібно до неї, утворює множину, додаючи частку до займенника однини.",
            "en": {
              "text": "Dzongkha uses the same script as Tibetan and, similarly, forms plurals by adding a particle to the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ང་ (nga)"
              ],
              [
                "ти",
                "ཁྱོད་ (khyö)"
              ],
              [
                "він / вона",
                "ཁོང་ (khong)"
              ],
              [
                "ми",
                "ང་བཅས་ (ngacé)"
              ],
              [
                "ви",
                "ཁྱོད་ཚུ་ (khyö tshu)"
              ],
              [
                "вони",
                "ཁོང་ཚུ་ (khong tshu)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ]
      }
    ]
  }
];
