
//1. A partir del següent Array
// Creación del thead
const headItem = ['Codi', 'Imatge', 'Descripció', 'Quantitat', 'Preu',
   'Import'];

let table = document.createElement("table")
let thead = document.createElement("thead")
let tr = document.createElement("tr")

headItem.forEach(item => {
   tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`)
});

thead.appendChild(tr)
table.appendChild(thead)
document.querySelector("main").appendChild(table)

// 2. A partir del següent Array
//Mitjancant Template string i algun métode per afegir HTML al document, per exemple insertAdjacentHTML()
//Utilitza una llibreria con DOMPurify per netejar el codi HTML. Instal·la'l mitjançant npm.
//Crea un <tr> pera a cada producte i els <td> - corresponents per a cada camp.
//El contingut de la cel·la preu és un <input type="number"> que accepta valors enters entre 0 i 10i té com a valor per defecte 1.
//La cel·la import inicialment té el mateix valor que la cel·la preu. Posteriorment serà el valor calculat.
// Creación del resto de la table
// 3. Crea una columna més per a les icones d'eliminar

tbody = document.createElement("tbody")

const products = [
   [101, 'steelseires-arctis-5-rgb-negros.webp', "Steelseires Arctis 5 Auriculars Gaming RGB Negres", 108.59],
   [102, '1202-agfa-photo-ac7000-camara-deportiva-16mp.webp', "Agfa Photo AC7000 Càmera Esportiva 16MP", 119.50],
   [103, '1920-xiaomi-poco-m3-pro-5g-4-64gb-amarillo-libre.webp', "Xiaomi POCO M3 Pro 5G 4/64GB Groc LLiure", 315.99],
   [104, 'logitech.webp', "Logitech G Saitek X52 Flight Control System Sistema de Control de Vol", 158.60],
   [105, '115-msi-raider.webp', "MSI Raider GE77HX 12UGS-020ES Intel Core i9 - 12900HX / 64GB / 2TB SSD / RTX 3070Ti / 17.3", 3599.00]];


products.forEach(([codi, imatge, descripcio, precio,]) => {
   const fila = `
         <tr>
         <td>${codi}</td>
         <td><img src="/images/${imatge}" alt="${descripcio}"></td>
         <td>${descripcio}</td>
         <td class="quantitat"><input type="number" value="1"></td>
         <td>${precio}</td>
         <td>${precio}</td>
         <td>❌</td>
         </tr>
      `
   tbody.insertAdjacentHTML("beforeend", fila)
   // tbody.insertAdjacentHTML("beforeend", DOMPurify.sanitize(fila))
   // Sin sentido ya que no puden estar infectadas y borra los elementos PREGUNTAR
})

//4. Crea una fila més per a l'import total

const filaImportTotal = `
   <tr>
   <td>Import total:</td>
   <td>4301.68</td>
   </tr>
`
tbody.insertAdjacentHTML("beforeend", filaImportTotal)

// 5. Afegeix un botó per buidar el carretó
// crear nueva fila ??? PREGUNTAR
const crearBoton = `
   <tr>   
   <td><button id="vaciar">Buidar Carretó</button></td>
   </tr>
`
tbody.insertAdjacentHTML("beforeend", crearBoton)

table.appendChild(tbody)

// 6. Quan es clica la icona eliminar l'element <tr> pare se suprimeix del DOM


// 7. Quan es clica el botó Buidar carretó tota la taula desapareix i es mostra:

const boton = document.querySelector("#vaciar")

boton.addEventListener("click", () => {
   table.remove();
   const parrafo = `
      <h1>No hi ha productes al carretó</h1>
   `
   document.body.insertAdjacentHTML("beforeend", parrafo)
})
