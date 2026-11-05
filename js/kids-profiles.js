(function (w) {
  const STORE = "codecrib_kids_profiles_v1";
  const SESSION = "codecrib_kids_session_v1";
  const AVATARS = ["fox","cat","owl","frog","bunny","bear","dino","fish"];
  const PICS = ["star","heart","moon","sun","cloud","tree","flower","rocket","ball","book","key","music"];

  function loadStore() {
    try {
      const d = JSON.parse(localStorage.getItem(STORE) || "{}");
      d.profiles = d.profiles || {};
      return d;
    } catch (e) { return { profiles: {} }; }
  }
  function saveStore(d) { localStorage.setItem(STORE, JSON.stringify(d)); }

  function uid() {
    return "k" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function list() {
    const d = loadStore();
    return Object.keys(d.profiles).map((id) => {
      const p = d.profiles[id];
      return { id, nick: p.nick, avatar: p.avatar, createdAt: p.createdAt };
    }).sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  }

  function get(id) {
    const d = loadStore();
    return d.profiles[id] || null;
  }

  function currentId() {
    try { return localStorage.getItem(SESSION) || null; } catch (e) { return null; }
  }
  function current() {
    const id = currentId();
    return id ? get(id) : null;
  }
  function setSession(id) {
    if (id) localStorage.setItem(SESSION, id);
    else localStorage.removeItem(SESSION);
    document.dispatchEvent(new CustomEvent("codecrib:kids-profile", { detail: { id } }));
  }
  function logout() { setSession(null); }

  function normalizeNick(n) {
    return String(n || "").trim().slice(0, 16);
  }

  function create({ nick, avatar, picPass }) {
    nick = normalizeNick(nick);
    if (!nick) throw new Error("nick");
    if (AVATARS.indexOf(avatar) < 0) avatar = AVATARS[0];
    if (!Array.isArray(picPass) || picPass.length !== 3) throw new Error("pass");
    if (!picPass.every((p) => PICS.indexOf(p) >= 0)) throw new Error("pass");
    const d = loadStore();
    const id = uid();
    d.profiles[id] = {
      id,
      nick,
      avatar,
      picPass: picPass.slice(),
      createdAt: Date.now(),
      settings: null,
      stickers: {},
      lessons: {},
      projects: {}
    };
    saveStore(d);
    setSession(id);
    return d.profiles[id];
  }

  function verify(id, picPass) {
    const p = get(id);
    if (!p) return false;
    if (!Array.isArray(picPass) || picPass.length !== 3) return false;
    return p.picPass[0] === picPass[0] && p.picPass[1] === picPass[1] && p.picPass[2] === picPass[2];
  }

  function login(id, picPass) {
    if (!verify(id, picPass)) return false;
    setSession(id);
    return true;
  }

  function update(id, patch) {
    const d = loadStore();
    if (!d.profiles[id]) return null;
    const p = d.profiles[id];
    if (patch.nick != null) p.nick = normalizeNick(patch.nick);
    if (patch.avatar && AVATARS.indexOf(patch.avatar) >= 0) p.avatar = patch.avatar;
    if (patch.settings) p.settings = Object.assign({}, p.settings || {}, patch.settings);
    if (patch.stickers) p.stickers = patch.stickers;
    if (patch.lessons) p.lessons = patch.lessons;
    if (patch.projects) p.projects = patch.projects;
    saveStore(d);
    return p;
  }

  function saveSettings(settings) {
    const id = currentId();
    if (!id) return;
    update(id, { settings });
  }

  function markLesson(courseId, lessonId) {
    const id = currentId();
    if (!id) return;
    const p = get(id);
    const lessons = Object.assign({}, p.lessons || {});
    lessons[courseId] = lessons[courseId] || {};
    lessons[courseId][lessonId] = true;
    update(id, { lessons });
  }

  function isLessonDone(courseId, lessonId) {
    const p = current();
    return !!(p && p.lessons && p.lessons[courseId] && p.lessons[courseId][lessonId]);
  }

  function awardSticker(courseId, lessonId, sticker) {
    const id = currentId();
    if (!id) return null;
    const p = get(id);
    const stickers = Object.assign({}, p.stickers || {});
    stickers[courseId] = stickers[courseId] || {};
    stickers[courseId][lessonId] = { sticker: sticker || "star", at: Date.now() };
    update(id, { stickers });
    return stickers[courseId][lessonId];
  }

  function stickers(courseId) {
    const p = current();
    if (!p || !p.stickers) return {};
    return p.stickers[courseId] || {};
  }

  function exportProfile(id) {
    const p = get(id || currentId());
    if (!p) return null;
    // Never include picPass in teacher export? Teacher needs full restore - include hashed-like but we store plain pics locally.
    // Export includes picPass because it stays offline and is needed to restore login on another PC.
    return {
      kind: "codecrib-kids-profile",
      version: 1,
      exportedAt: Date.now(),
      profile: JSON.parse(JSON.stringify(p))
    };
  }

  function importProfile(data) {
    if (!data || data.kind !== "codecrib-kids-profile" || !data.profile) throw new Error("bad");
    const src = data.profile;
    const d = loadStore();
    const id = uid();
    d.profiles[id] = Object.assign({}, src, { id, createdAt: Date.now() });
    if (!d.profiles[id].nick) d.profiles[id].nick = "Kid";
    saveStore(d);
    return d.profiles[id];
  }

  function avatarUrl(name) { return "assets/kids/avatars/" + (name || "fox") + ".svg"; }
  function picUrl(name) { return "assets/kids/pics/" + name + ".svg"; }

  w.CodeCribKidsProfiles = {
    AVATARS, PICS, list, get, current, currentId, create, login, logout, verify,
    update, saveSettings, markLesson, isLessonDone, awardSticker, stickers,
    exportProfile, importProfile, avatarUrl, picUrl, setSession
  };
})(window);
