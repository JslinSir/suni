import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'

const baseConfig = {
	base: '/suni/',
	build: {
		outDir: '../docs'
	},

	plugins: [
		vitePluginVuedoc({
			wrapperClass: 'component-container',
			previewComponent: 'ComponentExample',
			highlight: {
				theme: 'atom-one-light'
			}
		}),
		vue({ include: [...vueDocFiles] })
	],

	resolve: {
		alias: { '@': path.resolve(__dirname, './src') }
	},

	server: {
		port: 8868
	}
}

export default defineConfig(({ mode }) => {
	if (mode === 'development') {
		baseConfig.resolve.alias = Object.assign(baseConfig.resolve.alias, {
			'suni-ui': path.resolve(__dirname, '../suni-ui')
		})
	}

	return baseConfig
})
