// Vymova — data/grammar-data/grammar_et.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ET: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Isikulised asesõnad — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В естонській мові немає граматичного роду — той самий займенник \"tema\" означає і \"він\", і \"вона\".",
            "en": {
              "text": "Estonian has no grammatical gender — the same pronoun \"tema\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mina (ma)"
              ],
              [
                "ти",
                "sina (sa)"
              ],
              [
                "він / вона",
                "tema (ta)"
              ],
              [
                "ми",
                "meie (me)"
              ],
              [
                "ви",
                "teie (te)"
              ],
              [
                "вони",
                "nemad (nad)"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          },
          {
            "type": "note",
            "text": "Коротші форми в дужках (ma, sa, ta, me, te, nad) частіше вживають у розмовній мові, повні — у писемній.",
            "en": {
              "text": "The shorter forms in parentheses (ma, sa, ta, me, te, nad) are more common in spoken Estonian, the full forms in writing."
            }
          }
        ]
      }
    ]
  }
];
