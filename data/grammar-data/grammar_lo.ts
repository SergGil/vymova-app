// Vymova — data/grammar-data/grammar_lo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ຄຳສັບພະນາມ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У лаоській множину займенників зазвичай утворюють, додаючи слово \"ພວກ\" (phuak, \"група\") перед займенником однини.",
            "en": {
              "text": "In Lao, the plural of pronouns is usually formed by adding the word \"ພວກ\" (phuak, \"group\") before the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ຂ້ອຍ (khoy)"
              ],
              [
                "ти",
                "ເຈົ້າ (chao)"
              ],
              [
                "він / вона",
                "ລາວ (lao)"
              ],
              [
                "ми",
                "ພວກເຮົາ (phuak hao)"
              ],
              [
                "ви",
                "ພວກເຈົ້າ (phuak chao)"
              ],
              [
                "вони",
                "ພວກເຂົາ (phuak khao)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
