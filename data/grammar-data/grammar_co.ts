// Vymova — data/grammar-data/grammar_co.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronomi Persunali — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Корсиканська найближче споріднена з тосканським діалектом Італії, а не з французькою.",
            "en": {
              "text": "Corsican is most closely related to the Tuscan dialect of Italy, not to French."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "eiu"
              ],
              [
                "ти",
                "tù"
              ],
              [
                "він / вона",
                "ellu / ella"
              ],
              [
                "ми",
                "noi"
              ],
              [
                "ви",
                "voi"
              ],
              [
                "вони (ч./ж.)",
                "elli / elle"
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
