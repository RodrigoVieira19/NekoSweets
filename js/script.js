//funcao trocar a imagem no click

function imgSlider(anything) {
  document.querySelector(".cupcake").src = anything;
}

//funcao menu-nav

function toggleMenu() {
  let menuToggle = document.querySelector(".menu");
  let navigationmenu = document.querySelector(".navigationmenu");
  menuToggle.classList.toggle("active");
  navigationmenu.classList.toggle("active");
}
