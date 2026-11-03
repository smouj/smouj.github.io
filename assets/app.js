(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var stored = null;

  try { stored = localStorage.getItem("smouj-theme"); } catch (e) { stored = null; }

  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function syncToggle() {
    if (!toggle) return;
    var light = root.getAttribute("data-theme") === "light";
    toggle.setAttribute("aria-pressed", String(light));
    toggle.setAttribute("aria-label", light ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", light ? "#f7f5f0" : "#07080b");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("smouj-theme", next); } catch (e) {}
      syncToggle();
    });
  }
  syncToggle();

  var toast = document.getElementById("toast");
  var toastTimer;
  function say(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }

  var share = document.getElementById("share");
  if (share) {
    share.addEventListener("click", async function () {
      var data = {
        title: "SMOUJ · Todos mis enlaces",
        text: "Todos los enlaces de SMOUJ en un solo sitio.",
        url: location.href
      };
      if (navigator.share) {
        try { await navigator.share(data); return; } catch (e) { /* cancelled */ }
      }
      try {
        await navigator.clipboard.writeText(location.href);
        say("Enlace copiado");
      } catch (e) {
        say(location.href);
      }
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
