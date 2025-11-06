let containerBingo = document.body.querySelector("#bingo");

let table = document.createElement("table");

containerBingo.append(table);

let tbody = document.createElement("tbody");
table.append(tbody);

for (let i = 0; i < 3; i++) {
  let tr = document.createElement("tr");
  tbody.append(tr);

  for (let j = 0; j < 9; j++) {
    let min = j * 10 + 1;
    let max = j * 10 + 9;
    let numRand = Math.floor(Math.random() * (max - min + 1)) + min;
    tr.insertAdjacentHTML("beforeend", `<td>${numRand}</td>`);
    console.log(numRand);
  }
}

//console.log(numRand)
