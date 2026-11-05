(function (w) {
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function renderQuiz(container, items, lang) {
    container.innerHTML = "";
    const L = lang || CodeCribI18n.getLang();
    items.forEach((item, qi) => {
      const box = document.createElement("div");
      box.className = "q";
      const h = document.createElement("h3");
      h.textContent = (qi + 1) + ". " + item.q[L];
      box.appendChild(h);
      const opts = document.createElement("div");
      opts.className = "opts";
      const fb = document.createElement("div");
      fb.className = "feedback";
      item.choices[L].forEach((label, ci) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = String.fromCharCode(97 + ci) + ") " + label;
        b.addEventListener("click", () => {
          if (box.dataset.locked) return;
          box.dataset.locked = "1";
          Array.from(opts.children).forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === item.answer) btn.classList.add("correct");
            if (idx === ci && ci !== item.answer) btn.classList.add("wrong");
          });
          const ok = ci === item.answer;
          fb.className = "feedback " + (ok ? "ok" : "bad");
          fb.textContent = (ok ? CodeCribI18n.t("correct") : CodeCribI18n.t("wrong")) + " " + item.why[L];
        });
        opts.appendChild(b);
      });
      box.appendChild(opts);
      box.appendChild(fb);
      container.appendChild(box);
    });
  }

  function renderExam(container, items, lang, doShuffle) {
    container.innerHTML = "";
    const L = lang || CodeCribI18n.getLang();
    const list = doShuffle === false ? items.slice() : shuffle(items);
    const answers = new Array(list.length).fill(null);
    list.forEach((item, qi) => {
      const box = document.createElement("div");
      box.className = "q";
      const h = document.createElement("h3");
      h.textContent = (qi + 1) + ". " + item.q[L];
      box.appendChild(h);
      const opts = document.createElement("div");
      opts.className = "opts";
      item.choices[L].forEach((label, ci) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = String.fromCharCode(97 + ci) + ") " + label;
        b.addEventListener("click", () => {
          answers[qi] = ci;
          Array.from(opts.children).forEach((btn) => btn.classList.remove("correct"));
          b.classList.add("correct");
        });
        opts.appendChild(b);
      });
      box.appendChild(opts);
      container.appendChild(box);
    });
    return {
      items: list,
      score() {
        let s = 0;
        list.forEach((item, i) => { if (answers[i] === item.answer) s++; });
        return { score: s, total: list.length, answers };
      },
      reveal(result) {
        Array.from(container.querySelectorAll(".q")).forEach((box, qi) => {
          const item = list[qi];
          const opts = box.querySelector(".opts");
          let fb = box.querySelector(".feedback");
          if (!fb) { fb = document.createElement("div"); box.appendChild(fb); }
          Array.from(opts.children).forEach((btn, ci) => {
            btn.disabled = true;
            btn.classList.remove("correct", "wrong");
            if (ci === item.answer) btn.classList.add("correct");
            if (result.answers[qi] === ci && ci !== item.answer) btn.classList.add("wrong");
          });
          const ok = result.answers[qi] === item.answer;
          fb.className = "feedback " + (ok ? "ok" : "bad");
          const L2 = CodeCribI18n.getLang();
          fb.textContent = (ok ? CodeCribI18n.t("correct") : CodeCribI18n.t("wrong")) + " " + item.why[L2];
        });
      }
    };
  }

  w.CodeCribQuiz = { renderQuiz, renderExam, shuffle };
})(window);
