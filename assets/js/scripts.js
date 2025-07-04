// Arreglos de datos
// Aquí definimos dos arreglos con objetos que representan:
// solicitantes: personas que quieren conectarse
// conectados: personas que ya estan conectados

const solicitantes = [
	{
		id: 1,
		imagen: "./assets/img/soli1.png",
		nombre: "Javier Méndez"
	},
	{
		id: 2,
		imagen: "./assets/img/soli2.png",
		nombre: "Valeria Montes"
	},
	{
		id: 3,
		imagen: "./assets/img/soli3.png",
		nombre: "Lucía Rojas"
	},
	{
		id: 4,
		imagen: "./assets/img/soli4.png",
		nombre: "Sofía Vega"
	}, {
		id: 5,
		imagen: "./assets/img/soli5.png",
		nombre: "Diego Campos"
	}
]

const conectados = [
	{
		id: 6,
		imagen: "./assets/img/conec1.png",
		nombre: "Adrien Desplatz"
	},
	{
		id: 7,
		imagen: "./assets/img/conec2.png",
		nombre: "Aarav Patel"
	},
	{
		id: 8,
		imagen: "./assets/img/conec3.png",
		nombre: "Lina Kovacevic"
	},
	{
		id: 9,
		imagen: "./assets/img/conec4.png",
		nombre: "Mateo Hernández"
	},
	{
		id: 10,
		imagen: "./assets/img/conec1.png",
		nombre: "Adrien Desplatz"
	}
]

// ELEMENTOS DEL DOM UTILIZADOS
// Son los elementos del HTML que vamos a utilizar
// para realizar las distintas funciones y acciones
// las solicitudes, los contactos y los contadores numericos

// elemento para las solicitudes
let conexion = document.querySelector("#solicitudConexion")
// elemento para los cusuarios coenctados
let listaContactos = document.querySelector("#usuariosConectados")
// elementos para la cantidad de solicitudes
let cantidadSolicitudes = document.querySelector("#cantidadSolicitudes");
// elemento para la cantidad de conectados
let cantidadContactos = document.querySelector("#cantidadContactos");

// Función para actualziar los contadores
// esta función cuenta la cantidad de solicitudes y contactos
// y los muestra en las secciones que corresponden
// cantidadSolicitudes y cantidadContactos

function actualizarContadores() {
  let solicitudesVisibles = document.querySelectorAll(".solicitud").length;
  let contactosVisibles = document.querySelectorAll(".contacto").length;

  cantidadSolicitudes.textContent = solicitudesVisibles;
  cantidadContactos.textContent = contactosVisibles;
}

// Ciclo para mostrar todos los contactos en el arreglo conectados

for (let i = 0; i < conectados.length; i++) {
	let contacto = conectados[i];

	// crea el div donde se mostrara el contacto
	let tarjeta = document.createElement("div");
	// agrega la clase al div creado para los estilos
	tarjeta.classList.add("contacto");

	// contenido que se mostrara en el div
	// imagen y nombre de contacto
	tarjeta.innerHTML = `
  <img src="${contacto.imagen}" alt="foto ${contacto.nombre}" />
  <p>${contacto.nombre}</p>
`;

// agrega el div con los datos del contacto
// en la sección que corresponde
	listaContactos.appendChild(tarjeta);
}

// Ciclo similar al anterior, este para mostrar las solicitudes
// funciona igual, crea un div, le agrega la clase para los estilos
// agrega el contenido del solicitante y lo muestra

for (let i = 0; i < solicitantes.length; i++) {
	let solicitante = solicitantes[i]
	let solicitud = document.createElement("div")
	solicitud.classList.add("solicitud");

	solicitud.innerHTML = `
	<div class="solicitante">
      <img src="${solicitante.imagen}" alt="foto ${solicitante.nombre}" />
      <p>${solicitante.nombre}</p>
    </div>

		<!-- en este caso ademas de mostrar la imagen y el nombre
		tambien muestra los botones para aceptar y rechazar la solicitud -->

    <div class="iconos">
			<button class="aceptar" title="Aceptar">
      <span class="material-symbols-rounded">check_circle</span>
    </button>
    <button class="rechazar" title="Rechazar">
      <span class="material-symbols-rounded">cancel</span>
    </button>
    </div>
`

	conexion.appendChild(solicitud);
}

// Eventos para los botones aceptar y rechazar

// selecciona los botones con la clase aceptar
// agrega evento click
// al hacer click en el botón se acepta la solicitud

let botonesAceptar = document.querySelectorAll(".aceptar");
botonesAceptar.forEach((boton) => {
  boton.addEventListener("click", function () {
    let solicitudDiv = this.closest(".solicitud");

// elimina la solicitud de la lista
    solicitudDiv.remove();

// obtiene los datos del solicitante aceptado
// para crearlo como contacto
    let nombre = solicitudDiv.querySelector("p").textContent;
    let imagen = solicitudDiv.querySelector("img").getAttribute("src");

// crea el div y agrega la clase para estilos
// muestra al usuario aceptado en la lista de conectados
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("contacto");
    tarjeta.innerHTML = `
      <img src="${imagen}" alt="imagen ${nombre}" />
      <p>${nombre}</p>
    `;

// muestra al usuario aceptado al comienzo de la lista (parte superior)
    listaContactos.prepend(tarjeta);

// llamado a la función para actualizar los contadores
		actualizarContadores();
  });
});

// para el boton rechazar es similar
// hasta la parte de eliminar la solicitud de la lista
// elimina la solicitud y actualiza los contadores

let botonesRechazar = document.querySelectorAll(".rechazar");
botonesRechazar.forEach((boton) => {
  boton.addEventListener("click", function () {
    let solicitudDiv = this.closest(".solicitud");
    solicitudDiv.remove();

actualizarContadores();


  });
});

// este llamadao a la función es para mostrar las cantidades iniciales
actualizarContadores();

// variable para controlar el perfil que se muestra
let perfil1 = true
// Función para modificar el contenido del perfil
// La función se llama cambioPerfil() y se activa al hacer clic en la etiqueta a id="edit"
function cambioPerfil() {

// elementos HTML que usaremos para modificar el perfil
	const imgPerfil = document.querySelector("#img-perfil");
	const nombre = document.querySelector("#nombre")
	const pais = document.querySelector("#pais")
	const profesion = document.querySelector("#profesion")
	const resumen = document.querySelector("#resumen")

// Condicional para alternar entre los 2 perfiles

// si se muestra el priemr perfil, cambia al segundo
	if (perfil1) {
		imgPerfil.src = "./assets/img/perfil2.jpg"
		nombre.textContent = "Jorge Rodriguez"
		pais.textContent = "Chillán, Chile"
		profesion.textContent = "Diseñador UX/UI | Desarrollador Full Stack JavaScript"
		resumen.textContent = "Combino diseño y desarrollo para crear interfaces funcionales, atractivas y pensadas en el usuario. Trabajo con Figma, HTML, CSS y JavaScript para llevar ideas a soluciones reales que se ven y funcionan bien."
	} else {
// se se muestra el segundo perfil, cambia al primero
		imgPerfil.src = "./assets/img/Perfil1.png"
		nombre.textContent = "Linn Olsen"
		pais.textContent = "Bergen, Noruega"
		profesion.textContent = "Diseñadora de UX/UI | Desarrolladora Frontend | Amante de la naturaleza"
		resumen.textContent = "Apasionada por crear experiencaias digitales hermosas y funcionales. Cuando no está codificando, disfruta explorando los fiordos noruegos y capturando la belleza de la naturaleza en fotografías"
	}

	perfil1 = !perfil1

}
