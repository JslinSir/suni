<template>
	<i class="close-icon"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SiIconClose'
})
</script>

<style lang="scss">
.close-icon {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	transition: all 0.25s ease;
	&:before {
		position: absolute;
		width: 16px;
		height: 2px;
		border-radius: 2px;
		background: hsl(var(--si-color));
		content: '';
		transition: all 0.3s ease;
		transform: rotate(-45deg);
	}
	&:after {
		position: absolute;
		width: 16px;
		height: 2px;
		border-radius: 2px;
		background: hsl(var(--si-color));
		content: '';
		transition: all 0.3s ease;
		transform: rotate(45deg);
	}
	&:hover {
		&:after {
			width: 12px;
			transform: rotate(180deg);
		}
		&:before {
			width: 12px;
			transform: rotate(180deg);
		}
	}
}
</style>
