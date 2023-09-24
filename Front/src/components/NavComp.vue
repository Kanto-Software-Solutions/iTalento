<template>
	<nav class="navbar navbar-expand-lg bg-body-secondary sticky-top">
		<div class="offcanvas offcanvas-start" id="Menu">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">I-Talento</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<div class="navbar-nav">
					<li id="CategoriasDropdown" class="dropdown">
						<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
							data-bs-toggle="dropdown" aria-expanded="false">
							Categorías
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li><a class="dropdown-item" href="#">Diseño gráfico</a></li>
							<li><a class="dropdown-item" href="#">Marketing digital</a></li>
							<li><a class="dropdown-item" href="#">Escritura y traducción</a></li>
							<li><a class="dropdown-item" href="#">Vídeo y animación</a></li>
							<li><a class="dropdown-item" href="#">Música y audio</a></li>
							<li><a class="dropdown-item" href="#">Programación y tecnología</a></li>
						</ul>
					</li>
				</div>
			</div>
		</div>

		<div class="container-fluid justify-content-between">
			<div id="Comodin" class="d-none d-lg-block"></div>
			<button id="BotonToggler" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#Menu"
				aria-controls="elementosOcultos" aria-expanded="false">
				<img src="../assets/img/logo.png" height="30" img />
			</button>
			<div id="Titulo">
				<a class="nav-link navbar-brand" href="/">
					<strong>
						<large>i - Talento</large>
					</strong>
				</a>
			</div>
			<div id="Funciones">
				<button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
					aria-controls="buscar">
					<i class="bi bi-search"></i>
				</button>
				<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
					aria-controls="buscar ">
					<i class="bi bi-person"></i>
				</button>
			</div>
		</div>
	</nav>
	<div class="collapse container text-center" id="buscar">
		<div class="row justify-content-lg-center">
				<form class="col-lg-auto d-flex" role="search">
					<input class="form-control m-1" type="search" placeholder="Search" aria-label="Search">
					<button class="btn m-1 btn-outline-success" type="submit">
						<i class="bi bi-search"></i>
					</button>
				</form>


		</div>
	</div>

	<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom-center">
		<div class="container-fluid navbar-container">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
							data-bs-toggle="dropdown" aria-expanded="false">
							Categorías
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<li><a class="dropdown-item" href="#">Diseño gráfico</a></li>
							<li><a class="dropdown-item" href="#">Marketing digital</a></li>
							<li><a class="dropdown-item" href="#">Escritura y traducción</a></li>
							<li><a class="dropdown-item" href="#">Vídeo y animación</a></li>
							<li><a class="dropdown-item" href="#">Música y audio</a></li>
							<li><a class="dropdown-item" href="#">Programación y tecnología</a></li>

						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Cómo funciona</a>
					</li>
					<li class="nav-item">
						<a class="nav-link txtEncuentra" href="#">Encuentra freelancers</a>
					</li>
					<li>
						<!--<a class="navbar-brand" href="#">
						<img src="../assets/img/negro.jpg" alt="" width="70" height="37" class="d-inline-block align-text-top">
						</a>-->
						<a class="nav-link txtiTalento" href="/"><strong>
								<large>iTALENTO</large>
							</strong></a>
					</li>
					<li class="nav-item">
						<button class="nav-link btn btn-link btn-login"
							onclick="window.location.href='/login'">Login</button>
					</li>
					<li class="nav-item">
						<button class="nav-link btn btn-link btn-signIn" onclick="window.location.href='/registro'">Sign
							in</button>
					</li>
					<li class="nav-item">
						<button class="nav-link btn btn-link btn-muestra" onclick="window.location.href='/registro'">Muestra
							tu talento</button>
				</li>
			</ul>
		</div>
	</div>
</nav></template>