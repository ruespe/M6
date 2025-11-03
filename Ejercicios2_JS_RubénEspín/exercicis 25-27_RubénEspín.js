// 25. Crea un array bidimensional 3x3 i emplena'l amb números aleatoris des de l'1 al 29 sense repetits.
// Fes-ho de manera que l'script funcioni per a qualsevol array bidimensional, per exemple: 2x3. 4x4,
// 5x2, etc. sense fer cap modificació

let filas = 3;
let columnas = 3;

// Ejercicio 25
let totalNumeros = filas * columnas;
let numeros = [];

while (numeros.length < totalNumeros) {
  let num = Math.floor(Math.random() * 29) + 1;
  if (!numeros.includes(num)) {
    numeros.push(num);
  }
}

let arrayBidimensional = [];
let indice = 0;

for (let i = 0; i < filas; i++) {
  arrayBidimensional[i] = [];
  for (let j = 0; j < columnas; j++) {
    arrayBidimensional[i][j] = numeros[indice];
    indice++;
  }
}

console.log("Ejercicio 25:");
console.table(arrayBidimensional);

// 26. A l'array anterior, fes que:
// 1. La primera columna contingui els números entre 1 i 9
// 2. La segona columna contingui els números entre 10 i 19
// 3. La tercera columna contingui els números entre 20 i 29

let arrayBidimensional2 = [];

for (let i = 0; i < filas; i++) {
  arrayBidimensional2[i] = [];
  for (let j = 0; j < columnas; j++) {
    let min = j * 10 + 1;
    let max = j * 10 + 9;

    let num;
    let repetido = true;
    while (repetido) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      repetido = false;
      for (let k = 0; k < i; k++) {
        if (arrayBidimensional2[k][j] === num) {
          repetido = true;
        }
      }
    }
    arrayBidimensional2[i][j] = num;
  }
}

console.log("Ejercicio 26:");
console.table(arrayBidimensional2);

// 27. A l'array anterior, fes que:
// 1. La primera columna sigui amb ordre ascendent
// 2. La segunda columna sigui amb ordre descendent
// 3. La tercera columna sigui amb ordre ascendent

let arrayBidimensional3 = [];
let col1 = [];
let col2 = [];
let col3 = [];

while (col1.length < filas) {
  let num = Math.floor(Math.random() * 9) + 1;
  if (!col1.includes(num)) {
    col1.push(num);
  }
}
col1.sort((a, b) => a - b);

while (col2.length < filas) {
  let num = Math.floor(Math.random() * 10) + 10;
  if (!col2.includes(num)) {
    col2.push(num);
  }
}
col2.sort((a, b) => b - a);

while (col3.length < filas) {
  let num = Math.floor(Math.random() * 10) + 20;
  if (!col3.includes(num)) {
    col3.push(num);
  }
}
col3.sort((a, b) => a - b);

for (let i = 0; i < filas; i++) {
  arrayBidimensional3[i] = [];
  arrayBidimensional3[i][0] = col1[i];
  arrayBidimensional3[i][1] = col2[i];
  arrayBidimensional3[i][2] = col3[i];
}

console.log("Ejercicio 27:");
console.table(arrayBidimensional3);
