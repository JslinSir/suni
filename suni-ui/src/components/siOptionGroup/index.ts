import component from './index.vue'
import { App } from 'vue'
import './style.scss'

const install = (app: App) => {
	app.component('si-option-group', component)
}

export default { install }
