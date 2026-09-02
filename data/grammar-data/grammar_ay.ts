// Vymova — data/grammar-data/grammar_ay.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Jaqinakan Sutipa — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В аймара, як і в сусідній кечуа, є розрізнення \"ми з вами\" (jiwasa) і \"ми без вас\" (nanaka).",
            "en": {
              "text": "Aymara, like neighboring Quechua, distinguishes \"we including you\" (jiwasa) from \"we excluding you\" (nanaka)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "naya"
              ],
              [
                "ти",
                "juma"
              ],
              [
                "він / вона / воно",
                "jupa"
              ],
              [
                "ми (з вами)",
                "jiwasa"
              ],
              [
                "ми (без вас)",
                "nanaka"
              ],
              [
                "ви",
                "jumanaka"
              ],
              [
                "вони",
                "jupanaka"
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
