<template>
	<si-pagination v-model:current="page" :total="100" style="margin: 0.5em" disabled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			page: 1
		}
	}
})
</script>
