// Vymova — data/grammar-data/grammar_sm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Suinauna Fa'aletagata — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У самоанській, як і в багатьох полінезійських мовах, розрізняють \"ми без вас\" (matou) і \"ми з вами\" (tatou).",
            "en": {
              "text": "Samoan, like many Polynesian languages, distinguishes \"we without you\" (matou) from \"we with you\" (tatou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "a'u"
              ],
              [
                "ти",
                "oe"
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
                "outou"
              ],
              [
                "вони",
                "latou"
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
