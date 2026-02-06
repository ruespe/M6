// Definició de la classe Canvas
import * as Filtre from "./Filtre.js";
export default class Canvas {
  #canvas;
  #ctx;
  #imatge;
  #padding;
  constructor() {
    this.#canvas = undefined;
    this.#ctx = this.#canvas;
    this.#imatge = new Image();
    this.#padding = 10; // Es podria passar per parÃ metre
  }

  get ctx() {}

  set ctx(canvas) {}

  get padding() {}

  set padding(padding) {}

  carregarImatge(src, canvas) {
    const img = new Image();
    img.onload = function () {
      // Ajustar el tamaño del canvas a la imagen + 10px por cada lado
      canvas.width = img.width + 20;
      canvas.height = img.height + 20;

      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar la imagen centrada (con 10px de margen)
      ctx.drawImage(img, 10, 10);
    };
    img.src = src;
  }

  netejarCanvas() {}

  dibuixarFiltre(dades) {}

  aplicarFiltre(tipus, r) {
    switch (tipus) {
      case "enfosquir":
        break;
      case "negatiu":
        break;
      case "grisos":
        break;
      case "mirall":
        break;
      case "custom":
        break;
      default:
    }
  }
}
