
//! NO USAR .inner.html usar createElement 
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

//9. Crea un script per fusionar dos arrays
let array1 = [1, 2];
let array2 = [3, 4];
let unionArrays = array1.concat(array2);
console.log(unionArrays);

//10. Converteix la data actual al següent format: '9/6/2022, 17:46:49' de la manera més concisa possible
// '9/6/2022, 17:46:49'

let fecha = new Date();
let fechaConcisa = fecha.toLocaleString('es-ES');
console.log(fechaConcisa);

//11. Crea un script per comparar dues dates. En el cas de comparar dues dates iguals s'ha d'utilitzar l'operador '==='
let fecha1 = new Date('05/06/2002');
let fecha2 = new Date('05/06/2002');

if (fecha1.getTime() === fecha2.getTime()) {
    console.log("Las fechas son iguales");
} else if (fecha1 > fecha2) {
    console.log("Fecha 1 es mayor");
} else {
    console.log("Fecha 2 es mayor");
}

//12. Crea un script que mostri els dies que han passat des de l'inici d'any
let añoInicio = new Date(new Date().getFullYear(), 0, 1);
let diasPasados = Math.floor((fecha - añoInicio) / (1000 * 60 * 60 * 24));
console.log(`${diasPasados} días han pasado`);


//13. Crea un script que retorni la data actual amb el següent format
// 17/6/2022, 8:43:49
let fecha3 = new Date();
let fechaFormateada = fecha.toLocaleString('es-ES');
console.log(fechaFormateada);


//14. Mitjançant JavaScript crea un element HTML amb les mateixes característiques que el què es mostra. Al final elimina l'atribut id
let input = document.createElement("input");

input.type = "email";
input.name = "email";
input.id = "email";
input.className = "form-element";
input.required = true;
input.placeholder = "Please enter a valid email account";

document.body.appendChild(input);

input.removeAttribute("id");

//15. Crea un element <form> i afegeix l'<input> del punt anterior i un <button>
let form = document.createElement("form");
form.action = "#";
form.method = "post";
form.id = "user-data";
form.className = "form-element";
form.required = "required";
form.noValidate = true;


let input2 = document.createElement("input");
input2.type = "email";
input2.name = "email";
input2.id = "email";
input2.required = true;
input2.placeholder = "Please enter a valid email account";

let button = document.createElement("button");
button.type = "submit";
button.id = "send";
button.textContent = "Enviar";

form.appendChild(input)
form.appendChild(button);

document.body.appendChild(form);

//16. Crea un menú a partir dels valors d'un array
//usar template string
let menu = document.createElement("nav");
menu.className = "menu";

let menuItems = ['home', 'about', 'products', 'contact'];

let ul = document.createElement("ul");

menuItems.forEach(item => {
    ul.insertAdjacentHTML("beforeend", `<li><a href="#${item}">${item}</a></li>`);
});

menu.appendChild(ul);
document.body.appendChild(menu);
