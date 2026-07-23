// Vymova — data/grammar-data/grammar_lv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personu vietniekvārdi — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Латиські особові займенники, як і в литовській, розрізняють рід лише в третій особі.",
            "en": {
              "text": "Latvian personal pronouns, like Lithuanian, distinguish gender only in the third person."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "es"
              ],
              [
                "ти",
                "tu"
              ],
              [
                "він / вона",
                "viņš / viņa"
              ],
              [
                "ми",
                "mēs"
              ],
              [
                "ви",
                "jūs"
              ],
              [
                "вони (ч./ж.)",
                "viņi / viņas"
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
