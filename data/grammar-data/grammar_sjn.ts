// Vymova — data/grammar-data/grammar_sjn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SJN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "soft-mutation",
        "title": "Mutation — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Синдарин, ельфійська мова Дж. Р. Р. Толкіна, натхненна валлійською, має систему початкових мутацій приголосних — перший звук слова змінюється залежно від попереднього слова.",
            "en": {
              "text": "Sindarin, one of J. R. R. Tolkien's Elvish languages inspired by Welsh, has a system of initial consonant mutations — a word's first sound changes depending on the word before it."
            }
          },
          {
            "type": "table",
            "title": "М'яка мутація (початкова → змутована)",
            "rows": [
              [
                "p",
                "b"
              ],
              [
                "t",
                "d"
              ],
              [
                "c",
                "g"
              ],
              [
                "b",
                "v"
              ],
              [
                "d",
                "dh"
              ],
              [
                "m",
                "v"
              ]
            ],
            "en": {
              "title": "Soft Mutation (base → mutated)"
            }
          },
          {
            "type": "note",
            "text": "Ця система прямо повторює м'яку мутацію валлійської мови, якою Толкін надихався, створюючи фонетику синдарину.",
            "en": {
              "text": "This system directly mirrors the soft mutation of Welsh, which Tolkien drew on when shaping Sindarin's phonology."
            }
          }
        ],
        "titleEn": "Soft Mutation — A1"
      }
    ]
  }
];
