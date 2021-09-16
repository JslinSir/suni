<template>
	<i class="arrow-icon" :class="{ active }"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SiIconArrow',
	props: {
		active: Boolean
	}
})
</script>

<style lang="scss">
.arrow-icon {
	display: block;
	position: relative;
	width: 7px;
	height: 7px;
	transition: all 0.25s ease;
	transform: rotate(-45deg);
	transform-origin: 1.75px 5.25px;
	pointer-events: none;
	color: hsl(var(--si-text));
	&:after {
		position: absolute;
		top: 0;
		left: 0;
		width: 1px;
		height: 100%;
		background: currentColor;
		content: '';
	}
	&:before {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		background: currentColor;
		content: '';
	}

	&.active {
		transform: rotate(135deg);
	}
}
</style>
