// Vymova — data/grammar-data/grammar_gv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Coadanyn Persoonagh — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Мангська вважалася вимерлою після смерті останнього природного носія 1974 року, але завдяки цілеспрямованому відродженню сьогодні має нове покоління носіїв.",
            "en": {
              "text": "Manx was considered extinct after its last native speaker died in 1974, but a deliberate revival has given it a new generation of speakers today."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mee"
              ],
              [
                "ти",
                "oo"
              ],
              [
                "він / вона",
                "eh / ee"
              ],
              [
                "ми",
                "shin"
              ],
              [
                "ви",
                "shiu"
              ],
              [
                "вони",
                "ad"
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
