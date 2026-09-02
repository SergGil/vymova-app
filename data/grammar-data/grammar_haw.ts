// Vymova — data/grammar-data/grammar_haw.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_HAW: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Nā Panonoʻī Pilikino — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У гавайській, як і в маорі та самоанській, розрізняють \"ми без вас\" (mākou) і \"ми з вами\" (kākou).",
            "en": {
              "text": "Hawaiian, like Māori and Samoan, distinguishes \"we without you\" (mākou) from \"we with you\" (kākou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "au"
              ],
              [
                "ти",
                "ʻoe"
              ],
              [
                "він / вона / воно",
                "ia"
              ],
              [
                "ми (без вас)",
                "mākou"
              ],
              [
                "ми (з вами)",
                "kākou"
              ],
              [
                "ви",
                "ʻoukou"
              ],
              [
                "вони",
                "lākou"
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
