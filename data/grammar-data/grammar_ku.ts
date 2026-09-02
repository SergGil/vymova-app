// Vymova — data/grammar-data/grammar_ku.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Cînavkên Kesane — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Курдська мова курманджі (Туреччина, Сирія) записується латинкою, тоді як сорані (Ірак, Іран) — арабицею; тут наведено курманджі.",
            "en": {
              "text": "The Kurmanji dialect of Kurdish (Turkey, Syria) is written in Latin script, while Sorani (Iraq, Iran) uses Arabic script; Kurmanji is shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ez"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона / воно",
                "ew"
              ],
              [
                "ми",
                "em"
              ],
              [
                "ви",
                "hûn"
              ],
              [
                "вони",
                "ew"
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
