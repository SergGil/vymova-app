// Vymova — data/grammar-data/grammar_so.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Magac-u-yaalka Shakhsiga — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У сомалійській є короткі форми займенників (наприклад, \"aan\" замість \"aniga\"), які вживають разом із дієсловом у швидкому мовленні.",
            "en": {
              "text": "Somali has short pronoun forms (e.g. \"aan\" instead of \"aniga\") that attach to the verb in fast speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "aniga"
              ],
              [
                "ти",
                "adiga"
              ],
              [
                "він / вона",
                "isaga / iyada"
              ],
              [
                "ми",
                "annaga"
              ],
              [
                "ви",
                "idinka"
              ],
              [
                "вони",
                "iyaga"
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
