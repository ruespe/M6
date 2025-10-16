//14. Mitjançant JavaScript crea un element HTML amb les mateixes característiques que el què es mostra. Al final elimina l'atribut id
let input = document.createElement("input");

input.type = "email";
input.name = "email";
input.id = "email";
input.className = "form-element";
input.required = true;
input.placeholder = "Please enter a valid email account";

document.body.appendChild(input);

input.removeAttribute("id");

//15. Crea un element <form> i afegeix l'<input> del punt anterior i un <button>
let form = document.createElement("form");
form.action = "#";
form.method = "post";
form.id = "user-data";
form.className = "form-element";
form.required = "required";
form.noValidate = true;


let input2 = document.createElement("input");
input2.type = "email";
input2.name = "email";
input2.id = "email";
input2.required = true;
input2.placeholder = "Please enter a valid email account";

let button = document.createElement("button");
button.type = "submit";
button.id = "send";
button.textContent = "Enviar";

form.appendChild(input)
form.appendChild(button);

document.body.appendChild(form);

//16. Crea un menú a partir dels valors d'un array
//usar template string
let menu = document.createElement("nav");
menu.className = "menu";

let menuItems = ['home', 'about', 'products', 'contact'];

let ul = document.createElement("ul");

menuItems.forEach(item => {
    ul.insertAdjacentHTML("beforeend", `<li><a href="#${item}">${item}</a></li>`);
});

menu.appendChild(ul);
document.body.appendChild(menu);
