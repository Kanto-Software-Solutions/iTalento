import axios from 'axios';
import router from "./router/Router.js";

const url = 'http://localhost:3000';

export default {
	blobToBase64,
	notificacion,
	holaMundo,
	usertoDB,
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
	getUsuario,
	getUsuarioId,
	recuperarDatos,
	conversionGig,
	getImages,
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
		names: user.nombres,
		lastNames: user.apellidos,
		email: user.correo,
		isVerified: ver,
		nickname: user.nickname,
		profileImage: user.imagenPerfil,
		isFreelancer: freelancer,
		birthDate: user.fechaNacimiento,
		country: user.lugar,
		acceptedTerms: tyc,
		personalId: JSON.parse(localStorage.getItem('sesion')).sub.split('|')[1],
		recLevel: user.recLevel,
		location: user.lugar,
		job: user.profesion,
		description: user.sobreMi,
	}
	return datos;
}

async function holaMundo() {
	console.log("Hola Mundo");
}
async function generica() {
	try {
		const response = await axios.get(url + "/");
		if (response.data) {
			return true;
		} else {
			return false;
		}
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
//Categorias
async function getCategorias() {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/cat/all");
		arreglo = response.data.results;
		arreglo.forEach(element => {
			if (element.descripcion == null) {
				element.descripcion = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
function conversionGig(gig, user, images){

	let cover = "https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/default_dtguag.png";

	images.forEach(img => {
		if(img.portada == 1){
			cover = img.url;
		}
	});

	let state = 0;

	let datos = {
		idx: gig.idGig,
		ida: '#' + gig.idGig,
		titulo: gig.name,
		portada: cover,
		imagenes: images,
		fotoUsuario: user[0].profileImage,
		nombreUsuario: user[0].nickname,
		calificacion: "★★",
		costo: gig.price,
		accion: "Editar",
		estado: state,
	}
	return datos;
}

async function getPublicaciones() {
	let array = [];
	let nuevosgigs = [];

	var elemento;

	try {
		const response = await axios.get(url + "/gig/all");
		array = response.data.results;

		for(var i=0; i < array.length; i++){
			elemento = await recuperarDatos(array[i]);
			nuevosgigs.push(elemento);
		}
		return nuevosgigs;
	
	}catch (error) {
		console.log(error.status);
		let status = error.message;
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}
async function recuperarDatos(elemento){
	let user =  await getUsuarioId(elemento.idUser);
			
	let images =  await getImages(elemento.idGig);

	let element = conversionGig(elemento, user, images);

	return element
}

async function getPublicacion(id) {
	let array = [];
	let nuevosgigs = [];

	var elemento;
		const response = await axios.get(url + "/gig/usr/" + id + '');
		array = response.data.results;

		for(var i=0; i < array.length; i++){
			elemento = await recuperarDatos(array[i]);
			nuevosgigs.push(elemento);
		}
		return nuevosgigs;
}
async function crearPublicacion(publicacion) {
	try {
		const response = await axios.post(url + "/gig/new", publicacion);
		if (response.data) {
			return response.data;
		} else {
			return false;
		}
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
		let status = error.message;
		console.log(error.status);
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}

async function getUsuarioId(id) {
	let arreglo = [];
	try {
		const response = await axios.get(url + "/usr/id/" + id + "");
		arreglo = response.data.results;
		return arreglo;
	} catch (error) {
		//Pagina de error
		let status = error.message;
		console.log(error.status);
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}

async function crearUsuario(usuario) {
	usuario.recLevel = 0;
	let datos = usertoDB(usuario)
	try {
		const response = await axios.post(url + "/usr/new", datos);
		if (response.data) {
			return true;
		} else {
			return false;
		}
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
	usuario.isVerified = JSON.parse(localStorage.getItem('sesion')).email_verified;
	let datos = usertoDB(usuario)
	try {
		const response = await axios.put(url + "/usr/edit/" + JSON.parse(localStorage.getItem('sesion')).sub.split('|')[1], datos);
		if (response.data) {
			return true;
		} else {
			console.log("ERROR: ");
			return false;
		}
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
async function eliminarUsuario(id) {
	let arreglo = [];
	try {
		const response = await axios.delete(url + "/usr/delete/" + id);
		if (response.data) {
			return true;
		} else {
			console.log("ERROR: Eliminando usuario");
			return false;
		}
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

async function getImages(gigId){
	try {
		const response = await axios.get(url + "/imagen/" + gigId + "");
		return response.data.results;
	} catch (error) {
		//Pagina de error
		let status = error.message;
		console.log(error.status);
		if (error.response) {
			status = error.response.status + " " + error.response.statusText;
		}
		router.push('/error/' + status);
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}