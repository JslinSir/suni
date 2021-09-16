<template>
	<si-checkbox v-model="value" v-for="type in types" :type="type">{{ type }}</si-checkbox>
	<si-checkbox v-model="value" color="#aa2e15">#aa2e15</si-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			value: null
		}
	}
})
</script>
