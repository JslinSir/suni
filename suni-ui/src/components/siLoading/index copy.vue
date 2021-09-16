<template>
	<transition name="si-loading">
		<div
			class="si-loading"
			v-show="isVisible"
			:style="{
				'--si-color': getColor,
				'--si-background': getBackground,
				'--si-opacity': opacity
			}"
			:class="{
				[`si-loading--${type}`]: true,
				'si-loading--target': !!target
			}"
		>
			<div class="si-loading__load" :style="{ transform: `scale(${scale})` }">
				<div class="si-loading__load__animation">
					<div class="si-loading__load__animation__1"></div>
					<div class="si-loading__load__animation__2"></div>
					<div class="si-loading__load__animation__3"></div>
				</div>
				<div class="si-loading__load__text">{{ text }}</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getColor } from '../../util'

export default defineComponent({
	props: {
		target: { type: HTMLElement },
		type: { type: String, default: 'default' },
		opacity: { type: String },
		scale: { type: String },
		text: { type: String }
	},
	data() {
		return {
			isVisible: false,
			color: '',
			background: ''
		}
	},
	computed: {
		getColor(): string | undefined {
			return getColor(this.color)
		},
		getBackground(): string | undefined {
			return getColor(this.background)
		}
	}
})
</script>
