// 1. Crear un canvas HTML5.
// 2. Crear un thumb d'imatges.
// 3. Quan es fa click en una imatge, aquesta es carrega en el canvas. Utilitza la delegació d'events.
// 4. La mida del canvas s'ajusta a la mida de la imatge més 10px per cada costat.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const thumbsContainer = document.getElementById("thumbs");

<<<<<<< HEAD
=======
// Array con las rutas de las imágenes
>>>>>>> 1d6fa85 (a)
const imagenes = [
  "imagen/steam.webp",
  "imagen/foto.jpg",
  "imagen/images.jpeg",
  "imagen/paisaje.jpg",
  "imagen/photo.jpeg",
  "imagen/a.jpeg",
];

<<<<<<< HEAD
=======
// Crear las miniaturas
>>>>>>> 1d6fa85 (a)
imagenes.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Imagen ${index + 1}`;
<<<<<<< HEAD
=======
  img.dataset.index = index;
>>>>>>> 1d6fa85 (a)
  if (index === 0) img.classList.add("active");
  thumbsContainer.appendChild(img);
});

<<<<<<< HEAD
function cargarImagenEnCanvas(src) {
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width + 20;
    canvas.height = img.height + 20;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
=======
// Función para cargar imagen en el canvas
function cargarImagenEnCanvas(src) {
  const img = new Image();
  img.onload = function () {
    // Ajustar el tamaño del canvas a la imagen + 10px por cada lado
    canvas.width = img.width + 20;
    canvas.height = img.height + 20;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la imagen centrada (con 10px de margen)
>>>>>>> 1d6fa85 (a)
    ctx.drawImage(img, 10, 10);
  };
  img.src = src;
}

<<<<<<< HEAD
thumbsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    document.querySelectorAll("#thumbs img").forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
=======
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
>>>>>>> 1d6fa85 (a)
    cargarImagenEnCanvas(e.target.src);
  }
});

<<<<<<< HEAD
=======
// Cargar la primera imagen al iniciar
>>>>>>> 1d6fa85 (a)
cargarImagenEnCanvas(imagenes[0]);
