<template>
	<div class="d-flex justify-content-end">
		<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
			aria-controls="buscar">
			<i class="bi bi-search"></i>
		</button>
		<a class="router-link btn btn-outline-secondary text-nowrap d-none d-md-block" type="button" href="/login">
			Muestra tu talento
		</a>
		<a class="router-link btn btn-outline-secondary text-nowrap d-block d-md-none" type="button" href="/login">
			<i class="bi bi-person"></i>
		</a>
	</div>
</template>