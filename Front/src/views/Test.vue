<template>
	<div class="text-center">
		<h1>Esto es una pagina de prueba</h1>
		<div class="container-lg">
			<cargando v-if="categorias == null" />
			<div v-for="categoria in categorias">
				<h5>LALALA</h5>
				<categ :id=categoria.idCategory :titulo=categoria.name :imagen=categoria.imgUrl />
			</div>
		</div>
		<img src="https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/Logo_orntxa.png" alt="" class="h-100">
	</div>
</template>
<script>
import categ from '@/components/CardCategorias.vue';
import cargando from '@/components/Cargando.vue';
import datos from '../dataManagment.js';


export default {
	components: {
		categ,
		cargando,
	},
	async created() {
		this.categorias = await datos.getCategorias()
		this.categorias = this.categorias.slice(0, 2)
	},
	methods: {
	},
	data: () => ({
		categorias: null,
	}),
}
</script>
<style></style>