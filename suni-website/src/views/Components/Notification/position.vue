<template>
	<si-button variant="border" icon @click="notify('top-right')">
		<i class="bx bx-border-radius"></i>
	</si-button>
	<si-button variant="border" icon @click="notify('bottom-right')">
		<i class="bx bx-border-radius bx-rotate-90"></i>
	</si-button>
	<si-button variant="border" icon @click="notify('bottom-left')">
		<i class="bx bx-border-radius bx-rotate-180"></i>
	</si-button>
	<si-button variant="border" icon @click="notify('top-left')">
		<i class="bx bx-border-radius bx-rotate-270"></i>
	</si-button>
	<si-button variant="border" icon @click="notify('bottom-center')">
		<i class="bx bx-border-bottom"></i>
	</si-button>
	<si-button variant="border" icon @click="notify('top-center')">
		<i class="bx bx-border-top"></i>
	</si-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		notify(position: string) {
			this.$notify({
				position,
				title: `位置 ${position}`,
				text: '通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容'
			})
		}
	}
})
</script>
