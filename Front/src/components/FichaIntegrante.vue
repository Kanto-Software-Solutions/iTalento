<template>
	<div class="container my-3" style="height:150px; width:300px;">
		<div class="row my-2">
			<div class="col position-relative" style="height:150px">
					<img :src=pokemon alt="pkmn" class="position-absolute z-1 marg"
						style="clip-path: circle(25px); height: 50px; bottom: 5%; right: 0%;">
					<img :src=imagen alt="foto" class="position-absolute vcenter" style="border-radius:50%; height: 120px;">
			</div>
			<div class="col position-relative">
				<div class="vcenter">
					<h5>{{ nombre }}</h5>
					<div>
						<a :href=linkedin class="text-decoration-none" target="_blank" rel="noopener noreferrer">
							<i class="bi bi-linkedin"></i>
							LinkedIn
						</a>
					</div>
					<div>
						<a :href=github class="text-decoration-none" target="_blank" rel="noopener noreferrer">
							<i class="bi bi-github"></i>
							GitHub
						</a>
					</div>
				</div>
			</div>
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
		linkedin: String,
		github: String,
	},
}
</script>
<style>
.vcenter {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
