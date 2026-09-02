// Vymova — data/grammar-data/grammar_ko.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_KO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Особові займенники — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "У корейській займенники часто просто опускаються, якщо зрозуміло з контексту, про кого йдеться — це називають pro-drop.",
            "en": {
              "text": "Korean pronouns are frequently dropped when the referent is clear from context — this is called \"pro-drop\"."
            }
          },
          {
            "type": "table",
            "title": "Базові займенники",
            "rows": [
              [
                "저 / 나",
                "я (ввічливо / звичайно)"
              ],
              [
                "너 / 당신",
                "ти / ви"
              ],
              [
                "그 / 그녀",
                "він / вона"
              ],
              [
                "우리",
                "ми"
              ],
              [
                "그들",
                "вони"
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
                "저는 학생이에요.",
                "Я студент."
              ],
              [
                "(당신은) 어디에서 왔어요?",
                "Звідки ви? (займенник часто опускається)"
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "Зв'язка \"이다\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "Зв'язка \"이다\" приєднується прямо до іменника-присудка; у ввічливій формі теперішнього часу вона виглядає як -이에요/-예요.",
            "en": {
              "text": "The copula \"이다\" attaches directly to the predicate noun; in the polite present tense it appears as -이에요/-예요."
            }
          },
          {
            "type": "formula",
            "title": "Підмет(-는/은) + іменник + -이에요/-예요",
            "rows": [
              [
                "저는 학생이에요.",
                "(Я студент.)"
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
                "그는 의사예요.",
                "Він лікар."
              ]
            ]
          }
        ],
        "titleEn": "The Copula 이다 — A1"
      },
      {
        "id": "negation",
        "title": "Заперечення \"안\" — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Найпростіше заперечення — частка 안 перед дієсловом; є й довша форма з суфіксом -지 않다.",
            "en": {
              "text": "The simplest negation is the particle 안 before the verb; a longer form uses the suffix -지 않다."
            }
          },
          {
            "type": "formula",
            "title": "안 + дієслово",
            "rows": [
              [
                "안 가요.",
                "(Не йду.)"
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
                "저는 커피를 안 마셔요.",
                "Я не п'ю каву."
              ]
            ]
          }
        ],
        "titleEn": "Negation with 안 — A1"
      },
      {
        "id": "questions",
        "title": "Питання — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "У ввічливій розмовній мові питання часто утворюються просто висхідною інтонацією на закінченні -요, без окремої питальної частки.",
            "en": {
              "text": "In polite conversational speech, questions are often formed just with rising intonation on the -요 ending, with no separate question particle."
            }
          },
          {
            "type": "formula",
            "title": "Твердження(-요) + висхідна інтонація?",
            "rows": [
              [
                "학생이에요?",
                "(Ви студент?)"
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
                "배고파요?",
                "Ти голодний?"
              ]
            ]
          }
        ],
        "titleEn": "Questions — A1"
      },
      {
        "id": "particles",
        "title": "Частки та порядок слів SOV — A1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Корейська має порядок слів SOV (дієслово в кінці), а граматична роль слова позначається часткою: 은/는 — тема, 이/가 — підмет, 을/를 — додаток.",
            "en": {
              "text": "Korean uses SOV word order (verb last), and a word's grammatical role is marked by a particle: 은/는 for topic, 이/가 for subject, 을/를 for object."
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
                "저는 밥을 먹어요.",
                "Я їм рис (букв. \"я рис їм\")."
              ]
            ]
          }
        ],
        "titleEn": "Particles & SOV Word Order — A1"
      }
    ]
  }
];
