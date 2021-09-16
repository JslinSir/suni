<template>
	<si-tooltip :type="type" :content="`type: ${type}`" v-for="type in types" style="margin: 0.5em">
		<si-button variant="flat" :type="type">{{ type }}</si-button>
	</si-tooltip>
	<p>
		<si-tooltip color="rgb(100,150,200)" content="rgb(100,150,200)" style="margin: 0.5em">
			<si-button variant="flat" color="rgb(100,150,200)">RGB</si-button>
		</si-tooltip>
		<si-tooltip color="hsl(281, 84%, 63%)" content="hsl(281, 84%, 63%)" style="margin: 0.5em">
			<si-button variant="flat" color="hsl(281, 84%, 63%)">HSL</si-button>
		</si-tooltip>
		<si-tooltip color="#51f0ab" content="#51f0ab" style="margin: 0.5em">
			<si-button variant="flat" color="#51f0ab">HEX</si-button>
		</si-tooltip>
	</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['primary', 'success', 'warning', 'danger', 'dark', 'light']
		}
	}
})
</script>
