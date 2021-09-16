import postcss from 'rollup-plugin-postcss'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
	input: './src/index.ts',
	output: {
		file: './lib/suni-ui.js',
		format: 'es'
	},
	plugins: [
		nodeResolve(),
		vuePlugin(),
		postcss({
			extract: true
		}),
		commonjs(),
		esbuild()
	],
	external(id) {
		return /^vue/.test(id)
	}
}
