// Vymova — data/grammar-data/grammar_ne.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NE: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "व्यक्तिवाचक सर्वनाम — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У непальській, як і в гінді, \"तपाईं\" (tapāī) — ввічлива форма звертання, а множину зазвичай утворюють суфіксом \"-हरू\" (-harū).",
            "en": {
              "text": "In Nepali, as in Hindi, \"तपाईं\" (tapāī) is a polite form of address, and the plural is usually formed with the suffix \"-हरू\" (-harū)."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "म (ma)"
              ],
              [
                "ти (зв. / ввічл.)",
                "तिमी / तपाईं (timi / tapāī)"
              ],
              [
                "він / вона",
                "ऊ / उनी (u / uni)"
              ],
              [
                "ми",
                "हामी (hāmī)"
              ],
              [
                "ви",
                "तपाईंहरू (tapāī-harū)"
              ],
              [
                "вони",
                "उनीहरू (uni-harū)"
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
        "id": "three-tier-honorific",
        "title": "तीन तहको आदरसूचक — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Непальська має трирівневу систему поваги для 'ти/ви' — तँ (tã, дуже інтимне чи зневажливе), तिमी (timi, неформальне), तपाईं (tapāī, формальне) — тонше розрізнення, ніж дворівнева система гінді.",
            "en": {
              "text": "Nepali has a three-tier politeness system for 'you' — तँ (tã, very intimate or dismissive), तिमी (timi, informal), तपाईं (tapāī, formal) — a finer distinction than Hindi's two-tier system."
            }
          },
          {
            "type": "table",
            "title": "Три рівні",
            "rows": [
              [
                "तँ — дуже інтимне/зневажливе",
                "до дуже близьких чи, навпаки, образливо"
              ],
              [
                "तिमी — неформальне",
                "до друзів, молодших"
              ],
              [
                "तपाईं — формальне",
                "до старших, незнайомих"
              ]
            ],
            "en": {
              "title": "Three Tiers"
            }
          }
        ],
        "titleEn": "The Three-Tier Honorific System — A2"
      },
      {
        "id": "no-gender-verb-agreement",
        "title": "क्रियामा लिङ्गभेद हुँदैन — A2",
        "emoji": "🔒",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді чи маратхі, де дієслово узгоджується з родом підмета чи додатка, непальське дієслово взагалі не розрізняє рід — узгоджується лише з особою, числом і рівнем поваги.",
            "en": {
              "text": "Unlike Hindi or Marathi, where the verb agrees with the subject's or object's gender, the Nepali verb doesn't distinguish gender at all — it agrees only with person, number, and politeness level."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ऊ जान्छ। / उनी जान्छिन्। (та сама структура, не залежить від роду підмета так, як у гінді)",
                "він/вона йде — рід не впливає на форму дієслова так само"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Gender Agreement on the Verb — A2"
      },
      {
        "id": "vikram-samvat",
        "title": "विक्रम संवत् — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Непал офіційно використовує власний календар Вікрам Самват, який випереджає григоріанський приблизно на 56-57 років, — дати й лексика часу в побутовій мові часто прив'язані саме до цього календаря.",
            "en": {
              "text": "Nepal officially uses its own Vikram Samvat calendar, which runs about 56-57 years ahead of the Gregorian calendar — dates and time vocabulary in everyday speech are often tied specifically to this calendar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "आज विक्रम संवत् अनुसार कति साल हो?",
                "Який зараз рік за календарем Вікрам Самват?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vikram Samvat Calendar — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "निषेध र प्रश्न — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення дієслова утворюється суфіксом -दैन (-daina) чи допоміжним छैन (chaina, 'немає'); питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Verb negation is formed with the suffix -दैन (-daina) or the auxiliary छैन (chaina, 'there isn't'); yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मलाई थाहा छैन।",
                "Я не знаю."
              ],
              [
                "तिमी आउँछौ?",
                "Ти прийдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation and Questions — A1"
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
        "id": "present-general-cha",
        "title": "साधारण वर्तमान: छ — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Загальний теперішній час утворюється дієприкметником теперішнього часу плюс допоміжне छ ('є'), узгоджене з особою, числом і рівнем поваги.",
            "en": {
              "text": "The general present tense is formed with the present participle plus the auxiliary छ ('is'), agreeing with person, number, and politeness level."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म जान्छु।",
                "Я йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "General Present: छ — A1"
      },
      {
        "id": "present-continuous-dai-cha",
        "title": "जारी वर्तमान: -दै छ — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення передається дієприслівником на -दै плюс допоміжне छ.",
            "en": {
              "text": "An action in progress at the moment of speaking is expressed with the converb in -दै plus the auxiliary छ."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म जाँदै छु।",
                "Я саме йду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -दै छ — A2"
      },
      {
        "id": "past-simple-yo",
        "title": "सामान्य भूतकाल: -यो — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час утворюється суфіксом -यो/-एँ, доданим до основи дієслова, узгодженим з особою й числом підмета.",
            "en": {
              "text": "The simple past is formed with the suffix -यो/-एँ added to the verb stem, agreeing with the subject's person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म गएँ।",
                "Я пішов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past: -यो — A2"
      },
      {
        "id": "past-continuous-dai-thiyo",
        "title": "जारी भूतकाल: -दै थियो — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається дієприслівником на -दै плюс допоміжне थियो ('був') у минулому часі.",
            "en": {
              "text": "An ongoing past action is expressed with the converb in -दै plus the past auxiliary थियो ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म जाँदै थिएँ।",
                "Я саме йшов (тоді)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Continuous: -दै थियो — B1"
      },
      {
        "id": "future-tense-nechha",
        "title": "भविष्यत् काल: -नेछ — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетичним суфіксом -नेछ, доданим до основи дієслова, узгодженим з особою й числом.",
            "en": {
              "text": "The future tense is formed with the synthetic suffix -नेछ added to the verb stem, agreeing with person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म जानेछु।",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -नेछ — A2"
      },
      {
        "id": "imperative-mood",
        "title": "आज्ञार्थक — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окрему форму для кожного з трьох рівнів поваги — від різкого наказу до дуже ввічливого прохання.",
            "en": {
              "text": "The imperative has a separate form for each of the three politeness levels — from a blunt command to a very polite request."
            }
          },
          {
            "type": "table",
            "title": "Три рівні наказу",
            "rows": [
              [
                "जा! (tã) / जाऊ! (timi) / जानुहोस्! (tapāī)",
                "три ступені ввічливості наказу"
              ]
            ],
            "en": {
              "title": "Three Imperative Levels"
            }
          }
        ],
        "titleEn": "Imperative: Three Politeness Levels — A2"
      },
      {
        "id": "perfect-tense-eko-cha",
        "title": "पूर्ण वर्तमान: -एको छ — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу на -एको плюс допоміжне छ, наголошуючи на теперішній актуальності результату.",
            "en": {
              "text": "The perfect is formed with the past participle in -एको plus the auxiliary छ, emphasizing the present relevance of the result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मैले खाना खाएको छु।",
                "Я вже поїв (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect: -एको छ — B1"
      },
      {
        "id": "pluperfect-eko-thiyo",
        "title": "पूर्ण भूतकाल: -एको थियो — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється тим самим дієприкметником на -एको плюс допоміжне थियो в минулому часі.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the same -एको participle plus the past auxiliary थियो."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मैले पहिले नै खाना खाएको थिएँ।",
                "Я вже був поїв до того."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect: -एको थियो — B2"
      },
      {
        "id": "habitual-past-thyo",
        "title": "अभ्यासगत भूतकाल: -न्थ्यो — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає окрема форма на -न्थ्यो, узгоджена з підметом, — 'бувало, робив' — відмінна від простої минулої дії на -यो.",
            "en": {
              "text": "A habitual past action is expressed with a dedicated form in -न्थ्यो, agreeing with the subject — 'used to do' — distinct from the simple past action in -यो."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म सानो हुँदा फुटबल खेल्थेँ।",
                "У дитинстві я, бувало, грав у футбол."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual Past: -न्थ्यो — B1"
      },
      {
        "id": "conditional-mood-bhaye",
        "title": "यदि...भए — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником यदि ('якщо'), а дієслово підрядного речення отримує суфікс -भए, узгоджений з часом умови.",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction यदि ('if'), and the subordinate clause's verb takes the suffix -भए, agreeing with the time of the condition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "यदि पानी पर्‍यो भने, म घरमा बस्छु।",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: यदि...भए — B1"
      },
      {
        "id": "subjunctive-optative-os",
        "title": "आदेशात्मक/शुभकामना: -ओस् — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптативний спосіб на -ओस् виражає побажання чи благословення щодо третьої особи — 'хай станеться', уживаний у формальних побажаннях.",
            "en": {
              "text": "The optative mood in -ओस् expresses a wish or blessing toward a third person — 'may it happen', used in formal well-wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तपाईंलाई सबै राम्रो होस्।",
                "Хай у вас усе буде добре."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative: -ओस् — B2"
      },
      {
        "id": "potential-mood-sakne",
        "title": "सक्नु: क्षमता — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним सक्नु ('могти'), доданим після дієприслівника.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary सक्नु ('to be able'), added after the converb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म नेपाली बोल्न सक्छु।",
                "Я можу говорити непальською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: सक्नु — B1"
      },
      {
        "id": "ergative-marker-le-in-past",
        "title": "कर्ता कारक: -ले (भूतकालमा) — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет обов'язково отримує ергативну частку -ले, тоді як у теперішньому й майбутньому часах цієї частки зазвичай немає, — розщеплена ергативність, властива для непальської.",
            "en": {
              "text": "In the transitive past tense, the subject obligatorily takes the ergative particle -ले, while in the present and future this particle is usually absent — split ergativity, typical of Nepali."
            }
          },
          {
            "type": "table",
            "title": "Присутність -ले за часом",
            "rows": [
              [
                "म खाना खान्छु। (теп., без -ले)",
                "मैले खाना खाएँ। (мин. перех., з -ले)"
              ]
            ],
            "en": {
              "title": "-ले by Tense"
            }
          }
        ],
        "titleEn": "-ले: The Ergative Particle — B1"
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
        "id": "postposition-lai-dative-accusative",
        "title": "लाई: सम्प्रदान-कर्म कारक — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка लाई одночасно виконує роль давального й (одушевленого) знахідного відмінка — 'кому' й 'кого' — залежно від контексту дієслова.",
            "en": {
              "text": "The particle लाई simultaneously serves as both dative and (animate) accusative — 'to whom' and 'whom' — depending on the verb's context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मैले उसलाई देखेँ।",
                "Я побачив його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "लाई: Dative/Accusative — A2"
      },
      {
        "id": "postposition-maa-locative",
        "title": "मा: अधिकरण कारक — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Місцевий відмінок передається часткою मा ('у, на, при'), доданою після іменника.",
            "en": {
              "text": "The locative is conveyed with the particle मा ('in, at, on'), added after the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "घरमा",
                "вдома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "मा: Locative — A2"
      },
      {
        "id": "postposition-baata-ablative",
        "title": "बाट: अपादान कारक — A2",
        "emoji": "↩️",
        "sections": [
          {
            "type": "intro",
            "text": "Відкладний відмінок передається часткою बाट ('з, від'), що позначає джерело чи вихідну точку руху.",
            "en": {
              "text": "The ablative is conveyed with the particle बाट ('from'), marking the source or starting point of movement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "काठमाडौंबाट",
                "з Катманду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "बाट: Ablative — A2"
      },
      {
        "id": "plural-suffix-haru-depth",
        "title": "-हरू: बहुवचन — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється суфіксом -हरू, доданим і до іменників, і до займенників, — той самий універсальний суфікс для обох частин мови.",
            "en": {
              "text": "The plural is formed with the suffix -हरू, added to both nouns and pronouns — the same universal suffix for both word classes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "किताब → किताबहरू",
                "книга → книги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-हरू: Plural Suffix — A1"
      },
      {
        "id": "classifier-jana-people",
        "title": "जना: व्यक्ति गणना — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Лічба людей вимагає особливого класифікатора जना, відмінного від лічби предметів чи тварин, — класифікаторна риса саме для осіб.",
            "en": {
              "text": "Counting people requires the special classifier जना, distinct from counting objects or animals — a classifier feature specifically for persons."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तीन जना मान्छे (три людини)",
                "класифікатор для людей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "जना: Person Classifier — A2"
      },
      {
        "id": "demonstratives-yo-tyo",
        "title": "यो, त्यो: संकेतवाचक — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне यो ('цей') позначає близький предмет, त्यो ('той') — далекий; обидва стоять перед іменником.",
            "en": {
              "text": "The demonstrative यो ('this') marks a near item, त्यो ('that') a far one; both stand before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "यो किताब",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: यो, त्यो — A1"
      },
      {
        "id": "question-words",
        "title": "प्रश्नवाचक शब्द: के, को, कहाँ — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова के (що), को (хто), कहाँ (де), कहिले (коли) зазвичай стоять на тому самому місці в реченні, де було б слово, яке вони заміняють.",
            "en": {
              "text": "The question words के (what), को (who), कहाँ (where), कहिले (when) normally stand in the same sentence position the replaced word would occupy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तिमी कहाँ जान्छौ?",
                "Куди ти йдеш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "comparison-bhanda",
        "title": "तुलना: भन्दा — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється прикметником плюс भन्दा ('ніж') після предмета порівняння — без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with the adjective plus भन्दा ('than') after the compared item — with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ऊ मभन्दा अग्लो छ।",
                "Він вищий за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with भन्दा — A2"
      },
      {
        "id": "superlative-sabaibhanda",
        "title": "सर्वोत्कृष्टता: सबैभन्दा — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово सबैभन्दा ('з усіх найбільше') перед прикметником.",
            "en": {
              "text": "The superlative adds the word सबैभन्दा ('most of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ऊ सबैभन्दा अग्लो छ।",
                "Він найвищий."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with सबैभन्दा — B1"
      },
      {
        "id": "numerals-cardinal",
        "title": "आधारभूत अंक — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні непальські корені, здебільшого нерегулярні для чисел від 1 до 100, — їх слід запам'ятовувати як окремі слова.",
            "en": {
              "text": "Cardinal numbers have their own Nepali roots, mostly irregular from 1 to 100 — they must be memorized as individual words."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "एक, दुई, तीन",
                "один, два, три"
              ]
            ],
            "en": {
              "title": "Numbers"
            }
          }
        ],
        "titleEn": "Cardinal Numbers — A1"
      },
      {
        "id": "numerals-ordinal",
        "title": "क्रमवाचक अंक — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються суфіксом -औं, доданим до кількісного числівника.",
            "en": {
              "text": "Ordinal numbers are formed with the suffix -औं added to the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तेस्रो",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers: -औं — A2"
      },
      {
        "id": "relative-clause-jo-jun",
        "title": "सम्बन्धवाचक सर्वनाम: जो, जुन — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносний займенник जो (для осіб) чи जुन (для речей) уводить підрядне речення й зазвичай супроводжується вказівним त्यो у головному реченні.",
            "en": {
              "text": "The relative pronoun जो (for people) or जुन (for things) introduces a relative clause and is usually paired with the demonstrative त्यो in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "जो मान्छे आयो, त्यो मेरो साथी हो।",
                "Людина, яка прийшла, — мій друг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns: जो, जुन — B1"
      },
      {
        "id": "possessive-ko",
        "title": "को: सम्बन्ध कारक — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається часткою को/की/का, узгодженою за родом і числом предмета володіння, а не власника.",
            "en": {
              "text": "Possession is expressed with the particle को/की/का, agreeing in gender and number with the possessed item, not the possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "रामको किताब",
                "книга Рама"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "को: Possessive Particle — A1"
      },
      {
        "id": "word-order-sov",
        "title": "वाक्य संरचना: SOV — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-додаток-присудок, з дієсловом завжди в самому кінці речення.",
            "en": {
              "text": "The basic word order is subject-object-verb, with the verb always at the very end of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म भात खान्छु।",
                "Я їм рис (я-рис-їм)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SOV — A1"
      },
      {
        "id": "adjective-invariant",
        "title": "विशेषण अपरिवर्तनशील — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від гінді, більшість непальських прикметників не змінюється за родом чи числом іменника, — одна форма для всіх контекстів.",
            "en": {
              "text": "Unlike Hindi, most Nepali adjectives don't change for the noun's gender or number — one form for all contexts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "राम्रो केटा / राम्रो केटी (та сама форма прикметника для обох родів)",
                "хороший хлопчик / хороша дівчинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Adjectives — A2"
      },
      {
        "id": "vocative-forms",
        "title": "सम्बोधन — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає родинний термін чи ввічливий титул замість імені, з частками, що узгоджуються з рівнем поваги.",
            "en": {
              "text": "Direct address often uses a kinship term or polite title instead of a name, with particles agreeing with the level of politeness."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "दाइ!",
                "Старший брате! (звертання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative Forms — B1"
      },
      {
        "id": "diminutive-suffixes",
        "title": "लघुत्वबोधक प्रत्यय — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливий суфікс -ओ/-नी, доданий до кореня, надає слову ласкавого чи зменшеного відтінку.",
            "en": {
              "text": "The diminutive suffix -ओ/-नी, added to a root, gives the word an affectionate or diminished shade."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "सानो केटाकेटी",
                "манюсінька дитина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive Suffixes — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "संयुक्त शब्द — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто за санскритськими моделями словоскладання, успадкованими через літературну мову.",
            "en": {
              "text": "Compound words join two roots into one unit, often following Sanskrit compounding models inherited through the literary language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "पुस्तकालय (бібліотека, буквально 'книга-приміщення')",
                "приклад складного слова"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Word Formation — B2"
      },
      {
        "id": "kinship-terms-elaborate",
        "title": "नातावाचक शब्द — B1",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Розлога система термінів спорідненості розрізняє родичів за стороною сім'ї (материнська/батьківська) й відносним віком — окремі слова для старшого й молодшого брата.",
            "en": {
              "text": "An elaborate kinship-term system distinguishes relatives by side of family (maternal/paternal) and relative age — separate words for older and younger brother."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "दाइ (старший брат) vs भाइ (молодший брат)",
                "розрізнення за відносним віком"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Elaborate Kinship Terminology — B1"
      },
      {
        "id": "instrumental-comitative-le-sanga",
        "title": "-ले (साधन) र सँग (सामीप्य) — B1",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -ले, що й ергативний маркер підмета, поза дієслівним минулим часом позначає ще й знаряддя дії, тоді як सँग виражає супровід ('разом з').",
            "en": {
              "text": "The same suffix -ले used as the ergative subject marker, outside the past-tense verb context, also marks the instrument of an action, while सँग expresses accompaniment ('together with')."
            }
          },
          {
            "type": "table",
            "title": "Дві функції -ले",
            "rows": [
              [
                "कलमले लेख्नु (писати ручкою, знаряддя)",
                "instrumental"
              ],
              [
                "साथीसँग जानु (йти з другом, супровід)",
                "comitative"
              ]
            ],
            "en": {
              "title": "Two Functions of -ले"
            }
          }
        ],
        "titleEn": "Instrumental -ले vs. Comitative सँग — B1"
      },
      {
        "id": "existential-cha",
        "title": "अस्तित्व: छ — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово छ виражає і наявність предмета, і володіння ним — одне слово для обох значень, узгоджене з особою й числом.",
            "en": {
              "text": "The verb छ expresses both the presence of something and possession of it — one word for both meanings, agreeing with person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मसँग किताब छ।",
                "У мене є книга."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "छ: Existence and Possession — A1"
      },
      {
        "id": "negative-existential-chaina",
        "title": "अस्तित्व निषेध: छैन — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечна форма छैन протистоїть ствердному छ, позначаючи відсутність предмета чи володіння.",
            "en": {
              "text": "The negative form छैन contrasts with affirmative छ, marking the absence of something or a lack of possession."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मसँग पैसा छैन।",
                "У мене немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "छैन: Negative Existence — A1"
      },
      {
        "id": "copula-ho-vs-cha",
        "title": "हो र छ: दुई क्रिया — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "हो виражає постійну тотожність чи категорію ('X — це Y'), тоді як छ позначає тимчасовий стан чи місцезнаходження, — два різні дієслова-зв'язки для двох різних значень.",
            "en": {
              "text": "हो expresses permanent identity or category ('X is Y'), while छ marks a temporary state or location — two different copulas for two different meanings."
            }
          },
          {
            "type": "table",
            "title": "हो проти छ",
            "rows": [
              [
                "ऊ डाक्टर हो। (постійна тотожність)",
                "Він лікар."
              ],
              [
                "ऊ बिरामी छ। (тимчасовий стан)",
                "Він хворий."
              ]
            ],
            "en": {
              "title": "हो vs. छ"
            }
          }
        ],
        "titleEn": "हो vs. छ: Two Copulas — B1"
      },
      {
        "id": "reflexive-pronoun-aafu",
        "title": "आफू: आत्मवाचक सर्वनाम — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник आफू ('сам') незалежний від особи й числа підмета й підкреслює, що дія стосується самого підмета.",
            "en": {
              "text": "The reflexive pronoun आफू ('oneself') is independent of the subject's person and number and emphasizes that the action concerns the subject itself."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "उसले आफूलाई देख्यो।",
                "Він побачив самого себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: आफू — A2"
      },
      {
        "id": "coordinating-conjunctions",
        "title": "समुच्चयबोधक: र, वा, तर — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники र ('і'), वा ('або'), तर ('але') з'єднують слова й речення так само, як в українській, не впливаючи на порядок слів навколо себе.",
            "en": {
              "text": "Coordinating conjunctions र ('and'), वा ('or'), तर ('but') connect words and clauses just as in Ukrainian, without affecting the word order around them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म र तिमी",
                "я і ти"
              ],
              [
                "राम्रो तर महँगो",
                "гарне, але дороге"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinating Conjunctions: र, वा, तर — A1"
      },
      {
        "id": "honorific-verb-ending-depth",
        "title": "आदरसूचक क्रिया अन्त्य: गहिरो अध्ययन — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Кожен з трьох рівнів поваги викликає повністю окремий набір дієслівних закінчень у кожному часі — не одна форма з доданою часткою ввічливості, а три паралельні системи відмінювання.",
            "en": {
              "text": "Each of the three politeness tiers triggers an entirely separate set of verb endings in every tense — not one form with a politeness particle added, but three parallel conjugation systems."
            }
          },
          {
            "type": "table",
            "title": "Три системи для 'йти'",
            "rows": [
              [
                "जान्छस् (tã) / जान्छौ (timi) / जानुहुन्छ (tapāī)",
                "три різні форми того самого значення"
              ]
            ],
            "en": {
              "title": "Three Systems for 'to go'"
            }
          }
        ],
        "titleEn": "Honorific Verb Endings in Depth — B2"
      },
      {
        "id": "split-ergativity-transitive-intransitive",
        "title": "कर्ता कारक: सकर्मक विरुद्ध अकर्मक — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка -ले вживається лише з перехідними дієсловами в минулому часі; неперехідні дієслова навіть у минулому часі лишають підмет без цієї частки, — розщеплення проходить не лише за часом, а й за перехідністю.",
            "en": {
              "text": "The particle -ले is used only with transitive verbs in the past tense; intransitive verbs, even in the past, leave the subject without this particle — the split runs along both tense and verb transitivity."
            }
          },
          {
            "type": "table",
            "title": "Перехідне проти неперехідного",
            "rows": [
              [
                "मैले भात खाएँ। (перехідне, з -ले)",
                "Я з'їв рис."
              ],
              [
                "म लडेँ। (неперехідне, без -ले)",
                "Я впав."
              ]
            ],
            "en": {
              "title": "Transitive vs. Intransitive"
            }
          }
        ],
        "titleEn": "Ergativity Split by Transitivity — B2"
      },
      {
        "id": "newari-tibetoburman-contact-influence",
        "title": "नेवारी र भोट-बर्मेली प्रभाव — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Століття контакту з мовами непальських корінних народів, зокрема тибето-бірманською неварі, залишили в непальській шар запозичень і фонологічних впливів — контакт, відмінний від дравідійського впливу на маратхі.",
            "en": {
              "text": "Centuries of contact with Nepal's indigenous languages, especially the Tibeto-Burman Newar language, left Nepali with a layer of loanwords and phonological influences — a contact distinct from the Dravidian influence on Marathi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Деякі побутові слова в непальській мають неварійське походження.",
                "запозичення з тибето-бірманського субстрату"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Newar and Tibeto-Burman Contact Influence — B2"
      },
      {
        "id": "tatsama-tadbhava-vocabulary",
        "title": "तत्सम र तद्भव शब्द — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика поділяється на tatsama (запозичене прямо з санскриту без змін) і tadbhava (унаслідуване з санскриту через природну звукову еволюцію) — той самий історичний корінь, два різних шляхи входження в сучасну мову.",
            "en": {
              "text": "Vocabulary splits into tatsama (borrowed directly from Sanskrit unchanged) and tadbhava (inherited from Sanskrit through natural sound evolution) — the same historical root, two different paths into the modern language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "सूर्य (tatsama, пряме санскритське запозичення 'сонце')",
                "формальний прямий шар лексики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tatsama and Tadbhava Vocabulary — B2"
      },
      {
        "id": "devanagari-orthographic-differences-hindi",
        "title": "देवनागरी: हिन्दीभन्दा फरक चलन — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча непальська й гінді користуються тим самим алфавітом деванагарі, непальська зберігає горизонтальну риску над словом (широрекху) послідовніше й має власні конвенції для кількох лігатур, відмінні від гінді.",
            "en": {
              "text": "Although Nepali and Hindi share the same Devanagari alphabet, Nepali keeps the horizontal headline (shirorekha) over the word more consistently and has its own conventions for a few ligatures, differing from Hindi."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Кілька лігатур пишуться дещо інакше в непальській, ніж у гінді.",
                "орфографічні відмінності від гінді"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Devanagari: Orthographic Differences from Hindi — B2"
      },
      {
        "id": "dialectal-variation-eastern-western",
        "title": "पूर्वेली र पश्चिमेली भाषिका — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна непальська базується на говірці долини Катманду, тоді як східні й західні говірки (включно з дотелі) розходяться в лексиці й вимові настільки, що можуть заплутати навіть носіїв стандарту.",
            "en": {
              "text": "Standard Nepali is based on the Kathmandu Valley dialect, while eastern and western dialects (including Doteli) diverge in vocabulary and pronunciation enough to confuse even speakers of the standard."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандарт базується саме на говірці долини Катманду.",
                "діалектна основа стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Eastern and Western Dialect Variation — B2"
      },
      {
        "id": "code-switching-english-urban",
        "title": "अङ्ग्रेजी-नेपाली मिश्रण — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У міському й освіченому мовленні типове перемикання кодів усередині одного речення — граматичний каркас непальський, а частина лексики чи цілі фрази вставляються з англійської без адаптації.",
            "en": {
              "text": "Urban, educated speech typically code-switches within a single sentence — the grammatical frame is Nepali, while chunks of vocabulary or whole phrases are inserted from English without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "म office मा छु।",
                "Я в офісі (English office вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "English-Nepali Code-Switching — B2"
      },
      {
        "id": "converb-chaining-era",
        "title": "पूर्वकालिक क्रिया: -एर — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -एर зв'язує послідовні дії в реченні без окремого сполучника 'і' — часово нейтральна форма, час несе лише останнє дієслово ланцюжка.",
            "en": {
              "text": "The converb in -एर links sequential actions in a sentence with no separate conjunction 'and' — a tense-neutral form, with only the last verb of the chain carrying tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ऊ उठेर बाहिर गयो।",
                "Він встав і вийшов (без 'і', через дієприслівник)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -एर — B1"
      },
      {
        "id": "causative-suffix-aunu",
        "title": "प्रेरणार्थक: -आउनु — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -आउनु, доданий до дієслівного кореня, додає значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "The causative suffix -आउनु, added to the verb root, adds the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "बस्नु (сидіти) → बसाउनु (садити когось)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -आउनु — B2"
      },
      {
        "id": "passive-like-construction-inu",
        "title": "कर्मवाच्य: -इनु — B2",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -इनु, доданим до дієслівного кореня, — граматично вбудований пасив без допоміжного дієслова 'бути'.",
            "en": {
              "text": "The passive voice is formed with the suffix -इनु added to the verb root — a grammatically built-in passive with no auxiliary verb 'to be'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "लेख्नु (писати) → लेखिनु (бути написаним)",
                "пасивний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Suffix: -इनु — B2"
      },
      {
        "id": "politeness-verb-ending-choice-depth",
        "title": "विनम्रता: क्रिया अन्त्यको छनोट — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Вибір дієслівного закінчення має узгоджуватися з вибором займенника — не можна вжити ввічливий займенник तपाईं з неввічливим дієслівним закінченням, і навпаки.",
            "en": {
              "text": "The verb ending choice must agree with the pronoun choice — one cannot use the polite pronoun तपाईं with an impolite verb ending, and vice versa."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तपाईं जानुहुन्छ। (не 'तपाईं जान्छस्')",
                "Ви йдете (узгоджена ввічливість)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Coordinated Pronoun-Verb Politeness — B2"
      },
      {
        "id": "gorkha-historical-military-vocabulary",
        "title": "गोर्खाली ऐतिहासिक शब्दावली — B2",
        "emoji": "⚔️",
        "sections": [
          {
            "type": "intro",
            "text": "Історична воєнна слава гуркхських полків залишила в мові окремий шар військової лексики, поширеної й за межами Непалу через міжнародну службу гуркхів у британській і індійській арміях.",
            "en": {
              "text": "The historical military fame of the Gurkha regiments left the language with a distinct layer of military vocabulary, spread beyond Nepal through Gurkha international service in the British and Indian armies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Військова лексика гуркхів поширилася за межі Непалу через міжнародну службу.",
                "воєнна лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gorkha Historical Military Vocabulary — B2"
      },
      {
        "id": "address-terms-caste-social-hierarchy",
        "title": "जातीय सामाजिक तहअनुसार सम्बोधन — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Історично звертання й вибір рівня поваги частково відображали кастову й соціальну ієрархію — сучасна мова відходить від цього, але сліди старої системи ще трапляються в консервативнішому мовленні.",
            "en": {
              "text": "Historically, address terms and politeness-level choice partly reflected caste and social hierarchy — the modern language is moving away from this, but traces of the old system still appear in more conservative speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Традиційно вибір рівня поваги міг відображати соціальний статус.",
                "історичний слід кастової ієрархії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Historical Caste-Based Address Terms — B2"
      },
      {
        "id": "darjeeling-sikkim-diaspora-variation",
        "title": "दार्जिलिङ र सिक्किमेली विविधता — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Непальська мова діаспори в індійських Дарджилінгу й Сіккімі розвинулася окремо від непальської Непалу впродовж понад століття, з власними лексичними й вимовними особливостями.",
            "en": {
              "text": "The Nepali of the Darjeeling and Sikkim diaspora in India developed separately from Nepal's Nepali over more than a century, with its own lexical and pronunciation features."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дарджилінзька непальська має власну літературну традицію.",
                "діаспорна варіація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Darjeeling and Sikkim Diaspora Variation — B2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "उखान टुक्का — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми (उखान) вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms (उखान) are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "आँखा तरेर हेर्नु। (буквально 'дивитися, розплющивши очі' → дивуватися)",
                "застигла ідіома"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Idiomatic Expressions — B2"
      },
      {
        "id": "double-negative-emphasis",
        "title": "दोहोरो निषेध — B1",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення підсилюється словом कहिल्यै ('ніколи') чи केही ('нічого') у поєднанні з дієслівним запереченням — подвійне маркування, а не помилка.",
            "en": {
              "text": "Negation is intensified with the word कहिल्यै ('never') or केही ('nothing') combined with verb negation — double marking, not an error."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "मलाई केही थाहा छैन।",
                "Я взагалі нічого не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Negation for Emphasis — B1"
      },
      {
        "id": "numeral-time-expressions-baje",
        "title": "समय: बजे — B1",
        "emoji": "🕐",
        "sections": [
          {
            "type": "intro",
            "text": "Вираження часу доби вживає власне слово बजे ('о годині'), додане після числівника, — окрема конструкція, відмінна від звичайної лічби предметів.",
            "en": {
              "text": "Time-of-day expressions use the dedicated word बजे ('at the hour'), added after the number — a distinct construction from ordinary object counting."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तीन बजे",
                "о третій годині"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Time Expressions: बजे — B1"
      },
      {
        "id": "emphatic-particle-nai",
        "title": "नै: जोड दिने शब्द — B1",
        "emoji": "💯",
        "sections": [
          {
            "type": "intro",
            "text": "Частка नै, приєднана до кінця будь-якого слова, підкреслює виключність чи наголос — 'саме, тільки', виключаючи альтернативи.",
            "en": {
              "text": "The particle नै, attached to the end of any word, emphasizes exclusivity or focus — 'exactly, only', ruling out alternatives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "उही नै आयो।",
                "Саме він і прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Emphatic Particle नै — B1"
      },
      {
        "id": "numeral-classifier-depth",
        "title": "गणकशब्द: थान, वटा — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Крім जना для людей, слова थान і वटा вживаються як загальні класифікатори для неживих предметів, з дещо різними стилістичними відтінками формальності.",
            "en": {
              "text": "Besides जना for people, the words थान and वटा are used as general classifiers for inanimate objects, with somewhat different stylistic shades of formality."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "दुई वटा स्याउ (два яблука)",
                "загальний класифікатор для предметів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Classifiers: थान, वटा — B2"
      },
      {
        "id": "optative-blessing-formulas",
        "title": "शुभकामना सूत्र — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Оптативний спосіб на -ओस् широко вживається в застиглих формулах побажань і молитв, які носії відтворюють цілими блоками, не аналізуючи граматично.",
            "en": {
              "text": "The optative mood in -ओस् is widely used in fixed wish and prayer formulas, which speakers reproduce as whole blocks without grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तपाईंको जीवन लामो होस्।",
                "Хай ваше життя буде довгим."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative Blessing Formulas — B2"
      },
      {
        "id": "compound-verb-light-verb-system",
        "title": "संयुक्त क्रिया: गर्नु — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато понять передаються іменником плюс допоміжне दीेसлово गर्नु ('робити'), утворюючи складене дієслово, — продуктивна система, що замінює запозичення окремих дієслів.",
            "en": {
              "text": "Many concepts are expressed with a noun plus the auxiliary verb गर्नु ('to do'), forming a compound verb — a productive system that replaces borrowing separate verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "काम गर्नु (робота + робити → працювати)",
                "складене дієслово"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Light Verb System: गर्नु — B1"
      },
      {
        "id": "loanword-adaptation-english-modern",
        "title": "आधुनिक अङ्ग्रेजी शब्द अनुकूलन — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні англійські запозичення адаптуються до непальської морфології, отримуючи ті самі відмінкові частки й класифікатори, що й питомі слова.",
            "en": {
              "text": "Modern English loanwords are adapted to Nepali morphology, receiving the same case particles and classifiers as native words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "कम्प्युटरमा (на комп'ютері, з непальською часткою)",
                "англійське запозичення з непальською морфологією"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modern English Loanword Adaptation — B1"
      },
      {
        "id": "numeral-agreement-with-noun",
        "title": "अंक र नामको मेल — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Після будь-якого числівника іменник лишається в однині, — множинний суфікс -हरू тут був би граматично зайвим, оскільки число вже вказує на кількість.",
            "en": {
              "text": "After any numeral, the noun stays in the singular — the plural suffix -हरू would be grammatically redundant here, since the number already indicates quantity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "तीन किताब (не 'किताबहरू')",
                "три книги (іменник в однині)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nouns Stay Singular After Numerals — B1"
      },
      {
        "id": "relative-time-clauses-jaba-taba",
        "title": "समयवाचक वाक्य: जब...तब — B1",
        "emoji": "⏱️",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник जब ('коли') вводить часове підрядне речення, а tab ('тоді') у головному реченні необов'язково відповідає йому парою.",
            "en": {
              "text": "The conjunction जब ('when') introduces a temporal clause, with तब ('then') in the main clause optionally pairing with it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "जब ऊ आयो, तब म गइसकेको थिएँ।",
                "Коли він прийшов, я вже пішов був."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Temporal Clauses: जब...तब — B1"
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
        "id": "irregular-verbs-common",
        "title": "अनियमित क्रिया: हुनु — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово हुनु ('бути/ставати') має повністю нерегулярне відмінювання й водночас є найважливішим допоміжним дієсловом майже кожної складеної часової форми.",
            "en": {
              "text": "The verb हुनु ('to be/become') has completely irregular conjugation and is at the same time the most important auxiliary verb of nearly every compound tense form."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "छु / थिएँ / हुनेछु",
                "я є / я був / я буду"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verb: हुनु — B1"
      },
      {
        "id": "irregular-honorific-plural-forms",
        "title": "अनियमित आदरसूचक बहुवचन — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька займенників мають нерегулярну шанобливу форму множини, що не виводиться з очікуваного шаблону суфікса -हरू.",
            "en": {
              "text": "A few pronouns have an irregular honorific plural form that can't be derived from the expected -हरू suffix pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "हामी → हामीहरू (з подвоєним значенням множини в деяких контекстах)",
                "нерегулярна шаноблива множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Honorific Plural Forms — B2"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "उखानमा पुरानो व्याकरण — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я (उखान) зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs (उखान) preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "बाठो बिरालोको घाँटीमा घण्टी।",
                "Розумному коту дзвіночок на шию (застигла приказка з архаїчними формами)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Grammar in Proverbs — B2"
      }
    ]
  }
];
