// -- Filtro de proyectos
const button_filter = document.querySelectorAll(".projects__button")
const projects_item = document.querySelectorAll(".projects__item")

const showProjects = (button) => {
  const filter = button.dataset.filter;

  button_filter.forEach( (element) => element.classList.remove('projects__button--active') )
  projects_item.forEach( (element) => element.classList.remove('show'))

  button.classList.add('projects__button--active')

  switch (filter) {
    case 'all':
      document.querySelectorAll('.projects__item').forEach( project => project.classList.add('show'))
      break;
    default:
      projects_item.forEach( project => {
        if ( project.dataset.type == filter) {
          project.classList.add('show')
        }
      })
      break;
  }
}
button_filter.forEach( button => {
  button.addEventListener('click', (e) => {
    showProjects(button)
  } )
});

// -- Collapsado de la seccion - SERVICIOS
const services_specialty = document.querySelectorAll(".services__specialty");
const services_detail = document.querySelectorAll(".services__detail");

const activeSpecialty = (specialty) => {
  const area = specialty.dataset.area;
  
  services_specialty.forEach((element) => element.classList.remove("services__specialty--active") );
  services_detail.forEach((element) => element.classList.remove("services__detail--active") );
  
  specialty.classList.add("services__specialty--active");
  document.getElementById(area).classList.add("services__detail--active");
};
services_specialty.forEach( specialty => {
  specialty.addEventListener('click', (e) => {
    e.preventDefault();
    activeSpecialty(specialty)
  } )
});

// -- Escapando al enlace de los proyectos
projects_item.forEach((element) => {
  element.addEventListener('click', e => e.preventDefault())
});