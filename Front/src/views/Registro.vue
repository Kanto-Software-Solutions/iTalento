<template>
	<div class="container-md bg-danger">
		<div class="card rounded-0">
			<div class="card-header">
				<h6 class="text-center">Registro Nuevos usuarios</h6>
			</div>
			<div class="card-body">
				<div id="formulacioRegistro">
					<form action="/palRegistro">
						<input id="fUsuario" type="" class="form-control m-1" aria-describedby="">
						<input id="fCorreo" type="" class="form-control m-1" aria-describedby="">
						<input id="fNombre" type="" class="form-control m-1" aria-describedby="">
						<input id="fApellido" type="" class="form-control m-1" aria-describedby="">
						<input id="fDescripcion" type="" class="form-control m-1" aria-describedby="">
						<input id="fLinkedin" type="" class="form-control m-1" aria-describedby="">

						<button type="submit" class="btn btn-primary m-1">Enviar</button>
					</form>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>