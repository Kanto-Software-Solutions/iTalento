<template>
	<div id="perfilCrearGigs" class="modal fade modal-xl" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="justify-content-between d-flex mb-2">
						<h1 class="modal-title fs-5" id="staticBackdropLabel">{{ titulo }}</h1>
						<button type="button" class="btn-close my-1" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<form v-on:submit.prevent=crearGig() v-on:change=actualizargig()>
						<div class="border-bottom">
							<div class="input-group">
								<input id="fotosGigs" class="form-control w-75" type="file" placeholder="imagen"
									accept="image/png, image/jpeg" v-on:change=verImagenes() multiple required>
								<span class="btn btn-outline-info" v-on:click=inicializarVitrina()>
									<i class="bi bi-stars"></i>
								</span>
							</div>
							<div id="anuncioImagenes" class="alert alert-danger my-2" style="display: none;">
								Solo se aceptan 5 archivos de imagen
							</div>
							<div id="vitrina" class="row justify-content-center g-0">
								<div class="col m-1" style=" max-width: 500px; min-width: 200px; height: 150px;">
									<img :src=defaultImg
										class="w-100 h-100 object-fit-cover rounded-2 overflow-hidden justify-content-center"
										alt="imagen">
								</div>
								<div class="col m-1" style=" max-width: 500px; min-width: 200px; height: 150px;">
									<img :src=defaultImg
										class="w-100 h-100 object-fit-cover rounded-2 overflow-hidden justify-content-center"
										alt="imagen">
								</div>
								<div class="col m-1" style=" max-width: 500px; min-width: 200px; height: 150px;">
									<img :src=defaultImg
										class="w-100 h-100 object-fit-cover rounded-2 overflow-hidden justify-content-center"
										alt="imagen">
								</div>
								<div class="col m-1" style=" max-width: 500px; min-width: 200px; height: 150px;">
									<img :src=defaultImg
										class="w-100 h-100 object-fit-cover rounded-2 overflow-hidden justify-content-center"
										alt="imagen">
								</div>
								<div class="col m-1" style=" max-width: 500px; min-width: 200px; height: 150px;">
									<img :src=defaultImg
										class="w-100 h-100 object-fit-cover rounded-2 overflow-hidden justify-content-center"
										alt="imagen">
								</div>
							</div>
						</div>
						<div class="row justify-content-between my-2 border-bottom">
							<div class="col-lg text-center">
								<p class="">Preview de Gig</p>
								<fichaGig class="m-auto mb-2" id="gigprevia" v-bind="gigTest"
									:fotoUsuario=usuario.profileImage :nombreUsuario=usuario.nickname />
							</div>
							<div class="col-lg my-1">
								<label for="tituloGig" class="form-label">Titulo del Servicio</label>
								<input id="tituloGig" type="text" class="form-control form-control"
									placeholder="Titulo del gig" v-on:keyup=actualizargig() required>
								<div class="my-1">
									<label for="valorGig" class="form-label">Costo del servicio</label>
									<div class="input-group">
										<span class="input-group-text">$ USD</span>
										<input id="valorGig" type="number" class="form-control form-control"
											aria-label="Costo en dolares" step="0.1" min="1"
											placeholder="Valor del servicio" v-on:keyup=actualizargig() required>
									</div>
								</div>
								<label for="descripcionGig" class="form-label">Descripcion del servicio</label>
								<textarea class="form-control" id="descripcionGig" rows="5" required></textarea>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg m-auto">
								<div class="my-1">
									<label for="tentregaGigs" class="form-label">Tiempo de entrega</label>
									<select id="tentregaGigs" class="form-select text-center" required>
										<option selected disabled value="">-</option>
										<option value="1">1 Dia</option>
										<option value="3">3 Dias</option>
										<option value="7">1 Semana</option>
										<option value="21">3 Semanas</option>
										<option value="30">1 Mes</option>
									</select>
								</div>
								<div class="my-1">
									<label for="nRevisionesGigs" class="form-label">Numero de revisiones</label>
									<select id="nRevisionesGigs" class="form-select text-center" required>
										<option selected disabled value="">-</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
								<div class="my-1">
									<label for="tentregaGigs" class="form-label">Cantidad de ejemplares</label>
									<div class="input-group">
										<span class="input-group-text">
											<i class="bi bi-hash"></i>
										</span>
										<input id="nproductosGig" type="number" class="form-control form-control" step="1"
											min="0" placeholder="Cantidad" required>
									</div>
								</div>
							</div>
							<div class="col-lg">
								<selecCategorias catohab="categorias" :esmodal=false :selCantidad=3 idx="gigCategoria"
									idy="giglistacat" />
							</div>
						</div>
						<div class="d-flex">
							<div class="w-25 p-1">
								<button type="button" class="w-100 btn btn-outline-danger text-nowrap"
									data-bs-dismiss="modal">
									<i class="bi bi-x-circle"></i>
								</button>
							</div>
							<div class="w-75 p-1">
								<button type="submit" class="w-100 btn btn-outline-primary text-nowrap">Guardar<i
										class="bi bi-save"></i>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import fichaGig from '@/components/FichaGigs.vue';
import selecCategorias from '@/components/seleccionHabilidades.vue';

export default {
	name: 'formularioGigs',
	components: {
		fichaGig,
		selecCategorias,
	},
	methods: {
		actualizargig() {
			let titulo = document.getElementById("tituloGig").value
			let costo = parseFloat(document.getElementById("valorGig").value)
			let portada = this.portada
			let imagenes = this.imagennesPreview
			if (titulo == "") {
				titulo = "Gig de prueba"
			}
			if (portada == "") {
				portada = this.defaultImg
			}
			if (imagenes.length == 0) {
				imagenes = [this.defaultImg]
			}
			if (isNaN(costo)) {
				costo = 0
			}
			//volver a renderizar componente
			this.gigTest = {
				idx: "test",
				ida: "#test",
				titulo: titulo,
				portada: portada,
				imagenes: imagenes,
				fotoUsuario: this.usuario.profileImage,
				nombreUsuario: this.usuario.nickname,
				calificacion: "★★★★★",
				costo: costo,
				accion: "Previa",
				estado: true,
			}

		},
		verificarCantidadImagenes() {
			const imagenes = document.getElementById("fotosGigs").files
			if (imagenes.length > 5) {
				document.getElementById("fotosGigs").value = ""
				document.getElementById("anuncioImagenes").style.display = ""
				return true
			}
			return false
		},
		inicializarVitrina() {
			const vitrina = document.getElementById("vitrina").getElementsByTagName("img")
			for (let i = 0; i < vitrina.length; i++) {
				vitrina[i].src = this.defaultImg
			}
			document.getElementById("fotosGigs").value = ""
			this.preImagenes = []
			this.imagennesPreview = []
			this.portada = this.defaultImg
			this.actualizargig()
		},
		verImagenes() {
			if (this.verificarCantidadImagenes()) return
			const vitrina = document.getElementById("vitrina").getElementsByTagName("img")
			document.getElementById("anuncioImagenes").style.display = "none"
			this.preImagenes = []
			if (event.target.files.length > 0) {
				for (let i = 0; i < vitrina.length; i++) {
					vitrina[i].src = this.defaultImg
				}
				for (let i = 0; i < event.target.files.length; i++) {
					const urlImg = URL.createObjectURL(event.target.files[i])
					this.preImagenes.push(urlImg)
					vitrina[i].src = urlImg
				}
				this.portada = this.preImagenes[0]
				this.imagennesPreview = this.preImagenes.slice(1)
			} else {
				this.inicializarVitrina()
			}
		},
		crearGig() {
			//Falta validacion para categorias
			console.log("crear gig")
			this.datosGigs = {
				user:			JSON.parse(localStorage.getItem('sesion')).sub.split('|')[1],
				titulo: 		document.getElementById("tituloGig").value,
				descripcion:	document.getElementById("descripcionGig").value,
				costo:			parseFloat(document.getElementById("valorGig").value),
				tiempoEntrega:	parseInt(document.getElementById("tentregaGigs").value),
				revisiones:		parseInt(document.getElementById("nRevisionesGigs").value),
				cantidad:		parseInt(document.getElementById("nproductosGig").value),
				//categorias:		document.getElementById("giglistacat").value,
				imagenes:		this.imagennesPreview,
				portada:		this.portada,
			}
			console.log(this.datosGigs);
		}
	},
	props: {
		usuario: Object,
		titulo: String,
	},
	data: () => ({
		datosGigs:{},
		defaultImg: "https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/default_dtguag.png",
		gigTest: {
			idx: "test",
			ida: "#test",
			titulo: "Gig de prueba",
			portada: 'https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/default_dtguag.png',
			imagenes: ["https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/default_dtguag.png"],
			calificacion: "★★★★★",
			costo: 0,
			accion: "Previa",
			estado: true,
			fotoUsuario: "",
			nombreUsuario: "",
		},
		preImagenes: [],
		imagennesPreview: [],
		portada: "",
	}),
}
</script>
<style></style>