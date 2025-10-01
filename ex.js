
//! NO USAR .inner.html usar createElement 

// 1. Crea un script que comprovi si una variable és del tipus Number, en cas afirmatiu s'ha d'arrodonir a 2
//decimals i mostrar-la per la consola, en cas contrari mostrar el tipus per la consola

let num = "Madrid";
if (typeof num === "number") {
    let redondeo = num.toFixed(2);
    console.log(redondeo);
} else{
    console.log("No es un numero sino un: ", typeof num )
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
    if(typeof elementoArray === "number") suma += elementoArray;
});
console.log(suma)

// 4. Comprova si un string està buit o no. Comprova si un string és null o undefined

let vacio = ""
let nulo = 
let noDefinido;


// 5. Desa les paraules d'un string cadascuna en una posició d'un array
const str2 = 'Desenvolupament web en entorn client'

// 6. Compta les aparicions d'una subcadena en una cadena
const str3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

// 7. Escriu un script per obtenir una part d'una cadena després d'un caràcter especificat
// 8. Crea una funció per comprovar si una cadena acaba amb el sufix especificat