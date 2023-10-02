<template>
	<div id="Contenido" class="container-fluid p-0">
		<router-link class="" to="/registro">
			<button class="btn btn-primary w-100" type="button">
				<i class="bi bi-terminal">
				</i>
			</button>
		</router-link>
		<BarraNavegacion />
		<router-view v-slot="{ Component }">
			<component :is="Component" :key="$route.path"></component>
		</router-view>
		<PieDePagina />
	</div>
	<div id="footer" class="navbar fixed-bottom bg-body-secondary p-0 justify-content-center" style="height: 20px;">
		<div id="f-about" class="">
			<router-link class="router-link nav-link" to="/about">iTalento - 2023</router-link>
		</div>
	</div>
</template>

<script>
import BarraNavegacion from '@/components/BarraNavegacion.vue'
import PieDePagina from '@/components/PieDePagina.vue'
export default {
	name: 'App',
	components: {
		BarraNavegacion,
		PieDePagina,
	},
}
</script>