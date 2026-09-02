// Vymova — data/grammar-data/grammar_wo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_WO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Sant Wu Nit — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У волоф займенники мають дві форми: незалежну (як у таблиці нижче) і коротку, яка приєднується до дієслова як суфікс.",
            "en": {
              "text": "Wolof pronouns have two forms: an independent one (shown below) and a short one that attaches to the verb as a suffix."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "man"
              ],
              [
                "ти",
                "yow"
              ],
              [
                "він / вона / воно",
                "moom"
              ],
              [
                "ми",
                "nun"
              ],
              [
                "ви",
                "yeen"
              ],
              [
                "вони",
                "ñoom"
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
