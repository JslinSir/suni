<template>
	<div class="si-pagination" :style="siColor" :class="{ [`si-pagination--${type}`]: type, disabled, circle, square }">
		<button class="si-pagination__prev" @click="prevClick" :disabled="pageCurrent === 1"></button>
		<ul class="si-pagination__pager">
			<li @click="pageClick(page)" v-for="page in pages" :class="page.class">{{ page.text }}</li>
			<li ref="active" v-show="activePage" class="si-pagination__active" :style="{ left: activePage?.left }">
				{{ activePage?.pageCurrent }}
			</li>
		</ul>
		<button class="si-pagination__next" @click="nextClick" :disabled="pageCurrent === pageNumber"></button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isColor, getColor } from '../../util/index'

export default defineComponent({
	name: 'SiPagination',
	props: {
		color: { type: String },
		type: { type: String, default: 'primary' },
		disabled: { type: Boolean },
		circle: { type: Boolean },
		square: { type: Boolean },

		total: { type: Number, default: 0 },
		pageCount: { type: Number, default: 7 },
		current: { type: Number },
		pageSize: { type: Number }
	},
	data() {
		return {
			_current: 1,
			_pageSize: 10
		}
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},
		pageCurrent: {
			get(): number {
				if (typeof this.current === 'number') return this.current
				return this._current
			},
			set(value: number) {
				this._current = value
				this.$emit('update:current', value)
				this.$emit('current-change', value)
			}
		},
		pageSizeProxy: {
			get() {
				if (typeof this.pageSize === 'number') return this.pageSize
				return this._pageSize
			},
			set(value: number) {
				this._pageSize = value
				this.$emit('update:pageSize', value)
				this.$emit('size-change', value)
			}
		},
		pageNumber() {
			let pageNumber = Math.ceil(this.total / this.pageSizeProxy)
			pageNumber <= 0 && (pageNumber = 1)
			return pageNumber
		},
		pages() {
			const pageArr = []
			if (this.pageNumber < this.pageCount) {
				for (let i = 1; i <= this.pageNumber; i++) pageArr.push({ text: i, class: 'number' })
			} else {
				const boundary = this.pageCount - 2

				if (this.pageCurrent < boundary) {
					for (let i = 1; i <= this.pageCount - 1; i++) pageArr.push({ text: i, class: 'number' })
					pageArr.push({ text: '', class: 'ellipsis next', action: 'next' })
					pageArr.push({ text: this.pageNumber, class: 'number' })
				} else if (this.pageCurrent >= boundary && this.pageCurrent <= this.pageNumber - boundary) {
					const centralCount = this.pageCount - 2
					const centralLeft = this.pageCurrent - Math.floor(centralCount / 2)

					pageArr.push({ text: 1, class: 'number' })
					pageArr.push({ text: '', class: 'ellipsis prev', action: 'prev' })
					for (let i = centralLeft; i < centralLeft + centralCount; i++) pageArr.push({ text: i, class: 'number' })
					pageArr.push({ text: '', class: 'ellipsis next', action: 'next' })
					pageArr.push({ text: this.pageNumber, class: 'number' })
				} else if (this.pageCurrent > this.pageNumber - boundary) {
					pageArr.push({ text: 1, class: 'number' })
					pageArr.push({ text: '', class: 'ellipsis prev', action: 'prev' })
					for (let i = this.pageNumber - this.pageCount + 2; i <= this.pageNumber; i++)
						pageArr.push({ text: i, class: 'number' })
				}
			}

			return pageArr
		},
		activePage() {
			const index = this.pages.findIndex(item => String(item.text) === String(this.pageCurrent))
			if (index > -1) {
				const left = 40 * index + 2
				return {
					left: `${left}px`,
					pageCurrent: this.pageCurrent
				}
			}
		}
	},
	methods: {
		pageClick(page: any) {
			if (typeof page.text === 'number') this.pageCurrent = page.text
			else if (typeof page.text === 'string') {
				if (page.action === 'next') {
					this.pageCurrent = this.pageCurrent + (this.pageCount - 2)
					this.pageCurrent > this.pageNumber && (this.pageCurrent = this.pageNumber)
				} else if (page.action === 'prev') {
					this.pageCurrent = this.pageCurrent - (this.pageCount - 2)
					this.pageCurrent < 1 && (this.pageCurrent = 1)
				}
			}
			;(this.$refs.active as HTMLElement).classList.add('move')
			setTimeout(() => (this.$refs.active as HTMLElement).classList.remove('move'), 250)
		},
		prevClick() {
			if (this.pageCurrent === 1) return
			this.pageCurrent--
		},
		nextClick() {
			if (this.pageCurrent === this.pageNumber) return
			this.pageCurrent++
		}
	}
})
</script>
