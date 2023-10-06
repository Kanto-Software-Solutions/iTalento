
<template>
	<div class="card m-2">
		<div class="card-header ">
			Terminos y condiciones i Talento
		</div>
		<div class="card-body">
			<TyC />
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
