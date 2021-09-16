<template>
	<si-switch v-model="active">Suscribe</si-switch>
	<si-switch v-model="active">
		<template #off> Off </template>
		<template #on> On </template>
	</si-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			active: ''
		}
	}
})
</script>
