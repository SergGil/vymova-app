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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      }
    ]
  }
];
