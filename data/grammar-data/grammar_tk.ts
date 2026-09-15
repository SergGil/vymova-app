// Vymova — data/grammar-data/grammar_tk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TK: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Şahs çalyşyklary — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У туркменській, як і в більшості тюркських мов, немає граматичного роду — \"ol\" означає і \"він\", і \"вона\", і \"воно\".",
            "en": {
              "text": "Like most Turkic languages, Turkmen has no grammatical gender — \"ol\" means \"he\", \"she\", and \"it\" alike."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "men"
              ],
              [
                "ти (зв. / ввічл.)",
                "sen / siz"
              ],
              [
                "він / вона / воно",
                "ol"
              ],
              [
                "ми",
                "biz"
              ],
              [
                "ви",
                "siz"
              ],
              [
                "вони",
                "olar"
              ]
            ],
            "en": {
              "title": "Personal Pronouns"
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "vowel-length-phonemic",
        "title": "Uzyn Çekimliler — B1",
        "emoji": "🔊",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості тюркських мов, туркменська зберегла фонематичну довготу голосних, успадковану зі спільної огузької мови, — короткий і довгий варіант того самого голосного розрізняють значення слів.",
            "en": {
              "text": "Unlike most Turkic languages, Turkmen retained phonemic vowel length, inherited from Common Oghuz Turkic — the short and long version of the same vowel distinguish word meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "at (кінь) vs. āt (ім'я, з довгим ā)",
                "horse vs. name (short vs. long vowel)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Vowel Length — B1"
      },
      {
        "id": "latin-script-1993",
        "title": "Latyn Elipbiýi: 1993 — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Туркменська пройшла три писемності за століття: арабське письмо, кирилицю (з радянської доби) і латинку, офіційно запроваджену 1993 року після здобуття незалежності, — з власними літерами для звуків, яких немає в турецькій латинці.",
            "en": {
              "text": "Turkmen has gone through three scripts in a century: Arabic, Cyrillic (Soviet era), and Latin, officially adopted in 1993 after independence — with its own letters for sounds absent from Turkish Latin script."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ý, ž, ň (літери, унікальні для туркменської латинки)",
                "ý, ž, ň (letters unique to Turkmen Latin orthography)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The 1993 Latin Script — A2"
      },
      {
        "id": "six-case-system",
        "title": "Düşümler: Altysy — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Туркменська має шість відмінків (називний, родовий, давальний, знахідний, місцевий, вихідний), кожен зі своїм суфіксом, доданим до основи іменника.",
            "en": {
              "text": "Turkmen has six grammatical cases (nominative, genitive, dative, accusative, locative, ablative), each with its own suffix added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "öý → öýde (в домі, місцевий)",
                "house → in the house (locative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Six-Case System — B1"
      },
      {
        "id": "vowel-harmony-detail",
        "title": "Çekimli Sazlaşygy — A2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні суфіксів обов'язково узгоджуються з останнім голосним кореня за твердістю/м'якістю (задньо-передньоязиковістю), тож той самий суфікс має кілька фонетичних варіантів залежно від слова.",
            "en": {
              "text": "Suffix vowels obligatorily harmonize with the root's last vowel for backness/frontness (hardness/softness), so the same suffix has several phonetic variants depending on the word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "öýler (доми) vs. atlar (коні) — той самий суфікс множини",
                "houses vs. horses — the same plural suffix, different vowel"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Harmony — A2"
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
        "id": "present-continuous",
        "title": "Häzirki Zaman: -ýar — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється суфіксом -ýar/-ýär, доданим до основи дієслова, плюс особове закінчення.",
            "en": {
              "text": "The present continuous tense is formed with the suffix -ýar/-ýär added to the verb stem, plus a person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okaýaryn.",
                "Я читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -ýar — A1"
      },
      {
        "id": "past-definite",
        "title": "Anyk Geçen Zaman: -dy — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Означений минулий час (особисто засвідчений) утворюється суфіксом -dy/-di, доданим до основи, позначаючи дію, яку мовець бачив сам.",
            "en": {
              "text": "The definite (personally witnessed) past tense is formed with the suffix -dy/-di added to the stem, marking an action the speaker saw firsthand."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okadym.",
                "Я прочитав (я це бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Past: -dy — A2"
      },
      {
        "id": "past-inferential",
        "title": "Nämälim Geçen Zaman: -ypdyr — B1",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямий (переказний/висновковий) минулий час утворюється суфіксом -ypdyr, окремим від означеного минулого, позначаючи дію, про яку мовець дізнався від інших або визначив за результатом.",
            "en": {
              "text": "The inferential/reportative past is formed with the suffix -ypdyr, distinct from the definite past, marking an action the speaker learned about from others or inferred from a result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ol gidipdir.",
                "Кажуть, він пішов (я цього не бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inferential Past: -ypdyr — B1"
      },
      {
        "id": "future-tense",
        "title": "Geljek Zaman: -jak — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -jak/-jek, доданим до основи, плюс допоміжне дієслово 'бути', узгоджене з особою.",
            "en": {
              "text": "The future tense is formed with the suffix -jak/-jek added to the stem, plus the verb 'to be', agreeing with person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okajakdyryn.",
                "Я читатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -jak — A2"
      },
      {
        "id": "aorist-habitual",
        "title": "Umumy Zaman: -ar — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист (безчасова/звична форма) утворюється суфіксом -ar/-ýar, окремим від тривалого теперішнього, і позначає загальні істини чи звичні дії.",
            "en": {
              "text": "The aorist (timeless/habitual form) is formed with the suffix -ar/-ýar, distinct from the continuous present, and marks general truths or habitual actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ol her gün okar.",
                "Він читає щодня (звично)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aorist/Habitual: -ar — B1"
      },
      {
        "id": "perfect-tense",
        "title": "Tamamlanan Zaman: -an — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу на -an плюс допоміжне дієслово bar ('є'), наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle in -an plus the auxiliary bar ('there is'), emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okan.",
                "Я вже прочитав (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense: -an — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Buýruk Manysy — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без закінчення; ввічлива й множинна форма додає суфікс -yň/-iň.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no ending; the polite/plural form adds the suffix -yň/-iň."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Oka! / Okaň!",
                "Читай! / Читайте!"
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
        "id": "conditional-sa",
        "title": "Şert Manysy: -sa — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -sa/-se, доданим до основи дієслова в підрядному реченні.",
            "en": {
              "text": "The conditional mood is formed with the suffix -sa/-se, added to the verb stem in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ýagyş ýagsa, öýde galaryn.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -sa — B1"
      },
      {
        "id": "necessitative-maly",
        "title": "Zerurlyk: -maly — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Необхідність (потрібнісний спосіб) утворюється суфіксом -maly/-meli, доданим до основи дієслова, передаючи значення 'мусити'.",
            "en": {
              "text": "Necessity (the necessitative mood) is formed with the suffix -maly/-meli, added to the verb stem, conveying the meaning 'must'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okamaly.",
                "Я мушу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessitative: -maly — B1"
      },
      {
        "id": "potential-bil",
        "title": "Başarnyk: Bilmek — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається допоміжним дієсловом bilmek ('могти/уміти'), доданим після дієприслівникової форми основного дієслова.",
            "en": {
              "text": "Ability or possibility is expressed with the auxiliary verb bilmek ('to be able'), added after the converb form of the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okap bilýärin.",
                "Я можу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: bilmek — B1"
      },
      {
        "id": "negation-ma",
        "title": "Ýoklyk: -ma — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється суфіксом -ma/-me, вставленим між основою дієслова й часовим суфіксом.",
            "en": {
              "text": "Negation is formed with the suffix -ma/-me, inserted between the verb stem and the tense suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men okamaýaryn.",
                "Я не читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: -ma — A1"
      },
      {
        "id": "optative-mood",
        "title": "Arzuw Manysy — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб для благословень утворюється суфіксом -sin/-syn у третій особі, окремим від наказового способу для другої особи.",
            "en": {
              "text": "The optative for blessings is formed with the suffix -sin/-syn in the third person, distinct from the second-person imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Türkmenistan gülläp össün!",
                "Хай процвітає Туркменістан!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Mood — B2"
      },
      {
        "id": "infinitive-form",
        "title": "Işlik Ady: -mak — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -mak/-mek, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -mak/-mek, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "okamak",
                "читати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -mak — A2"
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
        "id": "case-suffix-table",
        "title": "Düşüm Goşulmalary — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Відмінкові суфікси",
            "rows": [
              [
                "родовий",
                "-yň/-iň"
              ],
              [
                "давальний",
                "-a/-e"
              ],
              [
                "знахідний",
                "-y/-i"
              ],
              [
                "вихідний",
                "-dan/-den"
              ]
            ],
            "en": {
              "title": "Case Suffixes"
            }
          }
        ],
        "titleEn": "Case Suffix Table — B1"
      },
      {
        "id": "word-order-sov",
        "title": "Söz Tertibi: SOV — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), причому дієслово майже завжди стоїть у кінці речення.",
            "en": {
              "text": "The basic word order is Subject-Object-Verb (SOV), with the verb almost always placed at the end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men kitaby okaýaryn.",
                "Я читаю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A2"
      },
      {
        "id": "possessive-suffixes",
        "title": "Eýelik Goşulmalary — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність позначається суфіксом, доданим до самого іменника (-(y)m 'мій', -(y)ň 'твій', -(s)y 'його/її'), без окремого присвійного займенника перед ним.",
            "en": {
              "text": "Possession is marked with a suffix attached to the noun itself (-(y)m 'my', -(y)ň 'your', -(s)y 'his/her'), with no separate possessive pronoun placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "öý → öýüm",
                "дім → мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "plural-suffix-lar",
        "title": "Köplük: -lar — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється єдиним суфіксом -lar/-ler, доданим до основи іменника й узгодженим за голосною гармонією.",
            "en": {
              "text": "The plural is formed with the single suffix -lar/-ler, added to the noun stem and matched by vowel harmony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitap → kitaplar",
                "книга → книги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Suffix: -lar — A1"
      },
      {
        "id": "postpositions-instead-prepositions",
        "title": "Soňky Sözler — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників туркменська вживає післяйменники — окремі слова, що йдуть за іменником у потрібному відмінку, а не перед ним.",
            "en": {
              "text": "Instead of prepositions, Turkmen uses postpositions — separate words that follow the noun in the required case, rather than preceding it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "öýden soň",
                "після дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — B1"
      },
      {
        "id": "converb-sequential",
        "title": "Baglaýjy Işlik: -yp — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -yp/-ip з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -yp/-ip converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "okap ýatdy",
                "почитавши, ліг спати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -yp — B1"
      },
      {
        "id": "comparative-rak",
        "title": "Deňeşdirme: -rak — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -rak/-räk, доданим до прикметника, а об'єкт порівняння вводиться відмінком вихідним.",
            "en": {
              "text": "The comparative degree is formed with the suffix -rak/-räk added to the adjective, with the compared object marked by the ablative case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ondan uludyr",
                "більший за те"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: -rak — B1"
      },
      {
        "id": "superlative-in",
        "title": "Iň Ýokary Derejesi: Iň — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою iň ('найбільш') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle iň ('most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iň uly",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: iň — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Sanlar: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "bir"
              ],
              [
                "2",
                "iki"
              ],
              [
                "3",
                "üç"
              ],
              [
                "5",
                "bäş"
              ],
              [
                "10",
                "on"
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
        "title": "Görkezme Çalyşyklary — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "bu"
              ],
              [
                "той",
                "ol"
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
        "title": "Sorag Sözleri — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "kim"
              ],
              [
                "що",
                "näme"
              ],
              [
                "де",
                "nirede"
              ],
              [
                "коли",
                "haçan"
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
        "id": "conjunctions",
        "title": "Baglaýjylar — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "we/-de"
              ],
              [
                "або",
                "ýa-da"
              ],
              [
                "але",
                "emma"
              ]
            ],
            "en": {
              "title": "Conjunctions"
            }
          }
        ],
        "titleEn": "Conjunctions — A1"
      },
      {
        "id": "reflexive-oz",
        "title": "Öz: Öz-özi — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник öz ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються, приймаючи присвійний суфікс.",
            "en": {
              "text": "The reflexive pronoun öz ('self') is used for all persons and numbers when the subject and object of the action coincide, taking a possessive suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ol özüni gördi.",
                "Він побачив себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: öz — B1"
      },
      {
        "id": "relative-participle-yan",
        "title": "Sypat Işlik: -ýan — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Туркменська не має відносного займенника: означальні звороти утворюються перетворенням дієслова на дієприкметник (-ýan/-an), поставлений прямо перед іменником.",
            "en": {
              "text": "Turkmen has no relative pronoun: relative clauses are formed by turning the verb into a participle (-ýan/-an), placed directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "okaýan okuwçy",
                "учень, що читає"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Participle: -ýan — B2"
      },
      {
        "id": "adjective-invariant-before-noun",
        "title": "Sypat: Üýtgemeýär — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "The adjective always precedes the noun and does not change for gender, number, or case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uly öý",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Adjective Before Noun — A2"
      },
      {
        "id": "diminutive-jyk",
        "title": "Kiçeldiji: -jyk — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -jyk/-jik, доданим до основи іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -jyk/-jik, added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "öý → öýjük",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -jyk — B1"
      },
      {
        "id": "vocative-simple",
        "title": "Ýüzlenme — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, часто перед ним ставиться частка ýa для наголосу.",
            "en": {
              "text": "In direct address, a name is used unchanged, often preceded by the particle ýa for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aman, bäri gel!",
                "Амане, ходи сюди!"
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
        "id": "existential-bar-yok",
        "title": "Bar we Ýok: Bolluk — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом bar ('є'), а відсутність — окремим словом ýok ('немає'), незалежно від роду чи числа предмета.",
            "en": {
              "text": "The existence of something is expressed with the word bar ('there is'), and its absence with the separate word ýok ('there isn't'), regardless of the thing's gender or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Köp adam bar.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: bar / ýok — A1"
      },
      {
        "id": "question-particle-my",
        "title": "-my: Sorag Goşulmasy — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється клітичним суфіксом -my/-mi, доданим до кінця слова, на якому наголошується запитання.",
            "en": {
              "text": "A yes/no question is formed with the clitic suffix -my/-mi, added to the end of the word being questioned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sen türkmençe bilýärmiň?",
                "Ти знаєш туркменську?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Suffix: -my — A2"
      },
      {
        "id": "causative-dyr",
        "title": "Sebäp Işlik: -dyr — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -dyr/-dir, доданий до основи дієслова, передає значення 'змусити зробити'.",
            "en": {
              "text": "The causative suffix -dyr/-dir, added to the verb stem, conveys the meaning 'make/cause to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ýazmak (писати) → ýazdyrmak (примусити писати)",
                "to write → to make someone write (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -dyr — B2"
      },
      {
        "id": "passive-suffix-yl",
        "title": "Passiw Işlik: -yl — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -yl/-il, доданим до основи дієслова, замість окремого допоміжного дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -yl/-il, added to the verb stem, instead of a separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ýazmak (писати) → ýazylmak (бути написаним)",
                "to write → to be written (passive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Suffix: -yl — B2"
      },
      {
        "id": "reduplication-intensity",
        "title": "Gaýtalama: Güýçlendirme — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прислівника чи прикметника підсилює значення, передаючи інтенсивність без окремого підсилювального слова.",
            "en": {
              "text": "Repeating an adverb or adjective intensifies its meaning, conveying intensity without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ýuwaş-ýuwaş",
                "дуже повільно (букв. 'повільно-повільно')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "restrictive-particle-diňe",
        "title": "Diňe: Çäklendirme — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка diňe ('лише'), додана перед словом, обмежує його значення, — типовий приклад того, як частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle diňe ('only'), placed before a word, restricts its meaning — a typical example of how a particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "diňe men",
                "тільки я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: diňe — B1"
      },
      {
        "id": "desiderative-asyz",
        "title": "Arzuw: -asy Gel- — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається складеною конструкцією -asy gel- ('хочеться'), доданою до основи дієслова плюс дієслово gelmek ('приходити'), — окрема ідіоматична модель, відмінна від простого допоміжного 'хотіти'.",
            "en": {
              "text": "A wish is expressed with the compound construction -asy gel- ('feel like'), added to the verb stem plus the verb gelmek ('to come') — a distinct idiomatic pattern, different from a simple 'want' auxiliary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Okasym gelýär.",
                "Мені хочеться читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: -asy gel- — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Beýleki Baglaýjylar — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник sebäbi ('тому що') і частка şonuň üçin ('отже') розширюють базовий набір we/ýa-da/emma, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction sebäbi ('because') and the particle şonuň üçin ('therefore') extend the basic we/ýa-da/emma set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Öýde galýaryn, sebäbi ýagyş ýagýar.",
                "Я залишаюся вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
      },
      {
        "id": "five-tribes-carpet-guls",
        "title": "Bäş Taýpa: Halyçylyk Gölleri — B2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "П'ять головних туркменських племен мають кожне власний геометричний символ (гьол), уживаний у килимовому тканні, — усі п'ять гьолів зображені на національному прапорі, роблячи ткацтво прямим виявом племінної ідентичності.",
            "en": {
              "text": "Each of the five major Turkmen tribes has its own geometric symbol (gul), used in carpet weaving — all five guls appear on the national flag, making weaving a direct expression of tribal identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Teke gölü (гьол племені текке)",
                "the Tekke tribe's gul"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Five Tribes' Carpet Guls — B2"
      },
      {
        "id": "akhal-teke-horses",
        "title": "Ahalteke Atlary — B1",
        "emoji": "🐎",
        "sections": [
          {
            "type": "intro",
            "text": "Ахалтекінська порода коней, відома за металевим блиском шерсті ('золоті коні'), — один із найдавніших чистопородних коней світу й центральний символ туркменської ідентичності, зображений на державному гербі.",
            "en": {
              "text": "The Akhal-Teke horse breed, known for its metallic sheen ('golden horses'), is one of the world's oldest purebred horses and a central symbol of Turkmen identity, featured on the national emblem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Altyn at (золотий кінь)",
                "the golden horse"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Akhal-Teke Horses — B1"
      },
      {
        "id": "merv-silk-road-heritage",
        "title": "Merw: Ýüpek Ýoly — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Мерв, руїни якого лежать у сучасному Туркменістані, був одним із найбільших міст світу в Середньовіччі та ключовим вузлом Шовкового шляху, доки монгольське завоювання не спустошило його.",
            "en": {
              "text": "Merv, whose ruins lie in present-day Turkmenistan, was one of the world's largest cities in the medieval period and a key Silk Road hub, until the Mongol conquest devastated it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gadymy Merw (руїни давнього Мерва)",
                "the ruins of ancient Merv"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Merv: A Silk Road Heritage City — B2"
      },
      {
        "id": "darvaza-gas-crater",
        "title": "Derweze: 'Dowzah Gapysy'  — B1",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Кратер Дарваза в пустелі Каракум, що горить безперервно з 1970-х років, отримав народну назву 'Ворота пекла' і став несподіваним туристичним символом країни.",
            "en": {
              "text": "The Darvaza gas crater in the Karakum Desert, burning continuously since the 1970s, earned the popular nickname 'Door to Hell' and became an unexpected tourist symbol of the country."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dowzah Gapysy (Ворота пекла)",
                "the Door to Hell"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Darvaza Gas Crater — B1"
      },
      {
        "id": "ashgabat-white-marble",
        "title": "Aşgabat: Ak Mermer Şäher — B1",
        "emoji": "🏙️",
        "sections": [
          {
            "type": "intro",
            "text": "Столиця Ашгабат увійшла до Книги рекордів Гіннеса за найбільшу концентрацію будівель, облицьованих білим мармуром, у світі, — символ прагнення до монументальної й показової архітектури.",
            "en": {
              "text": "The capital Ashgabat entered the Guinness Book of Records for the world's highest concentration of white-marble-clad buildings — a symbol of an aspiration toward monumental, showcase architecture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ak mermer binalar",
                "будівлі з білого мармуру"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ashgabat: The White Marble City — B1"
      },
      {
        "id": "telpek-felt-hat",
        "title": "Telpek — B1",
        "emoji": "🧢",
        "sections": [
          {
            "type": "intro",
            "text": "Телпек — велика кучерява овеча шапка, символ мужності й статусу, яку носять навіть у спекотну погоду, оскільки густе хутро захищає від сонця так само, як і від холоду.",
            "en": {
              "text": "The telpek is a large curly sheepskin hat, a symbol of masculinity and status, worn even in hot weather since the thick fur protects from sun just as it does from cold."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gara telpek (чорний телпек)",
                "black telpek"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Telpek: The Sheepskin Hat — B1"
      },
      {
        "id": "neutrality-status",
        "title": "Bitaraplyk: Halkara Ykrar — B2",
        "emoji": "🕊️",
        "sections": [
          {
            "type": "intro",
            "text": "Туркменістан отримав від ООН статус постійного нейтралітету 1995 року — рідкісний міжнародно визнаний статус, який формує зовнішню політику й самоідентифікацію країни.",
            "en": {
              "text": "Turkmenistan received UN-recognized permanent neutrality status in 1995 — a rare internationally acknowledged status that shapes the country's foreign policy and self-identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bitaraplyk baýramy (день нейтралітету)",
                "Neutrality Day"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Permanent Neutrality Status — B2"
      },
      {
        "id": "colors",
        "title": "Reňkler — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "gyzyl"
              ],
              [
                "чорний",
                "gara"
              ],
              [
                "білий",
                "ak"
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
        "id": "numbers-tens",
        "title": "Sanlar: On — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "ýigrimi"
              ],
              [
                "100",
                "ýüz"
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
        "id": "days-of-week",
        "title": "Hepdäniň Günleri — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "duşenbe"
              ],
              [
                "п'ятниця",
                "anna"
              ],
              [
                "неділя",
                "ýekşenbe"
              ]
            ],
            "en": {
              "title": "Days"
            }
          }
        ],
        "titleEn": "Days of the Week — A2"
      },
      {
        "id": "family-terms",
        "title": "Maşgala — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "kaka"
              ],
              [
                "мати",
                "eje"
              ],
              [
                "брат",
                "dogan"
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
        "id": "greetings",
        "title": "Salamlaşmak — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Salam"
              ],
              [
                "Дякую",
                "Sag boluň"
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
        "title": "Howa — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "gün"
              ],
              [
                "дощ",
                "ýagyş"
              ],
              [
                "вітер",
                "ýel"
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
        "title": "Bedeniň Bölekleri — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "kelle"
              ],
              [
                "рука",
                "el"
              ],
              [
                "око",
                "göz"
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
        "id": "plov-cuisine",
        "title": "Palow — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "intro",
            "text": "Палов — центральна страва туркменської кухні, з рисом, морквою, м'ясом і зирою, обов'язкова на весіллях і великих сімейних зустрічах.",
            "en": {
              "text": "Palow is the central dish of Turkmen cuisine, with rice, carrots, meat, and cumin, obligatory at weddings and large family gatherings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "palow bişirmek",
                "готувати палов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Palow: The National Dish — A2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Haýwanlar — A2",
        "emoji": "🐫",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "верблюд",
                "düýe"
              ],
              [
                "собака",
                "it"
              ],
              [
                "вівця",
                "goýun"
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
        "id": "cardinal-directions",
        "title": "Taraplar — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "demirgazyk"
              ],
              [
                "південь",
                "günorta"
              ],
              [
                "схід",
                "gündogar"
              ],
              [
                "захід",
                "günbatar"
              ]
            ],
            "en": {
              "title": "Directions"
            }
          }
        ],
        "titleEn": "Cardinal Directions — B1"
      },
      {
        "id": "karakum-desert-nomadic",
        "title": "Garagum: Çöl Durmuşy — B1",
        "emoji": "🏜️",
        "sections": [
          {
            "type": "intro",
            "text": "Пустеля Каракум займає близько 70% території країни, тож туркменська має розвинену лексику для кочового скотарства, оазисів і водних колодязів, необхідних для виживання в посушливому кліматі.",
            "en": {
              "text": "The Karakum Desert covers about 70% of the country's territory, so Turkmen has developed vocabulary for nomadic herding, oases, and water wells essential for survival in the arid climate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Garagum çöli (пустеля Каракум)",
                "the Karakum Desert"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Karakum Desert and Nomadic Life — B1"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Geýim — A2",
        "emoji": "👘",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "köýnek"
              ],
              [
                "взуття",
                "aýakgap"
              ]
            ],
            "en": {
              "title": "Clothing"
            }
          }
        ],
        "titleEn": "Clothing Vocabulary — A2"
      },
      {
        "id": "food-vocabulary",
        "title": "Iýmit — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "çörek"
              ],
              [
                "вода",
                "suw"
              ],
              [
                "чай",
                "çaý"
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
        "id": "turkic-loanword-strata",
        "title": "Türki-Iran-Rus Sözleri — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика туркменської поєднує питому тюркську основу зі значними шарами перських запозичень (через давню культурну взаємодію) і радянсько-російських слів (через сімдесят років радянського правління).",
            "en": {
              "text": "Turkmen vocabulary blends a native Turkic base with significant layers of Persian loanwords (through ancient cultural interaction) and Soviet-Russian words (through seventy years of Soviet rule)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bazar (з перської 'ринок')",
                "market (Persian loanword)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Turkic/Persian/Russian Loanword Strata — B2"
      },
      {
        "id": "yurt-nomadic-dwelling",
        "title": "Gara Öý: Ýurt — B1",
        "emoji": "⛺",
        "sections": [
          {
            "type": "intro",
            "text": "Юрта (gara öý, 'чорний дім') — традиційне переносне повстяне житло кочівників, конструкцію й розбирання якого досі детально описують у народних піснях і прислів'ях.",
            "en": {
              "text": "The yurt (gara öý, 'black house') is the traditional portable felt dwelling of nomads, whose construction and disassembly are still described in detail in folk songs and proverbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gara öý gurmak",
                "спорудити юрту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Yurt (Gara Öý) — B1"
      },
      {
        "id": "gokdepe-history",
        "title": "Gökdepe: Taryhy Ýadygärlik — B2",
        "emoji": "🏰",
        "sections": [
          {
            "type": "intro",
            "text": "Битва при Гьокдепе 1881 року, коли туркменські захисники фортеці чинили опір царській армії, залишається символом національної стійкості, з меморіальним комплексом, що досі відвідують щороку в річницю подій.",
            "en": {
              "text": "The 1881 Battle of Gökdepe, where Turkmen fortress defenders resisted the Tsarist army, remains a symbol of national resilience, with a memorial complex still visited annually on the anniversary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gökdepe galasy (фортеця Гьокдепе)",
                "the Gökdepe fortress"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gökdepe: A Historic Site — B2"
      },
      {
        "id": "coordinating-conjunctions-extra-vocab",
        "title": "Sözlemleriň Üstüni Ýetiriş — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Класична туркменська поезія (Махтумкулі Фрагі, XVIII ст.) досі вивчається напам'ять і вважається основою літературної мови й національної свідомості.",
            "en": {
              "text": "Classical Turkmen poetry (Magtymguly Pyragy, 18th c.) is still memorized in school and regarded as the foundation of the literary language and national consciousness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Magtymguly Pyragy (класичний поет)",
                "Magtymguly Pyragy (classical poet)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Magtymguly and Classical Poetry — B1"
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
        "id": "irregular-verb-gitmek",
        "title": "Düzgünsiz Işlik: Gitmek → Gitdi — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово gitmek ('іти') зазнає непередбачуваної асиміляції приголосного в минулому часі (gitdi замість очікуваного *gitди), тож форму слід запам'ятовувати окремо.",
            "en": {
              "text": "The verb gitmek ('to go') undergoes unpredictable consonant assimilation in the past tense (gitdi rather than the expected *gitdi), so the form must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна асиміляція",
            "rows": [
              [
                "gitmek → gitdi (приголосний асимілюється)",
                "go → went (consonant assimilation in the past stem)"
              ]
            ],
            "en": {
              "title": "Irregular Assimilation"
            }
          }
        ],
        "titleEn": "Irregular Consonant Assimilation: gitmek — B1"
      },
      {
        "id": "irregular-plural-adam",
        "title": "Düzgünsiz Köplük: Adam → Adamlar — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник adam ('людина') у значенні 'люди загалом' часто вживається без суфікса множини -lar навіть тоді, коли йдеться про кількох осіб, — виняток із регулярного правила утворення множини.",
            "en": {
              "text": "The noun adam ('person') in the sense of 'people in general' is often used without the plural suffix -lar even when referring to several people — an exception to the regular pluralization rule."
            }
          },
          {
            "type": "table",
            "title": "Виняток із утворення множини",
            "rows": [
              [
                "köp adam (не köp adamlar, 'багато людей')",
                "many people (no plural suffix despite plural meaning)"
              ]
            ],
            "en": {
              "title": "Pluralization Exception"
            }
          }
        ],
        "titleEn": "Collective Singular: adam — B2"
      },
      {
        "id": "irregular-comparative-govy",
        "title": "Düzgünsiz Deňeşdirme: Gowy → Gowurak — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник gowy ('добрий') утворює порівняльний ступінь із незвичайним подовженням складу (gowurak, не просто *gowyrak), відхиляючись від звичайного фонетичного приєднання суфікса -rak.",
            "en": {
              "text": "The adjective gowy ('good') forms its comparative with an unusual extra syllable (gowurak, not simply *gowyrak), departing from the regular phonetic attachment of the -rak suffix."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне приєднання суфікса",
            "rows": [
              [
                "gowy → gowurak (не *gowyrak)",
                "good → better (irregular suffix attachment)"
              ]
            ],
            "en": {
              "title": "Irregular Suffix Attachment"
            }
          }
        ],
        "titleEn": "Irregular Comparative: gowy → gowurak — B1"
      }
    ]
  }
];
