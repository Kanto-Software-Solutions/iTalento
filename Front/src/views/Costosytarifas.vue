<template>
	<div class="container-xl">
		<div class="card m-1">
			<div class="card-header">
				<h4 class="text-center">
					Costos y tarifas
				</h4>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col">
						<h5 class="card-title">Tarifas</h5>
						<p class="card-text">
							Te invitamos a conocer nuestras tairfas de publicidad.
							Los costos varian dependiendo del plan. Cada plan incluye un tipo de publicidad e incluye
							la capacidad de tener más alcance con tus gigs. También incluye atención prioritaria en el
							soporte de la aplicación.
						</p>
					</div>
				</div>
			</div>
			<div class="row row-cols-1 row-cols-md-3 m-3 text-center">
				<div class="col">
					<div class="card mb-4 rounded-3 shadow-sm">
						<div class="card-header py-3">
							<h4 class="my-0 fw-normal">Gratis</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title ">Gratis</h1>
							<ul class="list-unstyled mt-3 mb-4">
								<li>15% de Comisión por trabajo</li>
								<li>Acceso a Soporte</li>
								<li>Garantías de Pago</li>
							</ul>
							<button type="button" class="w-100 btn btn-lg btn-primary">Regístrate</button>
						</div>
					</div>
				</div>
			</div>
			<tablaCostos v-if="false"></tablaCostos>
			<div class="text-center m-1">
				Adicional puede revisar los:
				<router-link to="/tyc">Términos y Condiciones</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import tablaCostos from '@/components/tablaCostos.vue'
export default {
	components: {
		tablaCostos
	}
}
</script>
<style></style>