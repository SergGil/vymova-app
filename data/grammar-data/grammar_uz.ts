// Vymova — data/grammar-data/grammar_uz.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UZ: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Kishilik olmoshlari — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "В узбецькій немає граматичного роду — займенник \"u\" однаково означає \"він\", \"вона\" й \"воно\". Є розрізнення між звичайним \"sen\" і ввічливим \"siz\".",
            "en": {
              "text": "Uzbek has no grammatical gender — the pronoun \"u\" means \"he\", \"she\", and \"it\" alike. There's a distinction between informal \"sen\" and polite \"siz\"."
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
                "u"
              ],
              [
                "ми",
                "biz"
              ],
              [
                "ви",
                "sizlar"
              ],
              [
                "вони",
                "ular"
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
        "id": "loss-of-vowel-harmony",
        "title": "Unli garmoniyasining yo'qligi — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від більшості тюркських мов (туркменської, киргизької, уйгурської), узбецька практично втратила голосну гармонію під впливом персько-таджицького субстрату — суфікси мають переважно одну фіксовану форму замість кількох варіантів залежно від голосних кореня.",
            "en": {
              "text": "Unlike most Turkic languages (Turkmen, Kyrgyz, Uyghur), Uzbek has largely lost vowel harmony under Persian-Tajik substrate influence — suffixes mostly have one fixed form instead of several variants depending on the root's vowels."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitob-lar, uy-lar, gul-lar (завжди -lar, не -lär)",
                "books, houses, flowers (always -lar, never vowel-harmonized -ler)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Loss of Vowel Harmony — B1"
      },
      {
        "id": "latin-cyrillic-script-reform",
        "title": "Lotin va kirill yozuvlari — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "З 1993 року Узбекистан офіційно переходить з кирилиці (успадкованої від СРСР) на латиницю, але кирилиця й досі широко вживається у старших поколінь, пресі та деяких вивісках — перехід досі не завершений повністю.",
            "en": {
              "text": "Since 1993, Uzbekistan has been officially transitioning from Cyrillic (inherited from the USSR) to Latin script, but Cyrillic is still widely used by older generations, in print, and on some signage — the transition is still not fully complete."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "O'zbekiston (лат.) = Ўзбекистон (кир.)",
                "Uzbekistan (Latin script vs. Cyrillic script)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Latin/Cyrillic Script Reform — A2"
      },
      {
        "id": "apostrophe-letters",
        "title": "O' va g' harflari — A2",
        "emoji": "✒️",
        "sections": [
          {
            "type": "intro",
            "text": "У латиниці узбецька має дві унікальні літери з апострофом: o' (окрема голосна, не о) і g' (фрикативний звук, близький до арабського ghain) — апостроф тут частина літери, а не пунктуаційний знак, і губиться, коли текст набирають прямою лапкою замість спецсимвола.",
            "en": {
              "text": "In the Latin script, Uzbek has two unique apostrophed letters: o' (a distinct vowel, not o) and g' (a fricative close to Arabic ghain) — the apostrophe here is part of the letter, not punctuation, and is often lost when text is typed with a straight quote instead of the special character."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "o'zbek (узбек) vs. ozbek (без апострофа, помилково)",
                "o'zbek (Uzbek, correct) vs. ozbek (without the apostrophe, incorrect)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Letters O' and G' — A2"
      },
      {
        "id": "persian-tajik-substrate",
        "title": "Fors-tojik ta'siri — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Через століття співіснування з таджицькою в Самарканді, Бухарі та інших містах Узбекистану узбецька мова ввібрала масивний шар персько-таджицької лексики й навіть граматичних конструкцій (як ізафет), що вирізняє її серед тюркських мов, порівнюваних із впливом перської на урду.",
            "en": {
              "text": "Through centuries of coexistence with Tajik in Samarkand, Bukhara, and other cities of Uzbekistan, the Uzbek language has absorbed a massive layer of Persian-Tajik vocabulary and even grammatical constructions (like izafet), setting it apart among Turkic languages — comparable to Persian's influence on Urdu."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bozor (ринок, з перської), darvoza (ворота, з перської)",
                "bozor (market, from Persian), darvoza (gate, from Persian)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Persian-Tajik Substrate — B1"
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
        "id": "present-continuous-yap",
        "title": "Hozirgi davom etayotgan zamon: -yap- — A1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється суфіксом -yap- (від допоміжного 'стояти'), доданим до дієслівної основи, плюс особові закінчення.",
            "en": {
              "text": "The present continuous tense is formed with the suffix -yap- (from the auxiliary 'to stand'), added to the verb stem plus personal endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozyapman.",
                "Я саме пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -yap- — A1"
      },
      {
        "id": "present-future-a",
        "title": "Hozirgi-kelasi zamon: -a/-y — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -a/-y позначає звичну теперішню дію АБО майбутню дію — одна форма покриває обидва значення, розрізнювані контекстом.",
            "en": {
              "text": "The suffix -a/-y marks a habitual present action OR a future action — one form covers both meanings, distinguished by context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men har kuni yozaman.",
                "Я пишу щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present-Future: -a/-y — A2"
      },
      {
        "id": "definite-past-di",
        "title": "Aniq o'tgan zamon: -di — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Означений минулий час позначає дію, свідком якої мовець був особисто, суфіксом -di плюс особові закінчення.",
            "en": {
              "text": "The definite past tense marks an action the speaker personally witnessed, using the suffix -di plus personal endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozdim.",
                "Я написав (я це бачив/зробив сам)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Past: -di — A1"
      },
      {
        "id": "indefinite-past-gan",
        "title": "Noaniq o'tgan zamon: -gan — B1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначений минулий час позначає дію, про яку мовець дізнався з чужих слів або наслідки якої бачить зараз, суфіксом -gan — окремий від -di за джерелом інформації (евіденційність).",
            "en": {
              "text": "The indefinite past marks an action the speaker learned about secondhand or whose results are visible now, using the suffix -gan — distinct from -di in evidentiality (information source)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "U ketgan ekan.",
                "Виявляється, він пішов (я не бачив сам)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Past: -gan — B1"
      },
      {
        "id": "past-continuous-yap-edi",
        "title": "O'tgan davom etayotgan zamon — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий тривалий час утворюється поєднанням -yap- із допоміжним 'бути' в минулому часі (edi).",
            "en": {
              "text": "The past continuous tense is formed by combining -yap- with the past-tense auxiliary 'to be' (edi)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozyapman edi.",
                "Я саме писав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous — B1"
      },
      {
        "id": "future-intention-moqchi",
        "title": "Niyat kelasi zamon: -moqchi — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Намірний майбутній час позначає заплановану дію суфіксом -moqchi ('намір'), доданим до основи дієслова плюс допоміжне 'бути'.",
            "en": {
              "text": "The intentional future marks a planned action with the suffix -moqchi ('intent'), added to the verb stem plus the auxiliary 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozmoqchiman.",
                "Я збираюся писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Intentional Future: -moqchi — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Buyruq mayli — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має гол основу для 2 особи однини, суфікс -ing для ввічливої/множинної форми, і окремі форми для 1 і 3 особи (юссив/когортатив).",
            "en": {
              "text": "The imperative has the bare stem for 2nd person singular, the suffix -ing for the polite/plural form, and separate forms for 1st and 3rd person (jussive/cohortative)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yoz! / Yozing!",
                "Пиши! / Пишіть, будь ласка!"
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
        "title": "Shart mayli: -sa — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -sa, доданим безпосередньо до основи дієслова, без окремого сполучника 'якщо'.",
            "en": {
              "text": "The conditional mood is formed with the suffix -sa, added directly to the verb stem, without a separate word for 'if'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yomg'ir yog'sa, uyda qolaman.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood: -sa — B1"
      },
      {
        "id": "necessitative-kerak",
        "title": "Zaruriyat: kerak — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Необхідність виражається інфінітивом на -ishi плюс незмінне слово kerak ('потрібно'), яке узгоджується з особою через присвійний суфікс на інфінітиві, а не через власне дієвідмінювання.",
            "en": {
              "text": "Necessity is expressed with the infinitive in -ishi plus the invariant word kerak ('necessary'), which agrees with person through a possessive suffix on the infinitive rather than its own conjugation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozishim kerak.",
                "Мені потрібно писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessitative: kerak — B1"
      },
      {
        "id": "optative-mood",
        "title": "Istak mayli — B2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб виражає побажання чи прагнення суфіксом -sa плюс частка edi, окремим значенням від умовного -sa.",
            "en": {
              "text": "The optative mood expresses a wish or aspiration with the suffix -sa plus the particle edi, a separate meaning from the plain conditional -sa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Yozsam edi!",
                "Якби ж я писав!"
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
        "id": "negation-ma",
        "title": "Bo'lishsizlik: -ma- — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється інфіксом -ma-, вставленим між основою дієслова й часовим суфіксом.",
            "en": {
              "text": "Negation is formed with the infix -ma-, inserted between the verb stem and the tense suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yozmayman.",
                "Я не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: -ma- — A1"
      },
      {
        "id": "potential-ol",
        "title": "Imkoniyat: -a ol- — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається дієприслівниковою основою на -a/-y плюс допоміжне дієслово olmoq ('брати/могти').",
            "en": {
              "text": "Ability or possibility is expressed with the converb stem in -a/-y plus the auxiliary verb olmoq ('to take/be able')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men yoza olaman.",
                "Я можу писати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: -a ol- — B1"
      },
      {
        "id": "reported-past-ekan",
        "title": "Rivoyat zamon: ekan — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний (наративний) час додає частку ekan до дієприкметника -gan, позначаючи інформацію, отриману з чужих слів — окрема евіденційна категорія, важлива для казок і чуток.",
            "en": {
              "text": "The reported/narrative tense adds the particle ekan to the -gan participle, marking information obtained secondhand — a distinct evidentiality category important for storytelling and hearsay."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "U yozgan ekan.",
                "Кажуть, він написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reported/Narrative Past: ekan — B2"
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
        "id": "word-order-sov",
        "title": "So'z tartibi: SOV — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок (SOV), причому дієслово майже завжди займає останнє місце в реченні.",
            "en": {
              "text": "The basic word order is subject-object-verb (SOV), with the verb almost always occupying the final position in the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men kitob o'qiyman.",
                "Я читаю книгу. (я книгу читаю)"
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
        "id": "six-case-system",
        "title": "Olti kelishik — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "formula",
            "title": "Шість відмінків",
            "rows": [
              [
                "Бow (номінатив)",
                "-",
                "uy"
              ],
              [
                "Genitiv",
                "-ning",
                "uyning"
              ],
              [
                "Akkuzativ",
                "-ni",
                "uyni"
              ],
              [
                "Dativ",
                "-ga",
                "uyga"
              ],
              [
                "Lokativ",
                "-da",
                "uyda"
              ],
              [
                "Ablativ",
                "-dan",
                "uydan"
              ]
            ]
          },
          {
            "type": "intro",
            "text": "Узбецька має шість відмінків, приєднаних як аглютинативні суфікси до незмінного кореня іменника, без гармонії голосних (на відміну від інших тюркських мов).",
            "en": {
              "text": "Uzbek has six cases, attached as agglutinative suffixes to the unchanging noun root, without vowel harmony (unlike other Turkic languages)."
            }
          }
        ],
        "titleEn": "The Six-Case System — B1"
      },
      {
        "id": "plural-lar",
        "title": "Ko'plik: -lar — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється єдиним незмінним суфіксом -lar, доданим до будь-якого іменника незалежно від його голосних.",
            "en": {
              "text": "The plural is formed with a single invariant suffix -lar, added to any noun regardless of its vowels."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitob-lar, uy-lar",
                "books, houses"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -lar — A1"
      },
      {
        "id": "izafet-possessive-chain",
        "title": "Izofa: egalik zanjiri — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна конструкція (ізофа) позначається подвійно: означення отримує родовий відмінок -ning, а означуване — присвійний суфікс 3-ї особи -i/-si, — тюркська система, відмінна від перської ізафат.",
            "en": {
              "text": "The possessive construction (izofa) is marked doubly: the modifier takes genitive -ning, and the modified noun takes the 3rd-person possessive suffix -i/-si — a Turkic system, distinct from the Persian izafat construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitobning muqovasi",
                "the book's cover"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Izofa: the Possessive Chain — B1"
      },
      {
        "id": "possessive-suffixes",
        "title": "Egalik qo'shimchalari — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "table",
            "title": "Присвійні суфікси",
            "rows": [
              [
                "мій",
                "kitob-im"
              ],
              [
                "твій",
                "kitob-ing"
              ],
              [
                "його/її",
                "kitob-i"
              ],
              [
                "наш",
                "kitob-imiz"
              ],
              [
                "ваш",
                "kitob-ingiz"
              ],
              [
                "їхній",
                "kitob-i (+ ular)"
              ]
            ],
            "en": {
              "title": "Possessive Suffixes"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "postpositions",
        "title": "Ko'makchilar — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Просторові й інші відношення виражаються післяйменниками, які йдуть ПІСЛЯ керованого іменника, а не прийменниками перед ним.",
            "en": {
              "text": "Spatial and other relations are expressed with postpositions, which follow the governed noun rather than preceding it as prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "stol ustida",
                "on the table (table on-top)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — A2"
      },
      {
        "id": "numerals-classifiers",
        "title": "Sanoqlar va o'lchov so'zlari — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "1",
                "bir"
              ],
              [
                "2",
                "ikki"
              ],
              [
                "3",
                "uch"
              ],
              [
                "4",
                "to'rt"
              ],
              [
                "5",
                "besh"
              ],
              [
                "6",
                "olti"
              ],
              [
                "7",
                "yetti"
              ],
              [
                "8",
                "sakkiz"
              ],
              [
                "9",
                "to'qqiz"
              ],
              [
                "10",
                "o'n"
              ]
            ],
            "en": {
              "title": "Cardinal Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A2"
      },
      {
        "id": "comparative-roq",
        "title": "Qiyosiy daraja: -roq — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь прикметника утворюється суфіксом -roq, доданим до основи прикметника.",
            "en": {
              "text": "The comparative degree of an adjective is formed with the suffix -roq, added to the adjective stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "katta-roq",
                "bigger"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: -roq — A2"
      },
      {
        "id": "superlative-eng",
        "title": "Orttirma daraja: eng — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється часткою eng ('найбільш'), поставленою перед прикметником, а не суфіксом.",
            "en": {
              "text": "The superlative is formed with the particle eng ('most'), placed before the adjective, rather than a suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "eng katta",
                "the biggest"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: eng — A2"
      },
      {
        "id": "demonstratives",
        "title": "Ko'rsatish olmoshlari — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей (близько)",
                "bu"
              ],
              [
                "той (далі)",
                "shu / u"
              ],
              [
                "той (далеко)",
                "ana u"
              ]
            ],
            "en": {
              "title": "Demonstratives"
            }
          }
        ],
        "titleEn": "Demonstratives — A1"
      },
      {
        "id": "interrogatives",
        "title": "So'roq olmoshlari — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "kim?"
              ],
              [
                "що?",
                "nima?"
              ],
              [
                "де?",
                "qayerda?"
              ],
              [
                "коли?",
                "qachon?"
              ],
              [
                "чому?",
                "nega?"
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
        "id": "reflexive-oz",
        "title": "O'zlik olmoshi: o'z — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник o'z ('свій') уживається з присвійними суфіксами для всіх осіб, узгоджуючись із підметом незалежно від особи.",
            "en": {
              "text": "The reflexive pronoun o'z ('own') is used with possessive suffixes for all persons, agreeing with the subject regardless of person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "o'z kitobim",
                "my own book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: o'z — B1"
      },
      {
        "id": "question-particle-mi",
        "title": "So'roq yuklamasi: -mi — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання без питального слова утворюється часткою -mi, доданою до слова, яке запитується.",
            "en": {
              "text": "A general yes/no question without a question word is formed with the particle -mi, attached to the word being questioned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bu kitobmi?",
                "Це книга?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Particle: -mi — A2"
      },
      {
        "id": "indefinite-birror",
        "title": "Noaniqlik: bir, -dir — B1",
        "emoji": "🔘",
        "sections": [
          {
            "type": "intro",
            "text": "Неозначеність виражається числівником bir ('один') перед іменником або суфіксом -dir, доданим для позначення невпевненості.",
            "en": {
              "text": "Indefiniteness is expressed with the numeral bir ('one') before the noun, or with the suffix -dir added to express uncertainty."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bir kitob",
                "a book (some book)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite: bir, -dir — B1"
      },
      {
        "id": "converb-ib",
        "title": "Ravishdosh: -ib — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ib поєднує послідовні дії або утворює складені дієслова з допоміжними дієсловами.",
            "en": {
              "text": "The converb in -ib links sequential actions or forms compound verbs with auxiliary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kelib ketdi",
                "he came and left"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Converb: -ib — B1"
      },
      {
        "id": "participle-adigan",
        "title": "Sifatdosh: -adigan — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник на -adigan позначає звичну чи характерну дію й уживається атрибутивно перед іменником, як відносне речення.",
            "en": {
              "text": "The participle in -adigan marks a habitual or characteristic action and is used attributively before a noun, like a relative clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yozadigan odam",
                "the person who writes (habitually)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Participle: -adigan — B2"
      },
      {
        "id": "causative-verbs",
        "title": "Orttirma nisbat — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний (спонукальний) стан утворюється суфіксами -tir-/-dir-/-t-, доданими до основи дієслова, позначаючи, що підмет змушує когось виконати дію.",
            "en": {
              "text": "The causative voice is formed with the suffixes -tir-/-dir-/-t-, added to the verb stem, marking that the subject makes someone perform the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "yoz-dir-moq",
                "to make (someone) write"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Verbs — B2"
      },
      {
        "id": "passive-voice",
        "title": "Majhul nisbat: -il — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -il-/-n-, доданим до основи дієслова, зі зникненням прямого додатка.",
            "en": {
              "text": "The passive voice is formed with the suffix -il-/-n-, added to the verb stem, with the direct object dropping out."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kitob yozildi",
                "the book was written"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice: -il — B2"
      },
      {
        "id": "adjective-before-noun",
        "title": "Sifat otdan oldin — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і не узгоджується з ним ані за родом (роду немає), ані за числом, ані за відмінком — лишається незмінним.",
            "en": {
              "text": "The adjective always precedes the noun and doesn't agree with it in gender (there is none), number, or case — it stays invariant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "katta uy, katta uylar",
                "big house, big houses (adjective unchanged)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Before Noun — A1"
      },
      {
        "id": "compound-verbs-light",
        "title": "Qo'shma fe'llar — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато понять виражаються складеним дієсловом: іменник плюс легке дієслово qilmoq ('робити') чи bo'lmoq ('ставати'), а не одним корінним дієсловом.",
            "en": {
              "text": "Many concepts are expressed with a compound verb: a noun plus the light verb qilmoq ('to do') or bo'lmoq ('to become'), rather than a single root verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ishq qilmoq (кохати, дослівно 'робити любов')",
                "to love (literally 'to do love')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verbs with Light Verbs — B1"
      },
      {
        "id": "conjunctions",
        "title": "Bog'lovchilar — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і, та",
                "va"
              ],
              [
                "але",
                "lekin"
              ],
              [
                "або",
                "yoki"
              ],
              [
                "тому що",
                "chunki"
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
        "id": "relative-clause-participle",
        "title": "Nisbiy gap: sifatdosh orqali — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від індоєвропейських мов, узбецька не має окремого відносного займенника 'який' — натомість підрядне речення перетворюється на дієприкметниковий зворот перед іменником.",
            "en": {
              "text": "Unlike Indo-European languages, Uzbek has no separate relative pronoun 'which/that' — instead, the subordinate clause becomes a participial phrase before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "men yozgan kitob",
                "the book that I wrote (I-written book)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via Participles — B2"
      },
      {
        "id": "emphatic-particle-ku",
        "title": "Kuchaytiruvchi yuklama: -ku — B2",
        "emoji": "❕",
        "sections": [
          {
            "type": "intro",
            "text": "Підсилювальна частка -ku додається до слова для наголошення очевидності чи наполегливості твердження, близько до 'ж' в українській.",
            "en": {
              "text": "The emphatic particle -ku is added to a word to emphasize the obviousness or insistence of a statement, close to Ukrainian 'zh' (emphatic 'indeed')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Men aytdim-ku!",
                "Я ж казав!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: -ku — B2"
      },
      {
        "id": "polite-siz-address",
        "title": "Hurmatli murojaat: siz — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічлива форма звертання siz уживається з дієсловом у формі множини навіть до однієї особи — граматична множина як знак поваги.",
            "en": {
              "text": "The polite address form siz is used with the verb in plural form even for a single person — grammatical plural as a mark of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Siz yozasiz.",
                "Ви пишете. (до однієї особи ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polite Address: siz — A2"
      },
      {
        "id": "existential-bor-yoq",
        "title": "Mavjudlik: bor / yo'q — A1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чи відсутність виражається незмінними словами bor ('є') та yo'q ('немає'), а не дієсловом 'бути'.",
            "en": {
              "text": "Existence or absence is expressed with the invariant words bor ('there is') and yo'q ('there is not'), rather than the verb 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kitob bor. / Kitob yo'q.",
                "Книга є. / Книги немає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: bor / yo'q — A1"
      },
      {
        "id": "chagatai-literary-heritage",
        "title": "Chag'atoy adabiy merosi — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасна узбецька — спадкоємиця чагатайської, класичної тюркської літературної мови Середньої Азії 15-19 століть, якою писали Тимуридський двір і поети до появи сучасних національних тюркських мов.",
            "en": {
              "text": "Modern Uzbek is the heir of Chagatai, the classical Turkic literary language of Central Asia from the 15th-19th centuries, used by the Timurid court and poets before the emergence of modern national Turkic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chig'atoy tili",
                "the Chagatai language"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Chagatai Literary Heritage — B2"
      },
      {
        "id": "alisher-navoi",
        "title": "Alisher Navoiy — B2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Алішер Навої (1441-1501) — національний поет Узбекистану, який писав чагатайською, обстоюючи гідність тюркської мови поряд із перською в трактаті 'Суперечка двох мов' (Muhokamat al-Lughatayn).",
            "en": {
              "text": "Alisher Navoiy (1441-1501) is Uzbekistan's national poet, who wrote in Chagatai and argued for the dignity of the Turkic language alongside Persian in his treatise 'Judgment of Two Languages' (Muhokamat al-Lughatayn)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Alisher Navoiy nomidagi",
                "named after Alisher Navoiy (common institutional naming)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Alisher Navoiy — B2"
      },
      {
        "id": "samarkand-bukhara-silk-road",
        "title": "Samarqand va Buxoro — Ipak yo'li — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Самарканд і Бухара — древні міста Шовкового шляху з тимуридською архітектурою (мечеті, медресе, мавзолеї), центри перської й тюркської культур упродовж століть.",
            "en": {
              "text": "Samarkand and Bukhara are ancient Silk Road cities with Timurid architecture (mosques, madrasas, mausoleums), centers of Persian and Turkic culture for centuries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Registon maydoni",
                "Registan Square (Samarkand's central square)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Samarkand and Bukhara: Silk Road Heritage — B1"
      },
      {
        "id": "timurid-architecture",
        "title": "Amir Temur me'morchiligi — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Емір Тимур (Тамерлан) — засновник імперії Тимуридів у 14 столітті, чиє архітектурне спадщина (бірюзові куполи, мозаїчні мінарети) досі визначає образ узбецьких міст.",
            "en": {
              "text": "Amir Timur (Tamerlane) founded the Timurid empire in the 14th century, and his architectural legacy (turquoise domes, mosaic minarets) still defines the image of Uzbek cities."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Amir Temur haykali",
                "the statue of Amir Timur (a central landmark in Tashkent)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amir Timur's Architectural Legacy — B2"
      },
      {
        "id": "osh-plov-cuisine",
        "title": "Osh (palov) — A2",
        "emoji": "🍚",
        "sections": [
          {
            "type": "intro",
            "text": "Ош (плов) — національна страва з рису, моркви, м'яса й цибулі, приготована у величезному казані, — символ гостинності, обов'язковий на весіллях і святах.",
            "en": {
              "text": "Osh (plov/pilaf) is the national dish of rice, carrots, meat, and onions cooked in a huge cauldron — a symbol of hospitality, obligatory at weddings and celebrations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Toshkent oshi",
                "Tashkent-style plov"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Osh (Plov) — A2"
      },
      {
        "id": "atlas-adras-textile",
        "title": "Atlas va adras matolari — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Атлас і адрас — традиційні узбецькі шовкові тканини з характерним райдужним орнаментом ikat, вироблені технікою резервного фарбування в Маргилані та Бухарі.",
            "en": {
              "text": "Atlas and adras are traditional Uzbek silk fabrics with characteristic rainbow ikat patterns, produced with resist-dyeing technique in Margilan and Bukhara."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "atlas ko'ylak",
                "an atlas-silk dress"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Atlas and Adras Silk Textiles — B1"
      },
      {
        "id": "nowruz-holiday",
        "title": "Navro'z bayrami — A2",
        "emoji": "🌸",
        "sections": [
          {
            "type": "intro",
            "text": "Навруз (21 березня) — свято весняного рівнодення й нового року, успадковане з давньоперської традиції, зі стравою сумаляк і публічними святкуваннями по всій країні.",
            "en": {
              "text": "Navro'z (March 21) is the spring equinox and new year festival, inherited from ancient Persian tradition, with the dish sumalak and public celebrations across the country."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sumalak",
                "sumalak (a sweet wheat-sprout dish made for Navro'z)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Navro'z Holiday — A2"
      },
      {
        "id": "tashkent-fergana-dialects",
        "title": "Toshkent va Farg'ona shevalari — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Літературна узбецька базується на ташкентському й ферганському діалектах (обидва без гармонії голосних), тоді як хорезмський і деякі південні діалекти зберігають більше тюркських рис, включно з голосною гармонією.",
            "en": {
              "text": "Literary Uzbek is based on the Tashkent and Fergana dialects (both without vowel harmony), while the Khorezm and some southern dialects retain more Turkic features, including vowel harmony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Toshkent shevasi",
                "the Tashkent dialect"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tashkent and Fergana Dialects — B2"
      },
      {
        "id": "russian-loanword-layer",
        "title": "Rus tilidan o'zlashmalar — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Радянський період залишив у узбецькій шар русизмів для сучасних технічних і адміністративних понять, які часто вживаються поряд із власними чи персько-арабськими відповідниками.",
            "en": {
              "text": "The Soviet period left a layer of Russian loanwords in Uzbek for modern technical and administrative concepts, often used alongside native or Perso-Arabic equivalents."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mashina (машина), pochta (пошта)",
                "car, post office (Russian loanwords)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Russian Loanword Layer — B1"
      },
      {
        "id": "colors",
        "title": "Ranglar — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "qizil"
              ],
              [
                "синій",
                "ko'k"
              ],
              [
                "жовтий",
                "sariq"
              ],
              [
                "зелений",
                "yashil"
              ],
              [
                "чорний",
                "qora"
              ],
              [
                "білий",
                "oq"
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
        "title": "Hafta kunlari — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "dushanba"
              ],
              [
                "вівторок",
                "seshanba"
              ],
              [
                "середа",
                "chorshanba"
              ],
              [
                "четвер",
                "payshanba"
              ],
              [
                "п'ятниця",
                "juma"
              ],
              [
                "субота",
                "shanba"
              ],
              [
                "неділя",
                "yakshanba"
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
        "title": "Oila a'zolari — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Члени родини",
            "rows": [
              [
                "батько",
                "ota"
              ],
              [
                "мати",
                "ona"
              ],
              [
                "брат",
                "aka / uka"
              ],
              [
                "сестра",
                "opa / singil"
              ],
              [
                "дитина",
                "bola"
              ]
            ],
            "en": {
              "title": "Family Members"
            }
          }
        ],
        "titleEn": "Family Members — A1"
      },
      {
        "id": "greetings",
        "title": "Salomlashish — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Привіт",
                "Salom"
              ],
              [
                "Дякую",
                "Rahmat"
              ],
              [
                "Будь ласка",
                "Marhamat"
              ],
              [
                "До побачення",
                "Xayr"
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
        "title": "Ob-havo — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "quyosh"
              ],
              [
                "дощ",
                "yomg'ir"
              ],
              [
                "сніг",
                "qor"
              ],
              [
                "вітер",
                "shamol"
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
        "title": "Tana a'zolari — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "bosh"
              ],
              [
                "рука",
                "qo'l"
              ],
              [
                "нога",
                "oyoq"
              ],
              [
                "око",
                "ko'z"
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
        "title": "Oziq-ovqat — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "non"
              ],
              [
                "м'ясо",
                "go'sht"
              ],
              [
                "рис",
                "guruch"
              ],
              [
                "чай",
                "choy"
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
        "id": "animals-vocabulary",
        "title": "Hayvonlar — A2",
        "emoji": "🐎",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "собака",
                "it"
              ],
              [
                "кінь",
                "ot"
              ],
              [
                "вівця",
                "qo'y"
              ],
              [
                "верблюд",
                "tuya"
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
        "title": "Tomonlar — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "shimol"
              ],
              [
                "південь",
                "janub"
              ],
              [
                "схід",
                "sharq"
              ],
              [
                "захід",
                "g'arb"
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
        "id": "namangan-margilan-craft-towns",
        "title": "Namangan va Marg'ilon — B2",
        "emoji": "🏺",
        "sections": [
          {
            "type": "intro",
            "text": "Наманган і Маргилан у Ферганській долині — центри ремесел: ножового виробництва, шовкоткацтва й керамічного мистецтва, славнозвісні по всій Середній Азії.",
            "en": {
              "text": "Namangan and Margilan in the Fergana Valley are craft centers: knife-making, silk-weaving, and ceramic art, famous across Central Asia."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Marg'ilon ipak fabrikasi",
                "the Margilan silk factory"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Namangan and Margilan Craft Towns — B2"
      },
      {
        "id": "toshkent-metro",
        "title": "Toshkent metrosi — B1",
        "emoji": "🚇",
        "sections": [
          {
            "type": "intro",
            "text": "Ташкентське метро (відкрите 1977 року) — перше метро в Середній Азії, чиї станції прикрашені мозаїками й люстрами в радянсько-узбецькому стилі, поєднуючи модернізм із національними мотивами.",
            "en": {
              "text": "The Tashkent Metro (opened 1977) is the first metro in Central Asia, whose stations are decorated with mosaics and chandeliers in a Soviet-Uzbek style, blending modernism with national motifs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kosmonavtlar bekati",
                "the Cosmonauts station"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tashkent Metro — B1"
      },
      {
        "id": "mahalla-community",
        "title": "Mahalla tizimi — B2",
        "emoji": "🏘️",
        "sections": [
          {
            "type": "intro",
            "text": "Маhalla — традиційна сусідська громада в узбецьких містах і селах, що організовує весілля, похорони й місцеве самоврядування, — соціальна інституція, старша за сучасну державу.",
            "en": {
              "text": "The mahalla is a traditional neighborhood community in Uzbek towns and villages that organizes weddings, funerals, and local self-governance — a social institution older than the modern state."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mahalla qo'mitasi",
                "the mahalla committee"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Mahalla Community System — B2"
      },
      {
        "id": "cotton-industry-history",
        "title": "Paxta iqtisodiyoti — B2",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "'Біле золото' (paxta, бавовна) було основою радянської планової економіки Узбекистану, залишивши як екологічну спадщину (висихання Аральського моря), так і культурну лексику.",
            "en": {
              "text": "'White gold' (paxta, cotton) was the backbone of Uzbekistan's Soviet planned economy, leaving both an environmental legacy (the drying of the Aral Sea) and cultural vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "paxta terimi",
                "cotton harvest"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Cotton Economy's Legacy — B2"
      },
      {
        "id": "khiva-old-city",
        "title": "Xiva Ichon-qal'a — B1",
        "emoji": "🏰",
        "sections": [
          {
            "type": "intro",
            "text": "Внутрішнє місто Іхон-Кала в Хіві — музей просто неба зі збереженою середньовічною забудовою, колишня столиця Хівинського ханства.",
            "en": {
              "text": "The Ichon-Qal'a inner city of Khiva is an open-air museum with preserved medieval architecture, the former capital of the Khivan Khanate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ichon-qal'a devorlari",
                "the walls of Ichon-Qal'a"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Khiva's Ichon-Qal'a Old City — B1"
      },
      {
        "id": "independence-day",
        "title": "Mustaqillik kuni — A2",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "День незалежності (1 вересня) відзначає вихід Узбекистану зі складу СРСР 1991 року й є головним державним святом країни.",
            "en": {
              "text": "Independence Day (September 1) marks Uzbekistan's exit from the USSR in 1991 and is the country's main national holiday."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mustaqillik kuni bayrami",
                "the Independence Day celebration"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Independence Day — A2"
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
        "id": "irregular-verb-demoq",
        "title": "Noto'g'ri fe'l: demoq — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово demoq ('казати') має нерегулярну коротку основу de- в більшості форм, але подовжується до deydi (не *deadi) у теперішньо-майбутньому часі — історичний залишок старішої основи.",
            "en": {
              "text": "The verb demoq ('to say') has an irregular short stem de- in most forms, but lengthens to deydi (not *deadi) in the present-future tense — a historical remnant of an older stem."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна форма",
            "rows": [
              [
                "de- (казати) → deydi (не *deadi)",
                "say → says (irregular present-future stem)"
              ]
            ],
            "en": {
              "title": "Irregular Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: demoq ('to say') — B1"
      },
      {
        "id": "irregular-plural-kishilar",
        "title": "Odam so'zining ikki ko'plik shakli — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник odam ('людина') має два різні варіанти множини — odamlar (звичайна, 'люди') і kishilar (більш формальна, 'особи'), що не взаємозамінні в офіційних контекстах.",
            "en": {
              "text": "The noun odam ('person') has two different plural variants — odamlar (ordinary, 'people') and kishilar (more formal, 'persons'), which are not interchangeable in official contexts."
            }
          },
          {
            "type": "table",
            "title": "Подвійна множина",
            "rows": [
              [
                "odamlar (звичайне) vs. kishilar (офіційне)",
                "people (ordinary) vs. persons (formal/official)"
              ]
            ],
            "en": {
              "title": "Dual Plural"
            }
          }
        ],
        "titleEn": "Two Plural Forms for 'Person' — B2"
      },
      {
        "id": "irregular-comparative-yaxshi",
        "title": "Noto'g'ri qiyosiy daraja: yaxshi → a'lo — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник yaxshi ('добрий') у формальному стилі має супплетивний найвищий ступінь a'lo ('відмінний', з арабської), а не очікуваний регулярний *eng yaxshi у певних усталених виразах.",
            "en": {
              "text": "The adjective yaxshi ('good') has a suppletive superlative a'lo ('excellent', from Arabic) in formal style, rather than the expected regular *eng yaxshi in certain fixed expressions."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний найвищий ступінь",
            "rows": [
              [
                "yaxshi → a'lo baho (не *eng yaxshi baho)",
                "good → excellent grade (suppletive, Arabic loan, fixed expression)"
              ]
            ],
            "en": {
              "title": "Irregular Superlative"
            }
          }
        ],
        "titleEn": "Irregular Superlative: yaxshi → a'lo — B1"
      }
    ]
  }
];
