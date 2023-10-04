<template>
	<div class="d-flex justify-content-end">
		<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
			aria-controls="buscar">
			<i class="bi bi-search"></i>
		</button>
		<router-link class="router-link btn btn-outline-secondary text-nowrap d-none d-md-block" type="button" to="/login">
			Muestra tu talento
		</router-link>
		<router-link class="router-link btn btn-outline-secondary text-nowrap d-block d-md-none" type="button" to="/login">
			<i class="bi bi-person"></i>
		</router-link>
	</div>
</template>