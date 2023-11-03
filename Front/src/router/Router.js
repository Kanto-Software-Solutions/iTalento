import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/registro',
		name: 'registro',
		component: () => import('../views/Registro.vue'),
	},
	{
		path: '/TyC',
		name: 'terminos',
		component: () => import('../views/TerminosYCondiciones.vue'),
	},
	{
		path: '/',
		name: 'home',
		component: () =>
		import('../views/LandingPage.vue'),
	},
	{
		path: '/aboutUs',
		name: 'about',
		component: () =>
			import('../views/AboutUs.vue'),
	},
	{
		path: '/buscar',
		name: 'buscar',
		component: () => import('../views/BusquedaServicios.vue'),
	},
	{
		path: '/perfil',
		name: 'perfil',
		component: () => import('../views/PerfilUsuario.vue'),
	},
	{
		path: '/costostarifas',
		name: 'costosytarifas',
		component: () => import('../views/Costosytarifas.vue'),
	},
	{
		path: '/funcionamiento',
		name: 'funcionamiento',
		component: () => import('../views/ComoFunciona.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('../views/Blog.vue'),
	},
	{
		path: '/proximamente',
		name: 'proximanente',
		component: () => import('../views/Proximamente.vue'),
	},
	{
		path: '/error/:code',
		name: 'error',
		component: () => import('../views/Error.vue'),
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import('../views/Error.vue'),
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
