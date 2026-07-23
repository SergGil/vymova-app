// Vymova — data/grammar-data/grammar_bo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "གང་ཟག་གི་སྒྲ་མིང་ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тибетській множину зазвичай утворюють, додаючи частку \"ཚོ་\" (tsho) до займенника однини.",
            "en": {
              "text": "In Tibetan, the plural is usually formed by adding the particle \"ཚོ་\" (tsho) to the singular pronoun."
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
                "ཁྱེད་རང་ (khyed rang)"
              ],
              [
                "він / вона",
                "ཁོང་ (khong)"
              ],
              [
                "ми",
                "ང་ཚོ་ (nga tsho)"
              ],
              [
                "ви",
                "ཁྱེད་རང་ཚོ་ (khyed rang tsho)"
              ],
              [
                "вони",
                "ཁོང་ཚོ་ (khong tsho)"
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
