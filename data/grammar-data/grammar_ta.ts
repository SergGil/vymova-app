// Vymova — data/grammar-data/grammar_ta.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_TA: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "தன்மைப் பெயர்ச்சொற்கள் — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У тамільській ввічлива форма \"நீங்கள்\" (nīngaḷ) водночас служить і поважним звертанням до однієї людини, і звичайною множиною \"ви\".",
            "en": {
              "text": "In Tamil, the polite form \"நீங்கள்\" (nīngaḷ) serves both as a respectful way to address one person and as the ordinary plural \"you\"."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "நான் (nān)"
              ],
              [
                "ти (зв. / ввічл.)",
                "நீ (nī) / நீங்கள் (nīngaḷ)"
              ],
              [
                "він / вона",
                "அவன் / அவள் (avan / avaḷ)"
              ],
              [
                "ми",
                "நாங்கள் (nāngaḷ)"
              ],
              [
                "ви",
                "நீங்கள் (nīngaḷ)"
              ],
              [
                "вони",
                "அவர்கள் (avargaḷ)"
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
        "id": "verbal-png-agreement",
        "title": "வினை: பால், எண், இடம் — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від малаялам, який повністю втратив узгодження дієслова з підметом, тамільська зберегла повне узгодження за особою, числом і родом (PNG) через закінчення, безпосередньо додане до основи дієслова.",
            "en": {
              "text": "Unlike Malayalam, which lost verb-subject agreement entirely, Tamil retains full person-number-gender (PNG) agreement through an ending directly attached to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்தான் (він читав) / படித்தாள் (вона читала)",
                "he read / she read (gender marked on the verb itself)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Person-Number-Gender Agreement — B1"
      },
      {
        "id": "diglossia-literary-spoken",
        "title": "செந்தமிழ் — கொடுந்தமிழ் — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Тамільська має сильну диглосію: літературна форма (செந்தமிழ்), близька до класичної, уживається в письмі й офіційному мовленні, тоді як розмовна форма (கொடுந்தமிழ்) значно відрізняється фонетикою й закінченнями.",
            "en": {
              "text": "Tamil has strong diglossia: the literary form (centamiḻ), close to Classical Tamil, is used in writing and formal speech, while the colloquial form (koduntamiḻ) differs significantly in phonetics and endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "செல்கிறேன் (літ.) / போறேன் (розм., 'іду')",
                "I am going (literary vs. colloquial form)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Literary/Spoken Diglossia — B2"
      },
      {
        "id": "eight-case-system",
        "title": "வேற்றுமை: எட்டு — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Тамільська має вісім відмінків (називний, знахідний, давальний, родовий, орудний, соціативний, місцевий, аблатив), кожен зі своїм окремим суфіксом, доданим до основи іменника.",
            "en": {
              "text": "Tamil has eight grammatical cases (nominative, accusative, dative, genitive, instrumental, sociative, locative, ablative), each with its own dedicated suffix attached to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "வீடு (дім) → வீட்டில் (у домі, місцевий)",
                "house → in the house (locative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Eight-Case System — B1"
      },
      {
        "id": "pure-tamil-movement",
        "title": "தனித்தமிழ் இயக்கம் — B2",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Рух 'Чистої тамільської' (தனித்தமிழ்) свідомо замінює санскритські запозичення власними тамільськими новотворами, тож у сучасній тамільській є два паралельні слова для багатьох понять — питоме й санскритське.",
            "en": {
              "text": "The 'Pure Tamil' movement (taṉittamiḻ) deliberately replaces Sanskrit loanwords with native Tamil coinages, so modern Tamil often has two parallel words for the same concept — a native one and a Sanskrit one."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "கல்வி (питоме) vs. வித்யா (санскритське, 'освіта')",
                "education (native Tamil coinage vs. Sanskrit loan)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Pure Tamil Purism Movement — B2"
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
        "title": "நிகழ்காலம் — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється часовим суфіксом -கிற- (kiṟa), доданим до основи, плюс закінчення особи, числа й роду.",
            "en": {
              "text": "The present tense is formed with the tense suffix -கிற- (kiṟa) added to the stem, plus a person-number-gender ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிக்கிறேன்.",
                "Я читаю."
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
        "title": "இறந்தகாலம் — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється кількома різними часовими суфіксами (-த்-, -ந்த்-, -ன்-) залежно від класу дієслова, доданими до основи.",
            "en": {
              "text": "The past tense is formed with several distinct tense suffixes (-த்-, -ந்த்-, -ன்-) depending on the verb class, added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்தேன்.",
                "Я прочитав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense — A2"
      },
      {
        "id": "future-tense",
        "title": "எதிர்காலம் — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -வ்-/-ப்- (v/p), доданим до основи, плюс особове закінчення.",
            "en": {
              "text": "The future tense is formed with the suffix -வ்-/-ப்- (v/p) added to the stem, plus the person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிப்பேன்.",
                "Я читатиму."
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
        "id": "present-progressive",
        "title": "நிகழ்ந்துகொண்டிருத்தல் — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в теперішньому передається зворотом -கொண்டிருக்கிற- ('перебуваю в процесі'), окремим від простого теперішнього часу.",
            "en": {
              "text": "An ongoing present action is expressed with the construction -கொண்டிருக்கிற- ('am in the process of'), distinct from the plain present tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்துக்கொண்டிருக்கிறேன்.",
                "Я саме читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Progressive — B1"
      },
      {
        "id": "perfect-tense",
        "title": "முற்றெச்சம் — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприслівником минулого часу плюс допоміжне дієслово இரு ('бути') у теперішньому часі, наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past converb plus the auxiliary இரு ('to be') in the present tense, emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்திருக்கிறேன்.",
                "Я вже прочитав."
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
        "id": "pluperfect",
        "title": "இறந்த முற்றெச்சம் — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється дієприслівником минулого часу плюс допоміжне дієслово இரு в минулому часі, позначаючи дію, завершену до іншої минулої події.",
            "en": {
              "text": "The pluperfect is formed with the past converb plus the auxiliary இரு in the past tense, marking an action completed before another past event."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்திருந்தேன்.",
                "Я вже був прочитав."
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
        "id": "imperative-mood",
        "title": "ஏவல் வினை — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова; ввічлива й множинна форма додає суфікс -உங்கள்.",
            "en": {
              "text": "The singular imperative is the bare verb stem; the polite/plural form adds the suffix -உங்கள்."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படி! / படியுங்கள்!",
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
        "id": "negative-verb-synthetic",
        "title": "எதிர்மறை வினை — B2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Крім аналітичного заперечення частками, тамільська зберегла архаїчну синтетичну заперечну форму дієслова з власним закінченням, окремим від часових суфіксів дійсного способу.",
            "en": {
              "text": "Besides analytic particle negation, Tamil retains an archaic synthetic negative verb form with its own ending, separate from the indicative tense suffixes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படியேன்.",
                "Я не читатиму (синтетичне заперечення)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Synthetic Negative Verb — B2"
      },
      {
        "id": "negation-analytic-illai",
        "title": "இல்லை: எதிர்மறை — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Аналітичне заперечення утворюється незмінним словом இல்லை ('немає/не'), поставленим після дієприслівника чи інфінітивної форми, — сучасніший засіб, ніж синтетична форма.",
            "en": {
              "text": "Analytic negation is formed with the invariable word இல்லை ('is not'), placed after a converb or infinitive form — a more modern device than the synthetic form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிக்கவில்லை.",
                "Я не читав."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Analytic Negation: இல்லை — A2"
      },
      {
        "id": "potential-permissive-lam",
        "title": "இயலுமை: -லாம் — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність, можливість чи дозвіл виражаються суфіксом -லாம், доданим до основи дієслова.",
            "en": {
              "text": "Ability, possibility, or permission is expressed with the suffix -லாம், added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிக்கலாம்.",
                "Можна читати / Я можу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential/Permissive: -லாம் — B1"
      },
      {
        "id": "conditional-al",
        "title": "நிபந்தனை: -ஆல் — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення утворюється суфіксом -ஆல், доданим до минулої основи дієслова в підрядному реченні.",
            "en": {
              "text": "A conditional sentence is formed with the suffix -ஆல், added to the past verb stem in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "மழை பெய்தால், நான் வீட்டில் இருப்பேன்.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -ஆல் — B1"
      },
      {
        "id": "optative-mood",
        "title": "வேண்டல் வினை — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Бажальний спосіб — окрема парадигма закінчень, уживана для благословень і формальних побажань, відмінна від наказового способу.",
            "en": {
              "text": "The optative mood is a distinct set of endings used for blessings and formal wishes, different from the imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "வாழ்க தமிழ்!",
                "Хай живе тамільська!"
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
        "title": "செயவெனெச்சம் — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив утворюється суфіксом -அ/-க்க, доданим до основи дієслова, і вживається перед модальними словами як வேண்டும் ('треба').",
            "en": {
              "text": "The infinitive is formed with the suffix -அ/-க்க added to the verb stem, and is used before modal words like வேண்டும் ('need to')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிக்க வேண்டும்.",
                "Треба читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive — A2"
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
        "title": "வேற்றுமை உருபுகள் — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Відмінкові суфікси",
            "rows": [
              [
                "знахідний",
                "-ஐ (ai)"
              ],
              [
                "давальний",
                "-க்கு (kku)"
              ],
              [
                "орудний",
                "-ஆல் (āl)"
              ],
              [
                "місцевий",
                "-இல் (il)"
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
        "title": "சொல் வரிசை: SOV — A2",
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
                "நான் புத்தகத்தைப் படிக்கிறேன்.",
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
        "id": "relative-participle-no-pronoun",
        "title": "பெயரெச்சம்: தொடர்பு — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Тамільська не має відносного займенника: означальні звороти утворюються перетворенням дієслова на дієприкметник (relative participle), поставлений прямо перед іменником.",
            "en": {
              "text": "Tamil has no relative pronoun: relative clauses are formed by turning the verb into a relative participle, placed directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படிக்கும் மாணவன்",
                "учень, що читає"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Participle (No Relative Pronoun) — B2"
      },
      {
        "id": "echo-word-reduplication",
        "title": "இரட்டைக் கிளவி: கிச்சு-கிச்சு — B2",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Слово повторюється зі зміною першого приголосного на 'к' (echo word), додаючи значення 'і подібне' до чогось, — характерна риса дравідійських і південноазійських мов.",
            "en": {
              "text": "A word is echoed with its first consonant changed to 'k' (echo word), adding the meaning 'and such' to something — a characteristic feature of Dravidian and South Asian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "காபி-கிச்சு",
                "кава і все таке"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Echo-Word Reduplication — B2"
      },
      {
        "id": "reflexive-pronoun-taan",
        "title": "தான்: தன்மை — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник தான் ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються, або для наголосу на підметі.",
            "en": {
              "text": "The reflexive pronoun தான் ('self') is used for all persons and numbers when the subject and object of the action coincide, or for emphasizing the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "அவனே தான் வந்தான்.",
                "Він сам прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: தான் — B1"
      },
      {
        "id": "possessive-genitive-in",
        "title": "உடைமை: -இன் — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається родовим відмінком (суфікс -இன்), доданим до власника, поставленого перед посідомим іменником.",
            "en": {
              "text": "Possession is expressed with the genitive case (suffix -இன்), added to the possessor, placed before the possessed noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "அப்பாவின் புத்தகம்",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: -இன் (Genitive) — A2"
      },
      {
        "id": "cardinal-numbers",
        "title": "எண்கள்: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "ஒன்று"
              ],
              [
                "2",
                "இரண்டு"
              ],
              [
                "3",
                "மூன்று"
              ],
              [
                "5",
                "ஐந்து"
              ],
              [
                "10",
                "பத்து"
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
        "title": "சுட்டுப்பெயர்கள் — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "இது"
              ],
              [
                "той",
                "அது"
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
        "title": "வினாச்சொற்கள் — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "யார்"
              ],
              [
                "що",
                "என்ன"
              ],
              [
                "де",
                "எங்கே"
              ],
              [
                "коли",
                "எப்போது"
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
        "id": "compound-verbs",
        "title": "கூட்டு வினைகள் — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Багато складних дієслівних значень (тонкі відтінки завершеності, раптовості, вигоди для себе) утворюються дієприслівником плюс допоміжне дієслово (விடு, கொள், போடு), тонко змінюючи основне значення.",
            "en": {
              "text": "Many compound verbal meanings (subtle shades of completion, suddenness, self-benefit) are formed with a converb plus an auxiliary verb (விடு, கொள், போடு), subtly modifying the main meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "படித்துவிட்டேன்.",
                "Я закінчив читати (повністю, раптово)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Verb Auxiliaries — B1"
      },
      {
        "id": "comparative-vida",
        "title": "ஒப்பீடு: விட — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прийменниковим словом விட ('ніж'), поставленим після об'єкта порівняння, без окремої граматичної форми прикметника.",
            "en": {
              "text": "The comparative is formed with the postpositional word விட ('than'), placed after the compared object, with no separate grammatical adjective form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "இது அதை விட பெரியது.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: விட ('than') — B1"
      },
      {
        "id": "superlative-ella",
        "title": "மிகுதி: எல்லாவற்றையும் விட — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою எல்லாவற்றையும் விட ('за все') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the phrase எல்லாவற்றையும் விட ('of all') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "எல்லாவற்றையும் விட பெரியது",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: எல்லாவற்றையும் விட — B1"
      },
      {
        "id": "conjunctions",
        "title": "இணைப்புச் சொற்கள் — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "மற்றும்/உம்"
              ],
              [
                "або",
                "அல்லது"
              ],
              [
                "але",
                "ஆனால்"
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
        "id": "clitic-um-and",
        "title": "-உம்: சேர்ப்புவிகுதி — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичний суфікс -உம் ('і/також'), доданий до кінця слова, може сам по собі замінювати окремий сполучник 'і', приєднуючи його до кожного з двох чи більше перелічуваних слів.",
            "en": {
              "text": "The clitic suffix -உம் ('and/also'), attached to the end of a word, can itself replace a separate 'and' conjunction, attached to each of two or more listed words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "அப்பாவும் அம்மாவும்",
                "батько й мати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic -உம்: 'And' — B1"
      },
      {
        "id": "sandhi-euphonic-combination",
        "title": "புணர்ச்சி: ஒலி இணைவு — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Коли одне слово закінчується на голосний, а наступне починається на голосний чи певний приголосний, між ними вставляється сполучний приголосний за правилами санді, успадкованими з класичної граматики.",
            "en": {
              "text": "When one word ends in a vowel and the next begins with a vowel or certain consonants, a linking consonant is inserted between them following sandhi rules inherited from classical grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "மரம் + இல் → மரத்தில்",
                "дерево + в = у дереві (сандхі-вставка)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sandhi: Euphonic Combination — B2"
      },
      {
        "id": "diminutive-expression",
        "title": "சிறுமை: குட்டி — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальний відтінок передається окремим прикметником குட்டி ('маленький') перед іменником, а не суфіксом, доданим до нього.",
            "en": {
              "text": "A diminutive shade of meaning is conveyed with the separate adjective குட்டி ('small') before the noun, rather than a suffix attached to it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "குட்டி பையன்",
                "малятко (букв. 'мала дитина')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: குட்டி — B1"
      },
      {
        "id": "adjective-position",
        "title": "பெயரடை இடம் — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає, і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "The adjective always precedes the noun it modifies, and does not change for gender, number, or case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "பெரிய வீடு",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position: Invariant — A2"
      },
      {
        "id": "postpositions-simple",
        "title": "பின்னிடைச் சொற்கள் — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Післяйменники",
            "rows": [
              [
                "з (разом)",
                "உடன்"
              ],
              [
                "для",
                "க்காக"
              ],
              [
                "без",
                "இல்லாமல்"
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
        "id": "vocative-case",
        "title": "விளி வேற்றுமை — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні деякі іменники мають окрему кличну форму з подовженим чи зміненим кінцевим звуком, відмінну від називного відмінка.",
            "en": {
              "text": "In direct address, some nouns take a distinct vocative form with a lengthened or altered final sound, different from the nominative case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "அம்மா → அம்மாவே!",
                "мамо!"
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
        "id": "existential-irukku",
        "title": "இருக்கிறது: இருப்பு — B1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається дієсловом இரு ('бути/існувати'), узгодженим з підметом за особою, числом і родом, — не окреме безособове слово, а звичайне дієслово в теперішньому часі.",
            "en": {
              "text": "The existence of something is expressed with the verb இரு ('to be/exist'), agreeing with the subject in person, number, and gender — not a separate impersonal word, but the ordinary verb in the present tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "நிறைய பேர் இருக்கிறார்கள்.",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: இரு ('to exist') — B1"
      },
      {
        "id": "question-particle-aa",
        "title": "-ஆ: வினா விகுதி — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється клітичним суфіксом -ஆ, доданим до кінця слова, на якому наголошується запитання, без інверсії порядку слів.",
            "en": {
              "text": "A yes/no question is formed with the clitic suffix -ஆ added to the end of the word being questioned, with no inversion of word order."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "நீ படிக்கிறாயா?",
                "Ти читаєш?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Suffix: -ஆ — A2"
      },
      {
        "id": "converb-sequential",
        "title": "வினையெச்சம்: -உ — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -உ з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -உ converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "சாப்பிட்டு தூங்கினேன்.",
                "Я поїв і заснув."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -உ — B1"
      },
      {
        "id": "classifier-per",
        "title": "வகைச்சொல்: பேர் — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "При лічбі людей після числівника вживається класифікатор பேர் ('осіб'), окремий від числівникового закінчення для неживих предметів.",
            "en": {
              "text": "When counting people, the classifier பேர் ('persons') is used after the numeral, distinct from the numeral ending used for inanimate objects."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "மூன்று பேர்",
                "троє людей"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classifier for People: பேர் — B2"
      },
      {
        "id": "gender-rational-irrational",
        "title": "உயர்திணை — அஃறிணை — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Замість чоловічого/жіночого роду тамільська класична граматика поділяє іменники на 'розумне' (люди, боги) й 'нерозумне' (тварини, речі, абстракції) — ця категорія визначає займенник і дієслівне узгодження навіть більше, ніж біологічна стать.",
            "en": {
              "text": "Instead of masculine/feminine gender, classical Tamil grammar divides nouns into 'rational' (humans, gods) and 'irrational' (animals, objects, abstractions) — this category determines pronoun and verb agreement even more than biological sex."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "அவன் (розумний, ч.р.) vs. அது (нерозумне, будь-яка стать)",
                "he (rational) vs. it (irrational, regardless of biological sex)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rational vs. Irrational Noun Class — B2"
      },
      {
        "id": "negation-mattum-only",
        "title": "மட்டும்: மட்டுப்பாடு — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка மட்டும் ('лише'), додана після іменника, обмежує його значення, — типовий приклад того, як тамільська частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle மட்டும் ('only'), added after a noun, restricts its meaning — a typical example of how a Tamil particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "நான் மட்டும்.",
                "Тільки я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: மட்டும் — B1"
      },
      {
        "id": "sangam-literature",
        "title": "சங்க இலக்கியம் — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Санґамська література (300 р. до н.е. — 300 р. н.е.) — один із найдавніших безперервних літературних канонів світу, що досі читається й цитується освіченими тамілами без потреби в перекладі, на відміну від давньоанглійської чи латини.",
            "en": {
              "text": "Sangam literature (300 BCE–300 CE) is one of the world's oldest continuously read literary canons, still read and quoted by educated Tamils without needing translation, unlike Old English or Latin for their descendants."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "திருக்குறள் (класичний твір про етику)",
                "the Tirukkural (a classical work on ethics)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sangam Literature — B2"
      },
      {
        "id": "tamil-script-history",
        "title": "தமிழ் எழுத்து: வரலாறு — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Тамільське письмо походить від давньої брахмі й тамільського письма ватежутту, з окремою літерою для звука ழ் (ретрофлексного бокового), якого немає в жодному іншому дравідійському письмі.",
            "en": {
              "text": "The Tamil script descends from ancient Brahmi and the Vatteluttu Tamil script, with a dedicated letter for the sound ழ் (a retroflex lateral) found in no other Dravidian script."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "தமிழ் (з унікальною літерою ழ்)",
                "Tamil (containing the unique ழ் letter)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Tamil Script History — B1"
      },
      {
        "id": "tamil-diaspora",
        "title": "புலம்பெயர் தமிழர் — B2",
        "emoji": "🌍",
        "sections": [
          {
            "type": "intro",
            "text": "Значна тамільська діаспора живе в Шрі-Ланці, Сінгапурі, Малайзії та за океаном, тож тамільська — офіційна мова відразу трьох держав/регіонів (Індія, Шрі-Ланка, Сінгапур), рідкісний випадок для регіональної мови.",
            "en": {
              "text": "A significant Tamil diaspora lives in Sri Lanka, Singapore, Malaysia, and overseas, making Tamil an official language of three separate states/regions (India, Sri Lanka, Singapore) — a rare case for a regional language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "இலங்கைத் தமிழர் (шрі-ланкійські таміли)",
                "Sri Lankan Tamils"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tamil Diaspora — B2"
      },
      {
        "id": "pongal-festival",
        "title": "பொங்கல் — B1",
        "emoji": "🌾",
        "sections": [
          {
            "type": "intro",
            "text": "Понґал — чотириденне свято врожаю, назване за стравою з рису, зваренню якого до переливання через край надають символічного значення достатку, — центральна дата тамільського сонячного календаря.",
            "en": {
              "text": "Pongal is a four-day harvest festival named after a rice dish whose boiling over the pot's rim is given symbolic meaning of abundance — a central date on the Tamil solar calendar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "பொங்கலோ பொங்கல்!",
                "Хай зварить через край! (традиційний вигук свята)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pongal: The Harvest Festival — B1"
      },
      {
        "id": "bharatanatyam-dance",
        "title": "பரதநாட்டியம் — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Бгаратанатьям — класичний тамільський танець, що поєднує точні ручні жести (мудри), міміку й ритм, розвинений у храмовій традиції й досі викладаний за суворою усною методикою.",
            "en": {
              "text": "Bharatanatyam is a classical Tamil dance form combining precise hand gestures (mudras), facial expression, and rhythm, developed in temple tradition and still taught by strict oral methodology today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "பரதநாட்டியம் ஆடுதல்",
                "виконувати бгаратанатьям"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Bharatanatyam Dance — B1"
      },
      {
        "id": "dravidian-temple-architecture",
        "title": "கோபுரம்: கோயில் கட்டிடக்கலை — B2",
        "emoji": "🛕",
        "sections": [
          {
            "type": "intro",
            "text": "Дравідійська храмова архітектура визначається величезними ярусними вежами-брамами (гопурам), укритими сотнями скульптур, — найвідоміший зовнішній символ тамільського індуїзму.",
            "en": {
              "text": "Dravidian temple architecture is defined by massive tiered gateway towers (gopuram) covered in hundreds of sculptures — the most recognizable external symbol of Tamil Hinduism."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "மதுரை மீனாட்சி கோயில் கோபுரம்",
                "гопурам храму Мінакші в Мадураї"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dravidian Temple Architecture: Gopuram — B2"
      },
      {
        "id": "kolam-art",
        "title": "கோலம் — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Колам — геометричний візерунок із рисового борошна, який жінки малюють щоранку перед входом у дім, — водночас ритуал гостинності, естетична практика й підживлення мурах і птахів.",
            "en": {
              "text": "Kolam is a geometric pattern drawn with rice flour by women each morning at the doorstep — simultaneously a hospitality ritual, an aesthetic practice, and a way of feeding ants and birds."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "கோலம் போடுதல்",
                "малювати колам"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kolam: Threshold Art — B1"
      },
      {
        "id": "filter-coffee-culture",
        "title": "பில்டர் காபி — A2",
        "emoji": "☕",
        "sections": [
          {
            "type": "intro",
            "text": "Фільтрована кава, подана в характерному наборі тумблер-давара з піною, отриманою переливанням між посудинами, — центральний ранковий ритуал тамільського дому.",
            "en": {
              "text": "Filter coffee, served in the characteristic tumbler-davara set with froth created by pouring between the vessels, is a central morning ritual of the Tamil household."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ஒரு டம்ளர் காபி",
                "склянка кави"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Filter Coffee Culture — A2"
      },
      {
        "id": "colors",
        "title": "நிறங்கள் — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "சிவப்பு"
              ],
              [
                "чорний",
                "கருப்பு"
              ],
              [
                "білий",
                "வெள்ளை"
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
        "title": "எண்கள்: பத்து — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "இருபது"
              ],
              [
                "100",
                "நூறு"
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
        "id": "family-terms",
        "title": "குடும்பம் — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "அப்பா"
              ],
              [
                "мати",
                "அம்மா"
              ],
              [
                "брат",
                "அண்ணன்/தம்பி"
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
        "title": "வணக்கம் — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "வணக்கம்"
              ],
              [
                "Дякую",
                "நன்றி"
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
        "title": "வானிலை — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "சூரியன்"
              ],
              [
                "дощ",
                "மழை"
              ],
              [
                "вітер",
                "காற்று"
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
        "title": "உடல் உறுப்புகள் — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "தலை"
              ],
              [
                "рука",
                "கை"
              ],
              [
                "око",
                "கண்"
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
        "id": "veshti-saree-clothing",
        "title": "வேட்டி, புடவை — B1",
        "emoji": "👘",
        "sections": [
          {
            "type": "intro",
            "text": "Вешті (чоловіче обгорнуте вбрання) і сарі (жіноче), з десятками регіональних стилів драпування, залишаються формальним одягом навіть у містах, попри поширення західного одягу.",
            "en": {
              "text": "The veshti (men's wrap garment) and saree (women's), with dozens of regional draping styles, remain formal attire even in cities despite the spread of Western clothing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "வேட்டி கட்டுதல்",
                "надягати вешті"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Veshti and Saree: Traditional Dress — B1"
      },
      {
        "id": "food-vocabulary",
        "title": "உணவு — A2",
        "emoji": "🍛",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "рис",
                "சாதம்"
              ],
              [
                "самбар",
                "சாம்பார்"
              ],
              [
                "доса",
                "தோசை"
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
        "title": "விலங்குகள் — A2",
        "emoji": "🐘",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "слон",
                "யானை"
              ],
              [
                "собака",
                "நாய்"
              ],
              [
                "корова",
                "பசு"
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
        "title": "திசைகள் — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "வடக்கு"
              ],
              [
                "південь",
                "தெற்கு"
              ],
              [
                "схід",
                "கிழக்கு"
              ],
              [
                "захід",
                "மேற்கு"
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
        "id": "betel-leaf-hospitality",
        "title": "வெற்றிலை பாக்கு — B1",
        "emoji": "🌿",
        "sections": [
          {
            "type": "intro",
            "text": "Бетелевий лист і горіх (веттілей паакку) — традиційне частування на завершення трапези й обов'язковий елемент весільних і релігійних церемоній, символ гостинності й доброго побажання.",
            "en": {
              "text": "Betel leaf and areca nut (vetrilai paakku) is a traditional after-meal treat and an obligatory element of wedding and religious ceremonies, symbolizing hospitality and good wishes."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "வெற்றிலை பாக்கு கொடுத்தல்",
                "подавати бетелевий лист і горіх"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Betel Leaf Hospitality — B1"
      },
      {
        "id": "carnatic-music",
        "title": "கர்நாடக இசை — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Карнатична музика — класична південноіндійська музична система з власною складною теорією раг і талів, історично пов'язана з тамільською храмовою й придворною традицією.",
            "en": {
              "text": "Carnatic music is the classical South Indian musical system with its own elaborate raga and tala theory, historically tied to Tamil temple and courtly tradition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "கர்நாடக இசை நிகழ்ச்சி",
                "концерт карнатичної музики"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Carnatic Music Tradition — B2"
      },
      {
        "id": "chola-dynasty-history",
        "title": "சோழர் பேரரசு — B2",
        "emoji": "👑",
        "sections": [
          {
            "type": "intro",
            "text": "Імперія Чола (IX-XIII ст.) поширила тамільську культуру й храмову архітектуру аж до Шрі-Ланки й Південно-Східної Азії, а її морський флот був однією з наймогутніших військово-морських сил свого часу.",
            "en": {
              "text": "The Chola Empire (9th-13th c.) spread Tamil culture and temple architecture as far as Sri Lanka and Southeast Asia, and its navy was one of the most powerful maritime forces of its time."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ராஜராஜ சோழன் (Раджараджа Чола I)",
                "Rajaraja Chola I"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Chola Dynasty — B2"
      },
      {
        "id": "tamil-calendar",
        "title": "தமிழ்ப் புத்தாண்டு — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Тамільський Новий рік відзначають у квітні за сонячним календарем, окремим від індійського місячно-сонячного календаря, вживаного в більшості інших регіонів Індії.",
            "en": {
              "text": "Tamil New Year is celebrated in April according to a solar calendar, distinct from the lunisolar calendar used in most other regions of India."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "புத்தாண்டு வாழ்த்துக்கள்!",
                "З Новим роком!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Tamil Solar Calendar — B1"
      },
      {
        "id": "days-of-week",
        "title": "வார நாட்கள் — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "திங்கள்"
              ],
              [
                "п'ятниця",
                "வெள்ளி"
              ],
              [
                "неділя",
                "ஞாயிறு"
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
        "title": "மேலும் இணைப்புச் சொற்கள் — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Частка ஏனெனில் ('тому що') і сполучник ஆகவே ('отже') розширюють базовий набір மற்றும்/அல்லது/ஆனால், додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The particle ஏனெனில் ('because') and the connector ஆகவே ('therefore') extend the basic மற்றும்/அல்லது/ஆனால் set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "நான் வீட்டில் இருக்கிறேன், ஏனெனில் மழை பெய்கிறது.",
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
        "id": "irregular-verb-varu-past",
        "title": "ஒழுங்கற்ற வினை: வா → வந்த் — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово வா ('приходити') змінює кореневий приголосний у минулому часі (வந்த்) непередбачувано порівняно з іншими дієсловами того самого класу, тож форму слід запам'ятовувати окремо.",
            "en": {
              "text": "The verb வா ('to come') changes its root consonant in the past tense (வந்த்) unpredictably compared to other verbs of the same class, so the form must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна форма минулого часу",
            "rows": [
              [
                "வா (приходити) → வந்தேன் (не *வாத்தேன்)",
                "come → came (irregular past stem)"
              ]
            ],
            "en": {
              "title": "Irregular Past Form"
            }
          }
        ],
        "titleEn": "Irregular Verb: வா ('to come') — B1"
      },
      {
        "id": "irregular-plural-makan",
        "title": "ஒழுங்கற்ற பன்மை: மகன் → மக்கள் — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник மகன் ('син') утворює множину зі значенням 'люди/діти' (மக்கள்) через зміну кореня, а не просто додаванням звичайного суфікса множини -கள்.",
            "en": {
              "text": "The noun மகன் ('son') forms a plural meaning 'people/children' (மக்கள்) through root alternation, not simply by adding the ordinary plural suffix -கள்."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "மகன் → மக்கள் (не *மகன்கள்)",
                "son → people (irregular root change)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: மகன் → மக்கள் — B2"
      },
      {
        "id": "irregular-comparative-nalla",
        "title": "ஒழுங்கற்ற ஒப்பீடு: நல்லது → மேலானது — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Замість очікуваної регулярної конструкції з விட для прикметника நல்லது ('добрий'), порівняльний ступінь часто передається окремим словом மேலானது ('вище/краще'), яке саме собою не має форми 'доброго'.",
            "en": {
              "text": "Instead of the expected regular விட construction for the adjective நல்லது ('good'), the comparative is often conveyed with the separate word மேலானது ('superior/better'), which itself has no 'good' form."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне порівняння",
            "rows": [
              [
                "நல்லது → மேலானது (не *நல்லது விட)",
                "good → better (suppletive-like separate word)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: நல்லது → மேலானது — B1"
      }
    ]
  }
];
