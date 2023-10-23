<template>
	<div id="busquedaPrincipales" class="container-xl d-none d-md-block">
		<div class="row justify-content-center">
			<div class="row" style="width: max-content;">
				<div class="col" v-for="(item, i) in categorias">
					<botonBusqueda :nombre=item.name />
				</div>
			</div>
		</div>
	</div>
	<div id="busquedaTitulo" class="container-xl">
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
							<select class="form-select" aria-label="Categoria">
								<option selected class="text-center" value="-1">Categoria</option>
								<option v-for="(item, i) in categorias" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select class="form-select" aria-label="Calificacion">
								<option selected class="text-center" value="-1">Calificacion</option>
								<option v-for="(item, i) in calificacion" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select class="form-select" aria-label="Precio">
								<option selected class="text-center" value="-1">Precio</option>
								<option v-for="(item, i) in precios" class="text-center" :value=item.id>
									$ {{ item.name }}
								</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md d-flex">
					<input class="form-control me-1" type="search" placeholder="¿Que trabajo necesitas hoy?">
					<router-link class="router-link btn btn-outline-secondary" to="/buscar">
						<i class="bi bi-search"></i>
					</router-link>
				</div>
			</div>
		</form>
	</div>
	<div id="busquedaResultado" class="container-xl">
		<cargando v-if="false"></cargando>
		<div id="busquedaBuscar" v-if="true" class="text-center m-5 text-body-tertiary fw-light">
			<h2>
				Ingresa un criterio de busqueda
			</h2>
			<div class="spinner-grow m-2" style="width: 100px; height: 100px; animation-duration: 3s ;" role="status" >
			</div>
		</div>
		<div id="busquedaNoresultados" v-if="false" class="text-center m-5 text-body-tertiary fw-light">
			<h2>
				No se encontraron resultados
			</h2>
		</div>
		<div id="busquedaResultados" v-if="false" class="row g-0 m-1 overflow-visible justify-content-center">
			<fichaGig class="col" v-for="g in gigs" :id=g.id :ida=g.ida :titulo=g.titulo :img1=g.img1 :img2=g.img2
				:img3=g.img3 :fotoUsuario=g.fotoUsuario :nombreUsuario=g.nombreUsuario :calificacion=g.calificacion
				:costo=g.costo accion="Mirar" />
		</div>
	</div>
</template>
<script>
import botonBusqueda from '@/components/BotonBusqueda.vue';
import fichaGig from '@/components/FichaGigs.vue'
import cargando from '@/components/Cargando.vue'
export default {
	name: 'BusquedaServicios',
	components: {
		botonBusqueda,
		fichaGig,
		cargando,
	},
	data: () => ({
		categorias: [
			{ name: "Categoria 1", id: 1, contenido: "Lorem ipsum es texto de reyeno 1", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 2", id: 2, contenido: "Lorem ipsum es texto de reyeno 2", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 3", id: 3, contenido: "Lorem ipsum es texto de reyeno 3", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 4", id: 4, contenido: "Lorem ipsum es texto de reyeno 4", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 5", id: 5, contenido: "Lorem ipsum es texto de reyeno 5", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
		],
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