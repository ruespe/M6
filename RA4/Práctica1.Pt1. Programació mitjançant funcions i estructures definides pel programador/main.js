<<<<<<< HEAD

// class DomElement {
//   #tag;
//   #attributes;
//   #element;

//   constructor(tag) {
//     this.#tag = tag;
//     this.#attributes = {};
//     this.#element = null;
//   }

//   createElement() {
//     this.#element = document.createElement(this.#tag);
//     return this;
//   }

//   setAttibutte(position, object) {
//     if (position === "parentId") {
//       const parent = document.getElementById(object.parentId);
//       if (parent && this.#element) {
//         parent.appendChild(this.#element);
//       }
//     }
//     if (position === "beforeend") {
//       const parent = document.querySelector(object.beforeend);
//       if (parent && this.#element) {
//         parent.insertAdjacentElement("beforeend", this.#element);
//       }
//     }
//     // Guardar otros atributos
//     this.#attributes[position] = object;
//     return this;
//   }

//   deleteElement() {
//     if (this.#element && this.#element.parentNode) {
//       this.#element.parentNode.removeChild(this.#element);
//     }
//     return this;
//   }

//   addListener(actionFn, functionEvent) {
//     if (this.#element) {
//       this.#element.addEventListener(actionFn, functionEvent);
//     }
//     return this;
//   }

//   removeListener(attibMn, functionEvent) {
//     if (this.#element) {
//       this.#element.removeEventListener(attibMn, functionEvent);
//     }
//     return this;
//   }

//   getElement() {
//     return this.#element;
//   }
// }

// class CompoundElement extends DomElement {
//   #children;

//   constructor(tag) {
//     super(tag);
//     this.#children = [];
//   }

//   addChildren(children) {
//     this.#children.push(...children);
//     const element = this.getElement();
//     if (element) {
//       children.forEach((child) => {
//         if (child.getElement) {
//           element.appendChild(child.getElement());
//         }
//       });
//     }
//     return this;
//   }

//   getChildren() {
//     return this.#children;
//   }
// }

// class OnlyTagElement extends DomElement {
//   constructor(tag) {
//     super(tag);
//   }
// }

// class ElementWithText extends DomElement {
//   #text;

//   constructor(tag, text = "") {
//     super(tag);
//     this.#text = text;
//   }

//   setText(text) {
//     this.#text = text;
//     const element = this.getElement();
//     if (element) {
//       element.textContent = text;
//     }
//     return this;
//   }

//   getText() {
//     return this.#text;
//   }
// }

// class SelectElement extends DomElement {
//   #options;

//   constructor(tag = "select") {
//     super(tag);
//     this.#options = [];
//   }

//   createOptions(options) {
//     this.#options = options;
//     const element = this.getElement();
//     if (element) {
//       options.forEach((opt) => {
//         const option = document.createElement("option");
//         option.value = opt.value || opt;
//         option.textContent = opt.text || opt;
//         element.appendChild(option);
//       });
//     }
//     return this;
//   }

//   createElement() {
//     super.createElement();
//     return this;
//   }

//   getOptions() {
//     return this.#options;
//   }
// }

// // Exportar las clases
// export {
//   DomElement,
//   CompoundElement,
//   OnlyTagElement,
//   ElementWithText,
//   SelectElement,
// };

// 1. Crear una estructura de classes com es mostra a continuació, només les de color verd. (2.5 punts)

// 1. S'ha de crear en un arxiu javascript i ha de ser possible exportar les classes.
 // 2. S'ha d'importar a un arxiu de tipus module per poder utilitzar-les
 // 3. S'han de poder encadenar els mètodes


class ciudad {
    constructor(nombre, poblacion) {
        this.nombre = nombre;
        this.poblacion = poblacion;
    }

    mostrarInfo() {
        console.log(`Ciudad: ${this.nombre}, Población: ${this.poblacion}`);
    }
}
let enviar = document.querySelector("button");

enviar.addEventListener("click", () => {
    let input = document.querySelector("input");
    let valor = input.value;
    let datos = valor.split(",");
    let ciudad1 = new ciudad(datos[0], datos[1]);
    ciudad1.mostrarInfo();
});

=======
// 1. Crear un canvas HTML5.
// 2. Crear un thumb d'imatges.
// 3. Quan es fa click en una imatge, aquesta es carrega en el canvas. Utilitza la delegació d'events.
// 4. La mida del canvas s'ajusta a la mida de la imatge més 10px per cada costat.

const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2")
const ctx = canvas.getContext("2d");
const thumbsContainer = document.getElementById("thumbs");
const buttons = document.getElementById("buttons");


// Array con las rutas de las imágenes
const imagenes = [
  "imagen/steam.webp",
  "imagen/foto.jpg",
  "imagen/images.jpeg",
  "imagen/paisaje.jpg",
  "imagen/photo.jpeg",
  "imagen/a.jpeg",
];

// Crear las miniaturas
imagenes.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Imagen ${index + 1}`;
  img.dataset.index = index;
  if (index === 0) img.classList.add("active");
  thumbsContainer.appendChild(img);
});

// Función para cargar imagen en el canvas
// function cargarImagenEnCanvas(src) {
//   const img = new Image();
//   img.onload = function () {
//      Ajustar el tamaño del canvas a la imagen + 10px por cada lado
//     canvas.width = img.width + 20;
//     canvas.height = img.height + 20;

//      Limpiar el canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//      Dibujar la imagen centrada (con 10px de margen)
//     ctx.drawImage(img, 10, 10);
//   };
//   img.src = src;
// }

// Delegación de eventos: un solo listener en el contenedor

thumbsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    // Remover clase active de todas las imágenes
    document.querySelectorAll("#thumbs img").forEach((img) => {
      img.classList.remove("active");
    });

    // Añadir clase active a la imagen clickeada
    e.target.classList.add("active");

    // Cargar la imagen en el canvas
    cargarImagenEnCanvas(e.target.src);
  }
});

buttons.addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON"){
    canvas2.style.display = '';
    cargarImagenEnCanvas(e.target.src);
  }
})

// Cargar la primera imagen al iniciar
cargarImagenEnCanvas(imagenes[0]);



<<<<<<< HEAD
>>>>>>> 1d6fa85 (a)
=======
import * as Canvas from "./modules/canvas.js";
import * as Filtre from "./modules/Filtre.js";
>>>>>>> b43c46a (ha sido duro)
