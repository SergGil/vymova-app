// Vymova — data/grammar-data/grammar_yi.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_YI: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">פּערזענלעכע פּראָנאָמען</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Їдиш ґрунтується на середньовічних німецьких діалектах, але записується гебрейським письмом справа наліво.",
            "en": {
              "text": "Yiddish is based on medieval German dialects but is written in the Hebrew script, right to left."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">איך</span> (ikh)"
              ],
              [
                "ти",
                "<span dir=\"rtl\">דו</span> (du)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">ער / זי</span> (er / zi)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">מיר</span> (mir)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">איר</span> (ir)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">זיי</span> (zey)"
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
