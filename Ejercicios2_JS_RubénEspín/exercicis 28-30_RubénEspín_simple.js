// 28. Calculadora básica

let botonCalcular = document.querySelector("button.calcula");
let botonResetear = document.querySelector("button.resetea");

botonCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  
  let operador1 = document.querySelector("input#num1").value;
  let operador2 = document.querySelector("input#num2").value;
  
  // Reemplazar comas por puntos
  operador1 = operador1.replace(',', '.');
  operador2 = operador2.replace(',', '.');
  
  let num1 = Number(operador1);
  let num2 = Number(operador2);
  let operacion = document.querySelector("select#operaciones").value;
  let result = 0;
  
  // Si es potencia y num2 es decimal, truncar
  if (operacion === "potencia" && num2 % 1 !== 0) {
    num2 = Math.trunc(num2);
    document.querySelector("input#num2").value = num2;
  }
  
  if (operacion === "suma") {
    result = num1 + num2;
  }
  if (operacion === "resta") {
    result = num1 - num2;
  }
  if (operacion === "multiplicacion") {
    result = num1 * num2;
  }
  if (operacion === "division") {
    result = num1 / num2;
  }
  if (operacion === "potencia") {
    result = num1 ** num2;
  }

  let inputResultado = document.querySelector("input#result");
  
  // Si es NaN o Infinity, mostrar en rojo
  if (isNaN(result) || !isFinite(result)) {
    inputResultado.value = result;
    inputResultado.style.color = "red";
  } else {
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

// 29. Emails

document.body.innerHTML += `
  <h2>Ejercicio 29</h2>
  <input type="text" id="emailInput" placeholder="email@dominio.com">
  <button id="analizarEmail">Analizar</button>
  <div id="resultadoEmail"></div>
  
  <h3>Filtros de emails</h3>
  <button id="filtrarEmails">Mostrar Filtros</button>
  <div id="resultadoFiltros"></div>
  
  <button id="mostrarSubdominios">Mostrar Subdominios</button>
  <div id="resultadoSubdominios"></div>
`;

document.getElementById('analizarEmail').addEventListener('click', () => {
  let email = document.getElementById('emailInput').value;
  let resultadoDiv = document.getElementById('resultadoEmail');
  
  let partes = email.split('@');
  let usuario = partes[0];
  let dominio = partes[1];
  let tld = dominio.split('.')[dominio.split('.').length - 1];
  
  let nuevoEmail = usuario + '@thosicodina.' + tld;
  
  resultadoDiv.innerHTML = `
    <p>Longitud usuario: ${usuario.length}</p>
    <p>TLD: ${tld}</p>
    <p>Nuevo email: ${nuevoEmail}</p>
  `;
});

let emails = [
  "p.escosa@gmail.com",
  "j.garcia@info.yahoo.es",
  "r.esteban@sales.gmail.com",
  "a.gomez@gmail.es",
  "l.mesa@gmail.com",
  "t.sants@hotmail.es",
  "v.ros@hotmail.com"
];

document.getElementById('filtrarEmails').addEventListener('click', () => {
  let resultadoDiv = document.getElementById('resultadoFiltros');
  
  let gmailCom = [];
  let tldEs = [];
  
  for (let i = 0; i < emails.length; i++) {
    if (emails[i].includes('gmail') && emails[i].endsWith('.com')) {
      gmailCom.push(emails[i]);
    }
    if (emails[i].endsWith('.es')) {
      tldEs.push(emails[i]);
    }
  }
  
  resultadoDiv.innerHTML = `
    <h4>Gmail con .com:</h4>
    <ul>`;
  for (let i = 0; i < gmailCom.length; i++) {
    resultadoDiv.innerHTML += `<li>${gmailCom[i]}</li>`;
  }
  resultadoDiv.innerHTML += `</ul><h4>TLD .es:</h4><ul>`;
  for (let i = 0; i < tldEs.length; i++) {
    resultadoDiv.innerHTML += `<li>${tldEs[i]}</li>`;
  }
  resultadoDiv.innerHTML += `</ul>`;
});

document.getElementById('mostrarSubdominios').addEventListener('click', () => {
  let resultadoDiv = document.getElementById('resultadoSubdominios');
  let html = '<h4>Subdominios:</h4><ul>';
  
  for (let i = 0; i < emails.length; i++) {
    let dominio = emails[i].split('@')[1];
    let partes = dominio.split('.');
    
    if (partes.length > 2) {
      let subdominio = partes[0];
      html += `<li>${emails[i]} - Subdominio: ${subdominio}</li>`;
    }
  }
  
  html += '</ul>';
  resultadoDiv.innerHTML = html;
});

// 30. Reloj con dos formatos

document.body.innerHTML += `
  <h2>Ejercicio 30</h2>
  <div id="reloj" style="font-size: 24px; padding: 20px; border: 1px solid black; cursor: pointer;">
  </div>
`;

let formato = 1;

function actualizarReloj() {
  let ahora = new Date();
  let dia = ahora.getDate();
  let mes = ahora.getMonth() + 1;
  let año = ahora.getFullYear();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  
  // Añadir ceros
  if (dia < 10) dia = '0' + dia;
  if (mes < 10) mes = '0' + mes;
  if (horas < 10) horas = '0' + horas;
  if (minutos < 10) minutos = '0' + minutos;
  if (segundos < 10) segundos = '0' + segundos;
  
  let texto;
  if (formato === 1) {
    texto = dia + '/' + mes + '/' + año + ' ' + horas + ':' + minutos + ':' + segundos;
  } else {
    texto = año + '-' + mes + '-' + dia + ' ' + horas + ':' + minutos + ':' + segundos;
  }
  
  document.getElementById('reloj').textContent = texto;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

document.getElementById('reloj').addEventListener('dblclick', () => {
  if (formato === 1) {
    formato = 2;
  } else {
    formato = 1;
  }
  actualizarReloj();
});
