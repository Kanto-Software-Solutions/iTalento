<template>
	<div class="card rounded-4" style="height: fit-content;">
		<div class="card-body lh-1">
			<div class="border-bottom my-2 text-center bg-transparent">
				<img :src=usuario.profileImage class="rounded-circle object-fit-cover" alt="Imagen de perfil"
					style="height: 100px; width: 100px;">
				<div class="text-nowrap m-1 fs-4">
					{{ usuario.nickname }}
				</div>
				<div class="text-nowrap m-1 fs-4">
					{{ getRecomendacion(usuario.recLevel) }}
				</div>
			</div>
			<div class="border-bottom my-1">
				<p>{{ usuario.job }}</p>
				<p>{{ usuario.location }}</p>
				<p>Talento desde: {{ usuario.creationDate.split('T')[0] }}</p>
			</div>
			<div class="border-bottom my-1 pb-1">
				<div class="d-flex justify-content-between">
					<h6 class="">Habilidades: </h6>
					<button v-if=propio class="btn btn-outline-info btn-sm ms-1" type="button" data-bs-toggle="modal"
						data-bs-target="#habilidadesEditar">
						<i class="bi bi-pencil-square"></i>
					</button>
				</div>
				<div class="container">
					<div class="container">
						<div class="row row-cols-auto justify-content-center">
							<div v-for="habilidad in usuario.habilidades" class="col rounded-2 border text-nowrap p-1 m-1">
								{{ habilidad.nombre }}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="my-1 text-center">
				<h6>Cuentas vinculadas: </h6>
				<a v-for="cuenta in  usuario.cuentas  " class=" btn" style="width:max-content;" target="_blank"
					rel="noopener noreferrer" :href="urlRedes(cuenta.redSocial, cuenta.usuario)">
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
					data-bs-target="#perfilEditar" v-on:click=paraFormulario()>
					<i class="bi bi-pencil-square"></i>
					Editar mi perfil
				</button>
				<button type="button" class="btn btn-outline-danger w-100 mb-1" disabled>
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
						<fUsuario :userdata=userdata :editar=true />
					</div>
				</div>
			</div>
		</div>
		<fHabilidades />
	</div>
</template>
<script>
import fUsuario from "@/components/formularioUsuario.vue"
import fHabilidades from "./formularioHabilidades.vue";
export default {
	name: 'fichaUsuario',
	methods: {
		urlRedes(red, usuario) {
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
		getRecomendacion(temp) {
			if (temp == 5) {
				return "★★★★★";
			}
			else if (temp == 4) {
				return "★★★★☆";
			}
			else if (temp == 3) {
				return "★★★☆☆";
			}
			else if (temp == 2) {
				return "★★☆☆☆";
			}
			else if (temp == 1) {
				return "★☆☆☆☆";
			}
			else if (temp == 0) {
				return "☆☆☆☆☆";
			} else {
				return "No definido";
			}
		},
		paraFormulario() {
			this.userdata.nickname = this.usuario.nickname
			this.userdata.nombres = this.usuario.names
			this.userdata.apellidos = this.usuario.lastNames
			this.userdata.correo = this.usuario.email
			this.userdata.fechaNacimiento = this.usuario.birthDate.split('T')[0]
			this.userdata.profesion = this.usuario.job
			this.userdata.lugar = this.usuario.location
			this.userdata.freelancer = this.usuario.isFreelancer
			this.userdata.tyc = this.usuario.acceptedTerms
			this.userdata.sobreMi = this.usuario.description
			this.userdata.imagenPerfil = this.usuario.profileImage
			this.userdata.registrado = true
			this.userdata.verificado = this.usuario.isVerified
			//Redes
			this.userdata.cuentas.twitter = ""
			this.userdata.cuentas.linkedIn = ""
			this.userdata.cuentas.github = ""
			this.userdata.cuentas.facebook = ""
			this.userdata.cuentas.instagram = ""
		},
	},
	components: {
		fUsuario,
		fHabilidades,
	},
	props: {
		usuario: Object,
		propio: Boolean,
	},
	data: () => ({
		userdata: {
			cuentas: [{
				Twitter: "",
				LinkedIn: "",
				Github: "",
				Facebook: "",
				Instagram: "",
			}]
		},
	}),
}
</script>