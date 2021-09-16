<template>
	<p>
		<si-button variant="border" @click="notify(undefined)"> normal </si-button>
		<si-button variant="border" v-for="type in types" :type="type" @click="notify(type)">
			{{ type }}
		</si-button>
	</p>
	<p style="margin-top: 1em">
		<si-button variant="border" @click="notifySquare(undefined)" square> normal </si-button>
		<si-button variant="border" v-for="type in types" :type="type" @click="notifySquare(type)" square>
			{{ type }}
		</si-button>
	</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			types: ['info', 'success', 'warning', 'danger', 'dark', 'light']
		}
	},
	methods: {
		notify(type?: string) {
			this.$notify({
				type,
				border: true,
				title: '通知 notification',
				text: `类型是${type}的通知。`
			})
		},
		notifySquare(type?: string) {
			this.$notify({
				type,
				square: true,
				border: true,
				title: '通知 notification',
				text: `类型是${type}的通知。`
			})
		}
	}
})
</script>
