// Vymova — data/grammar-data/grammar_mn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Биеийн төлөөний үг — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У монгольській немає граматичного роду, тому \"тэр\" означає і \"він\", і \"вона\". Є розрізнення між звичайним \"чи\" та ввічливим \"та\" при зверненні.",
            "en": {
              "text": "Mongolian has no grammatical gender, so \"тэр\" means both \"he\" and \"she\". There's a distinction between informal \"чи\" and polite \"та\" when addressing someone."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "би"
              ],
              [
                "ти (зв. / ввічл.)",
                "чи / та"
              ],
              [
                "він / вона / воно",
                "тэр"
              ],
              [
                "ми",
                "бид"
              ],
              [
                "ви",
                "та нар"
              ],
              [
                "вони",
                "тэд"
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
