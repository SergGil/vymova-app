// Vymova — data/grammar-data/grammar_oc.ts
// Auto-split from the former data/grammar.ts (scripts/split-lang-data.js) — one
// file per language so it can be dynamically imported on demand.
import type { GrammarCategory } from '../grammar.ts';

export const GRAMMAR_OC: GrammarCategory[] = [
  {
    "id": "basics",
    "title": "Основи",
    "titleEn": "Basics",
    "emoji": "🧩",
    "rules": [
      {
        "id": "personal-pronouns",
        "title": "Pronoms Personals — A1",
        "emoji": "🔖",
        "sections": [
          {
            "type": "intro",
            "text": "Окситанська — мова середньовічних трубадурів, найближче споріднена з каталанською.",
            "en": {
              "text": "Occitan is the language of the medieval troubadours, most closely related to Catalan."
            }
          },
          {
            "type": "table",
            "title": "Особові займенники",
            "rows": [
              [
                "я",
                "ieu"
              ],
              [
                "ти (зв. / ввічл.)",
                "tu / vos"
              ],
              [
                "він / вона",
                "el / ela"
              ],
              [
                "ми",
                "nosautres"
              ],
              [
                "ви",
                "vosautres"
              ],
              [
                "вони (ч./ж.)",
                "eles / elas"
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
        "id": "langue-doc-etymologia",
        "title": "Lenga d'Òc — A1",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Сама назва мови походить від слова òc ('так') — на противагу північнофранцузьким діалектам langue d'oïl, де 'так' звучало як oïl (пізніше oui); середньовічна класифікація романських мов ішла саме за словом на позначення згоди.",
            "en": {
              "text": "The language's very name comes from the word òc ('yes') — as opposed to the northern French langue d'oïl dialects, where 'yes' was oïl (later oui); medieval classification of Romance languages went precisely by the word for agreement."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Òc, ai fam.",
                "Так, я голодний."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Lenga d'Òc: The Name's Origin — A1"
      },
      {
        "id": "duas-normas-ortografia",
        "title": "Doas Normas Ortogràficas — A2",
        "emoji": "✍️",
        "sections": [
          {
            "type": "intro",
            "text": "Окситанська має дві конкуруючі орфографічні норми: класичну, етимологічну, близьку до каталанської, і містралянську, фонетичну, засновану на провансальській вимові Фредеріка Містраля, — той самий текст можна записати по-різному.",
            "en": {
              "text": "Occitan has two competing spelling norms: the classical, etymological one, close to Catalan, and the Mistralian, phonetic one, based on Frédéric Mistral's Provençal pronunciation — the same text can be spelled two different ways."
            }
          },
          {
            "type": "table",
            "title": "Дві норми",
            "rows": [
              [
                "polida (класична норма)",
                "poulido (містралянська норма)"
              ]
            ],
            "en": {
              "title": "Two Norms"
            }
          }
        ],
        "titleEn": "Two Competing Spelling Norms — A2"
      },
      {
        "id": "gascon-h-inicial",
        "title": "Gascon: F- Devengut H- — B1",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "У гасконському діалекті латинське початкове f- перейшло в h-, точно як в іспанській, — риса, що вирізняє гасконську з-поміж решти окситанських діалектів і зближує її з іспанською більше, ніж з рештою окситанської.",
            "en": {
              "text": "In the Gascon dialect, Latin initial f- shifted to h-, exactly as in Spanish — a feature that sets Gascon apart from the rest of the Occitan dialects and brings it closer to Spanish than to the rest of Occitan."
            }
          },
          {
            "type": "table",
            "title": "Гасконська проти інших діалектів",
            "rows": [
              [
                "hemna (гасконська) vs femna (решта окситанської)",
                "жінка"
              ]
            ],
            "en": {
              "title": "Gascon vs. Other Dialects"
            }
          }
        ],
        "titleEn": "Gascon: F- Became H- — B1"
      },
      {
        "id": "negasion-i-preguntas",
        "title": "Negacion e Question — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Заперечення утворюється часткою non/pas перед дієсловом; питання без питального слова передаються висхідною інтонацією.",
            "en": {
              "text": "Negation is formed with the particle non/pas before the verb; yes/no questions are marked with rising intonation alone."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Sabi pas.",
                "Я не знаю."
              ],
              [
                "Vendràs?",
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
        "title": "Present — A1",
        "emoji": "☀️",
        "sections": [
          {
            "type": "intro",
            "text": "Теперішній час утворюється особовими закінченнями за трьома дієвідмінами (-ar, -er/-re, -ir), майже без розбіжностей з іншими галороманськими мовами.",
            "en": {
              "text": "The present tense is formed with person endings across three conjugations (-ar, -er/-re, -ir), with almost no divergence from other Gallo-Romance languages."
            }
          },
          {
            "type": "table",
            "title": "parlar (говорити) у теперішньому часі",
            "rows": [
              [
                "parli / parlas / parla",
                "я говорю / ти говориш / він говорить"
              ],
              [
                "parlam / parlatz / parlan",
                "ми говоримо / ви говорите / вони говорять"
              ]
            ],
            "en": {
              "title": "parlar (to speak) in the present"
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ieu parli occitan.",
                "Я говорю окситанською."
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
        "id": "imperfect-past",
        "title": "Imperfait — A2",
        "emoji": "🕰️",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект описує тривалу чи звичну дію в минулому й утворюється власним набором закінчень, спільних для всіх трьох дієвідмін.",
            "en": {
              "text": "The imperfect describes an ongoing or habitual past action and is formed with its own set of endings, shared across all three conjugations."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parlavi occitan cada jorn.",
                "Я говорив окситанською щодня."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect — A2"
      },
      {
        "id": "simple-past-preterite",
        "title": "Passat Simple — B2",
        "emoji": "📅",
        "sections": [
          {
            "type": "intro",
            "text": "Простий минулий час позначає завершену одноразову дію в наративному, літературному регістрі — уживаний значно активніше, ніж відповідний час у розмовній французькій.",
            "en": {
              "text": "The simple past marks a completed one-time action in the narrative, literary register — used far more actively than the corresponding tense in spoken French."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parlèt amb el.",
                "Він поговорив з ним (у наративному стилі)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Simple Past (Preterite) — B2"
      },
      {
        "id": "periphrastic-past-anar",
        "title": "Passat Perifrastic: Anar + Infinitiu — B1",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслово anar ('йти') у теперішньому часі плюс інфінітив утворює перифрастичний минулий час — 'я йду робити' насправді означає 'я зробив', конструкція, спільна з каталанською.",
            "en": {
              "text": "The verb anar ('to go') in the present tense plus an infinitive forms a periphrastic past — 'I go to do' actually means 'I did', a construction shared with Catalan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vau parlar amb el.",
                "Я поговорив з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Periphrastic Past: Anar + Infinitive — B1"
      },
      {
        "id": "future-tense",
        "title": "Futur — A2",
        "emoji": "🔮",
        "sections": [
          {
            "type": "intro",
            "text": "Майбутній час утворюється синтетичним суфіксом, доданим до інфінітива, без окремого допоміжного дієслова.",
            "en": {
              "text": "The future tense is formed with a synthetic suffix added to the infinitive, with no separate auxiliary verb."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parlarai amb el deman.",
                "Я поговорю з ним завтра."
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
        "title": "Condicional — B1",
        "emoji": "💭",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб утворюється, як і майбутній час, від основи інфінітива, але з іншим набором закінчень, спільних з імперфектом.",
            "en": {
              "text": "The conditional is formed, like the future, from the infinitive stem, but with a different set of endings shared with the imperfect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parlariái amb el.",
                "Я поговорив би з ним."
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
        "id": "present-subjunctive",
        "title": "Subjontiu Present — B1",
        "emoji": "🌫️",
        "sections": [
          {
            "type": "intro",
            "text": "Умовний спосіб дійсності (сюжонтив) вживається після дієслів бажання, сумніву чи емоції; дієвідміни -ar і -er/-ir міняють голосну місцями, як в інших романських мовах.",
            "en": {
              "text": "The subjunctive is used after verbs of wishing, doubt, or emotion; -ar and -er/-ir conjugations swap their vowel, as in other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vòli que parles amb el.",
                "Я хочу, щоб ти поговорив з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Present Subjunctive — B1"
      },
      {
        "id": "imperfect-subjunctive",
        "title": "Subjontiu Imperfait — B2",
        "emoji": "🌙",
        "sections": [
          {
            "type": "intro",
            "text": "Імперфект сюжонтива вживається в умовних реченнях нереального типу й у підрядних після дієслів бажання в минулому часі.",
            "en": {
              "text": "The imperfect subjunctive is used in unreal conditional sentences and in subordinate clauses after past-tense verbs of wishing."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se parlèsses amb el, comprendriás.",
                "Якби ти поговорив з ним, ти б зрозумів."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Imperfect Subjunctive — B2"
      },
      {
        "id": "imperative-mood",
        "title": "Imperatiu — A2",
        "emoji": "❗",
        "sections": [
          {
            "type": "intro",
            "text": "Наказовий спосіб має окремі форми для другої особи однини й множини, а заперечний наказ запозичує форми сюжонтива.",
            "en": {
              "text": "The imperative has separate forms for second person singular and plural, and the negative imperative borrows subjunctive forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parla mai fòrt!",
                "Говори голосніше!"
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
        "id": "compound-past-perfect",
        "title": "Passat Compausat — B1",
        "emoji": "✅",
        "sections": [
          {
            "type": "intro",
            "text": "Складений перфект утворюється допоміжним aver (чи esser для окремих дієслів руху й зворотних) плюс дієприкметник минулого часу.",
            "en": {
              "text": "The compound perfect is formed with the auxiliary aver (or esser for certain motion and reflexive verbs) plus the past participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ai parlat amb el.",
                "Я поговорив з ним."
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
        "title": "Plusquamperfait — B2",
        "emoji": "⏮️",
        "sections": [
          {
            "type": "intro",
            "text": "Плюсквамперфект описує дію, завершену до іншої минулої дії; утворюється імперфектом aver/esser плюс дієприкметник.",
            "en": {
              "text": "The pluperfect describes an action completed before another past action; formed with the imperfect of aver/esser plus the participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aviái parlat abans que arribèsse.",
                "Я вже поговорив був, перш ніж він прибув."
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
        "id": "future-perfect",
        "title": "Futur Anterior — B2",
        "emoji": "🔜",
        "sections": [
          {
            "type": "intro",
            "text": "Передмайбутній час виражає дію, яка завершиться до певного моменту в майбутньому; утворюється майбутнім часом aver/esser плюс дієприкметник.",
            "en": {
              "text": "The future perfect expresses an action that will be completed by a certain future point; formed with the future of aver/esser plus the participle."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aurai parlat abans ora.",
                "До тієї години я вже поговорю."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Future Perfect — B2"
      },
      {
        "id": "gerund-progressive",
        "title": "Gerondiu amb Estar — A2",
        "emoji": "🏃",
        "sections": [
          {
            "type": "intro",
            "text": "Тривала дія передається дієсловом estar плюс герундій на -ant/-ent — точний аналог прогресивної конструкції в інших романських мовах.",
            "en": {
              "text": "Ongoing action is expressed with estar plus the gerund in -ant/-ent — a close analog of the progressive construction in other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Soi parlant amb el.",
                "Я саме розмовляю з ним."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gerund with Estar — A2"
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
        "id": "definite-article-dialectal-variation",
        "title": "Article Definit: Variacion Dialectala — A1",
        "emoji": "📘",
        "sections": [
          {
            "type": "intro",
            "text": "Означений артикль має різну форму залежно від діалекту — lo/la в класичній нормі, lou/la в містраляннській провансальській, eth/era в гасконській — та сама функція, різне звучання.",
            "en": {
              "text": "The definite article has a different form depending on the dialect — lo/la in the classical norm, lou/la in Mistralian Provençal, eth/era in Gascon — the same function, different sound."
            }
          },
          {
            "type": "table",
            "title": "Приклади варіантів",
            "rows": [
              [
                "lo pòrc (класична, скрізь крім Гасконі)",
                "eth pòrc (гасконська)"
              ]
            ],
            "en": {
              "title": "Variant Examples"
            }
          }
        ],
        "titleEn": "Definite Article: Dialectal Variation — A1"
      },
      {
        "id": "gascon-enunciative-particle-que",
        "title": "Gascon: Particula Enunciativa Que — B1",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "У гасконській частка que обов'язково стоїть перед дієсловом у стверджувальному головному реченні — унікальна риса, якої немає в жодному іншому окситанському діалекті.",
            "en": {
              "text": "In Gascon, the particle que obligatorily stands before the verb in an affirmative main clause — a unique feature found in no other Occitan dialect."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Que parli gascon.",
                "Я говорю гасконською (обов'язкове que)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gascon: The Enunciative Particle Que — B1"
      },
      {
        "id": "gender-number-agreement",
        "title": "Genre e Nombre — A1",
        "emoji": "⚥",
        "sections": [
          {
            "type": "intro",
            "text": "Іменники мають чоловічий або жіночий рід, здебільшого визначуваний закінченням: приголосний чи -e зазвичай чоловічий, -a зазвичай жіночий.",
            "en": {
              "text": "Nouns are masculine or feminine, mostly determined by their ending: a consonant or -e is usually masculine, -a is usually feminine."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "l'ostal (дім, ч.р.) / la maison-подібне слово ж.р.",
                "приклад роду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender and Number — A1"
      },
      {
        "id": "demonstratives-aquest-aquel",
        "title": "Demostratius: Aqueste, Aquel — A1",
        "emoji": "👉",
        "sections": [
          {
            "type": "intro",
            "text": "Вказівне aqueste ('цей') позначає близький предмет, aquel ('той') — далекий; обидва узгоджуються з родом і числом іменника.",
            "en": {
              "text": "The demonstrative aqueste ('this') marks a near item, aquel ('that') a far one; both agree with the noun's gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "aqueste libre",
                "ця книга"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Demonstratives: Aqueste, Aquel — A1"
      },
      {
        "id": "possessive-pronouns",
        "title": "Possessius — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійні займенники mon/ton/son узгоджуються з предметом володіння, а не з володарем, і зазвичай уживаються з означеним артиклем.",
            "en": {
              "text": "Possessive pronouns mon/ton/son agree with the object possessed, not with the possessor, and are usually used together with the definite article."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo meu libre",
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
        "id": "comparison-mai-que",
        "title": "Comparason: Mai Que — A2",
        "emoji": "⚖️",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння вищого ступеня утворюється зворотом mai (плюс прикметник) que ('більш... ніж'), без окремого суфікса на прикметнику.",
            "en": {
              "text": "Comparison of superiority is formed with mai (plus adjective) que ('more... than'), with no dedicated suffix on the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es mai grand que ieu.",
                "Він більший за мене."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Comparison with Mai Que — A2"
      },
      {
        "id": "superlative-lo-mai",
        "title": "Superlatiu: Lo Mai — B1",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Найвищий ступінь утворюється означеним артиклем плюс mai перед прикметником.",
            "en": {
              "text": "The superlative is formed with the definite article plus mai before the adjective."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo mai grand",
                "найбільший"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Superlative with Lo Mai — B1"
      },
      {
        "id": "negation-pas-depth",
        "title": "Negacion: Lo Ròtle de Pas — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "Слово pas, історично підсилювальний іменник ('крок'), стало основним заперечним маркером — 'non parli pas' можна навіть скоротити до 'parli pas', з pas самим по собі достатнім для заперечення.",
            "en": {
              "text": "The word pas, historically a reinforcing noun ('step'), has become the main negation marker — 'non parli pas' can even be shortened to 'parli pas', with pas alone sufficient for negation."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parli pas occitan.",
                "Я не говорю окситанською (pas самостійно)."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Negation: The Role of Pas — B1"
      },
      {
        "id": "relative-pronouns-que-qui",
        "title": "Relatius: Que, Qui — B1",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Que — універсальний відносний займенник для прямого додатка, qui — для підмета; обидва незмінні за родом і числом.",
            "en": {
              "text": "Que is the universal relative pronoun for the direct object, qui for the subject; both are invariant for gender and number."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "l'ome que vesi",
                "чоловік, якого я бачу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Relative Pronouns: Que, Qui — B1"
      },
      {
        "id": "question-words",
        "title": "Mots Interrogatius — A1",
        "emoji": "❓",
        "sections": [
          {
            "type": "intro",
            "text": "Питальні слові qué (що), qual (хто/котрий), ont (де), quora (коли) зазвичай стоять на початку речення.",
            "en": {
              "text": "The question words qué (what), qual (who/which), ont (where), quora (when) normally stand at the start of the sentence."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ont vas?",
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
        "id": "numerals-cardinal",
        "title": "Nombres Cardinals — A1",
        "emoji": "🔢",
        "sections": [
          {
            "type": "intro",
            "text": "Кількісні числівники мають власні окситанські корені, близькі до каталанських і французьких.",
            "en": {
              "text": "Cardinal numbers have their own Occitan roots, close to Catalan and French."
            }
          },
          {
            "type": "table",
            "title": "Числа",
            "rows": [
              [
                "un, dos, tres",
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
        "title": "Nombres Ordinals — A2",
        "emoji": "🥇",
        "sections": [
          {
            "type": "intro",
            "text": "Порядкові числівники узгоджуються з іменником за родом і мають закінчення, як прикметники.",
            "en": {
              "text": "Ordinal numbers agree with the noun in gender and have endings like adjectives."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo tresen jorn",
                "третій день"
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
        "id": "word-order-svo",
        "title": "Òrdre de Mots: SVO — A1",
        "emoji": "↔️",
        "sections": [
          {
            "type": "intro",
            "text": "Базовий порядок слів — підмет-присудок-додаток, як і в інших романських мовах, з відносною гнучкістю для наголосу.",
            "en": {
              "text": "The basic word order is subject-verb-object, as in other Romance languages, with relative flexibility for emphasis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ieu parli occitan.",
                "Я говорю окситанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Word Order: SVO — A1"
      },
      {
        "id": "adjective-placement",
        "title": "Plaça de l'Adjectiu — A2",
        "emoji": "🎨",
        "sections": [
          {
            "type": "intro",
            "text": "Прикметник зазвичай стоїть після іменника, хоч кілька частовживаних прикметників (gran, bon, pichon) можуть стояти й перед ним.",
            "en": {
              "text": "The adjective normally follows the noun, though a few common adjectives (gran, bon, pichon) can also precede it."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "un ostal grand",
                "великий дім"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adjective Placement — A2"
      },
      {
        "id": "plural-formation",
        "title": "Plural — A1",
        "emoji": "➕",
        "sections": [
          {
            "type": "intro",
            "text": "Множина утворюється додаванням -s після голосної чи приголосної, — регулярне правило, майже без винятків.",
            "en": {
              "text": "The plural is formed by adding -s after a vowel or consonant — a regular rule with almost no exceptions."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "ostal → ostals",
                "дім → доми"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Plural Formation — A1"
      },
      {
        "id": "diminutive-suffix-on-eta",
        "title": "Diminutiu: -on, -eta — B1",
        "emoji": "🐣",
        "sections": [
          {
            "type": "intro",
            "text": "Зменшувально-пестливі суфікси -on (ч.р.) і -eta (ж.р.) надзвичайно продуктивні й уживаються значно частіше, ніж у більшості романських мов.",
            "en": {
              "text": "The diminutive suffixes -on (masc.) and -eta (fem.) are extremely productive and used far more often than in most Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "filha → filheta",
                "дочка → донечка"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Diminutive: -on, -eta — B1"
      },
      {
        "id": "personal-article-names",
        "title": "Article Personal davant Noms Pròpris — B2",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "У деяких діалектах особисте ім'я супроводжується особовим артиклем en (ч.р.) чи na (ж.р.) — риса, спільна з каталанською.",
            "en": {
              "text": "In some dialects, a personal name is preceded by the personal article en (masc.) or na (fem.) — a feature shared with Catalan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "en Joan",
                "пан Жоан (з особовим артиклем)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Personal Article Before Names — B2"
      },
      {
        "id": "reflexive-pronouns",
        "title": "Pronoms Reflexius — A2",
        "emoji": "🪞",
        "sections": [
          {
            "type": "intro",
            "text": "Зворотні займенники (me, te, se, nos, vos, se) вказують, що дія повертається на підмет; se — незмінна форма третьої особи однини й множини.",
            "en": {
              "text": "Reflexive pronouns (me, te, se, nos, vos, se) mark that the action returns to the subject; se is invariant for third person singular and plural."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se lava cada matin.",
                "Він миється щоранку."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Reflexive Pronouns — A2"
      },
      {
        "id": "prepositions-basic",
        "title": "Preposicions de Basa — A1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменники en, dins, de, a, amb охоплюють місце, час і супровід, часто зливаючись з означеним артиклем у стягнену форму.",
            "en": {
              "text": "The prepositions en, dins, de, a, amb cover place, time, and accompaniment, often fusing with the definite article into a contracted form."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "dins l'ostal",
                "усередині дому"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Basic Prepositions — A1"
      },
      {
        "id": "possessive-de-construction",
        "title": "Possession amb De — A1",
        "emoji": "🏠",
        "sections": [
          {
            "type": "intro",
            "text": "Присвійність також виражається зворотом іменник плюс de плюс власник — паралель до конструкцій в інших романських мовах.",
            "en": {
              "text": "Possession is also expressed with the phrase noun plus de plus possessor — a parallel to constructions in other Romance languages."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo libre de Maria",
                "книга Марії"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Possession with De — A1"
      },
      {
        "id": "equality-comparison-tan-coma",
        "title": "Egalitat: Tan...Coma — B1",
        "emoji": "🟰",
        "sections": [
          {
            "type": "intro",
            "text": "Порівняння рівності утворюється зворотом tan (плюс прикметник) coma ('так само... як').",
            "en": {
              "text": "Comparison of equality is formed with tan (plus adjective) coma ('as... as')."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Es tan grand coma ieu.",
                "Він такого ж зросту, як я."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Equality Comparison: Tan...Coma — B1"
      },
      {
        "id": "vocative-forms",
        "title": "Vocatiu — B1",
        "emoji": "📢",
        "sections": [
          {
            "type": "intro",
            "text": "Звертання зазвичай передається просто іменем чи родинним терміном без окремого граматичного маркера, часто з часткою ò на початку.",
            "en": {
              "text": "Direct address is usually conveyed simply with a name or kinship term, with no dedicated grammatical marker, often with the particle ò at the start."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Ò Maria!",
                "О Маріє!"
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
        "id": "clitic-pronoun-system",
        "title": "Pronoms Clitics — B1",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Короткі, ненаголошені займенникові форми (me, te, lo, la, nos, vos, los, las) уживаються значно частіше за повні наголошені форми.",
            "en": {
              "text": "Short, unstressed pronoun forms (me, te, lo, la, nos, vos, los, las) are used far more often than the full stressed forms."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lo vesi.",
                "Я бачу його."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Pronouns — B1"
      },
      {
        "id": "clitic-verb-ordering",
        "title": "Plaça dels Clitics — B2",
        "emoji": "📐",
        "sections": [
          {
            "type": "intro",
            "text": "Клітичні займенники стоять перед відмінюваним дієсловом, але приєднуються після інфінітива чи наказового способу, — та сама позиційна модель, що й у французькій та каталанській.",
            "en": {
              "text": "Clitic pronouns stand before a conjugated verb but attach after an infinitive or imperative — the same positional pattern found in French and Catalan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Vesi-lo. (наказовий, клітик після)",
                "Побач його!"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Clitic Pronoun Placement — B2"
      },
      {
        "id": "auxiliary-selection-esser-aver",
        "title": "Auxiliar: Esser o Aver — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Більшість дієслів утворюють складені часи з aver, але дієслова руху й зворотні дієслова вживають esser, — той самий вибір допоміжного дієслова, що й у французькій чи італійській.",
            "en": {
              "text": "Most verbs form compound tenses with aver, but motion verbs and reflexive verbs use esser — the same auxiliary-verb choice found in French or Italian."
            }
          },
          {
            "type": "table",
            "title": "Приклади вибору допоміжного",
            "rows": [
              [
                "ai parlat (aver, звичайне дієслово)",
                "es anat (esser, дієслово руху)"
              ]
            ],
            "en": {
              "title": "Auxiliary Choice Examples"
            }
          }
        ],
        "titleEn": "Auxiliary Choice: Esser or Aver — B1"
      },
      {
        "id": "dialectal-variation-six-major",
        "title": "Sièis Dialèctes Màgers — B2",
        "emoji": "🗺️",
        "sections": [
          {
            "type": "intro",
            "text": "Окситанська охоплює шість основних діалектів — провансальський, лангедокський, гасконський, лімузенський, овернський, віваро-альпійський, — розбіжних настільки, що взаєморозуміння між крайніми регіонами буває утрудненим.",
            "en": {
              "text": "Occitan encompasses six major dialects — Provençal, Languedocien, Gascon, Limousin, Auvergnat, Vivaro-Alpine — diverging enough that mutual intelligibility between the extreme regions can be difficult."
            }
          },
          {
            "type": "table",
            "title": "Шість діалектів",
            "rows": [
              [
                "provençal, lengadocian, gascon",
                "південний і центральний масив"
              ],
              [
                "lemosin, auvernhat, vivaroalpin",
                "північний масив"
              ]
            ],
            "en": {
              "title": "Six Dialects"
            }
          }
        ],
        "titleEn": "The Six Major Dialects — B2"
      },
      {
        "id": "aranese-co-official-status",
        "title": "Aranés: Estatut Cooficial — B1",
        "emoji": "🏛️",
        "sections": [
          {
            "type": "intro",
            "text": "Аранезька — гасконська говірка долини Аран у Каталонії — єдиний варіант окситанської, що має справжній офіційний статус, співофіційна поряд з каталанською й іспанською в цій долині.",
            "en": {
              "text": "Aranese — a Gascon variety spoken in the Val d'Aran in Catalonia — is the only Occitan variety with genuine official status, co-official alongside Catalan and Spanish in that valley."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "L'aranés es cooficiau ena Val d'Aran.",
                "Аранезька — співофіційна в долині Аран."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Aranese: Co-Official Status — B1"
      },
      {
        "id": "troubadour-literary-tradition",
        "title": "Trobadors: Fin'Amor — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Середньовічні трубадури створили традицію куртуазного кохання (fin'amor) і витончену поетичну техніку trobar clus ('закрите творення'), яка вплинула на всю подальшу європейську лірику, від Данте до петраркізму.",
            "en": {
              "text": "The medieval troubadours created the tradition of courtly love (fin'amor) and the refined poetic technique of trobar clus ('closed composition'), which influenced all later European lyric poetry, from Dante to Petrarchism."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Трубадурська традиція вплинула на всю подальшу європейську поезію.",
                "куртуазна поетична спадщина"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "The Troubadours: Fin'Amor Tradition — B2"
      },
      {
        "id": "mistral-felibrige-nobel",
        "title": "Mistral e lo Felibritge — B2",
        "emoji": "🏆",
        "sections": [
          {
            "type": "intro",
            "text": "Фредерік Містраль заснував рух Felibritge для збереження провансальської мови й отримав Нобелівську премію з літератури 1904 року за поему Mirèio — перший і єдиний нобелівський лауреат, що писав окситанською.",
            "en": {
              "text": "Frédéric Mistral founded the Félibrige movement to preserve the Provençal language and won the 1904 Nobel Prize in Literature for his poem Mirèio — the first and only Nobel laureate to write in Occitan."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Містраль здобув Нобелівську премію за окситанську поему Mirèio.",
                "нобелівський лауреат окситанською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Mistral and the Félibrige — B2"
      },
      {
        "id": "no-official-status-france",
        "title": "Cap d'Estatut Oficial en França — B1",
        "emoji": "🚫",
        "sections": [
          {
            "type": "intro",
            "text": "На відміну від Аранезької долини в Каталонії, у Франції окситанська не має жодного офіційного статусу — конституція визнає лише французьку, тож мова функціонує винятково в неофіційному й регіональному просторі.",
            "en": {
              "text": "Unlike the Val d'Aran in Catalonia, in France Occitan has no official status at all — the constitution recognizes only French, so the language functions solely in unofficial and regional space."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "У Франції окситанська не має конституційного визнання.",
                "відсутність офіційного статусу"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "No Official Status in France — B1"
      },
      {
        "id": "periphrastic-past-anar-depth",
        "title": "Anar + Infinitiu: Mai de Detalhs — B2",
        "emoji": "➡️",
        "sections": [
          {
            "type": "intro",
            "text": "Перифрастичний минулий час майже повністю замінив простий минулий час у розмовній мові більшості діалектів, тоді як простий минулий залишається переважно в літературному й наративному регістрі.",
            "en": {
              "text": "The periphrastic past has almost entirely replaced the simple past in the colloquial speech of most dialects, while the simple past remains mostly in the literary and narrative register."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "У розмовній мові переважає перифрастичний минулий час, а не простий.",
                "домінування перифрастичного минулого"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Anar + Infinitive: Further Depth — B2"
      },
      {
        "id": "gascon-intervocalic-n-loss",
        "title": "Gascon: Pèrda de -N- Intervocalica — B2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Крім переходу f- в h-, гасконська втратила міжголосний -n-, — ще одна фонетична риса, що зближує гасконську з іспанською й баскською більше, ніж з рештою окситанської.",
            "en": {
              "text": "Besides the f- to h- shift, Gascon lost the intervocalic -n- — another phonetic feature bringing Gascon closer to Spanish and Basque than to the rest of Occitan."
            }
          },
          {
            "type": "table",
            "title": "Приклад втрати -n-",
            "rows": [
              [
                "lua (гасконська, без -n-) vs luna (решта окситанської)",
                "місяць"
              ]
            ],
            "en": {
              "title": "Loss of -n- Example"
            }
          }
        ],
        "titleEn": "Gascon: Loss of Intervocalic -n- — B2"
      },
      {
        "id": "code-switching-french-diglossia",
        "title": "Diglossia Franco-Occitana — B2",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Століття диглосії з французькою зробили окситанську мовою домашнього й неформального спілкування, тоді як французька домінує в офіційній, шкільній і медійній сферах, — асиметрія, що загрожує передачі мови дітям.",
            "en": {
              "text": "Centuries of diglossia with French have made Occitan the language of home and informal communication, while French dominates official, educational, and media spheres — an asymmetry that threatens transmission to children."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Диглосія залишає окситанську переважно в неформальній сфері.",
                "асиметрична диглосія з французькою"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "French-Occitan Diglossia — B2"
      },
      {
        "id": "calandreta-immersion-schools",
        "title": "Calandretas: Escòlas d'Immersion — B2",
        "emoji": "🌱",
        "sections": [
          {
            "type": "intro",
            "text": "Мережа шкіл-калaндрет, заснована 1979 року, пропонує повне мовне занурення для дітей — головний сучасний інструмент відродження мови поза родинною передачею.",
            "en": {
              "text": "The Calandreta school network, founded in 1979, offers full language immersion for children — the main modern tool for language revitalization outside family transmission."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Calandretas propausan ensenhament immersiu en occitan.",
                "Каландрети пропонують занурене навчання окситанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Calandreta Immersion Schools — B2"
      },
      {
        "id": "catalan-occitan-sister-language-comparison",
        "title": "Occitan e Catalan: Lengas Sòrres — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Окситанська й каталанська настільки близькі граматично й лексично, що середньовічні трубадури й каталонські поети інколи писали спільною літературною мовою, — сучасна класична норма окситанської свідомо тримається ближче до каталанської, ніж містралянська.",
            "en": {
              "text": "Occitan and Catalan are so close grammatically and lexically that medieval troubadours and Catalan poets sometimes wrote in a shared literary language — the modern classical norm of Occitan deliberately stays closer to Catalan than the Mistralian one does."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Окситанська й каталанська історично ділили спільну літературну мову.",
                "спорідненість з каталанською"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Occitan and Catalan: Sister Languages — B2"
      },
      {
        "id": "impersonal-se-construction",
        "title": "Se Impersonal — B1",
        "emoji": "👤",
        "sections": [
          {
            "type": "intro",
            "text": "Безособове se заміняє реальний підмет, коли він неважливий чи невідомий, — поширений спосіб передати пасивне чи узагальнене значення.",
            "en": {
              "text": "Impersonal se replaces the real subject when it's unimportant or unknown — a common way to convey a passive or generalized meaning."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aquí se parla occitan.",
                "Тут говорять окситанською."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Impersonal Se — B1"
      },
      {
        "id": "causative-far-infinitive",
        "title": "Causatiu: Far + Infinitiu — B2",
        "emoji": "⚡",
        "sections": [
          {
            "type": "intro",
            "text": "Каузацію передає дієслово far ('робити') плюс інфінітив, поставлений одразу після нього, — 'змушувати робити щось'.",
            "en": {
              "text": "Causation is expressed with the verb far ('to do') plus an infinitive placed right after it — 'to make someone do something'."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Lo fau parlar.",
                "Я змушую його говорити."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Causative: Far + Infinitive — B2"
      },
      {
        "id": "gerund-converb-ent",
        "title": "Gerondiu Autonòm en -ent — B2",
        "emoji": "🔗",
        "sections": [
          {
            "type": "intro",
            "text": "Герундій на -ant/-ent, ужитий самостійно без estar, описує спосіб чи одночасну обставину дії, — 'роблячи це, він...' без окремого сполучника.",
            "en": {
              "text": "The gerund in -ant/-ent, used on its own without estar, describes the manner or a simultaneous circumstance of an action — 'while doing this, he...' with no separate conjunction."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cantant, camina.",
                "Він іде, співаючи."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Autonomous Gerund/Converb in -ent — B2"
      },
      {
        "id": "politeness-tu-vos",
        "title": "Politesa: Tu e Vos — A2",
        "emoji": "🎩",
        "sections": [
          {
            "type": "intro",
            "text": "Ввічливе звертання до однієї особи передається займенником множини vos з узгодженням дієслова у множині, тоді як tu лишається неформальним.",
            "en": {
              "text": "Polite address to one person is expressed with the plural pronoun vos with plural verb agreement, while tu remains informal."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Parlatz occitan?",
                "Ви говорите окситанською? (ввічливо)"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Politeness: Tu and Vos — A2"
      },
      {
        "id": "fixed-idiomatic-expressions",
        "title": "Expressions Idiomaticas — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Численні застиглі ідіоми вживаються цілими блоками з переносним значенням, не виведеним з буквального перекладу окремих слів.",
            "en": {
              "text": "Numerous fixed idioms are used as whole blocks with a figurative meaning not derived from the literal translation of the individual words."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Aver lo cap dins las nívols. (буквально 'мати голову в хмарах' → бути неуважним)",
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
        "id": "gender-exceptions-a-ending",
        "title": "Excepcions de Genre: Mots en -a — B2",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька грецьких за походженням іменників на -a залишаються чоловічого роду попри закінчення, яке зазвичай позначає жіночий рід.",
            "en": {
              "text": "A few nouns of Greek origin ending in -a stay masculine despite an ending that normally marks feminine gender."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lo problèma (не 'la problèma', попри закінчення -a)",
                "виняток з роду"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Gender Exceptions: -a Nouns — B2"
      },
      {
        "id": "verb-conjugation-classes",
        "title": "Classes de Conjugason — A2",
        "emoji": "🔤",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова розподіляються на три дієвідміни залежно від закінчення інфінітива (-ar, -er/-re, -ir), кожна з власним набором особових закінчень.",
            "en": {
              "text": "Verbs are sorted into three conjugation classes depending on the infinitive ending (-ar, -er/-re, -ir), each with its own set of person endings."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "parlar, véser, partir — три різні дієвідміни",
                "приклади трьох класів"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Verb Conjugation Classes — A2"
      },
      {
        "id": "subjunctive-trigger-verbs",
        "title": "Vèrbs que Demandan lo Subjontiu — B1",
        "emoji": "🎭",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова бажання (voler), сумніву (dobtar), емоції (èsser content) і безособові вирази необхідності (cal que) вимагають сюжонтива в підрядному реченні.",
            "en": {
              "text": "Verbs of wishing (voler), doubt (dobtar), emotion (èsser content), and impersonal expressions of necessity (cal que) require the subjunctive in the subordinate clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Cal que vengues.",
                "Треба, щоб ти прийшов."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Subjunctive-Trigger Verbs — B1"
      },
      {
        "id": "conditional-sentences-se",
        "title": "Oracions Condicionalas: Se — B1",
        "emoji": "🔀",
        "sections": [
          {
            "type": "intro",
            "text": "Реальна умова вживає se з дійсним способом, нереальна — se з імперфектом сюжонтива в підрядному й умовним способом у головному реченні.",
            "en": {
              "text": "A real condition uses se with the indicative, an unreal one uses se with the imperfect subjunctive in the subordinate clause and the conditional in the main clause."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Se plòu, demòri a l'ostal.",
                "Якщо піде дощ, я залишуся вдома."
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Conditional Sentences with Se — B1"
      },
      {
        "id": "compound-word-formation",
        "title": "Formacion de Mots Compausats — B2",
        "emoji": "🧩",
        "sections": [
          {
            "type": "intro",
            "text": "Складні слова поєднують два корені в одне ціле, часто описуючи предмет через його функцію чи спосіб виготовлення.",
            "en": {
              "text": "Compound words join two roots into one unit, often describing an item through its function or method of making."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "porta-clau (тримач ключів)",
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
        "id": "adverb-formation-ament",
        "title": "Adverbis en -ament — B1",
        "emoji": "🧭",
        "sections": [
          {
            "type": "intro",
            "text": "Прислівники способу дії утворюються суфіксом -ament, доданим до жіночої форми прикметника, — паралель до французького -ment чи іспанського -mente.",
            "en": {
              "text": "Manner adverbs are formed with the suffix -ament added to the feminine form of the adjective — a parallel to French -ment or Spanish -mente."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "lenta → lentament",
                "повільно"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Adverb Formation: -ament — B1"
      },
      {
        "id": "article-preposition-contraction",
        "title": "Contraccion Article-Preposicion — A2",
        "emoji": "🔡",
        "sections": [
          {
            "type": "intro",
            "text": "Прийменник і означений артикль часто стягуються в одне слово: de plus lo → del, a plus lo → al.",
            "en": {
              "text": "A preposition and the definite article often contract into one word: de plus lo → del, a plus lo → al."
            }
          },
          {
            "type": "table",
            "title": "Приклади стягнень",
            "rows": [
              [
                "de + lo → del",
                "з"
              ],
              [
                "a + lo → al",
                "до"
              ]
            ],
            "en": {
              "title": "Contraction Examples"
            }
          }
        ],
        "titleEn": "Article-Preposition Contraction — A2"
      },
      {
        "id": "loanword-adaptation-french-modern",
        "title": "Manlèus Modèrnes de Francés — B1",
        "emoji": "🔧",
        "sections": [
          {
            "type": "intro",
            "text": "Через постійний тиск французької сучасні запозичення й неологізми часто просто перекладаються з французької, а не творяться незалежно з питомого окситанського кореня.",
            "en": {
              "text": "Because of constant French pressure, modern loanwords and neologisms are often simply calqued from French, rather than being independently coined from a native Occitan root."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Багато сучасних неологізмів калькуються з французької під мовним тиском.",
                "калькування під французьким впливом"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Modern French Loanword Pressure — B1"
      },
      {
        "id": "limousin-troubadour-birthplace",
        "title": "Lemosin: Bèrç dels Trobadors — B2",
        "emoji": "📜",
        "sections": [
          {
            "type": "intro",
            "text": "Лімузенський діалект, попри малу кількість сучасних носіїв, історично вважається діалектом, у якому виникла найдавніша трубадурська поезія початку ХІІ століття, — колиска літературної традиції, що пізніше поширилася на весь окситанський простір.",
            "en": {
              "text": "The Limousin dialect, despite its small number of modern speakers, is historically considered the dialect in which the earliest troubadour poetry of the early 12th century arose — the cradle of a literary tradition that later spread across the whole Occitan space."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Лімузенський вважається колискою найдавнішої трубадурської традиції.",
                "історична роль лімузенського діалекту"
              ]
            ],
            "en": {
              "title": "Examples"
            }
          }
        ],
        "titleEn": "Limousin: Birthplace of the Troubadours — B2"
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
        "title": "Vèrbs Irregulars — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Дієслова esser ('бути') і aver ('мати') мають цілком нерегулярне відмінювання, не за жодним стандартним зразком дієвідміни.",
            "en": {
              "text": "The verbs esser ('to be') and aver ('to have') have completely irregular conjugation, following no standard conjugation pattern."
            }
          },
          {
            "type": "table",
            "title": "Нерегулярні форми",
            "rows": [
              [
                "soi / es / avèm",
                "я є / він є / ми маємо"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Verbs — B1"
      },
      {
        "id": "irregular-plural-forms",
        "title": "Plurals Irregulars — B1",
        "emoji": "⚠️",
        "sections": [
          {
            "type": "intro",
            "text": "Кілька частовживаних іменників мають нерегулярну форму множини, яку слід запам'ятовувати окремо.",
            "en": {
              "text": "A few common nouns have an irregular plural form that must be memorized separately."
            }
          },
          {
            "type": "table",
            "title": "Приклад",
            "rows": [
              [
                "uèlh → uèlhs (не за очікуваним зразком)",
                "нерегулярна множина"
              ]
            ]
          }
        ],
        "titleEn": "Irregular Plurals — B1"
      },
      {
        "id": "fixed-proverbs-archaic-grammar",
        "title": "Provèrbis e Gramatica Ancianas — B2",
        "emoji": "🗿",
        "sections": [
          {
            "type": "intro",
            "text": "Прислів'я зберігають архаїчну граматичну структуру й лексику, вже втрачену в живій мові, і вживаються цілими блоками без граматичного розбору.",
            "en": {
              "text": "Proverbs preserve archaic grammatical structure and vocabulary already lost from the living language, and are used as whole blocks with no grammatical analysis."
            }
          },
          {
            "type": "examples",
            "title": "Приклади",
            "rows": [
              [
                "Qual res non ausa, res non a.",
                "Хто нічого не важиться, той нічого не має (застигла приказка з архаїчними формами)."
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
