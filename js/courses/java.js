(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.java = {
  "id": "java",
  "title": {
    "nl": "Java voor beginners",
    "en": "Java for beginners"
  },
  "intro": {
    "nl": "JVM basics: classes, lists, exceptions.",
    "en": "JVM basics: classes, lists, exceptions."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Java",
        "en": "Your first Java"
      },
      "body": {
        "nl": "<p>Java: JVM, classes, overal enterprise en Android-smaak.</p><pre>public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hallo\");\n  }\n}</pre>",
        "en": "<p>Java: JVM, classes, enterprise and Android flavor.</p><pre>public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}</pre>"
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
              "System.out.println",
              "console.log",
              "printf only"
            ],
            "en": [
              "print",
              "System.out.println",
              "console.log",
              "printf only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "println.",
            "en": "println."
          }
        },
        {
          "q": {
            "nl": "main signature smaak?",
            "en": "main signature flavor?"
          },
          "choices": {
            "nl": [
              "start()",
              "public static void main",
              "fn main",
              "def main"
            ],
            "en": [
              "start()",
              "public static void main",
              "fn main",
              "def main"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "main.",
            "en": "main."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "lang": "java",
        "instructions": {
          "nl": "println Hallo",
          "en": "println Hallo"
        },
        "starter": "class M{ public static void main(String[] a){ System.out.println(\"Hallo\"); }}\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "System.out.println"
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
        "nl": "<pre>int score = 10;\ndouble ratio = 0.5;\nboolean ready = true;\nString name = \"Justy\";</pre>",
        "en": "<pre>int score = 10;\ndouble ratio = 0.5;\nboolean ready = true;\nString name = \"Justy\";</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "boolean type?",
            "en": "boolean type?"
          },
          "choices": {
            "nl": [
              "bool",
              "boolean",
              "Bool",
              "bit"
            ],
            "en": [
              "bool",
              "boolean",
              "Bool",
              "bit"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "boolean.",
            "en": "boolean."
          }
        },
        {
          "q": {
            "nl": "7/2?",
            "en": "7/2?"
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
            "nl": "Int div.",
            "en": "Int div."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "<pre>if (x &gt;= 5) System.out.println(\"B\"); else System.out.println(\"C\");</pre>",
        "en": "<pre>if (x &gt;= 5) System.out.println(\"B\"); else System.out.println(\"C\");</pre>"
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
            "nl": "&& ?",
            "en": "&& ?"
          },
          "choices": {
            "nl": [
              "and woord",
              "logische AND",
              "SQL",
              "CSS"
            ],
            "en": [
              "and word",
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
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "<pre>for (int i=0;i&lt;10;i+=3) System.out.println(i);</pre>",
        "en": "<pre>for (int i=0;i&lt;10;i+=3) System.out.println(i);</pre>"
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
            "nl": "enhanced for?",
            "en": "enhanced for?"
          },
          "choices": {
            "nl": [
              "for (int n : arr)",
              "for n in arr",
              "foreach arr",
              "loop arr"
            ],
            "en": [
              "for (int n : arr)",
              "for n in arr",
              "foreach arr",
              "loop arr"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "For-each.",
            "en": "For-each."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "Collecties / data",
        "en": "Collections / data"
      },
      "body": {
        "nl": "<pre>import java.util.*;\nList&lt;Integer&gt; nums = new ArrayList&lt;&gt;();\nnums.add(10);</pre>",
        "en": "<pre>import java.util.*;\nList&lt;Integer&gt; nums = new ArrayList&lt;&gt;();\nnums.add(10);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "add?",
            "en": "add?"
          },
          "choices": {
            "nl": [
              "push",
              "add",
              "append only Python",
              "insert SQL"
            ],
            "en": [
              "push",
              "add",
              "append only Python",
              "insert SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "add.",
            "en": "add."
          }
        },
        {
          "q": {
            "nl": "List is interface?",
            "en": "List is interface?"
          },
          "choices": {
            "nl": [
              "nee class only",
              "vaak interface",
              "SQL",
              "CSS"
            ],
            "en": [
              "no class only",
              "often interface",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Interface.",
            "en": "Interface."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "<pre>static int add(int a, int b) { return a + b; }</pre>",
        "en": "<pre>static int add(int a, int b) { return a + b; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "static method?",
            "en": "static method?"
          },
          "choices": {
            "nl": [
              "instance verplicht",
              "zonder object callbaar",
              "SQL",
              "CSS"
            ],
            "en": [
              "instance required",
              "callable without object",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Static.",
            "en": "Static."
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
              "null",
              "error"
            ],
            "en": [
              "5",
              "23",
              "null",
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
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "<pre>try {\n  Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n  System.out.println(\"bad\");\n}</pre>",
        "en": "<pre>try {\n  Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n  System.out.println(\"bad\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "parseInt abc?",
            "en": "parseInt abc?"
          },
          "choices": {
            "nl": [
              "0",
              "exception",
              "null",
              "NaN JS"
            ],
            "en": [
              "0",
              "exception",
              "null",
              "NaN JS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Throws.",
            "en": "Throws."
          }
        },
        {
          "q": {
            "nl": "catch?",
            "en": "catch?"
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
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "<pre>class Player {\n  int hp;\n  Player(int hp){ this.hp = hp; }\n  void hit(int d){ hp -= d; if(hp&lt;0) hp=0; }\n}</pre>",
        "en": "<pre>class Player {\n  int hp;\n  Player(int hp){ this.hp = hp; }\n  void hit(int d){ hp -= d; if(hp&lt;0) hp=0; }\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "constructor naam?",
            "en": "constructor name?"
          },
          "choices": {
            "nl": [
              "new",
              "zelfde als class",
              "init",
              "__new__"
            ],
            "en": [
              "new",
              "same as class",
              "init",
              "__new__"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Class name.",
            "en": "Class name."
          }
        },
        {
          "q": {
            "nl": "hp 10 hit 4?",
            "en": "hp 10 hit 4?"
          },
          "choices": {
            "nl": [
              "6",
              "14",
              "0",
              "10"
            ],
            "en": [
              "6",
              "14",
              "0",
              "10"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "6.",
            "en": "6."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "ArrayList tip",
        "en": "ArrayList tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">list.add</code>, <code class=\"inline\">list.get(0)</code>, generics <code class=\"inline\">List&lt;String&gt;</code>.</p>",
        "en": "<p><code class=\"inline\">list.add</code>, <code class=\"inline\">list.get(0)</code>, generics <code class=\"inline\">List&lt;String&gt;</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "get(0)?",
            "en": "get(0)?"
          },
          "choices": {
            "nl": [
              "laatste",
              "eerste element",
              "SQL",
              "Lua 1"
            ],
            "en": [
              "last",
              "first element",
              "SQL",
              "Lua 1"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "First.",
            "en": "First."
          }
        },
        {
          "q": {
            "nl": "generics?",
            "en": "generics?"
          },
          "choices": {
            "nl": [
              "CSS",
              "type parameters",
              "GPU",
              "cert leak"
            ],
            "en": [
              "CSS",
              "type parameters",
              "GPU",
              "cert leak"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Generics.",
            "en": "Generics."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Typische output in java?",
            "en": "Typical output in java?"
          },
          "choices": {
            "nl": [
              "echo",
              "System.out.println",
              "SELECT",
              "CSS"
            ],
            "en": [
              "echo",
              "System.out.println",
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
            "nl": "Print-achtige API (java)?",
            "en": "Print-like API (java)?"
          },
          "fill": [
            "System.out.println"
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
        "nl": "JVM",
        "en": "JVM"
      },
      "choices": {
        "nl": [
          "CSS engine",
          "Java Virtual Machine",
          "SQL",
          "Lua VM only"
        ],
        "en": [
          "CSS engine",
          "Java Virtual Machine",
          "SQL",
          "Lua VM only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "JVM.",
        "en": "JVM."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "String immutable",
        "en": "String immutable"
      },
      "choices": {
        "nl": [
          "muteert chars",
          "ja immutable",
          "SQL",
          "CSS"
        ],
        "en": [
          "mutates chars",
          "yes immutable",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Immutable.",
        "en": "Immutable."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "== op Integer cache",
        "en": "== on objects"
      },
      "choices": {
        "nl": [
          "altijd waarde",
          "referentie (vaak)",
          "SQL",
          "Lua"
        ],
        "en": [
          "always value",
          "reference (often)",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Reference.",
        "en": "Reference."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "equals",
        "en": "equals"
      },
      "choices": {
        "nl": [
          "== always",
          "waardevergelijking override",
          "pip",
          "git"
        ],
        "en": [
          "== always",
          "value compare override",
          "pip",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "equals.",
        "en": "equals."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "ArrayList",
        "en": "ArrayList"
      },
      "choices": {
        "nl": [
          "vaste C array",
          "dynamische List",
          "SQL table",
          "CSS"
        ],
        "en": [
          "fixed C array",
          "dynamic List",
          "SQL table",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "List.",
        "en": "List."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "public class file",
        "en": "public class file"
      },
      "choices": {
        "nl": [
          "meerdere public top-level ok always",
          "vaak 1 public top-level per file",
          "SQL",
          "CSS"
        ],
        "en": [
          "many public top-level always ok",
          "often 1 public top-level per file",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Convention/rule.",
        "en": "Convention/rule."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "package",
        "en": "package"
      },
      "choices": {
        "nl": [
          "npm only",
          "namespace",
          "Godot",
          "Rust only"
        ],
        "en": [
          "npm only",
          "namespace",
          "Godot",
          "Rust only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Package.",
        "en": "Package."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "interface",
        "en": "interface"
      },
      "choices": {
        "nl": [
          "geen",
          "contract voor classes",
          "SQL view",
          "CSS"
        ],
        "en": [
          "none",
          "contract for classes",
          "SQL view",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Interface.",
        "en": "Interface."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "final",
        "en": "final"
      },
      "choices": {
        "nl": [
          "muteert meer",
          "niet herbindbaar / restrictie",
          "pip",
          "Lua"
        ],
        "en": [
          "mutates more",
          "no rebind / restriction",
          "pip",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "final.",
        "en": "final."
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
          "bestaat",
          "verboden",
          "0 only",
          "None Python spelling"
        ],
        "en": [
          "exists",
          "forbidden",
          "0 only",
          "None Python spelling"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "null.",
        "en": "null."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "HashMap",
        "en": "HashMap"
      },
      "choices": {
        "nl": [
          "array only",
          "key-value map",
          "CSS",
          "GDScript Node"
        ],
        "en": [
          "array only",
          "key-value map",
          "CSS",
          "GDScript Node"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Map.",
        "en": "Map."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "checked exceptions",
        "en": "checked exceptions"
      },
      "choices": {
        "nl": [
          "CSS",
          "sommige must handle/declare",
          "Lua pcall only",
          "Go defer only"
        ],
        "en": [
          "CSS",
          "some must handle/declare",
          "Lua pcall only",
          "Go defer only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Checked.",
        "en": "Checked."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "garbage collector",
        "en": "garbage collector"
      },
      "choices": {
        "nl": [
          "altijd manual free",
          "automatisch geheugen (GC)",
          "SQL VACUUM only",
          "C malloc only"
        ],
        "en": [
          "always manual free",
          "automatic memory (GC)",
          "SQL VACUUM only",
          "C malloc only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "GC.",
        "en": "GC."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "static",
        "en": "static"
      },
      "choices": {
        "nl": [
          "instance field",
          "class-level member",
          "SQL",
          "CSS"
        ],
        "en": [
          "instance field",
          "class-level member",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Static.",
        "en": "Static."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib Java",
        "en": "CodeCrib Java"
      },
      "choices": {
        "nl": [
          "Oracle leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "Oracle leak",
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
        "nl": "[Pool 1] Typische output in java?",
        "en": "[Pool 1] Typical output in java?"
      },
      "choices": {
        "nl": [
          "echo",
          "System.out.println",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "System.out.println",
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
        "nl": "[Pool 2] Print-achtige API (java)?",
        "en": "[Pool 2] Print-like API (java)?"
      },
      "fill": [
        "System.out.println"
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
        "nl": "[Pool 11] java: oefenen helpt?",
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
        "nl": "[Pool 13] Typische output in java?",
        "en": "[Pool 13] Typical output in java?"
      },
      "choices": {
        "nl": [
          "echo",
          "System.out.println",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "System.out.println",
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
        "nl": "[Pool 14] Print-achtige API (java)?",
        "en": "[Pool 14] Print-like API (java)?"
      },
      "fill": [
        "System.out.println"
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
        "nl": "[Pool 23] java: oefenen helpt?",
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
        "nl": "[Pool 25] Typische output in java?",
        "en": "[Pool 25] Typical output in java?"
      },
      "choices": {
        "nl": [
          "echo",
          "System.out.println",
          "SELECT",
          "CSS"
        ],
        "en": [
          "echo",
          "System.out.println",
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
        "nl": "[Pool 26] Print-achtige API (java)?",
        "en": "[Pool 26] Print-like API (java)?"
      },
      "fill": [
        "System.out.println"
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
        "nl": "[Pool 35] java: oefenen helpt?",
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
        "nl": "Schrijf een java programma dat Hello print (gebruik System.out.println).",
        "en": "Write a java program that prints Hello (use System.out.println)."
      },
      "lang": "java",
      "starter": "// TODO Hello via System.out.println\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "System.out.println"
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
      "lang": "java",
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
