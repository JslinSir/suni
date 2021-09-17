import { App } from 'vue'

import './styles/index.scss'

import * as siComponents from './components/index'

const install = (app: App) => {
	app.config.unwrapInjectedRef = true

	Object.values(siComponents).forEach(siComponent => {
		app.use(siComponent)
	})
}


export default { install }
