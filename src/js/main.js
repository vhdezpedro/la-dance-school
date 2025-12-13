/* ----------- header bg ----------- */
const header = document.querySelector(".header-js");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("before:bg-opacity-50");
    header.classList.remove("before:bg-opacity-0");
    header.classList.remove("before:opacity-0");
  } else {
    header.classList.add("before:bg-opacity-0");
    header.classList.remove("before:bg-opacity-50");
  }
});

/* ----------- side menu ----------- */
const menuBtn = document.querySelector(".btn-menu-js");
const menuOverlay = document.querySelector(".side-menu-overlay-js");
const sideMenu = document.querySelector(".side-menu-js");
const closeBtn = sideMenu.querySelector(".btn-close-js");
const menuLinks = sideMenu.querySelectorAll(".side-menu-js a");

function openMenu() {
  menuOverlay.classList.add("opacity-50");
  menuOverlay.classList.add("visible");
  menuOverlay.classList.remove("opacity-0");
  menuOverlay.classList.remove("invisible");
  sideMenu.classList.add("-translate-x-full");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuOverlay.classList.add("opacity-0");
  menuOverlay.classList.add("invisible");
  menuOverlay.classList.remove("opacity-50");
  menuOverlay.classList.remove("visible");
  sideMenu.classList.remove("-translate-x-full");
  document.body.style.removeProperty("overflow");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* ----------- classes slider ----------- */
const classesSlider = new Swiper(".classes-slider", {
  grabcursor: true,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
});
