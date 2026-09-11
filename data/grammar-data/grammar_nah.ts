// Vymova — data/grammar-data/grammar_nah.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_NAH: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Tētlahtōltiliztli — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Науатль була державною мовою ацтецької імперії; наведені тут повні форми займенників у розмовній мові часто скорочують.",
            "en": {
              "text": "Nahuatl was the state language of the Aztec Empire; the full pronoun forms shown here are often shortened in everyday speech."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "nehuātl"
              ],
              [
                "ти",
                "tehuātl"
              ],
              [
                "він / вона / воно",
                "yehuātl"
              ],
              [
                "ми",
                "tehuāntin"
              ],
              [
                "ви",
                "amehuāntin"
              ],
              [
                "вони",
                "yehuāntin"
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
        "id": "polysinteza",
        "title": "Cē Tlahtōlli, Miec Tlanextiliztli — A2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Науатль — полісинтетична мова: одне дієслово може вмістити підмет, додаток і навіть цілий іменник-об'єкт усередині себе, утворюючи те, що в українській зайняло б ціле речення.",
            "en": {
              "text": "Nahuatl is a polysynthetic language: a single verb can contain the subject, the object, and even a whole object-noun inside it, forming what would take a full sentence in Ukrainian."
            }
          },
          {
            "type": "table",
            "title": "Приклад полісинтетичного слова",
            "rows": [
              [
                "nitlaxcalchīhua (я-тортилья-роблю)",
                "Я роблю тортильї (одне слово замість речення)."
              ]
            ],
            "en": {
              "title": "Polysynthetic Word Example"
            }
          }
        ],
        "titleEn": "Polysynthesis: One Word, Many Meanings — A2"
      },
      {
        "id": "absolutivo-tl",
        "title": "Tlamachiyōtīlli -tl/-tli/-in — A1",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник у словниковій формі майже завжди закінчується абсолютивним суфіксом -tl, -tli чи -in, який зникає, коли іменник отримує присвійний префікс чи входить до складу дієслова.",
            "en": {
              "text": "A noun in its dictionary form almost always ends with the absolutive suffix -tl, -tli, or -in, which disappears when the noun takes a possessive prefix or is incorporated into a verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "calli (дім) → nocal (мій дім, без -li)",
                "абсолютив зникає з присвійністю"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Absolutive Suffix -tl/-tli/-in — A1"
      },
      {
        "id": "reverencial-tzin",
        "title": "-tzin: Tlahpaloliztli — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -tzin, доданий майже до будь-якого іменника чи навіть дієслова, надає шанобливого, ввічливого відтінку — надзвичайно продуктивна граматична система пошани, вбудована в саму морфологію.",
            "en": {
              "text": "The suffix -tzin, added to almost any noun or even a verb, adds a respectful, polite shade — an extraordinarily productive grammaticalized system of respect built right into the morphology."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nāntli (мати) → nāntzin (шанована матінка)",
                "шаноблива форма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-tzin: The Reverential Suffix — A2"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Āhmō ihuān Tlahtlaniliztli — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою āhmō перед дієсловом; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle āhmō before the verb; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Āhmō nicmati.",
                "Я не знаю."
              ],
              [
                "Tihuāllāz?",
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
        "id": "present-tense",
        "title": "Āxcān Tlahtōlli — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час — це проста основа дієслова з префіксом підмета, без окремого часового суфікса взагалі.",
            "en": {
              "text": "The present tense is simply the verb stem with a subject prefix, with no dedicated tense suffix at all."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nitlacua.",
                "Я їм."
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
        "id": "past-tense-suffix-c",
        "title": "Ōīc Tlahtōlli: -c/-qui — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється суфіксом -c/-qui в кінці дієслова, часто разом з допоміжним префіксом ō- на початку, що позначає завершену дію.",
            "en": {
              "text": "The past tense is formed with the suffix -c/-qui at the end of the verb, often together with the auxiliary prefix ō- at the start, marking a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ōnitlacuah.",
                "Я поїв."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: -c/-qui — A2"
      },
      {
        "id": "imperfect-past-continuous",
        "title": "Cāticah Ōīc: -ya — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала чи звична дія в минулому передається суфіксом -ya, доданим до основи дієслова.",
            "en": {
              "text": "An ongoing or habitual past action is expressed with the suffix -ya added to the verb stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nitlacuaya.",
                "Я їв (тривало, звично)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Past: -ya — B1"
      },
      {
        "id": "future-tense-z",
        "title": "Mochīhuaz Tlahtōlli: -z — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -z, доданим до основи дієслова, — синтетична форма без окремого допоміжного слова.",
            "en": {
              "text": "The future tense is formed with the suffix -z added to the verb stem — a synthetic form with no separate auxiliary word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nitlacuaz.",
                "Я їстиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -z — A2"
      },
      {
        "id": "imperative-mood",
        "title": "Tēnāhuatiliztli — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Прямий наказ — гола основа дієслова; ввічливіша форма додає префікс xi- на початку.",
            "en": {
              "text": "A direct command is the bare verb stem; a politer form adds the prefix xi- at the start."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Xitlacua!",
                "Їж!"
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
        "id": "optative-mood-ma",
        "title": "Mā: Tlanequiliztli — B1",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Частка mā перед дієсловом теперішнього часу виражає побажання чи спонукання щодо третьої особи — 'хай зробить'.",
            "en": {
              "text": "The particle mā before a present-tense verb expresses a wish or exhortation toward a third person — 'may they do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mā quichīhua.",
                "Хай він це зробить."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Optative: Mā — B1"
      },
      {
        "id": "perfect-aspect-o-prefix",
        "title": "Ōtlan Tlahtōlli — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Допоміжний префікс ō-, доданий на початку дієслова разом з суфіксом -c/-qui, підкреслює завершеність і остаточність дії з наголосом на теперішньому результаті.",
            "en": {
              "text": "The auxiliary prefix ō-, added at the start of the verb together with the -c/-qui suffix, emphasizes the completion and finality of an action, with focus on the present result."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ōticchīuh.",
                "Ти вже це зробив."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Aspect: ō- Prefix — B1"
      },
      {
        "id": "pluperfect-past-of-past",
        "title": "Ōtlan Ōīc Tlahtōlli — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється поєднанням минулого суфікса з додатковим часовим уточненням у контексті.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed by combining the past suffix with additional temporal clarification in context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ōnitlacuahca īcuāc ōniquīz.",
                "Я вже був поїв, коли вийшов."
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
        "id": "habitual-aspect-frequentative-reduplication",
        "title": "Mochīhua Mieccān: Tlapēhualtiliztli — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну, регулярно повторювану дію можна підкреслити подвоєнням складу основи дієслова — граматична стратегія без окремого суфікса.",
            "en": {
              "text": "A habitual, regularly repeated action can be emphasized by reduplicating a syllable of the verb stem — a grammatical strategy with no dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nimomomōtla. (подвоєння для звички)",
                "Я постійно кидаюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Habitual via Reduplication — B1"
      },
      {
        "id": "progressive-aspect-tok",
        "title": "Cah Tlachīhualiztli: -toc/-tica — B2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія передається дієприслівником плюс допоміжне дієслово-зв'язку у формі -toc/-tica ('перебувати в положенні') — точний аналог тривалого часу.",
            "en": {
              "text": "An ongoing action is expressed with a converb plus the auxiliary copula in the form -toc/-tica ('to be positioned') — a close analog of the continuous tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nitlacuahtoc.",
                "Я саме їм (перебуваю в стані їдіння)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Progressive: -toc/-tica — B2"
      },
      {
        "id": "desiderative-nequi",
        "title": "Nēqui: Tlanequiliztli — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом nequi ('хотіти'), поставленим після смислового дієслова в потрібній формі, — 'хотіти зробити щось'.",
            "en": {
              "text": "A wish is expressed with the verb nequi ('to want'), placed after the meaning verb in the required form — 'to want to do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nicnequi nitlacuāz.",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: Nēqui — A2"
      },
      {
        "id": "potential-mood-huel",
        "title": "Huēl: Huēliliztli — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість передає слово huēl ('можна, вдається'), поставлене перед дієсловом.",
            "en": {
              "text": "Ability or possibility is conveyed by the word huēl ('it's possible, manages to'), placed before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Huēl nitlacua.",
                "Я можу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: Huēl — B1"
      },
      {
        "id": "directional-prefix-on-hual",
        "title": "On-, Huāl-: Ohtlatoquiliztli — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Дейктичні префікси on- ('туди, геть від мовця') і huāl- ('сюди, до мовця') вставляються перед основою дієслова руху, уточнюючи напрямок відносно того, хто говорить.",
            "en": {
              "text": "The deictic prefixes on- ('thither, away from the speaker') and huāl- ('hither, toward the speaker') are inserted before a motion verb's stem, clarifying direction relative to the speaker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nihuāllauh.",
                "Я прийшов сюди."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Prefixes: on-, huāl- — B2"
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
        "id": "noun-incorporation-depth",
        "title": "Tlahtōlpiquiliztli: Nahuatequiliztli — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник-додаток може вбудуватися прямо в тіло дієслова між префіксом підмета й коренем, замінюючи цілий окремий іменник у реченні, — прямий додаток стає частиною самого дієслова.",
            "en": {
              "text": "An object noun can be embedded directly into the body of the verb between the subject prefix and the root, replacing a whole separate noun in the sentence — the direct object becomes part of the verb itself."
            }
          },
          {
            "type": "table",
            "title": "Приклад вбудовування",
            "rows": [
              [
                "nitlaxcalchīhua (я-тортилья-роблю)",
                "об'єкт tlaxcal- вбудований у дієслово"
              ]
            ],
            "en": {
              "title": "Incorporation Example"
            }
          }
        ],
        "titleEn": "Noun Incorporation — B2"
      },
      {
        "id": "possessive-prefix-system",
        "title": "Āxcāyōtl: no-, mo-, ī- — A2",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність передається префіксом перед іменником — no- ('мій'), mo- ('твій'), ī- ('його/її') — а не окремим присвійним словом.",
            "en": {
              "text": "Possession is expressed with a prefix before the noun — no- ('my'), mo- ('your'), ī- ('his/her') — rather than a separate possessive word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nocal (мій дім)",
                "присвійний префікс no-"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Prefixes: no-, mo-, ī- — A2"
      },
      {
        "id": "relational-nouns-postpositions",
        "title": "Tlahtōltepotztli: -pan, -tech — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Замість окремих прийменників науатль уживає 'реляційні іменники' з присвійним префіксом — -pan ('на') чи -tech ('біля, до') поводяться граматично як іменники, а не самостійні прийменники.",
            "en": {
              "text": "Instead of separate prepositions, Nahuatl uses 'relational nouns' with a possessive prefix — -pan ('on') or -tech ('near, against') behave grammatically like nouns, not standalone prepositions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nocaltech (біля мого дому, no- + cal + -tech)",
                "реляційний іменник замість прийменника"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relational Nouns Instead of Prepositions — B1"
      },
      {
        "id": "animacy-plural-distinction",
        "title": "Miecān: Yōlcāyōtl — B1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Лише одушевлені іменники (люди, тварини) мають окрему форму множини, здебільшого через редуплікацію першого складу; неживі предмети лишаються незмінними навіть при множинному значенні.",
            "en": {
              "text": "Only animate nouns (people, animals) have a distinct plural form, mostly through reduplication of the first syllable; inanimate objects stay unchanged even with plural meaning."
            }
          },
          {
            "type": "table",
            "title": "Приклад одушевленої множини",
            "rows": [
              [
                "pilli (дитина) → pīpiltin (діти, редуплікація)",
                "одушевлена множина"
              ]
            ],
            "en": {
              "title": "Animate Plural Example"
            }
          }
        ],
        "titleEn": "Animacy and Plural Marking — B1"
      },
      {
        "id": "polypersonal-verb-agreement",
        "title": "Ōmentin Tēixiptlayōtl: Ni-, Ti-, Qui- — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово одночасно узгоджується і з підметом, і з прямим додатком через два окремих префікси, що йдуть поспіль, — поліперсональне узгодження, типове для полісинтетичних мов.",
            "en": {
              "text": "The verb agrees simultaneously with both subject and direct object through two separate prefixes standing one after another — polypersonal agreement, typical of polysynthetic languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nicitta. (ni-c-itta = я-його-бачу)",
                "Я його бачу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Polypersonal Verb Agreement — B1"
      },
      {
        "id": "demonstratives-in",
        "title": "In: Tēittitiliztli — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Слово in виконує подвійну роль означеного артикля й вказівного слова водночас, стоячи перед іменником, — та сама частка охоплює обидва значення.",
            "en": {
              "text": "The word in performs a double role of definite article and demonstrative at once, standing before the noun — the same particle covers both meanings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "in calli",
                "цей/той дім (або просто 'дім' означений)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "In: Article and Demonstrative — A1"
      },
      {
        "id": "question-words",
        "title": "Tlahtlaniliztli: Tlein, Āquin — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова tlein (що), āquin (хто), cāmpa (де), quēmman (коли) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words tlein (what), āquin (who), cāmpa (where), quēmman (when) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cāmpa tichāntli?",
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
        "id": "comparison-ahmo-quen",
        "title": "Cencāya: Bokkajoor — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом ok achi ('ще трохи більше') перед прикметником-дієсловом, без окремого суфікса.",
            "en": {
              "text": "Comparison of superiority is formed with the phrase ok achi ('a bit more still') before the stative verb/adjective, with no dedicated suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ok achi huēyi.",
                "Він трохи більший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with ok achi — A2"
      },
      {
        "id": "superlative-cenca",
        "title": "Cenca: Tlahuēyichīhualiztli — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь додає слово cenca ('дуже, найбільше') перед прикметником-дієсловом.",
            "en": {
              "text": "The superlative adds the word cenca ('very, most') before the stative verb/adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cenca huēyi.",
                "Він найбільший."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with cenca — B1"
      },
      {
        "id": "vigesimal-numeral-system",
        "title": "Cempōhualli: Caxtōlpōhualli — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числова система двадцяткова, а не десяткова: cempōhualli ('одне двадцятиріччя') означає 20, і всі більші числа рахуються кратними двадцяти, а не десяти.",
            "en": {
              "text": "The number system is vigesimal, not decimal: cempōhualli ('one score') means 20, and all larger numbers are counted in multiples of twenty, not ten."
            }
          },
          {
            "type": "table",
            "title": "Приклади",
            "rows": [
              [
                "cempōhualli (20)",
                "одна одиниця двадцятки"
              ],
              [
                "ōmpōhualli (40, дві двадцятки)",
                "множник двадцятки"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Vigesimal (Base-20) Number System — B1"
      },
      {
        "id": "numeral-ordinal",
        "title": "Tlahtōlpōhualli: Ic — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються часткою ic плюс кількісний числівник.",
            "en": {
              "text": "Ordinal numbers are formed with the particle ic plus the cardinal number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ic ēyi",
                "третій"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Ordinal Numbers with ic — B1"
      },
      {
        "id": "word-order-flexible",
        "title": "Tlahtōltēccāyōtl: Molīnia — B1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Оскільки дієслово вже несе всю інформацію про підмет і додаток через префікси, порядок повнозначних слів у реченні досить вільний і слугує переважно для наголосу.",
            "en": {
              "text": "Since the verb already carries all the subject and object information through its prefixes, the order of full content words in the sentence is fairly free and mostly serves for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "In calli niquitta. (наголос на об'єкті)",
                "Дім я бачу (саме дім)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Flexible Word Order — B1"
      },
      {
        "id": "adjective-as-stative-verb",
        "title": "Tlahtōlnēxtīlli Iuhcāyōtl — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники поводяться як окремий клас стативних дієслів — самі є присудком речення й приймають ті самі префікси підмета, що й звичайні дієслова.",
            "en": {
              "text": "Adjectives behave as a distinct class of stative verbs — they themselves serve as the predicate and take the same subject prefixes as ordinary verbs."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nihuēyi.",
                "Я великий (буквально 'я-великію')."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjectives as Stative Verbs — A2"
      },
      {
        "id": "diminutive-tzin-dual-function",
        "title": "-tzin: Ōmentin Tequitiliztli — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Той самий суфікс -tzin, ужитий у basics для пошани, водночас позначає й зменшеність чи ніжність, — залежно лише від контексту, а не окремої граматичної форми.",
            "en": {
              "text": "The same suffix -tzin used in basics for respect also marks smallness or tenderness — distinguished only by context, not by a separate grammatical form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "piltzintli (манюсіньке дитинча, зменшувальна функція)",
                "той самий суфікс, інша функція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "-tzin: Two Functions in One Suffix — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "Tlahtōlsentlāliliztli — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два чи більше коренів в одне ціле, часто описуючи предмет через його функцію чи зовнішній вигляд.",
            "en": {
              "text": "Compound words join two or more roots into one unit, often describing an item through its function or appearance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ātl (вода) + calli (дім) → ācalli (човен, буквально 'водяний дім')",
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
        "id": "agentive-nominalization-qui",
        "title": "-qui: Āquin Tlachīhua — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -qui/-q, доданий до дієслівного кореня, утворює іменник-діяча, що позначає того, хто виконує дію.",
            "en": {
              "text": "The suffix -qui/-q, added to a verb root, forms an agent noun denoting one who performs the action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tēmachtia (навчати) → tēmachtiāni (учитель)",
                "дієслово → діяч"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Agentive Nominalization: -qui — B1"
      },
      {
        "id": "instrument-nominalization-loni",
        "title": "-lōni: Tlein Ic Mochīhua — B2",
        "emoji": "🛠️",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -lōni, доданий до дієслівного кореня, утворює іменник-знаряддя, що позначає предмет, яким виконується дія.",
            "en": {
              "text": "The suffix -lōni, added to a verb root, forms an instrument noun denoting the object with which the action is performed."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tequi (різати) → tequilōni (ніж, знаряддя різання)",
                "дієслово → знаряддя"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Instrument Nominalization: -lōni — B2"
      },
      {
        "id": "locative-nominalization-c-co",
        "title": "-c/-co: Cāmpa Mochīhua — B2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Суфікс -c/-co, доданий до іменника чи дієслова, утворює назву місця, — 'місце, де є/відбувається X'.",
            "en": {
              "text": "The suffix -c/-co, added to a noun or verb, forms a place name — 'the place where X is/happens'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mēxihco (Мехіко, 'місце Мешіка')",
                "локативний суфікс у назві міста"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Locative Nominalization: -c/-co — B2"
      },
      {
        "id": "relative-clause-in-construction",
        "title": "In...In: Sagāsanechicōliztli — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносне підрядне речення часто вводиться повторенням тієї самої частки in на початку обох частин речення, без окремого відмінюваного відносного займенника.",
            "en": {
              "text": "A relative clause is often introduced by repeating the same particle in at the start of both parts of the sentence, with no separate declined relative pronoun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "In tlācatl in tlacua...",
                "Людина, яка їсть..."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clauses with in...in — B2"
      },
      {
        "id": "vocative-forms",
        "title": "Tēnōtzaliztli — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання часто вживає той самий шанобливий суфікс -tzin разом з ім'ям чи родинним терміном, без окремого граматичного маркера звертання.",
            "en": {
              "text": "Direct address often uses the same reverential suffix -tzin together with a name or kinship term, with no separate grammatical address marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nāntzin!",
                "Матінко!"
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
        "id": "reduplication-plurality-distributive",
        "title": "Tlapēhualtiliztli: Miec Tlanextli — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Подвоєння першого складу іменника може позначати не лише множину людей, а й розподільність — 'кожен окремо', а не 'усі разом'.",
            "en": {
              "text": "Reduplicating a noun's first syllable can mark not only the plural of people, but also distributivity — 'each one separately' rather than 'all together'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "cēcēntetl (по одному кожному, розподільне значення)",
                "розподільна редуплікація"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Distributivity — B1"
      },
      {
        "id": "reflexive-prefix-mo",
        "title": "Mo-: Nēchicōliztli — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотна дія позначається префіксом mo-, вставленим перед коренем дієслова, — той самий префікс, що й присвійний 'твій', але в іншій позиції й функції.",
            "en": {
              "text": "Reflexive action is marked with the prefix mo-, inserted before the verb root — the same prefix as the possessive 'your', but in a different position and function."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nimāltia. (я-зворотне-мию → миюся)",
                "Я миюся."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Prefix: mo- — A2"
      },
      {
        "id": "applicative-suffix-lia",
        "title": "-lia: Tētlōcōliztli — B2",
        "emoji": "🎁",
        "sections": [
          {
            "type": "intro",
            "text": "Аплікативний суфікс -lia, доданий до кореня дієслова, додає нового учасника дії — того, для кого чи заради кого щось робиться, без окремого прийменника.",
            "en": {
              "text": "The applicative suffix -lia, added to the verb root, adds a new participant to the action — the person for or on behalf of whom something is done, with no separate preposition."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "chīhua (робити) → chīhuilia (робити для когось)",
                "аплікативне розширення"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Applicative Suffix: -lia — B2"
      },
      {
        "id": "causative-suffix-tia",
        "title": "-tia: Tēchīhualtiliztli — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -tia, доданий до кореня дієслова, додає значення 'змушувати робити' — граматично вбудована причиновість без окремого допоміжного дієслова.",
            "en": {
              "text": "The causative suffix -tia, added to the verb root, adds the meaning 'to make someone do' — grammatically built-in causation with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "miqui (померти) → mictia (убити, каузатив)",
                "каузативний суфікс"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -tia — B2"
      },
      {
        "id": "possessed-plural-marker",
        "title": "Āxcāyōtl Miecān: -huān — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Коли присвійний іменник у множині, додається ще й окремий суфікс -huān, — присвійний префікс і суфікс множини разом обрамляють корінь.",
            "en": {
              "text": "When a possessed noun is plural, a separate suffix -huān is added as well — the possessive prefix and the plural suffix together enclose the root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nopilhuān (мої діти, no- + pil + -huān)",
                "присвійний префікс плюс суфікс множини"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Possession Marking: -huān — B2"
      },
      {
        "id": "vigesimal-system-depth",
        "title": "Cempōhualli, Centzontli, Cenxiquipilli — B2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Двадцяткова система має власні окремі слова для великих одиниць: centzontli (400, буквально 'один пучок волосся') і cenxiquipilli (8000, буквально 'один мішок какао-бобів') — числа названі на честь предметів, якими їх лічили.",
            "en": {
              "text": "The vigesimal system has its own dedicated words for large units: centzontli (400, literally 'one bundle of hair') and cenxiquipilli (8000, literally 'one cacao-bean sack') — numbers named after the objects they were used to count."
            }
          },
          {
            "type": "table",
            "title": "Великі одиниці",
            "rows": [
              [
                "centzontli = 400 (20×20)",
                "одна велика одиниця"
              ],
              [
                "cenxiquipilli = 8000 (20×400)",
                "ще більша одиниця"
              ]
            ],
            "en": {
              "title": "Large Units"
            }
          }
        ],
        "titleEn": "The Vigesimal System in Depth — B2"
      },
      {
        "id": "noun-incorporation-types",
        "title": "Nahuatequiliztli: Ōmentin Tlamantli — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Вбудовування іменника буває двох типів: пряме об'єктне (сам об'єкт стає частиною дієслова) і знаряддєве/інструментальне (вбудований іменник позначає знаряддя, а не об'єкт дії).",
            "en": {
              "text": "Noun incorporation comes in two types: direct object incorporation (the object itself becomes part of the verb) and instrumental incorporation (the incorporated noun marks the instrument, not the object)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nitepozminacachihua (я-метал-стрілу-роблю, з металу)",
                "інструментальне вбудовування"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Two Types of Noun Incorporation — B2"
      },
      {
        "id": "directional-prefix-depth",
        "title": "On-, Huāl-: Ōmentin Neztiliztli — B2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Ті самі префікси on-/huāl- вживаються не лише з дієсловами руху, а й переносно з іншими дієсловами, надаючи їм значення завершеності чи виконання на відстані.",
            "en": {
              "text": "The same prefixes on-/huāl- are used not just with motion verbs but also figuratively with other verbs, giving them a meaning of completion or performance at a distance."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Onitlahtoh. (переносне вживання on-)",
                "Я поговорив (там, на відстані)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Directional Prefixes: Figurative Use — B2"
      },
      {
        "id": "honorific-verb-system-depth",
        "title": "-tzinoa: Tlahpaloliztli īpan Tlahtōlli — B2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Крім іменникового -tzin, існує й дієслівний реверенційний суфікс -tzinoa, що робить шанобливою саму дію, а не лише учасника, — граматична пошана поширюється й на дієслово.",
            "en": {
              "text": "Besides the nominal -tzin, there's also a verbal reverential suffix -tzinoa, which makes the action itself respectful, not just the participant — grammaticalized respect extends to the verb too."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "mochīhua → mochīhuatzinoa (шанобливо 'відбувається')",
                "дієслівна шаноблива форма"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verbal Honorific Suffix: -tzinoa — B2"
      },
      {
        "id": "nahuatl-loanwords-into-spanish-english",
        "title": "Tlahtōlli Mocuepqui: Chocolātl, Tomatl — B1",
        "emoji": "🍫",
        "sections": [
          {
            "type": "intro",
            "text": "Численні слова науатль увійшли в іспанську, а через неї в англійську й українську: chocolātl (шоколад), tomatl (томат), āhuacatl (авокадо), coyōtl (койот), chīlli (чилі) — сліди ацтекської мови в повсякденній лексиці всього світу.",
            "en": {
              "text": "Numerous Nahuatl words entered Spanish, and through it English and Ukrainian: chocolātl (chocolate), tomatl (tomato), āhuacatl (avocado), coyōtl (coyote), chīlli (chili) — traces of the Aztec language in everyday vocabulary worldwide."
            }
          },
          {
            "type": "table",
            "title": "Приклади запозичень у світові мови",
            "rows": [
              [
                "chocolātl → шоколад",
                "світове запозичення"
              ],
              [
                "tomatl → томат",
                "світове запозичення"
              ]
            ],
            "en": {
              "title": "Global Loanword Examples"
            }
          }
        ],
        "titleEn": "Nahuatl Loanwords into World Languages — B1"
      },
      {
        "id": "classical-vs-modern-dialect-variation",
        "title": "Nāhuatlahtōlli Yancuīc ihuān Huēhcāuh — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Класична науатль XVI століття суттєво відрізняється від сучасних розмовних варіантів, які втратили частину складної морфології й запозичили численні іспанські слова, — понад тридцять сучасних варіантів існують сьогодні.",
            "en": {
              "text": "16th-century Classical Nahuatl differs substantially from modern spoken varieties, which have lost some of the complex morphology and borrowed numerous Spanish words — over thirty modern varieties exist today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сучасні говірки часто спрощують складну класичну морфологію.",
                "діалектна розбіжність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Classical vs. Modern Nahuatl — B2"
      },
      {
        "id": "florentine-codex-written-tradition",
        "title": "Āmoxtli: Florentine Codex — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Флорентійський кодекс XVI століття — величезна двомовна енциклопедія науатль-іспанською, укладена за участю носіїв мови, — найважливіше джерело знань про класичну науатль і ацтекську культуру.",
            "en": {
              "text": "The 16th-century Florentine Codex — a massive bilingual Nahuatl-Spanish encyclopedia compiled with native-speaker participation — is the single most important source for Classical Nahuatl and Aztec culture."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Кодекс охоплює дванадцять книг про природу, історію й культуру.",
                "писемна традиція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Florentine Codex Written Tradition — B2"
      },
      {
        "id": "code-switching-spanish-modern",
        "title": "Caxtillāntlahtōlli īhuān Nāhuatl — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сучасні носії часто перемикають коди всередині одного речення — граматичний каркас науатльський, а частина лексики чи цілі фрази вставляються з іспанської без адаптації.",
            "en": {
              "text": "Modern speakers often code-switch within a single sentence — the grammatical frame is Nahuatl, while chunks of vocabulary or whole phrases are inserted from Spanish without adaptation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nias a la escuela.",
                "Я йду до школи (Spanish escuela вставлене напряму)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Spanish-Nahuatl Code-Switching — B2"
      },
      {
        "id": "toponymy-tlan-co-suffixes",
        "title": "Tocāyōtl: -tlan, -co — B1",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Незліченні мексиканські топоніми зберегли науатльські локативні суфікси -tlan ('поряд, місце') чи -co ('у') — сама назва Mēxihco означає 'місце Мешіка'.",
            "en": {
              "text": "Countless Mexican place names preserve the Nahuatl locative suffixes -tlan ('near, place of') or -co ('at') — the very name Mēxihco means 'place of the Mexica'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Mazātlan (місце оленів, mazātl + -tlan)",
                "топонім з науатльським суфіксом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Toponymy: -tlan, -co Suffixes — B1"
      },
      {
        "id": "calendar-ritual-vocabulary",
        "title": "Xiuhpōhualli: Tlahtōlli — B2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Ацтекський календарний і ритуальний словник утворює окремий, спеціалізований лексичний шар — назви днів, місяців і божеств, майже незрозумілий поза культурним контекстом.",
            "en": {
              "text": "The Aztec calendar and ritual vocabulary forms a separate, specialized lexical layer — names of days, months, and deities, nearly incomprehensible outside their cultural context."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Спеціалізований шар лексики для календарних і ритуальних понять.",
                "ритуальна лексика"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Calendar and Ritual Vocabulary — B2"
      },
      {
        "id": "verb-complex-auxiliary-stacking",
        "title": "Tlahtōlnehnemiliztli: Miec Tlapalēhuīlli — B2",
        "emoji": "🧱",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька допоміжних дієслів можуть поєднуватися навколо одного дієприслівника для передачі складного часо-видового відтінку — 'хотів би був почав робити' і подібні багатошарові конструкції.",
            "en": {
              "text": "Several auxiliary verbs can combine around one converb to convey a complex tense-aspect shade — 'would have wanted to have started doing' and similar multi-layered constructions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Накладені допоміжні дієслова передають дуже точні відтінки часу й виду.",
                "багатошарова дієслівна конструкція"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Stacked Auxiliary Constructions — B2"
      },
      {
        "id": "saltillo-glottal-stop-significance",
        "title": "Saltillo: Cotōniliztli — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Гортанна змичка (сальтільо), часто позначувана h чи апострофом, — окрема фонема, що розрізняє слова, які інакше звучали б однаково, попри часту відсутність позначення в неформальному письмі.",
            "en": {
              "text": "The glottal stop (saltillo), often marked with h or an apostrophe, is a distinct phoneme distinguishing words that would otherwise sound identical, despite frequently going unmarked in informal writing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ātl (вода) vs āhtl-подібні контрасти з гортанною змичкою",
                "фонематичний контраст сальтільо"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Saltillo (Glottal Stop) — B1"
      },
      {
        "id": "vowel-length-distinction",
        "title": "Huēyacāyōtl: Ihuiyān ihuān Iciuhca — B1",
        "emoji": "📏",
        "sections": [
          {
            "type": "intro",
            "text": "Довгий і короткий голосний розрізняють слова, що інакше пишуться однаково, — фонематичний контраст, часто втрачений у сучасному записі, але живий у вимові.",
            "en": {
              "text": "A long and short vowel distinguish words that would otherwise be spelled the same — a phonemic contrast often lost in modern writing but alive in pronunciation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tepētl (гора, короткий e) vs подібне слово з довгим голосним, інше значення",
                "фонематична довгота голосного"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Length Distinction — B1"
      },
      {
        "id": "nahuatl-revitalization-status",
        "title": "Yancuīc Nāhuatlahtōllōtl: Nemiliztli — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Хоч науатль досі має понад мільйон носіїв у Мексиці, ЮНЕСКО класифікує кілька її варіантів як уразливі чи під загрозою зникнення, тож активісти розвивають шкільні програми й медіа для відродження мови.",
            "en": {
              "text": "Although Nahuatl still has over a million speakers in Mexico, UNESCO classifies several of its varieties as vulnerable or endangered, so activists are developing school programs and media for language revitalization."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Сучасні освітні програми й медіа підтримують відродження мови.",
                "мовне відродження"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Revitalization Status — B2"
      },
      {
        "id": "relational-noun-chains",
        "title": "Tlahtōltepotztli: Sentlāliliztli — B2",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька реляційних іменників можуть поєднуватися в ланцюжок для передачі точнішого просторового відношення, аналогічно до складених прийменників в інших мовах.",
            "en": {
              "text": "Several relational nouns can chain together to convey a more precise spatial relationship, analogous to compound prepositions in other languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ланцюжок реляційних іменників уточнює точне просторове положення.",
                "приклад ланцюжка реляційних іменників"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Chained Relational Nouns — B2"
      },
      {
        "id": "body-part-based-relational-nouns",
        "title": "Tlahtōltepotztli: Tonacayo — B2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "intro",
            "text": "Багато реляційних іменників історично походять від слів на позначення частин тіла — -icpac ('на верху') від 'голова', -itic ('всередині') від 'живіт', — просторова метафора тіла, вбудована в граматику.",
            "en": {
              "text": "Many relational nouns historically derive from body-part words — -icpac ('on top of') from 'head', -itic ('inside') from 'belly' — a body-based spatial metaphor built into the grammar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "tepēicpac (на вершині гори, буквально 'гори-голова')",
                "реляційний іменник з тіла"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Body-Part-Derived Relational Nouns — B2"
      },
      {
        "id": "subject-prefix-allomorphy",
        "title": "Tēixiptlayōtl: Ōmentin Neztiliztli — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Префікс підмета змінює форму залежно від першого звука кореня дієслова — той самий 'я' звучить по-різному перед голосним і приголосним.",
            "en": {
              "text": "The subject prefix changes shape depending on the verb root's initial sound — the same 'I' sounds different before a vowel and a consonant."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "n- перед голосним vs ni- перед приголосним",
                "алломорфи префікса підмета"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subject Prefix Allomorphy — B2"
      },
      {
        "id": "object-prefix-indefinite-tla-te",
        "title": "Tla-, Tē-: Ahmo Melāhuac Tlanextli — B2",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Невизначений додаток передають окремі префікси tla- ('щось') для неживого й tē- ('когось') для одушевленого, — коли конкретний об'єкт не важливий, дієслово все одно потребує якогось об'єктного префікса.",
            "en": {
              "text": "An indefinite object is conveyed with the dedicated prefixes tla- ('something') for inanimate and tē- ('someone') for animate — when the specific object doesn't matter, the verb still needs some object prefix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Nitlacua. (я-щось-їм, невизначений об'єкт)",
                "Я їм (щось)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite Object Prefixes: tla-, tē- — B2"
      },
      {
        "id": "verb-class-conjugation-patterns",
        "title": "Tlahtōlnehnemiliztli: Nāuhtlamantli — B2",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова розподіляються на кілька класів за типом останньої голосної кореня, кожен з власним, трохи відмінним зразком часового суфікса.",
            "en": {
              "text": "Verbs are sorted into several classes by the root's final vowel type, each with its own slightly different tense-suffix pattern."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Різні класи дієслів мають дещо відмінні закінчення минулого часу.",
                "класи дієвідмінювання"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Conjugation Classes — B2"
      },
      {
        "id": "possessive-inalienable-body-kinship",
        "title": "Āxcāyōtl Ahmo Cāhualōni: Tonacayo, Cihuāmontli — B2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Частини тіла й родинні терміни завжди вимагають присвійного префікса — не можна сказати просто 'рука', лише 'моя рука' чи 'його рука', оскільки такі іменники граматично невід'ємні від власника.",
            "en": {
              "text": "Body parts and kinship terms always require a possessive prefix — one cannot say just 'hand', only 'my hand' or 'his hand', since such nouns are grammatically inalienable from their possessor."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "nomā (моя рука, не просто 'mā')",
                "невід'ємна присвійність"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inalienable Possession: Body Parts and Kinship — B2"
      },
      {
        "id": "numeral-classifier-absence",
        "title": "Ahmo Onca Tlapōhualtepoztli — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від багатьох східноазійських мов, науатль не вимагає класифікатора для лічби предметів — двадцяткова система рахунку сама по собі не потребує додаткового слова-класифікатора.",
            "en": {
              "text": "Unlike many East Asian languages, Nahuatl requires no classifier for counting objects — the vigesimal counting system itself needs no additional classifier word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ēyi calli (три доми, без класифікатора)",
                "числівник напряму перед іменником"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Numeral Classifiers — B1"
      },
      {
        "id": "politeness-plural-address",
        "title": "Amehuāntin: Tlahpaloliztli Ihuīcpa Cē Tlācatl — B2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Займенник множини amehuāntin ('ви') іноді вживають і до однієї поважної особи як знак пошани — та сама стратегія множини-як-поваги, що й у багатьох мовах світу.",
            "en": {
              "text": "The plural pronoun amehuāntin ('you-plural') is sometimes used for a single respected person as a sign of respect — the same plural-as-respect strategy found in many world languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ввічливе звертання множиною до однієї поважної особи.",
                "множина як знак поваги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural for Polite Address — B2"
      },
      {
        "id": "fixed-idiomatic-expressions-huehuetlahtolli",
        "title": "Huēhuētlahtōlli: Tlahtōlli Huēhcāuh — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Традиція формальних застиглих промов huēhuētlahtōlli ('слово старих') зберігає архаїчний, паралельно побудований стиль з подвоєними синонімами — риторична спадщина, ще жива в церемоніях.",
            "en": {
              "text": "The huēhuētlahtōlli ('word of the elders') tradition of formal fixed speeches preserves an archaic, parallel-structured style with doubled synonyms — a rhetorical heritage still alive in ceremonies."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "In mitl, in chīmalli. (буквально 'стріла, щит' → війна, парна метафора)",
                "застигла парна риторична формула"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Huēhuētlahtōlli: Formal Rhetorical Tradition — B2"
      },
      {
        "id": "compound-noun-formation-depth",
        "title": "Tlahtōlsentlāliliztli: Ōppa Cāhuitl — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "У складних словах перший компонент часто утрачає власний абсолютивний суфікс, зливаючись з другим коренем в одне фонетично цільне слово.",
            "en": {
              "text": "In compound words, the first component often loses its own absolutive suffix, fusing with the second root into one phonetically unified word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "xōchitl (квітка) + calli → xōchicalli (квіткова крамниця, без -tl на xōchi-)",
                "утрата абсолютива в складному слові"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Compound Nouns: Absolutive Loss — B2"
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
        "title": "Tlahtōlli Ahmo Melāhuac: Yāuh — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово yāuh ('йти') має суплетивні, повністю нерегулярні форми в різних часах, що не виводяться з очікуваного зразка.",
            "en": {
              "text": "The verb yāuh ('to go') has suppletive, completely irregular forms across different tenses that can't be derived from the expected pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "nonyāz (я піду, суплетивна майбутня форма)",
                "нерегулярна форма дієслова yāuh"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs: Yāuh — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Miecān Ahmo Melāhuac — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо, поза очікуваним зразком редуплікації.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately, outside the expected reduplication pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "tlācatl → tlācah (не за очікуваним зразком редуплікації)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-huehuetlahtolli-archaic-forms",
        "title": "Huēhuētlahtōlli: Tlahtōlli Huēhcāuh — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Урочисті промови huēhuētlahtōlli зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "The formal huēhuētlahtōlli speeches preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "In mitl, in chīmalli.",
                "Стріла, щит (застигла архаїчна метафора війни)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Archaic Forms in Huēhuētlahtōlli — B2"
      }
    ]
  }
];
