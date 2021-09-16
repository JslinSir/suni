import { App } from 'vue'
import Loading from './loading'
import vLoading from './directive'
import './style/style.scss'

const install = (app: App) => {
	app.config.globalProperties.$loading = Loading
	app.directive('loading', vLoading)
}

export default { install }
