import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'

export default defineConfig({
	base: '/vue3-website/',
	build: {
		outDir: 'docs'
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
})
