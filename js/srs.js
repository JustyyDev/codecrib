(function (w) {
  const KEY = "codecrib_srs_v1";
  // Leitner intervals in days
  const INTERVALS = [0, 1, 3, 7, 14, 30];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }

  function cardKey(courseId, lessonId, qIndex, source) {
    return [courseId, lessonId || "exam", source || "lesson", qIndex].join("::");
  }

  function ensureCard(d, key, meta) {
    if (!d[key]) {
      d[key] = {
        box: 1,
        due: Date.now(),
        seen: 0,
        correct: 0,
        wrong: 0,
        meta: meta || {}
      };
    } else if (meta) {
      d[key].meta = Object.assign({}, d[key].meta || {}, meta);
    }
    return d[key];
  }

  function dayMs(n) { return n * 24 * 60 * 60 * 1000; }

  function recordAnswer(courseId, lessonId, qIndex, ok, questionSnapshot, source) {
    const d = load();
    const key = cardKey(courseId, lessonId, qIndex, source || "lesson");
    const card = ensureCard(d, key, {
      courseId, lessonId, qIndex, source: source || "lesson",
      q: questionSnapshot
    });
    card.seen += 1;
    if (ok) {
      card.correct += 1;
      card.box = Math.min(5, (card.box || 1) + 1);
      const days = INTERVALS[card.box] != null ? INTERVALS[card.box] : 30;
      card.due = Date.now() + dayMs(days);
    } else {
      card.wrong += 1;
      card.box = 1;
      card.due = Date.now(); // back immediately for repetition
    }
    card.last = Date.now();
    save(d);
    return card;
  }

  function dueCards(now) {
    now = now || Date.now();
    const d = load();
    return Object.keys(d).map((k) => ({ key: k, ...d[k] }))
      .filter((c) => c.due <= now && c.meta && c.meta.q)
      .sort((a, b) => a.due - b.due || a.box - b.box);
  }

  function dueCount() { return dueCards().length; }

  function allCards() {
    const d = load();
    return Object.keys(d).map((k) => ({ key: k, ...d[k] }));
  }

  w.CodeCribSrs = {
    INTERVALS, recordAnswer, dueCards, dueCount, allCards, cardKey, load, save
  };
})(window);
