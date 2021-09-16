<template>
	<si-button variant="flat" square v-for="type in types" :type="type" @click="notify(type)">
		{{ type }}
	</si-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['info', 'success', 'warning', 'danger', 'dark', 'light']
		}
	},
	methods: {
		notify(type?: string) {
			this.$notify({
				type,
				square: true,
				title: '通知 notification',
				text: `类型是${type}的通知。`
			})
		}
	}
})
</script>
