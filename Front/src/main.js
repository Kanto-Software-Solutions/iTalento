import {Vue} from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

//import PrimeVue from 'primevue/config';
//import 'primevue/resources/themes/md-light-indigo/theme.css'
//.use(PrimeVue);

import router from './router/Router'

// Create a Vue 3 app instance
const app = createApp(App)

app.use(router)
app.mount('#app');