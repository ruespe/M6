// DefiniciÃ³ de la classe Filtre
export class Filtre {
    constructor ({ctx, imatge, padding}) {
      this.w = imatge.width
      this.h = imatge.height
      this.padding = padding
      this.ctx = ctx
      // s'agafen les dades de la imatge des del canvas
      this.imagenData = this.ctx.getImageData(this.padding, this.padding, this.w, this.h)
    };

    // Es crea el mÃ¨tode tranforma() que s'utilitzarÃ  en les subclasses
    transforma () {

    };
  };

  export class Enfosquir extends Filtre {
    constructor ({ctx, imatge, padding}, range) {

    };

    transforma (range) {

    }
  };


  export class Grisos extends Filtre {
    constructor ({ctx, imatge, padding}) {

    }

    transforma () {

    }
  };
  export class Negatiu extends Filtre {
    constructor ({ctx, imatge, padding}) {

    }

    transforma () {

    }
  };
  export class FlipHoritzontal extends Filtre {
    constructor ({ctx, imatge, padding}) {

    }

    transforma () {

    }
  }

  export class CustomFilter extends Filtre {
    constructor({ctx, imatge, padding}, factor) {

    }

    transforma() {

    }

  }