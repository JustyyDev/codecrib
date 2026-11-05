(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.htmlcss = {
  "id": "htmlcss",
  "title": {
    "nl": "HTML & CSS",
    "en": "HTML & CSS"
  },
  "intro": {
    "nl": "Bouw pagina's met live preview. Structuur + styling.",
    "en": "Build pages with live preview. Structure + styling."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "HTML skelet",
        "en": "HTML skeleton"
      },
      "body": {
        "nl": "<p>HTML beschrijft structuur. Een minimale pagina:</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;&lt;title&gt;CodeCrib&lt;/title&gt;&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Hallo&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>",
        "en": "<p>HTML describes structure. A minimal page:</p><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;&lt;title&gt;CodeCrib&lt;/title&gt;&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Hello&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS kleur",
              "koptekst",
              "SQL",
              "Lua"
            ],
            "en": [
              "CSS color",
              "heading",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "q": {
            "nl": "body bevat?",
            "en": "body holds?"
          },
          "choices": {
            "nl": [
              "alleen CSS",
              "zichtbare inhoud",
              "DNS",
              "CPU"
            ],
            "en": [
              "CSS only",
              "visible content",
              "DNS",
              "CPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Content.",
            "en": "Content."
          }
        }
      ],
      "exercise": {
        "lang": "htmlcss",
        "preview": true,
        "instructions": {
          "nl": "Maak een pagina met een h1 die CodeCrib zegt.",
          "en": "Make a page with an h1 that says CodeCrib."
        },
        "starter": "<!DOCTYPE html>\n<html>\n<head><title>Demo</title></head>\n<body>\n  \n</body>\n</html>",
        "tests": [
          {
            "type": "code_contains",
            "value": "<h1>"
          },
          {
            "type": "code_contains",
            "value": "CodeCrib"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": {
        "nl": "Tekst en links",
        "en": "Text and links"
      },
      "body": {
        "nl": "<p>Gebruik <code class=\"inline\">&lt;p&gt;</code>, <code class=\"inline\">&lt;a href&gt;</code>, <code class=\"inline\">&lt;strong&gt;</code>.</p>",
        "en": "<p>Use <code class=\"inline\">&lt;p&gt;</code>, <code class=\"inline\">&lt;a href&gt;</code>, <code class=\"inline\">&lt;strong&gt;</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "a href?",
            "en": "a href?"
          },
          "choices": {
            "nl": [
              "afbeelding",
              "link",
              "tabel",
              "script verplicht"
            ],
            "en": [
              "image",
              "link",
              "table",
              "script required"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Link.",
            "en": "Link."
          }
        },
        {
          "q": {
            "nl": "p is?",
            "en": "p is?"
          },
          "choices": {
            "nl": [
              "padding only",
              "paragraaf",
              "python",
              "pointer"
            ],
            "en": [
              "padding only",
              "paragraph",
              "python",
              "pointer"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Paragraph.",
            "en": "Paragraph."
          }
        }
      ],
      "exercise": {
        "lang": "htmlcss",
        "preview": true,
        "instructions": {
          "nl": "Zet een link naar https://example.com met tekst Open.",
          "en": "Add a link to https://example.com with text Open."
        },
        "starter": "<!DOCTYPE html><html><body>\n<p>Hello</p>\n\n</body></html>",
        "tests": [
          {
            "type": "code_contains",
            "value": "href="
          },
          {
            "type": "code_contains",
            "value": "example.com"
          }
        ]
      }
    },
    {
      "id": 3,
      "title": {
        "nl": "Lijsten en images",
        "en": "Lists and images"
      },
      "body": {
        "nl": "<p><code class=\"inline\">&lt;ul&gt;</code>/<code class=\"inline\">&lt;ol&gt;</code> en <code class=\"inline\">&lt;img src alt&gt;</code>.</p>",
        "en": "<p><code class=\"inline\">&lt;ul&gt;</code>/<code class=\"inline\">&lt;ol&gt;</code> and <code class=\"inline\">&lt;img src alt&gt;</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "ul betekent?",
            "en": "ul means?"
          },
          "choices": {
            "nl": [
              "unique link",
              "ongeordende lijst",
              "SQL update",
              "Lua"
            ],
            "en": [
              "unique link",
              "unordered list",
              "SQL update",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Unordered.",
            "en": "Unordered."
          }
        },
        {
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "decoratie only",
              "toegankelijke tekst",
              "CSS color",
              "verboden"
            ],
            "en": [
              "decoration only",
              "accessible text",
              "CSS color",
              "forbidden"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Alt text.",
            "en": "Alt text."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": {
        "nl": "CSS basics",
        "en": "CSS basics"
      },
      "body": {
        "nl": "<p>CSS stijlt. Inline of in <code class=\"inline\">&lt;style&gt;</code>.</p><pre>h1 { color: hotpink; }</pre>",
        "en": "<p>CSS styles. Inline or in <code class=\"inline\">&lt;style&gt;</code>.</p><pre>h1 { color: hotpink; }</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "color property?",
            "en": "color property?"
          },
          "choices": {
            "nl": [
              "SQL",
              "tekstkleur",
              "Lua print",
              "CPU"
            ],
            "en": [
              "SQL",
              "text color",
              "Lua print",
              "CPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "q": {
            "nl": "style tag?",
            "en": "style tag?"
          },
          "choices": {
            "nl": [
              "alleen JS",
              "CSS in HTML",
              "Python",
              "C header"
            ],
            "en": [
              "JS only",
              "CSS in HTML",
              "Python",
              "C header"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Embedded CSS.",
            "en": "Embedded CSS."
          }
        }
      ],
      "exercise": {
        "lang": "htmlcss",
        "preview": true,
        "instructions": {
          "nl": "Maak h1 hotpink via een style-blok.",
          "en": "Make h1 hotpink via a style block."
        },
        "starter": "<!DOCTYPE html><html><head>\n<style>\n\n</style>\n</head><body><h1>CodeCrib</h1></body></html>",
        "tests": [
          {
            "type": "code_contains",
            "value": "color"
          },
          {
            "type": "code_contains",
            "value": "hotpink"
          }
        ]
      }
    },
    {
      "id": 5,
      "title": {
        "nl": "Box model",
        "en": "Box model"
      },
      "body": {
        "nl": "<p>Margin, border, padding, width. Boxes overal.</p>",
        "en": "<p>Margin, border, padding, width. Boxes everywhere.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "padding is?",
            "en": "padding is?"
          },
          "choices": {
            "nl": [
              "buiten border",
              "binnenruimte",
              "SQL",
              "GPU"
            ],
            "en": [
              "outside border",
              "inner space",
              "SQL",
              "GPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "q": {
            "nl": "margin is?",
            "en": "margin is?"
          },
          "choices": {
            "nl": [
              "font",
              "buitenafstand",
              "alt text",
              "nil"
            ],
            "en": [
              "font",
              "outer gap",
              "alt text",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Margin.",
            "en": "Margin."
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Flex layout",
        "en": "Flex layout"
      },
      "body": {
        "nl": "<p><code class=\"inline\">display:flex</code> zet items op een rij/kolom.</p>",
        "en": "<p><code class=\"inline\">display:flex</code> lays items in a row/column.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "grid only",
              "flexbox layout",
              "SQL",
              "Lua"
            ],
            "en": [
              "grid only",
              "flexbox layout",
              "SQL",
              "Lua"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "q": {
            "nl": "justify-content?",
            "en": "justify-content?"
          },
          "choices": {
            "nl": [
              "font weight",
              "hoofdas uitlijnen",
              "alt",
              "nil"
            ],
            "en": [
              "font weight",
              "main-axis align",
              "alt",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Justify.",
            "en": "Justify."
          }
        }
      ],
      "exercise": {
        "lang": "htmlcss",
        "preview": true,
        "instructions": {
          "nl": "Maak .row display:flex.",
          "en": "Make .row display:flex."
        },
        "starter": "<!DOCTYPE html><html><head><style>\n.row { }\n.box { width:40px;height:40px;background:#c2185b;margin:4px; }\n</style></head><body><div class=\"row\"><div class=\"box\"></div><div class=\"box\"></div></div></body></html>",
        "tests": [
          {
            "type": "code_contains",
            "value": "display"
          },
          {
            "type": "code_contains",
            "value": "flex"
          }
        ]
      }
    },
    {
      "id": 7,
      "title": {
        "nl": "Responsive tip",
        "en": "Responsive tip"
      },
      "body": {
        "nl": "<p>Media queries: <code class=\"inline\">@media (max-width: 600px)</code>.</p>",
        "en": "<p>Media queries: <code class=\"inline\">@media (max-width: 600px)</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "responsive regel",
              "Lua",
              "C macro only"
            ],
            "en": [
              "SQL",
              "responsive rule",
              "Lua",
              "C macro only"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Media.",
            "en": "Media."
          }
        },
        {
          "q": {
            "nl": "viewport meta?",
            "en": "viewport meta?"
          },
          "choices": {
            "nl": [
              "nutteloos",
              "helpt mobiel schalen",
              "GPU",
              "cert"
            ],
            "en": [
              "useless",
              "helps mobile scale",
              "GPU",
              "cert"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Viewport.",
            "en": "Viewport."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini project: card",
        "en": "Mini project: card"
      },
      "body": {
        "nl": "<p>Bouw een kaart met titel, tekst en knop-styling.</p>",
        "en": "<p>Build a card with title, text and button styling.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "class attribuut?",
            "en": "class attribute?"
          },
          "choices": {
            "nl": [
              "SQL key",
              "CSS haakje",
              "Lua local",
              "Rust mut"
            ],
            "en": [
              "SQL key",
              "CSS hook",
              "Lua local",
              "Rust mut"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Class.",
            "en": "Class."
          }
        },
        {
          "q": {
            "nl": "button element?",
            "en": "button element?"
          },
          "choices": {
            "nl": [
              "alleen JS",
              "klikbaar element",
              "C pointer",
              "nil"
            ],
            "en": [
              "JS only",
              "clickable element",
              "C pointer",
              "nil"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Button.",
            "en": "Button."
          }
        }
      ],
      "exercise": {
        "lang": "htmlcss",
        "preview": true,
        "instructions": {
          "nl": "Gebruik class card en een button.",
          "en": "Use class card and a button."
        },
        "starter": "<!DOCTYPE html><html><head><style>\n.card{padding:1rem;border:2px solid #c2185b;border-radius:12px;font-family:sans-serif}\nbutton{background:#c2185b;color:#fff;border:0;padding:.5rem 1rem;border-radius:8px}\n</style></head><body>\n\n</body></html>",
        "tests": [
          {
            "type": "code_contains",
            "value": "card"
          },
          {
            "type": "code_contains",
            "value": "<button"
          }
        ]
      }
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "DOCTYPE?",
        "en": "DOCTYPE?"
      },
      "choices": {
        "nl": [
          "CSS",
          "document type hint",
          "Lua",
          "Rust"
        ],
        "en": [
          "CSS",
          "document type hint",
          "Lua",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Doctype.",
        "en": "Doctype."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "CSS selector h1",
        "en": "CSS selector h1"
      },
      "choices": {
        "nl": [
          "SQL",
          "kiest h1 elementen",
          "GPU",
          "cert"
        ],
        "en": [
          "SQL",
          "selects h1 elements",
          "GPU",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Selector.",
        "en": "Selector."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "#id vs .class",
        "en": "#id vs .class"
      },
      "choices": {
        "nl": [
          "zelfde",
          "id vs class selector",
          "Lua",
          "C"
        ],
        "en": [
          "same",
          "id vs class selector",
          "Lua",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Different.",
        "en": "Different."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "span vs div",
        "en": "span vs div"
      },
      "choices": {
        "nl": [
          "zelfde always",
          "inline vs block (typisch)",
          "SQL",
          "cert"
        ],
        "en": [
          "always same",
          "inline vs block (typical)",
          "SQL",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Display.",
        "en": "Display."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "em vs strong",
        "en": "em vs strong"
      },
      "choices": {
        "nl": [
          "kleur",
          "nadruk/semantic",
          "GPU",
          "nil"
        ],
        "en": [
          "color",
          "emphasis/semantic",
          "GPU",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Semantics.",
        "en": "Semantics."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "hex color #fff",
        "en": "hex color #fff"
      },
      "choices": {
        "nl": [
          "zwart",
          "wit",
          "rood",
          "blauw"
        ],
        "en": [
          "black",
          "white",
          "red",
          "blue"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "White.",
        "en": "White."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "border-radius",
        "en": "border-radius"
      },
      "choices": {
        "nl": [
          "SQL",
          "afgeronde hoeken",
          "Lua end",
          "C"
        ],
        "en": [
          "SQL",
          "rounded corners",
          "Lua end",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Radius.",
        "en": "Radius."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "position:absolute",
        "en": "position:absolute"
      },
      "choices": {
        "nl": [
          "flow normal",
          "uit normal flow",
          "SQL",
          "cert"
        ],
        "en": [
          "normal flow",
          "out of normal flow",
          "SQL",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Absolute.",
        "en": "Absolute."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "z-index",
        "en": "z-index"
      },
      "choices": {
        "nl": [
          "SQL index",
          "stapelvolgorde",
          "Lua",
          "GPU only"
        ],
        "en": [
          "SQL index",
          "stack order",
          "Lua",
          "GPU only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Stack.",
        "en": "Stack."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "rem unit",
        "en": "rem unit"
      },
      "choices": {
        "nl": [
          "px only",
          "root font-relative",
          "SQL",
          "C"
        ],
        "en": [
          "px only",
          "root font-relative",
          "SQL",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "rem.",
        "en": "rem."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "opacity",
        "en": "opacity"
      },
      "choices": {
        "nl": [
          "display none",
          "transparantie",
          "Lua",
          "cert"
        ],
        "en": [
          "display none",
          "transparency",
          "Lua",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Opacity.",
        "en": "Opacity."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "hover pseudo",
        "en": "hover pseudo"
      },
      "choices": {
        "nl": [
          "::before only",
          ":hover",
          "SQL",
          "C"
        ],
        "en": [
          "::before only",
          ":hover",
          "SQL",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": ":hover.",
        "en": ":hover."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "semantic header",
        "en": "semantic header"
      },
      "choices": {
        "nl": [
          "geen betekenis",
          "page/section header",
          "Lua",
          "Rust"
        ],
        "en": [
          "no meaning",
          "page/section header",
          "Lua",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Semantic.",
        "en": "Semantic."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "alt empty ok?",
        "en": "alt empty ok?"
      },
      "choices": {
        "nl": [
          "voor decoratief soms",
          "nooit ooit",
          "SQL",
          "C"
        ],
        "en": [
          "sometimes decorative",
          "never ever",
          "SQL",
          "C"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Decorative.",
        "en": "Decorative."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib HTML",
        "en": "CodeCrib HTML"
      },
      "choices": {
        "nl": [
          "W3C leak",
          "origineel oefenen",
          "betaald",
          "cert leak"
        ],
        "en": [
          "W3C leak",
          "original practice",
          "paid",
          "cert leak"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Original.",
        "en": "Original."
      }
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Profielkaart",
        "en": "Profile card"
      },
      "prompt": {
        "nl": "Maak HTML+CSS met een .card, een h2 met jouw naam-placeholder Justy, en een roze knop.",
        "en": "Build HTML+CSS with a .card, an h2 Justy placeholder, and a pink button."
      },
      "lang": "htmlcss",
      "preview": true,
      "starter": "<!DOCTYPE html><html><head><style>\n</style></head><body>\n</body></html>",
      "tests": [
        {
          "type": "code_contains",
          "value": "card"
        },
        {
          "type": "code_contains",
          "value": "<h2>"
        },
        {
          "type": "code_contains",
          "value": "Justy"
        },
        {
          "type": "code_contains",
          "value": "<button>"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "Flex rij",
        "en": "Flex row"
      },
      "prompt": {
        "nl": "Drie .box elementen in een .row met display:flex.",
        "en": "Three .box elements in a .row with display:flex."
      },
      "lang": "htmlcss",
      "preview": true,
      "starter": "<!DOCTYPE html><html><head><style>\n.box{width:36px;height:36px;background:#ffd84a;margin:4px}\n</style></head><body>\n</body></html>",
      "tests": [
        {
          "type": "code_contains",
          "value": "display:flex"
        },
        {
          "type": "code_contains",
          "value": "class=\"row\""
        },
        {
          "type": "code_contains",
          "value": "class=\"box\""
        }
      ]
    }
  ]
};
})(window);
