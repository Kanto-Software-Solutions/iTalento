<template>
	<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><strong><large>i - TALENTO</large></strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="">
		<a class="" href="#">
					<img src="../assets/img/logo.png" alt="Logo" height="50" class="d-inline-block align-text-top">
				</a>
	  </span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>




	<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom-center" >
		<div class="container-fluid navbar-container" >
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
						<a class="nav-link txtiTalento" href="/"><strong><large>i - TALENTO</large></strong></a>
					</li>
					<li class="nav-item">
  						<button class="nav-link btn btn-link btn-login" onclick="window.location.href='/login'">Login</button>
					</li>
					<li class="nav-item">
  						<button class="nav-link btn btn-link btn-signIn" onclick="window.location.href='/registro'">Sign in</button>
					</li>
					<li class="nav-item">
  						<button class="nav-link btn btn-link btn-muestra" onclick="window.location.href='/registro'">Muestra tu talento</button>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>