<template>
	<si-tooltip
		:content="`position: ${position}`"
		v-for="position in positions"
		:position="position"
		style="margin: 0.5em"
		scrollElement=".components-content"
	>
		<si-button variant="flat"> {{ position }}</si-button>
	</si-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			positions: ['left', 'top', 'bottom', 'right']
		}
	}
})
</script>
