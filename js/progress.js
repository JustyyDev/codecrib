(function (w) {
  const KEY = "codecrib_progress_v2";
  const OLD = "codecrib_progress_v1";
  function load() {
    try {
      let d = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!d) {
        const legacy = JSON.parse(localStorage.getItem(OLD) || "{}");
        d = { courses: {} };
        if (legacy.lessons) d.courses.csharp = { lessons: legacy.lessons, exam: legacy.exam || null };
        else d = { courses: {} };
      }
      d.courses = d.courses || {};
      return d;
    } catch (e) { return { courses: {} }; }
  }
  function save(data) { localStorage.setItem(KEY, JSON.stringify(data)); }
  function courseBucket(d, courseId) {
    d.courses[courseId] = d.courses[courseId] || { lessons: {}, exam: null };
    d.courses[courseId].lessons = d.courses[courseId].lessons || {};
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
      courseBucket(d, courseId).exam = { score, total, at: Date.now() };
      save(d);
    },
    getExam(courseId) {
      const b = load().courses[courseId];
      return (b && b.exam) || null;
    }
  };
})(window);
