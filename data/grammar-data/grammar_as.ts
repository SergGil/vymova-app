// Vymova — data/grammar-data/grammar_as.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "সৰ্বনাম — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ассамська писемність майже ідентична бенгальській, хоча вимова й частина лексики — зокрема самі займенники — відрізняються.",
            "en": {
              "text": "Assamese script is nearly identical to Bengali's, though pronunciation and some vocabulary — including these very pronouns — differ."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "মই (moi)"
              ],
              [
                "ти (зв. / ввічл.)",
                "তুমি / আপুনি (tumi / apuni)"
              ],
              [
                "він / вона",
                "তেওঁ (teü̃)"
              ],
              [
                "ми",
                "আমি (ami)"
              ],
              [
                "ви",
                "তোমালোক (tomalük)"
              ],
              [
                "вони",
                "তেওঁলোক (teü̃lük)"
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
