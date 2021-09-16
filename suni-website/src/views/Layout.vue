<template>
	<div id="layout">
		<header>
			<div class="header-inner">
				<div class="logo">
					<span>SUNI</span>
				</div>
				<ul class="nav">
					<li><router-link to="/" :class="{ active: $route.path === '/' }">首页</router-link></li>
					<li>
						<router-link to="/components" :class="{ active: $route.path.startsWith('/components') }">组件</router-link>
					</li>
				</ul>
			</div>
		</header>
		<main>
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
	</div>
</template>

<style lang="scss" scoped>
header {
	height: var(--header-height);
	border-bottom-right-radius: var(--body-radius);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: var(--body-color);
	z-index: 2021;
	overflow: hidden;
	transition: all 0.25s ease;
	.header-inner {
		padding: 1em;
		display: flex;
	}
	.logo {
		display: flex;
		align-items: center;
		font-weight: bold;
		span {
			font-size: 1.25em;
		}
	}
	.nav {
		margin-left: auto;
		display: flex;
		li {
			padding: 0.5em 1em;
		}
		a {
			color: var(--text-color);
			opacity: 0.5;
			transition: opacity 0.3s;
			font-weight: bold;
			&:active,
			&:hover,
			&.active {
				opacity: 1;
			}
		}
	}
}
</style>
