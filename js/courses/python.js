(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.python = {
  "id": "python",
  "title": {
    "nl": "Python voor beginners",
    "en": "Python for beginners"
  },
  "intro": {
    "nl": "Scripts, types, lijsten en nette foutafhandeling.",
    "en": "Scripts, types, lists and clean error handling."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Python",
        "en": "Your first Python"
      },
      "body": {
        "nl": "<p>Python is makkelijk te lezen. Print met <code class=\"inline\">print</code>.</p><pre>print(\"Hallo CodeCrib\")</pre><div class=\"callout\"><strong>Tip:</strong> Geen puntkomma nodig. Indentatie telt.</div>",
        "en": "<p>Python is easy to read. Print with <code class=\"inline\">print</code>.</p><pre>print(\"Hello CodeCrib\")</pre><div class=\"callout\"><strong>Tip:</strong> No semicolons needed. Indentation matters.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Hoe print je tekst?",
            "en": "How do you print text?"
          },
          "choices": {
            "nl": [
              "Console.WriteLine",
              "print",
              "echo",
              "trace"
            ],
            "en": [
              "Console.WriteLine",
              "print",
              "echo",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "print is de standaard.",
            "en": "print is the standard."
          }
        },
        {
          "q": {
            "nl": "Is puntkomma verplicht?",
            "en": "Are semicolons required?"
          },
          "choices": {
            "nl": [
              "ja",
              "nee",
              "alleen in loops",
              "alleen in classes"
            ],
            "en": [
              "yes",
              "no",
              "only in loops",
              "only in classes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Optioneel, niet nodig.",
            "en": "Optional, not required."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ],
      "exercise": {
        "lang": "python",
        "instructions": {
          "nl": "Print Hallo CodeCrib",
          "en": "Print Hallo CodeCrib"
        },
        "starter": "print(\"Hallo CodeCrib\")\n",
        "tests": [
          {
            "type": "equals",
            "value": "Hallo CodeCrib"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": {
        "nl": "Variabelen en types",
        "en": "Variables and types"
      },
      "body": {
        "nl": "<p>Types zijn dynamisch, maar bestaan wel: <code class=\"inline\">int</code>, <code class=\"inline\">float</code>, <code class=\"inline\">str</code>, <code class=\"inline\">bool</code>.</p><pre>score = 10\nratio = 0.5\nnaam = \"Justy\"\nklaar = True</pre><div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">True</code>/<code class=\"inline\">False</code> met hoofdletter. En <code class=\"inline\">/</code> geeft altijd float (3/2 is 1.5). Gebruik <code class=\"inline\">//</code> voor integer deling.</div>",
        "en": "<p>Types are dynamic but real: <code class=\"inline\">int</code>, <code class=\"inline\">float</code>, <code class=\"inline\">str</code>, <code class=\"inline\">bool</code>.</p><pre>score = 10\nratio = 0.5\nname = \"Justy\"\ndone = True</pre><div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">True</code>/<code class=\"inline\">False</code> are capitalized. <code class=\"inline\">/</code> always yields float. Use <code class=\"inline\">//</code> for floor division.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat is 7 / 2 in Python 3?",
            "en": "What is 7 / 2 in Python 3?"
          },
          "choices": {
            "nl": [
              "3",
              "3.5",
              "4",
              "error"
            ],
            "en": [
              "3",
              "3.5",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "/ geeft float.",
            "en": "/ yields float."
          }
        },
        {
          "q": {
            "nl": "Welke boolean is juist?",
            "en": "Which boolean is correct?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "True with capital T."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": {
        "nl": "Logica met if",
        "en": "Logic with if"
      },
      "body": {
        "nl": "<p>Gebruik <code class=\"inline\">if</code>/<code class=\"inline\">elif</code>/<code class=\"inline\">else</code> en een dubbele punt.</p><pre>x = 5\nif x &gt; 3 and x &lt; 5:\n  print(\"A\")\nelif x &gt;= 5:\n  print(\"B\")\nelse:\n  print(\"C\")</pre>",
        "en": "<p>Use <code class=\"inline\">if</code>/<code class=\"inline\">elif</code>/<code class=\"inline\">else</code> and a colon.</p><pre>x = 5\nif x &gt; 3 and x &lt; 5:\n  print(\"A\")\nelif x &gt;= 5:\n  print(\"B\")\nelse:\n  print(\"C\")</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Met x=5 print het voorbeeld?",
            "en": "With x=5 the sample prints?"
          },
          "choices": {
            "nl": [
              "A",
              "B",
              "C",
              "AB"
            ],
            "en": [
              "A",
              "B",
              "C",
              "AB"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "elif x>=5.",
            "en": "elif x>=5."
          }
        },
        {
          "q": {
            "nl": "Python gebruikt:",
            "en": "Python uses:"
          },
          "choices": {
            "nl": [
              "else if",
              "elif",
              "elseif",
              "elsif"
            ],
            "en": [
              "else if",
              "elif",
              "elseif",
              "elsif"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "elif.",
            "en": "elif."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": {
        "nl": "Loops",
        "en": "Loops"
      },
      "body": {
        "nl": "<p><code class=\"inline\">for</code> over ranges of collecties. <code class=\"inline\">while</code> met een conditie.</p><pre>for i in range(0, 10, 3):\n  print(i)  # 0,3,6,9</pre>",
        "en": "<p><code class=\"inline\">for</code> over ranges or collections. <code class=\"inline\">while</code> with a condition.</p><pre>for i in range(0, 10, 3):\n  print(i)  # 0,3,6,9</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "range(0,10,3) levert hoeveel getallen?",
            "en": "range(0,10,3) yields how many numbers?"
          },
          "choices": {
            "nl": [
              "3",
              "4",
              "10",
              "9"
            ],
            "en": [
              "3",
              "4",
              "10",
              "9"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "0,3,6,9.",
            "en": "0,3,6,9."
          }
        },
        {
          "q": {
            "nl": "range(3) is?",
            "en": "range(3) is?"
          },
          "choices": {
            "nl": [
              "1,2,3",
              "0,1,2",
              "0,1,2,3",
              "3"
            ],
            "en": [
              "1,2,3",
              "0,1,2",
              "0,1,2,3",
              "3"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "0 t/m 2.",
            "en": "0 through 2."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Lijsten en dicts",
        "en": "Lists and dicts"
      },
      "body": {
        "nl": "<p>Lijsten: <code class=\"inline\">[1,2,3]</code>. Dicts: <code class=\"inline\">{\"a\": 1}</code>.</p><pre>nums = [10, 20, 30]\nprint(nums[0])\nplayer = {\"hp\": 100, \"name\": \"Justy\"}</pre>",
        "en": "<p>Lists: <code class=\"inline\">[1,2,3]</code>. Dicts: <code class=\"inline\">{\"a\": 1}</code>.</p><pre>nums = [10, 20, 30]\nprint(nums[0])\nplayer = {\"hp\": 100, \"name\": \"Justy\"}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "[10,20,30][1] is?",
            "en": "[10,20,30][1] is?"
          },
          "choices": {
            "nl": [
              "10",
              "20",
              "30",
              "error"
            ],
            "en": [
              "10",
              "20",
              "30",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Index 1.",
            "en": "Index 1."
          }
        },
        {
          "q": {
            "nl": "player['hp'] met hp:100?",
            "en": "player['hp'] with hp:100?"
          },
          "choices": {
            "nl": [
              "'hp'",
              "100",
              "error",
              "None"
            ],
            "en": [
              "'hp'",
              "100",
              "error",
              "None"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Dict lookup.",
            "en": "Dict lookup."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Functies",
        "en": "Functions"
      },
      "body": {
        "nl": "<p>Definieer met <code class=\"inline\">def</code>.</p><pre>def add(a, b):\n  return a + b\nprint(add(2, 3))</pre>",
        "en": "<p>Define with <code class=\"inline\">def</code>.</p><pre>def add(a, b):\n  return a + b\nprint(add(2, 3))</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Keyword voor een functie?",
            "en": "Keyword for a function?"
          },
          "choices": {
            "nl": [
              "function",
              "def",
              "fn",
              "method"
            ],
            "en": [
              "function",
              "def",
              "fn",
              "method"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "q": {
            "nl": "add(2,3) returnt?",
            "en": "add(2,3) returns?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "None",
              "error"
            ],
            "en": [
              "23",
              "5",
              "None",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2+3.",
            "en": "2+3."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Fouten en try/except",
        "en": "Errors and try/except"
      },
      "body": {
        "nl": "<p>Vang fouten met <code class=\"inline\">try</code>/<code class=\"inline\">except</code>.</p><pre>try:\n  n = int(\"abc\")\nexcept ValueError:\n  print(\"geen getal\")</pre>",
        "en": "<p>Catch errors with <code class=\"inline\">try</code>/<code class=\"inline\">except</code>.</p><pre>try:\n  n = int(\"abc\")\nexcept ValueError:\n  print(\"not a number\")</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "int('abc') gooit meestal:",
            "en": "int('abc') usually raises:"
          },
          "choices": {
            "nl": [
              "TypeError",
              "ValueError",
              "SyntaxError",
              "geen"
            ],
            "en": [
              "TypeError",
              "ValueError",
              "SyntaxError",
              "none"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "ValueError.",
            "en": "ValueError."
          }
        },
        {
          "q": {
            "nl": "Python catch keyword?",
            "en": "Python catch keyword?"
          },
          "choices": {
            "nl": [
              "catch",
              "except",
              "rescue",
              "handle"
            ],
            "en": [
              "catch",
              "except",
              "rescue",
              "handle"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "except.",
            "en": "except."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Modules en pip-smaak",
        "en": "Modules and pip flavor"
      },
      "body": {
        "nl": "<p>Importeer code: <code class=\"inline\">import math</code> of <code class=\"inline\">from math import sqrt</code>.</p><pre>import math\nprint(math.floor(3.9))</pre>",
        "en": "<p>Import code: <code class=\"inline\">import math</code> or <code class=\"inline\">from math import sqrt</code>.</p><pre>import math\nprint(math.floor(3.9))</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "math.floor(3.9) is?",
            "en": "math.floor(3.9) is?"
          },
          "choices": {
            "nl": [
              "4",
              "3",
              "3.9",
              "error"
            ],
            "en": [
              "4",
              "3",
              "3.9",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Naar beneden.",
            "en": "Rounds down."
          }
        },
        {
          "q": {
            "nl": "Import keyword?",
            "en": "Import keyword?"
          },
          "choices": {
            "nl": [
              "include",
              "import",
              "using",
              "require"
            ],
            "en": [
              "include",
              "import",
              "using",
              "require"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "import.",
            "en": "import."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Mini project: score tracker",
        "en": "Mini project: score tracker"
      },
      "body": {
        "nl": "<p>Bouw een klein scriptje:</p><pre>scores = []\nwhile True:\n  s = input(\"score (q=stop): \")\n  if s == \"q\":\n    break\n  scores.append(int(s))\nprint(\"max\", max(scores) if scores else 0)</pre><p>Je oefent loops, lijsten, input en een simpele exit.</p>",
        "en": "<p>Build a tiny script:</p><pre>scores = []\nwhile True:\n  s = input(\"score (q=stop): \")\n  if s == \"q\":\n    break\n  scores.append(int(s))\nprint(\"max\", max(scores) if scores else 0)</pre><p>You practice loops, lists, input and a simple exit.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Waarom break in de while?",
            "en": "Why break in the while?"
          },
          "choices": {
            "nl": [
              "voor max",
              "om te stoppen op q",
              "verplicht in Python",
              "sorteert de lijst"
            ],
            "en": [
              "for max",
              "to stop on q",
              "required in Python",
              "sorts the list"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Verlaat de loop.",
            "en": "Leaves the loop."
          }
        },
        {
          "q": {
            "nl": "max([]) zonder check?",
            "en": "max([]) without a guard?"
          },
          "choices": {
            "nl": [
              "0",
              "error",
              "None",
              "''"
            ],
            "en": [
              "0",
              "error",
              "None",
              "''"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Lege sequence error.",
            "en": "Empty sequence error."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "Wat print print(2*3)?",
            "en": "What does print(2*3) print?"
          },
          "choices": {
            "nl": [
              "5",
              "6",
              "23",
              "error"
            ],
            "en": [
              "5",
              "6",
              "23",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2*3=6.",
            "en": "2*3=6."
          },
          "code": "print(2*3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "Welke is True?",
            "en": "Which is True?"
          },
          "choices": {
            "nl": [
              "true",
              "True",
              "TRUE",
              "yes"
            ],
            "en": [
              "true",
              "True",
              "TRUE",
              "yes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "True met T.",
            "en": "Capital T."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword voor functie?",
            "en": "Keyword for a function?"
          },
          "fill": [
            "def"
          ],
          "why": {
            "nl": "def.",
            "en": "def."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "7//2?",
            "en": "7//2?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor division.",
            "en": "Floor division."
          },
          "code": "print(7//2)"
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot the bug: prnt('hi')",
            "en": "Spot the bug: prnt('hi')"
          },
          "choices": {
            "nl": [
              "geen bug",
              "prnt typo, moet print",
              "hi is fout",
              "quotes"
            ],
            "en": [
              "no bug",
              "prnt typo, need print",
              "hi wrong",
              "quotes"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "NameError.",
            "en": "NameError."
          },
          "code": "prnt('hi')"
        },
        {
          "type": "print",
          "q": {
            "nl": "len([1,2,3])?",
            "en": "len([1,2,3])?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "error"
            ],
            "en": [
              "2",
              "3",
              "4",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "3 items.",
            "en": "3 items."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Boolean False spelling?",
            "en": "Boolean False spelling?"
          },
          "fill": [
            "False"
          ],
          "why": {
            "nl": "False.",
            "en": "False."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "elif betekent?",
            "en": "elif means?"
          },
          "choices": {
            "nl": [
              "else if",
              "end if",
              "error if",
              "early if"
            ],
            "en": [
              "else if",
              "end if",
              "error if",
              "early if"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Wat doet break?",
            "en": "What does break do?"
          },
          "choices": {
            "nl": [
              "stopt loop",
              "start loop",
              "print",
              "import"
            ],
            "en": [
              "stops loop",
              "starts loop",
              "print",
              "import"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Break.",
            "en": "Break."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'ab'+'c'?",
            "en": "'ab'+'c'?"
          },
          "choices": {
            "nl": [
              "abc",
              "ab c",
              "error",
              "a"
            ],
            "en": [
              "abc",
              "ab c",
              "error",
              "a"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "print type?",
        "en": "print is a?"
      },
      "choices": {
        "nl": [
          "statement only",
          "functie/call",
          "class",
          "keyword only"
        ],
        "en": [
          "statement only",
          "function/call",
          "class",
          "keyword only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Je roept print() aan.",
        "en": "You call print()."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "7 // 2 =",
        "en": "7 // 2 ="
      },
      "choices": {
        "nl": [
          "3.5",
          "3",
          "4",
          "error"
        ],
        "en": [
          "3.5",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Floor division.",
        "en": "Floor division."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "len('abc')",
        "en": "len('abc')"
      },
      "choices": {
        "nl": [
          "2",
          "3",
          "4",
          "error"
        ],
        "en": [
          "2",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "3 tekens.",
        "en": "3 chars."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "'Ab'.lower()",
        "en": "'Ab'.lower()"
      },
      "choices": {
        "nl": [
          "AB",
          "ab",
          "Ab",
          "error"
        ],
        "en": [
          "AB",
          "ab",
          "Ab",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alles lower.",
        "en": "All lower."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "None is?",
        "en": "None is?"
      },
      "choices": {
        "nl": [
          "0",
          "lege string",
          "null-achtige singleton",
          "False alleen"
        ],
        "en": [
          "0",
          "empty string",
          "null-like singleton",
          "False only"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "None.",
        "en": "None."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "list append",
        "en": "list append"
      },
      "choices": {
        "nl": [
          "push",
          "append",
          "add",
          "insertOnly"
        ],
        "en": [
          "push",
          "append",
          "add",
          "insertOnly"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "append.",
        "en": "append."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "dict key error?",
        "en": "missing dict key?"
      },
      "choices": {
        "nl": [
          "None",
          "KeyError",
          "0",
          "IndexError"
        ],
        "en": [
          "None",
          "KeyError",
          "0",
          "IndexError"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "KeyError.",
        "en": "KeyError."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "f-string?",
        "en": "f-string?"
      },
      "choices": {
        "nl": [
          "f'Hi {n}'",
          "$'Hi {n}'",
          "`Hi ${n}`",
          "Hi %n"
        ],
        "en": [
          "f'Hi {n}'",
          "$'Hi {n}'",
          "`Hi ${n}`",
          "Hi %n"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "f prefix.",
        "en": "f prefix."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "and/or keywords?",
        "en": "and/or keywords?"
      },
      "choices": {
        "nl": [
          "&& ||",
          "and or",
          "AND OR",
          "& | only"
        ],
        "en": [
          "&& ||",
          "and or",
          "AND OR",
          "& | only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Woorden.",
        "en": "Words."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "for x in xs",
        "en": "for x in xs"
      },
      "choices": {
        "nl": [
          "index verplicht",
          "itereert elementen",
          "werkt niet",
          "zelfde als while False"
        ],
        "en": [
          "index required",
          "iterates elements",
          "never works",
          "same as while False"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Elementen.",
        "en": "Elements."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "def zonder return",
        "en": "def without return"
      },
      "choices": {
        "nl": [
          "error",
          "returnt None",
          "returnt 0",
          "returnt False"
        ],
        "en": [
          "error",
          "returns None",
          "returns 0",
          "returns False"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "None.",
        "en": "None."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "except Exception",
        "en": "except Exception"
      },
      "choices": {
        "nl": [
          "vangt veel runtime fouten",
          "fix syntax",
          "alleen imports",
          "stopt Python"
        ],
        "en": [
          "catches many runtime errors",
          "fixes syntax",
          "imports only",
          "stops Python"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Breed net.",
        "en": "Broad net."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "import math as m",
        "en": "import math as m"
      },
      "choices": {
        "nl": [
          "verboden",
          "alias m",
          "hernoemt file",
          "pip install"
        ],
        "en": [
          "forbidden",
          "alias m",
          "renames file",
          "pip install"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alias.",
        "en": "Alias."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "[1,2]+[3]",
        "en": "[1,2]+[3]"
      },
      "choices": {
        "nl": [
          "[1,2,3]",
          "[4,5]",
          "error",
          "[1,2][3]"
        ],
        "en": [
          "[1,2,3]",
          "[4,5]",
          "error",
          "[1,2][3]"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Concat.",
        "en": "Concat."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "bool('')",
        "en": "bool('')"
      },
      "choices": {
        "nl": [
          "True",
          "False",
          "error",
          "None"
        ],
        "en": [
          "True",
          "False",
          "error",
          "None"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Lege string falsy.",
        "en": "Empty string falsy."
      }
    },
    {
      "id": 16,
      "q": {
        "nl": "is vs ==",
        "en": "is vs =="
      },
      "choices": {
        "nl": [
          "altijd gelijk",
          "is = identiteit, == waarde",
          "alleen voor ints",
          "deprecated"
        ],
        "en": [
          "always same",
          "is = identity, == value",
          "ints only",
          "deprecated"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Identiteit vs waarde.",
        "en": "Identity vs value."
      }
    },
    {
      "id": 17,
      "q": {
        "nl": "with open(...) as f",
        "en": "with open(...) as f"
      },
      "choices": {
        "nl": [
          "sluit file netjes",
          "alleen Windows",
          "compileert C",
          "start thread"
        ],
        "en": [
          "closes file cleanly",
          "Windows only",
          "compiles C",
          "starts thread"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Context manager.",
        "en": "Context manager."
      }
    },
    {
      "id": 18,
      "q": {
        "nl": "set({1,1,2}) len",
        "en": "set({1,1,2}) len"
      },
      "choices": {
        "nl": [
          "3",
          "2",
          "1",
          "error"
        ],
        "en": [
          "3",
          "2",
          "1",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Unieke waarden.",
        "en": "Unique values."
      }
    },
    {
      "id": 19,
      "q": {
        "nl": "% modulo",
        "en": "% modulo"
      },
      "choices": {
        "nl": [
          "percent",
          "rest bij deling",
          "string only",
          "power"
        ],
        "en": [
          "percent",
          "remainder",
          "string only",
          "power"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Rest.",
        "en": "Remainder."
      }
    },
    {
      "id": 20,
      "q": {
        "nl": "CodeCrib vragen zijn",
        "en": "CodeCrib questions are"
      },
      "choices": {
        "nl": [
          "gelekt",
          "origineel oefenmateriaal",
          "betaald cert",
          "compiler"
        ],
        "en": [
          "leaked",
          "original practice",
          "paid cert",
          "compiler"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Origineel.",
        "en": "Original."
      }
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 1] Wat print print(2*3)?",
        "en": "[Pool 1] What does print(2*3) print?"
      },
      "choices": {
        "nl": [
          "5",
          "6",
          "23",
          "error"
        ],
        "en": [
          "5",
          "6",
          "23",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "2*3=6.",
        "en": "2*3=6."
      },
      "code": "print(2*3)",
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 2] Welke is True?",
        "en": "[Pool 2] Which is True?"
      },
      "choices": {
        "nl": [
          "true",
          "True",
          "TRUE",
          "yes"
        ],
        "en": [
          "true",
          "True",
          "TRUE",
          "yes"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "True met T.",
        "en": "Capital T."
      },
      "id": 22
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 3] Keyword voor functie?",
        "en": "[Pool 3] Keyword for a function?"
      },
      "fill": [
        "def"
      ],
      "why": {
        "nl": "def.",
        "en": "def."
      },
      "id": 23
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 4] 7//2?",
        "en": "[Pool 4] 7//2?"
      },
      "choices": {
        "nl": [
          "3.5",
          "3",
          "4",
          "error"
        ],
        "en": [
          "3.5",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Floor division.",
        "en": "Floor division."
      },
      "code": "print(7//2)",
      "id": 24
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 5] Spot the bug: prnt('hi')",
        "en": "[Pool 5] Spot the bug: prnt('hi')"
      },
      "choices": {
        "nl": [
          "geen bug",
          "prnt typo, moet print",
          "hi is fout",
          "quotes"
        ],
        "en": [
          "no bug",
          "prnt typo, need print",
          "hi wrong",
          "quotes"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "NameError.",
        "en": "NameError."
      },
      "code": "prnt('hi')",
      "id": 25
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 6] len([1,2,3])?",
        "en": "[Pool 6] len([1,2,3])?"
      },
      "choices": {
        "nl": [
          "2",
          "3",
          "4",
          "error"
        ],
        "en": [
          "2",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "3 items.",
        "en": "3 items."
      },
      "id": 26
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 7] Boolean False spelling?",
        "en": "[Pool 7] Boolean False spelling?"
      },
      "fill": [
        "False"
      ],
      "why": {
        "nl": "False.",
        "en": "False."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 8] elif betekent?",
        "en": "[Pool 8] elif means?"
      },
      "choices": {
        "nl": [
          "else if",
          "end if",
          "error if",
          "early if"
        ],
        "en": [
          "else if",
          "end if",
          "error if",
          "early if"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "else if.",
        "en": "else if."
      },
      "id": 28
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 9] Wat doet break?",
        "en": "[Pool 9] What does break do?"
      },
      "choices": {
        "nl": [
          "stopt loop",
          "start loop",
          "print",
          "import"
        ],
        "en": [
          "stops loop",
          "starts loop",
          "print",
          "import"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Break.",
        "en": "Break."
      },
      "id": 29
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 10] 'ab'+'c'?",
        "en": "[Pool 10] 'ab'+'c'?"
      },
      "choices": {
        "nl": [
          "abc",
          "ab c",
          "error",
          "a"
        ],
        "en": [
          "abc",
          "ab c",
          "error",
          "a"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Concat.",
        "en": "Concat."
      },
      "id": 30
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] dict key missing?",
        "en": "[Pool 11] dict key missing?"
      },
      "choices": {
        "nl": [
          "None",
          "KeyError",
          "0",
          "''"
        ],
        "en": [
          "None",
          "KeyError",
          "0",
          "''"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "KeyError.",
        "en": "KeyError."
      },
      "id": 31
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 12] Module laden keyword?",
        "en": "[Pool 12] Module load keyword?"
      },
      "fill": [
        "import"
      ],
      "why": {
        "nl": "import.",
        "en": "import."
      },
      "id": 32
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 13] range(3) waarden?",
        "en": "[Pool 13] range(3) values?"
      },
      "choices": {
        "nl": [
          "1,2,3",
          "0,1,2",
          "0,1,2,3",
          "3"
        ],
        "en": [
          "1,2,3",
          "0,1,2",
          "0,1,2,3",
          "3"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "0..2.",
        "en": "0..2."
      },
      "id": 33
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 14] bool('')?",
        "en": "[Pool 14] bool('')?"
      },
      "choices": {
        "nl": [
          "True",
          "False",
          "error",
          "None"
        ],
        "en": [
          "True",
          "False",
          "error",
          "None"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Empty falsy.",
        "en": "Empty falsy."
      },
      "id": 34
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 15] Wat print print(2*3)?",
        "en": "[Pool 15] What does print(2*3) print?"
      },
      "choices": {
        "nl": [
          "5",
          "6",
          "23",
          "error"
        ],
        "en": [
          "5",
          "6",
          "23",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "2*3=6.",
        "en": "2*3=6."
      },
      "code": "print(2*3)",
      "id": 35
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 16] Welke is True?",
        "en": "[Pool 16] Which is True?"
      },
      "choices": {
        "nl": [
          "true",
          "True",
          "TRUE",
          "yes"
        ],
        "en": [
          "true",
          "True",
          "TRUE",
          "yes"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "True met T.",
        "en": "Capital T."
      },
      "id": 36
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 17] Keyword voor functie?",
        "en": "[Pool 17] Keyword for a function?"
      },
      "fill": [
        "def"
      ],
      "why": {
        "nl": "def.",
        "en": "def."
      },
      "id": 37
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 18] 7//2?",
        "en": "[Pool 18] 7//2?"
      },
      "choices": {
        "nl": [
          "3.5",
          "3",
          "4",
          "error"
        ],
        "en": [
          "3.5",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Floor division.",
        "en": "Floor division."
      },
      "code": "print(7//2)",
      "id": 38
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 19] Spot the bug: prnt('hi')",
        "en": "[Pool 19] Spot the bug: prnt('hi')"
      },
      "choices": {
        "nl": [
          "geen bug",
          "prnt typo, moet print",
          "hi is fout",
          "quotes"
        ],
        "en": [
          "no bug",
          "prnt typo, need print",
          "hi wrong",
          "quotes"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "NameError.",
        "en": "NameError."
      },
      "code": "prnt('hi')",
      "id": 39
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 20] len([1,2,3])?",
        "en": "[Pool 20] len([1,2,3])?"
      },
      "choices": {
        "nl": [
          "2",
          "3",
          "4",
          "error"
        ],
        "en": [
          "2",
          "3",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "3 items.",
        "en": "3 items."
      },
      "id": 40
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 21] Boolean False spelling?",
        "en": "[Pool 21] Boolean False spelling?"
      },
      "fill": [
        "False"
      ],
      "why": {
        "nl": "False.",
        "en": "False."
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 22] elif betekent?",
        "en": "[Pool 22] elif means?"
      },
      "choices": {
        "nl": [
          "else if",
          "end if",
          "error if",
          "early if"
        ],
        "en": [
          "else if",
          "end if",
          "error if",
          "early if"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "else if.",
        "en": "else if."
      },
      "id": 42
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] Wat doet break?",
        "en": "[Pool 23] What does break do?"
      },
      "choices": {
        "nl": [
          "stopt loop",
          "start loop",
          "print",
          "import"
        ],
        "en": [
          "stops loop",
          "starts loop",
          "print",
          "import"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Break.",
        "en": "Break."
      },
      "id": 43
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 24] 'ab'+'c'?",
        "en": "[Pool 24] 'ab'+'c'?"
      },
      "choices": {
        "nl": [
          "abc",
          "ab c",
          "error",
          "a"
        ],
        "en": [
          "abc",
          "ab c",
          "error",
          "a"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Concat.",
        "en": "Concat."
      },
      "id": 44
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] dict key missing?",
        "en": "[Pool 25] dict key missing?"
      },
      "choices": {
        "nl": [
          "None",
          "KeyError",
          "0",
          "''"
        ],
        "en": [
          "None",
          "KeyError",
          "0",
          "''"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "KeyError.",
        "en": "KeyError."
      },
      "id": 45
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] Module laden keyword?",
        "en": "[Pool 26] Module load keyword?"
      },
      "fill": [
        "import"
      ],
      "why": {
        "nl": "import.",
        "en": "import."
      },
      "id": 46
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 27] range(3) waarden?",
        "en": "[Pool 27] range(3) values?"
      },
      "choices": {
        "nl": [
          "1,2,3",
          "0,1,2",
          "0,1,2,3",
          "3"
        ],
        "en": [
          "1,2,3",
          "0,1,2",
          "0,1,2,3",
          "3"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "0..2.",
        "en": "0..2."
      },
      "id": 47
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 28] bool('')?",
        "en": "[Pool 28] bool('')?"
      },
      "choices": {
        "nl": [
          "True",
          "False",
          "error",
          "None"
        ],
        "en": [
          "True",
          "False",
          "error",
          "None"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Empty falsy.",
        "en": "Empty falsy."
      },
      "id": 48
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 29] Wat print print(2*3)?",
        "en": "[Pool 29] What does print(2*3) print?"
      },
      "choices": {
        "nl": [
          "5",
          "6",
          "23",
          "error"
        ],
        "en": [
          "5",
          "6",
          "23",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "2*3=6.",
        "en": "2*3=6."
      },
      "code": "print(2*3)",
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 30] Welke is True?",
        "en": "[Pool 30] Which is True?"
      },
      "choices": {
        "nl": [
          "true",
          "True",
          "TRUE",
          "yes"
        ],
        "en": [
          "true",
          "True",
          "TRUE",
          "yes"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "True met T.",
        "en": "Capital T."
      },
      "id": 50
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Som printen",
        "en": "Print a sum"
      },
      "prompt": {
        "nl": "Print 2+3 (uitkomst 5).",
        "en": "Print 2+3 (result 5)."
      },
      "lang": "python",
      "starter": "print(2 + 3)\n",
      "tests": [
        {
          "type": "equals",
          "value": "5"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "Lijst lengte",
        "en": "List length"
      },
      "prompt": {
        "nl": "Maak nums=[10,20,30] en print len(nums).",
        "en": "Make nums=[10,20,30] and print len(nums)."
      },
      "lang": "python",
      "starter": "nums = [10, 20, 30]\nprint(len(nums))\n",
      "tests": [
        {
          "type": "equals",
          "value": "3"
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
