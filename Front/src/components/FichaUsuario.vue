<template>
	<div class="card rounded-4">
		<div class="card-header text-center bg-transparent">
			<img :src=imagenPerfil class="rounded-circle object-fit-cover" alt="Imagen de perfil"
				style="height: 100px; width: 100px;">
			<div class="text-nowrap m-1 fs-4">
				{{ nickname }}
			</div>
			<div class="text-nowrap m-1 fs-4">
				{{ nivelRecomentdacion }}
			</div>
		</div>
		<div class="card-body lh-1">
			<div class="border-bottom">
				<p>{{ nombre }} {{ apellido }}</p>
				<p>{{ profesion }}</p>
				<p>{{ lugar }}</p>
				<p>Talento desde: {{ fechaSuscripcion }}</p>
			</div>
			<div class="border-bottom my-1 justify-content-center">
				<h6>Habilidades: </h6>
				<div class="">
					<div v-for="habilidad in habilidades" class="rounded-2 border text-nowrap p-1 m-1" style="width:max-content;">
						{{ habilidad }}
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	props: {
		id: String,
		nickname: String,
		nombre: String,
		apellido: String,
		correo: String,
		edad: String,
		imagenPerfil: String,
		habilidades: Array,
		profesion: String,
		nivelRecomentdacion: String,
		lugar: String,
		fechaSuscripcion: String,
		cuentas: Array,
	},
}
</script>
<style ></style>