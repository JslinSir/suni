import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout.vue'
import { reactive } from 'vue'

// collect $vd for toc
export let VD: { [componentName: string]: { matter: any; toc: any[] } } = reactive({})

export const components = [
	// base
	[
		{
			name: 'button',
			componentHanlde: () => import('@/views/Components/Button/index.md'),
			zh: '按钮'
		}
	],

	// help
	[
		{
			name: 'tooltip',
			componentHanlde: () => import('@/views/Components/Tooltip/index.md'),
			zh: '提示框'
		},
		{
			name: 'loading',
			componentHanlde: () => import('@/views/Components/Loading/index.md'),
			zh: '加载中'
		},
		{
			name: 'notification',
			componentHanlde: () => import('@/views/Components/Notification/index.md'),
			zh: '通知'
		},
		{
			name: 'dialog',
			componentHanlde: () => import('@/views/Components/Dialog/index.md'),
			zh: '对话框'
		}
	],

	// form
	[
		{
			name: 'input',
			componentHanlde: () => import('@/views/Components/Input/index.md'),
			zh: '输入框'
		},
		{
			name: 'radio',
			componentHanlde: () => import('@/views/Components/Radio/index.md'),
			zh: '单选框'
		},
		{
			name: 'checkbox',
			componentHanlde: () => import('@/views/Components/Checkbox/index.md'),
			zh: '多选框'
		},
		{
			name: 'select',
			componentHanlde: () => import('@/views/Components/Select/index.md'),
			zh: '选择框'
		},
		{
			name: 'switch',
			componentHanlde: () => import('@/views/Components/Switch/index.md'),
			zh: '开关'
		}
	],

	// data
	[
		{
			name: 'avatar',
			componentHanlde: () => import('@/views/Components/Avatar/index.md'),
			zh: '头像'
		},

		{
			name: 'pagination',
			componentHanlde: () => import('@/views/Components/Pagination/index.md'),
			zh: '分页'
		},
		{
			name: 'card',
			componentHanlde: () => import('@/views/Components/Card/index.md'),
			zh: '卡片'
		}
	]
]

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '',
				component: () => import('@/views/Home/index.vue'),
				meta: { title: '首页' }
			},
			{
				path: '/components',
				component: () => import('@/views/Components/Layout.vue'),
				meta: { title: '组件' },
				redirect: '/components/button',
				children: components.flat().map(component => ({
					name: component.name[0].toUpperCase() + component.name.slice(1),
					path: component.name,
					component: async () => {
						const Component = await component.componentHanlde()
						VD[component.name] = Component.default.$vd
						return Component
					},
					meta: { title: component.zh, name: component.name }
				}))
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory('suni'),
	routes
})

export default router
