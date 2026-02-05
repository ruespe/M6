// Definició de la classe Canvas
import * as Filtre from '../modules/filter.js'
export default class Canvas {
  #canvas
  #ctx
  #imatge
  #padding
  constructor () {
    this.#canvas = undefined
    this.#ctx = undefined
    this.#imatge = new Image()
    this.#padding = 10 // Es podria passar per parÃ metre
  };

  get ctx () {

  }

  set ctx(canvas) {

  };

  get padding () {

  }

  set padding (padding) {

  }

  carregarImatge (nomImatge) {


  };

  netejarCanvas () {

  }

  dibuixarFiltre (dades) {

  }

  aplicarFiltre (tipus, r) {

    switch (tipus) {
      case 'enfosquir':

        break
      case 'negatiu':

        break
      case 'grisos':

        break
      case 'mirall':

        break
      case 'custom':

        break
      default:
    }

  }
};