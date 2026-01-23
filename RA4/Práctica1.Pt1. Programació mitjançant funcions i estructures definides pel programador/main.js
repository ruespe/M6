
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

