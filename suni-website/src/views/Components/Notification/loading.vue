<template>
	<si-button style="margin: 0.5em" variant="flat" @click="notify(type)" v-for="type in types" :type="type">
		loadding
	</si-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['info', 'primary', 'success', 'warning', 'danger', 'dark', 'light']
		}
	},
	methods: {
		notify(type?: string) {
			const notification = this.$notify({
				type,
				title: 'Loading Notificaiton',
				text: 'loading'
			})
			notification.loading = true
		}
	}
})
</script>
