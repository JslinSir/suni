<template>
	<label
		v-bind="$attrs"
		class="si-checkbox"
		:style="siColor"
		:class="{
			[`si-button--${type}`]: type,

			checked,
			disabled,
			lineThrough,
			loading
		}"
	>
		<span class="si-checkbox__input">
			<input class="si-checkbox__original" type="checkbox" @change="change" :checked="checked" />
			<span class="si-checkbox__effect">
				<span class="si-checkbox__icon" v-if="$slots.icon">
					<slot name="icon"></slot>
				</span>
				<checkbox-icon :checked="checked" :indeterminate="indeterminate" v-else></checkbox-icon>
			</span>
		</span>
		<span class="si-checkbox__label">
			<slot></slot>
		</span>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'
import checkboxIcon from './checkbox-icon.vue'

export default defineComponent({
	name: 'SiCheckbox',
	components: { checkboxIcon },
	props: {
		modelValue: { type: [Boolean, Number, String], default: undefined },
		value: { type: [String, Boolean, Number] },
		trueValue: { type: [String, Number], default: undefined },
		falseValue: { type: [String, Number], default: undefined },

		color: { type: String },
		type: { type: String, default: 'primary' },
		disabled: Boolean,

		lineThrough: Boolean,
		indeterminate: Boolean,
		loading: Boolean
	},
	inject: { CheckboxGroup: { default: undefined } },
	emits: ['update:modelValue'],
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},
		checked() {
			const { modelValue, trueValue, value } = this.$props

			if (this.isGroup) {
				const { CheckboxGroup } = this as any
				return Array.isArray(CheckboxGroup.modelValue) && CheckboxGroup.modelValue.includes(value)
			} else {
				if (typeof modelValue === 'boolean' && trueValue === undefined) return modelValue
				else return modelValue === trueValue
			}
		},
		isGroup() {
			const { CheckboxGroup } = this as any
			if (CheckboxGroup && CheckboxGroup.name == 'SiCheckboxGroup') return true
			else return false
		}
	},
	methods: {
		change(e: Event) {
			const { $props, $emit } = this
			const { CheckboxGroup } = this as any

			const target = e.target as HTMLInputElement

			if (this.isGroup) {
				if ($props.value !== undefined) {
					const modelValue = CheckboxGroup.modelValue as any[] | undefined
					if (Array.isArray(modelValue)) {
						if (target.checked) {
							!modelValue.includes($props.value) && modelValue.push($props.value)
						} else {
							const index = modelValue.indexOf($props.value)
							if (index > -1) modelValue.splice(index, 1)
						}
					} else {
						if (target.checked) {
							CheckboxGroup.update([$props.value])
						}
					}
				}
			} else {
				const target = e.target as HTMLInputElement
				const value = target.checked ? $props.trueValue ?? true : $props.falseValue ?? false
				$emit('update:modelValue', value)
			}
		}
	}
})
</script>
