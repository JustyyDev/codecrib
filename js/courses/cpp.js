(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.cpp = {
  "id": "cpp",
  "title": {
    "nl": "C++ voor beginners",
    "en": "C++ for beginners"
  },
  "intro": {
    "nl": "Systems/game-engine smaak: types, vector, references.",
    "en": "Systems/game-engine flavor: types, vector, references."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Intro C++",
        "en": "Intro to C++"
      },
      "body": {
        "nl": "<p>C++ is krachtig en dicht op het metaal. Veel engines gebruiken het.</p><pre>#include &lt;iostream&gt;\nint main() {\n  std::cout &lt;&lt; \"Hallo\\n\";\n}</pre>",
        "en": "<p>C++ is powerful and close to the metal. Many engines use it.</p><pre>#include &lt;iostream&gt;\nint main() {\n  std::cout &lt;&lt; \"Hello\\n\";\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Entry point?",
            "en": "Entry point?"
          },
          "choices": {
            "nl": [
              "start",
              "main",
              "begin",
              "Main only Java"
            ],
            "en": [
              "start",
              "main",
              "begin",
              "Main only Java"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "main.",
            "en": "main."
          }
        },
        {
          "q": {
            "nl": "cout zit in?",
            "en": "cout lives in?"
          },
          "choices": {
            "nl": [
              "java.lang",
              "std",
              "lua",
              "godot"
            ],
            "en": [
              "java.lang",
              "std",
              "lua",
              "godot"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "std.",
            "en": "std."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
        "lang": "cpp",
        "instructions": {
          "nl": "cout Hallo",
          "en": "cout Hallo"
        },
        "starter": "#include <iostream>\nint main(){ std::cout<<\"Hallo\\n\"; }\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "cout"
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
        "nl": "<pre>int score = 10;\ndouble ratio = 0.5;\nbool ready = true;</pre><div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">int/int</code> is integer deling.</div>",
        "en": "<pre>int score = 10;\ndouble ratio = 0.5;\nbool ready = true;</pre><div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">int/int</code> is integer division.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "7/2 int?",
            "en": "7/2 int?"
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
            "nl": "Truncates.",
            "en": "Truncates."
          }
        },
        {
          "q": {
            "nl": "bool type?",
            "en": "bool type?"
          },
          "choices": {
            "nl": [
              "Boolean",
              "bool",
              "Bool",
              "bit"
            ],
            "en": [
              "Boolean",
              "bool",
              "Bool",
              "bit"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "bool.",
            "en": "bool."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
      "id": 3,
      "title": {
        "nl": "Logica",
        "en": "Logic"
      },
      "body": {
        "nl": "<pre>if (x &gt;= 5) std::cout &lt;&lt; \"B\";\nelse std::cout &lt;&lt; \"C\";</pre>",
        "en": "<pre>if (x &gt;= 5) std::cout &lt;&lt; \"B\";\nelse std::cout &lt;&lt; \"C\";</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "&& ?",
            "en": "&& ?"
          },
          "choices": {
            "nl": [
              "and woord verplicht",
              "logische AND",
              "SQL",
              "CSS"
            ],
            "en": [
              "and word required",
              "logical AND",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "AND.",
            "en": "AND."
          }
        },
        {
          "q": {
            "nl": "else if?",
            "en": "else if?"
          },
          "choices": {
            "nl": [
              "elif",
              "else if",
              "elseif",
              "elsif"
            ],
            "en": [
              "elif",
              "else if",
              "elseif",
              "elsif"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
      "id": 4,
      "title": {
        "nl": "Loops",
        "en": "Loops"
      },
      "body": {
        "nl": "<pre>for (int i=0;i&lt;10;i+=3) std::cout &lt;&lt; i;</pre>",
        "en": "<pre>for (int i=0;i&lt;10;i+=3) std::cout &lt;&lt; i;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Hoe vaak?",
            "en": "How many?"
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
            "nl": "while bestaat?",
            "en": "while exists?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "alleen range-for",
              "SQL"
            ],
            "en": [
              "no",
              "yes",
              "range-for only",
              "SQL"
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
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
        "nl": "<pre>#include &lt;vector&gt;\nstd::vector&lt;int&gt; nums = {10,20,30};\nnums.push_back(40);</pre>",
        "en": "<pre>#include &lt;vector&gt;\nstd::vector&lt;int&gt; nums = {10,20,30};\nnums.push_back(40);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "push_back?",
            "en": "push_back?"
          },
          "choices": {
            "nl": [
              "pop",
              "voeg toe aan eind",
              "SQL",
              "CSS"
            ],
            "en": [
              "pop",
              "append at end",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Append.",
            "en": "Append."
          }
        },
        {
          "q": {
            "nl": "nums[0]?",
            "en": "nums[0]?"
          },
          "choices": {
            "nl": [
              "10",
              "20",
              "30",
              "UB always"
            ],
            "en": [
              "10",
              "20",
              "30",
              "always UB"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "10.",
            "en": "10."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
              "5",
              "23",
              "void",
              "error"
            ],
            "en": [
              "5",
              "23",
              "void",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "q": {
            "nl": "void betekent?",
            "en": "void means?"
          },
          "choices": {
            "nl": [
              "int 0",
              "geen return waarde",
              "private",
              "inline"
            ],
            "en": [
              "int 0",
              "no return value",
              "private",
              "inline"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "No value.",
            "en": "No value."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
      "id": 7,
      "title": {
        "nl": "Fouten / debug",
        "en": "Errors / debug"
      },
      "body": {
        "nl": "<pre>try {\n  throw std::runtime_error(\"boom\");\n} catch (const std::exception&amp; e) {\n  std::cerr &lt;&lt; e.what();\n}</pre>",
        "en": "<pre>try {\n  throw std::runtime_error(\"boom\");\n} catch (const std::exception&amp; e) {\n  std::cerr &lt;&lt; e.what();\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "throw?",
            "en": "throw?"
          },
          "choices": {
            "nl": [
              "log only",
              "gooit exception",
              "SQL",
              "CSS"
            ],
            "en": [
              "log only",
              "throws exception",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Throw.",
            "en": "Throw."
          }
        },
        {
          "q": {
            "nl": "catch keyword?",
            "en": "catch keyword?"
          },
          "choices": {
            "nl": [
              "except",
              "catch",
              "rescue",
              "handle"
            ],
            "en": [
              "except",
              "catch",
              "rescue",
              "handle"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "catch.",
            "en": "catch."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
        "nl": "<pre>struct Player { int hp; };\nvoid hit(Player&amp; p, int d){ p.hp -= d; if(p.hp&lt;0)p.hp=0; }</pre>",
        "en": "<pre>struct Player { int hp; };\nvoid hit(Player&amp; p, int d){ p.hp -= d; if(p.hp&lt;0)p.hp=0; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "&amp; bij Player?",
            "en": "&amp; on Player?"
          },
          "choices": {
            "nl": [
              "bitwise only",
              "referentie",
              "SQL",
              "nil"
            ],
            "en": [
              "bitwise only",
              "reference",
              "SQL",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Reference.",
            "en": "Reference."
          }
        },
        {
          "q": {
            "nl": "hp 10 hit 3?",
            "en": "hp 10 hit 3?"
          },
          "choices": {
            "nl": [
              "7",
              "13",
              "0",
              "10"
            ],
            "en": [
              "7",
              "13",
              "0",
              "10"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "7.",
            "en": "7."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
      "id": 9,
      "title": {
        "nl": "References tip",
        "en": "References tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">int&amp; r = x;</code> is een alias. Handig voor grote objecten zonder copy.</p>",
        "en": "<p><code class=\"inline\">int&amp; r = x;</code> is an alias. Handy for big objects without copying.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "&amp; in type?",
            "en": "&amp; in type?"
          },
          "choices": {
            "nl": [
              "bitwise only",
              "referentie",
              "SQL",
              "Lua"
            ],
            "en": [
              "bitwise only",
              "reference",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Ref.",
            "en": "Ref."
          }
        },
        {
          "q": {
            "nl": "copy vs ref?",
            "en": "copy vs ref?"
          },
          "choices": {
            "nl": [
              "altijd zelfde cost",
              "ref vermijdt copy",
              "GPU",
              "cert"
            ],
            "en": [
              "always same cost",
              "ref avoids copy",
              "GPU",
              "cert"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Cheaper.",
            "en": "Cheaper."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in cpp?",
            "en": "Typical output in cpp?"
          },
          "choices": {
            "nl": [
              "echo",
              "cout",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "cout",
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
            "nl": "Print-achtige API (cpp)?",
            "en": "Print-like API (cpp)?"
          },
          "fill": [
            "cout"
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
        "nl": "#include",
        "en": "#include"
      },
      "choices": {
        "nl": [
          "pip",
          "preprocessor include",
          "SQL",
          "CSS"
        ],
        "en": [
          "pip",
          "preprocessor include",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Include.",
        "en": "Include."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "nullptr",
        "en": "nullptr"
      },
      "choices": {
        "nl": [
          "0 char",
          "null pointer literal",
          "SQL",
          "Lua nil table"
        ],
        "en": [
          "0 char",
          "null pointer literal",
          "SQL",
          "Lua nil table"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "nullptr.",
        "en": "nullptr."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "new/delete",
        "en": "new/delete"
      },
      "choices": {
        "nl": [
          "SQL",
          "handmatige heap (pas op)",
          "CSS",
          "GDScript only"
        ],
        "en": [
          "SQL",
          "manual heap (careful)",
          "CSS",
          "GDScript only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Heap.",
        "en": "Heap."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "const ref",
        "en": "const ref"
      },
      "choices": {
        "nl": [
          "muteert altijd",
          "lees referentie",
          "pip",
          "git"
        ],
        "en": [
          "always mutates",
          "read-only reference",
          "pip",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Const ref.",
        "en": "Const ref."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "class vs struct",
        "en": "class vs struct"
      },
      "choices": {
        "nl": [
          "geen verschil ooit",
          "default access verschil",
          "SQL",
          "CSS"
        ],
        "en": [
          "no difference ever",
          "default access differs",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Access.",
        "en": "Access."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "std::string",
        "en": "std::string"
      },
      "choices": {
        "nl": [
          "C string only",
          "C++ string type",
          "HTML",
          "Lua"
        ],
        "en": [
          "C string only",
          "C++ string type",
          "HTML",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "string.",
        "en": "string."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "== vs =",
        "en": "== vs ="
      },
      "choices": {
        "nl": [
          "zelfde",
          "vergelijk vs assign",
          "SQL",
          "CSS"
        ],
        "en": [
          "same",
          "compare vs assign",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Different.",
        "en": "Different."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "vector size",
        "en": "vector size"
      },
      "choices": {
        "nl": [
          "length() JS",
          "size()",
          "count() SQL only",
          "len"
        ],
        "en": [
          "length() JS",
          "size()",
          "count() SQL only",
          "len"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "size.",
        "en": "size."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "RAII idee",
        "en": "RAII idea"
      },
      "choices": {
        "nl": [
          "CSS",
          "resource aan scope binden",
          "pip",
          "Lua 1-index"
        ],
        "en": [
          "CSS",
          "bind resource to scope",
          "pip",
          "Lua 1-index"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "RAII.",
        "en": "RAII."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "undefined behavior",
        "en": "undefined behavior"
      },
      "choices": {
        "nl": [
          "altijd crash zichtbaar",
          "kan van alles doen",
          "SQL null",
          "CSS"
        ],
        "en": [
          "always visible crash",
          "can do anything",
          "SQL null",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "UB.",
        "en": "UB."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "namespace",
        "en": "namespace"
      },
      "choices": {
        "nl": [
          "npm",
          "naamruimte",
          "Godot signal",
          "Rust crate only"
        ],
        "en": [
          "npm",
          "name space",
          "Godot signal",
          "Rust crate only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Namespace.",
        "en": "Namespace."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "header guards",
        "en": "header guards"
      },
      "choices": {
        "nl": [
          "CSS",
          "dubbele include voorkomen",
          "SQL",
          "git LFS"
        ],
        "en": [
          "CSS",
          "prevent double include",
          "SQL",
          "git LFS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Guards.",
        "en": "Guards."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "bool alpha",
        "en": "bool"
      },
      "choices": {
        "nl": [
          "int only",
          "echt type",
          "string",
          "Lua"
        ],
        "en": [
          "int only",
          "real type",
          "string",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "bool.",
        "en": "bool."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "<< stream",
        "en": "<< stream"
      },
      "choices": {
        "nl": [
          "bit shift only always",
          "ook stream output",
          "SQL",
          "CSS"
        ],
        "en": [
          "bit shift only always",
          "also stream output",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Overloaded.",
        "en": "Overloaded."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib C++",
        "en": "CodeCrib C++"
      },
      "choices": {
        "nl": [
          "ISO exam leak",
          "origineel oefenen",
          "betaald",
          "UE cert"
        ],
        "en": [
          "ISO exam leak",
          "original practice",
          "paid",
          "UE cert"
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
        "nl": "[Pool 1] Typische output in cpp?",
        "en": "[Pool 1] Typical output in cpp?"
      },
      "choices": {
        "nl": [
          "echo",
          "cout",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "cout",
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
        "nl": "[Pool 2] Print-achtige API (cpp)?",
        "en": "[Pool 2] Print-like API (cpp)?"
      },
      "fill": [
        "cout"
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
      },
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] cpp: oefenen helpt?",
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
          "kan helpen",
          "verboden",
          "SQL only"
        ],
        "en": [
          "useless",
          "can help",
          "forbidden",
          "SQL only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] Typische output in cpp?",
        "en": "[Pool 13] Typical output in cpp?"
      },
      "choices": {
        "nl": [
          "echo",
          "cout",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "cout",
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
        "nl": "[Pool 14] Print-achtige API (cpp)?",
        "en": "[Pool 14] Print-like API (cpp)?"
      },
      "fill": [
        "cout"
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
      },
      "id": 37
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] cpp: oefenen helpt?",
        "en": "[Pool 23] {cid}: practice helps?"
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
          "kan helpen",
          "verboden",
          "SQL only"
        ],
        "en": [
          "useless",
          "can help",
          "forbidden",
          "SQL only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 39
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] Typische output in cpp?",
        "en": "[Pool 25] Typical output in cpp?"
      },
      "choices": {
        "nl": [
          "echo",
          "cout",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "cout",
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
        "nl": "[Pool 26] Print-achtige API (cpp)?",
        "en": "[Pool 26] Print-like API (cpp)?"
      },
      "fill": [
        "cout"
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
      },
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 35] cpp: oefenen helpt?",
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
        "nl": "Hello output",
        "en": "Hello output"
      },
      "prompt": {
        "nl": "Schrijf een cpp programma dat Hello print (gebruik cout).",
        "en": "Write a cpp program that prints Hello (use cout)."
      },
      "lang": "cpp",
      "starter": "// TODO Hello via cout\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "cout"
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
      "lang": "cpp",
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
