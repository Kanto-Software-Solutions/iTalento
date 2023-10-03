<template>
	<div id="Menu" class="offcanvas offcanvas-start">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasNavbarLabel">I-Talento</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
			<MenuBarra />
		</div>
	</div>
	<nav class="navbar navbar-expand-lg bg-body-secondary sticky-top">
		<div class="d-flex justify-content-between w-100 mx-2">
			<div id="BtnEscondido" class="d-block d-lg-none p-0 m-0 w-25">
				<button id="BotonToggler" class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
					data-bs-target="#Menu" aria-controls="elementosOcultos" aria-expanded="false">
					<img src="../assets/img/logo.png" height="30" img />
				</button>
			</div>
			<div id="Menus" class="d-none d-lg-block w-25">
				<MenuBarra />
			</div>
			<div id="Titulo" class="">
				<Titulo />
			</div>
			<div id="Funciones" class="w-25">
				<BtnIniciodeSesion />
			</div>
		</div>
	</nav>
	<div id="buscar" class="collapse container">
		<div class="row justify-content-lg-center">
			<form class="col-lg-auto d-flex w-100" role="search">
				<input class="form-control m-1" type="search" placeholder="Search" aria-label="Search">
				<button class="btn m-1 btn-outline-secondary" type="submit">
					<i class="bi bi-search"></i>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import MenuBarra from '@/components/MenuBarra.vue'
import BtnIniciodeSesion from '@/components/BtnIniciodeSesion.vue';
import Titulo from '@/components/Titulo.vue';
export default {
	name: 'NavComp',
	components: {
		MenuBarra,
		BtnIniciodeSesion,
		Titulo,
		
	},
}
</script>
