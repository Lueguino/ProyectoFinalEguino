/*objetos*/
const productor1 = {
    codigo: 'M7001',
    huerto: 1,
    especie: 'arandano',
    variedad: 'biloxy',
}

const productor2 = {
    codigo: 'M7001',
    huerto: 2,
    especie: 'zarzamora',
    variedad: 'tupi',
}

const productor3 = {
    codigo: 'M7001',
    huerto: 3,
    especie: 'frambuesa',
    variedad: 'fenomenal',
}

console.log(productor1);

/*arrays*/
const infoProductor = ["codigo", "huerto", "especie", "variedad"]; 
console.log(infoProductor.join("/"));
console.log(infoProductor.reverse());

/*funciones*/ 
function bienvenida() {
    console.log("Bienvenido a la página");
}
bienvenida();

/*condicionales*/
let huerto1 = "M7001-1";
let huerto2 = "M7001-2";
let huerto3 = "M7001-3";

let codigoProductor = prompt ("Ingrese el codigo y huerto");
if (codigoProductor == "M7001-1" || codigoProductor == "M7001-2" || codigoProductor == "M7001-3") {
    alert("Huerto ingresado");
} else {
    alert("Codigo incorrecto");
}
/*generacion del DOM.*/ 
const contenido = document.querySelector("#dom");
const parrafos = document.querySelectorAll(".parrafo");
console.log(contenido);
parrafos.forEach(parrafo=> console.log(parrafo));

/*Eventos*/ 
const button3 = document.querySelector("#button3");

button3.addEventListener("click", mostrarButton3); 

function mostrarButton3() {
    alert("Este es el boton 3");
}

const button4 = document.querySelector("#button4");

button4.addEventListener("click", mostrarButton4); 

function mostrarButton4() {
    alert("Este es el boton 4");
}

/*sintaxis avanzada*/


/*librerias*/
const button1 = document.querySelector("#button1");

button1.addEventListener("click",() => {
    Swal.fire({
        title: 'Good job',
        text: 'You can continue',
        icon: 'success',
        confirmButtonText: 'Its ok',
        showCancelButton: true,
        iconHtml: '<i class="bi bi-boombox-fill"></i>', 
    }).then((result) => {
        if(result.isConfirmed) {
           alert("Felicidades!") 
        } else {
            alert("Gracias por participar")
        }
    })
})



const button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
    Toastify({
        text: "Gracias por pasar por acá",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} 
      }).showToast();
})

const DateTime = luxon.DateTime;

const now = DateTime.now();
console.log(now.toLocaleString(DateTime.DATETIME_HUGE));


/*API y fetch*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      



