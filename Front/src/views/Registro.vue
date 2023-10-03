<template>
	<div class="card m-1">
		<div class="card-header">
			<h6 class="text-center">Registro Nuevos usuarios</h6>
		</div>
		<div class="card-body">
			<div id="formularioRegistro" class="needs-validation" novalidate>
				<div class="container-sm" style="max-width: 700px;">
					<form action="/palRegistro">
						<div class="row w-100 p-0">
							<label for="fUsuario" class="col-sm-3">Usuario:</label>
							<div class="col-sm-9 p-0">
								<input id="fUsuario" type="" class="form-control m-1 " placeholder="@Tu_Usuario" required>
							</div>
						</div>
						<label for="fCorreo">Correo electronico:</label>
						<input id="fCorreo" type="email" class="form-control m-1" placeholder="Email" required>
						<label for="fNombre1">Primer nombre:</label>
						<input id="fNombre1" type="" class="form-control m-1" placeholder="Nombre 1" required>
						<label for="fNombre2">Segundo nombre:</label>
						<input id="fNombre2" type="" class="form-control m-1" placeholder="Nombre 2" required>
						<label for="fApellido1">Primer apellido:</label>
						<input id="fApellido1" type="" class="form-control m-1" placeholder="Apellido 1" required>
						<label for="fApellido2">Segundo apellido:</label>
						<input id="fApellido2" type="" class="form-control m-1" placeholder="Apellido 2" required>
						<label for="fDescripcion">Sobre mi:</label>
						<textarea id="fDescripcion" type="text" class="form-control m-1" placeholder="Cuentanos sobre ti"
							rows="3"></textarea>
						<label for="fLinkedin">Redes:</label>
						<input id="fLinkedin" type="url" class="form-control m-1" placeholder="Linkedin" required>
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
								<a href="" data-bs-toggle="modal" data-bs-target="#popTyc">Terminos y condiciones</a>
							</label>
						</div>
						<button type="submit" class="btn btn-primary m-1">Enviar</button>
					</form>
				</div>

			</div>
		</div>
	</div>

	<div id="popTyc" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
		aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
	name: 'Registro',
	components: {
		TyC
	},
}
</script>
<style></style>