import { createApp } from 'vue'
import App from './App.vue'

import router from './router/Router'

// Create a Vue 3 app instance
const app = createApp(App).use(router);

// Mount the app to the DOM
app.mount('#app');