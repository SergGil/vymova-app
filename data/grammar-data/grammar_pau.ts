// Vymova — data/grammar-data/grammar_pau.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PAU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Omesungel — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Палау за менш ніж століття пережила іспанське, німецьке, японське та американське колоніальне правління, кожне з яких залишило слід у мові.",
            "en": {
              "text": "In under a century, Palau experienced Spanish, German, Japanese, and American colonial rule, each leaving a mark on the language."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ngak"
              ],
              [
                "ти",
                "kau"
              ],
              [
                "він / вона / воно",
                "ngii"
              ],
              [
                "ми (з вами)",
                "kid"
              ],
              [
                "ми (без вас)",
                "kemam"
              ],
              [
                "ви",
                "kemiu"
              ],
              [
                "вони",
                "tir"
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
