// Vymova — data/grammar-data/grammar_dv.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_DV: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ޒާތީ ގިނަވަންތަ</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Дівехі пишеться письмом тана справа наліво і має ввічливу форму звертання, подібно до багатьох сусідніх південноазійських мов.",
            "en": {
              "text": "Dhivehi is written in the Thaana script, right to left, and has a polite form of address, similar to many neighboring South Asian languages."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">އަހަރެން</span> (aharen)"
              ],
              [
                "ти",
                "<span dir=\"rtl\">ތިޔަ</span> (thiya)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">އޭނާ</span> (eynaa)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">އަހަރެމެން</span> (aharemen)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">ތިޔަބޭފުޅުން</span> (thiyabeyfulhun)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">އެމީހުން</span> (emeehun)"
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
