<template>
	<div class="d-inline" style="width:300px;">
		<img src="" alt="Foto">
		<img src="" alt="pokemon">
		<div class="w-75">
			<h5 class="card-title">{{ nombre }}</h5>
			<p class="card-text">{{ descripcion }}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		nombre: String,
		descripcion: String,
		imagen: String,
		pokemon: String,
	},
}
</script>
