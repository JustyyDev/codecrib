(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.rust = {
  "id": "rust",
  "title": {
    "nl": "Rust voor beginners",
    "en": "Rust for beginners"
  },
  "intro": {
    "nl": "Ownership, mut, Result/Option, Vec.",
    "en": "Ownership, mut, Result/Option, Vec."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Rust",
        "en": "Your first Rust"
      },
      "body": {
        "nl": "<p>Rust: veilig en snel. Geen GC, wel ownership.</p><pre>fn main() {\n  println!(\"Hallo\");\n}</pre>",
        "en": "<p>Rust: safe and fast. No GC, but ownership.</p><pre>fn main() {\n  println!(\"Hello\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Print macro?",
            "en": "Print macro?"
          },
          "choices": {
            "nl": [
              "print!",
              "println!",
              "console.log",
              "trace"
            ],
            "en": [
              "print!",
              "println!",
              "console.log",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "println!.",
            "en": "println!."
          }
        },
        {
          "q": {
            "nl": "fn main?",
            "en": "fn main?"
          },
          "choices": {
            "nl": [
              "verplicht entry",
              "CSS",
              "SQL",
              "Lua"
            ],
            "en": [
              "required entry",
              "CSS",
              "SQL",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Entry.",
            "en": "Entry."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "lang": "rust",
        "instructions": {
          "nl": "println Hallo",
          "en": "println Hallo"
        },
        "starter": "fn main(){ println!(\"Hallo\"); }\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "println!"
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
        "nl": "Ownership smaak",
        "en": "Ownership flavor"
      },
      "body": {
        "nl": "<pre>let score = 10;\nlet mut hp = 100;\nhp -= 3;</pre><div class=\"callout\"><strong>Valkuil:</strong> variabelen zijn immutable tenzij <code class=\"inline\">mut</code>.</div>",
        "en": "<pre>let score = 10;\nlet mut hp = 100;\nhp -= 3;</pre><div class=\"callout\"><strong>Pitfall:</strong> bindings are immutable unless <code class=\"inline\">mut</code>.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Zonder mut wijzigen?",
            "en": "Change without mut?"
          },
          "choices": {
            "nl": [
              "ok",
              "compile error",
              "runtime null",
              "SQL"
            ],
            "en": [
              "ok",
              "compile error",
              "runtime null",
              "SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Need mut.",
            "en": "Need mut."
          }
        },
        {
          "q": {
            "nl": "let vs var?",
            "en": "let vs var?"
          },
          "choices": {
            "nl": [
              "var keyword",
              "let is standaard",
              "SQL",
              "CSS"
            ],
            "en": [
              "var keyword",
              "let is standard",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "let.",
            "en": "let."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "<pre>if x &gt;= 5 { println!(\"B\"); } else { println!(\"C\"); }</pre>",
        "en": "<pre>if x &gt;= 5 { println!(\"B\"); } else { println!(\"C\"); }</pre>"
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
            "nl": "if is expressie?",
            "en": "if is expression?"
          },
          "choices": {
            "nl": [
              "nee altijd",
              "kan waarde opleveren",
              "SQL",
              "CSS"
            ],
            "en": [
              "never",
              "can yield a value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Expression.",
            "en": "Expression."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "<pre>for i in (0..10).step_by(3) {\n  println!(\"{i}\");\n}</pre>",
        "en": "<pre>for i in (0..10).step_by(3) {\n  println!(\"{i}\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "0..10 half-open?",
            "en": "0..10 half-open?"
          },
          "choices": {
            "nl": [
              "bevat 10",
              "0 t/m 9",
              "1 t/m 10",
              "leeg"
            ],
            "en": [
              "includes 10",
              "0 through 9",
              "1 through 10",
              "empty"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Half-open.",
            "en": "Half-open."
          }
        },
        {
          "q": {
            "nl": "loop {} ?",
            "en": "loop {} ?"
          },
          "choices": {
            "nl": [
              "verboden",
              "oneindig tot break",
              "SQL",
              "CSS"
            ],
            "en": [
              "forbidden",
              "infinite until break",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "loop.",
            "en": "loop."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "Vec en ownership",
        "en": "Vec and ownership"
      },
      "body": {
        "nl": "<pre>let mut nums = vec![10,20,30];\nnums.push(40);</pre>",
        "en": "<pre>let mut nums = vec![10,20,30];\nnums.push(40);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "vec! macro?",
            "en": "vec! macro?"
          },
          "choices": {
            "nl": [
              "CSS",
              "maakt Vec",
              "SQL",
              "Lua"
            ],
            "en": [
              "CSS",
              "builds Vec",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Vec.",
            "en": "Vec."
          }
        },
        {
          "q": {
            "nl": "push nodig mut?",
            "en": "push needs mut?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "SQL",
              "CSS"
            ],
            "en": [
              "no",
              "yes",
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
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "Functies en Result",
        "en": "Functions and Result"
      },
      "body": {
        "nl": "<pre>fn add(a: i32, b: i32) -&gt; i32 { a + b }</pre>",
        "en": "<pre>fn add(a: i32, b: i32) -&gt; i32 { a + b }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "i32?",
            "en": "i32?"
          },
          "choices": {
            "nl": [
              "string",
              "32-bit int",
              "SQL",
              "float only"
            ],
            "en": [
              "string",
              "32-bit int",
              "SQL",
              "float only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "i32.",
            "en": "i32."
          }
        },
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "5",
              "23",
              "()",
              "error"
            ],
            "en": [
              "5",
              "23",
              "()",
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
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "Result/Option",
        "en": "Result/Option"
      },
      "body": {
        "nl": "<pre>fn parse_u(s: &amp;str) -&gt; Result&lt;u32, std::num::ParseIntError&gt; {\n  s.parse()\n}</pre>",
        "en": "<pre>fn parse_u(s: &amp;str) -&gt; Result&lt;u32, std::num::ParseIntError&gt; {\n  s.parse()\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Result?",
            "en": "Result?"
          },
          "choices": {
            "nl": [
              "alleen Ok",
              "Ok of Err",
              "SQL",
              "null always"
            ],
            "en": [
              "Ok only",
              "Ok or Err",
              "SQL",
              "null always"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Result.",
            "en": "Result."
          }
        },
        {
          "q": {
            "nl": "Option None?",
            "en": "Option None?"
          },
          "choices": {
            "nl": [
              "null Java spelling",
              "geen waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "null Java spelling",
              "no value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "None.",
            "en": "None."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "Mini project: clamp hp",
        "en": "Mini project: clamp hp"
      },
      "body": {
        "nl": "<pre>fn clamp(hp: i32) -&gt; i32 { if hp &lt; 0 { 0 } else { hp } }</pre>",
        "en": "<pre>fn clamp(hp: i32) -&gt; i32 { if hp &lt; 0 { 0 } else { hp } }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "clamp(-2)?",
            "en": "clamp(-2)?"
          },
          "choices": {
            "nl": [
              "-2",
              "0",
              "2",
              "None"
            ],
            "en": [
              "-2",
              "0",
              "2",
              "None"
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
            "nl": "Geen ; op laatste expressie?",
            "en": "No ; on last expression?"
          },
          "choices": {
            "nl": [
              "error altijd",
              "returnt die waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "always error",
              "returns that value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Implicit return.",
            "en": "Implicit return."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "Option tip",
        "en": "Option tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">Some(x)</code> / <code class=\"inline\">None</code>. Match of <code class=\"inline\">if let</code>.</p>",
        "en": "<p><code class=\"inline\">Some(x)</code> / <code class=\"inline\">None</code>. Match or <code class=\"inline\">if let</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "None is?",
            "en": "None is?"
          },
          "choices": {
            "nl": [
              "null Java spelling",
              "geen waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "null Java spelling",
              "no value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "None.",
            "en": "None."
          }
        },
        {
          "q": {
            "nl": "unwrap risk?",
            "en": "unwrap risk?"
          },
          "choices": {
            "nl": [
              "altijd veilig",
              "kan panic",
              "SQL",
              "CSS"
            ],
            "en": [
              "always safe",
              "can panic",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Panic.",
            "en": "Panic."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in rust?",
            "en": "Typical output in rust?"
          },
          "choices": {
            "nl": [
              "echo",
              "println!",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "println!",
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
            "nl": "Print-achtige API (rust)?",
            "en": "Print-like API (rust)?"
          },
          "fill": [
            "println!"
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
        "nl": "borrow &amp;",
        "en": "borrow &amp;"
      },
      "choices": {
        "nl": [
          "copy always",
          "referentie lenen",
          "SQL",
          "CSS"
        ],
        "en": [
          "always copy",
          "borrow reference",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Borrow.",
        "en": "Borrow."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "move",
        "en": "move"
      },
      "choices": {
        "nl": [
          "CSS anim",
          "ownership verplaatsen",
          "SQL",
          "Lua"
        ],
        "en": [
          "CSS anim",
          "move ownership",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Move.",
        "en": "Move."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "cargo",
        "en": "cargo"
      },
      "choices": {
        "nl": [
          "ship",
          "build tool / packages",
          "SQL",
          "Godot"
        ],
        "en": [
          "ship",
          "build tool / packages",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Cargo.",
        "en": "Cargo."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "match",
        "en": "match"
      },
      "choices": {
        "nl": [
          "if only",
          "pattern match",
          "SQL MATCH",
          "CSS"
        ],
        "en": [
          "if only",
          "pattern match",
          "SQL MATCH",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "match.",
        "en": "match."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "unwrap",
        "en": "unwrap"
      },
      "choices": {
        "nl": [
          "veilig altijd",
          "pakt Ok/Some of panic",
          "SQL",
          "CSS"
        ],
        "en": [
          "always safe",
          "takes Ok/Some or panics",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Careful.",
        "en": "Careful."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "String vs &amp;str",
        "en": "String vs &amp;str"
      },
      "choices": {
        "nl": [
          "zelfde",
          "owned vs borrowed str",
          "SQL",
          "Lua"
        ],
        "en": [
          "same",
          "owned vs borrowed str",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Different.",
        "en": "Different."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "panic!",
        "en": "panic!"
      },
      "choices": {
        "nl": [
          "log only",
          "stopt thread/unwind",
          "SQL",
          "CSS"
        ],
        "en": [
          "log only",
          "stops thread/unwind",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Panic.",
        "en": "Panic."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "impl",
        "en": "impl"
      },
      "choices": {
        "nl": [
          "SQL",
          "methods op type",
          "pip",
          "Lua end"
        ],
        "en": [
          "SQL",
          "methods on type",
          "pip",
          "Lua end"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "impl.",
        "en": "impl."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "trait",
        "en": "trait"
      },
      "choices": {
        "nl": [
          "CSS",
          "gedeeld gedrag",
          "SQL view",
          "npm"
        ],
        "en": [
          "CSS",
          "shared behavior",
          "SQL view",
          "npm"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Trait.",
        "en": "Trait."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "lifetime 'a",
        "en": "lifetime 'a"
      },
      "choices": {
        "nl": [
          "CSS animation",
          "referentie leeftijd",
          "SQL",
          "Lua"
        ],
        "en": [
          "CSS animation",
          "reference lifetime",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Lifetime.",
        "en": "Lifetime."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "Result?",
        "en": "? operator"
      },
      "choices": {
        "nl": [
          "ternary",
          "error propagate",
          "SQL",
          "CSS"
        ],
        "en": [
          "ternary",
          "error propagate",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "?.",
        "en": "?."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "Clone",
        "en": "Clone"
      },
      "choices": {
        "nl": [
          "move only",
          "expliciet kopiëren",
          "SQL",
          "Godot"
        ],
        "en": [
          "move only",
          "explicit copy",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Clone.",
        "en": "Clone."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "unsafe",
        "en": "unsafe"
      },
      "choices": {
        "nl": [
          "verboden forever",
          "extra powers met verantwoordelijkheid",
          "SQL",
          "CSS"
        ],
        "en": [
          "forbidden forever",
          "extra powers with duty",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "unsafe.",
        "en": "unsafe."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "enum Option",
        "en": "enum Option"
      },
      "choices": {
        "nl": [
          "None/Some",
          "null Java",
          "SQL",
          "CSS"
        ],
        "en": [
          "None/Some",
          "null Java",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Option.",
        "en": "Option."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib Rust",
        "en": "CodeCrib Rust"
      },
      "choices": {
        "nl": [
          "official leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "official leak",
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
        "nl": "[Pool 1] Typische output in rust?",
        "en": "[Pool 1] Typical output in rust?"
      },
      "choices": {
        "nl": [
          "echo",
          "println!",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "println!",
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
        "nl": "[Pool 2] Print-achtige API (rust)?",
        "en": "[Pool 2] Print-like API (rust)?"
      },
      "fill": [
        "println!"
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
        "nl": "[Pool 11] rust: oefenen helpt?",
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
        "nl": "[Pool 13] Typische output in rust?",
        "en": "[Pool 13] Typical output in rust?"
      },
      "choices": {
        "nl": [
          "echo",
          "println!",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "println!",
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
        "nl": "[Pool 14] Print-achtige API (rust)?",
        "en": "[Pool 14] Print-like API (rust)?"
      },
      "fill": [
        "println!"
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
        "nl": "[Pool 23] rust: oefenen helpt?",
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
        "nl": "[Pool 25] Typische output in rust?",
        "en": "[Pool 25] Typical output in rust?"
      },
      "choices": {
        "nl": [
          "echo",
          "println!",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "println!",
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
        "nl": "[Pool 26] Print-achtige API (rust)?",
        "en": "[Pool 26] Print-like API (rust)?"
      },
      "fill": [
        "println!"
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
        "nl": "[Pool 35] rust: oefenen helpt?",
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
        "nl": "println Hello",
        "en": "println Hello"
      },
      "prompt": {
        "nl": "Gebruik println! met Hello.",
        "en": "Use println! with Hello."
      },
      "lang": "rust",
      "starter": "fn main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "println!"
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
        "nl": "mut hp",
        "en": "mut hp"
      },
      "prompt": {
        "nl": "Gebruik let mut hp.",
        "en": "Use let mut hp."
      },
      "lang": "rust",
      "starter": "fn main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "mut"
        },
        {
          "type": "code_contains",
          "value": "hp"
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
