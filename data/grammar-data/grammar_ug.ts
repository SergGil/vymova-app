// Vymova — data/grammar-data/grammar_ug.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">شەخس ئالماشلىرى</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурська записується арабським письмом (справа наліво) і, як і інші тюркські мови, не має граматичного роду.",
            "en": {
              "text": "Uyghur is written in the Arabic script (right to left) and, like other Turkic languages, has no grammatical gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">مەن</span> (män)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">سەن / سىز</span> (sen / siz)"
              ],
              [
                "він / вона / воно",
                "<span dir=\"rtl\">ئۇ</span> (u)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">بىز</span> (biz)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">سىلەر</span> (siler)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">ئۇلار</span> (ular)"
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
