---
title: Switch
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」

## Default

绑定 v-model 到一个 Boolean 类型的变量

可以使用 `active-value` 属性与 `inactive-value` 属性来设置开关的值

```vue demo src="./default.vue"

```

## Type & Color

设置 `type`、`color` 属性来改变 Switch 的颜色（`color`属性覆盖`type`属性）

`type`: primary | warning | success | danger | light | dark

`color`: hsl | rgb | hex

```vue demo src="./type.vue"

```

## Text

可以添加默认插槽，还可以添加 `#on`、`#off` 插槽

```vue demo src="./text.vue"

```

## Icon

添加 `icon` 属性调整 Switch 的样式

```vue demo src="./icon.vue"

```

## Disabled & Loading

添加 `disabled` / `loading` 属性来切换 Switch 的状态

```vue demo src="./disabled.vue"

```

## Indeterminate

添加 `indeterminate` 属性改变 Switch 的形态

```vue demo src="./indeterminate.vue"

```

## Square

添加 `square` 属性改变 Switch 的形状

```vue demo src="./square.vue"

```
