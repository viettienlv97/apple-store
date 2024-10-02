import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/scss/style.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'primeicons/primeicons.css'
import router from './router'

createApp(App).use(router).mount('#app')
