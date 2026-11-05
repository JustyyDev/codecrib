(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.haxe = {
  "id": "haxe",
  "title": {
    "nl": "Haxe (FNF modding)",
    "en": "Haxe (FNF modding)"
  },
  "intro": {
    "nl": "Types, classes en tips die je in FNF-mods tegenkomt.",
    "en": "Types, classes and tips you meet in FNF mods."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Haxe",
        "en": "Your first Haxe"
      },
      "body": {
        "nl": "<p>Haxe compileert naar veel targets. In FNF-mods zie je Haxe overal.</p><pre>trace(\"Hallo CodeCrib\");</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">trace</code> is de snelle debug-print. Types zijn welkom.</div>",
        "en": "<p>Haxe compiles to many targets. FNF mods use Haxe everywhere.</p><pre>trace(\"Hello CodeCrib\");</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">trace</code> is the quick debug print. Types are welcome.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Debug print?",
            "en": "Debug print?"
          },
          "choices": {
            "nl": [
              "print",
              "console.log only",
              "trace",
              "echo"
            ],
            "en": [
              "print",
              "console.log only",
              "trace",
              "echo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "trace.",
            "en": "trace."
          }
        },
        {
          "q": {
            "nl": "Haxe is handig voor?",
            "en": "Haxe is handy for?"
          },
          "choices": {
            "nl": [
              "alleen SQL",
              "o.a. FNF mods / multi-target",
              "alleen Excel",
              "alleen CSS"
            ],
            "en": [
              "SQL only",
              "e.g. FNF mods / multi-target",
              "Excel only",
              "CSS only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Mods.",
            "en": "Mods."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "trace",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
      ],
      "exercise": {
        "lang": "haxe",
        "instructions": {
          "nl": "trace Hallo",
          "en": "trace Hallo"
        },
        "starter": "trace(\"Hallo\");\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "trace"
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
        "nl": "Types en variabelen",
        "en": "Types and variables"
      },
      "body": {
        "nl": "<pre>var score:Int = 10;\nvar name:String = \"Justy\";\nvar ready:Bool = true;\nvar ratio:Float = 0.5;</pre><div class=\"callout\"><strong>Valkuil vs C#:</strong> In Haxe is <code class=\"inline\">/</code> meestal Float-deling. In C# is <code class=\"inline\">int/int</code> een int.</div>",
        "en": "<pre>var score:Int = 10;\nvar name:String = \"Justy\";\nvar ready:Bool = true;\nvar ratio:Float = 0.5;</pre><div class=\"callout\"><strong>Pitfall vs C#:</strong> In Haxe <code class=\"inline\">/</code> is usually Float division. In C# <code class=\"inline\">int/int</code> is int.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Int type spelling?",
            "en": "Int type spelling?"
          },
          "choices": {
            "nl": [
              "Int",
              "int",
              "integer",
              "i32 only"
            ],
            "en": [
              "Int",
              "int",
              "integer",
              "i32 only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Int.",
            "en": "Int."
          }
        },
        {
          "q": {
            "nl": "Bool waarden?",
            "en": "Bool values?"
          },
          "choices": {
            "nl": [
              "True/False",
              "true/false",
              "YES/NO",
              "1/0 only"
            ],
            "en": [
              "True/False",
              "true/false",
              "YES/NO",
              "1/0 only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true/false.",
            "en": "true/false."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "trace"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "trace"
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
        "nl": "<pre>var x = 5;\nif (x &gt; 3 &amp;&amp; x &lt; 5) trace(\"A\");\nelse if (x &gt;= 5) trace(\"B\");\nelse trace(\"C\");</pre>",
        "en": "<pre>var x = 5;\nif (x &gt; 3 &amp;&amp; x &lt; 5) trace(\"A\");\nelse if (x &gt;= 5) trace(\"B\");\nelse trace(\"C\");</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5?",
            "en": "x=5?"
          },
          "choices": {
            "nl": [
              "A",
              "error",
              "C",
              "B"
            ],
            "en": [
              "A",
              "error",
              "C",
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
            "nl": "else if in Haxe?",
            "en": "else if in Haxe?"
          },
          "choices": {
            "nl": [
              "elif",
              "elseif",
              "else if",
              "elsif"
            ],
            "en": [
              "elif",
              "elseif",
              "else if",
              "elsif"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "else if.",
            "en": "else if."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "trace",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
        "nl": "<pre>for (i in 0...10) {\n  if (i % 3 == 0) trace(i);\n}</pre><p><code class=\"inline\">0...10</code> is half-open: 0 t/m 9.</p>",
        "en": "<pre>for (i in 0...10) {\n  if (i % 3 == 0) trace(i);\n}</pre><p><code class=\"inline\">0...10</code> is half-open: 0 through 9.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "0...3 bevat?",
            "en": "0...3 contains?"
          },
          "choices": {
            "nl": [
              "0,1,2,3",
              "3",
              "1,2,3",
              "0,1,2"
            ],
            "en": [
              "0,1,2,3",
              "3",
              "1,2,3",
              "0,1,2"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Half-open.",
            "en": "Half-open."
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
              "alleen Flash",
              "alleen macros",
              "ja"
            ],
            "en": [
              "no",
              "Flash only",
              "macros only",
              "yes"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Ja.",
            "en": "Yes."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "trace",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
        "nl": "Arrays en maps",
        "en": "Arrays and maps"
      },
      "body": {
        "nl": "<pre>var nums = [10,20,30];\ntrace(nums[0]);\nvar map = new Map&lt;String,Int&gt;();\nmap.set(\"hp\", 100);</pre>",
        "en": "<pre>var nums = [10,20,30];\ntrace(nums[0]);\nvar map = new Map&lt;String,Int&gt;();\nmap.set(\"hp\", 100);</pre>"
      },
      "quiz": [
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
              "null"
            ],
            "en": [
              "10",
              "20",
              "30",
              "null"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "0-based.",
            "en": "0-based."
          }
        },
        {
          "q": {
            "nl": "Map set?",
            "en": "Map set?"
          },
          "choices": {
            "nl": [
              "append",
              "insertRow",
              "push",
              "set"
            ],
            "en": [
              "append",
              "insertRow",
              "push",
              "set"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "set.",
            "en": "set."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "CSS",
              "SELECT",
              "trace"
            ],
            "en": [
              "echo",
              "CSS",
              "SELECT",
              "trace"
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
      "id": 6,
      "title": {
        "nl": "Functions en classes",
        "en": "Functions and classes"
      },
      "body": {
        "nl": "<pre>function add(a:Int, b:Int):Int {\n  return a + b;\n}\nclass Player {\n  public var hp:Int;\n  public function new(hp:Int) this.hp = hp;\n}</pre>",
        "en": "<pre>function add(a:Int, b:Int):Int {\n  return a + b;\n}\nclass Player {\n  public var hp:Int;\n  public function new(hp:Int) this.hp = hp;\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Constructor heet?",
            "en": "Constructor is called?"
          },
          "choices": {
            "nl": [
              "init",
              "__init__",
              "ctor",
              "new"
            ],
            "en": [
              "init",
              "__init__",
              "ctor",
              "new"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "new.",
            "en": "new."
          }
        },
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "23",
              "null",
              "5",
              "error"
            ],
            "en": [
              "23",
              "null",
              "5",
              "error"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "trace",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
        "nl": "Null safety smaak",
        "en": "Null safety flavor"
      },
      "body": {
        "nl": "<p>Moderne Haxe heeft null-safety. <code class=\"inline\">Null&lt;T&gt;</code> en checks helpen crashes voorkomen.</p><pre>var s:Null&lt;String&gt; = null;\nif (s != null) trace(s.length);</pre>",
        "en": "<p>Modern Haxe has null-safety. <code class=\"inline\">Null&lt;T&gt;</code> and checks help avoid crashes.</p><pre>var s:Null&lt;String&gt; = null;\nif (s != null) trace(s.length);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Null&lt;String&gt; mag?",
            "en": "Null&lt;String&gt; allows?"
          },
          "choices": {
            "nl": [
              "alleen ''",
              "alleen false",
              "alleen 0",
              "null of String"
            ],
            "en": [
              "only ''",
              "only false",
              "only 0",
              "null or String"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Nullable.",
            "en": "Nullable."
          }
        },
        {
          "q": {
            "nl": "Zonder check s.length op null?",
            "en": "Without check s.length on null?"
          },
          "choices": {
            "nl": [
              "riskant/error",
              "veilig",
              "altijd 0",
              "compileert C"
            ],
            "en": [
              "risky/error",
              "safe",
              "always 0",
              "compiles C"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Riskant.",
            "en": "Risky."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "trace",
              "echo",
              "SELECT",
              "CSS"
            ],
            "en": [
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
      "id": 8,
      "title": {
        "nl": "FNF modding smaak",
        "en": "FNF modding flavor"
      },
      "body": {
        "nl": "<p>In FNF-achtige setups zie je vaak classes voor states, characters en songs. Conceptueel:</p><pre>class CoolState {\n  public function update(elapsed:Float):Void {\n    // input, anim, camera\n  }\n}</pre><p>Denk in updates per frame, assets laden, en nette typed fields.</p>",
        "en": "<p>FNF-like setups often use classes for states, characters and songs. Conceptually:</p><pre>class CoolState {\n  public function update(elapsed:Float):Void {\n    // input, anim, camera\n  }\n}</pre><p>Think frame updates, asset loading, and tidy typed fields.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "update(elapsed) idee?",
            "en": "update(elapsed) idea?"
          },
          "choices": {
            "nl": [
              "SQL trigger",
              "CSS hover only",
              "per-frame tick",
              "git hook"
            ],
            "en": [
              "SQL trigger",
              "CSS hover only",
              "per-frame tick",
              "git hook"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Game loop.",
            "en": "Game loop."
          }
        },
        {
          "q": {
            "nl": ":Void betekent?",
            "en": "Void means?"
          },
          "choices": {
            "nl": [
              "return int",
              "private",
              "geen return waarde",
              "macro"
            ],
            "en": [
              "return int",
              "private",
              "no return value",
              "macro"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "No value.",
            "en": "No value."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "SELECT",
              "trace",
              "CSS"
            ],
            "en": [
              "echo",
              "SELECT",
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
        "nl": "Mini project: HP helper",
        "en": "Mini project: HP helper"
      },
      "body": {
        "nl": "<pre>class Fighter {\n  public var hp:Int;\n  public function new(hp:Int) this.hp = hp;\n  public function hit(dmg:Int):Void {\n    hp -= dmg;\n    if (hp &lt; 0) hp = 0;\n  }\n}</pre>",
        "en": "<pre>class Fighter {\n  public var hp:Int;\n  public function new(hp:Int) this.hp = hp;\n  public function hit(dmg:Int):Void {\n    hp -= dmg;\n    if (hp &lt; 0) hp = 0;\n  }\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Na hp=10 hit(3) hp?",
            "en": "After hp=10 hit(3) hp?"
          },
          "choices": {
            "nl": [
              "13",
              "7",
              "0",
              "10"
            ],
            "en": [
              "13",
              "7",
              "0",
              "10"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "10-3.",
            "en": "10-3."
          }
        },
        {
          "q": {
            "nl": "Clamp &lt;0 voorkomt?",
            "en": "Clamp &lt;0 prevents?"
          },
          "choices": {
            "nl": [
              "float",
              "negatieve HP",
              "compile",
              "nil tables"
            ],
            "en": [
              "float",
              "negative HP",
              "compile",
              "nil tables"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Floor at 0.",
            "en": "Floor at 0."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in haxe?",
            "en": "Typical output in haxe?"
          },
          "choices": {
            "nl": [
              "echo",
              "trace",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "trace",
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
            "nl": "Print-achtige API (haxe)?",
            "en": "Print-like API (haxe)?"
          },
          "fill": [
            "trace"
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
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "Haxe target idee",
        "en": "Haxe target idea"
      },
      "choices": {
        "nl": [
          "alleen JVM",
          "veel backends",
          "alleen punchcards",
          "alleen SQL"
        ],
        "en": [
          "JVM only",
          "many backends",
          "punchcards only",
          "SQL only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Multi-target.",
        "en": "Multi-target."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "typedef",
        "en": "typedef"
      },
      "choices": {
        "nl": [
          "CSS type",
          "type alias",
          "git tag",
          "pip"
        ],
        "en": [
          "CSS type",
          "type alias",
          "git tag",
          "pip"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alias.",
        "en": "Alias."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "enum",
        "en": "enum"
      },
      "choices": {
        "nl": [
          "SQL only",
          "verboden",
          "alleen Lua",
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
      "id": 4,
      "q": {
        "nl": "Std.int",
        "en": "Std.int"
      },
      "choices": {
        "nl": [
          "string",
          "shuffle",
          "DOM",
          "naar Int"
        ],
        "en": [
          "string",
          "shuffle",
          "DOM",
          "to Int"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Convert.",
        "en": "Convert."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "array push",
        "en": "array push"
      },
      "choices": {
        "nl": [
          "push",
          "append",
          "addRow",
          "insertRow"
        ],
        "en": [
          "push",
          "append",
          "addRow",
          "insertRow"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "push.",
        "en": "push."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "for (x in arr)",
        "en": "for (x in arr)"
      },
      "choices": {
        "nl": [
          "waarden",
          "keys only",
          "SQL",
          "CSS"
        ],
        "en": [
          "values",
          "keys only",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Values.",
        "en": "Values."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "switch",
        "en": "switch"
      },
      "choices": {
        "nl": [
          "nee",
          "bestaat",
          "alleen macros",
          "python only"
        ],
        "en": [
          "no",
          "exists",
          "macros only",
          "python only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Exists.",
        "en": "Exists."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "import",
        "en": "import"
      },
      "choices": {
        "nl": [
          "using C",
          "modules/types",
          "pip uninstall",
          "DOM"
        ],
        "en": [
          "using C",
          "modules/types",
          "pip uninstall",
          "DOM"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Import.",
        "en": "Import."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "private field",
        "en": "private field"
      },
      "choices": {
        "nl": [
          "public always",
          "CSS",
          "SQL",
          "toegangscontrole"
        ],
        "en": [
          "always public",
          "CSS",
          "SQL",
          "access control"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Visibility.",
        "en": "Visibility."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "Dynamic",
        "en": "Dynamic"
      },
      "choices": {
        "nl": [
          "strengste type",
          "los type",
          "SQL",
          "GPU"
        ],
        "en": [
          "strictest type",
          "loose type",
          "SQL",
          "GPU"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Loose.",
        "en": "Loose."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "macro",
        "en": "macro"
      },
      "choices": {
        "nl": [
          "git",
          "runtime only CSS",
          "SQL",
          "compile-time code"
        ],
        "en": [
          "git",
          "runtime CSS only",
          "SQL",
          "compile-time code"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Macros.",
        "en": "Macros."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "StringTools",
        "en": "StringTools"
      },
      "choices": {
        "nl": [
          "CSS",
          "Go fmt",
          "Roblox service",
          "string helpers"
        ],
        "en": [
          "CSS",
          "Go fmt",
          "Roblox service",
          "string helpers"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Helpers.",
        "en": "Helpers."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "Null&lt;T&gt;",
        "en": "Null&lt;T&gt;"
      },
      "choices": {
        "nl": [
          "verboden",
          "nullable T",
          "alleen arrays",
          "float"
        ],
        "en": [
          "forbidden",
          "nullable T",
          "arrays only",
          "float"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Nullable.",
        "en": "Nullable."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "override",
        "en": "override"
      },
      "choices": {
        "nl": [
          "SQL",
          "method opnieuw in subclass",
          "pip",
          "CSS"
        ],
        "en": [
          "SQL",
          "redefine method in subclass",
          "pip",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Override.",
        "en": "Override."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "super",
        "en": "super"
      },
      "choices": {
        "nl": [
          "nil",
          "SQL",
          "DOM root",
          "bovenliggende class"
        ],
        "en": [
          "nil",
          "SQL",
          "DOM root",
          "parent class"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Parent.",
        "en": "Parent."
      }
    },
    {
      "id": 16,
      "q": {
        "nl": "package",
        "en": "package"
      },
      "choices": {
        "nl": [
          "npm only",
          "namespace organisatie",
          "CSS",
          "Lua table"
        ],
        "en": [
          "npm only",
          "namespace organization",
          "CSS",
          "Lua table"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Packages.",
        "en": "Packages."
      }
    },
    {
      "id": 17,
      "q": {
        "nl": "FlxSprite smaak",
        "en": "FlxSprite flavor"
      },
      "choices": {
        "nl": [
          "vaak in HaxeFlixel/FNF ecosystem",
          "SQL row",
          "Java Swing only",
          "Rust crate"
        ],
        "en": [
          "often in HaxeFlixel/FNF ecosystem",
          "SQL row",
          "Java Swing only",
          "Rust crate"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Flixel.",
        "en": "Flixel."
      }
    },
    {
      "id": 18,
      "q": {
        "nl": "@:metadata",
        "en": "@:metadata"
      },
      "choices": {
        "nl": [
          "compiler metadata",
          "git blame",
          "CSS",
          "pip"
        ],
        "en": [
          "compiler metadata",
          "git blame",
          "CSS",
          "pip"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Meta.",
        "en": "Meta."
      }
    },
    {
      "id": 19,
      "q": {
        "nl": "trace vs return",
        "en": "trace vs return"
      },
      "choices": {
        "nl": [
          "trace debug, return geeft waarde",
          "zelfde",
          "SQL",
          "beide verboden"
        ],
        "en": [
          "trace debug, return yields value",
          "same",
          "SQL",
          "both forbidden"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Different.",
        "en": "Different."
      }
    },
    {
      "id": 20,
      "q": {
        "nl": "CodeCrib Haxe",
        "en": "CodeCrib Haxe"
      },
      "choices": {
        "nl": [
          "officieel FNF exam",
          "origineel oefenen",
          "betaald",
          "leaked"
        ],
        "en": [
          "official FNF exam",
          "original practice",
          "paid",
          "leaked"
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
        "nl": "[Pool 1] Typische output in haxe?",
        "en": "[Pool 1] Typical output in haxe?"
      },
      "choices": {
        "nl": [
          "echo",
          "SELECT",
          "trace",
          "CSS"
        ],
        "en": [
          "echo",
          "SELECT",
          "trace",
          "CSS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 21
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Print-achtige API (haxe)?",
        "en": "[Pool 2] Print-like API (haxe)?"
      },
      "fill": [
        "trace"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 22
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
      "id": 23
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
      "id": 24
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
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 6] Index start vaak?",
        "en": "[Pool 6] Index often starts?"
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
      "id": 26
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
      "id": 27
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
      "id": 28
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
      "id": 29
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
      },
      "id": 30
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] haxe: oefenen helpt?",
        "en": "[Pool 11] {cid}: practice helps?"
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
      "id": 31
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
      "id": 32
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] Typische output in haxe?",
        "en": "[Pool 13] Typical output in haxe?"
      },
      "choices": {
        "nl": [
          "echo",
          "trace",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "trace",
          "SELECT",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Print API.",
        "en": "Print API."
      },
      "id": 33
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 14] Print-achtige API (haxe)?",
        "en": "[Pool 14] Print-like API (haxe)?"
      },
      "fill": [
        "trace"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 34
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
      "id": 35
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
      "id": 36
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
      "id": 37
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
      "id": 38
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
      "id": 39
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
      "id": 40
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
      "id": 41
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
      },
      "id": 42
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] haxe: oefenen helpt?",
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
      "id": 43
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
      "id": 44
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] Typische output in haxe?",
        "en": "[Pool 25] Typical output in haxe?"
      },
      "choices": {
        "nl": [
          "trace",
          "echo",
          "SELECT",
          "CSS"
        ],
        "en": [
          "trace",
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
      "id": 45
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] Print-achtige API (haxe)?",
        "en": "[Pool 26] Print-like API (haxe)?"
      },
      "fill": [
        "trace"
      ],
      "why": {
        "nl": "Print.",
        "en": "Print."
      },
      "id": 46
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
      "id": 47
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
      "id": 48
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 29] Spot: while(true) zonder break",
        "en": "[Pool 29] Spot: while(true) without break"
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
      },
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 30] Index start vaak?",
        "en": "[Pool 30] Index often starts?"
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
        "nl": "Schrijf een haxe programma dat Hello print (gebruik trace).",
        "en": "Write a haxe program that prints Hello (use trace)."
      },
      "lang": "haxe",
      "starter": "// TODO Hello via trace\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "trace"
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
      "lang": "haxe",
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
