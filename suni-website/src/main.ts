import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Suni from 'suni-ui'
import ComponentExample from '@/components/ComponentExample.vue'

import 'normalize.css/normalize.css'
import 'boxicons/css/boxicons.css'
import 'suni-ui/lib/suni-ui.css'
import 'highlight.js/scss/atom-one-light.scss'
import './styles/index.scss'

import './permission'

const app = createApp(App)

app.use(router)
app.use(Suni)

app.component('ComponentExample', ComponentExample)

app.mount('#app')
