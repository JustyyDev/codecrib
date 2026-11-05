(function (w) {
  const STEP_IDS = ["goals", "demo", "do", "done"];

  function tKids(key) {
    const L = CodeCribI18n.getLang();
    const map = {
      goals: { nl: "Wat gaan we doen", en: "What we will do" },
      demo: { nl: "Kijk mee", en: "Watch with me" },
      do: { nl: "Zelf doen", en: "Try it yourself" },
      done: { nl: "Klaar!", en: "Done!" },
      next_demo: { nl: "Volgende demo", en: "Next demo" },
      prev_demo: { nl: "Vorige demo", en: "Previous demo" },
      hint: { nl: "Hint", en: "Hint" },
      read: { nl: "Voorlezen", en: "Read aloud" },
      stop_read: { nl: "Stop", en: "Stop" },
      almost: { nl: "Bijna! Probeer het nog eens.", en: "Almost! Try again." },
      nice: { nl: "Goed zo!", en: "Well done!" },
      teacher_say: { nl: "Zeg dit", en: "Say this" },
      teacher_mistakes: { nl: "Vaak mis", en: "Common mistakes" },
      teacher_break: { nl: "Pauze-idee", en: "Break idea" },
      settings: { nl: "Instellingen", en: "Settings" },
      calm: { nl: "Kalme modus", en: "Calm mode" },
      dyslexia: { nl: "Dyslexie-vriendelijk", en: "Dyslexia-friendly" },
      big: { nl: "Grote letters", en: "Big text" },
      spacing: { nl: "Meer letterruimte", en: "More letter space" },
      teacher: { nl: "Docentmodus (digibord)", en: "Teacher mode (board)" },
      sound: { nl: "Geluid aan", en: "Sound on" },
      sticker_got: { nl: "Nieuwe sticker!", en: "New sticker!" },
      next_step: { nl: "Volgende stap", en: "Next step" },
      prev_step: { nl: "Vorige stap", en: "Previous step" },
      run_here: { nl: "Probeer hieronder", en: "Try below" },
      your_stickers: { nl: "Jouw stickers", en: "Your stickers" }
    };
    return (map[key] && map[key][L]) || key;
  }

  function mountToolbar(host) {
    const s = CodeCribKidsSettings.get();
    host.innerHTML = "";
    host.className = "kids-toolbar";
    const title = document.createElement("strong");
    title.textContent = tKids("settings");
    host.appendChild(title);
    function toggle(key, labelKey) {
      const lab = document.createElement("label");
      const inp = document.createElement("input");
      inp.type = "checkbox";
      inp.checked = !!s[key];
      inp.addEventListener("change", () => {
        const patch = {}; patch[key] = inp.checked;
        CodeCribKidsSettings.set(patch);
      });
      lab.appendChild(inp);
      lab.appendChild(document.createTextNode(" " + tKids(labelKey)));
      host.appendChild(lab);
    }
    toggle("calm", "calm");
    toggle("dyslexia", "dyslexia");
    toggle("bigText", "big");
    toggle("letterSpacing", "spacing");
    toggle("teacherMode", "teacher");
    const read = document.createElement("button");
    read.type = "button";
    read.className = "btn secondary kids-read-btn";
    read.textContent = tKids("read");
    read.addEventListener("click", () => {
      const panel = document.querySelector(".kids-panel:not([hidden])");
      CodeCribKidsSettings.speak(panel ? panel.innerText : document.getElementById("kids-root").innerText);
    });
    const stop = document.createElement("button");
    stop.type = "button";
    stop.className = "btn ghost";
    stop.textContent = tKids("stop_read");
    stop.addEventListener("click", () => CodeCribKidsSettings.stopSpeak());
    host.appendChild(read);
    host.appendChild(stop);
  }

  function stepBar(host, active) {
    host.innerHTML = "";
    host.className = "kids-steps-bar";
    const labels = ["goals", "demo", "do", "done"];
    labels.forEach((id, i) => {
      const el = document.createElement("div");
      el.className = "step" + (id === active ? " active" : "") + (STEP_IDS.indexOf(active) > i ? " done" : "");
      el.textContent = (i + 1) + ". " + tKids(id);
      host.appendChild(el);
    });
  }

  async function renderKidsLesson(opts) {
    const { course, lesson, root } = opts;
    const L = CodeCribI18n.getLang();
    const cid = course.id;
    root.innerHTML = "";
    root.className = "kids-shell";
    document.body.classList.add("kids-page");
    CodeCribKidsSettings.apply();

    const toolbar = document.createElement("div");
    mountToolbar(toolbar);
    root.appendChild(toolbar);

    const bar = document.createElement("div");
    root.appendChild(bar);

    const title = document.createElement("h1");
    title.textContent = CodeCribI18n.t("lesson") + " " + lesson.id + ": " + lesson.title[L];
    root.appendChild(title);

    let phase = "goals";
    let demoIndex = 0;
    let doIndex = 0;
    let hintLevel = 0;
    let editor = null;

    const panels = {
      goals: document.createElement("section"),
      demo: document.createElement("section"),
      do: document.createElement("section"),
      done: document.createElement("section")
    };
    Object.keys(panels).forEach((k) => {
      panels[k].className = "kids-panel";
      panels[k].hidden = true;
      root.appendChild(panels[k]);
    });

    const nav = document.createElement("div");
    nav.className = "lesson-nav";
    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "btn ghost";
    prevBtn.textContent = tKids("prev_step");
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "btn";
    nextBtn.textContent = tKids("next_step");
    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);
    root.appendChild(nav);

    const quizHost = document.createElement("div");
    quizHost.className = "quiz";
    quizHost.id = "kids-quiz";
    root.appendChild(quizHost);

    function paintGoals() {
      const p = panels.goals;
      p.innerHTML = "<h2>" + tKids("goals") + "</h2><ul class='kids-goals'></ul>";
      const ul = p.querySelector("ul");
      (lesson.goals[L] || []).forEach((g) => {
        const li = document.createElement("li");
        li.textContent = g;
        ul.appendChild(li);
      });
    }

    function paintDemo() {
      const p = panels.demo;
      const steps = lesson.demo && lesson.demo.steps ? lesson.demo.steps : [];
      if (demoIndex < 0) demoIndex = 0;
      if (demoIndex >= steps.length) demoIndex = Math.max(0, steps.length - 1);
      const step = steps[demoIndex] || { say: { nl: "", en: "" } };
      p.innerHTML = "";
      const h = document.createElement("h2");
      h.textContent = tKids("demo") + " (" + (demoIndex + 1) + "/" + Math.max(steps.length, 1) + ")";
      p.appendChild(h);
      const say = document.createElement("p");
      say.textContent = step.say[L];
      p.appendChild(say);
      if (step.code) {
        const pre = document.createElement("pre");
        pre.className = "kids-demo-code";
        pre.textContent = step.code;
        p.appendChild(pre);
      }
      const dn = document.createElement("div");
      dn.className = "kids-demo-nav";
      const bPrev = document.createElement("button");
      bPrev.type = "button"; bPrev.className = "btn secondary"; bPrev.textContent = tKids("prev_demo");
      bPrev.disabled = demoIndex <= 0;
      bPrev.onclick = () => { demoIndex--; paintDemo(); };
      const bNext = document.createElement("button");
      bNext.type = "button"; bNext.className = "btn secondary"; bNext.textContent = tKids("next_demo");
      bNext.disabled = demoIndex >= steps.length - 1;
      bNext.onclick = () => { demoIndex++; paintDemo(); };
      dn.appendChild(bPrev); dn.appendChild(bNext);
      p.appendChild(dn);

      if (lesson.demo && lesson.demo.teacher) {
        const notes = document.createElement("div");
        notes.className = "kids-teacher-notes";
        const tch = lesson.demo.teacher;
        notes.innerHTML =
          "<strong>" + tKids("teacher_say") + "</strong>" + (tch.say[L] || "") +
          "<strong>" + tKids("teacher_mistakes") + "</strong>" + (tch.mistakes[L] || "") +
          "<strong>" + tKids("teacher_break") + "</strong>" + (tch.breakMoment[L] || "");
        p.appendChild(notes);
      }
    }

    async function paintDo() {
      const p = panels.do;
      const steps = lesson.doSteps || [];
      if (doIndex < 0) doIndex = 0;
      if (doIndex >= steps.length) doIndex = Math.max(0, steps.length - 1);
      const step = steps[doIndex] || {};
      hintLevel = 0;
      p.innerHTML = "";
      const h = document.createElement("h2");
      h.textContent = tKids("do");
      p.appendChild(h);
      const th = document.createElement("h3");
      th.textContent = (step.title && step.title[L]) || "";
      p.appendChild(th);
      const body = document.createElement("p");
      body.textContent = (step.body && step.body[L]) || "";
      p.appendChild(body);
      const hintBox = document.createElement("div");
      hintBox.className = "feedback";
      const hintRow = document.createElement("div");
      hintRow.className = "kids-hint-row";
      const hintBtn = document.createElement("button");
      hintBtn.type = "button";
      hintBtn.className = "btn secondary";
      hintBtn.textContent = tKids("hint");
      hintBtn.onclick = () => {
        const arr = (step.hints && step.hints[L]) || [];
        if (!arr.length) return;
        hintLevel = Math.min(hintLevel + 1, arr.length);
        hintBox.textContent = arr[hintLevel - 1];
        hintBox.className = "feedback kids-soft-bad";
      };
      hintRow.appendChild(hintBtn);
      p.appendChild(hintRow);
      p.appendChild(hintBox);
      const host = document.createElement("div");
      p.appendChild(host);
      const ex = {
        lang: (lesson.exercise && lesson.exercise.lang) || "python",
        starter: step.starter || (lesson.exercise && lesson.exercise.starter) || "",
        expected: step.expected || (lesson.exercise && lesson.exercise.expected),
        tests: step.tests || (lesson.exercise && lesson.exercise.tests)
      };
      if (w.CodeCribEditor) {
        editor = await CodeCribEditor.mount(host, {
          lang: ex.lang,
          langLabel: "python",
          value: ex.starter,
          expected: ex.expected,
          tests: ex.tests,
          runLabel: CodeCribI18n.t("run_check")
        });
      }
    }

    function paintDone() {
      const p = panels.done;
      p.innerHTML = "";
      const wrap = document.createElement("div");
      wrap.className = "kids-reward";
      const sticker = (lesson.reward && lesson.reward.sticker) || "star";
      const img = document.createElement("img");
      img.src = "assets/stickers/" + sticker + ".svg";
      img.alt = "";
      wrap.appendChild(img);
      const msg = document.createElement("p");
      msg.textContent = (lesson.reward && lesson.reward.text && lesson.reward.text[L]) || tKids("nice");
      wrap.appendChild(msg);
      const got = document.createElement("p");
      got.textContent = tKids("sticker_got");
      wrap.appendChild(got);
      p.appendChild(wrap);

      CodeCribKidsStickers.award(cid, lesson.id, sticker);
      CodeCribProgress.markLesson(cid, lesson.id);

      const shelfTitle = document.createElement("h2");
      shelfTitle.textContent = tKids("your_stickers");
      p.appendChild(shelfTitle);
      const shelf = document.createElement("div");
      shelf.className = "kids-sticker-shelf";
      const all = ["star","heart","rocket","flower","smile","moon","fish","tree"];
      const earned = CodeCribKidsStickers.list(cid);
      all.forEach((name) => {
        const im = document.createElement("img");
        im.src = "assets/stickers/" + name + ".svg";
        im.alt = name;
        const hit = Object.keys(earned).some((lid) => earned[lid].sticker === name);
        if (hit) im.classList.add("earned");
        shelf.appendChild(im);
      });
      p.appendChild(shelf);

      // quiz after reward, soft mode
      quizHost.innerHTML = "<h2>" + CodeCribI18n.t("quiz_title") + "</h2>";
      CodeCribQuiz.renderQuiz(quizHost, lesson.quiz || [], L, {
        courseId: cid,
        lessonId: lesson.id,
        source: "lesson",
        kidsMode: true
      });
    }

    async function showPhase() {
      stepBar(bar, phase);
      Object.keys(panels).forEach((k) => { panels[k].hidden = k !== phase; });
      if (phase === "goals") paintGoals();
      if (phase === "demo") paintDemo();
      if (phase === "do") await paintDo();
      if (phase === "done") paintDone();
      prevBtn.disabled = phase === "goals";
      nextBtn.textContent = phase === "done" ? CodeCribI18n.t("next") : tKids("next_step");
      CodeCribKidsSettings.stopSpeak();
    }

    prevBtn.onclick = () => {
      const i = STEP_IDS.indexOf(phase);
      if (i > 0) { phase = STEP_IDS[i - 1]; showPhase(); }
    };
    nextBtn.onclick = () => {
      const i = STEP_IDS.indexOf(phase);
      if (i < STEP_IDS.length - 1) {
        phase = STEP_IDS[i + 1];
        showPhase();
      } else {
        const next = course.lessons.find((x) => x.id === lesson.id + 1);
        if (next) location.href = "lesson-kids.html?course=" + cid + "&id=" + next.id;
        else location.href = "course.html?course=" + cid;
      }
    };

    function onKey(ev) {
      if (!CodeCribKidsSettings.get().teacherMode) return;
      if (phase !== "demo") return;
      if (ev.key === "ArrowRight") { demoIndex++; paintDemo(); }
      if (ev.key === "ArrowLeft") { demoIndex--; paintDemo(); }
    }
    document.addEventListener("keydown", onKey);

    await showPhase();
    return { destroy() { document.removeEventListener("keydown", onKey); } };
  }

  w.CodeCribKidsLesson = { render: renderKidsLesson, tKids, mountToolbar };
})(window);
