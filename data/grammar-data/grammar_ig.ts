// Vymova — data/grammar-data/grammar_ig.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_IG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nnọchi Aha Onwe — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В ігбо займенник третьої особи однини \"ọ\" не розрізняє роду — \"він\", \"вона\" й \"воно\" звучать однаково.",
            "en": {
              "text": "In Igbo, the third-person singular pronoun \"ọ\" has no gender distinction — \"he\", \"she\", and \"it\" all sound the same."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "m"
              ],
              [
                "ти",
                "ị"
              ],
              [
                "він / вона / воно",
                "ọ"
              ],
              [
                "ми",
                "anyị"
              ],
              [
                "ви",
                "unu"
              ],
              [
                "вони",
                "ha"
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
