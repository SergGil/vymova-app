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
      }
    ]
  }
];
