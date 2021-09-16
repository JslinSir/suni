<template>
	<span
		@click="click"
		v-bind="$attrs"
		:style="siColor"
		class="si-switch"
		:class="{
			[`si-button--${type}`]: type,
			checked,
			disabled,
			loading,

			'si-switch--icon': icon,
			'si-switch--indeterminate': indeterminate,
			'si-switch--square': square
		}"
	>
		<input type="checkbox" :checked="checked" class="si-switch__input" />
		<span class="si-switch__background"></span>
		<span class="si-switch__circle">
			<slot name="circle"></slot>
		</span>
		<span class="si-switch__text on">
			<slot v-if="$slots.on" name="on"></slot>
			<slot v-else></slot>
		</span>
		<span class="si-switch__text off">
			<slot v-if="$slots.off" name="off"></slot>
			<slot v-else></slot>
		</span>
	</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	props: {
		modelValue: [String, Number, Boolean],
		activeValue: { type: [String, Number, Boolean], default: true },
		inactiveValue: { type: [String, Number, Boolean], default: false },

		color: { type: String },
		type: { type: String, default: 'primary' },
		disabled: Boolean,
		loading: Boolean,

		icon: Boolean,
		indeterminate: Boolean,
		square: Boolean
	},
	emits: ['update:modelValue'],
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},
		checked() {
			return this.modelValue === this.activeValue
		}
	},
	methods: {
		click() {
			if (this.indeterminate) return
			if (this.checked) this.$emit('update:modelValue', this.inactiveValue)
			else this.$emit('update:modelValue', this.activeValue)
		}
	}
})
</script>
