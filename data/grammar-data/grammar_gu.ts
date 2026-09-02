// Vymova — data/grammar-data/grammar_gu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_GU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "સર્વનામ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У гуджараті займенник третьої особи \"તે\" (te) не розрізняє роду — контекст або дієслово підказують, ідеться про чоловіка чи жінку.",
            "en": {
              "text": "In Gujarati, the third-person pronoun \"તે\" (te) doesn't distinguish gender — context or the verb form indicates whether it means \"he\" or \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "હું (huṁ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "તું / તમે (tuṁ / tame)"
              ],
              [
                "він / вона",
                "તે (te)"
              ],
              [
                "ми",
                "અમે (ame)"
              ],
              [
                "ви",
                "તમે (tame)"
              ],
              [
                "вони",
                "તેઓ (teo)"
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
