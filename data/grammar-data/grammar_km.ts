// Vymova — data/grammar-data/grammar_km.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "សព្វនាម — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У кхмерській немає окремих форм множини для займенників — число часто взагалі не позначають граматично, лише контекстом чи додатковими словами.",
            "en": {
              "text": "Khmer has no separate plural pronoun forms — number is often not marked grammatically at all, only by context or extra words."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ខ្ញុំ (khnhom)"
              ],
              [
                "ти",
                "អ្នក (neak)"
              ],
              [
                "він / вона",
                "គាត់ (koat)"
              ],
              [
                "ми",
                "យើង (yerng)"
              ],
              [
                "ви",
                "អ្នក (neak)"
              ],
              [
                "вони",
                "ពួកគេ (puok ke)"
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
