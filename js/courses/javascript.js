(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.javascript = {
  "id": "javascript",
  "title": {
    "nl": "JavaScript voor beginners",
    "en": "JavaScript for beginners"
  },
  "intro": {
    "nl": "Browser-taal: variabelen, DOM-basics en functies.",
    "en": "Browser language: variables, DOM basics and functions."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste JavaScript",
        "en": "Your first JavaScript"
      },
      "body": {
        "nl": "<p>JS draait in de browser of in Node. Log met <code class=\"inline\">console.log</code>.</p><pre>console.log(\"Hallo CodeCrib\");</pre><div class=\"callout\"><strong>Tip:</strong> Statements eindigen vaak met <code class=\"inline\">;</code>, maar ASI bestaat.</div>",
        "en": "<p>JS runs in the browser or Node. Log with <code class=\"inline\">console.log</code>.</p><pre>console.log(\"Hello CodeCrib\");</pre><div class=\"callout\"><strong>Tip:</strong> Statements often end with <code class=\"inline\">;</code>, but ASI exists.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Print in JS?",
            "en": "Print in JS?"
          },
          "choices": {
            "nl": [
              "print",
              "console.log",
              "echo",
              "WriteLine"
            ],
            "en": [
              "print",
              "console.log",
              "echo",
              "WriteLine"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "console.log.",
            "en": "console.log."
          }
        },
        {
          "q": {
            "nl": "Waar draait browser-JS?",
            "en": "Where does browser JS run?"
          },
          "choices": {
            "nl": [
              "alleen server",
              "in de pagina",
              "alleen Python",
              "in SQL"
            ],
            "en": [
              "server only",
              "in the page",
              "Python only",
              "in SQL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "In de browser.",
            "en": "In the browser."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ],
      "exercise": {
        "lang": "javascript",
        "instructions": {
          "nl": "Log Hallo CodeCrib",
          "en": "Log Hallo CodeCrib"
        },
        "starter": "console.log(\"Hallo CodeCrib\");\n",
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
        "nl": "Variabelen: let, const, var",
        "en": "Variables: let, const, var"
      },
      "body": {
        "nl": "<p>Gebruik <code class=\"inline\">let</code> (veranderlijk) en <code class=\"inline\">const</code> (niet herbinden). Vermijd <code class=\"inline\">var</code> in nieuwe code.</p><pre>let score = 10;\nconst name = \"Justy\";\nscore += 5;</pre><div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">==</code> doet type coercion. Gebruik <code class=\"inline\">===</code>.</div>",
        "en": "<p>Use <code class=\"inline\">let</code> (mutable) and <code class=\"inline\">const</code> (no rebind). Avoid <code class=\"inline\">var</code> in new code.</p><pre>let score = 10;\nconst name = \"Justy\";\nscore += 5;</pre><div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">==</code> coerces types. Prefer <code class=\"inline\">===</code>.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Welke vergelijking is streng?",
            "en": "Which comparison is strict?"
          },
          "choices": {
            "nl": [
              "==",
              "===",
              "=",
              "~="
            ],
            "en": [
              "==",
              "===",
              "=",
              "~="
            ]
          },
          "answer": 1,
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "q": {
            "nl": "const opnieuw binden?",
            "en": "Rebind const?"
          },
          "choices": {
            "nl": [
              "ok",
              "TypeError meestal",
              "wordt let",
              "silent"
            ],
            "en": [
              "ok",
              "TypeError usually",
              "becomes let",
              "silent"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Mag niet herbinden.",
            "en": "Cannot rebind."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
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
        "nl": "<p><code class=\"inline\">if</code>/<code class=\"inline\">else</code>, <code class=\"inline\">&amp;&amp;</code>, <code class=\"inline\">||</code>, ternary.</p><pre>const x = 5;\nif (x &gt;= 5) console.log(\"B\");\nelse console.log(\"C\");</pre>",
        "en": "<p><code class=\"inline\">if</code>/<code class=\"inline\">else</code>, <code class=\"inline\">&amp;&amp;</code>, <code class=\"inline\">||</code>, ternary.</p><pre>const x = 5;\nif (x &gt;= 5) console.log(\"B\");\nelse console.log(\"C\");</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "x=5 print?",
            "en": "x=5 prints?"
          },
          "choices": {
            "nl": [
              "B",
              "C",
              "beide",
              "niks"
            ],
            "en": [
              "B",
              "C",
              "both",
              "nothing"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "x>=5.",
            "en": "x>=5."
          }
        },
        {
          "q": {
            "nl": "Truthy: niet-lege string?",
            "en": "Truthy: non-empty string?"
          },
          "choices": {
            "nl": [
              "ja",
              "nee",
              "alleen cijfers",
              "alleen 'true'"
            ],
            "en": [
              "yes",
              "no",
              "digits only",
              "only 'true'"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Ja.",
            "en": "Yes."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
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
        "nl": "<pre>for (let i = 0; i &lt; 10; i += 3) console.log(i);\nfor (const n of [1,2,3]) console.log(n);</pre>",
        "en": "<pre>for (let i = 0; i &lt; 10; i += 3) console.log(i);\nfor (const n of [1,2,3]) console.log(n);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "i+=3 tot i<10: hoe vaak?",
            "en": "i+=3 while i<10: how many?"
          },
          "choices": {
            "nl": [
              "3",
              "4",
              "10",
              "oneindig"
            ],
            "en": [
              "3",
              "4",
              "10",
              "forever"
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
            "nl": "for...of loopt over?",
            "en": "for...of loops over?"
          },
          "choices": {
            "nl": [
              "alleen keys",
              "waarden/itereerbaar",
              "alleen DOM",
              "SQL rows"
            ],
            "en": [
              "keys only",
              "values/iterable",
              "DOM only",
              "SQL rows"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Iterable values.",
            "en": "Iterable values."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
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
        "nl": "<pre>const nums = [10,20,30];\nconst player = { hp: 100, name: \"Justy\" };\nconsole.log(nums[1], player.hp);</pre>",
        "en": "<pre>const nums = [10,20,30];\nconst player = { hp: 100, name: \"Justy\" };\nconsole.log(nums[1], player.hp);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "nums[1]?",
            "en": "nums[1]?"
          },
          "choices": {
            "nl": [
              "10",
              "20",
              "30",
              "undefined"
            ],
            "en": [
              "10",
              "20",
              "30",
              "undefined"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Index 1.",
            "en": "Index 1."
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
              "'hp'",
              "undefined",
              "error"
            ],
            "en": [
              "100",
              "'hp'",
              "undefined",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "100.",
            "en": "100."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
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
        "nl": "<pre>function add(a,b){ return a+b; }\nconst mul = (a,b) =&gt; a*b;</pre>",
        "en": "<pre>function add(a,b){ return a+b; }\nconst mul = (a,b) =&gt; a*b;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Arrow functie keyword?",
            "en": "Arrow function uses?"
          },
          "choices": {
            "nl": [
              "function=&gt;",
              "=>",
              "fn",
              "def"
            ],
            "en": [
              "function=&gt;",
              "=>",
              "fn",
              "def"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "=>.",
            "en": "=>."
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
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Errors try/catch",
        "en": "Errors try/catch"
      },
      "body": {
        "nl": "<pre>try {\n  JSON.parse(\"{bad\");\n} catch (e) {\n  console.log(\"parse fail\");\n}</pre>",
        "en": "<pre>try {\n  JSON.parse(\"{bad\");\n} catch (e) {\n  console.log(\"parse fail\");\n}</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Catch keyword JS?",
            "en": "Catch keyword JS?"
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
          "q": {
            "nl": "JSON.parse bad input?",
            "en": "JSON.parse bad input?"
          },
          "choices": {
            "nl": [
              "null",
              "gooit error",
              "''",
              "0"
            ],
            "en": [
              "null",
              "throws",
              "''",
              "0"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Throws.",
            "en": "Throws."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "DOM smaak",
        "en": "DOM flavor"
      },
      "body": {
        "nl": "<p>In de browser pak je elementen:</p><pre>const el = document.querySelector(\"#score\");\nel.textContent = \"10\";</pre>",
        "en": "<p>In the browser you grab elements:</p><pre>const el = document.querySelector(\"#score\");\nel.textContent = \"10\";</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "querySelector vindt?",
            "en": "querySelector finds?"
          },
          "choices": {
            "nl": [
              "alle matches",
              "eerste match",
              "SQL",
              "cookies"
            ],
            "en": [
              "all matches",
              "first match",
              "SQL",
              "cookies"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Eerste.",
            "en": "First."
          }
        },
        {
          "q": {
            "nl": "textContent zet?",
            "en": "textContent sets?"
          },
          "choices": {
            "nl": [
              "HTML parse",
              "platte tekst",
              "CSS only",
              "URL"
            ],
            "en": [
              "HTML parse",
              "plain text",
              "CSS only",
              "URL"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Tekst.",
            "en": "Text."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Mini project: click counter",
        "en": "Mini project: click counter"
      },
      "body": {
        "nl": "<pre>let n = 0;\nbutton.addEventListener(\"click\", () =&gt; {\n  n++;\n  out.textContent = String(n);\n});</pre><p>Events + state: de kern van web UI.</p>",
        "en": "<pre>let n = 0;\nbutton.addEventListener(\"click\", () =&gt; {\n  n++;\n  out.textContent = String(n);\n});</pre><p>Events + state: core web UI.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "addEventListener luistert naar?",
            "en": "addEventListener listens for?"
          },
          "choices": {
            "nl": [
              "CSS",
              "events zoals click",
              "SQL",
              "pip"
            ],
            "en": [
              "CSS",
              "events like click",
              "SQL",
              "pip"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Events.",
            "en": "Events."
          }
        },
        {
          "q": {
            "nl": "n++ doet?",
            "en": "n++ does?"
          },
          "choices": {
            "nl": [
              "niets",
              "verhoogt n",
              "reset",
              "shuffle"
            ],
            "en": [
              "nothing",
              "increments n",
              "reset",
              "shuffle"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "+1.",
            "en": "+1."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ]
    },
    {
      "id": 10,
      "title": {
        "nl": "Canvas playground",
        "en": "Canvas playground"
      },
      "body": {
        "nl": "<p>Met <code class=\"inline\">canvas</code> teken je pixels. Open ook de aparte <a href=\"playground.html\">playground</a>.</p><pre>const c = document.createElement('canvas');\n// in de echte pagina pak je getContext('2d')</pre><p>Hieronder: schrijf JS dat <code class=\"inline\">OK</code> logt als warm-up (canvas live zit in playground.html).</p>",
        "en": "<p>With <code class=\"inline\">canvas</code> you draw pixels. Also open the separate <a href=\"playground.html\">playground</a>.</p><pre>const c = document.createElement('canvas');\n// on a real page you call getContext('2d')</pre><p>Below: write JS that logs <code class=\"inline\">OK</code> as a warm-up (live canvas is on playground.html).</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "getContext('2d')?",
            "en": "getContext('2d')?"
          },
          "choices": {
            "nl": [
              "SQL",
              "2D teken-API",
              "Lua",
              "C malloc"
            ],
            "en": [
              "SQL",
              "2D drawing API",
              "Lua",
              "C malloc"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Canvas 2D.",
            "en": "Canvas 2D."
          }
        },
        {
          "q": {
            "nl": "fillRect?",
            "en": "fillRect?"
          },
          "choices": {
            "nl": [
              "audio",
              "rechthoek vullen",
              "cert",
              "pip"
            ],
            "en": [
              "audio",
              "fill rectangle",
              "cert",
              "pip"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Draw rect.",
            "en": "Draw rect."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "console.log(2+3)?",
            "en": "console.log(2+3)?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "undefined",
              "NaN"
            ],
            "en": [
              "23",
              "5",
              "undefined",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "5.",
            "en": "5."
          },
          "code": "console.log(2+3)"
        },
        {
          "type": "mc",
          "q": {
            "nl": "=== vs ==?",
            "en": "=== vs ==?"
          },
          "choices": {
            "nl": [
              "zelfde",
              "=== is streng",
              "== verboden",
              "alleen strings"
            ],
            "en": [
              "same",
              "=== is strict",
              "== forbidden",
              "strings only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Strict.",
            "en": "Strict."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Keyword constante?",
            "en": "Constant keyword?"
          },
          "fill": [
            "const"
          ],
          "why": {
            "nl": "const.",
            "en": "const."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "typeof null?",
            "en": "typeof null?"
          },
          "choices": {
            "nl": [
              "null",
              "object",
              "undefined",
              "number"
            ],
            "en": [
              "null",
              "object",
              "undefined",
              "number"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Quirk.",
            "en": "Quirk."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot bug: const x; x=1",
            "en": "Spot bug: const x; x=1"
          },
          "choices": {
            "nl": [
              "ok",
              "const regels breken dit",
              "1 fout",
              "semicolon"
            ],
            "en": [
              "ok",
              "const rules break this",
              "1 wrong",
              "semicolon"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "const rules.",
            "en": "const rules."
          },
          "code": "const x;\nx = 1;"
        },
        {
          "type": "print",
          "q": {
            "nl": "Array.isArray([])?",
            "en": "Array.isArray([])?"
          },
          "choices": {
            "nl": [
              "false",
              "true",
              "null",
              "error"
            ],
            "en": [
              "false",
              "true",
              "null",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "true.",
            "en": "true."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Strict equality operator?",
            "en": "Strict equality operator?"
          },
          "fill": [
            "==="
          ],
          "why": {
            "nl": "===.",
            "en": "===."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "let scope?",
            "en": "let scope?"
          },
          "choices": {
            "nl": [
              "function only always",
              "block scope",
              "geen scope",
              "global only"
            ],
            "en": [
              "function only always",
              "block scope",
              "no scope",
              "global only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Block.",
            "en": "Block."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "'5'+1?",
            "en": "'5'+1?"
          },
          "choices": {
            "nl": [
              "6",
              "51",
              "error",
              "NaN"
            ],
            "en": [
              "6",
              "51",
              "error",
              "NaN"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Concat.",
            "en": "Concat."
          }
        },
        {
          "type": "print",
          "q": {
            "nl": "NaN===NaN?",
            "en": "NaN===NaN?"
          },
          "choices": {
            "nl": [
              "true",
              "false",
              "1",
              "error"
            ],
            "en": [
              "true",
              "false",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "false.",
            "en": "false."
          }
        }
      ],
      "exercise": {
        "lang": "javascript",
        "instructions": {
          "nl": "Log OK naar de console.",
          "en": "Log OK to the console."
        },
        "starter": "console.log(\"OK\");\n",
        "tests": [
          {
            "type": "equals",
            "value": "OK"
          }
        ]
      }
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "typeof null",
        "en": "typeof null"
      },
      "choices": {
        "nl": [
          "null",
          "object",
          "undefined",
          "number"
        ],
        "en": [
          "null",
          "object",
          "undefined",
          "number"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Historische quirk.",
        "en": "Historical quirk."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "const arr push",
        "en": "const arr push"
      },
      "choices": {
        "nl": [
          "verboden",
          "mag muteren inhoud",
          "wordt let",
          "error altijd"
        ],
        "en": [
          "forbidden",
          "may mutate contents",
          "becomes let",
          "always error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Binding vast, inhoud niet.",
        "en": "Binding fixed, contents not."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "'5'===5",
        "en": "'5'===5"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "NaN",
          "error"
        ],
        "en": [
          "true",
          "false",
          "NaN",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Strict.",
        "en": "Strict."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "'5'==5",
        "en": "'5'==5"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "error",
          "undefined"
        ],
        "en": [
          "true",
          "false",
          "error",
          "undefined"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Coercion.",
        "en": "Coercion."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "Array.isArray([])",
        "en": "Array.isArray([])"
      },
      "choices": {
        "nl": [
          "false",
          "true",
          "null",
          "error"
        ],
        "en": [
          "false",
          "true",
          "null",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "true.",
        "en": "true."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "undefined vs null",
        "en": "undefined vs null"
      },
      "choices": {
        "nl": [
          "zelfde altijd",
          "verschillend (meestal)",
          "beide numbers",
          "deprecated"
        ],
        "en": [
          "always same",
          "different (usually)",
          "both numbers",
          "deprecated"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Verschillend.",
        "en": "Different."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "template `Hi ${n}`",
        "en": "template `Hi ${n}`"
      },
      "choices": {
        "nl": [
          "string interp",
          "alleen Python",
          "SQL",
          "comment"
        ],
        "en": [
          "string interp",
          "Python only",
          "SQL",
          "comment"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Template literal.",
        "en": "Template literal."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "NaN === NaN",
        "en": "NaN === NaN"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "1",
          "error"
        ],
        "en": [
          "true",
          "false",
          "1",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Gebruik Number.isNaN.",
        "en": "Use Number.isNaN."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "spread [...a,...b]",
        "en": "spread [...a,...b]"
      },
      "choices": {
        "nl": [
          "concat-achtig",
          "SQL join",
          "CSS",
          "error"
        ],
        "en": [
          "concat-like",
          "SQL join",
          "CSS",
          "error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Spread.",
        "en": "Spread."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "promise then",
        "en": "promise then"
      },
      "choices": {
        "nl": [
          "sync only",
          "async result ketting",
          "CSS",
          "python def"
        ],
        "en": [
          "sync only",
          "async result chain",
          "CSS",
          "python def"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Async.",
        "en": "Async."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "let block scope",
        "en": "let block scope"
      },
      "choices": {
        "nl": [
          "function only",
          "block {}",
          "global always",
          "geen scope"
        ],
        "en": [
          "function only",
          "block {}",
          "always global",
          "no scope"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Block.",
        "en": "Block."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "document.getElementById",
        "en": "document.getElementById"
      },
      "choices": {
        "nl": [
          "Node only",
          "DOM helper",
          "SQL",
          "Rust"
        ],
        "en": [
          "Node only",
          "DOM helper",
          "SQL",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "DOM.",
        "en": "DOM."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "JSON.stringify",
        "en": "JSON.stringify"
      },
      "choices": {
        "nl": [
          "parse",
          "object naar string",
          "compile",
          "hash"
        ],
        "en": [
          "parse",
          "object to string",
          "compile",
          "hash"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Serialize.",
        "en": "Serialize."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "|| default",
        "en": "|| default"
      },
      "choices": {
        "nl": [
          "bitwise only",
          "fallback als links falsy",
          "SQL OR tabel",
          "error"
        ],
        "en": [
          "bitwise only",
          "fallback if left falsy",
          "SQL OR table",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Fallback.",
        "en": "Fallback."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "?. optional",
        "en": "?. optional"
      },
      "choices": {
        "nl": [
          "verplicht",
          "safe access",
          "python",
          "lua"
        ],
        "en": [
          "required",
          "safe access",
          "python",
          "lua"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Optional chaining.",
        "en": "Optional chaining."
      }
    },
    {
      "id": 16,
      "q": {
        "nl": "map callback",
        "en": "map callback"
      },
      "choices": {
        "nl": [
          "muteert altijd",
          "nieuwe array",
          "verwijdert keys",
          "SQL"
        ],
        "en": [
          "always mutates",
          "new array",
          "deletes keys",
          "SQL"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "New array.",
        "en": "New array."
      }
    },
    {
      "id": 17,
      "q": {
        "nl": "strict mode",
        "en": "strict mode"
      },
      "choices": {
        "nl": [
          "'use strict'",
          "SQL mode",
          "CSS",
          "off altijd"
        ],
        "en": [
          "'use strict'",
          "SQL mode",
          "CSS",
          "always off"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Directive.",
        "en": "Directive."
      }
    },
    {
      "id": 18,
      "q": {
        "nl": "event.preventDefault",
        "en": "event.preventDefault"
      },
      "choices": {
        "nl": [
          "stopt default actie",
          "verwijdert DOM",
          "compileert",
          "shuffle"
        ],
        "en": [
          "stops default action",
          "removes DOM",
          "compiles",
          "shuffle"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Prevent.",
        "en": "Prevent."
      }
    },
    {
      "id": 19,
      "q": {
        "nl": "module export",
        "en": "module export"
      },
      "choices": {
        "nl": [
          "export / import",
          "pip",
          "using",
          "include h"
        ],
        "en": [
          "export / import",
          "pip",
          "using",
          "include h"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "ES modules.",
        "en": "ES modules."
      }
    },
    {
      "id": 20,
      "q": {
        "nl": "CodeCrib JS exam",
        "en": "CodeCrib JS exam"
      },
      "choices": {
        "nl": [
          "officieel MDN test",
          "origineel oefenen",
          "betaald",
          "leaked"
        ],
        "en": [
          "official MDN test",
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
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 1] console.log(2+3)?",
        "en": "[Pool 1] console.log(2+3)?"
      },
      "choices": {
        "nl": [
          "23",
          "5",
          "undefined",
          "NaN"
        ],
        "en": [
          "23",
          "5",
          "undefined",
          "NaN"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "5.",
        "en": "5."
      },
      "code": "console.log(2+3)",
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 2] === vs ==?",
        "en": "[Pool 2] === vs ==?"
      },
      "choices": {
        "nl": [
          "zelfde",
          "=== is streng",
          "== verboden",
          "alleen strings"
        ],
        "en": [
          "same",
          "=== is strict",
          "== forbidden",
          "strings only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Strict.",
        "en": "Strict."
      },
      "id": 22
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 3] Keyword constante?",
        "en": "[Pool 3] Constant keyword?"
      },
      "fill": [
        "const"
      ],
      "why": {
        "nl": "const.",
        "en": "const."
      },
      "id": 23
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 4] typeof null?",
        "en": "[Pool 4] typeof null?"
      },
      "choices": {
        "nl": [
          "null",
          "object",
          "undefined",
          "number"
        ],
        "en": [
          "null",
          "object",
          "undefined",
          "number"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Quirk.",
        "en": "Quirk."
      },
      "id": 24
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 5] Spot bug: const x; x=1",
        "en": "[Pool 5] Spot bug: const x; x=1"
      },
      "choices": {
        "nl": [
          "ok",
          "const regels breken dit",
          "1 fout",
          "semicolon"
        ],
        "en": [
          "ok",
          "const rules break this",
          "1 wrong",
          "semicolon"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "const rules.",
        "en": "const rules."
      },
      "code": "const x;\nx = 1;",
      "id": 25
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 6] Array.isArray([])?",
        "en": "[Pool 6] Array.isArray([])?"
      },
      "choices": {
        "nl": [
          "false",
          "true",
          "null",
          "error"
        ],
        "en": [
          "false",
          "true",
          "null",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "true.",
        "en": "true."
      },
      "id": 26
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 7] Strict equality operator?",
        "en": "[Pool 7] Strict equality operator?"
      },
      "fill": [
        "==="
      ],
      "why": {
        "nl": "===.",
        "en": "===."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 8] let scope?",
        "en": "[Pool 8] let scope?"
      },
      "choices": {
        "nl": [
          "function only always",
          "block scope",
          "geen scope",
          "global only"
        ],
        "en": [
          "function only always",
          "block scope",
          "no scope",
          "global only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Block.",
        "en": "Block."
      },
      "id": 28
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 9] '5'+1?",
        "en": "[Pool 9] '5'+1?"
      },
      "choices": {
        "nl": [
          "6",
          "51",
          "error",
          "NaN"
        ],
        "en": [
          "6",
          "51",
          "error",
          "NaN"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Concat.",
        "en": "Concat."
      },
      "id": 29
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 10] NaN===NaN?",
        "en": "[Pool 10] NaN===NaN?"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "1",
          "error"
        ],
        "en": [
          "true",
          "false",
          "1",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "false.",
        "en": "false."
      },
      "id": 30
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] arrow fn symbol?",
        "en": "[Pool 11] arrow fn symbol?"
      },
      "choices": {
        "nl": [
          "->",
          "=>",
          "fn",
          "def"
        ],
        "en": [
          "->",
          "=>",
          "fn",
          "def"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "=>.",
        "en": "=>."
      },
      "id": 31
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 12] DOM query eerste match?",
        "en": "[Pool 12] DOM query first match?"
      },
      "fill": [
        "querySelector"
      ],
      "why": {
        "nl": "querySelector.",
        "en": "querySelector."
      },
      "id": 32
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] const arr.push ok?",
        "en": "[Pool 13] const arr.push ok?"
      },
      "choices": {
        "nl": [
          "verboden altijd",
          "inhoud mag muteren",
          "wordt let",
          "error always"
        ],
        "en": [
          "always forbidden",
          "contents may mutate",
          "becomes let",
          "always error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Binding fixed.",
        "en": "Binding fixed."
      },
      "id": 33
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 14] template literal?",
        "en": "[Pool 14] template literal?"
      },
      "choices": {
        "nl": [
          "'Hi ${n}'",
          "`Hi ${n}`",
          "f'Hi'",
          "$\"Hi\""
        ],
        "en": [
          "'Hi ${n}'",
          "`Hi ${n}`",
          "f'Hi'",
          "$\"Hi\""
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Backticks.",
        "en": "Backticks."
      },
      "id": 34
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 15] console.log(2+3)?",
        "en": "[Pool 15] console.log(2+3)?"
      },
      "choices": {
        "nl": [
          "23",
          "5",
          "undefined",
          "NaN"
        ],
        "en": [
          "23",
          "5",
          "undefined",
          "NaN"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "5.",
        "en": "5."
      },
      "code": "console.log(2+3)",
      "id": 35
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 16] === vs ==?",
        "en": "[Pool 16] === vs ==?"
      },
      "choices": {
        "nl": [
          "zelfde",
          "=== is streng",
          "== verboden",
          "alleen strings"
        ],
        "en": [
          "same",
          "=== is strict",
          "== forbidden",
          "strings only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Strict.",
        "en": "Strict."
      },
      "id": 36
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 17] Keyword constante?",
        "en": "[Pool 17] Constant keyword?"
      },
      "fill": [
        "const"
      ],
      "why": {
        "nl": "const.",
        "en": "const."
      },
      "id": 37
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 18] typeof null?",
        "en": "[Pool 18] typeof null?"
      },
      "choices": {
        "nl": [
          "null",
          "object",
          "undefined",
          "number"
        ],
        "en": [
          "null",
          "object",
          "undefined",
          "number"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Quirk.",
        "en": "Quirk."
      },
      "id": 38
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 19] Spot bug: const x; x=1",
        "en": "[Pool 19] Spot bug: const x; x=1"
      },
      "choices": {
        "nl": [
          "ok",
          "const regels breken dit",
          "1 fout",
          "semicolon"
        ],
        "en": [
          "ok",
          "const rules break this",
          "1 wrong",
          "semicolon"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "const rules.",
        "en": "const rules."
      },
      "code": "const x;\nx = 1;",
      "id": 39
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 20] Array.isArray([])?",
        "en": "[Pool 20] Array.isArray([])?"
      },
      "choices": {
        "nl": [
          "false",
          "true",
          "null",
          "error"
        ],
        "en": [
          "false",
          "true",
          "null",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "true.",
        "en": "true."
      },
      "id": 40
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 21] Strict equality operator?",
        "en": "[Pool 21] Strict equality operator?"
      },
      "fill": [
        "==="
      ],
      "why": {
        "nl": "===.",
        "en": "===."
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 22] let scope?",
        "en": "[Pool 22] let scope?"
      },
      "choices": {
        "nl": [
          "function only always",
          "block scope",
          "geen scope",
          "global only"
        ],
        "en": [
          "function only always",
          "block scope",
          "no scope",
          "global only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Block.",
        "en": "Block."
      },
      "id": 42
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 23] '5'+1?",
        "en": "[Pool 23] '5'+1?"
      },
      "choices": {
        "nl": [
          "6",
          "51",
          "error",
          "NaN"
        ],
        "en": [
          "6",
          "51",
          "error",
          "NaN"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Concat.",
        "en": "Concat."
      },
      "id": 43
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 24] NaN===NaN?",
        "en": "[Pool 24] NaN===NaN?"
      },
      "choices": {
        "nl": [
          "true",
          "false",
          "1",
          "error"
        ],
        "en": [
          "true",
          "false",
          "1",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "false.",
        "en": "false."
      },
      "id": 44
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] arrow fn symbol?",
        "en": "[Pool 25] arrow fn symbol?"
      },
      "choices": {
        "nl": [
          "->",
          "=>",
          "fn",
          "def"
        ],
        "en": [
          "->",
          "=>",
          "fn",
          "def"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "=>.",
        "en": "=>."
      },
      "id": 45
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 26] DOM query eerste match?",
        "en": "[Pool 26] DOM query first match?"
      },
      "fill": [
        "querySelector"
      ],
      "why": {
        "nl": "querySelector.",
        "en": "querySelector."
      },
      "id": 46
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 27] const arr.push ok?",
        "en": "[Pool 27] const arr.push ok?"
      },
      "choices": {
        "nl": [
          "verboden altijd",
          "inhoud mag muteren",
          "wordt let",
          "error always"
        ],
        "en": [
          "always forbidden",
          "contents may mutate",
          "becomes let",
          "always error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Binding fixed.",
        "en": "Binding fixed."
      },
      "id": 47
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 28] template literal?",
        "en": "[Pool 28] template literal?"
      },
      "choices": {
        "nl": [
          "'Hi ${n}'",
          "`Hi ${n}`",
          "f'Hi'",
          "$\"Hi\""
        ],
        "en": [
          "'Hi ${n}'",
          "`Hi ${n}`",
          "f'Hi'",
          "$\"Hi\""
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Backticks.",
        "en": "Backticks."
      },
      "id": 48
    },
    {
      "type": "print",
      "q": {
        "nl": "[Pool 29] console.log(2+3)?",
        "en": "[Pool 29] console.log(2+3)?"
      },
      "choices": {
        "nl": [
          "23",
          "5",
          "undefined",
          "NaN"
        ],
        "en": [
          "23",
          "5",
          "undefined",
          "NaN"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "5.",
        "en": "5."
      },
      "code": "console.log(2+3)",
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 30] === vs ==?",
        "en": "[Pool 30] === vs ==?"
      },
      "choices": {
        "nl": [
          "zelfde",
          "=== is streng",
          "== verboden",
          "alleen strings"
        ],
        "en": [
          "same",
          "=== is strict",
          "== forbidden",
          "strings only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Strict.",
        "en": "Strict."
      },
      "id": 50
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
        "nl": "Schrijf code die 2+3 print via console.log (uitkomst 5).",
        "en": "Write code that prints 2+3 via console.log (result 5)."
      },
      "lang": "javascript",
      "starter": "console.log(2 + 3);\n",
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
        "nl": "Hallo naam",
        "en": "Hello name"
      },
      "prompt": {
        "nl": "Maak const name='Justy' en log Hello Justy.",
        "en": "Make const name='Justy' and log Hello Justy."
      },
      "lang": "javascript",
      "starter": "const name = \"Justy\";\nconsole.log(\"Hello \" + name);\n",
      "tests": [
        {
          "type": "equals",
          "value": "Hello Justy"
        }
      ],
      "starterHint": true
    }
  ],
  "examDraw": 25
};
})(window);
