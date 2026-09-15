// Vymova — data/grammar-data/grammar_sn.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_SN: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Mazita Emunhu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У шона немає граматичного роду — займенник \"iye\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Shona has no grammatical gender — the pronoun \"iye\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ini"
              ],
              [
                "ти",
                "iwe"
              ],
              [
                "він / вона",
                "iye"
              ],
              [
                "ми",
                "isu"
              ],
              [
                "ви",
                "imi"
              ],
              [
                "вони",
                "ivo"
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
        "id": "whistled-fricatives",
        "title": "Manzwi Anoridzira: Sv, Zv — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Шона має унікальні для мов банту свистячі шиплячі (sv, zv), що вимовляються із заокругленням губ і виразним свистом, — фонологічна риса, майже не засвідчена в жодній іншій мові регіону.",
            "en": {
              "text": "Shona has whistled sibilants (sv, zv) unique among Bantu languages, pronounced with lip rounding and an audible whistle — a phonological feature almost unattested in any other language of the region."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mhosva (свистяче sv)",
                "провина, злочин (зі свистячим приголосним)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Whistled Fricatives: sv, zv — B1"
      },
      {
        "id": "noun-class-system-overview",
        "title": "Mapoka Emazita: Makumi Maviri — B1",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Замість граматичного роду шона має близько двадцяти класів іменників, кожен зі своїм префіксом однини й множини, що визначає узгодження всього речення — прикметників, дієслів, займенників.",
            "en": {
              "text": "Instead of grammatical gender, Shona has around twenty noun classes, each with its own singular and plural prefix, determining agreement throughout the sentence — adjectives, verbs, pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mu-nhu (людина) → va-nhu (люди)",
                "person → people (class 1/2 prefixes)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Noun Class System — B1"
      },
      {
        "id": "tone-phonemic",
        "title": "Tsindiro: Rinocherechedza — B2",
        "emoji": "🎼",
        "sections": [
          {
            "type": "intro",
            "text": "Шона має два фонематичні тони (високий і низький), що розрізняють значення слів, написаних однаково, — тон часто не позначається на письмі, тож значення слід визначати з контексту.",
            "en": {
              "text": "Shona has two phonemic tones (high and low) that distinguish otherwise identically spelled words — tone is often unmarked in writing, so meaning must be inferred from context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Той самий запис, різний тон, різне значення.",
                "phonemic tone distinguishes word meaning"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Tone — B2"
      },
      {
        "id": "subject-concord-prefix",
        "title": "Chiratidzo Chomuiti — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово обов'язково приймає префікс узгодження з класом підмета, тож саме дієслово вже вказує, до якого класу іменників належить діяч, без потреби в окремому займеннику.",
            "en": {
              "text": "The verb obligatorily takes a subject-agreement prefix matching the subject's noun class, so the verb alone already reveals which noun class the doer belongs to, without needing a separate pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwana a-nofamba.",
                "Дитина йде (a- узгоджується з класом 1)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Concord Prefix — B1"
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
        "id": "present-habitual",
        "title": "Nguva Yaziva: -no- — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній/звичний час утворюється вставним -no-, доданим між префіксом узгодження підмета й основою дієслова.",
            "en": {
              "text": "The present/habitual tense is formed with the infix -no-, inserted between the subject-agreement prefix and the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinofamba.",
                "Я йду (взагалі, регулярно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present/Habitual: -no- — A1"
      },
      {
        "id": "present-progressive",
        "title": "Nguva Iripo: -ri ku- — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається зворотом -ri ku- ('перебуваю в процесі'), окремим від простого теперішнього -no-.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the construction -ri ku- ('am in the process of'), separate from the plain present -no-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiri kufamba.",
                "Я саме йду (зараз)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive: -ri ku- — A2"
      },
      {
        "id": "recent-past-aka",
        "title": "Nguva Yakapfuura: -aka- — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Недавній минулий час (сьогодні чи щойно) утворюється вставним -aka-, доданим до основи дієслова.",
            "en": {
              "text": "The recent past (today or just now) is formed with the infix -aka-, added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndakafamba.",
                "Я йшов (сьогодні, недавно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Recent Past: -aka- — A2"
      },
      {
        "id": "remote-past-ai",
        "title": "Nguva Yakare: -ai- — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Віддалений минулий час (вчора чи раніше), окремий від недавнього -aka-, позначається додатковим суфіксом -i, спричиняючи ступінчасту систему часової віддаленості.",
            "en": {
              "text": "The remote past (yesterday or earlier), distinct from the recent -aka-, is marked with an additional -i suffix, creating a graded remoteness system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndakambofamba.",
                "Я йшов (давно, у минулому)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Past — B1"
      },
      {
        "id": "near-future-cha",
        "title": "Ramangwana Riri Pedyo: -cha- — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Найближче майбутнє утворюється вставним -cha-, доданим до основи дієслова, для дій, що відбудуться незабаром.",
            "en": {
              "text": "The near future is formed with the infix -cha-, added to the verb stem, for actions that will happen soon."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndichafamba.",
                "Я піду (незабаром)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Near Future: -cha- — A2"
      },
      {
        "id": "far-future-chado",
        "title": "Ramangwana Riri Kure — B1",
        "emoji": "🌅",
        "sections": [
          {
            "type": "intro",
            "text": "Віддалене майбутнє утворюється тим самим -cha- плюс допоміжна частка, що уточнює більшу часову дистанцію, ніж просте найближче майбутнє.",
            "en": {
              "text": "The far future is formed with the same -cha- plus an auxiliary particle that clarifies a greater time distance than the plain near future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndichazofamba mangwana acho.",
                "Я піду (значно пізніше, віддалено)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Far Future — B1"
      },
      {
        "id": "perfect-tense",
        "title": "Nguva Yakapera: -a — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється закінченням -a (замість звичайного -a теперішнього виду дієслова) без часового вставного елемента, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the ending -a (in place of the regular verb ending) with no tense infix, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndafamba.",
                "Я вже пішов (результат актуальний)."
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
        "id": "narrative-consecutive-ka",
        "title": "Nguva Yenhoroondo: -ka- — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Наративний (послідовний) час на -ka- вживається для ланцюжка подій в оповіді після першого дієслова в минулому часі — типова риса мов банту для розповідання історій.",
            "en": {
              "text": "The narrative (consecutive) tense with -ka- is used for a chain of events in a story after the first verb has established the past tense — a typical Bantu-language storytelling feature."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Akasimuka, akaenda, akadya.",
                "Він устав, пішов, поїв (ланцюжок подій)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative/Consecutive: -ka- — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Kurayira — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без префікса узгодження; множина додає суфікс -i для звертання до кількох осіб.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no agreement prefix; the plural adds the suffix -i for addressing several people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Famba! / Fambai!",
                "Іди! / Ідіть!"
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
        "title": "Nguva Yechido: -e — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб утворюється закінченням -e замість -a, уживаний після дієслів бажання чи в підрядних реченнях мети.",
            "en": {
              "text": "The subjunctive is formed with the ending -e instead of -a, used after verbs of wishing or in purpose clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinoda kuti afambe.",
                "Я хочу, щоб він пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive Mood: -e — B1"
      },
      {
        "id": "potential-nga",
        "title": "Simba Rokugona: -nga- — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається вставним -nga-, доданим до основи дієслова, ('могти б').",
            "en": {
              "text": "Ability or possibility is expressed with the infix -nga-, added to the verb stem ('could/might')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndingafamba.",
                "Я міг би йти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: -nga- — B1"
      },
      {
        "id": "negative-present",
        "title": "Kusava: Ha-...-i — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення теперішнього часу утворюється циркумфіксом ha-...-i, що охоплює дієслово з обох боків, — префікс перед основою й суфікс -i в кінці замінюють звичайне закінчення -a.",
            "en": {
              "text": "Negating the present tense is formed with the circumfix ha-...-i, wrapping the verb on both sides — a prefix before the stem and a suffix -i at the end replace the ordinary -a ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Handifambi.",
                "Я не йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Present: ha-...-i — A2"
      },
      {
        "id": "conditional-kana",
        "title": "Kana: Mamiriro — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником kana ('якщо'), поставленим на початку підрядного речення перед дієсловом у відповідному часі.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction kana ('if'), placed at the start of the subordinate clause before the verb in the appropriate tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Kana mvura ikanaya, ndichagara mumba.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: kana — B1"
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
        "id": "noun-class-prefixes-table",
        "title": "Mapoka Emazita: Zviratidzo — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Основні класи іменників",
            "rows": [
              [
                "1/2 (люди)",
                "mu-/va-"
              ],
              [
                "3/4 (рослини)",
                "mu-/mi-"
              ],
              [
                "5/6 (парні/збірні)",
                "ri-/ma-"
              ],
              [
                "7/8 (речі)",
                "chi-/zvi-"
              ]
            ],
            "en": {
              "title": "Main Noun Classes"
            }
          }
        ],
        "titleEn": "Noun Class Prefixes — B1"
      },
      {
        "id": "object-concord-prefix",
        "title": "Chiratidzo Chinoitirwa — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Додаток може позначатися окремим префіксом узгодження на самому дієслові, вставленим перед основою, — та сама система класового узгодження, що й для підмета, але для об'єкта дії.",
            "en": {
              "text": "The object can be marked with its own agreement prefix on the verb itself, inserted before the stem — the same class-agreement system used for the subject, but for the object of the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndinomuona.",
                "Я його/її бачу (mu- = об'єктний префікс класу 1)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Concord Prefix — B1"
      },
      {
        "id": "locative-classes-16-17-18",
        "title": "Mapoka Enzvimbo: 16, 17, 18 — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Три спеціальні локативні класи (pa-, ku-, mu-) перетворюють будь-який іменник на 'місцевий', передаючи різні відтінки просторового значення ('на', 'до/біля', 'усередині') без окремого прийменника.",
            "en": {
              "text": "Three special locative classes (pa-, ku-, mu-) turn any noun into a 'locative' form, conveying different spatial shades ('at/on', 'toward/near', 'inside') with no separate preposition needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pamba (в домі, клас 16) / kumba (до дому, клас 17)",
                "at the house / to the house (locative noun classes)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Noun Classes 16, 17, 18 — B2"
      },
      {
        "id": "applicative-extension",
        "title": "Chiwedzero Che-ir- — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативний суфікс -ir-/-er-, доданий до основи дієслова, додає непрямий об'єкт (для/заради когось), не вживаючи окремого прийменника.",
            "en": {
              "text": "The applicative suffix -ir-/-er-, added to the verb stem, introduces an indirect object (for/on behalf of someone) without a separate preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kutenga (купувати) → kutengera (купувати для когось)",
                "to buy → to buy for someone (applicative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Applicative Extension: -ir- — B2"
      },
      {
        "id": "causative-extension",
        "title": "Chiwedzero Che-is- — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -is-/-es-, доданий до основи дієслова, передає значення 'змусити зробити'.",
            "en": {
              "text": "The causative suffix -is-/-es-, added to the verb stem, conveys the meaning 'make/cause to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kudya (їсти) → kudyisa (годувати, примусити їсти)",
                "to eat → to feed (causative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Extension: -is- — B2"
      },
      {
        "id": "passive-extension",
        "title": "Chiwedzero Che-w- — B1",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -w-/-iw-, доданим прямо до основи дієслова, замість окремого допоміжного дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -w-/-iw-, added directly to the verb stem, instead of a separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuona (бачити) → kuonwa (бути побаченим)",
                "to see → to be seen (passive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Extension: -w- — B1"
      },
      {
        "id": "reciprocal-extension",
        "title": "Chiwedzero Che-an- — B2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Взаємна дія ('одне одного') позначається суфіксом -an-, доданим до основи дієслова, без окремого зворотного займенника.",
            "en": {
              "text": "Reciprocal action ('each other') is marked with the suffix -an-, added to the verb stem, with no separate reflexive pronoun needed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuda (любити) → kudana (любити одне одного)",
                "to love → to love each other (reciprocal)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reciprocal Extension: -an- — B2"
      },
      {
        "id": "possessive-concord",
        "title": "Chiratidzo Choumwe — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна частка -a узгоджується з класом посідомого іменника через власний префікс, а не з особою власника, тож форма 'мій' міняється залежно від того, яким класом є посідомий предмет.",
            "en": {
              "text": "The possessive particle -a agrees with the class of the possessed noun through its own prefix, not with the possessor's person, so the word for 'my' changes depending on the class of the thing possessed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mwana wangu (моя дитина, клас 1) / mabhuku angu (мої книги, клас 6)",
                "my child (class 1) / my books (class 6) — different 'my'"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Concord — A2"
      },
      {
        "id": "demonstratives-three-way",
        "title": "Zviratidzo Zvokuratidza — B1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники розрізняють три ступені відстані (близько до мовця, близько до слухача, далеко від обох) і, як і всі інші означення, узгоджуються з класом іменника.",
            "en": {
              "text": "Demonstratives distinguish three degrees of distance (near the speaker, near the listener, far from both) and, like all other modifiers, agree with the noun's class."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uyu (цей, клас 1) / uyo (той, клас 1)",
                "this one / that one (class 1 forms)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Three-Way Demonstratives — B1"
      },
      {
        "id": "adjective-concord",
        "title": "Chiratidzo Chomurondedzero — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники приєднують префікс, що узгоджується з класом іменника, замість незмінного кореня чи окремого закінчення роду.",
            "en": {
              "text": "Adjectives attach a prefix agreeing with the noun's class, rather than staying invariant or taking a separate gender ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mukomana mukuru (великий хлопчик, клас 1)",
                "big boy (class-1 adjective prefix)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Concord — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "Nhamba: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "poshi"
              ],
              [
                "2",
                "piri"
              ],
              [
                "3",
                "tatu"
              ],
              [
                "5",
                "shanu"
              ],
              [
                "10",
                "gumi"
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
        "id": "comparative-kupfuura",
        "title": "Kuenzanisa: Kupfuura — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється дієсловом kupfuura ('перевершувати'), поставленим після прикметника й об'єкта порівняння, а не окремою граматичною формою прикметника.",
            "en": {
              "text": "The comparative is formed with the verb kupfuura ('to exceed'), placed after the adjective and the compared object, rather than a separate grammatical adjective form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iyi yakakura kupfuura iyo.",
                "Це більше за те (букв. 'перевершує те')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: kupfuura ('to exceed') — B1"
      },
      {
        "id": "interrogatives",
        "title": "Mibvunzo — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "ani"
              ],
              [
                "що",
                "chii"
              ],
              [
                "де",
                "kupi"
              ],
              [
                "коли",
                "rini"
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
        "id": "relative-clause-concord",
        "title": "Mutsara Wokutsanangura — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться не окремим словом, а власним класово узгодженим відносним префіксом на дієслові, — інша система, ніж у мовах з відносними займенниками.",
            "en": {
              "text": "Relative clauses are introduced not by a separate word but by their own class-agreeing relative prefix on the verb — a different system from languages with relative pronouns."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "murume anofamba",
                "чоловік, що йде"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause via Concord — B2"
      },
      {
        "id": "word-order-svo",
        "title": "Mutsetse Wemazwi: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), типовий для більшості мов банту.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), typical of most Bantu languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mwana anoona imbwa.",
                "Дитина бачить собаку."
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
        "id": "conjunctions",
        "title": "Zvisanganiso — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "uye/ne-"
              ],
              [
                "або",
                "kana"
              ],
              [
                "але",
                "asi"
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
        "id": "diminutive-augmentative-class",
        "title": "Kuderedza Nokuwedzera: Class 12/20 — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальне й збільшувальне значення передаються не суфіксом, а перенесенням іменника до окремого класу (ka-/tu- для зменшеного, zi- для збільшеного), що змінює й усе узгодження речення.",
            "en": {
              "text": "Diminutive and augmentative meanings are conveyed not with a suffix but by moving the noun into a separate class (ka-/tu- for diminutive, zi- for augmentative), which shifts the entire sentence's agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mwana (дитина) → kamwana (малятко)",
                "child → little child (diminutive class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive/Augmentative via Noun Class — B2"
      },
      {
        "id": "stative-extension",
        "title": "Chiwedzero Che-ik- — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Стативний суфікс -ik-/-ek-, доданий до основи дієслова, передає значення можливості чи стану, спричиненого дією ('можна зробити', 'зроблено').",
            "en": {
              "text": "The stative suffix -ik-/-ek-, added to the verb stem, conveys possibility or a state resulting from an action ('can be done', 'is done')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuona (бачити) → kuonekwa (бути видним)",
                "to see → to be visible (stative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stative Extension: -ik- — B2"
      },
      {
        "id": "postposed-question-particle",
        "title": "Chiratidzo Chomubvunzo: Here — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова утворюється часткою here, доданою в кінці речення, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the particle here added at the end of the sentence, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Unofamba here?",
                "Ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Particle: here — A2"
      },
      {
        "id": "infinitive-ku-prefix",
        "title": "Chiitwa: Ku- — A1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) утворюється класовим префіксом ku- (клас 15), доданим до основи, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) is formed with the class-15 prefix ku- added to the stem, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kufamba",
                "ходити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: ku- Prefix — A1"
      },
      {
        "id": "prepositions-locative-only",
        "title": "Zviratidzo Zvenzvimbo: Pane, Muno — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Замість повного набору прийменників шона здебільшого покладається на локативні класи іменників (pa-, ku-, mu-), а окремі прийменники вживаються лише для небагатьох абстрактних значень.",
            "en": {
              "text": "Instead of a full set of prepositions, Shona mostly relies on the locative noun classes (pa-, ku-, mu-), with separate prepositions used only for a handful of abstract meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "pamusoro pe- ('над')",
                "above (one of the few true prepositions)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Classes Instead of Prepositions — B1"
      },
      {
        "id": "vocative-address",
        "title": "Kudaidza — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я часто вживається без жодних змін, а вигук іwe ('гей ти') додається для привернення уваги.",
            "en": {
              "text": "In direct address, a name is often used unchanged, with the exclamation iwe ('hey you') added to draw attention."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Iwe Tendai, uya pano!",
                "Гей, Тендаї, ходи сюди!"
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
        "id": "existential-pane",
        "title": "Pane: Kuvapo — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом pane ('там є'), утвореним із локативного класу 16, незалежно від класу самого предмета, про який ідеться.",
            "en": {
              "text": "The existence of something is expressed with pane ('there is'), formed from the class-16 locative, regardless of the class of the thing being talked about."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Pane vanhu vazhinji.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: pane — B1"
      },
      {
        "id": "negative-relative-clause",
        "title": "Mutsara Wokutsanangura Usiri — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечне означальне речення утворюється власним негативним відносним префіксом на дієслові, окремим від звичайного стверджувального відносного префікса.",
            "en": {
              "text": "A negative relative clause is formed with its own dedicated negative relative prefix on the verb, distinct from the ordinary affirmative relative prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "murume asingafambi",
                "чоловік, що не йде"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Relative Clause — B2"
      },
      {
        "id": "reduplication-intensity",
        "title": "Kudzokorora: Kusimbisa — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повне подвоєння основи дієслова чи прикметника послаблює або урізноманітнює значення дії ('трошки', 'то тут то там'), — протилежно до підсилення, як у деяких інших мовах.",
            "en": {
              "text": "Fully reduplicating a verb or adjective stem softens or diversifies the meaning of an action ('a bit', 'here and there'), the opposite of intensifying as in some other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kufamba-famba",
                "походжати (трохи, без мети)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Nuance — B1"
      },
      {
        "id": "great-zimbabwe-etymology",
        "title": "Dzimbahwe: Izwi Rokutanga — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Сама назва країни Зімбабве походить від шонського dzimba dza mabwe ('кам'яні будинки'), що прямо посилається на руїни Великого Зімбабве — середньовічну столицю, побудовану з каменю без розчину.",
            "en": {
              "text": "The country's very name Zimbabwe derives from the Shona dzimba dza mabwe ('houses of stone'), referring directly to the Great Zimbabwe ruins — a medieval capital built of stone with no mortar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Dzimbahwe (руїни Великого Зімбабве)",
                "Great Zimbabwe (the ruins the country is named after)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Great Zimbabwe and the Country's Name — B2"
      },
      {
        "id": "mitupo-totem-system",
        "title": "Mitupo: Zviratidzo Zvedzinza — B2",
        "emoji": "🦁",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен клан шона має власний тотем (mutupo) — тварину чи об'єкт природи, спадковий по батьківській лінії, що визначає, з ким шлюб заборонений, і супроводжується власним поетичним звертанням-похвалою (chidao).",
            "en": {
              "text": "Every Shona clan has its own totem (mutupo) — an animal or natural object, inherited patrilineally, that determines who is forbidden to marry whom, and comes with its own poetic praise-address (chidao)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mutupo weShumba (тотем лева)",
                "the Lion totem clan"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mitupo: The Clan Totem System — B2"
      },
      {
        "id": "mbira-music-tradition",
        "title": "Mbira: Nziyo Dzechivanhu — B1",
        "emoji": "🎶",
        "sections": [
          {
            "type": "intro",
            "text": "Мбіра — металевий язичковий інструмент, центральний для духовних церемоній bira, покликаних викликати духів предків; ЮНЕСКО визнала його нематеріальною культурною спадщиною.",
            "en": {
              "text": "The mbira is a metal-tined thumb instrument central to bira spirit-possession ceremonies meant to summon ancestral spirits; UNESCO has recognized it as intangible cultural heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuridza mbira",
                "грати на мбірі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mbira Music Tradition — B1"
      },
      {
        "id": "lobola-bride-price",
        "title": "Lobola: Chinzvimbo Chomuchato — B1",
        "emoji": "💍",
        "sections": [
          {
            "type": "intro",
            "text": "Lobola (роора) — традиційний весільний викуп нареченої, переговори якого мають розвинену власну термінологію і досі є обов'язковим елементом навіть у сучасних, християнських весіллях.",
            "en": {
              "text": "Lobola (roora) is the traditional bride-price payment, whose negotiation has its own developed vocabulary and remains obligatory even in modern, Christian weddings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kubvunza roora",
                "домовлятися про роору"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lobola: The Bride-Price Tradition — B1"
      },
      {
        "id": "svikiro-spirit-medium",
        "title": "Svikiro Nen'anga — B2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Svikiro (медіум предків) і n'anga (традиційний цілитель/провидець) — окремі, шановані ролі в духовній системі шона, кожна зі своєю власною лексикою обрядів і призначень.",
            "en": {
              "text": "The svikiro (ancestral spirit medium) and n'anga (traditional healer/diviner) are distinct, respected roles in Shona spiritual practice, each with its own vocabulary of rites and roles."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuenda kun'anga",
                "піти до цілителя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Svikiro and N'anga: Spiritual Roles — B2"
      },
      {
        "id": "tsumo-proverbs",
        "title": "Tsumo: Mazwi Ounyanzvi — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (tsumo) і загадки (madimikira) — центральна частина усної традиції шона, часто вживані в повсякденній мові як спосіб непрямо висловити думку чи повчання.",
            "en": {
              "text": "Proverbs (tsumo) and riddles (madimikira) are central to Shona oral tradition, often used in everyday speech as a way to convey a point or teaching indirectly."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chara chimwe hachitswanyi inda.",
                "Один палець не роздавить воша (єдність дає силу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tsumo: Proverbs — B1"
      },
      {
        "id": "sadza-staple-food",
        "title": "Sadza — A2",
        "emoji": "🍲",
        "sections": [
          {
            "type": "intro",
            "text": "Садза — густа каша з кукурудзяного борошна, основна страва в раціоні, яку їдять руками, умочуючи у соус чи овочі, — слово вживається так само часто, як 'їжа' загалом.",
            "en": {
              "text": "Sadza is a thick maize-flour porridge, the staple dish, eaten by hand and dipped into a relish of meat or vegetables — the word is used almost as commonly as 'food' in general."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kudya sadza",
                "їсти садзу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sadza: The Staple Food — A2"
      },
      {
        "id": "colors",
        "title": "Mavara — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "tsvuku"
              ],
              [
                "чорний",
                "nyama/dema"
              ],
              [
                "білий",
                "chena"
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
        "title": "Nhamba: Makumi — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "makumi maviri"
              ],
              [
                "100",
                "zana"
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
        "id": "family-extended-kinship",
        "title": "Mhuri: Ukama Hwakakura — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Терміни спорідненості шона класифікують родичів за поколінням і статтю точніше, ніж англійська, тож 'дядько' по батьковій лінії й 'дядько' по материнській мають різні слова з різними соціальними ролями.",
            "en": {
              "text": "Shona kinship terms classify relatives by generation and gender more precisely than English, so a paternal 'uncle' and a maternal 'uncle' have different words with different social roles."
            }
          },
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "baba"
              ],
              [
                "мати",
                "amai"
              ],
              [
                "дядько по матері",
                "sekuru"
              ]
            ],
            "en": {
              "title": "Family"
            }
          }
        ],
        "titleEn": "Extended Kinship Terms — A2"
      },
      {
        "id": "greetings",
        "title": "Kukwazisa — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Mhoro"
              ],
              [
                "Дякую",
                "Maita basa/Ndatenda"
              ],
              [
                "До побачення",
                "Sara zvakanaka"
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
        "title": "Mamiriro Ekunze — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "zuva"
              ],
              [
                "дощ",
                "mvura"
              ],
              [
                "вітер",
                "mhepo"
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
        "title": "Zvikamu Zvomuviri — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "musoro"
              ],
              [
                "рука",
                "ruoko"
              ],
              [
                "око",
                "ziso"
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
        "id": "age-respect-vocabulary",
        "title": "Ruremekedzo Rwevakuru — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Повага до старших виражається окремою лексикою звертання й обов'язковим ритуалом плескання в долоні (kuombera) перед подякою чи проханням, — невіддільна частина мовного етикету.",
            "en": {
              "text": "Respect for elders is expressed with dedicated address vocabulary and the obligatory hand-clapping ritual (kuombera) before thanking or asking for something — an inseparable part of the language's etiquette."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuombera baba",
                "плескати в долоні перед батьком (шаноблива форма)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elder-Respect Vocabulary and Kuombera — B1"
      },
      {
        "id": "chimurenga-liberation-term",
        "title": "Chimurenga: Kurwira Rusununguko — B2",
        "emoji": "✊",
        "sections": [
          {
            "type": "intro",
            "text": "Слово chimurenga ('визвольна боротьба') позначало повстання 1896-97 рр. проти колоніального правління, а потім і війну за незалежність 1966-79 рр., ставши ширшим культурним символом опору.",
            "en": {
              "text": "The word chimurenga ('liberation struggle') originally denoted the 1896-97 uprising against colonial rule, then the 1966-79 independence war, becoming a broader cultural symbol of resistance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Chimurenga Chekutanga (Перше чимуренга, 1896-97)",
                "the First Chimurenga (1896-97 uprising)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chimurenga: The Liberation Struggle — B2"
      },
      {
        "id": "mukwerera-rainmaking",
        "title": "Mukwerera: Mhemberero Yemvura — B2",
        "emoji": "🌧️",
        "sections": [
          {
            "type": "intro",
            "text": "Mukwerera — щорічна церемонія викликання дощу, проведена старійшинами й духовними медіумами перед сезоном посіву, — досі практикована в деяких сільських громадах поряд із християнськими обрядами.",
            "en": {
              "text": "Mukwerera is the annual rainmaking ceremony, performed by elders and spirit mediums before the planting season, still practiced in some rural communities alongside Christian rites."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuita mukwerera",
                "проводити церемонію викликання дощу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mukwerera: The Rainmaking Ceremony — B2"
      },
      {
        "id": "zimbabwe-bird-symbol",
        "title": "Shiri YeZimbabwe — B1",
        "emoji": "🦅",
        "sections": [
          {
            "type": "intro",
            "text": "Кам'яна фігурка Птаха Зімбабве, знайдена серед руїн Великого Зімбабве, зображена на прапорі й гербі країни й на банкнотах — національний символ, що пов'язує сучасну державу з середньовічною спадщиною шона.",
            "en": {
              "text": "The soapstone Zimbabwe Bird figure, found among the Great Zimbabwe ruins, appears on the national flag, coat of arms, and banknotes — a national symbol linking the modern state to Shona medieval heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Shiri yeZimbabwe (на прапорі)",
                "the Zimbabwe Bird (on the flag)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Zimbabwe Bird Symbol — B1"
      },
      {
        "id": "ndebele-language-contact",
        "title": "Ndebele: Mutauro Mumwe — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Шона співіснує з ндебеле (мовою банту з іншої підгрупи, спорідненою із зулу) як другою офіційною мовою Зімбабве, з відносно невеликим взаємним лексичним впливом попри спільну територію.",
            "en": {
              "text": "Shona coexists with Ndebele (a Bantu language from a different subgroup, related to Zulu) as Zimbabwe's other major official language, with relatively little mutual lexical influence despite sharing territory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chiShona neisiNdebele",
                "шона й ндебеле (дві головні мови Зімбабве)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Shona and Ndebele in Contact — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Zvipfeko — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "hembe"
              ],
              [
                "взуття",
                "shangu"
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
        "id": "animals-vocabulary",
        "title": "Mhuka — A2",
        "emoji": "🦁",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "лев",
                "shumba"
              ],
              [
                "собака",
                "imbwa"
              ],
              [
                "корова",
                "mombe"
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
        "title": "Nzira Dzenyika — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "kuchamhembe"
              ],
              [
                "південь",
                "kumaodzanyemba"
              ],
              [
                "схід",
                "kumabvazuva"
              ],
              [
                "захід",
                "kumavirira"
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
        "id": "harvest-festival-chisi",
        "title": "Chisi: Zuva Rezororo — B2",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Chisi — традиційний священний день спочинку від польових робіт, обраний старійшинами громади для вшанування духів землі, окремий від сучасного тижневого календаря.",
            "en": {
              "text": "Chisi is a traditional sacred rest day from fieldwork, designated by community elders to honor the land spirits, separate from the modern weekly calendar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "kuchengeta chisi",
                "дотримуватися дня chisi"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chisi: The Sacred Rest Day — B2"
      },
      {
        "id": "days-of-week",
        "title": "Mazuva Evhiki — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "Muvhuro"
              ],
              [
                "п'ятниця",
                "Chishanu"
              ],
              [
                "неділя",
                "Svondo"
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
        "id": "coordinating-conjunctions-extra",
        "title": "Zvimwe Zvisanganiso — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник nokuti ('тому що') і частка saka ('отже') розширюють базовий набір uye/kana/asi, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction nokuti ('because') and the particle saka ('therefore') extend the basic uye/kana/asi set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ndiri mumba nokuti kuri kunaya.",
                "Я вдома, бо йде дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
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
        "id": "irregular-verb-kuva",
        "title": "Chiito Chisina Mutemo: Kuva — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово kuva ('бути') часто повністю опускається в теперішньому часі (нульова зв'язка), але виявляється в минулому й майбутньому часах у повній формі, — асиметрія, схожа на багато інших мов світу.",
            "en": {
              "text": "The verb kuva ('to be') is often omitted entirely in the present tense (zero copula), but appears in full in the past and future tenses — an asymmetry similar to many other world languages."
            }
          },
          {
            "type": "table",
            "title": "Асиметрія зв'язки",
            "rows": [
              [
                "Ndiri mudzidzisi. (теп., нульова зв'язка)",
                "I [am] a teacher."
              ],
              [
                "Ndakanga ndiri mudzidzisi. (мин., повна форма)",
                "I was a teacher."
              ]
            ],
            "en": {
              "title": "Copula Asymmetry"
            }
          }
        ],
        "titleEn": "Irregular Verb: kuva ('to be') — B1"
      },
      {
        "id": "irregular-noun-class-assignment",
        "title": "Mapoka Asina Mutemo — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частотних іменників (наприклад, munhu 'людина') історично закріплені за класом 1/2, хоча за фонетичною формою могли б піддаватися іншому класовому префіксу, — виняток, що вивчається окремо.",
            "en": {
              "text": "A handful of frequent nouns (such as munhu 'person') are historically fixed to class 1/2, even though their phonetic shape might suggest a different class prefix — an exception learned individually."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "munhu (людина, клас 1, не за формою)",
                "person (class 1 by convention, not phonetic shape)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Irregular Noun-Class Assignment — B2"
      },
      {
        "id": "irregular-comparative-kunaka",
        "title": "Kuenzanisa Kusina Mutemo: -naka — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Замість регулярного дієслова kupfuura, добро як якість найчастіше порівнюється через прислівникове словосполучення zvakanyanya ('надзвичайно'), а не через звичайну конструкцію порівняння.",
            "en": {
              "text": "Instead of the regular verb kupfuura, goodness as a quality is most often compared through the adverbial phrase zvakanyanya ('exceedingly'), rather than through the ordinary comparison construction."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне порівняння",
            "rows": [
              [
                "-naka zvakanyanya (не *-naka kupfuura)",
                "exceedingly good (irregular intensifying construction)"
              ]
            ],
            "en": {
              "title": "Irregular Comparison"
            }
          }
        ],
        "titleEn": "Irregular Comparison of Goodness — B1"
      }
    ]
  }
];
