// Seleccionar el botón hamburguesa y el menú móvil
var botonHamburguesa = document.querySelector(".header-menu");
var menuMovil = document.querySelector(".menu-mobile");

// Añadir un evento click al botón hamburguesa que llame a la función animatenavbar
botonHamburguesa.addEventListener("click", animatenavbar);

// Definir la función animatenavbar que cambia las clases de los elementos del menú
function animatenavbar(){
    // Cambiar las clases de las líneas del botón hamburguesa
    botonHamburguesa.classList.toggle("activeline1__navbar-menu");
    botonHamburguesa.classList.toggle("activeline2__navbar-menu");
    botonHamburguesa.classList.toggle("activeline3__navbar-menu");

    // Cambiar la clase del menú móvil
    menuMovil.classList.toggle("active");
}
