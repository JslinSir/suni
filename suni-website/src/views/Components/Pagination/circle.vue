<template>
	<si-pagination circle :total="200" v-model:current="page"></si-pagination>

	<si-pagination square :total="200" v-model:current="page" style="margin-top: 1em"></si-pagination>
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
