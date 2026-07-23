// Vymova — data/grammar-data/grammar_sq.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SQ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Përemrat vetorë — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Албанська утворює окрему гілку індоєвропейської родини, тому її займенники не схожі на жодну сусідню мову.",
            "en": {
              "text": "Albanian forms its own branch of the Indo-European family, so its pronouns don't resemble those of any neighboring language."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "unë"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "ai / ajo"
              ],
              [
                "ми",
                "ne"
              ],
              [
                "ви",
                "ju"
              ],
              [
                "вони (ч./ж.)",
                "ata / ato"
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
