<template>
	<div class="si-card" :class="`type-${type}`">
		<div class="si-card__img" v-if="$slots.img">
			<slot name="img"></slot>

			<div class="si-card__interactions" v-if="$slots.interactions">
				<slot name="interactions"></slot>
			</div>
		</div>

		<div class="si-card__text" v-if="$slots.text">
			<div class="si-card__title" v-if="$slots.title">
				<slot name="title"></slot>
			</div>

			<slot name="text"></slot>
		</div>

		<div class="si-card__buttons" v-if="$slots.buttons">
			<slot name="buttons"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'SiCard',
	props: {
		type: { type: String, default: '1' }
	}
})
</script>
