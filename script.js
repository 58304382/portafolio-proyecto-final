// Mensaje al cargar la página
console.log("Landing Page cargada correctamente");

// Acción para mostrar mensaje al abrir proyectos
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log("Botón presionado:", boton.textContent);
  });
});

// Resaltar la sección activa al hacer scroll
const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let actual = "";

  secciones.forEach((seccion) => {
    const top = seccion.offsetTop - 120;

    if (window.scrollY >= top) {
      actual = seccion.getAttribute("id");
    }
  });

  enlaces.forEach((enlace) => {
    enlace.classList.remove("activo");

    if (enlace.getAttribute("href") === "#" + actual) {
      enlace.classList.add("activo");
    }
  });
});