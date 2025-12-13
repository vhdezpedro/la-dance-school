/* ----------- header bg ----------- */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("before:opacity-10"); //revisar esta linea
    header.classList.remove("before:opacity-0");
  } else {
    header.classList.add("before:opacity-0");
    header.classList.remove("before:opacity-10");
  }
  header.classList.toggle("header-bg", window.scrollY > 0);
});

/* ----------- side menu ----------- */
// const menuBtn = document.querySelector(".menu-btn");
// const menuOverlay = document.querySelector(".side-menu-overlay");
// const sideMenu = document.querySelector(".side-menu");
// const closeBtn = sideMenu.querySelector(".close-btn");
// const menuLinks = sideMenu.querySelectorAll(".side-menu a");

// function openMenu() {
//   sideMenu.classList.add("open");
//   menuOverlay.classList.add("visible");
//   document.body.style.overflow = "hidden";
// }

// function closeMenu() {
//   sideMenu.classList.remove("open");
//   menuOverlay.classList.remove("visible");
//   document.body.style.removeProperty("overflow");
// }

// menuBtn.addEventListener("click", openMenu);
// closeBtn.addEventListener("click", closeMenu);
// menuOverlay.addEventListener("click", closeMenu);

// menuLinks.forEach((link) => {
//   link.addEventListener("click", closeMenu);
// });

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
