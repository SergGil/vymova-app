// Vymova — data/grammar-data/grammar_mk.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_MK: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Лични заменки — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Македонська, на відміну від більшості слов'янських мов, майже втратила відмінки, тому ці форми практично не змінюються в побутовому мовленні.",
            "en": {
              "text": "Unlike most Slavic languages, Macedonian has largely lost case endings, so these forms stay nearly unchanged in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "јас"
              ],
              [
                "ти",
                "ти"
              ],
              [
                "він / вона / воно",
                "тој / таа / тоа"
              ],
              [
                "ми",
                "ние"
              ],
              [
                "ви",
                "вие"
              ],
              [
                "вони",
                "тие"
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
        "id": "opredelen-clen-trojen",
        "title": "Определен член: трипати — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль приєднується до кінця іменника й має три форми залежно від відстані до предмета: -от (нейтральний), -ов (близько), -он (далеко) — унікальна для балканського мовного союзу риса, відсутня в сербській чи хорватській.",
            "en": {
              "text": "The definite article attaches to the end of the noun and has three forms depending on distance to the item: -от (neutral), -ов (near), -он (far) — a feature unique to the Balkan Sprachbund, absent from Serbian or Croatian."
            }
          },
          {
            "type": "table",
            "title": "Три форми артикля",
            "rows": [
              [
                "масата (стіл, нейтральний)",
                "маса + -та"
              ],
              [
                "масава (цей стіл, близько)",
                "маса + -ва"
              ],
              [
                "масана (той стіл, далеко)",
                "маса + -на"
              ]
            ],
            "en": {
              "title": "Three Article Forms"
            }
          }
        ],
        "titleEn": "Definite Article: Three Forms — A1"
      },
      {
        "id": "gubenje-na-padezite",
        "title": "Губење на падежите — A1",
        "emoji": "📉",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від сербської чи хорватської, які зберігають повну семипадежну систему, македонська втратила відмінки майже повністю — граматичні ролі передаються порядком слів і прийменниками.",
            "en": {
              "text": "Unlike Serbian or Croatian, which retain a full seven-case system, Macedonian has lost cases almost entirely — grammatical roles are conveyed by word order and prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Му дадов книга на Марко.",
                "Я дав Марку книгу (прийменник на замість давального відмінка)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Loss of the Case System — A1"
      },
      {
        "id": "nema-infinitiv",
        "title": "Нема инфинитив — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Македонська, як і болгарська, повністю втратила інфінітив — там, де сербська скаже 'хочу піти', македонська обов'язково каже 'хочу да йдеш' з відмінюваним дієсловом після частки да.",
            "en": {
              "text": "Macedonian, like Bulgarian, has completely lost the infinitive — where Serbian says 'I want to go', Macedonian obligatorily says 'I want that I go' with a conjugated verb after the particle да."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сакам да одам.",
                "Я хочу піти (буквально 'хочу щоб іду')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Infinitive — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Негација и прашања — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою не перед дієсловом; питання без питального слова передаються часткою дали на початку речення.",
            "en": {
              "text": "Negation is formed with the particle не before the verb; yes/no questions are formed with the particle дали at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Не знам.",
                "Я не знаю."
              ],
              [
                "Дали доаѓаш?",
                "Ти приходиш?"
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
        "id": "present-tense",
        "title": "Сегашно време — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, що узгоджуються з трьома дієвідмінами; дієслово саме несе всю граматичну інформацію без окремого допоміжного слова.",
            "en": {
              "text": "The present tense is formed with person endings agreeing with three conjugation classes; the verb alone carries the full grammatical information with no separate auxiliary."
            }
          },
          {
            "type": "table",
            "title": "зборува (говорить) у теперішньому часі",
            "rows": [
              [
                "зборувам / зборуваш / зборува",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "зборуваме / зборувате / зборуваат",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "зборува (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Јас зборувам македонски.",
                "Я говорю македонською."
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
        "id": "past-imperfect",
        "title": "Минато несвршено време — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує тривалу чи звичну дію в минулому — той самий старослов'янський час, який утратила більшість сучасних слов'янських мов, окрім македонської й болгарської.",
            "en": {
              "text": "The imperfect describes an ongoing or habitual past action — the same Old Slavic tense that most modern Slavic languages have lost, except Macedonian and Bulgarian."
            }
          },
          {
            "type": "table",
            "title": "зборува в імперфекті",
            "rows": [
              [
                "зборував / зборуваше / зборуваше",
                "я говорив (тривало) / ти говорив / він говорив"
              ]
            ],
            "en": {
              "title": "зборува in the imperfect"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Секој ден зборував со него.",
                "Щодня я з ним говорив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Imperfect — B1"
      },
      {
        "id": "past-aorist",
        "title": "Минато свршено време (Аорист) — B1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист позначає одноразову завершену дію в минулому — інший старослов'янський час, збережений разом з імперфектом лише в македонській і болгарській серед сучасних слов'янських мов.",
            "en": {
              "text": "The aorist marks a one-time completed past action — another Old Slavic tense preserved, together with the imperfect, only in Macedonian and Bulgarian among modern Slavic languages."
            }
          },
          {
            "type": "table",
            "title": "зборува в аористі",
            "rows": [
              [
                "зборував / зборува / зборува",
                "я сказав (одноразово) / ти сказав / він сказав"
              ]
            ],
            "en": {
              "title": "зборува in the aorist"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вчера зборував со него еднаш.",
                "Учора я поговорив з ним один раз."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Aorist — B1"
      },
      {
        "id": "future-tense-ke",
        "title": "Идно време: Ќе — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється незмінною часткою ќе перед дієсловом теперішнього часу — аналітична форма, як у болгарській, а не синтетичне закінчення.",
            "en": {
              "text": "The future tense is formed with the invariant particle ќе before the present-tense verb — an analytic form, as in Bulgarian, rather than a synthetic ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ќе зборувам утре.",
                "Я поговорю завтра."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense with ќе — A2"
      },
      {
        "id": "future-in-past-ke-eshe",
        "title": "Идно време во минатото: Ќе + имперфект — B2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама частка ќе плюс імперфект утворює 'майбутнє в минулому' — дію, що мала статися з точки зору минулого моменту, паралель до умовного способу.",
            "en": {
              "text": "The same particle ќе plus the imperfect forms 'future in the past' — an action that was going to happen from the viewpoint of a past moment, a parallel to the conditional."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Реков дека ќе доаѓаше.",
                "Я сказав, що він прийде (з точки зору минулого)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future in the Past — B2"
      },
      {
        "id": "perfect-tense-sum-l-forms",
        "title": "Сегашен перфект: Сум + Л-форма — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складний перфект утворюється допоміжним сум ('бути') плюс дієприкметник минулого часу на -л, узгоджений з підметом за родом і числом.",
            "en": {
              "text": "The compound perfect is formed with the auxiliary сум ('to be') plus the past participle in -л, agreeing with the subject in gender and number."
            }
          },
          {
            "type": "table",
            "title": "сум зборувал",
            "rows": [
              [
                "сум зборувал (ч.р.) / сум зборувала (ж.р.)",
                "я говорив / я говорила"
              ]
            ],
            "en": {
              "title": "сум зборувал"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Јас сум зборувал со него.",
                "Я вже говорив з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Perfect: сум + л-form — B1"
      },
      {
        "id": "pluperfect-bev-l-forms",
        "title": "Плусквамперфект: Бев + Л-форма — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється імперфектом допоміжного сум (бев) плюс дієприкметник на -л.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the imperfect of the auxiliary сум (бев) plus the -л participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Бев зборувал со него пред тоа.",
                "Я вже був поговорив з ним до того."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pluperfect: бев + л-form — B2"
      },
      {
        "id": "evidential-renarrated-mood",
        "title": "Прекажан начин (Евиденцијалност) — B2",
        "emoji": "🗞️",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама л-форма без допоміжного дієслова сум сигналізує, що мовець переказує почуту, а не власну свідчену інформацію, — унікальна балканська граматична категорія, якої немає в сербській чи хорватській.",
            "en": {
              "text": "The same л-form without the auxiliary сум signals that the speaker is relaying secondhand, not personally witnessed, information — a unique Balkan grammatical category absent from Serbian or Croatian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тој заминал вчера. (без сум — переказне, не власне засвідчене)",
                "Кажуть, він поїхав учора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Evidential/Renarrated Mood — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Заповеден начин — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окрему форму для другої особи однини й множини, утворену суфіксом -и(те) чи -ј(те) на основі дієслова.",
            "en": {
              "text": "The imperative has a separate form for second person singular and plural, formed with the suffix -и(те) or -ј(те) on the verb stem."
            }
          },
          {
            "type": "table",
            "title": "зборува в наказовому способі",
            "rows": [
              [
                "зборувај! / зборувајте!",
                "говори! / говоріть!"
              ]
            ],
            "en": {
              "title": "зборува in the imperative"
            }
          }
        ],
        "titleEn": "Imperative Mood — A2"
      },
      {
        "id": "conditional-mood-bi",
        "title": "Условен начин: Би + Л-форма — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється незмінною часткою би плюс тим самим дієприкметником на -л, що й перфект.",
            "en": {
              "text": "The conditional is formed with the invariant particle би plus the same -л participle used in the perfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Би зборувал со него, ако можев.",
                "Я б поговорив з ним, якби міг."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional with би — B1"
      },
      {
        "id": "da-construction-subjunctive",
        "title": "Да-конструкција — A2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Частка да плюс дієслово теперішнього часу заміняє відсутній інфінітив у всіх контекстах, де інші мови вжили б неозначену форму дієслова.",
            "en": {
              "text": "The particle да plus a present-tense verb replaces the missing infinitive in every context where other languages would use the bare verb form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Можам да дојдам.",
                "Я можу прийти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The да-Construction (Subjunctive) — A2"
      },
      {
        "id": "verbal-aspect-perfective-imperfective",
        "title": "Глаголски вид: свршен и несвршен — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова утворюють видові пари доконаного/недоконаного виду через префіксацію чи суфіксацію — та сама слов'янська система виду, що й у сербській чи болгарській.",
            "en": {
              "text": "Verbs form perfective/imperfective aspect pairs through prefixation or suffixation — the same Slavic aspect system found in Serbian or Bulgarian."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "пишува (недоконаний) → напишува (доконаний)",
                "видова пара"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Aspect: Perfective/Imperfective — B1"
      },
      {
        "id": "future-perfect-ke-bide",
        "title": "Идно време свршено: Ќе + Перфект — B2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час виражає дію, завершену до певного моменту в майбутньому; утворюється часткою ќе плюс складений перфект.",
            "en": {
              "text": "The future perfect expresses an action completed by a certain future point; formed with the particle ќе plus the compound perfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "До утре ќе сум зборувал со него.",
                "До завтра я вже поговорю з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect: ќе + Perfect — B2"
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
        "id": "klitiki-zamenki-kratki-formi",
        "title": "Кратки (клитички) заменки — A2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі, ненаголошені форми займенників (го, ја, му, ѝ) уживаються значно частіше за повні форми й завжди стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Short, unstressed pronoun forms (го, ја, му, ѝ) are used far more often than the full forms and always stand right before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Го видов вчера.",
                "Я бачив його вчора."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Short (Clitic) Pronouns — A2"
      },
      {
        "id": "klitiki-udvoeno-oznachuvanje",
        "title": "Задолжително удвојување на клитика — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Коли прямий додаток винесений на початок речення чи має означений артикль, коротка займенникова форма обов'язково повторює його перед дієсловом, — подвійне маркування того самого учасника.",
            "en": {
              "text": "When the direct object is fronted or carries the definite article, the short pronoun form obligatorily repeats it before the verb — double marking of the same participant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Книгата ја прочитав.",
                "Книгу я прочитав (обов'язкове подвоєння)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mandatory Clitic Doubling — B1"
      },
      {
        "id": "pridavki-soglasuvanje",
        "title": "Придавки: согласување — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді й числі й стоять перед іменником, без потреби у відмінковому закінченні, оскільки самих відмінків уже немає.",
            "en": {
              "text": "Adjectives agree with the noun in gender and number and stand before the noun, with no need for a case ending since cases no longer exist."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "убав ден / убава жена / убаво дете",
                "гарний день / гарна жінка / гарна дитина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Agreement — A1"
      },
      {
        "id": "sporeduvanje-po",
        "title": "Споредба: По- — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Вищий ступінь утворюється префіксом по-, доданим перед прикметником, — на відміну від суфіксального способу в сербській.",
            "en": {
              "text": "The comparative is formed with the prefix по-, added before the adjective — unlike the suffixal method used in Serbian."
            }
          },
          {
            "type": "table",
            "title": "Ступені порівняння",
            "rows": [
              [
                "убав → поубав",
                "гарний → гарніший"
              ]
            ],
            "en": {
              "title": "Degrees of Comparison"
            }
          }
        ],
        "titleEn": "Comparison with по- — A2"
      },
      {
        "id": "prevzhodna-stepen-naj",
        "title": "Превосходна степен: Нај- — A2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає ще один префікс нај- перед уже утвореним вищим ступенем — два префікси поспіль на одному прикметнику.",
            "en": {
              "text": "The superlative adds yet another prefix нај- before the already-formed comparative — two prefixes in a row on the same adjective."
            }
          },
          {
            "type": "table",
            "title": "Найвищий ступінь",
            "rows": [
              [
                "убав → поубав → најубав",
                "гарний → гарніший → найгарніший"
              ]
            ],
            "en": {
              "title": "Superlative"
            }
          }
        ],
        "titleEn": "Superlative with нај- — A2"
      },
      {
        "id": "mnozhina-formi",
        "title": "Множински форми — A2",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється власним набором закінчень для кожного роду — -и для більшості іменників, -а чи -иња для середнього роду.",
            "en": {
              "text": "The plural is formed with its own set of endings for each gender — -и for most nouns, -а or -иња for the neuter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "маса → маси / дете → деца",
                "стіл → столи / дитина → діти"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation — A2"
      },
      {
        "id": "rod-na-imenkite",
        "title": "Род на именките — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають три роди — чоловічий, жіночий, середній — здебільшого визначувані закінченням у називному відмінку.",
            "en": {
              "text": "Nouns have three genders — masculine, feminine, neuter — mostly determined by the ending of the nominative form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "маж (ч.р.) / жена (ж.р.) / дете (с.р.)",
                "чоловік / жінка / дитина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Noun Gender — A1"
      },
      {
        "id": "broevi-osnovni",
        "title": "Основни броеви — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні македонські корені й для чоловічого роду людей після числівника вживають особливу форму іменника.",
            "en": {
              "text": "Cardinal numbers have their own Macedonian roots and, for masculine human nouns after a number, take a special noun form."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "еден, два, три",
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
        "id": "broevi-redni",
        "title": "Редни броеви — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником за родом і поводяться як звичайні прикметники.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and behave like ordinary adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "првиот ден",
                "перший день"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "prashalni-zborovi",
        "title": "Прашални зборови — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова што (що), кој (хто), каде (де), кога (коли) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words што (what), кој (who), каде (where), кога (when) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Каде живееш?",
                "Де ти живеш?"
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
        "id": "odnosna-recenica-koj-shto",
        "title": "Односна реченица: Кој, Што — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення вводиться займенниками кој (для осіб) чи што (для речей), узгодженими за родом і числом з означуваним іменником.",
            "en": {
              "text": "A relative clause is introduced with кој (for people) or што (for things), agreeing in gender and number with the modified noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Човекот кој зборува е учител.",
                "Чоловік, який говорить, — учитель."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses: кој, што — B1"
      },
      {
        "id": "udaren-slog-antepenultimen",
        "title": "Фиксиран удар: третиот слог од крајот — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від сербської з її рухомим і тональним наголосом, македонська має фіксований наголос на третьому складі від кінця слова — цілком інша, чітко визначена система.",
            "en": {
              "text": "Unlike Serbian with its mobile, pitch-based stress, Macedonian has a fixed stress on the third-to-last syllable of the word — an entirely different, strictly determined system."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "у́читeл, у́читeли, у́читeлите (наголос завжди на тому самому складі від кінця)",
                "фіксований антепенультимативний наголос"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Antepenultimate Stress — A2"
      },
      {
        "id": "zvatelen-padezh-ostanat",
        "title": "Звателен падеж: единствениот што остана — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча решта відмінків зникла, кличний відмінок дивом вижив — окремі закінчення для звертання, особливо для чоловічих імен і родинних термінів.",
            "en": {
              "text": "Although the rest of the case system disappeared, the vocative case miraculously survived — dedicated endings for direct address, especially for male names and kinship terms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Марко → Марко! / жена → жено!",
                "звертання зі спеціальним закінченням"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vocative: The One Case That Survived — B1"
      },
      {
        "id": "predlozi-zamena-padezhi",
        "title": "Предлози наместо падежи: На, Од, Со — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники на, од, со беруть на себе функції втрачених давального, родового й орудного відмінків — на за давальний і присвійний, од за родовий і похідний, со за орудний.",
            "en": {
              "text": "The prepositions на, од, со take over the functions of the lost dative, genitive, and instrumental cases — на for dative and possessive, од for genitive and source, со for instrumental."
            }
          },
          {
            "type": "table",
            "title": "Функції прийменників",
            "rows": [
              [
                "на Марко (Маркові / Марка)",
                "давальний/присвійний"
              ],
              [
                "од Скопје (зі Скоп'є)",
                "родовий/похідний"
              ],
              [
                "со молив (олівцем)",
                "орудний"
              ]
            ],
            "en": {
              "title": "Preposition Functions"
            }
          }
        ],
        "titleEn": "Prepositions Replacing Cases: на, од, со — A2"
      },
      {
        "id": "slobonen-red-na-zborovite",
        "title": "Слободен ред на зборовите — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Завдяки короткій займенниковій формі, що завжди позначає граматичну роль, порядок повнозначних слів у реченні досить вільний і слугує переважно для наголосу.",
            "en": {
              "text": "Thanks to the short pronoun form always marking the grammatical role, the order of full content words in the sentence is fairly free and mostly serves for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Книгата ја прочитав. (наголос на об'єкті)",
                "Книгу я прочитав (саме книгу)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Free Word Order — B1"
      },
      {
        "id": "prisvoina-zamenka",
        "title": "Присвојни заменки — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники мој/твој/негов узгоджуються з предметом володіння за родом і числом і стоять перед іменником, як прикметники.",
            "en": {
              "text": "Possessive pronouns мој/твој/негов agree with the possessed object in gender and number and stand before the noun, like adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "мојата книга",
                "моя книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Pronouns — A1"
      },
      {
        "id": "pokazni-zamenki-trojni",
        "title": "Показни заменки: Овој, Тој, Онoj — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники мають три ступені віддаленості, точно узгоджені з трьома формами означеного артикля: овој ('цей', -ов), тој ('той', нейтральний -от), онoj ('он той', -он).",
            "en": {
              "text": "Demonstratives have three degrees of distance, exactly matching the three definite article forms: овој ('this', -ов), тој ('that', neutral -от), онoj ('that over there', -он)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "овој човек",
                "цей чоловік (поряд зі мною)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: овој, тој, онoj — A2"
      },
      {
        "id": "odrechni-zamenki",
        "title": "Одречни заменки: Никој, Ништо — A2",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечні займенники никој ('ніхто') і ништо ('нічого') обов'язково вимагають ще й частки не перед дієсловом — подвійне заперечення тут граматично обов'язкове.",
            "en": {
              "text": "The negative pronouns никој ('nobody') and ништо ('nothing') obligatorily also require the particle не before the verb — double negation here is grammatically mandatory."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Никој не знае.",
                "Ніхто не знає."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negative Pronouns: никој, ништо — A2"
      },
      {
        "id": "vozvraten-zamenka-sebe-se",
        "title": "Возвратна заменка: Себе, Се — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотність передається повною формою себе (наголошеною) чи короткою се (ненаголошеною, набагато частішою) — незалежно від особи й числа підмета.",
            "en": {
              "text": "Reflexivity is expressed with the full form себе (stressed) or the short се (unstressed, far more frequent) — independent of the subject's person and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тој се мие.",
                "Він миється."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: себе, се — A2"
      },
      {
        "id": "prilozi-obrazuvanje",
        "title": "Прилози: образување — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються від прикметника середнього роду, що вживається самостійно, — без окремого прислівникового суфікса.",
            "en": {
              "text": "Manner adverbs are often formed from the neuter form of the adjective used on its own — with no dedicated adverbial suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "убаво (гарно, той самий вигляд, що й прикметник с.р.)",
                "прикметник, ужитий як прислівник"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adverb Formation — B1"
      },
      {
        "id": "sesoznaeni-zamenki-emphatichni",
        "title": "Полни (нагласени) заменки — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Крім коротких, ненаголошених форм, існують і повні, наголошені займенники, які вживаються для контрасту чи наголосу, часто разом з короткою формою в тому самому реченні.",
            "en": {
              "text": "Besides the short, unstressed forms, there are also full, stressed pronouns used for contrast or emphasis, often appearing together with the short form in the same sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Мене ме виде, не тебе.",
                "Він бачив мене, не тебе (наголос через повну форму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Full (Stressed) Pronouns — B1"
      },
      {
        "id": "umalitelni-nastavki",
        "title": "Умалителни наставки — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси (-че, -иче, -ица) надзвичайно продуктивні й уживаються значно частіше, ніж у більшості слов'янських мов.",
            "en": {
              "text": "Diminutive suffixes (-че, -иче, -ица) are extremely productive and used far more often than in most Slavic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "маса → масиче",
                "стіл → столик"
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
        "id": "soyuzi-osnovni",
        "title": "Основни сврзници: И, Или, Но — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники и, или, но не змінюють порядок слів у реченні й з'єднують слова чи цілі речення однаково.",
            "en": {
              "text": "The coordinating conjunctions и, или, но don't change the word order and connect either words or whole clauses in the same way."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Добро, но скапо.",
                "Добре, але дорого."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Basic Conjunctions: и, или, но — A1"
      },
      {
        "id": "ednakvost-sporeduvanje",
        "title": "Споредба на еднаквост: Исто како — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння рівності виражається зворотом исто како ('так само як') між двома предметами порівняння.",
            "en": {
              "text": "Comparison of equality is expressed with the phrase исто како ('the same as') between the two compared items."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тој е висок исто како мене.",
                "Він такого ж зросту, як і я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Equality Comparison: исто како — B1"
      },
      {
        "id": "direkten-indirekten-objekt-klitiki",
        "title": "Директен и индиректен објект: Го, Му — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Коротка форма прямого додатка (го/ја/ги) відмінна від короткої форми непрямого додатка (му/ѝ/им) — два окремі набори клітик, що можуть з'являтися в тому самому реченні одночасно.",
            "en": {
              "text": "The short direct-object form (го/ја/ги) is distinct from the short indirect-object form (му/ѝ/им) — two separate clitic sets that can both appear in the same sentence at once."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Му ја дадов книгата.",
                "Я дав йому книгу (обидва клітики одночасно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Direct vs. Indirect Object Clitics — B1"
      },
      {
        "id": "evidential-mood-upotreba",
        "title": "Прекажан начин во новинарството — B2",
        "emoji": "📰",
        "sections": [
          {
            "type": "intro",
            "text": "Переказний спосіб активно вживається в журналістиці, чутках і фольклорі, щоб позначити непідтверджену чи чужу інформацію — репортер зобов'язаний уживати саме цю форму, переказуючи заяву без власного підтвердження.",
            "en": {
              "text": "The renarrated mood is actively used in journalism, gossip, and folklore to mark unconfirmed or secondhand information — a reporter is obligated to use exactly this form when relaying a statement without personal confirmation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Министерот изјавил дека ситуацијата ќе се подобри. (переказний спосіб)",
                "Міністр нібито заявив, що ситуація покращиться."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Renarrated Mood in Journalism — B2"
      },
      {
        "id": "aorist-imperfekt-razlika",
        "title": "Аорист наспроти имперфект — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист описує подію як одноразовий, завершений факт, тоді як імперфект малює її як тло, тривалий процес чи звичку — те саме розрізнення, яке зникло в російській, польській і більшості інших слов'янських мов.",
            "en": {
              "text": "The aorist depicts an event as a one-time, completed fact, while the imperfect paints it as background, an ongoing process, or a habit — the same distinction lost in Russian, Polish, and most other Slavic languages."
            }
          },
          {
            "type": "table",
            "title": "Контраст",
            "rows": [
              [
                "Дојде и седна. (аорист, одноразові факти)",
                "Він прийшов і сів."
              ],
              [
                "Седеше и читаше. (імперфект, тло/тривалість)",
                "Він сидів і читав (на тлі іншої події)."
              ]
            ],
            "en": {
              "title": "Contrast"
            }
          }
        ],
        "titleEn": "Aorist vs. Imperfect — B2"
      },
      {
        "id": "balkanski-jazichen-sojuz",
        "title": "Балкански јазичен сојуз — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Втрата відмінків, утрата інфінітива, подвійний означений артикль і переказний спосіб — усі ці риси македонська поділяє не з іншими слов'янськими мовами, а з албанською, румунською й грецькою — балканським мовним союзом, утвореним через контакт, а не спільне походження.",
            "en": {
              "text": "Case loss, infinitive loss, the double definite article, and the renarrated mood — Macedonian shares all these features not with other Slavic languages but with Albanian, Romanian, and Greek — the Balkan Sprachbund, formed through contact, not shared ancestry."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ці риси об'єднують мови різних сімей, що століттями контактували на Балканах.",
                "балканський мовний союз"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Balkan Sprachbund — B2"
      },
      {
        "id": "dijalekti-zapad-istok",
        "title": "Западни и источни дијалекти — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Стандартна македонська базується на західно-центральних говірках (Прилеп-Битола), тоді як східні говірки ближчі до болгарської, а їхнє розмежування досі є предметом історико-лінгвістичної дискусії.",
            "en": {
              "text": "Standard Macedonian is based on west-central dialects (Prilep-Bitola), while eastern dialects are closer to Bulgarian, and the boundary between them remains a subject of historical-linguistic debate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандарт базується саме на західно-центральних говірках, не на східних.",
                "діалектна основа стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Western and Eastern Dialects — B2"
      },
      {
        "id": "klitiki-red-na-natrupuvanje",
        "title": "Ред на натрупување клитики — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Коли непрямий і прямий додаток поєднуються в одному реченні, непрямий клітик завжди йде першим — фіксований порядок, що не можна порушити.",
            "en": {
              "text": "When indirect and direct object clitics combine in one sentence, the indirect one always comes first — a fixed order that cannot be violated."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Му ја дадов. (му перед ја, не навпаки)",
                "Я дав це йому."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Clustering Order — B2"
      },
      {
        "id": "da-konstrukcija-celni-recenici",
        "title": "Да-конструкција во целни реченици — B1",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама да-конструкція вводить і підрядне речення мети — 'щоб', — виконуючи в цій ролі функцію, яку в інших мовах виконує окремий сполучник.",
            "en": {
              "text": "The same да-construction also introduces a purpose clause — 'in order to' — performing in this role the function a separate conjunction handles in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Работам за да заработам пари.",
                "Я працюю, щоб заробити гроші."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The да-Construction in Purpose Clauses — B1"
      },
      {
        "id": "da-konstrukcija-dopolnitelni-recenici",
        "title": "Да-конструкција во дополнителни реченици — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Та сама конструкція вводить і з'ясувальне підрядне речення після дієслів на кшталт 'хотіти', 'могти', 'мусити' — без потреби в окремому сполучнику 'що'.",
            "en": {
              "text": "The same construction also introduces a complement clause after verbs like 'want', 'can', 'must' — with no need for a separate conjunction 'that'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сакам да дојдеш.",
                "Я хочу, щоб ти прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The да-Construction in Complement Clauses — B1"
      },
      {
        "id": "udvoeno-oznachuvanje-zadolzhitelno-vs-fakultativno",
        "title": "Задолжително наспроти факултативно удвојување — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння додатка обов'язкове, коли він винесений на початок чи має означений артикль, але лише необов'язкове (для наголосу) у звичайному порядку слів, — межа між правилом і стилістичним вибором.",
            "en": {
              "text": "Object doubling is mandatory when the object is fronted or carries the definite article, but only optional (for emphasis) in ordinary word order — the boundary between rule and stylistic choice."
            }
          },
          {
            "type": "table",
            "title": "Обов'язкове проти факультативного",
            "rows": [
              [
                "Книгата ја прочитав. (обов'язкове, тема винесена)",
                "Го видов Марко. (факультативне, для наголосу)"
              ]
            ],
            "en": {
              "title": "Mandatory vs. Optional"
            }
          }
        ],
        "titleEn": "Mandatory vs. Optional Doubling — B2"
      },
      {
        "id": "turski-zaemki",
        "title": "Турски заемки од османскиот период — B1",
        "emoji": "🕌",
        "sections": [
          {
            "type": "intro",
            "text": "П'ять століть османського панування залишили в македонській окремий шар турецьких запозичень у побутовій, кулінарній і ремісничій лексиці, — щільніший шар, ніж у сербській чи хорватській, що раніше звільнилися від османського впливу.",
            "en": {
              "text": "Five centuries of Ottoman rule left Macedonian with a distinct layer of Turkish loanwords in everyday, culinary, and craft vocabulary — a denser layer than in Serbian or Croatian, which freed themselves from Ottoman influence earlier."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень",
            "rows": [
              [
                "чорапи (шкарпетки) — з турецької çorap",
                "турецьке запозичення"
              ],
              [
                "бурек (пиріг) — з турецької börek",
                "турецьке запозичення"
              ]
            ],
            "en": {
              "title": "Loanword Examples"
            }
          }
        ],
        "titleEn": "Ottoman-Era Turkish Loanwords — B1"
      },
      {
        "id": "odreden-clen-sopstveni-imina",
        "title": "Определен член со сопствени именки — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль рідко вживається з власними назвами, але часто додається до абстрактних чи збірних іменників, надаючи їм значення узагальненого, добре відомого поняття, а не конкретного предмета.",
            "en": {
              "text": "The definite article is rarely used with proper names, but is often added to abstract or collective nouns, giving them the sense of a generalized, well-known concept rather than a specific item."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Животот е тежок. (означене узагальнене поняття)",
                "Життя важке."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Article with Abstract Nouns — B2"
      },
      {
        "id": "vieżlivost-ti-vie",
        "title": "Учтивост: Ти наспроти Вие — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї особи передається займенником множини вие з узгодженням дієслова у множині, тоді як ти лишається неформальним.",
            "en": {
              "text": "Polite address to one person is expressed with the plural pronoun вие with plural verb agreement, while ти remains informal."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дали зборувате англиски?",
                "Ви розмовляєте англійською?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness: ти vs. вие — A2"
      },
      {
        "id": "l-formi-rodova-oznaka",
        "title": "Л-форми: родова ознака — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу на -л змінюється за родом підмета (-л/-ла/-ло/-ле) незалежно від того, чи вживається він у перфекті, плюсквамперфекті, умовному чи переказному способі.",
            "en": {
              "text": "The past participle in -л changes for the subject's gender (-л/-ла/-ло/-ле) regardless of whether it's used in the perfect, pluperfect, conditional, or renarrated mood."
            }
          },
          {
            "type": "table",
            "title": "Родові форми",
            "rows": [
              [
                "зборувал (ч.р.) / зборувала (ж.р.) / зборувале (мн.)",
                "говорив / говорила / говорили"
              ]
            ],
            "en": {
              "title": "Gender Forms"
            }
          }
        ],
        "titleEn": "L-forms: Gender Marking — B1"
      },
      {
        "id": "pasiv-so-se",
        "title": "Пасив со Се — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Безособовий пасив утворюється часткою се, доданою до дієслова, — 'тут говорять македонською', без потреби у вказівці на виконавця.",
            "en": {
              "text": "The impersonal passive is formed with the particle се added to the verb — 'Macedonian is spoken here', with no need to name the doer."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Тука се зборува македонски.",
                "Тут говорять македонською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive with се — B1"
      },
      {
        "id": "pasiv-so-e-participle",
        "title": "Пасив со Е + Партицип — B2",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Формальніший пасив стану утворюється допоміжним е ('є') плюс пасивний дієприкметник на -н/-т, наголошуючи на результаті, а не на процесі.",
            "en": {
              "text": "A more formal state passive is formed with the auxiliary е ('is') plus the passive participle in -н/-т, emphasizing the result rather than the process."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Куќата е изградена.",
                "Дім побудований (готовий результат)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "State Passive with е + Participle — B2"
      },
      {
        "id": "broevi-imenki-posebna-forma",
        "title": "Посебна форма по броеви за машки род — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники чоловічого роду, що позначають неживі предмети, після числівника отримують особливу коротку форму на -а, відмінну від звичайної множини.",
            "en": {
              "text": "Masculine nouns denoting inanimate objects take a special short form in -а after a number, distinct from the ordinary plural."
            }
          },
          {
            "type": "table",
            "title": "Особлива форма після числа",
            "rows": [
              [
                "два стола (не 'столови')",
                "спеціальна форма після числівника"
              ]
            ],
            "en": {
              "title": "Special Post-Numeral Form"
            }
          }
        ],
        "titleEn": "Special Post-Numeral Noun Form — B2"
      },
      {
        "id": "klitiki-mesto-vo-recenicata",
        "title": "Место на клитиките во реченицата — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі займенникові форми завжди стоять безпосередньо перед дієсловом (крім наказового способу, де вони йдуть після), незалежно від того, що ще є в реченні.",
            "en": {
              "text": "Short pronoun forms always stand right before the verb (except in the imperative, where they follow it), regardless of whatever else is in the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Дај ми го! (наказовий спосіб, клітики після дієслова)",
                "Дай мені це!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Placement Rules — B2"
      },
      {
        "id": "pochitelna-mnozhina",
        "title": "Почитувачка множина за обраќање — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Крім займенника вие, у формальних контекстах прикметники й дієприкметники, що стосуються поважної особи, теж можуть стояти у множині, попри однину референта.",
            "en": {
              "text": "Besides the pronoun вие, in formal contexts adjectives and participles relating to a respected person can also stand in the plural, despite the referent being singular."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Вие сте љубезни. (множина попри одну особу)",
                "Ви люб'язні."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Honorific Plural Agreement — B2"
      },
      {
        "id": "slovoobrazuvanje-prefiksi",
        "title": "Зборообразување: префикси — B1",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Префікси не лише змінюють вид дієслова, а й можуть повністю змінити його лексичне значення, утворюючи нове слово з тим самим коренем.",
            "en": {
              "text": "Prefixes don't just change verb aspect but can completely change its lexical meaning, forming a new word from the same root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "пишува (писати) → препишува (переписувати)",
                "префікс змінює значення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Formation: Prefixes — B1"
      },
      {
        "id": "slovoobrazuvanje-nastavki",
        "title": "Зборообразување: наставки — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Численні суфікси дозволяють утворювати іменники-діячі, назви місць чи абстрактні поняття з дієслівного чи прикметникового кореня.",
            "en": {
              "text": "Numerous suffixes allow forming agent nouns, place names, or abstract concepts from a verb or adjective root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "учи (навчати) → учител (вчитель)",
                "суфікс -тел утворює діяча"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Formation: Suffixes — B1"
      },
      {
        "id": "fiksirani-izrazi-idiomi",
        "title": "Фиксирани изрази и идиоми — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками, з граматикою, яку не варто аналізувати компонент за компонентом, — значення виникає лише з цілого виразу.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks, with grammar not meant to be analyzed component by component — the meaning arises only from the whole expression."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Му бега филмот. (буквально 'у нього тікає фільм' → він розгублений)",
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
        "id": "istoriski-spor-so-bugarski",
        "title": "Историски спор со бугарскиот — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Македонська й болгарська настільки близькі граматично й лексично, що питання, чи є македонська окремою мовою, залишається предметом історичної й політичної дискусії, попри тверду сучасну кодифікацію як окремого стандарту.",
            "en": {
              "text": "Macedonian and Bulgarian are so close grammatically and lexically that whether Macedonian is a separate language remains a subject of historical and political debate, despite its firm modern codification as a distinct standard."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стандартизація македонської мови відбулася 1944-1945 років.",
                "кодифікація окремого стандарту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Historical Dispute with Bulgarian — B2"
      },
      {
        "id": "dvoen-negacija",
        "title": "Двојна негација: задолжителна — A2",
        "emoji": "❌",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечні слова никогаш, никаде, ништо завжди вимагають супровідної частки не перед дієсловом — подвійне заперечення граматично обов'язкове, а не стилістична помилка.",
            "en": {
              "text": "The negative words никогаш, никаде, ништо always require the accompanying particle не before the verb — double negation is grammatically mandatory, not a stylistic error."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Никогаш не доаѓа.",
                "Він ніколи не приходить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mandatory Double Negation — A2"
      },
      {
        "id": "konstrukcii-so-ima-nema",
        "title": "Конструкции со Има, Нема — A1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово има ('є, має') і його заперечна форма нема ('немає') виражають одразу і існування, і володіння — та сама форма, незалежна від особи чи числа мовця.",
            "en": {
              "text": "The verb има ('there is, has') and its negative form нема ('there isn't') express both existence and possession at once — the same form, regardless of the speaker's person or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Нема пари.",
                "Немає грошей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Constructions with има/нема — A1"
      },
      {
        "id": "pismen-naspram-razgovoren-registar",
        "title": "Писмен наспроти разговорен регистар — B2",
        "emoji": "🗣️",
        "sections": [
          {
            "type": "intro",
            "text": "Розмовна мова часто спрощує аорист до перфекта, скорочує клітики й активніше вживає турецькі запозичення, тоді як писемний стандарт зберігає повний набір часів і уникає розмовних скорочень.",
            "en": {
              "text": "Colloquial speech often simplifies the aorist toward the perfect, shortens clitics further, and uses Turkish loanwords more freely, while the written standard keeps the full tense inventory and avoids colloquial contractions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "У розмовній мові аорист часто заміняють перфектом там, де стандарт вимагає аориста.",
                "спрощення в розмовному регістрі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Written vs. Colloquial Register — B2"
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
        "id": "nepravilni-glagoli",
        "title": "Неправилни глаголи — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово сум ('бути') має повністю нерегулярне відмінювання в теперішньому часі, не за жодним зі стандартних зразків, і водночас є найважливішим допоміжним дієсловом мови.",
            "en": {
              "text": "The verb сум ('to be') has completely irregular conjugation in the present tense, following none of the standard patterns, and is at the same time the language's single most important auxiliary verb."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "сум / си / е / сме / сте / се",
                "я є / ти є / він є / ми є / ви є / вони є"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "nepravilna-mnozhina",
        "title": "Неправилна множина — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза загальним правилом за родом.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the general gender-based rule."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "дете → деца (не за очікуваним зразком середнього роду)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fiksirani-izrazi-poslovici",
        "title": "Фиксирани изрази во поговорките — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчні граматичні конструкції, вже втрачені в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical constructions already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Стара кокошка добра чорба прави.",
                "Стара курка робить добрий бульйон (застигла приказка з архаїчною структурою)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fixed Expressions in Proverbs — B2"
      }
    ]
  }
];
