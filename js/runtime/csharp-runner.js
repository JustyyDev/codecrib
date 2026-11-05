(function (w) {
  const LABEL = "C# (CodeCrib runner)";
  function err(msg, line) { const e = new Error(msg); e.line = line; e.isCompile = true; return e; }
  function ex(name, msg) { const e = new Error(msg || name); e.exName = name; return e; }

  function extractBody(src) {
    let code = String(src || "").replace(/^\uFEFF/, "");
    code = code.replace(/^\s*using\s+[\w.]+;\s*$/gm, "");
    const idx = code.search(/static\s+void\s+Main\s*\([^)]*\)\s*\{/);
    if (idx >= 0) {
      const brace = code.indexOf("{", idx);
      let depth = 0;
      for (let i = brace; i < code.length; i++) {
        if (code[i] === "{") depth++;
        else if (code[i] === "}") { depth--; if (depth === 0) return code.slice(brace + 1, i); }
      }
    }
    code = code.replace(/^\s*(public\s+)?class\s+\w+\s*\{([\s\S]*)\}\s*$/m, "$2");
    return code;
  }

  const KW = new Set("int double decimal bool char string var true false null if else switch case default break continue return for while do foreach in new try catch finally throw void static class using public List Math Console Convert".split(" "));

  function tokenize(s) {
    const tokens = []; let i = 0, line = 1;
    const add = (type, value, l) => tokens.push({ type, value, line: l });
    while (i < s.length) {
      const c = s[i];
      if (c === " " || c === "\t" || c === "\r") { i++; continue; }
      if (c === "\n") { i++; line++; continue; }
      if (c === "/" && s[i+1] === "/") { while (i < s.length && s[i] !== "\n") i++; continue; }
      if (c === "/" && s[i+1] === "*") { i += 2; while (i < s.length && !(s[i] === "*" && s[i+1] === "/")) { if (s[i] === "\n") line++; i++; } i += 2; continue; }
      const l0 = line;
      if (c === "$" && s[i+1] === '"') {
        i += 2; let raw = "";
        while (i < s.length && s[i] !== '"') { if (s[i] === "\\") { raw += s[i++]; raw += s[i++]; } else raw += s[i++]; }
        if (s[i] !== '"') throw err("Unterminated interpolated string", l0);
        i++; add("ISTRING", raw, l0); continue;
      }
      if (c === '"') {
        i++; let raw = "";
        while (i < s.length && s[i] !== '"') { if (s[i] === "\\") { raw += s[i++]; raw += s[i++]; } else raw += s[i++]; }
        if (s[i] !== '"') throw err("Unterminated string", l0);
        i++; add("STRING", raw, l0); continue;
      }
      if (c === "'") {
        i++; let raw = "";
        if (s[i] === "\\") { raw += s[i++]; raw += s[i++]; } else raw += s[i++];
        if (s[i] !== "'") throw err("Unterminated char", l0);
        i++; add("CHAR", raw, l0); continue;
      }
      if (/[0-9]/.test(c)) {
        let num = "";
        while (/[0-9]/.test(s[i] || "")) num += s[i++];
        if (s[i] === "." && /[0-9]/.test(s[i+1] || "")) { num += s[i++]; while (/[0-9]/.test(s[i] || "")) num += s[i++]; }
        if (/[mMdDfFlL]/.test(s[i] || "")) num += s[i++];
        add("NUMBER", num, l0); continue;
      }
      if (/[A-Za-z_]/.test(c)) {
        let id = "";
        while (/[A-Za-z0-9_]/.test(s[i] || "")) id += s[i++];
        add(KW.has(id) ? "KW" : "ID", id, l0); continue;
      }
      const two = c + (s[i+1] || "");
      const twos = ["==","!=","<=",">=","&&","||","++","--","+=","-=","*=","/=","%="];
      if (twos.includes(two)) { i += 2; add("OP", two, l0); continue; }
      if ("(){}[],.;:?+-*/%<>!=&|^~".includes(c)) { i++; add("OP", c, l0); continue; }
      throw err("Unexpected '" + c + "'", l0);
    }
    add("EOF", "", line);
    return tokens;
  }

  function unstr(raw) {
    return raw.replace(/\\n/g,"\n").replace(/\\t/g,"\t").replace(/\\r/g,"\r").replace(/\\"/g,'"').replace(/\\\\/g,"\\");
  }
  function unchar(raw) {
    if (raw === "\\n") return "\n"; if (raw === "\\t") return "\t"; if (raw === "\\'") return "'"; if (raw === "\\\\") return "\\";
    return raw[0];
  }

  function parse(tokens) {
    let p = 0;
    const cur = () => tokens[p];
    const at = (type, val) => cur().type === type && (val == null || cur().value === val);
    const eat = (type, val) => {
      const t = cur();
      if (t.type !== type || (val != null && t.value !== val)) throw err("Expected " + (val || type) + " got " + t.value, t.line);
      p++; return t;
    };
    const match = (type, val) => { if (at(type, val)) { p++; return true; } return false; };

    function parseType() {
      if (at("KW", "List")) {
        p++; eat("OP", "<"); const inner = parseType(); eat("OP", ">");
        return { name: "List", inner };
      }
      if (at("KW") || at("ID")) { const t = cur(); p++; return { name: t.value }; }
      throw err("Expected type", cur().line);
    }
    function parseArgs() {
      const args = [];
      if (match("OP", ")")) return args;
      do args.push(parseExpr()); while (match("OP", ","));
      eat("OP", ")"); return args;
    }
    function parsePrimary() {
      const t = cur();
      if (t.type === "NUMBER") {
        p++; let v = t.value, typ = "int";
        if (/[mM]$/.test(v)) { typ = "decimal"; v = v.slice(0,-1); }
        else if (/[dDfF]$/.test(v)) { typ = "double"; v = v.slice(0,-1); }
        else if (v.includes(".")) typ = "double";
        return { kind: "lit", type: typ, value: typ === "int" ? (parseInt(v,10)|0) : parseFloat(v), line: t.line };
      }
      if (t.type === "STRING") { p++; return { kind: "lit", type: "string", value: unstr(t.value), line: t.line }; }
      if (t.type === "CHAR") { p++; return { kind: "lit", type: "char", value: unchar(t.value), line: t.line }; }
      if (t.type === "ISTRING") { p++; return { kind: "istr", raw: t.value, line: t.line }; }
      if (match("KW", "true")) return { kind: "lit", type: "bool", value: true, line: t.line };
      if (match("KW", "false")) return { kind: "lit", type: "bool", value: false, line: t.line };
      if (match("KW", "null")) return { kind: "lit", type: "null", value: null, line: t.line };
      if (match("OP", "(")) {
        if ((at("KW") && "int double decimal bool char string".split(" ").includes(cur().value))) {
          const save = p; const ty = parseType();
          if (at("OP", ")")) {
            p++;
            if (!at("OP", ";") && !at("OP", ",") && !at("OP", ")") && !at("EOF")) {
              return { kind: "cast", type: ty.name, expr: parseUnary(), line: t.line };
            }
          }
          p = save;
        }
        const e = parseExpr(); eat("OP", ")"); return e;
      }
      if (match("KW", "new")) {
        if (match("KW", "List") || (at("ID") && cur().value === "List")) {
          if (at("ID")) p++;
          if (match("OP", "<")) { parseType(); eat("OP", ">"); }
          if (match("OP", "(")) { eat("OP", ")"); return { kind: "newlist", items: [], line: t.line }; }
          if (match("OP", "{")) {
            const items = [];
            if (!at("OP", "}")) { do items.push(parseExpr()); while (match("OP", ",")); }
            eat("OP", "}"); return { kind: "newlist", items, line: t.line };
          }
        }
        const ty = parseType();
        if (match("OP", "[")) {
          let size = null; if (!at("OP", "]")) size = parseExpr(); eat("OP", "]");
          let items = null;
          if (match("OP", "{")) {
            items = []; if (!at("OP", "}")) { do items.push(parseExpr()); while (match("OP", ",")); } eat("OP", "}");
          }
          return { kind: "newarr", type: ty.name, size, items, line: t.line };
        }
        throw err("Unsupported new", t.line);
      }
      if (t.type === "ID" || (t.type === "KW" && ["Console","Math","Convert","int","string","List"].includes(t.value))) {
        p++; return parsePost({ kind: "id", name: t.value, line: t.line });
      }
      throw err("Unexpected '" + t.value + "'", t.line);
    }
    function parsePost(node) {
      while (true) {
        if (match("OP", "(")) { node = { kind: "call", callee: node, args: parseArgs(), line: node.line }; continue; }
        if (match("OP", "[")) { const index = parseExpr(); eat("OP", "]"); node = { kind: "index", obj: node, index, line: node.line }; continue; }
        if (match("OP", ".")) { const prop = cur().type === "KW" ? eat("KW") : eat("ID"); node = { kind: "member", obj: node, prop: prop.value, line: node.line }; continue; }
        if (match("OP", "++")) { node = { kind: "post", op: "++", expr: node, line: node.line }; continue; }
        if (match("OP", "--")) { node = { kind: "post", op: "--", expr: node, line: node.line }; continue; }
        break;
      }
      return node;
    }
    function parseUnary() {
      const t = cur();
      if (match("OP", "++") || match("OP", "--") || match("OP", "-") || match("OP", "!") || match("OP", "+")) {
        return { kind: "unary", op: tokens[p-1].value, expr: parseUnary(), line: t.line };
      }
      return parsePrimary();
    }
    function bin(ops, next) {
      let left = next();
      while (cur().type === "OP" && ops.includes(cur().value)) {
        const op = eat("OP").value; const right = next();
        left = { kind: "bin", op, left, right, line: left.line };
      }
      return left;
    }
    function parseMul() { return bin(["*","/","%"], parseUnary); }
    function parseAdd() { return bin(["+","-"], parseMul); }
    function parseCmp() { return bin(["<","<=",">",">=","==","!="], parseAdd); }
    function parseAnd() { return bin(["&&"], parseCmp); }
    function parseOr() { return bin(["||"], parseAnd); }
    function parseExpr() {
      let left = parseOr();
      if (cur().type === "OP" && ["=","+=","-=","*=","/=","%="].includes(cur().value)) {
        const op = eat("OP").value; const right = parseExpr();
        return { kind: "assign", op, left, right, line: left.line };
      }
      if (match("OP", "?")) {
        const a = parseExpr(); eat("OP", ":"); const b = parseExpr();
        return { kind: "tern", cond: left, a, b, line: left.line };
      }
      return left;
    }
    function parseBlock() {
      eat("OP", "{"); const body = [];
      while (!at("OP", "}") && !at("EOF")) body.push(parseStmt());
      eat("OP", "}"); return body;
    }
    function isTypeStart() {
      return at("KW") && ["int","double","decimal","bool","char","string","var","List"].includes(cur().value);
    }
    function lookMethod() {
      const save = p;
      try {
        if (at("KW", "static")) p++;
        parseType();
        if (!(at("ID") || at("KW"))) { p = save; return false; }
        p++;
        const ok = at("OP", "("); p = save; return ok;
      } catch (e) { p = save; return false; }
    }
    function parseDecl(needSemi) {
      const t = cur(); const ty = parseType();
      let isArr = false; if (match("OP", "[")) { eat("OP", "]"); isArr = true; }
      const name = eat("ID").value;
      let init = null;
      if (match("OP", "=")) {
        if (at("OP", "{")) {
          p++; const items = [];
          if (!at("OP", "}")) { do items.push(parseExpr()); while (match("OP", ",")); }
          eat("OP", "}"); init = { kind: "newarr", type: ty.name, size: null, items, line: t.line };
        } else init = parseExpr();
      }
      if (needSemi) {
        if (!at("OP", ";")) throw err("Expected ';' after statement", cur().line);
        eat("OP", ";");
      }
      return { kind: "decl", type: ty.name, isArr, name, init, line: t.line };
    }
    function parseMethod() {
      const t = cur(); const isStatic = match("KW", "static");
      const ret = parseType(); const name = (at("ID") ? eat("ID") : eat("KW")).value;
      eat("OP", "("); const params = [];
      if (!at("OP", ")")) {
        do {
          const pt = parseType(); let isArr = false;
          if (match("OP", "[")) { eat("OP", "]"); isArr = true; }
          params.push({ type: pt.name, name: eat("ID").value, isArr });
        } while (match("OP", ","));
      }
      eat("OP", ")");
      return { kind: "method", ret: ret.name, name, params, body: parseBlock(), line: t.line };
    }
    function parseStmt() {
      const t = cur();
      if (at("OP", "{")) return { kind: "block", body: parseBlock(), line: t.line };
      if (match("KW", "if")) {
        eat("OP", "("); const cond = parseExpr(); eat("OP", ")");
        const then = parseStmt(); let els = null; if (match("KW", "else")) els = parseStmt();
        return { kind: "if", cond, then, else: els, line: t.line };
      }
      if (match("KW", "while")) {
        eat("OP", "("); const cond = parseExpr(); eat("OP", ")");
        return { kind: "while", cond, body: parseStmt(), line: t.line };
      }
      if (match("KW", "do")) {
        const body = parseStmt(); eat("KW", "while"); eat("OP", "("); const cond = parseExpr(); eat("OP", ")"); eat("OP", ";");
        return { kind: "dowhile", cond, body, line: t.line };
      }
      if (match("KW", "for")) {
        eat("OP", "(");
        let init = null; if (!at("OP", ";")) init = isTypeStart() ? parseDecl(false) : { kind: "expr", expr: parseExpr(), line: t.line };
        eat("OP", ";");
        let cond = null; if (!at("OP", ";")) cond = parseExpr();
        eat("OP", ";");
        let upd = null; if (!at("OP", ")")) upd = parseExpr();
        eat("OP", ")");
        return { kind: "for", init, cond, upd, body: parseStmt(), line: t.line };
      }
      if (match("KW", "foreach")) {
        eat("OP", "("); const ty = parseType(); const name = eat("ID").value; eat("KW", "in"); const iter = parseExpr(); eat("OP", ")");
        return { kind: "foreach", type: ty.name, name, iter, body: parseStmt(), line: t.line };
      }
      if (match("KW", "switch")) {
        eat("OP", "("); const expr = parseExpr(); eat("OP", ")"); eat("OP", "{");
        const cases = [];
        while (!at("OP", "}") && !at("EOF")) {
          if (match("KW", "case")) {
            const v = parseExpr(); eat("OP", ":"); const body = [];
            while (!at("KW", "case") && !at("KW", "default") && !at("OP", "}") && !at("EOF")) body.push(parseStmt());
            cases.push({ type: "case", value: v, body });
          } else if (match("KW", "default")) {
            eat("OP", ":"); const body = [];
            while (!at("KW", "case") && !at("KW", "default") && !at("OP", "}") && !at("EOF")) body.push(parseStmt());
            cases.push({ type: "default", body });
          } else throw err("Expected case/default", cur().line);
        }
        eat("OP", "}"); return { kind: "switch", expr, cases, line: t.line };
      }
      if (match("KW", "try")) {
        const tryBody = parseBlock(); let catchClause = null, fin = null;
        if (match("KW", "catch")) {
          let name = null, exType = null;
          if (match("OP", "(")) { exType = parseType().name; if (at("ID")) name = eat("ID").value; eat("OP", ")"); }
          catchClause = { type: exType, name, body: parseBlock() };
        }
        if (match("KW", "finally")) fin = parseBlock();
        return { kind: "try", tryBody, catch: catchClause, finally: fin, line: t.line };
      }
      if (match("KW", "break")) { eat("OP", ";"); return { kind: "break", line: t.line }; }
      if (match("KW", "continue")) { eat("OP", ";"); return { kind: "continue", line: t.line }; }
      if (match("KW", "return")) {
        let expr = null; if (!at("OP", ";")) expr = parseExpr(); eat("OP", ";");
        return { kind: "return", expr, line: t.line };
      }
      if (match("KW", "throw")) { const expr = parseExpr(); eat("OP", ";"); return { kind: "throw", expr, line: t.line }; }
      if ((at("KW", "static") || isTypeStart()) && lookMethod()) return parseMethod();
      if (isTypeStart()) return parseDecl(true);
      const expr = parseExpr();
      if (!at("OP", ";")) throw err("Expected ';' after statement", cur().line);
      eat("OP", ";");
      return { kind: "expr", expr, line: t.line };
    }
    const body = [];
    while (!at("EOF")) body.push(parseStmt());
    return body;
  }

  function runAst(ast, options) {
    options = options || {};
    const methods = Object.create(null);
    const out = [];
    let inputs = (options.inputs || []).slice();
    const LOOP = { B: "B", C: "C" };

    function write(s, nl) { out.push(String(s) + (nl ? "\n" : "")); }
    function envNew(parent) { return { parent: parent || null, vars: Object.create(null), types: Object.create(null) }; }
    function envGet(env, name) {
      for (let e = env; e; e = e.parent) if (Object.prototype.hasOwnProperty.call(e.vars, name)) return e;
      throw ex("Exception", "Unknown variable '" + name + "'");
    }
    function envDecl(env, name, type, value) {
      if (Object.prototype.hasOwnProperty.call(env.vars, name)) throw ex("Exception", "Already defined: " + name);
      env.vars[name] = value; env.types[name] = type;
    }
    function coerce(type, value) {
      if (type === "var" || !type) return value;
      if (type === "int") return Math.trunc(Number(value)) | 0;
      if (type === "double" || type === "decimal") return Number(value);
      if (type === "bool") return Boolean(value);
      if (type === "string") return value == null ? null : String(value);
      if (type === "char") return String(value).charAt(0);
      return value;
    }
    function str(v) {
      if (v === null || v === undefined) return "";
      if (typeof v === "boolean") return v ? "True" : "False";
      if (v && v.__list) return "List";
      if (Array.isArray(v)) return v.join(",");
      return String(v);
    }
    function makeList(items) { return { __list: true, items: items ? items.slice() : [] }; }

    function parseExprTokens(tokens) {
      const src = tokens.filter(t => t.type !== "EOF").map(t => {
        if (t.type === "STRING") return JSON.stringify(unstr(t.value));
        if (t.type === "CHAR") return "'" + t.value + "'";
        if (t.type === "ISTRING") return '$"' + t.value + '"';
        return t.value;
      }).join(" ");
      const stmts = parse(tokenize(src + ";"));
      if (!stmts.length || stmts[0].kind !== "expr") throw ex("Exception", "Bad interpolation");
      return stmts[0].expr;
    }
    function evalIStr(raw, env) {
      raw = unstr(raw);
      let i = 0, res = "";
      while (i < raw.length) {
        if (raw[i] === "{") {
          if (raw[i+1] === "{") { res += "{"; i += 2; continue; }
          i++; let depth = 1, start = i;
          while (i < raw.length && depth) {
            if (raw[i] === "{") depth++;
            else if (raw[i] === "}") { depth--; if (!depth) break; }
            i++;
          }
          const piece = raw.slice(start, i); i++;
          res += str(evalExpr(parseExprTokens(tokenize(piece)), env));
        } else if (raw[i] === "}" && raw[i+1] === "}") { res += "}"; i += 2; }
        else res += raw[i++];
      }
      return res;
    }

    function applyInc(target, env, op, postfix) {
      const curV = evalExpr(target, env);
      const next = op === "++" ? curV + 1 : curV - 1;
      if (target.kind === "id") envGet(env, target.name).vars[target.name] = next;
      else {
        const obj = evalExpr(target.obj, env); const idx = evalExpr(target.index, env) | 0;
        if (obj && obj.__list) obj.items[idx] = next; else obj[idx] = next;
      }
      return postfix ? curV : next;
    }

    function evalExpr(node, env) {
      switch (node.kind) {
        case "lit": return node.value;
        case "istr": return evalIStr(node.raw, env);
        case "id":
          if (node.name === "Console" || node.name === "Math" || node.name === "Convert" || node.name === "int" || node.name === "string")
            return { __ns: node.name };
          return envGet(env, node.name).vars[node.name];
        case "member": {
          const obj = evalExpr(node.obj, env);
          if (obj && obj.__ns) return { __nsm: obj.__ns, prop: node.prop };
          if (typeof obj === "string") {
            if (node.prop === "Length") return obj.length;
            return { __s: obj, prop: node.prop };
          }
          if (Array.isArray(obj) && node.prop === "Length") return obj.length;
          if (obj && obj.__list && node.prop === "Count") return obj.items.length;
          if (obj && obj.__list) return { __l: obj, prop: node.prop };
          throw ex("Exception", "Unknown member " + node.prop);
        }
        case "call": {
          const callee = evalExpr(node.callee, env);
          const args = node.args.map(a => evalExpr(a, env));
          if (callee && callee.__nsm) {
            const ns = callee.__nsm, m = callee.prop;
            if (ns === "Console") {
              if (m === "WriteLine") { write(args.length ? str(args[0]) : "", true); return null; }
              if (m === "Write") { write(args.length ? str(args[0]) : "", false); return null; }
              if (m === "ReadLine") {
                if (inputs.length) return String(inputs.shift());
                if (typeof w.prompt === "function") { const v = w.prompt("C# Console.ReadLine()"); return v == null ? "" : String(v); }
                return "";
              }
            }
            if (ns === "Math") {
              if (m === "Abs") return Math.abs(args[0]);
              if (m === "Max") return Math.max(args[0], args[1]);
              if (m === "Min") return Math.min(args[0], args[1]);
              if (m === "Floor") return Math.floor(args[0]);
              if (m === "Ceiling") return Math.ceil(args[0]);
              if (m === "Round") return Math.round(args[0]);
              if (m === "Pow") return Math.pow(args[0], args[1]);
              if (m === "Sqrt") return Math.sqrt(args[0]);
            }
            if (ns === "Convert") {
              if (m === "ToInt32") return parseInt(args[0], 10) | 0;
              if (m === "ToDouble") return Number(args[0]);
              if (m === "ToBoolean") return Boolean(args[0]);
              if (m === "ToString") return String(args[0]);
            }
            if (ns === "int" && m === "Parse") {
              const n = parseInt(String(args[0]), 10);
              if (Number.isNaN(n)) throw ex("FormatException", "Input string was not in a correct format.");
              return n | 0;
            }
            if (ns === "int" && m === "TryParse") return !Number.isNaN(parseInt(String(args[0]), 10));
            throw ex("Exception", "Unknown " + ns + "." + m);
          }
          if (callee && callee.__s) {
            const s = callee.__s, m = callee.prop;
            if (m === "Contains") return s.includes(String(args[0]));
            if (m === "ToUpper") return s.toUpperCase();
            if (m === "ToLower") return s.toLowerCase();
            if (m === "Substring") return args.length > 1 ? s.substr(args[0]|0, args[1]|0) : s.substring(args[0]|0);
            if (m === "IndexOf") return s.indexOf(String(args[0]));
            if (m === "Replace") return s.split(String(args[0])).join(String(args[1]));
            if (m === "Split") return s.split(args.length ? String(args[0]) : ",");
            if (m === "Trim") return s.trim();
            if (m === "PadLeft") return s.padStart(args[0]|0, args.length > 1 ? String(args[1])[0] : " ");
            if (m === "PadRight") return s.padEnd(args[0]|0, args.length > 1 ? String(args[1])[0] : " ");
            throw ex("Exception", "Unsupported string." + m);
          }
          if (callee && callee.__l) {
            const list = callee.__l, m = callee.prop;
            if (m === "Add") { list.items.push(args[0]); return null; }
            if (m === "Contains") return list.items.includes(args[0]);
            if (m === "Clear") { list.items.length = 0; return null; }
            if (m === "RemoveAt") { list.items.splice(args[0]|0, 1); return null; }
            throw ex("Exception", "Unsupported List." + m);
          }
          if (node.callee.kind === "id" && methods[node.callee.name]) {
            return callMethod(methods[node.callee.name], args);
          }
          throw ex("Exception", "Cannot call value");
        }
        case "index": {
          const obj = evalExpr(node.obj, env);
          const idx = evalExpr(node.index, env) | 0;
          const coll = obj && obj.__list ? obj.items : obj;
          if (idx < 0 || idx >= coll.length) throw ex("IndexOutOfRangeException", "Index was outside the bounds of the array.");
          return coll[idx];
        }
        case "newarr":
          if (node.items) return node.items.map(x => evalExpr(x, env));
          return new Array(node.size ? (evalExpr(node.size, env)|0) : 0).fill(0);
        case "newlist": return makeList((node.items || []).map(x => evalExpr(x, env)));
        case "cast": return coerce(node.type, evalExpr(node.expr, env));
        case "unary":
          if (node.op === "++" || node.op === "--") return applyInc(node.expr, env, node.op, false);
          { const v = evalExpr(node.expr, env); if (node.op === "-") return -v; if (node.op === "!") return !v; return +v; }
        case "post": return applyInc(node.expr, env, node.op, true);
        case "bin": {
          if (node.op === "&&") return evalExpr(node.left, env) ? !!evalExpr(node.right, env) : false;
          if (node.op === "||") return evalExpr(node.left, env) ? true : !!evalExpr(node.right, env);
          const l = evalExpr(node.left, env), r = evalExpr(node.right, env);
          if (node.op === "+") return (typeof l === "string" || typeof r === "string") ? String(l)+String(r) : l+r;
          if (node.op === "-") return l-r;
          if (node.op === "*") return l*r;
          if (node.op === "/") {
            if (r === 0) throw ex("DivideByZeroException", "Attempted to divide by zero.");
            if (Number.isInteger(l) && Number.isInteger(r)) return Math.trunc(l/r)|0;
            return l/r;
          }
          if (node.op === "%") { if (r === 0) throw ex("DivideByZeroException", "Attempted to divide by zero."); return l%r; }
          if (node.op === "<") return l<r; if (node.op === "<=") return l<=r;
          if (node.op === ">") return l>r; if (node.op === ">=") return l>=r;
          if (node.op === "==") return l===r; if (node.op === "!=") return l!==r;
          throw ex("Exception", "Bad operator");
        }
        case "assign": {
          let next = evalExpr(node.right, env);
          if (node.op !== "=") {
            const curV = evalExpr(node.left, env);
            if (node.op === "+=") next = (typeof curV === "string" || typeof next === "string") ? String(curV)+String(next) : curV+next;
            else if (node.op === "-=") next = curV - next;
            else if (node.op === "*=") next = curV * next;
            else if (node.op === "/=") {
              if (next === 0) throw ex("DivideByZeroException", "Attempted to divide by zero.");
              next = (Number.isInteger(curV) && Number.isInteger(next)) ? (Math.trunc(curV/next)|0) : curV/next;
            } else if (node.op === "%=") next = curV % next;
          }
          if (node.left.kind === "id") {
            const e = envGet(env, node.left.name);
            next = coerce(e.types[node.left.name], next);
            e.vars[node.left.name] = next; return next;
          }
          if (node.left.kind === "index") {
            const obj = evalExpr(node.left.obj, env); const idx = evalExpr(node.left.index, env)|0;
            if (obj && obj.__list) obj.items[idx] = next; else obj[idx] = next;
            return next;
          }
          throw ex("Exception", "Invalid assignment target");
        }
        case "tern": return evalExpr(node.cond, env) ? evalExpr(node.a, env) : evalExpr(node.b, env);
        default: throw ex("Exception", "Unknown expr " + node.kind);
      }
    }

    function callMethod(method, args) {
      const env = envNew(null);
      method.params.forEach((p, i) => envDecl(env, p.name, p.type, args[i]));
      try { execBlock(method.body, env); return null; }
      catch (e) { if (e && e.__return) return e.value; throw e; }
    }
    function execBlock(stmts, env) { for (const st of stmts) execStmt(st, env); }
    function execStmt(st, env) {
      switch (st.kind) {
        case "block": return execBlock(st.body, envNew(env));
        case "decl": {
          let val = st.init ? evalExpr(st.init, env) : (st.isArr ? [] : (st.type === "List" ? makeList([]) : (st.type === "bool" ? false : (st.type === "string" ? null : (st.type === "char" ? "\0" : 0)))));
          if (!st.isArr && st.type !== "List" && st.type !== "var") val = coerce(st.type, val);
          envDecl(env, st.name, st.isArr ? st.type + "[]" : st.type, val); return;
        }
        case "expr": evalExpr(st.expr, env); return;
        case "if":
          if (evalExpr(st.cond, env)) execStmt(st.then, env); else if (st.else) execStmt(st.else, env); return;
        case "while":
          while (evalExpr(st.cond, env)) {
            try { execStmt(st.body, env); } catch (e) { if (e === LOOP.B) break; if (e === LOOP.C) continue; throw e; }
          } return;
        case "dowhile":
          do {
            try { execStmt(st.body, env); } catch (e) { if (e === LOOP.B) break; if (e === LOOP.C) continue; throw e; }
          } while (evalExpr(st.cond, env)); return;
        case "for": {
          const child = envNew(env);
          if (st.init) execStmt(st.init.kind ? st.init : { kind: "expr", expr: st.init }, child);
          while (!st.cond || evalExpr(st.cond, child)) {
            try { execStmt(st.body, child); }
            catch (e) { if (e === LOOP.B) break; if (e === LOOP.C) { if (st.upd) evalExpr(st.upd, child); continue; } throw e; }
            if (st.upd) evalExpr(st.upd, child);
          } return;
        }
        case "foreach": {
          const iter = evalExpr(st.iter, env);
          const arr = iter && iter.__list ? iter.items : iter;
          for (let i = 0; i < arr.length; i++) {
            const child = envNew(env);
            envDecl(child, st.name, st.type, arr[i]);
            try { execStmt(st.body, child); } catch (e) { if (e === LOOP.B) break; if (e === LOOP.C) continue; throw e; }
          } return;
        }
        case "switch": {
          const v = evalExpr(st.expr, env);
          let matched = false;
          for (const c of st.cases) {
            if (c.type === "default") continue;
            if (!matched && evalExpr(c.value, env) === v) matched = true;
            if (matched) {
              let broke = false;
              for (const s of c.body) {
                try { execStmt(s, env); } catch (e) { if (e === LOOP.B) { broke = true; break; } throw e; }
              }
              if (broke) return;
            }
          }
          if (!matched) {
            for (const c of st.cases) {
              if (c.type !== "default") continue;
              for (const s of c.body) {
                try { execStmt(s, env); } catch (e) { if (e === LOOP.B) return; throw e; }
              }
            }
          }
          return;
        }
        case "try": {
          let thrown = null;
          try { execBlock(st.tryBody, envNew(env)); }
          catch (e) {
            if (e === LOOP.B || e === LOOP.C || (e && e.__return)) throw e;
            thrown = e;
            if (st.catch) {
              const child = envNew(env);
              if (st.catch.name) envDecl(child, st.catch.name, st.catch.type || "Exception", e);
              try { execBlock(st.catch.body, child); thrown = null; } catch (e2) { thrown = e2; }
            }
          } finally {
            if (st.finally) { try { execBlock(st.finally, envNew(env)); } catch (e3) { thrown = e3; } }
          }
          if (thrown) throw thrown; return;
        }
        case "break": throw LOOP.B;
        case "continue": throw LOOP.C;
        case "return": throw { __return: true, value: st.expr ? evalExpr(st.expr, env) : null };
        case "throw": throw ex("Exception", str(evalExpr(st.expr, env)));
        case "method": methods[st.name] = st; return;
        default: throw ex("Exception", "Unknown statement " + st.kind);
      }
    }

    const top = envNew(null);
    const rest = [];
    for (const st of ast) {
      if (st.kind === "method") methods[st.name] = st;
      else rest.push(st);
    }
    for (const st of rest) execStmt(st, top);
    let text = out.join("");
    if (text.endsWith("\n")) text = text.slice(0, -1);
    return text;
  }

  function runSource(source, options) {
    try {
      const body = extractBody(source);
      const tokens = tokenize(body);
      const ast = parse(tokens);
      const text = runAst(ast, options || {});
      return { ok: true, out: text, label: LABEL };
    } catch (e) {
      const prefix = (e.isCompile || e.line != null)
        ? ("error CS0000 (line " + (e.line || "?") + "): ")
        : (e.exName ? (e.exName + ": ") : "Error: ");
      return { ok: false, out: prefix + (e.message || String(e)), label: LABEL };
    }
  }

  w.CodeCribCsharp = { label: LABEL, run: runSource };
})(window);
