
// 1. Crea un script que comprovi si una variable és del tipus Number, en cas afirmatiu s'ha d'arrodonir a 2
//decimals i mostrar-la per la consola, en cas contrari mostrar el tipus per la consola

let num = "Madrid";
if (typeof num === "number") {
    let redondeo = num.toFixed(2);
    console.log(redondeo);
} else {
    console.log("No es un numero sino un: ", typeof num)
}

// 2. Donat un Array d'Strings:
// 2.1. Canvia els espais en blanc per -
// 2.2 Converteix cada element a LowerCase
const title = ['La casa de paper', 'La catedral del mar', 'Panegre', 'Polseres vermelles'];
let guiones = title.map(str => str.replace(/ /g, "-").toLowerCase());
console.log(guiones)

// 3. Suma tots el valors numèrics d'un array
const arrSuma = [3, false, 7, 'Maria', 9]
let suma = 0
arrSuma.forEach(elementoArray => {
    if (typeof elementoArray === "number") suma += elementoArray;
});
console.log(suma)

// 4. Comprova si un string està buit o no. Comprova si un string és null o undefined

let string;

if (string === "") {
    console.log("El string está vacio")
} else if (string === null) {
    console.log("El string es nulo")
} else if (string === undefined) {
    console.log("El string es indefinido")
}

// 5. Desa les paraules d'un string cadascuna en una posició d'un array
const str2 = 'Desenvolupament web en entorn client'
let paralabras = str2.split(" ");
console.log(paralabras)

// 6. Compta les aparicions d'una subcadena en una cadena
const str3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
let apariciones = 0;
apariciones = str3.split("do").length
console.log(apariciones - 1)

// 7. Escriu un script per obtenir una part d'una cadena després d'un caràcter especificat
const cadena = "numero=9";
const caracter = "=";
const index = cadena.indexOf(caracter);
let resultado = "";
if (index !== -1) {
    resultado = cadena.slice(index + 1);
    console.log(resultado);
} else {
    console.log(index);
}

// 8. Crea una funció per comprovar si una cadena acaba amb el sufix especificat
const acabaConSufijo = (cadena, sufijo) => cadena.endsWith(sufijo);
console.log(acabaConSufijo('Piscina', 'cina'));

