// Vymova — data/grammar-data/grammar_ta.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "தன்மைப் பெயர்ச்சொற்கள் — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тамільській ввічлива форма \"நீங்கள்\" (nīngaḷ) водночас служить і поважним звертанням до однієї людини, і звичайною множиною \"ви\".",
            "en": {
              "text": "In Tamil, the polite form \"நீங்கள்\" (nīngaḷ) serves both as a respectful way to address one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "நான் (nān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "நீ (nī) / நீங்கள் (nīngaḷ)"
              ],
              [
                "він / вона",
                "அவன் / அவள் (avan / avaḷ)"
              ],
              [
                "ми",
                "நாங்கள் (nāngaḷ)"
              ],
              [
                "ви",
                "நீங்கள் (nīngaḷ)"
              ],
              [
                "вони",
                "அவர்கள் (avargaḷ)"
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
