<template>
	<si-tooltip
		type="primary"
		:variant="variant"
		:content="`variant: ${variant}`"
		v-for="variant in variants"
		style="margin: 1em"
	>
		<si-button variant="flat" transparent>{{ variant }}</si-button>
	</si-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			variants: ['border', 'border-thick', 'shadow']
		}
	}
})
</script>
