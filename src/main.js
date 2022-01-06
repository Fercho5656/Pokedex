import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/index'

store.actions.setTheme(localStorage.getItem('theme') || 'light')

createApp(App).use(router).mount('#app')


