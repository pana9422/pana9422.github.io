const nav_active = document.querySelector(".nav__active");

const nav_items = document.querySelectorAll(".nav__item");
const sections = document.querySelectorAll('.section');


window.res
// -- posicion del active del NAVBAR
const activeItemNav = (pos) => {
  let device = getComputedStyle(nav_active).getPropertyValue('--width')
  
  nav_items.forEach((item) => item.classList.remove("nav__item--active"));
  nav_items[pos].classList.add("nav__item--active");
  nav_active.style.setProperty("--position", pos);
  

  if (device != '0') {
    console.log(device);
    let translate = 0;
    let width = 80
    nav_active.style.setProperty("--position", pos);

    for (let i = 0; i < pos; i++) {
      translate = nav_items[i].clientWidth + translate
      width = nav_items[i+1].clientWidth
    }
    nav_active.style.setProperty("--width", width + 'px');
    nav_active.style.setProperty("--translate", translate+'px');
  } 
};
nav_items.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeItemNav(index);
  });
});

// -- Collapsado de la seccion - SERVICIOS
const services__item = document.querySelectorAll(".services__specialty");
const activeRemoveEspecialty = () => {
  services__item.forEach((item) => {
    let id = item.getAttribute("data-area");
    item.classList.remove("services__specialty--active");
    document.querySelector(id).classList.remove("services__detail--active");
  });
};
for (let i = 0; i < services__item.length; i++) {
  services__item[i].addEventListener("click", (e) => {
    let id = services__item[i].getAttribute("data-area");
    e.preventDefault();
    activeRemoveEspecialty();
    services__item[i].classList.add("services__specialty--active");
    document.querySelector(id).classList.add("services__detail--active");
  });
}
