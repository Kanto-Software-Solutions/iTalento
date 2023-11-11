<template>
	<div class="container-xl">
		<div class="row p-1">
			<usuario id="usuarioFicha" class="col-md-4" :id="usuario.id" :nickname="usuario.nickname"
				:correo="usuario.correo" :edad="usuario.edad" :imagenPerfil="usuario.imagenPerfil"
				:habilidades="usuario.habilidades" :nivelRecomentdacion="usuario.nivelRecomentdacion" :lugar="usuario.lugar"
				:fechaSuscripcion="usuario.fechaSuscripcion" :profesion="usuario.profesion" :cuentas="usuario.cuentas"
				:propio=propio>
			</usuario>
			<div id="usuarioInfo" class="col-md ms-1">
				<h4 class="text-center p-3 " id="usuarioTitulo">
					{{ usuario.nombre }} {{ usuario.apellido }}
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
									El usuario {{ usuario.nickname }} no tiene gigs publicados
								</h2>
							</div>
						</div>
						<div v-else id="gigsPublicados" class="row g-0 m-1 overflow-visible justify-content-center">
							<fichaGig class="col" v-for="g in gigs" v-bind="g" accion="Editar" />
						</div>
					</div>
					<div class="tab-pane fade p-2" id="usuarioDescp" role="tabpanel" aria-labelledby="profile-tab"
						tabindex="1">
						<h4>Sobre mi:</h4>
						<h6>{{ usuario.nombre }} {{ usuario.apellido }} - {{ usuario.profesion }}</h6>
						<p>{{ usuario.descripcion }}</p>
						<h4>Contacto: </h4>
						<h6>{{ usuario.correo }}</h6>
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
import datos from '../dataManagment.js';
import router from '@/router/Router.js';

export default {
	name: 'PerfilUsuario',
	props: {
	},
	components: {
		usuario,
		fichaGig,
		datos,
		fgigs,
	},
	async created() {
		let idUnico = this.$route.params.nickname;
		console.log(idUnico + ' de URL');
		await datos.getUsuario(idUnico).then((response) => {
			let porfileInfo = response[0];
			console.log(porfileInfo);
			if(porfileInfo == undefined){
				console.log(JSON.parse(localStorage.getItem('registrado')));
				if (JSON.parse(localStorage.getItem('registrado')) == false) {
					router.push('/registro');
				}else{
					router.push('/error/Usuario no Encontrado');
				}
			}else{
				this.pasarData(porfileInfo);
			}
		});
	},
	data: () => ({
		propio: false,
		usuario: {
			id: "nn",
			nickname: "nn",
			nombre: "nn",
			apellido: "nn",
			correo: "nn@nn",
			edad: "18",
			imagenPerfil: "../assets/default.png",
			profesion: "profesion prueba",
			habilidades: ['Be cool'],
			nivelRecomentdacion: "",
			lugar: "Lugar Default",
			fechaSuscripcion: "12/31/2000 ",
			descripcion: "Descripcion prueba",
			cuentas: [
				{
					redSocial: "Facebook",
					usuario: "",
				},
				{
					redSocial: "Instagram",
					usuario: "",
				},
				{
					redSocial: "Github",
					usuario: "",
				},
				{
					redSocial: "X",
					usuario: "",
				},
			]
		},
		gigs: [
			{
				idx: "res1",
				ida: "#res1",
				titulo: "GIGS 1",
				portada: "../assets/charmander.jpg",
				imagenes: [
				],
				fotoUsuario: "../assets/default.png",
				nombreUsuario: "Andres Leguizamon",
				calificacion: "★★★★★",
				costo: 0,
				accion: "Editar",
				estado: false,
			},
		]
	}),
	methods: {
		getRecomendacion(temp) {
			if (temp == 5) {
				return "★★★★★";
			}
			else if (temp == 4) {
				return "★★★★☆";
			}
			else if (temp == 3) {
				return "★★★☆☆";
			}
			else if (temp == 2) {
				return "★★☆☆☆";
			}
			else if (temp == 1) {
				return "★☆☆☆☆";
			}
			else if(temp == 0){
				return "☆☆☆☆☆";
			}else{
				return "No definido";
			}
		},
		pasarData(porfileInfo) {
			this.usuario.nickname = porfileInfo.nickname;
			this.usuario.nombre = porfileInfo.names;
			this.usuario.apellido = porfileInfo.lastNames;
			this.usuario.correo = porfileInfo.email;
			this.usuario.edad = porfileInfo.birdDate;
			this.usuario.imagenPerfil = porfileInfo.profileImage;
			//this.usuario.profesion = porfileInfo.profession;
			//this.usuario.habilidades = porfileInfo.habilidades;
			this.usuario.nivelRecomentdacion = this.getRecomendacion(porfileInfo.nivelRecomentdacion)
			//this.usuario.lugar = porfileInfo.lugar;
			//this.usuario.fechaSuscripcion = porfileInfo.fechaSuscripcion;
			//this.usuario.descripcion = porfileInfo.descripcion;
			//this.usuario.cuentas = porfileInfo.cuentas;
			this.propio = true;
		},
		cantidadGigs() {
			return this.gigs.length;
		},
	},
}
</script>
