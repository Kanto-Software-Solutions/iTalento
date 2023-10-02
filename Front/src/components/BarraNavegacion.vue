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
	<nav class="navbar navbar-expand-lg bg-body-secondary sticky-top p-0">
		<div class="container-fluid">
			<button id="BotonToggler" class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas"
				data-bs-target="#Menu" aria-controls="elementosOcultos" aria-expanded="false">
				<img src="../assets/img/logo.png" height="30" img />
			</button>
			<div id="Menus" class="d-none d-lg-block">
				<MenuBarra />
			</div>
			<div id="Titulo" class="">
				<a class="nav-link" href="/">
					<strong>
						<large>i - Talento</large>
					</strong>
				</a>
			</div>
			<div id="Funciones" class="">
				<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
					aria-controls="buscar">
					<i class="bi bi-search"></i>
				</button>
				<a class="router-link btn" type="button" href="/login">
					<i class="bi bi-person"></i>
				</a>
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
export default {
	name: 'NavComp',
	components: {
		MenuBarra
	},
}
</script>
