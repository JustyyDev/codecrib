(function (w) {
  const KEY = "codecrib_kids_settings_v1";
  const defaults = {
    calm: false,
    animOff: false,
    dyslexia: false,
    bigText: true,
    letterSpacing: false,
    teacherMode: false,
    sound: false,
    readAloud: false
  };
  function fromProfile() {
    try {
      if (w.CodeCribKidsProfiles && CodeCribKidsProfiles.current()) {
        const s = CodeCribKidsProfiles.current().settings;
        if (s) return s;
      }
    } catch (e) {}
    return null;
  }
  function load() {
    const profileSettings = fromProfile();
    try {
      const local = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || "{}"));
      return Object.assign({}, defaults, local, profileSettings || {});
    } catch (e) {
      return Object.assign({}, defaults, profileSettings || {});
    }
  }
  function save(s) {
    localStorage.setItem(KEY, JSON.stringify(s));
    if (w.CodeCribKidsProfiles && CodeCribKidsProfiles.currentId()) {
      CodeCribKidsProfiles.saveSettings(s);
    }
  }
  function apply(s) {
    s = s || load();
    const root = document.documentElement;
    root.classList.toggle("kids-calm", !!s.calm);
    root.classList.toggle("kids-anim-off", !!s.animOff);
    root.classList.toggle("kids-dyslexia", !!s.dyslexia);
    root.classList.toggle("kids-big-text", !!s.bigText);
    root.classList.toggle("kids-letter-spacing", !!s.letterSpacing);
    root.classList.toggle("kids-teacher", !!s.teacherMode);
    root.classList.toggle("kids-sound", !!s.sound);
    document.dispatchEvent(new CustomEvent("codecrib:kids-settings", { detail: s }));
  }
  function set(patch) {
    const s = Object.assign(load(), patch || {});
    save(s);
    apply(s);
    return s;
  }
  function get() { return load(); }
  function speak(text) {
    if (!("speechSynthesis" in w)) return;
    try { w.speechSynthesis.cancel(); } catch (e) {}
    const u = new SpeechSynthesisUtterance(String(text || ""));
    const lang = (w.CodeCribI18n && CodeCribI18n.getLang() === "en") ? "en-US" : "nl-NL";
    u.lang = lang;
    u.rate = 0.95;
    w.speechSynthesis.speak(u);
  }
  function stopSpeak() {
    try { if ("speechSynthesis" in w) w.speechSynthesis.cancel(); } catch (e) {}
  }
  w.CodeCribKidsSettings = { get, set, apply, speak, stopSpeak, defaults };
})(window);
