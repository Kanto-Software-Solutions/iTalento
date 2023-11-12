import axios from 'axios';
import router from "./router/Router.js";

const url = 'http://localhost:3000';

export default {
	notificacion,
	holaMundo,
	usertoDB,
	generica,
	getSesion,
	verificarTYC,
	getCategorias,
	getCategoria,
	getPublicaciones,
	getPublicacion,
	crearPublicacion,
	editarPublicacion,
	eliminarPublicacion,
	getOrdenes,
	getOrden,
	crearOrden,
	editarOrden,
	terminarOrden,
	getUsuario,
	crearUsuario,
	editarUsuario,
	eliminarUsuario,
	validarNickname,
}

//Test
function notificacion(msj) {
	const toastLiveExample = document.getElementById('notificacionToast')
	const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
	toastLiveExample.querySelector('.toast-body').innerText = msj
	toastBootstrap.show()
}
function usertoDB(user) {
	let ver = 1;
	let freelancer = 1;
	let tyc = 1;
	
	if (!user.verificado) ver = 0;
	if (!user.freelancer) freelancer = 0;
	if (!user.tyc) tyc = 0;

	let datos = {
		names:			user.nombres,
		lastNames:		user.apellidos,
		email:			user.correo,
		isVerified:		ver,
		nickname:		user.nickname,
		profileImage:	user.imagenPerfil,
		isFreelancer:	freelancer,
		birthDate:		user.fechaNacimiento,
		country:		user.lugar,
		acceptedTerms:	tyc,
		personalId:		JSON.parse(localStorage.getItem('sesion')).sub.split('|')[1],
		recLevel:		user.recLevel,
		location:		user.lugar,
		job:			user.profesion,
		description:	user.sobreMi,
	}
	return datos;
}

async function holaMundo() {
	console.log("Hola Mundo");
}
async function generica() {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/");
		arreglo = response.data.results;
		/*
		*	Codigo personalizado para cada request
		*	Cambiar el get según corresponda
		*
		*
		*/
		return arreglo;
	} catch (error) {
		//Pagina de error
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}
//Sesion
async function getSesion() {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/sesion");
		arreglo = response.data;
		return arreglo;
	} catch (error) {
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}
async function verificarTYC() {

}
//Categorias
async function getCategorias() {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/cat/all");
		arreglo = response.data.results;
		arreglo.forEach(element => {
			if (element.contenido == null) {
				element.contenido = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			}
			if (element.imgUrl == null) {
				element.imgUrl = "./assets/default.png";
			}
		});
		return arreglo;
	} catch (error) {
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}
async function getCategoria(nombre) {

}
//Publicaciones
async function getPublicaciones() {

}
async function getPublicacion(id) {

}
async function crearPublicacion(publicacion) {

}
async function editarPublicacion(publicacion) {

}
async function eliminarPublicacion(id) {

}
//Ordenes
async function getOrdenes(idUsuario) {

}
async function getOrden(id) {

}
async function crearOrden(orden) {

}
async function editarOrden(orden) {

}
async function terminarOrden(id) {

}

//Usuarios
async function getUsuario(id) {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/usr/" + id + "");
		arreglo = response.data.results;
		return arreglo;
	} catch (error) {
		//Pagina de error
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}
async function crearUsuario(usuario) {
	usuario.recLevel = 0;
	let datos = usertoDB(usuario)

	console.log('USUARIO');
	console.log(usuario);
	console.log('datos');
	console.log(datos);
	try {
		const response = await axios.post(url + "/usr/new", datos);
		console.log(response);
		return true;
	} catch (error) {
		//Pagina de error
		console.log("ERROR: " + error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
		return false;
	}
}
async function editarUsuario(usuario) {

}
async function eliminarUsuario(id) {

}
async function validarNickname(nick) {
	try {
		const response = await axios.get(url + "/val/" + nick);
		return response.data.disponible;
	} catch (error) {
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}