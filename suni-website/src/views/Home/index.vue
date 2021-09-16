<template>
	<div class="home">
		<h1>
			<si-tooltip content="看什么看!" variant="border" :offset-x="35">
				<span>SUNI</span>
			</si-tooltip>
		</h1>
		<p>简约、富有设计感的UI</p>
		<div class="action">
			<si-button type="dark" variant="flat" @click="goNow">Get Started</si-button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		goNow() {
			setTimeout(() => {
				this.$router.push('/components')
			}, 250)
		}
	}
})
</script>

<style lang="scss" scoped>
.home {
	padding-top: var(--header-height);
	background-color: rgba(243, 246, 247, 0.6);
	min-height: 100vh;
}
h1 {
	margin-top: 5em;
	text-align: center;
	letter-spacing: 0.1em;
	span {
		cursor: pointer;
	}
}
p {
	margin-top: 2em;
	text-align: center;
	letter-spacing: 0.1em;
}
.action {
	margin-top: 2em;
	text-align: center;
}
</style>
