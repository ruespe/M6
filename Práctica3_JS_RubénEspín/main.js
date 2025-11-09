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
    let max;
    if (j === 0) {
      max = 9; // columna 0: 1-9
    } else {
      max = j * 10 + 9; // columnas 1-8
    }

    let numRand = Math.floor(Math.random() * (max - min + 1)) + min;
    tr.insertAdjacentHTML("beforeend", `<td>${numRand}</td>`);
  }
}

// Añadir 4 casillas negras por fila
let filas = Array.from(document.querySelectorAll("tr"));
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
    if (celda.classList.contains("cuadrado-negro")) {
      negros++;
    }
  }

  if (negros === 3) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.remove("cuadrado-negro");
  }

  if (negros === 0) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.add("cuadrado-negro");
  }
}

// Ordenar filas alternando ascendente/descendente por columna
for (let col = 0; col < 9; col++) {
  let numerosCol = [];
  let celdasCol = [];

  for (let fila = 0; fila < 3; fila++) {
    let celda = filas[fila].querySelectorAll("td")[col];
    celdasCol.push(celda);
    if (!celda.classList.contains("cuadrado-negro")) {
      numerosCol.push(Number(celda.textContent));
    }
  }

  // Ordenar según la fila
  if (col === 1) {
    numerosCol.sort(function(a, b) { return b - a; }); // descendente
  } else {
    numerosCol.sort(function(a, b) { return a - b; }); // ascendente
  }

  let index = 0;
  for (let fila = 0; fila < 3; fila++) {
    let celda = celdasCol[fila];
    if (!celda.classList.contains("cuadrado-negro")) {
      celda.textContent = numerosCol[index];
      index++;
    }
  }
}


/// todo los demas


// Crear array con todas las bolas del 1 al 90
let bolas = [];
for (let n = 1; n <= 90; n++) {
  bolas.push(n);
}

// Crear contenedor para mostrar bolas extraídas
let bolasExtraidasDiv = document.createElement("div");
bolasExtraidasDiv.id = "bolas-extraidas";
containerBingo.append(bolasExtraidasDiv);

// Crear botón para extraer bolas
let extraerBtn = document.createElement("button");
extraerBtn.textContent = "Extraer bola";
containerBingo.append(extraerBtn);

let lineaCompletada = false;

extraerBtn.addEventListener("click", () => {
  if (bolas.length === 0) return;

  // Sacar bola aleatoria
  let indice = Math.floor(Math.random() * bolas.length);
  let bola = bolas.splice(indice, 1)[0];

  // Mostrar bola extraída (última a la izquierda)
  let p = document.createElement("p");
  p.textContent = bola + " ";
  bolasExtraidasDiv.prepend(p);

  // Marcar en el cartón
  filas.forEach(fila => {
    fila.querySelectorAll("td").forEach(td => {
      if (!td.classList.contains("cuadrado-negro") && Number(td.textContent) === bola) {
        td.classList.add("marcado");
      }
    });
  });

  // Comprobar si se completa alguna línea (solo la primera vez)
  if (!lineaCompletada) {
    filas.forEach(fila => {
      let tds = Array.from(fila.querySelectorAll("td")).filter(td => !td.classList.contains("cuadrado-negro"));
      let todosMarcados = tds.every(td => td.classList.contains("marcado"));
      if (todosMarcados) {
        alert("¡Línea completada!");
        lineaCompletada = true;
      }
    });
  }

  // Comprobar si se completa el bingo
  let todasMarcadas = filas.every(fila => {
    let tds = Array.from(fila.querySelectorAll("td")).filter(td => !td.classList.contains("cuadrado-negro"));
    return tds.every(td => td.classList.contains("marcado"));
  });

  if (todasMarcadas) {
    alert("BINGOOOO");
    extraerBtn.remove();
  }
});

