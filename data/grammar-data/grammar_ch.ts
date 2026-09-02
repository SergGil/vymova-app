// Vymova — data/grammar-data/grammar_ch.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_CH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronombren Personåt — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Чаморро зазнало значного впливу іспанської мови через понад три століття іспанської колонізації Маріанських островів.",
            "en": {
              "text": "Chamorro was heavily influenced by Spanish through over three centuries of Spanish colonization of the Mariana Islands."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "guahu"
              ],
              [
                "ти",
                "hagu"
              ],
              [
                "він / вона / воно",
                "guiya"
              ],
              [
                "ми (з вами)",
                "hita"
              ],
              [
                "ми (без вас)",
                "hami"
              ],
              [
                "ви",
                "hamyu"
              ],
              [
                "вони",
                "siha"
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
