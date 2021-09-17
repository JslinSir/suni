import { App } from 'vue'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$loading: any
		$notify: any
	}
}

declare const _default: {
	install: (app: App<any>) => void
}
export default _default
