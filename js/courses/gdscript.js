(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.gdscript = {
  "id": "gdscript",
  "title": {
    "nl": "GDScript (Godot)",
    "en": "GDScript (Godot)"
  },
  "intro": {
    "nl": "Godot scripting, nodes en game-loops.",
    "en": "Godot scripting, nodes and game loops."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Intro GDScript",
        "en": "Intro to GDScript"
      },
      "body": {
        "nl": "<p>GDScript is de scriptingtaal van Godot. Python-achtig, gemaakt voor games.</p><pre>print(\"Hallo CodeCrib\")</pre>",
        "en": "<p>GDScript is Godot's scripting language. Python-like, built for games.</p><pre>print(\"Hello CodeCrib\")</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "GDScript hoort bij?",
            "en": "GDScript belongs to?"
          },
          "choices": {
            "nl": [
              "Godot",
              "Unity",
              "Unreal only",
              "Roblox"
            ],
            "en": [
              "Godot",
              "Unity",
              "Unreal only",
              "Roblox"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Godot.",
            "en": "Godot."
          }
        },
        {
          "q": {
            "nl": "Print?",
            "en": "Print?"
          },
          "choices": {
            "nl": [
              "print",
              "console.log",
              "trace",
              "echo"
            ],
            "en": [
              "print",
              "console.log",
              "trace",
              "echo"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "print.",
            "en": "print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "print",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "print",
              "SELECT",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "SQL",
              "alleen loops",
              "mag"
            ],
            "en": [
              "forbidden",
              "SQL",
              "loops only",
              "allowed"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "import",
              "vergelijking",
              "join"
            ],
            "en": [
              "assign",
              "import",
              "comparison",
              "join"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "kan hangen",
              "efficiënt",
              "SQL",
              "CSS"
            ],
            "en": [
              "can hang",
              "efficient",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "2",
              "-1",
              "0"
            ],
            "en": [
              "1",
              "2",
              "-1",
              "0"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "alleen SQL",
              "alleen CSS",
              "ja"
            ],
            "en": [
              "no",
              "SQL only",
              "CSS only",
              "yes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "negeren",
              "GPU",
              "CSS",
              "try/catch of Result/err"
            ],
            "en": [
              "ignore",
              "GPU",
              "CSS",
              "try/catch or Result/err"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "compile must",
              "mensen",
              "cert"
            ],
            "en": [
              "speed",
              "compile must",
              "humans",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "CSS",
              "waarde",
              "DNS",
              "GPU only"
            ],
            "en": [
              "CSS",
              "a value",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ],
      "exercise": {
        "lang": "gdscript",
        "instructions": {
          "nl": "print Hallo",
          "en": "print Hallo"
        },
        "starter": "print(\"Hallo\")\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "print"
          },
          {
            "type": "code_contains",
            "value": "Hallo"
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
        "nl": "<pre>var score: int = 10\nvar name := \"Justy\"\nconst MAX_HP := 100</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> leidt het type af.</div>",
        "en": "<pre>var score: int = 10\nvar name := \"Justy\"\nconst MAX_HP := 100</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> infers the type.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": ":= doet?",
            "en": " := does?"
          },
          "choices": {
            "nl": [
              "modulo",
              "type inferentie",
              "SQL",
              "pointer"
            ],
            "en": [
              "modulo",
              "type inference",
              "SQL",
              "pointer"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Infer.",
            "en": "Infer."
          }
        },
        {
          "q": {
            "nl": "const?",
            "en": "const?"
          },
          "choices": {
            "nl": [
              "vaste binding",
              "altijd mutable",
              "CSS",
              "nil"
            ],
            "en": [
              "fixed binding",
              "always mutable",
              "CSS",
              "nil"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Constant.",
            "en": "Constant."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "alleen loops",
              "mag",
              "SQL"
            ],
            "en": [
              "forbidden",
              "loops only",
              "allowed",
              "SQL"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "vergelijking",
              "assign",
              "import",
              "join"
            ],
            "en": [
              "comparison",
              "assign",
              "import",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "kan hangen",
              "efficiënt",
              "SQL",
              "CSS"
            ],
            "en": [
              "can hang",
              "efficient",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "2",
              "-1",
              "0"
            ],
            "en": [
              "1",
              "2",
              "-1",
              "0"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "alleen CSS",
              "alleen SQL"
            ],
            "en": [
              "no",
              "yes",
              "CSS only",
              "SQL only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "try/catch of Result/err",
              "negeren",
              "CSS",
              "GPU"
            ],
            "en": [
              "try/catch or Result/err",
              "ignore",
              "CSS",
              "GPU"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "cert",
              "compile must",
              "mensen"
            ],
            "en": [
              "speed",
              "cert",
              "compile must",
              "humans"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "waarde",
              "CSS",
              "DNS",
              "GPU only"
            ],
            "en": [
              "a value",
              "CSS",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": {
        "nl": "Logica",
        "en": "Logic"
      },
      "body": {
        "nl": "<pre>var x = 5\nif x &gt;= 5:\n\tprint(\"B\")\nelse:\n\tprint(\"C\")</pre>",
        "en": "<pre>var x = 5\nif x &gt;= 5:\n\tprint(\"B\")\nelse:\n\tprint(\"C\")</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5?",
            "en": "x=5?"
          },
          "choices": {
            "nl": [
              "beide",
              "C",
              "B",
              "error"
            ],
            "en": [
              "both",
              "C",
              "B",
              "error"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "B.",
            "en": "B."
          }
        },
        {
          "q": {
            "nl": "Indentatie?",
            "en": "Indentation?"
          },
          "choices": {
            "nl": [
              "telt niet",
              "SQL",
              "alleen tabs verboden",
              "belangrijk"
            ],
            "en": [
              "ignored",
              "SQL",
              "tabs forbidden",
              "important"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Matters.",
            "en": "Matters."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "print",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "print",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "alleen loops",
              "mag",
              "SQL"
            ],
            "en": [
              "forbidden",
              "loops only",
              "allowed",
              "SQL"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "vergelijking",
              "assign",
              "import",
              "join"
            ],
            "en": [
              "comparison",
              "assign",
              "import",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "efficiënt",
              "kan hangen",
              "SQL",
              "CSS"
            ],
            "en": [
              "efficient",
              "can hang",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "0",
              "-1",
              "2"
            ],
            "en": [
              "1",
              "0",
              "-1",
              "2"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "ja",
              "nee",
              "alleen CSS",
              "alleen SQL"
            ],
            "en": [
              "yes",
              "no",
              "CSS only",
              "SQL only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "negeren",
              "GPU",
              "CSS",
              "try/catch of Result/err"
            ],
            "en": [
              "ignore",
              "GPU",
              "CSS",
              "try/catch or Result/err"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "compile must",
              "mensen",
              "cert"
            ],
            "en": [
              "speed",
              "compile must",
              "humans",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "waarde",
              "CSS",
              "DNS",
              "GPU only"
            ],
            "en": [
              "a value",
              "CSS",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Value.",
            "en": "Value."
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
        "nl": "<pre>for i in range(0, 10, 3):\n\tprint(i)\nwhile n &gt; 0:\n\tn -= 1</pre>",
        "en": "<pre>for i in range(0, 10, 3):\n\tprint(i)\nwhile n &gt; 0:\n\tn -= 1</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "range step 3 tot &lt;10: count?",
            "en": "range step 3 &lt;10 count?"
          },
          "choices": {
            "nl": [
              "3",
              "4",
              "10",
              "0"
            ],
            "en": [
              "3",
              "4",
              "10",
              "0"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "4.",
            "en": "4."
          }
        },
        {
          "q": {
            "nl": "while nodig?",
            "en": "while needed?"
          },
          "choices": {
            "nl": [
              "nooit",
              "als conditie-loop",
              "alleen export",
              "CSS"
            ],
            "en": [
              "never",
              "for condition loops",
              "export only",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "print",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "print",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "SQL",
              "alleen loops",
              "mag"
            ],
            "en": [
              "forbidden",
              "SQL",
              "loops only",
              "allowed"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "vergelijking",
              "assign",
              "import",
              "join"
            ],
            "en": [
              "comparison",
              "assign",
              "import",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "kan hangen",
              "efficiënt",
              "SQL",
              "CSS"
            ],
            "en": [
              "can hang",
              "efficient",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "-1",
              "0",
              "2"
            ],
            "en": [
              "1",
              "-1",
              "0",
              "2"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "alleen CSS",
              "alleen SQL"
            ],
            "en": [
              "no",
              "yes",
              "CSS only",
              "SQL only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "try/catch of Result/err",
              "negeren",
              "CSS",
              "GPU"
            ],
            "en": [
              "try/catch or Result/err",
              "ignore",
              "CSS",
              "GPU"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "compile must",
              "mensen",
              "cert"
            ],
            "en": [
              "speed",
              "compile must",
              "humans",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "CSS",
              "waarde",
              "DNS",
              "GPU only"
            ],
            "en": [
              "CSS",
              "a value",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Collecties",
        "en": "Collections"
      },
      "body": {
        "nl": "<pre>var nums = [10,20,30]\nvar player = {\"hp\": 100}</pre>",
        "en": "<pre>var nums = [10,20,30]\nvar player = {\"hp\": 100}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "nums[0]?",
            "en": "nums[0]?"
          },
          "choices": {
            "nl": [
              "null",
              "20",
              "30",
              "10"
            ],
            "en": [
              "null",
              "20",
              "30",
              "10"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "0-based.",
            "en": "0-based."
          }
        },
        {
          "q": {
            "nl": "Dictionary?",
            "en": "Dictionary?"
          },
          "choices": {
            "nl": [
              "verboden",
              "bestaat",
              "alleen C",
              "SQL only"
            ],
            "en": [
              "forbidden",
              "exists",
              "C only",
              "SQL only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "alleen loops",
              "mag",
              "SQL"
            ],
            "en": [
              "forbidden",
              "loops only",
              "allowed",
              "SQL"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "join",
              "import",
              "vergelijking"
            ],
            "en": [
              "assign",
              "join",
              "import",
              "comparison"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "kan hangen",
              "efficiënt",
              "SQL",
              "CSS"
            ],
            "en": [
              "can hang",
              "efficient",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "0",
              "-1",
              "2"
            ],
            "en": [
              "1",
              "0",
              "-1",
              "2"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "alleen SQL",
              "alleen CSS",
              "ja"
            ],
            "en": [
              "no",
              "SQL only",
              "CSS only",
              "yes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "try/catch of Result/err",
              "negeren",
              "CSS",
              "GPU"
            ],
            "en": [
              "try/catch or Result/err",
              "ignore",
              "CSS",
              "GPU"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "cert",
              "compile must",
              "mensen"
            ],
            "en": [
              "speed",
              "cert",
              "compile must",
              "humans"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "waarde",
              "CSS",
              "DNS",
              "GPU only"
            ],
            "en": [
              "a value",
              "CSS",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Value.",
            "en": "Value."
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
        "nl": "<pre>func add(a: int, b: int) -&gt; int:\n\treturn a + b</pre>",
        "en": "<pre>func add(a: int, b: int) -&gt; int:\n\treturn a + b</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Keyword?",
            "en": "Keyword?"
          },
          "choices": {
            "nl": [
              "def",
              "fn",
              "function",
              "func"
            ],
            "en": [
              "def",
              "fn",
              "function",
              "func"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "func.",
            "en": "func."
          }
        },
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "error",
              "23",
              "0",
              "5"
            ],
            "en": [
              "error",
              "23",
              "0",
              "5"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "print"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "SQL",
              "alleen loops",
              "mag"
            ],
            "en": [
              "forbidden",
              "SQL",
              "loops only",
              "allowed"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "join",
              "import",
              "vergelijking"
            ],
            "en": [
              "assign",
              "join",
              "import",
              "comparison"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "efficiënt",
              "SQL",
              "kan hangen",
              "CSS"
            ],
            "en": [
              "efficient",
              "SQL",
              "can hang",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "0",
              "-1",
              "2"
            ],
            "en": [
              "1",
              "0",
              "-1",
              "2"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "alleen SQL",
              "alleen CSS",
              "ja"
            ],
            "en": [
              "no",
              "SQL only",
              "CSS only",
              "yes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "negeren",
              "try/catch of Result/err",
              "CSS",
              "GPU"
            ],
            "en": [
              "ignore",
              "try/catch or Result/err",
              "CSS",
              "GPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "cert",
              "compile must",
              "mensen"
            ],
            "en": [
              "speed",
              "cert",
              "compile must",
              "humans"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "waarde",
              "CSS",
              "DNS",
              "GPU only"
            ],
            "en": [
              "a value",
              "CSS",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Fouten / debug",
        "en": "Errors / debug"
      },
      "body": {
        "nl": "<pre>assert(hp &gt; 0)\npush_error(\"ouch\")</pre><p>Gebruik ook de Godot debugger en breakpoints.</p>",
        "en": "<pre>assert(hp &gt; 0)\npush_error(\"ouch\")</pre><p>Also use the Godot debugger and breakpoints.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "assert doet?",
            "en": "assert does?"
          },
          "choices": {
            "nl": [
              "CSS",
              "shuffle",
              "SQL commit",
              "check die faalt in debug"
            ],
            "en": [
              "CSS",
              "shuffle",
              "SQL commit",
              "check that fails in debug"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Assert.",
            "en": "Assert."
          }
        },
        {
          "q": {
            "nl": "push_error?",
            "en": "push_error?"
          },
          "choices": {
            "nl": [
              "logt error in Godot",
              "crasht OS",
              "compile C",
              "pip"
            ],
            "en": [
              "logs error in Godot",
              "crashes OS",
              "compile C",
              "pip"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Log.",
            "en": "Log."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "print",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "print",
              "echo",
              "SELECT",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "alleen loops",
              "mag",
              "SQL"
            ],
            "en": [
              "forbidden",
              "loops only",
              "allowed",
              "SQL"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "vergelijking",
              "import",
              "join"
            ],
            "en": [
              "assign",
              "comparison",
              "import",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "efficiënt",
              "CSS",
              "SQL",
              "kan hangen"
            ],
            "en": [
              "efficient",
              "CSS",
              "SQL",
              "can hang"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "-1",
              "0",
              "2"
            ],
            "en": [
              "1",
              "-1",
              "0",
              "2"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "ja",
              "nee",
              "alleen CSS",
              "alleen SQL"
            ],
            "en": [
              "yes",
              "no",
              "CSS only",
              "SQL only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "try/catch of Result/err",
              "negeren",
              "CSS",
              "GPU"
            ],
            "en": [
              "try/catch or Result/err",
              "ignore",
              "CSS",
              "GPU"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "compile must",
              "mensen",
              "cert"
            ],
            "en": [
              "speed",
              "compile must",
              "humans",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "waarde",
              "CSS",
              "DNS",
              "GPU only"
            ],
            "en": [
              "a value",
              "CSS",
              "DNS",
              "GPU only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini project",
        "en": "Mini project"
      },
      "body": {
        "nl": "<pre>extends Node\nvar coins := 0\nfunc collect(n: int) -&gt; void:\n\tcoins += n</pre><p>Node scripts + signalen = Godot-basis.</p>",
        "en": "<pre>extends Node\nvar coins := 0\nfunc collect(n: int) -&gt; void:\n\tcoins += n</pre><p>Node scripts + signals = Godot basics.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "extends Node?",
            "en": "extends Node?"
          },
          "choices": {
            "nl": [
              "SQL",
              "Rust",
              "CSS",
              "script op node-class"
            ],
            "en": [
              "SQL",
              "Rust",
              "CSS",
              "script on node class"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Inheritance.",
            "en": "Inheritance."
          }
        },
        {
          "q": {
            "nl": "coins na +5?",
            "en": "coins after +5?"
          },
          "choices": {
            "nl": [
              "5",
              "0",
              "-5",
              "null"
            ],
            "en": [
              "5",
              "0",
              "-5",
              "null"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "echo",
              "print",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "print",
              "SELECT",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "verboden",
              "SQL",
              "alleen loops",
              "mag"
            ],
            "en": [
              "forbidden",
              "SQL",
              "loops only",
              "allowed"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "vergelijking",
              "import",
              "join"
            ],
            "en": [
              "assign",
              "comparison",
              "import",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "kan hangen",
              "efficiënt",
              "SQL",
              "CSS"
            ],
            "en": [
              "can hang",
              "efficient",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "1",
              "-1",
              "0",
              "2"
            ],
            "en": [
              "1",
              "-1",
              "0",
              "2"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "alleen CSS",
              "alleen SQL"
            ],
            "en": [
              "no",
              "yes",
              "CSS only",
              "SQL only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "try/catch of Result/err",
              "negeren",
              "CSS",
              "GPU"
            ],
            "en": [
              "try/catch or Result/err",
              "ignore",
              "CSS",
              "GPU"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "cert",
              "compile must",
              "mensen"
            ],
            "en": [
              "speed",
              "cert",
              "compile must",
              "humans"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "CSS",
              "DNS",
              "waarde",
              "GPU only"
            ],
            "en": [
              "CSS",
              "DNS",
              "a value",
              "GPU only"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Signalen kort",
        "en": "Signals briefly"
      },
      "body": {
        "nl": "<p>Signalen verbinden emitters en listeners. <code class=\"inline\">emit_signal</code> / <code class=\"inline\">connect</code>.</p>",
        "en": "<p>Signals connect emitters and listeners. <code class=\"inline\">emit_signal</code> / <code class=\"inline\">connect</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "signal is?",
            "en": "signal is?"
          },
          "choices": {
            "nl": [
              "SQL",
              "event-achtig",
              "CSS",
              "C pointer"
            ],
            "en": [
              "SQL",
              "event-like",
              "CSS",
              "C pointer"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Event.",
            "en": "Event."
          }
        },
        {
          "q": {
            "nl": "connect?",
            "en": "connect?"
          },
          "choices": {
            "nl": [
              "USB only",
              "listener koppelen",
              "pip",
              "Lua 0-index"
            ],
            "en": [
              "USB only",
              "hook listener",
              "pip",
              "Lua 0-index"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Connect.",
            "en": "Connect."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in gdscript?",
            "en": "Typical output in gdscript?"
          },
          "choices": {
            "nl": [
              "print",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "print",
              "echo",
              "SELECT",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Print API.",
            "en": "Print API."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Print-achtige API (gdscript)?",
            "en": "Print-like API (gdscript)?"
          },
          "fill": [
            "print"
          ],
          "why": {
            "nl": "Print.",
            "en": "Print."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "if zonder else?",
            "en": "if without else?"
          },
          "choices": {
            "nl": [
              "mag",
              "verboden",
              "alleen loops",
              "SQL"
            ],
            "en": [
              "allowed",
              "forbidden",
              "loops only",
              "SQL"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Allowed.",
            "en": "Allowed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "== meestal?",
            "en": "== usually?"
          },
          "choices": {
            "nl": [
              "assign",
              "import",
              "vergelijking",
              "join"
            ],
            "en": [
              "assign",
              "import",
              "comparison",
              "join"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Compare.",
            "en": "Compare."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: while(true) zonder break",
            "en": "Spot: while(true) without break"
          },
          "choices": {
            "nl": [
              "efficiënt",
              "SQL",
              "kan hangen",
              "CSS"
            ],
            "en": [
              "efficient",
              "SQL",
              "can hang",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Hang risk.",
            "en": "Hang risk."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Index start vaak?",
            "en": "Index often starts?"
          },
          "choices": {
            "nl": [
              "0",
              "1",
              "-1",
              "2"
            ],
            "en": [
              "0",
              "1",
              "-1",
              "2"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Usually 0.",
            "en": "Usually 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Functies hergebruiken?",
            "en": "Functions reuse?"
          },
          "choices": {
            "nl": [
              "nee",
              "alleen SQL",
              "alleen CSS",
              "ja"
            ],
            "en": [
              "no",
              "SQL only",
              "CSS only",
              "yes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Errors aanpakken?",
            "en": "Handle errors?"
          },
          "choices": {
            "nl": [
              "negeren",
              "GPU",
              "CSS",
              "try/catch of Result/err"
            ],
            "en": [
              "ignore",
              "GPU",
              "CSS",
              "try/catch or Result/err"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Handle.",
            "en": "Handle."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Comments voor?",
            "en": "Comments for?"
          },
          "choices": {
            "nl": [
              "speed",
              "cert",
              "compile must",
              "mensen"
            ],
            "en": [
              "speed",
              "cert",
              "compile must",
              "humans"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Docs.",
            "en": "Docs."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Variabele bewaart?",
            "en": "Variable stores?"
          },
          "choices": {
            "nl": [
              "CSS",
              "GPU only",
              "DNS",
              "waarde"
            ],
            "en": [
              "CSS",
              "GPU only",
              "DNS",
              "a value"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Value.",
            "en": "Value."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "Godot engine?",
        "en": "Godot engine?"
      },
      "choices": {
        "nl": [
          "ja, GDScript",
          "nee",
          "alleen Unity",
          "SQL IDE"
        ],
        "en": [
          "yes, GDScript",
          "no",
          "Unity only",
          "SQL IDE"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "signal",
        "en": "signal"
      },
      "choices": {
        "nl": [
          "USB",
          "pip",
          "event-achtig in Godot",
          "CSS"
        ],
        "en": [
          "USB",
          "pip",
          "event-like in Godot",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Signals.",
        "en": "Signals."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "@onready",
        "en": "@onready"
      },
      "choices": {
        "nl": [
          "SQL",
          "init wanneer node ready",
          "C++ only",
          "git"
        ],
        "en": [
          "SQL",
          "init when node ready",
          "C++ only",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "On ready.",
        "en": "On ready."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "$NodePath",
        "en": "$NodePath"
      },
      "choices": {
        "nl": [
          "korte get_node",
          "jQuery only",
          "Lua",
          "Rust"
        ],
        "en": [
          "short get_node",
          "jQuery only",
          "Lua",
          "Rust"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Get node.",
        "en": "Get node."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "delta in _process",
        "en": "delta in _process"
      },
      "choices": {
        "nl": [
          "SQL",
          "CSS px",
          "frame tijd",
          "nil"
        ],
        "en": [
          "SQL",
          "CSS px",
          "frame time",
          "nil"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Delta.",
        "en": "Delta."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "_ready",
        "en": "_ready"
      },
      "choices": {
        "nl": [
          "lifecycle callback",
          "constructor OS",
          "pip",
          "HTML"
        ],
        "en": [
          "lifecycle callback",
          "OS constructor",
          "pip",
          "HTML"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Ready.",
        "en": "Ready."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "TypedArray",
        "en": "TypedArray"
      },
      "choices": {
        "nl": [
          "verboden",
          "bestaat in moderne GDScript",
          "SQL",
          "CSS"
        ],
        "en": [
          "forbidden",
          "exists in modern GDScript",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "match",
        "en": "match"
      },
      "choices": {
        "nl": [
          "switch-achtig",
          "SQL MATCH",
          "CSS",
          "geen"
        ],
        "en": [
          "switch-like",
          "SQL MATCH",
          "CSS",
          "none"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Match.",
        "en": "Match."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "export var",
        "en": "export var"
      },
      "choices": {
        "nl": [
          "inspector-zichtbaar",
          "pip export",
          "SQL dump",
          "git"
        ],
        "en": [
          "inspector-visible",
          "pip export",
          "SQL dump",
          "git"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Export.",
        "en": "Export."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "null",
        "en": "null"
      },
      "choices": {
        "nl": [
          "alleen 0",
          "verboden",
          "bestaat",
          "True"
        ],
        "en": [
          "0 only",
          "forbidden",
          "exists",
          "True"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "null.",
        "en": "null."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "and/or",
        "en": "and/or"
      },
      "choices": {
        "nl": [
          "&& || verplicht",
          "CSS",
          "SQL only",
          "and or keywords"
        ],
        "en": [
          "&& || required",
          "CSS",
          "SQL only",
          "and or keywords"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Words.",
        "en": "Words."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "Vector2",
        "en": "Vector2"
      },
      "choices": {
        "nl": [
          "2D vector type",
          "SQL",
          "HTML",
          "Lua 1-based only"
        ],
        "en": [
          "2D vector type",
          "SQL",
          "HTML",
          "Lua 1-based only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Vector.",
        "en": "Vector."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "queue_free",
        "en": "queue_free"
      },
      "choices": {
        "nl": [
          "SQL drop",
          "node later vrijgeven",
          "CSS",
          "pip"
        ],
        "en": [
          "SQL drop",
          "free node later",
          "CSS",
          "pip"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Free.",
        "en": "Free."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "is_instance_valid",
        "en": "is_instance_valid"
      },
      "choices": {
        "nl": [
          "check of object leeft",
          "CSS",
          "git",
          "Rust borrow"
        ],
        "en": [
          "check object alive",
          "CSS",
          "git",
          "Rust borrow"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Valid.",
        "en": "Valid."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib GDScript",
        "en": "CodeCrib GDScript"
      },
      "choices": {
        "nl": [
          "origineel oefenen",
          "officieel Godot cert",
          "betaald",
          "leaked"
        ],
        "en": [
          "original practice",
          "official Godot cert",
          "paid",
          "leaked"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Origineel.",
        "en": "Original."
      }
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 1] Typische output in gdscript?",
        "en": "[Pool 1] Typical output in gdscript?"
      },
      "choices": {
        "nl": [
          "echo",
          "print",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "print",
          "SELECT",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 16
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Print-achtige API (gdscript)?",
        "en": "[Pool 2] Print-like API (gdscript)?"
      },
      "fill": [
        "print"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 17
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 3] if zonder else?",
        "en": "[Pool 3] if without else?"
      },
      "choices": {
        "nl": [
          "mag",
          "verboden",
          "alleen loops",
          "SQL"
        ],
        "en": [
          "allowed",
          "forbidden",
          "loops only",
          "SQL"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Allowed.",
        "en": "Allowed."
      },
      "id": 18
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 4] == meestal?",
        "en": "[Pool 4] == usually?"
      },
      "choices": {
        "nl": [
          "assign",
          "import",
          "vergelijking",
          "join"
        ],
        "en": [
          "assign",
          "import",
          "comparison",
          "join"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Compare.",
        "en": "Compare."
      },
      "id": 19
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 5] Spot: while(true) zonder break",
        "en": "[Pool 5] Spot: while(true) without break"
      },
      "choices": {
        "nl": [
          "efficiënt",
          "CSS",
          "SQL",
          "kan hangen"
        ],
        "en": [
          "efficient",
          "CSS",
          "SQL",
          "can hang"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Hang risk.",
        "en": "Hang risk."
      },
      "id": 20
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 6] Index start vaak?",
        "en": "[Pool 6] Index often starts?"
      },
      "choices": {
        "nl": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "en": [
          "1",
          "0",
          "-1",
          "2"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Usually 0.",
        "en": "Usually 0."
      },
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 7] Functies hergebruiken?",
        "en": "[Pool 7] Functions reuse?"
      },
      "choices": {
        "nl": [
          "nee",
          "ja",
          "alleen CSS",
          "alleen SQL"
        ],
        "en": [
          "no",
          "yes",
          "CSS only",
          "SQL only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 22
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 8] Errors aanpakken?",
        "en": "[Pool 8] Handle errors?"
      },
      "choices": {
        "nl": [
          "try/catch of Result/err",
          "negeren",
          "CSS",
          "GPU"
        ],
        "en": [
          "try/catch or Result/err",
          "ignore",
          "CSS",
          "GPU"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Handle.",
        "en": "Handle."
      },
      "id": 23
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 9] Comments voor?",
        "en": "[Pool 9] Comments for?"
      },
      "choices": {
        "nl": [
          "speed",
          "mensen",
          "compile must",
          "cert"
        ],
        "en": [
          "speed",
          "humans",
          "compile must",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Docs.",
        "en": "Docs."
      },
      "id": 24
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 10] Variabele bewaart?",
        "en": "[Pool 10] Variable stores?"
      },
      "choices": {
        "nl": [
          "CSS",
          "GPU only",
          "DNS",
          "waarde"
        ],
        "en": [
          "CSS",
          "GPU only",
          "DNS",
          "a value"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Value.",
        "en": "Value."
      },
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] gdscript: oefenen helpt?",
        "en": "[Pool 11] {cid}: practice helps?"
      },
      "choices": {
        "nl": [
          "ja",
          "nee",
          "nooit",
          "alleen boeken"
        ],
        "en": [
          "yes",
          "no",
          "never",
          "books only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 26
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 12] Recap: lees code hardop?",
        "en": "[Pool 12] Recap: read code aloud?"
      },
      "choices": {
        "nl": [
          "nutteloos",
          "verboden",
          "kan helpen",
          "SQL only"
        ],
        "en": [
          "useless",
          "forbidden",
          "can help",
          "SQL only"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] Typische output in gdscript?",
        "en": "[Pool 13] Typical output in gdscript?"
      },
      "choices": {
        "nl": [
          "echo",
          "print",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "print",
          "SELECT",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 28
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 14] Print-achtige API (gdscript)?",
        "en": "[Pool 14] Print-like API (gdscript)?"
      },
      "fill": [
        "print"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 29
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 15] if zonder else?",
        "en": "[Pool 15] if without else?"
      },
      "choices": {
        "nl": [
          "verboden",
          "mag",
          "alleen loops",
          "SQL"
        ],
        "en": [
          "forbidden",
          "allowed",
          "loops only",
          "SQL"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Allowed.",
        "en": "Allowed."
      },
      "id": 30
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 16] == meestal?",
        "en": "[Pool 16] == usually?"
      },
      "choices": {
        "nl": [
          "assign",
          "vergelijking",
          "import",
          "join"
        ],
        "en": [
          "assign",
          "comparison",
          "import",
          "join"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Compare.",
        "en": "Compare."
      },
      "id": 31
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 17] Spot: while(true) zonder break",
        "en": "[Pool 17] Spot: while(true) without break"
      },
      "choices": {
        "nl": [
          "efficiënt",
          "kan hangen",
          "SQL",
          "CSS"
        ],
        "en": [
          "efficient",
          "can hang",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Hang risk.",
        "en": "Hang risk."
      },
      "id": 32
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 18] Index start vaak?",
        "en": "[Pool 18] Index often starts?"
      },
      "choices": {
        "nl": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "en": [
          "1",
          "0",
          "-1",
          "2"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Usually 0.",
        "en": "Usually 0."
      },
      "id": 33
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 19] Functies hergebruiken?",
        "en": "[Pool 19] Functions reuse?"
      },
      "choices": {
        "nl": [
          "nee",
          "alleen CSS",
          "ja",
          "alleen SQL"
        ],
        "en": [
          "no",
          "CSS only",
          "yes",
          "SQL only"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 34
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 20] Errors aanpakken?",
        "en": "[Pool 20] Handle errors?"
      },
      "choices": {
        "nl": [
          "try/catch of Result/err",
          "negeren",
          "CSS",
          "GPU"
        ],
        "en": [
          "try/catch or Result/err",
          "ignore",
          "CSS",
          "GPU"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Handle.",
        "en": "Handle."
      },
      "id": 35
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 21] Comments voor?",
        "en": "[Pool 21] Comments for?"
      },
      "choices": {
        "nl": [
          "mensen",
          "speed",
          "compile must",
          "cert"
        ],
        "en": [
          "humans",
          "speed",
          "compile must",
          "cert"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Docs.",
        "en": "Docs."
      },
      "id": 36
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 22] Variabele bewaart?",
        "en": "[Pool 22] Variable stores?"
      },
      "choices": {
        "nl": [
          "CSS",
          "GPU only",
          "DNS",
          "waarde"
        ],
        "en": [
          "CSS",
          "GPU only",
          "DNS",
          "a value"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Value.",
        "en": "Value."
      },
      "id": 37
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] gdscript: oefenen helpt?",
        "en": "[Pool 23] {cid}: practice helps?"
      },
      "choices": {
        "nl": [
          "nee",
          "alleen boeken",
          "nooit",
          "ja"
        ],
        "en": [
          "no",
          "books only",
          "never",
          "yes"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 38
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 24] Recap: lees code hardop?",
        "en": "[Pool 24] Recap: read code aloud?"
      },
      "choices": {
        "nl": [
          "nutteloos",
          "verboden",
          "kan helpen",
          "SQL only"
        ],
        "en": [
          "useless",
          "forbidden",
          "can help",
          "SQL only"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 39
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] Typische output in gdscript?",
        "en": "[Pool 25] Typical output in gdscript?"
      },
      "choices": {
        "nl": [
          "echo",
          "SELECT",
          "print",
          "CSS"
        ],
        "en": [
          "echo",
          "SELECT",
          "print",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 40
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] Print-achtige API (gdscript)?",
        "en": "[Pool 26] Print-like API (gdscript)?"
      },
      "fill": [
        "print"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 27] if zonder else?",
        "en": "[Pool 27] if without else?"
      },
      "choices": {
        "nl": [
          "mag",
          "verboden",
          "alleen loops",
          "SQL"
        ],
        "en": [
          "allowed",
          "forbidden",
          "loops only",
          "SQL"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Allowed.",
        "en": "Allowed."
      },
      "id": 42
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 28] == meestal?",
        "en": "[Pool 28] == usually?"
      },
      "choices": {
        "nl": [
          "assign",
          "join",
          "import",
          "vergelijking"
        ],
        "en": [
          "assign",
          "join",
          "import",
          "comparison"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Compare.",
        "en": "Compare."
      },
      "id": 43
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 29] Spot: while(true) zonder break",
        "en": "[Pool 29] Spot: while(true) without break"
      },
      "choices": {
        "nl": [
          "efficiënt",
          "CSS",
          "SQL",
          "kan hangen"
        ],
        "en": [
          "efficient",
          "CSS",
          "SQL",
          "can hang"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Hang risk.",
        "en": "Hang risk."
      },
      "id": 44
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 30] Index start vaak?",
        "en": "[Pool 30] Index often starts?"
      },
      "choices": {
        "nl": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "en": [
          "1",
          "0",
          "-1",
          "2"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Usually 0.",
        "en": "Usually 0."
      },
      "id": 45
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 31] Functies hergebruiken?",
        "en": "[Pool 31] Functions reuse?"
      },
      "choices": {
        "nl": [
          "nee",
          "alleen SQL",
          "alleen CSS",
          "ja"
        ],
        "en": [
          "no",
          "SQL only",
          "CSS only",
          "yes"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 46
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 32] Errors aanpakken?",
        "en": "[Pool 32] Handle errors?"
      },
      "choices": {
        "nl": [
          "negeren",
          "GPU",
          "CSS",
          "try/catch of Result/err"
        ],
        "en": [
          "ignore",
          "GPU",
          "CSS",
          "try/catch or Result/err"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Handle.",
        "en": "Handle."
      },
      "id": 47
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 33] Comments voor?",
        "en": "[Pool 33] Comments for?"
      },
      "choices": {
        "nl": [
          "speed",
          "cert",
          "compile must",
          "mensen"
        ],
        "en": [
          "speed",
          "cert",
          "compile must",
          "humans"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Docs.",
        "en": "Docs."
      },
      "id": 48
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 34] Variabele bewaart?",
        "en": "[Pool 34] Variable stores?"
      },
      "choices": {
        "nl": [
          "waarde",
          "CSS",
          "DNS",
          "GPU only"
        ],
        "en": [
          "a value",
          "CSS",
          "DNS",
          "GPU only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Value.",
        "en": "Value."
      },
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 35] gdscript: oefenen helpt?",
        "en": "[Pool 35] {cid}: practice helps?"
      },
      "choices": {
        "nl": [
          "nee",
          "ja",
          "nooit",
          "alleen boeken"
        ],
        "en": [
          "no",
          "yes",
          "never",
          "books only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      },
      "id": 50
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Print Hello",
        "en": "Print Hello"
      },
      "prompt": {
        "nl": "Gebruik print(\"Hello\").",
        "en": "Use print(\"Hello\")."
      },
      "lang": "gdscript",
      "starter": "extends Node\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "print"
        },
        {
          "type": "code_contains",
          "value": "Hello"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "coins var",
        "en": "coins var"
      },
      "prompt": {
        "nl": "var coins := 0 en een func collect.",
        "en": "var coins := 0 and a func collect."
      },
      "lang": "gdscript",
      "starter": "extends Node\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "coins"
        },
        {
          "type": "code_contains",
          "value": "func"
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
