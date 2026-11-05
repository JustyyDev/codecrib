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
              "SQL",
              "koptekst",
              "Lua"
            ],
            "en": [
              "CSS color",
              "SQL",
              "heading",
              "Lua"
            ]
          },
          "answer": 2,
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
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "tekstkleur",
              "GPU",
              "cert"
            ],
            "en": [
              "SQL",
              "text color",
              "GPU",
              "cert"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "grid only",
              "SQL",
              "flexbox",
              "C"
            ],
            "en": [
              "grid only",
              "SQL",
              "flexbox",
              "C"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "im->img",
              "src always wrong",
              "slash"
            ],
            "en": [
              "ok",
              "im->img",
              "src always wrong",
              "slash"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "font",
              "binnenruimte",
              "alt"
            ],
            "en": [
              "outside",
              "font",
              "inner space",
              "alt"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "toegankelijke tekst",
              "CSS",
              "verboden"
            ],
            "en": [
              "always empty",
              "accessible text",
              "CSS",
              "forbidden"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "id",
              "tag",
              "pseudo"
            ],
            "en": [
              "class",
              "id",
              "tag",
              "pseudo"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "Lua",
              "responsive",
              "C"
            ],
            "en": [
              "SQL",
              "Lua",
              "responsive",
              "C"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Media.",
            "en": "Media."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "border-radius?",
            "en": "border-radius?"
          },
          "choices": {
            "nl": [
              "SQL",
              "GPU",
              "Lua",
              "afgeronde hoeken"
            ],
            "en": [
              "SQL",
              "GPU",
              "Lua",
              "rounded corners"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Radius.",
            "en": "Radius."
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
              "link",
              "afbeelding",
              "tabel",
              "script verplicht"
            ],
            "en": [
              "link",
              "image",
              "table",
              "script required"
            ]
          },
          "answer": 0,
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
              "pointer",
              "python",
              "paragraaf"
            ],
            "en": [
              "padding only",
              "pointer",
              "python",
              "paragraph"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Paragraph.",
            "en": "Paragraph."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "kop",
              "CSS",
              "SQL",
              "Lua"
            ],
            "en": [
              "heading",
              "CSS",
              "SQL",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "cert",
              "GPU",
              "tekstkleur"
            ],
            "en": [
              "SQL",
              "cert",
              "GPU",
              "text color"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ],
            "en": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ],
            "en": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "font",
              "binnenruimte",
              "alt"
            ],
            "en": [
              "outside",
              "font",
              "inner space",
              "alt"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "toegankelijke tekst",
              "CSS",
              "verboden"
            ],
            "en": [
              "always empty",
              "accessible text",
              "CSS",
              "forbidden"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ],
            "en": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Media.",
            "en": "Media."
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
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Lua",
              "SQL",
              "kop"
            ],
            "en": [
              "CSS",
              "Lua",
              "SQL",
              "heading"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "tekstkleur",
              "SQL",
              "GPU",
              "cert"
            ],
            "en": [
              "text color",
              "SQL",
              "GPU",
              "cert"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ],
            "en": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ],
            "en": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "alt",
              "font",
              "binnenruimte"
            ],
            "en": [
              "outside",
              "alt",
              "font",
              "inner space"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ],
            "en": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Media.",
            "en": "Media."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "border-radius?",
            "en": "border-radius?"
          },
          "choices": {
            "nl": [
              "SQL",
              "Lua",
              "afgeronde hoeken",
              "GPU"
            ],
            "en": [
              "SQL",
              "Lua",
              "rounded corners",
              "GPU"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Radius.",
            "en": "Radius."
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
              "C header",
              "Python",
              "CSS in HTML"
            ],
            "en": [
              "JS only",
              "C header",
              "Python",
              "CSS in HTML"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Embedded CSS.",
            "en": "Embedded CSS."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "SQL",
              "kop",
              "Lua"
            ],
            "en": [
              "CSS",
              "SQL",
              "heading",
              "Lua"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "cert",
              "GPU",
              "tekstkleur"
            ],
            "en": [
              "SQL",
              "cert",
              "GPU",
              "text color"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ],
            "en": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "im->img",
              "ok",
              "src always wrong",
              "slash"
            ],
            "en": [
              "im->img",
              "ok",
              "src always wrong",
              "slash"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "alt",
              "font",
              "binnenruimte"
            ],
            "en": [
              "outside",
              "alt",
              "font",
              "inner space"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "toegankelijke tekst",
              "altijd leeg",
              "CSS",
              "verboden"
            ],
            "en": [
              "accessible text",
              "always empty",
              "CSS",
              "forbidden"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "C",
              "Lua",
              "responsive"
            ],
            "en": [
              "SQL",
              "C",
              "Lua",
              "responsive"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Media.",
            "en": "Media."
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
              "GPU",
              "SQL",
              "binnenruimte"
            ],
            "en": [
              "outside border",
              "GPU",
              "SQL",
              "inner space"
            ]
          },
          "answer": 3,
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
              "alt text",
              "buitenafstand",
              "nil"
            ],
            "en": [
              "font",
              "alt text",
              "outer gap",
              "nil"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Margin.",
            "en": "Margin."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Lua",
              "SQL",
              "kop"
            ],
            "en": [
              "CSS",
              "Lua",
              "SQL",
              "heading"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "GPU",
              "tekstkleur",
              "cert"
            ],
            "en": [
              "SQL",
              "GPU",
              "text color",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ],
            "en": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ],
            "en": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "alt",
              "font",
              "binnenruimte"
            ],
            "en": [
              "outside",
              "alt",
              "font",
              "inner space"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "toegankelijke tekst",
              "CSS",
              "verboden"
            ],
            "en": [
              "always empty",
              "accessible text",
              "CSS",
              "forbidden"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "pseudo",
              "tag",
              "id"
            ],
            "en": [
              "class",
              "pseudo",
              "tag",
              "id"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "C",
              "Lua",
              "responsive"
            ],
            "en": [
              "SQL",
              "C",
              "Lua",
              "responsive"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Media.",
            "en": "Media."
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
              "Lua",
              "SQL",
              "flexbox layout"
            ],
            "en": [
              "grid only",
              "Lua",
              "SQL",
              "flexbox layout"
            ]
          },
          "answer": 3,
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
              "alt",
              "hoofdas uitlijnen",
              "nil"
            ],
            "en": [
              "font weight",
              "alt",
              "main-axis align",
              "nil"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Justify.",
            "en": "Justify."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "kop",
              "CSS",
              "SQL",
              "Lua"
            ],
            "en": [
              "heading",
              "CSS",
              "SQL",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "tekstkleur",
              "GPU",
              "cert"
            ],
            "en": [
              "SQL",
              "text color",
              "GPU",
              "cert"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ],
            "en": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "font",
              "binnenruimte",
              "alt"
            ],
            "en": [
              "outside",
              "font",
              "inner space",
              "alt"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "CSS",
              "toegankelijke tekst",
              "verboden"
            ],
            "en": [
              "always empty",
              "CSS",
              "accessible text",
              "forbidden"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ],
            "en": [
              "SQL",
              "responsive",
              "Lua",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Media.",
            "en": "Media."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "border-radius?",
            "en": "border-radius?"
          },
          "choices": {
            "nl": [
              "SQL",
              "afgeronde hoeken",
              "Lua",
              "GPU"
            ],
            "en": [
              "SQL",
              "rounded corners",
              "Lua",
              "GPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Radius.",
            "en": "Radius."
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
              "C macro only",
              "Lua",
              "responsive regel"
            ],
            "en": [
              "SQL",
              "C macro only",
              "Lua",
              "responsive rule"
            ]
          },
          "answer": 3,
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
              "cert",
              "GPU",
              "helpt mobiel schalen"
            ],
            "en": [
              "useless",
              "cert",
              "GPU",
              "helps mobile scale"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Viewport.",
            "en": "Viewport."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "SQL",
              "kop",
              "Lua"
            ],
            "en": [
              "CSS",
              "SQL",
              "heading",
              "Lua"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "tekstkleur",
              "SQL",
              "GPU",
              "cert"
            ],
            "en": [
              "text color",
              "SQL",
              "GPU",
              "cert"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ],
            "en": [
              "flexbox",
              "grid only",
              "SQL",
              "C"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "im->img",
              "src always wrong",
              "slash"
            ],
            "en": [
              "ok",
              "im->img",
              "src always wrong",
              "slash"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "buiten",
              "binnenruimte",
              "font",
              "alt"
            ],
            "en": [
              "outside",
              "inner space",
              "font",
              "alt"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "toegankelijke tekst",
              "CSS",
              "verboden"
            ],
            "en": [
              "always empty",
              "accessible text",
              "CSS",
              "forbidden"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "border-radius?",
            "en": "border-radius?"
          },
          "choices": {
            "nl": [
              "SQL",
              "Lua",
              "afgeronde hoeken",
              "GPU"
            ],
            "en": [
              "SQL",
              "Lua",
              "rounded corners",
              "GPU"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Radius.",
            "en": "Radius."
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
              "Rust mut",
              "Lua local",
              "CSS haakje"
            ],
            "en": [
              "SQL key",
              "Rust mut",
              "Lua local",
              "CSS hook"
            ]
          },
          "answer": 3,
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
              "C pointer",
              "klikbaar element",
              "nil"
            ],
            "en": [
              "JS only",
              "C pointer",
              "clickable element",
              "nil"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Button.",
            "en": "Button."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "h1 is?",
            "en": "h1 is?"
          },
          "choices": {
            "nl": [
              "CSS",
              "Lua",
              "SQL",
              "kop"
            ],
            "en": [
              "CSS",
              "Lua",
              "SQL",
              "heading"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Heading.",
            "en": "Heading."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Link tag?",
            "en": "Link tag?"
          },
          "fill": [
            "a"
          ],
          "why": {
            "nl": "a.",
            "en": "a."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "CSS color?",
            "en": "CSS color?"
          },
          "choices": {
            "nl": [
              "SQL",
              "GPU",
              "tekstkleur",
              "cert"
            ],
            "en": [
              "SQL",
              "GPU",
              "text color",
              "cert"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Color.",
            "en": "Color."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "display:flex?",
            "en": "display:flex?"
          },
          "choices": {
            "nl": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ],
            "en": [
              "grid only",
              "flexbox",
              "SQL",
              "C"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Flex.",
            "en": "Flex."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: <im src=x>",
            "en": "Spot: <im src=x>"
          },
          "choices": {
            "nl": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ],
            "en": [
              "ok",
              "slash",
              "src always wrong",
              "im->img"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "img.",
            "en": "img."
          },
          "code": "<im src='x'>"
        },
        {
          "type": "mc",
          "q": {
            "nl": "padding?",
            "en": "padding?"
          },
          "choices": {
            "nl": [
              "binnenruimte",
              "buiten",
              "font",
              "alt"
            ],
            "en": [
              "inner space",
              "outside",
              "font",
              "alt"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Padding.",
            "en": "Padding."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "alt op img?",
            "en": "alt on img?"
          },
          "choices": {
            "nl": [
              "altijd leeg",
              "CSS",
              "toegankelijke tekst",
              "verboden"
            ],
            "en": [
              "always empty",
              "CSS",
              "accessible text",
              "forbidden"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Alt.",
            "en": "Alt."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "#id?",
            "en": "#id?"
          },
          "choices": {
            "nl": [
              "class",
              "tag",
              "id",
              "pseudo"
            ],
            "en": [
              "class",
              "tag",
              "id",
              "pseudo"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "id.",
            "en": "id."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Emphasis tag?",
            "en": "Emphasis tag?"
          },
          "fill": [
            "em"
          ],
          "why": {
            "nl": "em.",
            "en": "em."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "@media?",
            "en": "@media?"
          },
          "choices": {
            "nl": [
              "SQL",
              "Lua",
              "responsive",
              "C"
            ],
            "en": [
              "SQL",
              "Lua",
              "responsive",
              "C"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Media.",
            "en": "Media."
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
          "GPU",
          "kiest h1 elementen",
          "cert"
        ],
        "en": [
          "SQL",
          "GPU",
          "selects h1 elements",
          "cert"
        ]
      },
      "answer": 2,
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
          "Lua",
          "id vs class selector",
          "C"
        ],
        "en": [
          "same",
          "Lua",
          "id vs class selector",
          "C"
        ]
      },
      "answer": 2,
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
          "SQL",
          "inline vs block (typisch)",
          "cert"
        ],
        "en": [
          "always same",
          "SQL",
          "inline vs block (typical)",
          "cert"
        ]
      },
      "answer": 2,
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
          "nadruk/semantic",
          "kleur",
          "GPU",
          "nil"
        ],
        "en": [
          "emphasis/semantic",
          "color",
          "GPU",
          "nil"
        ]
      },
      "answer": 0,
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
          "rood",
          "wit",
          "blauw"
        ],
        "en": [
          "black",
          "red",
          "white",
          "blue"
        ]
      },
      "answer": 2,
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
          "Lua end",
          "afgeronde hoeken",
          "C"
        ],
        "en": [
          "SQL",
          "Lua end",
          "rounded corners",
          "C"
        ]
      },
      "answer": 2,
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
          "SQL",
          "uit normal flow",
          "cert"
        ],
        "en": [
          "normal flow",
          "SQL",
          "out of normal flow",
          "cert"
        ]
      },
      "answer": 2,
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
          "GPU only",
          "Lua",
          "stapelvolgorde"
        ],
        "en": [
          "SQL index",
          "GPU only",
          "Lua",
          "stack order"
        ]
      },
      "answer": 3,
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
          "root font-relative",
          "px only",
          "SQL",
          "C"
        ],
        "en": [
          "root font-relative",
          "px only",
          "SQL",
          "C"
        ]
      },
      "answer": 0,
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
          "cert",
          "Lua",
          "transparantie"
        ],
        "en": [
          "display none",
          "cert",
          "Lua",
          "transparency"
        ]
      },
      "answer": 3,
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
          ":hover",
          "::before only",
          "SQL",
          "C"
        ],
        "en": [
          ":hover",
          "::before only",
          "SQL",
          "C"
        ]
      },
      "answer": 0,
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
          "page/section header",
          "geen betekenis",
          "Lua",
          "Rust"
        ],
        "en": [
          "page/section header",
          "no meaning",
          "Lua",
          "Rust"
        ]
      },
      "answer": 0,
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
          "C",
          "nooit ooit",
          "SQL",
          "voor decoratief soms"
        ],
        "en": [
          "C",
          "never ever",
          "SQL",
          "sometimes decorative"
        ]
      },
      "answer": 3,
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
          "origineel oefenen",
          "W3C leak",
          "betaald",
          "cert leak"
        ],
        "en": [
          "original practice",
          "W3C leak",
          "paid",
          "cert leak"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Original.",
        "en": "Original."
      }
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 1] h1 is?",
        "en": "[Pool 1] h1 is?"
      },
      "choices": {
        "nl": [
          "CSS",
          "SQL",
          "kop",
          "Lua"
        ],
        "en": [
          "CSS",
          "SQL",
          "heading",
          "Lua"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Heading.",
        "en": "Heading."
      },
      "id": 16
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Link tag?",
        "en": "[Pool 2] Link tag?"
      },
      "fill": [
        "a"
      ],
      "why": {
        "nl": "a.",
        "en": "a."
      },
      "id": 17
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 3] CSS color?",
        "en": "[Pool 3] CSS color?"
      },
      "choices": {
        "nl": [
          "SQL",
          "cert",
          "GPU",
          "tekstkleur"
        ],
        "en": [
          "SQL",
          "cert",
          "GPU",
          "text color"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Color.",
        "en": "Color."
      },
      "id": 18
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 4] display:flex?",
        "en": "[Pool 4] display:flex?"
      },
      "choices": {
        "nl": [
          "flexbox",
          "grid only",
          "SQL",
          "C"
        ],
        "en": [
          "flexbox",
          "grid only",
          "SQL",
          "C"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Flex.",
        "en": "Flex."
      },
      "id": 19
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 5] Spot: <im src=x>",
        "en": "[Pool 5] Spot: <im src=x>"
      },
      "choices": {
        "nl": [
          "ok",
          "src always wrong",
          "im->img",
          "slash"
        ],
        "en": [
          "ok",
          "src always wrong",
          "im->img",
          "slash"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "img.",
        "en": "img."
      },
      "code": "<im src='x'>",
      "id": 20
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 6] padding?",
        "en": "[Pool 6] padding?"
      },
      "choices": {
        "nl": [
          "buiten",
          "alt",
          "font",
          "binnenruimte"
        ],
        "en": [
          "outside",
          "alt",
          "font",
          "inner space"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Padding.",
        "en": "Padding."
      },
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 7] alt op img?",
        "en": "[Pool 7] alt on img?"
      },
      "choices": {
        "nl": [
          "toegankelijke tekst",
          "altijd leeg",
          "CSS",
          "verboden"
        ],
        "en": [
          "accessible text",
          "always empty",
          "CSS",
          "forbidden"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Alt.",
        "en": "Alt."
      },
      "id": 22
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 8] #id?",
        "en": "[Pool 8] #id?"
      },
      "choices": {
        "nl": [
          "id",
          "class",
          "tag",
          "pseudo"
        ],
        "en": [
          "id",
          "class",
          "tag",
          "pseudo"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "id.",
        "en": "id."
      },
      "id": 23
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 9] Emphasis tag?",
        "en": "[Pool 9] Emphasis tag?"
      },
      "fill": [
        "em"
      ],
      "why": {
        "nl": "em.",
        "en": "em."
      },
      "id": 24
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 10] @media?",
        "en": "[Pool 10] @media?"
      },
      "choices": {
        "nl": [
          "SQL",
          "Lua",
          "responsive",
          "C"
        ],
        "en": [
          "SQL",
          "Lua",
          "responsive",
          "C"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Media.",
        "en": "Media."
      },
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] border-radius?",
        "en": "[Pool 11] border-radius?"
      },
      "choices": {
        "nl": [
          "SQL",
          "GPU",
          "Lua",
          "afgeronde hoeken"
        ],
        "en": [
          "SQL",
          "GPU",
          "Lua",
          "rounded corners"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Radius.",
        "en": "Radius."
      },
      "id": 26
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 12] margin?",
        "en": "[Pool 12] margin?"
      },
      "choices": {
        "nl": [
          "font",
          "buitenafstand",
          "alt",
          "nil"
        ],
        "en": [
          "font",
          "outer gap",
          "alt",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Margin.",
        "en": "Margin."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] button element?",
        "en": "[Pool 13] button element?"
      },
      "choices": {
        "nl": [
          "alleen JS",
          "C",
          "klikbaar element",
          "nil"
        ],
        "en": [
          "JS only",
          "C",
          "clickable element",
          "nil"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Button.",
        "en": "Button."
      },
      "id": 28
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 14] h1 is?",
        "en": "[Pool 14] h1 is?"
      },
      "choices": {
        "nl": [
          "kop",
          "CSS",
          "SQL",
          "Lua"
        ],
        "en": [
          "heading",
          "CSS",
          "SQL",
          "Lua"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Heading.",
        "en": "Heading."
      },
      "id": 29
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 15] Link tag?",
        "en": "[Pool 15] Link tag?"
      },
      "fill": [
        "a"
      ],
      "why": {
        "nl": "a.",
        "en": "a."
      },
      "id": 30
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 16] CSS color?",
        "en": "[Pool 16] CSS color?"
      },
      "choices": {
        "nl": [
          "SQL",
          "GPU",
          "tekstkleur",
          "cert"
        ],
        "en": [
          "SQL",
          "GPU",
          "text color",
          "cert"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Color.",
        "en": "Color."
      },
      "id": 31
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 17] display:flex?",
        "en": "[Pool 17] display:flex?"
      },
      "choices": {
        "nl": [
          "grid only",
          "flexbox",
          "SQL",
          "C"
        ],
        "en": [
          "grid only",
          "flexbox",
          "SQL",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Flex.",
        "en": "Flex."
      },
      "id": 32
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 18] Spot: <im src=x>",
        "en": "[Pool 18] Spot: <im src=x>"
      },
      "choices": {
        "nl": [
          "im->img",
          "ok",
          "src always wrong",
          "slash"
        ],
        "en": [
          "im->img",
          "ok",
          "src always wrong",
          "slash"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "img.",
        "en": "img."
      },
      "code": "<im src='x'>",
      "id": 33
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 19] padding?",
        "en": "[Pool 19] padding?"
      },
      "choices": {
        "nl": [
          "buiten",
          "binnenruimte",
          "font",
          "alt"
        ],
        "en": [
          "outside",
          "inner space",
          "font",
          "alt"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Padding.",
        "en": "Padding."
      },
      "id": 34
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 20] alt op img?",
        "en": "[Pool 20] alt on img?"
      },
      "choices": {
        "nl": [
          "altijd leeg",
          "toegankelijke tekst",
          "CSS",
          "verboden"
        ],
        "en": [
          "always empty",
          "accessible text",
          "CSS",
          "forbidden"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alt.",
        "en": "Alt."
      },
      "id": 35
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 21] #id?",
        "en": "[Pool 21] #id?"
      },
      "choices": {
        "nl": [
          "id",
          "class",
          "tag",
          "pseudo"
        ],
        "en": [
          "id",
          "class",
          "tag",
          "pseudo"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "id.",
        "en": "id."
      },
      "id": 36
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 22] Emphasis tag?",
        "en": "[Pool 22] Emphasis tag?"
      },
      "fill": [
        "em"
      ],
      "why": {
        "nl": "em.",
        "en": "em."
      },
      "id": 37
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] @media?",
        "en": "[Pool 23] @media?"
      },
      "choices": {
        "nl": [
          "SQL",
          "Lua",
          "responsive",
          "C"
        ],
        "en": [
          "SQL",
          "Lua",
          "responsive",
          "C"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Media.",
        "en": "Media."
      },
      "id": 38
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 24] border-radius?",
        "en": "[Pool 24] border-radius?"
      },
      "choices": {
        "nl": [
          "afgeronde hoeken",
          "SQL",
          "Lua",
          "GPU"
        ],
        "en": [
          "rounded corners",
          "SQL",
          "Lua",
          "GPU"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Radius.",
        "en": "Radius."
      },
      "id": 39
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] margin?",
        "en": "[Pool 25] margin?"
      },
      "choices": {
        "nl": [
          "font",
          "nil",
          "alt",
          "buitenafstand"
        ],
        "en": [
          "font",
          "nil",
          "alt",
          "outer gap"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Margin.",
        "en": "Margin."
      },
      "id": 40
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 26] button element?",
        "en": "[Pool 26] button element?"
      },
      "choices": {
        "nl": [
          "alleen JS",
          "klikbaar element",
          "C",
          "nil"
        ],
        "en": [
          "JS only",
          "clickable element",
          "C",
          "nil"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Button.",
        "en": "Button."
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 27] h1 is?",
        "en": "[Pool 27] h1 is?"
      },
      "choices": {
        "nl": [
          "kop",
          "CSS",
          "SQL",
          "Lua"
        ],
        "en": [
          "heading",
          "CSS",
          "SQL",
          "Lua"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Heading.",
        "en": "Heading."
      },
      "id": 42
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 28] Link tag?",
        "en": "[Pool 28] Link tag?"
      },
      "fill": [
        "a"
      ],
      "why": {
        "nl": "a.",
        "en": "a."
      },
      "id": 43
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 29] CSS color?",
        "en": "[Pool 29] CSS color?"
      },
      "choices": {
        "nl": [
          "SQL",
          "tekstkleur",
          "GPU",
          "cert"
        ],
        "en": [
          "SQL",
          "text color",
          "GPU",
          "cert"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Color.",
        "en": "Color."
      },
      "id": 44
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 30] display:flex?",
        "en": "[Pool 30] display:flex?"
      },
      "choices": {
        "nl": [
          "grid only",
          "SQL",
          "flexbox",
          "C"
        ],
        "en": [
          "grid only",
          "SQL",
          "flexbox",
          "C"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Flex.",
        "en": "Flex."
      },
      "id": 45
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 31] Spot: <im src=x>",
        "en": "[Pool 31] Spot: <im src=x>"
      },
      "choices": {
        "nl": [
          "ok",
          "slash",
          "src always wrong",
          "im->img"
        ],
        "en": [
          "ok",
          "slash",
          "src always wrong",
          "im->img"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "img.",
        "en": "img."
      },
      "code": "<im src='x'>",
      "id": 46
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 32] padding?",
        "en": "[Pool 32] padding?"
      },
      "choices": {
        "nl": [
          "binnenruimte",
          "buiten",
          "font",
          "alt"
        ],
        "en": [
          "inner space",
          "outside",
          "font",
          "alt"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Padding.",
        "en": "Padding."
      },
      "id": 47
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 33] alt op img?",
        "en": "[Pool 33] alt on img?"
      },
      "choices": {
        "nl": [
          "altijd leeg",
          "toegankelijke tekst",
          "CSS",
          "verboden"
        ],
        "en": [
          "always empty",
          "accessible text",
          "CSS",
          "forbidden"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alt.",
        "en": "Alt."
      },
      "id": 48
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 34] #id?",
        "en": "[Pool 34] #id?"
      },
      "choices": {
        "nl": [
          "class",
          "tag",
          "id",
          "pseudo"
        ],
        "en": [
          "class",
          "tag",
          "id",
          "pseudo"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "id.",
        "en": "id."
      },
      "id": 49
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 35] Emphasis tag?",
        "en": "[Pool 35] Emphasis tag?"
      },
      "fill": [
        "em"
      ],
      "why": {
        "nl": "em.",
        "en": "em."
      },
      "id": 50
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
  ],
  "examDraw": 25
};
})(window);
