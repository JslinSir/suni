/**
 * 防抖
 * @param {function} fn 函数
 * @param {string} time 防抖时间
 * @returns function
 */
export function debounce(this: any, fn: Function, time: number) {
	let timeout: NodeJS.Timeout
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn.apply(this, arguments)
		}, time)
	}
}

/**
 * 节流
 * @param {function} fn 函数
 * @param {number}} time 节流时间
 * @returns function
 */
export function throttle(this: any, fn: Function, time: number) {
	let flag = true
	return () => {
		if (!flag) return
		fn.apply(this, arguments)
		flag = false
		setTimeout(() => {
			flag = true
		}, time)
	}
}
