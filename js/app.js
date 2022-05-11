const nav_active = document.querySelector(".nav__active");
const nav_items = document.querySelectorAll(".nav__item");
const section = document.querySelectorAll(".intObs");
const services_specialty = document.querySelectorAll(".services__specialty");
const services_detail = document.querySelectorAll(".services__detail");

let itemNow = document.querySelector(".nav__item")


const activeNav = () => {
  nav_items.forEach((element) => element.classList.remove("nav__item--active"));
  itemNow.classList.add("nav__item--active");
  
  const items = Array.from(nav_items).map( (element) => element.clientWidth)

  let translateX = 0
  let next = true
  let pos = 0
  
  nav_items.forEach( (item, index) => {
    if (item == itemNow) {
      pos = index
      next = false;
    } else if(next) {
      translateX = translateX + items[index]
    }
  });
  
  nav_active.style.setProperty("--width", items[pos] + 'px');
  nav_active.style.setProperty("--translateX", translateX + 'px');
  section.forEach((element) => {
    obs.observe(element);
  });
};
const intObs = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      itemNow = Array.from(nav_items).find(
        (element) => element.dataset.url == entry.target.id
      );
  });
  activeNav();
};
const obs = new IntersectionObserver(intObs, {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
});
const activeSpecialty = (specialty) => {
  const area = specialty.dataset.area;

  services_specialty.forEach((element) =>
    element.classList.remove("services__specialty--active")
  );
  services_detail.forEach((element) =>
    element.classList.remove("services__detail--active")
  );

  specialty.classList.add("services__specialty--active");
  document.getElementById(area).classList.add("services__detail--active");
};

window.addEventListener("resize", activeNav);

section.forEach((element) => {
  obs.observe(element);
});
nav_items.forEach((item) => {

  item.addEventListener("click", () => {

    section.forEach((element) => {
      obs.unobserve(element);
    });
    
    itemNow = item
    activeNav();
  });
});
services_specialty.forEach((specialty) => {
  specialty.addEventListener("click", (e) => {
    e.preventDefault();
    activeSpecialty(specialty);
  });
});