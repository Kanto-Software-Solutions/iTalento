
<template>
	<div class="container-sm dropup-center">
		<div class="card m-2">
			<div class="card-header text-center">
				<h4>
					Terminos y condiciones iTalento
				</h4>
			</div>
			<div class="card-body">
				<TyC/>
			</div>
		</div>
	</div>
</template>

<script>
import TyC from '@/components/TyC.vue'
export default {
	name: 'Terminos y condiciones',
	components: {
		TyC
	},
}
</script>
