/* ==========================================================================
   Fabian Camayo — interacciones
   Sin dependencias. Todo progresivo: si falla algo, la página sigue usable.
   ========================================================================== */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Año del footer ──────────────────────────────────────────────────── */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ── Nav: fondo al hacer scroll + barra de progreso ──────────────────── */
  var nav = document.getElementById("nav");
  var bar = document.getElementById("progress-bar");
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-stuck", y > 12);

    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(y / max, 1) * 100 : 0) + "%";
    }
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* ── Menú móvil ──────────────────────────────────────────────────────── */
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  /* ── Revelado de secciones ───────────────────────────────────────────── */
  var revealables = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || reduced) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i * 60, 240) + "ms";
        el.classList.add("is-visible");
        revealObserver.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    Array.prototype.forEach.call(revealables, function (el) { revealObserver.observe(el); });
  }

  /* ── Barras de habilidades ───────────────────────────────────────────── */
  var bars = document.querySelectorAll(".bar span");

  function fillBars() {
    Array.prototype.forEach.call(bars, function (el, i) {
      window.setTimeout(function () { el.classList.add("is-filled"); }, reduced ? 0 : i * 110);
    });
  }

  var skills = document.querySelector("[data-skills]");
  if (skills && "IntersectionObserver" in window && !reduced) {
    var skillsObserver = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        fillBars();
        skillsObserver.disconnect();
      }
    }, { threshold: 0.3 });
    skillsObserver.observe(skills);
  } else {
    fillBars();
  }

  /* ── Contador de años de experiencia ─────────────────────────────────── */
  var counters = document.querySelectorAll("[data-count]");

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reduced) { el.textContent = target; return; }

    var start = null;
    var duration = 1100;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length && "IntersectionObserver" in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(counters, function (el) { counterObserver.observe(el); });
  } else {
    Array.prototype.forEach.call(counters, runCounter);
  }

  /* ── Enlace activo en la navegación ──────────────────────────────────── */
  var links = document.querySelectorAll('.nav-menu a[href^="#"]');
  var sections = [];

  Array.prototype.forEach.call(links, function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = id && document.getElementById(id);
    if (section) sections.push({ link: link, section: section });
  });

  if (sections.length && "IntersectionObserver" in window) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(sections, function (item) {
          item.link.classList.toggle("is-active", item.section === entry.target);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (item) { activeObserver.observe(item.section); });
  }
})();
