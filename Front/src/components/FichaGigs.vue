<template>
	<div class="tarjetaGigs card rounded-4 overflow-hidden">
		<div class="position-absolute z-1 w-100">
			<div class="d-flex card-header justify-content-between bg-black bg-opacity-50 text-light">
				<div id="gigTitulo">
					{{ titulo }}
				</div>
				<div>
					{{ calificacion }}
				</div>
			</div>
		</div>

		<div class="position-absolute z-1" style="top: 25%; right: 0%;">
			<div class="card-body bg-black bg-opacity-75 text-light rounded-start-5">
				<p class="card-text">
					$ {{ costo }}
				</p>
			</div>
		</div>
		<div :id=idx class="carousel slide h-100 w-100 position-absolute z-0 ">
			<div class="carousel-inner h-100 w-100">
				<div class="carousel-item h-100 w-100 active">
					<img :src=portada class="w-100 h-100 object-fit-cover" alt="Error Cargando Imagen">
				</div>
				<div v-for="(imagen, index) in imagenes" :key=index class="carousel-item h-100 w-100">
					<img :src=imagen.url class="w-100 h-100 object-fit-cover" alt="Error Cargando Imagen">
				</div>
			</div>
		</div>
		<button class="carousel-control-prev" type="button" :data-bs-target=ida data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Anterior</span>
		</button>
		<button class="carousel-control-next" type="button" :data-bs-target=ida data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Siguiente</span>
		</button>
		<div class="position-absolute z-1 w-100 bottom-0">
			<div class="d-flex card-footer justify-content-between bg-black bg-opacity-50 text-light">
				<div class="text-center">
					<img :src=fotoUsuario class="object-fit-cover rounded-circle d-inline" :alt=nombreUsuario
						style="width: 45px; height: 45px;">
					<div class=" text-nowrap d-inline m-1">
						{{ nombreUsuario }}
					</div>
				</div>
				<div class="row align-content-center">
					<button id="fgigAccion" type="button" class="btn btn-secondary" :disabled=estado v-on:click=test
						data-bs-toggle="modal" data-bs-target="#vistagig">
						{{ accion }}
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" tabindex="-1" id="vistagig">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ titulo }}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-5">
							<div id="vistagigCarousel" class="carousel slide overflow-hidden" data-bs-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img :src=portada class="d-block w-100  h-100 object-fit-cover"
											alt="Error Cargando Imagen">
									</div>
									<div v-for="(imagen, index) in imagenes" :key=index class="carousel-item">
										<img :src=imagen.url class="d-block w-100 h-100 object-fit-cover"
											alt="Error Cargando Imagen">
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#vistagigCarousel"
									data-bs-slide="prev">
									<span class="carousel-control-prev-icon"></span>
									<span class="visually-hidden">Anterior</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#vistagigCarousel"
									data-bs-slide="next">
									<span class="carousel-control-next-icon"></span>
									<span class="visually-hidden">Siguiente</span>
								</button>
							</div>
						</div>
						<div class="col-md">
							<router-link class="card text-decoration-none" :to="'/perfil/'+nombreUsuario" v-on:click=hidetog >
								<div class="card-header">
									<div class="text-center">
										<img :src=fotoUsuario class="object-fit-cover rounded-circle d-inline"
											:alt=nombreUsuario style="width: 45px; height: 45px;">
										<div class=" text-nowrap d-inline m-1">
											{{ nombreUsuario }}
										</div>
									</div>
								</div>
							</router-link>
							<h4>Descripcion:</h4>
							<p>{{ descripcion }}</p>
							<h4>Tiempo de entrega:</h4>
							<p>{{ delivery }}</p>
							<h4>Revisiones:</h4>
							<p>{{ revisiones }}</p>
							<h4>Cantidad:</h4>
							<p>{{ cantidad }}</p>
							<h4>Categoria:</h4>
							<p>{{ categoria }}</p>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary h-50">
						<i class="bi bi-floppy"></i>
						Guardar</button>
					<button type="button" class="btn btn-primary h-50">
						<i class="bi bi-bag-fill"></i>
						Comprar</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		idx: String,
		ida: String,
		titulo: String,
		portada: String,
		imagenes: Array,
		fotoUsuario: String,
		nombreUsuario: String,
		calificacion: String,
		costo: Number,
		accion: String,
		estado: Boolean,
		descripcion: String,
		delivery: String,
		revisiones: String,
		cantidad: String,
		categoria: String,
		class: String,
	},
	methods: {
		hidetog() {
			var myModalEl = document.getElementById('vistagig');
			var modal = bootstrap.Modal.getInstance(myModalEl)
			modal.hide();
		},
		test() {
			console.log(this.idx);
		},
		actualizarValoresGig(titulo, imagenes, costo, accion, estado) {
			this.titulo = titulo;
			this.imagenes = imagenes;
			this.costo = costo;
			this.accion = accion;
			this.estado = estado;
		},
		convertToMD5(costo) {
			var strHash = md5('4Vj8eK4rloUd272L48hsrarnUA' + '~' + '508029' + '~' + 'TestPayU' + '~' + this.costo + '~' + 'COP');
		}
	},
}
</script>
<style>
.tarjetaGigs {
	max-width: 400px;
	min-width: 290px;
	height: 250px;
	margin: 2px;
}
</style>