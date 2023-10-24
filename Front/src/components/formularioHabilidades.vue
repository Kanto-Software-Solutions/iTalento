<template>
	<div class="modal fade modal-lg" id="habilidadesEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="habilidadesEditarLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="perfilEditarLabel">Seleccionar habilidades</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<selhabilidades />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import selhabilidades from "@/components/seleccionHabilidades.vue";
export default {
	components: {
		selhabilidades
	},
}
</script>
<style></style>