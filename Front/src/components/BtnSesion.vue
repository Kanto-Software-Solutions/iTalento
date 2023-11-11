<template>
	<div class="d-flex justify-content-end">
		<div class="dropdown dropup-center">
			<div id="menuUsuario" class="btn border-0 d-flex p-0 m-0" data-bs-toggle="dropdown" aria-expanded="false">
				<label class="btn disabled border-0 d-none d-sm-block">{{ nickname }}</label>
				<div class="mx-2 vr d-none d-sm-block"></div>
				<img :src=imgPerfil :alt=nickname class="vertical-center mx-2 object-fit-cover" style="border-radius:50%; height: 40px; width: 40px;">
			</div>
			<ul class="dropdown-menu dropdown-menu-end">
				<div class="dropdown-header d-block d-sm-none text-center">{{ nickname }}</div>
				<li><router-link class="dropdown-item" :to="'/perfil/'+nickname">Perfil</router-link></li>
				<li><router-link class="dropdown-item" to="/buscar">Buscar</router-link></li>
				<li><router-link class="dropdown-item" to="/">Mis Compras</router-link></li>
				<li><hr class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="/logout">Cerrar Sesión</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		nickname: {
			type: String,
			default: "Usuario"
		},
		imgPerfil: {
			type: String,
			default: "???"
		}
	}
}
</script>