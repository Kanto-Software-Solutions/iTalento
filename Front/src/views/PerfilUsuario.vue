<template>
	<div class="container-xl">
		<div class="row">
			<usuario id="usuarioFicha" class="col-md-4" :id="usuario[0].id" :nickname="usuario[0].nickname"
				:nombre="usuario[0].nombre" :apellido="usuario[0].apellido" :correo="usuario[0].correo"
				:edad="usuario[0].edad" :imagenPerfil="usuario[0].imagenPerfil" :habilidades="usuario[0].habilidades"
				:nivelRecomentdacion="usuario[0].nivelRecomentdacion" :lugar="usuario[0].lugar"
				:fechaSuscripcion="usuario[0].fechaSuscripcion" :profesion="usuario[0].profesion" :cuentas="usuario[0].cuentas"></usuario>
			<div id="usuarioInfo" class="col-md">
				<div id="gigsUsuario" class="">
					<div class="row g-0 m-1 overflow-visible justify-content-center">
						<fichaGig class="col" v-for="g in gigs" :id=g.id :ida=g.ida :titulo=g.titulo :img1=g.img1
							:img2=g.img2 :img3=g.img3 :fotoUsuario=g.fotoUsuario :nombreUsuario=g.nombreUsuario
							:calificacion=g.calificacion :costo=g.costo accion="Mirar" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import usuario from '@/components/FichaUsuario.vue';
import fichaGig from '@/components/FichaGigs.vue';
export default {
	name: 'PerfilUsuario',
	components: {
		usuario,
		fichaGig,
	},
	data: () => ({
		usuario: [{
			id: "user123",
			nickname: "leoleguizamon97",
			nombre: "Andres",
			apellido: "Leguizamón",
			correo: "johndoe@example.com",
			edad: "30",
			imagenPerfil: "./assets/Andres.jpeg",
			profesion: "Ingeniero de Sistemas",
			habilidades: ["Fotografía", "Diseño Gráfico", "Programación", "Cocina","Ser guapo"],
			nivelRecomentdacion: "★★★★★",
			lugar: "Bogotá D.C. Colombia",
			fechaSuscripcion: "2023-10-18",
			cuentas: [
				{
					redSocial: "Twitter",
					usuario: "@johndoe88"
				},
				{
					redSocial: "Instagram",
					usuario: "@johndoe_photos"
				}
			]
		}
		],
		gigs: [
			{
				id: "res1",
				ida: "#res1",
				titulo: "GIGS 1",
				img1: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				img2: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				img3: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				fotoUsuario: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				nombreUsuario: "Andres Leguizamon",
				calificacion: "★★★★★",
				costo: 100000
			},
			{
				id: "res2",
				ida: "#res2",
				titulo: "Concierto de Rock",
				img1: "https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
				fotoUsuario: "https://img.freepik.com/foto-gratis/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
				nombreUsuario: "María González",
				calificacion: "★★★★☆",
				costo: 85000
			},
			{
				id: "res5",
				ida: "#res5",
				titulo: "Taller de Diseño Web",
				img1: "https://img.freepik.com/foto-gratis/ingenieros-ambientales-trabajando-juntos_23-2149352243.jpg?w=1380&t=st=1697665823~exp=1697666423~hmac=715d1804d7ef1f3ee8e54db8f159a54b15e093f9e4d08e34704b75d2f4b4507e",
				img2: "https://img.freepik.com/fotos-premium/persona-cuidando-coche-electrico_23-2149362839.jpg?w=1380",
				img3: "https://img.freepik.com/fotos-premium/trabajador-creando-valla-cerca-chispas-naranjas-herreria_7502-9147.jpg?w=1380",
				fotoUsuario: "https://img.freepik.com/foto-gratis/persona-trabajando-html-computadora_23-2150038860.jpg?w=1060&t=st=1697665831~exp=1697666431~hmac=a3cb0890cacff37192eb1cdc7e23a1a100b0847c8fe72946ee120cc1fdede973",
				nombreUsuario: "Julia Sánchez",
				calificacion: "★★★★☆",
				costo: 95000
			},
			{
				id: "res6",
				ida: "#res6",
				titulo: "Curso de Programación",
				img1: "https://img.freepik.com/foto-gratis/sistema-html-concepto-sitio-web_23-2150376750.jpg?w=1380&t=st=1697665838~exp=1697666438~hmac=a491bf69ed140f9402c35924b786a440c92dbbf2a6dc3708ef8acf2580374ae2",
				img2: "https://img.freepik.com/foto-gratis/empresario-sosteniendo-exito-tableta-digital-paisaje-urbano-generado-ai_188544-22431.jpg?w=1380&t=st=1697665840~exp=1697666440~hmac=6f00eed0733f6b73f3159443a19099fac51ac4f7d51f2a563c4d986cac90851f",
				img3: "https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?w=1380&t=st=1697665850~exp=1697666450~hmac=8ac9c699897ad36cbb7a1e80a6a3926b0189c026ec6e24f112dc4716413cc0ae",
				fotoUsuario: "https://img.freepik.com/foto-gratis/concepto-diseno-web-dibujos_1134-77.jpg?w=1380&t=st=1697665853~exp=1697666453~hmac=3bb2a522d6a3e4ee3b224cb4178c03247fbc9b1a9208f70a22a9038856f76af4",
				nombreUsuario: "Carlos Pérez",
				calificacion: "★★★☆☆",
				costo: 80000
			},
			{
				id: "res7",
				ida: "#res7",
				titulo: "Taller de Fotografía",
				img1: "https://img.freepik.com/foto-gratis/especialista-ti-revisando-codigo-computadora-oscura-oficina-noche_1098-18699.jpg?w=1380&t=st=1697665858~exp=1697666458~hmac=d734c144c3694da222d8f1d16bb9a3793f1be350fa66aba15e85872fed5a7a6c",
				img2: "https://img.freepik.com/foto-gratis/novia-novio-celebrando-su-boda-playa_23-2149043965.jpg?w=740&t=st=1697665876~exp=1697666476~hmac=7765d2fa2577941aa7f53cf3f2f27600a72fa1744aa56e31a13e5853d4a9d759",
				img3: "https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Elena Rodríguez",
				calificacion: "★★★★★",
				costo: 110000
			},
			{
				id: "res8",
				ida: "#res8",
				titulo: "Taller de Escultura en Barro",
				img1: "https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4",
				img2: "https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4",
				img3: "https://img.freepik.com/foto-gratis/pareja-celebra-juntos-dia-san-valentin_53876-146056.jpg?w=740&t=st=1697665889~exp=1697666489~hmac=df3ea4dea88b0c062724b0b53014237bdb6dc273e66e3c7cb836c33441e80df4",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "David Martínez",
				calificacion: "★★★★☆",
				costo: 95000
			},
			{
				id: "res9",
				ida: "#res9",
				titulo: "Curso de Cocina Internacional",
				img1: "https://img.freepik.com/foto-gratis/empresario-sosteniendo-exito-tableta-digital-paisaje-urbano-generado-ai_188544-22431.jpg?w=1380&t=st=1697665840~exp=1697666440~hmac=6f00eed0733f6b73f3159443a19099fac51ac4f7d51f2a563c4d986cac90851f",
				img2: "https://img.freepik.com/foto-gratis/empresario-sosteniendo-exito-tableta-digital-paisaje-urbano-generado-ai_188544-22431.jpg?w=1380&t=st=1697665840~exp=1697666440~hmac=6f00eed0733f6b73f3159443a19099fac51ac4f7d51f2a563c4d986cac90851f",
				img3: "https://img.freepik.com/foto-gratis/empresario-sosteniendo-exito-tableta-digital-paisaje-urbano-generado-ai_188544-22431.jpg?w=1380&t=st=1697665840~exp=1697666440~hmac=6f00eed0733f6b73f3159443a19099fac51ac4f7d51f2a563c4d986cac90851f",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Ana López",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res10",
				ida: "#res10",
				titulo: "Clases de Yoga al Aire Libre",
				img1: "https://img.freepik.com/free-photo/full-shot-happy-woman-floor_23-2148877046.jpg?w=1380&t=st=1697672741~exp=1697673341~hmac=3773de773a0497fb8e9405bd84b0f986d9f65a80a487df4d65eb16399459b1de",
				img2: "https://img.freepik.com/free-photo/full-shot-happy-woman-floor_23-2148877046.jpg?w=1380&t=st=1697672741~exp=1697673341~hmac=3773de773a0497fb8e9405bd84b0f986d9f65a80a487df4d65eb16399459b1de",
				img3: "https://img.freepik.com/free-photo/full-shot-happy-woman-floor_23-2148877046.jpg?w=1380&t=st=1697672741~exp=1697673341~hmac=3773de773a0497fb8e9405bd84b0f986d9f65a80a487df4d65eb16399459b1de",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Laura Pérez",
				calificacion: "★★★★☆",
				costo: 50000
			},

		]
	}),
}
</script>
