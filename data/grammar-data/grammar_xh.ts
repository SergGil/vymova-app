// Vymova — data/grammar-data/grammar_xh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_XH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izabizwana Zobuqu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Кхоса, як і зулу, не має граматичного роду — займенник \"yena\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Xhosa, like Zulu, has no grammatical gender — the pronoun \"yena\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mna"
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
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
