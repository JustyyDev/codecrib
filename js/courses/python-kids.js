(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData["python-kids"] = {
  "id": "python-kids",
  "kids": true,
  "title": {
    "nl": "Python Junior",
    "en": "Python Junior"
  },
  "intro": {
    "nl": "Voor kinderen van 8 tot 12. Korte stappen, rustig tempo, Python in de browser.",
    "en": "For kids aged 8 to 12. Short steps, calm pace, Python in the browser."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Hallo wereld",
        "en": "Hello world"
      },
      "minutes": 7,
      "goals": {
        "nl": [
          "Je ziet wat print doet",
          "Je typt je eerste regel",
          "Je runt code veilig"
        ],
        "en": [
          "You see what print does",
          "You type your first line",
          "You run code safely"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "Kijk mee. Dit is print.",
              "en": "Watch with me. This is print."
            },
            "code": "print(\"Hallo\")"
          },
          {
            "say": {
              "nl": "De tekst tussen aanhalingstekens komt op het scherm.",
              "en": "The text in quotes shows on the screen."
            },
            "code": "print(\"Hallo klas!\")"
          },
          {
            "say": {
              "nl": "Je kunt meer regels printen.",
              "en": "You can print more lines."
            },
            "code": "print(\"Een\")\nprint(\"Twee\")"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Laat rustig zien: typ, run, juich klein. Geen haast.",
            "en": "Show calmly: type, run, small cheer. No rush."
          },
          "mistakes": {
            "nl": "Vergeten aanhalingstekens. Typfout in print.",
            "en": "Missing quotes. Typo in print."
          },
          "breakMoment": {
            "nl": "Na de demo: 20 seconden ademhalen of water.",
            "en": "After demo: 20 seconds breathe or water."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Typ print",
            "en": "Type print"
          },
          "body": {
            "nl": "Maak de code af. Print het woord Hallo.",
            "en": "Finish the code. Print the word Hello."
          },
          "starter": "print(\"Hallo\")",
          "expected": "Hallo",
          "hints": {
            "nl": [
              "Begin met print",
              "Zet tekst tussen \" \"",
              "Zo: print(\"Hallo\")"
            ],
            "en": [
              "Start with print",
              "Put text between \" \"",
              "Like: print(\"Hello\")"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "star",
        "text": {
          "nl": "Je hebt je eerste print!",
          "en": "You made your first print!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Print Hallo. Druk op Run.",
          "en": "Print Hello. Press Run."
        },
        "starter": "print(\"Hallo\")",
        "expected": "Hallo"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet print?",
            "en": "What does print do?"
          },
          "choices": {
            "nl": [
              "Tekst op het scherm zetten",
              "De computer uitzetten",
              "Een bestand wissen"
            ],
            "en": [
              "Show text on the screen",
              "Turn the computer off",
              "Delete a file"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "print toont tekst.",
            "en": "print shows text."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke regel is goed?",
            "en": "Which line is correct?"
          },
          "choices": {
            "nl": [
              "print(\"hoi\")",
              "print hoi",
              "Print(hoi)"
            ],
            "en": [
              "print(\"hi\")",
              "print hi",
              "Print(hi)"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Kleine letters en aanhalingstekens.",
            "en": "Lowercase and quotes."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom aanhalingstekens?",
            "en": "Why use quotes?"
          },
          "choices": {
            "nl": [
              "Voor tekst",
              "Voor rekenen",
              "Voor kleur"
            ],
            "en": [
              "For text",
              "For math",
              "For color"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Tekst zit tussen aanhalingstekens.",
            "en": "Text goes in quotes."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Hoeveel regels print dit?\nprint(1)\nprint(2)",
            "en": "How many lines does this print?\nprint(1)\nprint(2)"
          },
          "choices": {
            "nl": [
              "Twee regels",
              "Een regel",
              "Nul regels"
            ],
            "en": [
              "Two lines",
              "One line",
              "Zero lines"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Elke print is een regel.",
            "en": "Each print is a line."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Is dit een fout? print('ok')",
            "en": "Is this an error? print('ok')"
          },
          "choices": {
            "nl": [
              "Nee, dat mag",
              "Ja, altijd fout",
              "Alleen op dinsdag"
            ],
            "en": [
              "No, that is fine",
              "Yes, always wrong",
              "Only on Tuesday"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Enkele of dubbele quotes mogen.",
            "en": "Single or double quotes are fine."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat hoort bij Python?",
            "en": "What belongs to Python?"
          },
          "choices": {
            "nl": [
              "print",
              "echo",
              "cout"
            ],
            "en": [
              "print",
              "echo",
              "cout"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "In Python heet het print.",
            "en": "In Python it is called print."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 2,
      "title": {
        "nl": "Doosjes met namen",
        "en": "Boxes with names"
      },
      "minutes": 8,
      "goals": {
        "nl": [
          "Je maakt een variabele",
          "Je zet er iets in",
          "Je print de inhoud"
        ],
        "en": [
          "You make a variable",
          "You put something in it",
          "You print the contents"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "Een variabele is een doosje met een naam.",
              "en": "A variable is a box with a name."
            },
            "code": "naam = \"Sam\""
          },
          {
            "say": {
              "nl": "We printen wat erin zit.",
              "en": "We print what is inside."
            },
            "code": "naam = \"Sam\"\nprint(naam)"
          },
          {
            "say": {
              "nl": "Getallen kunnen ook.",
              "en": "Numbers work too."
            },
            "code": "score = 3\nprint(score)"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Vergelijk met een etiket op een doos.",
            "en": "Compare to a label on a box."
          },
          "mistakes": {
            "nl": "Naam zonder =. print met quotes om de naam.",
            "en": "Name without =. print with quotes around the name."
          },
          "breakMoment": {
            "nl": "Kinderen mogen hun eigen naam hardop kiezen.",
            "en": "Kids may pick their own name out loud."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Maak een naam",
            "en": "Make a name"
          },
          "body": {
            "nl": "Zet jouw naam in een doosje en print hem.",
            "en": "Put your name in a box and print it."
          },
          "starter": "naam = \"Justy\"\nprint(naam)",
          "expected": "Justy",
          "hints": {
            "nl": [
              "Gebruik =",
              "print(naam) zonder nieuwe quotes",
              "Kijk naar de demo"
            ],
            "en": [
              "Use =",
              "print(name) without new quotes",
              "Look at the demo"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "heart",
        "text": {
          "nl": "Je bewaart gegevens. Top!",
          "en": "You store data. Nice!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Maak naam = \"Sam\" en print naam.",
          "en": "Make name = \"Sam\" and print name."
        },
        "starter": "naam = \"Sam\"\nprint(naam)",
        "expected": "Sam"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat is een variabele?",
            "en": "What is a variable?"
          },
          "choices": {
            "nl": [
              "Een doosje met een naam",
              "Een virus",
              "Een muis"
            ],
            "en": [
              "A box with a name",
              "A virus",
              "A mouse"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Je bewaart iets onder een naam.",
            "en": "You store something under a name."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke regel maakt een doosje?",
            "en": "Which line makes a box?"
          },
          "choices": {
            "nl": [
              "kleur = \"blauw\"",
              "print(\"blauw\")",
              "kleur blauw"
            ],
            "en": [
              "color = \"blue\"",
              "print(\"blue\")",
              "color blue"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Naam = waarde.",
            "en": "Name = value."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print dit?\nx = 5\nprint(x)",
            "en": "What does this print?\nx = 5\nprint(x)"
          },
          "choices": {
            "nl": [
              "5",
              "x",
              "print"
            ],
            "en": [
              "5",
              "x",
              "print"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "print(x) toont de inhoud.",
            "en": "print(x) shows the contents."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Mag een naam spaties hebben?",
            "en": "Can a name have spaces?"
          },
          "choices": {
            "nl": [
              "Nee, liever niet",
              "Ja, altijd",
              "Alleen met !"
            ],
            "en": [
              "No, better not",
              "Yes, always",
              "Only with !"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Gebruik underscore of een woord.",
            "en": "Use underscore or one word."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat hoort bij = ?",
            "en": "What goes with = ?"
          },
          "choices": {
            "nl": [
              "Iets opslaan",
              "Iets wissen",
              "Iets zoeken op google"
            ],
            "en": [
              "Store something",
              "Delete something",
              "Search google"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "= zet iets in het doosje.",
            "en": "= puts something in the box."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat is fout?\nprint(\"naam\") als naam Sam is",
            "en": "What is wrong?\nprint(\"name\") when name is Sam"
          },
          "choices": {
            "nl": [
              "Het print het woord naam",
              "Het print Sam",
              "Het crasht altijd"
            ],
            "en": [
              "It prints the word name",
              "It prints Sam",
              "It always crashes"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Quotes maken tekst, geen doosje.",
            "en": "Quotes make text, not the box."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 3,
      "title": {
        "nl": "Vragen stellen",
        "en": "Asking questions"
      },
      "minutes": 8,
      "goals": {
        "nl": [
          "Je leest wat input doet",
          "Je koppelt vraag en antwoord",
          "Je print een zin terug"
        ],
        "en": [
          "You learn what input does",
          "You link question and answer",
          "You print a sentence back"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "input vraagt iets aan de speler.",
              "en": "input asks the player something."
            },
            "code": "# voorbeeld\n# kleur = input(\"Kleur? \")"
          },
          {
            "say": {
              "nl": "In de les zetten we het antwoord vast. Makkelijk oefenen.",
              "en": "In class we fix the answer. Easy practice."
            },
            "code": "kleur = \"rood\"\nprint(\"Jij koos\", kleur)"
          },
          {
            "say": {
              "nl": "Later mag echte input.",
              "en": "Later you can use real input."
            },
            "code": "dier = \"kat\"\nprint(\"Lieve\", dier)"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Leg uit: input wacht op typen. Wij oefenen eerst met vaste tekst.",
            "en": "Explain: input waits for typing. We practice with fixed text first."
          },
          "mistakes": {
            "nl": "Vergeten print. Quotes vergeten om de vaste tekst.",
            "en": "Forgot print. Forgot quotes around fixed text."
          },
          "breakMoment": {
            "nl": "Korte stretch: handen omhoog, 5 tellen.",
            "en": "Short stretch: hands up, count to 5."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Kies een kleur",
            "en": "Pick a color"
          },
          "body": {
            "nl": "Zet kleur op \"blauw\" en print hem vriendelijk.",
            "en": "Set color to \"blue\" and print it kindly."
          },
          "starter": "kleur = \"blauw\"\nprint(\"Jij koos\", kleur)",
          "expected": "Jij koos blauw",
          "hints": {
            "nl": [
              "Eerst kleur =",
              "Dan print met kleur",
              "Kijk naar de demo"
            ],
            "en": [
              "First color =",
              "Then print with color",
              "Look at the demo"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "smile",
        "text": {
          "nl": "Je praat met je programma!",
          "en": "You talk with your program!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Zet dier = \"hond\" en print Lieve hond.",
          "en": "Set animal = \"dog\" and print Nice dog."
        },
        "starter": "dier = \"hond\"\nprint(\"Lieve\", dier)",
        "expected": "Lieve hond"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet input?",
            "en": "What does input do?"
          },
          "choices": {
            "nl": [
              "Iets vragen aan jou",
              "De wifi uitzetten",
              "Een foto maken"
            ],
            "en": [
              "Ask you something",
              "Turn wifi off",
              "Take a photo"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "input wacht op een antwoord.",
            "en": "input waits for an answer."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom oefenen we met vaste tekst?",
            "en": "Why practice with fixed text?"
          },
          "choices": {
            "nl": [
              "Makkelijker en rustig",
              "Omdat print kapot is",
              "Omdat Python geen tekst mag"
            ],
            "en": [
              "Easier and calm",
              "Because print is broken",
              "Because Python bans text"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Eerst rustig, later echt vragen.",
            "en": "Calm first, real questions later."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print?\nk = \"groen\"\nprint(\"Kleur\", k)",
            "en": "What prints?\nk = \"green\"\nprint(\"Color\", k)"
          },
          "choices": {
            "nl": [
              "Kleur groen",
              "Kleur k",
              "groen Kleur"
            ],
            "en": [
              "Color green",
              "Color k",
              "green Color"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Eerst tekst, dan de inhoud van k.",
            "en": "Text first, then contents of k."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Mag je input later gebruiken?",
            "en": "Can you use input later?"
          },
          "choices": {
            "nl": [
              "Ja, als je wilt",
              "Nee, nooit",
              "Alleen in wiskunde"
            ],
            "en": [
              "Yes, if you want",
              "No, never",
              "Only in math"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Later mag echte input.",
            "en": "Real input is fine later."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat hoort bij vragen?",
            "en": "What belongs with asking?"
          },
          "choices": {
            "nl": [
              "input",
              "delete",
              "crash"
            ],
            "en": [
              "input",
              "delete",
              "crash"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "input is voor vragen.",
            "en": "input is for asking."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Hoe maak je een vriendelijke zin?",
            "en": "How do you make a kind sentence?"
          },
          "choices": {
            "nl": [
              "print met tekst en doosje",
              "Alleen schreeuwen",
              "De computer slaan"
            ],
            "en": [
              "print with text and a box",
              "Only yell",
              "Hit the computer"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "print zet woorden bij elkaar.",
            "en": "print puts words together."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 4,
      "title": {
        "nl": "Als dit, dan dat",
        "en": "If this, then that"
      },
      "minutes": 9,
      "goals": {
        "nl": [
          "Je leest een if",
          "Je kiest een pad",
          "Je print bij een voorwaarde"
        ],
        "en": [
          "You read an if",
          "You pick a path",
          "You print on a condition"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "if betekent: als dit waar is...",
              "en": "if means: if this is true..."
            },
            "code": "score = 10\nif score > 5:\n    print(\"Goed!\")"
          },
          {
            "say": {
              "nl": "Let op de : en de inspringing.",
              "en": "Watch the : and the indent."
            },
            "code": "leeftijd = 9\nif leeftijd >= 8:\n    print(\"Welkom\")"
          },
          {
            "say": {
              "nl": "Anders gebeurt er niets (nu).",
              "en": "Otherwise nothing happens (for now)."
            },
            "code": "n = 2\nif n == 3:\n    print(\"drie\")"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Wijs naar de : en de inspringing. Rustig herhalen.",
            "en": "Point at : and indent. Repeat calmly."
          },
          "mistakes": {
            "nl": "Vergeten :. Geen inspringing. = in plaats van ==.",
            "en": "Forgot :. No indent. = instead of =="
          },
          "breakMoment": {
            "nl": "Korte pauze: ogen dicht 10 seconden.",
            "en": "Short break: eyes closed 10 seconds."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Check de score",
            "en": "Check the score"
          },
          "body": {
            "nl": "Als score groter is dan 5, print Goed!",
            "en": "If score is greater than 5, print Nice!"
          },
          "starter": "score = 10\nif score > 5:\n    print(\"Goed!\")",
          "expected": "Goed!",
          "hints": {
            "nl": [
              "Gebruik if score > 5:",
              "Inspringen na if",
              "print onder de if"
            ],
            "en": [
              "Use if score > 5:",
              "Indent after if",
              "print under the if"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "rocket",
        "text": {
          "nl": "Je maakt keuzes in code!",
          "en": "You make choices in code!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Als n == 1 print ja.",
          "en": "If n == 1 print yes."
        },
        "starter": "n = 1\nif n == 1:\n    print(\"ja\")",
        "expected": "ja"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat betekent if?",
            "en": "What does if mean?"
          },
          "choices": {
            "nl": [
              "Als dit waar is",
              "Altijd stoppen",
              "Een virus starten"
            ],
            "en": [
              "If this is true",
              "Always stop",
              "Start a virus"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "if kiest een pad.",
            "en": "if picks a path."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat hoort na if?",
            "en": "What belongs after if?"
          },
          "choices": {
            "nl": [
              "Een :",
              "Een #",
              "Een ?"
            ],
            "en": [
              "A :",
              "A #",
              "A ?"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "In Python komt : na if.",
            "en": "In Python : comes after if."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom inspringen?",
            "en": "Why indent?"
          },
          "choices": {
            "nl": [
              "Het hoort bij de if",
              "Voor mooi lettertype",
              "Voor wifi"
            ],
            "en": [
              "It belongs to the if",
              "For a pretty font",
              "For wifi"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Inspringing toont wat bij if hoort.",
            "en": "Indent shows what belongs to if."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke check is gelijkheid?",
            "en": "Which check is equality?"
          },
          "choices": {
            "nl": [
              "==",
              "=",
              "!="
            ],
            "en": [
              "==",
              "=",
              "!="
            ]
          },
          "answer": 0,
          "why": {
            "nl": "== vraagt: is gelijk?",
            "en": "== asks: is equal?"
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print?\nx=8\nif x>3:\n print('hoi')",
            "en": "What prints?\nx=8\nif x>3:\n print('hi')"
          },
          "choices": {
            "nl": [
              "hoi",
              "niets",
              "fout altijd"
            ],
            "en": [
              "hi",
              "nothing",
              "always error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "8 is groter dan 3.",
            "en": "8 is greater than 3."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Mag if zonder print?",
            "en": "Can if exist without print?"
          },
          "choices": {
            "nl": [
              "Ja, maar dan zie je niets",
              "Nee, verboden",
              "Alleen in Excel"
            ],
            "en": [
              "Yes, but you see nothing",
              "No, banned",
              "Only in Excel"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Zonder print zie je geen output.",
            "en": "Without print you see no output."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Nog een keer",
        "en": "One more time"
      },
      "minutes": 9,
      "goals": {
        "nl": [
          "Je ziet een for-loop",
          "Je herhaalt print",
          "Je telt mee"
        ],
        "en": [
          "You see a for loop",
          "You repeat print",
          "You count along"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "Een loop herhaalt iets.",
              "en": "A loop repeats something."
            },
            "code": "for i in range(3):\n    print(\"hoi\")"
          },
          {
            "say": {
              "nl": "range(3) betekent 0,1,2.",
              "en": "range(3) means 0,1,2."
            },
            "code": "for i in range(3):\n    print(i)"
          },
          {
            "say": {
              "nl": "Handig voor tellen en tekenen.",
              "en": "Handy for counting and drawing."
            },
            "code": "for i in range(4):\n    print(\"*\" * (i+1))"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Tel hardop mee met de output.",
            "en": "Count the output out loud."
          },
          "mistakes": {
            "nl": "Vergeten :. Geen inspringing. range te groot.",
            "en": "Forgot :. No indent. range too big."
          },
          "breakMoment": {
            "nl": "Na demo: 3 diepe ademhalingen samen.",
            "en": "After demo: 3 deep breaths together."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Drie keer hoi",
            "en": "Three times hi"
          },
          "body": {
            "nl": "Print hoi drie keer met een loop.",
            "en": "Print hi three times with a loop."
          },
          "starter": "for i in range(3):\n    print(\"hoi\")",
          "expected": "hoi\nhoi\nhoi",
          "hints": {
            "nl": [
              "for i in range(3):",
              "Inspringen",
              "print binnen de loop"
            ],
            "en": [
              "for i in range(3):",
              "Indent",
              "print inside the loop"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "moon",
        "text": {
          "nl": "Je kunt herhalen zonder copy-paste!",
          "en": "You can repeat without copy-paste!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Print 0 1 2 elk op een regel.",
          "en": "Print 0 1 2 each on a line."
        },
        "starter": "for i in range(3):\n    print(i)",
        "expected": "0\n1\n2"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet een loop?",
            "en": "What does a loop do?"
          },
          "choices": {
            "nl": [
              "Iets herhalen",
              "De batterij legen",
              "Een foto opslaan"
            ],
            "en": [
              "Repeat something",
              "Drain the battery",
              "Save a photo"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Loops herhalen code.",
            "en": "Loops repeat code."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat is range(3)?",
            "en": "What is range(3)?"
          },
          "choices": {
            "nl": [
              "0, 1 en 2",
              "1, 2 en 3",
              "Alleen 3"
            ],
            "en": [
              "0, 1 and 2",
              "1, 2 and 3",
              "Only 3"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "range(3) start bij 0.",
            "en": "range(3) starts at 0."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke regel start een for?",
            "en": "Which line starts a for?"
          },
          "choices": {
            "nl": [
              "for i in range(2):",
              "if i range",
              "print range"
            ],
            "en": [
              "for i in range(2):",
              "if i range",
              "print range"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "for ... in range ... :",
            "en": "for ... in range ... :"
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom for in plaats van 10x print?",
            "en": "Why for instead of print 10 times?"
          },
          "choices": {
            "nl": [
              "Korter en duidelijker",
              "Omdat print verboden is",
              "Omdat loops sneller wifi geven"
            ],
            "en": [
              "Shorter and clearer",
              "Because print is banned",
              "Because loops make wifi faster"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Minder tippen, meer rust.",
            "en": "Less typing, more calm."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print range(1)?",
            "en": "What does range(1) print with a loop?"
          },
          "choices": {
            "nl": [
              "Alleen 0",
              "Alleen 1",
              "Niets"
            ],
            "en": [
              "Only 0",
              "Only 1",
              "Nothing"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "range(1) is alleen 0.",
            "en": "range(1) is only 0."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Moet je inspringen in een loop?",
            "en": "Must you indent in a loop?"
          },
          "choices": {
            "nl": [
              "Ja",
              "Nee",
              "Alleen in Java"
            ],
            "en": [
              "Yes",
              "No",
              "Only in Java"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "In Python wel.",
            "en": "In Python yes."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Raad het getal",
        "en": "Guess the number"
      },
      "minutes": 10,
      "goals": {
        "nl": [
          "Je bouwt een klein spel",
          "Je vergelijkt getallen",
          "Je geeft feedback"
        ],
        "en": [
          "You build a small game",
          "You compare numbers",
          "You give feedback"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "Er is een geheim getal.",
              "en": "There is a secret number."
            },
            "code": "geheim = 7\ngok = 5"
          },
          {
            "say": {
              "nl": "We vergelijken gok en geheim.",
              "en": "We compare guess and secret."
            },
            "code": "geheim = 7\ngok = 5\nif gok < geheim:\n    print(\"hoger\")"
          },
          {
            "say": {
              "nl": "Bij gelijk: goed zo!",
              "en": "When equal: well done!"
            },
            "code": "geheim = 7\ngok = 7\nif gok == geheim:\n    print(\"goed\")"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Speel het spel eerst samen hardop.",
            "en": "Play the game together out loud first."
          },
          "mistakes": {
            "nl": "Verwarren < en >. = i.p.v. ==.",
            "en": "Mix up < and >. = instead of =="
          },
          "breakMoment": {
            "nl": "Na 1 ronde: high-five of rustige duim omhoog.",
            "en": "After 1 round: high-five or calm thumbs up."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Maak de check",
            "en": "Make the check"
          },
          "body": {
            "nl": "Als gok gelijk is aan geheim, print goed.",
            "en": "If guess equals secret, print good."
          },
          "starter": "geheim = 4\ngok = 4\nif gok == geheim:\n    print(\"goed\")",
          "expected": "goed",
          "hints": {
            "nl": [
              "Gebruik ==",
              "if gok == geheim:",
              "print goed"
            ],
            "en": [
              "Use ==",
              "if guess == secret:",
              "print good"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "fish",
        "text": {
          "nl": "Je hebt een spel-logica!",
          "en": "You have game logic!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Als gok te laag is, print hoger.",
          "en": "If guess is too low, print higher."
        },
        "starter": "geheim = 9\ngok = 3\nif gok < geheim:\n    print(\"hoger\")",
        "expected": "hoger"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat is geheim in dit spel?",
            "en": "What is secret in this game?"
          },
          "choices": {
            "nl": [
              "Het juiste getal",
              "Een wachtwoord van school",
              "Een virus"
            ],
            "en": [
              "The right number",
              "A school password",
              "A virus"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "geheim is het doelgetal.",
            "en": "secret is the target number."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "gok < geheim betekent?",
            "en": "guess < secret means?"
          },
          "choices": {
            "nl": [
              "Te laag, probeer hoger",
              "Te hoog",
              "Gelijk"
            ],
            "en": [
              "Too low, try higher",
              "Too high",
              "Equal"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Kleiner betekent te laag.",
            "en": "Smaller means too low."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke check is 'gelijk'?",
            "en": "Which check is 'equal'?"
          },
          "choices": {
            "nl": [
              "==",
              "<",
              ">"
            ],
            "en": [
              "==",
              "<",
              ">"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "== is gelijk.",
            "en": "== is equal."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom feedback geven?",
            "en": "Why give feedback?"
          },
          "choices": {
            "nl": [
              "Helpt de speler",
              "Maakt wifi kapot",
              "Wist bestanden"
            ],
            "en": [
              "Helps the player",
              "Breaks wifi",
              "Deletes files"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hoger/lager is vriendelijk.",
            "en": "Higher/lower is friendly."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Is dit een spel-idee?",
            "en": "Is this a game idea?"
          },
          "choices": {
            "nl": [
              "Ja, klein en leuk",
              "Nee, verboden",
              "Alleen voor exams"
            ],
            "en": [
              "Yes, small and fun",
              "No, banned",
              "Only for exams"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Kleine spellen leren veel.",
            "en": "Small games teach a lot."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print bij gok==geheim?",
            "en": "What to print when guess==secret?"
          },
          "choices": {
            "nl": [
              "goed",
              "hoger",
              "lager"
            ],
            "en": [
              "good",
              "higher",
              "lower"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Bij gelijk juichen we rustig.",
            "en": "When equal we cheer calmly."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Tekenen met tekst",
        "en": "Drawing with text"
      },
      "minutes": 9,
      "goals": {
        "nl": [
          "Je tekent met *",
          "Je gebruikt een loop",
          "Je maakt een vorm"
        ],
        "en": [
          "You draw with *",
          "You use a loop",
          "You make a shape"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "Tekens kunnen een plaatje maken.",
              "en": "Characters can make a picture."
            },
            "code": "print(\"***\")\nprint(\"* *\")\nprint(\"***\")"
          },
          {
            "say": {
              "nl": "Met een loop bouw je rijen.",
              "en": "With a loop you build rows."
            },
            "code": "for i in range(1, 4):\n    print(\"*\" * i)"
          },
          {
            "say": {
              "nl": "Dit is text-drawing. Geen echte turtle nodig.",
              "en": "This is text drawing. No real turtle needed."
            },
            "code": "print(\" /\\\\\")\nprint(\"/  \\\\\")\nprint(\"----\")"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Laat eerst een vierkant zien, dan een driehoek.",
            "en": "Show a square first, then a triangle."
          },
          "mistakes": {
            "nl": "Verkeerde quotes. * buiten print. range te groot.",
            "en": "Wrong quotes. * outside print. range too big."
          },
          "breakMoment": {
            "nl": "Kinderen mogen hun tekening aan buur laten zien.",
            "en": "Kids may show their drawing to a neighbor."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Maak een driehoek",
            "en": "Make a triangle"
          },
          "body": {
            "nl": "Print * dan ** dan ***.",
            "en": "Print * then ** then ***."
          },
          "starter": "for i in range(1, 4):\n    print(\"*\" * i)",
          "expected": "*\n**\n***",
          "hints": {
            "nl": [
              "range(1, 4)",
              "\"*\" * i",
              "print in de loop"
            ],
            "en": [
              "range(1, 4)",
              "\"*\" * i",
              "print in the loop"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "flower",
        "text": {
          "nl": "Je tekent met code!",
          "en": "You draw with code!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Print een rij van 5 sterren.",
          "en": "Print a row of 5 stars."
        },
        "starter": "print(\"*\" * 5)",
        "expected": "*****"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat is text-drawing?",
            "en": "What is text drawing?"
          },
          "choices": {
            "nl": [
              "Vormen maken met tekens",
              "Schilderen met verf",
              "Foto's bewerken"
            ],
            "en": [
              "Make shapes with characters",
              "Paint with paint",
              "Edit photos"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "We printen tekens als plaatje.",
            "en": "We print characters as a picture."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet \"*\" * 3?",
            "en": "What does \"*\" * 3 do?"
          },
          "choices": {
            "nl": [
              "***",
              "*3",
              "fout"
            ],
            "en": [
              "***",
              "*3",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "* herhaalt de tekst.",
            "en": "* repeats the text."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom een loop voor rijen?",
            "en": "Why a loop for rows?"
          },
          "choices": {
            "nl": [
              "Elke rij een beetje anders",
              "Loops tekenen automatisch wifi",
              "Print mag niet"
            ],
            "en": [
              "Each row a bit different",
              "Loops auto-draw wifi",
              "Print is banned"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "i verandert per ronde.",
            "en": "i changes each round."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Hebben we turtle nodig?",
            "en": "Do we need turtle?"
          },
          "choices": {
            "nl": [
              "Nee, tekst kan ook",
              "Ja, altijd",
              "Alleen met USB"
            ],
            "en": [
              "No, text works too",
              "Yes, always",
              "Only with USB"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Text-drawing is genoeg hier.",
            "en": "Text drawing is enough here."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print range(1,3) met *?",
            "en": "What does range(1,3) print with *?"
          },
          "choices": {
            "nl": [
              "*\n**",
              "***",
              "niets"
            ],
            "en": [
              "*\n**",
              "***",
              "nothing"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "1 en 2, dus twee rijen.",
            "en": "1 and 2, so two rows."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welk teken gebruiken we vaak?",
            "en": "Which character do we often use?"
          },
          "choices": {
            "nl": [
              "*",
              "#",
              "@"
            ],
            "en": [
              "*",
              "#",
              "@"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "* is makkelijk te zien.",
            "en": "* is easy to see."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini-spel: schatzoeken",
        "en": "Mini-game: treasure hunt"
      },
      "minutes": 10,
      "goals": {
        "nl": [
          "Je combineert variabelen",
          "Je gebruikt if",
          "Je maakt een klein einde"
        ],
        "en": [
          "You combine variables",
          "You use if",
          "You make a small ending"
        ]
      },
      "demo": {
        "steps": [
          {
            "say": {
              "nl": "De schat zit op plek 3.",
              "en": "The treasure is at spot 3."
            },
            "code": "schat = 3\nkeuze = 3"
          },
          {
            "say": {
              "nl": "Goede keuze? Dan juichen we.",
              "en": "Good choice? Then we cheer."
            },
            "code": "schat = 3\nkeuze = 3\nif keuze == schat:\n    print(\"gevonden!\")"
          },
          {
            "say": {
              "nl": "Mis? Probeer opnieuw zonder stress.",
              "en": "Miss? Try again without stress."
            },
            "code": "schat = 3\nkeuze = 1\nif keuze != schat:\n    print(\"nog niet\")"
          }
        ],
        "teacher": {
          "say": {
            "nl": "Vier het eindspel. Geen winnaarsbord. Iedereen een sticker.",
            "en": "Celebrate the finale. No leaderboard. Everyone a sticker."
          },
          "mistakes": {
            "nl": "Vergeten != of ==. Te lange code. Haast.",
            "en": "Forgot != or ==. Code too long. Rushing."
          },
          "breakMoment": {
            "nl": "Einde: rustige sticker-ronde en water.",
            "en": "End: calm sticker round and water."
          }
        }
      },
      "doSteps": [
        {
          "title": {
            "nl": "Vind de schat",
            "en": "Find the treasure"
          },
          "body": {
            "nl": "Als keuze gelijk is aan schat, print gevonden!",
            "en": "If choice equals treasure, print found!"
          },
          "starter": "schat = 2\nkeuze = 2\nif keuze == schat:\n    print(\"gevonden!\")",
          "expected": "gevonden!",
          "hints": {
            "nl": [
              "if keuze == schat:",
              "print gevonden!",
              "Kijk naar les 6"
            ],
            "en": [
              "if choice == treasure:",
              "print found!",
              "Look at lesson 6"
            ]
          }
        }
      ],
      "reward": {
        "sticker": "tree",
        "text": {
          "nl": "Je bent klaar met Junior Python!",
          "en": "You finished Junior Python!"
        }
      },
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Bouw het mini-spel: bij juiste keuze print gevonden!",
          "en": "Build the mini-game: on correct choice print found!"
        },
        "starter": "schat = 5\nkeuze = 5\nif keuze == schat:\n    print(\"gevonden!\")",
        "expected": "gevonden!"
      },
      "quiz": [
        {
          "type": "mc",
          "q": {
            "nl": "Wat combineer je in dit spel?",
            "en": "What do you combine in this game?"
          },
          "choices": {
            "nl": [
              "variabelen en if",
              "alleen wifi",
              "alleen emojis"
            ],
            "en": [
              "variables and if",
              "only wifi",
              "only emojis"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Doosjes + keuze = spel.",
            "en": "Boxes + choice = game."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat print je bij succes?",
            "en": "What do you print on success?"
          },
          "choices": {
            "nl": [
              "gevonden!",
              "fout!",
              "stop"
            ],
            "en": [
              "found!",
              "error!",
              "stop"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Vriendelijke feedback.",
            "en": "Friendly feedback."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Mag je opnieuw proberen?",
            "en": "May you try again?"
          },
          "choices": {
            "nl": [
              "Ja, altijd",
              "Nee, een keer",
              "Alleen met timer"
            ],
            "en": [
              "Yes, always",
              "No, once",
              "Only with a timer"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Geen tijdsdruk.",
            "en": "No time pressure."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Waarom geen ranglijst?",
            "en": "Why no leaderboard?"
          },
          "choices": {
            "nl": [
              "Iedereen leert op eigen tempo",
              "Omdat print kapot is",
              "Omdat Python dat eist"
            ],
            "en": [
              "Everyone learns at their own pace",
              "Because print is broken",
              "Because Python requires it"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Vergelijken is niet nodig.",
            "en": "Comparing is not needed."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke les-ideeën zitten hierin?",
            "en": "Which lesson ideas are in here?"
          },
          "choices": {
            "nl": [
              "print, variabelen, if",
              "alleen SQL",
              "alleen HTML"
            ],
            "en": [
              "print, variables, if",
              "only SQL",
              "only HTML"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Alles komt samen.",
            "en": "Everything comes together."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat is een goed einde?",
            "en": "What is a good ending?"
          },
          "choices": {
            "nl": [
              "Rustige sticker en klaar",
              "Hard schreeuwen",
              "Andermans score wissen"
            ],
            "en": [
              "Calm sticker and done",
              "Yell loudly",
              "Erase someone else's score"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Kalm afronden helpt.",
            "en": "Finishing calmly helps."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "!= betekent?",
            "en": "!= means?"
          },
          "choices": {
            "nl": [
              "niet gelijk",
              "wel gelijk",
              "groter"
            ],
            "en": [
              "not equal",
              "equal",
              "greater"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "!= is ongelijk.",
            "en": "!= is not equal."
          },
          "hints": {
            "nl": [
              "Kijk nog eens naar de les.",
              "Denk aan het voorbeeld.",
              "De les toont het juiste woord."
            ],
            "en": [
              "Look at the lesson again.",
              "Think about the example.",
              "The lesson shows the right word."
            ]
          }
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": 1,
      "title": {
        "nl": "Zeg hallo",
        "en": "Say hello"
      },
      "instructions": {
        "nl": "Print Hallo Junior.",
        "en": "Print Hello Junior."
      },
      "lang": "python",
      "starter": "print(\"Hallo Junior\")",
      "expected": "Hallo Junior"
    },
    {
      "id": 2,
      "title": {
        "nl": "Sterrenrij",
        "en": "Star row"
      },
      "instructions": {
        "nl": "Print ***** met * en 5.",
        "en": "Print ***** using * and 5."
      },
      "lang": "python",
      "starter": "print(\"*\" * 5)",
      "expected": "*****"
    }
  ],
  "exam": [
    {
      "type": "mc",
      "q": {
        "nl": "Wat doet print?",
        "en": "What does print do?"
      },
      "choices": {
        "nl": [
          "Tekst op het scherm zetten",
          "De computer uitzetten",
          "Een bestand wissen"
        ],
        "en": [
          "Show text on the screen",
          "Turn the computer off",
          "Delete a file"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "print toont tekst.",
        "en": "print shows text."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 1
    },
    {
      "type": "mc",
      "q": {
        "nl": "Welke regel is goed?",
        "en": "Which line is correct?"
      },
      "choices": {
        "nl": [
          "print(\"hoi\")",
          "print hoi",
          "Print(hoi)"
        ],
        "en": [
          "print(\"hi\")",
          "print hi",
          "Print(hi)"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Kleine letters en aanhalingstekens.",
        "en": "Lowercase and quotes."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 2
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat is een variabele?",
        "en": "What is a variable?"
      },
      "choices": {
        "nl": [
          "Een doosje met een naam",
          "Een virus",
          "Een muis"
        ],
        "en": [
          "A box with a name",
          "A virus",
          "A mouse"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Je bewaart iets onder een naam.",
        "en": "You store something under a name."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 11
    },
    {
      "type": "mc",
      "q": {
        "nl": "Welke regel maakt een doosje?",
        "en": "Which line makes a box?"
      },
      "choices": {
        "nl": [
          "kleur = \"blauw\"",
          "print(\"blauw\")",
          "kleur blauw"
        ],
        "en": [
          "color = \"blue\"",
          "print(\"blue\")",
          "color blue"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Naam = waarde.",
        "en": "Name = value."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 12
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat doet input?",
        "en": "What does input do?"
      },
      "choices": {
        "nl": [
          "Iets vragen aan jou",
          "De wifi uitzetten",
          "Een foto maken"
        ],
        "en": [
          "Ask you something",
          "Turn wifi off",
          "Take a photo"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "input wacht op een antwoord.",
        "en": "input waits for an answer."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "Waarom oefenen we met vaste tekst?",
        "en": "Why practice with fixed text?"
      },
      "choices": {
        "nl": [
          "Makkelijker en rustig",
          "Omdat print kapot is",
          "Omdat Python geen tekst mag"
        ],
        "en": [
          "Easier and calm",
          "Because print is broken",
          "Because Python bans text"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Eerst rustig, later echt vragen.",
        "en": "Calm first, real questions later."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 22
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat betekent if?",
        "en": "What does if mean?"
      },
      "choices": {
        "nl": [
          "Als dit waar is",
          "Altijd stoppen",
          "Een virus starten"
        ],
        "en": [
          "If this is true",
          "Always stop",
          "Start a virus"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "if kiest een pad.",
        "en": "if picks a path."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 31
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat hoort na if?",
        "en": "What belongs after if?"
      },
      "choices": {
        "nl": [
          "Een :",
          "Een #",
          "Een ?"
        ],
        "en": [
          "A :",
          "A #",
          "A ?"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "In Python komt : na if.",
        "en": "In Python : comes after if."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 32
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat doet een loop?",
        "en": "What does a loop do?"
      },
      "choices": {
        "nl": [
          "Iets herhalen",
          "De batterij legen",
          "Een foto opslaan"
        ],
        "en": [
          "Repeat something",
          "Drain the battery",
          "Save a photo"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Loops herhalen code.",
        "en": "Loops repeat code."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat is range(3)?",
        "en": "What is range(3)?"
      },
      "choices": {
        "nl": [
          "0, 1 en 2",
          "1, 2 en 3",
          "Alleen 3"
        ],
        "en": [
          "0, 1 and 2",
          "1, 2 and 3",
          "Only 3"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "range(3) start bij 0.",
        "en": "range(3) starts at 0."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 42
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat is geheim in dit spel?",
        "en": "What is secret in this game?"
      },
      "choices": {
        "nl": [
          "Het juiste getal",
          "Een wachtwoord van school",
          "Een virus"
        ],
        "en": [
          "The right number",
          "A school password",
          "A virus"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "geheim is het doelgetal.",
        "en": "secret is the target number."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 51
    },
    {
      "type": "mc",
      "q": {
        "nl": "gok < geheim betekent?",
        "en": "guess < secret means?"
      },
      "choices": {
        "nl": [
          "Te laag, probeer hoger",
          "Te hoog",
          "Gelijk"
        ],
        "en": [
          "Too low, try higher",
          "Too high",
          "Equal"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Kleiner betekent te laag.",
        "en": "Smaller means too low."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 52
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat is text-drawing?",
        "en": "What is text drawing?"
      },
      "choices": {
        "nl": [
          "Vormen maken met tekens",
          "Schilderen met verf",
          "Foto's bewerken"
        ],
        "en": [
          "Make shapes with characters",
          "Paint with paint",
          "Edit photos"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "We printen tekens als plaatje.",
        "en": "We print characters as a picture."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 61
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat doet \"*\" * 3?",
        "en": "What does \"*\" * 3 do?"
      },
      "choices": {
        "nl": [
          "***",
          "*3",
          "fout"
        ],
        "en": [
          "***",
          "*3",
          "error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "* herhaalt de tekst.",
        "en": "* repeats the text."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 62
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat combineer je in dit spel?",
        "en": "What do you combine in this game?"
      },
      "choices": {
        "nl": [
          "variabelen en if",
          "alleen wifi",
          "alleen emojis"
        ],
        "en": [
          "variables and if",
          "only wifi",
          "only emojis"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Doosjes + keuze = spel.",
        "en": "Boxes + choice = game."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 71
    },
    {
      "type": "mc",
      "q": {
        "nl": "Wat print je bij succes?",
        "en": "What do you print on success?"
      },
      "choices": {
        "nl": [
          "gevonden!",
          "fout!",
          "stop"
        ],
        "en": [
          "found!",
          "error!",
          "stop"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Vriendelijke feedback.",
        "en": "Friendly feedback."
      },
      "hints": {
        "nl": [
          "Kijk nog eens naar de les.",
          "Denk aan het voorbeeld.",
          "De les toont het juiste woord."
        ],
        "en": [
          "Look at the lesson again.",
          "Think about the example.",
          "The lesson shows the right word."
        ]
      },
      "id": 72
    }
  ]
};
})(window);
