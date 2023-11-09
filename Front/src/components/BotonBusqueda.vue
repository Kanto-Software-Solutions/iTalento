<template>
	<button type="button" class="btn fw-lighter text-nowrap">
		{{nombre}}
	</button>
</template>
<script>
export default {
	props: {
		nombre: String,
	},
}
</script>
<style></style>