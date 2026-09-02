// Vymova — data/grammar-data/grammar_ps.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">شخصي ضمیرونه</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У пушту займенник третьої особи \"هغه\" (haghá) не розрізняє роду в називному відмінку — стать підказує контекст або дієслово.",
            "en": {
              "text": "In Pashto, the third-person pronoun \"هغه\" (haghá) has no gender distinction in the nominative case — context or the verb indicates gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">زه</span> (za)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">ته / تاسو</span> (tā / tāso)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">هغه</span> (haghá)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">موږ</span> (muẓ̌)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">تاسو</span> (tāso)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">هغوی</span> (haghuwí)"
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
