<template>
	<si-button variant="flat" @click="notify(3000)"> Open Notification </si-button>
	<si-button variant="flat" @click="notify(0)"> 不会自动关闭的 </si-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		notify(duration = 3000) {
			this.$notify({
				duration,
				title: '通知 Notification',
				text: `通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容`
			})
		}
	}
})
</script>
