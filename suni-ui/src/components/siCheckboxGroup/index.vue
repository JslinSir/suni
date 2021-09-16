<template>
	<div class="si-checkbox-group">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'SiCheckboxGroup',
	props: {
		modelValue: { type: Array, default: () => undefined }
	},
	provide() {
		return {
			CheckboxGroup: computed(() => ({
				name: 'SiCheckboxGroup',
				modelValue: this.modelValue,
				update: this.update
			}))
		}
	},
	emits: ['update:modelValue'],
	methods: {
		update(value: any[]) {
			this.$emit('update:modelValue', value)
		}
	}
})
</script>
