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

  var animatedTitles = document.querySelectorAll(".slide-in-title");

  if (animatedTitles.length) {
    if ("IntersectionObserver" in window) {
      var titleObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.remove("is-visible");
              void entry.target.offsetWidth;
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        {
          threshold: 0.35,
        }
      );

      animatedTitles.forEach(function (title) {
        titleObserver.observe(title);
      });
    } else {
      animatedTitles.forEach(function (title) {
        title.classList.add("is-visible");
      });
    }
  }
});
