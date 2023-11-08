import axios from 'axios';
import router from "./router/Router.js";

const url = 'http://localhost:3000';

export default {
	holaMundo,
	generica,
	getSesion,
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
	getUsuarios,
	getUsuario,
	crearUsuario,
	editarUsuario,
	eliminarUsuario
}

//Test
async function holaMundo() {
	console.log("Hola Mundo");
}
async function generica() {
	let arreglo = [];
	try {
		const response = await axios.get(url+"/categorias");
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
		const response = await axios.get(url+"/miinfo");
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
//Categorias
async function getCategorias() {
	let arreglo = [];
	try {
		const response = await axios.get(url+"/categorias");
		arreglo = response.data.results;
		arreglo.forEach(element => {
			element.contenido = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
function getUsuarios() {

}
function getUsuario(id) {

}
function crearUsuario(usuario) {

}
function editarUsuario(usuario) {

}
function eliminarUsuario(id) {

}
//