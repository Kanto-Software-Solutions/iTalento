<template>
	<div id="Contenido" class="container-fluid w-100 p-0 m-0">
		<BarraNavegacion/>
			<router-view v-slot="{ Component }">
				<component :is="Component" :key="$route.path"></component>
			</router-view>
		<PieDePagina/>
	</div>
	<div>{{ sesion }}</div>
	<div id="footer" class="navbar fixed-bottom bg-body-secondary p-0 justify-content-center" style="height: 23px;">
		<div id="f-about" class="">
			<router-link class="router-link nav-link" to="/AboutUs">iTalento - 2023</router-link>
		</div>
	</div>
</template>

<script>
import info from '@/dataManagment.js';
import BarraNavegacion from '@/components/BarraNavegacion.vue'
import PieDePagina from '@/components/PieDePagina.vue'
export default {
	async created() {
		this.sesion = await info.getSesion();
	},
	name: 'App',
	components: {
		BarraNavegacion,
		PieDePagina,
	},
	data: () => ({
		sesion: null,
	}),
}
</script>