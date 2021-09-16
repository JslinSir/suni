<template>
	<si-radio v-model="value" value="1">
		Yen
		<template #icon>
			<i class="bx bx-yen"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="2">
		Won
		<template #icon>
			<i class="bx bx-won"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="3">
		Pound
		<template #icon>
			<i class="bx bx-pound"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="4">
		Euro
		<template #icon>
			<i class="bx bx-euro"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="5">
		Rupee
		<template #icon>
			<i class="bx bx-rupee"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="6">
		Bitcoin
		<template #icon>
			<i class="bx bx-bitcoin"></i>
		</template>
	</si-radio>
	<si-radio v-model="value" value="7">
		Dollar
		<template #icon>
			<i class="bx bx-dollar"></i>
		</template>
	</si-radio>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Radio',
	data() {
		return {
			value: '1'
		}
	}
})
</script>
