document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });
  }

  if (typeof Splide !== "undefined" && document.querySelector(".splide")) {
    var splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      gap: "1rem",
      pagination: false,
      drag: true,
    });

    splide.mount();
  }
});
