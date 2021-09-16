<template>
	<si-button variant="flat" v-for="type in types" :type="type" @click="notify(type)">
		{{ type }}
	</si-button>
	<si-button variant="flat" color="#8b74d8" @click="notify('light', '#8b74d8')"> color </si-button>
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
		notify(type?: string, color?: string) {
			this.$notify({
				type,
				color,
				title: '通知 notification',
				text: `类型是${type}的通知。`
			})
		}
	}
})
</script>
