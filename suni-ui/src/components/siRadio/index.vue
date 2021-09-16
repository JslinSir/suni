<template>
	<label
		tabindex="0"
		@keydown.enter="inputHandle"
		v-bind="$attrs"
		class="si-radio"
		:class="{
			[`si-component--${type}`]: type,
			checked,
			disabled,
			loading
		}"
		:style="siColor"
	>
		<span class="si-radio__input">
			<input class="si-radio__original" @input="inputHandle" type="radio" :checked="checked" tabindex="-1" />
			<span class="si-radio__effect">
				<span v-if="$slots.icon" class="si-radio__effect__icon">
					<slot name="icon"></slot>
				</span>
				<span v-if="loading" class="si-radio__effect__loading"></span>
			</span>
		</span>

		<span class="si-radio__label">
			<slot></slot>
		</span>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	name: 'SiRadio',
	props: {
		modelValue: { type: [String, Number, Boolean], default: '' },
		value: { type: [String, Number, Boolean], default: '' },

		color: { type: String },
		type: { type: String, default: 'primary' },

		disabled: Boolean,
		loading: Boolean
	},
	emits: ['update:modelValue'],
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},
		checked() {
			return this.modelValue === this.value
		}
	},
	methods: {
		inputHandle() {
			this.$emit('update:modelValue', this.value)
		}
	}
})
</script>
