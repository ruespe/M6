// 28. Realitza un script amb funcionalitat de calculadora. Utilitza un formulari com es mostra en la següent
// imatge. Operacions: suma, resta, multiplicació, divisió i potència

// El resultat s’ha de mostrar amb dos decimals.
// El separador decimal és el punt (.), si s’introdueix una coma (,) s’ha de substituir.
// Si en el càlcul es produeix un error NaN o Infinity s’ha de mostrar de color vermell

// En el cas de l'operació de potència (^) si el segon operador és un número decimal.
// S'ha de truncar i mostrar el nou valor en el camp del segon operand

// 29. Crea un formulari amb un camp de text.
// Introdueix una adreça de correu electrònic i crea un script per mostrar: (2 punts)
// La longitud del substring que identifica a l’usuari.
// El TLD (com, es, cat, etc.)
// L’adreça amb el domini canviat a thosicodina però conservant el TLD.
// 1. Donat el següent array d’emails.
//  const email = [
//  "p.escosa@gmail.com",
//  "j.garcia@info.yahoo.es",
//  "r.esteban@sales.gmail.com",
//  "a.gomez@gmail.es",
//  "l.mesa@gmail.com",
//  "t.sants@hotmail.es",
//  "v.ros@hotmail.com"
//  ]
// Mostra per pantalla el llistat dels email que tenen:
// Com a domini gmail i TLD .com
// Com a TLD .es
// 2. Mostra el subdomini dels emails que en tenen.

// 30. Realitza un script que mostri la data i l’hora actual amb precisió de segon amb diferents formats.
// Format 1:
// El dia i mes de la data i tots els camps de l’hora han de tenir dos dígits
// Format 2:
// Tots els camps de l’hora han de tenir dos dígits
// Quan es faci dobleclick damunt de la data s’ha de canviar d’un format a l’altre

// ============ EJERCICIO 28 - CALCULADORA ============
const botonCalcular = document.querySelector("button.calcula");
const botonResetear = document.querySelector("button.resetea");

botonCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtener valores y reemplazar comas por puntos
  let operador1 = document.querySelector("input#num1").value.replace(",", ".");
  let operador2 = document.querySelector("input#num2").value.replace(",", ".");
  let operacion = document.querySelector("select#operaciones").value;
  let inputResultado = document.querySelector("input#result");

  // Convertir a números
  let num1 = Number(operador1);
  let num2 = Number(operador2);
  let result = 0;

  // Si la operación es potencia y el segundo operando es decimal, truncarlo
  if (operacion === "potencia" && !Number.isInteger(num2)) {
    num2 = Math.trunc(num2);
    document.querySelector("input#num2").value = num2;
  }

  // Realizar la operación
  switch (operacion) {
    case "suma":
      result = num1 + num2;
      break;
    case "resta":
      result = num1 - num2;
      break;
    case "multiplicacion":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    case "potencia":
      result = Math.pow(num1, num2);
      break;
  }

  // Verificar si hay error (NaN o Infinity)
  if (isNaN(result) || !isFinite(result)) {
    inputResultado.value = result;
    inputResultado.style.color = "red";
  } else {
    // Mostrar resultado con dos decimales
    inputResultado.value = result.toFixed(2);
    inputResultado.style.color = "black";
  }
});

botonResetear.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("input#num1").value = "";
  document.querySelector("input#num2").value = "";
  document.querySelector("input#result").value = "";
  document.querySelector("input#result").style.color = "black";
});

// ============ EJERCICIO 29 - EMAIL ============
// Crear el HTML para el ejercicio 29
const emailSection = document.createElement("section");
emailSection.innerHTML = `
  <h2>Ejercicio 29 - Análisis de Email</h2>
  <div>
    <label for="emailInput">Email: </label>
    <input type="text" id="emailInput" placeholder="ejemplo@dominio.com">
    <button id="analizarEmail">Analizar</button>
  </div>
  <div id="resultadoEmail"></div>
  
  <h3>Ejercicio 29.1 - Filtrar emails</h3>
  <button id="filtrarEmails">Mostrar Filtros</button>
  <div id="resultadoFiltros"></div>
  
  <h3>Ejercicio 29.2 - Mostrar subdominios</h3>
  <button id="mostrarSubdominios">Mostrar Subdominios</button>
  <div id="resultadoSubdominios"></div>
`;
document.body.appendChild(emailSection);

// Función para analizar un email individual
document.getElementById("analizarEmail").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const resultadoDiv = document.getElementById("resultadoEmail");

  if (!email.includes("@")) {
    resultadoDiv.innerHTML = '<p style="color: red;">Email inválido</p>';
    return;
  }

  // Dividir el email
  const partes = email.split("@");
  const usuario = partes[0];
  const dominioParts = partes[1].split(".");
  const tld = dominioParts[dominioParts.length - 1];

  // Crear nuevo email con dominio "thosicodina"
  const nuevoEmail = `${usuario}@thosicodina.${tld}`;

  resultadoDiv.innerHTML = `
    <p><strong>Longitud del usuario:</strong> ${usuario.length}</p>
    <p><strong>TLD:</strong> ${tld}</p>
    <p><strong>Email con nuevo dominio:</strong> ${nuevoEmail}</p>
  `;
});

// Array de emails
const emails = [
  "p.escosa@gmail.com",
  "j.garcia@info.yahoo.es",
  "r.esteban@sales.gmail.com",
  "a.gomez@gmail.es",
  "l.mesa@gmail.com",
  "t.sants@hotmail.es",
  "v.ros@hotmail.com",
];

// Filtrar emails
document.getElementById("filtrarEmails").addEventListener("click", () => {
  const resultadoDiv = document.getElementById("resultadoFiltros");

  // Emails con dominio gmail y TLD .com
  const gmailCom = emails.filter((email) => {
    const partes = email.split("@")[1];
    return partes.includes("gmail") && partes.endsWith(".com");
  });

  // Emails con TLD .es
  const tldEs = emails.filter((email) => email.endsWith(".es"));

  resultadoDiv.innerHTML = `
    <h4>Emails con dominio gmail y TLD .com:</h4>
    <ul>${gmailCom.map((e) => `<li>${e}</li>`).join("")}</ul>
    
    <h4>Emails con TLD .es:</h4>
    <ul>${tldEs.map((e) => `<li>${e}</li>`).join("")}</ul>
  `;
});

// Mostrar subdominios
document.getElementById("mostrarSubdominios").addEventListener("click", () => {
  const resultadoDiv = document.getElementById("resultadoSubdominios");
  let html = "<h4>Emails con subdominio:</h4><ul>";

  emails.forEach((email) => {
    const dominio = email.split("@")[1];
    const partes = dominio.split(".");

    // Si hay más de 2 partes, hay subdominio
    if (partes.length > 2) {
      const subdominio = partes.slice(0, -2).join(".");
      html += `<li>${email} - Subdominio: <strong>${subdominio}</strong></li>`;
    }
  });

  html += "</ul>";
  resultadoDiv.innerHTML = html;
});

// ============ EJERCICIO 30 - FECHA Y HORA ============
const fechaSection = document.createElement("section");
fechaSection.innerHTML = `
  <h2>Ejercicio 30 - Fecha y Hora</h2>
  <div id="reloj" style="font-size: 24px; padding: 20px; border: 1px solid #ccc; display: inline-block; cursor: pointer;">
    <span id="fecha"></span>
  </div>
`;
document.body.appendChild(fechaSection);

let formato = 1; // 1 o 2

function actualizarReloj() {
  const ahora = new Date();
  const dia = String(ahora.getDate()).padStart(2, "0");
  const mes = String(ahora.getMonth() + 1).padStart(2, "0");
  const año = ahora.getFullYear();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  let textoFecha;

  if (formato === 1) {
    // Formato 1: dd/mm/yyyy hh:mm:ss
    textoFecha = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
  } else {
    // Formato 2: yyyy-mm-dd hh:mm:ss
    textoFecha = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
  }

  document.getElementById("fecha").textContent = textoFecha;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamada inicial

// Cambiar formato con doble click
document.getElementById("reloj").addEventListener("dblclick", () => {
  formato = formato === 1 ? 2 : 1;
  actualizarReloj();
});
