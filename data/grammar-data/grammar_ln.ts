// Vymova — data/grammar-data/grammar_ln.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_LN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Bankombo ya Moto — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгала — торгова мова басейну річки Конго, що стала відомою по всій Африці завдяки конголезькій музиці румба.",
            "en": {
              "text": "Lingala is a trade language of the Congo River basin that became famous across Africa through Congolese rumba music."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ngai"
              ],
              [
                "ти",
                "yo"
              ],
              [
                "він / вона / воно",
                "ye"
              ],
              [
                "ми",
                "biso"
              ],
              [
                "ви",
                "bino"
              ],
              [
                "вони",
                "bango"
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
