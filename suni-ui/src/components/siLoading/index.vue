<template>
	<transition name="si-loading">
		<div
			class="si-loading"
			v-show="isVisible"
			:style="[siColor, background ? { background } : '']"
			:class="{
				[`si-loading--${type}`]: true,
				[`si-loading--${variant}`]: true,
				target
			}"
		>
			<div class="si-loading__load">
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
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	props: {
		color: { type: String },
		background: { type: String },
		type: { type: String, default: 'primary' },
		variant: { type: String, default: 'default' },
		target: { type: HTMLElement },
		text: { type: String }
	},
	data() {
		return {
			isVisible: false
		}
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		}
	}
})
</script>
