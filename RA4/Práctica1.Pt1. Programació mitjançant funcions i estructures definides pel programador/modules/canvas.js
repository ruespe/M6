import { Enfosquir, Grisos, Negatiu, FlipHoritzontal, Sepia, Pixelat } from "./Filtre.js";

export default class Canvas {
  #canvas;
  #ctx;
  #imatge;
  #padding;

  constructor(canvasElement, padding = 10) {
    this.#canvas = canvasElement;
    this.#ctx = canvasElement.getContext("2d");
    this.#imatge = new Image();
    this.#padding = padding;
  }

  get ctx() {
    return this.#ctx;
  }

  set ctx(canvasElement) {
    this.#canvas = canvasElement;
    this.#ctx = canvasElement.getContext("2d");
  }

  get canvas() {
    return this.#canvas;
  }

  get imatge() {
    return this.#imatge;
  }

  get padding() {
    return this.#padding;
  }

  set padding(value) {
    if (typeof value === "number" && value >= 0) {
      this.#padding = value;
    }
  }

  carregarImatge(src) {
    return new Promise((resolve, reject) => {
      this.#imatge = new Image();
      this.#imatge.crossOrigin = "anonymous";
      this.#imatge.onload = () => {
        this.#canvas.width = this.#imatge.width + this.#padding * 2;
        this.#canvas.height = this.#imatge.height + this.#padding * 2;
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#ctx.drawImage(this.#imatge, this.#padding, this.#padding);
        resolve();
      };
      this.#imatge.onerror = () => reject(new Error("Error al cargar la imagen"));
      this.#imatge.src = src;
    });
  }

  netejarCanvas() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  dibuixarFiltre(dades) {
    this.#ctx.putImageData(dades, this.#padding, this.#padding);
  }

  aplicarFiltre(tipus, valor) {
    const params = {
      ctx: this.#ctx,
      imatge: this.#imatge,
      padding: this.#padding,
    };

    const makers = {
      enfosquir: () => new Enfosquir(params, valor || 0),
      negatiu: () => new Negatiu(params),
      grisos: () => new Grisos(params),
      mirall: () => new FlipHoritzontal(params),
      sepia: () => new Sepia(params),
      pixelat: () => new Pixelat(params, valor || 5),
    };

    const make = makers[tipus];
    if (!make) return null;
    return make().transforma(valor);
  }

  desarImatge(nom = "imagen_filtrada.png") {
    const link = document.createElement("a");
    link.download = nom;
    link.href = this.#canvas.toDataURL("image/png");
    link.click();
  }
}
