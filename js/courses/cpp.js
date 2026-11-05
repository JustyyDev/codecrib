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
        }
      ]
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
    }
  ]
};
})(window);
