//La funcion principal de este programa es crear una lista de invitados, por medio de validaciones
// se revisa si la informacion es correta para posteriormente agregarla informacion a una lista

//Se corrigió el Query a .formulario
var formulario = document.querySelector(".formulario");
//Se manda a llamar el btnEnviar
let BtnEnviar = document.getElementById("BtnEnviar");
var lista = document.getElementById("lista");


//Se cambia la funcion anterior onSubmit por el addEvent, para llamamos 
//la variable que creamos BtnEnviar
BtnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}); //BtnEnviar


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }


  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elementos"); //Se corrige la funcion added a add, ya que no pemitía agregar
  lista.appendChild(elementoLista);

  //Se deshabilita funciones repetidas que obstruyen el proceso
 /*  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio) */

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


/*   var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar); */

  botonBorrar.onclick = function() {
    if(lista.parentNode) { //Added if
      lista.removeChild(lista.lastChild);
    }
    } // botonBorrar
  } // agregarInvitado