(() => {
  const NS = "http://www.w3.org/2000/svg";

  /* ---------- Clics : cartes, blasons annotés, aide au placement ---------- */
  function remplir(zone, titre, texte) {
    const blocs = [];
    if (titre) { const h = document.createElement("h3"); h.textContent = titre; blocs.push(h); }
    const p = document.createElement("p");
    p.textContent = texte || "Aucune information disponible.";
    blocs.push(p);
    zone.replaceChildren(...blocs);
  }

  document.addEventListener("click", (e) => {
    const point = e.target.closest(".carte-point");
    if (point) {
      const carte = point.closest(".carte");
      carte.querySelectorAll(".carte-point").forEach((b) => b.classList.toggle("actif", b === point));
      remplir(carte.querySelector(".carte-info"), point.dataset.titre, point.dataset.texte);
      return;
    }

    const note = e.target.closest(".annote-note, .annote-pt");
    if (note) {
      const fig = note.closest(".annote");
      fig.querySelectorAll(".annote-note, .annote-pt").forEach((b) => b.classList.toggle("actif", b.dataset.i === note.dataset.i));
      remplir(fig.querySelector(".annote-detail"), note.dataset.titre, note.dataset.texte);
      return;
    }

    // Aide au placement : ajoute ?coords à l'URL, puis clique sur l'image
    if (location.search.includes("coords")) {
      const cible = e.target.closest(".carte-wrap img, .annote-wrap img, .plan-canvas");
      if (cible) {
        const r = cible.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
        const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
        const zone = cible.closest(".carte, .annote, .plan");
        const sortie = zone && zone.querySelector(".carte-info, .annote-detail, .plan-detail");
        if (sortie) sortie.textContent = `gauche / x : ${x}   |   haut / y : ${y}`;
      }
    }
  });

  /* ---------- Flèches des blasons annotés ---------- */
  document.querySelectorAll(".annote").forEach((fig) => {
    const svg = fig.querySelector(".annote-lignes");
    const notes = [...fig.querySelectorAll(".annote-note")];
    const points = [...fig.querySelectorAll(".annote-pt")];
    const dessiner = () => {
      svg.replaceChildren();
      if (!window.matchMedia("(min-width:701px)").matches) return;
      const R = fig.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${R.width} ${R.height}`);
      const defs = document.createElementNS(NS, "defs");
      defs.innerHTML = '<marker id="fl-annote" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#ff2a2a"/></marker>';
      svg.appendChild(defs);
      notes.forEach((n) => {
        const pt = points.find((p) => p.dataset.i === n.dataset.i);
        if (!pt) return;
        const a = n.getBoundingClientRect();
        const b = pt.getBoundingClientRect();
        const aGauche = !!n.closest(".annote-col--g");
        const x1 = (aGauche ? a.right : a.left) - R.left;
        const y1 = a.top + a.height / 2 - R.top;
        const cx = b.left + b.width / 2 - R.left;
        const cy = b.top + b.height / 2 - R.top;
        const dx = cx - x1, dy = cy - y1, d = Math.hypot(dx, dy) || 1;
        const r = b.width / 2 + 3;
        const ligne = document.createElementNS(NS, "line");
        ligne.setAttribute("x1", x1); ligne.setAttribute("y1", y1);
        ligne.setAttribute("x2", cx - dx / d * r); ligne.setAttribute("y2", cy - dy / d * r);
        ligne.setAttribute("marker-end", "url(#fl-annote)");
        svg.appendChild(ligne);
      });
    };
    const img = fig.querySelector(".annote-wrap img");
    if (img && !img.complete) img.addEventListener("load", dessiner);
    window.addEventListener("resize", dessiner);
    dessiner();
  });

  /* ---------- Plans de bataille interactifs ---------- */
  const COULEURS = { jac: "#ff5a5a", gouv: "#6aa6ea", esp: "#e6b44a", autre: "#cccccc" };
  const NOMS_CAMPS = { jac: "Jacobites", gouv: "Gouvernement", esp: "Espagnols", autre: "Autres" };

  document.querySelectorAll(".plan").forEach((racine, idx) => {
    let data;
    try { data = JSON.parse(racine.dataset.plan); } catch (err) { return; }
    const phases = data.phases || [];
    if (!phases.length) return;

    const canvas = racine.querySelector(".plan-canvas");
    const svg = racine.querySelector(".plan-fleches");
    const quand = racine.querySelector(".plan-quand");
    const titre = racine.querySelector(".plan-titre");
    const texte = racine.querySelector(".plan-texte");
    const detail = racine.querySelector(".plan-detail");
    const puces = racine.querySelector(".plan-puces");
    const prec = racine.querySelector(".plan-prec");
    const suiv = racine.querySelector(".plan-suiv");
    const auto = racine.querySelector(".plan-auto");
    let courante = 0, minuteur = null;

    // marqueurs de flèches
    const defs = document.createElementNS(NS, "defs");
    Object.entries(COULEURS).forEach(([camp, couleur]) => {
      const m = document.createElementNS(NS, "marker");
      m.setAttribute("id", `fl-${idx}-${camp}`);
      m.setAttribute("viewBox", "0 0 10 10"); m.setAttribute("refX", "8"); m.setAttribute("refY", "5");
      m.setAttribute("markerWidth", "5"); m.setAttribute("markerHeight", "5"); m.setAttribute("orient", "auto");
      m.innerHTML = `<path d="M0,0 L10,5 L0,10 z" fill="${couleur}"/>`;
      defs.appendChild(m);
    });
    svg.appendChild(defs);
    const groupe = document.createElementNS(NS, "g");
    svg.appendChild(groupe);

    // décors fixes
    (data.decors || []).forEach((d) => {
      const el = document.createElement("div");
      el.className = `plan-decor plan-decor--${d.type || "relief"}`;
      Object.assign(el.style, { left: d.x + "%", top: d.y + "%", width: d.w + "%", height: d.h + "%" });
      el.textContent = d.nom || "";
      canvas.appendChild(el);
    });

    // unités
    const unites = {};
    (data.unites || []).forEach((u) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `plan-unit plan-unit--${u.camp || "autre"} absent`;
      b.textContent = u.label || u.nom;
      b.setAttribute("aria-label", u.nom);
      b.addEventListener("click", () => {
        Object.values(unites).forEach((o) => o.el.classList.remove("actif"));
        b.classList.add("actif");
        const infos = [u.nom, `(${NOMS_CAMPS[u.camp] || "—"})`];
        if (u.effectif) infos.push("· " + u.effectif);
        detail.textContent = infos.join(" ") + (u.info ? " — " + u.info : "");
      });
      canvas.appendChild(b);
      unites[u.id] = { el: b, def: u };
    });

    // puces de phases
    phases.forEach((p, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.textContent = i + 1;
      b.setAttribute("aria-label", `Phase ${i + 1} : ${p.titre}`);
      b.addEventListener("click", () => { arreter(); aller(i); });
      puces.appendChild(b);
    });

    function aller(i) {
      courante = i;
      const p = phases[i];
      Object.entries(unites).forEach(([id, o]) => {
        const pos = (p.pos || {})[id];
        o.el.classList.toggle("absent", !pos);
        o.el.classList.toggle("battu", !!p.battu && o.def.camp === p.battu);
        if (pos) {
          const w = pos[2] ?? o.def.w ?? 6;
          const h = pos[3] ?? o.def.h ?? 8;
          Object.assign(o.el.style, { left: pos[0] + "%", top: pos[1] + "%", width: w + "%", height: h + "%" });
        }
      });
      groupe.replaceChildren();
      (p.fleches || []).forEach((f) => {
        const camp = f[4] || "jac";
        const l = document.createElementNS(NS, "line");
        l.setAttribute("x1", f[0]); l.setAttribute("y1", f[1] * 0.5625);
        l.setAttribute("x2", f[2]); l.setAttribute("y2", f[3] * 0.5625);
        l.setAttribute("stroke", COULEURS[camp] || COULEURS.autre);
        l.setAttribute("marker-end", `url(#fl-${idx}-${camp})`);
        if (f[5]) l.setAttribute("stroke-dasharray", "1.6 1.2");
        groupe.appendChild(l);
      });
      quand.textContent = p.quand || "";
      titre.textContent = `${i + 1}. ${p.titre}`;
      texte.textContent = p.texte || "";
      [...puces.children].forEach((b, k) => b.classList.toggle("actif", k === i));
      prec.disabled = i === 0;
      suiv.disabled = i === phases.length - 1;
    }

    function arreter() {
      if (minuteur) { clearInterval(minuteur); minuteur = null; }
      auto.textContent = "▶ Lecture";
    }
    prec.addEventListener("click", () => { arreter(); aller(Math.max(0, courante - 1)); });
    suiv.addEventListener("click", () => { arreter(); aller(Math.min(phases.length - 1, courante + 1)); });
    auto.addEventListener("click", () => {
      if (minuteur) { arreter(); return; }
      if (courante >= phases.length - 1) aller(0);
      auto.textContent = "❚❚ Pause";
      minuteur = setInterval(() => {
        if (courante >= phases.length - 1) { arreter(); return; }
        aller(courante + 1);
      }, 4200);
    });

    aller(0);
  });

  /* ---------- Frise : apparition au défilement ---------- */
  const etapes = document.querySelectorAll(".frise li");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entrees) => {
      entrees.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.2 });
    etapes.forEach((li) => obs.observe(li));
  } else {
    etapes.forEach((li) => li.classList.add("visible"));
  }

  /* ---------- Rangées défilantes de l'accueil ---------- */
  document.querySelectorAll(".row-wrap").forEach((wrap) => {
    const rangee = wrap.querySelector(".row");
    const prec = wrap.querySelector(".row-btn--prev");
    const suiv = wrap.querySelector(".row-btn--next");
    const maj = () => {
      wrap.classList.toggle("defile", rangee.scrollWidth > rangee.clientWidth + 4);
      prec.disabled = rangee.scrollLeft <= 4;
      suiv.disabled = rangee.scrollLeft + rangee.clientWidth >= rangee.scrollWidth - 4;
    };
    const pas = () => Math.max(rangee.clientWidth * 0.8, 280);
    prec.addEventListener("click", () => rangee.scrollBy({ left: -pas(), behavior: "smooth" }));
    suiv.addEventListener("click", () => rangee.scrollBy({ left: pas(), behavior: "smooth" }));
    rangee.addEventListener("scroll", maj, { passive: true });
    window.addEventListener("resize", maj);
    maj();
  });
})();

// Quiz : une question à la fois, correction immédiate, score final
(() => {
  const LETTRES = ["A", "B", "C", "D", "E"];
  const melanger = (t) => { const a = [...t]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined) e.textContent = txt; return e; };

  document.querySelectorAll(".quiz").forEach((racine) => {
    let questions;
    try { questions = JSON.parse(racine.dataset.quiz); } catch (err) { return; }
    if (!questions.length) return;
    const zone = racine.querySelector(".quiz-zone");
    let i = 0, score = 0;

    function afficher() {
      const q = questions[i];
      const options = melanger(q.options.map((t, k) => ({ t, ok: k === q.bonne })));
      zone.replaceChildren();

      const haut = el("div", "quiz-haut");
      haut.append(el("span", "", `Question ${i + 1} / ${questions.length}`), el("span", "", `Score : ${score}`));
      const barre = el("div", "quiz-barre"); const rempli = el("span"); rempli.style.width = (i / questions.length * 100) + "%"; barre.appendChild(rempli);
      const liste = el("div", "quiz-options");
      const retour = el("div"); retour.setAttribute("aria-live", "polite");
      const actions = el("div", "quiz-actions");

      options.forEach((o, k) => {
        const b = el("button", "quiz-option"); b.type = "button";
        b.append(el("b", "", LETTRES[k]), document.createTextNode(o.t));
        b.addEventListener("click", () => {
          liste.querySelectorAll("button").forEach((x, n) => { x.disabled = true; if (options[n].ok) x.classList.add("juste"); });
          if (o.ok) score++; else b.classList.add("faux");
          const ex = el("div", "quiz-explication");
          ex.append(el("strong", "", o.ok ? "Bonne réponse !" : "Pas tout à fait."), document.createTextNode(q.explication || ""));
          retour.replaceChildren(ex);
          const suite = el("button", "quiz-btn", i === questions.length - 1 ? "Voir mon score" : "Question suivante"); suite.type = "button";
          suite.addEventListener("click", () => { i++; i < questions.length ? afficher() : fin(); });
          actions.replaceChildren(suite); suite.focus();
        });
        liste.appendChild(b);
      });

      zone.append(haut, barre, el("p", "quiz-question", q.q), liste, retour, actions);
    }

    function fin() {
      zone.replaceChildren();
      const bloc = el("div", "quiz-score");
      const msg = score === questions.length ? "Parfait : tu maîtrises le sujet !"
        : score >= questions.length * 0.6 ? "Très bien, il ne manque presque rien."
        : "Relis la page et retente ta chance.";
      const refaire = el("button", "quiz-btn", "Recommencer"); refaire.type = "button";
      refaire.addEventListener("click", () => { i = 0; score = 0; afficher(); });
      bloc.append(el("div", "gros", `${score} / ${questions.length}`), el("p", "", msg), refaire);
      zone.appendChild(bloc);
    }

    afficher();
  });
})();
