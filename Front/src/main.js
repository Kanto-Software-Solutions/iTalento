import { createApp } from 'vue'

import App from './App.vue'
import router from './router/Router'

// Create a Vue 3 app instance
const app = createApp(App)

app.use(router)
app.mount('#app');