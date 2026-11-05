(function (w) {
  // Legacy shim: loads csharp course and exposes CodeCribLessons / CodeCribExam
  function expose() {
    const c = w.CodeCribCourseData && w.CodeCribCourseData.csharp;
    if (!c) return;
    w.CodeCribLessons = c.lessons;
    w.CodeCribExam = c.exam;
  }
  if (w.CodeCribCourseData && w.CodeCribCourseData.csharp) expose();
  else {
    var s = document.createElement("script");
    s.src = "js/courses/csharp.js";
    s.onload = expose;
    document.head.appendChild(s);
  }
})(window);
