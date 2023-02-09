import { createApp } from 'vue'
import store from "./store"
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import './assets/main.css'

const app = createApp(App)
app.use(VueLazyload)
app.use(store)
app.use(router)

app.mount('#app')
