import { createApp, ComponentPublicInstance, nextTick } from 'vue'
import component from './index.vue'

const positions = ['top-right', 'top-center', 'top-left', 'bottom-center', 'bottom-left', 'bottom-right']

interface NotificationOptions {
	title?: string
	text?: string
	position?: string
	type?: string
	color?: string
	duration?: number | string
	border?: string
	iconClass?: string
	square?: boolean
	[x: string]: unknown
}

export type LoadingInstance = ComponentPublicInstance<
	{ title: string; text: string; color: string; type: string },
	{},
	{ visible: boolean }
> & {
	close(): () => void
}

const Notification = function (options: NotificationOptions = {}) {
	// position & parent
	if (!options.position || !positions.includes(options.position)) options.position = 'top-right'
	let parent = document.body.querySelector(`.si-notification-parent--${options.position}`)
	if (!parent) {
		parent = document.createElement('div')
		parent.classList.add('si-notification-parent')
		parent.classList.add(`si-notification-parent--${options.position}`)
	}
	options.parent = parent
	delete options.position

	// set default icon by type
	if (!options.iconClass)
		switch (options.type) {
			case 'primary':
			case 'info':
				options.iconClass = 'bx bx-info-circle'
				break
			case 'success':
				options.iconClass = 'bx bx-check-circle'
				break
			case 'warning':
				options.iconClass = 'bx bx-error-circle'
				break
			case 'danger':
				options.iconClass = 'bx bx-x-circle'
				break
			case 'dark':
				options.iconClass = 'bx bx-moon'
				break
			case 'light':
				options.iconClass = 'bx bx-sun'
				break
		}

	const el = document.createElement('div')
	options.container = el
	const notificationApp = createApp(component, options)
	const notificationInstance = notificationApp.mount(el) as LoadingInstance

	parent.appendChild(el)
	document.body.appendChild(parent)

	nextTick(() => {
		notificationInstance.visible = true
	})

	return notificationInstance
}

export default Notification
