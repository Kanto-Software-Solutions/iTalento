<template>
	<div class="container-xxl p-0">
		<div class="card rounded-0">
			<div class="card-header">
				<h6 class="text-center">Registro Nuevos usuarios</h6>
			</div>
			<div class="card-body">
				<div id="formularioRegistro">
					<form action="/palRegistro">
						<label for="fUsuario">Nombre de usuario:</label>
						<input id="fUsuario" type="" class="form-control m-1" placeholder="@Tu_Usuario">
						<label for="fCorreo">Correo electronico:</label>
						<input id="fCorreo" type="email" class="form-control m-1" placeholder="Email">
						<label for="fNombre1">Primer nombre:</label>
						<input id="fNombre1" type="" class="form-control m-1" placeholder="Nombre 1">
						<label for="fNombre2">Segundo nombre:</label>
						<input id="fNombre2" type="" class="form-control m-1" placeholder="Nombre 2">
						<label for="fApellido1">Primer apellido:</label>
						<input id="fApellido1" type="" class="form-control m-1" placeholder="Apellido 1">
						<label for="fApellido2">Segundo apellido:</label>
						<input id="fApellido2" type="" class="form-control m-1" placeholder="Apellido 2">
						<label for="fDescripcion">Sobre mi:</label>
						<input id="fDescripcion" type="text" class="form-control m-1" placeholder="Cuentanos sobre ti">
						<label for="fLinkedin">Redes:</label>
						<input id="fLinkedin" type="url" class="form-control m-1" placeholder="Linkedin">
						<input id="fGitHub" type="url" class="form-control m-1" placeholder="Github">
						<div class="form-check form-switch m-1">
							<input id="fRolFreelancer" type="checkbox" class="form-check-input" role="switch">
							<label class="form-check-label" for="fRolFreelancer">
								Freelancer
							</label>
						</div>
						<div class="form-check form-switch m-1">
							<input id="fRolCliente" type="checkbox" class="form-check-input" role="switch" checked>
							<label class="form-check-label" for="fRolCliente">
								Comprador
							</label>
						</div>
						<div class="form-check m-1">
							<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
							<label class="form-check-label" for="flexCheckDefault">
								Acepto los
								<a href="/tyc">Terminos y condiciones</a>
							</label>
						</div>
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