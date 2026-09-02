// Vymova — data/grammar-data/grammar_mk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MK: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Лични заменки — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Македонська, на відміну від більшості слов'янських мов, майже втратила відмінки, тому ці форми практично не змінюються в побутовому мовленні.",
            "en": {
              "text": "Unlike most Slavic languages, Macedonian has largely lost case endings, so these forms stay nearly unchanged in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "јас"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "він / вона / воно",
                "тој / таа / тоа"
              ],
              [
                "ми",
                "ние"
              ],
              [
                "ви",
                "вие"
              ],
              [
                "вони",
                "тие"
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
