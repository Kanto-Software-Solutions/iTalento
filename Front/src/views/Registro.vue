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
export default {
	name: 'registro',
	components: {
		formperfil
	},
	data: () => ({
		usuarioInfo: {
			registro: true,
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
			cuentas: ["Twitter", "LinkedIn", "GitHub"]
		},
	}),
}
</script>
<style></style>