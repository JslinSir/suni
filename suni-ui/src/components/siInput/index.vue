<template>
	<div
		class="si-input"
		:style="siColor"
		:class="{
			type: type || color,
			[`si-input--${type}`]: type,
			[`si-input--${variant}`]: variant,
			state,
			flexible,
			prefix: $slots.prefix,
			suffix: $slots.suffix,

			disabled
		}"
	>
		<input
			:type="inputType"
			class="si-input__content"
			:class="modelValue ? 'value' : ''"
			:value="modelValue"
			@input="inputHandle"
			:placeholder="!flexible ? placeholder : ''"
			:id="String($.uid)"
			:disabled="disabled"
		/>
		<span v-if="$slots.prefix" class="si-input__prefix">
			<slot name="prefix"></slot>
		</span>
		<span v-if="$slots.suffix" class="si-input__suffix">
			<slot name="suffix"></slot>
		</span>
		<label :for="String($.uid)" v-if="placeholder && flexible" class="si-input__label">{{ placeholder }}</label>
		<div v-if="variant" class="si-input__effect"></div>
		<div v-if="loading" class="si-input__loading"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	props: {
		modelValue: { type: String, default: '' },
		placeholder: { type: String },

		color: { type: String },
		type: { type: String },
		variant: { type: String },
		state: { type: Boolean },
		flexible: { type: Boolean },
		loading: { type: Boolean },
		disabled: { type: Boolean },

		inputType: { type: String, default: 'text' }
	},
	emits: ['update:modelValue'],
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		}
	},
	methods: {
		inputHandle(e: Event) {
			const target = e.target as HTMLInputElement
			this.$emit('update:modelValue', target.value)
		}
	}
})
</script>
