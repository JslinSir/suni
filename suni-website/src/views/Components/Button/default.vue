<template>
	<p v-for="variant in variants" :key="variant" style="margin: 1em 0">
		<si-button v-for="type in types" :type="type" :variant="variant" :key="variant">Button</si-button>
	</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			variants: ['default', 'flat', 'border', 'relief', 'text', 'floating', 'shadow']
		}
	}
})
</script>
