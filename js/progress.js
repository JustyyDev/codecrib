(function (w) {
  const KEY = "codecrib_progress_v2";
  const OLD = "codecrib_progress_v1";
  function load() {
    try {
      let d = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!d) {
        const legacy = JSON.parse(localStorage.getItem(OLD) || "{}");
        d = { courses: {} };
        if (legacy.lessons) d.courses.csharp = { lessons: legacy.lessons, exam: legacy.exam || null, challenges: {} };
      }
      d.courses = d.courses || {};
      return d;
    } catch (e) { return { courses: {} }; }
  }
  function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }
  function courseBucket(d, courseId) {
    d.courses[courseId] = d.courses[courseId] || { lessons: {}, exam: null, challenges: {} };
    d.courses[courseId].lessons = d.courses[courseId].lessons || {};
    d.courses[courseId].challenges = d.courses[courseId].challenges || {};
    return d.courses[courseId];
  }
  w.CodeCribProgress = {
    get() { return load(); },
    markLesson(courseId, id) {
      const d = load();
      courseBucket(d, courseId).lessons[id] = true;
      save(d);
    },
    isDone(courseId, id) {
      const b = load().courses[courseId];
      return !!(b && b.lessons && b.lessons[id]);
    },
    lessonCount(courseId, total) {
      const b = load().courses[courseId];
      const n = b && b.lessons ? Object.keys(b.lessons).filter((k) => b.lessons[k]).length : 0;
      return { done: n, total: total };
    },
    saveExam(courseId, score, total) {
      const d = load();
      courseBucket(d, courseId).exam = { score, total, at: Date.now(), pct: total ? (score / total) * 100 : 0 };
      save(d);
    },
    getExam(courseId) {
      const b = load().courses[courseId];
      return (b && b.exam) || null;
    },
    markChallenge(courseId, id) {
      const d = load();
      courseBucket(d, courseId).challenges[id] = true;
      save(d);
    },
    isChallengeDone(courseId, id) {
      const b = load().courses[courseId];
      return !!(b && b.challenges && b.challenges[id]);
    },
    challengeCount(courseId, total) {
      const b = load().courses[courseId];
      const n = b && b.challenges ? Object.keys(b.challenges).filter((k) => b.challenges[k]).length : 0;
      return { done: n, total: total };
    },
    examPassed(courseId, minPct) {
      const ex = this.getExam(courseId);
      if (!ex || !ex.total) return false;
      const pct = ex.pct != null ? ex.pct : (ex.score / ex.total) * 100;
      return pct >= (minPct == null ? 80 : minPct);
    },
    allChallengesDone(courseId, challengeIds) {
      return challengeIds.every((id) => this.isChallengeDone(courseId, id));
    }
  };
})(window);
