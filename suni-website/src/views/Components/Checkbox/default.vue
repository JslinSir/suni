<template>
	<div style="width: 10em; margin: 0 auto 1em; padding: 0.5em; background-color: hsl(0, 0%, 95%)">
		modelValue: {{ value }}
	</div>

	<si-checkbox v-model="value">default</si-checkbox>
	<si-checkbox v-model="value" true-value="1" false-value="0">1/0</si-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			value: true
		}
	}
})
</script>
