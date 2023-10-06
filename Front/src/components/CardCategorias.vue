<template>
	<div class="card text-bg-secondary" style="height:500px ; width: 250px;">

		<img :src=imagen class="w-100 h-100 object-fit-cover" alt="testPic">
		<div class="card-img-overlay bg-black bg-opacity-50">
			<h5 class="card-title">{{ id }} - {{ titulo }}</h5>
			<p class="card-text">{{ contenido }}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: Number,
		titulo: String,
		contenido: String,
		imagen: String,
	},
}
</script>
