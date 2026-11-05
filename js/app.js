(function () {
  function wireLang() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        CodeCribI18n.setLang(btn.dataset.lang);
        CodeCribI18n.apply();
        document.dispatchEvent(new CustomEvent("codecrib:lang"));
      });
    });
    CodeCribI18n.apply();
  }
  function wireMenu() {
    const btn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  function headerActive() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a[data-nav]").forEach((a) => {
      const nav = a.dataset.nav;
      let active = false;
      if (nav === "home") active = path === "index.html" || path === "";
      if (nav === "course") active = path === "course.html" || path === "lesson.html";
      if (nav === "exam") active = path === "exam.html";
      a.classList.toggle("active", active);
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    wireLang();
    wireMenu();
    headerActive();
  });
})();
