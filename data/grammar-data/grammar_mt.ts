// Vymova — data/grammar-data/grammar_mt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Personali — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Мальтійська — єдина семітська мова, що офіційно записується латинською абеткою.",
            "en": {
              "text": "Maltese is the only Semitic language officially written in the Latin alphabet."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jien"
              ],
              [
                "ти",
                "int"
              ],
              [
                "він / вона",
                "huwa / hija"
              ],
              [
                "ми",
                "aħna"
              ],
              [
                "ви",
                "intom"
              ],
              [
                "вони",
                "huma"
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
