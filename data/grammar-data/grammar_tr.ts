// Vymova — data/grammar-data/grammar_tr.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "pronouns",
        "title": "Kişi zamirleri — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "ben",
                "я"
              ],
              [
                "sen",
                "ти"
              ],
              [
                "o",
                "він / вона / воно"
              ],
              [
                "biz",
                "ми"
              ],
              [
                "siz",
                "ви"
              ],
              [
                "onlar",
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
                "Ben öğrenciyim.",
                "Я студент."
              ],
              [
                "Biz evdeyiz.",
                "Ми вдома."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "to-be",
        "title": "-dır / еквівалент \"бути\" — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У турецькій немає окремого дієслова \"бути\" в теперішньому часі — замість нього використовуються особові закінчення, що додаються прямо до слова.",
            "en": {
              "text": "Turkish has no separate verb \"to be\" in the present tense — instead, personal endings are attached directly to the word."
            }
          },
          {
            "type": "formula",
            "title": "Особові закінчення (приклад: öğrenci - студент)",
            "rows": [
              [
                "ben",
                "öğrenciyim",
                "я студент"
              ],
              [
                "sen",
                "öğrencisin",
                "ти студент"
              ],
              [
                "o",
                "öğrenci(dir)",
                "він/вона студент"
              ],
              [
                "biz",
                "öğrenciyiz",
                "ми студенти"
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
                "Mutluyum.",
                "Я щасливий."
              ],
              [
                "O öğretmendir.",
                "Він/вона вчитель."
              ]
            ]
          }
        ],
        "titleEn": "-Dır / The Equivalent of \"To Be\" — A1"
      },
      {
        "id": "plural",
        "title": "Çoğul eki -lar / -ler — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням суфікса -lar або -ler залежно від голосних у слові (правило гармонії голосних).",
            "en": {
              "text": "The plural is formed by adding the suffix -lar or -ler depending on the vowels in the word (vowel harmony rule)."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "kitap (книга)",
                "kitaplar (книги)"
              ],
              [
                "ev (дім)",
                "evler (дома)"
              ],
              [
                "çocuk (дитина)",
                "çocuklar (діти)"
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
                "İki kitabım var.",
                "У мене є дві книги."
              ],
              [
                "Çocuklar oynuyor.",
                "Діти грають."
              ]
            ]
          }
        ],
        "titleEn": "The Plural Suffix -Lar/-Ler — A1"
      },
      {
        "id": "possessive",
        "title": "İyelik ekleri — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Належність позначається додаванням присвійних суфіксів безпосередньо до іменника, а не окремим словом.",
            "en": {
              "text": "Possession is marked by adding possessive suffixes directly to the noun, rather than a separate word."
            }
          },
          {
            "type": "table",
            "title": "Присвійні суфікси (ev — дім)",
            "rows": [
              [
                "evim",
                "мій дім"
              ],
              [
                "evin",
                "твій дім"
              ],
              [
                "evi",
                "його/її дім"
              ],
              [
                "evimiz",
                "наш дім"
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
                "Evim büyük.",
                "Мій дім великий."
              ],
              [
                "Arabası kırmızı.",
                "Його/її машина червона."
              ]
            ]
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "present-tense",
        "title": "Şimdiki zaman — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється додаванням суфікса -yor до основи дієслова та особового закінчення.",
            "en": {
              "text": "The present continuous tense is formed by adding the suffix -yor to the verb stem plus a personal ending."
            }
          },
          {
            "type": "formula",
            "title": "gelmek (приходити) — теперішній час",
            "rows": [
              [
                "ben",
                "geliyorum",
                "я приходжу"
              ],
              [
                "sen",
                "geliyorsun",
                "ти приходиш"
              ],
              [
                "o",
                "geliyor",
                "він/вона приходить"
              ],
              [
                "biz",
                "geliyoruz",
                "ми приходимо"
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
                "Eve gidiyorum.",
                "Я йду додому."
              ],
              [
                "O Türkçe öğreniyor.",
                "Він/вона вчить турецьку."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — A1"
      }
    ]
  }
];
