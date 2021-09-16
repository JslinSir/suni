<template>
	<div
		class="si-avatar"
		:style="siColor"
		:class="{
			[`si-button--${type}`]: type,
			color: type || color,

			circle,
			square,

			loading
		}"
	>
		<figure class="si-avatar__figure" v-if="src">
			<img class="si-avatar__img" :src="src" />
		</figure>
		<div class="si-avatar__default" v-else-if="$slots.default">
			<slot></slot>
		</div>
		<div class="si-avatar__text" v-else-if="text">
			{{ text }}
		</div>

		<div v-if="loading" class="si-avatar__loading"></div>

		<div
			class="si-avatar__badge"
			v-if="badge"
			:class="{ [`si-avatar__badge--${badgeType}`]: badgeType, [`si-avatar__badge--${badgePosition}`]: badgePosition }"
			:style="siBadgeColor"
		>
			<div class="si-avatar__badge__slot" v-if="$slots.badge">
				<slot name="badge"></slot>
			</div>
			<div class="si-avatar__badge__point" v-else></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	name: 'SiAvatar',
	props: {
		color: { type: String },
		type: { type: String },

		src: { type: String },
		text: { type: String },

		badge: { type: Boolean },
		badgeType: { type: String, default: 'primary' },
		badgeColor: { type: String },
		badgePosition: { type: String, default: 'top-right' },

		circle: { type: Boolean },
		square: { type: Boolean },

		loading: { type: Boolean }
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},
		siBadgeColor() {
			if (this.badgeColor && isColor(this.badgeColor)) return `--si-color: ${getColor(this.badgeColor)}`
			else return ''
		}
	}
})
</script>
