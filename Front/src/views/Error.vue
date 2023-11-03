<template>
	<div class="m-3 text-center">
		<h1>{{ this.$route.params.code }}</h1>
		<h3 v-if="this.$route.params.code == 'Network Error'" class="text-body-secondary">
			Parece que Nicolas no encendio la base de datos. ¡Vuelve pronto!
		</h3>
		<h3 v-else class="text-body-secondary">
			Parece que tenemos problemas cargando esta pagina. ¡Vuelve pronto!
		</h3>

	</div>
	<div class="text-center text-body-tertiary" style="margin: 10px;">
		<div style="height: 200px;">
			<router-link to="/">
				<img src="https://images.wikidexcdn.net/mwuploads/wikidex/f/fa/latest/20220604130249/Unown_%3F_HOME.png"
					class="w-100 h-100 object-fit-contain" alt="pkmn interrogacion">
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props: {
	},
	methods: {
	},
	data: () => ({
	}),
}
</script>
<style></style>