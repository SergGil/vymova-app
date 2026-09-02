// Vymova — data/grammar-data/grammar_br.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_BR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Rakverbioù Personel — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Бретонська — єдина кельтська мова, що збереглася на європейському континенті, а не на Британських островах.",
            "en": {
              "text": "Breton is the only Celtic language that survived on the European continent rather than the British Isles."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "me"
              ],
              [
                "ти",
                "te"
              ],
              [
                "він / вона",
                "eñ / hi"
              ],
              [
                "ми",
                "ni"
              ],
              [
                "ви",
                "c'hwi"
              ],
              [
                "вони",
                "int"
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
