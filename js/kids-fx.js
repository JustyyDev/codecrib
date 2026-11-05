(function (w) {
  function motionAllowed() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    const s = w.CodeCribKidsSettings && CodeCribKidsSettings.get();
    if (s && s.animOff) return false;
    return true;
  }
  function calm() {
    const s = w.CodeCribKidsSettings && CodeCribKidsSettings.get();
    return !!(s && s.calm);
  }

  function mountMascot(host, mood) {
    if (!host) return null;
    host.classList.add("kids-mascot-wrap");
    host.innerHTML = '<img class="kids-mascot" src="assets/kids/mascot.svg" alt="Cribby" />' +
      '<div class="kids-mascot-bubble" hidden></div>';
    const img = host.querySelector(".kids-mascot");
    setMood(host, mood || "wave");
    return host;
  }

  function setMood(host, mood) {
    if (!host) return;
    const img = host.querySelector(".kids-mascot");
    if (!img) return;
    img.dataset.mood = mood || "idle";
    img.classList.remove("mood-wave", "mood-cheer", "mood-think", "mood-idle");
    if (!motionAllowed()) {
      img.classList.add("mood-idle");
      return;
    }
    img.classList.add("mood-" + (mood || "idle"));
  }

  function say(host, text, speakToo) {
    if (!host) return;
    const bubble = host.querySelector(".kids-mascot-bubble");
    if (!bubble) return;
    bubble.hidden = !text;
    bubble.textContent = text || "";
    if (speakToo && w.CodeCribKidsSettings) CodeCribKidsSettings.speak(text);
  }

  function softConfetti(root) {
    if (!motionAllowed()) return;
    root = root || document.body;
    const layer = document.createElement("div");
    layer.className = "kids-confetti" + (calm() ? " calm" : "");
    layer.setAttribute("aria-hidden", "true");
    const colors = ["#ffd84a", "#e83a7a", "#6bcf8e", "#7a9cff", "#ff8fab"];
    const n = calm() ? 10 : 18;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.style.left = (8 + Math.random() * 84) + "%";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = (Math.random() * 0.4) + "s";
      p.style.animationDuration = (calm() ? 2.4 : 1.6) + Math.random() * 0.8 + "s";
      layer.appendChild(p);
    }
    root.appendChild(layer);
    setTimeout(() => layer.remove(), 3200);
  }

  function popIn(el) {
    if (!el) return;
    el.classList.add("kids-pop");
    if (!motionAllowed()) return;
    el.classList.add("kids-pop-anim");
  }

  w.CodeCribKidsFx = { motionAllowed, calm, mountMascot, setMood, say, softConfetti, popIn };
})(window);
