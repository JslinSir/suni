<template>
	<si-switch v-model="active" style="margin: 0.5em">
		<template #off>
			<i class="bx bxs-volume-mute"></i>
		</template>
		<template #on>
			<i class="bx bxs-volume-full"></i>
		</template>
	</si-switch>
	<si-switch v-model="active" style="margin: 0.5em" type="danger">
		<i class="bx bxs-microphone"></i>
	</si-switch>
	<si-switch v-model="active" style="margin: 0.5em" type="success">
		<template #off>
			<i class="bx bx-x"></i>
		</template>
		<template #on>
			<i class="bx bx-check"></i>
		</template>
	</si-switch>
	<si-switch v-model="active" style="margin: 0.5em" type="warning">
		<template #off>
			<i class="bx bxs-plane-alt"></i>
		</template>
		<template #on> Active </template>
	</si-switch>
	<si-switch v-model="active" style="margin: 0.5em" type="dark">
		<template #circle>
			<i v-if="!active" class="bx bxs-moon"></i>
			<i v-else class="bx bxs-sun"></i>
		</template>
	</si-switch>
	<si-switch color="#7d33ff" icon v-model="active" style="margin: 0.5em">
		<template #circle>
			<i v-if="active" class="bx bxl-instagram-alt"></i>
			<i v-else class="bx bxl-instagram"></i>
		</template>
	</si-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			active: false
		}
	}
})
</script>
