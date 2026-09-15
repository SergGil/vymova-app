// Vymova — data/grammar-data/grammar_sd.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SD: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">ذاتي ضمير</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі в Пакистані записують арабсько-перським письмом справа наліво, тоді як частина сіндхійської діаспори в Індії використовує деванагарі.",
            "en": {
              "text": "Sindhi is written in Perso-Arabic script (right to left) in Pakistan, while part of the Sindhi diaspora in India uses Devanagari."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">مان</span> (mān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">تون / توهان</span> (tūn / tohān)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">هو / هوءَ</span> (hū / hoo)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">اسين</span> (asīn)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">توهان</span> (tohān)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">هو</span> (hū)"
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
        "id": "implosive-consonants",
        "title": "<span dir=\"rtl\">اندروني آواز</span> — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі має чотири імплозивні приголосні (ɓ, ɗ, ʄ, ɠ) — унікальна риса серед великих індоарійських мов, що вимагає окремих літер у письмі: ٻ, ڄ, ڏ, ڳ.",
            "en": {
              "text": "Sindhi has four implosive consonants (ɓ, ɗ, ʄ, ɠ) — a feature unique among major Indo-Aryan languages, requiring dedicated letters in the script: ٻ, ڄ, ڏ, ڳ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ٻارُ</span> (ɓāru, 'дитина') з імплозивним ɓ",
                "child (with implosive ɓ)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Implosive Consonants — B1"
      },
      {
        "id": "dual-script-arabic-devanagari",
        "title": "<span dir=\"rtl\">ٻہ لکت</span> — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі має два офіційних письма: арабсько-перське (справа наліво) у Пакистані та деванагарі (зліва направо) серед сіндхійської діаспори Індії — жоден інший великий варіант письма спільний для обох.",
            "en": {
              "text": "Sindhi has two official scripts: Perso-Arabic (right-to-left) in Pakistan and Devanagari (left-to-right) among the Sindhi diaspora in India — no other major script variant is shared between the two."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سنڌي</span> / सिंधी",
                "Сіндхі (два написання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dual Script: Perso-Arabic and Devanagari — B1"
      },
      {
        "id": "gender-two-way",
        "title": "<span dir=\"rtl\">جنس: ٻہ قسمي</span> — A2",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, і дієслова, прикметники та післяйменники узгоджуються з цим родом.",
            "en": {
              "text": "Nouns are masculine or feminine, and verbs, adjectives, and postpositions agree with this gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڇوڪرو</span> (хлопчик, ч.р.) / <span dir=\"rtl\">ڇوڪري</span> (дівчинка, ж.р.)",
                "boy / girl"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Two-Way System — A2"
      },
      {
        "id": "postposition-case-system",
        "title": "<span dir=\"rtl\">پٺيان لڳندڙ لفظ</span> — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі, як і більшість сучасних індоарійських мов, вживає післяйменники (не прийменники), приєднані до іменника в непрямому відмінку, а не окремі слова перед ним.",
            "en": {
              "text": "Sindhi, like most modern Indo-Aryan languages, uses postpositions (not prepositions), attached to the noun in the oblique case rather than as a separate word before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">گهر ۾</span> (ghar mein)",
                "у домі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposition Case System — B1"
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
        "title": "<span dir=\"rtl\">حال زمانو</span> — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється дієприкметником теперішнього часу плюс допоміжне آهي ('бути'), узгодженим з підметом за родом і особою.",
            "en": {
              "text": "The present tense is formed with the present participle plus the auxiliary 'to be', agreeing with the subject in gender and person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان لکندو آهيان.</span>",
                "Я пишу."
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
        "id": "present-continuous",
        "title": "<span dir=\"rtl\">هلندڙ حال</span> — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається тим самим дієприкметником, що й звичайний теперішній час, — розрізнення тривалості й звичності залежить від контексту, а не від окремої форми.",
            "en": {
              "text": "An ongoing present action is expressed with the same participle as the regular present tense — distinguishing continuous from habitual depends on context rather than a separate form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان هاڻي لکان پيو.</span>",
                "Я саме зараз пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous — A2"
      },
      {
        "id": "past-tense-ergative",
        "title": "<span dir=\"rtl\">ماضي: طاقتور حالت</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет переходить у скісний відмінок із післяйменником دle ('через/агентом'), а дієслово узгоджується з прямим додатком, а не з підметом, — розщеплена ергативність, спільна риса з іншими новоіндійськими мовами.",
            "en": {
              "text": "In the transitive past tense, the subject shifts to the oblique case with the postposition 'by/agent', and the verb agrees with the direct object rather than the subject — split ergativity, a feature shared with other New Indo-Aryan languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مون هي ڪتاب پڙهيو.</span>",
                "Я прочитав цю книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: Ergative Construction — B1"
      },
      {
        "id": "past-continuous",
        "title": "<span dir=\"rtl\">هلندڙ ماضي</span> — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприкметником теперішнього часу плюс допоміжне آهي у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the present participle plus the past-tense auxiliary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان لکندو هوس.</span>",
                "Я писав (тривало)."
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
        "id": "future-tense",
        "title": "<span dir=\"rtl\">مستقبل</span> — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється власним суфіксом -ندو/-نديس, доданим до основи дієслова й узгодженим з підметом за родом і особою.",
            "en": {
              "text": "The future tense is formed with its own suffix added to the verb stem, agreeing with the subject in gender and person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان لکندس.</span>",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense — A2"
      },
      {
        "id": "imperative-mood",
        "title": "<span dir=\"rtl\">امر</span> — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без закінчення; ввічлива й множинна форма додає окреме закінчення для звертання до кількох осіб чи з повагою.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no ending; the polite/plural form adds a dedicated ending for addressing several people or showing respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لک!</span>",
                "Пиши!"
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
        "id": "present-perfect",
        "title": "<span dir=\"rtl\">حال تمام</span> — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне آهي у теперішньому часі, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the present-tense auxiliary, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مون لکيو آهي.</span>",
                "Я вже написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect — B1"
      },
      {
        "id": "pluperfect",
        "title": "<span dir=\"rtl\">ماضي تمام</span> — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприкметником минулого часу плюс допоміжне آهي у минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the past participle plus the past-tense auxiliary, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مون لکيو هو.</span>",
                "Я вже був написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B2"
      },
      {
        "id": "habitual-past",
        "title": "<span dir=\"rtl\">عادتي ماضي</span> — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія в минулому виражається дієприкметником теперішнього часу плюс допоміжне آهي у минулому часі — та сама форма, що й тривалий минулий час.",
            "en": {
              "text": "A habitual past action is expressed with the present participle plus the past auxiliary — the same form used for the past continuous."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان روز لکندو هوس.</span>",
                "Я, бувало, писав щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past — B1"
      },
      {
        "id": "subjunctive-mood",
        "title": "<span dir=\"rtl\">التزامي حالت</span> — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб вживається після дієслів бажання чи необхідності й утворюється власним набором закінчень, відмінним від дійсного способу.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing or necessity and is formed with its own set of endings distinct from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هو چاهي ٿو ته مان وڃان.</span>",
                "Він хоче, щоб я пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood — B1"
      },
      {
        "id": "conditional-mood",
        "title": "<span dir=\"rtl\">جي: شرطي</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником جي ('якщо'); головне речення часто продовжується часткою تr ('то').",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction جي ('if'); the main clause often continues with the particle 'then'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">جي مينهن وسندو، مان گهر ۾ رهندس.</span>",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: جي — B1"
      },
      {
        "id": "potential-mood-saghan",
        "title": "<span dir=\"rtl\">سگهڻ: وسعت</span> — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним سگهڻ ('могти'), доданим після основного дієслова.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary سگهڻ ('to be able'), added after the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان سنڌيڳالهائي سگهان ٿو.</span>",
                "Я можу говорити сіндхі."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: سگهڻ — B1"
      },
      {
        "id": "desiderative-chahan",
        "title": "<span dir=\"rtl\">گهرڻ: خواهش</span> — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом چاهڻ ('хотіти'), поставленим перед підрядним реченням з часткою ته ('щоб').",
            "en": {
              "text": "A wish is expressed with the verb چاهڻ ('to want'), placed before a subordinate clause introduced with ته ('that')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان کائڻ چاهيان ٿو.</span>",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: چاهڻ — A2"
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
        "title": "<span dir=\"rtl\">جملي جو جوڙجڪ: SOV</span> — A2",
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
                "<span dir=\"rtl\">مان ڪتاب پڙهان ٿو.</span>",
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
        "id": "noun-direct-oblique",
        "title": "<span dir=\"rtl\">سڌو ۽ اڻسڌو حالت</span> — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають прямий (номінативний) і непрямий (скісний) відмінок, причому непрямий вживається перед будь-яким післяйменником.",
            "en": {
              "text": "Nouns have a direct (nominative) and an oblique case, with the oblique used before any postposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڇوڪرو</span> (прямий) / <span dir=\"rtl\">ڇوڪري</span> (непрямий)",
                "хлопчик (прямий/непрямий)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Direct and Oblique Case — B1"
      },
      {
        "id": "plural-formation-classes",
        "title": "<span dir=\"rtl\">جمع: طريقا</span> — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється кількома різними класами закінчень залежно від роду й кінцевого звука основи, без єдиного універсального суфікса.",
            "en": {
              "text": "Plurals are formed with several distinct ending classes depending on gender and the stem's final sound, with no single universal suffix."
            }
          },
          {
            "type": "table",
            "title": "Класи множини",
            "rows": [
              [
                "<span dir=\"rtl\">ڇوڪرو → ڇوڪرا</span>",
                "хлопчик → хлопчики"
              ],
              [
                "<span dir=\"rtl\">ڇوڪري → ڇوڪريون</span>",
                "дівчинка → дівчинки"
              ]
            ],
            "en": {
              "title": "Plural Classes"
            }
          }
        ],
        "titleEn": "Plural: Multiple Classes — B1"
      },
      {
        "id": "adjective-agreement",
        "title": "<span dir=\"rtl\">صفت: هم آهنگي</span> — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді, числі й відмінку через власну систему закінчень.",
            "en": {
              "text": "Adjectives agree with the noun in gender, number, and case through their own system of endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سٺو ڇوڪرو / سٺي ڇوڪري</span>",
                "хороший хлопчик / хороша дівчинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A2"
      },
      {
        "id": "possessive-jo",
        "title": "<span dir=\"rtl\">جو: تعلق</span> — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок передається післяйменником جو/جي/جا (узгодженим за родом посідомого), поставленим після власника.",
            "en": {
              "text": "Possession is expressed with the postposition جو/جي/جا (agreeing in gender with the possessed noun), placed after the possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">پيءُ جو ڪتاب</span>",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: جو — A2"
      },
      {
        "id": "demonstratives",
        "title": "<span dir=\"rtl\">اشارو ڪندڙ ضمير</span> — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "<span dir=\"rtl\">هي</span> (hī)"
              ],
              [
                "той",
                "<span dir=\"rtl\">هو</span> (hū)"
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
        "title": "<span dir=\"rtl\">پڇا ڳاڇا</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "<span dir=\"rtl\">ڪير</span> (kēru)"
              ],
              [
                "що",
                "<span dir=\"rtl\">ڇا</span> (chhā)"
              ],
              [
                "де",
                "<span dir=\"rtl\">ڪٿي</span> (kithē)"
              ],
              [
                "коли",
                "<span dir=\"rtl\">ڪڏهن</span> (kaḍahiṅ)"
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
        "id": "reflexive-pronoun-pote",
        "title": "<span dir=\"rtl\">پاڻ: بازانگاڻ</span> — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник پاڻ ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються.",
            "en": {
              "text": "The reflexive pronoun پاڻ ('self') is used for all persons and numbers whenever the subject and object of the action coincide."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان پاڻ کي ڏسان ٿو.</span>",
                "Я бачу себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: پاڻ — B1"
      },
      {
        "id": "compound-verbs",
        "title": "<span dir=\"rtl\">مرکب فعل</span> — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато нових і запозичених дієслівних понять утворюється складеним дієсловом: іменник плюс допоміжне ڪرڻ ('робити') чи ٿيڻ ('ставати').",
            "en": {
              "text": "Many new and borrowed verbal concepts are formed as compound verbs: a noun plus the auxiliary ڪرڻ ('to do') or ٿيڻ ('to become')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڪم ڪرڻ</span>",
                "працювати (букв. 'роботу робити')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verbs — B1"
      },
      {
        "id": "comparative-degree",
        "title": "<span dir=\"rtl\">ڀيٽ: کان وڌيڪ</span> — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прикметником із об'єктом порівняння, введеним післяйменником کان ('ніж').",
            "en": {
              "text": "The comparative degree is formed with the adjective and the compared object introduced by the postposition کان ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هي ان کان وڏو آهي.</span>",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: کان — A2"
      },
      {
        "id": "superlative-degree",
        "title": "<span dir=\"rtl\">هرکنان وڌيڪ: سڀ کان</span> — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою سڀ کان ('за все') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle سڀ کان ('of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سڀ کان وڏو</span>",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: سڀ کان — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "<span dir=\"rtl\">انگ: 1-10</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "<span dir=\"rtl\">هڪ</span> (hiku)"
              ],
              [
                "2",
                "<span dir=\"rtl\">ٻه</span> (ɓē)"
              ],
              [
                "3",
                "<span dir=\"rtl\">ٽي</span> (ṭē)"
              ],
              [
                "5",
                "<span dir=\"rtl\">پنج</span> (panj)"
              ],
              [
                "10",
                "<span dir=\"rtl\">ڏهه</span> (ɗahu)"
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
        "id": "relative-clause-jo",
        "title": "<span dir=\"rtl\">جو: لاڳاپيل جملو</span> — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться відносним займенником جو ('що/який'), що узгоджується за родом і числом означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the relative pronoun جو ('who/which'), which agrees in gender and number with the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڇوڪرو جو آيو</span>",
                "хлопчик, що прийшов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: جو — B1"
      },
      {
        "id": "conjunctions",
        "title": "<span dir=\"rtl\">ڳنڍيندڙ اکر</span> — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "<span dir=\"rtl\">۽</span> (ain)"
              ],
              [
                "або",
                "<span dir=\"rtl\">يا</span> (yā)"
              ],
              [
                "але",
                "<span dir=\"rtl\">پر</span> (par)"
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
        "id": "adjective-before-noun",
        "title": "<span dir=\"rtl\">صفت جي جاءِ</span> — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає.",
            "en": {
              "text": "The adjective always precedes the noun it modifies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">وڏو گهر</span>",
                "великий дім"
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
        "id": "indefinite-marker-hiku",
        "title": "<span dir=\"rtl\">هڪ: غير معين</span> — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхі не має окремого артикля; неозначеність передається числівником هڪ ('один'), поставленим перед іменником, коли контекст цього потребує.",
            "en": {
              "text": "Sindhi has no dedicated article; indefiniteness is conveyed with the numeral هڪ ('one') placed before the noun when context requires it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هڪ ڇوڪرو</span>",
                "якийсь хлопчик"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite: هڪ — A2"
      },
      {
        "id": "postpositions-simple",
        "title": "<span dir=\"rtl\">پٺيان لفظ</span> — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Післяйменники",
            "rows": [
              [
                "до",
                "<span dir=\"rtl\">ڏانهن</span> (ḍāhi̅n)"
              ],
              [
                "з (разом)",
                "<span dir=\"rtl\">سان</span> (sāṅ)"
              ],
              [
                "з (від)",
                "<span dir=\"rtl\">کان</span> (kāṅ)"
              ]
            ],
            "en": {
              "title": "Postpositions"
            }
          }
        ],
        "titleEn": "Simple Postpositions — A2"
      },
      {
        "id": "infinitive-form",
        "title": "<span dir=\"rtl\">مصدر: -ڻ</span> — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -ڻ, доданий до основи, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -ڻ added to the stem, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکڻ</span>",
                "писати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -ڻ — A2"
      },
      {
        "id": "participles",
        "title": "<span dir=\"rtl\">فعل صفت</span> — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється суфіксом -يو і вживається водночас у перфектних формах дієслова та як окремий прикметник.",
            "en": {
              "text": "The past participle is formed with the suffix -يو and is used both in the verb's perfect forms and as a standalone adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکيو</span>",
                "написаний"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Participles — B1"
      },
      {
        "id": "causative-verbs",
        "title": "<span dir=\"rtl\">سببي فعل</span> — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативні дієслова утворюються суфіксом -ارڻ чи -رائڻ, доданим до основи, передаючи значення 'змусити зробити'.",
            "en": {
              "text": "Causative verbs are formed with the suffix -ارڻ or -رائڻ added to the stem, conveying the meaning 'make/have someone do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لکڻ → لکرائڻ</span>",
                "писати → змусити написати"
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
        "id": "formal-tohan",
        "title": "<span dir=\"rtl\">توهان: عزت</span> — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Форма множини توهان ('ви') уживається і як звертання до кількох осіб, і як ввічлива форма звертання до однієї людини.",
            "en": {
              "text": "The plural form توهان ('you-plural') is used both to address several people and as a polite form addressing a single person."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">توهان ڪيئن آهيو؟</span>",
                "Як ви поживаєте? (ввічливо, до однієї особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal توهان — A2"
      },
      {
        "id": "emphatic-particle-bhi",
        "title": "<span dir=\"rtl\">به: زور ڏيڻ</span> — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка به ('теж') додає значення включення до речення, розміщуючись безпосередньо після виділюваного слова.",
            "en": {
              "text": "The particle به ('also/too') adds a sense of inclusion to a sentence, placed directly after the word being highlighted."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان به ٿو وڃان.</span>",
                "Я теж іду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particle: به — B1"
      },
      {
        "id": "negation-na",
        "title": "<span dir=\"rtl\">نه: انڪار</span> — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою نه, поставленою перед дієсловом.",
            "en": {
              "text": "Negation is formed with the particle نه placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مان نه ٿو سمجهان.</span>",
                "Я не розумію."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: نه — A1"
      },
      {
        "id": "vocative-case",
        "title": "<span dir=\"rtl\">سڏ جو حالت</span> — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні деякі іменники набувають окремої кличної форми з подовженим кінцевим голосним.",
            "en": {
              "text": "In direct address, some nouns take a distinct vocative form with a lengthened final vowel."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڇوڪرا!</span>",
                "хлопче!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Case — B1"
      },
      {
        "id": "question-particle-kya",
        "title": "<span dir=\"rtl\">ڪيا: پڇا</span> — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова можна утворити часткою ڪيا на початку речення, хоча інтонація сама по собі теж може передавати питальність.",
            "en": {
              "text": "A yes/no question can be formed with the particle ڪيا at the start of the sentence, though intonation alone can also convey a question."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڪيا تون سنڌي ڳالهائين ٿو؟</span>",
                "Ти говориш сіндхі?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Particle: ڪيا — A2"
      },
      {
        "id": "extra-implosive-letters",
        "title": "<span dir=\"rtl\">اضافي اکر</span> — A2",
        "emoji": "🔠",
        "sections": [
          {
            "type": "intro",
            "text": "Сіндхійська абетка додає до арабсько-перського письма чотири літери для імплозивних приголосних (ٻ, ڄ, ڏ, ڳ) — жодна інша мова цього регіону не має такого набору.",
            "en": {
              "text": "The Sindhi alphabet adds four letters for implosive consonants to the Perso-Arabic script (ٻ, ڄ, ڏ, ڳ) — no other language of the region has this particular set."
            }
          },
          {
            "type": "table",
            "title": "Додаткові літери",
            "rows": [
              [
                "ٻ",
                "ɓ (імплозивне b)"
              ],
              [
                "ڄ",
                "ʄ (імплозивне j)"
              ],
              [
                "ڏ",
                "ɗ (імплозивне d)"
              ],
              [
                "ڳ",
                "ɠ (імплозивне g)"
              ]
            ],
            "en": {
              "title": "Extra letters"
            }
          }
        ],
        "titleEn": "Extra Implosive Letters — A2"
      },
      {
        "id": "sindhi-numerals",
        "title": "<span dir=\"rtl\">سنڌي عدد</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Цифри",
            "rows": [
              [
                "۱",
                "1"
              ],
              [
                "۲",
                "2"
              ],
              [
                "۵",
                "5"
              ],
              [
                "۱۰",
                "10"
              ]
            ],
            "en": {
              "title": "Digits"
            }
          }
        ],
        "titleEn": "Sindhi Numerals — A1"
      },
      {
        "id": "colors",
        "title": "<span dir=\"rtl\">رنگ</span> — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "<span dir=\"rtl\">ڳاڙهو</span> (ɠāṛhō)"
              ],
              [
                "чорний",
                "<span dir=\"rtl\">ڪارو</span> (kāro)"
              ],
              [
                "білий",
                "<span dir=\"rtl\">اڇو</span> (achō)"
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
        "id": "family-terms",
        "title": "<span dir=\"rtl\">خاندان</span> — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "<span dir=\"rtl\">پيءُ</span> (piu)"
              ],
              [
                "мати",
                "<span dir=\"rtl\">ماءُ</span> (māu)"
              ],
              [
                "брат",
                "<span dir=\"rtl\">ڀاءُ</span> (ɓhāu)"
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
        "id": "sufi-poetry-shah-latif",
        "title": "<span dir=\"rtl\">شاهه لطيف: شاعري</span> — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Шах Абдул Латіф Бгітаї (XVIII ст.) — центральна постать сіндхійської культури, чия суфійська поетична збірка 'Шах джо Рисало' лишається живою основою мовної та духовної ідентичності сіндхів.",
            "en": {
              "text": "Shah Abdul Latif Bhittai (18th c.) is a central figure of Sindhi culture, whose Sufi poetry collection 'Shah Jo Risalo' remains a living foundation of Sindhi linguistic and spiritual identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">شاهه جو رسالو</span>",
                "Shah Jo Risalo (збірка поезії)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sufi Poetry: Shah Abdul Latif — B2"
      },
      {
        "id": "ajrak-textile-culture",
        "title": "<span dir=\"rtl\">اجرڪ: ثقافت</span> — B1",
        "emoji": "🧣",
        "sections": [
          {
            "type": "intro",
            "text": "Аджрак — традиційна набивна тканина з геометричним орнаментом, символ сіндхійської ідентичності, що дарують як знак гостинності й поваги.",
            "en": {
              "text": "Ajrak is a traditional block-printed textile with geometric patterns, a symbol of Sindhi identity, given as a gesture of hospitality and respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اجرڪ ڏيڻ</span>",
                "подарувати аджрак"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ajrak Textile Culture — B1"
      },
      {
        "id": "indus-river-civilization",
        "title": "<span dir=\"rtl\">سنڌو درياءُ</span> — B2",
        "emoji": "🌊",
        "sections": [
          {
            "type": "intro",
            "text": "Сама назва 'Сіндхі' походить від річки Інд (سنڌو), уздовж якої розвинулась цивілізація долини Інду — одна з найдавніших писемних цивілізацій світу.",
            "en": {
              "text": "The name 'Sindhi' itself derives from the Indus River (سنڌو), along which the Indus Valley Civilization developed — one of the world's oldest literate civilizations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">موهن جو دڙو</span>",
                "Мохенджо-Даро (археологічна пам'ятка)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Indus River and Civilization — B2"
      },
      {
        "id": "time-expressions",
        "title": "<span dir=\"rtl\">وقت جا لفظ</span> — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Час",
            "rows": [
              [
                "сьогодні",
                "<span dir=\"rtl\">اڄ</span> (aj)"
              ],
              [
                "завтра",
                "<span dir=\"rtl\">سڀاڻي</span> (sɓāṇī)"
              ],
              [
                "вчора",
                "<span dir=\"rtl\">ڪالهه</span> (kālhu)"
              ]
            ],
            "en": {
              "title": "Time"
            }
          }
        ],
        "titleEn": "Time Expressions — A2"
      },
      {
        "id": "weather-vocabulary",
        "title": "<span dir=\"rtl\">موسم</span> — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "<span dir=\"rtl\">سج</span> (sīju)"
              ],
              [
                "дощ",
                "<span dir=\"rtl\">مينهن</span> (mīnhu)"
              ],
              [
                "вітер",
                "<span dir=\"rtl\">هوا</span> (havā)"
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
        "id": "food-vocabulary",
        "title": "<span dir=\"rtl\">کاڌو</span> — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "<span dir=\"rtl\">ماني</span> (mānī)"
              ],
              [
                "вода",
                "<span dir=\"rtl\">پاڻي</span> (pāṇī)"
              ],
              [
                "рис",
                "<span dir=\"rtl\">چانور</span> (chānor)"
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
        "id": "greetings",
        "title": "<span dir=\"rtl\">سلام</span> — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "<span dir=\"rtl\">السلام عليڪم</span>"
              ],
              [
                "Дякую",
                "<span dir=\"rtl\">مهرباني</span> (meharbānī)"
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
        "id": "body-parts",
        "title": "<span dir=\"rtl\">بدن جا حصا</span> — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "<span dir=\"rtl\">مٿو</span> (mathō)"
              ],
              [
                "рука",
                "<span dir=\"rtl\">هٿ</span> (hathu)"
              ],
              [
                "око",
                "<span dir=\"rtl\">اک</span> (aku)"
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
        "id": "sufi-shrine-culture",
        "title": "<span dir=\"rtl\">درگاهه: زيارت</span> — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "Суфійські святині (درگاهه) відіграють центральну роль у сіндхійському релігійному житті, поєднуючи музику, поезію та спільну молитву незалежно від конфесійних меж.",
            "en": {
              "text": "Sufi shrines (dargah) play a central role in Sindhi religious life, blending music, poetry, and communal prayer across confessional lines."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">درگاهه تي وڃڻ</span>",
                "піти до святині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sufi Shrine Culture — B1"
      },
      {
        "id": "sindhi-diaspora-partition",
        "title": "<span dir=\"rtl\">هندستان ۾ سنڌي</span> — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Розподіл Британської Індії 1947 року змусив мільйони сіндхійських індусів переселитися до Індії, де вони й досі зберігають мову, вживаючи деванагарі замість арабсько-перського письма.",
            "en": {
              "text": "The 1947 Partition of British India forced millions of Sindhi Hindus to resettle in India, where they still preserve the language, using Devanagari instead of the Perso-Arabic script."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "सिंधी (देवनागरी में)",
                "Sindhi (in Devanagari)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Partition and the Sindhi Diaspora — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "<span dir=\"rtl\">لباس</span> — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "шапка (типова сіндхійська)",
                "<span dir=\"rtl\">سنڌي ٽوپي</span>"
              ],
              [
                "шаль",
                "<span dir=\"rtl\">اجرڪ</span>"
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
        "id": "loanword-strata",
        "title": "<span dir=\"rtl\">پرڏيهي لفظ</span> — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика сіндхі поєднує питомі індоарійські корені зі значним шаром перських і арабських запозичень через іслам та багатовікове персько-мусульманське правління.",
            "en": {
              "text": "Sindhi vocabulary blends native Indo-Aryan roots with a substantial layer of Persian and Arabic loanwords through Islam and centuries of Perso-Muslim rule."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ڪتاب</span> (з арабської 'книга')",
                "книга (арабське запозичення)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loanword Strata — B2"
      },
      {
        "id": "postposition-saan",
        "title": "<span dir=\"rtl\">سان: گڏوگڏ</span> — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Післяйменник سان ('з/разом') позначає супровід чи інструмент і ставиться після іменника в непрямому відмінку.",
            "en": {
              "text": "The postposition سان ('with/together') marks accompaniment or instrument and follows the noun in the oblique case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">دوست سان</span>",
                "з другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposition: سان ('with') — A2"
      },
      {
        "id": "adverbs-manner",
        "title": "<span dir=\"rtl\">طريقي جا لفظ</span> — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються повторенням прикметника або незмінним закінченням і стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Manner adverbs are often formed by reduplicating the adjective or with an invariable ending, and are placed directly before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هوري هوري وڃي ٿو.</span>",
                "Він іде повільно (букв. 'повільно-повільно')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Manner Adverbs — B1"
      },
      {
        "id": "days-of-week",
        "title": "<span dir=\"rtl\">هفتي جا ڏينهن</span> — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "<span dir=\"rtl\">سومر</span> (somaru)"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">جمعو</span> (jumo)"
              ],
              [
                "неділя",
                "<span dir=\"rtl\">آچر</span> (āchar)"
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
        "id": "sindhi-honorific-titles",
        "title": "<span dir=\"rtl\">لقب: سائين</span> — B1",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "intro",
            "text": "Шаноблива термінологія включає سائين (sāī̃, 'пане/володарю') і сардар — обидва вживаються перед або після імені для вираження поваги до старших чи високопоставлених осіб.",
            "en": {
              "text": "Honorific vocabulary includes سائين (sāī̃, 'sir/master') and sardar — both used before or after a name to show respect to elders or people of high status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سائين احمد</span>",
                "пан Ахмед"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Titles — B1"
      },
      {
        "id": "cardinal-directions",
        "title": "<span dir=\"rtl\">طرفون</span> — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "<span dir=\"rtl\">اتر</span> (utru)"
              ],
              [
                "південь",
                "<span dir=\"rtl\">ڏکڻ</span> (ḍakhaṇu)"
              ],
              [
                "схід",
                "<span dir=\"rtl\">اوڀر</span> (obharu)"
              ],
              [
                "захід",
                "<span dir=\"rtl\">اولهه</span> (olhu)"
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
        "id": "diminutives",
        "title": "<span dir=\"rtl\">ننڍائيندڙ لفظ</span> — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальна форма утворюється суфіксом -ڙو/-ڙي, що додає значення малості чи пестливості до іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -ڙو/-ڙي, adding a sense of smallness or affection to a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ٻارُ → ٻارڙو</span>",
                "дитина → дитинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutives: -ڙو — B1"
      },
      {
        "id": "numbers-tens",
        "title": "<span dir=\"rtl\">ڏهاڪا</span> — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "<span dir=\"rtl\">ويهه</span> (vīhu)"
              ],
              [
                "30",
                "<span dir=\"rtl\">ٽيهه</span> (ṭīhu)"
              ],
              [
                "100",
                "<span dir=\"rtl\">سؤ</span> (sau)"
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
        "id": "coordinating-conjunctions-extra",
        "title": "<span dir=\"rtl\">وڌيڪ ڳنڍيندڙ اکر</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка نه ته ('інакше') і сполучник تنهنڪري ('тому') додають протиставні й причинові зв'язки поза базовим набором ۽/يا/پر.",
            "en": {
              "text": "The particle نه ته ('otherwise') and the conjunction تنهنڪري ('therefore') add contrastive and causal links beyond the basic ۽/يا/پر set."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">جلدي اچ، نه ته مان ويندس.</span>",
                "Приходь швидко, інакше я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions: نه ته — B1"
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
        "id": "irregular-verb-thiyan",
        "title": "<span dir=\"rtl\">بي قاعده فعل: ٿيڻ</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово ٿيڻ ('ставати/бути') утворює минулий час від зовсім іншого кореня (ٿيو), а не за регулярною моделлю додавання закінчень до основи теперішнього часу.",
            "en": {
              "text": "The verb ٿيڻ ('to become/be') forms its past tense from an entirely different root (ٿيو), not by the regular pattern of adding endings to the present stem."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "<span dir=\"rtl\">ٿئي ٿو</span> (стає) → <span dir=\"rtl\">ٿيو</span> (став)",
                "becomes → became (suppletive)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: ٿيڻ ('to become') — B1"
      },
      {
        "id": "irregular-plural-zan",
        "title": "<span dir=\"rtl\">بي قاعده جمع</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних іменників, зокрема زن ('жінка'), мають множину, що не вписується в жоден зі стандартних класів, а утворюється зміною голосного всередині слова.",
            "en": {
              "text": "A handful of very frequent nouns, including زن ('woman'), have a plural that fits none of the standard classes, formed instead by an internal vowel change."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "<span dir=\"rtl\">زن → زالون</span>",
                "woman → women (irregular stem)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural — B2"
      },
      {
        "id": "irregular-comparative-changho",
        "title": "<span dir=\"rtl\">بي قاعده ڀيٽ</span> — B2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник چڱو ('добрий') має супплетивний порівняльний ступінь بهتر ('кращий', запозичений з перської) замість очікуваного регулярного утворення.",
            "en": {
              "text": "The adjective چڱو ('good') has a suppletive comparative بهتر ('better', borrowed from Persian) instead of the expected regular formation."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "<span dir=\"rtl\">چڱو → بهتر</span>",
                "good → better (suppletive, Persian loan)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative Forms — B2"
      }
    ]
  }
];
