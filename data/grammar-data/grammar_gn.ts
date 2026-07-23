// Vymova — data/grammar-data/grammar_gn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ta'anga Rérava — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У ґуарані, як і в кечуа, розрізняють \"ми з вами\" (ñande) і \"ми без вас\" (ore).",
            "en": {
              "text": "Guarani, like Quechua, distinguishes \"we including you\" (ñande) from \"we excluding you\" (ore)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "che"
              ],
              [
                "ти",
                "nde"
              ],
              [
                "він / вона / воно",
                "ha'e"
              ],
              [
                "ми (з вами)",
                "ñande"
              ],
              [
                "ми (без вас)",
                "ore"
              ],
              [
                "ви",
                "peẽ"
              ],
              [
                "вони",
                "ha'ekuéra"
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
