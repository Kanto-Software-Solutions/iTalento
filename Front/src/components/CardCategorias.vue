<template>
	<router-link :id=id class="card text-bg-secondary overflow-hidden" style="height:500px ; width: 250px;" :to="'/buscar/categoria/'+id">
		<img :src=imagen class="w-100 h-100 object-fit-cover" alt="testPic">
		<div class="card-img-overlay bg-black bg-opacity-50 p-0">
			<div class="h-25 p-3">
				<h5>{{ id }} : {{ titulo }}</h5>
			</div>
			<div class="d-flex align-items-end w-100 h-75">
				<div class="d-flex align-items-center w-100 bg-black bg-opacity-50 h-25 p-2">
					<p class="card-text text-center  w-100 ">{{ descripcion }}</p>
				</div>
			</div>
		</div>
	</router-link>
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
