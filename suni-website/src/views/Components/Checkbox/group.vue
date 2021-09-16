<template>
	<span style="margin-bottom: 1em; display: inline-block; padding: 0.5em; background-color: hsl(0, 0%, 95%)"
		>groupValue: {{ value }}</span
	>
	<br />

	<si-checkbox-group v-model="value">
		<si-checkbox value="one">one</si-checkbox>
		<si-checkbox value="two">two</si-checkbox>
		<si-checkbox value="three">three</si-checkbox>
	</si-checkbox-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			value: null
		}
	}
})
</script>
