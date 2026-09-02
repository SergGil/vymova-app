// Vymova — data/grammar-data/grammar_or.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ସର୍ବନାମ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В одія множину зазвичай утворюють, додаючи суфікс \"-ମାନେ\" (-māne) до займенника однини.",
            "en": {
              "text": "In Odia, the plural is usually formed by adding the suffix \"-ମାନେ\" (-māne) to the singular pronoun."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ମୁଁ (muñ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ତୁମେ / ଆପଣ (tume / āpaṇa)"
              ],
              [
                "він / вона",
                "ସେ (se)"
              ],
              [
                "ми",
                "ଆମେ (āme)"
              ],
              [
                "ви",
                "ଆପଣମାନେ (āpaṇamāne)"
              ],
              [
                "вони",
                "ସେମାନେ (semāne)"
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
