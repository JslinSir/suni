<template>
	<div @click="click" class="si-option" :class="{ disabled, select, selected, hidden: !isShow }">
		{{ label }}
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SiOption',
	props: {
		value: { type: [String, Number], required: true },
		label: { type: String, required: true },

		disabled: Boolean
	},
	inject: ['Select'],
	computed: {
		isSelect() {
			const Select = (this as any).Select
			return !!Select && Select.name === 'SiSelect'
		},
		select() {
			if (this.isSelect) {
				const Select = (this as any).Select
				return Select.selectValue === this.value
			}
		},
		selected() {
			if (this.isSelect) {
				const Select = (this as any).Select
				return Select.modelValue === this.value
			}
		},
		isShow() {
			if (this.isSelect) {
				return !!(this as any).Select.options.find((item: any) => item.value === this.value)
			}

			return true
		}
	},
	methods: {
		injectOption() {
			if (this.isSelect && this.$el.style.display !== 'none') {
				const optionsArray = (this as any).Select.optionsArray as any[]
				optionsArray.push({
					label: this.label,
					value: this.value,
					disabled: this.disabled,
					el: this.$el
				})
			}
		},
		click() {
			if (this.isSelect) {
				const Select = (this as any).Select
				Select.select(this.value)
			}
		}
	},
	mounted() {
		this.injectOption()
	}
})
</script>
