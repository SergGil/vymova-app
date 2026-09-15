// Vymova — data/grammar-data/grammar_rm.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_RM: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms Persunals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Романш — четверта офіційна мова Швейцарії, хоча нею розмовляє менш ніж 1% населення країни.",
            "en": {
              "text": "Romansh is Switzerland's fourth official language, despite being spoken by less than 1% of the country's population."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "jau"
              ],
              [
                "ти",
                "ti"
              ],
              [
                "він / вона",
                "el / ella"
              ],
              [
                "ми",
                "nus"
              ],
              [
                "ви",
                "vus"
              ],
              [
                "вони (ч./ж.)",
                "els / ellas"
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
        "id": "five-idioms-rumantsch-grischun",
        "title": "Tschintg Idioms — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Романш насправді не одна мова, а п'ять традиційних писемних ідіомів (сурсільван, сутсільван, сурмиран, путер, валадер), для яких 1982 року створили компромісну наддіалектну письмову форму Rumantsch Grischun.",
            "en": {
              "text": "Romansh is not really one language but five traditional written idioms (Sursilvan, Sutsilvan, Surmiran, Puter, Vallader), for which a compromise pan-regional written form, Rumantsch Grischun, was created in 1982."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sursilvan: jeu / Vallader: eu / Rumantsch Grischun: jau",
                "я (три варіанти написання того самого слова)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Five Idioms and Rumantsch Grischun — B1"
      },
      {
        "id": "buc-negation",
        "title": "Negaziun: Buc — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою buc, що ставиться після дієслова, — та сама постпозиційна модель, що й французьке pas, а не префіксальне заперечення, типове для інших романських мов.",
            "en": {
              "text": "Negation is formed with the particle buc placed after the verb — the same postposed pattern as French pas, rather than the prefixal negation typical of other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau sai buc.",
                "Я не знаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: buc — A2"
      },
      {
        "id": "german-loanword-density",
        "title": "Pleds Tudestgs — B1",
        "emoji": "🇩🇪",
        "sections": [
          {
            "type": "intro",
            "text": "Через багатовікове оточення німецькомовними кантонами Швейцарії романш має найвищу частку німецьких запозичень серед усіх романських мов, включно з базовою лексикою, а не лише технічними термінами.",
            "en": {
              "text": "Through centuries of being surrounded by German-speaking Swiss cantons, Romansh has the highest proportion of German loanwords of any Romance language, including basic vocabulary rather than just technical terms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il bletsch (з нім. Blech)",
                "бляха, жерсть"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "German Loanword Density — B1"
      },
      {
        "id": "v2-word-order-tendency",
        "title": "Urden dals Pleds: V2 — B2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Під впливом німецького контакту романш нерідко виявляє тенденцію до порядку слів 'дієслово на другому місці' (V2) у головному реченні, коли обставина стоїть на першому місці, — риса, нетипова для романських мов.",
            "en": {
              "text": "Under German contact influence, Romansh often shows a tendency toward verb-second (V2) word order in main clauses when an adverbial opens the sentence — a feature atypical for Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Oz va jau a Cuira.",
                "Сьогодні я їду до Кура (дієслово на другому місці)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "V2 Word Order Tendency — B2"
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
        "title": "Preschent — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, і поділяється на кілька дієвідмін залежно від закінчення інфінітива.",
            "en": {
              "text": "The present tense is formed with person endings added to the verb stem, and is split into several conjugation classes depending on the infinitive ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau discurr rumantsch.",
                "Я говорю романшем."
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
        "title": "Imperfect — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект позначає тривалу чи звичну дію в минулому і утворюється суфіксом -av- (перша дієвідміна) або -ev-/-iv- (інші), доданим до основи.",
            "en": {
              "text": "The imperfect marks an ongoing or habitual past action and is formed with the suffix -av- (first conjugation) or -ev-/-iv- (others), added to the stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau discurrava rumantsch.",
                "Я, бувало, говорив романшем."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Tense — A2"
      },
      {
        "id": "preterite-literary",
        "title": "Perfect Simpel: Litterar — C1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Простий претерит майже повністю зник з усного мовлення і зберігся лише в літературних та історичних текстах, поступившись місцем складеному перфекту в повсякденній мові.",
            "en": {
              "text": "The simple preterite has almost entirely disappeared from spoken Romansh and survives only in literary and historical texts, having given way to the compound perfect in everyday speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "el discurriva (літературний претерит)",
                "він говорив (тільки в письмових текстах)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Literary Preterite — C1"
      },
      {
        "id": "compound-perfect",
        "title": "Perfect Cumponì — A2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовний перфект утворюється допоміжним дієсловом avair ('мати') або esser ('бути') у теперішньому часі плюс дієприкметник минулого часу — основна форма для вираження минулого в усному мовленні.",
            "en": {
              "text": "The spoken perfect is formed with the auxiliary avair ('to have') or esser ('to be') in the present tense plus the past participle — the main form for expressing the past in speech."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau hai discurriu.",
                "Я поговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Perfect — A2"
      },
      {
        "id": "pluperfect",
        "title": "Plusquamperfect — B1",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект утворюється допоміжним дієсловом в імперфекті плюс дієприкметник минулого часу, позначаючи дію, завершену до іншої минулої дії.",
            "en": {
              "text": "The pluperfect is formed with the auxiliary in the imperfect plus the past participle, marking an action completed before another past action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau avevel discurriu.",
                "Я вже був поговорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect — B1"
      },
      {
        "id": "future-tense",
        "title": "Futur — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетично, суфіксом -ings/-arà, доданим до основи, або аналітично конструкцією vegnir a + інфінітив.",
            "en": {
              "text": "The future tense is formed synthetically with the suffix -ings/-arà added to the stem, or analytically with the construction vegnir a + infinitive."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau vegn a discurrer.",
                "Я говоритиму."
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
        "id": "conditional-mood",
        "title": "Cundiziunal — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється допоміжним дієсловом у формі кондиціоналу плюс інфінітив, і вживається в умовних реченнях і для ввічливих прохань.",
            "en": {
              "text": "The conditional mood is formed with the conditional form of the auxiliary plus the infinitive, and is used in conditional sentences and for polite requests."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau vuless discurrer.",
                "Я хотів би поговорити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Mood — B1"
      },
      {
        "id": "imperative-mood",
        "title": "Imperativ — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини збігається з основою теперішнього часу без закінчення; множина використовує форму другої особи множини теперішнього часу.",
            "en": {
              "text": "The singular imperative coincides with the bare present stem with no ending; the plural uses the second-person-plural present form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Discurra!",
                "Говори!"
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
        "id": "subjunctive-present",
        "title": "Cungiuntiv Preschent — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб теперішнього часу вживається після дієслів сумніву чи бажання й у деяких ідіомах утворюється окремим набором закінчень, відмінним від дійсного способу.",
            "en": {
              "text": "The present subjunctive is used after verbs of doubt or wishing, and in some idioms is formed with a distinct set of endings from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ch'el vegnia.",
                "Щоб він прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Subjunctive — B2"
      },
      {
        "id": "subjunctive-imperfect",
        "title": "Cungiuntiv Imperfect — C1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб минулого часу, здебільшого літературний, утворюється власним набором закінчень і вживається в непрямій мові та умовних реченнях у минулому.",
            "en": {
              "text": "The imperfect subjunctive, largely literary, is formed with its own set of endings and is used in reported speech and past conditional clauses."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "sch'el discurress",
                "якби він говорив"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Subjunctive — C1"
      },
      {
        "id": "gerund-form",
        "title": "Gerundi — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник (герундій) утворюється суфіксом -ond/-ent, доданим до основи, і вживається для вираження супровідної дії.",
            "en": {
              "text": "The gerund is formed with the suffix -ond/-ent added to the stem, and is used to express an accompanying action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "discurrend",
                "говорячи"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund — B1"
      },
      {
        "id": "infinitive-form",
        "title": "Infinitiv — A1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -ar, -er чи -ir залежно від дієвідміни, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -ar, -er, or -ir depending on the conjugation class, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "discurrer",
                "говорити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive — A1"
      },
      {
        "id": "near-future-construction",
        "title": "Futur Datiers: Vegnir a — A2",
        "emoji": "⏩",
        "sections": [
          {
            "type": "intro",
            "text": "Найближче майбутнє часто передається тим самим аналітичним зворотом vegnir a + інфінітив, що й звичайне майбутнє, — розрізнити їх допомагає лише контекст і часовий прислівник.",
            "en": {
              "text": "The near future is often expressed with the same analytic construction vegnir a + infinitive used for the ordinary future — context and a time adverb are the only way to distinguish them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau vegn a partir immediat.",
                "Я зараз же поїду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Near Future: vegnir a — A2"
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
        "id": "gender-two-way",
        "title": "Gener: Masculin e Feminin — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, і означений артикль (il/la) та прикметники узгоджуються з цим родом.",
            "en": {
              "text": "Nouns are masculine or feminine, and the definite article (il/la) and adjectives agree with this gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il um / la dunna",
                "чоловік / жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Masculine and Feminine — A1"
      },
      {
        "id": "plural-s-ending",
        "title": "Plural: -s — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина здебільшого утворюється закінченням -s, доданим до однини, — так само, як у французькій, каталанській чи португальській, на відміну від -i в італійській.",
            "en": {
              "text": "The plural is mostly formed with the ending -s added to the singular — as in French, Catalan, or Portuguese, unlike -i in Italian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il um → ils ums",
                "чоловік → чоловіки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural: -s — A1"
      },
      {
        "id": "definite-indefinite-articles",
        "title": "Artechels: Il/La, Ün/Ina — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "table",
            "title": "Артиклі",
            "rows": [
              [
                "означений ч.р./ж.р.",
                "il / la"
              ],
              [
                "неозначений ч.р./ж.р.",
                "in / ina"
              ]
            ],
            "en": {
              "title": "Articles"
            }
          }
        ],
        "titleEn": "Definite and Indefinite Articles — A1"
      },
      {
        "id": "adjective-agreement",
        "title": "Adjectiv: Cunfurmitad — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі, зазвичай приймаючи -a в жіночому роді й -s у множині.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number, typically taking -a in the feminine and -s in the plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "bel um / bella dunna",
                "гарний чоловік / гарна жінка"
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
        "id": "possessive-adjectives",
        "title": "Adjectivs Posessivs — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "table",
            "title": "Присвійні прикметники",
            "rows": [
              [
                "мій",
                "mes / mia"
              ],
              [
                "твій",
                "tes / tia"
              ],
              [
                "наш",
                "noss / nossa"
              ]
            ],
            "en": {
              "title": "Possessives"
            }
          }
        ],
        "titleEn": "Possessive Adjectives — A2"
      },
      {
        "id": "word-order-svo",
        "title": "Urden dals Pleds: SVO — A2",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток (SVO), характерний для романських мов, хоча обставина на початку речення може спричинити інверсію дієслова й підмета.",
            "en": {
              "text": "The basic word order is Subject-Verb-Object (SVO), typical of Romance languages, though a fronted adverbial can trigger verb-subject inversion."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau vesel la dunna.",
                "Я бачу жінку."
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
        "id": "reflexive-verbs",
        "title": "Verbs Reflexivs: Sa — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні дієслова вживаються з частками, узгодженими за особою (ma, ta, sa, ns, vs, sa), поставленими перед дієсловом.",
            "en": {
              "text": "Reflexive verbs are used with particles agreeing in person (ma, ta, sa, ns, vs, sa), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau ma lavel.",
                "Я вмиваюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Verbs: sa — B1"
      },
      {
        "id": "comparative-degree",
        "title": "Cumparativ: Pli...co — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою pli ('більш') перед прикметником, а об'єкт порівняння вводиться сполучником co ('ніж').",
            "en": {
              "text": "The comparative degree is formed with the particle pli ('more') before the adjective, and the compared object is introduced with the conjunction co ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Quai è pli grond co quai.",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: pli...co — B1"
      },
      {
        "id": "superlative-degree",
        "title": "Superlativ: Il Pli — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється означеним артиклем плюс часткою pli перед прикметником.",
            "en": {
              "text": "The superlative is formed with the definite article plus the particle pli before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il pli grond",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: il pli — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "Numers: 1-10 — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "in"
              ],
              [
                "2",
                "dus"
              ],
              [
                "3",
                "trais"
              ],
              [
                "5",
                "tschintg"
              ],
              [
                "10",
                "diesch"
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
        "id": "interrogatives",
        "title": "Pronoms Interrogativs — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "tgi"
              ],
              [
                "що",
                "tge"
              ],
              [
                "де",
                "nua"
              ],
              [
                "коли",
                "cura"
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
        "id": "demonstratives",
        "title": "Pronoms Demonstrativs — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "quest"
              ],
              [
                "той",
                "quel"
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
        "id": "object-pronoun-clitics",
        "title": "Pronoms Objects: Clitics — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ненаголошені займенники-додатки (клітики) ставляться перед дієсловом у розповідних реченнях, але приєднуються після нього в наказовому способі.",
            "en": {
              "text": "Unstressed object pronouns (clitics) are placed before the verb in declarative sentences, but attach after it in the imperative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau al vesel. / Vesa'l!",
                "Я його бачу. / Побач його!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Object Pronoun Clitics — B1"
      },
      {
        "id": "prepositions-simple",
        "title": "Preposiziuns — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "в",
                "en"
              ],
              [
                "на",
                "sin"
              ],
              [
                "з",
                "cun"
              ]
            ],
            "en": {
              "title": "Prepositions"
            }
          }
        ],
        "titleEn": "Simple Prepositions — A2"
      },
      {
        "id": "conjunctions",
        "title": "Conjunctivs — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "e"
              ],
              [
                "або",
                "u"
              ],
              [
                "але",
                "ma"
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
        "id": "question-inversion",
        "title": "Dumondas: Inversiun — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання без питального слова здебільшого утворюється інверсією підмета й дієслова, а не окремою питальною часткою.",
            "en": {
              "text": "A yes/no question is mostly formed by subject-verb inversion, rather than a separate question particle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vesel el la dunna?",
                "Чи бачить він жінку?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Question Inversion — A2"
      },
      {
        "id": "relative-pronoun-che",
        "title": "Pronom Relativ: Che — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним відносним займенником che ('що/який'), незалежно від роду й числа означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable relative pronoun che ('who/which'), regardless of the gender and number of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "l'um che discurra",
                "чоловік, що говорить"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronoun: che — B1"
      },
      {
        "id": "passive-voice-vegnir",
        "title": "Pasiv: Vegnir — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється допоміжним дієсловом vegnir ('приходити') плюс дієприкметник минулого часу, замість дієслова esser ('бути'), типового для інших романських мов.",
            "en": {
              "text": "The passive voice is formed with the auxiliary vegnir ('to come') plus the past participle, instead of the verb esser ('to be') typical of other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "La casa vegn construida.",
                "Будинок будується."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Voice: vegnir — B2"
      },
      {
        "id": "diminutive-suffix",
        "title": "Diminutiv: -in/-etta — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -in (ч.р.) або -etta (ж.р.), доданим до основи іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -in (masculine) or -etta (feminine), added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "casa → casetta",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -in / -etta — B1"
      },
      {
        "id": "adjective-position-flexible",
        "title": "Posiziun da l'Adjectiv — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість описових прикметників стоїть після іменника, але невелика група частотних прикметників (bel, bun, grond) традиційно ставиться перед ним.",
            "en": {
              "text": "Most descriptive adjectives follow the noun, but a small group of frequent adjectives (bel, bun, grond) traditionally precede it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ina casa gronda / in bel di",
                "великий дім / гарний день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Position — A2"
      },
      {
        "id": "auxiliary-choice-avair-esser",
        "title": "Auxiliar: Avair u Esser — B1",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "У складених часах більшість дієслів уживає допоміжне avair ('мати'), але дієслова руху й зворотні дієслова вживають esser ('бути'), узгоджуючи дієприкметник із підметом.",
            "en": {
              "text": "In compound tenses, most verbs use the auxiliary avair ('to have'), but motion and reflexive verbs use esser ('to be'), agreeing the participle with the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ella è ida.",
                "Вона пішла."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Auxiliary Choice: avair / esser — B1"
      },
      {
        "id": "infinitive-as-noun",
        "title": "Infinitiv sco Substantiv — B1",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив може вживатися як іменник середнього роду з означеним артиклем il, позначаючи саму дію абстрактно, подібно до герундія в англійській.",
            "en": {
              "text": "The infinitive can be used as a neuter-like noun with the definite article il, denoting the action itself abstractly, similar to the English gerund."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il discurrer",
                "говоріння (сам процес)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive as Noun — B1"
      },
      {
        "id": "contraction-prepositions",
        "title": "Contracziuns: En il → Il — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і означений артикль часто зливаються в одну форму (en + il → il, da + il → dal), подібно до французьких du/au.",
            "en": {
              "text": "A preposition and the definite article often fuse into a single form (en + il → il, da + il → dal), similar to French du/au."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dal um",
                "від чоловіка (da + il)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Preposition-Article Contractions — B1"
      },
      {
        "id": "negation-mai-negina",
        "title": "Negaziun: Mai, Negina — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечні займенники mai ('ніколи') і negina ('жодна') утворюють подвійне заперечення разом із buc, посилюючи заперечну конструкцію, а не скасовуючи одне одного.",
            "en": {
              "text": "The negative words mai ('never') and negina ('none') form a double negation together with buc, reinforcing the negative rather than cancelling it out."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau vegn mai buc.",
                "Я ніколи не прийду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Double Negation: mai, negina — B1"
      },
      {
        "id": "vocative-oral-particle",
        "title": "Vocativ — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При прямому звертанні до людини форма іменника здебільшого не змінюється, на відміну від деяких інших романських мов, які зберегли залишки латинського вокатива.",
            "en": {
              "text": "In direct address, the noun form mostly stays unchanged, unlike some other Romance languages that retain traces of the Latin vocative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Maria, vegn cheu!",
                "Маріє, підійди сюди!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vocative — A2"
      },
      {
        "id": "rumantsch-grischun-controversy",
        "title": "Rumantsch Grischun: Cuntraversa — C1",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Запровадження Rumantsch Grischun як єдиної шкільної мови викликало значний спротив у деяких громадах, які воліли зберегти навчання рідним ідіомом; кілька кантонів згодом повернулися до викладання власного ідіому.",
            "en": {
              "text": "The introduction of Rumantsch Grischun as the sole school language met significant resistance in some communities, which preferred teaching in their native idiom; several regions later reverted to teaching their own idiom."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Scola: Rumantsch Grischun u l'idiom local?",
                "Школа: наддіалектна чи місцева форма?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Rumantsch Grischun Controversy — C1"
      },
      {
        "id": "graubunden-canton-status",
        "title": "Grischun: Il Chantun — B1",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "intro",
            "text": "Романш є офіційною мовою лише в кантоні Ґраубюнден — єдиному триязичному кантоні Швейцарії, де романш, німецька та італійська мають рівний статус.",
            "en": {
              "text": "Romansh is an official language only in the canton of Graubünden — Switzerland's only trilingual canton, where Romansh, German, and Italian have equal status."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Grischun: rumantsch, tudestg, talian",
                "Ґраубюнден: романська, німецька, італійська"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Graubünden: The Trilingual Canton — B1"
      },
      {
        "id": "romansh-decline-vulnerable",
        "title": "Perigel da la Lingua — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "ЮНЕСКО класифікує романш як 'вразливу' мову: кількість носіїв неухильно спадає через мовну асиміляцію з німецькою навіть у традиційно романськомовних долинах.",
            "en": {
              "text": "UNESCO classifies Romansh as 'vulnerable': the number of speakers is steadily declining due to language shift toward German even in traditionally Romansh-speaking valleys."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mintga di damain discurrents",
                "щодня менше носіїв мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Romansh's Vulnerable Status — B2"
      },
      {
        "id": "colors",
        "title": "Colurs — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "cotschen"
              ],
              [
                "чорний",
                "nair"
              ],
              [
                "білий",
                "alv"
              ],
              [
                "зелений",
                "verd"
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
        "title": "Numers: Diesch — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "ventg"
              ],
              [
                "30",
                "trenta"
              ],
              [
                "100",
                "tschient"
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
        "title": "Dis da l'Emna — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "glindesdi"
              ],
              [
                "п'ятниця",
                "venderdi"
              ],
              [
                "неділя",
                "dumengia"
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
        "title": "Famiglia — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "bab"
              ],
              [
                "мати",
                "mamma"
              ],
              [
                "брат",
                "frar"
              ],
              [
                "сестра",
                "sora"
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
        "id": "weather-vocabulary",
        "title": "Il Temp — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "sulegl"
              ],
              [
                "дощ",
                "plievgia"
              ],
              [
                "сніг",
                "naiv"
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
        "title": "Corp — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "testa"
              ],
              [
                "рука",
                "maun"
              ],
              [
                "око",
                "egl"
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
        "id": "alpine-vocabulary",
        "title": "Muntogna — B1",
        "emoji": "⛰️",
        "sections": [
          {
            "type": "table",
            "title": "Гірська лексика",
            "rows": [
              [
                "гора",
                "muntogna"
              ],
              [
                "льодовик",
                "vadretsch"
              ],
              [
                "альпійське пасовище",
                "alp"
              ]
            ],
            "en": {
              "title": "Alpine Vocabulary"
            }
          }
        ],
        "titleEn": "Alpine Vocabulary — B1"
      },
      {
        "id": "engadine-tourism-history",
        "title": "L'Engiadina: Turissem — B2",
        "emoji": "🏔️",
        "sections": [
          {
            "type": "intro",
            "text": "Долина Енгадін, де побутують ідіоми путер і валадер, стала колискою альпійського зимового туризму (Санкт-Моріц), що парадоксально прискорило германізацію регіону через приплив німецькомовних відвідувачів і мешканців.",
            "en": {
              "text": "The Engadine valley, home to the Puter and Vallader idioms, became the cradle of Alpine winter tourism (St. Moritz), which paradoxically accelerated the region's Germanization through an influx of German-speaking visitors and residents."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "San Murezzan (романська назва Санкт-Моріца)",
                "St. Moritz's Romansh name"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Engadine and Tourism — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "Vestgadira — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "chombisa"
              ],
              [
                "взуття",
                "chalzers"
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
        "title": "Mangiar — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "paun"
              ],
              [
                "вода",
                "aua"
              ],
              [
                "сир",
                "chaschiel"
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
        "title": "Salidar — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "Allegra!"
              ],
              [
                "Дякую",
                "Grazcha"
              ],
              [
                "До побачення",
                "A revair"
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
        "id": "ladin-italian-relation",
        "title": "Ladin e Furlan: Parents — B2",
        "emoji": "🌳",
        "sections": [
          {
            "type": "intro",
            "text": "Романш належить до реторо-романської підгрупи разом із ладинською мовою Південного Тіролю (Італія) і фріульською мовою — три сестринські мови, розділені географічно територією німецькомовного та італомовного населення.",
            "en": {
              "text": "Romansh belongs to the Rhaeto-Romance subgroup along with Ladin (South Tyrol, Italy) and Friulian — three sister languages separated geographically by German- and Italian-speaking territory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "rumantsch, ladin, furlan",
                "три ретороманські мови"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ladin and Friulian: Sister Languages — B2"
      },
      {
        "id": "surselva-region",
        "title": "Surselva: La Regiun — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Сурсільван — найпоширеніший з п'яти ідіомів, уживаний у долині Сурсельва навколо міста Дізентіс, історичного центру романськомовної культури й монастирської освіти.",
            "en": {
              "text": "Sursilvan is the most widely spoken of the five idioms, used in the Surselva valley around the town of Disentis, the historic center of Romansh-speaking culture and monastic education."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "il claustra da Mustér (монастир у Дізентісі)",
                "the monastery of Disentis"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Surselva Region — B1"
      },
      {
        "id": "radio-television-rumantscha",
        "title": "RTR: Medias Rumantschas — B1",
        "emoji": "📻",
        "sections": [
          {
            "type": "intro",
            "text": "Radiotelevisiun Svizra Rumantscha (RTR) — офіційна швейцарська мовна служба романшем, ключова інституція для збереження мови попри крихітну кількість носіїв.",
            "en": {
              "text": "Radiotelevisiun Svizra Rumantscha (RTR) is the official Swiss Romansh-language broadcaster, a key institution for language preservation despite the tiny number of speakers."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "RTR: novitads en rumantsch",
                "RTR: новини романшем"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "RTR: Romansh-Language Media — B1"
      },
      {
        "id": "orthography-idiom-variation",
        "title": "Ortografia: Variantas — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий звук може писатися по-різному в кожному ідіомі (наприклад, 'ш' — sch у сурсільвані, але часто -sch- в інших позиціях у валадері), тож орфографія відображає діалектну ідентичність.",
            "en": {
              "text": "The same sound may be spelled differently in each idiom (for instance, 'sh' as sch in Sursilvan, but often in different positions in Vallader), so orthography reflects dialect identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sursilvan: gliez / Rumantsch Grischun: glisch",
                "світло (два написання)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Orthographic Variation Across Idioms — B2"
      },
      {
        "id": "animals-vocabulary",
        "title": "Animals — A2",
        "emoji": "🐐",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "коза",
                "chavra"
              ],
              [
                "корова",
                "vacca"
              ],
              [
                "орел",
                "evla"
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
        "title": "Direcziuns — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "nord"
              ],
              [
                "південь",
                "sid"
              ],
              [
                "схід",
                "ost"
              ],
              [
                "захід",
                "vest"
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
        "id": "school-language-policy",
        "title": "Scola: Politica Linguistica — B2",
        "emoji": "🏫",
        "sections": [
          {
            "type": "intro",
            "text": "Мовна політика Ґраубюндена дозволяє кожній громаді самостійно обирати, якою мовою вести навчання — власним ідіомом, Rumantsch Grischun чи німецькою, — що робить кантон рідкісним прикладом мовної автономії на місцевому рівні.",
            "en": {
              "text": "Graubünden's language policy lets each municipality choose its own school language — its native idiom, Rumantsch Grischun, or German — making the canton a rare example of local-level language autonomy."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mintga vischnanca decida sasezza",
                "кожна громада вирішує сама"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "School Language Policy — B2"
      },
      {
        "id": "swiss-quadrilingual-identity",
        "title": "Svizra: Quatter Linguas — B1",
        "emoji": "🇨🇭",
        "sections": [
          {
            "type": "intro",
            "text": "Романш здобув статус національної мови 1938 року на референдумі як символічний жест підтримки проти нацистської пропаганди, що заперечувала окрему швейцарську ідентичність, — рідкісний випадок, коли мала мова стала предметом геополітичного голосування.",
            "en": {
              "text": "Romansh gained national-language status in a 1938 referendum, as a symbolic act of support against Nazi propaganda that denied a distinct Swiss identity — a rare case of a small language becoming the subject of a geopolitical vote."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "1938: votaziun naziunala",
                "національний референдум 1938 року"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Switzerland's Fourth National Language — B1"
      },
      {
        "id": "diglossia-german-romansh",
        "title": "Diglossia: Tudestg e Rumantsch — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Практично всі носії романшу є двомовними з народження й вільно володіють німецькою (або її швейцарським діалектом), тож романш живе в постійній ситуації диглосії, а не як єдина побутова мова.",
            "en": {
              "text": "Virtually all Romansh speakers are bilingual from birth and fluent in German (or its Swiss dialect), so Romansh exists in a constant state of diglossia rather than functioning as a sole everyday language."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "baseglia romontscha, baseglia tudestga",
                "перемикання мов залежно від контексту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "German-Romansh Diglossia — B2"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "Conjunctivs Supplementars — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник perquai che ('тому що') і частка dentant ('однак') додають причинові й протиставні зв'язки поза базовим набором e/u/ma.",
            "en": {
              "text": "The conjunction perquai che ('because') and the particle dentant ('however') add causal and contrastive links beyond the basic e/u/ma set."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Jau resti a casa, perquai ch'el plova.",
                "Я залишаюся вдома, бо йде дощ."
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
        "id": "irregular-verb-esser",
        "title": "Verb Irregular: Esser ('esser') — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово esser ('бути') має повністю супплетивні форми в різних часах, не пов'язані спільним коренем, — типова риса для дієслова 'бути' в багатьох мовах світу.",
            "en": {
              "text": "The verb esser ('to be') has fully suppletive forms across different tenses, not sharing a common root — a typical trait for the verb 'to be' across many world languages."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "sun (я є) vs. era (я був)",
                "am vs. was (suppletive roots)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verb: esser ('to be') — B1"
      },
      {
        "id": "irregular-plural-um",
        "title": "Plural Irregular: Um → Ums — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частотних іменників на -c чи -g змінюють кінцевий приголосний перед суфіксом множини -s (naug → nuogs), відступаючи від простого додавання -s.",
            "en": {
              "text": "A handful of frequent nouns ending in -c or -g change the final consonant before the plural suffix -s (naug → nuogs), departing from the simple addition of -s."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "il lieug → ils lieuds",
                "місце → місця (зміна приголосного)"
              ]
            ],
            "en": {
              "title": "Irregular Plural"
            }
          }
        ],
        "titleEn": "Irregular Plural: Consonant Change — B2"
      },
      {
        "id": "irregular-comparative-bun",
        "title": "Cumparativ Irregular: Bun → Meglier — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник bun ('добрий') має супплетивний порівняльний ступінь meglier ('кращий') замість очікуваного *pli bun, як у більшості інших мов.",
            "en": {
              "text": "The adjective bun ('good') has a suppletive comparative meglier ('better') instead of the expected *pli bun, as in most other languages."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "bun → meglier (не *pli bun)",
                "good → better (suppletive)"
              ]
            ],
            "en": {
              "title": "Irregular Comparative"
            }
          }
        ],
        "titleEn": "Irregular Comparative: bun → meglier — B1"
      }
    ]
  }
];
