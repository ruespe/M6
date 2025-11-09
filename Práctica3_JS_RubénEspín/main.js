
let containerBingo = document.body.querySelector("#bingo");

let table = document.createElement("table");
containerBingo.append(table);

let tbody = document.createElement("tbody");
table.append(tbody);

// Crear tabla 3x9 con números por decenas
for (let i = 0; i < 3; i++) {
  let tr = document.createElement("tr");
  tbody.append(tr);

  for (let j = 0; j < 9; j++) {
    let min = j * 10 + 1;
    let max = j * 10 + 9;
    let numRand = Math.floor(Math.random() * (max - min + 1)) + min;
    tr.insertAdjacentHTML("beforeend", `<td>${numRand}</td>`);
  }
}

// Añadir 4 casillas negras por fila
let filas = document.body.querySelectorAll("tr");
filas.forEach(fila => {
  let tds = Array.from(fila.querySelectorAll("td"));
  let restantes = [...tds];
  let total = 4;

  for (let k = 0; k < total; k++) {
    let randomIndex = Math.floor(Math.random() * restantes.length);
    restantes[randomIndex].classList.add("cuadrado-negro");
    restantes.splice(randomIndex, 1);
  }
});

// Evitar columnas con 3 negras o 3 blancas
for (let col = 0; col < 9; col++) {
  let negros = 0;
  let celdasCol = [];

  for (let fila = 0; fila < 3; fila++) {
    let celda = filas[fila].querySelectorAll("td")[col];
    celdasCol.push(celda);
    if (celda.classList.contains("cuadrado-negro")) negros++;
  }

  // Si hay 3 negras, quitar una
  if (negros === 3) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.remove("cuadrado-negro");
  }

  // Si hay 0 negras (todo blanco), poner una
  if (negros === 0) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.add("cuadrado-negro");
  }
}

// Ordenar las filas alternando ascendente/descendente
for (let i = 0; i < filas.length; i++) {
  let celdas = Array.from(filas[i].querySelectorAll("td"))
    .filter(td => !td.classList.contains("cuadrado-negro"));

  // Extraer los números
  let nums = celdas.map(td => Number(td.textContent));

  // Ordenar según el número de fila
  if (i === 1) {
    // 2ª fila descendente
    nums.sort((a, b) => b - a);
  } else {
    // 1ª y 3ª fila ascendentes
    nums.sort((a, b) => a - b);
  }

  // Volver a colocar los números ordenados
  for (let j = 0; j < celdas.length; j++) {
    celdas[j].textContent = nums[j];
  }
}
