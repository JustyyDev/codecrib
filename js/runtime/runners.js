(function (w) {
  const runnable = new Set(["javascript", "typescript", "python", "lua", "sql", "htmlcss"]);
  let pyodidePromise = null;
  let sqlPromise = null;
  let fengariReady = null;
  let tsReady = null;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector('script[data-cc-src="' + src + '"]')) {
        resolve(); return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.dataset.ccSrc = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load " + src));
      document.head.appendChild(s);
    });
  }

  function normalizeOut(s) {
    return String(s == null ? "" : s).replace(/\r\n/g, "\n").replace(/\s+$/g, "");
  }

  async function runJsInSandbox(code, timeoutMs) {
    return new Promise((resolve) => {
      const logs = [];
      const id = "cc_sb_" + Math.random().toString(36).slice(2);
      const iframe = document.createElement("iframe");
      iframe.sandbox = "allow-scripts";
      iframe.style.display = "none";
      const src = `<!DOCTYPE html><html><body><script>
(function(){
  const logs=[];
  const c={log:(...a)=>logs.push(a.map(x=>{try{return typeof x==='string'?x:JSON.stringify(x)}catch(e){return String(x)}}).join(' ')),
    error:(...a)=>logs.push('[err] '+a.map(String).join(' ')),
    warn:(...a)=>logs.push('[warn] '+a.map(String).join(' '))};
  try {
    const fn = new Function('console', ${JSON.stringify(code + "\n")});
    fn(c);
    parent.postMessage({id:${JSON.stringify(id)}, ok:true, out:logs.join('\\n')}, '*');
  } catch(e) {
    parent.postMessage({id:${JSON.stringify(id)}, ok:false, out:String(e && e.message || e)}, '*');
  }
})();
<\/script></body></html>`;
      function onMsg(ev) {
        if (!ev.data || ev.data.id !== id) return;
        cleanup();
        resolve({ ok: !!ev.data.ok, out: normalizeOut(ev.data.out) });
      }
      function cleanup() {
        window.removeEventListener("message", onMsg);
        clearTimeout(timer);
        iframe.remove();
      }
      window.addEventListener("message", onMsg);
      const timer = setTimeout(() => {
        cleanup();
        resolve({ ok: false, out: "Timeout: code ran too long." });
      }, timeoutMs || 4000);
      document.body.appendChild(iframe);
      iframe.srcdoc = src;
    });
  }

  async function ensureTs() {
    if (tsReady) return tsReady;
    tsReady = loadScript("https://cdn.jsdelivr.net/npm/typescript@5.6.3/lib/typescript.js");
    return tsReady;
  }

  async function ensurePyodide() {
    if (pyodidePromise) return pyodidePromise;
    pyodidePromise = (async () => {
      await loadScript("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
      const py = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/" });
      return py;
    })();
    return pyodidePromise;
  }

  async function ensureSql() {
    if (sqlPromise) return sqlPromise;
    sqlPromise = (async () => {
      await loadScript("https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/sql-wasm.js");
      const SQL = await initSqlJs({
        locateFile: (f) => "https://cdn.jsdelivr.net/npm/sql.js@1.11.0/dist/" + f
      });
      return SQL;
    })();
    return sqlPromise;
  }

  async function ensureFengari() {
    if (fengariReady) return fengariReady;
    fengariReady = loadScript("https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.js");
    return fengariReady;
  }

  async function runPython(code) {
    const py = await ensurePyodide();
    await py.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);
    try {
      await py.runPythonAsync(code);
      const out = py.runPython("sys.stdout.getvalue()");
      const err = py.runPython("sys.stderr.getvalue()");
      const text = normalizeOut((out || "") + (err ? ("\n" + err) : ""));
      return { ok: true, out: text };
    } catch (e) {
      return { ok: false, out: normalizeOut(String(e.message || e)) };
    }
  }

  async function runLua(code) {
    await ensureFengari();
    const fengari = w.fengari;
    if (!fengari) return { ok: false, out: "Fengari failed to load." };
    const lua = fengari.lua;
    const laux = fengari.lauxlib;
    const lualib = fengari.lualib;
    const L = laux.luaL_newstate();
    lualib.luaL_openlibs(L);
    const prints = [];
    // Override print via interop is complex; capture by wrapping
    const wrapped = "local __cc_out = {}\nlocal function print(...)\n  local t={...}\n  for i=1,#t do t[i]=tostring(t[i]) end\n  __cc_out[#__cc_out+1]=table.concat(t, '\\t')\nend\n" + code + "\nreturn table.concat(__cc_out, '\\n')\n";
    const status = laux.luaL_dostring(L, fengari.to_luastring(wrapped));
    if (status !== lua.LUA_OK) {
      const msg = fengari.to_jsstring(lua.lua_tostring(L, -1));
      lua.lua_close(L);
      return { ok: false, out: normalizeOut(msg) };
    }
    const msg = fengari.to_jsstring(lua.lua_tostring(L, -1));
    lua.lua_close(L);
    return { ok: true, out: normalizeOut(msg) };
  }

  function seedSqlDb(SQL) {
    const db = new SQL.Database();
    db.run(`CREATE TABLE players (id INTEGER PRIMARY KEY, name TEXT NOT NULL, score INTEGER DEFAULT 0);
INSERT INTO players(id,name,score) VALUES (1,'Justy',10),(2,'Luke',7),(3,'Nena',12);
CREATE TABLE items (id INTEGER PRIMARY KEY, title TEXT, owner_id INTEGER);
INSERT INTO items(id,title,owner_id) VALUES (1,'Sword',1),(2,'Shield',1),(3,'Potion',2);`);
    return db;
  }

  async function runSql(code) {
    const SQL = await ensureSql();
    const db = seedSqlDb(SQL);
    try {
      const result = db.exec(code);
      if (!result.length) return { ok: true, out: "(no rows)" };
      const parts = result.map((r) => {
        const head = r.columns.join(" | ");
        const rows = r.values.map((v) => v.join(" | ")).join("\n");
        return head + "\n" + rows;
      });
      return { ok: true, out: normalizeOut(parts.join("\n\n")) };
    } catch (e) {
      return { ok: false, out: normalizeOut(String(e.message || e)) };
    } finally {
      db.close();
    }
  }

  async function runHtmlPreview(code, frame) {
    if (!frame) return { ok: true, out: "(preview updated)" };
    frame.srcdoc = code;
    return { ok: true, out: "Preview updated." };
  }

  async function run(lang, code, opts) {
    opts = opts || {};
    const L = (lang || "").toLowerCase();
    if (L === "javascript" || L === "js") return runJsInSandbox(code, opts.timeoutMs);
    if (L === "typescript" || L === "ts") {
      await ensureTs();
      const out = w.ts.transpileModule(code, {
        compilerOptions: { module: w.ts.ModuleKind.ESNext, target: w.ts.ScriptTarget.ES2019, strict: false }
      });
      return runJsInSandbox(out.outputText, opts.timeoutMs);
    }
    if (L === "python" || L === "py") return runPython(code);
    if (L === "lua" || L === "luau") return runLua(code);
    if (L === "sql") return runSql(code);
    if (L === "htmlcss" || L === "html" || L === "css") return runHtmlPreview(code, opts.previewFrame);
    // Simulated: not executed
    return {
      ok: true,
      out: "",
      simulated: true,
      message: "This language is not executed in the browser yet. Use Run check to compare against the expected output / tests."
    };
  }

  function checkExpected(actual, expected) {
    return normalizeOut(actual) === normalizeOut(expected);
  }

  function checkTests(actual, tests) {
    const out = normalizeOut(actual);
    const fails = [];
    (tests || []).forEach((t, i) => {
      if (t.type === "equals" && normalizeOut(t.value) !== out) fails.push("Test " + (i + 1) + ": expected exact output.");
      if (t.type === "contains" && !out.includes(t.value)) fails.push("Test " + (i + 1) + ": missing `" + t.value + "`.");
      if (t.type === "regex" && !(new RegExp(t.value)).test(out)) fails.push("Test " + (i + 1) + ": pattern failed.");
      if (t.type === "lines_gte" && out.split("\n").filter(Boolean).length < t.value) fails.push("Test " + (i + 1) + ": not enough lines.");
    });
    return { ok: fails.length === 0, fails };
  }

  w.CodeCribRunners = {
    runnable,
    isRunnable(lang) { return runnable.has((lang || "").toLowerCase()) || ["js","ts","py","html","css"].includes((lang||"").toLowerCase()); },
    run,
    checkExpected,
    checkTests,
    normalizeOut
  };
})(window);
