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
      },
      {
        "id": "nasal-mutation",
        "title": "Nasal Mutation — B1",
        "emoji": "👃",
        "sections": [
          {
            "type": "intro",
            "text": "Окрім м'якої мутації, синдарин має носову мутацію, що виникає після означеного артикля множини in і перетворює приголосний на носовий звук чи спірант, — окремий клас мутацій із власними правилами.",
            "en": {
              "text": "Besides soft mutation, Sindarin has nasal mutation, which occurs after the plural definite article in and turns the consonant into a nasal or spirant sound — a separate mutation class with its own rules."
            }
          },
          {
            "type": "table",
            "title": "Носова мутація",
            "rows": [
              [
                "p",
                "ph"
              ],
              [
                "t",
                "th"
              ],
              [
                "c",
                "ch"
              ]
            ],
            "en": {
              "title": "Nasal Mutation"
            }
          }
        ],
        "titleEn": "Nasal Mutation — B1"
      },
      {
        "id": "i-affection-vowel-change",
        "title": "I-Affection — B2",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "Множина в синдарині часто утворюється не суфіксом, а зміною кореневого голосного під впливом колишнього кінцевого -i (i-affection), подібно до умляута в германських мовах, — цілковито відмінно від суфіксальної множини квеньї.",
            "en": {
              "text": "Sindarin plurals are often formed not with a suffix but by changing the root vowel under the influence of a lost final -i (i-affection), similar to Germanic umlaut — entirely unlike Quenya's suffixal plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "adan → edain",
                "людина → люди (зміна голосного, без суфікса)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "I-Affection: Vowel-Change Plurals — B2"
      },
      {
        "id": "definite-article-mutation-trigger",
        "title": "I: Yrthiad — A2",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль i (однина) спричиняє м'яку мутацію наступного іменника, тоді як in (множина) спричиняє носову мутацію, — артикль сам по собі непомітний, але його вплив на приголосний виказує число.",
            "en": {
              "text": "The definite article i (singular) triggers soft mutation of the following noun, while in (plural) triggers nasal mutation — the article itself is barely noticeable, but its effect on the consonant reveals the number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "i vereth (< bereth, наречена, м'яка мутація)",
                "the bride (soft-mutated after i)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Article i: Mutation Trigger — A2"
      },
      {
        "id": "loss-of-case-system",
        "title": "Ú-Randir: Pen Aphadol — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від квеньї з її десятьма відмінками, синдарин утратив майже всю відмінкову систему й передає граматичні зв'язки прийменниками та порядком слів, — типологічно набагато аналітичніша мова.",
            "en": {
              "text": "Unlike Quenya with its ten cases, Sindarin lost almost the entire case system and conveys grammatical relations through prepositions and word order — a typologically far more analytic language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "na Menel (до неба, прийменником, не відмінком)",
                "to the sky (via preposition, not a case ending)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loss of the Case System — B1"
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
        "id": "present-tense",
        "title": "The Present Tense — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється суфіксом -a, доданим до основи дієслова, однаковим для всіх осіб, за винятком другої особи однини.",
            "en": {
              "text": "The present tense is formed with the suffix -a added to the verb stem, the same for every person except the second-person singular."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Le suila.",
                "Ти вітаєшся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "past-tense",
        "title": "The Past Tense — B1",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється переважно через зміну кореневого голосного (як у германському аблауті), а не через суфікс, доданий до основи.",
            "en": {
              "text": "The past tense is mostly formed through a change in the root vowel (like Germanic ablaut), rather than a suffix added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "agor (робив, від car- 'робити')",
                "did (from car- 'to do', vowel-change past)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: Vowel Change — B1"
      },
      {
        "id": "future-tense",
        "title": "The Future Tense — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -tha, доданим до основи дієслова, незалежно від особи чи числа.",
            "en": {
              "text": "The future tense is formed with the suffix -tha added to the verb stem, regardless of person or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Guruthos i vagol gwannatha.",
                "Смерть чекає на здобич."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -tha — A2"
      },
      {
        "id": "perfect-tense",
        "title": "The Perfect Tense — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється подовженням кореневого голосного плюс носовим суфіксом, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed by lengthening the root vowel plus a nasal suffix, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "agorech (ти зробив, перфект)",
                "you have done (perfect)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — B2"
      },
      {
        "id": "imperative-mood",
        "title": "The Imperative — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється голою основою дієслова без закінчення, часто з частками no чи go перед нею для м'якшого відтінку.",
            "en": {
              "text": "The imperative is formed with the bare verb stem with no ending, often with the particles no or go before it for a softer tone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Daro!",
                "Стій!"
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
        "id": "subjunctive-mood",
        "title": "The Subjunctive — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб уживається після дієслів бажання й реконструюється з небагатьох атестованих текстів Толкіна, тож форми часто дискусійні серед дослідників мови.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing and is reconstructed from the few Tolkien-attested texts, so its forms are often debated among language researchers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nai … caro.",
                "Нехай ... зробить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood — B2"
      },
      {
        "id": "infinitive-form",
        "title": "The Infinitive — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -i чи -o залежно від класу дієслова, і саме ця форма подається в лексиконах.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -i or -o depending on the verb class, and this is the form listed in lexicons."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "car-",
                "робити (основа інфінітива)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive Form — A2"
      },
      {
        "id": "gerund-form",
        "title": "The Gerund — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Віддієслівний іменник (герундій) утворюється суфіксом -ad, доданим до основи, і трактується як звичайний іменник.",
            "en": {
              "text": "The verbal noun (gerund) is formed with the suffix -ad added to the stem, and is treated as an ordinary noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "carad",
                "робити/діяння (герундій)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund: -ad — B1"
      },
      {
        "id": "active-participle",
        "title": "The Active Participle — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник утворюється суфіксом -el, доданим до основи, і функціонує як прикметник, узгоджений із мутацією наступного іменника.",
            "en": {
              "text": "The active participle is formed with the suffix -el added to the stem, functioning as an adjective, agreeing through the mutation of the following noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "agorel",
                "той, що зробив"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Active Participle: -el — B1"
      },
      {
        "id": "passive-participle",
        "title": "The Passive Participle — B1",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник утворюється суфіксом -annen, доданим до основи, позначаючи стан, спричинений завершеною дією.",
            "en": {
              "text": "The passive participle is formed with the suffix -annen added to the stem, denoting a state resulting from a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "carannen",
                "зроблений"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Participle: -annen — B1"
      },
      {
        "id": "conditional-mood",
        "title": "The Conditional — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний зворот передається сполучником ai ('якщо') перед реченням у майбутньому чи теперішньому часі, без окремого відмінюваного умовного способу.",
            "en": {
              "text": "A conditional is expressed with the conjunction ai ('if') before a clause in the future or present tense, with no separate conjugated conditional mood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ai anírach, gwannathon.",
                "Якщо ти захочеш, я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: ai — B2"
      },
      {
        "id": "negative-verb-prefix",
        "title": "The Negative Verb — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється префіксом ú-, доданим безпосередньо до основи, — та сама модель, що й у квеньї, попри інакшу решту граматики.",
            "en": {
              "text": "Verb negation is formed with the prefix ú-, added directly to the stem — the same pattern as Quenya, despite the rest of the grammar diverging sharply."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ú-chebin",
                "я не зберігаю"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Verb: ú- — B1"
      },
      {
        "id": "aorist-habitual",
        "title": "The Aorist — B2",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист (позачасова форма) виражає загальні істини й звичну дію без прив'язки до конкретного моменту, утворюваний голим коренем без часового суфікса.",
            "en": {
              "text": "The aorist (timeless form) expresses general truths and habitual action with no tie to a specific moment, formed with the bare root and no tense suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aníron.",
                "Я бажаю (взагалі, завжди)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aorist (Timeless) — B2"
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
        "id": "liquid-mutation",
        "title": "Liquid Mutation — B2",
        "emoji": "💧",
        "sections": [
          {
            "type": "intro",
            "text": "Ліквідна мутація відбувається після слів, що закінчуються на -l чи -r, і перетворює наступний приголосний за власним, окремим набором правил, відмінним від м'якої мутації.",
            "en": {
              "text": "Liquid mutation occurs after words ending in -l or -r, and transforms the following consonant according to its own separate set of rules, distinct from soft mutation."
            }
          },
          {
            "type": "table",
            "title": "Ліквідна мутація",
            "rows": [
              [
                "t",
                "th"
              ],
              [
                "p",
                "ph"
              ],
              [
                "c",
                "ch"
              ]
            ],
            "en": {
              "title": "Liquid Mutation"
            }
          }
        ],
        "titleEn": "Liquid Mutation — B2"
      },
      {
        "id": "mixed-mutation",
        "title": "Mixed Mutation — B2",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Змішана мутація виникає в певних граматичних позиціях (наприклад, після заперечення) і поєднує риси м'якої та носової мутацій в одному наборі правил.",
            "en": {
              "text": "Mixed mutation occurs in certain grammatical positions (such as after negation) and combines traits of both soft and nasal mutation in a single rule set."
            }
          },
          {
            "type": "table",
            "title": "Змішана мутація",
            "rows": [
              [
                "b",
                "m"
              ],
              [
                "d",
                "n"
              ],
              [
                "g",
                "ñg"
              ]
            ],
            "en": {
              "title": "Mixed Mutation"
            }
          }
        ],
        "titleEn": "Mixed Mutation — B2"
      },
      {
        "id": "stopped-mutation",
        "title": "Stopped Mutation — C1",
        "emoji": "🛑",
        "sections": [
          {
            "type": "intro",
            "text": "Зупинена мутація виникає після певних прийменників і 'зупиняє' м'яку мутацію на середній стадії, даючи іншу приголосну, ніж повна м'яка мутація.",
            "en": {
              "text": "Stopped mutation occurs after certain prepositions and 'stops' the soft mutation halfway, yielding a different consonant than the full soft mutation would."
            }
          },
          {
            "type": "table",
            "title": "Зупинена мутація",
            "rows": [
              [
                "c",
                "g (не ch)"
              ],
              [
                "p",
                "b (не ph)"
              ]
            ],
            "en": {
              "title": "Stopped Mutation"
            }
          }
        ],
        "titleEn": "Stopped Mutation — C1"
      },
      {
        "id": "plural-vowel-affection-extended",
        "title": "Plural Formation in Full — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім i-affection, деякі іменники утворюють множину подовженням кореневого голосного, а інші — обома засобами водночас, тож множину часто неможливо передбачити лише за формою однини.",
            "en": {
              "text": "Besides i-affection, some nouns form the plural by lengthening the root vowel, and others use both means at once, so the plural is often unpredictable from the singular form alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "golodh → gelydh",
                "гном/нолдо → гноми (складена зміна голосного)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation in Full — B2"
      },
      {
        "id": "prepositions-replace-cases",
        "title": "Prepositions for Grammatical Roles — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "до",
                "na"
              ],
              [
                "з (разом)",
                "go"
              ],
              [
                "з (від)",
                "o"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Prepositions — B1"
      },
      {
        "id": "adjective-after-noun",
        "title": "Adjective Placement — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть після іменника, який він означає, і зазнає м'якої мутації, — протилежно до квеньї, де прикметник переважно стоїть перед іменником у прозі.",
            "en": {
              "text": "The adjective usually follows the noun it modifies and undergoes soft mutation — the opposite of Quenya, where the adjective mostly precedes the noun in prose."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "aran vain (< bain, гарний король)",
                "fair king (adjective mutated after the noun)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Placement: After the Noun — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Word Order: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), причому мутація на початку слова часто позначає синтаксичну межу між компонентами речення.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), with mutation at the start of a word often marking the syntactic boundary between sentence components."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Edro hi ammen!",
                "Відкрий для нас зараз!"
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
        "id": "comparative-degree",
        "title": "Comparative Degree — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою avod ('більш') перед прикметником, а об'єкт порівняння вводиться прийменником than.",
            "en": {
              "text": "The comparative degree is formed with the particle avod ('more') before the adjective, and the compared object is introduced with a 'than'-preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "avod vain",
                "гарніший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: avod — B1"
      },
      {
        "id": "superlative-degree",
        "title": "Superlative Degree — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється префіксом an- ('над-, най-'), тим самим, що й у квеньї, доданим безпосередньо до прикметника.",
            "en": {
              "text": "The superlative degree is formed with the prefix an- ('over-, -est'), the same one used in Quenya, added directly to the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "annaid (< 'vain', найгарніший)",
                "fairest"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: an- — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Cardinal Numbers 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "min"
              ],
              [
                "2",
                "tad"
              ],
              [
                "3",
                "neledh"
              ],
              [
                "5",
                "leben"
              ],
              [
                "10",
                "caer"
              ]
            ],
            "en": {
              "title": "Numbers 1-10"
            }
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 — A1"
      },
      {
        "id": "demonstratives",
        "title": "Demonstratives — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "sen"
              ],
              [
                "той",
                "han"
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
        "title": "Interrogatives — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "man"
              ],
              [
                "що",
                "man"
              ],
              [
                "де",
                "man"
              ]
            ],
            "en": {
              "title": "Question Words"
            }
          }
        ],
        "titleEn": "Interrogatives — A1"
      },
      {
        "id": "reflexive-possessive-particle",
        "title": "Reflexive Possessive — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зворотний суфікс -n('n) додається до іменника, коли власник збігається з підметом, подібно до системи квеньї, але з власним фонетичним вираженням, залежним від мутації.",
            "en": {
              "text": "The reflexive possessive suffix -n('n) is added to a noun when the possessor matches the subject, similar to Quenya's system but with its own phonetic realization dependent on mutation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Man agorech?",
                "Що ти зробив?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Possessive Suffix — B1"
      },
      {
        "id": "relative-particle-i",
        "title": "The Relative Particle i — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий елемент i, що вживається як означений артикль, служить і відносним займенником ('який, що'), вводячи означальне підрядне речення — та сама подвійна функція, що й у квеньї.",
            "en": {
              "text": "The same element i used as the definite article also serves as the relative pronoun ('who, which'), introducing a relative clause — the same dual function found in Quenya."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "i aran i thoro",
                "король, що править"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Particle: i — B1"
      },
      {
        "id": "compound-noun-formation",
        "title": "Compound Noun Formation — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні іменники утворюються поєднанням двох коренів, причому другий елемент часто зазнає м'якої мутації, а перший втрачає кінцевий голосний.",
            "en": {
              "text": "Compound nouns are formed by joining two roots, with the second element often undergoing soft mutation and the first losing its final vowel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Imladris (Рівендол, 'ущелина розколотого потоку')",
                "Imladris (Rivendell, 'ravine of the cloven stream')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Noun Formation — B1"
      },
      {
        "id": "diminutive-suffix",
        "title": "Diminutive Suffix — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний суфікс -eg/-og додає значення малості чи пестливості до будь-якого іменника.",
            "en": {
              "text": "The diminutive suffix -eg/-og adds a sense of smallness or affection to any noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iaur → iaureg",
                "старий → старенький"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -eg / -og — B1"
      },
      {
        "id": "patronymic-suffix",
        "title": "Patronymic: -ion — B1",
        "emoji": "👨‍👦",
        "sections": [
          {
            "type": "intro",
            "text": "По-батькові утворюється суфіксом -ion ('син'), доданим до імені батька, — риса, спільна з квеньєю, попри інакшу решту морфології.",
            "en": {
              "text": "A patronymic is formed with the suffix -ion ('son') added to the father's name — a trait shared with Quenya, despite the rest of the morphology diverging."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Eärendilion",
                "син Еаренділа"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Patronymic: -ion — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Vocative Address — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось форма іменника не змінюється, а звертання вводиться безпосередньо без окремого відмінка чи частки.",
            "en": {
              "text": "In direct address, the noun form stays unchanged, and address is introduced directly with no separate case or particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aragorn, tolo!",
                "Араґорне, приходь!"
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
        "id": "conjunctions",
        "title": "Conjunctions — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "a/ah"
              ],
              [
                "але",
                "dan"
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
        "id": "existential-construction",
        "title": "Existence: No — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом no ('бути'), спорідненим із квенійським ná, але з інакшою парадигмою відмінювання через мутацію та фонетичний розвиток синдарину.",
            "en": {
              "text": "Existence is expressed with the verb no ('to be'), cognate with Quenya's ná, but with a different conjugation paradigm shaped by mutation and Sindarin's own phonetic development."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Le nallon.",
                "Я кличу тебе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: no ('to be') — B1"
      },
      {
        "id": "numbers-tens",
        "title": "Numbers: Tens — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "neder"
              ],
              [
                "100",
                "cant"
              ]
            ],
            "en": {
              "title": "Tens"
            }
          }
        ],
        "titleEn": "Numbers: Tens — A2"
      },
      {
        "id": "adjective-comparative-mutation",
        "title": "Mutation After Comparatives — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник, поставлений після частки avod чи прийменника than, зазнає м'якої мутації так само, як після іменника, — мутація узгоджує граматичну структуру, а не лише позицію.",
            "en": {
              "text": "An adjective placed after the particle avod or a 'than'-preposition undergoes soft mutation just as it would after a noun — mutation tracks grammatical structure, not just position."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "avod dhelin (< telin)",
                "приємніший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mutation After Comparatives — B2"
      },
      {
        "id": "pronoun-suffix-verb",
        "title": "Pronominal Suffixes on Verbs — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Об'єктний займенник може приєднуватися прямо до дієслова як суфікс, замість окремого слова, подібно до квенійської системи, але з власним набором форм.",
            "en": {
              "text": "An object pronoun can attach directly to the verb as a suffix, instead of a separate word, similar to Quenya's system but with its own set of forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Le suilon.",
                "Я вітаю тебе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pronominal Verb Suffixes — B2"
      },
      {
        "id": "negative-particle-clause",
        "title": "Clause Negation — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення цілого твердження (а не лише дієслова) утворюється часткою ú перед реченням, окремо від дієслівного префікса ú-.",
            "en": {
              "text": "Negating an entire statement (rather than just the verb) is formed with the particle ú before the clause, separately from the verbal prefix ú-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ú i vethed…",
                "Це ще не кінець…"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clause Negation: ú — B1"
      },
      {
        "id": "adjective-before-noun-poetic",
        "title": "Poetic Adjective Fronting — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "У поетичних текстах і власних назвах прикметник іноді ставиться перед іменником для стилістичного наголосу, порушуючи звичайний прозовий порядок.",
            "en": {
              "text": "In poetic texts and proper names, the adjective is sometimes fronted before the noun for stylistic emphasis, departing from the ordinary prose order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Caradhras ('Червонорога', прикметник + іменник)",
                "Caradhras ('Redhorn', adjective + noun in the name)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Poetic Adjective Fronting — B2"
      },
      {
        "id": "welsh-phonological-inspiration",
        "title": "Welsh Inspiration in Detail — B2",
        "emoji": "🏴",
        "sections": [
          {
            "type": "intro",
            "text": "Толкін, професійний філолог, любив звучання валлійської ще з дитинства й прямо переніс не лише мутації, а й загальний фонетичний 'смак' синдарину — уподобання до th, dd, ch, поширених у валлійській.",
            "en": {
              "text": "Tolkien, a professional philologist, loved the sound of Welsh since childhood and carried over not just the mutations but Sindarin's whole phonetic 'flavor' — a fondness for th, dd, ch, common in Welsh."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aragorn, Caradhras, Rohirrim",
                "власні назви з валлійським звучанням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Welsh Phonological Inspiration — B2"
      },
      {
        "id": "sindarin-vernacular-status",
        "title": "Sindarin as the Vernacular — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від книжної, церемоніальної квеньї, синдарин був повсякденною розмовною мовою Середзем'я в Третю епоху, якою розмовляли й ельфи, і люди Ґондору, — точна протилежність статусу квеньї.",
            "en": {
              "text": "Unlike the bookish, ceremonial Quenya, Sindarin was the everyday spoken language of Middle-earth in the Third Age, spoken by both Elves and the Men of Gondor — the exact opposite of Quenya's status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sindarin: мова щоденного вжитку",
                "Sindarin: the language of everyday use"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sindarin as the Vernacular of Middle-earth — B2"
      },
      {
        "id": "doriath-thingol-origin",
        "title": "Doriath and King Thingol — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Синдарин розвинувся в Доріаті під правлінням короля Тінґола з мови Синдар, ельфів, що залишилися в Середзем'ї, тоді як квенья розвинулась окремо у Валінорі серед Вигнанців.",
            "en": {
              "text": "Sindarin developed in Doriath under King Thingol's rule from the language of the Sindar, the Elves who remained in Middle-earth, while Quenya developed separately in Valinor among the Exiles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Doriath, King Thingol",
                "Доріат, король Тінґол"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Doriath and King Thingol's Realm — B2"
      },
      {
        "id": "cirth-runic-script",
        "title": "The Cirth Runes — B1",
        "emoji": "🪨",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від квеньї, для якої характерний алфавіт тенгвар, синдарин часто записували рунами кірт — гострокутне письмо, зручне для вирізання на камені й дереві, а не для письма чорнилом.",
            "en": {
              "text": "Unlike Quenya, which is chiefly associated with the Tengwar alphabet, Sindarin was often written in the Cirth runes — an angular script suited to carving in stone and wood rather than writing with ink."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "напис на Брамі Морії (кірт)",
                "the inscription on the Doors of Moria (Cirth)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Cirth Runic Script — B1"
      },
      {
        "id": "place-name-etymology",
        "title": "Middle-earth Place Names — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість географічних назв 'Володаря перснів' — прозорі синдаринські складні слова: Rivendell = Imladris ('ущелина розколотого потоку'), Helm's Deep = Aglarond ('слоняна печера').",
            "en": {
              "text": "Most 'Lord of the Rings' place names are transparent Sindarin compounds: Rivendell = Imladris ('ravine of the cloven stream'), Helm's Deep = Aglarond ('glittering caves')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Imladris, Aglarond, Minas Tirith",
                "синдаринські географічні назви"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Middle-earth Place-Name Etymology — B1"
      },
      {
        "id": "gondor-numenorean-usage",
        "title": "Sindarin in Gondor — B1",
        "emoji": "🏰",
        "sections": [
          {
            "type": "intro",
            "text": "Люди Ґондору, нащадки Нуменору, зберегли синдарин як мову знаті й урядування навіть після падіння Нуменору, тому королівські титули й міста Ґондору мають синдаринські назви.",
            "en": {
              "text": "The Men of Gondor, descendants of Númenor, preserved Sindarin as the language of nobility and government even after Númenor's fall, so Gondor's royal titles and cities bear Sindarin names."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Minas Tirith, Minas Morgul",
                "'вежа сторожі', 'вежа чаклунства' — назви Ґондору"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sindarin in Gondor's Court — B1"
      },
      {
        "id": "star-vocabulary-sindarin",
        "title": "Star Vocabulary in Sindarin — B1",
        "emoji": "⭐",
        "sections": [
          {
            "type": "intro",
            "text": "Синдаринська зоряна лексика відрізняється від квенійської власними коренями (gil замість él), як у назві Ґілраена чи вигуку Elbereth Gilthoniel ('Зорезапалювачка'), де gil- позначає 'зоря'.",
            "en": {
              "text": "Sindarin star vocabulary uses its own roots distinct from Quenya (gil instead of él), as in the name Gilraen or the invocation Elbereth Gilthoniel ('Star-kindler'), where gil- means 'star'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Elbereth Gilthoniel",
                "Елберет Ґілтоніель, 'Зорезапалювачка'"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Star Vocabulary: gil- — B1"
      },
      {
        "id": "greetings",
        "title": "Greetings — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Вітаю",
                "Mae govannen"
              ],
              [
                "Прощавай",
                "Novaer"
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
        "id": "colors",
        "title": "Colors — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "білий",
                "fain"
              ],
              [
                "чорний",
                "morn"
              ],
              [
                "зелений",
                "calen"
              ],
              [
                "золотий",
                "glor-"
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
        "id": "tree-forest-vocabulary",
        "title": "Trees and Forests — A2",
        "emoji": "🌲",
        "sections": [
          {
            "type": "intro",
            "text": "Ліс Лотлоріен (Lothlórien) буквально означає 'квіткова мрія-земля', а величні мелорн-дерева (mellyrn) — унікальна флора, притаманна лише цьому лісу в леґендаріумі.",
            "en": {
              "text": "The forest Lothlórien literally means 'dream-flower land', and the majestic mallorn trees (mellyrn) are unique flora found only in that forest within the legendarium."
            }
          },
          {
            "type": "table",
            "title": "Дерева й ліс",
            "rows": [
              [
                "дерево",
                "galadh"
              ],
              [
                "ліс",
                "taur"
              ],
              [
                "квітка",
                "loth"
              ]
            ],
            "en": {
              "title": "Trees and Forest"
            }
          }
        ],
        "titleEn": "Tree and Forest Vocabulary — A2"
      },
      {
        "id": "family-terms",
        "title": "Family Terms — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "adar"
              ],
              [
                "мати",
                "naneth"
              ],
              [
                "брат",
                "toron"
              ],
              [
                "сестра",
                "muinthel"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Family Terms — A2"
      },
      {
        "id": "body-parts",
        "title": "Body Parts — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "dol"
              ],
              [
                "рука",
                "cam"
              ],
              [
                "око",
                "hen"
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
        "id": "weather-vocabulary",
        "title": "Weather Vocabulary — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "anor"
              ],
              [
                "дощ",
                "ross"
              ],
              [
                "сніг",
                "loss"
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
        "id": "animals-vocabulary",
        "title": "Animal Vocabulary — A2",
        "emoji": "🐎",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "кінь",
                "roch"
              ],
              [
                "орел",
                "thoron"
              ],
              [
                "вовк",
                "draug"
              ]
            ],
            "en": {
              "title": "Animals"
            }
          }
        ],
        "titleEn": "Animal Vocabulary — A2"
      },
      {
        "id": "rohirric-rohan-relation",
        "title": "Sindarin and the Rohirrim — B2",
        "emoji": "🐴",
        "sections": [
          {
            "type": "intro",
            "text": "Народ Рогану має власну мову (представлену давньоанглійською в перекладі), однак навіть його назва Rohirrim ('господарі коней') і назва самого краю Rohan — синдаринські утворення, дані сусідами Ґондору.",
            "en": {
              "text": "The people of Rohan have their own language (represented by Old English in translation), yet even their name Rohirrim ('horse-lords') and the land's name Rohan are Sindarin formations given by their Gondorian neighbors."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Rohan (< roch + 'земля')",
                "Rohan ('horse-land', a Sindarin exonym)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sindarin Names for Rohan — B2"
      },
      {
        "id": "sword-weapon-names",
        "title": "Named Swords — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменування знакової зброї власними синдаринськими іменами (Andúril 'Полум'я Заходу', Glamdring 'Молот ворогів') — усталена традиція леґендаріуму, що підкреслює вагу артефакту.",
            "en": {
              "text": "Naming iconic weapons with their own Sindarin names (Andúril 'Flame of the West', Glamdring 'Foe-hammer') is an established legendarium tradition emphasizing an artifact's significance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Andúril, Glamdring, Orcrist",
                "іменована зброя леґендаріуму"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Named Swords and Weapons — B1"
      },
      {
        "id": "clothing-cloak-lorien",
        "title": "The Elven Cloaks of Lórien — B1",
        "emoji": "🧥",
        "sections": [
          {
            "type": "intro",
            "text": "Плащі, даровані Галадріель у Лоріені (lassui), мають власну назву в тексті й функціональну властивість маскування, невіддільну від їхнього синдаринського імені в оповіді.",
            "en": {
              "text": "The cloaks given by Galadriel in Lórien (lassui) have their own name in the text and a camouflaging property inseparable from their Sindarin name in the narrative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lassui (плащі, 'листоподібні')",
                "lassui (the cloaks, 'leaf-like')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Elven Cloaks of Lórien — B1"
      },
      {
        "id": "hobbit-shire-names",
        "title": "Sindarin Elements in Hobbit Names — B2",
        "emoji": "🏡",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча гобіти мали власну мову, кілька назв у Ширі та довкола неї запозичені із синдарину через давній контакт, показуючи вплив ельфійської мови навіть на найвіддаленіший регіон Середзем'я.",
            "en": {
              "text": "Though Hobbits had their own language, a few names in and around the Shire are borrowed from Sindarin through ancient contact, showing Elvish influence even on the most remote region of Middle-earth."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Baranduin (Брендівинна ріка, 'золотисто-карпіва ріка')",
                "Baranduin (the Brandywine River, 'golden-brown river')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sindarin Elements in Hobbit Geography — B2"
      },
      {
        "id": "numbers-tens-vocab",
        "title": "Larger Numbers — B1",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Більші числа",
            "rows": [
              [
                "30",
                "penekaer"
              ],
              [
                "100",
                "cant"
              ]
            ],
            "en": {
              "title": "Larger Numbers"
            }
          }
        ],
        "titleEn": "Larger Numbers — B1"
      },
      {
        "id": "title-lord-lady",
        "title": "Titles: Lord and Lady — B1",
        "emoji": "👑",
        "sections": [
          {
            "type": "table",
            "title": "Титули",
            "rows": [
              [
                "володар",
                "aran / hîr"
              ],
              [
                "володарка",
                "heryn / bereth"
              ]
            ],
            "en": {
              "title": "Titles"
            }
          }
        ],
        "titleEn": "Titles: Lord and Lady — B1"
      },
      {
        "id": "food-vocabulary",
        "title": "Food Vocabulary — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "basgorn"
              ],
              [
                "вода",
                "nen"
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
        "id": "lembas-waybread",
        "title": "Lembas: The Waybread — B1",
        "emoji": "🍞",
        "sections": [
          {
            "type": "intro",
            "text": "Lembas (букв. 'хліб на шлях') — священний ельфійський дорожній хліб, назва якого стала настільки культурно значущою, що вживається без перекладу навіть в англомовному тексті роману.",
            "en": {
              "text": "Lembas (lit. 'way-bread') is the sacred Elven journey-bread, whose name became so culturally significant that it is used untranslated even in the English text of the novel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lembas",
                "дорожній хліб (священна їжа ельфів)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lembas: The Waybread — B1"
      },
      {
        "id": "days-of-week-sindarin",
        "title": "Days of the Week — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "день зірок",
                "Orgilion"
              ],
              [
                "день сонця",
                "Oranor"
              ],
              [
                "день місяця",
                "Orithil"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Further Conjunctions — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка an ('бо, тому що') додає причиновий зв'язок поза базовим набором a/dan, уживана для пояснення причини в підрядному реченні.",
            "en": {
              "text": "The particle an ('for, because') adds a causal link beyond the basic a/dan set, used to explain a reason in a subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Daro, an le aníron gared le athae.",
                "Стій, бо я хочу говорити з тобою."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions: an — B1"
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
        "id": "irregular-verb-no",
        "title": "Irregular Verb: no ('to be') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово no ('бути') має супплетивні форми в різних часах, не пов'язані спільним коренем, — та сама супплетивність, що й у більшості мов світу для цього дієслова.",
            "en": {
              "text": "The verb no ('to be') has suppletive forms across different tenses, not sharing a common root — the same suppletivity found for this verb in most languages of the world."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "no (є) vs. ni (був)",
                "is vs. was (suppletive roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: no ('to be') — B1"
      },
      {
        "id": "irregular-plural-adan",
        "title": "Irregular Plural: Adan → Edain — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька ключових іменників леґендаріуму (adan 'людина', golodh 'нолдо') утворюють множину складеною зміною голосного, що не піддається жодному загальному правилу i-affection, а вивчається лише окремо.",
            "en": {
              "text": "A few key legendarium nouns (adan 'man', golodh 'Noldo') form the plural with a compound vowel change that follows no general i-affection rule, and must be learned individually."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "Adan → Edain",
                "Man → Men (irregular vowel pattern)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: Adan → Edain — B2"
      },
      {
        "id": "archaic-forms-inscriptions",
        "title": "Archaic Forms in Inscriptions — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Написи на Брамі Морії та кільце-вірш зберігають архаїчні форми синдарину, що передують пізнішим фонетичним змінам, тому їхнє читання іноді відрізняється від реконструйованого стандарту.",
            "en": {
              "text": "The Doors of Moria inscription and the Ring-verse preserve archaic Sindarin forms predating later phonetic changes, so their reading sometimes diverges from the reconstructed standard."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pedo mellon a minno.",
                "Скажи 'друг' і заходь. (архаїчний напис)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Forms in Inscriptions — B2"
      }
    ]
  }
];
