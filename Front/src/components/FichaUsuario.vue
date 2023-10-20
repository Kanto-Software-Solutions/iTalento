<template>
	<div class="card rounded-4" style="height: fit-content;">
		<div class="card-body lh-1">
			<div class="border-bottom my-2 text-center bg-transparent">
				<img :src=imagenPerfil class="rounded-circle object-fit-cover" alt="Imagen de perfil"
					style="height: 100px; width: 100px;">
				<div class="text-nowrap m-1 fs-4">
					{{ nickname }}
				</div>
				<div class="text-nowrap m-1 fs-4">
					{{ nivelRecomentdacion }}
				</div>
			</div>
			<div class="border-bottom my-1">
				<p>{{ profesion }}</p>
				<p>{{ lugar }}</p>
				<p>Talento desde: {{ fechaSuscripcion }}</p>
			</div>
			<div class="container border-bottom my-1">
				<h6>Habilidades: </h6>
				<div v-for="habilidad in habilidades" class="row justify-content-center">
					<div class="rounded-2 border text-nowrap p-1 m-1 " style="width:max-content;">
						{{ habilidad }}
					</div>
				</div>
			</div>
			<div class="border-bottom my-1">
				<h6>Cuentas vinculadas: </h6>
				<button v-for="cuenta in cuentas" class="text-nowrap btn" style="width:max-content;">
					<i v-if="cuenta.redSocial == 'Twitter'" class="bi bi-github"></i>
					<i v-else-if="cuenta.redSocial == 'Instagram'" class="bi bi-instagram"></i>
					<i v-else-if="cuenta.redSocial == 'Facebook'" class="bi bi-facebook"></i>
					<i v-else-if="cuenta.redSocial == 'LinkedIn'" class="bi bi-linkedin"></i>
					<i v-else-if="cuenta.redSocial == 'Github'" class="bi bi-github"></i>
					<i v-else class="bi bi bi-at"></i>
					{{ cuenta.redSocial }}: {{ cuenta.usuario }}
				</button>
			</div>
			<div v-if="true" class="">
				<button type="button" class="btn btn-outline-info w-100 mb-1" data-bs-toggle="modal"
					data-bs-target="#perfilEditar">
					<i class="bi bi-pencil-square"></i>
					Editar mi perfil
				</button>
				<button type="button" class="btn btn-outline-danger w-100 mb-1">
					<i class="bi bi-gear"></i>
					Configurar cuenta
				</button>
			</div>
		</div>
		<div class="modal fade" id="perfilEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
			aria-labelledby="perfilEditarLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="perfilEditarLabel">Editar perfil</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<fUsuario :registro=false :nickname="nickname" :correo="correo"
							:imagenPerfil="imagenPerfil" :profesion="profesion"
							:lugar="lugar" :cuentas="cuentas">
						</fUsuario>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import fUsuario from "@/components/formularioUsuario.vue"
export default {
	name: 'fichaUsuario',
	components: {
		fUsuario
	},
	props: {
		id: String,
		nickname: String,
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