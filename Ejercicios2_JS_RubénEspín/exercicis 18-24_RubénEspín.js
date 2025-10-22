//18. Crea un script per clonar un array
//Què ocorre si es fa assignant-lo mitjançant l'operador "=".

//De esta manera no se crea una copia real si modificas uno se modifican los dos ya que apuntan a la misma direccion de memoria
const arr1 = [1, 3, 5];
let arr2 = arr1;
arr2[0] = 3;
console.log("Valor de arr1 modificado a través de arr2: ",arr1)

//Para hacerlo correcto habria que usar otro método, así ya no apuntan a la misma dirección
const arr3 = [1, 3, 5];
const arr4 = arr3.slice();

//Si és un array multidimensional com afecta la clonació.
//Descriu com treballes els mètodes utilitzats per clonar arrays multidimensionals.

const arr5 = [1, ["a", "b", "c"], 5];

//En este caso usar el = tampoco funcionará, y el .slice() no servirá para copiar los subarrays, la mejor manera es usar un structuredClone()

const arr6 = structuredClone(arr5);
console.log("Valores del array clonado: ", arr6);

//19. Crea un script per ordenar pel valor numèric els elements d'un array de manera ascendent
let numeros = [22, 5, 33, 66, 122, 3, 55, 14];

numeros.sort(function (a, b) {
  return a - b;
});

console.log("Ordenado de forma ascendente: ", numeros);

//20. Crea una funció per desordenar un array numèric
let numeros2 = [22, 5, 33, 66, 122, 3, 55, 14];

function desordenar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let iAleatorio = Math.floor(Math.random() * (i + 1));
    [array[i], array[iAleatorio]] = [array[iAleatorio], array[i]];
  }
  return array;
}

let mostrar = desordenar(numeros2);
console.log("Array desordenado:", mostrar);

//21. Escriu una funció per ordenar el següent array d'objectes pel valor del libraryID

const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function ordernarID(array) {
  return array.sort(function (a, b) {
    return a.libraryID - b.libraryID;
  });
}
let ordenado = ordernarID(library);
console.log("Array ordenado: ", ordenado);

// 22. Genera 6 números aleatoris enters entre 0 i 10 i desa'ls en un array

array22 = [];
for (let i = 0; i < 6; i++) {
  a = Math.floor(Math.random() * 11);
  array22.push(a);
}
console.log(array22);

// 23. Troba els valors màxim i mínim de l'array del punt anterior
max = Math.max(...array22);
min = Math.min(...array22);
console.log("Numero maximo: ", max, "Numero minimo", min);

// 24. Crea un script que retorni un array d'enters entre 1 i 10 aleatoris sense que es repeteixi cap número.
// Mostra el nombre d'iteracions que es realitzen

array24 = [];
let contador = 0;

while (array24.length < 10) {
  contador++;
  let valor = Math.floor(Math.random() * 10) + 1;
  if (!array24.includes(valor)) {
    array24.push(valor);
  }
}
console.log(array24);
console.log("Numero de iteraciones: ", contador);
