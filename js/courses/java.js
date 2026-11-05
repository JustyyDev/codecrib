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
  ]
};
})(window);
