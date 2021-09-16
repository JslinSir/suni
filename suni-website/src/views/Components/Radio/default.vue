<template>
	<si-radio style="margin: 1em 0.5em" v-for="type in types" :type="type" v-model="value" :value="type">{{
		type
	}}</si-radio>
	<si-radio style="margin: 1em 0.5em" v-model="value" value="color" color="#7b00ff">color</si-radio>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Radio',
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			value: 'primary'
		}
	}
})
</script>
