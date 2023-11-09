<template>
	<div class="toast-container position-fixed bottom-0 end-0 p-3">
		<div id="notificacionToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
			<div class="toast-header">
				<img src="../assets/img/logo.png" class="rounded me-2 object-fit-cover" alt="logo"
					style="border-radius:50%; height: 30px; width: 30px;">
				<strong class="me-auto">i-Talento</strong>
				<small>{{ hora }}</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0"
				aria-valuemax="100" style="height: 2px">
				<div class="progress-bar" style="width: 100%"></div>
			</div>
			<div class="toast-body">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'notificacion',
	data: () => ({
		hora: new Date().toLocaleTimeString(),
	}),

	methods: {
		animar: function() {
			const progressBar = document.getElementById("notificacionToast");
			const initialWidth = parseFloat(progressBar.style.width);
			const targetWidth = 0; // Ancho final deseado
			const animationDuration = 5000; // 3 segundos en milisegundos

			const startTime = performance.now();

			function updateWidth(currentTime) {
				const elapsedTime = currentTime - startTime;
				if (elapsedTime < animationDuration) {
					const newWidth = ((elapsedTime / animationDuration) * (targetWidth - initialWidth)) + initialWidth;
					progressBar.style.width = newWidth + '%';
					requestAnimationFrame(updateWidth);
				} else {
					progressBar.style.width = targetWidth + '%';
				}
			}
			requestAnimationFrame(updateWidth);
		}
	}

}
</script>
<style></style>