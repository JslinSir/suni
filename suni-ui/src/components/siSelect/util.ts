export default (content: HTMLElement) => {
	const { width, height, bottom, top, left } = content.getBoundingClientRect()

	const style: any = {}

	style.width = `${width}px`
	style.left = `${left}px`

	let position = 'bottom'
	if (window.innerHeight - bottom < 200) position = 'top'

	if (position === 'top') {
		style.bottom = `${window.innerHeight - top + 4}px`
	} else if (position == 'bottom') {
		style.top = `${bottom - 4}px`
	} else {
		console.warn('[suni select]', "position must one of ['top', 'bottom']")
	}

	return [style, position]
}
