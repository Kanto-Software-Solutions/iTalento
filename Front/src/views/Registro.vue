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
		if(temp.registrado){
			console.log("Ya estas registrado");
			console.log('/perfil/'+temp.sesion.nickname);
			this.$router.push('/perfil/'+temp.sesion.nickname);
		}
		this.estado							= temp.estado;
		if (this.estado) {
			this.sesion = temp.sesion;
			
			this.usuarioInfo.nombres		= this.sesion.given_name;
			this.usuarioInfo.apellidos		= this.sesion.family_name;
			this.usuarioInfo.nickname		= this.sesion.nickname;
			this.usuarioInfo.correo			= this.sesion.email;
			this.usuarioInfo.imagenPerfil 	= this.sesion.picture;
			this.usuarioInfo.verificado		= this.sesion.email_verified;
			this.usuarioInfo.registro		= temp.registrado;
		}
	},
	data: () => ({
		usuarioInfo:{
			cuentas: [{
				Twitter:	"",
				LinkedIn:	"",
				Github:		"",
				Facebook:	"",
				Instagram:	"",
			}]
		},
	}),
}
</script>
<style></style>