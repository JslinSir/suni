---
title: Checkbox
---

# Checkbox 多选框

一组备选项中进行多选

## Default

绑定 v-model 到一个 Boolean 类型的变量

可以使用 `true-value` 属性与 `false-value` 属性来设置开关的值

```vue demo src="./default.vue"

```

## Type & Color

设置 `type`、`color` 属性来改变 Checkbox 的颜色（`color`属性覆盖`type`属性）

`type`: primary | warning | success | danger | light | dark

`color`: hsl | rgb | hex

```vue demo src="./type.vue"

```

## Indeterminate & LineThrough

设置 `indeterminate`、`lineThrough` 属性来改变 Checkbox 的形态

```vue demo src="./indeterminate.vue"

```

## Icon

可以添加 `#icon` 插槽

```vue demo src="./icon.vue"

```

## Disabled & Loading

添加 `disabled` / `loading` 属性来切换 Checkbox 的状态

```vue demo src="./disabled.vue"

```

## Group

```vue demo src="./group.vue"

```
