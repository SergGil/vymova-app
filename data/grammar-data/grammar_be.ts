// Vymova — data/grammar-data/grammar_be.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Асабовыя займеннікі — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Білоруська, як і українська, походить від давньоруської мови й має дуже схожу систему займенників.",
            "en": {
              "text": "Belarusian, like Ukrainian, descends from Old East Slavic and has a very similar pronoun system."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "я"
              ],
              [
                "ти",
                "ты"
              ],
              [
                "він / вона / воно",
                "ён / яна / яно"
              ],
              [
                "ми",
                "мы"
              ],
              [
                "ви",
                "вы"
              ],
              [
                "вони",
                "яны"
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
