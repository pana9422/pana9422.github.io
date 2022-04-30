const nav_active = document.querySelector(".nav__active");

const nav_items = document.querySelectorAll(".nav__item");
const sections = document.querySelectorAll(".section");

const intObs = () => {
  const fnScrollActiveNav = (entradas, observer) => {
    entradas.forEach((entrada) => {
      console.log(entrada);

      if (entrada.isIntersecting) {
        const itemNow = Array.from(nav_items).find(
          (item) => item.dataset.url === entrada.target.id
        );
        const positionNow = Array.from(nav_items).findIndex(
          (item) => item.dataset.url === entrada.target.id
        );

        activeItemNav(positionNow, observer);
        itemNow.classList.add("nav__item--active");
      }
    });
  };
  const observer = new IntersectionObserver(fnScrollActiveNav, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  sections.forEach((section) => {
    observer.observe(section);
  });
};

document.addEventListener("wheel", intObs);

sections.forEach((section) => {
  section.addEventListener("mousedown", (e) => {
    intObs();
  });
});

// -- posicion del active del NAVBAR
const activeItemNav = (pos, observer) => {
  if (observer !== undefined) {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  }
  nav_items.forEach((item) => item.classList.remove("nav__item--active"));
  nav_active.style.setProperty("--position", pos);
  nav_items[pos].classList.add("nav__item--active");
};
nav_items.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeItemNav(index);
  });
});

// const nav_active = document.querySelector(".nav__active");

// const nav_items = document.querySelectorAll(".nav__item");
// const sections = document.querySelectorAll('.section');

// window.res
// // -- posicion del active del NAVBAR
// const activeItemNav = (pos) => {
//   let device = getComputedStyle(nav_active).getPropertyValue('--width')

//   nav_items.forEach((item) => item.classList.remove("nav__item--active"));
//   nav_items[pos].classList.add("nav__item--active");
//   nav_active.style.setProperty("--position", pos);

//   if (device != '0') {
//     console.log(device);
//     let translate = 0;
//     let width = 80
//     nav_active.style.setProperty("--position", pos);

//     for (let i = 0; i < pos; i++) {
//       translate = nav_items[i].clientWidth + translate
//       width = nav_items[i+1].clientWidth
//     }
//     nav_active.style.setProperty("--width", width + 'px');
//     nav_active.style.setProperty("--translate", translate+'px');
//   }
// };
// nav_items.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     activeItemNav(index);
//   });
// });
