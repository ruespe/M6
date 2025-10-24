// 28. Realitza un script amb funcionalitat de calculadora. Utilitza un formulari com es mostra en la següent
// imatge. Operacions: suma, resta, multiplicació, divisió i potència

// El resultat s’ha de mostrar amb dos decimals.
// El separador decimal és el punt (.), si s’introdueix una coma (,) s’ha de substituir.
// Si en el càlcul es produeix un error NaN o Infinity s’ha de mostrar de color vermell

// op1Valor = operador1.value
// op2Valor = operador2.value

botonCalcular = document.querySelector("button.calcula");

botonCalcular.addEventListener("click", (e) => {
  let operador1 = document.querySelector("input#num1").value;
  let operador2 = document.querySelector("input#num2").value;
  let operacion = document.querySelector("select#operaciones").value;
  let result = 0;
  if (operacion === "suma") {
    result = Number(operador1) + Number(operador2);
  }
  if (operacion === "resta") {
    result = Number(operador1) - Number(operador2);
  }
  if (operacion === "multiplicacion") {
    result = Number(operador1) * Number(operador2);
  }
  if (operacion === "division") {
    result = Number(operador1) / Number(operador2);
  }
  if (operacion === "potencia") {
    result = Number(operador1) ** Number(operador2);
  }
  console.log(result);

  inputResultado = document.querySelector("input#result");
  inputResultado.innerHTML(result).value;
});
