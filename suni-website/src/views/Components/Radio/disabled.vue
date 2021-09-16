<template>
	<si-radio disabled value="disabled">disabled</si-radio>
	<si-radio loading disabled v-model="value" value="1">disabled</si-radio>
	<si-radio loading v-model="value" value="1">loading</si-radio>
	<si-radio loading v-model="value" value="2">loading</si-radio>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			value: '1'
		}
	}
})
</script>
