<template>
	<si-switch v-for="type in types" :type="type" v-model="active" />
	<si-switch color="#4709ce" v-model="active" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			active: false
		}
	}
})
</script>
