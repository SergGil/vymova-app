// Vymova — data/grammar-data/grammar_qya.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_QYA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nótesse Hínala — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У квеньї, мові, створеній Дж. Р. Р. Толкіном, займенники здебільшого не окремі слова, а суфікси, які додають до дієслова: наприклад, \"-nyë\" означає \"я\", а \"-lyë\" — \"ти\".",
            "en": {
              "text": "In Quenya, one of J. R. R. Tolkien's Elvish languages, pronouns are mostly not separate words but verb suffixes: \"-nyë\" means \"I\", \"-lyë\" means \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Займенникові суфікси дієслова",
            "rows": [
              [
                "я",
                "-nyë"
              ],
              [
                "ти",
                "-lyë"
              ],
              [
                "він / вона / воно",
                "-s"
              ],
              [
                "ми",
                "-lmë"
              ],
              [
                "ви",
                "-llë"
              ],
              [
                "вони",
                "-ntë"
              ]
            ],
            "en": {
              "title": "Verb Pronominal Suffixes"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
