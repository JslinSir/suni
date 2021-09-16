<template>
	<si-input placeholder="prefix" style="margin: 0.5em">
		<template #prefix>
			<i class="bx bx-lock-open-alt"></i>
		</template>
	</si-input>
	<si-input placeholder="suffix" style="margin: 0.5em">
		<template #suffix>
			<i class="bx bx-user"></i>
		</template>
	</si-input>
	<si-input placeholder="suffix" style="margin: 0.5em">
		<template #prefix>
			<i class="bx bx-lock-open-alt"></i>
		</template>
		<template #suffix> <i class="bx bx-user"></i> </template
	></si-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			value: ''
		}
	}
})
</script>
