<template>
	<span class="si-button-group"><slot></slot></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
	props: {
		type: String
	},
	provide() {
		return {
			groupType: computed(() => this.type)
		}
	}
})
</script>
