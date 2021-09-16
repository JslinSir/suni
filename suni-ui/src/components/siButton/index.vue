<template>
	<button
		class="si-button"
		:disabled="disabled"
		:style="siColor"
		:class="{
			[`si-button--${type}`]: type,
			[`si-button--${variant}`]: variant,

			active,
			block,
			circle,
			square,
			icon,

			[`si-button--size-${size}`]: size,

			'si-button--loading': loading,
			'si-button--upload': upload,

			'si-button--animate': !!$slots.animate,
			[`si-button--animate-${animationType}`]: !!$slots.animate
		}"
		@mousedown="mousedown"
	>
		<div v-if="$slots.default" class="si-button__content">
			<slot name="default"></slot>
		</div>
		<div v-if="$slots.animate" class="si-button__animate" :class="`si-button__animate--${animationType}`">
			<slot name="animate"></slot>
		</div>
		<div v-if="loading" class="si-button__loading"></div>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'
import ripple from '../../util/ripple/index'

export default defineComponent({
	name: 'SiButton',
	props: {
		color: { type: String },
		type: { type: String, default: 'primary' },
		variant: { type: String, default: 'default' },

		active: { type: Boolean },
		disabled: { type: Boolean },
		block: { type: Boolean },

		circle: { type: Boolean },
		square: { type: Boolean },

		icon: { type: Boolean },
		size: { type: String, default: 'default' },

		loading: { type: Boolean },
		upload: { type: Boolean },

		animationType: { type: String, default: 'vertical' }
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		}
	},
	methods: {
		mousedown(event: MouseEvent) {
			if (this.variant === 'flat' || this.variant === 'border') {
				ripple(event, true)
			} else {
				ripple(event)
			}
		}
	}
})
</script>
