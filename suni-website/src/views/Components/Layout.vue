<template>
	<div class="components-layout">
		<section class="components-menu">
			<nav>
				<div class="group-title">基础</div>
				<a
					v-for="component in components[0]"
					@click="routerTo(`/components/${component.name}`)"
					:class="{ active: $route.path === `/components/${component.name}` }"
					>{{ component.zh }} {{ component.name[0].toUpperCase() + component.name.slice(1) }}</a
				>

				<div class="group-title">辅助</div>
				<a
					v-for="component in components[1]"
					@click="routerTo(`/components/${component.name}`)"
					:class="{ active: $route.path === `/components/${component.name}` }"
					>{{ component.zh }} {{ component.name[0].toUpperCase() + component.name.slice(1) }}</a
				>

				<div class="group-title">表单</div>
				<a
					v-for="component in components[2]"
					@click="routerTo(`/components/${component.name}`)"
					:class="{ active: $route.path === `/components/${component.name}` }"
					>{{ component.zh }} {{ component.name[0].toUpperCase() + component.name.slice(1) }}</a
				>

				<div class="group-title">数据</div>
				<a
					v-for="component in components[3]"
					@click="routerTo(`/components/${component.name}`)"
					:class="{ active: $route.path === `/components/${component.name}` }"
					>{{ component.zh }} {{ component.name[0].toUpperCase() + component.name.slice(1) }}</a
				>
			</nav>
		</section>
		<section class="components-content" ref="content">
			<div class="components-content__entry" ref="entry">
				<router-view ref="component"></router-view>
			</div>

			<div class="components-content__toc">
				<h3>目录</h3>
				<ul>
					<li v-for="h2 in toc" @click="locate(h2.anchor)">
						<a>{{ h2.content }}</a>
					</li>
				</ul>
			</div>
		</section>

		<div class="components-action">
			<si-button icon circle variant="floating" type="light" @click="toTop">
				<i class="bx bx-chevron-up"></i>
			</si-button>
			<si-button icon circle variant="floating" type="light" @click="fullscreen" v-show="!isFullscreen">
				<i class="bx bx-fullscreen"></i>
			</si-button>
			<si-button icon circle variant="floating" type="light" @click="exitFullscreen" v-show="isFullscreen">
				<i class="bx bx-exit-fullscreen"></i>
			</si-button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VD, components } from '@/router'

export default defineComponent({
	name: 'ComponentLayout',
	data() {
		return {
			components,

			isFullscreen: false
		}
	},
	computed: {
		toc() {
			const name = this.$route.meta.name
			return VD[name]?.toc.filter(item => item.level === 2)
		}
	},
	methods: {
		routerTo(path) {
			this.toTop()
			this.$router.push(path)
		},
		toTop() {
			document.documentElement.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		},
		locate(anchor) {
			const h2 = (this.$refs.entry as HTMLElement).querySelector(`#${anchor}`) as HTMLElement

			if (h2) {
				document.documentElement.scrollTo({
					top: h2.offsetTop - 68,
					behavior: 'smooth'
				})
				setTimeout(() => {
					h2.classList.add('active')
					setTimeout(() => h2.classList.remove('active'), 250)
				}, 800)
			}
		},
		fullscreen() {
			document.documentElement.style.setProperty('--header-height', '0px')
			document.documentElement.style.setProperty('--aside-width', '0px')
			this.isFullscreen = true
		},
		exitFullscreen() {
			document.documentElement.style.removeProperty('--header-height')
			document.documentElement.style.removeProperty('--aside-width')
			this.isFullscreen = false
		}
	}
})
</script>

<style lang="scss">
@import '@/styles/mixin';

.components-layout {
	&::before {
		content: ' ';
		position: fixed;
		width: 30px;
		height: 30px;
		top: var(--header-height);
		left: var(--aside-width);
		transition: all 0.25s ease;
		background: radial-gradient(circle at right bottom, transparent 0, transparent 29px, var(--body-color) 30px);
		z-index: 2021;
	}
}
.components-menu {
	width: var(--aside-width);
	padding: 1em 0;
	position: fixed;
	z-index: 2020;
	left: 0;
	top: var(--header-height);
	background-color: var(--body-color);
	bottom: 0;
	transition: all 0.25s ease;
	border-bottom-right-radius: var(--body-radius);
	overflow-x: hidden;
	overflow-y: auto;

	a {
		display: block;
		opacity: 0.5;
		transition: opacity 0.3s;
		padding: 0.5em 1em;
		cursor: pointer;
		color: var(--text-color);
		text-decoration: none;
		white-space: nowrap;
		&.active,
		&:hover {
			opacity: 1;
		}
	}
	.group-title {
		white-space: nowrap;
		font-size: 12px;
		color: hsl(220, 22%, 80%);
		margin-top: 2em;
		margin-bottom: 0.5em;
		padding-left: 1.5em;
	}
}
.components-content {
	padding-top: var(--header-height);
	padding-left: var(--aside-width);
	background-color: hsla(195, 20%, 96%, 0.6);
	@include scrollBar;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	border-top-left-radius: var(--body-radius);
	transition: all 0.25s ease;
	&::before {
		background-color: hsl(206, 30%, 93%);
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: calc(12.5em + var(--header-height));
		z-index: -1;
		transition: all 0.25s ease;
	}
	.components-content__entry {
		flex: 0 1;
	}
	.components-content__toc {
		position: sticky;
		top: 8em;
		margin-top: 18em;
		font-size: 14px;
		width: 160px;

		h3 {
			margin-bottom: 0.5em;
			font-weight: normal;
			color: hsl(220, 10%, 50%);
		}
		ul {
			border-left: 1px solid hsl(0, 0%, 85%);
		}
		li {
			&:hover {
				background-color: hsl(0, 0%, 90%);
			}
		}
		a {
			cursor: pointer;
			display: inline-block;
			color: hsl(220, 10%, 50%);
			width: 100%;
			padding: 0.4em 0 0.3em;
			padding-left: 0.5em;
			overflow: hidden;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			&:active,
			&.active {
				color: hsl(var(--si-primary));
			}
		}
	}
}
.components-action {
	position: fixed;
	right: 2em;
	bottom: 1em;
}
</style>
