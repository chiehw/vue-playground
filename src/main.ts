import './assets/main.css'
import './assets/tailwindcss.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstete from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstete) // 持久化

app.use(pinia)
app.use(router)

app.mount('#app')
