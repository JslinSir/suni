<template>
	<si-switch v-model="active" indeterminate />
	<si-switch :modelValue="!active" indeterminate />
	<si-switch v-model="active" indeterminate disabled />
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
