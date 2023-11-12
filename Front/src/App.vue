<template>
	<div id="Contenido" class="container-fluid w-100 p-0 m-0">
		<BarraNavegacion />
		<router-view v-slot="{ Component }">
			<component :is="Component" :key="$route.path"></component>
		</router-view>
		<PieDePagina />
	</div>
	<div id="footer" class="navbar fixed-bottom bg-body-secondary p-0 justify-content-center" style="height: 23px;">
		<div id="f-about" class="">
			<router-link class="router-link nav-link" to="/AboutUs">iTalento - 2023</router-link>
		</div>
	</div>
	<notificacion/>
</template>

<script>
import BarraNavegacion from '@/components/BarraNavegacion.vue'
import PieDePagina from '@/components/PieDePagina.vue'
import notificacion from './components/notificacion.vue';
import datos from './dataManagment.js';
import router from '@/router/Router.js';

export default {
	name: 'App',
	async created() {
		let info = await datos.getSesion();
		localStorage.setItem('estado',		JSON.stringify(info.estado));
		localStorage.setItem('registrado',	JSON.stringify(info.registrado));
		localStorage.setItem('sesion',		JSON.stringify(info.sesion));
		if (!info.registrado) {
			router.push('/registro');
		}
	},
	updated() {
		console.log("App.vue updated");
	},
	components: {
		BarraNavegacion,
		PieDePagina,
		notificacion,
	},
	data: () => ({
	}),
}
</script>