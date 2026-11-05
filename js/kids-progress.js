(function (w) {
  const KEY = "codecrib_kids_stickers_v1";
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function save(d) { localStorage.setItem(KEY, JSON.stringify(d)); }
  function award(courseId, lessonId, sticker) {
    const d = load();
    d[courseId] = d[courseId] || {};
    d[courseId][lessonId] = { sticker: sticker || "star", at: Date.now() };
    save(d);
    return d[courseId][lessonId];
  }
  function list(courseId) {
    const d = load();
    return d[courseId] || {};
  }
  function has(courseId, lessonId) {
    const d = load();
    return !!(d[courseId] && d[courseId][lessonId]);
  }
  w.CodeCribKidsStickers = { award, list, has };
})(window);
