// Vymova — data/grammar-data/grammar_ty.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mau Parau Fa'aea — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У таїтянській, як і в інших полінезійських мовах, розрізняють \"ми без вас\" (mātou) і \"ми з вами\" (tātou).",
            "en": {
              "text": "Tahitian, like other Polynesian languages, distinguishes \"we without you\" (mātou) from \"we with you\" (tātou)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "vau"
              ],
              [
                "ти",
                "ʻoe"
              ],
              [
                "він / вона",
                "ōna"
              ],
              [
                "ми (без вас)",
                "mātou"
              ],
              [
                "ми (з вами)",
                "tātou"
              ],
              [
                "ви",
                "ʻoutou"
              ],
              [
                "вони",
                "rātou"
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
