import Loading, { LoadingInstance, LoadingOptions } from './loading'
import { Directive, DirectiveBinding } from 'vue'

const createInstance = (el: HTMLElement & { instance: LoadingInstance }, binding: DirectiveBinding) => {
	const color = el.getAttribute('suni-loading-color')
	const background = el.getAttribute('suni-loading-background')
	const type = el.getAttribute('suni-loading-type')
	const variant = el.getAttribute('suni-loading-variant')
	const text = el.getAttribute('suni-loading-text')
	const scale = el.getAttribute('suni-loading-scale')

	const options: LoadingOptions = {}

	color && (options.color = color)
	background && (options.background = background)
	type && (options.type = type)
	variant && (options.variant = variant)
	text && (options.text = text)
	scale && (options.scale = scale)

	return Loading({ target: el, ...options })
}

const vLoading: Directive<HTMLElement & { instance: LoadingInstance }, boolean> = {
	mounted(el, binding) {
		if (binding.value) el.instance = createInstance(el, binding)
	},
	updated(el, binding) {
		if (binding.oldValue !== binding.value) {
			if (binding.value) {
				el.instance = createInstance(el, binding)
			} else {
				el.instance.close()
			}
		}
	},
	unmounted(el) {
		el?.instance?.close()
	}
}

export default vLoading
