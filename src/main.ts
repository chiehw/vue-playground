import { createApp } from 'vue'
import "./style/index.css"; //在此引入
import App from './App.vue'
import router from './router/index'

const app = createApp(App);

app.use(router)
app.mount('#app')
