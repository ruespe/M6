
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
    let max;
    if (j === 0) {
      max = 9; 
    } else {
      max = j * 10 + 9; 
    }
    let numRand = Math.floor(Math.random() * (max - min + 1)) + min;
    tr.insertAdjacentHTML("beforeend", `<td>${numRand}</td>`);
  }
}

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

for (let col = 0; col < 9; col++) {
  let negros = 0;
  let celdasCol = [];

  if (negros === 3) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.remove("cuadrado-negro");
  }

  if (negros === 0) {
    let rand = Math.floor(Math.random() * 3);
    celdasCol[rand].classList.add("cuadrado-negro");
  }
}

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

  if (col === 1) {
    numerosCol.sort(function(a, b) { return b - a; });
  } else {
    numerosCol.sort(function(a, b) { return a - b; });
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

let bolas = [];
for (let n = 1; n <= 90; n++) {
  bolas.push(n);
}

let bolasExtraidasDiv = document.createElement("div");
bolasExtraidasDiv.id = "bolas-extraidas";
containerBingo.append(bolasExtraidasDiv);

let extraerBtn = document.createElement("button");
extraerBtn.textContent = "Extraer bola";
containerBingo.append(extraerBtn);

let lineaCompletada = false;

function guardarEstado() {
  let estado = {
    carton: [],
    bolasExtraidas: [],
    lineaCompletada: lineaCompletada
  };

  filas.forEach(function(fila) {
    let filaDatos = [];
    fila.querySelectorAll("td").forEach(function(td) {
      filaDatos.push({
        numero: Number(td.textContent),
        negra: td.classList.contains("cuadrado-negro"),
        marcada: td.classList.contains("marcado")
      });
    });
    estado.carton.push(filaDatos);
  });

  let bolasP = bolasExtraidasDiv.querySelectorAll("p");
  bolasP.forEach(function(p) {
    estado.bolasExtraidas.push(Number(p.textContent));
  });

  localStorage.setItem("bingoEstado", JSON.stringify(estado));
}

function cargarEstado() {
  let estadoStr = localStorage.getItem("bingoEstado");
  if (!estadoStr) return false;

  let estado = JSON.parse(estadoStr);
  lineaCompletada = estado.lineaCompletada;

  filas.forEach(function(fila, i) {
    fila.querySelectorAll("td").forEach(function(td, j) {
      td.textContent = estado.carton[i][j].numero;
      if (estado.carton[i][j].negra) {
        td.classList.add("cuadrado-negro");
      } else {
        td.classList.remove("cuadrado-negro");
      }
      if (estado.carton[i][j].marcada) {
        td.classList.add("marcado");
      } else {
        td.classList.remove("marcado");
      }
    });
  });

  bolasExtraidasDiv.innerHTML = "";
  estado.bolasExtraidas.forEach(function(bola) {
    let p = document.createElement("p");
    p.textContent = bola + " ";
    bolasExtraidasDiv.prepend(p);

    let index = bolas.indexOf(bola);
    if (index !== -1) {
      bolas.splice(index, 1);
    }
  });

  return true;
}

cargarEstado();

extraerBtn.addEventListener("click", function() {
  if (bolas.length === 0) return;

  let indice = Math.floor(Math.random() * bolas.length);
  let bola = bolas.splice(indice, 1)[0];

  let p = document.createElement("p");
  p.textContent = bola + " ";
  bolasExtraidasDiv.prepend(p);

  filas.forEach(function(fila) {
    fila.querySelectorAll("td").forEach(function(td) {
      if (!td.classList.contains("cuadrado-negro") && Number(td.textContent) === bola) {
        td.classList.add("marcado");
      }
    });
  });

  if (!lineaCompletada) {
    filas.forEach(function(fila) {
      let tds = Array.from(fila.querySelectorAll("td")).filter(function(td) {
        return !td.classList.contains("cuadrado-negro");
      });
      let todosMarcados = tds.every(function(td) {
        return td.classList.contains("marcado");
      });
      if (todosMarcados) {
        alert("¡Línea completada!");
        lineaCompletada = true;
      }
    });
  }

  let todasMarcadas = filas.every(function(fila) {
    let tds = Array.from(fila.querySelectorAll("td")).filter(function(td) {
      return !td.classList.contains("cuadrado-negro");
    });
    return tds.every(function(td) {
      return td.classList.contains("marcado");
    });
  });

  if (todasMarcadas) {
    alert("BINGOOOO");
    extraerBtn.remove();
  }

  guardarEstado();
});