(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.csharp = {
  "id": "csharp",
  "title": {
    "nl": "C# voor beginners",
    "en": "C# for beginners"
  },
  "intro": {
    "nl": "Gebaseerd op Foundational C# onderwerpen, in onze eigen woorden met originele oefenvragen.",
    "en": "Based on Foundational C# topics, in our own words with original practice questions."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste C# code",
        "en": "Your first C# code"
      },
      "body": {
        "nl": "<p>C# is een taal van Microsoft. Je schrijft code in bestanden zoals <code class=\"inline\">Program.cs</code> en je ziet output in de console.</p>\n<p>De klassieker:</p>\n<pre>Console.WriteLine(\"Hallo CodeCrib!\");</pre>\n<p><code class=\"inline\">WriteLine</code> schrijft tekst en springt daarna naar een nieuwe regel. <code class=\"inline\">Write</code> doet dat niet.</p>\n<div class=\"callout\"><strong>Valkuil (Haxe / andere talen):</strong> In Haxe gebruik je vaak <code class=\"inline\">trace</code> of <code class=\"inline\">Sys.println</code>. In C# is de standaard console-API <code class=\"inline\">Console.WriteLine</code>.</div>",
        "en": "<p>C# is a Microsoft language. You write code in files like <code class=\"inline\">Program.cs</code> and see output in the console.</p>\n<p>The classic:</p>\n<pre>Console.WriteLine(\"Hello CodeCrib!\");</pre>\n<p><code class=\"inline\">WriteLine</code> prints text and then a new line. <code class=\"inline\">Write</code> does not.</p>\n<div class=\"callout\"><strong>Pitfall (Haxe / other languages):</strong> In Haxe you often use <code class=\"inline\">trace</code> or <code class=\"inline\">Sys.println</code>. In C# the usual console API is <code class=\"inline\">Console.WriteLine</code>.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat doet Console.WriteLine?",
            "en": "What does Console.WriteLine do?"
          },
          "choices": {
            "nl": [
              "Schrijft tekst zonder nieuwe regel",
              "Schrijft tekst en een nieuwe regel",
              "Opent een venster",
              "Leest een bestand"
            ],
            "en": [
              "Writes text without a new line",
              "Writes text and a new line",
              "Opens a window",
              "Reads a file"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "WriteLine = write + line. Write doet alleen de tekst.",
            "en": "WriteLine = write + line. Write only prints the text."
          }
        },
        {
          "q": {
            "nl": "Welke regel is geldige C#?",
            "en": "Which line is valid C#?"
          },
          "choices": {
            "nl": [
              "print(\"hoi\")",
              "Console.WriteLine(\"hoi\");",
              "echo hoi",
              "Sys.println(\"hoi\")"
            ],
            "en": [
              "print(\"hi\")",
              "Console.WriteLine(\"hi\");",
              "echo hi",
              "Sys.println(\"hi\")"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "C# gebruikt Console.WriteLine en eindigt statements meestal met een puntkomma.",
            "en": "C# uses Console.WriteLine and usually ends statements with a semicolon."
          }
        }
      ],
      "exercise": {
        "lang": "csharp",
        "instructions": {
          "nl": "Schrijf WriteLine Hallo (check op code).",
          "en": "Write WriteLine Hallo (code check)."
        },
        "starter": "Console.WriteLine(\"Hallo\");\n",
        "tests": [
          {
            "type": "code_contains",
            "value": "Console.WriteLine"
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
        "nl": "Eenvoudige console apps",
        "en": "Simple console apps"
      },
      "body": {
        "nl": "<p>Een console-app start bij <code class=\"inline\">Main</code> (of bij top-level statements in moderne C#).</p>\n<pre>string naam = Console.ReadLine();\nConsole.WriteLine($\"Welkom, {naam}\");</pre>\n<p><code class=\"inline\">ReadLine</code> leest wat de gebruiker typt (tot Enter). Dat komt terug als <code class=\"inline\">string</code> (of null).</p>\n<p>Geïnterpoleerde strings beginnen met <code class=\"inline\">$</code> en zetten expressies tussen <code class=\"inline\">{ }</code>.</p>",
        "en": "<p>A console app starts at <code class=\"inline\">Main</code> (or top-level statements in modern C#).</p>\n<pre>string name = Console.ReadLine();\nConsole.WriteLine($\"Welcome, {name}\");</pre>\n<p><code class=\"inline\">ReadLine</code> reads what the user types (until Enter). It returns a <code class=\"inline\">string</code> (or null).</p>\n<p>Interpolated strings start with <code class=\"inline\">$</code> and put expressions inside <code class=\"inline\">{ }</code>.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat print dit? string n=\"Justy\"; Console.WriteLine($\"Hi {n}\");",
            "en": "What does this print? string n=\"Justy\"; Console.WriteLine($\"Hi {n}\");"
          },
          "choices": {
            "nl": [
              "Hi {n}",
              "Hi Justy",
              "Hi $Justy",
              "een error"
            ],
            "en": [
              "Hi {n}",
              "Hi Justy",
              "Hi $Justy",
              "an error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "De $ maakt {n} tot de waarde van n.",
            "en": "The $ makes {n} become the value of n."
          }
        },
        {
          "q": {
            "nl": "Welk type geeft ReadLine meestal terug?",
            "en": "Which type does ReadLine usually return?"
          },
          "choices": {
            "nl": [
              "int",
              "string",
              "bool",
              "char"
            ],
            "en": [
              "int",
              "string",
              "bool",
              "char"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Zelfs als je 42 typt, blijft het een string tot je het omzet.",
            "en": "Even if you type 42, it stays a string until you convert it."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": {
        "nl": "Variabelen en types",
        "en": "Variables and types"
      },
      "body": {
        "nl": "<p>Veelgebruikte types: <code class=\"inline\">int</code>, <code class=\"inline\">double</code>, <code class=\"inline\">decimal</code>, <code class=\"inline\">bool</code>, <code class=\"inline\">char</code>, <code class=\"inline\">string</code>.</p>\n<pre>int score = 10;\ndouble ratio = 0.5;\ndecimal prijs = 9.99m;\nbool klaar = true;\nchar letter = 'A';\nvar naam = \"CodeCrib\";</pre>\n<p><code class=\"inline\">var</code> laat de compiler het type raden, maar je moet meteen een waarde geven.</p>\n<div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">var y;</code> compileert niet. En <code class=\"inline\">int / int</code> geeft een <code class=\"inline\">int</code> (7/2 wordt 3), anders dan Haxe waar <code class=\"inline\">/</code> een Float geeft.</div>",
        "en": "<p>Common types: <code class=\"inline\">int</code>, <code class=\"inline\">double</code>, <code class=\"inline\">decimal</code>, <code class=\"inline\">bool</code>, <code class=\"inline\">char</code>, <code class=\"inline\">string</code>.</p>\n<pre>int score = 10;\ndouble ratio = 0.5;\ndecimal price = 9.99m;\nbool done = true;\nchar letter = 'A';\nvar name = \"CodeCrib\";</pre>\n<p><code class=\"inline\">var</code> lets the compiler infer the type, but you must assign a value right away.</p>\n<div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">var y;</code> does not compile. And <code class=\"inline\">int / int</code> yields an <code class=\"inline\">int</code> (7/2 becomes 3), unlike Haxe where <code class=\"inline\">/</code> yields a Float.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat print Console.WriteLine(7 / 2); ?",
            "en": "What does Console.WriteLine(7 / 2); print?"
          },
          "choices": {
            "nl": [
              "3.5",
              "3",
              "4",
              "compile error"
            ],
            "en": [
              "3.5",
              "3",
              "4",
              "compile error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Integer deling gooit het deel achter de komma weg.",
            "en": "Integer division truncates toward zero."
          }
        },
        {
          "q": {
            "nl": "Welke regel geeft een compile error?",
            "en": "Which line causes a compile error?"
          },
          "choices": {
            "nl": [
              "var x = 5;",
              "var y;",
              "decimal p = 1.5m;",
              "char c = 'Z';"
            ],
            "en": [
              "var x = 5;",
              "var y;",
              "decimal p = 1.5m;",
              "char c = 'Z';"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "var heeft een initializer nodig.",
            "en": "var needs an initializer."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": {
        "nl": "Strings en formatting",
        "en": "Strings and formatting"
      },
      "body": {
        "nl": "<p>Strings zijn <code class=\"inline\">string</code>. Handige methodes: <code class=\"inline\">Length</code>, <code class=\"inline\">Contains</code>, <code class=\"inline\">ToUpper</code>, <code class=\"inline\">Substring</code>, <code class=\"inline\">Split</code>.</p>\n<pre>string s = \"Hallo\";\nConsole.WriteLine(s.Length);      // 5\nConsole.WriteLine(s.Contains(\"hal\")); // False (hoofdlettergevoelig)</pre>\n<p>Drie manieren om tekst te bouwen: concatenatie met <code class=\"inline\">+</code>, compositie met <code class=\"inline\">string.Format</code>, of interpolatie met <code class=\"inline\">$</code>.</p>\n<div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">Contains</code> is standaard hoofdlettergevoelig. \"Hallo\".Contains(\"hal\") is False.</div>",
        "en": "<p>Strings use type <code class=\"inline\">string</code>. Handy members: <code class=\"inline\">Length</code>, <code class=\"inline\">Contains</code>, <code class=\"inline\">ToUpper</code>, <code class=\"inline\">Substring</code>, <code class=\"inline\">Split</code>.</p>\n<pre>string s = \"Hello\";\nConsole.WriteLine(s.Length);      // 5\nConsole.WriteLine(s.Contains(\"hel\")); // False if case differs</pre>\n<p>Three ways to build text: <code class=\"inline\">+</code> concat, <code class=\"inline\">string.Format</code>, or <code class=\"inline\">$</code> interpolation.</p>\n<div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">Contains</code> is case-sensitive by default.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat print \"Hallo\".Contains(\"hal\")?",
            "en": "What does \"Hallo\".Contains(\"hal\") print?"
          },
          "choices": {
            "nl": [
              "True",
              "False",
              "1",
              "error"
            ],
            "en": [
              "True",
              "False",
              "1",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "H en h zijn niet hetzelfde in C# strings (standaard).",
            "en": "H and h are different under default string rules."
          }
        },
        {
          "q": {
            "nl": "Wat is \"abc\".Length?",
            "en": "What is \"abc\".Length?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "null"
            ],
            "en": [
              "2",
              "3",
              "4",
              "null"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Drie tekens: a, b, c.",
            "en": "Three characters: a, b, c."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "Logica met if en else",
        "en": "Logic with if and else"
      },
      "body": {
        "nl": "<p>Voorwaarden gebruiken <code class=\"inline\">if</code>, <code class=\"inline\">else if</code>, <code class=\"inline\">else</code>.</p>\n<pre>int x = 5;\nif (x &gt; 3 &amp;&amp; x &lt; 5) Console.WriteLine(\"A\");\nelse if (x &gt;= 5) Console.WriteLine(\"B\");\nelse Console.WriteLine(\"C\");</pre>\n<p>Operators: <code class=\"inline\">==</code> <code class=\"inline\">!=</code> <code class=\"inline\">&lt;</code> <code class=\"inline\">&gt;</code> <code class=\"inline\">&amp;&amp;</code> <code class=\"inline\">||</code> <code class=\"inline\">!</code>.</p>\n<p><code class=\"inline\">%</code> is modulo: rest bij deling. <code class=\"inline\">10 % 3</code> is 1.</p>",
        "en": "<p>Branches use <code class=\"inline\">if</code>, <code class=\"inline\">else if</code>, <code class=\"inline\">else</code>.</p>\n<pre>int x = 5;\nif (x &gt; 3 &amp;&amp; x &lt; 5) Console.WriteLine(\"A\");\nelse if (x &gt;= 5) Console.WriteLine(\"B\");\nelse Console.WriteLine(\"C\");</pre>\n<p>Operators: <code class=\"inline\">==</code> <code class=\"inline\">!=</code> <code class=\"inline\">&lt;</code> <code class=\"inline\">&gt;</code> <code class=\"inline\">&amp;&amp;</code> <code class=\"inline\">||</code> <code class=\"inline\">!</code>.</p>\n<p><code class=\"inline\">%</code> is modulo. <code class=\"inline\">10 % 3</code> is 1.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Met x = 5, wat print het voorbeeld hierboven?",
            "en": "With x = 5, what does the sample above print?"
          },
          "choices": {
            "nl": [
              "A",
              "B",
              "C",
              "AB"
            ],
            "en": [
              "A",
              "B",
              "C",
              "AB"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "x &lt; 5 faalt, dus else if x &gt;= 5 wint: B.",
            "en": "x &lt; 5 fails, so else if x &gt;= 5 wins: B."
          }
        },
        {
          "q": {
            "nl": "Wat is 10 % 3?",
            "en": "What is 10 % 3?"
          },
          "choices": {
            "nl": [
              "3",
              "3.33",
              "1",
              "0"
            ],
            "en": [
              "3",
              "3.33",
              "1",
              "0"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "10 = 3*3 + 1, rest is 1.",
            "en": "10 = 3*3 + 1, remainder 1."
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Switch statements",
        "en": "Switch statements"
      },
      "body": {
        "nl": "<p><code class=\"inline\">switch</code> kiest een pad op basis van een waarde.</p>\n<pre>switch (day) {\n  case 1:\n    Console.WriteLine(\"Ma\");\n    break;\n  case 2:\n    Console.WriteLine(\"Di\");\n    break;\n  default:\n    Console.WriteLine(\"?\");\n    break;\n}</pre>\n<div class=\"callout\"><strong>Valkuil:</strong> Zonder <code class=\"inline\">break</code> (of return) val je door naar de volgende case (fall-through). Vergeet break niet, tenzij je dat expres wilt.</div>",
        "en": "<p><code class=\"inline\">switch</code> picks a path from a value.</p>\n<pre>switch (day) {\n  case 1:\n    Console.WriteLine(\"Mon\");\n    break;\n  case 2:\n    Console.WriteLine(\"Tue\");\n    break;\n  default:\n    Console.WriteLine(\"?\");\n    break;\n}</pre>\n<div class=\"callout\"><strong>Pitfall:</strong> Without <code class=\"inline\">break</code> (or return) you fall through to the next case. Do not forget break unless you want that.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "case 1 zonder break, daarna case 2 met break. day=1 print:",
            "en": "case 1 without break, then case 2 with break. day=1 prints:"
          },
          "choices": {
            "nl": [
              "alleen Ma",
              "Ma en Di",
              "alleen Di",
              "compile error altijd"
            ],
            "en": [
              "only Mon",
              "Mon and Tue",
              "only Tue",
              "always a compile error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Fall-through: je blijft doorlopen tot een break.",
            "en": "Fall-through: execution continues until a break."
          }
        },
        {
          "q": {
            "nl": "Waar is default voor?",
            "en": "What is default for?"
          },
          "choices": {
            "nl": [
              "Altijd eerst uitvoeren",
              "Als geen case matcht",
              "Alleen bij errors",
              "Het verplicht maken van break"
            ],
            "en": [
              "Always run first",
              "When no case matches",
              "Only on errors",
              "To force break"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "default is het vangnet.",
            "en": "default is the catch-all path."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Loops: for, while, foreach",
        "en": "Loops: for, while, foreach"
      },
      "body": {
        "nl": "<p>Herhalen doe je met loops.</p>\n<pre>for (int i = 0; i &lt; 10; i += 3)\n  Console.WriteLine(i); // 0, 3, 6, 9</pre>\n<pre>int n = 3;\nwhile (n &gt; 0) { Console.WriteLine(n); n--; }</pre>\n<p><code class=\"inline\">foreach</code> loopt over arrays of lijsten zonder index te beheren.</p>\n<div class=\"callout\"><strong>Valkuil:</strong> <code class=\"inline\">i++</code> vs <code class=\"inline\">++i</code>. Postfix geeft de oude waarde terug, prefix verhoogt eerst. <code class=\"inline\">i++ + ++i</code> is makkelijk om over te struikelen op examens.</div>",
        "en": "<p>Repeat work with loops.</p>\n<pre>for (int i = 0; i &lt; 10; i += 3)\n  Console.WriteLine(i); // 0, 3, 6, 9</pre>\n<pre>int n = 3;\nwhile (n &gt; 0) { Console.WriteLine(n); n--; }</pre>\n<p><code class=\"inline\">foreach</code> walks arrays or lists without managing an index.</p>\n<div class=\"callout\"><strong>Pitfall:</strong> <code class=\"inline\">i++</code> vs <code class=\"inline\">++i</code>. Postfix returns the old value; prefix increments first. <code class=\"inline\">i++ + ++i</code> is a classic exam trap.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "for (i=0; i&lt;10; i+=3) WriteLine(i): hoe vaak?",
            "en": "for (i=0; i&lt;10; i+=3) WriteLine(i): how many times?"
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
            "nl": "Waarden 0,3,6,9: vier keer.",
            "en": "Values 0,3,6,9: four times."
          }
        },
        {
          "q": {
            "nl": "int i=3; wat is i++ + ++i ?",
            "en": "int i=3; what is i++ + ++i ?"
          },
          "choices": {
            "nl": [
              "7",
              "8",
              "6",
              "9"
            ],
            "en": [
              "7",
              "8",
              "6",
              "9"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "i++ levert 3 (i wordt 4), ++i maakt 5 en levert 5. 3+5=8.",
            "en": "i++ yields 3 (i becomes 4), ++i makes 5 and yields 5. 3+5=8."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Arrays",
        "en": "Arrays"
      },
      "body": {
        "nl": "<p>Een array heeft een vaste lengte.</p>\n<pre>int[] nums = { 10, 20, 30 };\nConsole.WriteLine(nums[0]); // 10\nConsole.WriteLine(nums.Length); // 3</pre>\n<p>Indexen beginnen bij 0. <code class=\"inline\">nums[3]</code> gooit een uitzondering omdat de lengte 3 is (geldig: 0..2).</p>\n<pre>string[] namen = new string[2];\nnamen[0] = \"Justy\";\nnamen[1] = \"Luke\";</pre>",
        "en": "<p>An array has a fixed length.</p>\n<pre>int[] nums = { 10, 20, 30 };\nConsole.WriteLine(nums[0]); // 10\nConsole.WriteLine(nums.Length); // 3</pre>\n<p>Indexes start at 0. <code class=\"inline\">nums[3]</code> throws because length is 3 (valid: 0..2).</p>\n<pre>string[] names = new string[2];\nnames[0] = \"Justy\";\nnames[1] = \"Luke\";</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "int[] a = {1,2,3}; wat is a[1]?",
            "en": "int[] a = {1,2,3}; what is a[1]?"
          },
          "choices": {
            "nl": [
              "1",
              "2",
              "3",
              "error"
            ],
            "en": [
              "1",
              "2",
              "3",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Index 0 is 1, index 1 is 2.",
            "en": "Index 0 is 1, index 1 is 2."
          }
        },
        {
          "q": {
            "nl": "Wat is {1,2,3}.Length?",
            "en": "What is {1,2,3}.Length?"
          },
          "choices": {
            "nl": [
              "2",
              "3",
              "4",
              "0"
            ],
            "en": [
              "2",
              "3",
              "4",
              "0"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Drie elementen.",
            "en": "Three elements."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "Methods schrijven",
        "en": "Writing methods"
      },
      "body": {
        "nl": "<p>Een method is een herbruikbaar blok met een naam, parameters en vaak een return type.</p>\n<pre>int Add(int a, int b) {\n  return a + b;\n}\nvoid Say(string msg) {\n  Console.WriteLine(msg);\n}</pre>\n<p><code class=\"inline\">void</code> betekent: geen return-waarde. Optionele parameters en overloads (zelfde naam, andere parameters) bestaan ook.</p>\n<div class=\"callout\"><strong>Tip:</strong> Houd methods klein. Eén taak per method maakt debuggen makkelijker.</div>",
        "en": "<p>A method is a reusable block with a name, parameters, and often a return type.</p>\n<pre>int Add(int a, int b) {\n  return a + b;\n}\nvoid Say(string msg) {\n  Console.WriteLine(msg);\n}</pre>\n<p><code class=\"inline\">void</code> means no return value. Optional parameters and overloads exist too.</p>\n<div class=\"callout\"><strong>Tip:</strong> Keep methods small. One job per method makes debugging easier.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wat betekent void als return type?",
            "en": "What does void mean as a return type?"
          },
          "choices": {
            "nl": [
              "Geeft altijd 0 terug",
              "Geeft niets terug",
              "Alleen voor Main",
              "Alleen voor errors"
            ],
            "en": [
              "Always returns 0",
              "Returns nothing",
              "Only for Main",
              "Only for errors"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "void = geen waarde teruggeven.",
            "en": "void = do not return a value."
          }
        },
        {
          "q": {
            "nl": "int Add(int a,int b){return a+b;} Add(2,3) is?",
            "en": "int Add(int a,int b){return a+b;} Add(2,3) is?"
          },
          "choices": {
            "nl": [
              "23",
              "5",
              "2",
              "error"
            ],
            "en": [
              "23",
              "5",
              "2",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "2+3=5.",
            "en": "2+3=5."
          }
        }
      ]
    },
    {
      "id": 10,
      "title": {
        "nl": "Debuggen en try/catch",
        "en": "Debugging and try/catch"
      },
      "body": {
        "nl": "<p>Bugs vind je met breakpoints, <code class=\"inline\">Console.WriteLine</code> checks, en door exceptions te lezen.</p>\n<pre>try {\n  int n = int.Parse(\"abc\");\n} catch (FormatException ex) {\n  Console.WriteLine(\"Dat was geen getal\");\n} finally {\n  Console.WriteLine(\"Altijd\");\n}</pre>\n<p><code class=\"inline\">try</code> probeert code. <code class=\"inline\">catch</code> vangt een fout. <code class=\"inline\">finally</code> runt bijna altijd, ook bij succes.</p>\n<div class=\"callout\"><strong>Valkuilen-recap:</strong> int/int, var zonder waarde, switch zonder break, i++ vs ++i, Contains hoofdlettergevoelig, array index out of range.</div>",
        "en": "<p>Find bugs with breakpoints, <code class=\"inline\">Console.WriteLine</code> checks, and by reading exceptions.</p>\n<pre>try {\n  int n = int.Parse(\"abc\");\n} catch (FormatException ex) {\n  Console.WriteLine(\"That was not a number\");\n} finally {\n  Console.WriteLine(\"Always\");\n}</pre>\n<p><code class=\"inline\">try</code> runs code. <code class=\"inline\">catch</code> handles a fault. <code class=\"inline\">finally</code> almost always runs, even on success.</p>\n<div class=\"callout\"><strong>Pitfall recap:</strong> int/int, var without a value, switch without break, i++ vs ++i, case-sensitive Contains, array index out of range.</div>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Wanneer runt finally (bijna altijd)?",
            "en": "When does finally run (almost always)?"
          },
          "choices": {
            "nl": [
              "Alleen bij errors",
              "Alleen zonder errors",
              "Na try, met of zonder catch-hit",
              "Nooit in console apps"
            ],
            "en": [
              "Only on errors",
              "Only without errors",
              "After try, with or without a catch hit",
              "Never in console apps"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "finally is voor opruimen, met of zonder exception.",
            "en": "finally is for cleanup, with or without an exception."
          }
        },
        {
          "q": {
            "nl": "int.Parse(\"abc\") gooit meestal:",
            "en": "int.Parse(\"abc\") usually throws:"
          },
          "choices": {
            "nl": [
              "NullReferenceException",
              "FormatException",
              "geen error",
              "StackOverflowException"
            ],
            "en": [
              "NullReferenceException",
              "FormatException",
              "no error",
              "StackOverflowException"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "De tekst past niet in het getal-formaat.",
            "en": "The text does not match a number format."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "Wat print Console.WriteLine(9 / 2); ?",
        "en": "What does Console.WriteLine(9 / 2); print?"
      },
      "choices": {
        "nl": [
          "4.5",
          "4",
          "5",
          "error"
        ],
        "en": [
          "4.5",
          "4",
          "5",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "int/int truncates.",
        "en": "int/int truncates."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "Verschil Write vs WriteLine?",
        "en": "Difference Write vs WriteLine?"
      },
      "choices": {
        "nl": [
          "geen",
          "WriteLine voegt nieuwe regel toe",
          "Write alleen voor ints",
          "WriteLine schrijft naar file"
        ],
        "en": [
          "none",
          "WriteLine adds a new line",
          "Write only for ints",
          "WriteLine writes to a file"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "WriteLine eindigt met newline.",
        "en": "WriteLine ends with a newline."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "var x; is?",
        "en": "var x; is?"
      },
      "choices": {
        "nl": [
          "int 0",
          "geldig",
          "compile error",
          "null"
        ],
        "en": [
          "int 0",
          "valid",
          "compile error",
          "null"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "var heeft initializer nodig.",
        "en": "var needs an initializer."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "decimal prijs = 2.5; ?",
        "en": "decimal price = 2.5; ?"
      },
      "choices": {
        "nl": [
          "ok",
          "vaak compile error zonder m",
          "wordt int",
          "wordt string"
        ],
        "en": [
          "ok",
          "often compile error without m",
          "becomes int",
          "becomes string"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Gebruik 2.5m voor decimal.",
        "en": "Use 2.5m for decimal."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "$\"{1+2}\" print?",
        "en": "$\"{1+2}\" prints?"
      },
      "choices": {
        "nl": [
          "{1+2}",
          "3",
          "1+2",
          "error"
        ],
        "en": [
          "{1+2}",
          "3",
          "1+2",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Interpolatie evalueert de expressie.",
        "en": "Interpolation evaluates the expression."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "\"Ab\".Contains(\"a\") ?",
        "en": "\"Ab\".Contains(\"a\") ?"
      },
      "choices": {
        "nl": [
          "True",
          "False",
          "error",
          "null"
        ],
        "en": [
          "True",
          "False",
          "error",
          "null"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Case-sensitive.",
        "en": "Case-sensitive."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "10 % 4 =",
        "en": "10 % 4 ="
      },
      "choices": {
        "nl": [
          "2",
          "2.5",
          "0",
          "4"
        ],
        "en": [
          "2",
          "2.5",
          "0",
          "4"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Rest 2.",
        "en": "Remainder 2."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "if (false) A; else B; print?",
        "en": "if (false) A; else B; runs?"
      },
      "choices": {
        "nl": [
          "A",
          "B",
          "beide",
          "geen"
        ],
        "en": [
          "A",
          "B",
          "both",
          "neither"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "else-pad.",
        "en": "else path."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "&& stopt vroeg als links false?",
        "en": "&& short-circuits when left is false?"
      },
      "choices": {
        "nl": [
          "ja",
          "nee",
          "alleen in loops",
          "alleen met ints"
        ],
        "en": [
          "yes",
          "no",
          "only in loops",
          "only with ints"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Short-circuit: rechts wordt niet geëvalueerd.",
        "en": "Right side is skipped."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "switch zonder break: fall-through?",
        "en": "switch without break: fall-through?"
      },
      "choices": {
        "nl": [
          "ja",
          "nee",
          "alleen default",
          "compile error altijd"
        ],
        "en": [
          "yes",
          "no",
          "only default",
          "always compile error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Ja, tot break/return.",
        "en": "Yes, until break/return."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "for i=0;i<3;i++ hoeveel?",
        "en": "for i=0;i<3;i++ how many?"
      },
      "choices": {
        "nl": [
          "2",
          "3",
          "4",
          "1"
        ],
        "en": [
          "2",
          "3",
          "4",
          "1"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "0,1,2.",
        "en": "0,1,2."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "int i=1; Console.Write(i++); print?",
        "en": "int i=1; Console.Write(i++); prints?"
      },
      "choices": {
        "nl": [
          "1",
          "2",
          "0",
          "error"
        ],
        "en": [
          "1",
          "2",
          "0",
          "error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Postfix geeft oude waarde.",
        "en": "Postfix yields old value."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "int i=1; Console.Write(++i); print?",
        "en": "int i=1; Console.Write(++i); prints?"
      },
      "choices": {
        "nl": [
          "1",
          "2",
          "0",
          "error"
        ],
        "en": [
          "1",
          "2",
          "0",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Prefix verhoogt eerst.",
        "en": "Prefix increments first."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "int[] a={5,6}; a[0]?",
        "en": "int[] a={5,6}; a[0]?"
      },
      "choices": {
        "nl": [
          "5",
          "6",
          "2",
          "error"
        ],
        "en": [
          "5",
          "6",
          "2",
          "error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Eerste element.",
        "en": "First element."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "new int[4].Length?",
        "en": "new int[4].Length?"
      },
      "choices": {
        "nl": [
          "3",
          "4",
          "0",
          "null"
        ],
        "en": [
          "3",
          "4",
          "0",
          "null"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Lengte 4.",
        "en": "Length 4."
      }
    },
    {
      "id": 16,
      "q": {
        "nl": "a[a.Length] op {1,2}?",
        "en": "a[a.Length] on {1,2}?"
      },
      "choices": {
        "nl": [
          "2",
          "1",
          "exception",
          "0"
        ],
        "en": [
          "2",
          "1",
          "exception",
          "0"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Index 2 bestaat niet.",
        "en": "Index 2 is out of range."
      }
    },
    {
      "id": 17,
      "q": {
        "nl": "void M() betekent?",
        "en": "void M() means?"
      },
      "choices": {
        "nl": [
          "return 0",
          "geen return waarde",
          "private",
          "static"
        ],
        "en": [
          "return 0",
          "no return value",
          "private",
          "static"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "void = niets terug.",
        "en": "void returns nothing."
      }
    },
    {
      "id": 18,
      "q": {
        "nl": "return in int-method verplicht pad?",
        "en": "return required on int method paths?"
      },
      "choices": {
        "nl": [
          "nee",
          "ja (elke route een waarde)",
          "alleen bij errors",
          "alleen recursive"
        ],
        "en": [
          "no",
          "yes (every path a value)",
          "only on errors",
          "only recursive"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Alle paden moeten een int teruggeven.",
        "en": "All paths must return an int."
      }
    },
    {
      "id": 19,
      "q": {
        "nl": "try/catch vangt?",
        "en": "try/catch catches?"
      },
      "choices": {
        "nl": [
          "alleen syntax errors",
          "runtime exceptions",
          "compiler warnings",
          "CSS bugs"
        ],
        "en": [
          "only syntax errors",
          "runtime exceptions",
          "compiler warnings",
          "CSS bugs"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Runtime exceptions.",
        "en": "Runtime exceptions."
      }
    },
    {
      "id": 20,
      "q": {
        "nl": "finally runt ook bij succes?",
        "en": "finally also runs on success?"
      },
      "choices": {
        "nl": [
          "ja",
          "nee",
          "alleen in Main",
          "alleen met throw"
        ],
        "en": [
          "yes",
          "no",
          "only in Main",
          "only with throw"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Bijna altijd.",
        "en": "Almost always."
      }
    },
    {
      "id": 21,
      "q": {
        "nl": "int.Parse(\"12\") =>",
        "en": "int.Parse(\"12\") =>"
      },
      "choices": {
        "nl": [
          "\"12\"",
          "12",
          "1.2",
          "error"
        ],
        "en": [
          "\"12\"",
          "12",
          "1.2",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Parsed int.",
        "en": "Parsed int."
      }
    },
    {
      "id": 22,
      "q": {
        "nl": "bool flag = 1; ?",
        "en": "bool flag = 1; ?"
      },
      "choices": {
        "nl": [
          "true",
          "compile error in C#",
          "false",
          "1"
        ],
        "en": [
          "true",
          "compile error in C#",
          "false",
          "1"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Geen impliciete int-naar-bool.",
        "en": "No implicit int-to-bool."
      }
    },
    {
      "id": 23,
      "q": {
        "nl": "char c = \"A\"; ?",
        "en": "char c = \"A\"; ?"
      },
      "choices": {
        "nl": [
          "ok",
          "compile error (gebruik 'A')",
          "wordt string",
          "null"
        ],
        "en": [
          "ok",
          "compile error (use 'A')",
          "becomes string",
          "null"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "char gebruikt enkele quotes.",
        "en": "char uses single quotes."
      }
    },
    {
      "id": 24,
      "q": {
        "nl": "string s=null; s.Length ?",
        "en": "string s=null; s.Length ?"
      },
      "choices": {
        "nl": [
          "0",
          "NullReferenceException",
          "\"null\"",
          "compile error altijd"
        ],
        "en": [
          "0",
          "NullReferenceException",
          "\"null\"",
          "always compile error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Null dereference.",
        "en": "Null dereference."
      }
    },
    {
      "id": 25,
      "q": {
        "nl": "|| is true als één kant true?",
        "en": "|| is true if one side is true?"
      },
      "choices": {
        "nl": [
          "ja",
          "nee",
          "alleen links",
          "alleen rechts"
        ],
        "en": [
          "yes",
          "no",
          "only left",
          "only right"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Logische OR.",
        "en": "Logical OR."
      }
    },
    {
      "id": 26,
      "q": {
        "nl": "foreach (var x in arr)",
        "en": "foreach (var x in arr)"
      },
      "choices": {
        "nl": [
          "nodig index",
          "loopt elementen",
          "werkt nooit op arrays",
          "zelfde als switch"
        ],
        "en": [
          "needs index",
          "walks elements",
          "never works on arrays",
          "same as switch"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Itereert over elementen.",
        "en": "Iterates elements."
      }
    },
    {
      "id": 27,
      "q": {
        "nl": "default in switch?",
        "en": "default in switch?"
      },
      "choices": {
        "nl": [
          "verplicht",
          "optioneel vangnet",
          "verboden",
          "alleen voor strings"
        ],
        "en": [
          "required",
          "optional catch-all",
          "forbidden",
          "strings only"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Optioneel.",
        "en": "Optional."
      }
    },
    {
      "id": 28,
      "q": {
        "nl": "7 / 2.0 print ongeveer?",
        "en": "7 / 2.0 prints about?"
      },
      "choices": {
        "nl": [
          "3",
          "3.5",
          "4",
          "error"
        ],
        "en": [
          "3",
          "3.5",
          "4",
          "error"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Een kant is double.",
        "en": "One side is double."
      }
    },
    {
      "id": 29,
      "q": {
        "nl": "Doel van breakpoints?",
        "en": "Purpose of breakpoints?"
      },
      "choices": {
        "nl": [
          "snellere code",
          "pauzeren om state te bekijken",
          "strings trimmen",
          "arrays sorteren"
        ],
        "en": [
          "faster code",
          "pause to inspect state",
          "trim strings",
          "sort arrays"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Debuggen.",
        "en": "Debugging."
      }
    },
    {
      "id": 30,
      "q": {
        "nl": "CodeCrib examen vragen zijn?",
        "en": "CodeCrib exam questions are?"
      },
      "choices": {
        "nl": [
          "gelekt van Microsoft",
          "origineel oefenmateriaal",
          "betaald certificaat",
          "Haxe compiler errors"
        ],
        "en": [
          "leaked from Microsoft",
          "original practice material",
          "a paid certificate",
          "Haxe compiler errors"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Altijd origineel.",
        "en": "Always original."
      }
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "WriteLine som",
        "en": "WriteLine sum"
      },
      "prompt": {
        "nl": "Schrijf C# die 2+3 zou printen. Code moet Console.WriteLine bevatten en 2+3 of 5.",
        "en": "Write C# that would print 2+3. Must include Console.WriteLine and 2+3 or 5."
      },
      "lang": "csharp",
      "starter": "using System;\nclass P {\n  static void Main() {\n    // print 5\n  }\n}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "Console.WriteLine"
        },
        {
          "type": "code_regex",
          "value": "2\\s*\\+\\s*3|WriteLine\\(5\\)"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "If klaar",
        "en": "If ready"
      },
      "prompt": {
        "nl": "Gebruik if en Console.WriteLine.",
        "en": "Use if and Console.WriteLine."
      },
      "lang": "csharp",
      "starter": "using System;\nclass P { static void Main() {\nint x=5;\n\n}}\n",
      "tests": [
        {
          "type": "code_contains",
          "value": "if"
        },
        {
          "type": "code_contains",
          "value": "Console.WriteLine"
        }
      ]
    }
  ]
};
})(window);
