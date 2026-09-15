// Vymova — data/grammar-data/grammar_ps.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_PS: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "<span dir=\"rtl\">شخصي ضمیرونه</span> — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "У пушту займенник третьої особи \"هغه\" (haghá) не розрізняє роду в називному відмінку — стать підказує контекст або дієслово.",
            "en": {
              "text": "In Pashto, the third-person pronoun \"هغه\" (haghá) has no gender distinction in the nominative case — context or the verb indicates gender."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "<span dir=\"rtl\">زه</span> (za)"
              ],
              [
                "ти (зв. / ввічл.)",
                "<span dir=\"rtl\">ته / تاسو</span> (tā / tāso)"
              ],
              [
                "він / вона",
                "<span dir=\"rtl\">هغه</span> (haghá)"
              ],
              [
                "ми",
                "<span dir=\"rtl\">موږ</span> (muẓ̌)"
              ],
              [
                "ви",
                "<span dir=\"rtl\">تاسو</span> (tāso)"
              ],
              [
                "вони",
                "<span dir=\"rtl\">هغوی</span> (haghuwí)"
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
        "id": "retroflex-consonants",
        "title": "<span dir=\"rtl\">شاليدونکي غږونه</span> — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Пушту має незвично багатий для іранської мови набір ретрофлексних приголосних (ṇ, ṛ, ṣ, ẓ̌) — риса, запозичена через тривалий контакт з індійськими мовами Південної Азії, а не успадкована з іранської основи.",
            "en": {
              "text": "Pashto has an unusually rich retroflex consonant inventory for an Iranian language (ṇ, ṛ, ṣ, ẓ̌) — a feature borrowed through prolonged contact with the Indic languages of South Asia, rather than inherited from the Iranian base."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">موږ</span> (muẓ̌, 'ми') з ретрофлексним ẓ̌",
                "ретрофлексний приголосний в особовому займеннику"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Retroflex Consonants — B1"
      },
      {
        "id": "stress-phonemic",
        "title": "<span dir=\"rtl\">فشار: معناييز</span> — B1",
        "emoji": "🎵",
        "sections": [
          {
            "type": "intro",
            "text": "Наголос у пушту може розрізняти значення слів, написаних однаково, — фонематична функція наголосу, нетипова для більшості іранських мов, де наголос лише прогнозований, а не смислорозрізнювальний.",
            "en": {
              "text": "Stress in Pashto can distinguish the meaning of otherwise identically written words — a phonemic function of stress atypical for most Iranian languages, where stress is merely predictable rather than meaning-distinguishing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Той самий запис, різне місце наголосу, різне значення.",
                "фонематичний наголос"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Phonemic Stress — B1"
      },
      {
        "id": "gender-two-way",
        "title": "<span dir=\"rtl\">جنس: دوه ډوله</span> — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, і прикметники узгоджуються з ним через окреме закінчення, — та сама двородова система, що й у більшості сучасних іранських мов.",
            "en": {
              "text": "Nouns are masculine or feminine, and adjectives agree with this through a dedicated ending — the same two-gender system found in most modern Iranian languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ښه سړی</span> (ч.р.) / <span dir=\"rtl\">ښه ښځه</span> (ж.р.)",
                "хороший чоловік / хороша жінка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender: Two-Way System — A1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "<span dir=\"rtl\">نه او پوښتنه</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою نه (na) перед дієсловом; питання без питального слова передаються лише висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle نه (na) before the verb; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه نه پوهېږم.</span>",
                "Я не розумію."
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
        "title": "<span dir=\"rtl\">اوسمهال</span> — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями, доданими до основи дієслова, — охоплює і теперішній момент, і загальну звичну дію.",
            "en": {
              "text": "The present tense is formed with person endings added to the verb stem — covering both the present moment and a general habitual action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه ځم.</span>",
                "Я йду."
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
        "title": "<span dir=\"rtl\">دوامداره اوسمهال</span> — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в момент мовлення може уточнюватися частками часу чи контекстом, оскільки той самий теперішній час обслуговує і тривалу, і звичну дію.",
            "en": {
              "text": "An action in progress at the moment of speaking can be clarified with time particles or context, since the same present tense serves both ongoing and habitual action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">اوس ځم.</span>",
                "Я саме йду зараз."
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
        "title": "<span dir=\"rtl\">تېرمهال: نانمه حالت</span> — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У перехідному минулому часі підмет переходить у непрямий (скісний) відмінок, а дієслово узгоджується не з підметом, а з прямим додатком за родом і числом, — розщеплена ергативність без окремої частки, лише через відмінок.",
            "en": {
              "text": "In the transitive past tense, the subject shifts to the oblique case, and the verb agrees not with the subject but with the direct object in gender and number — split ergativity with no dedicated particle, conveyed through case alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ما کتاب ولوست.</span> (непрямий 'ma', дієслово узгоджене з 'книга')",
                "Я прочитав книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Past Tense: Oblique-Case Ergativity — B1"
      },
      {
        "id": "past-continuous",
        "title": "<span dir=\"rtl\">دوامداره تېرمهال</span> — B1",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія в минулому передається імперфективною основою дієслова в минулому часі, відмінною від доконаної основи простого минулого.",
            "en": {
              "text": "An ongoing past action is expressed with the imperfective verb stem in the past tense, distinct from the perfective stem of the simple past."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه تلم.</span>",
                "Я йшов (тривало)."
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
        "id": "future-tense-ba",
        "title": "<span dir=\"rtl\">راتلونکی: به</span> — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється часткою به (ba), доданою до дієслова теперішнього часу, — та сама форма дієслова, лише з часткою, що зсуває значення в майбутнє.",
            "en": {
              "text": "The future tense is formed with the particle به (ba) added to the present-tense verb — the same verb form, just with a particle that shifts the meaning into the future."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه به ځم.</span>",
                "Я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future: به (ba) — A2"
      },
      {
        "id": "imperative-mood",
        "title": "<span dir=\"rtl\">امر</span> — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб однини — основа дієслова з окремим закінченням; множина додає суфікс для звертання до кількох осіб.",
            "en": {
              "text": "The singular imperative is the verb stem with a dedicated ending; the plural adds a suffix for addressing several people."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لاړ شه!</span>",
                "Іди!"
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
        "title": "<span dir=\"rtl\">اوسنی تېر</span> — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Перфект утворюється дієприкметником минулого часу плюс допоміжне دی ('є'), наголошуючи на теперішній актуальності завершеної дії.",
            "en": {
              "text": "The perfect is formed with the past participle plus the auxiliary دی ('is'), emphasizing the present relevance of a completed action."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ما کتاب لوستلی دی.</span>",
                "Я вже прочитав книгу (результат актуальний)."
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
        "title": "<span dir=\"rtl\">پخوانی تېر</span> — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється дієприкметником минулого часу плюс допоміжне وو ('був') у минулому часі.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the past participle plus the past auxiliary وو ('was')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ما مخکې کتاب لوستلی وو.</span>",
                "Я вже був прочитав книгу до того."
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
        "title": "<span dir=\"rtl\">عادتي تېرمهال</span> — B1",
        "emoji": "🔁",
        "sections": [
          {
            "type": "intro",
            "text": "Звичну дію в минулому передає та сама імперфективна основа, що й тривалий минулий час, — розрізнена лише контекстом і часовим прислівником.",
            "en": {
              "text": "A habitual past action is expressed with the same imperfective stem used for the past continuous — distinguished only by context and a time adverb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه په ماشومتوب کې لوبې کولې.</span>",
                "У дитинстві я, бувало, грав."
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
        "title": "<span dir=\"rtl\">اړتیايي حالت</span> — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовно-бажальний спосіб уживається після дієслів бажання чи необхідності, часто з окремою основою дієслова, відмінною від дійсного способу.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing or necessity, often with a distinct verb stem different from the indicative."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">غواړم چې لاړ شم.</span>",
                "Я хочу піти."
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
        "title": "<span dir=\"rtl\">که: شرطي</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовне речення вводиться сполучником که ('якщо'); головне речення часто продовжується часткою نو ('то').",
            "en": {
              "text": "A conditional sentence is introduced with the conjunction که ('if'); the main clause often continues with the particle نو ('then')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">که باران وشي، نو زه به کور کې پاتې شم.</span>",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional: که — B1"
      },
      {
        "id": "potential-mood-kawal-shai",
        "title": "<span dir=\"rtl\">کولی شي: وړتیا</span> — B1",
        "emoji": "💪",
        "sections": [
          {
            "type": "intro",
            "text": "Здатність чи можливість виражається складеним дієсловом з допоміжним کولی شي ('могти'), доданим після дієприслівника.",
            "en": {
              "text": "Ability or possibility is expressed with the compound verb using the auxiliary کولی شي ('to be able'), added after the converb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه پښتو خبرې کولی شم.</span>",
                "Я можу говорити пушту."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Potential: کولی شي — B1"
      },
      {
        "id": "desiderative-ghwaral",
        "title": "<span dir=\"rtl\">غوښتل: هیله</span> — A2",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Бажання виражається дієсловом غوښتل ('хотіти'), поставленим перед підрядним реченням з часткою چې ('щоб').",
            "en": {
              "text": "A wish is expressed with the verb غوښتل ('to want'), placed before a subordinate clause introduced with چې ('that')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه غواړم چې ډوډۍ وخورم.</span>",
                "Я хочу їсти."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Desiderative: غوښتل — A2"
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
        "id": "noun-plural-classes",
        "title": "<span dir=\"rtl\">جمع: بېلابېل ډولونه</span> — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Множина іменників утворюється кількома різними класами закінчень (-ان, -ونه, -ي тощо) залежно від роду й фонетичної форми слова, без єдиного універсального суфікса.",
            "en": {
              "text": "Noun plurals are formed with several distinct ending classes (-ان, -ونه, -ي, and others) depending on gender and the word's phonetic shape, with no single universal suffix."
            }
          },
          {
            "type": "table",
            "title": "Класи множини",
            "rows": [
              [
                "<span dir=\"rtl\">سړی → سړي</span>",
                "чоловік → чоловіки"
              ],
              [
                "<span dir=\"rtl\">ورور → وروڼه</span>",
                "брат → брати"
              ],
              [
                "<span dir=\"rtl\">ښځه → ښځې</span>",
                "жінка → жінки"
              ]
            ],
            "en": {
              "title": "Plural classes"
            }
          }
        ],
        "titleEn": "Plural: Multiple Classes — B1"
      },
      {
        "id": "direct-oblique-case",
        "title": "<span dir=\"rtl\">مستقیم او غیري حالت</span> — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають прямий (номінативний) і непрямий (скісний) відмінок в однині; непрямий вживається після прийменників і як підмет перехідних дієслів у минулому часі.",
            "en": {
              "text": "Nouns have a direct (nominative) and an oblique case in the singular; the oblique is used after prepositions and as the subject of transitive verbs in the past tense."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سړی</span> (прямий) / <span dir=\"rtl\">سړي</span> (непрямий)",
                "чоловік (прямий/непрямий)"
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
        "id": "oblique-plural",
        "title": "<span dir=\"rtl\">جمع: غیري حالت</span> — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "У множині непрямий відмінок здебільшого утворюється закінченням -و, що додається до основи множини, незалежно від класу утворення прямої множини.",
            "en": {
              "text": "In the plural, the oblique case is mostly formed with the ending -و added to the plural stem, regardless of which class formed the direct plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سړي → سړیو</span>",
                "чоловіки (прямий → непрямий мн.)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Oblique Case — B2"
      },
      {
        "id": "adjective-agreement",
        "title": "<span dir=\"rtl\">صفت: همغږي</span> — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметники узгоджуються з іменником у роді, числі й відмінку через власну систему закінчень, окрему від іменникової.",
            "en": {
              "text": "Adjectives agree with the noun in gender, number, and case through their own system of endings, separate from the noun's."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ښه سړی / ښه سړي (мн.)</span>",
                "хороший чоловік / хороші чоловіки"
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
        "id": "reflexive-khpal",
        "title": "<span dir=\"rtl\">خپل: بیارګاندنه</span> — B1",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зворотний займенник خپل ('свій') уживається для всіх осіб і чисел замість звичайних присвійних займенників, коли власник збігається з підметом.",
            "en": {
              "text": "The reflexive possessive خپل ('one's own') is used for all persons and numbers instead of ordinary possessives, whenever the possessor matches the subject."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه خپل کتاب لولم.</span>",
                "Я читаю свою книгу."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive: خپل — B1"
      },
      {
        "id": "possessive-da",
        "title": "<span dir=\"rtl\">د: تړاو</span> — A2",
        "emoji": "🔑",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійний зв'язок передається прийменником د ('of'), поставленим перед власником, а не через відмінкове закінчення чи ізафет.",
            "en": {
              "text": "Possession is expressed with the preposition د ('of') placed before the possessor, rather than through a case ending or an ezafe construction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">د پلار کتاب</span>",
                "батькова книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession: د — A2"
      },
      {
        "id": "demonstratives",
        "title": "<span dir=\"rtl\">اشاري ضمیرونه</span> — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники دا ('цей') і هغه ('той') водночас служать і займенником третьої особи, і вказівним прикметником перед іменником.",
            "en": {
              "text": "The demonstratives دا ('this') and هغه ('that') double as third-person pronouns and as demonstrative adjectives before a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">دا کتاب</span>",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives — A1"
      },
      {
        "id": "interrogatives",
        "title": "<span dir=\"rtl\">پوښتنیز ضمیرونه</span> — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "table",
            "title": "Питальні слова",
            "rows": [
              [
                "хто",
                "<span dir=\"rtl\">څوک</span> (tsok)"
              ],
              [
                "що",
                "<span dir=\"rtl\">څه</span> (tsa)"
              ],
              [
                "коли",
                "<span dir=\"rtl\">کله</span> (kala)"
              ],
              [
                "де",
                "<span dir=\"rtl\">چیرته</span> (chirta)"
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
        "title": "<span dir=\"rtl\">مرکب فعلونه</span> — B1",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість нових і запозичених дієслівних понять утворюється складеним дієсловом: іменник або прикметник плюс допоміжне کول ('робити', перехідне) чи کیدل ('ставати', неперехідне).",
            "en": {
              "text": "Most new and borrowed verbal concepts are formed as compound verbs: a noun or adjective plus the auxiliary کول ('to do', transitive) or کیدل ('to become', intransitive)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کار کول</span> (робити роботу = працювати)",
                "працювати"
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
        "id": "postpositions-circumposition",
        "title": "<span dir=\"rtl\">پرې-روستاړی: دوه اړخیزه</span> — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Пушту нерідко вживає циркумпозиції — прийменник перед іменником і узгоджений післяйменник після нього, що разом уточнюють просторове значення.",
            "en": {
              "text": "Pashto often uses circumpositions — a preposition before the noun and a matching postposition after it — jointly refining the spatial meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">په کور کې</span>",
                "у домі (په...کې = 'в...усередині')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Circumpositions — B1"
      },
      {
        "id": "comparative-degree",
        "title": "<span dir=\"rtl\">پرتله: زیات تر</span> — A2",
        "emoji": "📊",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняльний ступінь утворюється прикметником з непрямим об'єктом порівняння, введеним прийменником تر ('ніж').",
            "en": {
              "text": "The comparative degree is formed with the adjective and the compared object introduced by the preposition تر ('than')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">دا تر هغه لوی دی.</span>",
                "Це більше за те."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparative: تر — A2"
      },
      {
        "id": "superlative-degree",
        "title": "<span dir=\"rtl\">ترټولو: ترین</span> — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь порівняння утворюється часткою ترټولو ('за все') перед прикметником або суфіксом -ژ در окремих словах.",
            "en": {
              "text": "The superlative is formed with the particle ترټولو ('of all') before the adjective, or with the suffix -ژ on certain words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ترټولو لوی</span>",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative: ترټولو — B1"
      },
      {
        "id": "cardinal-numbers",
        "title": "<span dir=\"rtl\">شمېرې: ۱-۱۰</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "table",
            "title": "Числа 1-10",
            "rows": [
              [
                "1",
                "<span dir=\"rtl\">یو</span> (yaw)"
              ],
              [
                "2",
                "<span dir=\"rtl\">دوه</span> (dwa)"
              ],
              [
                "3",
                "<span dir=\"rtl\">درې</span> (dre)"
              ],
              [
                "5",
                "<span dir=\"rtl\">پنځه</span> (pindza)"
              ],
              [
                "10",
                "<span dir=\"rtl\">لس</span> (las)"
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
        "id": "word-order-sov",
        "title": "<span dir=\"rtl\">د جملې جوړښت: SOV</span> — A2",
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
                "<span dir=\"rtl\">زه کتاب لولم.</span> (я-книгу-читаю)",
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
        "id": "relative-clause-che",
        "title": "<span dir=\"rtl\">چې: اړونده جمله</span> — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Означальні (відносні) підрядні речення вводяться незмінним сполучником چې ('що/який'), незалежно від роду, числа чи відмінка означуваного іменника.",
            "en": {
              "text": "Relative clauses are introduced by the invariable conjunction چې ('that/which'), regardless of the gender, number, or case of the noun being modified."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هغه سړی چې راغی</span>",
                "той чоловік, що прийшов"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Clause: چې — B1"
      },
      {
        "id": "conjunctions",
        "title": "<span dir=\"rtl\">ارتباطي وييونه</span> — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "table",
            "title": "Сполучники",
            "rows": [
              [
                "і",
                "<span dir=\"rtl\">او</span> (aw)"
              ],
              [
                "або",
                "<span dir=\"rtl\">یا</span> (yā)"
              ],
              [
                "але",
                "<span dir=\"rtl\">خو</span> (kho)"
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
        "id": "vocative-case",
        "title": "<span dir=\"rtl\">ندايي حالت</span> — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "При звертанні іменник набуває окремої кличної форми, часто з подовженим кінцевим голосним і власним інтонаційним контуром.",
            "en": {
              "text": "In direct address, a noun takes a distinct vocative form, often with a lengthened final vowel and its own intonation contour."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">سړیه!</span>",
                "чоловіче!"
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
        "id": "adjective-before-noun",
        "title": "<span dir=\"rtl\">د صفت ځای</span> — A1",
        "emoji": "📍",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник завжди стоїть перед іменником, який він означає, без винятків для описових чи присвійних прикметників.",
            "en": {
              "text": "The adjective always precedes the noun it modifies, with no exception for descriptive or possessive adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لوی کور</span>",
                "великий будинок"
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
        "id": "indefinite-yaw",
        "title": "<span dir=\"rtl\">یو: نامتعین</span> — A2",
        "emoji": "1️⃣",
        "sections": [
          {
            "type": "intro",
            "text": "Пушту не має окремого артикля; невизначеність передається числівником یو ('один'), поставленим перед іменником, коли контекст цього потребує.",
            "en": {
              "text": "Pashto has no dedicated article; indefiniteness is conveyed with the numeral یو ('one') placed before the noun when context requires it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">یو سړی</span>",
                "якийсь чоловік"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Indefinite: یو — A2"
      },
      {
        "id": "prepositions-simple",
        "title": "<span dir=\"rtl\">ساده مخکینۍ</span> — A2",
        "emoji": "📌",
        "sections": [
          {
            "type": "table",
            "title": "Прийменники",
            "rows": [
              [
                "до",
                "<span dir=\"rtl\">ته</span> (ta)"
              ],
              [
                "з (разом)",
                "<span dir=\"rtl\">سره</span> (sara)"
              ],
              [
                "з (від)",
                "<span dir=\"rtl\">نه</span> (na)"
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
        "id": "infinitive-form",
        "title": "<span dir=\"rtl\">مصدر: -ل</span> — A2",
        "emoji": "📖",
        "sections": [
          {
            "type": "intro",
            "text": "Інфінітив (словникова форма дієслова) закінчується на -ل, доданий до основи, і саме ця форма подається в словниках.",
            "en": {
              "text": "The infinitive (dictionary form of the verb) ends in -ل added to the stem, and this is the form listed in dictionaries."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لیدل</span>",
                "бачити (інфінітив)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Infinitive: -ل — A2"
      },
      {
        "id": "participles",
        "title": "<span dir=\"rtl\">صفت فعلي</span> — B1",
        "emoji": "🧷",
        "sections": [
          {
            "type": "intro",
            "text": "Дієприкметник минулого часу утворюється суфіксом -لی і вживається водночас у перфектних формах дієслова та як прикметник.",
            "en": {
              "text": "The past participle is formed with the suffix -لی and is used both in the verb's perfect forms and as a standalone adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">لوستلی</span>",
                "прочитаний"
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
        "title": "<span dir=\"rtl\">لاملي فعلونه</span> — B2",
        "emoji": "⚙️",
        "sections": [
          {
            "type": "intro",
            "text": "Каузативні дієслова утворюються подовженням кореневого голосного або суфіксом -ول, що передає значення 'змусити зробити'.",
            "en": {
              "text": "Causative verbs are formed by lengthening the root vowel or with the suffix -ول, conveying the meaning 'make/have someone do'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">خوړل → خوړول</span>",
                "їсти → годувати (примусити їсти)"
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
        "id": "plural-formal-you",
        "title": "<span dir=\"rtl\">تاسو: درناوی</span> — A2",
        "emoji": "🙏",
        "sections": [
          {
            "type": "intro",
            "text": "Форма множини تاسو ('ви') уживається і як звертання до кількох осіб, і як ввічлива форма звертання до однієї людини, — та сама форма без окремого маркера.",
            "en": {
              "text": "The plural form تاسو ('you-plural') is used both to address several people and as a polite form addressing a single person — the same form, with no dedicated marker."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">تاسو څنګه یاست؟</span>",
                "Як ви поживаєте? (ввічливо, до однієї особи)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Formal تاسو — A2"
      },
      {
        "id": "emphatic-particles",
        "title": "<span dir=\"rtl\">هم، خو: ټینګار</span> — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Частки هم ('теж') і خو (підсилювальна, 'же/адже') додають наголос чи включення до речення, розміщуючись безпосередньо після виділюваного слова.",
            "en": {
              "text": "The particles هم ('also/too') and خو (emphatic, 'indeed') add emphasis or inclusion to a sentence, placed directly after the word being highlighted."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">زه هم ځم.</span>",
                "Я теж іду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Emphatic Particles: هم / خو — B1"
      },
      {
        "id": "pashto-extra-letters",
        "title": "<span dir=\"rtl\">پښتو تېرې لیکې</span> — A2",
        "emoji": "🔠",
        "sections": [
          {
            "type": "intro",
            "text": "Пуштунська абетка додає до арабського письма кілька власних літер (ښ, ږ, ځ, څ, ډ, ړ, ڼ, ټ, ګ) для звуків, яких немає в арабській чи перській мовах.",
            "en": {
              "text": "The Pashto alphabet adds several letters of its own (ښ, ږ, ځ, څ, ډ, ړ, ڼ, ټ, ګ) to the Arabic script, for sounds absent from Arabic or Persian."
            }
          },
          {
            "type": "table",
            "title": "Додаткові літери",
            "rows": [
              [
                "ښ",
                "sh/x (ретрофлексний)"
              ],
              [
                "ږ",
                "zh/g (ретрофлексний)"
              ],
              [
                "ځ",
                "dz"
              ],
              [
                "ډ",
                "ретрофлексне d"
              ]
            ],
            "en": {
              "title": "Extra letters"
            }
          }
        ],
        "titleEn": "Pashto's Extra Letters — A2"
      },
      {
        "id": "pashto-numerals",
        "title": "<span dir=\"rtl\">پښتو شمېرکونه</span> — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Пушту вживає ті самі східноарабські цифрові знаки, що й перська та урду, а не західноарабські ('латинські') цифри.",
            "en": {
              "text": "Pashto uses the same Eastern Arabic numeral glyphs as Persian and Urdu, not the Western Arabic ('Latin') digits."
            }
          },
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
        "titleEn": "Pashto Numerals — A1"
      },
      {
        "id": "colors",
        "title": "<span dir=\"rtl\">رنګونه</span> — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "table",
            "title": "Кольори",
            "rows": [
              [
                "червоний",
                "<span dir=\"rtl\">سور</span> (sur)"
              ],
              [
                "сірий/синій",
                "<span dir=\"rtl\">شین</span> (shin)"
              ],
              [
                "чорний",
                "<span dir=\"rtl\">تور</span> (tor)"
              ],
              [
                "білий",
                "<span dir=\"rtl\">سپین</span> (spin)"
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
        "id": "family-terms-gendered",
        "title": "<span dir=\"rtl\">کورنۍ: جنسیتي جوړه</span> — A2",
        "emoji": "👪",
        "sections": [
          {
            "type": "intro",
            "text": "Терміни спорідненості мають парні чоловічі й жіночі форми, утворені регулярною зміною закінчення, а не окремими коренями.",
            "en": {
              "text": "Kinship terms have paired masculine and feminine forms created by a regular ending change, rather than separate roots."
            }
          },
          {
            "type": "table",
            "title": "Спорідненість",
            "rows": [
              [
                "<span dir=\"rtl\">ورور</span> (брат) / <span dir=\"rtl\">خور</span> (сестра)",
                "brother / sister"
              ],
              [
                "<span dir=\"rtl\">پلار</span> (батько) / <span dir=\"rtl\">مور</span> (мати)",
                "father / mother"
              ]
            ],
            "en": {
              "title": "Kinship"
            }
          }
        ],
        "titleEn": "Kinship Terms — A2"
      },
      {
        "id": "pashtunwali-melmastia",
        "title": "<span dir=\"rtl\">ملمستیا: مېلمه‌پالنه</span> — B2",
        "emoji": "🏕️",
        "sections": [
          {
            "type": "intro",
            "text": "ملمستیا (melmastia, 'гостинність') — один зі стовпів пуштунського кодексу честі پښتونوالی (Pashtunwali): обов'язок надати притулок і частування будь-якому гостеві незалежно від його ідентичності.",
            "en": {
              "text": "ملمستیا (melmastia, 'hospitality') is a pillar of the Pashtun honor code پښتونوالی (Pashtunwali): the obligation to shelter and feed any guest regardless of their identity."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ملمستیا زموږ دود دی.</span>",
                "Гостинність — наша традиція."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pashtunwali: Melmastia (Hospitality) — B2"
      },
      {
        "id": "pashtunwali-nanawatai",
        "title": "<span dir=\"rtl\">ننواتی: پناه</span> — B2",
        "emoji": "🛡️",
        "sections": [
          {
            "type": "intro",
            "text": "ننواتی (nanawatai) — право притулку в межах پښتونوالی: навіть ворог, що просить захисту, має отримати його, і господар зобов'язаний його обороняти.",
            "en": {
              "text": "ننواتی (nanawatai) is the right of sanctuary within Pashtunwali: even an enemy seeking protection must be granted it, and the host is obliged to defend them."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هغه ننواتی وغوښت.</span>",
                "Він попросив притулку."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pashtunwali: Nanawatai (Sanctuary) — B2"
      },
      {
        "id": "pashtunwali-badal",
        "title": "<span dir=\"rtl\">بدل: انصاف</span> — B2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "بدل (badal) — принцип відплати/справедливості в پښتونوالی: кривда повинна бути врівноважена рівноцінною відповіддю, що традиційно регулювало родові конфлікти.",
            "en": {
              "text": "بدل (badal) is the principle of retribution/justice within Pashtunwali: a wrong must be balanced by an equivalent response, traditionally regulating clan conflicts."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">دا زموږ د بدل قانون دی.</span>",
                "Це наш закон відплати."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Pashtunwali: Badal (Justice) — B2"
      },
      {
        "id": "time-expressions",
        "title": "<span dir=\"rtl\">د وخت بیانونه</span> — A2",
        "emoji": "🕐",
        "sections": [
          {
            "type": "table",
            "title": "Час",
            "rows": [
              [
                "сьогодні",
                "<span dir=\"rtl\">نن</span> (nan)"
              ],
              [
                "завтра",
                "<span dir=\"rtl\">سبا</span> (sabá)"
              ],
              [
                "вчора",
                "<span dir=\"rtl\">پرون</span> (parún)"
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
        "title": "<span dir=\"rtl\">هوا</span> — A2",
        "emoji": "☁️",
        "sections": [
          {
            "type": "table",
            "title": "Погода",
            "rows": [
              [
                "сонце",
                "<span dir=\"rtl\">لمر</span> (lmar)"
              ],
              [
                "дощ",
                "<span dir=\"rtl\">باران</span> (barán)"
              ],
              [
                "сніг",
                "<span dir=\"rtl\">واوره</span> (wāwra)"
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
        "title": "<span dir=\"rtl\">خواړه</span> — A2",
        "emoji": "🍞",
        "sections": [
          {
            "type": "table",
            "title": "Їжа",
            "rows": [
              [
                "хліб",
                "<span dir=\"rtl\">ډوډۍ</span> (dodáy)"
              ],
              [
                "вода",
                "<span dir=\"rtl\">اوبه</span> (obá)"
              ],
              [
                "чай",
                "<span dir=\"rtl\">چای</span> (chay)"
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
        "title": "<span dir=\"rtl\">سلامونه</span> — A1",
        "emoji": "👋",
        "sections": [
          {
            "type": "intro",
            "text": "Основне вітання ستړی مه شې ('нехай ти не втомишся') відображає традицію пуштунського кочового й аграрного побуту, побажання відпочинку від праці, а не просто 'привіт'.",
            "en": {
              "text": "The core greeting ستړی مه شې ('may you not be tired') reflects Pashtun nomadic and agrarian tradition — a wish for rest from labor, rather than a plain 'hello'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ستړی مه شې!</span>",
                "Привіт! (букв. 'нехай ти не втомишся')"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Greetings — A1"
      },
      {
        "id": "body-parts",
        "title": "<span dir=\"rtl\">د بدن غړي</span> — A2",
        "emoji": "🧍",
        "sections": [
          {
            "type": "table",
            "title": "Частини тіла",
            "rows": [
              [
                "голова",
                "<span dir=\"rtl\">سر</span> (sar)"
              ],
              [
                "рука",
                "<span dir=\"rtl\">لاس</span> (las)"
              ],
              [
                "око",
                "<span dir=\"rtl\">سترګه</span> (starga)"
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
        "id": "cardinal-directions",
        "title": "<span dir=\"rtl\">لوري</span> — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "table",
            "title": "Сторони світу",
            "rows": [
              [
                "північ",
                "<span dir=\"rtl\">شمال</span> (shamāl)"
              ],
              [
                "південь",
                "<span dir=\"rtl\">جنوب</span> (janúb)"
              ],
              [
                "схід",
                "<span dir=\"rtl\">ختیځ</span> (khatídz)"
              ],
              [
                "захід",
                "<span dir=\"rtl\">لویدیځ</span> (lwedídz)"
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
        "title": "<span dir=\"rtl\">وړوکوونکی: -ک</span> — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувальна форма утворюється суфіксом -کی/-که, що додає значення малості або пестливості до іменника.",
            "en": {
              "text": "The diminutive is formed with the suffix -کی/-که, adding a sense of smallness or affection to a noun."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">هلک → هلکی</span>",
                "хлопчик → хлопчинка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutives: -ک — B1"
      },
      {
        "id": "numbers-tens",
        "title": "<span dir=\"rtl\">لسیزې</span> — A2",
        "emoji": "🔟",
        "sections": [
          {
            "type": "table",
            "title": "Десятки",
            "rows": [
              [
                "20",
                "<span dir=\"rtl\">شل</span> (shil)"
              ],
              [
                "30",
                "<span dir=\"rtl\">دېرش</span> (dérsh)"
              ],
              [
                "100",
                "<span dir=\"rtl\">سل</span> (sal)"
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
        "title": "<span dir=\"rtl\">د اونۍ ورځې</span> — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "понеділок",
                "<span dir=\"rtl\">دوشنبه</span> (dushanbá)"
              ],
              [
                "п'ятниця",
                "<span dir=\"rtl\">جمعه</span> (jumá)"
              ],
              [
                "неділя",
                "<span dir=\"rtl\">یکشنبه</span> (yakshanbá)"
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
        "id": "loanword-strata",
        "title": "<span dir=\"rtl\">پورونه: پرارابي</span> — B2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Лексика пушту складається з питомих іранських коренів, значного шару арабських релігійних запозичень через іслам, персизмів через культурний вплив дарі та новіших англіцизмів.",
            "en": {
              "text": "Pashto vocabulary is layered: native Iranian roots, a substantial layer of Arabic religious loanwords via Islam, Persian loans through Dari cultural influence, and more recent English borrowings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">کتاب</span> (з арабської 'книга')",
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
        "id": "postposition-la-sara",
        "title": "<span dir=\"rtl\">سره: یوځای</span> — A2",
        "emoji": "🤝",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник سره ('з/разом') позначає супровід чи інструмент і ставиться після іменника в непрямому відмінку.",
            "en": {
              "text": "The preposition سره ('with/together') marks accompaniment or instrument and follows the noun in the oblique case."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">له ملګري سره</span>",
                "з другом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Postposition: سره ('with') — A2"
      },
      {
        "id": "adverbs-manner",
        "title": "<span dir=\"rtl\">د توګې قیدونه</span> — B1",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії часто утворюються повторенням прикметника або доданням незмінного закінчення, і стоять безпосередньо перед дієсловом.",
            "en": {
              "text": "Manner adverbs are often formed by reduplicating the adjective or adding an invariable ending, and are placed directly before the verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ورو ورو ځي.</span>",
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
        "id": "clothing-vocabulary",
        "title": "<span dir=\"rtl\">جامې</span> — A2",
        "emoji": "👕",
        "sections": [
          {
            "type": "table",
            "title": "Одяг",
            "rows": [
              [
                "перахан-тумбан (традиційний костюм)",
                "<span dir=\"rtl\">پرتوګ</span> / <span dir=\"rtl\">کميس</span>"
              ],
              [
                "тюрбан/чалма",
                "<span dir=\"rtl\">پګړۍ</span> (pagṛáy)"
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
        "id": "pashto-diglossia-dialects",
        "title": "<span dir=\"rtl\">ژبنۍ بېلوالی</span> — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Пушту має два основні діалектні блоки — 'м'який' південно-західний (Кандагар) і 'твердий' північно-східний (Пешавар), що різняться вимовою ښ/ږ (як [ʂ]/[ʐ] на півдні або [x]/[g] на півночі).",
            "en": {
              "text": "Pashto has two main dialect blocs — the 'soft' southwestern (Kandahar) and the 'hard' northeastern (Peshawar), differing chiefly in the pronunciation of ښ/ږ (as [ʂ]/[ʐ] in the south versus [x]/[g] in the north)."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ښه</span> (south: sha / north: xə)",
                "хороший (регіональна вимова)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Dialect Split — B2"
      },
      {
        "id": "numbers-ordinal",
        "title": "<span dir=\"rtl\">ترتيبي شمېرې</span> — B1",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники утворюються здебільшого суфіксом -م, доданим до кількісного числівника, окрім супплетивного 'перший'.",
            "en": {
              "text": "Ordinal numbers are mostly formed with the suffix -م added to the cardinal number, except for the suppletive word for 'first'."
            }
          },
          {
            "type": "table",
            "title": "Порядкові",
            "rows": [
              [
                "перший",
                "<span dir=\"rtl\">لومړی</span> (lumṛáy)"
              ],
              [
                "другий",
                "<span dir=\"rtl\">دویم</span> (dwáyam)"
              ],
              [
                "третій",
                "<span dir=\"rtl\">دریم</span> (dréyam)"
              ]
            ],
            "en": {
              "title": "Ordinals"
            }
          }
        ],
        "titleEn": "Ordinal Numbers — B1"
      },
      {
        "id": "honorific-titles",
        "title": "<span dir=\"rtl\">درناوي لقبونه</span> — B1",
        "emoji": "🎖️",
        "sections": [
          {
            "type": "intro",
            "text": "Шаноблива термінологія містить خان (khan, традиційний лідер клану) та ملک (malak, обраний старійшина), що вживаються перед іменем як титул поваги.",
            "en": {
              "text": "Honorific vocabulary includes خان (khan, traditional clan leader) and ملک (malak, elected village elder), used before a name as a title of respect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">احمد خان</span>",
                "Ахмед-хан"
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
        "id": "coordinating-conjunctions-extra",
        "title": "<span dir=\"rtl\">نور تړونونه: که نه</span> — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Сполучник که نه ('інакше') і частка بلکې ('а навпаки') вводять протиставні чи альтернативні підрядні зв'язки, розширюючи базовий набір او/یا/خو.",
            "en": {
              "text": "The conjunction که نه ('otherwise') and the particle بلکې ('but rather') introduce contrastive or alternative clause links, extending the basic او/یا/خو set."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "<span dir=\"rtl\">ژر راشه، که نه به ولاړ شم.</span>",
                "Приходь швидко, інакше я піду."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Further Conjunctions: که نه — B1"
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
        "id": "irregular-verbs-tlal",
        "title": "<span dir=\"rtl\">بې قاعده فعلونه: تلل</span> — B1",
        "emoji": "🚶",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово تلل ('йти') і راتلل ('приходити') утворюють минулий час від зовсім іншого кореня (لاړ / راغی), а не за регулярною моделлю додавання закінчень до основи теперішнього часу.",
            "en": {
              "text": "The verbs تلل ('to go') and راتلل ('to come') form their past tense from an entirely different root (لاړ / راغی), not by the regular pattern of adding endings to the present stem."
            }
          },
          {
            "type": "table",
            "title": "Супплетивні форми",
            "rows": [
              [
                "<span dir=\"rtl\">ځم</span> (іду, теп.) → <span dir=\"rtl\">لاړم</span> (пішов, мин.)",
                "go → went (suppletive)"
              ],
              [
                "<span dir=\"rtl\">راځم</span> (приходжу) → <span dir=\"rtl\">راغلم</span> (прийшов)",
                "come → came (suppletive)"
              ]
            ],
            "en": {
              "title": "Suppletive Forms"
            }
          }
        ],
        "titleEn": "Irregular Verbs: تلل ('to go') — B1"
      },
      {
        "id": "irregular-plurals",
        "title": "<span dir=\"rtl\">بې قاعده جمع</span> — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже частотних іменників мають множину, що не вписується в жоден зі стандартних класів (-ان, -ونه, -ي), а утворюється зміною голосного всередині слова.",
            "en": {
              "text": "A handful of very frequent nouns have a plural that fits none of the standard classes (-ان, -ونه, -ي), formed instead by an internal vowel change."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярна множина",
            "rows": [
              [
                "<span dir=\"rtl\">پلار</span> (батько) → <span dir=\"rtl\">پلرونه</span>",
                "father → fathers (irregular stem)"
              ],
              [
                "<span dir=\"rtl\">مېلمه</span> (гість) → <span dir=\"rtl\">مېلمانه</span>",
                "guest → guests (irregular)"
              ]
            ],
            "en": {
              "title": "Irregular Plurals"
            }
          }
        ],
        "titleEn": "Irregular Plurals — B2"
      },
      {
        "id": "irregular-comparative-forms",
        "title": "<span dir=\"rtl\">بې قاعده پرتلني بڼې</span> — B2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька базових прикметників (ганизначень 'хороший', 'поганий') мають супплетивний порівняльний ступінь замість регулярного تر-звороту, як у більшості мов.",
            "en": {
              "text": "A few core adjectives (meaning 'good', 'bad') have a suppletive comparative form instead of the regular تر-construction, as in many languages."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярний порівняльний ступінь",
            "rows": [
              [
                "<span dir=\"rtl\">ښه</span> (хороший) → <span dir=\"rtl\">غوره</span> (кращий)",
                "good → better (suppletive)"
              ],
              [
                "<span dir=\"rtl\">بد</span> (поганий) → <span dir=\"rtl\">بدتر</span> (гірший)",
                "bad → worse"
              ]
            ],
            "en": {
              "title": "Irregular Comparatives"
            }
          }
        ],
        "titleEn": "Irregular Comparative Forms — B2"
      }
    ]
  }
];
