// Exercicis estructures de dades. Arrays
// A partir del següent array d'objectes realitza els exercicis.

const usuaris = [
  {
    nom: "Joan",
    edat: 45,
    professio: "mecànic",
    sou: 1750,
    idioma: ["espanyol"],
  },
  {
    nom: "Pere",
    edat: 57,
    professio: "administratiu",
    sou: 1860,
    idioma: ["espanyol", "catala", "francès"],
  },
  {
    nom: "Laia",
    edat: 24,
    professio: "imformatica",
    sou: 1500,
    idioma: ["espanyol", "catala", "anglès", "francès"],
  },
  {
    nom: "Joana",
    edat: 88,
    professio: "jubilada",
    sou: 480,
    idioma: ["catala"],
  },
  { nom: "Mark", edat: 71, professio: "jubilat", sou: 650, idioma: ["anglès"] },
  {
    nom: "Josep",
    edat: 21,
    professio: "estudiant",
    sou: 0,
    idioma: ["espanyol", "catala", "anglès"],
  },
  {
    nom: "Maria",
    edat: 19,
    professio: "estudiant",
    sou: 0,
    idioma: ["espanyol", "catala", "anglès", "francès"],
  },
  {
    nom: "Eva",
    edat: 24,
    professio: "periodista",
    sou: 2750,
    idioma: ["espanyol", "catala", "italià", "francès"],
  },
  {
    nom: "Mireia",
    edat: 36,
    professio: "perruquera",
    sou: 1240,
    idioma: ["espanyol", "catala"],
  },
  {
    nom: "Esteve",
    edat: 54,
    professio: "dentista",
    sou: 4507,
    idioma: ["espanyol", "francès"],
  },
  {
    nom: "Joaquim",
    edat: 62,
    professio: "jubilat",
    sou: 1100,
    idioma: ["espanyol", "catala"],
  },
  {
    nom: "Ernest",
    edat: 14,
    professio: "estudiant",
    sou: 0,
    idioma: ["catala", "anglès"],
  },
  {
    nom: "Eric",
    edat: 28,
    professio: "disenyador",
    sou: 850,
    idioma: ["espanyol", "catala", "anglès", "alemany"],
  },
  {
    nom: "Maiol",
    edat: 20,
    professio: "estudiant",
    sou: 0,
    idioma: ["espanyol", "catala"],
  },
  {
    nom: "Carles",
    edat: 18,
    professio: "estudiant",
    sou: 0,
    idioma: ["espanyol"],
  },
  {
    nom: "Antoni",
    edat: 32,
    professio: "metge",
    sou: 7800,
    idioma: ["espanyol", "catala", "anglès"],
  },
];
// usuaris.forEach(objeto => {
//     let sueldo = objeto.sou;
//     if(sueldo<1000){
//         subida1 = sueldo *  0.02
//     }
//     if(sueldo>=1000){
//         subida2 = sueldo * 0.017
//     }
// });

let sueldosActualizados = usuaris.map(function(usuari){
   let sueldo = usuari.sou;
    if(sueldo<1000){
        subida1 = sueldo *  0.02
    }
    if(sueldo>=1000){
        subida2 = sueldo * 0.017
     }

console.log(subida1)
});
// 1. Crea un nou amb el sou augmentat en un 2% si el sou és menor de 1000 i en un 1.7% si és igual o més
// gran. Utilitza map().

// 2. Retorna els items amb un sou entre 500 i 1500 ambdós inclosos. Utilitza filter().

// 3. Utilitzant every() i some():
// 1. Mostra un missatge que indiqui si tots els usuaris són majors d’edat o no ho són.
// 2. Mostra un missatge que indiqui si hi han usuaris que tenen 65 anys o més.

// 4. Retorna el valor de la suma total del sou de tots els usuaris. Utilitza reduce().

// 5. Mitjançant splice() a l’array usuaris:
// 1. Insereix dos elements nous a partir de la posició 7.
// 2. Extreu els elements de les posicions 3 a 5 (ambdós inclosos) eliminant-los de l’array original i desant-los en un de nou.
