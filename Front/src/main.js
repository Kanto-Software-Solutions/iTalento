import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-light-indigo/theme.css'

import router from './router/Router'

// Create a Vue 3 app instance
const app = createApp(App).use(router).use(PrimeVue);

// Mount the app to the DOM
app.mount('#app');