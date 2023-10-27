<template>
	<div class="container-md">
		<div class="card m-1">
			<div class="card-header">
				<h6 class="text-center">Registro Nuevos usuarios</h6>
			</div>
			<div class="card-body">
				<formperfil :registro=true></formperfil>
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
}
</script>
<style></style>