// Vymova — data/grammar-data/grammar_ug.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_UG: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">شەخس ئالماشلىرى</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурська записується арабським письмом (справа наліво) і, як і інші тюркські мови, не має граматичного роду.",
            "en": {
              "text": "Uyghur is written in the Arabic script (right to left) and, like other Turkic languages, has no grammatical gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">مەن</span> (män)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">سەن / سىز</span> (sen / siz)"
              ],
              [
                "він / вона / воно",
                "<span dir=\"rtl\">ئۇ</span> (u)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">بىز</span> (biz)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">سىلەر</span> (siler)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">ئۇلار</span> (ular)"
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
        "id": "vowel-complete-arabic-script",
        "title": "<span dir=\"rtl\">تولۇق ئۇنلۇق يېزىقى</span> — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від класичної арабської чи перської писемності, де голосні здебільшого не пишуться, уйгурське арабське письмо позначає кожен голосний окремою літерою, — унікальна для арабографічних систем повнота запису голосних.",
            "en": {
              "text": "Unlike classical Arabic or Persian script, where vowels are mostly unwritten, Uyghur Arabic script marks every vowel with a dedicated letter — a completeness of vowel notation unique among Arabic-derived writing systems."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۇيغۇرچە</span> (усі голосні виписані)",
                "Uyghur (all vowels written explicitly)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Fully Vowel-Marked Arabic Script — B1"
      },
      {
        "id": "multiple-script-history",
        "title": "<span dir=\"rtl\">يېزىق تارىخى</span> — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурська пройшла кілька писемностей за століття: старе арабське письмо, латинку (1965-1980-і, запроваджену китайським урядом), потім знову арабське письмо, а сьогодні деякі уйгуромовні громади поза Китаєм досі вживають кирилицю.",
            "en": {
              "text": "Uyghur has gone through several scripts over the decades: the old Arabic script, a Latin alphabet (1965-1980s, introduced by the Chinese government), then back to Arabic script, while some Uyghur-speaking communities outside China still use Cyrillic today."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ULY (Uyghur Latin Yéziqi) — альтернативна латинка",
                "ULY, an alternative Latin-based transliteration system"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Multiple Script History — B2"
      },
      {
        "id": "vowel-harmony",
        "title": "<span dir=\"rtl\">ئۇنلۇق ماسلىشىشى</span> — A2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Голосні суфіксів обов'язково узгоджуються з останнім голосним кореня за твердістю/м'якістю, тож той самий суфікс має кілька фонетичних варіантів залежно від слова.",
            "en": {
              "text": "Suffix vowels obligatorily harmonize with the root's last vowel for backness/frontness, so the same suffix has several phonetic variants depending on the word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۆيلەر</span> (доми) vs. <span dir=\"rtl\">ئاتلار</span> (коні) — той самий суфікс множини",
                "houses vs. horses — the same plural suffix, different vowel"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Vowel Harmony — A2"
      },
      {
        "id": "agglutinative-case-system",
        "title": "<span dir=\"rtl\">كېلىش كېلىشلىرى</span> — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурська — аглютинативна мова із шістьма відмінками (називний, родовий, знахідний, давальний, місцевий, вихідний), кожен зі своїм суфіксом, доданим до основи іменника.",
            "en": {
              "text": "Uyghur is an agglutinative language with six grammatical cases (nominative, genitive, accusative, dative, locative, ablative), each with its own suffix added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۆي → ئۆيدە</span> (у домі, місцевий)",
                "house → in the house (locative)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Six-Case System — B1"
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
        "id": "present-continuous",
        "title": "<span dir=\"rtl\">ھازىرقى زامان: -واتقان</span> — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній тривалий час утворюється суфіксом -вата, доданим до основи дієслова, плюс особове закінчення.",
            "en": {
              "text": "The present continuous tense is formed with the suffix -wata added to the verb stem, plus a person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇۋاتىمەن.</span>",
                "Я читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Continuous: -wat — A1"
      },
      {
        "id": "past-definite",
        "title": "<span dir=\"rtl\">ئېنىق ئۆتكەن زامان: -دى</span> — A2",
        "emoji": "⏪",
        "sections": [
          {
            "type": "intro",
            "text": "Означений минулий час (особисто засвідчений) утворюється суфіксом -di/-ди, доданим до основи, позначаючи дію, яку мовець бачив сам.",
            "en": {
              "text": "The definite (personally witnessed) past tense is formed with the suffix -di added to the stem, marking an action the speaker saw firsthand."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇدۇم.</span>",
                "Я прочитав (я це бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Definite Past: -di — A2"
      },
      {
        "id": "past-inferential",
        "title": "<span dir=\"rtl\">ئېنىقسىز ئۆتكەن زامان: -پتۇ</span> — B1",
        "emoji": "🔍",
        "sections": [
          {
            "type": "intro",
            "text": "Непрямий (переказний/висновковий) минулий час утворюється суфіксом -ptu, окремим від означеного минулого, позначаючи дію, про яку мовець дізнався від інших.",
            "en": {
              "text": "The inferential/reportative past is formed with the suffix -ptu, distinct from the definite past, marking an action the speaker learned about from others."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۇ كەتىپتۇ.</span>",
                "Кажуть, він пішов (я цього не бачив)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Inferential Past: -ptu — B1"
      },
      {
        "id": "future-tense",
        "title": "<span dir=\"rtl\">كېلەر زامان: -ىدۇ</span> — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється суфіксом -idu/-йду, доданим до основи, плюс особове закінчення.",
            "en": {
              "text": "The future tense is formed with the suffix -idu added to the stem, plus a person ending."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇيمەن.</span>",
                "Я читатиму."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Tense: -idu — A2"
      },
      {
        "id": "aorist-habitual",
        "title": "<span dir=\"rtl\">ئادەتتىكى زامان: -ار</span> — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Аорист (безчасова/звична форма) утворюється суфіксом -ар, окремим від тривалого теперішнього, і позначає загальні істини чи звичні дії.",
            "en": {
              "text": "The aorist (timeless/habitual form) is formed with the suffix -ar, distinct from the continuous present, and marks general truths or habitual actions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۇ ھەر كۈنى ئوقۇيدۇ.</span>",
                "Він читає щодня (звично)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aorist/Habitual: -ar — B1"
      },
      {
        "id": "perfect-tense",
        "title": "<span dir=\"rtl\">تاماملانغان زامان: -غان</span> — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу на -ған плюс допоміжне дієслово بار ('є'), наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle in -ghan plus the auxiliary bar ('there is'), emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇغانمەن.</span>",
                "Я вже прочитав (результат актуальний)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Perfect Tense: -ghan — B1"
      },
      {
        "id": "imperative-mood",
        "title": "<span dir=\"rtl\">بۇيرۇق مايىلى</span> — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — гола основа дієслова без закінчення; ввічлива й множинна форма додає суфікс -ың/-иңлар.",
            "en": {
              "text": "The singular imperative is the bare verb stem with no ending; the polite/plural form adds the suffix -ing/-inglar."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئوقۇ! / ئوقۇڭلار!</span>",
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
        "id": "conditional-sa",
        "title": "<span dir=\"rtl\">شەرت مايىلى: -سا</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється суфіксом -sa/-са, доданим до основи дієслова в підрядному реченні.",
            "en": {
              "text": "The conditional mood is formed with the suffix -sa, added to the verb stem in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">يامغۇر ياغسا، مەن ئۆيدە قالىمەن.</span>",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: -sa — B1"
      },
      {
        "id": "necessitative-kerek",
        "title": "<span dir=\"rtl\">زۆرۈرىيەت: كېرەك</span> — B1",
        "emoji": "📋",
        "sections": [
          {
            "type": "intro",
            "text": "Необхідність виражається словом كېرەك ('треба/мусити'), поставленим після інфінітивної форми основного дієслова.",
            "en": {
              "text": "Necessity is expressed with the word kérek ('need to/must'), placed after the infinitive form of the main verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇشۇم كېرەك.</span>",
                "Я мушу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Necessitative: كېرەك — B1"
      },
      {
        "id": "potential-alaydu",
        "title": "<span dir=\"rtl\">ئىقتىدار: -ئالايدۇ</span> — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається суфіксом -алайду, доданим до основи дієслова, — 'могти зробити'.",
            "en": {
              "text": "Ability or possibility is expressed with the suffix -alaydu, added to the verb stem — 'can/be able to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇيالايمەن.</span>",
                "Я можу читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: -alaydu — B1"
      },
      {
        "id": "negation-ma",
        "title": "<span dir=\"rtl\">ئىنكار: -ما</span> — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється суфіксом -ma/-ма, вставленим між основою дієслова й часовим суфіксом.",
            "en": {
              "text": "Negation is formed with the suffix -ma, inserted between the verb stem and the tense suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئوقۇمايمەن.</span>",
                "Я не читаю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: -ma — A1"
      },
      {
        "id": "desiderative-gum-kelidu",
        "title": "<span dir=\"rtl\">ئارزۇ: -غۇم كېلىدۇ</span> — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається складеною конструкцією -ғум كېلىدۇ ('мені хочеться'), доданою до основи дієслова плюс дієслово 'приходити'.",
            "en": {
              "text": "A wish is expressed with the compound construction -ghum kélidu ('I feel like'), added to the verb stem plus the verb 'to come'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مېنىڭ ئوقۇغۇم كېلىدۇ.</span>",
                "Мені хочеться читати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: -ghum kélidu — B1"
      },
      {
        "id": "infinitive-form",
        "title": "<span dir=\"rtl\">ماسدار: -ش</span> — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -ш, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -sh, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئوقۇش</span>",
                "читати (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -sh — A2"
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
        "title": "<span dir=\"rtl\">كېلىش قوشۇمچىلىرى</span> — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "table",
            "title": "Відмінкові суфікси",
            "rows": [
              [
                "родовий",
                "-نىڭ (-ning)"
              ],
              [
                "давальний",
                "-غا (-gha)"
              ],
              [
                "знахідний",
                "-نى (-ni)"
              ],
              [
                "вихідний",
                "-دىن (-din)"
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
        "title": "<span dir=\"rtl\">سۆز تەرتىۋى: SOV</span> — A2",
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
                "<span dir=\"rtl\">مەن كىتاب ئوقۇيمەن.</span>",
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
        "id": "possessive-suffixes",
        "title": "<span dir=\"rtl\">ئىگىلىك قوشۇمچىلىرى</span> — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність позначається суфіксом, доданим до самого іменника (-(y)m 'мій', -(y)ng 'твій', -(s)i 'його/її'), без окремого присвійного займенника перед ним.",
            "en": {
              "text": "Possession is marked with a suffix attached to the noun itself (-(y)m 'my', -(y)ng 'your', -(s)i 'his/her'), with no separate possessive pronoun placed before it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۆي → ئۆيۈم</span>",
                "дім → мій дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possessive Suffixes — A2"
      },
      {
        "id": "plural-suffix-lar",
        "title": "<span dir=\"rtl\">كۆپلۈك: -لار</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється єдиним суфіксом -لار/-لەر, доданим до основи іменника й узгодженим за голосною гармонією.",
            "en": {
              "text": "The plural is formed with the single suffix -lar/-ler, added to the noun stem and matched by vowel harmony."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">كىتاب → كىتابلار</span>",
                "книга → книги"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Suffix: -lar — A1"
      },
      {
        "id": "postpositions-instead-prepositions",
        "title": "<span dir=\"rtl\">كۆمەكچى سۆزلەر</span> — B1",
        "emoji": "📌",
        "sections": [
          {
            "type": "intro",
            "text": "Замість прийменників уйгурська вживає післяйменники — окремі слова, що йдуть за іменником у потрібному відмінку, а не перед ним.",
            "en": {
              "text": "Instead of prepositions, Uyghur uses postpositions — separate words that follow the noun in the required case, rather than preceding it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۆيدىن كېيىن</span>",
                "після дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postpositions — B1"
      },
      {
        "id": "converb-sequential",
        "title": "<span dir=\"rtl\">باغلىغۇچى فېئىل: -ىپ</span> — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприслівник на -ip/-ип з'єднує послідовні дії в одному реченні, приймаючи закінчення часу лише на останньому дієслові ланцюжка.",
            "en": {
              "text": "The -ip converb links sequential actions in one sentence, with the tense ending appearing only on the last verb in the chain."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئوقۇپ ئۇخلىدى.</span>",
                "почитавши, він заснув"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sequential Converb: -ip — B1"
      },
      {
        "id": "comparative-tehimu",
        "title": "<span dir=\"rtl\">سېلىشتۇرما: تېخىمۇ</span> — B1",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється часткою تېخىمۇ ('більш'), поставленою перед прикметником, а об'єкт порівняння вводиться відмінком вихідним.",
            "en": {
              "text": "The comparative degree is formed with the particle téximu ('more'), placed before the adjective, with the compared object marked by the ablative case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بۇ ئۇنىڭدىن تېخىمۇ چوڭ.</span>",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: تېخىمۇ — B1"
      },
      {
        "id": "superlative-eng",
        "title": "<span dir=\"rtl\">ئەڭ يۇقىرى دەرىجە: ئەڭ</span> — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою ئەڭ ('найбільш') перед прикметником.",
            "en": {
              "text": "The superlative is formed with the particle eng ('most') before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئەڭ چوڭ</span>",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: ئەڭ — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "<span dir=\"rtl\">سانلار: 1-10</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "<span dir=\"rtl\">بىر</span> (bir)"
              ],
              [
                "2",
                "<span dir=\"rtl\">ئىككى</span> (ikki)"
              ],
              [
                "3",
                "<span dir=\"rtl\">ئۈچ</span> (üch)"
              ],
              [
                "5",
                "<span dir=\"rtl\">بەش</span> (besh)"
              ],
              [
                "10",
                "<span dir=\"rtl\">ئون</span> (on)"
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
        "title": "<span dir=\"rtl\">كۆرسىتىش ئالماشلىرى</span> — A2",
        "emoji": "👉",
        "sections": [
          {
            "type": "table",
            "title": "Вказівні займенники",
            "rows": [
              [
                "цей",
                "<span dir=\"rtl\">بۇ</span> (bu)"
              ],
              [
                "той",
                "<span dir=\"rtl\">ئۇ</span> (u)"
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
        "id": "interrogatives",
        "title": "<span dir=\"rtl\">سوئال سۆزلىرى</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "<span dir=\"rtl\">كىم</span> (kim)"
              ],
              [
                "що",
                "<span dir=\"rtl\">نېمە</span> (néme)"
              ],
              [
                "де",
                "<span dir=\"rtl\">قەيەردە</span> (qeyerde)"
              ],
              [
                "коли",
                "<span dir=\"rtl\">قاچان</span> (qachan)"
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
        "id": "conjunctions",
        "title": "<span dir=\"rtl\">باغلىغۇچىلار</span> — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "<span dir=\"rtl\">ۋە</span> (we)"
              ],
              [
                "або",
                "<span dir=\"rtl\">ياكى</span> (yaki)"
              ],
              [
                "але",
                "<span dir=\"rtl\">لېكىن</span> (lékin)"
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
        "id": "reflexive-oz",
        "title": "<span dir=\"rtl\">ئۆزلۈك ئالماش: ئۆز</span> — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотний займенник ئۆز ('сам/себе') уживається для всіх осіб і чисел, коли підмет і об'єкт дії збігаються, приймаючи присвійний суфікс.",
            "en": {
              "text": "The reflexive pronoun öz ('self') is used for all persons and numbers when the subject and object of the action coincide, taking a possessive suffix."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۇ ئۆزىنى كۆردى.</span>",
                "Він побачив себе."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronoun: ئۆز — B1"
      },
      {
        "id": "relative-participle-gan",
        "title": "<span dir=\"rtl\">سۈپەتداش فېئىل: -غان</span> — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурська не має відносного займенника: означальні звороти утворюються перетворенням дієслова на дієприкметник (-ghan/-idighan), поставлений прямо перед іменником.",
            "en": {
              "text": "Uyghur has no relative pronoun: relative clauses are formed by turning the verb into a participle (-ghan/-idighan), placed directly before the noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئوقۇۋاتقان ئوقۇغۇچى</span>",
                "учень, що читає"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Participle: -ghan — B2"
      },
      {
        "id": "adjective-invariant-before-noun",
        "title": "<span dir=\"rtl\">سۈپەت: ئۆزگەرمەيدۇ</span> — A2",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником і не змінюється за родом, числом чи відмінком.",
            "en": {
              "text": "The adjective always precedes the noun and does not change for gender, number, or case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">چوڭ ئۆي</span>",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Invariant Adjective Before Noun — A2"
      },
      {
        "id": "diminutive-cha",
        "title": "<span dir=\"rtl\">كىچىكلىتىش: -چاق</span> — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестлива форма утворюється суфіксом -چاق/-چاچ, доданим до основи іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -chaq/-chach, added to the noun stem."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۆي → ئۆيچەك</span>",
                "дім → будиночок"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -chaq — B1"
      },
      {
        "id": "vocative-simple",
        "title": "<span dir=\"rtl\">چاقىرىق</span> — A2",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні до когось ім'я вживається без жодних змін, часто перед ним ставиться частка ئەي для наголосу.",
            "en": {
              "text": "In direct address, a name is used unchanged, often preceded by the particle ey for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئەيسا، بۇ يەرگە كەل!</span>",
                "Айсо, ходи сюди!"
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
        "id": "existential-bar-yoq",
        "title": "<span dir=\"rtl\">بار ۋە يوق</span> — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Наявність чогось передається словом بار ('є'), а відсутність — окремим словом يوق ('немає'), незалежно від роду чи числа предмета.",
            "en": {
              "text": "The existence of something is expressed with the word bar ('there is'), and its absence with the separate word yoq ('there isn't'), regardless of the thing's gender or number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">بۇ يەردە كۆپ ئادەم بار.</span>",
                "Там багато людей."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Existential: بار / يوق — A1"
      },
      {
        "id": "question-particle-mu",
        "title": "<span dir=\"rtl\">-مۇ: سوئال قوشۇمچىسى</span> — A2",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питання так/ні утворюється клітичним суфіксом -mu, доданим до кінця слова, на якому наголошується запитання.",
            "en": {
              "text": "A yes/no question is formed with the clitic suffix -mu, added to the end of the word being questioned."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سىز ئۇيغۇرچە بىلەمسىز؟</span>",
                "Ви знаєте уйгурську?"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Yes/No Question Suffix: -mu — A2"
      },
      {
        "id": "causative-dur",
        "title": "<span dir=\"rtl\">سەۋەبچى فېئىل: -دۇر</span> — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативний суфікс -دۇر/-تۇر, доданий до основи дієслова, передає значення 'змусити зробити'.",
            "en": {
              "text": "The causative suffix -dur/-tur, added to the verb stem, conveys the meaning 'make/cause to do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">يېزىش → يازدۇرۇش</span>",
                "писати → змусити написати"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative Suffix: -dur — B2"
      },
      {
        "id": "passive-suffix-il",
        "title": "<span dir=\"rtl\">مەجھۇل فېئىل: -ىل</span> — B2",
        "emoji": "📥",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється суфіксом -ىل/-ۇل, доданим до основи дієслова, замість окремого допоміжного дієслова.",
            "en": {
              "text": "The passive voice is formed with the suffix -il/-ul, added to the verb stem, instead of a separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">يېزىش → يېزىلىش</span>",
                "писати → бути написаним"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Passive Suffix: -il — B2"
      },
      {
        "id": "reduplication-intensity",
        "title": "<span dir=\"rtl\">تەكرارلاش: كۈچەيتىش</span> — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Повторення прислівника чи прикметника підсилює значення, передаючи інтенсивність без окремого підсилювального слова.",
            "en": {
              "text": "Repeating an adverb or adjective intensifies its meaning, conveying intensity without a separate intensifying word."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئاستا-ئاستا</span>",
                "дуже повільно (букв. 'повільно-повільно')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reduplication for Intensity — B1"
      },
      {
        "id": "restrictive-particle-pat",
        "title": "<span dir=\"rtl\">پەقەت: چەكلىمە</span> — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Частка پەقەت ('лише'), додана перед словом, обмежує його значення, — типовий приклад того, як частка може модифікувати будь-яку частину мови без зміни її форми.",
            "en": {
              "text": "The particle peqet ('only'), placed before a word, restricts its meaning — a typical example of how a particle can modify any part of speech without changing its form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">پەقەت مەن</span>",
                "тільки я"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Restrictive Particle: پەقەت — B1"
      },
      {
        "id": "desiderative-suffix-ghum",
        "title": "<span dir=\"rtl\">ئارزۇ قوشۇمچىسى: -غۇم</span> — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійно-бажальна конструкція -ғум كېلىدۇ ('мені хочеться') поєднує присвійний суфікс на дієслівному іменнику з допоміжним дієсловом 'приходити', — граматично складніший спосіб вираження бажання, ніж просте модальне дієслово.",
            "en": {
              "text": "The possessive-desiderative construction -ghum kélidu ('I feel like') combines a possessive suffix on a verbal noun with the auxiliary verb 'to come' — a grammatically more complex way of expressing a wish than a simple modal verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مېنىڭ كۆرگۈم كېلىدۇ.</span>",
                "Мені хочеться побачити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative Construction: -ghum kélidu — B1"
      },
      {
        "id": "coordinating-conjunctions-extra",
        "title": "<span dir=\"rtl\">باشقا باغلىغۇچىلار</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник چۈنكى ('тому що') і частка شۇڭا ('отже') розширюють базовий набір ۋە/ياكى/لېكىن, додаючи причинові й наслідкові зв'язки.",
            "en": {
              "text": "The conjunction chünki ('because') and the particle shunga ('therefore') extend the basic we/yaki/lékin set, adding causal and consequential links."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مەن ئۆيدە قالدىم، چۈنكى يامغۇر ياغدى.</span>",
                "Я залишився вдома, бо йшов дощ."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions — B1"
      },
      {
        "id": "silk-road-heritage",
        "title": "<span dir=\"rtl\">يىپەك يولى مىراسى</span> — B1",
        "emoji": "🐫",
        "sections": [
          {
            "type": "intro",
            "text": "Оазисні міста Кашгар і Турфан були ключовими вузлами Великого шовкового шляху, де перетиналися торгові каравани з Китаю, Персії та Середземномор'я, — спадщина, яка й досі відображена в лексиці торгівлі й гостинності.",
            "en": {
              "text": "The oasis cities of Kashgar and Turpan were key hubs of the Great Silk Road, where trade caravans from China, Persia, and the Mediterranean crossed — a heritage still reflected in trade and hospitality vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">قەشقەر بازىرى</span> (Кашгарський базар)",
                "the Kashgar bazaar"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Silk Road Heritage — B1"
      },
      {
        "id": "twelve-muqam-music",
        "title": "<span dir=\"rtl\">ئون ئىككى مۇقام</span> — B2",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Дванадцять мукамів — цикл класичної музики, що поєднує пісню, поезію, танець і інструментальні частини, визнаний ЮНЕСКО шедевром нематеріальної культурної спадщини, з виконанням, що може тривати годинами.",
            "en": {
              "text": "The Twelve Muqam is a cycle of classical music combining song, poetry, dance, and instrumental sections, recognized by UNESCO as a Masterpiece of Intangible Cultural Heritage, with performances that can last hours."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">مۇقام ئېيتىش</span>",
                "виконувати мукам"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Twelve Muqam Music Tradition — B2"
      },
      {
        "id": "laghman-noodle-cuisine",
        "title": "<span dir=\"rtl\">لەغمەن</span> — A2",
        "emoji": "🍜",
        "sections": [
          {
            "type": "intro",
            "text": "Лагман — розтягнута вручну локшина з м'ясом і овочами, страва, спільна з іншою тюркською й центральноазійською кухнею, але з власними уйгурськими рецептурними варіаціями.",
            "en": {
              "text": "Laghman is hand-pulled noodles with meat and vegetables, a dish shared with other Turkic and Central Asian cuisines, but with its own Uyghur recipe variations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لەغمەن يېيىش</span>",
                "їсти лагман"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Laghman: Noodle Cuisine — A2"
      },
      {
        "id": "kawap-skewer-cuisine",
        "title": "<span dir=\"rtl\">كاۋاپ</span> — A2",
        "emoji": "🍢",
        "sections": [
          {
            "type": "intro",
            "text": "Кавап (шашлик) — смажене на вугіллі м'ясо на шампурах, приправлене зирою й перцем, — символічна вулична страва, тісно пов'язана з уйгурською культурною ідентичністю.",
            "en": {
              "text": "Kawap (skewered meat) is charcoal-grilled meat seasoned with cumin and pepper — a symbolic street food closely tied to Uyghur cultural identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">كاۋاپ سېتىش</span>",
                "продавати кавап"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kawap: Skewered Meat Cuisine — A2"
      },
      {
        "id": "atlas-silk-textile",
        "title": "<span dir=\"rtl\">ئەتلەس رەخت</span> — B1",
        "emoji": "🧵",
        "sections": [
          {
            "type": "intro",
            "text": "Атлас — традиційна шовкова тканина з характерним хвилястим візерунком розмитих кольорів, вироблена в Хотані, невіддільна частина весільного та святкового вбрання.",
            "en": {
              "text": "Atlas is a traditional silk fabric with a characteristic wavy, tie-dyed color pattern, produced in Khotan, an inseparable part of wedding and festive attire."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئەتلەس كۆينەك</span>",
                "плаття з атласу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Atlas: Traditional Silk Textile — B1"
      },
      {
        "id": "doppa-hat-clothing",
        "title": "<span dir=\"rtl\">دوپپا</span> — B1",
        "emoji": "🧢",
        "sections": [
          {
            "type": "intro",
            "text": "Доппа — вишита чотирикутна тюбетейка, форма й орнамент якої різняться за регіоном, — обов'язковий елемент чоловічого й жіночого традиційного вбрання, який досі часто носять у повсякденному житті.",
            "en": {
              "text": "The doppa is an embroidered square cap, whose shape and ornamentation vary by region — an obligatory element of both men's and women's traditional attire, still often worn in everyday life."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">دوپپا كىيىش</span>",
                "надягати доппу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Doppa: Traditional Cap — B1"
      },
      {
        "id": "colors",
        "title": "<span dir=\"rtl\">رەڭلەر</span> — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "<span dir=\"rtl\">قىزىل</span> (qizil)"
              ],
              [
                "чорний",
                "<span dir=\"rtl\">قارا</span> (qara)"
              ],
              [
                "білий",
                "<span dir=\"rtl\">ئاق</span> (aq)"
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
        "title": "<span dir=\"rtl\">سانلار: ئون</span> — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "<span dir=\"rtl\">يىگىرمە</span>"
              ],
              [
                "100",
                "<span dir=\"rtl\">يۈز</span>"
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
        "title": "<span dir=\"rtl\">ھەپتىنىڭ كۈنلىرى</span> — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "<span dir=\"rtl\">دۈشەنبە</span>"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">جۈمە</span>"
              ],
              [
                "неділя",
                "<span dir=\"rtl\">يەكشەنبە</span>"
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
        "title": "<span dir=\"rtl\">ئائىلە</span> — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "table",
            "title": "Родина",
            "rows": [
              [
                "батько",
                "<span dir=\"rtl\">دادا</span>"
              ],
              [
                "мати",
                "<span dir=\"rtl\">ئانا</span>"
              ],
              [
                "брат",
                "<span dir=\"rtl\">قېرىندىشى</span>"
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
        "title": "<span dir=\"rtl\">سالام</span> — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "table",
            "title": "Вітання",
            "rows": [
              [
                "Привіт",
                "<span dir=\"rtl\">ياخشىمۇسىز</span>"
              ],
              [
                "Дякую",
                "<span dir=\"rtl\">رەھمەت</span>"
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
        "title": "<span dir=\"rtl\">ھاۋا رايى</span> — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "<span dir=\"rtl\">قۇياش</span>"
              ],
              [
                "дощ",
                "<span dir=\"rtl\">يامغۇر</span>"
              ],
              [
                "вітер",
                "<span dir=\"rtl\">شامال</span>"
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
        "title": "<span dir=\"rtl\">بەدەن ئەزالىرى</span> — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "<span dir=\"rtl\">باش</span>"
              ],
              [
                "рука",
                "<span dir=\"rtl\">قول</span>"
              ],
              [
                "око",
                "<span dir=\"rtl\">كۆز</span>"
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
        "id": "melon-fruit-vocabulary",
        "title": "<span dir=\"rtl\">تۇرپان قوغۇنى</span> — B1",
        "emoji": "🍈",
        "sections": [
          {
            "type": "intro",
            "text": "Турфанські диня й виноград славляться завдяки унікальному спекотному оазисному клімату й давній зрошувальній системі карез (підземні канали), з розвиненою лексикою для десятків сортів.",
            "en": {
              "text": "Turpan melons and grapes are famous thanks to the region's uniquely hot oasis climate and the ancient karez underground irrigation system, with developed vocabulary for dozens of varieties."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">قوغۇن يېيىش</span>",
                "їсти диню"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Turpan Melons and Grapes — B1"
      },
      {
        "id": "sandan-dance-culture",
        "title": "<span dir=\"rtl\">سانام ئۇسسۇلى</span> — B1",
        "emoji": "💃",
        "sections": [
          {
            "type": "intro",
            "text": "Санам — традиційний танець із граційними рухами рук і зап'ясть, виконуваний на весіллях і святах, часто в супроводі дап (бубна) і рубаба.",
            "en": {
              "text": "Sanam is a traditional dance with graceful hand and wrist movements, performed at weddings and festivals, often accompanied by the dap (frame drum) and rawap."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سانام ئويناش</span>",
                "танцювати санам"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Sanam Dance Culture — B1"
      },
      {
        "id": "rawap-dap-instruments",
        "title": "<span dir=\"rtl\">راۋاپ ۋە داپ</span> — B1",
        "emoji": "🎸",
        "sections": [
          {
            "type": "intro",
            "text": "Рубаб — струнний щипковий інструмент із характерним чашоподібним корпусом, а дап — рамний бубон; обидва центральні для мукамної й весільної музики.",
            "en": {
              "text": "The rawap is a plucked string instrument with a characteristic bowl-shaped body, and the dap is a frame drum; both are central to muqam and wedding music."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">راۋاپ چېلىش</span>",
                "грати на рубабі"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Rawap and Dap Instruments — B1"
      },
      {
        "id": "chinese-loanword-layer",
        "title": "<span dir=\"rtl\">جۇڭگۇچە سۆزلەر</span> — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Через включеність до Китаю уйгурська містить зростаючий шар мандаринських запозичень для сучасних, адміністративних і технологічних понять, паралельно з питомою тюркською лексикою.",
            "en": {
              "text": "Through incorporation into China, Uyghur contains a growing layer of Mandarin loanwords for modern, administrative, and technological concepts, running alongside native Turkic vocabulary."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">شۈجى</span> (з мандаринської, партійна посада)",
                "shuji (Mandarin loan, a party post title)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mandarin Loanword Layer — B2"
      },
      {
        "id": "clothing-vocabulary",
        "title": "<span dir=\"rtl\">كىيىم</span> — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "сорочка",
                "<span dir=\"rtl\">كۆينەك</span>"
              ],
              [
                "взуття",
                "<span dir=\"rtl\">ئاياغ كىيىم</span>"
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
        "title": "<span dir=\"rtl\">ھايۋانلار</span> — A2",
        "emoji": "🐫",
        "sections": [
          {
            "type": "table",
            "title": "Тварини",
            "rows": [
              [
                "верблюд",
                "<span dir=\"rtl\">تۆگە</span>"
              ],
              [
                "собака",
                "<span dir=\"rtl\">ئىت</span>"
              ],
              [
                "вівця",
                "<span dir=\"rtl\">قوي</span>"
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
        "title": "<span dir=\"rtl\">تەرەپلەر</span> — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "<span dir=\"rtl\">شىمال</span>"
              ],
              [
                "південь",
                "<span dir=\"rtl\">جەنۇب</span>"
              ],
              [
                "схід",
                "<span dir=\"rtl\">شەرق</span>"
              ],
              [
                "захід",
                "<span dir=\"rtl\">غەرب</span>"
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
        "id": "taklamakan-desert-oasis",
        "title": "<span dir=\"rtl\">تەكلىماكان چۆلى</span> — B1",
        "emoji": "🏜️",
        "sections": [
          {
            "type": "intro",
            "text": "Пустеля Такла-Макан, одна з найбільших піщаних пустель світу, оточена ланцюжком оазисних міст, тож уйгурська культура історично сформувалася довкола зрошуваного землеробства й торгівлі на межі піску й гір.",
            "en": {
              "text": "The Taklamakan Desert, one of the world's largest sand deserts, is ringed by a chain of oasis cities, so Uyghur culture historically formed around irrigated agriculture and trade at the boundary of sand and mountains."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">تەكلىماكان چۆلى</span>",
                "пустеля Такла-Макан"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Taklamakan Desert and Oases — B1"
      },
      {
        "id": "kashgar-old-city",
        "title": "<span dir=\"rtl\">قەشقەر كونا شەھىرى</span> — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Старе місто Кашгар — один із найкраще збережених прикладів традиційної ісламської архітектури Центральної Азії з глинобитними будинками й лабіринтом вузьких вуличок, важливий культурний і торговий центр протягом тисячоліття.",
            "en": {
              "text": "Kashgar's Old City is one of the best-preserved examples of traditional Central Asian Islamic architecture, with mud-brick houses and a maze of narrow lanes, an important cultural and trade center for a millennium."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">قەشقەر كونا شەھىرى</span>",
                "Старе місто Кашгар"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Kashgar Old City — B1"
      },
      {
        "id": "nowruz-spring-festival",
        "title": "<span dir=\"rtl\">نوروز بايرىمى</span> — B1",
        "emoji": "🎉",
        "sections": [
          {
            "type": "intro",
            "text": "Навруз — весняне свято, спільне з іранською й тюркською культурними традиціями, коли готують символічну дев'ятикомпонентну страву й запалюють вогнища на знак оновлення після зими.",
            "en": {
              "text": "Nowruz is a spring festival shared with Persian and Turkic cultural traditions, when a symbolic nine-ingredient dish is prepared and bonfires are lit to mark renewal after winter."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">نوروزۇڭىز مۇبارەك بولسۇن!</span>",
                "З Наврузом!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Nowruz: The Spring Festival — B1"
      },
      {
        "id": "coordinating-conjunctions-extra-vocab",
        "title": "<span dir=\"rtl\">ئۇيغۇر تارىخى</span> — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Уйгурський каганат (VIII-IX ст.) — давня степова держава, з якої походить самоназва народу, попри те, що сучасні уйгури — переважно осідлі оазисні землероби, а не кочівники того історичного каганату.",
            "en": {
              "text": "The Uyghur Khaganate (8th-9th c.) is the ancient steppe state from which the people's self-name derives, though modern Uyghurs are predominantly settled oasis farmers rather than nomads of that historical khaganate."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ئۇيغۇر خانلىقى</span> (Уйгурський каганат)",
                "the Uyghur Khaganate"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Uyghur Khaganate Legacy — B2"
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
        "id": "irregular-verb-kel",
        "title": "<span dir=\"rtl\">قائىدىسىز فېئىل: كېلىش</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово كېلىش ('приходити') зазнає непередбачуваного скорочення основи в деяких формах (كەل- замість очікуваного повного كېلى-), тож форму слід запам'ятовувати окремо.",
            "en": {
              "text": "The verb kélish ('to come') undergoes unpredictable stem shortening in some forms (kel- instead of the expected full kéli-), so the form must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярне скорочення основи",
            "rows": [
              [
                "<span dir=\"rtl\">كېلىش → كەلدى</span> (не *كېلىدى)",
                "come → came (irregular shortened stem)"
              ]
            ],
            "en": {
              "title": "Irregular Stem Shortening"
            }
          }
        ],
        "titleEn": "Irregular Verb: كېلىش ('to come') — B1"
      },
      {
        "id": "irregular-plural-adem",
        "title": "<span dir=\"rtl\">قائىدىسىز كۆپلۈك: ئادەم</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Іменник ئادەم ('людина') у значенні 'люди загалом' часто вживається без суфікса множини -لار навіть тоді, коли йдеться про кількох осіб, — виняток із регулярного правила утворення множини.",
            "en": {
              "text": "The noun adem ('person') in the sense of 'people in general' is often used without the plural suffix -lar even when referring to several people — an exception to the regular pluralization rule."
            }
          },
          {
            "type": "table",
            "title": "Виняток із утворення множини",
            "rows": [
              [
                "<span dir=\"rtl\">كۆپ ئادەم</span> (не *كۆپ ئادەملەر, 'багато людей')",
                "many people (no plural suffix despite plural meaning)"
              ]
            ],
            "en": {
              "title": "Pluralization Exception"
            }
          }
        ],
        "titleEn": "Collective Singular: ئادەم — B2"
      },
      {
        "id": "irregular-comparative-yahshi",
        "title": "<span dir=\"rtl\">قائىدىسىز سېلىشتۇرما: ياخشى</span> — B1",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник ياخشى ('добрий') у порівняльному ступені часто заміняється синонімом ئوبدان ('гарний') у формі تېخىمۇ ئوبدان, а не власне очікуваним تېخىمۇ ياخشى, у розмовному вжитку.",
            "en": {
              "text": "The adjective yahshi ('good') in the comparative is often replaced by the synonym obdan ('fine') in the form téximu obdan, rather than the expected téximu yahshi itself, in colloquial usage."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна синонімічна заміна",
            "rows": [
              [
                "<span dir=\"rtl\">تېخىمۇ ئوبدان</span> (розмовно) замість <span dir=\"rtl\">تېخىمۇ ياخشى</span>",
                "better (colloquial synonym substitution for the expected comparative)"
              ]
            ],
            "en": {
              "title": "Irregular Synonym Substitution"
            }
          }
        ],
        "titleEn": "Irregular Comparative Substitution: ئوبدان for ياخشى — B1"
      }
    ]
  }
];
