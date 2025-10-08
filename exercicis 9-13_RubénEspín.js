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


