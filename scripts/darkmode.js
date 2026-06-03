let documento = document.querySelector("html");

let botoncito = document.querySelector("#btn-dark");

function cambiarModo() {
  documento.classList.toggle("dark");
}

botoncito.addEventListener("click", cambiarModo);

export { cambiarModo };
