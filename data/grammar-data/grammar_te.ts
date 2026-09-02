// Vymova — data/grammar-data/grammar_te.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "సర్వనామాలు — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У телугу ввічлива форма \"మీరు\" (mīru) водночас служить і поважним звертанням до однієї людини, і звичайною множиною.",
            "en": {
              "text": "In Telugu, the polite form \"మీరు\" (mīru) serves both as a respectful way to address one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "నేను (nēnu)"
              ],
              [
                "ти (зв. / ввічл.)",
                "నువ్వు / మీరు (nuvvu / mīru)"
              ],
              [
                "він / вона",
                "అతను / ఆమె (atanu / āme)"
              ],
              [
                "ми",
                "మేము (mēmu)"
              ],
              [
                "ви",
                "మీరు (mīru)"
              ],
              [
                "вони",
                "వాళ్ళు (vāḷḷu)"
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
