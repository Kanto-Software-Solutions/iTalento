<template>
	<div id="busquedaPrincipales" class="container-xl d-none d-md-block">
		<div class="row">
			<div class="col d-flex jus" v-for="item in categorias">
				<botonBusqueda class="h-100" :nombre=item.name />
			</div>
		</div>
	</div>
	<div v-if="false" id="busquedaTitulo" class="container-xl">
		<div class="text-center m-5">
			<h1>«/»</h1>
		</div>
	</div>
	<div id="busquedaFiltro" class="container-fluid bg-body-secondary p-1">
		<form>
			<div class="row g-1 m-1">
				<div class="col-md">
					<div class="row g-1">
						<div class="col-sm">
							<select id="oCategory" class="form-select" aria-label="Categoria">
								<option selected class="text-center" value="-1">Categoria</option>
								<option v-for="(item, i) in categorias" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select id="oRating" class="form-select" aria-label="Calificacion">
								<option selected class="text-center" value="-1">Calificacion</option>
								<option v-for="(item, i) in calificacion" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select id="oPrice" class="form-select" aria-label="Precio">
								<option selected class="text-center" value="-1">Precio</option>
								<option v-for="(item, i) in precios" class="text-center" :value=item.id>
									$ {{ item.name }}
								</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md d-flex">
					<input id="criterio" class="form-control me-1" type="search" placeholder="¿Que trabajo necesitas hoy?">
					<button v-on:click.prevent="buscarGigs()" class="btn btn-outline-secondary">
						<i class="bi bi-search"></i>
					</button>
				</div>
			</div>
		</form>
	</div>
	<div id="busquedaResultado" class="">
		<cargando v-if=esCargando></cargando>
		<div v-else>
			<div v-if="esVacio" id="busquedaNoresultados" class="text-center m-5 text-body-tertiary fw-light">
				<h2>
					No se encontraron resultados
				</h2>
			</div>
			<div v-else-if="gigs.length" id="busquedaResultados"
				class="row row-cols-lg-5 g-0 overflow-hidden justify-content-center w-100">
				<fichaGig class="col" v-for="g in gigs" v-bind="g" accion="Mirar" />
			</div>
			<div v-else id="busquedaBuscar" class="text-center m-5 text-body-tertiary fw-light">
				<h2>
					Ingresa un criterio de búsqueda
				</h2>
				<div class="spinner-grow m-2" style="width: 100px; height: 100px; animation-duration: 3s ;" role="status">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import botonBusqueda from '@/components/BotonBusqueda.vue';
import fichaGig from '@/components/FichaGigs.vue'
import cargando from '@/components/Cargando.vue'

import datos from '@/dataManagment.js';
import router from '@/router/Router';
export default {
	name: 'BusquedaServicios',
	components: {
		botonBusqueda,
		fichaGig,
		cargando,
	},
	async created() {
		let cat5 = await datos.getCategorias()
		if (cat5) {
			this.categorias = cat5.slice(0, 5)
		}
	},
	methods: {
		test() {
			console.log("asdf");
		},
		async buscarGigs() {
			this.esCargando = true;
			this.gigs = []
			var busqueda = document.getElementById("criterio").value;
			var rating = document.getElementById("oRating").value;
			var categoria = document.getElementById("oCategory").value;
			var precio = document.getElementById("oPrice").value;
			await datos.getPublicaciones().then((nuevosgigs) => {
				if (nuevosgigs == undefined) {
					router.push('/error/Gig no Encontrado');
				}else{
					if(busqueda.length == 0 && rating < 0 && categoria < 0 && precio < 0){
							nuevosgigs.forEach(gig => {
								this.gigs.push(gig);
							});
						}else if(precio < 0 && rating < 0){
							nuevosgigs.forEach(gig => {
								if(categoria = "Diseño de Logos" && gig.categoria == 1){
									this.gigs.push(gig);
								}else if (categoria = "Escritura y Traducción" && gig.categoria == 2){
									this.gigs.push(gig);
								}else if (categoria = "Ilustraciones" && gig.categoria == 3){
									this.gigs.push(gig);
								}else if (categoria = "Aplicaciones Web" && gig.categoria == 4){
									this.gigs.push(gig);
								}else if (categoria = "E-Commerce" && gig.categoria == 5){
									this.gigs.push(gig);
								}
							});
						}
						else if(categoria < 0 && rating < 0){
							nuevosgigs.forEach(gig => {
								if(gig.costo >= (precio / 1000)){
									this.gigs.push(gig);
								}
							});
						}
						else if(categoria < 0 && precio < 0){
							nuevosgigs.forEach(gig => {
								if(gig.calificacion.length == rating){
									this.gigs.push(gig);
								}
							});
						}
						else if(busqueda.length == 0){
							nuevosgigs.forEach(gig => {
								if(categoria = "Diseño de Logos" && gig.categoria == 1 && gig.calificacion.length == rating && categoria < 0 && precio < 0){
									this.gigs.push(gig);
								}else if (categoria = "Escritura y Traducción" && gig.categoria == 2 && gig.calificacion.length == rating && categoria < 0 && precio < 0){
									this.gigs.push(gig);
								}else if (categoria = "Ilustraciones" && gig.categoria == 3 && gig.calificacion.length == rating && categoria < 0 && precio < 0){
									this.gigs.push(gig);
								}else if (categoria = "Aplicaciones Web" && gig.categoria == 4 && gig.calificacion.length == rating && categoria < 0 && precio < 0){
									this.gigs.push(gig);
								}else if (categoria = "E-Commerce" && gig.categoria == 5 && gig.calificacion.length == rating && categoria < 0 && precio < 0){
									this.gigs.push(gig);
								}
							});
						}
						else {
							nuevosgigs.forEach(gig => {
								if(gig.titulo.match(busqueda).length != 0){
									this.gigs.push(gig);
								}
							});
						}
					}
				});
			this.esCargando = false;
			console.log(this.gigs);
		},
	},
	data: () => ({
		esCargando: false,
		esVacio: false,
		categorias: [],
		gigs: [],
		precios: [
			{ name: "Sin costo", id: 0 },
			{ name: "100.000", id: 100 },
			{ name: "200.000", id: 200 },
			{ name: "300.000", id: 300 },
			{ name: "400.000", id: 400 },
			{ name: "500.000", id: 500 },
			{ name: "600.000", id: 600 },
			{ name: "700.000", id: 700 },
			{ name: "800.000", id: 800 },
			{ name: "900.000 o mas", id: 900 },
		],
		calificacion: [
			{ name: "★", id: 1 },
			{ name: "★★", id: 2 },
			{ name: "★★★", id: 3 },
			{ name: "★★★★", id: 4 },
			{ name: "★★★★★", id: 5 },
		],
	}),
}
</script>
<style></style>