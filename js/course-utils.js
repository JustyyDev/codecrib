(function (w) {
  function param(name, fallback) {
    const u = new URL(location.href);
    return u.searchParams.get(name) || fallback;
  }
  function courseId() {
    const id = param("course", null) || param("lang", null) || "csharp";
    const ok = (w.CodeCribRegistry || []).some((c) => c.id === id);
    return ok ? id : "csharp";
  }
  function meta(id) {
    return (w.CodeCribRegistry || []).find((c) => c.id === id) || null;
  }
  function data(id) {
    const bag = w.CodeCribCourseData || {};
    return bag[id] || bag.csharp || null;
  }
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error("load fail " + src));
      document.head.appendChild(s);
    });
  }
  async function ensureCourse(id) {
    if (w.CodeCribCourseData && w.CodeCribCourseData[id]) return w.CodeCribCourseData[id];
    const m = meta(id);
    if (!m) throw new Error("unknown course");
    await loadScript(m.file);
    return data(id);
  }
  w.CodeCribUtil = { param, courseId, meta, data, ensureCourse, loadScript };
})(window);
