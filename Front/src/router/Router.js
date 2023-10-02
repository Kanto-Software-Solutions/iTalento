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
	/*
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import('../views/AboutView.vue'),
	},
	{
		path: '/posts',
		name: 'posts',
		component: () => import('../views/PostsView.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('../views/ProfileView.vue'),
	},

	{
		path: '/pago',
		name: 'pago',
		component: () => import('../views/TermsPago.vue'),
	},
	{
		path: '/privacidad',
		name: 'privacidad',
		component: () => import('../views/TermsPrivacidad.vue'),
	},
	{
		path: '/qa',
		name: 'qa',
		component: () => import('../views/QA.vue'),
	}*/
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
