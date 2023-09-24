<template>
	<nav class="navbar navbar-expand-lg bg-body-secondary sticky-top">
		<div class="">

			<div class="offcanvas offcanvas-start" id="elementosOcultos">
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasNavbarLabel">I-Talento</h5>
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="navbar-nav flex-grow-1">
						<li class="dropdown">
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
			<div>
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#elementosOcultos"
					aria-controls="elementosOcultos" aria-expanded="false" aria-label="Toggle navigation">
					<img src="../assets/img/logo.png" height="35" img/>
				</button>

			</div>
			<div>
				<a class="nav-link navbar-brand" href="/">
					<strong>
						<large>i - Talento</large>
					</strong>
				</a>
			</div>
			<div>
				<button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#buscar" aria-expanded="false"
					aria-controls="buscar">
					<i class="bi bi-search"></i>
				</button>				
			</div>

		</div>
	</nav>

	<div class="collapse" id="buscar">
		<form class="d-flex container-sm" role="search">
			<input class="form-control m-1" type="search" placeholder="Search" aria-label="Search">
			<button class="btn m-1 btn-outline-success" type="submit">
				<i class="bi bi-search"></i>
			</button>
		</form>
	</div>

</template>