// Vymova — data/grammar-data/grammar_pa.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ਨਿੱਜੀ ਪੜਨਾਂਵ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У панджабі займенник третьої особи \"ਉਹ\" (oh) не змінюється за родом чи числом — \"він\", \"вона\" і \"вони\" різняться лише формою дієслова.",
            "en": {
              "text": "In Punjabi, the third-person pronoun \"ਉਹ\" (oh) doesn't change for gender or number — \"he\", \"she\", and \"they\" are distinguished only by the verb form."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ਮੈਂ (maiṁ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ਤੂੰ (tūṁ) / ਤੁਸੀਂ (tusīṁ)"
              ],
              [
                "він / вона",
                "ਉਹ (oh)"
              ],
              [
                "ми",
                "ਅਸੀਂ (asīṁ)"
              ],
              [
                "ви",
                "ਤੁਸੀਂ (tusīṁ)"
              ],
              [
                "вони",
                "ਉਹ (oh)"
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
