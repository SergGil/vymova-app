// Vymova — data/grammar-data/grammar_tg.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Ҷонишинҳои шахсӣ — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Таджицька — по суті персько-таджицький варіант перської мови, записаний кирилицею. Займенник \"ӯ\" не розрізняє роду.",
            "en": {
              "text": "Tajik is, in essence, a Persian-related variety of Persian written in Cyrillic. The pronoun \"ӯ\" doesn't distinguish gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ман"
              ],
              [
                "ти (зв. / ввічл.)",
                "ту / шумо"
              ],
              [
                "він / вона",
                "ӯ"
              ],
              [
                "ми",
                "мо"
              ],
              [
                "ви",
                "шумо"
              ],
              [
                "вони",
                "онҳо"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ]
      }
    ]
  }
];
