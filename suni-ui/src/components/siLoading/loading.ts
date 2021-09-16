import { createApp, nextTick, ComponentPublicInstance } from 'vue'
import component from './index.vue'

export interface LoadingOptions {
	color?: string
	background?: string
	type?: string
	variant?: string
	text?: string
	scale?: string
	target?: string | HTMLElement
	[x: string]: unknown
}

export type LoadingInstance = ComponentPublicInstance<
	{ type: string; text: string },
	{},
	{ isVisible: boolean; color: string }
> & {
	close(): () => void
}

function getTarget(optionTarget?: string | HTMLElement): HTMLElement {
	let target = null

	if (typeof optionTarget === 'string') {
		target = document.querySelector(optionTarget) as HTMLElement
	} else if (optionTarget instanceof HTMLElement) {
		target = optionTarget
	} else {
		target = document.body
	}

	return target
}

const Loading = function (options: LoadingOptions = {}): LoadingInstance {
	const target = getTarget(options.target)

	target.style.position = 'relative'

	const loadingApp = createApp(component, options)
	const el = document.createElement('div')

	loadingApp.config.globalProperties.close = function () {
		this.isVisible = false
		setTimeout(() => target.removeChild(el), 500)
	}

	const loadingInstance = loadingApp.mount(el) as LoadingInstance

	target.appendChild(el)

	nextTick(() => {
		loadingInstance.$data.isVisible = true
	})

	return loadingInstance
}

export default Loading
