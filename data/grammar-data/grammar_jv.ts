// Vymova — data/grammar-data/grammar_jv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_JV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Tembung Sesulih — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У яванській є складна система мовних регістрів (нгоко — розмовний, крама — ввічливий); тут наведено розмовні (нгоко) форми.",
            "en": {
              "text": "Javanese has a complex system of speech registers (ngoko — informal, krama — polite); the informal ngoko forms are shown here."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (нгоко)",
            "rows": [
              [
                "я",
                "aku"
              ],
              [
                "ти",
                "kowé"
              ],
              [
                "він / вона",
                "dhèwèké"
              ],
              [
                "ми",
                "kita"
              ],
              [
                "ви",
                "kowé kabèh"
              ],
              [
                "вони",
                "dhèwèké kabèh"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (ngoko register)"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      }
    ]
  }
];
