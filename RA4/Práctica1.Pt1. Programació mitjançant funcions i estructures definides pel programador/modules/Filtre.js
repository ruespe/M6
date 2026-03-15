export class Filtre {
  constructor({ ctx, imatge, padding }) {
    this.w = imatge.width;
    this.h = imatge.height;
    this.padding = padding;
    this.ctx = ctx;
    this.imagenData = this.ctx.getImageData(this.padding, this.padding, this.w, this.h);
  }

  transforma() {
    return this.imagenData;
  }
}

export class Enfosquir extends Filtre {
  constructor({ ctx, imatge, padding }, range) {
    super({ ctx, imatge, padding });
    this.range = range;
  }

  transforma(range) {
    const valor = range !== undefined ? range : this.range;
    const data = this.imagenData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.min(255, Math.max(0, data[i] + valor));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + valor));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + valor));
    }
    return this.imagenData;
  }
}

export class Grisos extends Filtre {
  constructor({ ctx, imatge, padding }) {
    super({ ctx, imatge, padding });
  }

  transforma() {
    const data = this.imagenData.data;
    for (let i = 0; i < data.length; i += 4) {
      const gris = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      data[i] = gris;
      data[i + 1] = gris;
      data[i + 2] = gris;
    }
    return this.imagenData;
  }
}

export class Negatiu extends Filtre {
  constructor({ ctx, imatge, padding }) {
    super({ ctx, imatge, padding });
  }

  transforma() {
    const data = this.imagenData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];
      data[i + 1] = 255 - data[i + 1];
      data[i + 2] = 255 - data[i + 2];
    }
    return this.imagenData;
  }
}

export class FlipHoritzontal extends Filtre {
  constructor({ ctx, imatge, padding }) {
    super({ ctx, imatge, padding });
  }

  transforma() {
    const data = this.imagenData.data;
    const w = this.w;
    const h = this.h;
    const copia = new Uint8ClampedArray(data);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        // Calcular posición original y posición espejada
        const srcIndex = (y * w + x) * 4;
        const dstIndex = (y * w + (w - 1 - x)) * 4;
        data[dstIndex] = copia[srcIndex];
        data[dstIndex + 1] = copia[srcIndex + 1];
        data[dstIndex + 2] = copia[srcIndex + 2];
        data[dstIndex + 3] = copia[srcIndex + 3];
      }
    }
    return this.imagenData;
  }
}

export class Sepia extends Filtre {
  constructor({ ctx, imatge, padding }) {
    super({ ctx, imatge, padding });
  }

  transforma() {
    const data = this.imagenData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
      data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
      data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
    }
    return this.imagenData;
  }
}

export class Pixelat extends Filtre {
  constructor({ ctx, imatge, padding }, tamany) {
    super({ ctx, imatge, padding });
    this.tamany = Math.max(2, tamany || 5);
  }

  transforma(tamany) {
    const size = tamany ? Math.max(2, tamany) : this.tamany;
    const data = this.imagenData.data;
    const w = this.w;
    const h = this.h;

    for (let y = 0; y < h; y += size) {
      for (let x = 0; x < w; x += size) {
        let totalR = 0, totalG = 0, totalB = 0, count = 0;

        for (let dy = 0; dy < size && y + dy < h; dy++) {
          for (let dx = 0; dx < size && x + dx < w; dx++) {
            const i = ((y + dy) * w + (x + dx)) * 4;
            totalR += data[i];
            totalG += data[i + 1];
            totalB += data[i + 2];
            count++;
          }
        }

        const avgR = totalR / count;
        const avgG = totalG / count;
        const avgB = totalB / count;

        for (let dy = 0; dy < size && y + dy < h; dy++) {
          for (let dx = 0; dx < size && x + dx < w; dx++) {
            const i = ((y + dy) * w + (x + dx)) * 4;
            data[i] = avgR;
            data[i + 1] = avgG;
            data[i + 2] = avgB;
          }
        }
      }
    }
    return this.imagenData;
  }
}