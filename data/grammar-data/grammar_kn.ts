// Vymova — data/grammar-data/grammar_kn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "ಸರ್ವನಾಮಗಳು — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У каннаді ввічлива форма \"ನೀವು\" (nīvu) водночас служить формою поваги до однієї людини й звичайною множиною.",
            "en": {
              "text": "In Kannada, the polite form \"ನೀವು\" (nīvu) serves both as a respectful form and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ನಾನು (nānu)"
              ],
              [
                "ти (зв. / ввічл.)",
                "ನೀನು / ನೀವು (nīnu / nīvu)"
              ],
              [
                "він / вона",
                "ಅವನು / ಅವಳು (avanu / avaḷu)"
              ],
              [
                "ми",
                "ನಾವು (nāvu)"
              ],
              [
                "ви",
                "ನೀವು (nīvu)"
              ],
              [
                "вони",
                "ಅವರು (avaru)"
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
