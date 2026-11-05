(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.go = {
  "id": "go",
  "title": {
    "nl": "Go voor beginners",
    "en": "Go for beginners"
  },
  "intro": {
    "nl": "fmt, slices, maps, error-waarden.",
    "en": "fmt, slices, maps, error values."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Go",
        "en": "Your first Go"
      },
      "body": {
        "nl": "<p>Go (Golang): simpele concurrency en nette tooling.</p><pre>package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hallo\")\n}</pre>",
        "en": "<p>Go (Golang): simple concurrency and tidy tooling.</p><pre>package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello\")\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Print?",
            "en": "Print?"
          },
          "choices": {
            "nl": [
              "print",
              "console.log",
              "fmt.Println",
              "trace"
            ],
            "en": [
              "print",
              "console.log",
              "fmt.Println",
              "trace"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "fmt.",
            "en": "fmt."
          }
        },
        {
          "q": {
            "nl": "package main?",
            "en": "package main?"
          },
          "choices": {
            "nl": [
              "executable entry package",
              "CSS",
              "SQL",
              "Lua"
            ],
            "en": [
              "executable entry package",
              "CSS",
              "SQL",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "main.",
            "en": "main."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "fmt.Println",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
        "lang": "go",
        "instructions": {
          "nl": "Println Hallo",
          "en": "Println Hallo"
        },
        "starter": "package main\nimport \"fmt\"\nfunc main(){ fmt.Println(\"Hallo\") }\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "fmt.Println"
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
        "nl": "Variabelen",
        "en": "Variables"
      },
      "body": {
        "nl": "<pre>var score int = 10\nname := \"Justy\"\nready := true</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> declareert en initialiseert in functies.</div>",
        "en": "<pre>var score int = 10\nname := \"Justy\"\nready := true</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> declares and initializes inside functions.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": ":= ?",
            "en": ":= ?"
          },
          "choices": {
            "nl": [
              "modulo",
              "short declare",
              "SQL",
              "CSS"
            ],
            "en": [
              "modulo",
              "short declare",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": ":=.",
            "en": "=:."
          }
        },
        {
          "q": {
            "nl": "bool type?",
            "en": "bool type?"
          },
          "choices": {
            "nl": [
              "boolean",
              "bit",
              "Bool",
              "bool"
            ],
            "en": [
              "boolean",
              "bit",
              "Bool",
              "bool"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "bool.",
            "en": "bool."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "fmt.Println",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
        "nl": "<pre>if x &gt;= 5 {\n  fmt.Println(\"B\")\n} else {\n  fmt.Println(\"C\")\n}</pre>",
        "en": "<pre>if x &gt;= 5 {\n  fmt.Println(\"B\")\n} else {\n  fmt.Println(\"C\")\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5?",
            "en": "x=5?"
          },
          "choices": {
            "nl": [
              "error",
              "C",
              "beide",
              "B"
            ],
            "en": [
              "error",
              "C",
              "both",
              "B"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "B.",
            "en": "B."
          }
        },
        {
          "q": {
            "nl": "geen ternaire ?: ?",
            "en": "no ternary ?: ?"
          },
          "choices": {
            "nl": [
              "wel standaard",
              "CSS",
              "SQL",
              "meestal if-expressie niet; gebruik if"
            ],
            "en": [
              "yes standard",
              "CSS",
              "SQL",
              "usually no; use if"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Use if.",
            "en": "Use if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "fmt.Println"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "fmt.Println"
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
    },
    {
      "id": 4,
      "title": {
        "nl": "Loops",
        "en": "Loops"
      },
      "body": {
        "nl": "<pre>for i := 0; i &lt; 10; i += 3 {\n  fmt.Println(i)\n}</pre><p>Go heeft alleen <code class=\"inline\">for</code> (ook als while).</p>",
        "en": "<pre>for i := 0; i &lt; 10; i += 3 {\n  fmt.Println(i)\n}</pre><p>Go only has <code class=\"inline\">for</code> (also as while).</p>"
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
            "nl": "while keyword?",
            "en": "while keyword?"
          },
          "choices": {
            "nl": [
              "ja",
              "elif",
              "nee, for",
              "loop"
            ],
            "en": [
              "yes",
              "elif",
              "no, for",
              "loop"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Only for.",
            "en": "Only for."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "fmt.Println",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
    },
    {
      "id": 5,
      "title": {
        "nl": "Slices en maps",
        "en": "Slices and maps"
      },
      "body": {
        "nl": "<pre>nums := []int{10,20,30}\nnums = append(nums, 40)\nm := map[string]int{\"hp\": 100}</pre>",
        "en": "<pre>nums := []int{10,20,30}\nnums = append(nums, 40)\nm := map[string]int{\"hp\": 100}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "append?",
            "en": "append?"
          },
          "choices": {
            "nl": [
              "push",
              "add",
              "append",
              "insert"
            ],
            "en": [
              "push",
              "add",
              "append",
              "insert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "append.",
            "en": "append."
          }
        },
        {
          "q": {
            "nl": "map lookup hp?",
            "en": "map lookup hp?"
          },
          "choices": {
            "nl": [
              "0 always error",
              "nil",
              "100",
              "'hp'"
            ],
            "en": [
              "0 always error",
              "nil",
              "100",
              "'hp'"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "100.",
            "en": "100."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "fmt.Println",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
        "nl": "Functies en multiple return",
        "en": "Functions and multiple return"
      },
      "body": {
        "nl": "<pre>func add(a, b int) int { return a + b }\nfunc div(a, b int) (int, error) {\n  if b == 0 { return 0, fmt.Errorf(\"div0\") }\n  return a / b, nil\n}</pre>",
        "en": "<pre>func add(a, b int) int { return a + b }\nfunc div(a, b int) (int, error) {\n  if b == 0 { return 0, fmt.Errorf(\"div0\") }\n  return a / b, nil\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Meerdere returns?",
            "en": "Multiple returns?"
          },
          "choices": {
            "nl": [
              "verboden",
              "gewoon",
              "SQL only",
              "CSS"
            ],
            "en": [
              "forbidden",
              "common",
              "SQL only",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Common.",
            "en": "Common."
          }
        },
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "nil",
              "23",
              "error",
              "5"
            ],
            "en": [
              "nil",
              "23",
              "error",
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
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "fmt.Println"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "fmt.Println"
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
      "id": 7,
      "title": {
        "nl": "error waarden",
        "en": "error values"
      },
      "body": {
        "nl": "<pre>v, err := div(10, 0)\nif err != nil {\n  fmt.Println(err)\n}</pre>",
        "en": "<pre>v, err := div(10, 0)\nif err != nil {\n  fmt.Println(err)\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "err != nil patroon?",
            "en": "err != nil pattern?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Lua pcall only",
              "exceptions verplicht",
              "standaard foutcheck"
            ],
            "en": [
              "CSS",
              "Lua pcall only",
              "exceptions required",
              "standard error check"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Idiom.",
            "en": "Idiom."
          }
        },
        {
          "q": {
            "nl": "panic?",
            "en": "panic?"
          },
          "choices": {
            "nl": [
              "log only",
              "zware abort (spaarzaam)",
              "SQL",
              "CSS"
            ],
            "en": [
              "log only",
              "heavy abort (sparingly)",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "panic.",
            "en": "panic."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "fmt.Println",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
      "id": 8,
      "title": {
        "nl": "Mini project: clamp",
        "en": "Mini project: clamp"
      },
      "body": {
        "nl": "<pre>func clamp(hp int) int {\n  if hp &lt; 0 { return 0 }\n  return hp\n}</pre>",
        "en": "<pre>func clamp(hp int) int {\n  if hp &lt; 0 { return 0 }\n  return hp\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "clamp(-1)?",
            "en": "clamp(-1)?"
          },
          "choices": {
            "nl": [
              "-1",
              "0",
              "1",
              "nil"
            ],
            "en": [
              "-1",
              "0",
              "1",
              "nil"
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
            "nl": "export: hoofdletter?",
            "en": "export: capital?"
          },
          "choices": {
            "nl": [
              "ja, exported identifiers",
              "nee",
              "SQL",
              "CSS"
            ],
            "en": [
              "yes, exported identifiers",
              "no",
              "SQL",
              "CSS"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Capital.",
            "en": "Capital."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "fmt.Println",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
        "nl": "defer tip",
        "en": "defer tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">defer f.Close()</code> runt aan het eind van de functie. Handig voor cleanup.</p>",
        "en": "<p><code class=\"inline\">defer f.Close()</code> runs at function end. Handy for cleanup.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "defer wanneer?",
            "en": "defer when?"
          },
          "choices": {
            "nl": [
              "meteen",
              "CSS",
              "SQL",
              "einde functie"
            ],
            "en": [
              "immediately",
              "CSS",
              "SQL",
              "end of function"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "End.",
            "en": "End."
          }
        },
        {
          "q": {
            "nl": "meerdere defer?",
            "en": "multiple defer?"
          },
          "choices": {
            "nl": [
              "error",
              "SQL",
              "LIFO volgorde",
              "CSS"
            ],
            "en": [
              "error",
              "SQL",
              "LIFO order",
              "CSS"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "LIFO.",
            "en": "LIFO."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in go?",
            "en": "Typical output in go?"
          },
          "choices": {
            "nl": [
              "fmt.Println",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "fmt.Println",
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
            "nl": "Print-achtige API (go)?",
            "en": "Print-like API (go)?"
          },
          "fill": [
            "fmt.Println"
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
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "goroutine",
        "en": "goroutine"
      },
      "choices": {
        "nl": [
          "lichte concurrentie",
          "OS process always",
          "SQL",
          "CSS"
        ],
        "en": [
          "lightweight concurrency",
          "always OS process",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "go.",
        "en": "go."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "channel",
        "en": "channel"
      },
      "choices": {
        "nl": [
          "TV",
          "pip",
          "communicatie tussen goroutines",
          "Lua"
        ],
        "en": [
          "TV",
          "pip",
          "talk between goroutines",
          "Lua"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "chan.",
        "en": "chan."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "defer",
        "en": "defer"
      },
      "choices": {
        "nl": [
          "uitstellen tot functie-einde",
          "CSS",
          "SQL",
          "git"
        ],
        "en": [
          "delay until func end",
          "CSS",
          "SQL",
          "git"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "defer.",
        "en": "defer."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "go mod",
        "en": "go mod"
      },
      "choices": {
        "nl": [
          "Roblox",
          "Godot",
          "SQL",
          "dependency modules"
        ],
        "en": [
          "Roblox",
          "Godot",
          "SQL",
          "dependency modules"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "modules.",
        "en": "modules."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "nil slice",
        "en": "nil slice"
      },
      "choices": {
        "nl": [
          "crash always",
          "SQL",
          "lengte 0 mogelijk",
          "CSS"
        ],
        "en": [
          "always crash",
          "SQL",
          "len 0 possible",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "OK-ish.",
        "en": "OK-ish."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "range",
        "en": "range"
      },
      "choices": {
        "nl": [
          "SQL",
          "C",
          "CSS only",
          "itereer slice/map"
        ],
        "en": [
          "SQL",
          "C",
          "CSS only",
          "iterate slice/map"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "range.",
        "en": "range."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "struct",
        "en": "struct"
      },
      "choices": {
        "nl": [
          "class Java verplicht",
          "CSS",
          "velden groeperen",
          "npm"
        ],
        "en": [
          "Java class required",
          "CSS",
          "group fields",
          "npm"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "struct.",
        "en": "struct."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "pointer *T",
        "en": "pointer *T"
      },
      "choices": {
        "nl": [
          "modulo",
          "Lua",
          "SQL",
          "pointer type"
        ],
        "en": [
          "modulo",
          "Lua",
          "SQL",
          "pointer type"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Pointer.",
        "en": "Pointer."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "interface{}",
        "en": "interface{}"
      },
      "choices": {
        "nl": [
          "CSS",
          "lege interface / any-achtig (oud)",
          "SQL",
          "Godot"
        ],
        "en": [
          "CSS",
          "empty interface / any-like (old)",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Any-ish.",
        "en": "Any-ish."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "make",
        "en": "make"
      },
      "choices": {
        "nl": [
          "slices/maps/chans maken",
          "C malloc only",
          "pip",
          "Lua"
        ],
        "en": [
          "make slices/maps/chans",
          "C malloc only",
          "pip",
          "Lua"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "make.",
        "en": "make."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "fmt.Errorf",
        "en": "fmt.Errorf"
      },
      "choices": {
        "nl": [
          "print only",
          "CSS",
          "SQL",
          "error maken"
        ],
        "en": [
          "print only",
          "CSS",
          "SQL",
          "build error"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "error.",
        "en": "error."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "go fmt",
        "en": "go fmt"
      },
      "choices": {
        "nl": [
          "CSS beautify only",
          "Rustfmt only",
          "SQL",
          "standaard formatter"
        ],
        "en": [
          "CSS beautify only",
          "Rustfmt only",
          "SQL",
          "standard formatter"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "fmt.",
        "en": "fmt."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "init()",
        "en": "init()"
      },
      "choices": {
        "nl": [
          "package init hook",
          "main alias",
          "SQL",
          "CSS"
        ],
        "en": [
          "package init hook",
          "main alias",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "init.",
        "en": "init."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": ":= buiten func?",
        "en": ":= outside func?"
      },
      "choices": {
        "nl": [
          "meestal nee",
          "ja always",
          "SQL",
          "CSS"
        ],
        "en": [
          "usually no",
          "yes always",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Inside funcs.",
        "en": "Inside funcs."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib Go",
        "en": "CodeCrib Go"
      },
      "choices": {
        "nl": [
          "origineel oefenen",
          "Google leak",
          "betaald",
          "cert"
        ],
        "en": [
          "original practice",
          "Google leak",
          "paid",
          "cert"
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
        "nl": "[Pool 1] Typische output in go?",
        "en": "[Pool 1] Typical output in go?"
      },
      "choices": {
        "nl": [
          "echo",
          "SELECT",
          "fmt.Println",
          "CSS"
        ],
        "en": [
          "echo",
          "SELECT",
          "fmt.Println",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 16
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Print-achtige API (go)?",
        "en": "[Pool 2] Print-like API (go)?"
      },
      "fill": [
        "fmt.Println"
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
        "nl": "[Pool 11] go: oefenen helpt?",
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
          "kan helpen",
          "nutteloos",
          "verboden",
          "SQL only"
        ],
        "en": [
          "can help",
          "useless",
          "forbidden",
          "SQL only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Helps.",
        "en": "Helps."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] Typische output in go?",
        "en": "[Pool 13] Typical output in go?"
      },
      "choices": {
        "nl": [
          "echo",
          "CSS",
          "SELECT",
          "fmt.Println"
        ],
        "en": [
          "echo",
          "CSS",
          "SELECT",
          "fmt.Println"
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
        "nl": "[Pool 14] Print-achtige API (go)?",
        "en": "[Pool 14] Print-like API (go)?"
      },
      "fill": [
        "fmt.Println"
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
        "nl": "[Pool 23] go: oefenen helpt?",
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
        "nl": "[Pool 25] Typische output in go?",
        "en": "[Pool 25] Typical output in go?"
      },
      "choices": {
        "nl": [
          "fmt.Println",
          "echo",
          "SELECT",
          "CSS"
        ],
        "en": [
          "fmt.Println",
          "echo",
          "SELECT",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 40
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] Print-achtige API (go)?",
        "en": "[Pool 26] Print-like API (go)?"
      },
      "fill": [
        "fmt.Println"
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
        "nl": "[Pool 35] go: oefenen helpt?",
        "en": "[Pool 35] {cid}: practice helps?"
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
      "id": 50
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Println Hello",
        "en": "Println Hello"
      },
      "prompt": {
        "nl": "fmt.Println Hello.",
        "en": "fmt.Println Hello."
      },
      "lang": "go",
      "starter": "package main\nimport \"fmt\"\nfunc main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "fmt.Println"
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
        "nl": "short declare",
        "en": "short declare"
      },
      "prompt": {
        "nl": "Gebruik := ergens.",
        "en": "Use := somewhere."
      },
      "lang": "go",
      "starter": "package main\nimport \"fmt\"\nfunc main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": ":="
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
