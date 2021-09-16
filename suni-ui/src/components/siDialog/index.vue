<template>
	<transition name="si-dialog">
		<div class="si-dialog-modal" :class="{ blur }" v-show="modelValue" @click="modalClick">
			<div
				v-bind="$attrs"
				class="si-dialog"
				:class="{
					header: $slots.header,
					footer: $slots.header,

					loading,
					square,
					rebound
				}"
				@click.stop
			>
				<div class="si-dialog__header" v-if="$slots.header">
					<slot name="header"></slot>
				</div>
				<div class="si-dialog__content">
					<slot></slot>
				</div>
				<div class="si-dialog__footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>

				<div class="si-dialog__loading" v-if="loading">
					<div class="si-dialog__loading__load"></div>
				</div>

				<button class="si-dialog__close" v-if="!notClose" @click="close">
					<close-icon></close-icon>
				</button>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CloseIcon from '../../icons/close.vue'

export default defineComponent({
	name: 'SiDialog',
	components: { CloseIcon },
	inheritAttrs: false,
	props: {
		modelValue: Boolean,

		loading: Boolean,
		notClose: Boolean,
		blur: Boolean,

		square: Boolean,
		preventClose: Boolean
	},
	emits: ['update:modelValue'],
	data() {
		return {
			rebound: false
		}
	},
	watch: {
		modelValue(value) {
			if (value) {
				window.addEventListener('keydown', this.keydown)
			} else {
				window.removeEventListener('keydown', this.keydown)
			}
		}
	},
	methods: {
		close() {
			this.$emit('update:modelValue', false)
		},
		modalClick() {
			if (!this.preventClose) this.close()
			else this.reboundHandle()
		},
		reboundHandle() {
			this.rebound = true
			setTimeout(() => (this.rebound = false), 300)
		},
		keydown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				e.preventDefault()
				this.modalClick()
			}
		}
	},
	destroyed() {
		window.removeEventListener('keydown', this.keydown)
	}
})
</script>
