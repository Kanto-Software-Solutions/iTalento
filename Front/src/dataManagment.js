import axios from 'axios';
import router from "./router/Router.js";

const url = 'http://localhost:3000';

export default {
	holaMundo,
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
function holaMundo() {
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
//Categorias
async function getCategorias() {
	let arreglo = [];
	try {
		const response = await axios.get(url+"/categorias");
		arreglo = response.data.results;
		arreglo.forEach(element => {
			//element.contenido = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
function getCategoria(nombre) {
	
}
//Publicaciones
function getPublicaciones() {

}
function getPublicacion(id) {

}
function crearPublicacion(publicacion) {

}
function editarPublicacion(publicacion) {

}
function eliminarPublicacion(id) {

}
//Ordenes
function getOrdenes(idUsuario) {

}
function getOrden(id) {

}
function crearOrden(orden) {

}
function editarOrden(orden) {

}
function terminarOrden(id) {

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