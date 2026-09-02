// Vymova — data/grammar-data/grammar_my.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MY: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "နာမ်စား — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У бірманській займенник \"я\" залежить від статі мовця: чоловіки кажуть \"ကျွန်တော်\" (kyanaw), жінки — \"ကျွန်မ\" (kyama).",
            "en": {
              "text": "In Burmese, the pronoun \"I\" depends on the speaker's gender: men say \"ကျွန်တော်\" (kyanaw), women say \"ကျွန်မ\" (kyama)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я (чоловік / жінка)",
                "ကျွန်တော် / ကျွန်မ (kyanaw / kyama)"
              ],
              [
                "ти",
                "သင် (thin)"
              ],
              [
                "він / вона",
                "သူ (thu)"
              ],
              [
                "ми",
                "ကျွန်တော်တို့ (kyanaw-dó)"
              ],
              [
                "ви",
                "သင်တို့ (thin-dó)"
              ],
              [
                "вони",
                "သူတို့ (thu-dó)"
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
