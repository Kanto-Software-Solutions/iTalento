<template>
	<div :id=id class="card text-bg-secondary overflow-hidden" style="height:500px ; width: 250px;">
		<img :src=imagen class="w-100 h-100 object-fit-cover" alt="testPic">
		<div class="card-img-overlay bg-black bg-opacity-25 text-center">
			<h5 class="h-25" >{{ id }} : {{ titulo }}</h5>
			<div class="d-flex align-items-end h-75">
				<p class="card-text">{{ descripcion }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		id: Number,
		titulo: String,
		descripcion: String,
		imagen: String,
	},
}
</script>
