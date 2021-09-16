<template>
	<span
		@focusin="focusin"
		@focusout="focusout"
		@mouseenter="mouseenter"
		@mouseleave="mouseleave"
		class="si-tooltip-content"
		v-bind="$attrs"
		ref="content"
	>
		<slot></slot>
	</span>

	<teleport to="body">
		<transition name="si-tooltip">
			<div
				ref="tooltip"
				v-show="active"
				class="si-tooltip"
				:style="[siColor, positionStyle]"
				:class="{
					[position]: true,
					[`si-tooltip--${type}`]: type,
					[`si-tooltip--${variant}`]: variant,

					circle,
					square,
					loading
				}"
			>
				<slot v-if="$slots.tooltip" name="tooltip"></slot>
				<span v-else>{{ content }}</span>
				<div v-if="loading" class="si-tooltip__loading"></div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'
import { getTooltipPosition } from './util'

export default defineComponent({
	props: {
		position: { type: String, default: 'top' },
		content: { type: String },

		color: { type: String },
		type: { type: String },
		variant: { type: String },

		circle: { type: Boolean },
		square: { type: Boolean },

		loading: { type: Boolean },

		offsetX: { type: Number, default: 0 },
		offsetY: { type: Number, default: 0 }
	},
	data() {
		return {
			active: false,
			positionStyle: {}
		}
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		}
	},

	methods: {
		getPosition() {
			this.positionStyle = getTooltipPosition(
				this.$refs.content as HTMLElement,
				this.position,
				this.offsetX,
				this.offsetY
			)
		},
		activeHandle() {
			this.getPosition()
			this.active = true
			window.addEventListener('resize', this.getPosition)
			window.addEventListener('scroll', this.getPosition, true)
		},
		inactiveHandle() {
			this.active = false
			window.removeEventListener('resize', this.getPosition)
			window.removeEventListener('scroll', this.getPosition, true)
		},
		mouseenter() {
			this.activeHandle()
		},
		mouseleave() {
			this.inactiveHandle()
		},
		focusin() {
			this.activeHandle()
		},
		focusout() {
			this.inactiveHandle()
		}
	},
	destroyed() {
		window.removeEventListener('resize', this.getPosition)
		window.removeEventListener('scroll', this.getPosition, true)
	}
})
</script>
