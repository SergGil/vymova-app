// Vymova — data/grammar-data/grammar_ur.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ذاتی ضمائر</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Урду майже ідентична гінді за розмовною граматикою, але записується арабсько-перським письмом справа наліво.",
            "en": {
              "text": "Urdu is nearly identical to Hindi in spoken grammar, but is written in the Perso-Arabic script, right to left."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">میں</span> (maiṅ)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">تم / آپ</span> (tum / āp)"
              ],
              [
                "він / вона / воно",
                "<span dir=\"rtl\">وہ</span> (voh)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">ہم</span> (ham)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">تم لوگ</span> (tum log)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">وہ</span> (voh)"
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
