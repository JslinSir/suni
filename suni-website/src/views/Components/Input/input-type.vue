<template>
	<si-input
		v-model="value"
		v-for="inputType in inputTypes"
		:input-type="inputType"
		:placeholder="inputType"
		style="margin: 0.5em"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			inputTypes: ['text', 'password', 'search', 'number', 'url', 'time', 'date'],
			value: ''
		}
	}
})
</script>
