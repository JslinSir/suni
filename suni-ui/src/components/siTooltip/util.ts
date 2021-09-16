export const getTooltipPosition = (content: HTMLElement, position: string, offsetX: number, offsetY: number) => {
	const { x, y, width, height } = content.getBoundingClientRect()
	const style: any = {}

	if (position === 'top') {
		style.bottom = `${window.innerHeight - y + 8 - offsetY}px`
		style.left = `${x + width / 2 + offsetX}px`
	} else if (position == 'bottom') {
		style.top = `${y + height + 8}px`
		style.left = `${x + width / 2}px`
	} else if (position == 'left') {
		style.top = `${y + height / 2}px`
		style.right = `${window.innerWidth - x + 8}px`
	} else if (position == 'right') {
		style.top = `${y + height / 2}px`
		style.left = `${x + width + 8}px`
	} else {
		console.warn('[suni tooltip]', "position must one of ['top', 'bottom', 'left', 'right']")
	}

	return style
}
