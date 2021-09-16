<template>
	<si-select style="margin: 0.5em" v-for="type in types" :type="type" placeholder="请选择" v-model="value">
		<si-option v-for="option in options" :label="option.label" :value="option.value"></si-option>
	</si-select>
	<si-select style="margin: 0.5em" placeholder="请选择" v-model="value" color="#60f">
		<si-option v-for="option in options" :label="option.label" :value="option.value"></si-option>
	</si-select>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			options: [
				{ label: 'Vuesax', value: '1' },
				{ label: 'Vue', value: '2' },
				{ label: 'Javascript', value: '3' },
				{ label: 'Sass', value: '4', disablde: true },
				{ label: 'Typescript', value: '5' },
				{ label: 'Webpack', value: '6' },
				{ label: 'Nodejs', value: '7' }
			],
			value: ''
		}
	}
})
</script>
