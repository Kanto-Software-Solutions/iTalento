<template>
	<div data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel">
		<div class="modal-dialog modal-dialog-scrollable">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="staticBackdropLabel">Terminos y condiciones</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<TyC />
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-info" data-bs-dismiss="modal">Lei los TyC</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TyC from '@/components/TyC.vue'
export default {
	name: 'fichaTyC',
	components: {
		TyC
	},
}
</script>
<style></style>