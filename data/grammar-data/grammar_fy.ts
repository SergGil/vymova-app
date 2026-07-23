// Vymova — data/grammar-data/grammar_fy.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_FY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Persoanlike Foarnamwurden — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Фризька вважається найближчою живою родичкою англійської мови серед континентальних мов.",
            "en": {
              "text": "Frisian is considered English's closest living relative among the continental languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ik"
              ],
              [
                "ти (зв. / ввічл.)",
                "do / jo"
              ],
              [
                "він / вона",
                "hy / sy"
              ],
              [
                "ми",
                "wy"
              ],
              [
                "ви",
                "jo"
              ],
              [
                "вони",
                "sy"
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
