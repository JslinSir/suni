<template>
	<div class="component-example">
		<div class="component__content">
			<slot></slot>
		</div>
		<div class="component__code" ref="code" :style="codeStyle">
			<slot name="code"></slot>
		</div>

		<div class="component__action">
			<si-button :active="showCode" @click="showCode = !showCode" type="dark" variant="text" size="mini" icon
				><i class="bx bx-code"></i
			></si-button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ComponentExample',
	data() {
		return {
			showCode: false,
			codeHeight: 0
		}
	},
	computed: {
		codeStyle() {
			if (this.showCode) return `height: ${this.codeHeight}px`
			else return `height: ${0}px`
		}
	},
	mounted() {
		const codeElement = this.$refs.code as HTMLElement
		this.codeHeight = codeElement.scrollHeight
	}
})
</script>

<style lang="scss" scoped>
.component-example {
	background-color: white;

	margin-top: 1em;
	border-radius: 0.5em;
	text-align: center;
	.component__content {
		padding: 4em 2em;
		padding-bottom: 2.5em;
	}
	.component__code {
		font-size: 13px;
		text-align: left;
		overflow: hidden;
		transition: all 0.25s ease;
		line-height: 1.3;
		:deep(.hljs) {
			margin: 0;
			padding: 2em;
			box-shadow: inset 0 0 5px hsla(0, 0%, 0%, 0.1);
			border: 1px solid hsl(0, 0%, 90%);
			margin: 0 1em;

			&::-webkit-scrollbar {
				height: 0;
			}
		}

		:deep(code, kbd, samp) {
			font-family: Fira Mono, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
			tab-size: 2;
		}
	}
	.component__action {
		padding: 0.2em;
	}
}
</style>
