(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.typescript = {
  "id": "typescript",
  "title": {
    "nl": "TypeScript voor beginners",
    "en": "TypeScript for beginners"
  },
  "intro": {
    "nl": "JS met types: interfaces, unions, strict null.",
    "en": "JS with types: interfaces, unions, strict null."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste TypeScript",
        "en": "Your first TypeScript"
      },
      "body": {
        "nl": "<p>TypeScript is JavaScript + types. Compileert naar JS.</p><pre>const msg: string = \"Hallo\";\nconsole.log(msg);</pre>",
        "en": "<p>TypeScript is JavaScript + types. Compiles to JS.</p><pre>const msg: string = \"Hello\";\nconsole.log(msg);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "TS compileert naar?",
            "en": "TS compiles to?"
          },
          "choices": {
            "nl": [
              "Java",
              "JavaScript",
              "SQL",
              "LLVM only"
            ],
            "en": [
              "Java",
              "JavaScript",
              "SQL",
              "LLVM only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "JS.",
            "en": "JS."
          }
        },
        {
          "q": {
            "nl": "Type annotatie?",
            "en": "Type annotation?"
          },
          "choices": {
            "nl": [
              "msg -&gt; string",
              "msg: string",
              "string msg",
              "msg as"
            ],
            "en": [
              "msg -&gt; string",
              "msg: string",
              "string msg",
              "msg as"
            ]
          },
          "answer": 1,
          "why": {
            "nl": ": type.",
            "en": " : type."
          }
        }
      ]
    },
    {
      "id": 2,
      "title": {
        "nl": "Types",
        "en": "Types"
      },
      "body": {
        "nl": "<pre>let score: number = 10;\nconst name: string = \"Justy\";\nlet ready: boolean = true;</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">any</code> uitzetten is gezond. Liever echte types.</div>",
        "en": "<pre>let score: number = 10;\nconst name: string = \"Justy\";\nlet ready: boolean = true;</pre><div class=\"callout\"><strong>Tip:</strong> Avoid <code class=\"inline\">any</code>. Prefer real types.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "number vs int?",
            "en": "number vs int?"
          },
          "choices": {
            "nl": [
              "aparte int altijd",
              "number dekt floats/ints",
              "SQL",
              "Lua"
            ],
            "en": [
              "separate int always",
              "number covers floats/ints",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "number.",
            "en": "number."
          }
        },
        {
          "q": {
            "nl": "any is?",
            "en": "any is?"
          },
          "choices": {
            "nl": [
              "strengste",
              "ontsnappingstype",
              "SQL",
              "nil"
            ],
            "en": [
              "strictest",
              "escape hatch type",
              "SQL",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Escape.",
            "en": "Escape."
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
        "nl": "<pre>if (x &gt;= 5) console.log(\"B\");</pre>",
        "en": "<pre>if (x &gt;= 5) console.log(\"B\");</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "=== in TS?",
            "en": "=== in TS?"
          },
          "choices": {
            "nl": [
              "verboden",
              "gebruikelijk streng",
              "SQL",
              "CSS"
            ],
            "en": [
              "forbidden",
              "common strict",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "q": {
            "nl": "union type A|B?",
            "en": "union type A|B?"
          },
          "choices": {
            "nl": [
              "CSS",
              "A of B",
              "SQL OR tabel",
              "Lua"
            ],
            "en": [
              "CSS",
              "A or B",
              "SQL OR table",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Union.",
            "en": "Union."
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
        "nl": "<pre>for (let i=0;i&lt;10;i+=3) console.log(i);</pre>",
        "en": "<pre>for (let i=0;i&lt;10;i+=3) console.log(i);</pre>"
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
            "nl": "for...of?",
            "en": "for...of?"
          },
          "choices": {
            "nl": [
              "keys only",
              "iterable values",
              "SQL",
              "C"
            ],
            "en": [
              "keys only",
              "iterable values",
              "SQL",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Values.",
            "en": "Values."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Arrays en objects",
        "en": "Arrays and objects"
      },
      "body": {
        "nl": "<pre>const nums: number[] = [10,20];\nconst player: {hp: number} = {hp: 100};</pre>",
        "en": "<pre>const nums: number[] = [10,20];\nconst player: {hp: number} = {hp: 100};</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "number[]?",
            "en": "number[]?"
          },
          "choices": {
            "nl": [
              "tuple only",
              "array of numbers",
              "SQL",
              "Lua 1-based"
            ],
            "en": [
              "tuple only",
              "array of numbers",
              "SQL",
              "Lua 1-based"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Array.",
            "en": "Array."
          }
        },
        {
          "q": {
            "nl": "player.hp type?",
            "en": "player.hp type?"
          },
          "choices": {
            "nl": [
              "string",
              "number",
              "any verplicht",
              "void"
            ],
            "en": [
              "string",
              "number",
              "any required",
              "void"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "number.",
            "en": "number."
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Functies en interfaces",
        "en": "Functions and interfaces"
      },
      "body": {
        "nl": "<pre>function add(a: number, b: number): number { return a+b; }\ninterface User { id: number; name: string; }</pre>",
        "en": "<pre>function add(a: number, b: number): number { return a+b; }\ninterface User { id: number; name: string; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "interface?",
            "en": "interface?"
          },
          "choices": {
            "nl": [
              "runtime class",
              "typevorm voor objecten",
              "SQL view",
              "CSS"
            ],
            "en": [
              "runtime class",
              "shape for objects",
              "SQL view",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Shape.",
            "en": "Shape."
          }
        },
        {
          "q": {
            "nl": "add return type?",
            "en": "add return type?"
          },
          "choices": {
            "nl": [
              "void",
              "number",
              "string",
              "any"
            ],
            "en": [
              "void",
              "number",
              "string",
              "any"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "number.",
            "en": "number."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "strict null checks",
        "en": "strict null checks"
      },
      "body": {
        "nl": "<pre>function len(s: string | null): number {\n  if (s === null) return 0;\n  return s.length;\n}</pre>",
        "en": "<pre>function len(s: string | null): number {\n  if (s === null) return 0;\n  return s.length;\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "null check nodig bij strict?",
            "en": "null check needed in strict?"
          },
          "choices": {
            "nl": [
              "nee",
              "vaak ja",
              "SQL",
              "CSS"
            ],
            "en": [
              "no",
              "often yes",
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
          "q": {
            "nl": "string | null?",
            "en": "string | null?"
          },
          "choices": {
            "nl": [
              "alleen string",
              "union",
              "SQL",
              "Lua"
            ],
            "en": [
              "string only",
              "union",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Union.",
            "en": "Union."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini project: typed counter",
        "en": "Mini project: typed counter"
      },
      "body": {
        "nl": "<pre>let n = 0;\nfunction click(): void { n++; }</pre>",
        "en": "<pre>let n = 0;\nfunction click(): void { n++; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "void?",
            "en": "void?"
          },
          "choices": {
            "nl": [
              "number",
              "geen return waarde",
              "SQL",
              "nil"
            ],
            "en": [
              "number",
              "no return value",
              "SQL",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "void.",
            "en": "void."
          }
        },
        {
          "q": {
            "nl": "n na 2 clicks?",
            "en": "n after 2 clicks?"
          },
          "choices": {
            "nl": [
              "0",
              "1",
              "2",
              "null"
            ],
            "en": [
              "0",
              "1",
              "2",
              "null"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "2.",
            "en": "2."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "tsc",
        "en": "tsc"
      },
      "choices": {
        "nl": [
          "C compiler",
          "TypeScript compiler",
          "SQL",
          "Godot"
        ],
        "en": [
          "C compiler",
          "TypeScript compiler",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "tsc.",
        "en": "tsc."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "type alias",
        "en": "type alias"
      },
      "choices": {
        "nl": [
          "CSS",
          "type Name = ...",
          "SQL",
          "Lua"
        ],
        "en": [
          "CSS",
          "type Name = ...",
          "SQL",
          "Lua"
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
        "nl": "readonly",
        "en": "readonly"
      },
      "choices": {
        "nl": [
          "muteert meer",
          "niet schrijven",
          "pip",
          "git"
        ],
        "en": [
          "mutates more",
          "no write",
          "pip",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Readonly.",
        "en": "Readonly."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "enum",
        "en": "enum"
      },
      "choices": {
        "nl": [
          "bestaat",
          "verboden",
          "Lua only",
          "C only"
        ],
        "en": [
          "exists",
          "forbidden",
          "Lua only",
          "C only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "as cast",
        "en": "as cast"
      },
      "choices": {
        "nl": [
          "runtime always safe",
          "type assertion",
          "SQL",
          "CSS"
        ],
        "en": [
          "always runtime safe",
          "type assertion",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Assertion.",
        "en": "Assertion."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "generics &lt;T&gt;",
        "en": "generics &lt;T&gt;"
      },
      "choices": {
        "nl": [
          "CSS",
          "herbruikbare types",
          "SQL",
          "Lua table"
        ],
        "en": [
          "CSS",
          "reusable types",
          "SQL",
          "Lua table"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Generics.",
        "en": "Generics."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "strict true",
        "en": "strict true"
      },
      "choices": {
        "nl": [
          "losser",
          "strengere checks",
          "pip off",
          "Godot"
        ],
        "en": [
          "looser",
          "stricter checks",
          "pip off",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Strict.",
        "en": "Strict."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "optional prop?",
        "en": "optional prop?"
      },
      "choices": {
        "nl": [
          "name!:",
          "name?:",
          "name||",
          "name~"
        ],
        "en": [
          "name!:",
          "name?:",
          "name||",
          "name~"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "?.",
        "en": "?."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "never type",
        "en": "never type"
      },
      "choices": {
        "nl": [
          "string",
          "onmogelijk/pad",
          "SQL",
          "nil"
        ],
        "en": [
          "string",
          "impossible/path",
          "SQL",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "never.",
        "en": "never."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "unknown vs any",
        "en": "unknown vs any"
      },
      "choices": {
        "nl": [
          "zelfde",
          "unknown veiliger",
          "SQL",
          "CSS"
        ],
        "en": [
          "same",
          "unknown safer",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Safer.",
        "en": "Safer."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "implements",
        "en": "implements"
      },
      "choices": {
        "nl": [
          "SQL",
          "class voldoet aan interface",
          "pip",
          "Lua"
        ],
        "en": [
          "SQL",
          "class satisfies interface",
          "pip",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Implements.",
        "en": "Implements."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "tuple [string, number]",
        "en": "tuple [string, number]"
      },
      "choices": {
        "nl": [
          "array any",
          "vaste paar-vorm",
          "SQL row only",
          "CSS"
        ],
        "en": [
          "any array",
          "fixed pair shape",
          "SQL row only",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Tuple.",
        "en": "Tuple."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "tsconfig",
        "en": "tsconfig"
      },
      "choices": {
        "nl": [
          "npm audit",
          "compiler options file",
          "Godot cfg",
          "Rust.toml only"
        ],
        "en": [
          "npm audit",
          "compiler options file",
          "Godot cfg",
          "Rust.toml only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Config.",
        "en": "Config."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "declare",
        "en": "declare"
      },
      "choices": {
        "nl": [
          "runtime code",
          "ambient type decl",
          "SQL",
          "CSS"
        ],
        "en": [
          "runtime code",
          "ambient type decl",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Declare.",
        "en": "Declare."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib TS",
        "en": "CodeCrib TS"
      },
      "choices": {
        "nl": [
          "MS leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "MS leak",
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
  ]
};
})(window);
