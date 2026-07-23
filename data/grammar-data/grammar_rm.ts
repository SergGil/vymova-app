// Vymova — data/grammar-data/grammar_rm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_RM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms Persunals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Романш — четверта офіційна мова Швейцарії, хоча нею розмовляє менш ніж 1% населення країни.",
            "en": {
              "text": "Romansh is Switzerland's fourth official language, despite being spoken by less than 1% of the country's population."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jau"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "el / ella"
              ],
              [
                "ми",
                "nus"
              ],
              [
                "ви",
                "vus"
              ],
              [
                "вони (ч./ж.)",
                "els / ellas"
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
