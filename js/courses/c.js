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
              "succes-conventie",
              "SQL",
              "CSS"
            ],
            "en": [
              "crash",
              "success convention",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "OK status.",
            "en": "OK status."
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
          "q": {
            "nl": "char quotes?",
            "en": "char quotes?"
          },
          "choices": {
            "nl": [
              "\"A\"",
              "'A'",
              "`A`",
              "A"
            ],
            "en": [
              "\"A\"",
              "'A'",
              "`A`",
              "A"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Single.",
            "en": "Single."
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
              "vaak 0/niet-0",
              "SQL",
              "Lua"
            ],
            "en": [
              "true/false always built-in",
              "often 0/non-0",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "0/non-0.",
            "en": "0/non-0."
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
              "printf format int",
              "SQL",
              "Lua"
            ],
            "en": [
              "CSS",
              "printf int format",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Format.",
            "en": "Format."
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
              "10",
              "20",
              "30",
              "UB"
            ],
            "en": [
              "10",
              "20",
              "30",
              "UB"
            ]
          },
          "answer": 0,
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
              "ja op stack vaak",
              "SQL",
              "CSS"
            ],
            "en": [
              "never heap",
              "yes often stack",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Fixed.",
            "en": "Fixed."
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
            "nl": "prototypes?",
            "en": "prototypes?"
          },
          "choices": {
            "nl": [
              "CSS",
              "vooraf declareren",
              "pip",
              "Lua end"
            ],
            "en": [
              "CSS",
              "declare ahead",
              "pip",
              "Lua end"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Headers.",
            "en": "Headers."
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
              "voorkomt crashes",
              "SQL",
              "CSS"
            ],
            "en": [
              "always optional",
              "helps avoid crashes",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
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
              "ja standaard",
              "niet echt standaard",
              "verplicht",
              "Lua only"
            ],
            "en": [
              "yes standard",
              "not really standard",
              "required",
              "Lua only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "No.",
            "en": "No."
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
              "fouten doorgeven",
              "Godot signal",
              "pip"
            ],
            "en": [
              "CSS",
              "pass errors",
              "Godot signal",
              "pip"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Errors.",
            "en": "Errors."
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
              "dereference",
              "SQL",
              "CSS"
            ],
            "en": [
              "multiply p always",
              "dereference",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
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
          "CSS",
          "IO header",
          "SQL",
          "Godot"
        ],
        "en": [
          "CSS",
          "IO header",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
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
          "adres/indirectie",
          "SQL",
          "Lua"
        ],
        "en": [
          "modulo",
          "address/indirection",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
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
          "GC always",
          "heap alloc",
          "pip",
          "trace"
        ],
        "en": [
          "always GC",
          "heap alloc",
          "pip",
          "trace"
        ]
      },
      "answer": 1,
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
          "geheugen vrijgeven",
          "SQL DROP",
          "CSS"
        ],
        "en": [
          "free soft",
          "free memory",
          "SQL DROP",
          "CSS"
        ]
      },
      "answer": 1,
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
          "ongeldige memory access",
          "pip",
          "Lua end"
        ],
        "en": [
          "CSS bug",
          "invalid memory access",
          "pip",
          "Lua end"
        ]
      },
      "answer": 1,
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
          "grootte in bytes",
          "len string only",
          "Godot"
        ],
        "en": [
          "SQL",
          "size in bytes",
          "string len only",
          "Godot"
        ]
      },
      "answer": 1,
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
          "gegroepeerde velden",
          "CSS",
          "npm"
        ],
        "en": [
          "Java class",
          "grouped fields",
          "CSS",
          "npm"
        ]
      },
      "answer": 1,
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
          "bestaat",
          "verboden",
          "Lua only",
          "SQL only"
        ],
        "en": [
          "exists",
          "forbidden",
          "Lua only",
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
      "id": 10,
      "q": {
        "nl": "#define",
        "en": "#define"
      },
      "choices": {
        "nl": [
          "runtime fn",
          "macro/constant",
          "pip",
          "DOM"
        ],
        "en": [
          "runtime fn",
          "macro/constant",
          "pip",
          "DOM"
        ]
      },
      "answer": 1,
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
          "schrijven voorbij array",
          "SQL join",
          "git"
        ],
        "en": [
          "CSS overflow",
          "write past array",
          "SQL join",
          "git"
        ]
      },
      "answer": 1,
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
          "read-only intent",
          "SQL",
          "Lua"
        ],
        "en": [
          "mutates more",
          "read-only intent",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
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
          "declaraties delen",
          "Godot tscn",
          "Rust"
        ],
        "en": [
          "npm lock",
          "share declarations",
          "Godot tscn",
          "Rust"
        ]
      },
      "answer": 1,
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
          "kan van alles",
          "SQL null",
          "CSS"
        ],
        "en": [
          "always clean error",
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
  ]
};
})(window);
