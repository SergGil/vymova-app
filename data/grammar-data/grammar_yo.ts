// Vymova — data/grammar-data/grammar_yo.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_YO: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Arọ́pò Orúkọ Ẹni — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У йоруба є короткі форми займенників, що приєднуються перед дієсловом, і повні наголошені форми — для виділення.",
            "en": {
              "text": "Yoruba has short pronoun forms that attach before the verb, and full, stressed forms used for emphasis."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (коротка / повна форма)",
            "rows": [
              [
                "я",
                "mo / èmi"
              ],
              [
                "ти",
                "o / ìwọ"
              ],
              [
                "він / вона / воно",
                "ó / òun"
              ],
              [
                "ми",
                "a / àwa"
              ],
              [
                "ви",
                "ẹ / ẹ̀yin"
              ],
              [
                "вони",
                "wọ́n / àwọn"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (short / full form)"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "three-tone-system",
        "title": "Ohun Mẹ́ta — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба має три висотні тони — високий (´), середній (без знака) і низький (`) — що розрізняють значення слів, ідентичних за написанням літер, і обов'язково позначаються діакритиками на письмі.",
            "en": {
              "text": "Yoruba has three pitch tones — high (´), mid (unmarked), and low (`) — that distinguish the meaning of words otherwise identical in letters, and are obligatorily marked with diacritics in writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "igbá (гарбуз), ìgbà (час), igba (двісті) — той самий запис букв, різні тони",
                "igbá (calabash), ìgbà (time), igba (two hundred) — same letters, different tones"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Three-Tone System — B1"
      },
      {
        "id": "no-noun-class-system",
        "title": "Kò Sí Ìpín Orúkọ — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від банту мов цього курсу (суахілі, шона, чева, лінгала, кхоса), йоруба не має системи іменникових класів узагалі — іменник не змінюється за формою чи не отримує префікса залежно від категорії, — типологічно інша гілка нігеро-конго.",
            "en": {
              "text": "Unlike the Bantu languages in this course (Swahili, Shona, Chewa, Lingala, Xhosa), Yoruba has no noun-class system at all — a noun doesn't change form or take a prefix depending on category, a typologically different branch of Niger-Congo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ọmọ (дитина) — без класового префікса",
                "child — no class prefix, unlike Bantu equivalents"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Noun Class System — B1"
      },
      {
        "id": "serial-verb-constructions",
        "title": "Ọ̀wọ́n Ọ̀rọ̀-Ìṣe — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба широко вживає серіальні дієслівні конструкції: кілька дієслів підряд без сполучників описують одну складну дію чи послідовність дій, поділяючи спільний підмет.",
            "en": {
              "text": "Yoruba makes extensive use of serial verb constructions: several verbs in a row without conjunctions describe a single complex action or sequence of actions, sharing a common subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó mú ìwé kà.",
                "He/she took the book (and) read (it). (literally 'take book read')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Serial Verb Constructions — B2"
      },
      {
        "id": "latin-script-diacritics",
        "title": "Àmì Ohùn Àti Àwọn Lẹ́tà Pàtàkì — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба записується латиницею з двома типами діакритиків: тональними знаками над голосними й підкресленими крапками під ẹ, ọ, ṣ для позначення відкритих голосних і специфічного приголосного.",
            "en": {
              "text": "Yoruba is written in the Latin alphabet with two types of diacritics: tone marks above vowels, and underdots under ẹ, ọ, ṣ to mark open vowels and a specific consonant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ẹ, ọ, ṣ (з підкресленою крапкою)",
                "ẹ, ọ, ṣ (with an underdot, distinct letters from e, o, s)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Latin Script with Tone and Underdot Diacritics — A2"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "Часи та способи дієслова",
    "titleEn": "Tenses & Moods",
    "emoji": "⏰",
    "rules": [
      {
        "id": "unmarked-past-tense",
        "title": "Àsìkò Àtijọ́: Aisi-àmì — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час часто не позначається жодним окремим суфіксом чи допоміжним словом — гола форма дієслова разом із контекстом сигналізує завершену минулу дію.",
            "en": {
              "text": "The past tense is often not marked by any separate suffix or auxiliary word — the bare verb form together with context signals a completed past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo lọ.",
                "Я пішов. (гола форма, минулий час із контексту)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Unmarked Past Tense — A1"
      },
      {
        "id": "progressive-n",
        "title": "Àsìkò Ń Lọ: ń — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія позначається часткою ń, поставленою безпосередньо перед дієсловом.",
            "en": {
              "text": "An ongoing action is marked with the particle ń, placed directly before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo ń kọ̀wé.",
                "Я саме пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: ń — A1"
      },
      {
        "id": "future-yio-maa",
        "title": "Àsìkò Ọjọ́ Iwájú: yóò/máa — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється допоміжним yóò (скорочено á), поставленим перед дієсловом.",
            "en": {
              "text": "The future tense is formed with the auxiliary yóò (shortened á), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Màá kọ̀wé.",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: yóò — A2"
      },
      {
        "id": "perfect-ti",
        "title": "Àsìkò Tí Parí: ti — B1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється часткою tí, поставленою перед дієсловом, наголошуючи на теперішньому результаті завершеної дії.",
            "en": {
              "text": "The perfect is formed with the particle tí, placed before the verb, emphasizing the present result of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo ti kọ̀wé.",
                "Я вже написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect: tí — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Àṣẹ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для однини — гола основа дієслова без займенника, для множини/ввічливості додається займенник ẹ перед дієсловом.",
            "en": {
              "text": "The imperative for singular is the bare verb stem without a pronoun; for plural/polite address, the pronoun ẹ is added before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kọ̀wé! / Ẹ kọ̀wé!",
                "Пиши! / Пишіть!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "hortative-ki",
        "title": "Àfẹ́: kí — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Спонукальний спосіб (нехай/щоб) уводиться часткою kí, поставленою перед підметом і дієсловом, — уживається для непрямих наказів і побажань.",
            "en": {
              "text": "The hortative mood (let/so that) is introduced with the particle kí, placed before the subject and verb — used for indirect commands and wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kí ó kọ̀wé.",
                "Нехай він пише."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Hortative: kí — B1"
      },
      {
        "id": "negation-ko",
        "title": "Àìṣe: kò — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою kò, поставленою безпосередньо перед дієсловом чи допоміжним словом.",
            "en": {
              "text": "Negation is formed with the particle kò, placed directly before the verb or auxiliary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mi ò kọ̀wé.",
                "Я не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: kò — A1"
      },
      {
        "id": "conditional-bi",
        "title": "Àsọtẹ́lẹ̀: bí — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником bí ('якщо'), поставленим на початку підрядного речення.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction bí ('if'), placed at the start of the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bí òjò bá rọ̀, màá dúró nílé.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: bí — B1"
      },
      {
        "id": "potential-le",
        "title": "Agbára: lè — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом lè ('могти'), поставленим перед головним дієсловом.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb lè ('to be able'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo lè kọ̀wé.",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: lè — B1"
      },
      {
        "id": "habitual-maa",
        "title": "Àṣà: máa — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія виражається допоміжним máa, поставленим перед дієсловом, — окреме значення від майбутнього yóò, з яким máa може зливатися фонетично.",
            "en": {
              "text": "A habitual action is expressed with the auxiliary máa, placed before the verb — a separate meaning from the future yóò, with which máa can phonetically merge."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo máa ń kọ̀wé lójoojúmọ́.",
                "Я зазвичай пишу щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual: máa — B1"
      },
      {
        "id": "sequential-narrative-serial",
        "title": "Ìtàn Léraléra — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "У розповідній послідовності подій кожне наступне дієслово після першого часто позначеного просто йде без окремого маркера часу, спираючись на серіальну конструкцію.",
            "en": {
              "text": "In narrating a sequence of events, each subsequent verb after the first, marked one, often simply follows without its own separate tense marker, relying on the serial construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó dìde, wẹ̀, jẹun, lọ sí ilé-ìwé.",
                "He got up, washed, ate, (and) went to school. (chain of bare verbs)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Verb Sequencing — B2"
      },
      {
        "id": "completive-emphasis-ti-emphatic",
        "title": "Àṣepé Pẹ̀lú Ìtẹnumọ́: ti...tan — B2",
        "emoji": "🏁",
        "sections": [
          {
            "type": "intro",
            "text": "Завершеність дії можна підкреслити додаванням tán ('до кінця') після дієслова разом із частою tí, — наголошуючи на повній завершеності, а не просто результаті.",
            "en": {
              "text": "Completeness of an action can be emphasized by adding tán ('to the end') after the verb along with the particle tí — emphasizing full completion rather than just result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo ti kọ̀wé tán.",
                "Я вже повністю дописав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Completive: ti...tán — B2"
      },
      {
        "id": "immediate-future-fee",
        "title": "Ọjọ́ Iwájú Tó Súnmọ́: fẹ́ — B1",
        "emoji": "⏭️",
        "sections": [
          {
            "type": "intro",
            "text": "Найближче майбутнє ('от-от, збираюся') виражається допоміжним дієсловом fẹ́ ('хотіти/збиратися'), поставленим перед головним дієсловом.",
            "en": {
              "text": "The near future ('about to, going to') is expressed with the auxiliary verb fẹ́ ('to want/be about to'), placed before the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo fẹ́ kọ̀wé.",
                "Я збираюся писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Immediate Future: fẹ́ — B1"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "Граматика",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "vigesimal-numeral-system",
        "title": "Ìlànà Ìṣírò Ogún — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба вживає двадцяткову (вігезимальну) систему числення: числа понад двадцять часто утворюються відніманням від найближчого кратного двадцяти, а не додаванням, — складна й унікальна арифметична логіка.",
            "en": {
              "text": "Yoruba uses a base-20 (vigesimal) counting system: numbers above twenty are often formed by subtraction from the nearest multiple of twenty rather than addition — a complex and unique arithmetic logic."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mẹ́tàdínlógún (17, дослівно '3 від 20')",
                "17 (literally '3 taken from 20')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vigesimal (Base-20) Numeral System — B2"
      },
      {
        "id": "cardinal-numbers-basic",
        "title": "Àwọn Nọ́mbà Ìpìlẹ̀ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числівники 1-10",
            "rows": [
              [
                "1",
                "ọ̀kan"
              ],
              [
                "2",
                "èjì"
              ],
              [
                "3",
                "ẹ̀ta"
              ],
              [
                "4",
                "ẹ̀rin"
              ],
              [
                "5",
                "àrún"
              ],
              [
                "6",
                "ẹ̀fà"
              ],
              [
                "7",
                "èje"
              ],
              [
                "8",
                "ẹ̀jọ"
              ],
              [
                "9",
                "ẹ̀sán"
              ],
              [
                "10",
                "ẹ̀wá"
              ]
            ],
            "en": {
              "title": "Numbers 1-10"
            }
          }
        ],
        "titleEn": "Basic Cardinal Numbers — A1"
      },
      {
        "id": "plural-marking-awon",
        "title": "Ọ̀pọ̀lọpọ̀: àwọn — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник сам не змінюється в множині — множинність позначається окремим словом àwọn, поставленим перед іменником, а не суфіксом чи префіксом на самому слові.",
            "en": {
              "text": "The noun itself does not change for plural — plurality is marked by a separate word àwọn, placed before the noun, rather than a suffix or prefix on the word itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ọmọ (дитина) → àwọn ọmọ (діти)",
                "child → children (marked by a preceding particle, not the noun itself)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Marking: àwọn — A2"
      },
      {
        "id": "focus-construction-ni",
        "title": "Àfojúsùn: ni — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба має власну фокусну конструкцію з часткою ni, яка висуває будь-яке слово на початок речення для наголошення, — типологічно паралельна фокусній системі волоф, хоча цілком незалежного походження.",
            "en": {
              "text": "Yoruba has its own focus construction with the particle ni, which fronts any word to the start of the sentence for emphasis — typologically parallel to Wolof's focus system, though of entirely independent origin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Èmi ni mo kọ̀wé.",
                "It's ME who wrote. (subject focus with ni)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Focus Construction: ni — B2"
      },
      {
        "id": "possessive-construction-ti",
        "title": "Ohun Ìní: ti — A2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна конструкція вживає частку ti (дослівно 'з/від'), поставлену перед власником, або просто зіставлення двох іменників без частки.",
            "en": {
              "text": "The possessive construction uses the particle ti (literally 'of/from'), placed before the possessor, or simply juxtaposes two nouns without a particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ìwé ti Adé / ìwé Adé",
                "Ade's book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Construction: ti — A2"
      },
      {
        "id": "demonstratives",
        "title": "Àwọn Afihàn — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні слова",
            "rows": [
              [
                "цей",
                "yìí"
              ],
              [
                "той",
                "yẹn"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A2"
      },
      {
        "id": "interrogatives",
        "title": "Àwọn Ìbéèrè — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "ta ni?"
              ],
              [
                "що?",
                "kí ni?"
              ],
              [
                "де?",
                "níbo?"
              ],
              [
                "коли?",
                "nígbà wo?"
              ]
            ],
            "en": {
              "title": "Interrogatives"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "reflexive-ara",
        "title": "Ara Ẹni — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається словом ara ('тіло'), поєднаним із присвійним займенником, — дослівно 'власне тіло' в значенні 'себе'.",
            "en": {
              "text": "Reflexivity is expressed with the word ara ('body'), combined with a possessive pronoun — literally 'own body' meaning 'oneself'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ara mi",
                "myself (literally 'my own body')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: ara ('body') — B1"
      },
      {
        "id": "stative-verb-adjectives",
        "title": "Ìṣàpèjúwe Gẹ́gẹ́ Bí Ọ̀rọ̀-Ìṣe — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба не має окремого граматичного класу прикметників — властивості виражаються статичними дієсловами, узгодженими з тим самим дієслівним синтаксисом, що й дії, — типологічна паралель до волоф.",
            "en": {
              "text": "Yoruba has no separate grammatical class of adjectives — properties are expressed with stative verbs, following the same verbal syntax as actions — a typological parallel to Wolof."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó dára.",
                "He/she/it is good. (literally 'is-good' as a verb)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives Expressed as Stative Verbs — B2"
      },
      {
        "id": "comparative-ju",
        "title": "Ìfiwéra: ju — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється дієсловом ju ('перевершувати'), поставленим після статичного дієслова-прикметника, плюс частка lọ.",
            "en": {
              "text": "The comparative is formed with the verb ju ('to surpass'), placed after the stative verb-adjective, plus the particle lọ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó dára ju u lọ.",
                "It's better than it."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: ju ('to surpass') — B1"
      },
      {
        "id": "reduplication",
        "title": "Àtúnsọ Ọ̀rọ̀ — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Редуплікація (повне чи часткове подвоєння основи) утворює нові іменники з дієслів, часто позначаючи діяча чи повторюваність дії.",
            "en": {
              "text": "Reduplication (full or partial doubling of the stem) forms new nouns from verbs, often marking the doer of an action or its repeated nature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kọ (писати) → kíkọ (писання, письмо)",
                "to write → writing (nominalized via partial reduplication)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication — B2"
      },
      {
        "id": "ideophones",
        "title": "Àwọn Ọ̀rọ̀ Afarawé — B2",
        "emoji": "💥",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба широко вживає ідеофони — виразні звуконаслідувальні слова, що підсилюють значення прикметника чи дії яскравим сенсорним ефектом.",
            "en": {
              "text": "Yoruba makes extensive use of ideophones — expressive sound-symbolic words that intensify the meaning of an adjective or action with a vivid sensory effect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "funfun láú-láú (зовсім білий, з ідеофоном)",
                "completely white (with the intensifying ideophone láú-láú)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ideophones — B2"
      },
      {
        "id": "relative-clause-ti",
        "title": "Gbólóhùn Ìsopọ̀: tí — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядне відносне речення вводиться незмінним словом tí ('що/який'), яке покриває всі числа й особи, поставленим після означуваного іменника.",
            "en": {
              "text": "A relative clause is introduced with the invariant word tí ('that/which'), covering all numbers and persons, placed after the modified noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ọkùnrin tí ó kọ̀wé",
                "the man who wrote"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses: tí — B2"
      },
      {
        "id": "word-order-svo",
        "title": "Ìlànà Ọ̀rọ̀: SVO — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), причому серіальні дієслівні конструкції можуть додавати кілька додаткових дієслів після першого.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), with serial verb constructions able to add several additional verbs after the first."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Adé rí ilé.",
                "Ade sees the house."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A2"
      },
      {
        "id": "yes-no-question-marker",
        "title": "Ìbéèrè Bẹ́ẹ̀ni/Bẹ́ẹ̀kọ́: ṣé — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання утворюється часткою ṣé, поставленою на початку речення, без зміни порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle ṣé, placed at the start of the sentence, without changing word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ṣé o máa lọ?",
                "Ти підеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions: ṣé — A2"
      },
      {
        "id": "causative-fa",
        "title": "Okùnfà: fà/mú — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне значення виражається допоміжним дієсловом mú ('брати/викликати') у серіальній конструкції, а не окремим морфологічним суфіксом.",
            "en": {
              "text": "Causative meaning is expressed with the auxiliary verb mú ('to take/cause') in a serial construction, rather than a dedicated morphological suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ó mú un dùn.",
                "He/she made it sweet/nice. (serial causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative via Serial Construction — B2"
      },
      {
        "id": "vowel-harmony",
        "title": "Ìṣọ̀kan Fáwẹ̀lì — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Йоруба має обмежену гармонію голосних: голосні -ẹ- й -ọ- (відкриті) тяжіють до узгодження з іншими відкритими голосними в межах одного слова.",
            "en": {
              "text": "Yoruba has limited vowel harmony: the vowels -ẹ- and -ọ- (open) tend to agree with other open vowels within the same word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ẹsẹ̀ (нога, узгоджені відкриті голосні)",
                "leg (agreeing open vowels within the word)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Harmony — B2"
      },
      {
        "id": "conjunctions",
        "title": "Àwọn Olùsopọ̀ — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і, та",
                "àti"
              ],
              [
                "але",
                "ṣùgbọ́n"
              ],
              [
                "або",
                "tàbí"
              ],
              [
                "тому що",
                "nítorí"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A2"
      },
      {
        "id": "vocative-address",
        "title": "Ìpè — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання не має окремого відмінка — іменник чи ім'я вживається без будь-яких змін на початку речення для прямого звертання.",
            "en": {
              "text": "Address has no separate case — the noun or name is used unchanged at the start of a sentence for direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Adé, wá síbí!",
                "Ade, come here!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Address — A2"
      },
      {
        "id": "existential-wa",
        "title": "Wíwà: wà — A1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність виражається дієсловом wà ('існувати/бути присутнім'), а заперечна наявність — з kò перед ним.",
            "en": {
              "text": "Existence is expressed with the verb wà ('to exist/be present'), and negative existence with kò placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ìwé kan wà.",
                "Є книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: wà — A1"
      },
      {
        "id": "diminutive-omo-prefix",
        "title": "Kékeré: ọmọ- — B2",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальне значення чи 'дитинча/малий представник' виражається префіксом ọmọ- ('дитина'), доданим перед іменником, — продуктивна словотвірна модель.",
            "en": {
              "text": "A diminutive or 'offspring/small member of' meaning is expressed with the prefix ọmọ- ('child'), added before a noun — a productive word-formation pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ọmọ ìlú (громадянин, дослівно 'дитина міста')",
                "citizen (literally 'child of the town')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The ọmọ- ('child') Diminutive Prefix — B2"
      },
      {
        "id": "emphatic-particle-na",
        "title": "Ìtẹnumọ́: náà — B2",
        "emoji": "❕",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність або підкреслення можна виразити часткою náà ('той самий/дуже'), поставленою після іменника чи дієслова.",
            "en": {
              "text": "Definiteness or emphasis can be expressed with the particle náà ('the same/very'), placed after a noun or verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ilé náà",
                "the very house / that same house"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic/Definite Particle: náà — B2"
      },
      {
        "id": "associative-construction-ati",
        "title": "Ìṣọ̀kan: pẹ̀lú — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровід ('разом із') виражається прийменником pẹ̀lú, поставленим перед іменником, окремо від сполучника àti ('і').",
            "en": {
              "text": "Accompaniment ('together with') is expressed with the preposition pẹ̀lú, placed before the noun, distinct from the conjunction àti ('and')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mo lọ pẹ̀lú rẹ̀.",
                "Я пішов разом із ним/нею."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Accompaniment: pẹ̀lú ('together with') — A2"
      },
      {
        "id": "compound-verb-noun-formation",
        "title": "Ọ̀rọ̀-Orúkọ Àkópọ̀ — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато іменників утворюються поєднанням дієслова й іменника, що виступає його прямим додатком, застигле разом у нове слово, — продуктивна словотвірна модель.",
            "en": {
              "text": "Many nouns are formed by combining a verb with the noun that serves as its direct object, frozen together into a new word — a productive word-formation pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pa (вбивати) + ọwọ́ (рука) → pàápá (плескати в долоні)",
                "kill + hand → to clap (a verb-object compound frozen into a new verb)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb-Noun Compound Formation — B2"
      },
      {
        "id": "ordinal-numbers",
        "title": "Nọ́mbà Tí Ó Tẹ̀lé: -kejì — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються префіксом ẹ̀ka- плюс числівник для 'перший', і префіксом kejì- ('другий за') плюс кількісний числівник для решти.",
            "en": {
              "text": "Ordinal numbers are formed with the prefix ẹ̀ka- plus the numeral for 'first', and the prefix kejì- ('second to') plus the cardinal numeral for the rest."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kejì (другий)",
                "second"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — B1"
      },
      {
        "id": "ile-ife-cosmological-origin",
        "title": "Ilé-Ifẹ̀ — B1",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Ілє-Іфе — священне місто, яке в йорубській космології вважається місцем створення світу й людства, духовний центр народу йоруба.",
            "en": {
              "text": "Ile-Ife is the sacred city that, in Yoruba cosmology, is considered the place where the world and humanity were created — the spiritual center of the Yoruba people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilé-Ifẹ̀",
                "Ile-Ife (the Yoruba cosmological origin city)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ile-Ife: the Cosmological Origin City — B1"
      },
      {
        "id": "oyo-empire-history",
        "title": "Ìjọba Ọ̀yọ́ — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Імперія Ойо (16-19 століття) — одна з найвпливовіших держав Західної Африки, з розвиненою кавалерією й адміністративною системою на чолі з правителем алаафін.",
            "en": {
              "text": "The Oyo Empire (16th-19th centuries) was one of West Africa's most influential states, with a developed cavalry and administrative system led by a ruler called the Alaafin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aláàfin ti Ọ̀yọ́",
                "the Alaafin of Oyo (the empire's ruler title)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Oyo Empire — B2"
      },
      {
        "id": "ifa-divination-system",
        "title": "Ifá — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Іфа — складна система ворожіння й мудрості з корпусом усної літератури (одý Іфа), яку тлумачить жрець бабалаво за допомогою пальмових горіхів чи ланцюжка опеле.",
            "en": {
              "text": "Ifá is a complex divination and wisdom system with a corpus of oral literature (Odù Ifá), interpreted by a priest called babalawo using palm nuts or the opele chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "babaláwo (жрець Іфа)",
                "babalawo (the Ifá divination priest)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ifá Divination System — B2"
      },
      {
        "id": "orisha-traditional-religion",
        "title": "Àwọn Òrìṣà — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Оришa — пантеон божеств традиційної релігії йоруба (Шанго — громовержець, Ошун — річкова богиня, Огун — бог заліза), культ яких через работоргівлю поширився в Америці.",
            "en": {
              "text": "The Orisha are the pantheon of deities of traditional Yoruba religion (Shango — thunder god, Oshun — river goddess, Ogun — god of iron), whose worship spread to the Americas through the slave trade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ṣàngó, Ọ̀ṣun, Ògún",
                "Shango, Oshun, Ogun (major Orisha deities)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Orisha Pantheon — B1"
      },
      {
        "id": "santeria-candomble-diaspora",
        "title": "Santería Àti Candomblé — B2",
        "emoji": "🌎",
        "sections": [
          {
            "type": "intro",
            "text": "Через трансатлантичну работоргівлю релігія йоруба-ориша трансформувалася в Америці в сантерію (Куба) і кандомбле (Бразилія), синкретично поєднавшись із католицькими святими.",
            "en": {
              "text": "Through the transatlantic slave trade, Yoruba Orisha religion transformed in the Americas into Santería (Cuba) and Candomblé (Brazil), syncretically merging with Catholic saints."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Santería, Candomblé",
                "Santería (Cuba), Candomblé (Brazil) — Yoruba-derived diaspora religions"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Santería and Candomblé: the Diaspora Religions — B2"
      },
      {
        "id": "dundun-talking-drum",
        "title": "Dùndún — B1",
        "emoji": "🥁",
        "sections": [
          {
            "type": "intro",
            "text": "Барабан дундун ('говірний барабан') може імітувати тональні контури мови йоруба, дозволяючи 'промовляти' цілі фрази й прислів'я ритмом і висотою звуку.",
            "en": {
              "text": "The dùndún ('talking drum') can imitate the tonal contours of the Yoruba language, allowing it to 'speak' entire phrases and proverbs through rhythm and pitch."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dùndún",
                "the talking drum, tone-mimicking due to Yoruba's tonal nature"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Dùndún Talking Drum — B1"
      },
      {
        "id": "oriki-praise-names",
        "title": "Oríkì — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Орікі — хвалебні імена й поетичні звертання, які виражають характер, походження чи долю людини, промовлювані на церемоніях і в повсякденному шануванні.",
            "en": {
              "text": "Oríkì are praise names and poetic addresses that express a person's character, origin, or destiny, recited at ceremonies and in everyday veneration."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "oríkì orílẹ̀-èdè",
                "lineage/clan praise poetry"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Oríkì: Praise Names and Poetry — B2"
      },
      {
        "id": "naming-ceremony-abiku",
        "title": "Ìsọmọlórúkọ Àti Abíkú — B2",
        "emoji": "👶",
        "sections": [
          {
            "type": "intro",
            "text": "Церемонія найменування дитини (ìsọmọlórúkọ) відбувається на сьомий чи дев'ятий день після народження; для дітей, народжених після втрати попередніх немовлят (абіку), дають особливі захисні імена.",
            "en": {
              "text": "The child-naming ceremony (ìsọmọlórúkọ) takes place on the seventh or ninth day after birth; children born after the loss of previous infants (abiku) are given special protective names."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "abíkú",
                "abiku (a child believed born to die repeatedly, given a protective name)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Naming Ceremonies and Abiku Names — B2"
      },
      {
        "id": "fela-kuti-afrobeat",
        "title": "Fẹ́lá Kútì Àti Afrobeat — B1",
        "emoji": "🎷",
        "sections": [
          {
            "type": "intro",
            "text": "Фела Куті — засновник жанру афробіт, який поєднав джаз, фанк і йорубську музичну традицію з гострою політичною критикою нігерійської влади.",
            "en": {
              "text": "Fela Kuti founded the Afrobeat genre, blending jazz, funk, and Yoruba musical tradition with sharp political criticism of Nigerian authorities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Afrobeat",
                "Afrobeat (the genre Fela Kuti founded)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fela Kuti and Afrobeat — B1"
      },
      {
        "id": "wole-soyinka-nobel",
        "title": "Wolé Ṣóyínká — B2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Воле Шоїнка став першим африканським письменником, який отримав Нобелівську премію з літератури (1986), відомий п'єсами, які черпають із йорубської міфології та ритуалу.",
            "en": {
              "text": "Wole Soyinka became the first African writer to receive the Nobel Prize in Literature (1986), known for plays that draw on Yoruba mythology and ritual."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nobel Prize in Literature, 1986",
                "the 1986 Nobel Prize in Literature (Soyinka)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Wole Soyinka's Nobel Prize — B2"
      },
      {
        "id": "nollywood-film-industry",
        "title": "Nollywood — B1",
        "emoji": "🎬",
        "sections": [
          {
            "type": "intro",
            "text": "Нігерійська кіноіндустрія (Нолівуд), яка значною мірою знімає йорубомовне й англомовне кіно, — одна з найбільших у світі за обсягом виробництва.",
            "en": {
              "text": "The Nigerian film industry (Nollywood), which produces a great deal of Yoruba-language and English-language cinema, is one of the largest in the world by output volume."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "fíìmù Yorùbá",
                "Yoruba-language film"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nollywood and Yoruba Cinema — B1"
      },
      {
        "id": "colors",
        "title": "Àwọn Àwọ̀ — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "pupa"
              ],
              [
                "синій",
                "aró"
              ],
              [
                "жовтий",
                "ofeefee"
              ],
              [
                "чорний",
                "dúdú"
              ],
              [
                "білий",
                "funfun"
              ]
            ],
            "en": {
              "title": "Colors"
            }
          }
        ],
        "titleEn": "Colors — A1"
      },
      {
        "id": "days-of-week",
        "title": "Àwọn Ọjọ́ Ọ̀sẹ̀ — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "ọjọ́ Ajé"
              ],
              [
                "вівторок",
                "ọjọ́ Ìsẹ́gun"
              ],
              [
                "середа",
                "ọjọ́rú"
              ],
              [
                "четвер",
                "ọjọ́bọ"
              ],
              [
                "п'ятниця",
                "ẹtì"
              ],
              [
                "субота",
                "àbámẹ́ta"
              ],
              [
                "неділя",
                "ọjọ́-àìkú"
              ]
            ],
            "en": {
              "title": "Days of the Week"
            }
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "family-terms",
        "title": "Ẹbí — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Родинні терміни",
            "rows": [
              [
                "батько",
                "bàbá"
              ],
              [
                "мати",
                "ìyá"
              ],
              [
                "дитина",
                "ọmọ"
              ],
              [
                "брат/сестра",
                "ẹ̀gbọ́n/àbúrò"
              ]
            ],
            "en": {
              "title": "Family Terms"
            }
          }
        ],
        "titleEn": "Family Terms — A1"
      },
      {
        "id": "greetings",
        "title": "Ìkíni — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Доброго ранку",
                "Ẹ kú àárọ̀"
              ],
              [
                "Дякую",
                "Ẹ ṣé"
              ],
              [
                "Ласкаво просимо",
                "Ẹ kú àbọ̀"
              ]
            ],
            "en": {
              "title": "Greetings"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "weather-vocabulary",
        "title": "Ojú Ọjọ́ — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "oòrùn"
              ],
              [
                "дощ",
                "òjò"
              ],
              [
                "вітер",
                "afẹ́fẹ́"
              ]
            ],
            "en": {
              "title": "Weather"
            }
          }
        ],
        "titleEn": "Weather Vocabulary — A2"
      },
      {
        "id": "body-parts",
        "title": "Ẹ̀yà Ara — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "orí"
              ],
              [
                "рука",
                "ọwọ́"
              ],
              [
                "нога",
                "ẹsẹ̀"
              ],
              [
                "око",
                "ojú"
              ]
            ],
            "en": {
              "title": "Body Parts"
            }
          }
        ],
        "titleEn": "Body Parts — A2"
      },
      {
        "id": "food-vocabulary",
        "title": "Oúnjẹ — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "їжа з маніоки",
                "gaari"
              ],
              [
                "суп із амарантом і томатом",
                "ẹ̀fọ́ riro"
              ],
              [
                "рис",
                "ìrẹsì"
              ]
            ],
            "en": {
              "title": "Food"
            }
          }
        ],
        "titleEn": "Food Vocabulary — A2"
      },
      {
        "id": "amala-jollof-cuisine",
        "title": "Àmàlà Àti Jollof — A2",
        "emoji": "🍲",
        "sections": [
          {
            "type": "intro",
            "text": "Амала (тісто з бататового борошна) і джолоф-рис (пряний томатний рис) — знакові страви йорубської кухні, часто подані із супом ефо-ріро.",
            "en": {
              "text": "Amala (dough made from yam flour) and Jollof rice (spiced tomato rice) are iconic dishes of Yoruba cuisine, often served with efo riro soup."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "àmàlà àti ẹ̀fọ́ riro",
                "amala with efo riro soup"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amala and Jollof Rice — A2"
      },
      {
        "id": "gele-aso-oke-traditional-dress",
        "title": "Gèlè Àti Aṣọ-Òkè — B1",
        "emoji": "👗",
        "sections": [
          {
            "type": "intro",
            "text": "Ґеле (складна тканинна пов'язка на голову) і асо-оке (ручноткана святкова тканина) — знакові елементи йорубського традиційного вбрання, особливо на весіллях.",
            "en": {
              "text": "Gele (an elaborate fabric headwrap) and aso-oke (a handwoven ceremonial fabric) are iconic elements of Yoruba traditional dress, especially at weddings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gèlè",
                "gele (the ceremonial headwrap)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gele and Aso-Oke Traditional Dress — B1"
      },
      {
        "id": "animals-vocabulary",
        "title": "Àwọn Ẹranko — A2",
        "emoji": "🐆",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "собака",
                "ajá"
              ],
              [
                "кінь",
                "ẹṣin"
              ],
              [
                "коза",
                "ewúrẹ́"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animals — A2"
      },
      {
        "id": "cardinal-directions",
        "title": "Àwọn Ìhà — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "àríwá"
              ],
              [
                "південь",
                "gúúsù"
              ],
              [
                "схід",
                "ìlà-oòrùn"
              ],
              [
                "захід",
                "ìwọ̀-oòrùn"
              ]
            ],
            "en": {
              "title": "Cardinal Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — A2"
      },
      {
        "id": "yoruba-proverbs-owe",
        "title": "Òwe — B2",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (òwe) посідають центральне місце в йорубській усній традиції й повсякденному мовленні — вважається, що 'прислів'я — кінь мовлення, коли слова зникають, прислів'я знаходить їх'.",
            "en": {
              "text": "Proverbs (òwe) hold a central place in Yoruba oral tradition and everyday speech — it is said that 'proverbs are the horse of speech; when words are lost, proverbs find them'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Òwe l'ẹṣin ọ̀rọ̀.",
                "Proverbs are the horse of speech. (a proverb about proverbs)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Òwe: The Proverb Tradition — B2"
      },
      {
        "id": "yoruba-diaspora-brazil-cuba",
        "title": "Àwọn Yorùbá Ní Òkè Òkun — B2",
        "emoji": "🚢",
        "sections": [
          {
            "type": "intro",
            "text": "Через трансатлантичну работоргівлю значна йорубська діаспора виникла в Бразилії, на Кубі й у Тринідаді, зберігаючи мову й релігію в модифікованих формах донині.",
            "en": {
              "text": "Through the transatlantic slave trade, a significant Yoruba diaspora arose in Brazil, Cuba, and Trinidad, preserving the language and religion in modified forms to this day."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yorùbá ní Brazil",
                "Yoruba (heritage) in Brazil"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Yoruba Diaspora Overseas — B2"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "Виключення",
    "titleEn": "Exceptions",
    "emoji": "⚡",
    "rules": [
      {
        "id": "irregular-verb-lo",
        "title": "Ọ̀rọ̀-Ìṣe Àìṣàṣàrò: lọ ('to go') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово lọ ('іти') утворює наказову форму запрошення від зовсім іншого кореня (wá, 'приходь!') замість очікуваного *lọ, коли запрошують іти разом кудись, — супплетивна форма.",
            "en": {
              "text": "The verb lọ ('to go') forms its invitational imperative from an entirely different root (wá, 'come!') instead of the expected *lọ, when inviting someone to go somewhere together — a suppletive form."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "lọ (іти) → Wá! (Ходи!, не *Lọ!)",
                "go → Come! (suppletive invitational imperative, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: lọ ('to go') — B1"
      },
      {
        "id": "irregular-plural-eniyan",
        "title": "Ọ̀pọ̀lọpọ̀ Àìṣàṣàrò: ènìyàn — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник ènìyàn ('людина') уживається однаково в однині й множині без будь-якого маркера àwọn, коли йдеться про людей загалом, — виняток із загального правила плюралізації.",
            "en": {
              "text": "The noun ènìyàn ('person/people') is used identically in singular and plural without any àwọn marker when referring to people in general — an exception to the general pluralization rule."
            }
          },
          {
            "type": "table",
            "title": "Незмінна форма",
            "rows": [
              [
                "ènìyàn (людина / люди, без àwọn у загальному значенні)",
                "person / people (unchanged form without àwọn in the generic sense)"
              ]
            ],
            "en": {
              "title": "Unchanged Form"
            }
          }
        ],
        "titleEn": "Irregular Number Behavior: ènìyàn ('person/people') — B2"
      },
      {
        "id": "irregular-comparative-dara",
        "title": "Ìfiwéra Àìṣàṣàrò: dára → ré — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Статичне дієслово dára ('бути добрим') у деяких усталених виразах уживає скорочену форму ré замість повної основи в порівняльній конструкції — нерегулярний виняток.",
            "en": {
              "text": "The stative verb dára ('to be good') uses a shortened form ré instead of the full stem in the comparative construction in certain fixed expressions — an irregular exception."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна скорочена форма",
            "rows": [
              [
                "dára → ré ju (у деяких усталених виразах)",
                "good → better (irregular shortened comparative form in certain fixed expressions)"
              ]
            ],
            "en": {
              "title": "Irregular Shortened Form"
            }
          }
        ],
        "titleEn": "Irregular Comparative: dára → ré — B1"
      }
    ]
  }
];
