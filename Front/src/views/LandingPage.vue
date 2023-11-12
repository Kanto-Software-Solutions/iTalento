<template>
	<div id="LandingMain" class="position-relative">
		<div class="overflow-hidden">
			<img src="../assets/img/FondoLanding.png" class="position-absolute z-n1 w-100 h-100 object-fit-cover"
				alt="fondo">
		</div>
		<div class="container-xl">
			<div class="row">
				<div class="col-sm col m-1 align-self-center d-flex justify-content-center">
					<div>
						<p class="text-justify fs-1 fw-bold" style="color: rgb(199, 199, 199)">
							No te preocupes, en i-Talento
							tenemos lo que buscas para tus proyectos personales o tu empresa.
						</p>
						<p class="text-Justify fs-1 fw-light" style="color: rgb(199, 199, 199)">
							Da un paso adelante y busca eso que necesitas.
						</p>
						<ul class="">
							<li style="color: rgb(199, 199, 199)">Publica.</li>
							<li style="color: rgb(199, 199, 199)">Busca.</li>
							<li style="color: rgb(199, 199, 199)">Compra.</li>
						</ul>
					</div>
				</div>
				<div class="col-sm h-100 align-self-end">
					<div class="row d-none d-md-block" style="min-height: 75vh">
						<!--Comodin de altura-->
					</div>
					<div class="row mx-auto my-5" style="width: 60%;">
						<router-link class="btn router-link" type="button" to="/buscar" style="background-color: rgba(58, 58, 58, 0.4); color: rgb(199, 199, 199);">
							Busca Talento
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="LandingPrincipales" class="container-xl">
		<div class="card border-0 border-bottom border-secondary m-0 rounded-0">
			<div class="card-header border-0 m-0 rounded-0 bg-transparent">
				<h3 class="">Principales Categorias</h3>
			</div>
			<div class="overflow-x-scroll">
				<div class="card-body row" style="width: max-content;">
					<div class="col" v-for="categoria in categorias">
						<div class="col">
							<categ :id="categoria.idCategory" :titulo=categoria.name :imagen=categoria.imgUrl :contenido=categoria.contenido />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="LandingPValor" class="container-xl">
		<div class="row g-1 m-1">
			<div class="col-md card border-0">
				<div class="card-header bg-transparent d-flex justify-content-between">
					<h5 class="text-start align-self-center">Nosotros te apoyamos</h5>
					<i class="bi bi-check2-circle" style="font-size: 30px;"></i>
				</div>
				<div class="card-body">
					<p class="">
						Con Italento recibiras apoyo para publicitar tus Gigs y publicaciones
						te daremos herramientas para publicitar tus gigs para que obtengas ventas.						
					</p>
				</div>
			</div>
			<div class="col-md card border-0">
				<div class="card-header bg-transparent d-flex justify-content-between">
					<h5 class="text-start align-self-center">Negocia de manera segura</h5>
					<i class="bi bi-shield-fill-check align-self-center" style="font-size: 30px;"></i>
				</div>
				<div class="card-body">
					<p class="">
						Italento te ofrece una manera segura para negociar y obtener ingresos extra para
						ti que eres un freelancer. Te ofrecemos una manera segura de forma de pago que es Payu,
						no liberaremos el dinero a menos que ambas partes estén de acuerdo con la entrega de los
						gigs.
					</p>
				</div>
			</div>
			<div class="col-md card border-0">
				<div class="card-header bg-transparent d-flex justify-content-between">
					<h5 class="text-start align-self-center">Encuentra oportunidades</h5>
					<i class="bi bi-graph-up-arrow align-self-center" style="font-size: 30px;"></i>
				</div>
				<div class="card-body">
					<p class="">
						Te ofrecemos diferentes formas de crecer, no tenemos favoritismos, pero puedes publicitar tus gigs
						para obtener mejores oportunidades de crecer, Nuestras tarifas de esto son claras y siempre te diremos
						cuanto es lo que nos levamos, y cuanto es para tí.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import categ from '@/components/CardCategorias.vue'
import datos from '@/dataManagment.js';

export default {
	name: 'LandingPage',
	components: {
		categ,
	},
	async created() {
		this.categorias = await datos.getCategorias()
	},
	methods: {
		verificarTYC() {
			return datos.verificarTYC()
		},
	},
	data: () => ({
		categorias: [],
	}),
}
</script>
<style>
</style>