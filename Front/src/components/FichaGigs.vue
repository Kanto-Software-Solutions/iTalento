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
					<img :src=imagen class="w-100 h-100 object-fit-cover" alt="Error Cargando Imagen">
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
					<button id="fgigAccion" type="button" class="btn btn-secondary" :disabled=estado v-on:click=test>
						{{ accion }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import vista from '@/components/VistaGigis.vue'
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
	},
	methods: {
		components: {
			vista
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