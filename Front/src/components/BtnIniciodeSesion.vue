<template>
	<div class="d-flex justify-content-end">
		<button class="btn btn-warning mx-4" type="button" v-on:click=getTest>
			Test
		</button>
		<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
			aria-controls="buscar">
			<i class="bi bi-search"></i>
		</button>
		<a class="router-link btn btn-outline-secondary text-nowrap d-none d-md-block" type="button" href="/login">
			Muestra tu talento
		</a>
		<a class="router-link btn btn-outline-secondary text-nowrap d-block d-md-none" type="button" href="/login">
			<i class="bi bi-person"></i>
		</a>
	</div>
</template>
<script>
import axios from 'axios'
import router from "../router/Router.js";

export default {
	data() {
		return {
			data: null,
		};
	},
	methods: {
		async toTest() {
			router.push('/test');
		},
		async getTest() {
			console.log("hola");
			this.data = await axios.get("http://localhost:3000/cat")
				.catch(function (error) {
					console.log(error.status);
					let status = error.message;
					if (error.response) {
						status = error.response.status + " " + error.response.statusText;
					}
					router.push('/error/' + status);
				});
			console.log(this.data);
		}
	}
};
</script>