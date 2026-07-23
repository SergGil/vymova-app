// Vymova — data/grammar-data/grammar_ny.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Maina a Anthu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У чічева немає граматичного роду — займенник \"iye\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Chichewa has no grammatical gender — the pronoun \"iye\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ine"
              ],
              [
                "ти",
                "iwe"
              ],
              [
                "він / вона",
                "iye"
              ],
              [
                "ми",
                "ife"
              ],
              [
                "ви",
                "inu"
              ],
              [
                "вони",
                "iwo"
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
