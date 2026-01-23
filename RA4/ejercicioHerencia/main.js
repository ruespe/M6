// 1. Crea una funció constructora Llibres() amb els següents paràmetres.
//  Llibres(titol, pagines, tematica, nomAutor, CognomAutor)

// Afegeix al prototype:
// un mètode info() que mostri la informació del llibre emmagatzemada en els paràmetres.
// Crea una instància que mostri per exemple:
//  “El Quijote de la Mancha, 650 pàg. Novel·la, Miguel Cervantes”

// Una propietat valoracio, i un mètode rating() que mostri el titol del llibre i propietat valoracio.
// Crea dues instància de Llibres() i comprova que es pot aplicar rating() ambdues.
// Crea una propietat valoracio en les “own properties” de la funció constructora Llibres i mostra
// com afecta a les instàncies creades en el punt anterior. Explica el motiu.
function Libros(titulo, paginas, tematica, nombreAutor, apellidoAutor) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.tematica = tematica;
    this.nombreAutor = nombreAutor;
    this.apellidoAutor = apellidoAutor;
}

Libros.prototype.info = function () {
    return `${this.titulo}, ${this.paginas} pág. ${this.tematica}, ${this.nombreAutor} ${this.apellidoAutor}`;
};

Libros.prototype.valoracion = 0;

Libros.prototype.rating = function () {
    return `${this.titulo}: ${this.valoracion} estrellas`;
};

const libro1 = new Libros("El Quijote de la Mancha", 650, "Novela", "Miguel", "Cervantes");
console.log(" EJERCICIO 1 ");
console.log(libro1.info());

const libro2 = new Libros("Cien años de soledad", 471, "Novela", "Gabriel", "García Márquez");
libro1.valoracion = 5;
libro2.valoracion = 4;

console.log(libro1.rating());
console.log(libro2.rating());

Libros.valoracion = 10;

console.log("\nDespués de añadir Libros.valoracion = 10");
console.log("libro1.valoracion:", libro1.valoracion);
console.log("libro2.valoracion:", libro2.valoracion);
console.log("Libros.valoracion:", Libros.valoracion);

// EXPLICACIÓN: La propiedad Libros.valoracion es una propiedad estática de la función constructora,
// no afecta a las instancias porque no forma parte de la cadena de prototipos.
// Las instancias ya tienen su propia propiedad valoracion (own property) que sombrea
// la del prototipo.

// 2. Crea una funció que recorri la instància creada ue mitjançant hasOwnProperty() o
// propertyIsEnumerable():
// Mostri les “own properties” d’una de les instàncies creades en el punt 2.
// Mostri les prototype properties d’una de les instàncies creades en el punt 2.
// Explica que ocorre amb la propietat valoracio que es troba en les dues parts
console.log("\n EJERCICIO 2 ");

function mostrarPropiedades(instancia) {
    console.log("\nPropiedades Propias");
    for (let prop in instancia) {
        if (instancia.hasOwnProperty(prop)) {
            console.log(`${prop}: ${instancia[prop]}`);
        }
    }

    console.log("\nPropiedades del Prototipo");
    for (let prop in instancia) {
        if (!instancia.hasOwnProperty(prop)) {
            console.log(`${prop}: ${typeof instancia[prop] === "function" ? "[Función]" : instancia[prop]}`);
        }
    }
}

mostrarPropiedades(libro1);

// EXPLICACIÓN sobre valoracion:
// La propiedad 'valoracion' inicialmente está en el prototipo (Libros.prototype.valoracion = 0).
// Cuando hacemos libro1.valoracion = 5, se crea una "own property" en la instancia que sombrea
// la del prototipo. Por tanto, libro1.hasOwnProperty('valoracion') retorna true.
// Si no hubiéramos asignado un valor, la propiedad se leería del prototipo.

console.log("\nComprobación valoracion");
const libro3 = new Libros("Test", 100, "Test", "Test", "Test");
console.log("libro3.hasOwnProperty('valoracion') antes de asignar:", libro3.hasOwnProperty("valoracion"));
console.log("libro3.valoracion:", libro3.valoracion);
libro3.valoracion = 3;
console.log("libro3.hasOwnProperty('valoracion') después de asignar:", libro3.hasOwnProperty("valoracion"));


// 3. Herència per Prototypes


// Els atributs marca, model, matricula, color i combustible es passaran en un objecte Implementa l'estructura de classes de la part esquerra del diagrama mitjançant el paradigma d'encadenament de Prototypes.

console.log("\n EJERCICIO 3 ");

function Vehiculo(config) {
    this.marca = config.marca;
    this.modelo = config.modelo;
    this.matricula = config.matricula;
    this.color = config.color;
    this.combustible = config.combustible;
    this.disponibilidad = false;
}

Vehiculo.prototype.mostrarCaracteristicas = function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Matrícula: ${this.matricula}, Color: ${this.color}, Combustible: ${this.combustible}`;
};

Vehiculo.prototype.tieneDisponibilidad = function () {
    return this.disponibilidad;
};

function CuatroRuedas(config, tipoCarnet) {
    Vehiculo.call(this, config);
    this.numRuedas = 4;
    this.tipoCarnet = tipoCarnet;
}

CuatroRuedas.prototype = Object.create(Vehiculo.prototype);
CuatroRuedas.prototype.constructor = CuatroRuedas;

function Coche(config, tipoCarnet, nPlazas) {
    CuatroRuedas.call(this, config, tipoCarnet);
    this.tipoVehiculo = "coche";
    this.nPlazas = nPlazas;
}

Coche.prototype = Object.create(CuatroRuedas.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarCaracteristicas = function () {
    return `${Vehiculo.prototype.mostrarCaracteristicas.call(this)}, Tipo: ${this.tipoVehiculo}, Plazas: ${this.nPlazas}, Carnet: ${this.tipoCarnet}`;
};

function Furgoneta(config, tipoCarnet, nPlazas, pesoCarga) {
    CuatroRuedas.call(this, config, tipoCarnet);
    this.tipoVehiculo = "furgoneta";
    this.nPlazas = nPlazas;
    this.pesoCarga = pesoCarga;
}

Furgoneta.prototype = Object.create(CuatroRuedas.prototype);
Furgoneta.prototype.constructor = Furgoneta;

Furgoneta.prototype.mostrarCaracteristicas = function () {
    return `${Vehiculo.prototype.mostrarCaracteristicas.call(this)}, Tipo: ${this.tipoVehiculo}, Plazas: ${this.nPlazas}, Peso Carga: ${this.pesoCarga}kg, Carnet: ${this.tipoCarnet}`;
};

const miCoche = new Coche(
    {
        marca: "Seat",
        modelo: "Ibiza",
        matricula: "1234ABC",
        color: "Rojo",
        combustible: "Gasolina",
    },
);

const miFurgoneta = new Furgoneta(
    {
        marca: "Renault",
        modelo: "Kangoo",
        matricula: "5678DEF",
        color: "Blanco",
        combustible: "Diésel",
    },
);

console.log("\nCoche");
console.log(miCoche.mostrarCaracteristicas());
console.log("Disponibilidad:", miCoche.tieneDisponibilidad());
console.log("Num Ruedas:", miCoche.numRuedas);

console.log("\nFurgoneta");
console.log(miFurgoneta.mostrarCaracteristicas());
console.log("Disponibilidad:", miFurgoneta.tieneDisponibilidad());
console.log("Num Ruedas:", miFurgoneta.numRuedas);

console.log("\nComprobación herencia");
console.log("miCoche instanceof Coche:", miCoche instanceof Coche);
console.log("miCoche instanceof CuatroRuedas:", miCoche instanceof CuatroRuedas);
console.log("miCoche instanceof Vehiculo:", miCoche instanceof Vehiculo);
console.log("miFurgoneta instanceof Furgoneta:", miFurgoneta instanceof Furgoneta);
console.log("miFurgoneta instanceof CuatroRuedas:", miFurgoneta instanceof CuatroRuedas);
console.log("miFurgoneta instanceof Vehiculo:", miFurgoneta instanceof Vehiculo);