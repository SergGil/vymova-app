// Vymova — data/grammar-data/grammar_mi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kupu Whakakapi — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У мові маорі, як і в самоанській та гавайській, розрізняють \"ми без вас\" (matou) і \"ми з вами\" (tatou).",
            "en": {
              "text": "Māori, like Samoan and Hawaiian, distinguishes \"we without you\" (matou) from \"we with you\" (tatou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ahau"
              ],
              [
                "ти",
                "koe"
              ],
              [
                "він / вона",
                "ia"
              ],
              [
                "ми (без вас)",
                "matou"
              ],
              [
                "ми (з вами)",
                "tatou"
              ],
              [
                "ви",
                "koutou"
              ],
              [
                "вони",
                "ratou"
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
