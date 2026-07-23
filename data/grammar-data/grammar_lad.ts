// Vymova — data/grammar-data/grammar_lad.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LAD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronombres Personales — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Ладино зберігає риси середньовічної іспанської, втрачені в сучасній кастильській мові, і сьогодні часто записується латинкою.",
            "en": {
              "text": "Ladino preserves features of medieval Spanish lost in modern Castilian, and is often written in the Latin alphabet today."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "yo"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "el / eya"
              ],
              [
                "ми",
                "mozotros"
              ],
              [
                "ви",
                "vozotros"
              ],
              [
                "вони (ч./ж.)",
                "eyos / eyas"
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
