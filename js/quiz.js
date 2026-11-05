(function (w) {
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function qType(item) {
    return item.type || (item.fill != null ? "fill" : (item.bug != null ? "bug" : "mc"));
  }

  // Build a display copy with shuffled MC options (same perm for nl/en).
  // Correctness is tracked by remapped answer index / original option identity.
  function withShuffledChoices(item) {
    if (!item || !item.choices || !item.choices.nl || item.fill != null && qType(item) === "fill") {
      return item;
    }
    if (qType(item) === "fill") return item;
    const nl = item.choices.nl || [];
    const en = item.choices.en || [];
    if (nl.length < 2 || nl.length !== en.length) return item;
    const perm = shuffle([...Array(nl.length).keys()]);
    const newNl = perm.map((i) => nl[i]);
    const newEn = perm.map((i) => en[i]);
    const newAnswer = perm.indexOf(item.answer);
    return Object.assign({}, item, {
      choices: { nl: newNl, en: newEn },
      answer: newAnswer,
      _origAnswer: item.answer,
      _choicePerm: perm
    });
  }

  function renderOne(container, item, qi, opts) {
    opts = opts || {};
    const L = opts.lang || CodeCribI18n.getLang();
    const original = item;
    const display = (opts.shuffleChoices === false) ? item : withShuffledChoices(item);
    const box = document.createElement("div");
    box.className = "q";
    box.dataset.qi = String(qi);
    const h = document.createElement("h3");
    const kind = qType(original);
    const tag = kind === "fill" ? " [fill]" : (kind === "bug" ? " [bug]" : (kind === "print" ? " [print]" : ""));
    h.textContent = (qi + 1) + ". " + display.q[L] + tag;
    box.appendChild(h);
    if (display.code) {
      const pre = document.createElement("pre");
      pre.textContent = display.code;
      box.appendChild(pre);
    }
    const fb = document.createElement("div");
    fb.className = "feedback";

    let kidsTries = 0;
    const kidsMode = !!(opts.kidsMode || (opts.srs && opts.srs.kidsMode));
    function kidsAlmost() {
      const L2 = CodeCribI18n.getLang();
      const hints = (original.hints && original.hints[L2]) || [];
      const msg = (CodeCribI18n.t("kids_almost") || "Bijna! Probeer het nog eens.");
      const hint = hints[Math.min(kidsTries - 1, Math.max(hints.length - 1, 0))] || (display.why[L2] || "");
      return msg + (hint ? " " + hint : "");
    }
    function finish(ok) {
      if (kidsMode && !ok) {
        kidsTries++;
        fb.className = "feedback kids-soft-bad";
        fb.textContent = kidsAlmost();
        if (opts.onAnswer) opts.onAnswer(false, original, qi);
        // Soft fail: do not lock; allow retry. Still record for SRS after 3 tries as soft miss.
        if (kidsTries >= 3 && w.CodeCribSrs && opts.srs) {
          CodeCribSrs.recordAnswer(
            opts.srs.courseId,
            opts.srs.lessonId,
            opts.srs.qIndex != null ? opts.srs.qIndex : qi,
            false,
            original,
            opts.srs.source || "lesson"
          );
        }
        return;
      }
      box.dataset.locked = "1";
      fb.className = "feedback " + (ok ? "ok" : "bad");
      const okMsg = kidsMode ? (CodeCribI18n.t("kids_nice") || CodeCribI18n.t("correct")) : CodeCribI18n.t("correct");
      const badMsg = CodeCribI18n.t("wrong");
      fb.textContent = (ok ? okMsg : badMsg) + " " + (display.why[L] || "");
      if (opts.onAnswer) opts.onAnswer(ok, original, qi);
      if (w.CodeCribSrs && opts.srs) {
        // Store ORIGINAL item so SRS stays stable; shuffle happens again on review render.
        CodeCribSrs.recordAnswer(
          opts.srs.courseId,
          opts.srs.lessonId,
          opts.srs.qIndex != null ? opts.srs.qIndex : qi,
          ok,
          original,
          opts.srs.source || "lesson"
        );
      }
    }

    if (kind === "fill") {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.gap = ".5rem";
      row.style.flexWrap = "wrap";
      const input = document.createElement("input");
      input.type = "text";
      input.autocomplete = "off";
      input.placeholder = (display.fillHint && display.fillHint[L]) || "...";
      input.style.flex = "1";
      input.style.minWidth = "160px";
      input.style.padding = ".65rem .8rem";
      input.style.borderRadius = ".65rem";
      input.style.border = "2px solid var(--highlight)";
      input.style.background = "var(--panel-2)";
      input.style.color = "var(--text)";
      input.style.font = "inherit";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn secondary";
      btn.textContent = "OK";
      btn.addEventListener("click", () => {
        if (box.dataset.locked) return;
        const got = String(input.value || "").trim();
        const answers = Array.isArray(display.fill) ? display.fill : [display.fill];
        const ok = answers.some((a) => String(a).trim().toLowerCase() === got.toLowerCase());
        input.disabled = true; btn.disabled = true;
        finish(ok);
      });
      row.appendChild(input); row.appendChild(btn);
      box.appendChild(row);
    } else {
      const optsEl = document.createElement("div");
      optsEl.className = "opts";
      const choices = display.choices[L];
      choices.forEach((label, ci) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = String.fromCharCode(97 + ci) + ") " + label;
        b.dataset.choiceIndex = String(ci);
        b.addEventListener("click", () => {
          if (box.dataset.locked) return;
          const ok = ci === display.answer;
          if (kidsMode && !ok) {
            b.classList.add("wrong");
            setTimeout(() => b.classList.remove("wrong"), 600);
            finish(false);
            return;
          }
          Array.from(optsEl.children).forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === display.answer) btn.classList.add("correct");
            if (idx === ci && ci !== display.answer) btn.classList.add("wrong");
          });
          finish(ok);
        });
        optsEl.appendChild(b);
      });
      box.appendChild(optsEl);
    }
    box.appendChild(fb);
    container.appendChild(box);
  }

  function renderQuiz(container, items, lang, srsOpts) {
    container.innerHTML = "";
    const L = lang || CodeCribI18n.getLang();
    items.forEach((item, qi) => {
      renderOne(container, item, qi, {
        lang: L,
        kidsMode: !!(srsOpts && srsOpts.kidsMode),
        srs: srsOpts ? Object.assign({}, srsOpts, { qIndex: item._bankIndex != null ? item._bankIndex : qi }) : null
      });
    });
  }

  function renderExam(container, items, lang, doShuffle, takeN, srsOpts) {
    container.innerHTML = "";
    const L = lang || CodeCribI18n.getLang();
    let list = items.map((it, i) => Object.assign({}, it, { _bankIndex: it.id != null ? it.id : i }));
    list = doShuffle === false ? list : shuffle(list);
    if (takeN && takeN > 0 && list.length > takeN) list = list.slice(0, takeN);
    // Shuffle options per question for display; keep originals for SRS
    const displayList = list.map((it) => withShuffledChoices(it));
    const answers = new Array(displayList.length).fill(null);

    displayList.forEach((item, qi) => {
      const original = list[qi];
      const box = document.createElement("div");
      box.className = "q";
      const kind = qType(original);
      const h = document.createElement("h3");
      h.textContent = (qi + 1) + ". " + item.q[L];
      box.appendChild(h);
      if (item.code) {
        const pre = document.createElement("pre");
        pre.textContent = item.code;
        box.appendChild(pre);
      }
      if (kind === "fill") {
        const input = document.createElement("input");
        input.type = "text";
        input.style.width = "100%";
        input.style.padding = ".65rem .8rem";
        input.style.borderRadius = ".65rem";
        input.style.border = "2px solid var(--highlight)";
        input.style.background = "var(--panel-2)";
        input.style.color = "var(--text)";
        input.style.font = "inherit";
        input.addEventListener("change", () => {
          const answersList = Array.isArray(item.fill) ? item.fill : [item.fill];
          const got = input.value.trim().toLowerCase();
          answers[qi] = answersList.some((a) => String(a).toLowerCase() === got) ? "OK" : "BAD";
        });
        box.appendChild(input);
      } else {
        const optsEl = document.createElement("div");
        optsEl.className = "opts";
        item.choices[L].forEach((label, ci) => {
          const b = document.createElement("button");
          b.type = "button";
          b.textContent = String.fromCharCode(97 + ci) + ") " + label;
          b.addEventListener("click", () => {
            answers[qi] = ci;
            Array.from(optsEl.children).forEach((btn) => btn.classList.remove("correct"));
            b.classList.add("correct");
          });
          optsEl.appendChild(b);
        });
        box.appendChild(optsEl);
      }
      container.appendChild(box);
    });

    return {
      items: displayList,
      originals: list,
      score() {
        let s = 0;
        displayList.forEach((item, i) => {
          const kind = qType(list[i]);
          let ok = false;
          if (kind === "fill") ok = answers[i] === "OK";
          else ok = answers[i] === item.answer;
          if (ok) s++;
          if (w.CodeCribSrs && srsOpts) {
            CodeCribSrs.recordAnswer(srsOpts.courseId, "exam", list[i]._bankIndex, ok, list[i], "exam");
          }
        });
        return { score: s, total: displayList.length, answers };
      },
      reveal(result) {
        Array.from(container.querySelectorAll(".q")).forEach((box, qi) => {
          const item = displayList[qi];
          let fb = box.querySelector(".feedback");
          if (!fb) { fb = document.createElement("div"); box.appendChild(fb); }
          const kind = qType(list[qi]);
          let ok = false;
          if (kind === "fill") ok = result.answers[qi] === "OK";
          else {
            ok = result.answers[qi] === item.answer;
            const opts = box.querySelector(".opts");
            if (opts) {
              Array.from(opts.children).forEach((btn, ci) => {
                btn.disabled = true;
                btn.classList.remove("correct", "wrong");
                if (ci === item.answer) btn.classList.add("correct");
                if (result.answers[qi] === ci && ci !== item.answer) btn.classList.add("wrong");
              });
            }
          }
          const inp = box.querySelector("input");
          if (inp) inp.disabled = true;
          fb.className = "feedback " + (ok ? "ok" : "bad");
          const L2 = CodeCribI18n.getLang();
          fb.textContent = (ok ? CodeCribI18n.t("correct") : CodeCribI18n.t("wrong")) + " " + (item.why[L2] || "");
        });
      }
    };
  }

  w.CodeCribQuiz = { renderQuiz, renderExam, shuffle, renderOne, qType, withShuffledChoices };
})(window);
