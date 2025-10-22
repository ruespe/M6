// JSON.stringify transforma a string
// parse para transformar de string a objeto js
// local storage get Item

// Crea un script que desi els valors dels diferents camps quan s'introdueixin o hagi un canvi, de
// manera que si es tanca la finestra del navegador, quan es torni a obrir recuperi els valors
// introduïts fins el moment.
// El botó Reseteja ha d'eliminar les dades emmagatzemades.

enviar = document.querySelector("#enviar");

enviar.addEventListener("click", (e) => {
  e.preventDeafault();
  
  nombre = document.querySelector("#nombre");
  nombreValor = nombre.value;

  apellido = document.querySelector("input#apellido");
  email = document.querySelector("input#E-mail");
  direccion = document.querySelector("input#Dirección");
  //console.log(nombreValor);

  localStorage.setItem("nombre", nombreValor);
});
