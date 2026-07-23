// Vymova — data/grammar-data/grammar_zu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ZU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izabizwana Zomuntu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У зулу немає граматичного роду — займенник \"yena\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Zulu has no grammatical gender — the pronoun \"yena\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mina"
              ],
              [
                "ти",
                "wena"
              ],
              [
                "він / вона",
                "yena"
              ],
              [
                "ми",
                "thina"
              ],
              [
                "ви",
                "nina"
              ],
              [
                "вони",
                "bona"
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
