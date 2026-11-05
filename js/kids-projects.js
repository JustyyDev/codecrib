(function (w) {
  function bag() {
    const P = w.CodeCribKidsProfiles;
    const cur = P && P.current();
    if (!cur) return null;
    return cur;
  }
  function saveProjects(projects) {
    const id = CodeCribKidsProfiles.currentId();
    if (!id) return;
    CodeCribKidsProfiles.update(id, { projects });
  }
  function all() {
    const p = bag();
    return (p && p.projects) || {};
  }
  function list() {
    const projects = all();
    return Object.keys(projects).map((id) => projects[id]).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  }
  function get(id) { return all()[id] || null; }
  function uid() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  const TEMPLATES = {
    empty: {
      id: "empty",
      title: { nl: "Leeg project", en: "Empty project" },
      code: '# Hallo!\nprint("Hallo wereld")\n'
    },
    guess: {
      id: "guess",
      title: { nl: "Raad het getal", en: "Guess the number" },
      code: 'geheim = 7\ngok = int(input("Raad een getal: "))\nif gok == geheim:\n    print("goed!")\nelif gok < geheim:\n    print("hoger")\nelse:\n    print("lager")\n'
    },
    draw: {
      id: "draw",
      title: { nl: "Tekenen met tekst", en: "Text drawing" },
      code: 'n = int(input("Hoeveel rijen? "))\nfor i in range(1, n + 1):\n    print("*" * i)\n'
    },
    treasure: {
      id: "treasure",
      title: { nl: "Schatzoeken", en: "Treasure hunt" },
      code: 'schat = 3\nkeuze = int(input("Kies een deur (1-5): "))\nif keuze == schat:\n    print("gevonden!")\nelse:\n    print("nog niet")\n'
    },
    story: {
      id: "story",
      title: { nl: "Verhalenmaker", en: "Story maker" },
      code: 'naam = input("Naam van de held: ")\ndier = input("Favoriet dier: ")\nplek = input("Magische plek: ")\nprint()\nprint("Er was eens", naam)\nprint("die een", dier, "ontmoette")\nprint("op de plek", plek + ".")\nprint("Samen maakten ze code!")\n'
    }
  };

  function create(opts) {
    opts = opts || {};
    const p = bag();
    if (!p) throw new Error("login");
    const tpl = TEMPLATES[opts.template] || TEMPLATES.empty;
    const id = uid();
    const L = (w.CodeCribI18n && CodeCribI18n.getLang()) || "nl";
    const name = (opts.name && String(opts.name).trim()) || (tpl.title[L] || tpl.title.nl);
    const projects = Object.assign({}, all());
    projects[id] = {
      id,
      name: name.slice(0, 40),
      template: tpl.id,
      code: opts.code != null ? opts.code : tpl.code,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    saveProjects(projects);
    return projects[id];
  }

  function save(id, patch) {
    const projects = Object.assign({}, all());
    if (!projects[id]) return null;
    if (patch.name != null) projects[id].name = String(patch.name).trim().slice(0, 40) || projects[id].name;
    if (patch.code != null) projects[id].code = String(patch.code);
    projects[id].updatedAt = Date.now();
    saveProjects(projects);
    return projects[id];
  }

  function duplicate(id) {
    const src = get(id);
    if (!src) return null;
    return create({ name: src.name + " (2)", code: src.code, template: src.template });
  }

  function remove(id) {
    const projects = Object.assign({}, all());
    if (!projects[id]) return false;
    delete projects[id];
    saveProjects(projects);
    return true;
  }

  function exportOne(id) {
    const proj = get(id);
    if (!proj) return null;
    return { kind: "codecrib-kids-project", version: 1, project: proj, exportedAt: Date.now() };
  }

  function importOne(data) {
    if (!data || data.kind !== "codecrib-kids-project" || !data.project) throw new Error("bad");
    return create({ name: data.project.name, code: data.project.code, template: data.project.template || "empty" });
  }

  function downloadJson(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename || "codecrib.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  w.CodeCribKidsProjects = {
    TEMPLATES, list, get, create, save, duplicate, remove,
    exportOne, importOne, downloadJson
  };
})(window);
