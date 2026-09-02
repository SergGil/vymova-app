// Vymova — data/grammar-data/grammar_uz.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UZ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kishilik olmoshlari — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В узбецькій немає граматичного роду — займенник \"u\" однаково означає \"він\", \"вона\" й \"воно\". Є розрізнення між звичайним \"sen\" і ввічливим \"siz\".",
            "en": {
              "text": "Uzbek has no grammatical gender — the pronoun \"u\" means \"he\", \"she\", and \"it\" alike. There's a distinction between informal \"sen\" and polite \"siz\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "men"
              ],
              [
                "ти (зв. / ввічл.)",
                "sen / siz"
              ],
              [
                "він / вона / воно",
                "u"
              ],
              [
                "ми",
                "biz"
              ],
              [
                "ви",
                "sizlar"
              ],
              [
                "вони",
                "ular"
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
