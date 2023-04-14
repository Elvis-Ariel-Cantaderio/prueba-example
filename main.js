//Esto sería como sacar alertas
alert("Estas entrando al mejor programa de tu vida");

//Variables
const nombre = "Jonathan Oswaldo";
const apellidos = "Castaneda Fabián";

//Constantes
let altura = 187;

//concatenación
let concatenación = nombre + " " + apellidos;

//Mostrar por consola
console.log(nombre);
console.log(altura);
console.log(concatenación);

//Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h1>Soy a caja de datos</h1>
    <h2>Mi nombre es: ${nombre} ${apellidos}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

//Condiciones
altura = 200;
if (altura >= 185) {
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
    alert("Wooooooow!!! Eres una persona verdaderamente alta")

}


//bucles
for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

//array
const nombres = ["Victor", "Francisco", "Chepe"];

let divNombres = document.querySelector("#divNombres");

divNombres.innerHTML = `<hr/><h1>Este es el listado de nombres</h1><ul>`;

nombres.forEach(nombre => {
    divNombres.innerHTML += `<h3>El nombre es: ${nombre}</h3>`;
});
divNombres.innerHTML += `</ul>`;

//Funciones
const miInformacion = (nombre, altura) => {
    let misdatos = `
    <hr/>
    <h1>Soy a caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misdatos;
}

const imprimir = () =>{
    let datos = document.querySelector("#datos");
    datos.innerHTML += miInformacion("pepe",190);
}

imprimir ();
imprimir ();