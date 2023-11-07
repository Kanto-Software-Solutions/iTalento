<template>
	<div id="pieDepagina" class="container-md">
		<div class="row text-center align-items-center">
			<div class="imgiTalento col-sm align-content-center">
				<img class="logo" id="logoPPagina" src="../assets/img/Logotipo_italentoNegro.png" width="100" alt="iTalento logo" />
			</div>
			<div class="col-sm">
				<router-link to="/buscar" class="text-decoration-none text-body text-nowrap">Busca talento</router-link>
			</div>
			<div class="col-sm">
				<router-link to="/costostarifas" class="text-decoration-none text-body text-nowrap">Publicidad</router-link>
			</div>
			<div class="col-sm">
				<router-link to="/blog" class="text-decoration-none text-body text-nowrap">Blog </router-link>
			</div>
			<div class="col-sm">
				<a class="rounded nav-link mx-1" href="https://blog.italento.shop" target="_blank" rel="noopener noreferrer">
					blog
				</a>
			</div>
			<div class="col-sm">
				<div class="d-flex justify-content-around">
					<a class="rounded nav-link mx-1" href="https://www.facebook.com/profile.php?id=61550256754354" target="_blank" rel="noopener noreferrer">
						<i class="bi bi-facebook"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://twitter.com/iTalento_" target="_blank" rel="noopener noreferrer">
						<i class="bi bi-twitter"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://www.instagram.com/italento_/" target="_blank" rel="noopener noreferrer">
						<i class="bi bi-instagram"></i>
					</a>
					<a class="rounded nav-link mx-1" href="https://github.com/Kanto-Software-Solutions" target="_blank" rel="noopener noreferrer">
						<i class="bi bi-github"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="row m-1 border-top border-secondary">
			<div class="col d-flex justify-content-start">
				<div class="row">
					<router-link to="/aboutUs" class="col-sm text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">©2023 i-Talento</router-link>
					<router-link to="/tyc" class="col-sm text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">Términos y condiciones</router-link>
					<router-link to="/proximamente" class="col-sm text-decoration-none text-body m-1 text-nowrap"
						style="font-size:small;">Cookies</router-link>
				</div>
			</div>
			<div class="col d-flex justify-content-end m-1" style="height:40px;">
				<div class="btn-group" role="group">
					<input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-blanco" autocomplete="off" checked>
					<label class="btn" for="vbtn-blanco"><i class="bi bi-lightbulb-fill"></i></label>
					<input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-negro" autocomplete="off">
					<label class="btn" for="vbtn-negro"><i class="bi bi-lightbulb"></i></label>
				</div>
			</div>
		</div>
	</div>
	<div class="" style="height: 26px;"></div>
</template>


