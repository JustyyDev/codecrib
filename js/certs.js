(function (w) {
  // Public salt: anyone can read this. Certificates are completion badges, not diplomas.
  const SALT = "CodeCrib-v3-completion-badge-not-a-diploma";
  const STORE = "codecrib_certs_v1";

  function b64url(bytes) {
    let s = btoa(String.fromCharCode(...bytes));
    return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }
  function b64urlDecode(str) {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) str += "=";
    const bin = atob(str);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  async function sha256Hex(text) {
    const data = new TextEncoder().encode(text);
    const dig = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(dig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  async function makeId(payload) {
    const body = { n: payload.name, c: payload.courseId, d: payload.date, t: payload.courseTitle };
    const sig = await sha256Hex([body.n, body.c, body.d, SALT].join("|"));
    body.s = sig.slice(0, 24);
    const json = JSON.stringify(body);
    const id = "CC1." + b64url(new TextEncoder().encode(json));
    return { id, body };
  }
  async function verifyId(id) {
    if (!id || !id.startsWith("CC1.")) return { ok: false, reason: "bad_format" };
    try {
      const json = new TextDecoder().decode(b64urlDecode(id.slice(4)));
      const body = JSON.parse(json);
      const expect = (await sha256Hex([body.n, body.c, body.d, SALT].join("|"))).slice(0, 24);
      if (body.s !== expect) return { ok: false, reason: "bad_sig", body };
      return { ok: true, body };
    } catch (e) {
      return { ok: false, reason: "parse_error" };
    }
  }
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE) || "{}"); } catch (e) { return {}; }
  }
  function saveCert(id, meta) {
    const d = loadStore();
    d[id] = meta;
    localStorage.setItem(STORE, JSON.stringify(d));
  }
  w.CodeCribCerts = { makeId, verifyId, saveCert, loadStore, SALT_NOTE: "public-client-salt" };
})(window);
