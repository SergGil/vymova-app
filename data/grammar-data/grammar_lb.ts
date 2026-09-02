// Vymova — data/grammar-data/grammar_lb.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LB: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Perséinlech Pronomen — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Люксембурзька — західногерманська мова, близька до діалектів прирейнської Німеччини.",
            "en": {
              "text": "Luxembourgish is a West Germanic language, close to dialects of the German Rhineland."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ech"
              ],
              [
                "ти (зв. / ввічл.)",
                "du / Dir"
              ],
              [
                "він / вона / воно",
                "hie / si / hatt"
              ],
              [
                "ми",
                "mir"
              ],
              [
                "ви",
                "dir"
              ],
              [
                "вони",
                "si"
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
