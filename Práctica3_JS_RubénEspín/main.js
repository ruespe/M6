let containerBingo = document.body.querySelector("#bingo");


let table = document.createElement("table");


containerBingo.append(table);


let tbody = document.createElement("tbody");
table.append(tbody);


for (let i = 0; i < 3; i++) {
  let tr = document.createElement("tr");
  tbody.append(tr);


  for (let j = 0; j < 9; j++) {
    let min = j * 10 + 1;
    let max = j * 10 + 9;
    let numRand = Math.floor(Math.random() * (max - min + 1)) + min;
    tr.insertAdjacentHTML("beforeend", `<td>${numRand}</td>`);
    //console.log(numRand);
  }


}
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
  for (let c = 0; c < 9; c++) {
  let celda = filas[0].querySelectorAll("td")[c];
  console.log(celda);
}


});
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

// Ordenar columnas alternando asc/desc
for (let col = 0; col < 9; col++) {
  // recoger las tres celdas con número (no negras)
  let celdas = [];
  for (let fila = 0; fila < 3; fila++) {
    let celda = filas[fila].querySelectorAll("td")[col];
    if (!celda.classList.contains("cuadrado-negro")) {
      celdas.push(celda);
    }
  }

  // obtener los números
  let nums = celdas.map(c => Number(c.textContent));

  // decidir si asc o desc
  let asc = col % 2 === 0; // pares asc, impares desc

  nums.sort((a, b) => asc ? a - b : b - a);

  // volver a poner los números ordenados
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].textContent = nums[i];
  }
}
