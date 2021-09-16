<template>
	<si-checkbox lineThrough v-model="value">lineThrough</si-checkbox>
	<si-checkbox indeterminate v-model="value">indeterminate</si-checkbox>
	<si-checkbox lineThrough indeterminate v-model="value">lineThrough & indeterminate</si-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			value: ''
		}
	}
})
</script>
