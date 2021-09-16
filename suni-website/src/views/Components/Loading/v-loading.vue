<template>
	<span
		v-loading="true"
		v-for="variant in variant"
		:suni-loading-variant="variant"
		:suni-loading-text="variant"
		style="
			display: inline-block;
			overflow: hidden;
			width: 8em;
			height: 8em;
			margin: 0.5em;
			border-radius: 1em;
			box-shadow: 0 10px 20px -10px hsla(0, 0%, 0%, 0.2);
		"
	></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			variant: [
				'waves',
				'corners',
				'border',
				'points',
				'square',
				'gradient',
				'rectangle',
				'circles',
				'square-rotate',
				'scale'
			]
		}
	}
})
</script>
