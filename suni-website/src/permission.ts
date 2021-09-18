import router from './router'

router.beforeEach(async (to, from, next) => {
	const searchParams = new URLSearchParams(location.search)
	const redirect = searchParams.get('redirect')

	if (redirect) {
		console.log('[suni redirect]', redirect)
		next(redirect)
	} else next()
})
