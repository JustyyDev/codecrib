(function (w) {
  w.CodeCribCourseData = w.CodeCribCourseData || {};
  w.CodeCribCourseData.sql = {
  "id": "sql",
  "title": {
    "nl": "SQL voor beginners",
    "en": "SQL for beginners"
  },
  "intro": {
    "nl": "SELECT, WHERE, JOIN, aggregates en constraints.",
    "en": "SELECT, WHERE, JOIN, aggregates and constraints."
  },
  "lessons": [
    {
      "id": 1,
      "title": {
        "nl": "Je eerste SQL",
        "en": "Your first SQL"
      },
      "body": {
        "nl": "<p>SQL vraagt data uit databases. Geen loops zoals in C#, wel sets.</p><pre>SELECT name FROM players;</pre>",
        "en": "<p>SQL queries data from databases. Not C#-style loops; think sets.</p><pre>SELECT name FROM players;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "print",
              "SELECT",
              "trace"
            ],
            "en": [
              "GET",
              "print",
              "SELECT",
              "trace"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "q": {
            "nl": "SQL is?",
            "en": "SQL is?"
          },
          "choices": {
            "nl": [
              "alleen UI CSS",
              "game engine",
              "querytaal voor data",
              "CPU asm"
            ],
            "en": [
              "UI CSS only",
              "game engine",
              "data query language",
              "CPU asm"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Query.",
            "en": "Query."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "aflopend",
              "oplopend",
              "delete",
              "join"
            ],
            "en": [
              "desc",
              "asc",
              "delete",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "avg",
              "aantal rijen",
              "max"
            ],
            "en": [
              "sum",
              "avg",
              "row count",
              "max"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "FORM->FROM",
              "ok",
              "* fout",
              "t fout"
            ],
            "en": [
              "FORM->FROM",
              "ok",
              "* wrong",
              "t wrong"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "rijen koppelen",
              "drop",
              "limit"
            ],
            "en": [
              "CSS",
              "link rows",
              "drop",
              "limit"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "kleur",
              "Lua",
              "unieke id",
              "comment"
            ],
            "en": [
              "color",
              "Lua",
              "unique id",
              "comment"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ],
            "en": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "LIMIT 5?",
            "en": "LIMIT 5?"
          },
          "choices": {
            "nl": [
              "max 5 rijen",
              "5 tabellen",
              "5 joins",
              "error"
            ],
            "en": [
              "max 5 rows",
              "5 tables",
              "5 joins",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        }
      ],
      "exercise": {
        "lang": "sql",
        "instructions": {
          "nl": "SELECT name FROM players;",
          "en": "SELECT name FROM players;"
        },
        "starter": "SELECT name FROM players;\n",
        "tests": [
          {
            "type": "contains",
            "value": "Justy"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": {
        "nl": "Tabellen en types",
        "en": "Tables and types"
      },
      "body": {
        "nl": "<pre>CREATE TABLE players (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  score INTEGER DEFAULT 0\n);</pre>",
        "en": "<pre>CREATE TABLE players (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  score INTEGER DEFAULT 0\n);</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "CSS",
              "unieke rij-id",
              "Lua local",
              "Rust mut"
            ],
            "en": [
              "CSS",
              "unique row id",
              "Lua local",
              "Rust mut"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "q": {
            "nl": "NOT NULL?",
            "en": "NOT NULL?"
          },
          "choices": {
            "nl": [
              "mag null",
              "SQL comment",
              "mag niet null",
              "index"
            ],
            "en": [
              "allows null",
              "SQL comment",
              "disallows null",
              "index"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Required.",
            "en": "Required."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ],
            "en": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "aflopend",
              "delete",
              "join"
            ],
            "en": [
              "asc",
              "desc",
              "delete",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "avg",
              "aantal rijen",
              "max"
            ],
            "en": [
              "sum",
              "avg",
              "row count",
              "max"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "FORM->FROM",
              "ok",
              "* fout",
              "t fout"
            ],
            "en": [
              "FORM->FROM",
              "ok",
              "* wrong",
              "t wrong"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "limit",
              "drop",
              "rijen koppelen"
            ],
            "en": [
              "CSS",
              "limit",
              "drop",
              "link rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "1",
              "crash",
              "use IS NULL"
            ],
            "en": [
              "true",
              "1",
              "crash",
              "use IS NULL"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "LIMIT 5?",
            "en": "LIMIT 5?"
          },
          "choices": {
            "nl": [
              "5 tabellen",
              "max 5 rijen",
              "5 joins",
              "error"
            ],
            "en": [
              "5 tables",
              "max 5 rows",
              "5 joins",
              "error"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": {
        "nl": "WHERE logica",
        "en": "WHERE logic"
      },
      "body": {
        "nl": "<pre>SELECT * FROM players\nWHERE score &gt;= 5 AND name &lt;&gt; '';</pre>",
        "en": "<pre>SELECT * FROM players\nWHERE score &gt;= 5 AND name &lt;&gt; '';</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "WHERE filtert?",
            "en": "WHERE filters?"
          },
          "choices": {
            "nl": [
              "kolommen maken",
              "rijen",
              "CSS",
              "CPU"
            ],
            "en": [
              "create columns",
              "rows",
              "CSS",
              "CPU"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Rows.",
            "en": "Rows."
          }
        },
        {
          "q": {
            "nl": "&lt;&gt; betekent?",
            "en": "&lt;&gt; means?"
          },
          "choices": {
            "nl": [
              "not equal",
              "equals",
              "less greater concat",
              "join"
            ],
            "en": [
              "not equal",
              "equals",
              "less greater concat",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "!= style.",
            "en": "!= style."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "trace",
              "print",
              "SELECT"
            ],
            "en": [
              "GET",
              "trace",
              "print",
              "SELECT"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "delete",
              "aflopend",
              "join"
            ],
            "en": [
              "asc",
              "delete",
              "desc",
              "join"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "aantal rijen",
              "avg",
              "max"
            ],
            "en": [
              "sum",
              "row count",
              "avg",
              "max"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "* fout",
              "FORM->FROM",
              "t fout"
            ],
            "en": [
              "ok",
              "* wrong",
              "FORM->FROM",
              "t wrong"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "limit",
              "drop",
              "rijen koppelen"
            ],
            "en": [
              "CSS",
              "limit",
              "drop",
              "link rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "unieke id",
              "kleur",
              "Lua",
              "comment"
            ],
            "en": [
              "unique id",
              "color",
              "Lua",
              "comment"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ],
            "en": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": {
        "nl": "ORDER BY en LIMIT",
        "en": "ORDER BY and LIMIT"
      },
      "body": {
        "nl": "<pre>SELECT name, score FROM players\nORDER BY score DESC\nLIMIT 3;</pre><p>Geen for-loop: je beschrijft het resultaat.</p>",
        "en": "<pre>SELECT name, score FROM players\nORDER BY score DESC\nLIMIT 3;</pre><p>No for-loop: you describe the result.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "delete",
              "aflopend",
              "join"
            ],
            "en": [
              "ascending",
              "delete",
              "descending",
              "join"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Desc.",
            "en": "Desc."
          }
        },
        {
          "q": {
            "nl": "LIMIT 3?",
            "en": "LIMIT 3?"
          },
          "choices": {
            "nl": [
              "max 3 rijen",
              "3 tabellen",
              "3 joins",
              "error"
            ],
            "en": [
              "max 3 rows",
              "3 tables",
              "3 joins",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "trace",
              "print",
              "SELECT"
            ],
            "en": [
              "GET",
              "trace",
              "print",
              "SELECT"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "aantal rijen",
              "som",
              "avg",
              "max"
            ],
            "en": [
              "row count",
              "sum",
              "avg",
              "max"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "* fout",
              "FORM->FROM",
              "t fout"
            ],
            "en": [
              "ok",
              "* wrong",
              "FORM->FROM",
              "t wrong"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "rijen koppelen",
              "CSS",
              "drop",
              "limit"
            ],
            "en": [
              "link rows",
              "CSS",
              "drop",
              "limit"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "kleur",
              "unieke id",
              "Lua",
              "comment"
            ],
            "en": [
              "color",
              "unique id",
              "Lua",
              "comment"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "1",
              "crash",
              "use IS NULL"
            ],
            "en": [
              "true",
              "1",
              "crash",
              "use IS NULL"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "LIMIT 5?",
            "en": "LIMIT 5?"
          },
          "choices": {
            "nl": [
              "5 tabellen",
              "error",
              "5 joins",
              "max 5 rijen"
            ],
            "en": [
              "5 tables",
              "error",
              "5 joins",
              "max 5 rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": {
        "nl": "JOIN smaak",
        "en": "JOIN flavor"
      },
      "body": {
        "nl": "<pre>SELECT p.name, i.title\nFROM players p\nJOIN items i ON i.owner_id = p.id;</pre>",
        "en": "<pre>SELECT p.name, i.title\nFROM players p\nJOIN items i ON i.owner_id = p.id;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "JOIN doet?",
            "en": "JOIN does?"
          },
          "choices": {
            "nl": [
              "CSS merge",
              "rijen koppelen",
              "compile C",
              "Lua end"
            ],
            "en": [
              "CSS merge",
              "link rows",
              "compile C",
              "Lua end"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "q": {
            "nl": "ON clausule?",
            "en": "ON clause?"
          },
          "choices": {
            "nl": [
              "sort",
              "limit",
              "join conditie",
              "drop"
            ],
            "en": [
              "sort",
              "limit",
              "join condition",
              "drop"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Condition.",
            "en": "Condition."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "print",
              "SELECT",
              "trace"
            ],
            "en": [
              "GET",
              "print",
              "SELECT",
              "trace"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "aflopend",
              "oplopend",
              "delete",
              "join"
            ],
            "en": [
              "desc",
              "asc",
              "delete",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "aantal rijen",
              "avg",
              "max"
            ],
            "en": [
              "sum",
              "row count",
              "avg",
              "max"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "t fout",
              "* fout",
              "FORM->FROM"
            ],
            "en": [
              "ok",
              "t wrong",
              "* wrong",
              "FORM->FROM"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "rijen koppelen",
              "CSS",
              "drop",
              "limit"
            ],
            "en": [
              "link rows",
              "CSS",
              "drop",
              "limit"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "kleur",
              "unieke id",
              "Lua",
              "comment"
            ],
            "en": [
              "color",
              "unique id",
              "Lua",
              "comment"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ],
            "en": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        }
      ]
    },
    {
      "id": 6,
      "title": {
        "nl": "Aggregates",
        "en": "Aggregates"
      },
      "body": {
        "nl": "<pre>SELECT COUNT(*), MAX(score), AVG(score)\nFROM players;</pre>",
        "en": "<pre>SELECT COUNT(*), MAX(score), AVG(score)\nFROM players;</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som scores",
              "aantal rijen",
              "max",
              "avg"
            ],
            "en": [
              "sum scores",
              "row count",
              "max",
              "avg"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "q": {
            "nl": "AVG?",
            "en": "AVG?"
          },
          "choices": {
            "nl": [
              "gemiddelde",
              "array",
              "absolute",
              "append"
            ],
            "en": [
              "average",
              "array",
              "absolute",
              "append"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Average.",
            "en": "Average."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ],
            "en": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "join",
              "delete",
              "aflopend"
            ],
            "en": [
              "asc",
              "join",
              "delete",
              "desc"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "t fout",
              "* fout",
              "FORM->FROM"
            ],
            "en": [
              "ok",
              "t wrong",
              "* wrong",
              "FORM->FROM"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "limit",
              "drop",
              "rijen koppelen"
            ],
            "en": [
              "CSS",
              "limit",
              "drop",
              "link rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "kleur",
              "unieke id",
              "Lua",
              "comment"
            ],
            "en": [
              "color",
              "unique id",
              "Lua",
              "comment"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "use IS NULL",
              "true",
              "crash",
              "1"
            ],
            "en": [
              "use IS NULL",
              "true",
              "crash",
              "1"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "LIMIT 5?",
            "en": "LIMIT 5?"
          },
          "choices": {
            "nl": [
              "5 tabellen",
              "error",
              "5 joins",
              "max 5 rijen"
            ],
            "en": [
              "5 tables",
              "error",
              "5 joins",
              "max 5 rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        }
      ]
    },
    {
      "id": 7,
      "title": {
        "nl": "Constraints en fouten",
        "en": "Constraints and errors"
      },
      "body": {
        "nl": "<pre>INSERT INTO players(id, name) VALUES (1, NULL);\n-- faalt door NOT NULL</pre><p>Constraints beschermen data.</p>",
        "en": "<pre>INSERT INTO players(id, name) VALUES (1, NULL);\n-- fails due to NOT NULL</pre><p>Constraints protect data.</p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "NOT NULL schending?",
            "en": "NOT NULL violation?"
          },
          "choices": {
            "nl": [
              "error/constraint fail",
              "ok silent",
              "CSS",
              "Lua"
            ],
            "en": [
              "error/constraint fail",
              "ok silent",
              "CSS",
              "Lua"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Fails.",
            "en": "Fails."
          }
        },
        {
          "q": {
            "nl": "UNIQUE dubbel?",
            "en": "UNIQUE duplicate?"
          },
          "choices": {
            "nl": [
              "ok",
              "CSS",
              "auto merge",
              "conflict/error"
            ],
            "en": [
              "ok",
              "CSS",
              "auto merge",
              "conflict/error"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Conflict.",
            "en": "Conflict."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "SELECT",
              "GET",
              "print",
              "trace"
            ],
            "en": [
              "SELECT",
              "GET",
              "print",
              "trace"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "aflopend",
              "delete",
              "join"
            ],
            "en": [
              "asc",
              "desc",
              "delete",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "aantal rijen",
              "avg",
              "max"
            ],
            "en": [
              "sum",
              "row count",
              "avg",
              "max"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "FORM->FROM",
              "* fout",
              "t fout"
            ],
            "en": [
              "ok",
              "FORM->FROM",
              "* wrong",
              "t wrong"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "limit",
              "drop",
              "rijen koppelen"
            ],
            "en": [
              "CSS",
              "limit",
              "drop",
              "link rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "unieke id",
              "kleur",
              "Lua",
              "comment"
            ],
            "en": [
              "unique id",
              "color",
              "Lua",
              "comment"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "use IS NULL",
              "crash",
              "1"
            ],
            "en": [
              "true",
              "use IS NULL",
              "crash",
              "1"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        }
      ]
    },
    {
      "id": 8,
      "title": {
        "nl": "Mini project: players table",
        "en": "Mini project: players table"
      },
      "body": {
        "nl": "<pre>INSERT INTO players(name, score) VALUES ('Justy', 10);\nUPDATE players SET score = score + 5 WHERE name = 'Justy';\nSELECT score FROM players WHERE name = 'Justy';</pre>",
        "en": "<pre>INSERT INTO players(name, score) VALUES ('Justy', 10);\nUPDATE players SET score = score + 5 WHERE name = 'Justy';\nSELECT score FROM players WHERE name = 'Justy';</pre>"
      },
      "quiz": [
        {
          "q": {
            "nl": "Na +5 score?",
            "en": "Score after +5?"
          },
          "choices": {
            "nl": [
              "10",
              "5",
              "15",
              "NULL"
            ],
            "en": [
              "10",
              "5",
              "15",
              "NULL"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "15.",
            "en": "15."
          }
        },
        {
          "q": {
            "nl": "UPDATE zonder WHERE?",
            "en": "UPDATE without WHERE?"
          },
          "choices": {
            "nl": [
              "kan alle rijen raken",
              "1 rij",
              "noop",
              "DROP"
            ],
            "en": [
              "can touch all rows",
              "1 row",
              "noop",
              "DROP"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Dangerous.",
            "en": "Dangerous."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "SELECT",
              "GET",
              "print",
              "trace"
            ],
            "en": [
              "SELECT",
              "GET",
              "print",
              "trace"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "aflopend",
              "oplopend",
              "delete",
              "join"
            ],
            "en": [
              "desc",
              "asc",
              "delete",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "som",
              "aantal rijen",
              "avg",
              "max"
            ],
            "en": [
              "sum",
              "row count",
              "avg",
              "max"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "FORM->FROM",
              "* fout",
              "t fout"
            ],
            "en": [
              "ok",
              "FORM->FROM",
              "* wrong",
              "t wrong"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "CSS",
              "limit",
              "drop",
              "rijen koppelen"
            ],
            "en": [
              "CSS",
              "limit",
              "drop",
              "link rows"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "unieke id",
              "kleur",
              "Lua",
              "comment"
            ],
            "en": [
              "unique id",
              "color",
              "Lua",
              "comment"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ],
            "en": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        }
      ]
    },
    {
      "id": 9,
      "title": {
        "nl": "GROUP BY tip",
        "en": "GROUP BY tip"
      },
      "body": {
        "nl": "<p><code class=\"inline\">SELECT name, COUNT(*) FROM players GROUP BY name;</code></p>",
        "en": "<p><code class=\"inline\">SELECT name, COUNT(*) FROM players GROUP BY name;</code></p>"
      },
      "quiz": [
        {
          "q": {
            "nl": "GROUP BY?",
            "en": "GROUP BY?"
          },
          "choices": {
            "nl": [
              "CSS grid",
              "Lua",
              "aggregatie groepen",
              "C"
            ],
            "en": [
              "CSS grid",
              "Lua",
              "aggregation groups",
              "C"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "Group.",
            "en": "Group."
          }
        },
        {
          "q": {
            "nl": "COUNT(*)?",
            "en": "COUNT(*)?"
          },
          "choices": {
            "nl": [
              "aantal rijen",
              "som",
              "max",
              "join"
            ],
            "en": [
              "row count",
              "sum",
              "max",
              "join"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Count.",
            "en": "Count."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "Data ophalen?",
            "en": "Fetch data?"
          },
          "choices": {
            "nl": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ],
            "en": [
              "GET",
              "SELECT",
              "print",
              "trace"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "SELECT.",
            "en": "SELECT."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Filter clausule?",
            "en": "Filter clause?"
          },
          "fill": [
            "WHERE"
          ],
          "why": {
            "nl": "WHERE.",
            "en": "WHERE."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "ORDER BY DESC?",
            "en": "ORDER BY DESC?"
          },
          "choices": {
            "nl": [
              "oplopend",
              "aflopend",
              "delete",
              "join"
            ],
            "en": [
              "asc",
              "desc",
              "delete",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Descending.",
            "en": "Descending."
          }
        },
        {
          "type": "bug",
          "q": {
            "nl": "Spot: SELECT * FORM t",
            "en": "Spot: SELECT * FORM t"
          },
          "choices": {
            "nl": [
              "ok",
              "t fout",
              "* fout",
              "FORM->FROM"
            ],
            "en": [
              "ok",
              "t wrong",
              "* wrong",
              "FORM->FROM"
            ]
          },
          "answer": 3,
          "why": {
            "nl": "FROM.",
            "en": "FROM."
          },
          "code": "SELECT * FORM t;"
        },
        {
          "type": "fill",
          "q": {
            "nl": "Nieuwe rijen?",
            "en": "New rows?"
          },
          "fill": [
            "INSERT"
          ],
          "why": {
            "nl": "INSERT.",
            "en": "INSERT."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "JOIN?",
            "en": "JOIN?"
          },
          "choices": {
            "nl": [
              "rijen koppelen",
              "CSS",
              "drop",
              "limit"
            ],
            "en": [
              "link rows",
              "CSS",
              "drop",
              "limit"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Join.",
            "en": "Join."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "PRIMARY KEY?",
            "en": "PRIMARY KEY?"
          },
          "choices": {
            "nl": [
              "kleur",
              "Lua",
              "unieke id",
              "comment"
            ],
            "en": [
              "color",
              "Lua",
              "unique id",
              "comment"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "PK.",
            "en": "PK."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "NULL = NULL?",
            "en": "NULL = NULL?"
          },
          "choices": {
            "nl": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ],
            "en": [
              "true",
              "crash",
              "use IS NULL",
              "1"
            ]
          },
          "answer": 2,
          "why": {
            "nl": "IS NULL.",
            "en": "IS NULL."
          }
        },
        {
          "type": "fill",
          "q": {
            "nl": "Gemiddelde aggregate?",
            "en": "Average aggregate?"
          },
          "fill": [
            "AVG"
          ],
          "why": {
            "nl": "AVG.",
            "en": "AVG."
          }
        },
        {
          "type": "mc",
          "q": {
            "nl": "LIMIT 5?",
            "en": "LIMIT 5?"
          },
          "choices": {
            "nl": [
              "max 5 rijen",
              "5 tabellen",
              "5 joins",
              "error"
            ],
            "en": [
              "max 5 rows",
              "5 tables",
              "5 joins",
              "error"
            ]
          },
          "answer": 0,
          "why": {
            "nl": "Limit.",
            "en": "Limit."
          }
        }
      ]
    }
  ],
  "exam": [
    {
      "id": 1,
      "q": {
        "nl": "INSERT",
        "en": "INSERT"
      },
      "choices": {
        "nl": [
          "nieuwe rijen",
          "select",
          "CSS",
          "Lua"
        ],
        "en": [
          "new rows",
          "select",
          "CSS",
          "Lua"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Insert.",
        "en": "Insert."
      }
    },
    {
      "id": 2,
      "q": {
        "nl": "DELETE",
        "en": "DELETE"
      },
      "choices": {
        "nl": [
          "drop table always",
          "CSS",
          "rijen weg",
          "compile"
        ],
        "en": [
          "always drop table",
          "CSS",
          "remove rows",
          "compile"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Delete.",
        "en": "Delete."
      }
    },
    {
      "id": 3,
      "q": {
        "nl": "DROP TABLE",
        "en": "DROP TABLE"
      },
      "choices": {
        "nl": [
          "verwijdert tabel",
          "delete 1 row",
          "UPDATE",
          "JOIN"
        ],
        "en": [
          "removes table",
          "delete 1 row",
          "UPDATE",
          "JOIN"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Drop.",
        "en": "Drop."
      }
    },
    {
      "id": 4,
      "q": {
        "nl": "GROUP BY",
        "en": "GROUP BY"
      },
      "choices": {
        "nl": [
          "CSS grid",
          "aggregatie groepen",
          "Lua end",
          "Rust"
        ],
        "en": [
          "CSS grid",
          "aggregation groups",
          "Lua end",
          "Rust"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Group.",
        "en": "Group."
      }
    },
    {
      "id": 5,
      "q": {
        "nl": "HAVING",
        "en": "HAVING"
      },
      "choices": {
        "nl": [
          "WHERE op aggregates",
          "zelfde als FROM",
          "CSS",
          "pip"
        ],
        "en": [
          "WHERE on aggregates",
          "same as FROM",
          "CSS",
          "pip"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Having.",
        "en": "Having."
      }
    },
    {
      "id": 6,
      "q": {
        "nl": "LEFT JOIN",
        "en": "LEFT JOIN"
      },
      "choices": {
        "nl": [
          "alleen matches",
          "DELETE",
          "links behouden + matches",
          "DROP"
        ],
        "en": [
          "matches only",
          "DELETE",
          "keep left + matches",
          "DROP"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Left.",
        "en": "Left."
      }
    },
    {
      "id": 7,
      "q": {
        "nl": "INDEX",
        "en": "INDEX"
      },
      "choices": {
        "nl": [
          "boek",
          "CSS z-index only",
          "sneller zoeken",
          "Godot"
        ],
        "en": [
          "book",
          "CSS z-index only",
          "faster lookup",
          "Godot"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Index.",
        "en": "Index."
      }
    },
    {
      "id": 8,
      "q": {
        "nl": "NULL in =",
        "en": "NULL with ="
      },
      "choices": {
        "nl": [
          "werkt als '' ",
          "altijd true",
          "meestal IS NULL gebruiken",
          "crash OS"
        ],
        "en": [
          "works like ''",
          "always true",
          "usually use IS NULL",
          "crash OS"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "IS NULL.",
        "en": "IS NULL."
      }
    },
    {
      "id": 9,
      "q": {
        "nl": "TRANSACTION",
        "en": "TRANSACTION"
      },
      "choices": {
        "nl": [
          "groep statements atomair",
          "CSS",
          "Lua pcall",
          "Rust mut"
        ],
        "en": [
          "group statements atomically",
          "CSS",
          "Lua pcall",
          "Rust mut"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Tx.",
        "en": "Tx."
      }
    },
    {
      "id": 10,
      "q": {
        "nl": "COMMIT",
        "en": "COMMIT"
      },
      "choices": {
        "nl": [
          "undo",
          "DROP",
          "bevestig transactie",
          "JOIN"
        ],
        "en": [
          "undo",
          "DROP",
          "confirm transaction",
          "JOIN"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Commit.",
        "en": "Commit."
      }
    },
    {
      "id": 11,
      "q": {
        "nl": "ROLLBACK",
        "en": "ROLLBACK"
      },
      "choices": {
        "nl": [
          "save",
          "maak tx ongedaan",
          "SELECT",
          "LIMIT"
        ],
        "en": [
          "save",
          "undo tx",
          "SELECT",
          "LIMIT"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Rollback.",
        "en": "Rollback."
      }
    },
    {
      "id": 12,
      "q": {
        "nl": "VIEW",
        "en": "VIEW"
      },
      "choices": {
        "nl": [
          "opgeslagen query",
          "UI only",
          "C array",
          "npm"
        ],
        "en": [
          "stored query",
          "UI only",
          "C array",
          "npm"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "View.",
        "en": "View."
      }
    },
    {
      "id": 13,
      "q": {
        "nl": "DISTINCT",
        "en": "DISTINCT"
      },
      "choices": {
        "nl": [
          "sort",
          "JOIN force",
          "unieke waarden",
          "DROP"
        ],
        "en": [
          "sort",
          "JOIN force",
          "unique values",
          "DROP"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Distinct.",
        "en": "Distinct."
      }
    },
    {
      "id": 14,
      "q": {
        "nl": "BETWEEN",
        "en": "BETWEEN"
      },
      "choices": {
        "nl": [
          "loops",
          "CSS",
          "bereikfilter",
          "Lua"
        ],
        "en": [
          "loops",
          "CSS",
          "range filter",
          "Lua"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Between.",
        "en": "Between."
      }
    },
    {
      "id": 15,
      "q": {
        "nl": "CodeCrib SQL",
        "en": "CodeCrib SQL"
      },
      "choices": {
        "nl": [
          "origineel oefenen",
          "vendor leak",
          "betaald",
          "cert"
        ],
        "en": [
          "original practice",
          "vendor leak",
          "paid",
          "cert"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Origineel.",
        "en": "Original."
      }
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 1] Data ophalen?",
        "en": "[Pool 1] Fetch data?"
      },
      "choices": {
        "nl": [
          "GET",
          "SELECT",
          "print",
          "trace"
        ],
        "en": [
          "GET",
          "SELECT",
          "print",
          "trace"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "SELECT.",
        "en": "SELECT."
      },
      "id": 16
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 2] Filter clausule?",
        "en": "[Pool 2] Filter clause?"
      },
      "fill": [
        "WHERE"
      ],
      "why": {
        "nl": "WHERE.",
        "en": "WHERE."
      },
      "id": 17
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 3] ORDER BY DESC?",
        "en": "[Pool 3] ORDER BY DESC?"
      },
      "choices": {
        "nl": [
          "aflopend",
          "oplopend",
          "delete",
          "join"
        ],
        "en": [
          "desc",
          "asc",
          "delete",
          "join"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Descending.",
        "en": "Descending."
      },
      "id": 18
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 4] COUNT(*)?",
        "en": "[Pool 4] COUNT(*)?"
      },
      "choices": {
        "nl": [
          "som",
          "max",
          "avg",
          "aantal rijen"
        ],
        "en": [
          "sum",
          "max",
          "avg",
          "row count"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Count.",
        "en": "Count."
      },
      "id": 19
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 5] Spot: SELECT * FORM t",
        "en": "[Pool 5] Spot: SELECT * FORM t"
      },
      "choices": {
        "nl": [
          "ok",
          "t fout",
          "* fout",
          "FORM->FROM"
        ],
        "en": [
          "ok",
          "t wrong",
          "* wrong",
          "FORM->FROM"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "FROM.",
        "en": "FROM."
      },
      "code": "SELECT * FORM t;",
      "id": 20
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 6] Nieuwe rijen?",
        "en": "[Pool 6] New rows?"
      },
      "fill": [
        "INSERT"
      ],
      "why": {
        "nl": "INSERT.",
        "en": "INSERT."
      },
      "id": 21
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 7] JOIN?",
        "en": "[Pool 7] JOIN?"
      },
      "choices": {
        "nl": [
          "CSS",
          "drop",
          "rijen koppelen",
          "limit"
        ],
        "en": [
          "CSS",
          "drop",
          "link rows",
          "limit"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Join.",
        "en": "Join."
      },
      "id": 22
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 8] PRIMARY KEY?",
        "en": "[Pool 8] PRIMARY KEY?"
      },
      "choices": {
        "nl": [
          "kleur",
          "Lua",
          "unieke id",
          "comment"
        ],
        "en": [
          "color",
          "Lua",
          "unique id",
          "comment"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "PK.",
        "en": "PK."
      },
      "id": 23
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 9] NULL = NULL?",
        "en": "[Pool 9] NULL = NULL?"
      },
      "choices": {
        "nl": [
          "true",
          "1",
          "crash",
          "use IS NULL"
        ],
        "en": [
          "true",
          "1",
          "crash",
          "use IS NULL"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "IS NULL.",
        "en": "IS NULL."
      },
      "id": 24
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 10] Gemiddelde aggregate?",
        "en": "[Pool 10] Average aggregate?"
      },
      "fill": [
        "AVG"
      ],
      "why": {
        "nl": "AVG.",
        "en": "AVG."
      },
      "id": 25
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 11] LIMIT 5?",
        "en": "[Pool 11] LIMIT 5?"
      },
      "choices": {
        "nl": [
          "max 5 rijen",
          "5 tabellen",
          "5 joins",
          "error"
        ],
        "en": [
          "max 5 rows",
          "5 tables",
          "5 joins",
          "error"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Limit.",
        "en": "Limit."
      },
      "id": 26
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 12] DELETE zonder WHERE?",
        "en": "[Pool 12] DELETE without WHERE?"
      },
      "choices": {
        "nl": [
          "1 rij",
          "always error",
          "noop",
          "kan alles"
        ],
        "en": [
          "1 row",
          "always error",
          "noop",
          "can delete all"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Dangerous.",
        "en": "Dangerous."
      },
      "id": 27
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 13] GROUP BY?",
        "en": "[Pool 13] GROUP BY?"
      },
      "choices": {
        "nl": [
          "CSS",
          "C",
          "Lua",
          "aggregatie groepen"
        ],
        "en": [
          "CSS",
          "C",
          "Lua",
          "aggregation groups"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Group.",
        "en": "Group."
      },
      "id": 28
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 14] Update keyword?",
        "en": "[Pool 14] Update keyword?"
      },
      "fill": [
        "UPDATE"
      ],
      "why": {
        "nl": "UPDATE.",
        "en": "UPDATE."
      },
      "id": 29
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 15] Data ophalen?",
        "en": "[Pool 15] Fetch data?"
      },
      "choices": {
        "nl": [
          "GET",
          "trace",
          "print",
          "SELECT"
        ],
        "en": [
          "GET",
          "trace",
          "print",
          "SELECT"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "SELECT.",
        "en": "SELECT."
      },
      "id": 30
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 16] Filter clausule?",
        "en": "[Pool 16] Filter clause?"
      },
      "fill": [
        "WHERE"
      ],
      "why": {
        "nl": "WHERE.",
        "en": "WHERE."
      },
      "id": 31
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 17] ORDER BY DESC?",
        "en": "[Pool 17] ORDER BY DESC?"
      },
      "choices": {
        "nl": [
          "oplopend",
          "join",
          "delete",
          "aflopend"
        ],
        "en": [
          "asc",
          "join",
          "delete",
          "desc"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Descending.",
        "en": "Descending."
      },
      "id": 32
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 18] COUNT(*)?",
        "en": "[Pool 18] COUNT(*)?"
      },
      "choices": {
        "nl": [
          "aantal rijen",
          "som",
          "avg",
          "max"
        ],
        "en": [
          "row count",
          "sum",
          "avg",
          "max"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "Count.",
        "en": "Count."
      },
      "id": 33
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 19] Spot: SELECT * FORM t",
        "en": "[Pool 19] Spot: SELECT * FORM t"
      },
      "choices": {
        "nl": [
          "FORM->FROM",
          "ok",
          "* fout",
          "t fout"
        ],
        "en": [
          "FORM->FROM",
          "ok",
          "* wrong",
          "t wrong"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "FROM.",
        "en": "FROM."
      },
      "code": "SELECT * FORM t;",
      "id": 34
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 20] Nieuwe rijen?",
        "en": "[Pool 20] New rows?"
      },
      "fill": [
        "INSERT"
      ],
      "why": {
        "nl": "INSERT.",
        "en": "INSERT."
      },
      "id": 35
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 21] JOIN?",
        "en": "[Pool 21] JOIN?"
      },
      "choices": {
        "nl": [
          "CSS",
          "drop",
          "rijen koppelen",
          "limit"
        ],
        "en": [
          "CSS",
          "drop",
          "link rows",
          "limit"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Join.",
        "en": "Join."
      },
      "id": 36
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 22] PRIMARY KEY?",
        "en": "[Pool 22] PRIMARY KEY?"
      },
      "choices": {
        "nl": [
          "unieke id",
          "kleur",
          "Lua",
          "comment"
        ],
        "en": [
          "unique id",
          "color",
          "Lua",
          "comment"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "PK.",
        "en": "PK."
      },
      "id": 37
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 23] NULL = NULL?",
        "en": "[Pool 23] NULL = NULL?"
      },
      "choices": {
        "nl": [
          "use IS NULL",
          "true",
          "crash",
          "1"
        ],
        "en": [
          "use IS NULL",
          "true",
          "crash",
          "1"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "IS NULL.",
        "en": "IS NULL."
      },
      "id": 38
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 24] Gemiddelde aggregate?",
        "en": "[Pool 24] Average aggregate?"
      },
      "fill": [
        "AVG"
      ],
      "why": {
        "nl": "AVG.",
        "en": "AVG."
      },
      "id": 39
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 25] LIMIT 5?",
        "en": "[Pool 25] LIMIT 5?"
      },
      "choices": {
        "nl": [
          "5 tabellen",
          "error",
          "5 joins",
          "max 5 rijen"
        ],
        "en": [
          "5 tables",
          "error",
          "5 joins",
          "max 5 rows"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Limit.",
        "en": "Limit."
      },
      "id": 40
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 26] DELETE zonder WHERE?",
        "en": "[Pool 26] DELETE without WHERE?"
      },
      "choices": {
        "nl": [
          "1 rij",
          "noop",
          "kan alles",
          "always error"
        ],
        "en": [
          "1 row",
          "noop",
          "can delete all",
          "always error"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Dangerous.",
        "en": "Dangerous."
      },
      "id": 41
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 27] GROUP BY?",
        "en": "[Pool 27] GROUP BY?"
      },
      "choices": {
        "nl": [
          "CSS",
          "aggregatie groepen",
          "Lua",
          "C"
        ],
        "en": [
          "CSS",
          "aggregation groups",
          "Lua",
          "C"
        ]
      },
      "answer": 1,
      "why": {
        "nl": "Group.",
        "en": "Group."
      },
      "id": 42
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 28] Update keyword?",
        "en": "[Pool 28] Update keyword?"
      },
      "fill": [
        "UPDATE"
      ],
      "why": {
        "nl": "UPDATE.",
        "en": "UPDATE."
      },
      "id": 43
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 29] Data ophalen?",
        "en": "[Pool 29] Fetch data?"
      },
      "choices": {
        "nl": [
          "SELECT",
          "GET",
          "print",
          "trace"
        ],
        "en": [
          "SELECT",
          "GET",
          "print",
          "trace"
        ]
      },
      "answer": 0,
      "why": {
        "nl": "SELECT.",
        "en": "SELECT."
      },
      "id": 44
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 30] Filter clausule?",
        "en": "[Pool 30] Filter clause?"
      },
      "fill": [
        "WHERE"
      ],
      "why": {
        "nl": "WHERE.",
        "en": "WHERE."
      },
      "id": 45
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 31] ORDER BY DESC?",
        "en": "[Pool 31] ORDER BY DESC?"
      },
      "choices": {
        "nl": [
          "oplopend",
          "delete",
          "aflopend",
          "join"
        ],
        "en": [
          "asc",
          "delete",
          "desc",
          "join"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Descending.",
        "en": "Descending."
      },
      "id": 46
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 32] COUNT(*)?",
        "en": "[Pool 32] COUNT(*)?"
      },
      "choices": {
        "nl": [
          "som",
          "avg",
          "aantal rijen",
          "max"
        ],
        "en": [
          "sum",
          "avg",
          "row count",
          "max"
        ]
      },
      "answer": 2,
      "why": {
        "nl": "Count.",
        "en": "Count."
      },
      "id": 47
    },
    {
      "type": "bug",
      "q": {
        "nl": "[Pool 33] Spot: SELECT * FORM t",
        "en": "[Pool 33] Spot: SELECT * FORM t"
      },
      "choices": {
        "nl": [
          "ok",
          "t fout",
          "* fout",
          "FORM->FROM"
        ],
        "en": [
          "ok",
          "t wrong",
          "* wrong",
          "FORM->FROM"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "FROM.",
        "en": "FROM."
      },
      "code": "SELECT * FORM t;",
      "id": 48
    },
    {
      "type": "fill",
      "q": {
        "nl": "[Pool 34] Nieuwe rijen?",
        "en": "[Pool 34] New rows?"
      },
      "fill": [
        "INSERT"
      ],
      "why": {
        "nl": "INSERT.",
        "en": "INSERT."
      },
      "id": 49
    },
    {
      "type": "mc",
      "q": {
        "nl": "[Pool 35] JOIN?",
        "en": "[Pool 35] JOIN?"
      },
      "choices": {
        "nl": [
          "CSS",
          "limit",
          "drop",
          "rijen koppelen"
        ],
        "en": [
          "CSS",
          "limit",
          "drop",
          "link rows"
        ]
      },
      "answer": 3,
      "why": {
        "nl": "Join.",
        "en": "Join."
      },
      "id": 50
    }
  ],
  "challenges": [
    {
      "id": "c1",
      "title": {
        "nl": "Select names",
        "en": "Select names"
      },
      "prompt": {
        "nl": "SELECT name FROM players ORDER BY name;",
        "en": "SELECT name FROM players ORDER BY name;"
      },
      "lang": "sql",
      "starter": "-- sample table players(id,name,score) is preloaded\n",
      "tests": [
        {
          "type": "contains",
          "value": "Justy"
        },
        {
          "type": "contains",
          "value": "Luke"
        },
        {
          "type": "contains",
          "value": "Nena"
        }
      ]
    },
    {
      "id": "c2",
      "title": {
        "nl": "High scores",
        "en": "High scores"
      },
      "prompt": {
        "nl": "Select name van players met score >= 10.",
        "en": "Select name of players with score >= 10."
      },
      "lang": "sql",
      "starter": "SELECT name FROM players WHERE score >= 10;\n",
      "tests": [
        {
          "type": "contains",
          "value": "Justy"
        },
        {
          "type": "contains",
          "value": "Nena"
        }
      ]
    }
  ],
  "examDraw": 25
};
})(window);
