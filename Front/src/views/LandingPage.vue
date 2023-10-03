<template>
	<div id="LandingMain" class="position-relative">
		<div class="overflow-hidden">
			<img src="../assets/img/FondoLanding.png" class="position-absolute z-n1 w-100 h-100 object-fit-cover"
				alt="fondo">
		</div>
		<div class="row m-2">
			<div class="col-sm col m-1 align-self-center d-flex justify-content-center">
				<div class="" style="width: 75%;">
					<p class="text-justify fs-1 fw-bold" style="color: rgb(199, 199, 199)">
						No te preocupes, en i-Talento
						tenemos lo que buscas para tus proyectos personales o tu empresa.
					</p>
					<p class="text-Justify fs-1 fw-bold" style="color: rgb(199, 199, 199)">
						Da un paso adelante y busca eso que necesitas.
					</p>
					<ul class="text-body">
						<li style="color: rgb(199, 199, 199)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li style="color: rgb(199, 199, 199)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li style="color: rgb(199, 199, 199)">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
					</ul>
				</div>
			</div>
			<div class="col-sm h-100 align-self-end">
				<div class="row d-none d-md-block" style="min-height: 75vh">
					<!--Comodin de altura-->
				</div>
				<div class="row mx-auto my-5" style="width: 60%;">
					<button class="btn" type="button"
						style="background-color: rgba(58, 58, 58, 0.4); color: rgb(199, 199, 199);">
						Busca Talento
					</button>
				</div>
			</div>
		</div>
	</div>
	<div id="LandingPrincipales">
		<div class="card border-0 m-0 rounded-0">
			<div class="card-header border-0 m-0 rounded-0">
				<h3 class="">Principales Categorias</h3>
			</div>
			<div class="overflow-x-scroll">
				<div class="card-body row" style="width: max-content;">
					<div class="col" v-for="(item, i) in elements" :key="i">
						<div class="col">
							<CardCategoria :id=item.id :titulo=item.name :contenido=item.contenido :imagen=item.imagen>
							</CardCategoria>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="../assets/img/bullbasur.jpg" class="d-block" alt="...">
				</div>
				<div class="carousel-item">
					<img src="../assets/img/charmander.jpg" class="d-block" alt="...">
				</div>
				<div class="carousel-item">
					<img src="../assets/img/bullbasur.jpg" class="d-block" alt="...">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import CardCategoria from '@/components/CardCategorias.vue'
export default {
	name: 'LandingPage',
	components: {
		CardCategoria,
	},
	data: () => ({
		elements: [
			{ name: "Categoria 1", id: 1, contenido: "Lorem ipsum es texto de reyeno 1", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 2", id: 2, contenido: "Lorem ipsum es texto de reyeno 2", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 3", id: 3, contenido: "Lorem ipsum es texto de reyeno 3", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 4", id: 4, contenido: "Lorem ipsum es texto de reyeno 4", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 5", id: 5, contenido: "Lorem ipsum es texto de reyeno 5", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 6", id: 6, contenido: "Lorem ipsum es texto de reyeno 6", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 7", id: 7, contenido: "Lorem ipsum es texto de reyeno 7", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
			{ name: "Categoria 8", id: 8, contenido: "Lorem ipsum es texto de reyeno 8", imagen: "https://s1.significados.com/foto/tecnologia-dura-fa.jpg" },
		],
	}),
}
</script>