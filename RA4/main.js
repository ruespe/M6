// 1. A partir del següent Object realitza els exercicis.
const producte = {
    S124234G: {
        Descripcio: "Samarreta",
        preu: 45,
        colors: ["blau", "negre", "blanc"],
        stock: {
            "M": { "blau": 5, "negre": 10, "blanc": 7 },
            "L": { "blau": 2, "negre": 5, "blanc": 1 },
            "XL": { "blau": 4, "negre": 7, "blanc": 0 }
        }
    },
    P785745Y: {
        Descripcio: "Pantaló",
        preu: 84,
        colors: ["blau", "negre"],
        stock: {
            "M": { "blau": 5, "negre": 10 },
            "L": { "blau": 2, "negre": 5 },
            "XL": { "blau": 4, "negre": 7 }
        }
    },
    A234578W: {
        Descripcio: "Abric",
        preu: 129,
        colors: ["blau", "verd"],
        stock: {
            "M": { "blau": 1, "verd": 0 },
            "L": { "blau": 7, "verd": 15 },
            "XL": { "blau": 4, "verd": 3 }
        }
    }
};
// Recupera la informació següent:
// 1. En quants colors està disponible l’article S124234G.
let coloresDisponibles = producte.S124234G.colors.length;
console.log("Colores disponibles del artículo S124234G:", coloresDisponibles);

// 2. El nombre de samarretes de color blanc de la talla M de l'article S124234G.
let samarretesBlancasM = producte.S124234G.stock.M.blanc;
console.log("Samarretas blancas talla M:", samarretesBlancasM);

// 3. La suma de les unitats de la talla L de color blau dels tres articles.
let sumaLBlau = producte.S124234G.stock.L.blau + producte.P785745Y.stock.L.blau + producte.A234578W.stock.L.blau;
console.log("Suma unidades talla L azul:", sumaLBlau);

// 4. La suma de les unitats de totes les talles de color blau dels tres articles.
let sumaTotBlau = 0;
for (let codi in producte) {
    for (let talla in producte[codi].stock) {
        if (producte[codi].stock[talla].blau !== undefined) {
            sumaTotBlau += producte[codi].stock[talla].blau;
        }
    }
}
console.log("Suma total de unidades azules:", sumaTotBlau);

// 2. Crea el mètode nomSencer() que retorni el nom i cognom de l'objecte client.
// Defineix el mètode amb:
// 1. Una funció estàndard.
// 2. Una funció de fletxa.
// Explica quina diferècia hi ha.
const nom = "Pere";
const cognom = "Garcia";

// 1. Con función estándar:
const client = {
    nom: 'Ramon',
    cognom: 'Llull',
    naixement: '1232',
    nomSencer: function() {
        return this.nom + " " + this.cognom;
    }
};
console.log("Función estándar:", client.nomSencer());

// 2. Con función flecha:
const client2 = {
    nom: 'Ramon',
    cognom: 'Llull',
    naixement: '1232',
    nomSencer: () => {
        return nom + " " + cognom; // Usa las variables globales
    }
};
console.log("Función flecha:", client2.nomSencer());

/* DIFERENCIA EXPLICADA:
   Cuando usamos una función normal (estándar), la palabra 'this' se refiere al objeto donde está la función. Por eso client.nomSencer() devuelve "Ramon Llull" porque 'this' apunta a las propiedades del objeto client.
   Pero las funciones flecha no tienen su propio 'this', es como si heredaran el contexto de donde fueron creadas.Por eso client2.nomSencer() devuelve "Pere Garcia" porque toma las variables nom y cognom que están
   definidas fuera del objeto, en la parte de arriba del código.
   */
// 3. Donat aquest objecte:
// Defineix el la funció de callback de forEach amb:
// 1. Una funció estàndard.
// 2. Una funció de fletxa.
// Explica quina diferència hi ha.

// 1. Con función estándar (requiere guardar referencia a 'this'):
const cotxes = {
    marques: ["Maserati", "Ferrari", "BMW"],
    categoria: "Esportiu",
    missatge: function () {
        let self = this; // Necesario guardar referencia
        this.marques.forEach(function(marca) {
            console.log(marca + " es un " + self.categoria);
        });
    }
}
cotxes.missatge();

// 2. Con función flecha (más simple, hereda 'this' automáticamente):
const cotxes2 = {
    marques: ["Maserati", "Ferrari", "BMW"],
    categoria: "Esportiu",
    missatge: function () {
        this.marques.forEach((marca) => {
            console.log(marca + " es un " + this.categoria);
        });
    }
}
cotxes2.missatge();

/* DIFERENCIA EXPLICADA:
   En el primer caso (cotxes), cuando usamos una función normal dentro del forEach, el 'this' se pierde.
   Ya no apunta al objeto cotxes, sino a otra cosa. Por eso tenemos que hacer un truco: guardar 'this'
   en una variable (self) antes de entrar al forEach, para poder usarla dentro.
   En el segundo caso (cotxes2), usamos una función flecha dentro del forEach. Las funciones flecha son
  son mejores y automáticamente mantienen el 'this' del objeto padre (cotxes2). No necesitamos guardar nada en variables adicionales.
*/