import { setColor } from '../color'
import './style.scss'

export default function ripple(event: MouseEvent, solid: boolean = false) {
	const el = event.currentTarget

	if (!el) return console.warn('[suni ripple]', 'event no target')
	if (!(el instanceof HTMLElement)) return console.warn('[suni ripple]', 'ripple not HTMLELEMT')

	const offset = el.getBoundingClientRect()
	const x = event.clientX - offset.left
	const y = event.clientY - offset.top

	/* add ripple element */

	let time = 0.6
	if (el.clientWidth > 150) time = 1.2

	const effectContent = document.createElement('div')
	effectContent.className = 'si-ripple-content'
	const effect = document.createElement('div')
	effect.className = 'si-ripple'
	effect.style.transition = `all ${time}s ease`
	effect.style.left = `${x}px`
	effect.style.top = `${y}px`

	if (solid) effect.classList.add('si-ripple--solid')
	else setColor('--si-color', '#fff', effectContent)

	effectContent.appendChild(effect)
	el.appendChild(effectContent)

	effect.style.width = `${el.clientWidth * 2.5}px`
	effect.style.height = `${el.clientWidth * 2.5}px`
	effect.style.opacity = `1`

	/* remove effect but until effect mini time */

	let canRemove = false

	const removeDeside = () => (canRemove = true)
	const removeEffect = () => {
		const outTime = time * 0.4

		effect.style.transition = `all ${outTime}s ease`
		effect.style.opacity = '0'

		setTimeout(() => {
			el.removeChild(effectContent)
		}, outTime * 1000)

		el.removeEventListener('mouseup', removeEffect)
		el.removeEventListener('mouseleave', removeEffect)
		el.removeEventListener('mouseup', removeDeside)
		el.removeEventListener('mouseleave', removeDeside)
	}

	el.addEventListener('mouseup', removeDeside)
	el.addEventListener('mouseleave', removeDeside)

	setTimeout(() => {
		if (canRemove) {
			removeEffect()
		} else {
			el.addEventListener('mouseup', removeEffect)
			el.addEventListener('mouseleave', removeEffect)
		}
	}, time * 1000 * 0.5)
}

export const rippleReverse = (event: MouseEvent) => {}

export const rippleCut = (event: any) => {
	const el = event.currentTarget
	const offset = el.getBoundingClientRect()
	const x = event.clientX - offset.left
	const y = event.clientY - offset.top

	let time = 0.6

	if (el.clientWidth > 150) {
		time = 1.2
	}

	const effectContent = document.createElement('div')

	effectContent.className = 'si-ripple-content'

	const effect = document.createElement('div')
	const effect2 = document.createElement('div')

	effect.className = 'si-ripple-cut-1'
	effect2.className = 'si-ripple-cut-2'
	// effect.style.transition = `all ${time}s ease`

	effect.style.left = effect2.style.left = `${x}px`
	effect.style.top = effect2.style.top = `${y}px`
	effect.style.width = effect2.style.width = `${el.clientWidth * 2.5}px`
	effect.style.height = effect2.style.height = `${el.clientWidth * 2.5}px`
	effect.style.opacity = effect2.style.opacity = `1`

	effectContent.appendChild(effect)
	effectContent.appendChild(effect2)

	el.appendChild(effectContent)

	setTimeout(() => {
		effect.style.left = `-${el.clientWidth * 1.3}px`
		effect.style.opacity = '1'

		effect2.style.left = `${el.clientWidth * 1.3}px`
		effect2.style.opacity = '1'
	}, 1)

	let noTime = false
	setTimeout(() => {
		noTime = true
	}, 300)

	function removeEffect(event: any) {
		effect.style.transition = `all 0.${time * 600}s ease`
		setTimeout(
			() => {
				effect.style.opacity = '0'
				setTimeout(() => {
					el.removeChild(effectContent)
				}, time * 300)
			},
			noTime ? 0 : time * 400
		)

		event.target.removeEventListener('mouseup', removeEffect)
		event.target.removeEventListener('mouseleave', removeEffect)
	}

	event.target.addEventListener('mouseup', removeEffect)
	event.target.addEventListener('mouseleave', removeEffect)
}
