(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.rust = {
  "id": "rust",
  "title": {
    "nl": "Rust voor beginners",
    "en": "Rust for beginners"
  },
  "intro": {
    "nl": "Ownership, mut, Result/Option, Vec.",
    "en": "Ownership, mut, Result/Option, Vec."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste Rust",
        "en": "Your first Rust"
      },
      "body": {
        "nl": "<p>Rust: veilig en snel. Geen GC, wel ownership.</p><pre>fn main() {\n  println!(\"Hallo\");\n}</pre>",
        "en": "<p>Rust: safe and fast. No GC, but ownership.</p><pre>fn main() {\n  println!(\"Hello\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Print macro?",
            "en": "Print macro?"
          },
          "choices": {
            "nl": [
              "print!",
              "println!",
              "console.log",
              "trace"
            ],
            "en": [
              "print!",
              "println!",
              "console.log",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "println!.",
            "en": "println!."
          }
        },
        {
          "q": {
            "nl": "fn main?",
            "en": "fn main?"
          },
          "choices": {
            "nl": [
              "verplicht entry",
              "CSS",
              "SQL",
              "Lua"
            ],
            "en": [
              "required entry",
              "CSS",
              "SQL",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Entry.",
            "en": "Entry."
          }
        }
      ],
      "exercise": {
        "lang": "rust",
        "instructions": {
          "nl": "println Hallo",
          "en": "println Hallo"
        },
        "starter": "fn main(){ println!(\"Hallo\"); }\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "println!"
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
        "nl": "Ownership smaak",
        "en": "Ownership flavor"
      },
      "body": {
        "nl": "<pre>let score = 10;\nlet mut hp = 100;\nhp -= 3;</pre><div class=\"callout\"><strong>Valkuil:</strong> variabelen zijn immutable tenzij <code class=\"inline\">mut</code>.</div>",
        "en": "<pre>let score = 10;\nlet mut hp = 100;\nhp -= 3;</pre><div class=\"callout\"><strong>Pitfall:</strong> bindings are immutable unless <code class=\"inline\">mut</code>.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Zonder mut wijzigen?",
            "en": "Change without mut?"
          },
          "choices": {
            "nl": [
              "ok",
              "compile error",
              "runtime null",
              "SQL"
            ],
            "en": [
              "ok",
              "compile error",
              "runtime null",
              "SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Need mut.",
            "en": "Need mut."
          }
        },
        {
          "q": {
            "nl": "let vs var?",
            "en": "let vs var?"
          },
          "choices": {
            "nl": [
              "var keyword",
              "let is standaard",
              "SQL",
              "CSS"
            ],
            "en": [
              "var keyword",
              "let is standard",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "let.",
            "en": "let."
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
        "nl": "<pre>if x &gt;= 5 { println!(\"B\"); } else { println!(\"C\"); }</pre>",
        "en": "<pre>if x &gt;= 5 { println!(\"B\"); } else { println!(\"C\"); }</pre>"
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
            "nl": "if is expressie?",
            "en": "if is expression?"
          },
          "choices": {
            "nl": [
              "nee altijd",
              "kan waarde opleveren",
              "SQL",
              "CSS"
            ],
            "en": [
              "never",
              "can yield a value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Expression.",
            "en": "Expression."
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
        "nl": "<pre>for i in (0..10).step_by(3) {\n  println!(\"{i}\");\n}</pre>",
        "en": "<pre>for i in (0..10).step_by(3) {\n  println!(\"{i}\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "0..10 half-open?",
            "en": "0..10 half-open?"
          },
          "choices": {
            "nl": [
              "bevat 10",
              "0 t/m 9",
              "1 t/m 10",
              "leeg"
            ],
            "en": [
              "includes 10",
              "0 through 9",
              "1 through 10",
              "empty"
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
            "nl": "loop {} ?",
            "en": "loop {} ?"
          },
          "choices": {
            "nl": [
              "verboden",
              "oneindig tot break",
              "SQL",
              "CSS"
            ],
            "en": [
              "forbidden",
              "infinite until break",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "loop.",
            "en": "loop."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Vec en ownership",
        "en": "Vec and ownership"
      },
      "body": {
        "nl": "<pre>let mut nums = vec![10,20,30];\nnums.push(40);</pre>",
        "en": "<pre>let mut nums = vec![10,20,30];\nnums.push(40);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "vec! macro?",
            "en": "vec! macro?"
          },
          "choices": {
            "nl": [
              "CSS",
              "maakt Vec",
              "SQL",
              "Lua"
            ],
            "en": [
              "CSS",
              "builds Vec",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Vec.",
            "en": "Vec."
          }
        },
        {
          "q": {
            "nl": "push nodig mut?",
            "en": "push needs mut?"
          },
          "choices": {
            "nl": [
              "nee",
              "ja",
              "SQL",
              "CSS"
            ],
            "en": [
              "no",
              "yes",
              "SQL",
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
      "id": 6,
      "title": {
        "nl": "Functies en Result",
        "en": "Functions and Result"
      },
      "body": {
        "nl": "<pre>fn add(a: i32, b: i32) -&gt; i32 { a + b }</pre>",
        "en": "<pre>fn add(a: i32, b: i32) -&gt; i32 { a + b }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "i32?",
            "en": "i32?"
          },
          "choices": {
            "nl": [
              "string",
              "32-bit int",
              "SQL",
              "float only"
            ],
            "en": [
              "string",
              "32-bit int",
              "SQL",
              "float only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "i32.",
            "en": "i32."
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
              "()",
              "error"
            ],
            "en": [
              "5",
              "23",
              "()",
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
        "nl": "Result/Option",
        "en": "Result/Option"
      },
      "body": {
        "nl": "<pre>fn parse_u(s: &amp;str) -&gt; Result&lt;u32, std::num::ParseIntError&gt; {\n  s.parse()\n}</pre>",
        "en": "<pre>fn parse_u(s: &amp;str) -&gt; Result&lt;u32, std::num::ParseIntError&gt; {\n  s.parse()\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Result?",
            "en": "Result?"
          },
          "choices": {
            "nl": [
              "alleen Ok",
              "Ok of Err",
              "SQL",
              "null always"
            ],
            "en": [
              "Ok only",
              "Ok or Err",
              "SQL",
              "null always"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Result.",
            "en": "Result."
          }
        },
        {
          "q": {
            "nl": "Option None?",
            "en": "Option None?"
          },
          "choices": {
            "nl": [
              "null Java spelling",
              "geen waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "null Java spelling",
              "no value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "None.",
            "en": "None."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini project: clamp hp",
        "en": "Mini project: clamp hp"
      },
      "body": {
        "nl": "<pre>fn clamp(hp: i32) -&gt; i32 { if hp &lt; 0 { 0 } else { hp } }</pre>",
        "en": "<pre>fn clamp(hp: i32) -&gt; i32 { if hp &lt; 0 { 0 } else { hp } }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "clamp(-2)?",
            "en": "clamp(-2)?"
          },
          "choices": {
            "nl": [
              "-2",
              "0",
              "2",
              "None"
            ],
            "en": [
              "-2",
              "0",
              "2",
              "None"
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
            "nl": "Geen ; op laatste expressie?",
            "en": "No ; on last expression?"
          },
          "choices": {
            "nl": [
              "error altijd",
              "returnt die waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "always error",
              "returns that value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Implicit return.",
            "en": "Implicit return."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Option tip",
        "en": "Option tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">Some(x)</code> / <code class=\"inline\">None</code>. Match of <code class=\"inline\">if let</code>.</p>",
        "en": "<p><code class=\"inline\">Some(x)</code> / <code class=\"inline\">None</code>. Match or <code class=\"inline\">if let</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "None is?",
            "en": "None is?"
          },
          "choices": {
            "nl": [
              "null Java spelling",
              "geen waarde",
              "SQL",
              "CSS"
            ],
            "en": [
              "null Java spelling",
              "no value",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "None.",
            "en": "None."
          }
        },
        {
          "q": {
            "nl": "unwrap risk?",
            "en": "unwrap risk?"
          },
          "choices": {
            "nl": [
              "altijd veilig",
              "kan panic",
              "SQL",
              "CSS"
            ],
            "en": [
              "always safe",
              "can panic",
              "SQL",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Panic.",
            "en": "Panic."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "borrow &amp;",
        "en": "borrow &amp;"
      },
      "choices": {
        "nl": [
          "copy always",
          "referentie lenen",
          "SQL",
          "CSS"
        ],
        "en": [
          "always copy",
          "borrow reference",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Borrow.",
        "en": "Borrow."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "move",
        "en": "move"
      },
      "choices": {
        "nl": [
          "CSS anim",
          "ownership verplaatsen",
          "SQL",
          "Lua"
        ],
        "en": [
          "CSS anim",
          "move ownership",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Move.",
        "en": "Move."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "cargo",
        "en": "cargo"
      },
      "choices": {
        "nl": [
          "ship",
          "build tool / packages",
          "SQL",
          "Godot"
        ],
        "en": [
          "ship",
          "build tool / packages",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Cargo.",
        "en": "Cargo."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "match",
        "en": "match"
      },
      "choices": {
        "nl": [
          "if only",
          "pattern match",
          "SQL MATCH",
          "CSS"
        ],
        "en": [
          "if only",
          "pattern match",
          "SQL MATCH",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "match.",
        "en": "match."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "unwrap",
        "en": "unwrap"
      },
      "choices": {
        "nl": [
          "veilig altijd",
          "pakt Ok/Some of panic",
          "SQL",
          "CSS"
        ],
        "en": [
          "always safe",
          "takes Ok/Some or panics",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Careful.",
        "en": "Careful."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "String vs &amp;str",
        "en": "String vs &amp;str"
      },
      "choices": {
        "nl": [
          "zelfde",
          "owned vs borrowed str",
          "SQL",
          "Lua"
        ],
        "en": [
          "same",
          "owned vs borrowed str",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Different.",
        "en": "Different."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "panic!",
        "en": "panic!"
      },
      "choices": {
        "nl": [
          "log only",
          "stopt thread/unwind",
          "SQL",
          "CSS"
        ],
        "en": [
          "log only",
          "stops thread/unwind",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Panic.",
        "en": "Panic."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "impl",
        "en": "impl"
      },
      "choices": {
        "nl": [
          "SQL",
          "methods op type",
          "pip",
          "Lua end"
        ],
        "en": [
          "SQL",
          "methods on type",
          "pip",
          "Lua end"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "impl.",
        "en": "impl."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "trait",
        "en": "trait"
      },
      "choices": {
        "nl": [
          "CSS",
          "gedeeld gedrag",
          "SQL view",
          "npm"
        ],
        "en": [
          "CSS",
          "shared behavior",
          "SQL view",
          "npm"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Trait.",
        "en": "Trait."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "lifetime 'a",
        "en": "lifetime 'a"
      },
      "choices": {
        "nl": [
          "CSS animation",
          "referentie leeftijd",
          "SQL",
          "Lua"
        ],
        "en": [
          "CSS animation",
          "reference lifetime",
          "SQL",
          "Lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Lifetime.",
        "en": "Lifetime."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "Result?",
        "en": "? operator"
      },
      "choices": {
        "nl": [
          "ternary",
          "error propagate",
          "SQL",
          "CSS"
        ],
        "en": [
          "ternary",
          "error propagate",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "?.",
        "en": "?."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "Clone",
        "en": "Clone"
      },
      "choices": {
        "nl": [
          "move only",
          "expliciet kopiëren",
          "SQL",
          "Godot"
        ],
        "en": [
          "move only",
          "explicit copy",
          "SQL",
          "Godot"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Clone.",
        "en": "Clone."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "unsafe",
        "en": "unsafe"
      },
      "choices": {
        "nl": [
          "verboden forever",
          "extra powers met verantwoordelijkheid",
          "SQL",
          "CSS"
        ],
        "en": [
          "forbidden forever",
          "extra powers with duty",
          "SQL",
          "CSS"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "unsafe.",
        "en": "unsafe."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "enum Option",
        "en": "enum Option"
      },
      "choices": {
        "nl": [
          "None/Some",
          "null Java",
          "SQL",
          "CSS"
        ],
        "en": [
          "None/Some",
          "null Java",
          "SQL",
          "CSS"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Option.",
        "en": "Option."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib Rust",
        "en": "CodeCrib Rust"
      },
      "choices": {
        "nl": [
          "official leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "official leak",
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
        "nl": "println Hello",
        "en": "println Hello"
      },
      "prompt": {
        "nl": "Gebruik println! met Hello.",
        "en": "Use println! with Hello."
      },
      "lang": "rust",
      "starter": "fn main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "println!"
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
        "nl": "mut hp",
        "en": "mut hp"
      },
      "prompt": {
        "nl": "Gebruik let mut hp.",
        "en": "Use let mut hp."
      },
      "lang": "rust",
      "starter": "fn main() {\n\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "mut"
        },
        {
          "type": "code_contains",
          "value": "hp"
        }
      ]
    }
  ]
};
})(window);
