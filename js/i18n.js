(function (w) {
  const KEY = "codecrib_lang";
  const dict = {
    nl: {
      nav_home: "Home",
      nav_course: "Cursussen",
      nav_exam: "Proefexamen",
      brand: "CodeCrib",
      hero_title: "Leer coderen in een chill crib",
      hero_tag: "Gratis, vriendelijk en gemaakt voor gamers en modders. Kies een taal, oefen met quizzes, NL en EN.",
      cta_start: "Bekijk cursussen",
      cta_exam: "Proefexamen",
      card1_t: "Korte lessen",
      card1_p: "Geen ellenlange modules. Kleine stappen, meteen oefenen.",
      card2_t: "Van games tot systems",
      card2_p: "FNF, Roblox, Godot, web, C-familie, data: pick your crib.",
      card3_t: "Voortgang lokaal",
      card3_p: "Alles blijft in jouw browser. Geen account nodig.",
      pick_title: "Kies een taal",
      pick_sub: "Gegroepeerd op Games, Web, Systems en Data.",
      course_title: "Cursus",
      course_intro: "Korte lessen met originele oefenvragen.",
      progress: "Voortgang",
      lesson: "Les",
      done: "klaar",
      next: "Volgende les",
      prev: "Vorige les",
      back_course: "Terug naar cursus",
      quiz_title: "Check jezelf",
      explain: "Uitleg",
      correct: "Goed!",
      wrong: "Niet helemaal.",
      mark_done: "Markeer les als klaar",
      exam_title: "Proefexamen",
      exam_intro: "Originele meerkeuzevragen (geschud). Geen echte examenvragen.",
      start_exam: "Start proefexamen",
      submit_exam: "Bereken score",
      your_score: "Jouw score",
      again: "Opnieuw (nieuwe shuffle)",
      footer: "made by JustyTCCD",
      footer_note: "CodeCrib is niet verbonden met freeCodeCamp, Microsoft, Godot, Roblox of Friday Night Funkin'. Badges zijn hand-made, geen officiele logo's.",
      pitfalls: "Valkuil",
      lessons_count: "lessen",
      open_course: "Open cursus",
      menu: "Menu",
      lang: "NL"
    },
    en: {
      nav_home: "Home",
      nav_course: "Courses",
      nav_exam: "Practice exam",
      brand: "CodeCrib",
      hero_title: "Learn to code in a chill crib",
      hero_tag: "Free, friendly, built for gamers and modders. Pick a language, practice quizzes, NL and EN.",
      cta_start: "Browse courses",
      cta_exam: "Practice exam",
      card1_t: "Short lessons",
      card1_p: "No endless modules. Small steps, practice right away.",
      card2_t: "From games to systems",
      card2_p: "FNF, Roblox, Godot, web, C-family, data: pick your crib.",
      card3_t: "Local progress",
      card3_p: "Everything stays in your browser. No account needed.",
      pick_title: "Pick a language",
      pick_sub: "Grouped into Games, Web, Systems and Data.",
      course_title: "Course",
      course_intro: "Short lessons with original practice questions.",
      progress: "Progress",
      lesson: "Lesson",
      done: "done",
      next: "Next lesson",
      prev: "Previous lesson",
      back_course: "Back to course",
      quiz_title: "Check yourself",
      explain: "Explain",
      correct: "Nice!",
      wrong: "Not quite.",
      mark_done: "Mark lesson done",
      exam_title: "Practice exam",
      exam_intro: "Original multiple-choice questions (shuffled). Not real exam questions.",
      start_exam: "Start practice exam",
      submit_exam: "Score me",
      your_score: "Your score",
      again: "Again (new shuffle)",
      footer: "made by JustyTCCD",
      footer_note: "CodeCrib is not affiliated with freeCodeCamp, Microsoft, Godot, Roblox, or Friday Night Funkin'. Badges are hand-made, not official logos.",
      pitfalls: "Pitfall",
      lessons_count: "lessons",
      open_course: "Open course",
      menu: "Menu",
      lang: "EN"
    }
  };
  function getLang() {
    const v = localStorage.getItem(KEY);
    return v === "en" ? "en" : "nl";
  }
  function setLang(l) { localStorage.setItem(KEY, l === "en" ? "en" : "nl"); }
  function t(key) {
    const L = dict[getLang()] || dict.nl;
    return L[key] || dict.nl[key] || key;
  }
  function apply() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === getLang() ? "true" : "false");
    });
    document.documentElement.lang = getLang();
  }
  w.CodeCribI18n = { getLang, setLang, t, apply, dict };
})(window);
