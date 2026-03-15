import Canvas from "./modules/canvas.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const els = {
  canvas: $("#canvas"),
  canvas2: $("#canvas2"),
  thumbs: $("#thumbs"),
  filtres: $("#filtres"),
  range: $("#rangeValor"),
  rangeLabel: $("#rangeLabel"),
  rangeContainer: $("#rangeContainer"),
  btnNetejar: $("#btnNetejar"),
  btnDesar: $("#btnDesar"),
};

const canvasOrig = new Canvas(els.canvas);
const canvasFilt = new Canvas(els.canvas2);

let filtreActual = null;

const imagenes = [
  "imagen/steam.webp",
  "imagen/foto.jpg",
  "imagen/images.jpeg",
  "imagen/paisaje.jpg",
  "imagen/photo.jpeg",
  "imagen/a.jpeg",
];

imagenes.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Imagen ${i + 1}`;
  if (i === 0) img.classList.add("active");
  els.thumbs.appendChild(img);
});

const srcActiva = () => $("#thumbs img.active")?.src;

const configurarRange = (filtre) => {
  const necesita = filtre === "enfosquir" || filtre === "pixelat";
  els.rangeContainer.style.display = necesita ? "block" : "none";
  if (!necesita) return;
  if (filtre === "enfosquir") {
    els.range.min = -100;
    els.range.max = 100;
    els.range.value = 0;
  } else {
    els.range.min = 2;
    els.range.max = 30;
    els.range.value = 5;
  }
  els.rangeLabel.textContent = els.range.value;
};

const carregar = async (src) => {
  await Promise.all([canvasOrig.carregarImatge(src), canvasFilt.carregarImatge(src)]);
  if (filtreActual) await aplicar();
};

const aplicar = async () => {
  if (!filtreActual) return;
  const src = srcActiva();
  if (!src) return;
  await canvasFilt.carregarImatge(src);
  const valor = parseInt(els.range.value, 10);
  const dades = canvasFilt.aplicarFiltre(filtreActual, valor);
  if (dades) canvasFilt.dibuixarFiltre(dades);
};

els.thumbs.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  $$("#thumbs img").forEach((n) => n.classList.remove("active"));
  img.classList.add("active");
  carregar(img.src);
});

els.filtres.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-filtre");
  if (!btn) return;
  $$(".btn-filtre").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  filtreActual = btn.dataset.filtre;
  configurarRange(filtreActual);
  aplicar();
});

els.range.addEventListener("input", () => {
  els.rangeLabel.textContent = els.range.value;
  aplicar();
});

els.btnNetejar.addEventListener("click", async () => {
  filtreActual = null;
  $$(".btn-filtre").forEach((b) => b.classList.remove("active"));
  els.rangeContainer.style.display = "none";
  const src = srcActiva();
  if (src) await canvasFilt.carregarImatge(src);
});

els.btnDesar.addEventListener("click", () => canvasFilt.desarImatge("imatge_filtrada.png"));

carregar(imagenes[0]);
