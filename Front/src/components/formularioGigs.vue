<template>
	<div id="perfilCrearGigs" class="modal fade modal-xl" data-bs-backdrop="static"
		data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div class="justify-content-between d-flex mb-2">
						<h1 class="modal-title fs-5" id="staticBackdropLabel">Crear Gigs</h1>
						<button type="button" class="btn-close my-1" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<form action="" v-on:change=actualizargig()>
						<div class="border-bottom">
							<div class="input-group">
								<input id="fotosGigs" class="form-control w-75" type="file" placeholder="imagen"
									accept="image/png, image/jpeg" v-on:change=verImagenes() multiple size="3">
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
								<fichaGig class="m-auto mb-2" id="gigprevia" v-bind="gigTest" />
							</div>
							<div class="col-lg my-1">
								<label for="tituloGig" class="form-label">Titulo del Servicio</label>
								<input id="tituloGig" type="text" class="form-control" placeholder="Titulo del gig"
									v-on:keyup=actualizargig()>
								<div class="my-1">
									<label for="valorGig" class="form-label">Costo del servicio</label>
									<div class="input-group">
										<span class="input-group-text">$ USD</span>
										<input id="valorGig" type="number" class="form-control"
											aria-label="Costo en dolares" step="0.1" min="1"
											placeholder="Valor del servicio" v-on:keyup=actualizargig()>
									</div>
								</div>
								<label for="descripcionGig" class="form-label">Descripcion del servicio</label>
								<textarea class="form-control" id="descripcionGig" rows="5"></textarea>
							</div>
						</div>
						<div class="row g-1 my-2 justify-content-center">
							<div class="col-sm">
								<label for="tentregaGigs" class="form-label">Tiempo de entrega</label>
								<select id="tentregaGigs" class="form-select text-center"
									aria-label="Default select example">
									<option selected value="1">1 Dia</option>
									<option value="3">3 Dias</option>
									<option value="7">1 Semana</option>
									<option value="21">3 Semanas</option>
									<option value="30">1 Mes</option>
								</select>
								<label for="tentregaGigs" class="form-label">Numero de revisiones</label>
								<select id="tentregaGigs" class="form-select text-center"
									aria-label="Default select example">
									<option value="1" selected>1 [Obligatorio]</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<label for="tentregaGigs" class="form-label">Cantidad de ejemplares</label>
								<div class="input-group">
									<span class="input-group-text">
										<i class="bi bi-hash"></i>
									</span>
									<input id="valorGig" type="number" class="form-control" step="1" min="0"
										placeholder="Cantidad">
								</div>
							</div>
							<div class="col-sm">
								<selecCategorias catohab="categorias" :esmodal=false :selCantidad=3 idx="gigCategoria" idy="giglistacat"/>
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
			console.log("actualizar gig");
			let titulo = document.getElementById("tituloGig").value
			let costo = parseFloat(document.getElementById("valorGig").value)
			let portada = this.portada
			let imagenes = this.imagennesPreview
			if (titulo == "") {
				titulo = "Gig de prueba"
			}
			if (portada == "") {
				portada = "./assets/default.png"
			}
			if (imagenes.length == 0) {
				imagenes = ["./assets/default.png"]
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
				fotoUsuario: "./assets/bullbasur.jpg",
				nombreUsuario: "leoleguizamon",
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
		}
	},
	data: () => ({
		gigTest: {
			idx: "test",
			ida: "#test",
			titulo: "Gig de prueba",
			portada: "./assets/default.png",
			imagenes: ["./assets/default.png"],
			fotoUsuario: "./assets/bullbasur.jpg",
			nombreUsuario: "leoleguizamon",
			calificacion: "★★★★★",
			costo: 0,
			accion: "Previa",
			estado: true,
		},
		defaultImg: "./assets/default.png",
		preImagenes: [],
		imagennesPreview: [],
		portada: "",
		usuario: {
			id: 1,
			nombre: "Andres",
			apellido: "Leguizamon",
			nickname: "leoleguizamon",
			correo: "anlleguizamongu@unal.edu.co",
			imagenPerfil: "./assets/default.png",
		},
	}),
}
</script>
<style></style>