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
              "trace",
              "console.log only",
              "echo"
            ],
            "en": [
              "print",
              "trace",
              "console.log only",
              "echo"
            ]
          },
          "answer": 1,
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
        }
      ]
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
              "int",
              "Int",
              "integer",
              "i32 only"
            ],
            "en": [
              "int",
              "Int",
              "integer",
              "i32 only"
            ]
          },
          "answer": 1,
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
              "0,1,2",
              "1,2,3",
              "3"
            ],
            "en": [
              "0,1,2,3",
              "0,1,2",
              "1,2,3",
              "3"
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
            "nl": "while bestaat?",
            "en": "while exists?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "alleen macros",
              "alleen Flash"
            ],
            "en": [
              "no",
              "yes",
              "macros only",
              "Flash only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Ja.",
            "en": "Yes."
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
              "set",
              "push",
              "insertRow"
            ],
            "en": [
              "append",
              "set",
              "push",
              "insertRow"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "set.",
            "en": "set."
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
              "new",
              "ctor",
              "__init__"
            ],
            "en": [
              "init",
              "new",
              "ctor",
              "__init__"
            ]
          },
          "answer": 1,
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
              "5",
              "null",
              "error"
            ],
            "en": [
              "23",
              "5",
              "null",
              "error"
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
              "null of String",
              "alleen 0",
              "alleen false"
            ],
            "en": [
              "only ''",
              "null or String",
              "only 0",
              "only false"
            ]
          },
          "answer": 1,
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
              "veilig",
              "riskant/error",
              "altijd 0",
              "compileert C"
            ],
            "en": [
              "safe",
              "risky/error",
              "always 0",
              "compiles C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Riskant.",
            "en": "Risky."
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
              "per-frame tick",
              "CSS hover only",
              "git hook"
            ],
            "en": [
              "SQL trigger",
              "per-frame tick",
              "CSS hover only",
              "git hook"
            ]
          },
          "answer": 1,
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
              "geen return waarde",
              "private",
              "macro"
            ],
            "en": [
              "return int",
              "no return value",
              "private",
              "macro"
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
          "bestaat",
          "verboden",
          "alleen Lua",
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
      "id": 4,
      "q": {
        "nl": "Std.int",
        "en": "Std.int"
      },
      "choices": {
        "nl": [
          "string",
          "naar Int",
          "DOM",
          "shuffle"
        ],
        "en": [
          "string",
          "to Int",
          "DOM",
          "shuffle"
        ]
      },
      "answer": 1,
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
          "append",
          "push",
          "addRow",
          "insertRow"
        ],
        "en": [
          "append",
          "push",
          "addRow",
          "insertRow"
        ]
      },
      "answer": 1,
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
          "keys only",
          "waarden",
          "SQL",
          "CSS"
        ],
        "en": [
          "keys only",
          "values",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "bestaat",
          "nee",
          "alleen macros",
          "python only"
        ],
        "en": [
          "exists",
          "no",
          "macros only",
          "python only"
        ]
      },
      "answer": 0,
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
          "toegangscontrole",
          "SQL",
          "CSS"
        ],
        "en": [
          "always public",
          "access control",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
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
          "compile-time code",
          "runtime only CSS",
          "SQL",
          "git"
        ],
        "en": [
          "compile-time code",
          "runtime CSS only",
          "SQL",
          "git"
        ]
      },
      "answer": 0,
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
          "string helpers",
          "Roblox service",
          "Go fmt"
        ],
        "en": [
          "CSS",
          "string helpers",
          "Roblox service",
          "Go fmt"
        ]
      },
      "answer": 1,
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
          "bovenliggende class",
          "SQL",
          "DOM root",
          "nil"
        ],
        "en": [
          "parent class",
          "SQL",
          "DOM root",
          "nil"
        ]
      },
      "answer": 0,
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
          "SQL row",
          "vaak in HaxeFlixel/FNF ecosystem",
          "Java Swing only",
          "Rust crate"
        ],
        "en": [
          "SQL row",
          "often in HaxeFlixel/FNF ecosystem",
          "Java Swing only",
          "Rust crate"
        ]
      },
      "answer": 1,
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
          "git blame",
          "compiler metadata",
          "CSS",
          "pip"
        ],
        "en": [
          "git blame",
          "compiler metadata",
          "CSS",
          "pip"
        ]
      },
      "answer": 1,
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
          "zelfde",
          "trace debug, return geeft waarde",
          "SQL",
          "beide verboden"
        ],
        "en": [
          "same",
          "trace debug, return yields value",
          "SQL",
          "both forbidden"
        ]
      },
      "answer": 1,
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
    }
  ]
};
})(window);
