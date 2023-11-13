<template>
	<div class="position-relative">
		<div class="overflow-hidden">
			<img src="../assets/img/Fondo2.jpg" class="position-absolute z-n1 w-100 h-100 object-fit-cover opacity-25"
				alt="fondo">
		</div>
		<div class="container-xl">
			<div class="row">
				<div class="col-sm col m-1 align-self-center d-flex justify-content-center">
					<div>
						<p class="text-justify fs-1 fw-bold">
							¿Como Funciona?
						</p>
						<p class="text-justify fs-3 fw-light">
							Italento ofrece dos roles, un rol de Freelancer y de comprador.
							Como comprador te da la posibilidad de comprar gigs ofrecidos por los freelancers.
							Como freelancer puedes crear gigs para obtener ingresos extra.
						</p>
					</div>
				</div>
				<div class="col-sm h-100 align-self-end">
					<div class="row d-none d-md-block" style="min-height: 75vh">
						<!--Comodin de altura-->
					</div>
				</div>
			</div>
		</div>

	</div>
	<div class="container-xl">
		<ul class="nav border-bottom justify-content-center fs-3" id="myTab" role="usuarioTablist">
			<li class="nav-item" role="presentation">
				<button class="nav-link text-dark-emphasis active" data-bs-toggle="tab" data-bs-target="#comoAnuncia"
					type="button" role="tab" aria-controls="comoAnuncia" aria-selected="true">
					Anuncia
				</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link text-dark-emphasis" data-bs-toggle="tab" data-bs-target="#comoContacta"
					type="button" role="tab" aria-controls="comoContacta" aria-selected="false">Contacta</button>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link text-dark-emphasis " data-bs-toggle="tab" data-bs-target="#comoColabora"
					type="button" role="tab" aria-controls="comoColabora" aria-selected="false">Colabora</button>
			</li>
		</ul>
		<div class="tab-content" id="usuarioTabs">
			<div class="tab-pane fade show active" id="comoAnuncia" role="tabpanel" aria-labelledby="comoAnuncia">
				<div class="row m-1">
					<div class="col-sm p-2 overflow-hidden">
						<img src="../assets/img/anuncia.jpg" alt="anuncia" class="rounded-4 w-100 h-100 object-fit-cover">
					</div>
					<div class="col-sm p-2 align-self-center">
						<p class="text-Justify fs-2">
							¡Anuncia los trabajos que quieras!
						</p>
						<p class="text-justify fs-4 fw-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi alias ipsam non pariatur
							natus libero exercitationem officia eos et sunt, sapiente unde quisquam, dolorem illo corrupti
							nulla quibusdam! Dignissimos.
						</p>
						<router-link class="btn router-link w-100" type="button" to="/buscar" style="background-color: rgba(58, 58, 58, 0.4);">
							Busca Talento
						</router-link>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="comoContacta" role="tabpanel" aria-labelledby="comoContacta">
				<div class="row m-1">
					<div class="col-sm p-2 align-self-center">
						<p class="text-Justify fs-2">
							Habla con los mejores talentos disponibles
						</p>
						<p class="text-justify fs-4 fw-light">
							Italento ofrece los mejores talentos disponibles en la categoria.
							Ofrecemos talentos de calidad, para que obtengas lo mejor por lo que pagas.
						</p>

					</div>
					<div class="col-sm p-2 overflow-hidden">
						<img src="../assets/img/contacta.jpg" alt="contacta" class="rounded-4 w-100 h-100 object-fit-cover">
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="comoColabora" role="tabpanel" aria-labelledby="comoColabora">
				<div class="row m-1">
					<div class="col-sm p-2 overflow-hidden">
						<img src="../assets/img/colabora.jpg" alt="colabora" class="rounded-4 w-100 h-100 object-fit-cover">
					</div>
					<div class="col-sm p-2 align-self-center">
						<p class="text-Justify fs-2">
							Presta tu servicios a quien lo requiera
						</p>
						<p class="text-justify fs-4 fw-light">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi alias ipsam non pariatur
							natus libero exercitationem officia eos et sunt, sapiente unde quisquam, dolorem illo corrupti
							nulla quibusdam! Dignissimos.
						</p>
						<router-link class="btn router-link w-100" type="button" to="/registro" style="background-color: rgba(58, 58, 58, 0.4);">
								Registrate
							</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style lang="">
	
</style>