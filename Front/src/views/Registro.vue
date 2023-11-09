<template>
	<div class="container-md">
		<div class="card m-1">
			<div class="card-header">
				<h6 class="text-center">Registro Nuevos usuarios</h6>
			</div>
			<div class="card-body">
				<formperfil :userdata=usuarioInfo></formperfil>
			</div>
		</div>
	</div>
</template>
<script>
import formperfil from '@/components/formularioUsuario.vue'
import datos from '../dataManagment.js';

export default {
	name: 'registro',
	components: {
		formperfil,
		datos,
	},

	async created() {
		let temp = await datos.getSesion();
		if (temp == null) {
			return;
		}
		this.sesion = temp.usuario[0];
		this.estado = temp.estado;
		if (this.estado) {
			this.usuarioInfo.nombres = this.sesion.given_name;
			this.usuarioInfo.apellidos = this.sesion.family_name;
			this.usuarioInfo.nickname = this.sesion.nickname;
			this.usuarioInfo.correo = this.sesion.email;
			this.usuarioInfo.imagenPerfil = this.sesion.picture;
			this.usuarioInfo.verificado = this.sesion.email_verified;
		}
	},
	data: () => ({
		usuarioInfo: {
			registro: false,
			verificado: false,
			tyc: false,
			id: "",
			nombres: "",
			apellidos: "",
			nickname: "",
			correo: "",
			imagenPerfil: "",
			habilidades: [],
			profesion: "",
			nivelRecomendacion: "",
			lugar: "",
			fechaNacimiento: "",
			cuentas: [{
				twitter: "",
				linkedIn: "",
				github: "",
				facebook: "",
				instagram: ""
			}],
		},
	}),
}
</script>
<style></style>