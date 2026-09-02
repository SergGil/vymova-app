// Vymova — data/grammar-data/grammar_qu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_QU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Runasimipi Sutichaykuna — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У кечуа є два слова для \"ми\": \"ñuqanchik\" (з вами) і \"ñuqayku\" (без вас) — це розрізнення називають інклюзивністю/ексклюзивністю.",
            "en": {
              "text": "Quechua has two words for \"we\": \"ñuqanchik\" (including you) and \"ñuqayku\" (excluding you) — known as the inclusive/exclusive distinction."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ñuqa"
              ],
              [
                "ти",
                "qam"
              ],
              [
                "він / вона / воно",
                "pay"
              ],
              [
                "ми (з вами)",
                "ñuqanchik"
              ],
              [
                "ми (без вас)",
                "ñuqayku"
              ],
              [
                "ви",
                "qamkuna"
              ],
              [
                "вони",
                "paykuna"
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
