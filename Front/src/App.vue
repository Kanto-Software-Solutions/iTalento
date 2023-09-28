<template>
	<div id="Contenido" class="">
		<NavComp />
		<router-view v-slot="{ Component }">
			<component :is="Component" :key="$route.path"></component>
		</router-view>
		<FootNav />
	</div>
	<div id="footer" class="navbar fixed-bottom bg-body-secondary p-0">
		<div id="f-about" class="d-flex nav-item justify-content-around w-75">
			<router-link class="router-link nav-link" to="/about">iTalento - 2023</router-link>
		</div>
		<div id="f-redes" class="d-flex nav-item justify-content-end w-25">
			<a class="rounded nav-link d-inline-block mx-1" href="https://www.facebook.com/profile.php?id=61550256754354">
				<i class="bi bi-facebook"></i>
			</a>
			<a class="rounded nav-link d-inline-block mx-1" href="https://twitter.com/iTalento_">
				<i class="bi bi-twitter"></i>
			</a>
			<a class="rounded nav-link d-inline-block mx-1" href="https://www.instagram.com/italento_/">
				<i class="bi bi-instagram"></i>
			</a>
			<a class="rounded nav-link d-inline-block mx-1" href="https://github.com/Kanto-Software-Solutions">
				<i class="bi bi-github"></i>
			</a>
		</div>
	</div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'
import FootNav from '@/components/FootNav.vue'
export default {
	name: 'App',
	components: {
		NavComp,
		FootNav,
	},
}
</script>