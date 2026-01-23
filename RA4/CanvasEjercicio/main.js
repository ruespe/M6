// 1. Crear un canvas HTML5.
// 2. Crear un thumb d'imatges.
// 3. Quan es fa click en una imatge, aquesta es carrega en el canvas. Utilitza la delegació d'events.
// 4. La mida del canvas s'ajusta a la mida de la imatge més 10px per cada costat.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const thumbsContainer = document.getElementById("thumbs");

const imagenes = [
  "imagen/steam.webp",
  "imagen/foto.jpg",
  "imagen/images.jpeg",
  "imagen/paisaje.jpg",
  "imagen/photo.jpeg",
  "imagen/a.jpeg",
];

imagenes.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Imagen ${index + 1}`;
  if (index === 0) img.classList.add("active");
  thumbsContainer.appendChild(img);
});

function cargarImagenEnCanvas(src) {
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width + 20;
    canvas.height = img.height + 20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 10, 10);
  };
  img.src = src;
}

thumbsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    document.querySelectorAll("#thumbs img").forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
    cargarImagenEnCanvas(e.target.src);
  }
});

cargarImagenEnCanvas(imagenes[0]);
