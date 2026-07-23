// Vymova — data/grammar-data/grammar_eu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_EU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izenordain pertsonalak — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Баскська — мовний ізолят, не споріднений із жодною іншою мовою світу, тому її займенники не схожі на сусідні романські мови.",
            "en": {
              "text": "Basque is a language isolate, unrelated to any other language in the world, so its pronouns don't resemble those of neighboring Romance languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ni"
              ],
              [
                "ти",
                "zu"
              ],
              [
                "він / вона / воно",
                "hura"
              ],
              [
                "ми",
                "gu"
              ],
              [
                "ви",
                "zuek"
              ],
              [
                "вони",
                "haiek"
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
