import { createApp } from 'vue'
import { router } from './router'

import './scss/style.scss'
import './scss/utils.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')
