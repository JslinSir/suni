<template>
	<si-input variant="border" :placeholder="type" style="margin: 0.5em" v-for="type in types" :type="type" />
	<si-input variant="shadow" placeholder="shadow" style="margin: 0.5em" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light']
		}
	}
})
</script>
