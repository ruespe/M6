
const imageList = [
  "hp-105716.jpg",
  "lenovo-10.jpg",
  "macbook-1111.jpg",
  "msi-1290130.jpg",
  "asus-1319740.jpg",
  "msi-1343430.jpg",
  "asus-1348350.jpg",
  "asus-1348530.jpg",
  "msi-1369500.jpg",
  "hp-1373110.jpg",
  "hp-1373200.jpg",
  "acer-1378900.jpg",
  "acer-1381680.jpg",
  "lenovo-1387310.jpg",
  "msi-1393140.jpg",
  "toshiba-1417610.jpg",
  "msi-11.jpg",
  "lenovo-1.jpg",
  "hp-21.jpg",
  "lenovo-4.jpg",
  "lenovo-7.jpg",
  "msi-811.jpg",
  "msi-919.jpg",
  "msi-1011.jpg",
  "hp-911487.jpg",
];

document.addEventListener("DOMContentLoaded", () => {

    // Transformar array, a array de objetos
  const nuevaImageList = imageList.map(linea => {
    const [nom, codi] = linea.split("-");
    const numero = codi.split(".")[0];
    return {nom, codi: Number(numero)};

  });
    console.log(nuevaImageList)

    // Ordenar descendentemente
    nuevaImageList.sort((a, b) => b.codi - a.codi);

  const div = document.createElement("div");
  document.body.appendChild(div);

  // Usar el template strings para mostrar cada objeto
  nuevaImageList.forEach(item => {
    div.insertAdjacentHTML(
      "beforeend",
      `<p>${item.nom} - ${item.codi}</p>`
    );
  });



});
