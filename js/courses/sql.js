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
          "q": {
            "nl": "SQL is?",
            "en": "SQL is?"
          },
          "choices": {
            "nl": [
              "alleen UI CSS",
              "querytaal voor data",
              "game engine",
              "CPU asm"
            ],
            "en": [
              "UI CSS only",
              "data query language",
              "game engine",
              "CPU asm"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Query.",
            "en": "Query."
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
              "mag niet null",
              "SQL comment",
              "index"
            ],
            "en": [
              "allows null",
              "disallows null",
              "SQL comment",
              "index"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Required.",
            "en": "Required."
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
              "equals",
              "not equal",
              "less greater concat",
              "join"
            ],
            "en": [
              "equals",
              "not equal",
              "less greater concat",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "!= style.",
            "en": "!= style."
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
              "aflopend",
              "delete",
              "join"
            ],
            "en": [
              "ascending",
              "descending",
              "delete",
              "join"
            ]
          },
          "answer": 1,
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
              "3 tabellen",
              "max 3 rijen",
              "3 joins",
              "error"
            ],
            "en": [
              "3 tables",
              "max 3 rows",
              "3 joins",
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
              "join conditie",
              "limit",
              "drop"
            ],
            "en": [
              "sort",
              "join condition",
              "limit",
              "drop"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Condition.",
            "en": "Condition."
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
              "array",
              "gemiddelde",
              "absolute",
              "append"
            ],
            "en": [
              "array",
              "average",
              "absolute",
              "append"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Average.",
            "en": "Average."
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
              "ok silent",
              "error/constraint fail",
              "CSS",
              "Lua"
            ],
            "en": [
              "ok silent",
              "error/constraint fail",
              "CSS",
              "Lua"
            ]
          },
          "answer": 1,
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
              "conflict/error",
              "auto merge",
              "CSS"
            ],
            "en": [
              "ok",
              "conflict/error",
              "auto merge",
              "CSS"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Conflict.",
            "en": "Conflict."
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
              "15",
              "5",
              "NULL"
            ],
            "en": [
              "10",
              "15",
              "5",
              "NULL"
            ]
          },
          "answer": 1,
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
              "1 rij",
              "kan alle rijen raken",
              "noop",
              "DROP"
            ],
            "en": [
              "1 row",
              "can touch all rows",
              "noop",
              "DROP"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Dangerous.",
            "en": "Dangerous."
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
              "aggregatie groepen",
              "Lua",
              "C"
            ],
            "en": [
              "CSS grid",
              "aggregation groups",
              "Lua",
              "C"
            ]
          },
          "answer": 1,
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
              "som",
              "aantal rijen",
              "max",
              "join"
            ],
            "en": [
              "sum",
              "row count",
              "max",
              "join"
            ]
          },
          "answer": 1,
          "why": {
            "nl": "Count.",
            "en": "Count."
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
          "select",
          "nieuwe rijen",
          "CSS",
          "Lua"
        ],
        "en": [
          "select",
          "new rows",
          "CSS",
          "Lua"
        ]
      },
      "answer": 1,
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
          "rijen weg",
          "CSS",
          "compile"
        ],
        "en": [
          "always drop table",
          "remove rows",
          "CSS",
          "compile"
        ]
      },
      "answer": 1,
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
          "delete 1 row",
          "verwijdert tabel",
          "UPDATE",
          "JOIN"
        ],
        "en": [
          "delete 1 row",
          "removes table",
          "UPDATE",
          "JOIN"
        ]
      },
      "answer": 1,
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
          "links behouden + matches",
          "DELETE",
          "DROP"
        ],
        "en": [
          "matches only",
          "keep left + matches",
          "DELETE",
          "DROP"
        ]
      },
      "answer": 1,
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
          "sneller zoeken",
          "CSS z-index only",
          "Godot"
        ],
        "en": [
          "book",
          "faster lookup",
          "CSS z-index only",
          "Godot"
        ]
      },
      "answer": 1,
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
          "meestal IS NULL gebruiken",
          "altijd true",
          "crash OS"
        ],
        "en": [
          "works like ''",
          "usually use IS NULL",
          "always true",
          "crash OS"
        ]
      },
      "answer": 1,
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
          "CSS",
          "groep statements atomair",
          "Lua pcall",
          "Rust mut"
        ],
        "en": [
          "CSS",
          "group statements atomically",
          "Lua pcall",
          "Rust mut"
        ]
      },
      "answer": 1,
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
          "bevestig transactie",
          "DROP",
          "JOIN"
        ],
        "en": [
          "undo",
          "confirm transaction",
          "DROP",
          "JOIN"
        ]
      },
      "answer": 1,
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
          "UI only",
          "opgeslagen query",
          "C array",
          "npm"
        ],
        "en": [
          "UI only",
          "stored query",
          "C array",
          "npm"
        ]
      },
      "answer": 1,
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
          "unieke waarden",
          "JOIN force",
          "DROP"
        ],
        "en": [
          "sort",
          "unique values",
          "JOIN force",
          "DROP"
        ]
      },
      "answer": 1,
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
          "bereikfilter",
          "CSS",
          "Lua"
        ],
        "en": [
          "loops",
          "range filter",
          "CSS",
          "Lua"
        ]
      },
      "answer": 1,
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
          "vendor leak",
          "origineel oefenen",
          "betaald",
          "cert"
        ],
        "en": [
          "vendor leak",
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
  ]
};
})(window);
