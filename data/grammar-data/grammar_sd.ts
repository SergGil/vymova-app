// Vymova — data/grammar-data/grammar_sd.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ذاتي ضمير</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі в Пакистані записують арабсько-перським письмом справа наліво, тоді як частина сіндхійської діаспори в Індії використовує деванагарі.",
            "en": {
              "text": "Sindhi is written in Perso-Arabic script (right to left) in Pakistan, while part of the Sindhi diaspora in India uses Devanagari."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">مان</span> (mān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">تون / توهان</span> (tūn / tohān)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">هو / هوءَ</span> (hū / hoo)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">اسين</span> (asīn)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">توهان</span> (tohān)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">هو</span> (hū)"
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
