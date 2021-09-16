<template>
	<div class="si-select__option-group" :class="{ hiddenOptionGroup }">
		<h5><slot name="title"></slot></h5>
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SiOptionGroup',
	props: {
		hiddenOptionGroup: Boolean
	}
})
</script>
