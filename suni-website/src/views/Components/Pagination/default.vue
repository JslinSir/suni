<template>
	<si-pagination :type="type" v-model:current="page" :total="100" style="margin: 0.5em" />

	<p style="margin-top: 1em">
		<si-radio v-for="item in types" v-model="type" :type="item" :value="item">{{ item }}</si-radio>
	</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			type: 'primary',
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light'],
			page: 1
		}
	}
})
</script>
