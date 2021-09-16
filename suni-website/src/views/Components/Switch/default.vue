<template>
	<div style="width: 12em; margin: 0 auto 1em; padding: 0.5em; background-color: hsl(0, 0%, 95%)">
		modelValue: {{ active }}
	</div>

	<si-switch v-model="active"></si-switch>
	<si-switch v-model="active" active-value="active" inactive-value="inactive"></si-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			active: false
		}
	}
})
</script>
