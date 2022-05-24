const $sections = Array.from(document.querySelectorAll(".section"));
const $items = Array.from(document.querySelectorAll(".nav__item"));
const $itemNow = document.querySelector(".nav__active");

const navActive = () => {
    const itemsWidth = $items.map((element) => element.clientWidth);
    let translateX = 0


    $sections.forEach((section, i) => {
        if (section.getBoundingClientRect().bottom - 250 >= 0 && section.getBoundingClientRect().top - 250 <= 0) {
            $items[i].classList.add("nav__item--active");
            $itemNow.style.setProperty("--translateX", translateX + "px");

            $itemNow.style.setProperty("--width", itemsWidth[i] + "px");
        } else {
            $items[i].classList.remove("nav__item--active");
        }
        translateX = translateX + itemsWidth[i];
    });
};

window.addEventListener("scroll", () => navActive());
window.addEventListener("load", () => navActive());
window.addEventListener("resize", () => navActive());
