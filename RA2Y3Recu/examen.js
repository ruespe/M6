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
  const nuevaImageList = imageList.map((linea) => {
    const [nom, codi] = linea.split("-");
    const numero = codi.split(".")[0];
    return { nom, codi: Number(numero) };
  });
  console.log(nuevaImageList);

  // Ordenar descendentemente
  nuevaImageList.sort((a, b) => b.codi - a.codi);

  const div = document.createElement("div");
  div.classList.add("lista");
  document.body.appendChild(div);

  // Usar el template strings para mostrar cada objeto
  nuevaImageList.forEach((item) => {
    div.insertAdjacentHTML("beforeend", `<p>${item.nom} - ${item.codi}</p>`);
  });

  const botonSaveData = document.createElement("button");
  document.body.appendChild(botonSaveData);
  botonSaveData.innerHTML = "Save";

  // Botón Save funcionamiento
  botonSaveData.addEventListener("click", () => {
    // 1.Productos escogidos random
    // 3.Evitar repetición productos
    let copiaNuevaImageList = [...nuevaImageList];
    let aleatorios = copiaNuevaImageList
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    console.log(aleatorios);

    // 2.Guardar fecha actual
    //5. La data ha d'incloure dia, mes, any i l'hora (hora,minuts,segons)
    let fechaActual = new Date().toLocaleString();
    console.log(fechaActual);

    // 4.Guardar en una sola clave y en JSON
    // Guardar en LocalStorage
    localStorage.setItem(
      "datos",
      JSON.stringify({
        productos: aleatorios,
        fecha: fechaActual,
      })
    );

    // Recuperar de LocalStorage
    let datosGuardados = JSON.parse(localStorage.getItem("datos"));
    console.log("Datos recuperados", datosGuardados);

    //6. Quan es prem el botó Save Data s'elimina la llista creada en el punt 1
    const lista = document.querySelector(".lista");
    if (lista) {
      lista.remove();
    }
  });

  let botonMostrar = document.createElement("button");
  document.body.appendChild(botonMostrar);
  botonMostrar.classList.add("mostrar");
  botonMostrar.innerHTML = "Mostrar";

  if (localStorage.length > 0) {
    botonMostrar.style.display = "block";
  }

  // 3. Mitjançant un altre botó Mostrar creat amb createElement() es recuperen les dades: (3 punts)
  //  1. Aquest botó només es mostra si hi han dades desades a localStorage
  // 2. El títol en un <h2> format pel nom de la imatge sense l'extensió i en majúscula.

  // 3. Les imatges:
  // 1. El títol i la imatge estan continguts en un <div>
  // 2. La mida de les imatges serà de 100px establert com a propietat de l'element <img>

  // 4. Data i hora que s’han desat a localStorage.

  botonMostrar.addEventListener("click", () => {});
});
