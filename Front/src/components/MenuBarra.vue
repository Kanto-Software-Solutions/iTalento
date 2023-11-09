<template>
	<div class="navbar-nav">
		<li id="CategoriasDropdown" class="dropdown d-none">
			<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
				aria-expanded="false">
				Categorías
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				<li><a class="dropdown-item" href="#">Diseño gráfico</a></li>
				<li><a class="dropdown-item" href="#">Marketing digital</a></li>
				<li><a class="dropdown-item" href="#">Escritura y traducción</a></li>
				<li><a class="dropdown-item" href="#">Vídeo y animación</a></li>
				<li><a class="dropdown-item" href="#">Música y audio</a></li>
				<li><a class="dropdown-item" href="#">Programación y tecnología</a></li>
			</ul>
		</li>
		<router-link class="nav-link text-nowrap" to="/funcionamiento">Cómo funciona </router-link>
		<router-link class="nav-link text-nowrap" to="/costostarifas">Costos y tarifas</router-link>
	</div>
</template>