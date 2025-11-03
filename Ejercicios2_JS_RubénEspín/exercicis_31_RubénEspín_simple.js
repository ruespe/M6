// 31. LocalStorage

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#E-mail");
let direccion = document.querySelector("#Dirección");
let enviar = document.querySelector("#enviar");
let resetear = document.querySelector("#resetear");

// Cargar datos al abrir la página
window.addEventListener('load', () => {
  if (localStorage.getItem("nombre")) {
    nombre.value = localStorage.getItem("nombre");
  }
  if (localStorage.getItem("apellido")) {
    apellido.value = localStorage.getItem("apellido");
  }
  if (localStorage.getItem("email")) {
    email.value = localStorage.getItem("email");
  }
  if (localStorage.getItem("direccion")) {
    direccion.value = localStorage.getItem("direccion");
  }
});

// Guardar cuando escribo
nombre.addEventListener('input', (e) => {
  localStorage.setItem("nombre", e.target.value);
});

apellido.addEventListener('input', (e) => {
  localStorage.setItem("apellido", e.target.value);
});

email.addEventListener('input', (e) => {
  localStorage.setItem("email", e.target.value);
});

direccion.addEventListener('input', (e) => {
  localStorage.setItem("direccion", e.target.value);
});

// Botón enviar
enviar.addEventListener("click", (e) => {
  e.preventDefault();
  
  localStorage.setItem("nombre", nombre.value);
  localStorage.setItem("apellido", apellido.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("direccion", direccion.value);
  
  alert("Datos guardados");
});

// Botón resetear
resetear.addEventListener("click", (e) => {
  e.preventDefault();
  
  localStorage.removeItem("nombre");
  localStorage.removeItem("apellido");
  localStorage.removeItem("email");
  localStorage.removeItem("direccion");
  
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  direccion.value = "";
  
  alert("Datos eliminados");
});
