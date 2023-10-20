<template>
	<div class="tarjetaGigs card rounded-4 overflow-hidden">
		<div class="position-absolute z-1 w-100">
			<div class="d-flex card-header justify-content-between bg-black bg-opacity-50 text-light">
				<div>
					{{ titulo }}
				</div>
				<div>
					{{ calificacion }}
				</div>
			</div>
		</div>
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
					<button type="button" class="btn btn-secondary">
						{{ accion }}
					</button>
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
		<div :id=id class="carousel slide h-100 w-100 position-absolute z-0">
			<div class="carousel-inner h-100 w-100">
				<div class="carousel-item active h-100 w-100">
					<img :src=img1 class="w-100 h-100 object-fit-cover" alt="...">
				</div>
				<div class="carousel-item h-100 w-100">
					<img :src=img2 class="w-100 h-100 object-fit-cover" alt="...">
				</div>
				<div class="carousel-item h-100 w-100">
					<img :src=img3 class="w-100 h-100 object-fit-cover" alt="...">
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
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: String,
		ida: String,
		titulo: String,
		img1: String,
		img2: String,
		img3: String,
		fotoUsuario: String,
		nombreUsuario: String,
		calificacion: String,
		costo: Number,
		accion: String,
	},
}
</script>
<style>
.tarjetaGigs {
	max-width: 500px;
	min-width: 300px;
	height: 300px;
	margin: 2px;
}
</style>