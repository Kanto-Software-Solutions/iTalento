<template>
	<div>
		<div class="container">
			<h5 class="text-center">Selecciona hasta {{ selCantidad }} {{ catohab }}</h5>
			<div class="d-flex justify-content-between w-100" role="search">
				<input :id=idx class="form-control m-1" type="search" placeholder="Buscar habilidad" v-on:keyup=buscarHab()
					v-on:click=buscarHab()>
			</div>
			<div :id=this.idy
				class="row justify-content-center align-content-start container overflow-y-auto overflow-x-hidden"
				style="height: 300px;">
				<button v-for="habilidad in habilidades" type="button" class="bhabilidad btn bg-body-secondary m-1"
					data-bs-toggle="button" style="width: max-content; height: max-content;" :value=habilidad.id
					v-on:click=agregarHabilidad()>
					{{ habilidad.nombre }}
				</button>
			</div>
			<div v-if=excesoHabilidades>
				<div class="alert alert-danger my-2" role="alert">
					No puedes seleccionar mas de {{ selCantidad }} {{ catohab }}
				</div>
			</div>
			<div v-if=completasHabilidades>
				<div class="alert alert-info my-2" role="alert">
					¡{{ selCantidad }} {{ catohab }} seleccionadas!
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-sm m-1">
						<button id="limpiarHabilidades" class="btn btn-outline-info text-nowrap w-100" type="button"
							v-on:click=limpiarHabilidades()>
							{{ habilidadesSeleccionadas.length }}
							<i class="bi bi-x-circle"></i>
						</button>
					</div>
					<div v-if=esmodal class="col-sm m-1">
						<button type="button" class="w-100 btn btn-outline-primary text-nowrap" data-bs-dismiss="modal">
							Guardar
							<i class="bi bi-save"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		filtro: "",
		completasHabilidades: false,
		excesoHabilidades: false,
		habilidadesSeleccionadas: [],
		habilidades: [
			{
				id: 1,
				nombre: "Diseño gráfico"
			},
			{
				id: 2,
				nombre: "Desarrollo web"
			},
			{
				id: 3,
				nombre: "Redacción de contenido"
			},
			{
				id: 4,
				nombre: "Traducción"
			},
			{
				id: 5,
				nombre: "Marketing digital"
			},
			{
				id: 6,
				nombre: "Programación"
			},
			{
				id: 7,
				nombre: "Diseño de logotipos"
			},
			{
				id: 8,
				nombre: "Edición de video"
			},
			{
				id: 9,
				nombre: "Gestión de redes sociales"
			},
			{
				id: 10,
				nombre: "Optimización de SEO"
			},
			{
				id: 11,
				nombre: "Fotografía"
			},
			{
				id: 12,
				nombre: "Diseño de sitios web"
			},
			{
				id: 13,
				nombre: "Diseño de aplicaciones móviles"
			},
			{
				id: 14,
				nombre: "Ilustración"
			},
			{
				id: 15,
				nombre: "Animación"
			},
			{
				id: 16,
				nombre: "Escritura técnica"
			},
			{
				id: 17,
				nombre: "Redacción de blogs"
			},
			{
				id: 18,
				nombre: "Consultoría de negocios"
			},
			{
				id: 19,
				nombre: "Diseño de interiores"
			},
			{
				id: 20,
				nombre: "Servicios de asistencia virtual"
			},
			{
				id: 21,
				nombre: "Desarrollo de software"
			},
			{
				id: 22,
				nombre: "Diseño de folletos"
			},
			{
				id: 23,
				nombre: "Servicios de voz en off"
			},
			{
				id: 24,
				nombre: "Redacción técnica"
			},
			{
				id: 25,
				nombre: "Diseño de brochures"
			},
			{
				id: 26,
				nombre: "Producción de video"
			},
			{
				id: 27,
				nombre: "Optimización de sitios web"
			},
			{
				id: 28,
				nombre: "Escritura creativa"
			},
			{
				id: 29,
				nombre: "Desarrollo de aplicaciones móviles"
			},
			{
				id: 30,
				nombre: "Redacción de contratos"
			},
			{
				id: 31,
				nombre: "Diseño de personajes"
			},
			{
				id: 32,
				nombre: "Servicios de soporte al cliente"
			},
			{
				id: 33,
				nombre: "Fotografía de producto"
			},
			{
				id: 34,
				nombre: "Programación en Python"
			},
			{
				id: 35,
				nombre: "Redacción académica"
			},
			{
				id: 36,
				nombre: "Diseño de packaging"
			},
			{
				id: 37,
				nombre: "Diseño de jardines"
			},
			{
				id: 38,
				nombre: "Optimización de medios sociales"
			},
			{
				id: 39,
				nombre: "Edición de podcast"
			},
			{
				id: 40,
				nombre: "Escritura de guiones"
			}
		]
	}),
	props: {
		idy: {
			type: String,
			default: "listadoHab"
		},
		idx: {
			type: String,
			default: "buscarHabilidades"
		},
		esmodal: {
			type: Boolean,
			default: true
		},
		catohab: {
			type: String,
			default: "habilidades"
		},
		selCantidad: {
			type: Number,
			default: 7
		}
	},
	methods: {
		eliminarDiacriticosEs(texto) {
			return texto
				.normalize('NFD')
				.replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
				.normalize();
		},
		todovisible() {
			const habilidadesBotones = document.getElementById(this.idy).getElementsByClassName("bhabilidad")
			for (let i = 0; i < habilidadesBotones.length; i++) {
				habilidadesBotones[i].style.display = ""
			}
			document.getElementById('buscarHabilidades').value = ""
		},
		obtenerValor() {
			this.filtro = this.eliminarDiacriticosEs(document.getElementById(this.idx).value.toUpperCase())
		},
		buscarHab() {
			this.obtenerValor()
			const habilidadesBotones = document.getElementById(this.idy).getElementsByClassName("bhabilidad")
			for (let i = 0; i < habilidadesBotones.length; i++) {
				const habilidad = this.eliminarDiacriticosEs(habilidadesBotones[i].innerHTML)
				if (habilidad.toUpperCase().indexOf(this.filtro) > -1) {
					habilidadesBotones[i].style.display = ""
				} else {
					habilidadesBotones[i].style.display = "none"
				}
			}
		},
		agregarHabilidad() {
			const a = parseInt(event.target.value)
			this.habilidadesSeleccionadas.includes(a)
			if (this.habilidadesSeleccionadas.includes(a)) {
				this.excesoHabilidades = false
				this.habilidadesSeleccionadas.splice(this.habilidadesSeleccionadas.indexOf(a), 1)
			} else if (this.habilidadesSeleccionadas.length < this.selCantidad) {
				this.excesoHabilidades = false
				this.habilidadesSeleccionadas.push(a)
			} else {
				this.excesoHabilidades = true
				event.target.classList.remove('active')
			}
			if (this.habilidadesSeleccionadas.length == this.selCantidad) {
				this.completasHabilidades = true
			} else {
				this.completasHabilidades = false
			}

		},
		limpiarHabilidades() {
			document.querySelectorAll('.bhabilidad').forEach(buttonElement => {
				const button = bootstrap.Button.getOrCreateInstance(buttonElement)
				if (buttonElement.classList.contains('active')) {
					button.toggle()
				}
			})
			this.habilidadesSeleccionadas = [];
			this.completasHabilidades = false
			this.todovisible()
		}
	},


}
</script>
<style ></style>