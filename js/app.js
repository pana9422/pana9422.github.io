let nav_items = document.querySelectorAll(".nav__item");
let nav_active = document.querySelector(".nav__active");

let services__item = document.querySelectorAll(".services__specialty");

const activeRemoveEspecialty = () => {
    services__item.forEach((item) => {
        let id = item.getAttribute('data-area')
        item.classList.remove("services__specialty--active")
        document.querySelector(id).classList.remove("services__detail--active")
    });
}

for (let i = 0; i < services__item.length; i++) {
  services__item[i].addEventListener("click", (e) => {
      let id = services__item[i].getAttribute('data-area')
    e.preventDefault();
    activeRemoveEspecialty()
    services__item[i].classList.add("services__specialty--active")
    document.querySelector(id).classList.add("services__detail--active")

  });
}


for (let i = 0; i < nav_items.length; i++) {
  nav_items[i].addEventListener("click", () => {
    nav_items.forEach((item) => item.classList.remove("nav__item--active"));
    nav_active.style.setProperty("--position", i);
    nav_items[i].classList.add("nav__item--active");
  });
}



// let height_sections = [];
// let sections = ['home', 'about-me', 'services', 'projects'];

// sections.forEach(section => {
//     let h = document.getElementById(section)
//     height_sections.push(h.clientHeight)
// });

// height_sections.forEach(h => {
//     console.log(h)
// });