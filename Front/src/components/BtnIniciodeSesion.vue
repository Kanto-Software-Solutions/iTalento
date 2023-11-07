<template>
	<div class="d-flex justify-content-end">
		<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
			aria-controls="buscar">
			<i class="bi bi-search"></i>
		</button>
		<a class="router-link btn text-nowrap d-none d-md-block" type="button" href="/login">
			Inicia Sesión
		</a>
		<div class="vr d-none d-md-block"></div>
		<a class="router-link btn text-nowrap d-none d-md-block" type="button" href="/login">
			Registrate
		</a>
		<a class="router-link btn text-nowrap d-block d-md-none" type="button" href="/login">
			<i class="bi bi-person"></i>
		</a>
	</div>
</template>
<script>
export default {

}
</script>