(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.c = {
  "id": "c",
  "title": {
    "nl": "C voor beginners",
    "en": "C for beginners"
  },
  "intro": {
    "nl": "Classic systems C: printf, arrays, pointers-smaak.",
    "en": "Classic systems C: printf, arrays, pointer flavor."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste C",
        "en": "Your first C"
      },
      "body": {
        "nl": "<p>C is de klassieker: simpel, dichtbij hardware, overal libraries.</p><pre>#include &lt;stdio.h&gt;\nint main(void) {\n  printf(\"Hallo\\n\");\n  return 0;\n}</pre>",
        "en": "<p>C is the classic: simple, close to hardware, libraries everywhere.</p><pre>#include &lt;stdio.h&gt;\nint main(void) {\n  printf(\"Hello\\n\");\n  return 0;\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Print in C?",
            "en": "Print in C?"
          },
          "choices": {
            "nl": [
              "print",
              "printf",
              "console.log",
              "trace"
            ],
            "en": [
              "print",
              "printf",
              "console.log",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "printf.",
            "en": "printf."
          }
        },
        {
          "q": {
            "nl": "main return 0?",
            "en": "main return 0?"
          },
          "choices": {
            "nl": [
              "crash",
              "SQL",
              "succes-conventie",
              "CSS"
            ],
            "en": [
              "crash",
              "SQL",
              "success convention",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "OK status.",
            "en": "OK status."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
      ],
      "exercise": {
        "lang": "c",
        "instructions": {
          "nl": "printf Hallo",
          "en": "printf Hallo"
        },
        "starter": "#include <stdio.h>\nint main(void){ printf(\"Hallo\\n\"); }\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "printf"
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
        "nl": "<pre>int score = 10;\ndouble ratio = 0.5;\nchar c = 'A';</pre><div class=\"callout\"><strong>Valkuil:</strong> geen echte bool in oude C (wel in C99 <code class=\"inline\">stdbool.h</code>). int/int truncated.</div>",
        "en": "<pre>int score = 10;\ndouble ratio = 0.5;\nchar c = 'A';</pre><div class=\"callout\"><strong>Pitfall:</strong> older C has no built-in bool (C99 <code class=\"inline\">stdbool.h</code>). int/int truncates.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "7/2?",
            "en": "7/2?"
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
          "answer": 0,
          "why": {
            "nl": "Int div.",
            "en": "Int div."
          }
        },
        {
          "q": {
            "nl": "char quotes?",
            "en": "char quotes?"
          },
          "choices": {
            "nl": [
              "\"A\"",
              "`A`",
              "'A'",
              "A"
            ],
            "en": [
              "\"A\"",
              "`A`",
              "'A'",
              "A"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Single.",
            "en": "Single."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
        "nl": "<pre>if (x &gt;= 5) puts(\"B\"); else puts(\"C\");</pre>",
        "en": "<pre>if (x &gt;= 5) puts(\"B\"); else puts(\"C\");</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5?",
            "en": "x=5?"
          },
          "choices": {
            "nl": [
              "B",
              "C",
              "beide",
              "error"
            ],
            "en": [
              "B",
              "C",
              "both",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "B.",
            "en": "B."
          }
        },
        {
          "q": {
            "nl": "geen bool keywords ouds?",
            "en": "old C bool keywords?"
          },
          "choices": {
            "nl": [
              "true/false altijd built-in",
              "SQL",
              "vaak 0/niet-0",
              "Lua"
            ],
            "en": [
              "true/false always built-in",
              "SQL",
              "often 0/non-0",
              "Lua"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "0/non-0.",
            "en": "0/non-0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
              "negeren",
              "CSS",
              "try/catch of Result/err",
              "GPU"
            ],
            "en": [
              "ignore",
              "CSS",
              "try/catch or Result/err",
              "GPU"
            ]
          },
          "answer": 2,
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
        "nl": "<pre>for (int i=0;i&lt;10;i+=3) printf(\"%d\\n\", i);</pre>",
        "en": "<pre>for (int i=0;i&lt;10;i+=3) printf(\"%d\\n\", i);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Count?",
            "en": "Count?"
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
            "nl": "%d is?",
            "en": "%d is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Lua",
              "SQL",
              "printf format int"
            ],
            "en": [
              "CSS",
              "Lua",
              "SQL",
              "printf int format"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Format.",
            "en": "Format."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "printf",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "printf",
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
              "CSS",
              "try/catch of Result/err",
              "GPU"
            ],
            "en": [
              "ignore",
              "CSS",
              "try/catch or Result/err",
              "GPU"
            ]
          },
          "answer": 2,
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
      "id": 5,
      "title": {
        "nl": "Collecties / data",
        "en": "Collections / data"
      },
      "body": {
        "nl": "<pre>int nums[3] = {10,20,30};\nprintf(\"%d\", nums[0]);</pre>",
        "en": "<pre>int nums[3] = {10,20,30};\nprintf(\"%d\", nums[0]);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "nums[0]?",
            "en": "nums[0]?"
          },
          "choices": {
            "nl": [
              "UB",
              "20",
              "30",
              "10"
            ],
            "en": [
              "UB",
              "20",
              "30",
              "10"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "10.",
            "en": "10."
          }
        },
        {
          "q": {
            "nl": "vaste lengte array?",
            "en": "fixed length array?"
          },
          "choices": {
            "nl": [
              "nee altijd heap",
              "CSS",
              "SQL",
              "ja op stack vaak"
            ],
            "en": [
              "never heap",
              "CSS",
              "SQL",
              "yes often stack"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Fixed.",
            "en": "Fixed."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "printf",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "printf",
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
      "id": 6,
      "title": {
        "nl": "Functies",
        "en": "Functions"
      },
      "body": {
        "nl": "<pre>int add(int a, int b) { return a + b; }</pre>",
        "en": "<pre>int add(int a, int b) { return a + b; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "void",
              "error"
            ],
            "en": [
              "23",
              "5",
              "void",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "q": {
            "nl": "prototypes?",
            "en": "prototypes?"
          },
          "choices": {
            "nl": [
              "CSS",
              "pip",
              "vooraf declareren",
              "Lua end"
            ],
            "en": [
              "CSS",
              "pip",
              "declare ahead",
              "Lua end"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Headers.",
            "en": "Headers."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
      "id": 7,
      "title": {
        "nl": "Fouten / debug",
        "en": "Errors / debug"
      },
      "body": {
        "nl": "<pre>if (p == NULL) {\n  perror(\"alloc\");\n  return 1;\n}</pre><p>Check return codes. Geen exceptions in standaard C.</p>",
        "en": "<pre>if (p == NULL) {\n  perror(\"alloc\");\n  return 1;\n}</pre><p>Check return codes. No exceptions in standard C.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "NULL check?",
            "en": "NULL check?"
          },
          "choices": {
            "nl": [
              "optional always",
              "CSS",
              "SQL",
              "voorkomt crashes"
            ],
            "en": [
              "always optional",
              "CSS",
              "SQL",
              "helps avoid crashes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Safety.",
            "en": "Safety."
          }
        },
        {
          "q": {
            "nl": "exceptions in C?",
            "en": "exceptions in C?"
          },
          "choices": {
            "nl": [
              "niet echt standaard",
              "ja standaard",
              "verplicht",
              "Lua only"
            ],
            "en": [
              "not really standard",
              "yes standard",
              "required",
              "Lua only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "No.",
            "en": "No."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "printf",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "printf",
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
              "CSS",
              "try/catch of Result/err",
              "GPU"
            ],
            "en": [
              "ignore",
              "CSS",
              "try/catch or Result/err",
              "GPU"
            ]
          },
          "answer": 2,
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
      "id": 8,
      "title": {
        "nl": "Mini project",
        "en": "Mini project"
      },
      "body": {
        "nl": "<pre>int clamp(int hp){ if(hp&lt;0) return 0; return hp; }</pre>",
        "en": "<pre>int clamp(int hp){ if(hp&lt;0) return 0; return hp; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "clamp(-3)?",
            "en": "clamp(-3)?"
          },
          "choices": {
            "nl": [
              "-3",
              "0",
              "3",
              "NULL"
            ],
            "en": [
              "-3",
              "0",
              "3",
              "NULL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "0.",
            "en": "0."
          }
        },
        {
          "q": {
            "nl": "Waarom return codes?",
            "en": "Why return codes?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Godot signal",
              "fouten doorgeven",
              "pip"
            ],
            "en": [
              "CSS",
              "Godot signal",
              "pass errors",
              "pip"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Errors.",
            "en": "Errors."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "printf"
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
      "id": 9,
      "title": {
        "nl": "Pointers tip",
        "en": "Pointers tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">int *p = &amp;x;</code> en <code class=\"inline\">*p</code> om te lezen/schrijven. Pas op dangling pointers.</p>",
        "en": "<p><code class=\"inline\">int *p = &amp;x;</code> and <code class=\"inline\">*p</code> to read/write. Beware dangling pointers.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "*p betekent?",
            "en": "*p means?"
          },
          "choices": {
            "nl": [
              "multiply p always",
              "SQL",
              "dereference",
              "CSS"
            ],
            "en": [
              "multiply p always",
              "SQL",
              "dereference",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Deref.",
            "en": "Deref."
          }
        },
        {
          "q": {
            "nl": "&amp;x?",
            "en": "&amp;x?"
          },
          "choices": {
            "nl": [
              "and",
              "adres van x",
              "SQL",
              "Lua"
            ],
            "en": [
              "and",
              "address of x",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Address.",
            "en": "Address."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in c?",
            "en": "Typical output in c?"
          },
          "choices": {
            "nl": [
              "echo",
              "printf",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "printf",
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
            "nl": "Print-achtige API (c)?",
            "en": "Print-like API (c)?"
          },
          "fill": [
            "printf"
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
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "stdio.h",
        "en": "stdio.h"
      },
      "choices": {
        "nl": [
          "IO header",
          "CSS",
          "SQL",
          "Godot"
        ],
        "en": [
          "IO header",
          "CSS",
          "SQL",
          "Godot"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "stdio.",
        "en": "stdio."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "pointer *",
        "en": "pointer *"
      },
      "choices": {
        "nl": [
          "modulo",
          "Lua",
          "SQL",
          "adres/indirectie"
        ],
        "en": [
          "modulo",
          "Lua",
          "SQL",
          "address/indirection"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Pointer.",
        "en": "Pointer."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "&amp;x",
        "en": "&amp;x"
      },
      "choices": {
        "nl": [
          "and",
          "adres van x",
          "SQL",
          "CSS"
        ],
        "en": [
          "and",
          "address of x",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Address.",
        "en": "Address."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "malloc",
        "en": "malloc"
      },
      "choices": {
        "nl": [
          "heap alloc",
          "GC always",
          "pip",
          "trace"
        ],
        "en": [
          "heap alloc",
          "always GC",
          "pip",
          "trace"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Alloc.",
        "en": "Alloc."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "free",
        "en": "free"
      },
      "choices": {
        "nl": [
          "gratis soft",
          "CSS",
          "SQL DROP",
          "geheugen vrijgeven"
        ],
        "en": [
          "free soft",
          "CSS",
          "SQL DROP",
          "free memory"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Free.",
        "en": "Free."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "segfault",
        "en": "segfault"
      },
      "choices": {
        "nl": [
          "CSS bug",
          "Lua end",
          "pip",
          "ongeldige memory access"
        ],
        "en": [
          "CSS bug",
          "Lua end",
          "pip",
          "invalid memory access"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Fault.",
        "en": "Fault."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "sizeof",
        "en": "sizeof"
      },
      "choices": {
        "nl": [
          "SQL",
          "Godot",
          "len string only",
          "grootte in bytes"
        ],
        "en": [
          "SQL",
          "Godot",
          "string len only",
          "size in bytes"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Size.",
        "en": "Size."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "struct",
        "en": "struct"
      },
      "choices": {
        "nl": [
          "class Java",
          "npm",
          "CSS",
          "gegroepeerde velden"
        ],
        "en": [
          "Java class",
          "npm",
          "CSS",
          "grouped fields"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Struct.",
        "en": "Struct."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "enum",
        "en": "enum"
      },
      "choices": {
        "nl": [
          "SQL only",
          "verboden",
          "Lua only",
          "bestaat"
        ],
        "en": [
          "SQL only",
          "forbidden",
          "Lua only",
          "exists"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "#define",
        "en": "#define"
      },
      "choices": {
        "nl": [
          "macro/constant",
          "runtime fn",
          "pip",
          "DOM"
        ],
        "en": [
          "macro/constant",
          "runtime fn",
          "pip",
          "DOM"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Define.",
        "en": "Define."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "buffer overflow",
        "en": "buffer overflow"
      },
      "choices": {
        "nl": [
          "CSS overflow",
          "SQL join",
          "schrijven voorbij array",
          "git"
        ],
        "en": [
          "CSS overflow",
          "SQL join",
          "write past array",
          "git"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Danger.",
        "en": "Danger."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "const",
        "en": "const"
      },
      "choices": {
        "nl": [
          "muteert meer",
          "SQL",
          "read-only intent",
          "Lua"
        ],
        "en": [
          "mutates more",
          "SQL",
          "read-only intent",
          "Lua"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Const.",
        "en": "Const."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "header .h",
        "en": "header .h"
      },
      "choices": {
        "nl": [
          "npm lock",
          "Rust",
          "Godot tscn",
          "declaraties delen"
        ],
        "en": [
          "npm lock",
          "Rust",
          "Godot tscn",
          "share declarations"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Headers.",
        "en": "Headers."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "undefined behavior",
        "en": "undefined behavior"
      },
      "choices": {
        "nl": [
          "altijd nette error",
          "SQL null",
          "kan van alles",
          "CSS"
        ],
        "en": [
          "always clean error",
          "SQL null",
          "can do anything",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "UB.",
        "en": "UB."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib C",
        "en": "CodeCrib C"
      },
      "choices": {
        "nl": [
          "ISO leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "ISO leak",
          "original practice",
          "paid",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Origineel.",
        "en": "Original."
      }
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 1] Typische output in c?",
        "en": "[Pool 1] Typical output in c?"
      },
      "choices": {
        "nl": [
          "echo",
          "CSS",
          "SELECT",
          "printf"
        ],
        "en": [
          "echo",
          "CSS",
          "SELECT",
          "printf"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 16
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Print-achtige API (c)?",
        "en": "[Pool 2] Print-like API (c)?"
      },
      "fill": [
        "printf"
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
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] c: oefenen helpt?",
        "en": "[Pool 11] {cid}: practice helps?"
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
          "SQL only",
          "verboden",
          "kan helpen"
        ],
        "en": [
          "useless",
          "SQL only",
          "forbidden",
          "can help"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] Typische output in c?",
        "en": "[Pool 13] Typical output in c?"
      },
      "choices": {
        "nl": [
          "echo",
          "CSS",
          "SELECT",
          "printf"
        ],
        "en": [
          "echo",
          "CSS",
          "SELECT",
          "printf"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 28
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 14] Print-achtige API (c)?",
        "en": "[Pool 14] Print-like API (c)?"
      },
      "fill": [
        "printf"
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
      "id": 37
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] c: oefenen helpt?",
        "en": "[Pool 23] {cid}: practice helps?"
      },
      "choices": {
        "nl": [
          "nee",
          "nooit",
          "ja",
          "alleen boeken"
        ],
        "en": [
          "no",
          "never",
          "yes",
          "books only"
        ]
      },
      "answer": 2,
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
          "SQL only",
          "verboden",
          "kan helpen"
        ],
        "en": [
          "useless",
          "SQL only",
          "forbidden",
          "can help"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 39
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] Typische output in c?",
        "en": "[Pool 25] Typical output in c?"
      },
      "choices": {
        "nl": [
          "echo",
          "printf",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "printf",
          "SELECT",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 40
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] Print-achtige API (c)?",
        "en": "[Pool 26] Print-like API (c)?"
      },
      "fill": [
        "printf"
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
          "CSS",
          "try/catch of Result/err",
          "GPU"
        ],
        "en": [
          "ignore",
          "CSS",
          "try/catch or Result/err",
          "GPU"
        ]
      },
      "answer": 2,
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
        "nl": "[Pool 35] c: oefenen helpt?",
        "en": "[Pool 35] {cid}: practice helps?"
      },
      "choices": {
        "nl": [
          "nee",
          "nooit",
          "ja",
          "alleen boeken"
        ],
        "en": [
          "no",
          "never",
          "yes",
          "books only"
        ]
      },
      "answer": 2,
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
        "nl": "Hello output",
        "en": "Hello output"
      },
      "prompt": {
        "nl": "Schrijf een c programma dat Hello print (gebruik printf).",
        "en": "Write a c program that prints Hello (use printf)."
      },
      "lang": "c",
      "starter": "// TODO Hello via printf\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "printf"
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
        "nl": "Variabele score",
        "en": "Score variable"
      },
      "prompt": {
        "nl": "Maak een variabele score (of Score) en gebruik het getal 10.",
        "en": "Make a score variable and use the number 10."
      },
      "lang": "c",
      "starter": "\n",
      "tests": [
        {
          "type": "code_regex",
          "value": "(?i)score"
        },
        {
          "type": "code_contains",
          "value": "10"
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
