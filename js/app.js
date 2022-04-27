let nav_items = document.querySelectorAll(".nav__item");
let nav_active = document.querySelector(".nav__active");
let height_sections = [];
let sections = ['home', 'about-me', 'services', 'projects'];

sections.forEach(section => {
    let h = document.getElementById(section)
    height_sections.push(h.clientHeight)
});

height_sections.forEach(h => {
    console.log(h)
});


for (let i = 0; i < nav_items.length; i++) {

  nav_items[i].addEventListener("click", () => {
    nav_items.forEach((item) => item.classList.remove("nav__item--active"));
    nav_active.style.setProperty("--position", i);
    nav_items[i].classList.add("nav__item--active");
  });

}
