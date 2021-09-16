<template>
	<transition
		name="si-notification"
		@enter="enter"
		@beforeLeave="beforeLeave"
		@afterLeave="afterLeave"
		@afterEnter="afterEnter"
	>
		<div
			v-show="visible"
			:style="siColor"
			class="si-notification"
			:class="{
				[`si-notification--${type}`]: type,
				icon: iconClass,
				border,
				square,
				loading
			}"
		>
			<div v-if="iconClass && !loading" class="si-notification__icon"><i :class="iconClass"></i></div>

			<div v-if="!loading" class="si-notification__content">
				<header class="si-notification__content__header">
					<h4>{{ title }}</h4>
				</header>
				<div class="si-notification__content__text">
					<p>{{ text }}</p>
				</div>
			</div>
			<div v-else class="si-notification__loading"></div>

			<button @click="close" class="si-notification__close">
				<close-icon></close-icon>
			</button>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CloseIcon from '../../icons/close.vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	components: { CloseIcon },
	props: {
		// HTMLElement
		parent: { type: HTMLElement, required: true },
		container: { type: HTMLElement, required: true },

		// core
		title: String,
		text: String,
		closeButton: { type: Boolean, default: true },
		duration: { type: Number, default: 4000 },

		// features
		color: { type: String },
		type: { type: String },
		iconClass: { type: String },

		square: Boolean,
		border: Boolean
	},
	data() {
		return {
			visible: false,
			closeTimer: null,
			loading: false
		}
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		}
	},
	methods: {
		close() {
			this.visible = false
		},

		//transition
		enter(el: Element) {
			const h = (el as HTMLElement).scrollHeight
			;(el as HTMLElement).style.maxHeight = `${h + 40}px`
		},
		afterEnter() {
			if (this.duration > 0) {
				this.closeTimer = setTimeout(() => {
					this.visible = false
				}, this.duration) as any
			}
		},
		beforeLeave() {
			this.closeTimer && clearTimeout(this.closeTimer as any)
		},
		afterLeave() {
			const parent = this.parent as HTMLElement

			if (parent.childNodes.length === 1) {
				document.body.removeChild(parent)
			} else {
				parent.removeChild(this.container)
			}
		}
	}
})
</script>
