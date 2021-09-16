<template>
	<si-button v-for="type in types" :type="type" variant="flat" @click="defaultClick(type)">Loading</si-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light']
		}
	},
	methods: {
		defaultClick(type: string) {
			const loading = this.$loading({ type })
			setTimeout(() => loading.close(), 1000)
		}
	}
})
</script>
