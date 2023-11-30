<template>
	<div class="container-xl">
		<div class="row p-1">
			<usuario id="usuarioFicha" class="col-md-4" :usuario=usuario :propio=propio />
			<div id="usuarioInfo" class="col-md ms-1">
				<h4 class="text-center p-3 " id="usuarioTitulo">
					{{ usuario.names }} {{ usuario.lastNames }}
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
									¡{{ usuario.nickname }} no tiene gigs publicados!
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
						<h6>{{ usuario.names }} {{ usuario.lastNames }} - {{ usuario.job }}</h6>
						<p>{{ usuario.description }}</p>
						<h4>Contacto: </h4>
						<h6>{{ usuario.email }}</h6>
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
	<fgigs :usuario=usuario />
</template>
<script>
import usuario from '@/components/FichaUsuario.vue';
import fichaGig from '@/components/FichaGigs.vue';
import fgigs from '@/components/formularioGigs.vue';
import datos from '@/dataManagment.js';
import router from '@/router/Router.js';
export default {
	name: 'PerfilUsuario',
	components: {
		usuario,
		fichaGig,
		fgigs,
	},
	async created() {
		let nick = this.$route.params.nickname;
		await datos.getUsuario(nick).then((response) => {
			let porfileInfo = response[0];
			if (porfileInfo == undefined) {
				if (JSON.parse(localStorage.getItem('registrado')) == false) {
					router.push('/registro');
				} else {
					router.push('/error/Usuario no Encontrado');
				}
			} else {
				if (localStorage.getItem('sesion') == 'undefined') {
					this.propio = false;
				} else {
					this.propio = (porfileInfo.personalId == JSON.parse(localStorage.getItem('sesion')).sub.split('|')[1]);
				}
				this.usuario = porfileInfo;
				this.usuario.cuentas = [
					{ redSocial: "Twitter", usuario: "Usuario" },
					{ redSocial: "LinkedIn", usuario: "Usuario", },
					{ redSocial: "Github", usuario: "Usuario", },
					{ redSocial: "Facebook", usuario: "Usuario", },
					{ redSocial: "Instagram", usuario: "Usuario", },
				];
				this.usuario.habilidades = [
					{ nombre: "Habilidad 1", descripcion: "Descripcion de la habilidad 1", },
					{ nombre: "Habilidad 2", descripcion: "Descripcion de la habilidad 2", },
					{ nombre: "Habilidad 3", descripcion: "Descripcion de la habilidad 3", },
					{ nombre: "Habilidad 4", descripcion: "Descripcion de la habilidad 4", },
					{ nombre: "Habilidad 5", descripcion: "Descripcion de la habilidad 5", },
					{ nombre: "Habilidad 6", descripcion: "Descripcion de la habilidad 6", },
					{ nombre: "Habilidad 7", descripcion: "Descripcion de la habilidad 7", },
				];
			}
		});
		let idUser = JSON.parse(localStorage.getItem('sesion')).idUser;
		await this.retornarGigs(idUser);
	},
	data: () => ({
		propio: false,
		usuario: {
			acceptedTerms: "",
			birthDate: "",
			country: "",
			creationDate: "",
			description: "",
			email: "",
			idUser: "",
			isFreelancer: "",
			isVerified: "",
			job: "",
			lastNames: "",
			location: "",
			names: "",
			nickname: "",
			personalId: "",
			profileImage: "",
			recLevel: "",
		},
		gigs: [
			/*{
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
			},*/
		]
	}),
	methods: {
		cantidadGigs() {
			return this.gigs.length;
		},
		async retornarGigs(idUser) {
			await datos.getPublicacion(idUser).then((response) => {
				response.forEach(gig =>{
					this.gigs.push(gig);
				});
			});
		}
	},
}
</script>
