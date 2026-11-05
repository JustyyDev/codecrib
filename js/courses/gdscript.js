(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.gdscript = {
  "id": "gdscript",
  "title": {
    "nl": "GDScript (Godot)",
    "en": "GDScript (Godot)"
  },
  "intro": {
    "nl": "Godot scripting, nodes en game-loops.",
    "en": "Godot scripting, nodes and game loops."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Intro GDScript",
        "en": "Intro to GDScript"
      },
      "body": {
        "nl": "<p>GDScript is de scriptingtaal van Godot. Python-achtig, gemaakt voor games.</p><pre>print(\"Hallo CodeCrib\")</pre>",
        "en": "<p>GDScript is Godot's scripting language. Python-like, built for games.</p><pre>print(\"Hello CodeCrib\")</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "GDScript hoort bij?",
            "en": "GDScript belongs to?"
          },
          "choices": {
            "nl": [
              "Unity",
              "Godot",
              "Unreal only",
              "Roblox"
            ],
            "en": [
              "Unity",
              "Godot",
              "Unreal only",
              "Roblox"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Godot.",
            "en": "Godot."
          }
        },
        {
          "q": {
            "nl": "Print?",
            "en": "Print?"
          },
          "choices": {
            "nl": [
              "console.log",
              "print",
              "trace",
              "echo"
            ],
            "en": [
              "console.log",
              "print",
              "trace",
              "echo"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "print.",
            "en": "print."
          }
        }
      ],
      "exercise": {
        "lang": "gdscript",
        "instructions": {
          "nl": "print Hallo",
          "en": "print Hallo"
        },
        "starter": "print(\"Hallo\")\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "print"
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
        "nl": "<pre>var score: int = 10\nvar name := \"Justy\"\nconst MAX_HP := 100</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> leidt het type af.</div>",
        "en": "<pre>var score: int = 10\nvar name := \"Justy\"\nconst MAX_HP := 100</pre><div class=\"callout\"><strong>Tip:</strong> <code class=\"inline\">:=</code> infers the type.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": ":= doet?",
            "en": " := does?"
          },
          "choices": {
            "nl": [
              "modulo",
              "type inferentie",
              "SQL",
              "pointer"
            ],
            "en": [
              "modulo",
              "type inference",
              "SQL",
              "pointer"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Infer.",
            "en": "Infer."
          }
        },
        {
          "q": {
            "nl": "const?",
            "en": "const?"
          },
          "choices": {
            "nl": [
              "altijd mutable",
              "vaste binding",
              "CSS",
              "nil"
            ],
            "en": [
              "always mutable",
              "fixed binding",
              "CSS",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Constant.",
            "en": "Constant."
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
        "nl": "<pre>var x = 5\nif x &gt;= 5:\n\tprint(\"B\")\nelse:\n\tprint(\"C\")</pre>",
        "en": "<pre>var x = 5\nif x &gt;= 5:\n\tprint(\"B\")\nelse:\n\tprint(\"C\")</pre>"
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
            "nl": "Indentatie?",
            "en": "Indentation?"
          },
          "choices": {
            "nl": [
              "telt niet",
              "belangrijk",
              "alleen tabs verboden",
              "SQL"
            ],
            "en": [
              "ignored",
              "important",
              "tabs forbidden",
              "SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Matters.",
            "en": "Matters."
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
        "nl": "<pre>for i in range(0, 10, 3):\n\tprint(i)\nwhile n &gt; 0:\n\tn -= 1</pre>",
        "en": "<pre>for i in range(0, 10, 3):\n\tprint(i)\nwhile n &gt; 0:\n\tn -= 1</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "range step 3 tot &lt;10: count?",
            "en": "range step 3 &lt;10 count?"
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
            "nl": "while nodig?",
            "en": "while needed?"
          },
          "choices": {
            "nl": [
              "nooit",
              "als conditie-loop",
              "alleen export",
              "CSS"
            ],
            "en": [
              "never",
              "for condition loops",
              "export only",
              "CSS"
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
        "nl": "<pre>var nums = [10,20,30]\nvar player = {\"hp\": 100}</pre>",
        "en": "<pre>var nums = [10,20,30]\nvar player = {\"hp\": 100}</pre>"
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
            "nl": "Dictionary?",
            "en": "Dictionary?"
          },
          "choices": {
            "nl": [
              "bestaat",
              "verboden",
              "alleen C",
              "SQL only"
            ],
            "en": [
              "exists",
              "forbidden",
              "C only",
              "SQL only"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Yes.",
            "en": "Yes."
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
        "nl": "<pre>func add(a: int, b: int) -&gt; int:\n\treturn a + b</pre>",
        "en": "<pre>func add(a: int, b: int) -&gt; int:\n\treturn a + b</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Keyword?",
            "en": "Keyword?"
          },
          "choices": {
            "nl": [
              "def",
              "func",
              "function",
              "fn"
            ],
            "en": [
              "def",
              "func",
              "function",
              "fn"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "func.",
            "en": "func."
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
              "0",
              "error"
            ],
            "en": [
              "5",
              "23",
              "0",
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
        "nl": "<pre>assert(hp &gt; 0)\npush_error(\"ouch\")</pre><p>Gebruik ook de Godot debugger en breakpoints.</p>",
        "en": "<pre>assert(hp &gt; 0)\npush_error(\"ouch\")</pre><p>Also use the Godot debugger and breakpoints.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "assert doet?",
            "en": "assert does?"
          },
          "choices": {
            "nl": [
              "CSS",
              "check die faalt in debug",
              "SQL commit",
              "shuffle"
            ],
            "en": [
              "CSS",
              "check that fails in debug",
              "SQL commit",
              "shuffle"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Assert.",
            "en": "Assert."
          }
        },
        {
          "q": {
            "nl": "push_error?",
            "en": "push_error?"
          },
          "choices": {
            "nl": [
              "crasht OS",
              "logt error in Godot",
              "compile C",
              "pip"
            ],
            "en": [
              "crashes OS",
              "logs error in Godot",
              "compile C",
              "pip"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Log.",
            "en": "Log."
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
        "nl": "<pre>extends Node\nvar coins := 0\nfunc collect(n: int) -&gt; void:\n\tcoins += n</pre><p>Node scripts + signalen = Godot-basis.</p>",
        "en": "<pre>extends Node\nvar coins := 0\nfunc collect(n: int) -&gt; void:\n\tcoins += n</pre><p>Node scripts + signals = Godot basics.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "extends Node?",
            "en": "extends Node?"
          },
          "choices": {
            "nl": [
              "SQL",
              "script op node-class",
              "CSS",
              "Rust"
            ],
            "en": [
              "SQL",
              "script on node class",
              "CSS",
              "Rust"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Inheritance.",
            "en": "Inheritance."
          }
        },
        {
          "q": {
            "nl": "coins na +5?",
            "en": "coins after +5?"
          },
          "choices": {
            "nl": [
              "0",
              "5",
              "-5",
              "null"
            ],
            "en": [
              "0",
              "5",
              "-5",
              "null"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Signalen kort",
        "en": "Signals briefly"
      },
      "body": {
        "nl": "<p>Signalen verbinden emitters en listeners. <code class=\"inline\">emit_signal</code> / <code class=\"inline\">connect</code>.</p>",
        "en": "<p>Signals connect emitters and listeners. <code class=\"inline\">emit_signal</code> / <code class=\"inline\">connect</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "signal is?",
            "en": "signal is?"
          },
          "choices": {
            "nl": [
              "SQL",
              "event-achtig",
              "CSS",
              "C pointer"
            ],
            "en": [
              "SQL",
              "event-like",
              "CSS",
              "C pointer"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Event.",
            "en": "Event."
          }
        },
        {
          "q": {
            "nl": "connect?",
            "en": "connect?"
          },
          "choices": {
            "nl": [
              "USB only",
              "listener koppelen",
              "pip",
              "Lua 0-index"
            ],
            "en": [
              "USB only",
              "hook listener",
              "pip",
              "Lua 0-index"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Connect.",
            "en": "Connect."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "Godot engine?",
        "en": "Godot engine?"
      },
      "choices": {
        "nl": [
          "nee",
          "ja, GDScript",
          "alleen Unity",
          "SQL IDE"
        ],
        "en": [
          "no",
          "yes, GDScript",
          "Unity only",
          "SQL IDE"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "signal",
        "en": "signal"
      },
      "choices": {
        "nl": [
          "USB",
          "event-achtig in Godot",
          "pip",
          "CSS"
        ],
        "en": [
          "USB",
          "event-like in Godot",
          "pip",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Signals.",
        "en": "Signals."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "@onready",
        "en": "@onready"
      },
      "choices": {
        "nl": [
          "SQL",
          "init wanneer node ready",
          "C++ only",
          "git"
        ],
        "en": [
          "SQL",
          "init when node ready",
          "C++ only",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "On ready.",
        "en": "On ready."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "$NodePath",
        "en": "$NodePath"
      },
      "choices": {
        "nl": [
          "jQuery only",
          "korte get_node",
          "Lua",
          "Rust"
        ],
        "en": [
          "jQuery only",
          "short get_node",
          "Lua",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Get node.",
        "en": "Get node."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "delta in _process",
        "en": "delta in _process"
      },
      "choices": {
        "nl": [
          "SQL",
          "frame tijd",
          "CSS px",
          "nil"
        ],
        "en": [
          "SQL",
          "frame time",
          "CSS px",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Delta.",
        "en": "Delta."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "_ready",
        "en": "_ready"
      },
      "choices": {
        "nl": [
          "constructor OS",
          "lifecycle callback",
          "pip",
          "HTML"
        ],
        "en": [
          "OS constructor",
          "lifecycle callback",
          "pip",
          "HTML"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Ready.",
        "en": "Ready."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "TypedArray",
        "en": "TypedArray"
      },
      "choices": {
        "nl": [
          "bestaat in moderne GDScript",
          "verboden",
          "SQL",
          "CSS"
        ],
        "en": [
          "exists in modern GDScript",
          "forbidden",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Yes.",
        "en": "Yes."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "match",
        "en": "match"
      },
      "choices": {
        "nl": [
          "switch-achtig",
          "SQL MATCH",
          "CSS",
          "geen"
        ],
        "en": [
          "switch-like",
          "SQL MATCH",
          "CSS",
          "none"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Match.",
        "en": "Match."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "export var",
        "en": "export var"
      },
      "choices": {
        "nl": [
          "pip export",
          "inspector-zichtbaar",
          "SQL dump",
          "git"
        ],
        "en": [
          "pip export",
          "inspector-visible",
          "SQL dump",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Export.",
        "en": "Export."
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
          "alleen 0",
          "True"
        ],
        "en": [
          "exists",
          "forbidden",
          "0 only",
          "True"
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
        "nl": "and/or",
        "en": "and/or"
      },
      "choices": {
        "nl": [
          "&& || verplicht",
          "and or keywords",
          "SQL only",
          "CSS"
        ],
        "en": [
          "&& || required",
          "and or keywords",
          "SQL only",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Words.",
        "en": "Words."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "Vector2",
        "en": "Vector2"
      },
      "choices": {
        "nl": [
          "SQL",
          "2D vector type",
          "HTML",
          "Lua 1-based only"
        ],
        "en": [
          "SQL",
          "2D vector type",
          "HTML",
          "Lua 1-based only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Vector.",
        "en": "Vector."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "queue_free",
        "en": "queue_free"
      },
      "choices": {
        "nl": [
          "SQL drop",
          "node later vrijgeven",
          "CSS",
          "pip"
        ],
        "en": [
          "SQL drop",
          "free node later",
          "CSS",
          "pip"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Free.",
        "en": "Free."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "is_instance_valid",
        "en": "is_instance_valid"
      },
      "choices": {
        "nl": [
          "CSS",
          "check of object leeft",
          "git",
          "Rust borrow"
        ],
        "en": [
          "CSS",
          "check object alive",
          "git",
          "Rust borrow"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Valid.",
        "en": "Valid."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib GDScript",
        "en": "CodeCrib GDScript"
      },
      "choices": {
        "nl": [
          "officieel Godot cert",
          "origineel oefenen",
          "betaald",
          "leaked"
        ],
        "en": [
          "official Godot cert",
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
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Print Hello",
        "en": "Print Hello"
      },
      "prompt": {
        "nl": "Gebruik print(\"Hello\").",
        "en": "Use print(\"Hello\")."
      },
      "lang": "gdscript",
      "starter": "extends Node\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "print"
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
        "nl": "coins var",
        "en": "coins var"
      },
      "prompt": {
        "nl": "var coins := 0 en een func collect.",
        "en": "var coins := 0 and a func collect."
      },
      "lang": "gdscript",
      "starter": "extends Node\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "coins"
        },
        {
          "type": "code_contains",
          "value": "func"
        }
      ]
    }
  ]
};
})(window);
