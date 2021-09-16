export * from './color'

export function arrayRange(start: number = 0, end: number = 0): number[] {
	return [...Array(end - start + 1).keys()].map(i => i + start)
}

/**
 * 防抖
 * @param {function} fn 函数
 * @param {string} time 防抖时间
 * @returns function
 */
export function debounce(fn: Function, time: number) {
	let timeout: number

	return function () {
		clearTimeout(timeout)
		timeout = setTimeout(fn, time)
	}
}

/**
 * 节流 先执行
 * @param {function} fn 函数
 * @param {number}} time 节流时间
 * @returns function
 */
export function throttle(fn: Function, time: number) {
	let flag = true
	return function () {
		if (!flag) return
		fn(...arguments)
		flag = false
		setTimeout(() => {
			flag = true
		}, time)
	}
}
