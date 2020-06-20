//VARIABLES
const burger = document.querySelector(".nav__top__burger__icono");
const burgerSubMenu = document.querySelector(".nav__bottom");
const iconos = document.querySelector(".nav__top__iconos");

const divCarrito = document.querySelector(".nav__top__carrito");
const carrito = document.querySelector(".nav__top__carrito__icono");

const hoverProduct = document.querySelector(".producto");
const productImage = document.querySelector(".producto__imagen");

//FUNCIONAMIENTO DE MENÚ HAMBURGUESA/MOBILE
burger.addEventListener("click", () => {
  burgerSubMenu.classList.toggle("open");
  iconos.classList.toggle("iconos-show");
  burgerSubMenu.appendChild(iconos);
  document.body.classList.toggle("burger-opened");
});

//ADJUNTA EL CARRITO AL DIV GENERAL DE LOS ICONOS Y QUITA AL DIV DEL CARRITO 

window.setInterval(function () {
  if (window.innerWidth > 1024) {
    iconos.appendChild(carrito);
    divCarrito.style.display = "none";
  } else {
    divCarrito.appendChild(carrito);
    divCarrito.style.display = "block";
  }
}, 100);
