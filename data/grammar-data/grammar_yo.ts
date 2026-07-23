// Vymova — data/grammar-data/grammar_yo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_YO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Arọ́pò Orúkọ Ẹni — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У йоруба є короткі форми займенників, що приєднуються перед дієсловом, і повні наголошені форми — для виділення.",
            "en": {
              "text": "Yoruba has short pronoun forms that attach before the verb, and full, stressed forms used for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (коротка / повна форма)",
            "rows": [
              [
                "я",
                "mo / èmi"
              ],
              [
                "ти",
                "o / ìwọ"
              ],
              [
                "він / вона / воно",
                "ó / òun"
              ],
              [
                "ми",
                "a / àwa"
              ],
              [
                "ви",
                "ẹ / ẹ̀yin"
              ],
              [
                "вони",
                "wọ́n / àwọn"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (short / full form)"
            }
          }
        ]
      }
    ]
  }
];
