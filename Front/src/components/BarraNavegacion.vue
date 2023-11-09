<template>
	<div class="sticky-top">
		<nav id="BarraNav" class="navbar navbar-expand-lg" style="background-color: rgba(255, 255, 255, 0.9);">
			<div class="d-flex justify-content-between w-100 mx-2">
				<div id="BtnEscondido" class="d-block d-lg-none p-0 m-0 w-25">
					<button id="BotonToggler" class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
						data-bs-target="#Menu" aria-controls="elementosOcultos" aria-expanded="false">
						<img src="../assets/img/logo.png" height="30" img />
					</button>
				</div>
				<div id="Menus" class="d-none d-lg-block w-25">
					<MenuBarra />
				</div>
				<router-link id="Titulo" class="text-decoration-none" to="/">
					<Titulo />
				</router-link>
				<div id="Funciones" class="w-25">
					<BtnSesion v-if=estado :nickname=nickname :imgPerfil=imgPerfil />
					<BtnIniciodeSesion v-else />
				</div>
			</div>
		</nav>
		<div id="buscar" class="collapse container-lg p-0">
			<div id="bbuscar" class="p-0 rounded-2 my-1 mx-0" style="background-color: rgba(255, 255, 255, 0.9);">
				<div class="d-flex justify-content-between w-100" role="search">
					<input class="form-control m-1" type="search" placeholder="¿Que trabajo necesitas hoy?">
					<router-link class="router-link btn m-1 btn-outline-secondary" to="/">
						<i class="bi bi-search"></i>
					</router-link>
				</div>
			</div>
		</div>
	</div>
	<div id="Menu" class="offcanvas offcanvas-start">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasNavbarLabel">I-Talento</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
			<MenuBarra />
		</div>
	</div>
</template>

<script>
import MenuBarra from '@/components/MenuBarra.vue'
import BtnIniciodeSesion from '@/components/BtnIniciodeSesion.vue';
import BtnSesion from '@/components/BtnSesion.vue';
import Titulo from '@/components/Titulo.vue';
import datos from '../dataManagment.js';

export default {
	name: 'NavComp',

	async created() {
		let temp = await datos.getSesion();
		if (temp == null) {
			return;
		}
		this.sesion = temp.usuario[0];
		this.estado = temp.estado;
		if (this.estado) {
			this.nickname = this.sesion.nickname;
			this.imgPerfil = this.sesion.picture;
		}
	},

	components: {
		MenuBarra,
		BtnIniciodeSesion,
		Titulo,
		BtnSesion,
	},
	data: () => ({
		nickname: "Usuario",
		imgPerfil: "../assets/default.png",
		sesion: null,
		estado: false,
	}),
}
</script>
