<template>
	<div class="container-xl">
		<div class="row p-1">
			<usuario id="usuarioFicha" class="col-md-4" :id="usuario[0].id" :nickname="usuario[0].nickname"
				:correo="usuario[0].correo" :edad="usuario[0].edad" :imagenPerfil="usuario[0].imagenPerfil"
				:habilidades="usuario[0].habilidades" :nivelRecomentdacion="usuario[0].nivelRecomentdacion"
				:lugar="usuario[0].lugar" :fechaSuscripcion="usuario[0].fechaSuscripcion" :profesion="usuario[0].profesion"
				:cuentas="usuario[0].cuentas" :propio=propio>
			</usuario>
			<div id="usuarioInfo" class="col-md ms-1">
				<h4 class="text-center p-3 " id="usuarioTitulo">
					{{ usuario[0].nickname }}
				</h4>
				<ul class="nav  justify-content-center border-bottom my-2" id="myTab" role="usuarioTablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link text-dark-emphasis active" id="gigsTab" data-bs-toggle="tab"
							data-bs-target="#usuarioGigs" type="button" role="tab" aria-controls="usuarioGigs"
							aria-selected="true">Gigs</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link text-dark-emphasis" id="profile-tab" data-bs-toggle="tab"
							data-bs-target="#usuarioDescp" type="button" role="tab" aria-controls="usuarioDescp"
							aria-selected="false">Sobre mi</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link text-dark-emphasis " id="contact-tab" data-bs-toggle="tab"
							data-bs-target="#usuarioTrabajos" type="button" role="tab" aria-controls="usuarioTrabajos"
							aria-selected="false">Trabajos</button>
					</li>
				</ul>
				<div class="tab-content" id="usuarioTabs">
					<div class="tab-pane fade show active" id="usuarioGigs" role="tabpanel" aria-labelledby="usuarioGigs"
						tabindex="0">
						<div class="d-flex justify-content-between">
							<div class="fw-light col">
								Cantidad de gigs: {{ cantidadGigs() }}
							</div>
							<button v-if=propio type="button" class=" btn btn-outline-primary " data-bs-toggle="modal"
								data-bs-target="#perfilCrearGigs">
								Crear Gigs
								<i class="bi bi-plus-square"></i>
							</button>
						</div>
						<div v-if=!cantidadGigs() id="perfilNoGigs" class="text-center m-5 text-body-tertiary fw-light">
							<div v-if=propio>
								<h2>
									No tienes gigs publicados
								</h2>
								<h5 class="fst-italic text-decoration-underline" data-bs-toggle="modal"
									data-bs-target="#perfilCrearGigs">
									¡Crea tu primer gig!
								</h5>
							</div>
							<div v-if=!propio>
								<h2>
									El usuario {{ usuario[0].nickname }} no tiene gigs publicados
								</h2>
							</div>
						</div>
						<div v-else id="gigsPublicados"
							class="row g-0 m-1 overflow-visible justify-content-center">
							<fichaGig class="col" v-for="g in gigs" v-bind="g" accion="Editar" />
						</div>
					</div>
					<div class="tab-pane fade p-2" id="usuarioDescp" role="tabpanel" aria-labelledby="profile-tab"
						tabindex="1">
						<h4>Sobre mi:</h4>
						<h6>{{ usuario[0].nombre }} {{ usuario[0].apellido }} - {{ usuario[0].profesion }}</h6>
						<p>{{ usuario[0].descripcion }}</p>
						<h4>Contacto: </h4>
						<h6>{{ usuario[0].correo }}</h6>
					</div>
					<div class="tab-pane fade" id="usuarioTrabajos" role="tabpanel" aria-labelledby="contact-tab"
						tabindex="2">
						<div class="m-1 text-center" title="Ke mirá 'bobo">
							<img class="rounded" src="https://media.tenor.com/sFUpAcf_hjIAAAAd/bobo-messi.gif"
								alt="Bobo Messi GIF - Bobo Messi GIFs" style="height: 75vh;">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<fgigs></fgigs>
</template>


<script>
import usuario from '@/components/FichaUsuario.vue';
import fichaGig from '@/components/FichaGigs.vue';
import fgigs from '@/components/formularioGigs.vue';
export default {
	name: 'PerfilUsuario',
	components: {
		usuario,
		fichaGig,
		fgigs,
	},
	data: () => ({
		propio: true,
		usuario: [{
			id: "user123",
			nickname: "leoleguizamon97",
			nombre: "Andres",
			apellido: "Leguizamón",
			correo: "johndoe@example.com",
			edad: "30",
			imagenPerfil: "./assets/Andres.jpeg",
			profesion: "Ingeniero de Sistemas",
			habilidades: ["Fotografía", "Diseño Gráfico", "Programación", "Cocina", "Ser guapo"],
			nivelRecomentdacion: "★★★★★",
			lugar: "Bogotá D.C. Colombia",
			fechaSuscripcion: "2023-10-18",
			descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			cuentas: [
				{
					redSocial: "Twitter",
					usuario: "johndoe88"
				},
				{
					redSocial: "Instagram",
					usuario: "leoleguizamon97"
				},
				{
					redSocial: "Instagram",
					usuario: "johndoe_photos"
				},
				{
					redSocial: "Instagram",
					usuario: "johndoe_photos"
				},
			]
		}
		],
		gigs: [
			{
				idx: "res1",
				ida: "#res1",
				titulo: "GIGS 1",
				portada: "./assets/charmander.jpg",
				imagenes: [
					"https://img.freepik.com/fotos-premium/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
					"https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
					"https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
					"https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4",

				],
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "Andres Leguizamon",
				calificacion: "★★★★★",
				costo: 100000,
				accion: "Editar",
				estado: !true,
			},
			
			{
				idx: "res2",
				ida: "#res2",
				titulo: "GIGS 2",
				portada: "./assets/charizard.jpg",
				imagenes: [
					"https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
					"https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
					"https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
					"https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4"
				],
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "Andres Leguizamon",
				calificacion: "★★★★★",
				costo: 100000,
				accion: "Editar",
				estado: true
			},
			{
				idx: "res3",
				ida: "#res3",
				titulo: "GIGS 3",
				portada: "./assets/blastoise.jpg",
				imagenes: [
					"https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
					"https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
					"https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
					"https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4"
				],
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "María López",
				calificacion: "★★★★☆",
				costo: 90000,
				accion: "Editar",
				estado: true
			},
			{
				idx: "res4",
				ida: "#res4",
				titulo: "GIGS 4",
				portada: "./assets/venusaur.jpg",
				imagenes: [
					"https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
					"https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
					"https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
					"https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4"
				],
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "Juan Pérez",
				calificacion: "★★★★★",
				costo: 120000,
				accion: "Editar",
				estado: true
			},
			{
				idx: "res5",
				ida: "#res5",
				titulo: "GIGS 5",
				portada: "./assets/pikachu.jpg",
				imagenes: [
					"https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
					"https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
					"https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
					"https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
					"https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4"
				],
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "Laura Gómez",
				calificacion: "★★★★☆",
				costo: 80000,
				accion: "Editar",
				estado: true
			},
		]
	}),
	methods: {
		cantidadGigs() {
			return this.gigs.length;
		},
	},
}
</script>
