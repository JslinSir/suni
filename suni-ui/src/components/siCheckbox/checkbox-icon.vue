<template>
	<i class="checkbox-icon" :class="{ indeterminate, checked }">
		<div class="rect">
			<div class="line1"></div>
			<div class="line2"></div>
		</div>
	</i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'CheckboxIcon',
	props: {
		indeterminate: Boolean,
		checked: Boolean
	}
})
</script>

<style lang="scss">
.checkbox-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 23px;
	height: 23px;
	border-radius: inherit;
	transition: all 0.25s ease;
	.rect {
		position: relative;
		display: block;
		width: 8px;
		height: 13px;
		transform: rotate(45deg) translate(-10%, -8%);
		.line1 {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 2px;
			border-radius: 5px 0 0 5px;
			background: #ffffff;
			transition: all 0.1s ease 0.15s;
		}
		.line2 {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 2px;
			height: 0;
			border-radius: 5px 5px 0 0;
			background: #ffffff;
			transition: all 0.15s ease;
		}
	}

	&.indeterminate {
		.rect {
			width: 0;
			height: 2px;
			transform: none;
			background: #ffffff;
			transition: all 0.2s ease;
			.line1 {
				display: none;
			}
			.line2 {
				display: none;
			}
		}
	}
	&.checked {
		.line1 {
			width: 100%;
			transition: all 0.25s ease 0.1s;
		}
		.line2 {
			height: 100%;
			transition: all 0.2s ease 0.3s;
		}
		&.indeterminate {
			.rect {
				width: 10px;
				transition: all 0.2s ease 0.2s;
			}
		}
	}
}
</style>
