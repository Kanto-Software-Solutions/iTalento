<template>
	<div id="AboutMain" class="position-relative">
		<div class="overflow-hidden">
			<img src="../assets/img/Fondo4.jpg" class="position-absolute z-n1 w-100 h-100 object-fit-cover" alt="fondo"
				style="object-position: top;">
		</div>
		<div class="container-xl">
			<div class="row">
				<div class="col-sm col m-1 align-self-center d-flex justify-content-center">
					<div class=" bg-black rounded-4 p-3 bg-opacity-50">
						<p class="text-justify fs-1 fw-bold text-white">
							Sobre nuestro equipo:
						</p>
						<p class="text-Justify fs-4 text-white">
							Quienes somos y por que lo hacemos.
						</p>
					</div>
				</div>
				<div class="col-sm h-100 align-self-end">
					<div class="row d-none d-md-block" style="min-height: 75vh">
						<!--Comodin de altura-->
					</div>
					<div class="row mx-auto my-5" style="width: 60%;">
						<a class="btn router-link btn-primary" type="button" target="_blank" rel="noopener noreferrer"
							href="https://www.paypal.com/donate/?hosted_button_id=86VJ8XG8RE7E6">
							¡Apoyanos en PayPal!
							<i class="bi bi-paypal"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="AboutContenido" class="container-xl">
		<div class="card border-0 m-2">
			<div class="card-body row align-items-center">
				<div class="col-sm">
					<h3 class="card-header text-center bg-transparent">Kanto Software Solutions</h3>
					<p class="text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officiis, veritatis quia
						quis dolorum debitis dolorem quod laudantium eum aspernatur soluta consequuntur dicta quae assumenda
						neque iste doloremque ullam velit?
					</p>
				</div>
				<div class="col-sm">
					<img src="https://wallpapercave.com/dwp1x/wp1892403.jpg" class="w-100 h-100 object-fit-cover rounded-5"
						alt="fondo">
				</div>
			</div>
		</div>
	</div>
	<div id="AboutNosotros" class="container-xl">
		<div class="card border-0 m-2 border-bottom">
			<h1 class="text-secondary-emphasis text-center">
				¿Quienes somos?
			</h1>
		</div>
		<div class="row">
			<div class="col-sm">
				<integrante nombre="Kevin Nivia" descripcion="Desarrollador Frontend" imagen="./assets/Kev.jpg"
					pokemon="./assets/charmander.jpg" github="https://github.com/GurenSeiken" linkedin="http://google.com">
				</integrante>
			</div>
			<div class="col-sm">
				<integrante nombre="Nicolas Rojas" descripcion="Desarrollador Frontend" imagen="./assets/Nico.jpg"
					pokemon="./assets/squirtle.jpg" github="https://github.com/nirojasm-u" linkedin="http://google.com">
				</integrante>
			</div>
			<div class="col-sm">
				<integrante nombre="Andres Leguizamon" descripcion="Desarrollador Frontend" imagen="./assets/Andres.jpeg"
					pokemon="./assets/bullbasur.jpg" github="https://github.com/leoleguizamon97"
					linkedin="https://www.linkedin.com/in/andr%C3%A9s-leonardo-leguizam%C3%B3n-gutierrez-30b478283/">
				</integrante>
			</div>
		</div>
	</div>
	<div id="trabajaNosotros" class="container-xl">
		<h1 class="text-secondary-emphasis text-center border-bottom">
			¡Trabaja con nosotros!
		</h1>
		<div class="card-body d-flex justify-content-center">
			<div class="p-5" style="width: 70%;">
				<img src="../assets/img/Fondo3.jpg" class="w-100 h-100 object-fit-cover rounded-5" alt="fondo">
			</div>
		</div>
		<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
			laborum."
		</p>
	</div>
</template>
<script>
import integrante from '@/components/FichaIntegrante.vue';
export default {
	name: 'AboutUs',
	components: {
		integrante,
	},
}
</script>
<style></style>