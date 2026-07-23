// Vymova — data/grammar-data/grammar_kw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Корнська вважалася вимерлою мовою з кінця XVIII століття, аж поки рух відродження XX століття не повернув її до життя.",
            "en": {
              "text": "Cornish was considered extinct from the late 18th century until a 20th-century revival movement brought it back to life."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "my"
              ],
              [
                "ти",
                "ty"
              ],
              [
                "він / вона",
                "ev / hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "hwi"
              ],
              [
                "вони",
                "i"
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
