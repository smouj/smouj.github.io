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

  document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
    var slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
    var dots = Array.from(gallery.querySelectorAll("[data-gallery-dot]"));
    var count = gallery.querySelector("[data-gallery-count]");
    var previous = gallery.querySelector("[data-gallery-prev]");
    var next = gallery.querySelector("[data-gallery-next]");
    var activeIndex = 0;

    if (!slides.length) return;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === activeIndex;
        slide.hidden = !active;
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach(function (dot, dotIndex) {
        dot.setAttribute("aria-pressed", String(dotIndex === activeIndex));
      });
      if (count) {
        count.textContent = String(activeIndex + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
      }
    }

    if (previous) previous.addEventListener("click", function () { showSlide(activeIndex - 1); });
    if (next) next.addEventListener("click", function () { showSlide(activeIndex + 1); });
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () { showSlide(index); });
    });
    gallery.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(activeIndex + 1);
      }
    });

    showSlide(0);
  });
})();
