// Vymova — data/grammar-data/grammar_ar.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_AR: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "definite-article",
        "title": "أل التعريف — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Означеність в арабській позначається префіксом <span dir=\"rtl\">ال</span>, який додається перед іменником незалежно від роду і числа.",
            "en": {
              "text": "Definiteness in Arabic is marked by the prefix ال, attached before a noun regardless of gender or number."
            }
          },
          {
            "type": "table",
            "title": "Без артикля → з артиклем",
            "rows": [
              [
                "<span dir=\"rtl\">كتاب</span> (книга)",
                "<span dir=\"rtl\">الكتاب</span> (ця книга)"
              ],
              [
                "<span dir=\"rtl\">بيت</span> (дім)",
                "<span dir=\"rtl\">البيت</span> (цей дім)"
              ],
              [
                "<span dir=\"rtl\">مدينة</span> (місто)",
                "<span dir=\"rtl\">المدينة</span> (це місто)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الكتاب على الطاولة.</span>",
                "Книга на столі."
              ],
              [
                "<span dir=\"rtl\">البيت كبير.</span>",
                "Дім великий."
              ]
            ]
          }
        ],
        "titleEn": "The Definite Article Al- — A1"
      },
      {
        "id": "gender",
        "title": "المذكر والمؤنث — A1",
        "emoji": "👫",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники та прикметники в арабській мають рід — чоловічий або жіночий. Жіночий рід зазвичай утворюється додаванням <span dir=\"rtl\">ة</span> (та марбута) в кінці слова.",
            "en": {
              "text": "Arabic nouns and adjectives have gender — masculine or feminine. The feminine form is usually created by adding ة (ta marbuta) at the end of the word."
            }
          },
          {
            "type": "table",
            "title": "Чоловічий і жіночий рід",
            "rows": [
              [
                "<span dir=\"rtl\">كبير</span> (великий)",
                "<span dir=\"rtl\">كبيرة</span> (велика)"
              ],
              [
                "<span dir=\"rtl\">طالب</span> (студент)",
                "<span dir=\"rtl\">طالبة</span> (студентка)"
              ],
              [
                "<span dir=\"rtl\">جميل</span> (гарний)",
                "<span dir=\"rtl\">جميلة</span> (гарна)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هو طالب جيد.</span>",
                "Він хороший студент."
              ],
              [
                "<span dir=\"rtl\">هي طالبة جيدة.</span>",
                "Вона хороша студентка."
              ]
            ]
          }
        ],
        "titleEn": "Masculine & Feminine — A1"
      },
      {
        "id": "present-tense",
        "title": "الفعل في المضارع — A1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "У теперішньому часі дієслово отримує префікси й суфікси залежно від особи. Дієслово <span dir=\"rtl\">كتب</span> (писати) у теперішньому часі — <span dir=\"rtl\">يكتب</span>.",
            "en": {
              "text": "In the present tense, the verb takes prefixes and suffixes depending on the person. The verb كتب (to write) becomes يكتب in the present tense."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">يكتب</span> (писати) — теперішній час",
            "rows": [
              [
                "<span dir=\"rtl\">أنا</span> (я)",
                "<span dir=\"rtl\">أكتب</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">أنتَ</span> (ти, ч.р.)",
                "<span dir=\"rtl\">تكتب</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">أنتِ</span> (ти, ж.р.)",
                "<span dir=\"rtl\">تكتبين</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">هو</span> (він)",
                "<span dir=\"rtl\">يكتب</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">هي</span> (вона)",
                "<span dir=\"rtl\">تكتب</span>",
                ""
              ],
              [
                "<span dir=\"rtl\">نحن</span> (ми)",
                "<span dir=\"rtl\">نكتب</span>",
                ""
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أنا أكتب رسالة.</span>",
                "Я пишу листа."
              ],
              [
                "<span dir=\"rtl\">هي تكتب كتابًا.</span>",
                "Вона пише книгу."
              ]
            ]
          }
        ],
        "titleEn": "Present Tense — A1"
      },
      {
        "id": "pronouns",
        "title": "الضمائر الشخصية — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Особові займенники в арабській розрізняють рід уже в другій особі однини (ти — чоловік/жінка) та у множині.",
            "en": {
              "text": "Arabic personal pronouns distinguish gender already in the second person singular (\"you\" — masculine/feminine) and in the plural."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "<span dir=\"rtl\">أنا</span>",
                "я"
              ],
              [
                "<span dir=\"rtl\">أنتَ / أنتِ</span>",
                "ти (ч./ж.)"
              ],
              [
                "<span dir=\"rtl\">هو / هي</span>",
                "він / вона"
              ],
              [
                "<span dir=\"rtl\">نحن</span>",
                "ми"
              ],
              [
                "<span dir=\"rtl\">هم / هن</span>",
                "вони (ч./ж.)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أنا مدرّس.</span>",
                "Я (є) вчитель."
              ],
              [
                "<span dir=\"rtl\">هي جائعة.</span>",
                "Вона (є) голодна."
              ]
            ]
          }
        ],
        "titleEn": "Personal Pronouns — A1"
      },
      {
        "id": "plural",
        "title": "الجمع — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "В арабській є \"правильна\" множина (додавання закінчення) та \"зламана\" множина (зміна внутрішньої структури слова, яку потрібно запам'ятовувати окремо).",
            "en": {
              "text": "Arabic has a \"sound\" plural (formed by adding an ending) and a \"broken\" plural (formed by changing the word's internal structure, which must be memorised separately)."
            }
          },
          {
            "type": "table",
            "title": "Однина → множина",
            "rows": [
              [
                "<span dir=\"rtl\">معلم</span> → <span dir=\"rtl\">معلمون</span>",
                "учитель → учителі (правильна)"
              ],
              [
                "<span dir=\"rtl\">طالبة</span> → <span dir=\"rtl\">طالبات</span>",
                "студентка → студентки (правильна)"
              ],
              [
                "<span dir=\"rtl\">كتاب</span> → <span dir=\"rtl\">كتب</span>",
                "книга → книги (зламана)"
              ],
              [
                "<span dir=\"rtl\">بيت</span> → <span dir=\"rtl\">بيوت</span>",
                "дім → будинки (зламана)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لدي كتب كثيرة.</span>",
                "У мене багато книг."
              ],
              [
                "<span dir=\"rtl\">البيوت قديمة.</span>",
                "Будинки старі."
              ]
            ]
          }
        ],
        "titleEn": "Plural (Sound & Broken) — A1"
      },
      {
        "id": "sun-moon-letters",
        "title": "الحروف الشمسية والقمرية — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Перед «сонячними» літерами лям артикля <span dir=\"rtl\">ال</span> асимілюється (не вимовляється, подвоюючи наступну літеру); перед «місячними» літерами вимовляється чітко.",
            "en": {
              "text": "Before 'sun' letters, the lam of the article ال assimilates (is not pronounced, doubling the following letter); before 'moon' letters, it is pronounced clearly."
            }
          },
          {
            "type": "table",
            "title": "Сонячні vs місячні літери",
            "rows": [
              [
                "<span dir=\"rtl\">الشمس</span> (вимовляється аш-шамс)",
                "сонце (сонячна літера ش)"
              ],
              [
                "<span dir=\"rtl\">القمر</span> (вимовляється аль-камар)",
                "місяць (місячна літера ق)"
              ],
              [
                "<span dir=\"rtl\">الرجل</span> (ар-раджуль)",
                "чоловік (сонячна ر)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الشمس ساطعة.</span>",
                "Сонце яскраве."
              ]
            ]
          }
        ],
        "titleEn": "Sun & Moon Letters — A1"
      },
      {
        "id": "possession-idafa",
        "title": "الإضافة — A2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Ідафа — конструкція належності з двох іменників поспіль: перший (без артикля) визначається другим (з артиклем чи без, залежно від означеності).",
            "en": {
              "text": "Idafa is a possessive construction of two consecutive nouns: the first (with no article) is defined by the second (with or without the article, depending on definiteness)."
            }
          },
          {
            "type": "table",
            "title": "Конструкція ідафа",
            "rows": [
              [
                "<span dir=\"rtl\">كتاب الطالب</span>",
                "книга студента"
              ],
              [
                "<span dir=\"rtl\">باب البيت</span>",
                "двері дому"
              ],
              [
                "<span dir=\"rtl\">اسم مدينة</span>",
                "назва (якогось) міста"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هذا كتاب المعلم.</span>",
                "Це книга вчителя."
              ]
            ]
          }
        ],
        "titleEn": "Idafa (The Possessive Construction) — A2"
      },
      {
        "id": "adjective-agreement",
        "title": "مطابقة الصفة والموصوف — A1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник узгоджується з іменником у роді, числі й означеності та стоїть після нього.",
            "en": {
              "text": "An adjective agrees with the noun in gender, number, and definiteness, and follows it."
            }
          },
          {
            "type": "table",
            "title": "Узгодження",
            "rows": [
              [
                "<span dir=\"rtl\">بيت كبير</span>",
                "великий дім"
              ],
              [
                "<span dir=\"rtl\">البيت الكبير</span>",
                "цей великий дім (обидва з артиклем)"
              ],
              [
                "<span dir=\"rtl\">مدينة جميلة</span>",
                "гарне місто"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لدي سيارة جديدة.</span>",
                "У мене нова машина."
              ]
            ]
          }
        ],
        "titleEn": "Adjective Agreement — A1"
      },
      {
        "id": "question-words",
        "title": "أدوات الاستفهام — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слова стоять на початку речення.",
            "en": {
              "text": "Question words go at the start of the sentence."
            }
          },
          {
            "type": "markers",
            "title": "Питальні слова",
            "items": [
              "<span dir=\"rtl\">من؟</span> (хто?)",
              "<span dir=\"rtl\">ماذا؟</span> (що?)",
              "<span dir=\"rtl\">أين؟</span> (де?)",
              "<span dir=\"rtl\">متى؟</span> (коли?)",
              "<span dir=\"rtl\">لماذا؟</span> (чому?)",
              "<span dir=\"rtl\">كيف؟</span> (як?)"
            ],
            "en": {
              "title": "Question words"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أين تسكن؟</span>",
                "Де ти живеш?"
              ]
            ]
          }
        ],
        "titleEn": "Question Words — A1"
      },
      {
        "id": "negation-la-ma",
        "title": "النفي بـ لا وما وليس — A1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "لا заперечує теперішній час і наказ; ما заперечує минулий час (і взагалі, розмовно); ليس заперечує іменне речення («є»).",
            "en": {
              "text": "لا negates the present tense and commands; ما negates the past tense (and generally in speech); ليس negates a nominal sentence ('to be')."
            }
          },
          {
            "type": "table",
            "title": "لا / ما / ليس",
            "rows": [
              [
                "<span dir=\"rtl\">لا أفهم.</span>",
                "Я не розумію."
              ],
              [
                "<span dir=\"rtl\">ما فهمت.</span>",
                "Я не зрозумів. (минулий)"
              ],
              [
                "<span dir=\"rtl\">هو ليس هنا.</span>",
                "Його тут немає."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لا أعرف.</span>",
                "Я не знаю."
              ]
            ]
          }
        ],
        "titleEn": "Negation with Lā, Mā, Laysa — A1"
      }
    ]
  },
  {
    "id": "tenses",
    "title": "الأزمنة والأوزان",
    "titleEn": "Tenses & Verb Forms",
    "emoji": "🕐",
    "rules": [
      {
        "id": "verb-forms-overview",
        "title": "الأوزان (أوزان الفعل) — A2",
        "emoji": "📚",
        "sections": [
          {
            "type": "intro",
            "text": "Арабське дієслово будується з трилітерного кореня, вставленого в один із десяти шаблонів (аузан), кожен з яких додає своє значення (посилення, взаємність, зворотність тощо).",
            "en": {
              "text": "Arabic verbs are built from a three-letter root inserted into one of ten patterns (awzan), each adding its own meaning (intensity, reciprocity, reflexivity, etc.)."
            }
          },
          {
            "type": "table",
            "title": "Корінь ك-ت-ب у різних вазнах",
            "rows": [
              [
                "<span dir=\"rtl\">كَتَبَ</span> (I, писати)",
                "базовий шаблон"
              ],
              [
                "<span dir=\"rtl\">كَتَّبَ</span> (II, змусити писати)",
                "подвоєння середньої — каузатив"
              ],
              [
                "<span dir=\"rtl\">كَاتَبَ</span> (III, листуватися)",
                "довгий аліф — взаємність"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كتب الرسالة.</span>",
                "Він написав листа."
              ]
            ]
          }
        ],
        "titleEn": "The Ten Verb Forms (Awzān) — A2"
      },
      {
        "id": "past-tense",
        "title": "الفعل الماضي — A1",
        "emoji": "⏳",
        "sections": [
          {
            "type": "intro",
            "text": "Минулий час утворюється додаванням суфіксів до основи дієслова.",
            "en": {
              "text": "The past tense is formed by adding suffixes to the verb stem."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">كتب</span> (писати) — минулий час",
            "rows": [
              [
                "<span dir=\"rtl\">أنا</span>",
                "<span dir=\"rtl\">كتبْتُ</span>",
                "я написав"
              ],
              [
                "<span dir=\"rtl\">أنتَ</span>",
                "<span dir=\"rtl\">كتبْتَ</span>",
                "ти написав"
              ],
              [
                "<span dir=\"rtl\">هو</span>",
                "<span dir=\"rtl\">كتبَ</span>",
                "він написав"
              ],
              [
                "<span dir=\"rtl\">هي</span>",
                "<span dir=\"rtl\">كتبَتْ</span>",
                "вона написала"
              ]
            ],
            "en": {
              "title": "كتب (to write) — past tense"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كتبت رسالة أمس.</span>",
                "Я написав листа вчора."
              ]
            ]
          }
        ],
        "titleEn": "Past Tense — A1"
      },
      {
        "id": "jussive-mood",
        "title": "المضارع المجزوم — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Юссивна форма теперішнього часу (без голосної в кінці) вживається після لم (заперечення минулого) і в наказовому способі.",
            "en": {
              "text": "The jussive form of the present tense (no final vowel) is used after لم (past negation) and in the imperative."
            }
          },
          {
            "type": "table",
            "title": "لم + مجزوم",
            "rows": [
              [
                "<span dir=\"rtl\">لم أكتبْ.</span>",
                "Я не писав. (заперечення минулого)"
              ],
              [
                "<span dir=\"rtl\">لم يذهبْ.</span>",
                "Він не пішов."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لم أفهم شيئًا.</span>",
                "Я нічого не зрозумів."
              ]
            ]
          }
        ],
        "titleEn": "Jussive Mood — B1"
      },
      {
        "id": "subjunctive-mood",
        "title": "المضارع المنصوب — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Кон'юнктивна форма теперішнього часу (закінчення -a) вживається після часток мети/бажання, як أن (щоб), لن (заперечення майбутнього).",
            "en": {
              "text": "The subjunctive form of the present tense (ending -a) is used after purpose/wish particles like أن (to/that) and لن (future negation)."
            }
          },
          {
            "type": "table",
            "title": "أن / لن + منصوب",
            "rows": [
              [
                "<span dir=\"rtl\">أريد أن أذهبَ.</span>",
                "Я хочу піти."
              ],
              [
                "<span dir=\"rtl\">لن أذهبَ.</span>",
                "Я не піду. (заперечення майбутнього)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">يجب أن تدرسَ.</span>",
                "Тобі треба вчитися."
              ]
            ]
          }
        ],
        "titleEn": "Subjunctive Mood — B1"
      },
      {
        "id": "imperative",
        "title": "فعل الأمر — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб утворюється від юссивної основи, знімаючи префікс теперішнього часу; вживається лише для 2-ї особи.",
            "en": {
              "text": "The imperative is formed from the jussive stem by dropping the present-tense prefix; used only for the 2nd person."
            }
          },
          {
            "type": "formula",
            "title": "<span dir=\"rtl\">اكتب!</span> (пиши!)",
            "rows": [
              [
                "<span dir=\"rtl\">أنتَ</span>",
                "<span dir=\"rtl\">اكتبْ!</span>",
                "пиши! (ч.р.)"
              ],
              [
                "<span dir=\"rtl\">أنتِ</span>",
                "<span dir=\"rtl\">اكتبي!</span>",
                "пиши! (ж.р.)"
              ],
              [
                "<span dir=\"rtl\">أنتم</span>",
                "<span dir=\"rtl\">اكتبوا!</span>",
                "пишіть!"
              ]
            ],
            "en": {
              "title": "اكتب! (write!)"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">تعالَ هنا!</span>",
                "Іди сюди!"
              ]
            ]
          }
        ],
        "titleEn": "Imperative — A2"
      },
      {
        "id": "future-tense",
        "title": "المستقبل (سـ / سوف) — A1",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється префіксом سـ (близьке майбутнє) або словом سوف (загальне майбутнє) перед дієсловом у теперішньому часі.",
            "en": {
              "text": "The future tense is formed with the prefix سـ (near future) or the word سوف (general future) before the present-tense verb."
            }
          },
          {
            "type": "table",
            "title": "سـ / سوف",
            "rows": [
              [
                "<span dir=\"rtl\">سأذهب.</span>",
                "Я піду."
              ],
              [
                "<span dir=\"rtl\">سوف أسافر.</span>",
                "Я подорожуватиму."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">سنلتقي غدًا.</span>",
                "Ми зустрінемось завтра."
              ]
            ]
          }
        ],
        "titleEn": "Future Tense (Sa-/Sawfa) — A1"
      },
      {
        "id": "form-ii-verbs",
        "title": "الوزن الثاني (فَعَّلَ) — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Другий вазн (подвоєння середньої кореневої літери) зазвичай надає каузативного значення («змусити зробити») або посилює дію.",
            "en": {
              "text": "Form II (doubling the middle root letter) usually adds a causative meaning ('to make someone do') or intensifies the action."
            }
          },
          {
            "type": "table",
            "title": "فَعَّلَ",
            "rows": [
              [
                "<span dir=\"rtl\">علِمَ</span> (знати) → <span dir=\"rtl\">عَلَّمَ</span> (навчати)",
                "каузатив"
              ],
              [
                "<span dir=\"rtl\">كَسَرَ</span> (ламати) → <span dir=\"rtl\">كَسَّرَ</span> (розбивати вщент)",
                "інтенсив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">علّمني اللغة العربية.</span>",
                "Він навчив мене арабської."
              ]
            ]
          }
        ],
        "titleEn": "Form II Verbs (Fa''ala) — B1"
      },
      {
        "id": "form-iii-verbs",
        "title": "الوزن الثالث (فَاعَلَ) — B1",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Третій вазн (довгий аліф після першої літери) зазвичай виражає взаємну дію («робити щось із кимось»).",
            "en": {
              "text": "Form III (long alif after the first letter) usually expresses a reciprocal action ('to do something with someone')."
            }
          },
          {
            "type": "table",
            "title": "فَاعَلَ",
            "rows": [
              [
                "<span dir=\"rtl\">كَتَبَ</span> (писати) → <span dir=\"rtl\">كَاتَبَ</span> (листуватися)",
                "взаємність"
              ],
              [
                "<span dir=\"rtl\">ساعد</span> (допомагати)",
                "взаємодія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أساعدك دائمًا.</span>",
                "Я завжди тобі допомагаю."
              ]
            ]
          }
        ],
        "titleEn": "Form III Verbs (Fā'ala) — B1"
      },
      {
        "id": "form-x-verbs",
        "title": "الوزن العاشر (استفعل) — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Десятий вазн (префікс است-) часто виражає прохання чи вважання чогось певним («просити зробити», «вважати кимось»).",
            "en": {
              "text": "Form X (prefix است-) often expresses requesting or considering something to be a certain way ('to ask for', 'to consider')."
            }
          },
          {
            "type": "table",
            "title": "استفعل",
            "rows": [
              [
                "<span dir=\"rtl\">خَرَجَ</span> (виходити) → <span dir=\"rtl\">استخرج</span> (видобувати)",
                "результативність"
              ],
              [
                "<span dir=\"rtl\">استعمل</span> (використовувати)",
                "прохання/дія"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">استخدمت الكمبيوتر.</span>",
                "Я скористався комп'ютером."
              ]
            ]
          }
        ],
        "titleEn": "Form X Verbs (Istaf'ala) — B2"
      },
      {
        "id": "passive-voice",
        "title": "المبني للمجهول — B1",
        "emoji": "🔄",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний стан утворюється зміною внутрішніх голосних дієслова (без окремого допоміжного дієслова); підмет невідомий або не важливий.",
            "en": {
              "text": "The passive voice is formed by changing the verb's internal vowels (no auxiliary verb needed); the subject is unknown or unimportant."
            }
          },
          {
            "type": "table",
            "title": "فُعِلَ (пасив)",
            "rows": [
              [
                "<span dir=\"rtl\">كَتَبَ</span> (написав) → <span dir=\"rtl\">كُتِبَ</span> (було написано)",
                "минулий пасив"
              ],
              [
                "<span dir=\"rtl\">يكتب</span> → <span dir=\"rtl\">يُكتب</span>",
                "теперішній пасив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كُتِب الكتاب في القرن الماضي.</span>",
                "Книгу написали в минулому столітті."
              ]
            ]
          }
        ],
        "titleEn": "Passive Voice — B1"
      },
      {
        "id": "conditional-in",
        "title": "جملة الشرط مع إن/إذا — B1",
        "emoji": "🌀",
        "sections": [
          {
            "type": "intro",
            "text": "Умовні речення вводяться إذا (загальна умова) або إن (класична, більш формальна); дієслово в обох частинах зазвичай стоїть у минулому часі (навіть якщо мова про майбутнє).",
            "en": {
              "text": "Conditional sentences are introduced by إذا (general condition) or إن (classical, more formal); the verb in both clauses is usually in the past tense (even when referring to the future)."
            }
          },
          {
            "type": "table",
            "title": "إذا + الماضي",
            "rows": [
              [
                "<span dir=\"rtl\">إذا درست، ستنجح.</span>",
                "Якщо вчитимешся, складеш успішно."
              ],
              [
                "<span dir=\"rtl\">إن جاء، سأخبره.</span>",
                "Якщо він прийде, я йому скажу."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">إذا كان عندك وقت، اتصل بي.</span>",
                "Якщо в тебе буде час, зателефонуй мені."
              ]
            ]
          }
        ],
        "titleEn": "Conditional Sentences with In/Idhā — B1"
      }
    ]
  },
  {
    "id": "grammar",
    "title": "القواعد",
    "titleEn": "Grammar",
    "emoji": "📖",
    "rules": [
      {
        "id": "case-nominative",
        "title": "حالة الرفع — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Називний відмінок (закінчення -у/-un) — базова форма підмета речення; позначається в письмі лише в класичній/формальній мові короткими голосними.",
            "en": {
              "text": "The Nominative case (ending -u/-un) is the basic form of a sentence's subject; marked in writing only in Classical/formal Arabic with short vowels."
            }
          },
          {
            "type": "table",
            "title": "Функція",
            "rows": [
              [
                "<span dir=\"rtl\">الولدُ يلعب.</span>",
                "Хлопчик грає. (підмет — рафʿ)"
              ],
              [
                "<span dir=\"rtl\">كتابٌ جديد</span>",
                "нова книга (неозначений — تنوين الرفع)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الطالبُ ذكي.</span>",
                "Студент розумний."
              ]
            ]
          }
        ],
        "titleEn": "Nominative Case — A2"
      },
      {
        "id": "case-accusative",
        "title": "حالة النصب — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Знахідний відмінок (закінчення -а/-an) — відмінок прямого додатка; в письмі позначається фатхою або аліфом наприкінці неозначеного іменника.",
            "en": {
              "text": "The Accusative case (ending -a/-an) marks the direct object; in writing it's shown with a fatha or a final alif on an indefinite noun."
            }
          },
          {
            "type": "table",
            "title": "Функція",
            "rows": [
              [
                "<span dir=\"rtl\">قرأتُ الكتابَ.</span>",
                "Я прочитав книгу. (додаток — насб)"
              ],
              [
                "<span dir=\"rtl\">اشتريت كتابًا.</span>",
                "Я купив книгу. (неозначений — تنوين النصب)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أحب اللغة العربية.</span>",
                "Я люблю арабську мову."
              ]
            ]
          }
        ],
        "titleEn": "Accusative Case — A2"
      },
      {
        "id": "case-genitive",
        "title": "حالة الجر — A2",
        "emoji": "🏷️",
        "sections": [
          {
            "type": "intro",
            "text": "Родовий відмінок (закінчення -і/-in) вживається після прийменників і як другий іменник у конструкції ідафа.",
            "en": {
              "text": "The Genitive case (ending -i/-in) is used after prepositions and as the second noun in an idafa construction."
            }
          },
          {
            "type": "table",
            "title": "Функція",
            "rows": [
              [
                "<span dir=\"rtl\">في البيتِ</span>",
                "у домі (після прийменника — джарр)"
              ],
              [
                "<span dir=\"rtl\">كتاب الطالبِ</span>",
                "книга студента (ідафа)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">ذهبت إلى المدرسةِ.</span>",
                "Я пішов до школи."
              ]
            ]
          }
        ],
        "titleEn": "Genitive Case — A2"
      },
      {
        "id": "sound-plural-masc",
        "title": "جمع المذكر السالم — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "«Правильна» чоловіча множина утворюється закінченням -ун (називний) / -ін (знахідний/родовий), переважно для осіб.",
            "en": {
              "text": "The 'sound' masculine plural is formed with the ending -ūn (nominative) / -īn (accusative/genitive), mostly for people."
            }
          },
          {
            "type": "table",
            "title": "-ون / -ين",
            "rows": [
              [
                "<span dir=\"rtl\">معلم → معلمون / معلمين</span>",
                "учитель → учителі"
              ],
              [
                "<span dir=\"rtl\">مسلم → مسلمون / مسلمين</span>",
                "мусульманин → мусульмани"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">المعلمون في المدرسة.</span>",
                "Учителі в школі."
              ]
            ]
          }
        ],
        "titleEn": "Sound Masculine Plural — A2"
      },
      {
        "id": "sound-plural-fem",
        "title": "جمع المؤنث السالم — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "«Правильна» жіноча множина утворюється заміною <span dir=\"rtl\">ة</span> на закінчення -ат.",
            "en": {
              "text": "The 'sound' feminine plural is formed by replacing ة with the ending -āt."
            }
          },
          {
            "type": "table",
            "title": "-ات",
            "rows": [
              [
                "<span dir=\"rtl\">طالبة → طالبات</span>",
                "студентка → студентки"
              ],
              [
                "<span dir=\"rtl\">سيارة → سيارات</span>",
                "машина → машини"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الطالبات مجتهدات.</span>",
                "Студентки старанні."
              ]
            ]
          }
        ],
        "titleEn": "Sound Feminine Plural — A2"
      },
      {
        "id": "broken-plural-patterns",
        "title": "جموع التكسير (أنماط شائعة) — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Зламана множина змінює внутрішню структуру слова за одним із десятків шаблонів — універсального правила немає, кожне слово вивчають з його множиною.",
            "en": {
              "text": "The broken plural changes the word's internal structure according to one of dozens of patterns — there's no universal rule, each word must be learned with its plural."
            }
          },
          {
            "type": "table",
            "title": "Поширені шаблони",
            "rows": [
              [
                "<span dir=\"rtl\">فَعْل → أفعال: باب → أبواب</span>",
                "двері → двері (мн.)"
              ],
              [
                "<span dir=\"rtl\">فَعِيل → فُعَلاء: كريم → كرماء</span>",
                "щедрий → щедрі"
              ],
              [
                "<span dir=\"rtl\">فُعْل → فِعَال: رجل → رجال</span>",
                "чоловік → чоловіки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الرجال يعملون هنا.</span>",
                "Чоловіки працюють тут."
              ]
            ]
          }
        ],
        "titleEn": "Broken Plural Patterns — B1"
      },
      {
        "id": "dual-number",
        "title": "المثنى — A2",
        "emoji": "👬",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса арабської — окрема форма двоїни для рівно двох предметів/осіб, утворена закінченням -ан (називний) / -айн (знахідний/родовий).",
            "en": {
              "text": "A unique Arabic feature — a distinct dual form for exactly two items/people, formed with the ending -ān (nominative) / -ayn (accusative/genitive)."
            }
          },
          {
            "type": "table",
            "title": "-ان / -ين",
            "rows": [
              [
                "<span dir=\"rtl\">كتاب → كتابان / كتابين</span>",
                "книга → дві книги"
              ],
              [
                "<span dir=\"rtl\">طالبة → طالبتان</span>",
                "студентка → дві студентки"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">عندي كتابان.</span>",
                "У мене дві книги."
              ]
            ]
          }
        ],
        "titleEn": "The Dual Number — A2"
      },
      {
        "id": "demonstrative-pronouns",
        "title": "أسماء الإشارة — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівні займенники узгоджуються з іменником у роді й числі; هذا/هذه вказують на ближче, ذلك/تلك — на дальше.",
            "en": {
              "text": "Demonstrative pronouns agree with the noun in gender and number; هذا/هذه point to something near, ذلك/تلك to something farther."
            }
          },
          {
            "type": "table",
            "title": "هذا / هذه / ذلك",
            "rows": [
              [
                "<span dir=\"rtl\">هذا</span>",
                "цей (чол.)"
              ],
              [
                "<span dir=\"rtl\">هذه</span>",
                "ця (жін.)"
              ],
              [
                "<span dir=\"rtl\">ذلك / تلك</span>",
                "той / та"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هذا الكتاب مفيد.</span>",
                "Ця книга корисна."
              ]
            ]
          }
        ],
        "titleEn": "Demonstrative Pronouns (Hādhā/Dhālika) — A1"
      },
      {
        "id": "relative-pronouns",
        "title": "الأسماء الموصولة — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Відносні займенники узгоджуються з означеним іменником у роді й числі: الذي (чол.), التي (жін.), الذين (чол. мн.).",
            "en": {
              "text": "Relative pronouns agree with the definite noun in gender and number: الذي (masc.), التي (fem.), الذين (masc. pl.)."
            }
          },
          {
            "type": "table",
            "title": "الذي / التي / الذين",
            "rows": [
              [
                "<span dir=\"rtl\">الرجل الذي يعمل هنا</span>",
                "чоловік, який працює тут"
              ],
              [
                "<span dir=\"rtl\">المرأة التي رأيتها</span>",
                "жінка, яку я бачив"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هذا هو الكتاب الذي قرأته.</span>",
                "Це книга, яку я прочитав."
              ]
            ]
          }
        ],
        "titleEn": "Relative Pronouns (Alladhī) — B1"
      },
      {
        "id": "possessive-suffixes",
        "title": "ضمائر الملكية المتصلة — A1",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність виражається суфіксами, приєднаними безпосередньо до кінця іменника.",
            "en": {
              "text": "Possession is expressed with suffixes attached directly to the end of the noun."
            }
          },
          {
            "type": "table",
            "title": "Присвійні суфікси",
            "rows": [
              [
                "<span dir=\"rtl\">كتابي</span>",
                "моя книга"
              ],
              [
                "<span dir=\"rtl\">كتابكَ / كتابكِ</span>",
                "твоя книга (ч./ж.)"
              ],
              [
                "<span dir=\"rtl\">كتابه / كتابها</span>",
                "його / її книга"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">بيتنا كبير.</span>",
                "Наш дім великий."
              ]
            ]
          }
        ],
        "titleEn": "Attached Possessive Suffixes — A1"
      },
      {
        "id": "object-pronouns-attached",
        "title": "ضمائر المفعول المتصلة — A2",
        "emoji": "🙋",
        "sections": [
          {
            "type": "intro",
            "text": "Займенники прямого додатка так само приєднуються суфіксом до дієслова.",
            "en": {
              "text": "Direct object pronouns are likewise attached as a suffix to the verb."
            }
          },
          {
            "type": "table",
            "title": "Об'єктні суфікси",
            "rows": [
              [
                "<span dir=\"rtl\">رأيتُهُ</span>",
                "я його бачив"
              ],
              [
                "<span dir=\"rtl\">رأيتُها</span>",
                "я її бачив"
              ],
              [
                "<span dir=\"rtl\">ساعدني</span>",
                "він допоміг мені"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أحبك.</span>",
                "Я тебе люблю."
              ]
            ]
          }
        ],
        "titleEn": "Attached Object Pronouns — A2"
      },
      {
        "id": "prepositions-basic",
        "title": "حروف الجر الأساسية (في، على، من، إلى) — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники завжди керують родовим відмінком іменника, що йде після них.",
            "en": {
              "text": "Prepositions always govern the genitive case of the following noun."
            }
          },
          {
            "type": "table",
            "title": "في / على / من / إلى",
            "rows": [
              [
                "<span dir=\"rtl\">في البيت</span>",
                "у домі"
              ],
              [
                "<span dir=\"rtl\">على الطاولة</span>",
                "на столі"
              ],
              [
                "<span dir=\"rtl\">من مصر</span>",
                "з Єгипту"
              ],
              [
                "<span dir=\"rtl\">إلى المدرسة</span>",
                "до школи"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أنا في البيت.</span>",
                "Я вдома."
              ]
            ]
          }
        ],
        "titleEn": "Basic Prepositions (Fī, 'Alā, Min, Ilā) — A1"
      },
      {
        "id": "prepositions-other",
        "title": "حروف جر أخرى (مع، عن، بـ) — A2",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Інші вживані прийменники: مع (з), عن (про/від), بـ (за допомогою/приєднаний, як префікс).",
            "en": {
              "text": "Other common prepositions: مع (with), عن (about/from), بـ (by means of, attached as a prefix)."
            }
          },
          {
            "type": "table",
            "title": "مع / عن / بـ",
            "rows": [
              [
                "<span dir=\"rtl\">مع صديقي</span>",
                "з моїм другом"
              ],
              [
                "<span dir=\"rtl\">أتحدث عن العمل</span>",
                "я говорю про роботу"
              ],
              [
                "<span dir=\"rtl\">كتبت بالقلم</span>",
                "я писав ручкою"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">ذهبت مع أخي.</span>",
                "Я пішов зі своїм братом."
              ]
            ]
          }
        ],
        "titleEn": "Other Prepositions (Ma'a, 'An, Bi-) — A2"
      },
      {
        "id": "word-order",
        "title": "ترتيب الكلمات في الجملة — A2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "У класичній арабській звичний порядок VSO (дієслово-підмет-додаток), але в розмовній і сучасній письмовій мові часто вживають SVO.",
            "en": {
              "text": "In Classical Arabic the usual order is VSO (verb-subject-object), but in colloquial and modern written language SVO is often used."
            }
          },
          {
            "type": "table",
            "title": "VSO vs SVO",
            "rows": [
              [
                "<span dir=\"rtl\">ذهب الولد إلى المدرسة.</span>",
                "Хлопчик пішов до школи. (VSO)"
              ],
              [
                "<span dir=\"rtl\">الولد ذهب إلى المدرسة.</span>",
                "Хлопчик пішов до школи. (SVO)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">قرأ الطالب الكتاب.</span>",
                "Студент прочитав книгу."
              ]
            ]
          }
        ],
        "titleEn": "Word Order (VSO vs SVO) — A2"
      },
      {
        "id": "nominal-sentence",
        "title": "الجملة الاسمية — A1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Іменне речення (без дієслова «бути» в теперішньому часі) складається з підмета (мубтада) і присудка (хабар).",
            "en": {
              "text": "A nominal sentence (with no present-tense 'to be') consists of a subject (mubtada) and a predicate (khabar)."
            }
          },
          {
            "type": "table",
            "title": "مبتدأ + خبر",
            "rows": [
              [
                "<span dir=\"rtl\">الجو جميل.</span>",
                "Погода гарна."
              ],
              [
                "<span dir=\"rtl\">هو طبيب.</span>",
                "Він лікар."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">البيت كبير.</span>",
                "Дім великий."
              ]
            ]
          }
        ],
        "titleEn": "The Nominal Sentence — A1"
      },
      {
        "id": "verbal-sentence",
        "title": "الجملة الفعلية — A1",
        "emoji": "📝",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслівне речення починається з дієслова, за яким слідує підмет і додаток.",
            "en": {
              "text": "A verbal sentence begins with the verb, followed by the subject and object."
            }
          },
          {
            "type": "table",
            "title": "فعل + فاعل + مفعول",
            "rows": [
              [
                "<span dir=\"rtl\">أكل الولد التفاحة.</span>",
                "Хлопчик з'їв яблуко."
              ],
              [
                "<span dir=\"rtl\">تكتب البنت رسالة.</span>",
                "Дівчинка пише листа."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">شرب الرجل الماء.</span>",
                "Чоловік випив воду."
              ]
            ]
          }
        ],
        "titleEn": "The Verbal Sentence — A1"
      },
      {
        "id": "kaana-and-sisters",
        "title": "كان وأخواتها — B1",
        "emoji": "🟢",
        "sections": [
          {
            "type": "intro",
            "text": "كان (бути в минулому) і споріднені дієслова ставлять присудок іменного речення в знахідний відмінок замість називного.",
            "en": {
              "text": "كان (to be, past) and its sister verbs put the predicate of a nominal sentence into the Accusative case instead of the Nominative."
            }
          },
          {
            "type": "table",
            "title": "كان + خبر منصوب",
            "rows": [
              [
                "<span dir=\"rtl\">كان الجو جميلًا.</span>",
                "Погода була гарною."
              ],
              [
                "<span dir=\"rtl\">أصبح الطقس باردًا.</span>",
                "Погода стала холодною."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كنتُ طالبًا.</span>",
                "Я був студентом."
              ]
            ]
          }
        ],
        "titleEn": "Kāna and Its Sisters — B1"
      },
      {
        "id": "inna-and-sisters",
        "title": "إن وأخواتها — B1",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "إن (справді) і споріднені частки ставлять підмет іменного речення в знахідний відмінок для підсилення.",
            "en": {
              "text": "إن (indeed) and its sister particles put the subject of a nominal sentence into the Accusative case for emphasis."
            }
          },
          {
            "type": "table",
            "title": "إن + اسم منصوب",
            "rows": [
              [
                "<span dir=\"rtl\">إن الجو جميلٌ.</span>",
                "Справді, погода гарна."
              ],
              [
                "<span dir=\"rtl\">لأن الوقت متأخر.</span>",
                "Тому що вже пізно."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">إن الحياة جميلة.</span>",
                "Справді, життя прекрасне."
              ]
            ]
          }
        ],
        "titleEn": "Inna and Its Sisters — B1"
      },
      {
        "id": "comparative-superlative",
        "title": "التفضيل (أفعل التفضيل) — A2",
        "emoji": "📈",
        "sections": [
          {
            "type": "intro",
            "text": "Ступінь порівняння утворюється за шаблоном أفعل, незмінним для всіх родів у порівнянні; для найвищого ступеня додають означений артикль.",
            "en": {
              "text": "The comparative is formed with the أفعل pattern, invariable across genders in comparison; the definite article is added for the superlative."
            }
          },
          {
            "type": "table",
            "title": "أفعل",
            "rows": [
              [
                "<span dir=\"rtl\">كبير → أكبر</span>",
                "великий → більший"
              ],
              [
                "<span dir=\"rtl\">أكبر من</span>",
                "більший за..."
              ],
              [
                "<span dir=\"rtl\">الأكبر</span>",
                "найбільший"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">القاهرة أكبر من دبي.</span>",
                "Каїр більший за Дубай."
              ]
            ]
          }
        ],
        "titleEn": "Comparative & Superlative (Af'al) — A2"
      },
      {
        "id": "numbers-cardinal-1-10",
        "title": "الأعداد ١-١٠ — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Числа 1 і 2 узгоджуються з іменником у роді; 3–10 мають зворотне узгодження (див. окреме правило).",
            "en": {
              "text": "The numbers 1 and 2 agree with the noun in gender; 3–10 have reversed agreement (see the separate rule)."
            }
          },
          {
            "type": "table",
            "title": "1–10",
            "rows": [
              [
                "<span dir=\"rtl\">واحد / اثنان</span>",
                "1 / 2"
              ],
              [
                "<span dir=\"rtl\">ثلاثة، أربعة، خمسة</span>",
                "3, 4, 5"
              ],
              [
                "<span dir=\"rtl\">ستة...عشرة</span>",
                "6...10"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">عندي ثلاثة كتب.</span>",
                "У мене три книги."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers 1-10 — A1"
      },
      {
        "id": "numbers-cardinal-11-100",
        "title": "الأعداد ١١-١٠٠ — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "11–19 — незмінне складне слово; десятки (20, 30...) незмінні; сотні утворюються словом مئة.",
            "en": {
              "text": "11–19 are a fixed compound word; the tens (20, 30...) are invariable; hundreds are formed with the word مئة."
            }
          },
          {
            "type": "table",
            "title": "11–100",
            "rows": [
              [
                "<span dir=\"rtl\">أحد عشر</span>",
                "11"
              ],
              [
                "<span dir=\"rtl\">عشرون، ثلاثون</span>",
                "20, 30"
              ],
              [
                "<span dir=\"rtl\">مئة</span>",
                "100"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">عمري عشرون سنة.</span>",
                "Мені двадцять років."
              ]
            ]
          }
        ],
        "titleEn": "Cardinal Numbers 11-100 — A2"
      },
      {
        "id": "numbers-gender-agreement",
        "title": "تذكير وتأنيث الأعداد — B1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Унікальна риса арабської — числа 3–10 узгоджуються з іменником у зворотному роді (число чоловічого роду + іменник жіночого роду, і навпаки).",
            "en": {
              "text": "A unique Arabic feature — the numbers 3–10 agree with the noun in reversed gender (a masculine-form number + a feminine noun, and vice versa)."
            }
          },
          {
            "type": "table",
            "title": "Зворотне узгодження",
            "rows": [
              [
                "<span dir=\"rtl\">ثلاثة كتب</span> (كتاب — чол.)",
                "три книги — число з ة (жін. форма з чол. іменником)"
              ],
              [
                "<span dir=\"rtl\">ثلاث بنات</span> (بنت — жін.)",
                "три дівчинки — число без ة з жін. іменником"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">عندي أربع أخوات.</span>",
                "У мене чотири сестри."
              ]
            ]
          }
        ],
        "titleEn": "Reversed Gender Agreement of Numbers — B1"
      },
      {
        "id": "ordinal-numbers",
        "title": "الأعداد الترتيبية — A2",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники (крім «перший») мають форму أفعل і узгоджуються з іменником у роді, як прикметники.",
            "en": {
              "text": "Ordinal numbers (except 'first') follow the أفعل pattern and agree with the noun in gender, like adjectives."
            }
          },
          {
            "type": "table",
            "title": "1-й – 5-й",
            "rows": [
              [
                "<span dir=\"rtl\">أول / أولى</span>",
                "1-й / 1-ша"
              ],
              [
                "<span dir=\"rtl\">ثانٍ / ثانية</span>",
                "2-й / 2-га"
              ],
              [
                "<span dir=\"rtl\">ثالث، رابع، خامس</span>",
                "3-й, 4-й, 5-й"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هذه المرة الأولى.</span>",
                "Це перший раз."
              ]
            ]
          }
        ],
        "titleEn": "Ordinal Numbers — A2"
      },
      {
        "id": "days-of-week",
        "title": "أيام الأسبوع — A1",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість днів тижня названі за номером (окрім п'ятниці й суботи, що мають окремі назви); тиждень починається з неділі.",
            "en": {
              "text": "Most days of the week are named by number (except Friday and Saturday, which have separate names); the week starts on Sunday."
            }
          },
          {
            "type": "table",
            "title": "Дні тижня",
            "rows": [
              [
                "<span dir=\"rtl\">الأحد، الاثنين، الثلاثاء</span>",
                "неділя, понеділок, вівторок"
              ],
              [
                "<span dir=\"rtl\">الأربعاء، الخميس</span>",
                "середа, четвер"
              ],
              [
                "<span dir=\"rtl\">الجمعة، السبت</span>",
                "п'ятниця, субота"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أراك يوم الجمعة.</span>",
                "Побачимось у п'ятницю."
              ]
            ]
          }
        ],
        "titleEn": "Days of the Week — A1"
      },
      {
        "id": "months-dates",
        "title": "الأشهر والتاريخ — A2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "У більшості арабських країн вживають григоріанські назви місяців (запозичені або з місцевими варіантами) поряд з ісламським місячним календарем.",
            "en": {
              "text": "Most Arabic-speaking countries use Gregorian month names (borrowed or with local variants) alongside the Islamic lunar calendar."
            }
          },
          {
            "type": "table",
            "title": "Місяці й дата",
            "rows": [
              [
                "<span dir=\"rtl\">يناير، فبراير، مارس...</span>",
                "січень, лютий, березень..."
              ],
              [
                "<span dir=\"rtl\">اليوم هو الخامس من مايو.</span>",
                "Сьогодні п'яте травня."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">وُلدت في يونيو.</span>",
                "Я народився у червні."
              ]
            ]
          }
        ],
        "titleEn": "Months & Dates — A2"
      },
      {
        "id": "telling-time",
        "title": "الساعة — A2",
        "emoji": "🕒",
        "sections": [
          {
            "type": "intro",
            "text": "Питання про час: كم الساعة؟ Відповідь будується словом الساعة + порядковий числівник жіночого роду.",
            "en": {
              "text": "To ask the time: كم الساعة؟ The answer uses الساعة + a feminine ordinal number."
            }
          },
          {
            "type": "table",
            "title": "Вказування часу",
            "rows": [
              [
                "<span dir=\"rtl\">الساعة الثالثة.</span>",
                "Третя година."
              ],
              [
                "<span dir=\"rtl\">الساعة الثالثة والنصف.</span>",
                "Пів на четверту."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كم الساعة الآن؟</span>",
                "Котра зараз година?"
              ]
            ]
          }
        ],
        "titleEn": "Telling Time — A2"
      },
      {
        "id": "conjunctions-basic",
        "title": "أدوات الربط الأساسية (و، أو، لكن) — A1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Сурядні сполучники з'єднують рівнозначні слова чи речення; و (і) пишеться злито з наступним словом.",
            "en": {
              "text": "Coordinating conjunctions connect equal words or clauses; و (and) is written attached to the following word."
            }
          },
          {
            "type": "markers",
            "title": "Основні сполучники",
            "items": [
              "<span dir=\"rtl\">و</span> (і)",
              "<span dir=\"rtl\">أو</span> (або)",
              "<span dir=\"rtl\">لكن</span> (але)",
              "<span dir=\"rtl\">ثم</span> (потім)"
            ],
            "en": {
              "title": "Main conjunctions"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أريد شايًا أو قهوة.</span>",
                "Я хочу чай або каву."
              ]
            ]
          }
        ],
        "titleEn": "Basic Conjunctions (Wa, Aw, Lākin) — A1"
      },
      {
        "id": "conjunctions-advanced",
        "title": "أدوات ربط متقدمة (لأن، إذا، عندما) — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Підрядні сполучники вводять залежне речення причини, умови чи часу.",
            "en": {
              "text": "Subordinating conjunctions introduce a dependent clause of cause, condition, or time."
            }
          },
          {
            "type": "markers",
            "title": "Основні підрядні сполучники",
            "items": [
              "<span dir=\"rtl\">لأن</span> (тому що)",
              "<span dir=\"rtl\">إذا</span> (якщо)",
              "<span dir=\"rtl\">عندما</span> (коли)",
              "<span dir=\"rtl\">رغم أن</span> (хоча)"
            ],
            "en": {
              "title": "Main subordinating conjunctions"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لم آتِ لأنني كنت مريضًا.</span>",
                "Я не прийшов, бо був хворий."
              ]
            ]
          }
        ],
        "titleEn": "Subordinating Conjunctions (Li'anna, Idhā, 'Indamā) — B1"
      },
      {
        "id": "adverbs",
        "title": "الظروف — A2",
        "emoji": "🎯",
        "sections": [
          {
            "type": "intro",
            "text": "Обставини часу й місця стоять у знахідному відмінку (без прийменника) і незмінні.",
            "en": {
              "text": "Adverbs of time and place are in the Accusative case (with no preposition) and are invariable."
            }
          },
          {
            "type": "table",
            "title": "Обставинні слова",
            "rows": [
              [
                "<span dir=\"rtl\">اليوم، غدًا، أمس</span>",
                "сьогодні, завтра, вчора"
              ],
              [
                "<span dir=\"rtl\">هنا، هناك</span>",
                "тут, там"
              ],
              [
                "<span dir=\"rtl\">دائمًا، أحيانًا</span>",
                "завжди, іноді"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">سأراك غدًا.</span>",
                "Побачимось завтра."
              ]
            ]
          }
        ],
        "titleEn": "Adverbs — A2"
      },
      {
        "id": "quantifiers",
        "title": "كل وبعض وكثير — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "كل (кожен/весь) утворює ідафу з наступним іменником; بعض (деякі) і كثير (багато) поводяться так само.",
            "en": {
              "text": "كل (each/all) forms an idafa with the following noun; بعض (some) and كثير (much/many) behave the same way."
            }
          },
          {
            "type": "table",
            "title": "كل / بعض / كثير",
            "rows": [
              [
                "<span dir=\"rtl\">كل يوم</span>",
                "кожен день"
              ],
              [
                "<span dir=\"rtl\">بعض الناس</span>",
                "деякі люди"
              ],
              [
                "<span dir=\"rtl\">كثير من الوقت</span>",
                "багато часу"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">كل الطلاب هنا.</span>",
                "Усі студенти тут."
              ]
            ]
          }
        ],
        "titleEn": "Quantifiers (Kull, Ba'd, Kathīr) — A2"
      },
      {
        "id": "exclamations",
        "title": "أسلوب التعجب — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Оклична конструкція ما أفعله (який же він...) виражає здивування якістю чогось.",
            "en": {
              "text": "The exclamatory construction ما أفعله ('how...!') expresses surprise at a quality."
            }
          },
          {
            "type": "table",
            "title": "ما أفعل",
            "rows": [
              [
                "<span dir=\"rtl\">ما أجمل هذا المنظر!</span>",
                "Який же красивий цей краєвид!"
              ],
              [
                "<span dir=\"rtl\">ما أروع الفكرة!</span>",
                "Яка чудова ідея!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">ما أطول هذا اليوم!</span>",
                "Який же довгий цей день!"
              ]
            ]
          }
        ],
        "titleEn": "Exclamatory Sentences — A2"
      },
      {
        "id": "vocative-particle",
        "title": "أسلوب النداء (يا) — A1",
        "emoji": "📣",
        "sections": [
          {
            "type": "intro",
            "text": "Частка يا вводить звертання перед іменем чи назвою.",
            "en": {
              "text": "The particle يا introduces direct address before a name or title."
            }
          },
          {
            "type": "table",
            "title": "يا + звертання",
            "rows": [
              [
                "<span dir=\"rtl\">يا أحمد!</span>",
                "Ахмеде!"
              ],
              [
                "<span dir=\"rtl\">يا صديقي!</span>",
                "Друже мій!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">يا أستاذ، هل يمكنني السؤال؟</span>",
                "Пане вчителю, чи можна запитати?"
              ]
            ]
          }
        ],
        "titleEn": "The Vocative Particle Yā — A1"
      },
      {
        "id": "colors-pattern",
        "title": "ألوان (وزن أفعل للألوان) — B1",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Основні кольори мають власний шаблон أفعل (чол.) / فعلاء (жін.), відмінний від звичайних прикметників.",
            "en": {
              "text": "Basic colors follow their own pattern أفعل (masc.) / فعلاء (fem.), different from ordinary adjectives."
            }
          },
          {
            "type": "table",
            "title": "أفعل / فعلاء",
            "rows": [
              [
                "<span dir=\"rtl\">أحمر / حمراء</span>",
                "червоний / червона"
              ],
              [
                "<span dir=\"rtl\">أزرق / زرقاء</span>",
                "синій / синя"
              ],
              [
                "<span dir=\"rtl\">أسود / سوداء</span>",
                "чорний / чорна"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">السيارة الحمراء جميلة.</span>",
                "Червона машина гарна."
              ]
            ]
          }
        ],
        "titleEn": "Colors (the Af'al Pattern) — B1"
      },
      {
        "id": "masdar-verbal-noun",
        "title": "المصدر (الاسم من الفعل) — B1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Масдар — віддієслівний іменник, що виражає саму дію як поняття (аналог герундія); у кожного вазна свій типовий шаблон масдара.",
            "en": {
              "text": "The masdar is a verbal noun expressing the action itself as a concept (like a gerund); each verb form has its own typical masdar pattern."
            }
          },
          {
            "type": "table",
            "title": "Приклади масдарів",
            "rows": [
              [
                "<span dir=\"rtl\">كتب → كتابة</span>",
                "писати → писання"
              ],
              [
                "<span dir=\"rtl\">درس → دراسة</span>",
                "вчити → навчання"
              ],
              [
                "<span dir=\"rtl\">علّم → تعليم</span>",
                "навчати → викладання"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الدراسة مهمة.</span>",
                "Навчання важливе."
              ]
            ]
          }
        ],
        "titleEn": "The Masdar (Verbal Noun) — B1"
      },
      {
        "id": "active-participle",
        "title": "اسم الفاعل — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Активний дієприкметник (шаблон فاعل для базового вазна) описує того, хто виконує дію, і вживається як прикметник чи іменник.",
            "en": {
              "text": "The active participle (pattern فاعل for Form I) describes the doer of an action and is used as an adjective or noun."
            }
          },
          {
            "type": "table",
            "title": "فاعل",
            "rows": [
              [
                "<span dir=\"rtl\">كتب → كاتب</span>",
                "писати → той, хто пише / письменник"
              ],
              [
                "<span dir=\"rtl\">درس → دارس</span>",
                "вчити → той, хто вчиться"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هو كاتب مشهور.</span>",
                "Він відомий письменник."
              ]
            ]
          }
        ],
        "titleEn": "Active Participle — B1"
      },
      {
        "id": "passive-participle",
        "title": "اسم المفعول — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Пасивний дієприкметник (шаблон مفعول для базового вазна) описує того/те, на кого/що спрямована дія.",
            "en": {
              "text": "The passive participle (pattern مفعول for Form I) describes the one/thing the action is directed at."
            }
          },
          {
            "type": "table",
            "title": "مفعول",
            "rows": [
              [
                "<span dir=\"rtl\">كتب → مكتوب</span>",
                "писати → написаний"
              ],
              [
                "<span dir=\"rtl\">فهم → مفهوم</span>",
                "розуміти → зрозумілий"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">هذا مكتوب بخط جميل.</span>",
                "Це написано гарним почерком."
              ]
            ]
          }
        ],
        "titleEn": "Passive Participle — B1"
      },
      {
        "id": "tanwin",
        "title": "التنوين — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Танвін — подвоєний голосний знак наприкінці неозначеного іменника, що позначає відмінок і вимовляється як -н наприкінці.",
            "en": {
              "text": "Tanwin is a doubled vowel mark at the end of an indefinite noun, marking the case and pronounced as a final -n."
            }
          },
          {
            "type": "table",
            "title": "Три танвіни",
            "rows": [
              [
                "<span dir=\"rtl\">كتابٌ</span> (-ун)",
                "рафʿ (називний)"
              ],
              [
                "<span dir=\"rtl\">كتابًا</span> (-ан)",
                "насб (знахідний)"
              ],
              [
                "<span dir=\"rtl\">كتابٍ</span> (-ін)",
                "джарр (родовий)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">قرأت كتابًا جديدًا.</span>",
                "Я прочитав нову книгу."
              ]
            ]
          }
        ],
        "titleEn": "Tanwīn (Nunation) — A2"
      },
      {
        "id": "hamza-rules",
        "title": "قواعد الهمزة — B1",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Хамза (позначення гортанної змички) пишеться на різних «стільцях» (аліф, вав, я) залежно від сусідніх голосних — одна з найскладніших орфографічних тем арабської.",
            "en": {
              "text": "The hamza (glottal stop mark) is written on different 'seats' (alif, waw, ya) depending on neighboring vowels — one of Arabic's trickiest spelling topics."
            }
          },
          {
            "type": "table",
            "title": "Приклади написання хамзи",
            "rows": [
              [
                "<span dir=\"rtl\">سأل</span>",
                "на аліфі"
              ],
              [
                "<span dir=\"rtl\">سُئِل</span>",
                "на я"
              ],
              [
                "<span dir=\"rtl\">يقرأون</span>",
                "самостійна в кінці"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">سألت سؤالًا.</span>",
                "Я поставив запитання."
              ]
            ]
          }
        ],
        "titleEn": "Hamza Spelling Rules — B1"
      },
      {
        "id": "diminutive",
        "title": "التصغير — B2",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Пестлива форма (шаблон فُعَيْل) надає значення «маленький» або ласкавого відтінку — рідше вживається в розмовній мові, частіше в іменах.",
            "en": {
              "text": "The diminutive form (pattern فُعَيْل) adds a 'small' or affectionate meaning — less common in speech, more common in names."
            }
          },
          {
            "type": "table",
            "title": "فُعَيْل",
            "rows": [
              [
                "<span dir=\"rtl\">كتاب → كُتيّب</span>",
                "книга → брошурка"
              ],
              [
                "<span dir=\"rtl\">بيت → بُييت</span>",
                "дім → будиночок"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">اشتريت كُتيّبًا صغيرًا.</span>",
                "Я купив маленьку брошурку."
              ]
            ]
          }
        ],
        "titleEn": "The Diminutive — B2"
      },
      {
        "id": "modal-expressions",
        "title": "التعبير عن الإمكان والوجوب (يجب، يمكن) — A1",
        "emoji": "🧠",
        "sections": [
          {
            "type": "intro",
            "text": "Модальність виражається безособовими دієсловами يجب (треба) і يمكن (можна) + أن + дієслово в кон'юнктиві.",
            "en": {
              "text": "Modality is expressed with the impersonal verbs يجب (must) and يمكن (can/may) + أن + a subjunctive verb."
            }
          },
          {
            "type": "table",
            "title": "يجب / يمكن",
            "rows": [
              [
                "<span dir=\"rtl\">يجب أن أذهب.</span>",
                "Мені треба йти."
              ],
              [
                "<span dir=\"rtl\">يمكن أن تأتي.</span>",
                "Ти можеш прийти."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">يجب أن ندرس.</span>",
                "Нам треба вчитися."
              ]
            ]
          }
        ],
        "titleEn": "Modal Expressions (Yajib, Yumkin) — A1"
      },
      {
        "id": "formal-informal-address",
        "title": "صيغ المخاطبة الرسمية وغير الرسمية — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Формальна арабська (フュсха) вживається в письмі й офіційних ситуаціях; у щоденній розмові використовують діалект — обидва мають різну граматику й лексику.",
            "en": {
              "text": "Formal Arabic (Fusha) is used in writing and official settings; daily conversation uses a dialect — both have different grammar and vocabulary."
            }
          },
          {
            "type": "table",
            "title": "Фусха vs діалект",
            "rows": [
              [
                "<span dir=\"rtl\">ماذا تريد؟</span> (فصحى)",
                "Що ти хочеш? (формально)"
              ],
              [
                "<span dir=\"rtl\">عايز إيه؟</span> (мовний варіант)",
                "Що ти хочеш? (розмовно, приклад єгипетського діалекту)"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">تفضل بالجلوس.</span>",
                "Прошу, сідайте. (ввічливо)"
              ]
            ]
          }
        ],
        "titleEn": "Formal Arabic vs Dialect — A2"
      },
      {
        "id": "common-idioms",
        "title": "تعبيرات شائعة — B1",
        "emoji": "💬",
        "sections": [
          {
            "type": "intro",
            "text": "Стійкі вирази, які використовуються щодня і не завжди перекладаються дослівно.",
            "en": {
              "text": "Fixed expressions used every day, not always translated word-for-word."
            }
          },
          {
            "type": "table",
            "title": "Поширені вирази",
            "rows": [
              [
                "<span dir=\"rtl\">إن شاء الله</span>",
                "якщо буде на те воля Божа"
              ],
              [
                "<span dir=\"rtl\">الحمد لله</span>",
                "слава Богу"
              ],
              [
                "<span dir=\"rtl\">مبروك!</span>",
                "вітаю!"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">إن شاء الله نلتقي قريبًا.</span>",
                "Дай Боже, скоро зустрінемось."
              ]
            ]
          }
        ],
        "titleEn": "Common Expressions — B1"
      },
      {
        "id": "exception-illa",
        "title": "أسلوب الاستثناء (إلا) — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Конструкція винятку إلا («крім») вводить елемент, виключений із загального твердження; іменник після إلا зазвичай стоїть у знахідному відмінку.",
            "en": {
              "text": "The exception construction إلا ('except') introduces an element excluded from a general statement; the noun after إلا is usually in the Accusative case."
            }
          },
          {
            "type": "table",
            "title": "إلا",
            "rows": [
              [
                "<span dir=\"rtl\">حضر الجميع إلا أحمد.</span>",
                "Прийшли всі, крім Ахмеда."
              ],
              [
                "<span dir=\"rtl\">ما رأيت أحدًا إلا خالدًا.</span>",
                "Я не бачив нікого, крім Халіда."
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">أكلت كل شيء إلا السلطة.</span>",
                "Я з'їв усе, крім салату."
              ]
            ]
          }
        ],
        "titleEn": "The Exception Construction Illā — B1"
      }
    ]
  },
  {
    "id": "exceptions",
    "title": "الاستثناءات",
    "titleEn": "Exceptions",
    "emoji": "⚠️",
    "rules": [
      {
        "id": "weak-verbs-hollow",
        "title": "الفعل الأجوف (معتل الوسط) — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У порожнистих дієслів середня коренева літера — و або ي, яка часто зникає чи перетворюється на довгу голосну в різних формах.",
            "en": {
              "text": "In hollow verbs, the middle root letter is و or ي, which often disappears or turns into a long vowel in different forms."
            }
          },
          {
            "type": "table",
            "title": "قال (сказати), корінь ق-و-ل",
            "rows": [
              [
                "<span dir=\"rtl\">قال</span> (він сказав)",
                "довге а замінює و"
              ],
              [
                "<span dir=\"rtl\">قلتُ</span> (я сказав)",
                "و зникає перед суфіксом"
              ],
              [
                "<span dir=\"rtl\">يقول</span> (він каже)",
                "و повертається в теперішньому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">قلت له الحقيقة.</span>",
                "Я сказав йому правду."
              ]
            ]
          }
        ],
        "titleEn": "Hollow Verbs (Middle Weak) — B1"
      },
      {
        "id": "weak-verbs-defective",
        "title": "الفعل الناقص (معتل الآخر) — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У недостатніх дієслів остання коренева літера — و або ي, яка змінюється чи зникає залежно від закінчення.",
            "en": {
              "text": "In defective verbs, the final root letter is و or ي, which changes or disappears depending on the ending."
            }
          },
          {
            "type": "table",
            "title": "مشى (йти), корінь م-ش-ي",
            "rows": [
              [
                "<span dir=\"rtl\">مشى</span> (він пішов)",
                "остання ي стає довгим а"
              ],
              [
                "<span dir=\"rtl\">مشيتُ</span> (я пішов)",
                "ي зберігається перед суфіксом"
              ],
              [
                "<span dir=\"rtl\">يمشي</span> (він йде)",
                "теперішній час"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">مشيت إلى العمل.</span>",
                "Я пішов пішки на роботу."
              ]
            ]
          }
        ],
        "titleEn": "Defective Verbs (Final Weak) — B1"
      },
      {
        "id": "weak-verbs-assimilated",
        "title": "الفعل المثال (معتل الأول) — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У асимільованих дієслів перша коренева літера — و (рідше ي), яка часто зникає в теперішньому часі.",
            "en": {
              "text": "In assimilated verbs, the first root letter is و (rarely ي), which often disappears in the present tense."
            }
          },
          {
            "type": "table",
            "title": "وجد (знаходити), корінь و-ج-د",
            "rows": [
              [
                "<span dir=\"rtl\">وجد</span> (він знайшов)",
                "و зберігається в минулому"
              ],
              [
                "<span dir=\"rtl\">يجد</span> (він знаходить)",
                "و зникає в теперішньому"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">لم أجد الكتاب.</span>",
                "Я не знайшов книгу."
              ]
            ]
          }
        ],
        "titleEn": "Assimilated Verbs (Initial Weak) — B1"
      },
      {
        "id": "doubled-verbs",
        "title": "الفعل المضعف — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "У подвоєних дієслів друга й третя коренева літери однакові й зливаються (شدة) у формах, де за ними не йде голосний суфікс.",
            "en": {
              "text": "In doubled verbs, the second and third root letters are identical and merge (shadda) in forms with no following vowel suffix."
            }
          },
          {
            "type": "table",
            "title": "مدّ (простягати), корінь م-د-د",
            "rows": [
              [
                "<span dir=\"rtl\">مدّ</span> (він простягнув)",
                "دد зливається в дд зі шаддою"
              ],
              [
                "<span dir=\"rtl\">مددتُ</span> (я простягнув)",
                "розділяються перед суфіксом"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">مدّ يده.</span>",
                "Він простягнув руку."
              ]
            ]
          }
        ],
        "titleEn": "Doubled (Geminate) Verbs — B1"
      },
      {
        "id": "irregular-plurals-common",
        "title": "جموع تكسير شائعة يجب حفظها — A2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька дуже вживаних іменників мають повністю непередбачувану зламану множину, яку слід просто запам'ятати.",
            "en": {
              "text": "A few very common nouns have completely unpredictable broken plurals that must simply be memorized."
            }
          },
          {
            "type": "table",
            "title": "Найпоширеніші нерегулярні множини",
            "rows": [
              [
                "<span dir=\"rtl\">رجل → رجال</span>",
                "чоловік → чоловіки"
              ],
              [
                "<span dir=\"rtl\">امرأة → نساء</span>",
                "жінка → жінки"
              ],
              [
                "<span dir=\"rtl\">ولد → أولاد</span>",
                "хлопчик → хлопчики/діти"
              ],
              [
                "<span dir=\"rtl\">يوم → أيام</span>",
                "день → дні"
              ]
            ]
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">النساء يعملن هنا.</span>",
                "Жінки працюють тут."
              ]
            ]
          }
        ],
        "titleEn": "Common Irregular Plurals — A2"
      },
      {
        "id": "sun-moon-spelling",
        "title": "كتابة اللام الشمسية (تفاصيل إملائية) — B2",
        "emoji": "✏️",
        "sections": [
          {
            "type": "intro",
            "text": "Хоча лям артикля перед сонячними літерами не вимовляється, у письмі вона зберігається завжди — асиміляція позначається лише шаддою над наступною літерою (у текстах з огласовками).",
            "en": {
              "text": "Although the article's lam is not pronounced before sun letters, it is always kept in writing — the assimilation is shown only by a shadda over the following letter (in vocalized text)."
            }
          },
          {
            "type": "table",
            "title": "Написання vs вимова",
            "rows": [
              [
                "<span dir=\"rtl\">الشمس</span> (написання: аль-шамс)",
                "вимова: аш-шамс"
              ],
              [
                "<span dir=\"rtl\">النور</span> (написання: аль-нур)",
                "вимова: ан-нур"
              ]
            ]
          },
          {
            "type": "tip",
            "title": "Порада",
            "text": "Список сонячних літер: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Усі інші — місячні.",
            "en": {
              "title": "Tip",
              "text": "The sun letters are: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. All others are moon letters."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "en": {
              "title": "Examples"
            },
            "rows": [
              [
                "<span dir=\"rtl\">الرجل يقرأ الصحيفة.</span>",
                "Чоловік читає газету."
              ]
            ]
          }
        ],
        "titleEn": "Sun Letter Spelling Details — B2"
      }
    ]
  }
];
