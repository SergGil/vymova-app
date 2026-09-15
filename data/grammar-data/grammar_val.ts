// Vymova — data/grammar-data/grammar_val.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_VAL: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Personal Pronoun — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У високій валірійській, мові, розробленій лінгвістом Девідом Дж. Петерсоном для \"Гри престолів\", іменники та займенники відмінюються за чотирма родами — сонячним, місячним, земним і водним — а не за чоловічим/жіночим.",
            "en": {
              "text": "In High Valyrian, developed by linguist David J. Peterson for Game of Thrones, nouns and pronouns decline by four genders — solar, lunar, terrestrial, and aquatic — rather than masculine/feminine."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники (однина)",
            "rows": [
              [
                "я",
                "nyke"
              ],
              [
                "ти",
                "kesy"
              ],
              [
                "він / вона / воно",
                "ziry"
              ]
            ],
            "en": {
              "title": "Personal Pronouns (singular)"
            }
          },
          {
            "type": "note",
            "text": "Множину займенників у валірійській творять відмінковими закінченнями залежно від роду іменника, а не окремим словом, як в англійській чи українській.",
            "en": {
              "text": "Valyrian forms the plural of pronouns through case endings that depend on noun gender, rather than a separate word as in English or Ukrainian."
            }
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "four-noun-genders",
        "title": "Four Noun Genders — B1",
        "emoji": "🌞",
        "sections": [
          {
            "type": "intro",
            "text": "Замість чоловічого/жіночого роду високовалірійська поділяє іменники на чотири класи — сонячний, місячний, земний і водний — визначені радше за семантичною концепцією (важливість, стихія), ніж за біологічною статтю; це відрізняє її і від Квенья/Сіндарин (натуралістичні системи роду), і від клінгонської (взагалі без роду).",
            "en": {
              "text": "Instead of masculine/feminine, High Valyrian divides nouns into four classes — solar, lunar, terrestrial, and aquatic — determined by semantic concept (importance, elemental association) rather than biological sex; this sets it apart from both Quenya/Sindarin (naturalistic gender systems) and Klingon (no gender at all)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vala (чоловік, сонячний рід), byka (жінка, місячний рід)",
                "vala (man, solar gender), byka (woman, lunar gender)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Four Noun Genders — B1"
      },
      {
        "id": "eight-case-system",
        "title": "Eight-Case Declension — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники відмінюються за вісьмома відмінками (номінатив, акузатив, генітив, датив, локатив, інструменталіс, комітатив, вокатив) у поєднанні з чотирма родами — система, за складністю подібна до латини чи санскриту, значно багатша за прийменникову структуру Квенья чи Сіндарин.",
            "en": {
              "text": "Nouns decline across eight cases (nominative, accusative, genitive, dative, locative, instrumental, comitative, vocative) combined with the four genders — a system comparable in complexity to Latin or Sanskrit, far richer than Quenya's or Sindarin's more prepositional structure."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vala (ном.), valun (акуз.), valo (ген.)",
                "vala (nom.), valun (acc.), valo (gen.) — the man / the man (obj.) / the man's"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Eight-Case Declension System — B1"
      },
      {
        "id": "free-word-order",
        "title": "Free Word Order — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки відмінкові закінчення однозначно позначають синтаксичну роль слова, порядок слів у високовалірійській вільний — на відміну від суворого порядку OVS у клінгонській, де саме порядок несе граматичне значення.",
            "en": {
              "text": "Since case endings unambiguously mark a word's syntactic role, word order in High Valyrian is free — unlike Klingon's strict OVS order, where word order itself carries grammatical meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vala byka gīs. / Byka vala gīs.",
                "The man sees the woman. (either order, same meaning, case marking disambiguates)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Free Word Order from Case Marking — A2"
      },
      {
        "id": "valar-morghulis-formula",
        "title": "Valar Morghulis / Valar Dohaeris — B2",
        "emoji": "💀",
        "sections": [
          {
            "type": "intro",
            "text": "Формула 'Valar morghulis' ('усі люди мусять померти') і відповідь 'Valar dohaeris' ('усі люди мусять служити') — культові філософські фрази з серіалу, побудовані на іменнику valar (усі люди, збірна форма) плюс дієслово в зобов'язальній модальності.",
            "en": {
              "text": "The formula 'Valar morghulis' ('all men must die') and its reply 'Valar dohaeris' ('all men must serve') are the show's iconic philosophical phrases, built from the noun valar (all men, collective form) plus a verb in a required/obligatory modality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valar morghulis. — Valar dohaeris.",
                "All men must die. — All men must serve. (a ritual exchange used by the Faceless Men)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Valar Morghulis / Valar Dohaeris — B2"
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
        "title": "Present Tense — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється тематичним голосним плюс особовим закінченням, доданим до дієслівної основи — базовий, найчастотніший час.",
            "en": {
              "text": "The present tense is formed with a thematic vowel plus a personal ending, added to the verb stem — the basic, most frequent tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nyke hen Valyrio. Iksan.",
                "Я з Валірії. Я є."
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
        "id": "imperfect-tense",
        "title": "Imperfect Tense — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект позначає тривалу чи повторювану дію в минулому, утворену окремим набором закінчень від основи теперішнього часу.",
            "en": {
              "text": "The imperfect marks an ongoing or repeated past action, formed with a separate set of endings from the present stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iksin.",
                "Я був (тривало, регулярно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Tense — B1"
      },
      {
        "id": "future-tense",
        "title": "Future Tense — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється власним інфіксом, вставленим між основою й закінченням, окремим і від теперішнього, і від минулого часів.",
            "en": {
              "text": "The future tense is formed with its own infix, inserted between the stem and ending, distinct from both the present and past tenses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilēksa.",
                "Я буду."
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
        "id": "aorist-past-tense",
        "title": "Aorist (Simple Past) — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист позначає завершену одноразову дію в минулому без вказівки на тривалість, — окремий часовий пласт від імперфекта, який натомість наголошує на повторюваності.",
            "en": {
              "text": "The aorist marks a completed one-time past action without indicating duration — a separate tense layer from the imperfect, which instead emphasizes repetition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ilza.",
                "Я був (одного разу, завершено)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aorist (Simple Past) — B1"
      },
      {
        "id": "perfect-tense",
        "title": "Perfect Tense — B1",
        "emoji": "✔️",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект наголошує на теперішньому результаті минулої дії, утворений редуплікацією початкового приголосного основи плюс закінчення.",
            "en": {
              "text": "The perfect emphasizes the present result of a past action, formed by reduplicating the stem's initial consonant plus an ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gīlza.",
                "Я вже був (і це досі актуально)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense — B1"
      },
      {
        "id": "pluperfect-tense",
        "title": "Pluperfect Tense — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект позначає дію, завершену до іншої минулої події, — та сама редуплікація, що й перфект, але з іншим набором особових закінчень.",
            "en": {
              "text": "The pluperfect marks an action completed before another past event — the same reduplication as the perfect, but with a different set of personal endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gīlton.",
                "Я вже був (до іншої минулої події)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect Tense — B2"
      },
      {
        "id": "future-perfect-tense",
        "title": "Future Perfect Tense — B2",
        "emoji": "⏭️",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній доконаний час поєднує майбутній інфікс із перфектною редуплікацією, позначаючи дію, яка завершиться до якогось моменту в майбутньому.",
            "en": {
              "text": "The future perfect combines the future infix with the perfect's reduplication, marking an action that will be completed by some point in the future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Gīlēksa.",
                "Я вже буду був (до майбутнього моменту)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect Tense — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Imperative Mood — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється власним набором закінчень, доданих безпосередньо до основи дієслова, з окремими формами для однини й множини адресата.",
            "en": {
              "text": "The imperative is formed with its own set of endings, added directly to the verb stem, with separate forms for singular and plural addressee."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dracarys!",
                "Драконовогонь! (наказова форма, знаменита команда драконам)"
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
        "title": "Subjunctive Mood — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив уживається в підрядних реченнях мети й наслідку, утворений окремим набором закінчень від дійсного способу.",
            "en": {
              "text": "The subjunctive is used in purpose and result clauses, formed with a distinct set of endings from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...issa (кон'юнктивна форма)",
                "...that it may be (subjunctive form used in purpose clauses)"
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
        "id": "optative-mood",
        "title": "Optative Mood — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптатив виражає побажання чи надію, окремий спосіб від кон'юнктива, — уживається у формулах на кшталт благословень і прокльонів.",
            "en": {
              "text": "The optative expresses a wish or hope, a distinct mood from the subjunctive — used in formulas such as blessings and curses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...ossa (оптативна форма)",
                "may it be... (optative form used in blessings)"
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
        "id": "mediopassive-voice",
        "title": "Mediopassive Voice — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Медіопасивний стан поєднує значення зворотного й пасивного станів в одному наборі закінчень — підмет одночасно і діє, і зазнає дії, як у давньогрецькій.",
            "en": {
              "text": "The mediopassive voice combines reflexive and passive meanings in one set of endings — the subject both acts and is acted upon, as in Ancient Greek."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...ktys (медіопасивне закінчення)",
                "...is/does itself (mediopassive ending, Greek-like dual function)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mediopassive Voice — B2"
      },
      {
        "id": "participles",
        "title": "Active and Passive Participles — B1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметники активного й пасивного стану відмінюються за родом і відмінком, як прикметники, і часто заступають підрядні речення, — активний дієприкметник на -ilinno, пасивний — на -ilaksio.",
            "en": {
              "text": "Active and passive participles decline by gender and case like adjectives, and often substitute for subordinate clauses — the active participle in -ilinno, the passive in -ilaksio."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...ilinno vala",
                "the man who is doing... (active participle used as relative clause)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Active and Passive Participles — B1"
      },
      {
        "id": "negation-particle",
        "title": "Negation — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою daor, поставленою перед дієсловом, а іменникове заперечення — часткою noba перед іменником.",
            "en": {
              "text": "Negation is formed with the particle daor, placed before the verb, while nominal negation uses the particle noba before a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Daor iksan.",
                "Я не є."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: daor — A1"
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
        "id": "declension-classes",
        "title": "Declension Classes by Stem Ending — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники розподіляються на кілька відмінювальних класів залежно від кінцевого звука основи (голосний чи приголосний, і який саме), — кожен клас має власний набір відмінкових закінчень у межах свого роду.",
            "en": {
              "text": "Nouns are sorted into several declension classes based on the stem's final sound (vowel or consonant, and which one) — each class has its own set of case endings within its gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vala (клас на -a), zaldrīzes (клас на приголосний)",
                "vala (a-stem class), zaldrīzes (consonant-stem class, 'dragon')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Declension Classes by Stem Ending — B2"
      },
      {
        "id": "nominative-accusative-case",
        "title": "Nominative and Accusative — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "table",
            "title": "Номінатив і акузатив",
            "rows": [
              [
                "підмет (номінатив)",
                "vala"
              ],
              [
                "прямий додаток (акузатив)",
                "valun"
              ]
            ],
            "en": {
              "title": "Nominative and Accusative"
            }
          }
        ],
        "titleEn": "Nominative and Accusative Cases — A2"
      },
      {
        "id": "genitive-dative-case",
        "title": "Genitive and Dative — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "table",
            "title": "Генітив і датив",
            "rows": [
              [
                "присвійність (генітив)",
                "valo"
              ],
              [
                "непрямий додаток (датив)",
                "valot"
              ]
            ],
            "en": {
              "title": "Genitive and Dative"
            }
          }
        ],
        "titleEn": "Genitive and Dative Cases — B1"
      },
      {
        "id": "locative-instrumental-case",
        "title": "Locative and Instrumental — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "table",
            "title": "Локатив і інструменталіс",
            "rows": [
              [
                "місце (локатив)",
                "valese"
              ],
              [
                "знаряддя (інструменталіс)",
                "valuma"
              ]
            ],
            "en": {
              "title": "Locative and Instrumental"
            }
          }
        ],
        "titleEn": "Locative and Instrumental Cases — B1"
      },
      {
        "id": "comitative-vocative-case",
        "title": "Comitative and Vocative — B2",
        "emoji": "📢",
        "sections": [
          {
            "type": "table",
            "title": "Комітатив і вокатив",
            "rows": [
              [
                "супровід (комітатив)",
                "valdā"
              ],
              [
                "звертання (вокатив)",
                "vale"
              ]
            ],
            "en": {
              "title": "Comitative and Vocative"
            }
          }
        ],
        "titleEn": "Comitative and Vocative Cases — B2"
      },
      {
        "id": "adjective-agreement",
        "title": "Adjective Agreement — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником за родом, числом і відмінком одночасно — потрійне узгодження, суворіше за узгодження в українській (яке не має чотирьох родів).",
            "en": {
              "text": "Adjectives agree with the noun in gender, number, and case simultaneously — a triple agreement stricter than Ukrainian's (which lacks four genders)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "azantys vala",
                "the brave man (adjective matches solar gender, nominative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — B1"
      },
      {
        "id": "possessive-genitive",
        "title": "Possession via Genitive — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається генітивом означення, поставленим перед означуваним іменником, без окремого присвійного суфікса.",
            "en": {
              "text": "Possession is expressed with the genitive of the modifier, placed before the modified noun, without a separate possessive suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "valo ābra",
                "the man's daughter"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession via the Genitive — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "Demonstratives — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "kesys"
              ],
              [
                "той (близько)",
                "hikes"
              ],
              [
                "той (далеко)",
                "kīves"
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
        "id": "interrogative-pronouns",
        "title": "Interrogatives — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "skoros?"
              ],
              [
                "що?",
                "skorion?"
              ],
              [
                "де?",
                "skorepāio?"
              ]
            ],
            "en": {
              "title": "Interrogatives"
            }
          }
        ],
        "titleEn": "Interrogatives — A2"
      },
      {
        "id": "reflexive-pronoun",
        "title": "Reflexive Pronoun — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник uēpys ('себе') не змінюється за особою — уживається однаково для всіх осіб і чисел, як зворотний маркер, накладений на медіопасивний стан.",
            "en": {
              "text": "The reflexive pronoun uēpys ('self') does not change by person — used identically for all persons and numbers, as a reflexive marker layered onto the mediopassive voice."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uēpys sytilibi",
                "he sees himself"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Reflexive Pronoun: uēpys — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Cardinal Numbers — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "1",
                "sīkudi"
              ],
              [
                "2",
                "kinby"
              ],
              [
                "3",
                "hāre"
              ],
              [
                "4",
                "arby"
              ],
              [
                "5",
                "vōre"
              ]
            ],
            "en": {
              "title": "Cardinal Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numeral-gender-agreement",
        "title": "Numeral Agreement — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числівники, як і прикметники, узгоджуються з іменником за родом і відмінком — кожен із чотирьох родів має власну форму того самого числівника.",
            "en": {
              "text": "Numerals, like adjectives, agree with the noun in gender and case — each of the four genders has its own form of the same numeral."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kinby vale / kinba byka (два, різні форми за родом)",
                "two (solar gender form) / two (lunar gender form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Numeral Gender Agreement — B2"
      },
      {
        "id": "comparative-superlative",
        "title": "Comparative and Superlative — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється суфіксом -ior, найвищий — суфіксом -embar, доданими до основи прикметника.",
            "en": {
              "text": "The comparative is formed with the suffix -ior, the superlative with the suffix -embar, added to the adjective stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kirimvose-ior, kirimvose-embar",
                "more beautiful, most beautiful"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative and Superlative — B1"
      },
      {
        "id": "relative-clause-participle",
        "title": "Relative Clauses via Participles — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремого відносного займенника високовалірійська часто вживає дієприкметник, узгоджений із означуваним іменником за родом і відмінком, — конструкція, подібна до узбецької участної системи.",
            "en": {
              "text": "Instead of a separate relative pronoun, High Valyrian often uses a participle, agreed with the modified noun in gender and case — a construction similar to Uzbek's participial system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gīs vala",
                "the man who sees (participle as relative clause)"
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
        "id": "gerundive-obligation",
        "title": "Gerundive: Obligation — B2",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Герундив (майбутній пасивний дієприкметник) виражає обов'язок чи необхідність дії, подібно до латинського герундива.",
            "en": {
              "text": "The gerundive (future passive participle) expresses obligation or necessity of an action, similar to the Latin gerundive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...ossa (герундивна форма)",
                "...must be done (gerundive form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Gerundive: Obligation — B2"
      },
      {
        "id": "verb-thematic-classes",
        "title": "Verb Thematic Classes — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова діляться на кілька тематичних класів залежно від голосного, що з'являється перед особовим закінченням (-i-, -a-, -o- тощо) — подібно до латинських дієвідмін.",
            "en": {
              "text": "Verbs are divided into several thematic classes depending on the vowel that appears before the personal ending (-i-, -a-, -o-, etc.) — similar to Latin conjugations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gīs- (клас на -i-), lue- (клас на -e-)",
                "gīs- ('see', i-class), lue- ('fly', e-class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Thematic Classes — B2"
      },
      {
        "id": "person-marking-verb",
        "title": "Person Marking on the Verb — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "table",
            "title": "Особові закінчення (теперішній час)",
            "rows": [
              [
                "я",
                "-an"
              ],
              [
                "ти",
                "-a"
              ],
              [
                "він/вона/воно",
                "-a"
              ],
              [
                "ми",
                "-emy"
              ],
              [
                "ви",
                "-at"
              ],
              [
                "вони",
                "-i"
              ]
            ],
            "en": {
              "title": "Person Endings (present tense)"
            }
          }
        ],
        "titleEn": "Person Marking on the Verb — A2"
      },
      {
        "id": "collective-plural",
        "title": "Collective Plural — B2",
        "emoji": "👥",
        "sections": [
          {
            "type": "intro",
            "text": "Крім звичайної множини, деякі іменники мають окрему збірну форму, що позначає групу як єдине ціле, а не набір окремих одиниць, — як у слові valar ('усі люди' в сукупності).",
            "en": {
              "text": "Besides the regular plural, some nouns have a separate collective form marking a group as a single whole rather than a set of discrete units — as in valar ('all men' collectively)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "vala (людина) → valar (усі люди, збірне)",
                "man → all men (collective, not just plural)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Collective Plural — B2"
      },
      {
        "id": "prepositions-governing-case",
        "title": "Prepositions Governing Case — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники в валірійській керують певним відмінком іменника — один і той самий прийменник може мати різне значення залежно від відмінка додатка.",
            "en": {
              "text": "Prepositions in Valyrian govern a specific case of the noun — the same preposition can have a different meaning depending on the case of its object."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "hen + аблатив-подібний відмінок",
                "hen ('from') + the case it governs"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Prepositions Governing Case — B1"
      },
      {
        "id": "adjective-position-flexible",
        "title": "Flexible Adjective Position — B2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки повному узгодженню за родом, числом і відмінком прикметник може стояти як перед, так і після іменника без зміни значення — узгодження, а не позиція, несе граматичний зв'язок.",
            "en": {
              "text": "Thanks to full agreement in gender, number, and case, an adjective can stand either before or after the noun without changing meaning — agreement, not position, carries the grammatical link."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "azantys vala / vala azantys",
                "the brave man (either word order)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Flexible Adjective Position — B2"
      },
      {
        "id": "dragon-name-vocative",
        "title": "Vocative in Addressing Dragons — B2",
        "emoji": "🐉",
        "sections": [
          {
            "type": "intro",
            "text": "Вокативний відмінок особливо помітний у зверненнях до драконів у серіалі — окрема форма власного імені, відмінна від номінатива, уживається лише для прямого звертання.",
            "en": {
              "text": "The vocative case is especially visible in addressing dragons in the show — a distinct form of a proper name, different from the nominative, used only for direct address."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Drogon! (звертання, вокатив)",
                "Drogon! (address form, vocative case)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative in Addressing Dragons — B2"
      },
      {
        "id": "infinitive-form",
        "title": "The Infinitive — A2",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється суфіксом -agon, доданим до основи дієслова, і вживається як з модальними дієсловами, так і самостійно як віддієслівний іменник.",
            "en": {
              "text": "The infinitive is formed with the suffix -agon, added to the verb stem, and is used both with modal verbs and independently as a verbal noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "gīsagon",
                "to see"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive: -agon — A2"
      },
      {
        "id": "modal-verb-constructions",
        "title": "Modal Verb Constructions — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Модальні значення (могти, мусити, хотіти) виражаються допоміжним дієсловом плюс інфінітив на -agon головного дієслова, подібно до англійської модальної конструкції.",
            "en": {
              "text": "Modal meanings (can, must, want) are expressed with an auxiliary verb plus the -agon infinitive of the main verb, similar to the English modal construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "...gīsagon jorrāelza",
                "...wants to see"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modal Verb Constructions — B1"
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
                "і, та",
                "se"
              ],
              [
                "або",
                "va"
              ],
              [
                "але",
                "sesīr"
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
        "id": "topic-final-verb-tendency",
        "title": "Verb-Final Tendency in Formal Style — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча порядок слів формально вільний, у формальному й поетичному стилі валірійська тяжіє до розміщення дієслова в кінці речення, — стилістична, а не граматична вимога.",
            "en": {
              "text": "Although word order is formally free, in formal and poetic style Valyrian tends to place the verb at the end of the sentence — a stylistic, not grammatical, preference."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valar morghulis.",
                "All men (must) die. (verb-final formal formula)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Verb-Final Tendency in Formal Style — B2"
      },
      {
        "id": "ordinal-numbers",
        "title": "Ordinal Numbers — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються окремим суфіксом від кількісних і узгоджуються з іменником за родом і відмінком, як прикметники.",
            "en": {
              "text": "Ordinal numbers are formed with a separate suffix from the cardinals and agree with the noun in gender and case, like adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kinbyty (другий)",
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
        "id": "valyrian-freehold-history",
        "title": "The Valyrian Freehold — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Валірійський Вольний Союз — стародавня цивілізація драконовершників на континенті Ессос, яка панувала століттями, доки не загинула в катастрофі, відомій як Погибель.",
            "en": {
              "text": "The Valyrian Freehold was an ancient civilization of dragonlords on the continent of Essos, which dominated for centuries before it perished in the catastrophe known as the Doom."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valyrio Uēpa Ēngos",
                "the Valyrian Freehold (in-universe name)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Valyrian Freehold — B1"
      },
      {
        "id": "doom-of-valyria",
        "title": "The Doom of Valyria — B1",
        "emoji": "🌋",
        "sections": [
          {
            "type": "intro",
            "text": "Погибель Валірії — катастрофічне виверження Чотирнадцяти вогнів, що знищило Вольний Союз за один день, залишивши по собі Прокляті землі — подія, що визначає всю подальшу історію світу.",
            "en": {
              "text": "The Doom of Valyria was the catastrophic eruption of the Fourteen Flames that destroyed the Freehold in a single day, leaving behind the Smoking Sea — an event that defines the entire subsequent history of the setting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vōljaris (Погибель)",
                "the Doom (of Valyria)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Doom of Valyria — B1"
      },
      {
        "id": "fourteen-flames",
        "title": "The Fourteen Flames — B2",
        "emoji": "🌋",
        "sections": [
          {
            "type": "intro",
            "text": "Чотирнадцять вогнів — ланцюг вулканів, довкола якого зросла Валірія, джерело валірійської сталі й місце Погибелі.",
            "en": {
              "text": "The Fourteen Flames were a chain of volcanoes around which Valyria grew, the source of Valyrian steel and the site of the Doom."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vale Ēdrusy Ēngos",
                "the Fourteen Flames"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Fourteen Flames — B2"
      },
      {
        "id": "targaryen-naming-convention",
        "title": "House Targaryen Naming — B1",
        "emoji": "🐲",
        "sections": [
          {
            "type": "intro",
            "text": "Родина Таргарієнів, останні чисті валірійці, зберігає традиційні валірійські імена (Daenerys, Aegon, Rhaenyra) і звичай шлюбів між братами й сестрами для збереження валірійської крові.",
            "en": {
              "text": "House Targaryen, the last pure-blooded Valyrians, retains traditional Valyrian names (Daenerys, Aegon, Rhaenyra) and the custom of sibling marriage to preserve Valyrian blood."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Daenerys Targārien",
                "Daenerys Targaryen"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "House Targaryen and Valyrian Names — B1"
      },
      {
        "id": "bastard-valyrian-creoles",
        "title": "Bastard Valyrian Creoles — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "У містах Ессосу (Астапор, Мірін, Волантис) розмовляють спрощеними креольськими нащадками високовалірійської — 'бастардською валірійською', з утраченою відмінковою системою й гіскарським субстратом.",
            "en": {
              "text": "The cities of Essos (Astapor, Meereen, Volantis) speak simplified creole descendants of High Valyrian — 'Bastard Valyrian', with the case system lost and a Ghiscari substrate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Astapori Valyrio, Meereeni Valyrio",
                "Astapori Valyrian, Meereenese Valyrian (creole varieties)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Bastard Valyrian Creoles — B2"
      },
      {
        "id": "valyrian-steel-vocabulary",
        "title": "Valyrian Steel — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Валірійська сталь — легендарний метал, викуваний утраченою технологією Вольного Союзу, надзвичайно міцний і здатний ранити Білих Ходаків.",
            "en": {
              "text": "Valyrian steel is a legendary metal forged with the Freehold's lost technology, extraordinarily strong and capable of wounding White Walkers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Valyrio hilēnka",
                "Valyrian steel"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Valyrian Steel — B1"
      },
      {
        "id": "dragon-vocabulary",
        "title": "Dragon Vocabulary — A2",
        "emoji": "🐉",
        "sections": [
          {
            "type": "table",
            "title": "Слова про драконів",
            "rows": [
              [
                "дракон",
                "zaldrīzes"
              ],
              [
                "драконовершник",
                "zaldrīzoso"
              ],
              [
                "крило",
                "hlaeno"
              ],
              [
                "вогонь",
                "dracarys"
              ]
            ],
            "en": {
              "title": "Dragon Vocabulary"
            }
          }
        ],
        "titleEn": "Dragon Vocabulary — A2"
      },
      {
        "id": "david-peterson-conlang-creation",
        "title": "David J. Peterson's Conlang — B2",
        "emoji": "🧑‍💻",
        "sections": [
          {
            "type": "intro",
            "text": "Лінгвіст Девід Дж. Пітерсон розробив високовалірійську для телесеріалу на основі кількох слів із оригінальних романів Джорджа Р. Р. Мартіна, повністю побудувавши фонологію, морфологію й синтаксис мови.",
            "en": {
              "text": "Linguist David J. Peterson developed High Valyrian for the TV series from a handful of words in George R. R. Martin's original novels, building out the phonology, morphology, and syntax of the language in full."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dothraki.org (сайт про валірійську й дотракійську)",
                "Dothraki.org (site about Valyrian and Dothraki)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "David J. Peterson's Conlang Creation — B2"
      },
      {
        "id": "essos-geography-vocabulary",
        "title": "Essos Geography — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "table",
            "title": "Географія Ессосу",
            "rows": [
              [
                "Волантис",
                "Volon Therys"
              ],
              [
                "Браавос",
                "Braavos"
              ],
              [
                "Пентос",
                "Pentos"
              ]
            ],
            "en": {
              "title": "Essos Geography"
            }
          }
        ],
        "titleEn": "Essos Geography Vocabulary — B1"
      },
      {
        "id": "ghiscari-substrate-influence",
        "title": "Ghiscari Substrate Influence — B2",
        "emoji": "🏺",
        "sections": [
          {
            "type": "intro",
            "text": "На креольські варіанти валірійської в містах Затоки Работоргівців (колишньої Гіскарської імперії) вплинула гіскарська мова-субстрат, залишивши власну лексику й фонологічні риси, відмінні від чистої високовалірійської.",
            "en": {
              "text": "The creole varieties of Valyrian in the Slaver's Bay cities (the former Ghiscari empire) were shaped by the Ghiscari substrate language, leaving its own vocabulary and phonological features distinct from pure High Valyrian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ghiscari-Valyrio",
                "Ghiscari-influenced Valyrian"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ghiscari Substrate Influence — B2"
      },
      {
        "id": "valyrian-script",
        "title": "The Valyrian Writing System — B2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "У серіалі й книгах валірійська зображена власною писемністю на монетах, картах і рукописах, хоча повна графемна система в межах твору детально не розроблена, — на відміну від тенгвару Толкіна для Квенья/Сіндарин.",
            "en": {
              "text": "In the show and books, Valyrian is depicted with its own script on coins, maps, and manuscripts, though a full grapheme system is not developed in detail within the work — unlike Tolkien's Tengwar for Quenya/Sindarin."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "валірійські монети (drakony)",
                "Valyrian coins (drakony), shown with Valyrian script"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Valyrian Writing System — B2"
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
                "червоний",
                "qralo"
              ],
              [
                "чорний",
                "ābre"
              ],
              [
                "білий",
                "quptenka"
              ],
              [
                "золотий",
                "zōbrie"
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
        "id": "days-and-seasons",
        "title": "Days and Seasons — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Пори та дні",
            "rows": [
              [
                "день",
                "jāre"
              ],
              [
                "ніч",
                "nēdenka"
              ],
              [
                "зима",
                "sarōne"
              ],
              [
                "літо",
                "jazlan"
              ]
            ],
            "en": {
              "title": "Days and Seasons"
            }
          }
        ],
        "titleEn": "Days and Seasons — A2"
      },
      {
        "id": "family-terms",
        "title": "Family Terms — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Родинні терміни",
            "rows": [
              [
                "батько",
                "muña"
              ],
              [
                "мати",
                "vala qēlbar"
              ],
              [
                "син",
                "trēsy"
              ],
              [
                "дочка",
                "ābra"
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
        "title": "Greetings — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Привіт",
                "Rytsas"
              ],
              [
                "Дякую",
                "Kirimvose"
              ],
              [
                "До побачення",
                "Ynot vestrasse"
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
        "title": "Weather Vocabulary — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "вогонь",
                "perzys"
              ],
              [
                "вітер",
                "wagon"
              ],
              [
                "дощ",
                "jāre embar"
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
        "title": "Body Parts — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "kepa"
              ],
              [
                "рука",
                "ilva"
              ],
              [
                "око",
                "urnēbughe"
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
        "id": "food-and-drink",
        "title": "Food and Drink — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа та напої",
            "rows": [
              [
                "хліб",
                "genk"
              ],
              [
                "вино",
                "embōze"
              ],
              [
                "вода",
                "embar"
              ]
            ],
            "en": {
              "title": "Food and Drink"
            }
          }
        ],
        "titleEn": "Food and Drink — A2"
      },
      {
        "id": "direction-vocabulary",
        "title": "Directional Vocabulary — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Напрямки",
            "rows": [
              [
                "на схід",
                "issa"
              ],
              [
                "на захід",
                "ossenka"
              ],
              [
                "уперед",
                "morghōr"
              ]
            ],
            "en": {
              "title": "Directional Vocabulary"
            }
          }
        ],
        "titleEn": "Directional Vocabulary — B1"
      },
      {
        "id": "living-language-course",
        "title": "The Living Language Course — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Курс 'Living Language: High Valyrian' 2017 року — офіційний навчальний посібник, розроблений Пітерсоном, що робить високовалірійську однією з небагатьох конлангів із повноцінним комерційним курсом вивчення.",
            "en": {
              "text": "The 2017 'Living Language: High Valyrian' course is an official textbook developed by Peterson, making High Valyrian one of the few constructed languages with a full commercial learning course."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Living Language: High Valyrian",
                "the official commercial course"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Living Language Course — B2"
      },
      {
        "id": "duolingo-high-valyrian",
        "title": "High Valyrian on Duolingo — B1",
        "emoji": "📱",
        "sections": [
          {
            "type": "intro",
            "text": "Duolingo 2017 року запустив курс високовалірійської — перший випадок, коли платформа для вивчення мов додала повністю вигадану мову нарівні з природними.",
            "en": {
              "text": "In 2017 Duolingo launched a High Valyrian course — the first time the language-learning platform added a fully constructed language alongside natural ones."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Duolingo High Valyrian tree",
                "the Duolingo High Valyrian course"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "High Valyrian on Duolingo — B1"
      },
      {
        "id": "dracarys-cultural-impact",
        "title": "'Dracarys' Cultural Impact — A2",
        "emoji": "🔥",
        "sections": [
          {
            "type": "intro",
            "text": "Слово 'dracarys' ('драконовогонь'), наказова команда, стало одним із найвідоміших неологізмів попкультури 2010-х, широко цитованим поза контекстом серіалу.",
            "en": {
              "text": "The word 'dracarys' ('dragonfire'), an imperative command, became one of the most famous pop-culture neologisms of the 2010s, widely quoted outside the show's context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dracarys!",
                "Dragonfire! (command to a dragon to breathe fire)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "'Dracarys': Cultural Impact — A2"
      },
      {
        "id": "valyrian-family-language-tree",
        "title": "The Valyrian Language Family — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Високовалірійська — класична предкова мова родини, з якою пов'язані сучасні креольські варіанти, подібно до того, як латина породила романські мови, — цей зв'язок пронизує весь твір як мовна аналогія до реального світу.",
            "en": {
              "text": "High Valyrian is the classical ancestral language of a family that its modern creole varieties descend from, similar to how Latin gave rise to the Romance languages — this connection runs through the whole work as a real-world linguistic analogy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "High Valyrian → Astapori, Meereenese, Volantene",
                "High Valyrian → Astapori, Meereenese, Volantene (creole descendants)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Valyrian Language Family — B2"
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
        "id": "irregular-verb-to-be",
        "title": "Irregular Verb: 'to be' — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово 'бути' (сучасна форма iksan/ilza тощо) утворюється від нерегулярного супплетивного кореня, який відрізняється від будь-якого продуктивного тематичного класу, — його треба запам'ятовувати повністю окремо.",
            "en": {
              "text": "The verb 'to be' (present iksan/ilza etc.) is formed from an irregular suppletive root that doesn't match any productive thematic class — it must be memorized entirely separately."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "iksan (я є) — не за жодним регулярним класом",
                "I am — irregular, not matching any regular verb class"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "The Irregular Verb 'To Be' — B1"
      },
      {
        "id": "irregular-plural-valar",
        "title": "Irregular Collective: valar — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Слово valar ('усі люди') — не звичайна множина від vala ('людина'), а окрема збірна форма з нерегулярним закінченням, яка вживається лише в узагальнювальному сенсі 'все людство'.",
            "en": {
              "text": "The word valar ('all men') is not the regular plural of vala ('man/person'), but a separate collective form with an irregular ending, used only in the generalized sense of 'all humanity'."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна збірна форма",
            "rows": [
              [
                "vala (людина) → valar (усі люди, не *valis)",
                "man → all men (irregular collective, not the expected regular plural)"
              ]
            ],
            "en": {
              "title": "Irregular Collective Form"
            }
          }
        ],
        "titleEn": "The Irregular Collective: valar — B2"
      },
      {
        "id": "irregular-comparative-good",
        "title": "Irregular Comparative — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник 'добрий' має супплетивний порівняльний ступінь замість очікуваної регулярної форми на -ior, — рідкісний виняток серед прикметників валірійської.",
            "en": {
              "text": "The adjective 'good' has a suppletive comparative instead of the expected regular -ior form — a rare exception among Valyrian adjectives."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "jorrāelagon-пов'язаний корінь (супплетивне, не *jorrāelior)",
                "good-related suppletive root (irregular, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative for 'Good' — B1"
      }
    ]
  }
];
