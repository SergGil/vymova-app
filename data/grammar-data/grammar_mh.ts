// Vymova — data/grammar-data/grammar_mh.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Naan ko Armij — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Маршальська — мова атолового архіпелагу Тихого океану, чиї навігатори традиційно використовували плетені карти хвиль для орієнтування в морі.",
            "en": {
              "text": "Marshallese is the language of a Pacific atoll archipelago whose navigators traditionally used woven stick charts to find their way at sea."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ña"
              ],
              [
                "ти",
                "kwe"
              ],
              [
                "він / вона / воно",
                "e"
              ],
              [
                "ми (без вас)",
                "kōm"
              ],
              [
                "ми (з вами)",
                "kōj"
              ],
              [
                "ви",
                "koṃ"
              ],
              [
                "вони",
                "er"
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
