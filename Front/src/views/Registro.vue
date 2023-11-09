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
	
	async created(){
		let temp = await datos.getSesion();
		//await this.$nextTick();
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

		}
	},

	data: () => ({
		usuarioInfo: {
			registro: true,
			verificado: false,
			id: "12345",
			nombres: "Nombre Ejemplo",
			apellidos: "Apellido Ejemplo",
			nickname: "UsuarioEjemplo",
			correo: "usuario@example.com",
			imagenPerfil: "/assets/default.png",
			habilidades: ["Programación", "Diseño Gráfico", "Inglés"],
			profesion: "Desarrollador de Software",
			nivelRecomendacion: "Alto",
			lugar: "Ciudad Ejemplo",
			fechaSuscripcion: "2023-01-15",
			cuentas: ["Twitter", "LinkedIn", "GitHub"],
			sobreMi: "Soy un usuario de ejemplo. Solo quieroo que todo funcione!",
		},
	}),
}
</script>
<style></style>