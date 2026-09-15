// Vymova — data/grammar-data/grammar_zu.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_ZU: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Izabizwana Zomuntu — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У зулу немає граматичного роду — займенник \"yena\" однаково означає і \"він\", і \"вона\".",
            "en": {
              "text": "Zulu has no grammatical gender — the pronoun \"yena\" means both \"he\" and \"she\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "mina"
              ],
              [
                "ти",
                "wena"
              ],
              [
                "він / вона",
                "yena"
              ],
              [
                "ми",
                "thina"
              ],
              [
                "ви",
                "nina"
              ],
              [
                "вони",
                "bona"
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
        "id": "click-consonants-comparison",
        "title": "Ukutshefuza — B1",
        "emoji": "👅",
        "sections": [
          {
            "type": "intro",
            "text": "Зулу теж має клацні приголосні з койсанських мов, але їхня частотність і кількість слів із клацними в повсякденному лексиконі помітно нижчі, ніж у спорідненій кхоса, — контактний вплив був менш інтенсивним.",
            "en": {
              "text": "Zulu also has click consonants from Khoisan languages, but their frequency and the number of everyday words containing clicks are noticeably lower than in the closely related Xhosa — the contact influence was less intensive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "icici (клацний c, сережка) — рідше в зулу, ніж подібні слова в кхоса",
                "icici ('earring', dental click) — clicks are rarer in Zulu than comparable Xhosa vocabulary"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Click Consonants: Lower Frequency Than Xhosa — B1"
      },
      {
        "id": "shaka-mfecane-unification",
        "title": "UShaka Nomfecane — B1",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Король Чака на початку 19 століття об'єднав розрізнені нгуні-клани у Зулуську державу через військові реформи, започаткувавши період масштабних міграцій і потрясінь — мфекане, — що й сформував сучасну зулуську мовну й національну ідентичність.",
            "en": {
              "text": "In the early 19th century, King Shaka unified scattered Nguni clans into the Zulu state through military reforms, triggering a period of massive migrations and upheaval — the Mfecane — which shaped modern Zulu linguistic and national identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uShaka kaSenzangakhona",
                "Shaka, son of Senzangakhona (the founder of the Zulu Kingdom)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Shaka and the Mfecane Unification — B1"
      },
      {
        "id": "largest-home-language-status",
        "title": "Ulimi Olukhulunywa Kakhulu — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Зулу — найпоширеніша рідна мова Південної Африки (близько 12 мільйонів носіїв), одна з 12 офіційних мов країни, із найбільшим числом розмовляючих серед усіх мов нгуні, включно з кхоса.",
            "en": {
              "text": "Zulu is South Africa's most widely spoken home language (about 12 million speakers), one of the country's 12 official languages, with the largest number of speakers among all Nguni languages, including Xhosa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isiZulu (назва мови самою мовою)",
                "isiZulu (the language's own name for itself)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "South Africa's Largest Home Language — A2"
      },
      {
        "id": "royal-hlonipho-avoidance",
        "title": "Ukuhlonipha Kwasebukhosini — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від хлоніпха заміжніх жінок у кхоса, зулуська королівська хлоніпхо вимагає уникання складів імені правлячого короля всім населенням країни, — ширший, загальнонаціональний масштаб уникання мовних звуків.",
            "en": {
              "text": "Unlike Xhosa's married-women's hlonipha, Zulu royal hlonipho requires the whole population to avoid syllables from the reigning king's name — a broader, nationwide scope of sound-avoidance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isihlonipho senkosi",
                "the royal avoidance-speech register (avoiding the king's name syllables)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Royal Hlonipho: Nationwide Name Avoidance — B2"
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
        "id": "present-tense-ngi-concord",
        "title": "Isikhathi Samanje: ngi- — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється підметовим узгоджувальним префіксом ngi- (1 особа однини), відмінним від кхоса ndi-, доданим до дієслівної основи з часткою -ya-.",
            "en": {
              "text": "The present tense is formed with the subject concord prefix ngi- (1st person singular), distinct from Xhosa's ndi-, added to the verb stem with the particle -ya-."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngiyabhala.",
                "Я пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Tense: ngi- Concord — A1"
      },
      {
        "id": "recent-past-tense",
        "title": "Isikhathi Esidlule Esisandukwenzeka — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Недавнє минуле позначається зміною кінцевого голосного основи на -ile, наголошуючи на діях, завершених щойно чи сьогодні.",
            "en": {
              "text": "The recent past is marked by changing the stem's final vowel to -ile, emphasizing actions completed just now or today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngibhalile.",
                "Я щойно написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Recent Past Tense: -ile — A2"
      },
      {
        "id": "remote-past-tense-a",
        "title": "Isikhathi Esidlule Kudala — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Далеке минуле (події за межами сьогоднішнього дня) позначається окремою формою на -a з подовженим підметовим узгодженням, відмінним від недавнього минулого на -ile.",
            "en": {
              "text": "The remote past (events before today) is marked with a separate form ending in -a using an extended subject concord, distinct from the recent past in -ile."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngangibhala.",
                "Я писав (давніше, не сьогодні)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Remote Past Tense — B1"
      },
      {
        "id": "future-tense-zo",
        "title": "Isikhathi Esizayo: -zo- — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється інфіксом -zo-, вставленим між підметовим узгодженням і основою дієслова.",
            "en": {
              "text": "The future tense is formed with the infix -zo-, inserted between the subject concord and the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngizobhala.",
                "Я писатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -zo- — A2"
      },
      {
        "id": "present-progressive-sa",
        "title": "Okuqhubekayo: -sa- — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія позначається інфіксом -sa- ('все ще'), вставленим між підметовим префіксом і основою, спільна морфологічна модель зі спорідненою кхоса.",
            "en": {
              "text": "An ongoing action is marked with the infix -sa- ('still'), inserted between the subject prefix and the stem — a shared morphological pattern with the closely related Xhosa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngisabhala.",
                "Я ще пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive Aspect: -sa- — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Umyalelo — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб для однини — гола основа дієслова, для множини — суфікс -ni, доданий до основи.",
            "en": {
              "text": "The imperative for singular is the bare verb stem; for plural, the suffix -ni is added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Bhala! / Bhalani!",
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
        "id": "subjunctive-mood-e",
        "title": "Isimo Esiyisu: -e — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктив змінює кінцевий голосний основи на -e й уживається після дієслів волевиявлення чи в послідовних діях.",
            "en": {
              "text": "The subjunctive changes the stem's final vowel to -e and is used after verbs of volition or in sequential actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngifuna ukuba abhale.",
                "Я хочу, щоб він написав."
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
        "id": "conditional-uma",
        "title": "Isimo Esimele: uma — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником uma ('якщо'), поставленим на початку підрядного речення, — власне зулуське слово, відмінне від кхоського ukuba.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction uma ('if'), placed at the start of the subordinate clause — its own Zulu word, distinct from Xhosa's ukuba."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Uma kunetha, ngizohlala ekhaya.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: uma — B1"
      },
      {
        "id": "habitual-aspect-vamise",
        "title": "Umkhuba: -vamise- — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звична дія виражається допоміжним дієсловом vamisa ('часто робити'), поставленим перед основним дієсловом у формі кон'юнктива.",
            "en": {
              "text": "A habitual action is expressed with the auxiliary verb vamisa ('to often do'), placed before the main verb in the subjunctive form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngivamise ukubhala.",
                "Я зазвичай пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Aspect: -vamise- — B2"
      },
      {
        "id": "negation-present-angi",
        "title": "Ukungabi: a-...-i — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в теперішньому часі утворюється циркумфіксом: префікс a- перед підметовим узгодженням ngi- (разом angi-) і суфікс -i замість кінцевого -a.",
            "en": {
              "text": "Present-tense negation is formed with a circumfix: the prefix a- before the subject concord ngi- (together angi-) and the suffix -i replacing the final -a."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Angibhali.",
                "Я не пишу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Present): a-...-i — A2"
      },
      {
        "id": "negation-past-anga",
        "title": "Ukungabi Kwesikhathi Esidlule: a-...-anga — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення в минулому часі утворюється префіксом a- плюс суфіксом -anga, доданим до основи замість -a чи -ile.",
            "en": {
              "text": "Past-tense negation is formed with the prefix a- plus the suffix -anga, added to the stem instead of -a or -ile."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Angibhalanga.",
                "Я не написав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation (Past): a-...-anga — B1"
      },
      {
        "id": "potential-nga",
        "title": "Amandla Okwenza: -nga- — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається інфіксом -nga- ('могти'), вставленим у дієслівну форму, — окрема морфологічна стратегія від кхоської допоміжної конструкції -nako.",
            "en": {
              "text": "Ability or possibility is expressed with the infix -nga- ('can'), inserted into the verb form — a separate morphological strategy from Xhosa's -nako auxiliary construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngingabhala.",
                "Я міг би писати."
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
        "id": "narrative-sequence-e",
        "title": "Ukulandelana Kwezenzo: -e — B2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "У послідовності подій кожна наступна дія після першої часто вживається в наративній формі на -e, що позначає простий хронологічний зв'язок без окремого сполучника 'потім'.",
            "en": {
              "text": "In a sequence of events, each subsequent action after the first is often expressed in the narrative form ending in -e, marking a simple chronological link without a separate word for 'then'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Wavuka, wageza, wadla.",
                "He woke up, washed, (then) ate. (narrative sequence)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Narrative Sequence: -e — B2"
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
        "id": "noun-class-prefixes-1-2",
        "title": "Izigaba Zamabizo 1/2: umu-/aba- — A2",
        "emoji": "👤",
        "sections": [
          {
            "type": "table",
            "title": "Класи 1/2 (люди)",
            "rows": [
              [
                "людина",
                "umuntu"
              ],
              [
                "люди",
                "abantu"
              ]
            ],
            "en": {
              "title": "Classes 1/2 (people)"
            }
          }
        ],
        "titleEn": "Noun Classes 1/2: umu-/aba- (People) — A2"
      },
      {
        "id": "noun-class-prefixes-3-4",
        "title": "Izigaba Zamabizo 3/4: umu-/imi- — A2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "table",
            "title": "Класи 3/4 (рослини, предмети)",
            "rows": [
              [
                "дерево",
                "umuthi"
              ],
              [
                "дерева",
                "imithi"
              ]
            ],
            "en": {
              "title": "Classes 3/4 (plants/objects)"
            }
          }
        ],
        "titleEn": "Noun Classes 3/4: umu-/imi- — A2"
      },
      {
        "id": "noun-class-prefixes-9-10",
        "title": "Izigaba Zamabizo 9/10: in-/izin- — A2",
        "emoji": "🐄",
        "sections": [
          {
            "type": "table",
            "title": "Класи 9/10 (тварини)",
            "rows": [
              [
                "корова",
                "inkomo"
              ],
              [
                "корови",
                "izinkomo"
              ]
            ],
            "en": {
              "title": "Classes 9/10 (animals)"
            }
          }
        ],
        "titleEn": "Noun Classes 9/10: in-/izin- — A2"
      },
      {
        "id": "subject-concord-full-paradigm",
        "title": "Ukuvumelana Komenzi — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово, прикметник і присвійник узгоджуються з підметом через узгоджувальний префікс, що змінюється залежно від іменникового класу, — той самий принцип, що й у кхоса, але з власним набором алофонів (ngi- замість ndi- для 1 особи).",
            "en": {
              "text": "The verb, adjective, and possessive all agree with the subject through a concord prefix that changes depending on the noun class — the same principle as Xhosa, but with its own set of allophones (ngi- instead of ndi- for 1st person)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umuntu uyabhala. Abantu bayabhala.",
                "The person writes. The people write. (concord changes with class)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Concord Agreement — B1"
      },
      {
        "id": "object-concord",
        "title": "Ukuvumelana Kwento — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий додаток теж може бути позначений на дієслові окремим об'єктним узгоджувальним префіксом, вставленим безпосередньо перед основою.",
            "en": {
              "text": "The direct object can also be marked on the verb with a separate object concord prefix, inserted directly before the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngiyambona.",
                "Я бачу його/її. (об'єктний концорд -m-)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Concord — B2"
      },
      {
        "id": "possessive-concord",
        "title": "Ukwenza Kwaba Nakho — B1",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійна конструкція узгоджується з класом означуваного іменника через префікс плюс частку -a, а не через окреме присвійне слово.",
            "en": {
              "text": "The possessive construction agrees with the class of the possessed noun through a prefix plus the particle -a, rather than a separate possessive word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "incwadi yomuntu",
                "the person's book"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Concord — B1"
      },
      {
        "id": "adjective-concord",
        "title": "Ukuvumelana Kwesiphawulo — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником через власний, дещо відмінний від підметового, набір узгоджувальних префіксів.",
            "en": {
              "text": "Adjectives agree with the noun through their own set of concord prefixes, somewhat different from the subject concords."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umuntu omkhulu",
                "the big person"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Concord — B1"
      },
      {
        "id": "demonstratives-class-based",
        "title": "Izabizwana Zokukhomba — B2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені відстані (близько, помірно, далеко) і узгоджуються з класом іменника через власний набір форм.",
            "en": {
              "text": "Demonstratives have three degrees of distance (near, medium, far) and agree with the noun's class through their own set of forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo muntu (ця людина, близько)",
                "this person (near)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Class-Based Demonstratives — B2"
      },
      {
        "id": "locative-suffix-ini",
        "title": "Indawo: -ini — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок утворюється суфіксом -ini (з альтернацією початкового префікса), доданим до основи іменника для позначення 'у, на, до' місця.",
            "en": {
              "text": "The locative is formed with the suffix -ini (with alternation of the initial prefix), added to the noun stem to mark 'in, on, to' the place."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ekhaya",
                "at home (locative form of 'home')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative: -ini — B1"
      },
      {
        "id": "interrogatives",
        "title": "Imibuzo — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто?",
                "ubani?"
              ],
              [
                "що?",
                "yini?"
              ],
              [
                "де?",
                "kuphi?"
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
        "id": "reflexive-infix-zi",
        "title": "Okuzenzelayo: -zi- — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність виражається інфіксом -zi-, вставленим безпосередньо перед основою дієслова, незалежно від особи підмета, — той самий принцип, що й у кхоса.",
            "en": {
              "text": "Reflexivity is expressed with the infix -zi-, inserted directly before the verb stem, regardless of the subject's person — the same principle as Xhosa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngiyazibona.",
                "Я бачу себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: -zi- — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Izinombolo — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Кількісні числівники",
            "rows": [
              [
                "1",
                "-nye"
              ],
              [
                "2",
                "-bili"
              ],
              [
                "3",
                "-thathu"
              ],
              [
                "4",
                "-ne"
              ],
              [
                "5",
                "-hlanu"
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
        "id": "comparative-nga",
        "title": "Ukuqhathanisa: ngaphezu — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється описово: прикметник плюс ngaphezu kwa- ('понад'), а не окремим суфіксом на прикметнику, — той самий описовий принцип, що й у кхоса.",
            "en": {
              "text": "The comparative is formed periphrastically: the adjective plus ngaphezu kwa- ('above/more than'), rather than a dedicated suffix on the adjective — the same periphrastic principle as Xhosa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mkhulu ngaphezu kwakhe",
                "bigger than him"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: ngaphezu ('more than') — B1"
      },
      {
        "id": "verbal-extension-causative",
        "title": "Ukwengezwa: Imbangela -is- — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативне розширення -is-, вставлене перед кінцевим голосним основи, позначає, що підмет змушує когось виконати дію.",
            "en": {
              "text": "The causative extension -is-, inserted before the stem's final vowel, marks that the subject causes someone to perform the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bhalisa (примусити писати)",
                "to make (someone) write"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Causative -is- — B2"
      },
      {
        "id": "verbal-extension-passive",
        "title": "Ukwengezwa: Okwenziwayo -w- — B2",
        "emoji": "🔃",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивне розширення -w-, вставлене перед кінцевим голосним, змінює підмет речення на того, хто зазнає дії.",
            "en": {
              "text": "The passive extension -w-, inserted before the final vowel, changes the sentence's subject to the one undergoing the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "incwadi ibhalwa",
                "the book is being written"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Passive -w- — B2"
      },
      {
        "id": "verbal-extension-applicative",
        "title": "Ukwengezwa: Okusizayo -el- — B2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативне розширення -el- додає бенефіціара чи мету дії без окремого прийменника, вбудовуючи значення 'для/заради' у саме дієслово.",
            "en": {
              "text": "The applicative extension -el- adds a beneficiary or purpose to the action without a separate preposition, building the meaning 'for/on behalf of' into the verb itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bhalela (писати для когось)",
                "to write for (someone)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Extension: Applicative -el- — B2"
      },
      {
        "id": "word-order-svo",
        "title": "Ukuhlelwa Kwamagama: SVO — A2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), причому підметовий концорд робить окреме займенникове слово часто необов'язковим.",
            "en": {
              "text": "The basic word order is subject-verb-object (SVO), with the subject concord often making a separate pronoun word optional."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Umuntu ubona indlu.",
                "Людина бачить будинок."
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
        "id": "yes-no-question-intonation",
        "title": "Imibuzo Ngephimbo — A2",
        "emoji": "❔",
        "sections": [
          {
            "type": "intro",
            "text": "Загальне питання часто утворюється лише зміною інтонації речення, без зміни порядку слів чи додавання частки.",
            "en": {
              "text": "A yes/no question is often formed simply by changing the sentence's intonation, without changing word order or adding a particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Uyabhala? (з питальною інтонацією)",
                "Are you writing? (marked by rising intonation)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Questions via Intonation — A2"
      },
      {
        "id": "diminutive-suffix-ana",
        "title": "Okuncane: -ana — B1",
        "emoji": "🔎",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальне значення виражається суфіксом -ana, доданим до основи іменника, часто зі зміною початкового класового префікса.",
            "en": {
              "text": "The diminutive is expressed with the suffix -ana, added to the noun stem, often accompanied by a change in the initial class prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umntwana (мала дитина, з -ana)",
                "small child (with the -ana diminutive)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -ana — B1"
      },
      {
        "id": "copulative-construction",
        "title": "Isibopho Sobukhona — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово-зв'язка 'бути' у теперішньому часі часто виражається лише префіксом ng- перед іменником, без окремого дієслова.",
            "en": {
              "text": "The copula 'to be' in the present tense is often expressed simply with the prefix ng- before the noun, without a separate verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ngumuntu.",
                "Він/вона людина."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Copulative Construction — B1"
      },
      {
        "id": "conjunctions",
        "title": "Izihlanganisi — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і, та",
                "futhi"
              ],
              [
                "але",
                "kodwa"
              ],
              [
                "або",
                "noma"
              ],
              [
                "тому що",
                "ngoba"
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
        "id": "relative-clause-concord",
        "title": "Amagama Ahlobene — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні відносні речення позначаються відносним узгоджувальним префіксом, доданим до дієслова, замість окремого відносного займенника.",
            "en": {
              "text": "Relative clauses are marked with a relative concord prefix attached to the verb, instead of a separate relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "umuntu obhalayo",
                "the person who is writing (relative concord o-)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses via Concord — B2"
      },
      {
        "id": "infinitive-uku",
        "title": "Isenzo Esingaqondile: uku- — A2",
        "emoji": "♾️",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється префіксом uku-, доданим до основи дієслова, і граматично поводиться як іменник класу 15.",
            "en": {
              "text": "The infinitive is formed with the prefix uku-, added to the verb stem, and grammatically behaves as a class-15 noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ukubhala",
                "to write / the act of writing"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Infinitive: uku- — A2"
      },
      {
        "id": "vocative-address",
        "title": "Ukubizwa — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання позначається втратою початкового голосного класового префікса іменника, а не окремим закінченням.",
            "en": {
              "text": "Address is marked by dropping the noun's initial class-prefix vowel, rather than a separate ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mntwana! (замість umntwana)",
                "Child! (address form, dropping the initial vowel)"
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
        "id": "stem-tone-pitch",
        "title": "Iphimbo Lesenzo — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Зулу, як і кхоса, є тональною мовою, де висотний тон складу розрізняє значення однаково написаних слів, хоча тон зазвичай не позначається на письмі.",
            "en": {
              "text": "Zulu, like Xhosa, is a tonal language where the pitch tone of a syllable distinguishes the meaning of otherwise identically spelled words, although tone is usually not marked in writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ukubona (бачити) — тон розрізняє відтінки значення",
                "to see — tone distinguishes shades of meaning"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tone as a Lexical Distinguisher — B2"
      },
      {
        "id": "associative-particle-na",
        "title": "Ukuhlanganisa: na- — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Супровід ('разом із') виражається префіксом na-, доданим безпосередньо до іменника, а не окремим прийменниковим словом.",
            "en": {
              "text": "Accompaniment ('together with') is expressed with the prefix na-, added directly to the noun, rather than a separate preposition word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nomuntu (з людиною)",
                "with a person (na- + umuntu, fused)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Accompaniment: na- ('with') — A2"
      },
      {
        "id": "zulu-kingdom-monarchy-today",
        "title": "Umbuso WamaZulu Namuhla — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Зулуська монархія, заснована Чакою, збереглася донині як культурна й церемоніальна інституція в межах Південної Африки, з королем як символом єдності народу зулу.",
            "en": {
              "text": "The Zulu monarchy, founded by Shaka, has survived to this day as a cultural and ceremonial institution within South Africa, with the king serving as a symbol of Zulu national unity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "iSilo SamaZulu",
                "the Zulu monarch's title ('the Lion of the Zulus')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Zulu Monarchy Today — B2"
      },
      {
        "id": "umhlanga-reed-dance",
        "title": "Umhlanga — B1",
        "emoji": "🎋",
        "sections": [
          {
            "type": "intro",
            "text": "Умхланга — щорічний фестиваль очеретяного танцю, у якому тисячі незаміжніх дівчат несуть очерет королю в церемонії, що вшановує цнотливість і культурну спадщину.",
            "en": {
              "text": "Umhlanga is the annual Reed Dance festival, in which thousands of unmarried young women carry reeds to the king in a ceremony honoring chastity and cultural heritage."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "uMkhosi woMhlanga",
                "the Reed Dance ceremony"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Umhlanga: the Reed Dance — B1"
      },
      {
        "id": "zulu-stick-fighting",
        "title": "Ukungcweka — B2",
        "emoji": "🥢",
        "sections": [
          {
            "type": "intro",
            "text": "Традиційний зулуський бій на палицях (донга) — форма чоловічого спортивного змагання й самовираження, історично пов'язана з військовою підготовкою воїнів Чаки.",
            "en": {
              "text": "Traditional Zulu stick fighting (donga) is a form of male athletic competition and self-expression, historically linked to the military training of Shaka's warriors."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "induku (бойова палиця)",
                "induku (the fighting stick)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Zulu Stick Fighting — B2"
      },
      {
        "id": "ladysmith-black-mambazo",
        "title": "Ladysmith Black Mambazo — B1",
        "emoji": "🎤",
        "sections": [
          {
            "type": "intro",
            "text": "Ladysmith Black Mambazo — знаменитий вокальний гурт, що виконує ісікатамія (a capella хоровий стиль зулу), здобув світове визнання через співпрацю з Полом Саймоном в альбомі 'Graceland'.",
            "en": {
              "text": "Ladysmith Black Mambazo is a renowned vocal group performing isicathamiya (Zulu a capella choral style), which gained worldwide recognition through the collaboration with Paul Simon on the album 'Graceland'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isicathamiya",
                "isicathamiya (the Zulu a capella choral style)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ladysmith Black Mambazo and Isicathamiya — B1"
      },
      {
        "id": "zulu-beadwork-symbolism",
        "title": "Ubuhlalu — B1",
        "emoji": "📿",
        "sections": [
          {
            "type": "intro",
            "text": "Зулуське бісерне мереживо (убухлалу) — своєрідна символічна мова кольорів, за допомогою якої дівчата передають закодовані повідомлення про стосунки й почуття своїм залицяльникам.",
            "en": {
              "text": "Zulu beadwork (ubuhlalu) is a kind of symbolic color language, through which young women convey coded messages about relationships and feelings to their suitors."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "incwadi yobuhlalu ('лист із бісеру')",
                "a 'beadwork letter' (coded message in colored beads)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ubuhlalu: the Symbolic Language of Beadwork — B1"
      },
      {
        "id": "isibongo-shaka-praise",
        "title": "Izibongo ZikaShaka — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Ізібонго Чаки — одні з найвідоміших зразків хвалебної поезії нгуні, оспівують військові подвиги й засновницьку роль короля в утворенні зулуської нації.",
            "en": {
              "text": "The izibongo (praise poems) of Shaka are among the most famous examples of Nguni praise poetry, celebrating the king's military feats and founding role in forming the Zulu nation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "izibongo zamakhosi",
                "royal praise poems"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Izibongo: Shaka's Praise Poetry — B2"
      },
      {
        "id": "isicathamiya-mbube-music",
        "title": "Ubumbube — B2",
        "emoji": "🦁",
        "sections": [
          {
            "type": "intro",
            "text": "Пісня 'Mbube' Соломона Лінди (1939) стала джерелом всесвітньо відомого мотиву 'The Lion Sleeps Tonight' — приклад глибокого впливу зулуської музичної традиції на світову популярну культуру.",
            "en": {
              "text": "Solomon Linda's 1939 song 'Mbube' became the source of the world-famous melody 'The Lion Sleeps Tonight' — an example of Zulu musical tradition's deep influence on global popular culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mbube (лев)",
                "Mbube ('lion', the original 1939 song title)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mbube: Solomon Linda's Global Melody — B2"
      },
      {
        "id": "battle-of-isandlwana",
        "title": "Impi YaseSandlwana — B2",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Битва при Ісандлвані (1879) — знаменита перемога зулуських воїнів над британською армією під час англо-зулуської війни, символ військової майстерності зулуської нації.",
            "en": {
              "text": "The Battle of Isandlwana (1879) was a famous victory of Zulu warriors over the British army during the Anglo-Zulu War, a symbol of the Zulu nation's military prowess."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Impi yaseSandlwana",
                "the Battle of Isandlwana"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Battle of Isandlwana — B2"
      },
      {
        "id": "kwazulu-natal-geography",
        "title": "IKwaZulu-Natal — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Квазулу-Натал — провінція Південної Африки, історична батьківщина зулуського народу, з такими містами, як Дурбан і Пітермаріцбург.",
            "en": {
              "text": "KwaZulu-Natal is a South African province, the historical homeland of the Zulu people, with cities such as Durban and Pietermaritzburg."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "eThekwini (Дурбан, назва зулу)",
                "eThekwini (the Zulu name for Durban)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "KwaZulu-Natal Geography — B1"
      },
      {
        "id": "lobolo-bride-price-zulu",
        "title": "Ilobolo — B1",
        "emoji": "🐄",
        "sections": [
          {
            "type": "intro",
            "text": "Ілоболо — традиційний шлюбний викуп, який родина нареченого сплачує родині нареченої, історично худобою, — досі важлива соціальна практика в зулуській культурі, паралельна кхоському лоболо.",
            "en": {
              "text": "Ilobolo is the traditional bridewealth that the groom's family pays to the bride's family, historically in cattle — still an important social practice in Zulu culture, parallel to Xhosa's lobolo."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ilobolo",
                "the bridewealth payment (ilobolo)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ilobolo: Bridewealth — B1"
      },
      {
        "id": "colors",
        "title": "Imibala — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "bomvu"
              ],
              [
                "синій",
                "luhlaza okwesibhakabhaka"
              ],
              [
                "жовтий",
                "phuzi"
              ],
              [
                "чорний",
                "mnyama"
              ],
              [
                "білий",
                "mhlophe"
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
        "title": "Izinsuku Zeviki — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "uMsombuluko"
              ],
              [
                "вівторок",
                "uLwesibili"
              ],
              [
                "середа",
                "uLwesithathu"
              ],
              [
                "четвер",
                "uLwesine"
              ],
              [
                "п'ятниця",
                "uLwesihlanu"
              ],
              [
                "субота",
                "uMgqibelo"
              ],
              [
                "неділя",
                "iSonto"
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
        "title": "Umndeni — A1",
        "emoji": "👨‍👩‍👧",
        "sections": [
          {
            "type": "table",
            "title": "Родинні терміни",
            "rows": [
              [
                "батько",
                "ubaba"
              ],
              [
                "мати",
                "umama"
              ],
              [
                "дитина",
                "umntwana"
              ],
              [
                "брат/сестра",
                "umfowethu/udadewethu"
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
        "title": "Ukubingelela — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Привітання",
            "rows": [
              [
                "Привіт (до одного)",
                "Sawubona"
              ],
              [
                "Привіт (до кількох)",
                "Sanibonani"
              ],
              [
                "Дякую",
                "Ngiyabonga"
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
        "title": "Isimo Sezulu — A2",
        "emoji": "🌦️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "ilanga"
              ],
              [
                "дощ",
                "imvula"
              ],
              [
                "вітер",
                "umoya"
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
        "title": "Izitho Zomzimba — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "ikhanda"
              ],
              [
                "рука",
                "isandla"
              ],
              [
                "нога",
                "unyawo"
              ],
              [
                "око",
                "iso"
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
        "title": "Ukudla — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "каша з кукурудзи",
                "uphuthu"
              ],
              [
                "м'ясо",
                "inyama"
              ],
              [
                "хліб",
                "isinkwa"
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
        "title": "Izilwane — A2",
        "emoji": "🦁",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "лев",
                "ibhubesi"
              ],
              [
                "корова",
                "inkomo"
              ],
              [
                "собака",
                "inja"
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
        "title": "Iziqondiso — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "inyakatho"
              ],
              [
                "південь",
                "ningizimu"
              ],
              [
                "схід",
                "impumalanga"
              ],
              [
                "захід",
                "intshonalanga"
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
        "id": "amasi-cuisine",
        "title": "Amasi — A2",
        "emoji": "🥛",
        "sections": [
          {
            "type": "intro",
            "text": "Амаси — традиційне кисломолочне зулуське блюдо, отримане природним зброджуванням незбираного молока, часто вживане з путху (кукурудзяною кашею).",
            "en": {
              "text": "Amasi is a traditional fermented Zulu dairy dish, produced by natural souring of unpasteurized milk, often eaten together with uphuthu (maize porridge)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "amasi noPhuthu",
                "amasi with uphuthu"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amasi: Fermented Milk — A2"
      },
      {
        "id": "impi-military-regiments",
        "title": "Amabutho — B2",
        "emoji": "🛡️",
        "sections": [
          {
            "type": "intro",
            "text": "Система амабуто — вікові полки-регіменти, започатковані Чакою для військової й соціальної організації зулуського суспільства, які визначали статус чоловіка за віком та досягненнями, а не лише спорідненістю.",
            "en": {
              "text": "The amabutho system was a set of age-grade regiments established by Shaka for military and social organization of Zulu society, determining a man's status by age and achievement rather than kinship alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ibutho",
                "an amabutho regiment (singular)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Amabutho: the Age-Regiment System — B2"
      },
      {
        "id": "durban-curry-indian-influence",
        "title": "IThekwini Nekhali — B2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "intro",
            "text": "Дурбан, найбільше портове місто Квазулу-Натал, має найбільшу індійську діаспору за межами Індії, чий кулінарний вплив (роти-баньяні, каррі) переплівся із зулуською міською культурою.",
            "en": {
              "text": "Durban, the largest port city in KwaZulu-Natal, has the largest Indian diaspora outside India, whose culinary influence (roti bunny chow, curry) has intertwined with Zulu urban culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bunny chow",
                "bunny chow (a Durban dish blending Indian and Zulu urban food culture)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Durban's Indian-Influenced Cuisine — B2"
      },
      {
        "id": "sangoma-traditional-healer",
        "title": "Isangoma — B2",
        "emoji": "🌿",
        "sections": [
          {
            "type": "intro",
            "text": "Ісангома — традиційна цілителька/провидиця, яка спілкується з предками через кинуті кістки й транс, відрізняється від інянги, спеціаліста з лікувальних трав.",
            "en": {
              "text": "The isangoma is a traditional diviner/healer who communicates with ancestors through thrown bones and trance, distinct from the inyanga, a specialist in medicinal herbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "isangoma nenyanga",
                "the diviner and the herbalist (two distinct traditional healer roles)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Isangoma: the Traditional Diviner — B2"
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
        "id": "irregular-verb-ukuza",
        "title": "Isenzo Esingavamile: -za ('to come') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово -za ('приходити') утворює наказовий спосіб від нерегулярної форми woza замість очікуваної *za, — те саме явище, що й у спорідненій кхоса, хоча коренева форма трохи відрізняється.",
            "en": {
              "text": "The verb -za ('to come') forms its imperative from the irregular form woza instead of the expected *za — the same phenomenon as in the closely related Xhosa, though the root form differs slightly."
            }
          },
          {
            "type": "table",
            "title": "Супплетивна форма",
            "rows": [
              [
                "-za (приходити) → Woza! (не *Za!)",
                "come → Come! (suppletive imperative, not the expected regular form)"
              ]
            ],
            "en": {
              "title": "Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: -za ('to come') — B1"
      },
      {
        "id": "irregular-noun-class-umuntu",
        "title": "Ukuziphatha Okungavamile Kwesigaba: umuntu — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник umuntu ('людина', клас 1) утворює множину abantu (клас 2) з незвичною зміною основи -ntu → -antu, замінюючи перший склад, а не просто префікс, — та сама нерегулярність, що й у кхоса.",
            "en": {
              "text": "The noun umuntu ('person', class 1) forms its plural abantu (class 2) with an unusual stem change -ntu → -antu, altering the first syllable rather than just the prefix — the same irregularity as in Xhosa."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна зміна основи",
            "rows": [
              [
                "umuntu → abantu (не *abamuntu)",
                "person → people (irregular stem change, not the expected simple prefix swap)"
              ]
            ],
            "en": {
              "title": "Irregular Stem Change"
            }
          }
        ],
        "titleEn": "Irregular Class Behavior: umuntu ('person') — B2"
      },
      {
        "id": "irregular-comparative-hle",
        "title": "Ukuqhathaniswa Okungavamile: -hle — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник -hle ('гарний') уживає в порівняльній конструкції особливу скорочену форму, — нерегулярний виняток серед прикметників, спільний із кхоською моделлю.",
            "en": {
              "text": "The adjective -hle ('beautiful') uses a special shortened form in the comparative construction — an irregular exception among adjectives, shared with the Xhosa pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна скорочена форма",
            "rows": [
              [
                "-hle → ngcono (нерегулярна форма, не *hle ngaphezu)",
                "beautiful → better (irregular suppletive form, not the expected periphrastic comparative)"
              ]
            ],
            "en": {
              "title": "Irregular Suppletive Form"
            }
          }
        ],
        "titleEn": "Irregular Comparative: -hle ('beautiful') — B1"
      }
    ]
  }
];
