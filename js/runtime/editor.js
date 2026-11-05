(function (w) {
  let cmCssLoaded = false;
  function loadCss(href) {
    if (document.querySelector('link[data-cc-href="' + href + '"]')) return;
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    l.dataset.ccHref = href;
    document.head.appendChild(l);
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector('script[data-cc-src="' + src + '"]')) return resolve();
      const s = document.createElement("script");
      s.src = src;
      s.dataset.ccSrc = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("load " + src));
      document.head.appendChild(s);
    });
  }
  async function ensureCodeMirror() {
    if (w.CodeMirror) return;
    loadCss("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.css");
    loadCss("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/theme/material-darker.min.css");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/codemirror.min.js");
    await Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/javascript/javascript.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/python/python.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/sql/sql.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/lua/lua.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/clike/clike.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/xml/xml.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/css/css.min.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/mode/htmlmixed/htmlmixed.min.js")
    ]);
  }
  function modeFor(lang) {
    const L = (lang || "").toLowerCase();
    if (L === "python" || L === "py" || L === "gdscript") return "python";
    if (L === "sql") return "text/x-sql";
    if (L === "lua" || L === "luau" || L === "haxe") return "lua";
    if (L === "htmlcss" || L === "html" || L === "css") return "htmlmixed";
    if (L === "java" || L === "c" || L === "cpp" || L === "csharp" || L === "rust" || L === "go") return "clike";
    return "javascript";
  }

  async function mount(host, opts) {
    opts = opts || {};
    await ensureCodeMirror();
    host.innerHTML = "";
    host.classList.add("cc-editor-host");
    const toolbar = document.createElement("div");
    toolbar.className = "cc-editor-toolbar";
    const runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "btn";
    runBtn.textContent = opts.runLabel || "Run";
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "btn secondary";
    resetBtn.textContent = opts.resetLabel || "Reset";
    const badge = document.createElement("span");
    badge.className = "pill";
    badge.textContent = opts.langLabel || opts.lang || "code";
    toolbar.appendChild(runBtn);
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(badge);
    const wrap = document.createElement("div");
    wrap.className = "cc-editor-wrap";
    const ta = document.createElement("textarea");
    ta.value = opts.value || "";
    wrap.appendChild(ta);
    const out = document.createElement("pre");
    out.className = "cc-console";
    out.textContent = opts.consoleHint || "";
    let preview = null;
    let split = null;
    if (opts.preview) {
      split = document.createElement("div");
      split.className = "cc-split";
      preview = document.createElement("iframe");
      preview.className = "cc-preview";
      preview.sandbox = "allow-scripts allow-same-origin";
      preview.title = "preview";
      const left = document.createElement("div");
      left.className = "cc-split-left";
      left.appendChild(wrap);
      const right = document.createElement("div");
      right.className = "cc-split-right";
      const lab = document.createElement("div");
      lab.className = "cc-preview-label";
      lab.textContent = "Preview";
      right.appendChild(lab);
      right.appendChild(preview);
      split.appendChild(left);
      split.appendChild(right);
    }
    host.appendChild(toolbar);
    if (split) host.appendChild(split);
    else host.appendChild(wrap);
    host.appendChild(out);

    const cm = w.CodeMirror.fromTextArea(ta, {
      lineNumbers: true,
      theme: "material-darker",
      mode: modeFor(opts.lang),
      indentUnit: 2,
      tabSize: 2,
      lineWrapping: true
    });
    setTimeout(() => cm.refresh(), 50);

    const starter = opts.value || "";
    resetBtn.addEventListener("click", () => {
      cm.setValue(starter);
      out.textContent = "";
      out.classList.remove("ok", "bad");
      if (preview) preview.srcdoc = "";
    });

    async function doRun() {
      out.textContent = CodeCribI18n ? (CodeCribI18n.getLang() === "en" ? "Running..." : "Bezig...") : "Running...";
      out.classList.remove("ok", "bad");
      try {
        const code = cm.getValue();
        const lang = opts.lang;
        if (CodeCribRunners.isRunnable(lang) || lang === "htmlcss") {
          const res = await CodeCribRunners.run(lang, code, { previewFrame: preview, timeoutMs: opts.timeoutMs });
          if (res.simulated) {
            out.textContent = res.message + (opts.expected ? ("\n\nExpected:\n" + opts.expected) : "");
            out.classList.add("bad");
            return { ok: false, out: res.out, simulated: true };
          }
          let ok = res.ok;
          let extra = "";
          const codeTests = (opts.tests || []).filter((t) => t.type === "code_contains" || t.type === "code_regex");
          const outTests = (opts.tests || []).filter((t) => t.type !== "code_contains" && t.type !== "code_regex");
          if (codeTests.length) {
            const fails = [];
            codeTests.forEach((t, i) => {
              if (t.type === "code_contains" && !code.includes(t.value)) fails.push("Code check " + (i + 1) + ": missing `" + t.value + "`");
              if (t.type === "code_regex" && !(new RegExp(t.value)).test(code)) fails.push("Code check " + (i + 1) + ": pattern failed");
            });
            if (fails.length) { ok = false; extra += "\n" + fails.join("\n"); }
          }
          if (outTests.length) {
            const t = CodeCribRunners.checkTests(res.out, outTests);
            ok = ok && t.ok;
            if (!t.ok) extra += "\n" + t.fails.join("\n");
          } else if (!codeTests.length && opts.expected != null && opts.expected !== "") {
            ok = ok && CodeCribRunners.checkExpected(res.out, opts.expected);
            if (!ok) extra += "\nExpected:\n" + opts.expected;
          }
          const lab = res.label ? ("[" + res.label + "]\n") : "";
          out.textContent = lab + (res.out || "(no output)") + extra;
          out.classList.add(ok ? "ok" : "bad");
          return { ok, out: res.out };
        }
        // Non-runnable: code checks only, show expected output clearly
        const en = CodeCribI18n && CodeCribI18n.getLang() === "en";
        const note = en
          ? "Not run in the browser (no live runtime for this language yet)."
          : "Niet uitgevoerd in de browser (nog geen live runtime voor deze taal).";
        const fails = [];
        (opts.tests || []).forEach((t, i) => {
          if (t.type === "code_contains" && !code.includes(t.value)) fails.push("Test " + (i + 1) + ": code must include `" + t.value + "`");
          if (t.type === "code_regex" && !(new RegExp(t.value)).test(code)) fails.push("Test " + (i + 1) + ": code pattern failed");
        });
        const ok = fails.length === 0 && (!(opts.tests || []).length ? false : true);
        let msg = note;
        if ((opts.tests || []).length) msg += "\n" + (ok ? (en ? "Code checks passed." : "Code-checks geslaagd.") : fails.join("\n"));
        if (opts.expected != null && opts.expected !== "") {
          msg += (en ? "\n\nExpected output (run locally / when runtime exists):\n" : "\n\nVerwachte output (lokaal / als er een runtime is):\n") + opts.expected;
        } else {
          const outHints = (opts.tests || []).filter((t) => t.type === "equals" || t.type === "contains");
          if (outHints.length) {
            msg += en ? "\n\nExpected output hints:" : "\n\nVerwachte output-hints:";
            outHints.forEach((t) => { msg += "\n- " + t.type + ": " + t.value; });
          }
        }
        if (!(opts.tests || []).length && (opts.expected == null || opts.expected === "")) {
          msg += en ? "\nNo automatic output check for this exercise." : "\nGeen automatische output-check voor deze oefening.";
        }
        out.textContent = msg;
        out.classList.add(ok && (opts.tests || []).length ? "ok" : "bad");
        return { ok: ok && (opts.tests || []).length > 0, out: "", simulated: true };
      } catch (e) {
        out.textContent = String(e && e.message || e);
        out.classList.add("bad");
        return { ok: false, out: String(e) };
      }
    }
    runBtn.addEventListener("click", () => { doRun(); });
    return {
      cm,
      getValue: () => cm.getValue(),
      setValue: (v) => cm.setValue(v),
      run: doRun,
      consoleEl: out,
      preview
    };
  }

  w.CodeCribEditor = { mount, modeFor };
})(window);
