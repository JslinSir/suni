import { App } from 'vue'
import Notification from './notification'
import './style/style.scss'

const install = (app: App) => {
	app.config.globalProperties.$notify = Notification
}

export default { install }
