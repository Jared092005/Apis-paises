import { cambiarModo } from "./darkmode.js";

async function capturarDatos() {
  try {
    let respuesta = await fetch("./data.json");
    let data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

let paises = await capturarDatos();

console.log(paises);

let contenedorPaises = document.querySelector("#contenedor-paises");

for (const pais of paises) {
  let cardGenerado = "";
  cardGenerado += ` <article
        class="rounded-lg max-w-80 flex flex-col items-center justify-center bg-white dark:bg-[#2c3743] dark:text-white shadow-md active:scale-90 transition duration-150 ease-out md:hover:scale-110 md:transition md:duration-200 md:max-w-65"
      ><div class="w-full h-[60%]">
       <img
          src="${pais.flags.svg}"
          alt="${pais.name}"
          class="rounded-t-md object-cover md:w-full md:h-35 xl:h-40 cursor-pointer"
        />
        </div>
        <div class="flex flex-col mt-4 gap-2 mb-10 w-full pl-6 font-semibold">
          <h2 ><span class="font-bold text-2xl cursor-pointer active:text-blue-400">${pais.name}</span></h2>
          <p>Population: <span class="font-normal">${Number(pais.population).toLocaleString("en-US")}</span></p>
          <p>Region: <span class="font-normal">${pais.region}</span></p>
          <p>Capital: <span class="font-normal">${pais.capital}</span></p>
        </div>
      </article>`;
  contenedorPaises.innerHTML += cardGenerado;
}

let parteDetallada = document.querySelector("#detailed-mode");

/* function abrirParteDetallada() {
    for (const pais of paises) {
    let cardGenerado = "";
    cardGenerado = ``
}
} */
