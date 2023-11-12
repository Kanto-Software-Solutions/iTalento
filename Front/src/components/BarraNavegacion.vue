<template>
	<div class="sticky-top">
		<nav id="BarraNav" class="navbar navbar-expand-lg p-1" style="background-color: rgba(255, 255, 255, 0.9);">
			<div class="d-flex justify-content-between w-100">
				<div id="BtnEscondido" class="d-md-none w-25 p-0 m-0">
					<div class="dropdown mx-2">
						<button class="border-0 btn p-1" type="button" data-bs-toggle="dropdown" data-bs-target="#Menu"
							aria-controls="elementosOcultos" aria-expanded="false" style="height: 40px;">
							<img src="../assets/img/logo.svg" class="h-100 w-100 object-fit-cover" />
						</button>
						<ul class="dropdown-menu">
							<li><router-link class="dropdown-item" to="/funcionamiento">Cómo funciona </router-link></li>
							<li><router-link class="dropdown-item" to="/costostarifas">Costos y tarifas</router-link></li>
							<li><router-link class="dropdown-item" to="/aboutUs">Sobre Nosotros</router-link></li>
							<li><router-link class="dropdown-item" to="/TyC">Terminos y condiciones</router-link></li>
							<li><router-link class="dropdown-item" to="/">Costos y tarifas</router-link></li>
							<li>
								<hr class="dropdown-divider">
							</li>
							<li>
								<a class="dropdown-item" href="https://blog.italento.shop" target="_blank"
									rel="noopener noreferrer">
									Blog
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="https://docs.italento.shop" target="_blank"
									rel="noopener noreferrer">
									Documentacion
								</a>
							</li>
							<li>
								<hr class="dropdown-divider">
							</li>
							<li class="px-1">
								<a class="btn btn-primary text-nowrap " type="button" target="_blank"
									rel="noopener noreferrer"
									href="https://www.paypal.com/donate/?hosted_button_id=86VJ8XG8RE7E6">
									¡Apoyanos en PayPal!
									<i class="bi bi-paypal"></i></a>
							</li>
						</ul>
					</div>

				</div>
				<div id="Menus" class="d-none d-md-block w-25">
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
		<div id="buscar" class="collapse container-md p-0">
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
	<ul class="dropdown-menu">
		<li><a class="dropdown-item" href="#">Action</a></li>
		<li><a class="dropdown-item" href="#">Another action</a></li>
		<li><a class="dropdown-item" href="#">Something else here</a></li>
	</ul>
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
		this.sesion = temp.sesion;
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