// Vymova — data/grammar-data/grammar_lt.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LT: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Asmeniniai įvardžiai — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники в литовській змінюються за особою й числом. У третій особі є окремі форми чоловічого й жіночого роду.",
            "en": {
              "text": "Lithuanian personal pronouns vary by person and number. The third person has separate masculine and feminine forms."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "aš"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "jis / ji"
              ],
              [
                "ми",
                "mes"
              ],
              [
                "ви",
                "jūs"
              ],
              [
                "вони (ч./ж.)",
                "jie / jos"
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
