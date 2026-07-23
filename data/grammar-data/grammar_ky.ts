// Vymova — data/grammar-data/grammar_ky.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Жіктеме ат атоочтор — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У киргизькій немає граматичного роду — займенник \"ал\" однаково означає \"він\", \"вона\" й \"воно\".",
            "en": {
              "text": "Kyrgyz has no grammatical gender — the pronoun \"ал\" means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "мен"
              ],
              [
                "ти (зв. / ввічл.)",
                "сен / сиз"
              ],
              [
                "він / вона / воно",
                "ал"
              ],
              [
                "ми",
                "биз"
              ],
              [
                "ви",
                "силер"
              ],
              [
                "вони",
                "алар"
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
