import component from './index.vue'
import { App } from 'vue'

const install = (app: App) => {
	app.component('si-checkbox-group', component)
}

export default { install }
