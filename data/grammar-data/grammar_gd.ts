// Vymova — data/grammar-data/grammar_gd.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Riochdairean Pearsanta — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Шотландська гельська близько споріднена з ірландською, і так само дієслово в реченні зазвичай стоїть перед підметом-займенником.",
            "en": {
              "text": "Scottish Gaelic is closely related to Irish, and likewise the verb usually comes before the pronoun subject in a sentence."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mi"
              ],
              [
                "ти",
                "thu"
              ],
              [
                "він / вона",
                "e / i"
              ],
              [
                "ми",
                "sinn"
              ],
              [
                "ви",
                "sibh"
              ],
              [
                "вони",
                "iad"
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
