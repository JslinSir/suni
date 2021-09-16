<template>
	<si-switch v-model="active" disabled> disabled </si-switch>
	<si-switch v-model="active"> toggle </si-switch>
	<si-switch :loading="active" />
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
