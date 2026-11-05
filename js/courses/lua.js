(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.lua = {
  "id": "lua",
  "title": {
    "nl": "Lua / Luau (Roblox)",
    "en": "Lua / Luau (Roblox)"
  },
  "intro": {
    "nl": "Game scripts: tables, events en Roblox/Luau smaak.",
    "en": "Game scripts: tables, events and Roblox/Luau flavor."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Lua",
        "en": "Your first Lua"
      },
      "body": {
        "nl": "<p>Lua is licht en populair in games. In Roblox heet de smaak vaak Luau.</p><pre>print(\"Hallo CodeCrib\")</pre><div class=\"callout\"><strong>Tip:</strong> Indexen in Lua beginnen standaard bij <code class=\"inline\">1</code>, niet 0.</div>",
        "en": "<p>Lua is light and popular in games. On Roblox the flavor is often Luau.</p><pre>print(\"Hello CodeCrib\")</pre><div class=\"callout\"><strong>Tip:</strong> Lua indexes usually start at <code class=\"inline\">1</code>, not 0.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Standaard start-index?",
            "en": "Default start index?"
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
          "answer": 1,
          "why": {
            "nl": "1-based.",
            "en": "1-based."
          }
        },
        {
          "q": {
            "nl": "Print in Lua?",
            "en": "Print in Lua?"
          },
          "choices": {
            "nl": [
              "console.log",
              "print",
              "echo",
              "Write"
            ],
            "en": [
              "console.log",
              "print",
              "echo",
              "Write"
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
        "lang": "lua",
        "instructions": {
          "nl": "Print Hallo CodeCrib",
          "en": "Print Hallo CodeCrib"
        },
        "starter": "print(\"Hallo CodeCrib\")\n",
        "tests": [
          {
            "type": "equals",
            "value": "Hallo CodeCrib"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": {
        "nl": "Types en nil",
        "en": "Types and nil"
      },
      "body": {
        "nl": "<pre>local score = 10\nlocal name = \"Justy\"\nlocal ready = true\nlocal missing = nil</pre><p><code class=\"inline\">local</code> is scope-vriendelijk. Zonder local wordt het globaal (vaak ongewenst).</p>",
        "en": "<pre>local score = 10\nlocal name = \"Justy\"\nlocal ready = true\nlocal missing = nil</pre><p><code class=\"inline\">local</code> is scope-friendly. Without it you get a global (often unwanted).</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "nil betekent?",
            "en": "nil means?"
          },
          "choices": {
            "nl": [
              "0",
              "lege string",
              "geen waarde",
              "true"
            ],
            "en": [
              "0",
              "empty string",
              "no value",
              "true"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Geen waarde.",
            "en": "No value."
          }
        },
        {
          "q": {
            "nl": "Waarom local?",
            "en": "Why local?"
          },
          "choices": {
            "nl": [
              "sneller altijd",
              "betere scope",
              "verwijdert nil",
              "Roblox only"
            ],
            "en": [
              "always faster",
              "better scope",
              "removes nil",
              "Roblox only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Scope.",
            "en": "Scope."
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
        "nl": "<pre>local x = 5\nif x &gt; 3 and x &lt; 5 then\n  print(\"A\")\nelseif x &gt;= 5 then\n  print(\"B\")\nelse\n  print(\"C\")\nend</pre>",
        "en": "<pre>local x = 5\nif x &gt; 3 and x &lt; 5 then\n  print(\"A\")\nelseif x &gt;= 5 then\n  print(\"B\")\nelse\n  print(\"C\")\nend</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5 print?",
            "en": "x=5 prints?"
          },
          "choices": {
            "nl": [
              "A",
              "B",
              "C",
              "error"
            ],
            "en": [
              "A",
              "B",
              "C",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "elseif.",
            "en": "elseif."
          }
        },
        {
          "q": {
            "nl": "Lua else-if keyword?",
            "en": "Lua else-if keyword?"
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
          "answer": 1,
          "why": {
            "nl": "elseif.",
            "en": "elseif."
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
        "nl": "<pre>for i = 0, 9, 3 do\n  print(i)\nend\nwhile n &gt; 0 do n = n - 1 end</pre>",
        "en": "<pre>for i = 0, 9, 3 do\n  print(i)\nend\nwhile n &gt; 0 do n = n - 1 end</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "for i=0,9,3 hoeveel?",
            "en": "for i=0,9,3 how many?"
          },
          "choices": {
            "nl": [
              "3",
              "4",
              "10",
              "9"
            ],
            "en": [
              "3",
              "4",
              "10",
              "9"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "0,3,6,9.",
            "en": "0,3,6,9."
          }
        },
        {
          "q": {
            "nl": "Loop eindigt met?",
            "en": "Loop ends with?"
          },
          "choices": {
            "nl": [
              "}",
              "end",
              "fi",
              "done"
            ],
            "en": [
              "}",
              "end",
              "fi",
              "done"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "end.",
            "en": "end."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Tables",
        "en": "Tables"
      },
      "body": {
        "nl": "<p>Alles draait om tables: arrays en dicts in één.</p><pre>local nums = {10,20,30}\nprint(nums[1]) -- 10\nlocal player = {hp=100, name=\"Justy\"}</pre>",
        "en": "<p>Everything is tables: arrays and dicts in one.</p><pre>local nums = {10,20,30}\nprint(nums[1]) -- 10\nlocal player = {hp=100, name=\"Justy\"}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "nums[1] bij {10,20,30}?",
            "en": "nums[1] for {10,20,30}?"
          },
          "choices": {
            "nl": [
              "20",
              "10",
              "30",
              "nil"
            ],
            "en": [
              "20",
              "10",
              "30",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "1-based first.",
            "en": "1-based first."
          }
        },
        {
          "q": {
            "nl": "player.hp?",
            "en": "player.hp?"
          },
          "choices": {
            "nl": [
              "100",
              "nil",
              "'hp'",
              "error"
            ],
            "en": [
              "100",
              "nil",
              "'hp'",
              "error"
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
        "nl": "Functions",
        "en": "Functions"
      },
      "body": {
        "nl": "<pre>local function add(a,b)\n  return a + b\nend\nprint(add(2,3))</pre>",
        "en": "<pre>local function add(a,b)\n  return a + b\nend\nprint(add(2,3))</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "add(2,3)?",
            "en": "add(2,3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "nil",
              "error"
            ],
            "en": [
              "23",
              "5",
              "nil",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "q": {
            "nl": "Function keyword?",
            "en": "Function keyword?"
          },
          "choices": {
            "nl": [
              "def",
              "function",
              "fn",
              "method"
            ],
            "en": [
              "def",
              "function",
              "fn",
              "method"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "function.",
            "en": "function."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Errors pcall",
        "en": "Errors pcall"
      },
      "body": {
        "nl": "<pre>local ok, err = pcall(function()\n  error(\"boom\")\nend)\nif not ok then print(err) end</pre><p>In Roblox zie je ook events en connections.</p>",
        "en": "<pre>local ok, err = pcall(function()\n  error(\"boom\")\nend)\nif not ok then print(err) end</pre><p>In Roblox you also see events and connections.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "pcall vangt?",
            "en": "pcall catches?"
          },
          "choices": {
            "nl": [
              "CSS",
              "runtime errors in call",
              "SQL",
              "nil forever"
            ],
            "en": [
              "CSS",
              "runtime errors in call",
              "SQL",
              "nil forever"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Protected call.",
            "en": "Protected call."
          }
        },
        {
          "q": {
            "nl": "error() doet?",
            "en": "error() does?"
          },
          "choices": {
            "nl": [
              "print only",
              "gooit/raises",
              "compile C",
              "shuffle"
            ],
            "en": [
              "print only",
              "throws/raises",
              "compile C",
              "shuffle"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Raises.",
            "en": "Raises."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Roblox/Luau smaak",
        "en": "Roblox/Luau flavor"
      },
      "body": {
        "nl": "<p>Luau voegt types en strengere checks toe. Conceptueel:</p><pre>-- Luau-achtig\nlocal function heal(p: number): number\n  return p + 10\nend</pre><p>In Studio werk je met Instances, WaitForChild en events zoals <code class=\"inline\">Touched</code>.</p>",
        "en": "<p>Luau adds types and stricter checks. Conceptually:</p><pre>-- Luau-like\nlocal function heal(p: number): number\n  return p + 10\nend</pre><p>In Studio you work with Instances, WaitForChild and events like <code class=\"inline\">Touched</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Luau is?",
            "en": "Luau is?"
          },
          "choices": {
            "nl": [
              "CSS dialect",
              "Lua-smaak (o.a. Roblox)",
              "SQL engine",
              "C compiler"
            ],
            "en": [
              "CSS dialect",
              "Lua flavor (e.g. Roblox)",
              "SQL engine",
              "C compiler"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Roblox Lua.",
            "en": "Roblox Lua."
          }
        },
        {
          "q": {
            "nl": "WaitForChild wacht op?",
            "en": "WaitForChild waits for?"
          },
          "choices": {
            "nl": [
              "HTTP only",
              "child instance",
              "GPU",
              "pip"
            ],
            "en": [
              "HTTP only",
              "child instance",
              "GPU",
              "pip"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Child.",
            "en": "Child."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Mini project: coin counter",
        "en": "Mini project: coin counter"
      },
      "body": {
        "nl": "<pre>local coins = 0\nlocal function collect(n)\n  coins = coins + n\n  print(\"coins\", coins)\nend\ncollect(5)\ncollect(2)</pre>",
        "en": "<pre>local coins = 0\nlocal function collect(n)\n  coins = coins + n\n  print(\"coins\", coins)\nend\ncollect(5)\ncollect(2)</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Na collect(5); collect(2) coins?",
            "en": "After collect(5); collect(2) coins?"
          },
          "choices": {
            "nl": [
              "5",
              "2",
              "7",
              "0"
            ],
            "en": [
              "5",
              "2",
              "7",
              "0"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "5+2.",
            "en": "5+2."
          }
        },
        {
          "q": {
            "nl": "Waarom local function?",
            "en": "Why local function?"
          },
          "choices": {
            "nl": [
              "moet van Roblox",
              "scope + duidelijkheid",
              "verwijdert tables",
              "SQL"
            ],
            "en": [
              "Roblox requires",
              "scope + clarity",
              "deletes tables",
              "SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Scope.",
            "en": "Scope."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "Lua comment",
        "en": "Lua comment"
      },
      "choices": {
        "nl": [
          "//",
          "--",
          "#",
          "/* only"
        ],
        "en": [
          "//",
          "--",
          "#",
          "/* only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "--.",
        "en": "--."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "~= betekent",
        "en": "~= means"
      },
      "choices": {
        "nl": [
          "equals",
          "not equal",
          "approx",
          "length"
        ],
        "en": [
          "equals",
          "not equal",
          "approx",
          "length"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Not equal.",
        "en": "Not equal."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "#t lengte",
        "en": "#t length"
      },
      "choices": {
        "nl": [
          "hash",
          "array-achtige lengte",
          "SQL",
          "nil"
        ],
        "en": [
          "hash",
          "array-like length",
          "SQL",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Length.",
        "en": "Length."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "pairs vs ipairs",
        "en": "pairs vs ipairs"
      },
      "choices": {
        "nl": [
          "zelfde",
          "ipairs array-deel, pairs alle keys",
          "SQL",
          "deprecated"
        ],
        "en": [
          "same",
          "ipairs array part, pairs all keys",
          "SQL",
          "deprecated"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Verschil.",
        "en": "Difference."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "false and true",
        "en": "false and true"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "nil",
          "error"
        ],
        "en": [
          "true",
          "false",
          "nil",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "and short-circuit.",
        "en": "and short-circuit."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "0 is truthy?",
        "en": "0 is truthy?"
      },
      "choices": {
        "nl": [
          "nee zoals JS",
          "ja in Lua",
          "error",
          "nil"
        ],
        "en": [
          "no like JS",
          "yes in Lua",
          "error",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alleen false/nil falsy.",
        "en": "Only false/nil falsy."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "table.insert",
        "en": "table.insert"
      },
      "choices": {
        "nl": [
          "push-achtig",
          "SQL insert",
          "CSS",
          "compile"
        ],
        "en": [
          "push-like",
          "SQL insert",
          "CSS",
          "compile"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Insert.",
        "en": "Insert."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "require",
        "en": "require"
      },
      "choices": {
        "nl": [
          "CSS",
          "module laden",
          "pip uninstall",
          "DOM"
        ],
        "en": [
          "CSS",
          "load module",
          "pip uninstall",
          "DOM"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Modules.",
        "en": "Modules."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "string.sub",
        "en": "string.sub"
      },
      "choices": {
        "nl": [
          "substring",
          "SQL",
          "HTML",
          "nil only"
        ],
        "en": [
          "substring",
          "SQL",
          "HTML",
          "nil only"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Sub.",
        "en": "Sub."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "type(x)",
        "en": "type(x)"
      },
      "choices": {
        "nl": [
          "compile",
          "geeft type string",
          "DOM",
          "Rust"
        ],
        "en": [
          "compile",
          "returns type string",
          "DOM",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Type name.",
        "en": "Type name."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "semicolon",
        "en": "semicolon"
      },
      "choices": {
        "nl": [
          "verplicht",
          "optioneel",
          "verboden",
          "alleen Roblox"
        ],
        "en": [
          "required",
          "optional",
          "forbidden",
          "Roblox only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Optional.",
        "en": "Optional."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "self in method",
        "en": "self in method"
      },
      "choices": {
        "nl": [
          "python cls",
          "instance table",
          "SQL",
          "CSS"
        ],
        "en": [
          "python cls",
          "instance table",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Receiver.",
        "en": "Receiver."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "coroutine",
        "en": "coroutine"
      },
      "choices": {
        "nl": [
          "OS thread always",
          "coöperatieve thread-achtig",
          "SQL cursor",
          "CSS"
        ],
        "en": [
          "OS thread always",
          "cooperative thread-like",
          "SQL cursor",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Coroutines.",
        "en": "Coroutines."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "game.Workspace",
        "en": "game.Workspace"
      },
      "choices": {
        "nl": [
          "Python pip",
          "Roblox service/data model smaak",
          "C header",
          "Go module"
        ],
        "en": [
          "Python pip",
          "Roblox service/data model flavor",
          "C header",
          "Go module"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Roblox.",
        "en": "Roblox."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "task.wait",
        "en": "task.wait"
      },
      "choices": {
        "nl": [
          "CSS animation",
          "Luau/Roblox wait helper",
          "SQL WAIT",
          "fatal"
        ],
        "en": [
          "CSS animation",
          "Luau/Roblox wait helper",
          "SQL WAIT",
          "fatal"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Wait.",
        "en": "Wait."
      }
    },
    {
      "id": 16,
      "q": {
        "nl": "vector3 smaak",
        "en": "Vector3 flavor"
      },
      "choices": {
        "nl": [
          "alleen C",
          "veel gebruikt in 3D Roblox",
          "SQL type",
          "HTML"
        ],
        "en": [
          "C only",
          "common in 3D Roblox",
          "SQL type",
          "HTML"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "3D.",
        "en": "3D."
      }
    },
    {
      "id": 17,
      "q": {
        "nl": ":Connect",
        "en": "Connect"
      },
      "choices": {
        "nl": [
          "USB",
          "event connection patroon",
          "pip",
          "git"
        ],
        "en": [
          "USB",
          "event connection pattern",
          "pip",
          "git"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Events.",
        "en": "Events."
      }
    },
    {
      "id": 18,
      "q": {
        "nl": "== op tables",
        "en": "== on tables"
      },
      "choices": {
        "nl": [
          "deep equal always",
          "referentie (meestal)",
          "error",
          "sorteert"
        ],
        "en": [
          "deep equal always",
          "reference (usually)",
          "error",
          "sorts"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Identity.",
        "en": "Identity."
      }
    },
    {
      "id": 19,
      "q": {
        "nl": "tostring(10)",
        "en": "tostring(10)"
      },
      "choices": {
        "nl": [
          "10 number",
          "'10'",
          "nil",
          "error"
        ],
        "en": [
          "10 number",
          "'10'",
          "nil",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "String.",
        "en": "String."
      }
    },
    {
      "id": 20,
      "q": {
        "nl": "CodeCrib Lua",
        "en": "CodeCrib Lua"
      },
      "choices": {
        "nl": [
          "officieel Roblox exam",
          "origineel oefenen",
          "betaald",
          "leaked"
        ],
        "en": [
          "official Roblox exam",
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
        "nl": "Som printen",
        "en": "Print a sum"
      },
      "prompt": {
        "nl": "Print 2+3.",
        "en": "Print 2+3."
      },
      "lang": "lua",
      "starter": "-- print 5\n",
      "tests": [
        {
          "type": "equals",
          "value": "5"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "Table index 1",
        "en": "Table index 1"
      },
      "prompt": {
        "nl": "nums={10,20,30}; print nums[1] (moet 10 zijn in Lua).",
        "en": "nums={10,20,30}; print nums[1] (should be 10 in Lua)."
      },
      "lang": "lua",
      "starter": "local nums = {10,20,30}\n",
      "tests": [
        {
          "type": "equals",
          "value": "10"
        }
      ]
    }
  ]
};
})(window);
