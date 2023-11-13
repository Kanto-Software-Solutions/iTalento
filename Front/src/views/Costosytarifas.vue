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
							<h4 class="my-0 fw-normal">Free</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title ">$0<small
									class="text-body-secondary fw-light">/mo</small></h1>
							<ul class="list-unstyled mt-3 mb-4">
								<li>10 users included</li>
								<li>2 GB of storage</li>
								<li>Email support</li>
								<li>Help center access</li>
							</ul>
							<button type="button" class="w-100 btn btn-lg btn-primary">Sign up for free</button>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card mb-4 rounded-3 shadow-sm">
						<div class="card-header py-3">
							<h4 class="my-0 fw-normal">Pro</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title pricing-card-title">$15<small
									class="text-body-secondary fw-light">/mo</small></h1>
							<ul class="list-unstyled mt-3 mb-4">
								<li>20 users included</li>
								<li>10 GB of storage</li>
								<li>Priority email support</li>
								<li>Help center access</li>
							</ul>
							<button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card mb-4 rounded-3 shadow-sm border-primary">
						<div class="card-header py-3 text-bg-primary border-primary">
							<h4 class="my-0 fw-normal">Enterprise</h4>
						</div>
						<div class="card-body">
							<h1 class="card-title pricing-card-title">$29<small
									class="text-body-secondary fw-light">/mo</small></h1>
							<ul class="list-unstyled mt-3 mb-4">
								<li>30 users included</li>
								<li>15 GB of storage</li>
								<li>Phone and email support</li>
								<li>Help center access</li>
							</ul>
							<button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
						</div>
					</div>
				</div>
			</div>
			<tablaCostos></tablaCostos>
			<div class="text-center m-1">
				Adicional puede revisar los:
				<router-link to="/tyc">Terminos y condiciones</router-link>
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