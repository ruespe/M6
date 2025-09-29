//1. Crea un script que comprovi si una variable és del tipus Number, en cas afirmatiu s'ha d'arrodonir a 2
//decimals i mostrar-la per la consola, en cas contrari mostrar el tipus per la consola

let num = "Madrid";
if (typeof num === "number") {
    let redondeo = num.toFixed(2);
    console.log(redondeo);
} else{
    console.log("No es un numero sino un: ", typeof num )
}

//2. Donat un Array d'Strings:
//2.1. Canvia els espais en blanc per -
//2.2 Converteix cada element a LowerCase
 const title = ['La casa de paper', 'La catedral del mar', 'Panegre', 'Polseres vermelles'];
