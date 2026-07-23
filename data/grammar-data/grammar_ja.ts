// Vymova — data/grammar-data/grammar_ja.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_JA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "copula-desu",
        "title": "です — зв'язка \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "です (desu) ставиться в кінці речення й означає \"є/бути\". Не змінюється за родом чи числом підмета.",
            "en": {
              "text": "です (desu) is placed at the end of a sentence and means \"to be\". It does not change for the subject's gender or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "私は先生です。(Watashi wa sensei desu.)",
                "Я вчитель."
              ],
              [
                "彼女は学生です。",
                "Вона студентка."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-wa",
        "title": "は — частка теми — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "は (wa) позначає тему речення — те, про що йде мова, подібно до підмета.",
            "en": {
              "text": "は (wa) marks the topic of the sentence — what the sentence is about, similar to a subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "猫は可愛いです。(Neko wa kawaii desu.)",
                "Кіт милий."
              ],
              [
                "今日は暑いです。",
                "Сьогодні спекотно."
              ]
            ]
          }
        ]
      },
      {
        "id": "particle-o",
        "title": "を — частка об'єкта — A1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "を (o) ставиться після прямого додатка, позначаючи об'єкт дії.",
            "en": {
              "text": "を (o) is placed after the direct object, marking the object of an action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "本を読みます。(Hon o yomimasu.)",
                "Я читаю книгу."
              ],
              [
                "水を飲みます。",
                "Я п'ю воду."
              ]
            ]
          }
        ]
      },
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "私 (watashi)",
                "я"
              ],
              [
                "あなた (anata)",
                "ти / ви"
              ],
              [
                "彼 (kare)",
                "він"
              ],
              [
                "彼女 (kanojo)",
                "вона"
              ],
              [
                "私たち (watashitachi)",
                "ми"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Суфікс たち",
            "text": "たち (tachi) додається до займенників і слів, що позначають людей, для утворення множини: 友達たち (друзі).",
            "en": {
              "title": "The suffix たち",
              "text": "たち (tachi) is added to pronouns and words for people to form the plural: 友達たち (friends)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "彼は医者です。",
                "Він лікар."
              ],
              [
                "私たちは友達です。",
                "Ми друзі."
              ]
            ]
          }
        ]
      },
      {
        "id": "adjectives",
        "title": "い- та な-прикметники — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Японські прикметники бувають двох типів: い-прикметники (закінчуються на い) і な-прикметники (потребують な перед іменником).",
            "en": {
              "text": "Japanese adjectives are of two types: い-adjectives (ending in い) and な-adjectives (requiring な before a noun)."
            }
          },
          {
            "type": "table",
            "title": "い- vs な-прикметники",
            "rows": [
              [
                "大きい家 (ōkii ie)",
                "великий дім (い-тип)"
              ],
              [
                "静かな町 (shizukana machi)",
                "тихе місто (な-тип)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "この家は大きいです。",
                "Цей дім великий."
              ],
              [
                "この町は静かです。",
                "Це місто тихе."
              ]
            ]
          }
        ]
      }
    ]
  }
];
