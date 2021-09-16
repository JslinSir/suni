<template>
	<si-checkbox v-model="value">
		<template #icon><i class="bx bx-check"></i></template>
	</si-checkbox>
	<si-checkbox v-model="value" type="success">
		<template #icon><i class="bx bx-check-double"></i></template>
	</si-checkbox>
	<si-checkbox v-model="value" type="danger">
		<template #icon><i class="bx bx-x"></i></template>
	</si-checkbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			value: true
		}
	}
})
</script>
