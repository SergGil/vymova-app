// Vymova — data/grammar-data/grammar_cy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Rhagenwau Personol — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У валлійській займенник \"chi\" водночас служить і ввічливим звертанням до однієї людини, і звичайною формою множини \"ви\".",
            "en": {
              "text": "In Welsh, the pronoun \"chi\" serves both as a polite form of address to one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "fi / i"
              ],
              [
                "ти (звичайно / ввічливо)",
                "ti / chi"
              ],
              [
                "він",
                "fe / fo"
              ],
              [
                "вона",
                "hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "chi"
              ],
              [
                "вони",
                "nhw"
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
