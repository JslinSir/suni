import Color from 'color'

// color is not allow alpha
const isHEX = (color: string) => [4, 7].includes(color.trim().length) && /^#[0-9a-f]{3,6}$/.test(color.trim())

const isRGB = (color: string) => /^rgb\([0-9, ]*\)$/.test(color.trim())

const isHSL = (color: string) => /^hsl\([0-9%, ]*\)$/.test(color.trim())

export const isColor = (color: string) => {
	if (!color) return false
	return isHEX(color) || isRGB(color) || isHSL(color)
}

export const getColor = (color: string) => {
	// may wrong , wait to warning
	const hslArray = Color(color)?.hsl().array()
	const hslNumber = `${hslArray[0].toFixed()}, ${hslArray[1].toFixed()}%, ${hslArray[2].toFixed()}%`
	return hslNumber
}

export const setColor = (colorName: string, color: string, el: any, addClass?: boolean) => {
	const hslNumber = getColor(color)
	if (hslNumber) {
		el.style.setProperty(colorName, hslNumber)
		if (addClass) el.classList.add('si-change-color')
	}
}
