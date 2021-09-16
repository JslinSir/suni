<template>
	<si-input v-model="value" placeholder="none" style="margin: 0.5em" />
	<si-input v-for="type in types" :type="type" v-model="value" :placeholder="type" style="margin: 0.5em" />
	<si-input v-model="value" color="#b300ff" placeholder="color" style="margin: 0.5em" />
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
