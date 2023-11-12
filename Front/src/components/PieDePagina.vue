<template>
	<div id="pieDepagina" class="container-xl">
		<div class="row text-center align-items-center">
			<div class="imgiTalento col-sm align-content-center">
				<img class="logo" id="logoPPagina" src="../assets/img/Logotipo_italentoNegro.png" width="100"
					alt="iTalento logo" />
			</div>
			<div class="col-sm">
				<router-link to="/buscar" class="text-decoration-none text-body text-nowrap">Busca talento</router-link>
			</div>
			<div class="col-sm">
				<router-link to="/costostarifas" class="text-decoration-none text-body text-nowrap">Publicidad</router-link>
			</div>
			<div class="col-sm">
				<a class="rounded nav-link mx-1" href="https://blog.italento.shop" target="_blank"
					rel="noopener noreferrer">
					Blog
				</a>
			</div>
			<div class="col-sm">
				<a class="rounded nav-link mx-1" href="https://docs.italento.shop" target="_blank"
					rel="noopener noreferrer">
					Documentacion
				</a>
			</div>
			<div class="col-sm">
				<div class="d-flex justify-content-around">
					<a class="rounded nav-link mx-1" href="https://www.facebook.com/profile.php?id=61550256754354"
						target="_blank" rel="noopener noreferrer">
						<i class="bi bi-facebook"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://twitter.com/iTalento_" target="_blank"
						rel="noopener noreferrer">
						<i class="bi bi-twitter"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://www.instagram.com/italento_/" target="_blank"
						rel="noopener noreferrer">
						<i class="bi bi-instagram"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://github.com/Kanto-Software-Solutions" target="_blank"
						rel="noopener noreferrer">
						<i class="bi bi-github"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="row m-1 border-top border-secondary g-0">
			<div class="col-md-10 col-sm-9 d-flex">
				<div class="row">
					<router-link to="/aboutUs" class="col text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">©2023 i-Talento</router-link>
					<router-link to="/tyc" class="col text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">Términos y condiciones</router-link>
					<router-link to="/proximamente" class="col text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">Cookies</router-link>
					<router-link to="/test" class="col text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">Campo de pruebas</router-link>
				</div>
			</div>
			<div class="col d-flex justify-content-sm-end justify-content-center">
				<div type="btn" class="btn border-0" v-on:click=cambiartema(!this.luz)>
					<i v-if=luz class="bi bi-sun"></i>
					<i v-else class="bi bi-moon"></i>
				</div>
			</div>
		</div>
	</div>
	<div class="" style="height: 26px;"></div>
</template>
<script>
import { nextTick } from 'vue';

export default {
	methods: {
		cambiartema(arg){
			const imagenPPagina = document.getElementById('logoPPagina');
			const barraNav = document.getElementById('BarraNav');
			const buscar = document.getElementById('bbuscar');

			if(arg){
				document.documentElement.setAttribute('data-bs-theme', 'ligth')
				imagenPPagina.src = 'https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/Logotipo_italentoNegro_ahhoks.png'
				barraNav.style = 'background-color: rgba(255, 255, 255, 0.9);'
				buscar.style = 'background-color: rgba(255, 255, 255, 0.9);'
				localStorage.setItem('modoColor', 'ligth')
				this.luz = true
			}else{
				document.documentElement.setAttribute('data-bs-theme', 'dark')
				imagenPPagina.src = 'https://res.cloudinary.com/djc2oc9nr/image/upload/v1699075889/Logotipo_italentoBlanco_hniocj.png'
				barraNav.style = 'background-color: rgba(0, 0, 0, 0.7);'
				buscar.style = 'background-color: rgba(0, 0, 0, 0.7);'
				localStorage.setItem('modoColor', 'dark')
				this.luz = false
			}
		},
		cargarTema() {
			let temp = localStorage.getItem('modoColor')
			if (temp == 'dark') {
				this.cambiartema(false)
			} else {
				this.cambiartema(true)
			}
		},
	},
	created(){
		nextTick(() => {
			this.cargarTema()
		})
		
	},
	data: () => ({
		luz: true,
	}),
}
</script>


