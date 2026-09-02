// Vymova — data/grammar-data/grammar_tl.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Panghalip Panao — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тагальській немає граматичного роду (\"siya\" означає і \"він\", і \"вона\"), а окремі \"kami\" й \"tayo\" розрізняють, чи входить співрозмовник у \"ми\".",
            "en": {
              "text": "Tagalog has no grammatical gender (\"siya\" means both \"he\" and \"she\"), and separately distinguishes \"kami\" and \"tayo\" depending on whether the listener is included in \"we\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ako"
              ],
              [
                "ти",
                "ikaw (ka)"
              ],
              [
                "він / вона",
                "siya"
              ],
              [
                "ми (без вас)",
                "kami"
              ],
              [
                "ми (з вами)",
                "tayo"
              ],
              [
                "ви",
                "kayo"
              ],
              [
                "вони",
                "sila"
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
