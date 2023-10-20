<template>
	<div id="busquedaPrincipales" class="container-xl d-none d-md-block">
		<div class="row justify-content-center">
			<div class="row" style="width: max-content;">
				<div class="col" v-for="(item, i) in categorias">
					<botonBusqueda :nombre=item.name />
				</div>
			</div>
		</div>
	</div>
	<div id="busquedaTitulo" class="container-xl">
		<div class="text-center m-5">
			<h1>«/»</h1>
		</div>
	</div>
	<div id="busquedaFiltro" class="container-fluid bg-body-secondary p-1">
		<form>
			<div class="row g-1 m-1">
				<div class="col-md">
					<div class="row g-1">
						<div class="col-sm">
							<select class="form-select" aria-label="Categoria">
								<option selected class="text-center" value="-1">Categoria</option>
								<option v-for="(item, i) in categorias" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select class="form-select" aria-label="Calificacion">
								<option selected class="text-center" value="-1">Calificacion</option>
								<option v-for="(item, i) in calificacion" class="text-center" :value=item.id>
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-sm">
							<select class="form-select" aria-label="Precio">
								<option selected class="text-center" value="-1">Precio</option>
								<option v-for="(item, i) in precios" class="text-center" :value=item.id>
									$ {{ item.name }}
								</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md d-flex">
					<input class="form-control me-1" type="search" placeholder="¿Que trabajo necesitas hoy?">
					<router-link class="router-link btn btn-outline-secondary" to="/buscar">
						<i class="bi bi-search"></i>
					</router-link>
				</div>
			</div>
		</form>
	</div>
	<div id="busquedaResultado" class="container-xl">
		<div class="row g-0 m-1 overflow-visible justify-content-center">
			<fichaGig class="col" v-for="g in gigs" :id=g.id :ida=g.ida :titulo=g.titulo :img1=g.img1
				:img2=g.img2 :img3=g.img3 :fotoUsuario=g.fotoUsuario :nombreUsuario=g.nombreUsuario
				:calificacion=g.calificacion :costo=g.costo accion="Mirar"/>
		</div>
	</div>
</template>
<script>
import botonBusqueda from '@/components/BotonBusqueda.vue';
import fichaGig from '@/components/FichaGigs.vue'
export default {
	name: 'BusquedaServicios',
	components: {
		botonBusqueda,
		fichaGig,
	},
	data: () => ({
		categorias: [
			{ name: "Categoria 1", id: 1, contenido: "Lorem ipsum es texto de reyeno 1", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 2", id: 2, contenido: "Lorem ipsum es texto de reyeno 2", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 3", id: 3, contenido: "Lorem ipsum es texto de reyeno 3", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 4", id: 4, contenido: "Lorem ipsum es texto de reyeno 4", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 5", id: 5, contenido: "Lorem ipsum es texto de reyeno 5", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
		],
		precios: [
			{ name: "Sin costo", id: 0 },
			{ name: "100.000", id: 100 },
			{ name: "200.000", id: 200 },
			{ name: "300.000", id: 300 },
			{ name: "400.000", id: 400 },
			{ name: "500.000", id: 500 },
			{ name: "600.000", id: 600 },
			{ name: "700.000", id: 700 },
			{ name: "800.000", id: 800 },
			{ name: "900.000 o mas", id: 900 },
		],
		calificacion: [
			{ name: "★", id: 1 },
			{ name: "★★", id: 2 },
			{ name: "★★★", id: 3 },
			{ name: "★★★★", id: 4 },
			{ name: "★★★★★", id: 5 },
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
			{
				id: "res11",
				ida: "#res11",
				titulo: "Taller de Pintura en Acuarela",
				img1: "https://img.freepik.com/foto-gratis/creativa-pintora-pintando-imagen_23-2149243994.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/creativa-pintora-pintando-imagen_23-2149243994.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/creativa-pintora-pintando-imagen_23-2149243994.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Jorge González",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res12",
				ida: "#res12",
				titulo: "Clases de Baile Latino",
				img1: "https://img.freepik.com/foto-gratis/personas-bailando-fiesta_23-2149278955.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/personas-bailando-fiesta_23-2149278955.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/personas-bailando-fiesta_23-2149278955.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Miguel Sánchez",
				calificacion: "★★★★★",
				costo: 90000
			},
			{
				id: "res13",
				ida: "#res13",
				titulo: "Taller de Fotografía de Naturaleza",
				img1: "https://img.freepik.com/foto-gratis/fotografo-naturaleza_23-2148872270.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/fotografo-naturaleza_23-2148872270.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/fotografo-naturaleza_23-2148872270.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Isabel Martínez",
				calificacion: "★★★★☆",
				costo: 80000
			},
			{
				id: "res14",
				ida: "#res14",
				titulo: "Concierto de Jazz en Vivo",
				img1: "https://img.freepik.com/foto-gratis/musico-tocando-saxofon_23-2148736926.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/musico-tocando-saxofon_23-2148736926.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/musico-tocando-saxofon_23-2148736926.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Luis Rodríguez",
				calificacion: "★★★★★",
				costo: 85000
			},
			{
				id: "res15",
				ida: "#res15",
				titulo: "Clases de Cocina Italiana",
				img1: "https://img.freepik.com/foto-gratis/persona-preparando-masa-pasta-fresca_23-2149258707.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/persona-preparando-masa-pasta-fresca_23-2149258707.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/persona-preparando-masa-pasta-fresca_23-2149258707.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Carolina López",
				calificacion: "★★★★☆",
				costo: 70000
			},
			{
				id: "res16",
				ida: "#res16",
				titulo: "Taller de Escritura Creativa",
				img1: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Ana Martínez",
				calificacion: "★★★★★",
				costo: 65000
			},
			{
				id: "res17",
				ida: "#res17",
				titulo: "Concierto de Rock en Vivo",
				img1: "https://img.freepik.com/foto-gratis/musicos-tocando-sus-instrumentos_23-2148831529.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/musicos-tocando-sus-instrumentos_23-2148831529.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/musicos-tocando-sus-instrumentos_23-2148831529.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Javier Sánchez",
				calificacion: "★★★★☆",
				costo: 90000
			},
			{
				id: "res18",
				ida: "#res18",
				titulo: "Taller de Fotografía de Viajes",
				img1: "https://img.freepik.com/foto-gratis/fotografo-viajero-mira-paisaje_23-2148758056.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/fotografo-viajero-mira-paisaje_23-2148758056.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/fotografo-viajero-mira-paisaje_23-2148758056.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Laura González",
				calificacion: "★★★★★",
				costo: 85000
			},
			{
				id: "res19",
				ida: "#res19",
				titulo: "Clases de Danza Contemporánea",
				img1: "https://img.freepik.com/foto-gratis/bailarina-danza-contemporanea_23-2148951331.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/bailarina-danza-contemporanea_23-2148951331.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/bailarina-danza-contemporanea_23-2148951331.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Daniel Martínez",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res20",
				ida: "#res20",
				titulo: "Clases de Fotografía de Paisajes",
				img1: "https://img.freepik.com/foto-gratis/fotografo-haciendo-fotos-naturaleza_23-2148874874.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/fotografo-haciendo-fotos-naturaleza_23-2148874874.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/fotografo-haciendo-fotos-naturaleza_23-2148874874.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "María Rodríguez",
				calificacion: "★★★★☆",
				costo: 80000
			},
			{
				id: "res21",
				ida: "#res21",
				titulo: "Concierto de Música Clásica",
				img1: "https://img.freepik.com/foto-gratis/musicos-tocando-violin-violoncello_23-2148811389.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/musicos-tocando-violin-violoncello_23-2148811389.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/musicos-tocando-violin-violoncello_23-2148811389.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Juan Sánchez",
				calificacion: "★★★★★",
				costo: 90000
			},
			{
				id: "res22",
				ida: "#res22",
				titulo: "Taller de Escultura en Metal",
				img1: "https://img.freepik.com/foto-gratis/escultor-trabajando-taller_1098-20218.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/escultor-trabajando-taller_1098-20218.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/escultor-trabajando-taller_1098-20218.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Lucía Martínez",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res23",
				ida: "#res23",
				titulo: "Clases de Baile Hip-Hop",
				img1: "https://img.freepik.com/foto-gratis/bailarina-danza-hip-hop-estudio_7502-8412.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/bailarina-danza-hip-hop-estudio_7502-8412.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/bailarina-danza-hip-hop-estudio_7502-8412.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Pedro González",
				calificacion: "★★★★★",
				costo: 85000
			},
			{
				id: "res24",
				ida: "#res24",
				titulo: "Curso de Diseño Gráfico",
				img1: "https://img.freepik.com/foto-gratis/disenadora-grafica-trabajando-mesa-dibujo_186202-4375.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/disenadora-grafica-trabajando-mesa-dibujo_186202-4375.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/disenadora-grafica-trabajando-mesa-dibujo_186202-4375.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Alejandra Pérez",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res25",
				ida: "#res25",
				titulo: "Concierto de Pop en Vivo",
				img1: "https://img.freepik.com/foto-gratis/musicos-tocando-guitarra-electrica-bateria_7502-8413.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/musicos-tocando-guitarra-electrica-bateria_7502-8413.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/musicos-tocando-guitarra-electrica-bateria_7502-8413.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Raúl Rodríguez",
				calificacion: "★★★★★",
				costo: 95000
			},
			{
				id: "res26",
				ida: "#res26",
				titulo: "Clases de Cocina Mexicana",
				img1: "https://img.freepik.com/foto-gratis/persona-cocinando-platos-mexicanos_144627-19447.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/persona-cocinando-platos-mexicanos_144627-19447.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/persona-cocinando-platos-mexicanos_144627-19447.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Sofía González",
				calificacion: "★★★★☆",
				costo: 80000
			},
			{
				id: "res27",
				ida: "#res27",
				titulo: "Taller de Escritura de Ciencia Ficción",
				img1: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/hombre-escribiendo-cuaderno_23-2148864793.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Andrés Sánchez",
				calificacion: "★★★★★",
				costo: 70000
			},
			{
				id: "res28",
				ida: "#res28",
				titulo: "Clases de Fotografía de Moda",
				img1: "https://img.freepik.com/foto-gratis/fotografo-camarografo-trabajando-fotografa-maquilladora_7502-9446.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/fotografo-camarografo-trabajando-fotografa-maquilladora_7502-9446.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/fotografo-camarografo-trabajando-fotografa-maquilladora_7502-9446.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Ana Pérez",
				calificacion: "★★★★☆",
				costo: 75000
			},
			{
				id: "res29",
				ida: "#res29",
				titulo: "Concierto de Reggae en Vivo",
				img1: "https://img.freepik.com/foto-gratis/bandas-musicales-tocando-musica-vivo_23-2148844126.jpg?w=1380",
				img2: "https://img.freepik.com/foto-gratis/bandas-musicales-tocando-musica-vivo_23-2148844126.jpg?w=1380",
				img3: "https://img.freepik.com/foto-gratis/bandas-musicales-tocando-musica-vivo_23-2148844126.jpg?w=1380",
				fotoUsuario: "./assets/FondoLanding.png",
				nombreUsuario: "Pablo Martínez",
				calificacion: "★★★★★",
				costo: 85000
			},
		]
	}),
}
</script>
<style></style>