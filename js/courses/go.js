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
              "fmt.Println",
              "console.log",
              "trace"
            ],
            "en": [
              "print",
              "fmt.Println",
              "console.log",
              "trace"
            ]
          },
          "answer": 1,
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
              "CSS",
              "executable entry package",
              "SQL",
              "Lua"
            ],
            "en": [
              "CSS",
              "executable entry package",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "main.",
            "en": "main."
          }
        }
      ]
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
              "bool",
              "Bool",
              "bit"
            ],
            "en": [
              "boolean",
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
            "nl": "geen ternaire ?: ?",
            "en": "no ternary ?: ?"
          },
          "choices": {
            "nl": [
              "wel standaard",
              "meestal if-expressie niet; gebruik if",
              "SQL",
              "CSS"
            ],
            "en": [
              "yes standard",
              "usually no; use if",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Use if.",
            "en": "Use if."
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
              "nee, for",
              "elif",
              "loop"
            ],
            "en": [
              "yes",
              "no, for",
              "elif",
              "loop"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Only for.",
            "en": "Only for."
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
              "append",
              "add",
              "insert"
            ],
            "en": [
              "push",
              "append",
              "add",
              "insert"
            ]
          },
          "answer": 1,
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
              "100",
              "nil",
              "0 always error",
              "'hp'"
            ],
            "en": [
              "100",
              "nil",
              "0 always error",
              "'hp'"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "100.",
            "en": "100."
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
              "5",
              "23",
              "error",
              "nil"
            ],
            "en": [
              "5",
              "23",
              "error",
              "nil"
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
              "standaard foutcheck",
              "exceptions verplicht",
              "Lua pcall only"
            ],
            "en": [
              "CSS",
              "standard error check",
              "exceptions required",
              "Lua pcall only"
            ]
          },
          "answer": 1,
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
              "nee",
              "ja, exported identifiers",
              "SQL",
              "CSS"
            ],
            "en": [
              "no",
              "yes, exported identifiers",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Capital.",
            "en": "Capital."
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
          "OS process always",
          "lichte concurrentie",
          "SQL",
          "CSS"
        ],
        "en": [
          "always OS process",
          "lightweight concurrency",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "communicatie tussen goroutines",
          "pip",
          "Lua"
        ],
        "en": [
          "TV",
          "talk between goroutines",
          "pip",
          "Lua"
        ]
      },
      "answer": 1,
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
          "CSS",
          "uitstellen tot functie-einde",
          "SQL",
          "git"
        ],
        "en": [
          "CSS",
          "delay until func end",
          "SQL",
          "git"
        ]
      },
      "answer": 1,
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
          "dependency modules",
          "SQL",
          "Godot"
        ],
        "en": [
          "Roblox",
          "dependency modules",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
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
          "lengte 0 mogelijk",
          "SQL",
          "CSS"
        ],
        "en": [
          "always crash",
          "len 0 possible",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "itereer slice/map",
          "CSS only",
          "C"
        ],
        "en": [
          "SQL",
          "iterate slice/map",
          "CSS only",
          "C"
        ]
      },
      "answer": 1,
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
          "velden groeperen",
          "CSS",
          "npm"
        ],
        "en": [
          "Java class required",
          "group fields",
          "CSS",
          "npm"
        ]
      },
      "answer": 1,
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
          "pointer type",
          "SQL",
          "Lua"
        ],
        "en": [
          "modulo",
          "pointer type",
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
          "C malloc only",
          "slices/maps/chans maken",
          "pip",
          "Lua"
        ],
        "en": [
          "C malloc only",
          "make slices/maps/chans",
          "pip",
          "Lua"
        ]
      },
      "answer": 1,
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
          "error maken",
          "SQL",
          "CSS"
        ],
        "en": [
          "print only",
          "build error",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "standaard formatter",
          "SQL",
          "Rustfmt only"
        ],
        "en": [
          "CSS beautify only",
          "standard formatter",
          "SQL",
          "Rustfmt only"
        ]
      },
      "answer": 1,
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
          "main alias",
          "package init hook",
          "SQL",
          "CSS"
        ],
        "en": [
          "main alias",
          "package init hook",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "ja always",
          "meestal nee",
          "SQL",
          "CSS"
        ],
        "en": [
          "yes always",
          "usually no",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "Google leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "Google leak",
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
