<template>
	<div
		v-bind="$attrs"
		ref="select"
		class="si-select"
		:style="siColor"
		:class="{
			[`si-select--${type}`]: type,
			[position]: position,

			state,
			active,
			disabled,
			loading
		}"
	>
		<input
			class="si-select__input"
			ref="input"
			@input="filterInput"
			:value="filter && active ? filterText : selectedValue"
			:disabled="disabled || loading"
			:readonly="!filter"
			:placeholder="placeholder"
		/>

		<span class="si-select__suffix">
			<arrow-icon v-if="!loading" :active="active" />
		</span>
	</div>

	<teleport to="body">
		<transition name="si-options">
			<div
				ref="options"
				v-show="active"
				:style="[siColor, positionStyle]"
				class="si-options"
				:class="{ [`si-select--${type}`]: type, [position]: position }"
			>
				<slot v-if="$slots.default"></slot>
				<div v-else class="si-options__no-data">No data available</div>
			</div>
		</transition>
	</teleport>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isColor, getColor, throttle } from '../../util/index'
import ArrowIcon from '../../icons/arrow.vue'
import getSelectPosition from './util'

export default defineComponent({
	name: 'SiSelect',
	components: { ArrowIcon },
	emits: ['update:modelValue', 'select'],
	provide() {
		return {
			Select: computed(() => ({
				name: 'SiSelect',
				optionsArray: this.optionsArray,
				options: this.options,
				selectValue: this.selectValue,
				modelValue: this.modelValue,
				select: this.select,
				filter: this.filter,
				filterText: this.filterText
			}))
		}
	},
	props: {
		modelValue: [String, Number, Array],
		placeholder: String,

		color: { type: String },
		type: { type: String, default: 'primary' },
		state: Boolean,
		disabled: Boolean,
		loading: Boolean,
		filter: Boolean
	},
	data() {
		return {
			active: false,
			isFocus: false,
			positionStyle: {},
			position: '',

			optionsArray: [],
			selectIndex: -1,

			filterText: ''
		}
	},
	computed: {
		siColor() {
			if (this.color && isColor(this.color)) return `--si-color: ${getColor(this.color)}`
			else return ''
		},

		options() {
			if (Array.isArray(this.optionsArray)) {
				if (this.filter && this.filterText)
					return this.optionsArray.filter(item =>
						(item as any).label.toLowerCase().includes(this.filterText.toLowerCase())
					)
				return this.optionsArray
			}
			return []
		},

		selectOption(): any {
			if (typeof this.selectIndex === 'number' && this.selectIndex < this.options.length && this.selectIndex > -1)
				return this.options[this.selectIndex]
		},
		selectValue() {
			if (this.selectOption) return this.selectOption.value
		},
		selectOffsetBottom() {
			if (this.selectOption) {
				const option = this.selectOption.el as HTMLElement
				const { y: optionY, height: optionH } = option.getBoundingClientRect()
				const options = this.$refs.options as HTMLElement
				const { y: optionsY, height: optionsH } = options.getBoundingClientRect()
				return optionsY + optionsH - (optionY + optionH)
			}
		},
		selectOffsetTop() {
			if (this.selectOption) {
				const option = this.selectOption.el as HTMLElement
				const { y: optionY } = option.getBoundingClientRect()
				const options = this.$refs.options as HTMLElement
				const { y: optionsY } = options.getBoundingClientRect()
				return optionY - optionsY
			}
		},

		selectedOption() {
			const options = this.options as any[]
			return options.find(item => item.value === this.modelValue)
		},
		selectedValue() {
			if (this.selectedOption) return this.selectedOption.label
			else return this.modelValue
		}
	},
	methods: {
		// base control
		getPosition() {
			const selectPosition = getSelectPosition(this.$refs.select as HTMLElement)
			this.positionStyle = selectPosition[0]
			this.position = selectPosition[1]
		},
		activeHandle(e?: Event) {
			this.getPosition()
			this.active = true
			window.removeEventListener('keydown', this.focusKeydown)
			;(this.$refs.select as HTMLElement).removeEventListener('click', this.activeHandle)
			;(this.$refs.select as HTMLElement).addEventListener('click', this.inactiveHandle)
			document.body.addEventListener('click', this.bodyClick)
			window.addEventListener('resize', this.getPosition)
			window.addEventListener('scroll', this.getPosition, true)
			window.addEventListener('keydown', this.activeKeydown)
		},
		inactiveHandle(e?: Event) {
			this.active = false
			this.selectIndex = -1
			this.filterText = ''
			;(this.$refs.input as HTMLElement).blur()
			if (this.isFocus) window.addEventListener('keydown', this.focusKeydown)
			;(this.$refs.select as HTMLElement).removeEventListener('click', this.inactiveHandle)
			document.body.removeEventListener('click', this.bodyClick)
			window.removeEventListener('resize', this.getPosition)
			window.removeEventListener('scroll', this.getPosition, true)
			window.removeEventListener('keydown', this.activeKeydown)
			;(this.$refs.select as HTMLElement).addEventListener('click', this.activeHandle)
		},

		// event
		activeKeydown(e: KeyboardEvent) {
			if (e.key === 'ArrowDown') {
				e.preventDefault()
				this.selectNext()
			} else if (e.key === 'ArrowUp') {
				e.preventDefault()
				this.selectPrev()
			} else if (e.key === 'Enter') {
				e.preventDefault()
				this.select(this.selectValue)
			} else if (e.key === 'Escape') {
				this.inactiveHandle()
			}
		},
		focusKeydown(e: KeyboardEvent) {
			if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
				e.preventDefault()
				this.selectIndex = 0
				this.activeHandle()
			}
		},
		bodyClick(e: MouseEvent) {
			if (
				!e.composedPath().includes(this.$refs.select as HTMLElement) &&
				!e.composedPath().includes(this.$refs.options as HTMLElement)
			) {
				this.inactiveHandle()
			}
		},
		focus() {
			this.isFocus = true
			window.addEventListener('keydown', this.focusKeydown)
		},
		blur() {
			this.isFocus = false
			window.removeEventListener('keydown', this.focusKeydown)
			;(this.$refs.input as HTMLElement).addEventListener('focus', this.focus)
		},

		// select control
		selectNext(): void {
			if (this.selectIndex < 0) this.selectIndex = 0
			else if (this.selectIndex < this.options.length - 1) this.selectIndex++
			else this.selectIndex = 0

			if ((this.optionsArray[this.selectIndex] as any).disabled) return this.selectNext()

			this.align()
		},
		selectPrev(): void {
			if (this.selectIndex < 1) this.selectIndex = this.options.length - 1
			else if (this.selectIndex < this.options.length) this.selectIndex--
			else this.selectIndex = this.options.length - 1

			if ((this.optionsArray[this.selectIndex] as any).disabled) return this.selectPrev()

			this.align()
		},
		select(value: number | string) {
			this.$emit('update:modelValue', value)
			this.$emit('select', value)
			this.inactiveHandle()
		},
		align() {
			if (this.selectOffsetBottom && this.selectOffsetBottom < 0) {
				;(this.$refs.options as HTMLElement).scrollBy({ top: -this.selectOffsetBottom + 5, behavior: 'smooth' })
			} else if (this.selectOffsetTop && this.selectOffsetTop < 0) {
				;(this.$refs.options as HTMLElement).scrollBy({ top: this.selectOffsetTop - 5, behavior: 'smooth' })
			}
		},

		// filter
		filterInput(e: Event) {
			this.filterText = (e as any).target.value
		}
	},
	created() {
		this.selectNext = throttle(this.selectNext, 80)
		this.selectPrev = throttle(this.selectPrev, 80)
	},
	mounted() {
		;(this.$refs.input as HTMLElement).addEventListener('focus', this.focus)
		;(this.$refs.input as HTMLElement).addEventListener('blur', this.blur)
		;(this.$refs.select as HTMLElement).addEventListener('click', this.activeHandle)
	},
	destroyed() {
		;(this.$refs.input as HTMLElement).removeEventListener('focus', this.focus)
		;(this.$refs.select as HTMLElement).removeEventListener('click', this.activeHandle)
		;(this.$refs.select as HTMLElement).removeEventListener('click', this.inactiveHandle)
		document.body.removeEventListener('click', this.bodyClick)
		window.removeEventListener('resize', this.getPosition)
		window.removeEventListener('scroll', this.getPosition, true)
		window.removeEventListener('keydown', this.activeKeydown)
		window.removeEventListener('keydown', this.focusKeydown)
	}
})
</script>
