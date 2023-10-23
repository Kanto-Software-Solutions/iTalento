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
			<div class="border-bottom my-1 pb-1">
				<div class="d-flex justify-content-between">
					<h6 class="">Habilidades: </h6>
					<button v-if=propio class="btn btn-outline-info btn-sm ms-1" type="button" data-bs-toggle="modal"
						data-bs-target="#habilidadesEditar">
						<i class="bi bi-pencil-square"></i>
					</button>
				</div>
				<div v-for="habilidad in habilidades" class="row justify-content-center">
					<div class="rounded-2 border text-nowrap p-1 m-1 " style="width:max-content;">
						{{ habilidad }}
					</div>
				</div>
			</div>
			<div class="my-1 text-center">
				<h6>Cuentas vinculadas: </h6>
				<a v-for="cuenta in cuentas" class=" btn" style="width:max-content;" :href=urlRedes(cuenta.redSocial,cuenta.usuario) target="_blank"
					rel="noopener noreferrer">
					<i v-if="cuenta.redSocial == 'Twitter'" class="bi bi-github"></i>
					<i v-else-if="cuenta.redSocial == 'Instagram'" class="bi bi-instagram"></i>
					<i v-else-if="cuenta.redSocial == 'Facebook'" class="bi bi-facebook"></i>
					<i v-else-if="cuenta.redSocial == 'LinkedIn'" class="bi bi-linkedin"></i>
					<i v-else-if="cuenta.redSocial == 'Github'" class="bi bi-github"></i>
					<i v-else class="bi bi bi-at"></i>
					{{ cuenta.redSocial }}:
					<p>
						@{{ cuenta.usuario }}
					</p>

				</a>
			</div>
			<div v-if=propio class="border-top">
				<button type="button" class="btn btn-outline-info w-100 my-2" data-bs-toggle="modal"
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
		<div class="modal fade modal-lg" id="perfilEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
			aria-labelledby="perfilEditarLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="perfilEditarLabel">Editar perfil</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<fUsuario :registro=false :nickname="nickname" :correo="correo" :imagenPerfil="imagenPerfil"
							:profesion="profesion" :lugar="lugar" :cuentas="cuentas">
						</fUsuario>
					</div>
				</div>
			</div>
		</div>
		<fHabilidades id="habilidadesEditar"></fHabilidades>
	</div>
</template>
<script>
import fUsuario from "@/components/formularioUsuario.vue"
import fHabilidades from "./formularioHabilidades.vue";
export default {
	name: 'fichaUsuario',
	methods: {
		editarPerfil() {

		},
		urlRedes(red,usuario) {
			if (red == "Twitter") {
				return "https://twitter.com/" + usuario;
			}
			else if (red == "Instagram") {
				return "https://www.instagram.com/" + usuario;
			}
			else if (red == "Facebook") {
				return "https://www.facebook.com/" + usuario;
			}
			else if (red == "LinkedIn") {
				return "https://www.linkedin.com/in/" + usuario;
			}
			else if (red == "Github") {
				return "https://github.com/" + usuario;
			}
			else {
				return "mailto:" + usuario;
			}
		},
	},
	components: {
		fUsuario,
		fHabilidades,
	},
	props: {
		propio: Boolean,
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